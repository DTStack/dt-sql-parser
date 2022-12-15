// Generated from /Users/salvo/dt-sql-parser2/src/grammar/pgsql/PostgreSQLParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by PostgreSQLParser.
function PostgreSQLParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

PostgreSQLParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
PostgreSQLParserListener.prototype.constructor = PostgreSQLParserListener;

// Enter a parse tree produced by PostgreSQLParser#program.
PostgreSQLParserListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#program.
PostgreSQLParserListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#plsqlroot.
PostgreSQLParserListener.prototype.enterPlsqlroot = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#plsqlroot.
PostgreSQLParserListener.prototype.exitPlsqlroot = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#stmtblock.
PostgreSQLParserListener.prototype.enterStmtblock = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#stmtblock.
PostgreSQLParserListener.prototype.exitStmtblock = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#stmtmulti.
PostgreSQLParserListener.prototype.enterStmtmulti = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#stmtmulti.
PostgreSQLParserListener.prototype.exitStmtmulti = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#stmt.
PostgreSQLParserListener.prototype.enterStmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#stmt.
PostgreSQLParserListener.prototype.exitStmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#plsqlconsolecommand.
PostgreSQLParserListener.prototype.enterPlsqlconsolecommand = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#plsqlconsolecommand.
PostgreSQLParserListener.prototype.exitPlsqlconsolecommand = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#callstmt.
PostgreSQLParserListener.prototype.enterCallstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#callstmt.
PostgreSQLParserListener.prototype.exitCallstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createrolestmt.
PostgreSQLParserListener.prototype.enterCreaterolestmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createrolestmt.
PostgreSQLParserListener.prototype.exitCreaterolestmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_with.
PostgreSQLParserListener.prototype.enterOpt_with = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_with.
PostgreSQLParserListener.prototype.exitOpt_with = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#optrolelist.
PostgreSQLParserListener.prototype.enterOptrolelist = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#optrolelist.
PostgreSQLParserListener.prototype.exitOptrolelist = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alteroptrolelist.
PostgreSQLParserListener.prototype.enterAlteroptrolelist = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alteroptrolelist.
PostgreSQLParserListener.prototype.exitAlteroptrolelist = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alteroptroleelem.
PostgreSQLParserListener.prototype.enterAlteroptroleelem = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alteroptroleelem.
PostgreSQLParserListener.prototype.exitAlteroptroleelem = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createoptroleelem.
PostgreSQLParserListener.prototype.enterCreateoptroleelem = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createoptroleelem.
PostgreSQLParserListener.prototype.exitCreateoptroleelem = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createuserstmt.
PostgreSQLParserListener.prototype.enterCreateuserstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createuserstmt.
PostgreSQLParserListener.prototype.exitCreateuserstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alterrolestmt.
PostgreSQLParserListener.prototype.enterAlterrolestmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alterrolestmt.
PostgreSQLParserListener.prototype.exitAlterrolestmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_in_database.
PostgreSQLParserListener.prototype.enterOpt_in_database = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_in_database.
PostgreSQLParserListener.prototype.exitOpt_in_database = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alterrolesetstmt.
PostgreSQLParserListener.prototype.enterAlterrolesetstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alterrolesetstmt.
PostgreSQLParserListener.prototype.exitAlterrolesetstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#droprolestmt.
PostgreSQLParserListener.prototype.enterDroprolestmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#droprolestmt.
PostgreSQLParserListener.prototype.exitDroprolestmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#creategroupstmt.
PostgreSQLParserListener.prototype.enterCreategroupstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#creategroupstmt.
PostgreSQLParserListener.prototype.exitCreategroupstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#altergroupstmt.
PostgreSQLParserListener.prototype.enterAltergroupstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#altergroupstmt.
PostgreSQLParserListener.prototype.exitAltergroupstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#add_drop.
PostgreSQLParserListener.prototype.enterAdd_drop = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#add_drop.
PostgreSQLParserListener.prototype.exitAdd_drop = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createschemastmt.
PostgreSQLParserListener.prototype.enterCreateschemastmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createschemastmt.
PostgreSQLParserListener.prototype.exitCreateschemastmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#optschemaname.
PostgreSQLParserListener.prototype.enterOptschemaname = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#optschemaname.
PostgreSQLParserListener.prototype.exitOptschemaname = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#optschemaeltlist.
PostgreSQLParserListener.prototype.enterOptschemaeltlist = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#optschemaeltlist.
PostgreSQLParserListener.prototype.exitOptschemaeltlist = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#schema_stmt.
PostgreSQLParserListener.prototype.enterSchema_stmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#schema_stmt.
PostgreSQLParserListener.prototype.exitSchema_stmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#variablesetstmt.
PostgreSQLParserListener.prototype.enterVariablesetstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#variablesetstmt.
PostgreSQLParserListener.prototype.exitVariablesetstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#set_rest.
PostgreSQLParserListener.prototype.enterSet_rest = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#set_rest.
PostgreSQLParserListener.prototype.exitSet_rest = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#generic_set.
PostgreSQLParserListener.prototype.enterGeneric_set = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#generic_set.
PostgreSQLParserListener.prototype.exitGeneric_set = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#set_rest_more.
PostgreSQLParserListener.prototype.enterSet_rest_more = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#set_rest_more.
PostgreSQLParserListener.prototype.exitSet_rest_more = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#var_name.
PostgreSQLParserListener.prototype.enterVar_name = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#var_name.
PostgreSQLParserListener.prototype.exitVar_name = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#var_list.
PostgreSQLParserListener.prototype.enterVar_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#var_list.
PostgreSQLParserListener.prototype.exitVar_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#var_value.
PostgreSQLParserListener.prototype.enterVar_value = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#var_value.
PostgreSQLParserListener.prototype.exitVar_value = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#iso_level.
PostgreSQLParserListener.prototype.enterIso_level = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#iso_level.
PostgreSQLParserListener.prototype.exitIso_level = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_boolean_or_string.
PostgreSQLParserListener.prototype.enterOpt_boolean_or_string = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_boolean_or_string.
PostgreSQLParserListener.prototype.exitOpt_boolean_or_string = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#zone_value.
PostgreSQLParserListener.prototype.enterZone_value = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#zone_value.
PostgreSQLParserListener.prototype.exitZone_value = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_encoding.
PostgreSQLParserListener.prototype.enterOpt_encoding = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_encoding.
PostgreSQLParserListener.prototype.exitOpt_encoding = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#nonreservedword_or_sconst.
PostgreSQLParserListener.prototype.enterNonreservedword_or_sconst = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#nonreservedword_or_sconst.
PostgreSQLParserListener.prototype.exitNonreservedword_or_sconst = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#variableresetstmt.
PostgreSQLParserListener.prototype.enterVariableresetstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#variableresetstmt.
PostgreSQLParserListener.prototype.exitVariableresetstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#reset_rest.
PostgreSQLParserListener.prototype.enterReset_rest = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#reset_rest.
PostgreSQLParserListener.prototype.exitReset_rest = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#generic_reset.
PostgreSQLParserListener.prototype.enterGeneric_reset = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#generic_reset.
PostgreSQLParserListener.prototype.exitGeneric_reset = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#setresetclause.
PostgreSQLParserListener.prototype.enterSetresetclause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#setresetclause.
PostgreSQLParserListener.prototype.exitSetresetclause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#functionsetresetclause.
PostgreSQLParserListener.prototype.enterFunctionsetresetclause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#functionsetresetclause.
PostgreSQLParserListener.prototype.exitFunctionsetresetclause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#variableshowstmt.
PostgreSQLParserListener.prototype.enterVariableshowstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#variableshowstmt.
PostgreSQLParserListener.prototype.exitVariableshowstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#constraintssetstmt.
PostgreSQLParserListener.prototype.enterConstraintssetstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#constraintssetstmt.
PostgreSQLParserListener.prototype.exitConstraintssetstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#constraints_set_list.
PostgreSQLParserListener.prototype.enterConstraints_set_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#constraints_set_list.
PostgreSQLParserListener.prototype.exitConstraints_set_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#constraints_set_mode.
PostgreSQLParserListener.prototype.enterConstraints_set_mode = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#constraints_set_mode.
PostgreSQLParserListener.prototype.exitConstraints_set_mode = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#checkpointstmt.
PostgreSQLParserListener.prototype.enterCheckpointstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#checkpointstmt.
PostgreSQLParserListener.prototype.exitCheckpointstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#discardstmt.
PostgreSQLParserListener.prototype.enterDiscardstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#discardstmt.
PostgreSQLParserListener.prototype.exitDiscardstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#altertablestmt.
PostgreSQLParserListener.prototype.enterAltertablestmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#altertablestmt.
PostgreSQLParserListener.prototype.exitAltertablestmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alter_table_cmds.
PostgreSQLParserListener.prototype.enterAlter_table_cmds = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alter_table_cmds.
PostgreSQLParserListener.prototype.exitAlter_table_cmds = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#partition_cmd.
PostgreSQLParserListener.prototype.enterPartition_cmd = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#partition_cmd.
PostgreSQLParserListener.prototype.exitPartition_cmd = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#index_partition_cmd.
PostgreSQLParserListener.prototype.enterIndex_partition_cmd = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#index_partition_cmd.
PostgreSQLParserListener.prototype.exitIndex_partition_cmd = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alter_table_cmd.
PostgreSQLParserListener.prototype.enterAlter_table_cmd = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alter_table_cmd.
PostgreSQLParserListener.prototype.exitAlter_table_cmd = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alter_column_default.
PostgreSQLParserListener.prototype.enterAlter_column_default = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alter_column_default.
PostgreSQLParserListener.prototype.exitAlter_column_default = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_drop_behavior.
PostgreSQLParserListener.prototype.enterOpt_drop_behavior = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_drop_behavior.
PostgreSQLParserListener.prototype.exitOpt_drop_behavior = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_collate_clause.
PostgreSQLParserListener.prototype.enterOpt_collate_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_collate_clause.
PostgreSQLParserListener.prototype.exitOpt_collate_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alter_using.
PostgreSQLParserListener.prototype.enterAlter_using = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alter_using.
PostgreSQLParserListener.prototype.exitAlter_using = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#replica_identity.
PostgreSQLParserListener.prototype.enterReplica_identity = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#replica_identity.
PostgreSQLParserListener.prototype.exitReplica_identity = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#reloptions.
PostgreSQLParserListener.prototype.enterReloptions = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#reloptions.
PostgreSQLParserListener.prototype.exitReloptions = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_reloptions.
PostgreSQLParserListener.prototype.enterOpt_reloptions = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_reloptions.
PostgreSQLParserListener.prototype.exitOpt_reloptions = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#reloption_list.
PostgreSQLParserListener.prototype.enterReloption_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#reloption_list.
PostgreSQLParserListener.prototype.exitReloption_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#reloption_elem.
PostgreSQLParserListener.prototype.enterReloption_elem = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#reloption_elem.
PostgreSQLParserListener.prototype.exitReloption_elem = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alter_identity_column_option_list.
PostgreSQLParserListener.prototype.enterAlter_identity_column_option_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alter_identity_column_option_list.
PostgreSQLParserListener.prototype.exitAlter_identity_column_option_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alter_identity_column_option.
PostgreSQLParserListener.prototype.enterAlter_identity_column_option = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alter_identity_column_option.
PostgreSQLParserListener.prototype.exitAlter_identity_column_option = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#partitionboundspec.
PostgreSQLParserListener.prototype.enterPartitionboundspec = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#partitionboundspec.
PostgreSQLParserListener.prototype.exitPartitionboundspec = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#hash_partbound_elem.
PostgreSQLParserListener.prototype.enterHash_partbound_elem = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#hash_partbound_elem.
PostgreSQLParserListener.prototype.exitHash_partbound_elem = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#hash_partbound.
PostgreSQLParserListener.prototype.enterHash_partbound = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#hash_partbound.
PostgreSQLParserListener.prototype.exitHash_partbound = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#altercompositetypestmt.
PostgreSQLParserListener.prototype.enterAltercompositetypestmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#altercompositetypestmt.
PostgreSQLParserListener.prototype.exitAltercompositetypestmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alter_type_cmds.
PostgreSQLParserListener.prototype.enterAlter_type_cmds = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alter_type_cmds.
PostgreSQLParserListener.prototype.exitAlter_type_cmds = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alter_type_cmd.
PostgreSQLParserListener.prototype.enterAlter_type_cmd = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alter_type_cmd.
PostgreSQLParserListener.prototype.exitAlter_type_cmd = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#closeportalstmt.
PostgreSQLParserListener.prototype.enterCloseportalstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#closeportalstmt.
PostgreSQLParserListener.prototype.exitCloseportalstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#copystmt.
PostgreSQLParserListener.prototype.enterCopystmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#copystmt.
PostgreSQLParserListener.prototype.exitCopystmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#copy_from.
PostgreSQLParserListener.prototype.enterCopy_from = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#copy_from.
PostgreSQLParserListener.prototype.exitCopy_from = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_program.
PostgreSQLParserListener.prototype.enterOpt_program = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_program.
PostgreSQLParserListener.prototype.exitOpt_program = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#copy_file_name.
PostgreSQLParserListener.prototype.enterCopy_file_name = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#copy_file_name.
PostgreSQLParserListener.prototype.exitCopy_file_name = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#copy_options.
PostgreSQLParserListener.prototype.enterCopy_options = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#copy_options.
PostgreSQLParserListener.prototype.exitCopy_options = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#copy_opt_list.
PostgreSQLParserListener.prototype.enterCopy_opt_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#copy_opt_list.
PostgreSQLParserListener.prototype.exitCopy_opt_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#copy_opt_item.
PostgreSQLParserListener.prototype.enterCopy_opt_item = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#copy_opt_item.
PostgreSQLParserListener.prototype.exitCopy_opt_item = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_binary.
PostgreSQLParserListener.prototype.enterOpt_binary = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_binary.
PostgreSQLParserListener.prototype.exitOpt_binary = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#copy_delimiter.
PostgreSQLParserListener.prototype.enterCopy_delimiter = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#copy_delimiter.
PostgreSQLParserListener.prototype.exitCopy_delimiter = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_using.
PostgreSQLParserListener.prototype.enterOpt_using = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_using.
PostgreSQLParserListener.prototype.exitOpt_using = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#copy_generic_opt_list.
PostgreSQLParserListener.prototype.enterCopy_generic_opt_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#copy_generic_opt_list.
PostgreSQLParserListener.prototype.exitCopy_generic_opt_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#copy_generic_opt_elem.
PostgreSQLParserListener.prototype.enterCopy_generic_opt_elem = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#copy_generic_opt_elem.
PostgreSQLParserListener.prototype.exitCopy_generic_opt_elem = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#copy_generic_opt_arg.
PostgreSQLParserListener.prototype.enterCopy_generic_opt_arg = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#copy_generic_opt_arg.
PostgreSQLParserListener.prototype.exitCopy_generic_opt_arg = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#copy_generic_opt_arg_list.
PostgreSQLParserListener.prototype.enterCopy_generic_opt_arg_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#copy_generic_opt_arg_list.
PostgreSQLParserListener.prototype.exitCopy_generic_opt_arg_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#copy_generic_opt_arg_list_item.
PostgreSQLParserListener.prototype.enterCopy_generic_opt_arg_list_item = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#copy_generic_opt_arg_list_item.
PostgreSQLParserListener.prototype.exitCopy_generic_opt_arg_list_item = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createstmt.
PostgreSQLParserListener.prototype.enterCreatestmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createstmt.
PostgreSQLParserListener.prototype.exitCreatestmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opttemp.
PostgreSQLParserListener.prototype.enterOpttemp = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opttemp.
PostgreSQLParserListener.prototype.exitOpttemp = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opttableelementlist.
PostgreSQLParserListener.prototype.enterOpttableelementlist = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opttableelementlist.
PostgreSQLParserListener.prototype.exitOpttableelementlist = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opttypedtableelementlist.
PostgreSQLParserListener.prototype.enterOpttypedtableelementlist = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opttypedtableelementlist.
PostgreSQLParserListener.prototype.exitOpttypedtableelementlist = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#tableelementlist.
PostgreSQLParserListener.prototype.enterTableelementlist = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#tableelementlist.
PostgreSQLParserListener.prototype.exitTableelementlist = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#typedtableelementlist.
PostgreSQLParserListener.prototype.enterTypedtableelementlist = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#typedtableelementlist.
PostgreSQLParserListener.prototype.exitTypedtableelementlist = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#tableelement.
PostgreSQLParserListener.prototype.enterTableelement = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#tableelement.
PostgreSQLParserListener.prototype.exitTableelement = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#typedtableelement.
PostgreSQLParserListener.prototype.enterTypedtableelement = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#typedtableelement.
PostgreSQLParserListener.prototype.exitTypedtableelement = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#columnDef.
PostgreSQLParserListener.prototype.enterColumnDef = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#columnDef.
PostgreSQLParserListener.prototype.exitColumnDef = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#columnOptions.
PostgreSQLParserListener.prototype.enterColumnOptions = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#columnOptions.
PostgreSQLParserListener.prototype.exitColumnOptions = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#colquallist.
PostgreSQLParserListener.prototype.enterColquallist = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#colquallist.
PostgreSQLParserListener.prototype.exitColquallist = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#colconstraint.
PostgreSQLParserListener.prototype.enterColconstraint = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#colconstraint.
PostgreSQLParserListener.prototype.exitColconstraint = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#colconstraintelem.
PostgreSQLParserListener.prototype.enterColconstraintelem = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#colconstraintelem.
PostgreSQLParserListener.prototype.exitColconstraintelem = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#generated_when.
PostgreSQLParserListener.prototype.enterGenerated_when = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#generated_when.
PostgreSQLParserListener.prototype.exitGenerated_when = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#constraintattr.
PostgreSQLParserListener.prototype.enterConstraintattr = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#constraintattr.
PostgreSQLParserListener.prototype.exitConstraintattr = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#tablelikeclause.
PostgreSQLParserListener.prototype.enterTablelikeclause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#tablelikeclause.
PostgreSQLParserListener.prototype.exitTablelikeclause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#tablelikeoptionlist.
PostgreSQLParserListener.prototype.enterTablelikeoptionlist = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#tablelikeoptionlist.
PostgreSQLParserListener.prototype.exitTablelikeoptionlist = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#tablelikeoption.
PostgreSQLParserListener.prototype.enterTablelikeoption = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#tablelikeoption.
PostgreSQLParserListener.prototype.exitTablelikeoption = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#tableconstraint.
PostgreSQLParserListener.prototype.enterTableconstraint = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#tableconstraint.
PostgreSQLParserListener.prototype.exitTableconstraint = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#constraintelem.
PostgreSQLParserListener.prototype.enterConstraintelem = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#constraintelem.
PostgreSQLParserListener.prototype.exitConstraintelem = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_no_inherit.
PostgreSQLParserListener.prototype.enterOpt_no_inherit = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_no_inherit.
PostgreSQLParserListener.prototype.exitOpt_no_inherit = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_column_list.
PostgreSQLParserListener.prototype.enterOpt_column_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_column_list.
PostgreSQLParserListener.prototype.exitOpt_column_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#columnlist.
PostgreSQLParserListener.prototype.enterColumnlist = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#columnlist.
PostgreSQLParserListener.prototype.exitColumnlist = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#columnElem.
PostgreSQLParserListener.prototype.enterColumnElem = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#columnElem.
PostgreSQLParserListener.prototype.exitColumnElem = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_c_include.
PostgreSQLParserListener.prototype.enterOpt_c_include = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_c_include.
PostgreSQLParserListener.prototype.exitOpt_c_include = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#key_match.
PostgreSQLParserListener.prototype.enterKey_match = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#key_match.
PostgreSQLParserListener.prototype.exitKey_match = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#exclusionconstraintlist.
PostgreSQLParserListener.prototype.enterExclusionconstraintlist = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#exclusionconstraintlist.
PostgreSQLParserListener.prototype.exitExclusionconstraintlist = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#exclusionconstraintelem.
PostgreSQLParserListener.prototype.enterExclusionconstraintelem = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#exclusionconstraintelem.
PostgreSQLParserListener.prototype.exitExclusionconstraintelem = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#exclusionwhereclause.
PostgreSQLParserListener.prototype.enterExclusionwhereclause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#exclusionwhereclause.
PostgreSQLParserListener.prototype.exitExclusionwhereclause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#key_actions.
PostgreSQLParserListener.prototype.enterKey_actions = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#key_actions.
PostgreSQLParserListener.prototype.exitKey_actions = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#key_update.
PostgreSQLParserListener.prototype.enterKey_update = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#key_update.
PostgreSQLParserListener.prototype.exitKey_update = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#key_delete.
PostgreSQLParserListener.prototype.enterKey_delete = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#key_delete.
PostgreSQLParserListener.prototype.exitKey_delete = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#key_action.
PostgreSQLParserListener.prototype.enterKey_action = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#key_action.
PostgreSQLParserListener.prototype.exitKey_action = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#optinherit.
PostgreSQLParserListener.prototype.enterOptinherit = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#optinherit.
PostgreSQLParserListener.prototype.exitOptinherit = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#optpartitionspec.
PostgreSQLParserListener.prototype.enterOptpartitionspec = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#optpartitionspec.
PostgreSQLParserListener.prototype.exitOptpartitionspec = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#partitionspec.
PostgreSQLParserListener.prototype.enterPartitionspec = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#partitionspec.
PostgreSQLParserListener.prototype.exitPartitionspec = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#part_params.
PostgreSQLParserListener.prototype.enterPart_params = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#part_params.
PostgreSQLParserListener.prototype.exitPart_params = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#part_elem.
PostgreSQLParserListener.prototype.enterPart_elem = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#part_elem.
PostgreSQLParserListener.prototype.exitPart_elem = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#table_access_method_clause.
PostgreSQLParserListener.prototype.enterTable_access_method_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#table_access_method_clause.
PostgreSQLParserListener.prototype.exitTable_access_method_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#optwith.
PostgreSQLParserListener.prototype.enterOptwith = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#optwith.
PostgreSQLParserListener.prototype.exitOptwith = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#oncommitoption.
PostgreSQLParserListener.prototype.enterOncommitoption = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#oncommitoption.
PostgreSQLParserListener.prototype.exitOncommitoption = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opttablespace.
PostgreSQLParserListener.prototype.enterOpttablespace = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opttablespace.
PostgreSQLParserListener.prototype.exitOpttablespace = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#optconstablespace.
PostgreSQLParserListener.prototype.enterOptconstablespace = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#optconstablespace.
PostgreSQLParserListener.prototype.exitOptconstablespace = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#existingindex.
PostgreSQLParserListener.prototype.enterExistingindex = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#existingindex.
PostgreSQLParserListener.prototype.exitExistingindex = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createstatsstmt.
PostgreSQLParserListener.prototype.enterCreatestatsstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createstatsstmt.
PostgreSQLParserListener.prototype.exitCreatestatsstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alterstatsstmt.
PostgreSQLParserListener.prototype.enterAlterstatsstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alterstatsstmt.
PostgreSQLParserListener.prototype.exitAlterstatsstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createasstmt.
PostgreSQLParserListener.prototype.enterCreateasstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createasstmt.
PostgreSQLParserListener.prototype.exitCreateasstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#create_as_target.
PostgreSQLParserListener.prototype.enterCreate_as_target = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#create_as_target.
PostgreSQLParserListener.prototype.exitCreate_as_target = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_with_data.
PostgreSQLParserListener.prototype.enterOpt_with_data = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_with_data.
PostgreSQLParserListener.prototype.exitOpt_with_data = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#creatematviewstmt.
PostgreSQLParserListener.prototype.enterCreatematviewstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#creatematviewstmt.
PostgreSQLParserListener.prototype.exitCreatematviewstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#create_mv_target.
PostgreSQLParserListener.prototype.enterCreate_mv_target = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#create_mv_target.
PostgreSQLParserListener.prototype.exitCreate_mv_target = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#optnolog.
PostgreSQLParserListener.prototype.enterOptnolog = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#optnolog.
PostgreSQLParserListener.prototype.exitOptnolog = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#refreshmatviewstmt.
PostgreSQLParserListener.prototype.enterRefreshmatviewstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#refreshmatviewstmt.
PostgreSQLParserListener.prototype.exitRefreshmatviewstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createseqstmt.
PostgreSQLParserListener.prototype.enterCreateseqstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createseqstmt.
PostgreSQLParserListener.prototype.exitCreateseqstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alterseqstmt.
PostgreSQLParserListener.prototype.enterAlterseqstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alterseqstmt.
PostgreSQLParserListener.prototype.exitAlterseqstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#optseqoptlist.
PostgreSQLParserListener.prototype.enterOptseqoptlist = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#optseqoptlist.
PostgreSQLParserListener.prototype.exitOptseqoptlist = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#optparenthesizedseqoptlist.
PostgreSQLParserListener.prototype.enterOptparenthesizedseqoptlist = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#optparenthesizedseqoptlist.
PostgreSQLParserListener.prototype.exitOptparenthesizedseqoptlist = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#seqoptlist.
PostgreSQLParserListener.prototype.enterSeqoptlist = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#seqoptlist.
PostgreSQLParserListener.prototype.exitSeqoptlist = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#seqoptelem.
PostgreSQLParserListener.prototype.enterSeqoptelem = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#seqoptelem.
PostgreSQLParserListener.prototype.exitSeqoptelem = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_by.
PostgreSQLParserListener.prototype.enterOpt_by = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_by.
PostgreSQLParserListener.prototype.exitOpt_by = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#numericonly.
PostgreSQLParserListener.prototype.enterNumericonly = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#numericonly.
PostgreSQLParserListener.prototype.exitNumericonly = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#numericonly_list.
PostgreSQLParserListener.prototype.enterNumericonly_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#numericonly_list.
PostgreSQLParserListener.prototype.exitNumericonly_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createplangstmt.
PostgreSQLParserListener.prototype.enterCreateplangstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createplangstmt.
PostgreSQLParserListener.prototype.exitCreateplangstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_trusted.
PostgreSQLParserListener.prototype.enterOpt_trusted = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_trusted.
PostgreSQLParserListener.prototype.exitOpt_trusted = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#handler_name.
PostgreSQLParserListener.prototype.enterHandler_name = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#handler_name.
PostgreSQLParserListener.prototype.exitHandler_name = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_inline_handler.
PostgreSQLParserListener.prototype.enterOpt_inline_handler = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_inline_handler.
PostgreSQLParserListener.prototype.exitOpt_inline_handler = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#validator_clause.
PostgreSQLParserListener.prototype.enterValidator_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#validator_clause.
PostgreSQLParserListener.prototype.exitValidator_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_validator.
PostgreSQLParserListener.prototype.enterOpt_validator = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_validator.
PostgreSQLParserListener.prototype.exitOpt_validator = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_procedural.
PostgreSQLParserListener.prototype.enterOpt_procedural = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_procedural.
PostgreSQLParserListener.prototype.exitOpt_procedural = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createtablespacestmt.
PostgreSQLParserListener.prototype.enterCreatetablespacestmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createtablespacestmt.
PostgreSQLParserListener.prototype.exitCreatetablespacestmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opttablespaceowner.
PostgreSQLParserListener.prototype.enterOpttablespaceowner = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opttablespaceowner.
PostgreSQLParserListener.prototype.exitOpttablespaceowner = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#droptablespacestmt.
PostgreSQLParserListener.prototype.enterDroptablespacestmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#droptablespacestmt.
PostgreSQLParserListener.prototype.exitDroptablespacestmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createextensionstmt.
PostgreSQLParserListener.prototype.enterCreateextensionstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createextensionstmt.
PostgreSQLParserListener.prototype.exitCreateextensionstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#create_extension_opt_list.
PostgreSQLParserListener.prototype.enterCreate_extension_opt_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#create_extension_opt_list.
PostgreSQLParserListener.prototype.exitCreate_extension_opt_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#create_extension_opt_item.
PostgreSQLParserListener.prototype.enterCreate_extension_opt_item = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#create_extension_opt_item.
PostgreSQLParserListener.prototype.exitCreate_extension_opt_item = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alterextensionstmt.
PostgreSQLParserListener.prototype.enterAlterextensionstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alterextensionstmt.
PostgreSQLParserListener.prototype.exitAlterextensionstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alter_extension_opt_list.
PostgreSQLParserListener.prototype.enterAlter_extension_opt_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alter_extension_opt_list.
PostgreSQLParserListener.prototype.exitAlter_extension_opt_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alter_extension_opt_item.
PostgreSQLParserListener.prototype.enterAlter_extension_opt_item = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alter_extension_opt_item.
PostgreSQLParserListener.prototype.exitAlter_extension_opt_item = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alterextensioncontentsstmt.
PostgreSQLParserListener.prototype.enterAlterextensioncontentsstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alterextensioncontentsstmt.
PostgreSQLParserListener.prototype.exitAlterextensioncontentsstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createfdwstmt.
PostgreSQLParserListener.prototype.enterCreatefdwstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createfdwstmt.
PostgreSQLParserListener.prototype.exitCreatefdwstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#fdw_option.
PostgreSQLParserListener.prototype.enterFdw_option = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#fdw_option.
PostgreSQLParserListener.prototype.exitFdw_option = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#fdw_options.
PostgreSQLParserListener.prototype.enterFdw_options = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#fdw_options.
PostgreSQLParserListener.prototype.exitFdw_options = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_fdw_options.
PostgreSQLParserListener.prototype.enterOpt_fdw_options = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_fdw_options.
PostgreSQLParserListener.prototype.exitOpt_fdw_options = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alterfdwstmt.
PostgreSQLParserListener.prototype.enterAlterfdwstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alterfdwstmt.
PostgreSQLParserListener.prototype.exitAlterfdwstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#create_generic_options.
PostgreSQLParserListener.prototype.enterCreate_generic_options = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#create_generic_options.
PostgreSQLParserListener.prototype.exitCreate_generic_options = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#generic_option_list.
PostgreSQLParserListener.prototype.enterGeneric_option_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#generic_option_list.
PostgreSQLParserListener.prototype.exitGeneric_option_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alter_generic_options.
PostgreSQLParserListener.prototype.enterAlter_generic_options = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alter_generic_options.
PostgreSQLParserListener.prototype.exitAlter_generic_options = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alter_generic_option_list.
PostgreSQLParserListener.prototype.enterAlter_generic_option_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alter_generic_option_list.
PostgreSQLParserListener.prototype.exitAlter_generic_option_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alter_generic_option_elem.
PostgreSQLParserListener.prototype.enterAlter_generic_option_elem = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alter_generic_option_elem.
PostgreSQLParserListener.prototype.exitAlter_generic_option_elem = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#generic_option_elem.
PostgreSQLParserListener.prototype.enterGeneric_option_elem = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#generic_option_elem.
PostgreSQLParserListener.prototype.exitGeneric_option_elem = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#generic_option_name.
PostgreSQLParserListener.prototype.enterGeneric_option_name = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#generic_option_name.
PostgreSQLParserListener.prototype.exitGeneric_option_name = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#generic_option_arg.
PostgreSQLParserListener.prototype.enterGeneric_option_arg = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#generic_option_arg.
PostgreSQLParserListener.prototype.exitGeneric_option_arg = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createforeignserverstmt.
PostgreSQLParserListener.prototype.enterCreateforeignserverstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createforeignserverstmt.
PostgreSQLParserListener.prototype.exitCreateforeignserverstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_type.
PostgreSQLParserListener.prototype.enterOpt_type = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_type.
PostgreSQLParserListener.prototype.exitOpt_type = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#foreign_server_version.
PostgreSQLParserListener.prototype.enterForeign_server_version = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#foreign_server_version.
PostgreSQLParserListener.prototype.exitForeign_server_version = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_foreign_server_version.
PostgreSQLParserListener.prototype.enterOpt_foreign_server_version = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_foreign_server_version.
PostgreSQLParserListener.prototype.exitOpt_foreign_server_version = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alterforeignserverstmt.
PostgreSQLParserListener.prototype.enterAlterforeignserverstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alterforeignserverstmt.
PostgreSQLParserListener.prototype.exitAlterforeignserverstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createforeigntablestmt.
PostgreSQLParserListener.prototype.enterCreateforeigntablestmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createforeigntablestmt.
PostgreSQLParserListener.prototype.exitCreateforeigntablestmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#importforeignschemastmt.
PostgreSQLParserListener.prototype.enterImportforeignschemastmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#importforeignschemastmt.
PostgreSQLParserListener.prototype.exitImportforeignschemastmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#import_qualification_type.
PostgreSQLParserListener.prototype.enterImport_qualification_type = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#import_qualification_type.
PostgreSQLParserListener.prototype.exitImport_qualification_type = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#import_qualification.
PostgreSQLParserListener.prototype.enterImport_qualification = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#import_qualification.
PostgreSQLParserListener.prototype.exitImport_qualification = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createusermappingstmt.
PostgreSQLParserListener.prototype.enterCreateusermappingstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createusermappingstmt.
PostgreSQLParserListener.prototype.exitCreateusermappingstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#auth_ident.
PostgreSQLParserListener.prototype.enterAuth_ident = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#auth_ident.
PostgreSQLParserListener.prototype.exitAuth_ident = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#dropusermappingstmt.
PostgreSQLParserListener.prototype.enterDropusermappingstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#dropusermappingstmt.
PostgreSQLParserListener.prototype.exitDropusermappingstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alterusermappingstmt.
PostgreSQLParserListener.prototype.enterAlterusermappingstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alterusermappingstmt.
PostgreSQLParserListener.prototype.exitAlterusermappingstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createpolicystmt.
PostgreSQLParserListener.prototype.enterCreatepolicystmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createpolicystmt.
PostgreSQLParserListener.prototype.exitCreatepolicystmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alterpolicystmt.
PostgreSQLParserListener.prototype.enterAlterpolicystmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alterpolicystmt.
PostgreSQLParserListener.prototype.exitAlterpolicystmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#rowsecurityoptionalexpr.
PostgreSQLParserListener.prototype.enterRowsecurityoptionalexpr = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#rowsecurityoptionalexpr.
PostgreSQLParserListener.prototype.exitRowsecurityoptionalexpr = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#rowsecurityoptionalwithcheck.
PostgreSQLParserListener.prototype.enterRowsecurityoptionalwithcheck = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#rowsecurityoptionalwithcheck.
PostgreSQLParserListener.prototype.exitRowsecurityoptionalwithcheck = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#rowsecuritydefaulttorole.
PostgreSQLParserListener.prototype.enterRowsecuritydefaulttorole = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#rowsecuritydefaulttorole.
PostgreSQLParserListener.prototype.exitRowsecuritydefaulttorole = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#rowsecurityoptionaltorole.
PostgreSQLParserListener.prototype.enterRowsecurityoptionaltorole = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#rowsecurityoptionaltorole.
PostgreSQLParserListener.prototype.exitRowsecurityoptionaltorole = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#rowsecuritydefaultpermissive.
PostgreSQLParserListener.prototype.enterRowsecuritydefaultpermissive = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#rowsecuritydefaultpermissive.
PostgreSQLParserListener.prototype.exitRowsecuritydefaultpermissive = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#rowsecuritydefaultforcmd.
PostgreSQLParserListener.prototype.enterRowsecuritydefaultforcmd = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#rowsecuritydefaultforcmd.
PostgreSQLParserListener.prototype.exitRowsecuritydefaultforcmd = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#row_security_cmd.
PostgreSQLParserListener.prototype.enterRow_security_cmd = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#row_security_cmd.
PostgreSQLParserListener.prototype.exitRow_security_cmd = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createamstmt.
PostgreSQLParserListener.prototype.enterCreateamstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createamstmt.
PostgreSQLParserListener.prototype.exitCreateamstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#am_type.
PostgreSQLParserListener.prototype.enterAm_type = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#am_type.
PostgreSQLParserListener.prototype.exitAm_type = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createtrigstmt.
PostgreSQLParserListener.prototype.enterCreatetrigstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createtrigstmt.
PostgreSQLParserListener.prototype.exitCreatetrigstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#triggeractiontime.
PostgreSQLParserListener.prototype.enterTriggeractiontime = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#triggeractiontime.
PostgreSQLParserListener.prototype.exitTriggeractiontime = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#triggerevents.
PostgreSQLParserListener.prototype.enterTriggerevents = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#triggerevents.
PostgreSQLParserListener.prototype.exitTriggerevents = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#triggeroneevent.
PostgreSQLParserListener.prototype.enterTriggeroneevent = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#triggeroneevent.
PostgreSQLParserListener.prototype.exitTriggeroneevent = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#triggerreferencing.
PostgreSQLParserListener.prototype.enterTriggerreferencing = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#triggerreferencing.
PostgreSQLParserListener.prototype.exitTriggerreferencing = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#triggertransitions.
PostgreSQLParserListener.prototype.enterTriggertransitions = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#triggertransitions.
PostgreSQLParserListener.prototype.exitTriggertransitions = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#triggertransition.
PostgreSQLParserListener.prototype.enterTriggertransition = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#triggertransition.
PostgreSQLParserListener.prototype.exitTriggertransition = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#transitionoldornew.
PostgreSQLParserListener.prototype.enterTransitionoldornew = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#transitionoldornew.
PostgreSQLParserListener.prototype.exitTransitionoldornew = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#transitionrowortable.
PostgreSQLParserListener.prototype.enterTransitionrowortable = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#transitionrowortable.
PostgreSQLParserListener.prototype.exitTransitionrowortable = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#transitionrelname.
PostgreSQLParserListener.prototype.enterTransitionrelname = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#transitionrelname.
PostgreSQLParserListener.prototype.exitTransitionrelname = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#triggerforspec.
PostgreSQLParserListener.prototype.enterTriggerforspec = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#triggerforspec.
PostgreSQLParserListener.prototype.exitTriggerforspec = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#triggerforopteach.
PostgreSQLParserListener.prototype.enterTriggerforopteach = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#triggerforopteach.
PostgreSQLParserListener.prototype.exitTriggerforopteach = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#triggerfortype.
PostgreSQLParserListener.prototype.enterTriggerfortype = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#triggerfortype.
PostgreSQLParserListener.prototype.exitTriggerfortype = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#triggerwhen.
PostgreSQLParserListener.prototype.enterTriggerwhen = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#triggerwhen.
PostgreSQLParserListener.prototype.exitTriggerwhen = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#function_or_procedure.
PostgreSQLParserListener.prototype.enterFunction_or_procedure = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#function_or_procedure.
PostgreSQLParserListener.prototype.exitFunction_or_procedure = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#triggerfuncargs.
PostgreSQLParserListener.prototype.enterTriggerfuncargs = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#triggerfuncargs.
PostgreSQLParserListener.prototype.exitTriggerfuncargs = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#triggerfuncarg.
PostgreSQLParserListener.prototype.enterTriggerfuncarg = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#triggerfuncarg.
PostgreSQLParserListener.prototype.exitTriggerfuncarg = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#optconstrfromtable.
PostgreSQLParserListener.prototype.enterOptconstrfromtable = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#optconstrfromtable.
PostgreSQLParserListener.prototype.exitOptconstrfromtable = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#constraintattributespec.
PostgreSQLParserListener.prototype.enterConstraintattributespec = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#constraintattributespec.
PostgreSQLParserListener.prototype.exitConstraintattributespec = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#constraintattributeElem.
PostgreSQLParserListener.prototype.enterConstraintattributeElem = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#constraintattributeElem.
PostgreSQLParserListener.prototype.exitConstraintattributeElem = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createeventtrigstmt.
PostgreSQLParserListener.prototype.enterCreateeventtrigstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createeventtrigstmt.
PostgreSQLParserListener.prototype.exitCreateeventtrigstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#event_trigger_when_list.
PostgreSQLParserListener.prototype.enterEvent_trigger_when_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#event_trigger_when_list.
PostgreSQLParserListener.prototype.exitEvent_trigger_when_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#event_trigger_when_item.
PostgreSQLParserListener.prototype.enterEvent_trigger_when_item = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#event_trigger_when_item.
PostgreSQLParserListener.prototype.exitEvent_trigger_when_item = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#event_trigger_value_list.
PostgreSQLParserListener.prototype.enterEvent_trigger_value_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#event_trigger_value_list.
PostgreSQLParserListener.prototype.exitEvent_trigger_value_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#altereventtrigstmt.
PostgreSQLParserListener.prototype.enterAltereventtrigstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#altereventtrigstmt.
PostgreSQLParserListener.prototype.exitAltereventtrigstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#enable_trigger.
PostgreSQLParserListener.prototype.enterEnable_trigger = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#enable_trigger.
PostgreSQLParserListener.prototype.exitEnable_trigger = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createassertionstmt.
PostgreSQLParserListener.prototype.enterCreateassertionstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createassertionstmt.
PostgreSQLParserListener.prototype.exitCreateassertionstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#definestmt.
PostgreSQLParserListener.prototype.enterDefinestmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#definestmt.
PostgreSQLParserListener.prototype.exitDefinestmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#definition.
PostgreSQLParserListener.prototype.enterDefinition = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#definition.
PostgreSQLParserListener.prototype.exitDefinition = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#def_list.
PostgreSQLParserListener.prototype.enterDef_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#def_list.
PostgreSQLParserListener.prototype.exitDef_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#def_elem.
PostgreSQLParserListener.prototype.enterDef_elem = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#def_elem.
PostgreSQLParserListener.prototype.exitDef_elem = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#def_arg.
PostgreSQLParserListener.prototype.enterDef_arg = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#def_arg.
PostgreSQLParserListener.prototype.exitDef_arg = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#old_aggr_definition.
PostgreSQLParserListener.prototype.enterOld_aggr_definition = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#old_aggr_definition.
PostgreSQLParserListener.prototype.exitOld_aggr_definition = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#old_aggr_list.
PostgreSQLParserListener.prototype.enterOld_aggr_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#old_aggr_list.
PostgreSQLParserListener.prototype.exitOld_aggr_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#old_aggr_elem.
PostgreSQLParserListener.prototype.enterOld_aggr_elem = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#old_aggr_elem.
PostgreSQLParserListener.prototype.exitOld_aggr_elem = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_enum_val_list.
PostgreSQLParserListener.prototype.enterOpt_enum_val_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_enum_val_list.
PostgreSQLParserListener.prototype.exitOpt_enum_val_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#enum_val_list.
PostgreSQLParserListener.prototype.enterEnum_val_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#enum_val_list.
PostgreSQLParserListener.prototype.exitEnum_val_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alterenumstmt.
PostgreSQLParserListener.prototype.enterAlterenumstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alterenumstmt.
PostgreSQLParserListener.prototype.exitAlterenumstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_if_not_exists.
PostgreSQLParserListener.prototype.enterOpt_if_not_exists = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_if_not_exists.
PostgreSQLParserListener.prototype.exitOpt_if_not_exists = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createopclassstmt.
PostgreSQLParserListener.prototype.enterCreateopclassstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createopclassstmt.
PostgreSQLParserListener.prototype.exitCreateopclassstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opclass_item_list.
PostgreSQLParserListener.prototype.enterOpclass_item_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opclass_item_list.
PostgreSQLParserListener.prototype.exitOpclass_item_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opclass_item.
PostgreSQLParserListener.prototype.enterOpclass_item = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opclass_item.
PostgreSQLParserListener.prototype.exitOpclass_item = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_default.
PostgreSQLParserListener.prototype.enterOpt_default = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_default.
PostgreSQLParserListener.prototype.exitOpt_default = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_opfamily.
PostgreSQLParserListener.prototype.enterOpt_opfamily = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_opfamily.
PostgreSQLParserListener.prototype.exitOpt_opfamily = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opclass_purpose.
PostgreSQLParserListener.prototype.enterOpclass_purpose = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opclass_purpose.
PostgreSQLParserListener.prototype.exitOpclass_purpose = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_recheck.
PostgreSQLParserListener.prototype.enterOpt_recheck = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_recheck.
PostgreSQLParserListener.prototype.exitOpt_recheck = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createopfamilystmt.
PostgreSQLParserListener.prototype.enterCreateopfamilystmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createopfamilystmt.
PostgreSQLParserListener.prototype.exitCreateopfamilystmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alteropfamilystmt.
PostgreSQLParserListener.prototype.enterAlteropfamilystmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alteropfamilystmt.
PostgreSQLParserListener.prototype.exitAlteropfamilystmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opclass_drop_list.
PostgreSQLParserListener.prototype.enterOpclass_drop_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opclass_drop_list.
PostgreSQLParserListener.prototype.exitOpclass_drop_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opclass_drop.
PostgreSQLParserListener.prototype.enterOpclass_drop = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opclass_drop.
PostgreSQLParserListener.prototype.exitOpclass_drop = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#dropopclassstmt.
PostgreSQLParserListener.prototype.enterDropopclassstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#dropopclassstmt.
PostgreSQLParserListener.prototype.exitDropopclassstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#dropopfamilystmt.
PostgreSQLParserListener.prototype.enterDropopfamilystmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#dropopfamilystmt.
PostgreSQLParserListener.prototype.exitDropopfamilystmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#dropownedstmt.
PostgreSQLParserListener.prototype.enterDropownedstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#dropownedstmt.
PostgreSQLParserListener.prototype.exitDropownedstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#reassignownedstmt.
PostgreSQLParserListener.prototype.enterReassignownedstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#reassignownedstmt.
PostgreSQLParserListener.prototype.exitReassignownedstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#dropstmt.
PostgreSQLParserListener.prototype.enterDropstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#dropstmt.
PostgreSQLParserListener.prototype.exitDropstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#object_type_any_name.
PostgreSQLParserListener.prototype.enterObject_type_any_name = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#object_type_any_name.
PostgreSQLParserListener.prototype.exitObject_type_any_name = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#object_type_name.
PostgreSQLParserListener.prototype.enterObject_type_name = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#object_type_name.
PostgreSQLParserListener.prototype.exitObject_type_name = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#drop_type_name.
PostgreSQLParserListener.prototype.enterDrop_type_name = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#drop_type_name.
PostgreSQLParserListener.prototype.exitDrop_type_name = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#object_type_name_on_any_name.
PostgreSQLParserListener.prototype.enterObject_type_name_on_any_name = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#object_type_name_on_any_name.
PostgreSQLParserListener.prototype.exitObject_type_name_on_any_name = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#any_name_list.
PostgreSQLParserListener.prototype.enterAny_name_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#any_name_list.
PostgreSQLParserListener.prototype.exitAny_name_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#any_name.
PostgreSQLParserListener.prototype.enterAny_name = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#any_name.
PostgreSQLParserListener.prototype.exitAny_name = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#attrs.
PostgreSQLParserListener.prototype.enterAttrs = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#attrs.
PostgreSQLParserListener.prototype.exitAttrs = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#type_name_list.
PostgreSQLParserListener.prototype.enterType_name_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#type_name_list.
PostgreSQLParserListener.prototype.exitType_name_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#truncatestmt.
PostgreSQLParserListener.prototype.enterTruncatestmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#truncatestmt.
PostgreSQLParserListener.prototype.exitTruncatestmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_restart_seqs.
PostgreSQLParserListener.prototype.enterOpt_restart_seqs = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_restart_seqs.
PostgreSQLParserListener.prototype.exitOpt_restart_seqs = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#commentstmt.
PostgreSQLParserListener.prototype.enterCommentstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#commentstmt.
PostgreSQLParserListener.prototype.exitCommentstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#comment_text.
PostgreSQLParserListener.prototype.enterComment_text = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#comment_text.
PostgreSQLParserListener.prototype.exitComment_text = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#seclabelstmt.
PostgreSQLParserListener.prototype.enterSeclabelstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#seclabelstmt.
PostgreSQLParserListener.prototype.exitSeclabelstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_provider.
PostgreSQLParserListener.prototype.enterOpt_provider = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_provider.
PostgreSQLParserListener.prototype.exitOpt_provider = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#security_label.
PostgreSQLParserListener.prototype.enterSecurity_label = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#security_label.
PostgreSQLParserListener.prototype.exitSecurity_label = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#fetchstmt.
PostgreSQLParserListener.prototype.enterFetchstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#fetchstmt.
PostgreSQLParserListener.prototype.exitFetchstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#fetch_args.
PostgreSQLParserListener.prototype.enterFetch_args = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#fetch_args.
PostgreSQLParserListener.prototype.exitFetch_args = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#from_in.
PostgreSQLParserListener.prototype.enterFrom_in = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#from_in.
PostgreSQLParserListener.prototype.exitFrom_in = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_from_in.
PostgreSQLParserListener.prototype.enterOpt_from_in = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_from_in.
PostgreSQLParserListener.prototype.exitOpt_from_in = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#grantstmt.
PostgreSQLParserListener.prototype.enterGrantstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#grantstmt.
PostgreSQLParserListener.prototype.exitGrantstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#revokestmt.
PostgreSQLParserListener.prototype.enterRevokestmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#revokestmt.
PostgreSQLParserListener.prototype.exitRevokestmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#privileges.
PostgreSQLParserListener.prototype.enterPrivileges = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#privileges.
PostgreSQLParserListener.prototype.exitPrivileges = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#privilege_list.
PostgreSQLParserListener.prototype.enterPrivilege_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#privilege_list.
PostgreSQLParserListener.prototype.exitPrivilege_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#privilege.
PostgreSQLParserListener.prototype.enterPrivilege = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#privilege.
PostgreSQLParserListener.prototype.exitPrivilege = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#privilege_target.
PostgreSQLParserListener.prototype.enterPrivilege_target = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#privilege_target.
PostgreSQLParserListener.prototype.exitPrivilege_target = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#grantee_list.
PostgreSQLParserListener.prototype.enterGrantee_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#grantee_list.
PostgreSQLParserListener.prototype.exitGrantee_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#grantee.
PostgreSQLParserListener.prototype.enterGrantee = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#grantee.
PostgreSQLParserListener.prototype.exitGrantee = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_grant_grant_option.
PostgreSQLParserListener.prototype.enterOpt_grant_grant_option = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_grant_grant_option.
PostgreSQLParserListener.prototype.exitOpt_grant_grant_option = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#grantrolestmt.
PostgreSQLParserListener.prototype.enterGrantrolestmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#grantrolestmt.
PostgreSQLParserListener.prototype.exitGrantrolestmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#revokerolestmt.
PostgreSQLParserListener.prototype.enterRevokerolestmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#revokerolestmt.
PostgreSQLParserListener.prototype.exitRevokerolestmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_grant_admin_option.
PostgreSQLParserListener.prototype.enterOpt_grant_admin_option = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_grant_admin_option.
PostgreSQLParserListener.prototype.exitOpt_grant_admin_option = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_granted_by.
PostgreSQLParserListener.prototype.enterOpt_granted_by = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_granted_by.
PostgreSQLParserListener.prototype.exitOpt_granted_by = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alterdefaultprivilegesstmt.
PostgreSQLParserListener.prototype.enterAlterdefaultprivilegesstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alterdefaultprivilegesstmt.
PostgreSQLParserListener.prototype.exitAlterdefaultprivilegesstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#defacloptionlist.
PostgreSQLParserListener.prototype.enterDefacloptionlist = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#defacloptionlist.
PostgreSQLParserListener.prototype.exitDefacloptionlist = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#defacloption.
PostgreSQLParserListener.prototype.enterDefacloption = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#defacloption.
PostgreSQLParserListener.prototype.exitDefacloption = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#defaclaction.
PostgreSQLParserListener.prototype.enterDefaclaction = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#defaclaction.
PostgreSQLParserListener.prototype.exitDefaclaction = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#defacl_privilege_target.
PostgreSQLParserListener.prototype.enterDefacl_privilege_target = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#defacl_privilege_target.
PostgreSQLParserListener.prototype.exitDefacl_privilege_target = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#indexstmt.
PostgreSQLParserListener.prototype.enterIndexstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#indexstmt.
PostgreSQLParserListener.prototype.exitIndexstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_unique.
PostgreSQLParserListener.prototype.enterOpt_unique = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_unique.
PostgreSQLParserListener.prototype.exitOpt_unique = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_concurrently.
PostgreSQLParserListener.prototype.enterOpt_concurrently = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_concurrently.
PostgreSQLParserListener.prototype.exitOpt_concurrently = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_index_name.
PostgreSQLParserListener.prototype.enterOpt_index_name = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_index_name.
PostgreSQLParserListener.prototype.exitOpt_index_name = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#access_method_clause.
PostgreSQLParserListener.prototype.enterAccess_method_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#access_method_clause.
PostgreSQLParserListener.prototype.exitAccess_method_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#index_params.
PostgreSQLParserListener.prototype.enterIndex_params = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#index_params.
PostgreSQLParserListener.prototype.exitIndex_params = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#index_elem_options.
PostgreSQLParserListener.prototype.enterIndex_elem_options = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#index_elem_options.
PostgreSQLParserListener.prototype.exitIndex_elem_options = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#index_elem.
PostgreSQLParserListener.prototype.enterIndex_elem = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#index_elem.
PostgreSQLParserListener.prototype.exitIndex_elem = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_include.
PostgreSQLParserListener.prototype.enterOpt_include = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_include.
PostgreSQLParserListener.prototype.exitOpt_include = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#index_including_params.
PostgreSQLParserListener.prototype.enterIndex_including_params = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#index_including_params.
PostgreSQLParserListener.prototype.exitIndex_including_params = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_collate.
PostgreSQLParserListener.prototype.enterOpt_collate = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_collate.
PostgreSQLParserListener.prototype.exitOpt_collate = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_class.
PostgreSQLParserListener.prototype.enterOpt_class = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_class.
PostgreSQLParserListener.prototype.exitOpt_class = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_asc_desc.
PostgreSQLParserListener.prototype.enterOpt_asc_desc = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_asc_desc.
PostgreSQLParserListener.prototype.exitOpt_asc_desc = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_nulls_order.
PostgreSQLParserListener.prototype.enterOpt_nulls_order = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_nulls_order.
PostgreSQLParserListener.prototype.exitOpt_nulls_order = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createfunctionstmt.
PostgreSQLParserListener.prototype.enterCreatefunctionstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createfunctionstmt.
PostgreSQLParserListener.prototype.exitCreatefunctionstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_or_replace.
PostgreSQLParserListener.prototype.enterOpt_or_replace = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_or_replace.
PostgreSQLParserListener.prototype.exitOpt_or_replace = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#func_args.
PostgreSQLParserListener.prototype.enterFunc_args = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#func_args.
PostgreSQLParserListener.prototype.exitFunc_args = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#func_args_list.
PostgreSQLParserListener.prototype.enterFunc_args_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#func_args_list.
PostgreSQLParserListener.prototype.exitFunc_args_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#function_with_argtypes_list.
PostgreSQLParserListener.prototype.enterFunction_with_argtypes_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#function_with_argtypes_list.
PostgreSQLParserListener.prototype.exitFunction_with_argtypes_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#function_with_argtypes.
PostgreSQLParserListener.prototype.enterFunction_with_argtypes = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#function_with_argtypes.
PostgreSQLParserListener.prototype.exitFunction_with_argtypes = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#func_args_with_defaults.
PostgreSQLParserListener.prototype.enterFunc_args_with_defaults = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#func_args_with_defaults.
PostgreSQLParserListener.prototype.exitFunc_args_with_defaults = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#func_args_with_defaults_list.
PostgreSQLParserListener.prototype.enterFunc_args_with_defaults_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#func_args_with_defaults_list.
PostgreSQLParserListener.prototype.exitFunc_args_with_defaults_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#func_arg.
PostgreSQLParserListener.prototype.enterFunc_arg = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#func_arg.
PostgreSQLParserListener.prototype.exitFunc_arg = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#arg_class.
PostgreSQLParserListener.prototype.enterArg_class = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#arg_class.
PostgreSQLParserListener.prototype.exitArg_class = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#param_name.
PostgreSQLParserListener.prototype.enterParam_name = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#param_name.
PostgreSQLParserListener.prototype.exitParam_name = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#func_return.
PostgreSQLParserListener.prototype.enterFunc_return = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#func_return.
PostgreSQLParserListener.prototype.exitFunc_return = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#func_type.
PostgreSQLParserListener.prototype.enterFunc_type = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#func_type.
PostgreSQLParserListener.prototype.exitFunc_type = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#func_arg_with_default.
PostgreSQLParserListener.prototype.enterFunc_arg_with_default = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#func_arg_with_default.
PostgreSQLParserListener.prototype.exitFunc_arg_with_default = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#aggr_arg.
PostgreSQLParserListener.prototype.enterAggr_arg = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#aggr_arg.
PostgreSQLParserListener.prototype.exitAggr_arg = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#aggr_args.
PostgreSQLParserListener.prototype.enterAggr_args = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#aggr_args.
PostgreSQLParserListener.prototype.exitAggr_args = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#aggr_args_list.
PostgreSQLParserListener.prototype.enterAggr_args_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#aggr_args_list.
PostgreSQLParserListener.prototype.exitAggr_args_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#aggregate_with_argtypes.
PostgreSQLParserListener.prototype.enterAggregate_with_argtypes = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#aggregate_with_argtypes.
PostgreSQLParserListener.prototype.exitAggregate_with_argtypes = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#aggregate_with_argtypes_list.
PostgreSQLParserListener.prototype.enterAggregate_with_argtypes_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#aggregate_with_argtypes_list.
PostgreSQLParserListener.prototype.exitAggregate_with_argtypes_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createfunc_opt_list.
PostgreSQLParserListener.prototype.enterCreatefunc_opt_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createfunc_opt_list.
PostgreSQLParserListener.prototype.exitCreatefunc_opt_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#common_func_opt_item.
PostgreSQLParserListener.prototype.enterCommon_func_opt_item = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#common_func_opt_item.
PostgreSQLParserListener.prototype.exitCommon_func_opt_item = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createfunc_opt_item.
PostgreSQLParserListener.prototype.enterCreatefunc_opt_item = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createfunc_opt_item.
PostgreSQLParserListener.prototype.exitCreatefunc_opt_item = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#func_as.
PostgreSQLParserListener.prototype.enterFunc_as = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#func_as.
PostgreSQLParserListener.prototype.exitFunc_as = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#transform_type_list.
PostgreSQLParserListener.prototype.enterTransform_type_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#transform_type_list.
PostgreSQLParserListener.prototype.exitTransform_type_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_definition.
PostgreSQLParserListener.prototype.enterOpt_definition = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_definition.
PostgreSQLParserListener.prototype.exitOpt_definition = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#table_func_column.
PostgreSQLParserListener.prototype.enterTable_func_column = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#table_func_column.
PostgreSQLParserListener.prototype.exitTable_func_column = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#table_func_column_list.
PostgreSQLParserListener.prototype.enterTable_func_column_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#table_func_column_list.
PostgreSQLParserListener.prototype.exitTable_func_column_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alterfunctionstmt.
PostgreSQLParserListener.prototype.enterAlterfunctionstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alterfunctionstmt.
PostgreSQLParserListener.prototype.exitAlterfunctionstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alterfunc_opt_list.
PostgreSQLParserListener.prototype.enterAlterfunc_opt_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alterfunc_opt_list.
PostgreSQLParserListener.prototype.exitAlterfunc_opt_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_restrict.
PostgreSQLParserListener.prototype.enterOpt_restrict = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_restrict.
PostgreSQLParserListener.prototype.exitOpt_restrict = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#removefuncstmt.
PostgreSQLParserListener.prototype.enterRemovefuncstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#removefuncstmt.
PostgreSQLParserListener.prototype.exitRemovefuncstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#removeaggrstmt.
PostgreSQLParserListener.prototype.enterRemoveaggrstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#removeaggrstmt.
PostgreSQLParserListener.prototype.exitRemoveaggrstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#removeoperstmt.
PostgreSQLParserListener.prototype.enterRemoveoperstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#removeoperstmt.
PostgreSQLParserListener.prototype.exitRemoveoperstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#oper_argtypes.
PostgreSQLParserListener.prototype.enterOper_argtypes = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#oper_argtypes.
PostgreSQLParserListener.prototype.exitOper_argtypes = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#any_operator.
PostgreSQLParserListener.prototype.enterAny_operator = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#any_operator.
PostgreSQLParserListener.prototype.exitAny_operator = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#operator_with_argtypes_list.
PostgreSQLParserListener.prototype.enterOperator_with_argtypes_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#operator_with_argtypes_list.
PostgreSQLParserListener.prototype.exitOperator_with_argtypes_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#operator_with_argtypes.
PostgreSQLParserListener.prototype.enterOperator_with_argtypes = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#operator_with_argtypes.
PostgreSQLParserListener.prototype.exitOperator_with_argtypes = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#dostmt.
PostgreSQLParserListener.prototype.enterDostmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#dostmt.
PostgreSQLParserListener.prototype.exitDostmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#dostmt_opt_list.
PostgreSQLParserListener.prototype.enterDostmt_opt_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#dostmt_opt_list.
PostgreSQLParserListener.prototype.exitDostmt_opt_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#dostmt_opt_item.
PostgreSQLParserListener.prototype.enterDostmt_opt_item = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#dostmt_opt_item.
PostgreSQLParserListener.prototype.exitDostmt_opt_item = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createcaststmt.
PostgreSQLParserListener.prototype.enterCreatecaststmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createcaststmt.
PostgreSQLParserListener.prototype.exitCreatecaststmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#cast_context.
PostgreSQLParserListener.prototype.enterCast_context = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#cast_context.
PostgreSQLParserListener.prototype.exitCast_context = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#dropcaststmt.
PostgreSQLParserListener.prototype.enterDropcaststmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#dropcaststmt.
PostgreSQLParserListener.prototype.exitDropcaststmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_if_exists.
PostgreSQLParserListener.prototype.enterOpt_if_exists = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_if_exists.
PostgreSQLParserListener.prototype.exitOpt_if_exists = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createtransformstmt.
PostgreSQLParserListener.prototype.enterCreatetransformstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createtransformstmt.
PostgreSQLParserListener.prototype.exitCreatetransformstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#transform_element_list.
PostgreSQLParserListener.prototype.enterTransform_element_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#transform_element_list.
PostgreSQLParserListener.prototype.exitTransform_element_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#droptransformstmt.
PostgreSQLParserListener.prototype.enterDroptransformstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#droptransformstmt.
PostgreSQLParserListener.prototype.exitDroptransformstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#reindexstmt.
PostgreSQLParserListener.prototype.enterReindexstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#reindexstmt.
PostgreSQLParserListener.prototype.exitReindexstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#reindex_target_type.
PostgreSQLParserListener.prototype.enterReindex_target_type = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#reindex_target_type.
PostgreSQLParserListener.prototype.exitReindex_target_type = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#reindex_target_multitable.
PostgreSQLParserListener.prototype.enterReindex_target_multitable = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#reindex_target_multitable.
PostgreSQLParserListener.prototype.exitReindex_target_multitable = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#reindex_option_list.
PostgreSQLParserListener.prototype.enterReindex_option_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#reindex_option_list.
PostgreSQLParserListener.prototype.exitReindex_option_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#reindex_option_elem.
PostgreSQLParserListener.prototype.enterReindex_option_elem = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#reindex_option_elem.
PostgreSQLParserListener.prototype.exitReindex_option_elem = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#altertblspcstmt.
PostgreSQLParserListener.prototype.enterAltertblspcstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#altertblspcstmt.
PostgreSQLParserListener.prototype.exitAltertblspcstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#renamestmt.
PostgreSQLParserListener.prototype.enterRenamestmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#renamestmt.
PostgreSQLParserListener.prototype.exitRenamestmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_column.
PostgreSQLParserListener.prototype.enterOpt_column = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_column.
PostgreSQLParserListener.prototype.exitOpt_column = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_set_data.
PostgreSQLParserListener.prototype.enterOpt_set_data = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_set_data.
PostgreSQLParserListener.prototype.exitOpt_set_data = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alterobjectdependsstmt.
PostgreSQLParserListener.prototype.enterAlterobjectdependsstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alterobjectdependsstmt.
PostgreSQLParserListener.prototype.exitAlterobjectdependsstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_no.
PostgreSQLParserListener.prototype.enterOpt_no = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_no.
PostgreSQLParserListener.prototype.exitOpt_no = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alterobjectschemastmt.
PostgreSQLParserListener.prototype.enterAlterobjectschemastmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alterobjectschemastmt.
PostgreSQLParserListener.prototype.exitAlterobjectschemastmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alteroperatorstmt.
PostgreSQLParserListener.prototype.enterAlteroperatorstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alteroperatorstmt.
PostgreSQLParserListener.prototype.exitAlteroperatorstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#operator_def_list.
PostgreSQLParserListener.prototype.enterOperator_def_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#operator_def_list.
PostgreSQLParserListener.prototype.exitOperator_def_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#operator_def_elem.
PostgreSQLParserListener.prototype.enterOperator_def_elem = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#operator_def_elem.
PostgreSQLParserListener.prototype.exitOperator_def_elem = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#operator_def_arg.
PostgreSQLParserListener.prototype.enterOperator_def_arg = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#operator_def_arg.
PostgreSQLParserListener.prototype.exitOperator_def_arg = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#altertypestmt.
PostgreSQLParserListener.prototype.enterAltertypestmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#altertypestmt.
PostgreSQLParserListener.prototype.exitAltertypestmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alterownerstmt.
PostgreSQLParserListener.prototype.enterAlterownerstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alterownerstmt.
PostgreSQLParserListener.prototype.exitAlterownerstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createpublicationstmt.
PostgreSQLParserListener.prototype.enterCreatepublicationstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createpublicationstmt.
PostgreSQLParserListener.prototype.exitCreatepublicationstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_publication_for_tables.
PostgreSQLParserListener.prototype.enterOpt_publication_for_tables = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_publication_for_tables.
PostgreSQLParserListener.prototype.exitOpt_publication_for_tables = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#publication_for_tables.
PostgreSQLParserListener.prototype.enterPublication_for_tables = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#publication_for_tables.
PostgreSQLParserListener.prototype.exitPublication_for_tables = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alterpublicationstmt.
PostgreSQLParserListener.prototype.enterAlterpublicationstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alterpublicationstmt.
PostgreSQLParserListener.prototype.exitAlterpublicationstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createsubscriptionstmt.
PostgreSQLParserListener.prototype.enterCreatesubscriptionstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createsubscriptionstmt.
PostgreSQLParserListener.prototype.exitCreatesubscriptionstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#publication_name_list.
PostgreSQLParserListener.prototype.enterPublication_name_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#publication_name_list.
PostgreSQLParserListener.prototype.exitPublication_name_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#publication_name_item.
PostgreSQLParserListener.prototype.enterPublication_name_item = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#publication_name_item.
PostgreSQLParserListener.prototype.exitPublication_name_item = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#altersubscriptionstmt.
PostgreSQLParserListener.prototype.enterAltersubscriptionstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#altersubscriptionstmt.
PostgreSQLParserListener.prototype.exitAltersubscriptionstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#dropsubscriptionstmt.
PostgreSQLParserListener.prototype.enterDropsubscriptionstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#dropsubscriptionstmt.
PostgreSQLParserListener.prototype.exitDropsubscriptionstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#rulestmt.
PostgreSQLParserListener.prototype.enterRulestmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#rulestmt.
PostgreSQLParserListener.prototype.exitRulestmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#ruleactionlist.
PostgreSQLParserListener.prototype.enterRuleactionlist = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#ruleactionlist.
PostgreSQLParserListener.prototype.exitRuleactionlist = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#ruleactionmulti.
PostgreSQLParserListener.prototype.enterRuleactionmulti = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#ruleactionmulti.
PostgreSQLParserListener.prototype.exitRuleactionmulti = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#ruleactionstmt.
PostgreSQLParserListener.prototype.enterRuleactionstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#ruleactionstmt.
PostgreSQLParserListener.prototype.exitRuleactionstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#ruleactionstmtOrEmpty.
PostgreSQLParserListener.prototype.enterRuleactionstmtOrEmpty = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#ruleactionstmtOrEmpty.
PostgreSQLParserListener.prototype.exitRuleactionstmtOrEmpty = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#event.
PostgreSQLParserListener.prototype.enterEvent = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#event.
PostgreSQLParserListener.prototype.exitEvent = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_instead.
PostgreSQLParserListener.prototype.enterOpt_instead = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_instead.
PostgreSQLParserListener.prototype.exitOpt_instead = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#notifystmt.
PostgreSQLParserListener.prototype.enterNotifystmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#notifystmt.
PostgreSQLParserListener.prototype.exitNotifystmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#notify_payload.
PostgreSQLParserListener.prototype.enterNotify_payload = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#notify_payload.
PostgreSQLParserListener.prototype.exitNotify_payload = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#listenstmt.
PostgreSQLParserListener.prototype.enterListenstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#listenstmt.
PostgreSQLParserListener.prototype.exitListenstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#unlistenstmt.
PostgreSQLParserListener.prototype.enterUnlistenstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#unlistenstmt.
PostgreSQLParserListener.prototype.exitUnlistenstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#transactionstmt.
PostgreSQLParserListener.prototype.enterTransactionstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#transactionstmt.
PostgreSQLParserListener.prototype.exitTransactionstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_transaction.
PostgreSQLParserListener.prototype.enterOpt_transaction = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_transaction.
PostgreSQLParserListener.prototype.exitOpt_transaction = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#transaction_mode_item.
PostgreSQLParserListener.prototype.enterTransaction_mode_item = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#transaction_mode_item.
PostgreSQLParserListener.prototype.exitTransaction_mode_item = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#transaction_mode_list.
PostgreSQLParserListener.prototype.enterTransaction_mode_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#transaction_mode_list.
PostgreSQLParserListener.prototype.exitTransaction_mode_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#transaction_mode_list_or_empty.
PostgreSQLParserListener.prototype.enterTransaction_mode_list_or_empty = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#transaction_mode_list_or_empty.
PostgreSQLParserListener.prototype.exitTransaction_mode_list_or_empty = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_transaction_chain.
PostgreSQLParserListener.prototype.enterOpt_transaction_chain = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_transaction_chain.
PostgreSQLParserListener.prototype.exitOpt_transaction_chain = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#viewstmt.
PostgreSQLParserListener.prototype.enterViewstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#viewstmt.
PostgreSQLParserListener.prototype.exitViewstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_check_option.
PostgreSQLParserListener.prototype.enterOpt_check_option = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_check_option.
PostgreSQLParserListener.prototype.exitOpt_check_option = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#loadstmt.
PostgreSQLParserListener.prototype.enterLoadstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#loadstmt.
PostgreSQLParserListener.prototype.exitLoadstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createdbstmt.
PostgreSQLParserListener.prototype.enterCreatedbstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createdbstmt.
PostgreSQLParserListener.prototype.exitCreatedbstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createdb_opt_list.
PostgreSQLParserListener.prototype.enterCreatedb_opt_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createdb_opt_list.
PostgreSQLParserListener.prototype.exitCreatedb_opt_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createdb_opt_items.
PostgreSQLParserListener.prototype.enterCreatedb_opt_items = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createdb_opt_items.
PostgreSQLParserListener.prototype.exitCreatedb_opt_items = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createdb_opt_item.
PostgreSQLParserListener.prototype.enterCreatedb_opt_item = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createdb_opt_item.
PostgreSQLParserListener.prototype.exitCreatedb_opt_item = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createdb_opt_name.
PostgreSQLParserListener.prototype.enterCreatedb_opt_name = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createdb_opt_name.
PostgreSQLParserListener.prototype.exitCreatedb_opt_name = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_equal.
PostgreSQLParserListener.prototype.enterOpt_equal = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_equal.
PostgreSQLParserListener.prototype.exitOpt_equal = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alterdatabasestmt.
PostgreSQLParserListener.prototype.enterAlterdatabasestmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alterdatabasestmt.
PostgreSQLParserListener.prototype.exitAlterdatabasestmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alterdatabasesetstmt.
PostgreSQLParserListener.prototype.enterAlterdatabasesetstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alterdatabasesetstmt.
PostgreSQLParserListener.prototype.exitAlterdatabasesetstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#dropdbstmt.
PostgreSQLParserListener.prototype.enterDropdbstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#dropdbstmt.
PostgreSQLParserListener.prototype.exitDropdbstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#drop_option_list.
PostgreSQLParserListener.prototype.enterDrop_option_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#drop_option_list.
PostgreSQLParserListener.prototype.exitDrop_option_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#drop_option.
PostgreSQLParserListener.prototype.enterDrop_option = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#drop_option.
PostgreSQLParserListener.prototype.exitDrop_option = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#altercollationstmt.
PostgreSQLParserListener.prototype.enterAltercollationstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#altercollationstmt.
PostgreSQLParserListener.prototype.exitAltercollationstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#altersystemstmt.
PostgreSQLParserListener.prototype.enterAltersystemstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#altersystemstmt.
PostgreSQLParserListener.prototype.exitAltersystemstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createdomainstmt.
PostgreSQLParserListener.prototype.enterCreatedomainstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createdomainstmt.
PostgreSQLParserListener.prototype.exitCreatedomainstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alterdomainstmt.
PostgreSQLParserListener.prototype.enterAlterdomainstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alterdomainstmt.
PostgreSQLParserListener.prototype.exitAlterdomainstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_as.
PostgreSQLParserListener.prototype.enterOpt_as = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_as.
PostgreSQLParserListener.prototype.exitOpt_as = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#altertsdictionarystmt.
PostgreSQLParserListener.prototype.enterAltertsdictionarystmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#altertsdictionarystmt.
PostgreSQLParserListener.prototype.exitAltertsdictionarystmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#altertsconfigurationstmt.
PostgreSQLParserListener.prototype.enterAltertsconfigurationstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#altertsconfigurationstmt.
PostgreSQLParserListener.prototype.exitAltertsconfigurationstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#any_with.
PostgreSQLParserListener.prototype.enterAny_with = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#any_with.
PostgreSQLParserListener.prototype.exitAny_with = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#createconversionstmt.
PostgreSQLParserListener.prototype.enterCreateconversionstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#createconversionstmt.
PostgreSQLParserListener.prototype.exitCreateconversionstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#clusterstmt.
PostgreSQLParserListener.prototype.enterClusterstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#clusterstmt.
PostgreSQLParserListener.prototype.exitClusterstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#cluster_index_specification.
PostgreSQLParserListener.prototype.enterCluster_index_specification = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#cluster_index_specification.
PostgreSQLParserListener.prototype.exitCluster_index_specification = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#vacuumstmt.
PostgreSQLParserListener.prototype.enterVacuumstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#vacuumstmt.
PostgreSQLParserListener.prototype.exitVacuumstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#analyzestmt.
PostgreSQLParserListener.prototype.enterAnalyzestmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#analyzestmt.
PostgreSQLParserListener.prototype.exitAnalyzestmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#vac_analyze_option_list.
PostgreSQLParserListener.prototype.enterVac_analyze_option_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#vac_analyze_option_list.
PostgreSQLParserListener.prototype.exitVac_analyze_option_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#analyze_keyword.
PostgreSQLParserListener.prototype.enterAnalyze_keyword = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#analyze_keyword.
PostgreSQLParserListener.prototype.exitAnalyze_keyword = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#vac_analyze_option_elem.
PostgreSQLParserListener.prototype.enterVac_analyze_option_elem = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#vac_analyze_option_elem.
PostgreSQLParserListener.prototype.exitVac_analyze_option_elem = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#vac_analyze_option_name.
PostgreSQLParserListener.prototype.enterVac_analyze_option_name = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#vac_analyze_option_name.
PostgreSQLParserListener.prototype.exitVac_analyze_option_name = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#vac_analyze_option_arg.
PostgreSQLParserListener.prototype.enterVac_analyze_option_arg = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#vac_analyze_option_arg.
PostgreSQLParserListener.prototype.exitVac_analyze_option_arg = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_analyze.
PostgreSQLParserListener.prototype.enterOpt_analyze = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_analyze.
PostgreSQLParserListener.prototype.exitOpt_analyze = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_verbose.
PostgreSQLParserListener.prototype.enterOpt_verbose = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_verbose.
PostgreSQLParserListener.prototype.exitOpt_verbose = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_full.
PostgreSQLParserListener.prototype.enterOpt_full = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_full.
PostgreSQLParserListener.prototype.exitOpt_full = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_freeze.
PostgreSQLParserListener.prototype.enterOpt_freeze = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_freeze.
PostgreSQLParserListener.prototype.exitOpt_freeze = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_name_list.
PostgreSQLParserListener.prototype.enterOpt_name_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_name_list.
PostgreSQLParserListener.prototype.exitOpt_name_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#vacuum_relation.
PostgreSQLParserListener.prototype.enterVacuum_relation = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#vacuum_relation.
PostgreSQLParserListener.prototype.exitVacuum_relation = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#vacuum_relation_list.
PostgreSQLParserListener.prototype.enterVacuum_relation_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#vacuum_relation_list.
PostgreSQLParserListener.prototype.exitVacuum_relation_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_vacuum_relation_list.
PostgreSQLParserListener.prototype.enterOpt_vacuum_relation_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_vacuum_relation_list.
PostgreSQLParserListener.prototype.exitOpt_vacuum_relation_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#explainstmt.
PostgreSQLParserListener.prototype.enterExplainstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#explainstmt.
PostgreSQLParserListener.prototype.exitExplainstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#explainablestmt.
PostgreSQLParserListener.prototype.enterExplainablestmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#explainablestmt.
PostgreSQLParserListener.prototype.exitExplainablestmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#explain_option_list.
PostgreSQLParserListener.prototype.enterExplain_option_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#explain_option_list.
PostgreSQLParserListener.prototype.exitExplain_option_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#explain_option_elem.
PostgreSQLParserListener.prototype.enterExplain_option_elem = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#explain_option_elem.
PostgreSQLParserListener.prototype.exitExplain_option_elem = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#explain_option_name.
PostgreSQLParserListener.prototype.enterExplain_option_name = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#explain_option_name.
PostgreSQLParserListener.prototype.exitExplain_option_name = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#explain_option_arg.
PostgreSQLParserListener.prototype.enterExplain_option_arg = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#explain_option_arg.
PostgreSQLParserListener.prototype.exitExplain_option_arg = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#preparestmt.
PostgreSQLParserListener.prototype.enterPreparestmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#preparestmt.
PostgreSQLParserListener.prototype.exitPreparestmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#prep_type_clause.
PostgreSQLParserListener.prototype.enterPrep_type_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#prep_type_clause.
PostgreSQLParserListener.prototype.exitPrep_type_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#preparablestmt.
PostgreSQLParserListener.prototype.enterPreparablestmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#preparablestmt.
PostgreSQLParserListener.prototype.exitPreparablestmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#executestmt.
PostgreSQLParserListener.prototype.enterExecutestmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#executestmt.
PostgreSQLParserListener.prototype.exitExecutestmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#execute_param_clause.
PostgreSQLParserListener.prototype.enterExecute_param_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#execute_param_clause.
PostgreSQLParserListener.prototype.exitExecute_param_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#deallocatestmt.
PostgreSQLParserListener.prototype.enterDeallocatestmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#deallocatestmt.
PostgreSQLParserListener.prototype.exitDeallocatestmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#insertstmt.
PostgreSQLParserListener.prototype.enterInsertstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#insertstmt.
PostgreSQLParserListener.prototype.exitInsertstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#insert_target.
PostgreSQLParserListener.prototype.enterInsert_target = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#insert_target.
PostgreSQLParserListener.prototype.exitInsert_target = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#insert_rest.
PostgreSQLParserListener.prototype.enterInsert_rest = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#insert_rest.
PostgreSQLParserListener.prototype.exitInsert_rest = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#override_kind.
PostgreSQLParserListener.prototype.enterOverride_kind = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#override_kind.
PostgreSQLParserListener.prototype.exitOverride_kind = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#insert_column_list.
PostgreSQLParserListener.prototype.enterInsert_column_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#insert_column_list.
PostgreSQLParserListener.prototype.exitInsert_column_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#insert_column_item.
PostgreSQLParserListener.prototype.enterInsert_column_item = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#insert_column_item.
PostgreSQLParserListener.prototype.exitInsert_column_item = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_on_conflict.
PostgreSQLParserListener.prototype.enterOpt_on_conflict = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_on_conflict.
PostgreSQLParserListener.prototype.exitOpt_on_conflict = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_conf_expr.
PostgreSQLParserListener.prototype.enterOpt_conf_expr = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_conf_expr.
PostgreSQLParserListener.prototype.exitOpt_conf_expr = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#returning_clause.
PostgreSQLParserListener.prototype.enterReturning_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#returning_clause.
PostgreSQLParserListener.prototype.exitReturning_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#deletestmt.
PostgreSQLParserListener.prototype.enterDeletestmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#deletestmt.
PostgreSQLParserListener.prototype.exitDeletestmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#using_clause.
PostgreSQLParserListener.prototype.enterUsing_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#using_clause.
PostgreSQLParserListener.prototype.exitUsing_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#lockstmt.
PostgreSQLParserListener.prototype.enterLockstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#lockstmt.
PostgreSQLParserListener.prototype.exitLockstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_lock.
PostgreSQLParserListener.prototype.enterOpt_lock = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_lock.
PostgreSQLParserListener.prototype.exitOpt_lock = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#lock_type.
PostgreSQLParserListener.prototype.enterLock_type = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#lock_type.
PostgreSQLParserListener.prototype.exitLock_type = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_nowait.
PostgreSQLParserListener.prototype.enterOpt_nowait = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_nowait.
PostgreSQLParserListener.prototype.exitOpt_nowait = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_nowait_or_skip.
PostgreSQLParserListener.prototype.enterOpt_nowait_or_skip = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_nowait_or_skip.
PostgreSQLParserListener.prototype.exitOpt_nowait_or_skip = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#updatestmt.
PostgreSQLParserListener.prototype.enterUpdatestmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#updatestmt.
PostgreSQLParserListener.prototype.exitUpdatestmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#set_clause_list.
PostgreSQLParserListener.prototype.enterSet_clause_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#set_clause_list.
PostgreSQLParserListener.prototype.exitSet_clause_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#set_clause.
PostgreSQLParserListener.prototype.enterSet_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#set_clause.
PostgreSQLParserListener.prototype.exitSet_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#set_target.
PostgreSQLParserListener.prototype.enterSet_target = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#set_target.
PostgreSQLParserListener.prototype.exitSet_target = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#set_target_list.
PostgreSQLParserListener.prototype.enterSet_target_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#set_target_list.
PostgreSQLParserListener.prototype.exitSet_target_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#declarecursorstmt.
PostgreSQLParserListener.prototype.enterDeclarecursorstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#declarecursorstmt.
PostgreSQLParserListener.prototype.exitDeclarecursorstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#cursor_name.
PostgreSQLParserListener.prototype.enterCursor_name = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#cursor_name.
PostgreSQLParserListener.prototype.exitCursor_name = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#cursor_options.
PostgreSQLParserListener.prototype.enterCursor_options = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#cursor_options.
PostgreSQLParserListener.prototype.exitCursor_options = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_hold.
PostgreSQLParserListener.prototype.enterOpt_hold = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_hold.
PostgreSQLParserListener.prototype.exitOpt_hold = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#selectstmt.
PostgreSQLParserListener.prototype.enterSelectstmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#selectstmt.
PostgreSQLParserListener.prototype.exitSelectstmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#select_with_parens.
PostgreSQLParserListener.prototype.enterSelect_with_parens = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#select_with_parens.
PostgreSQLParserListener.prototype.exitSelect_with_parens = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#select_no_parens.
PostgreSQLParserListener.prototype.enterSelect_no_parens = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#select_no_parens.
PostgreSQLParserListener.prototype.exitSelect_no_parens = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#select_clause.
PostgreSQLParserListener.prototype.enterSelect_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#select_clause.
PostgreSQLParserListener.prototype.exitSelect_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#simple_select.
PostgreSQLParserListener.prototype.enterSimple_select = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#simple_select.
PostgreSQLParserListener.prototype.exitSimple_select = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#union.
PostgreSQLParserListener.prototype.enterUnion = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#union.
PostgreSQLParserListener.prototype.exitUnion = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#intersect.
PostgreSQLParserListener.prototype.enterIntersect = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#intersect.
PostgreSQLParserListener.prototype.exitIntersect = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#except.
PostgreSQLParserListener.prototype.enterExcept = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#except.
PostgreSQLParserListener.prototype.exitExcept = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#set_operator_with_all_or_distinct.
PostgreSQLParserListener.prototype.enterSet_operator_with_all_or_distinct = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#set_operator_with_all_or_distinct.
PostgreSQLParserListener.prototype.exitSet_operator_with_all_or_distinct = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#with_clause.
PostgreSQLParserListener.prototype.enterWith_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#with_clause.
PostgreSQLParserListener.prototype.exitWith_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#cte_list.
PostgreSQLParserListener.prototype.enterCte_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#cte_list.
PostgreSQLParserListener.prototype.exitCte_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#common_table_expr.
PostgreSQLParserListener.prototype.enterCommon_table_expr = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#common_table_expr.
PostgreSQLParserListener.prototype.exitCommon_table_expr = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_materialized.
PostgreSQLParserListener.prototype.enterOpt_materialized = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_materialized.
PostgreSQLParserListener.prototype.exitOpt_materialized = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_with_clause.
PostgreSQLParserListener.prototype.enterOpt_with_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_with_clause.
PostgreSQLParserListener.prototype.exitOpt_with_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#into_clause.
PostgreSQLParserListener.prototype.enterInto_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#into_clause.
PostgreSQLParserListener.prototype.exitInto_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_strict.
PostgreSQLParserListener.prototype.enterOpt_strict = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_strict.
PostgreSQLParserListener.prototype.exitOpt_strict = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opttempTableName.
PostgreSQLParserListener.prototype.enterOpttempTableName = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opttempTableName.
PostgreSQLParserListener.prototype.exitOpttempTableName = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_table.
PostgreSQLParserListener.prototype.enterOpt_table = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_table.
PostgreSQLParserListener.prototype.exitOpt_table = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#all_or_distinct.
PostgreSQLParserListener.prototype.enterAll_or_distinct = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#all_or_distinct.
PostgreSQLParserListener.prototype.exitAll_or_distinct = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#distinct_clause.
PostgreSQLParserListener.prototype.enterDistinct_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#distinct_clause.
PostgreSQLParserListener.prototype.exitDistinct_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_all_clause.
PostgreSQLParserListener.prototype.enterOpt_all_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_all_clause.
PostgreSQLParserListener.prototype.exitOpt_all_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_sort_clause.
PostgreSQLParserListener.prototype.enterOpt_sort_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_sort_clause.
PostgreSQLParserListener.prototype.exitOpt_sort_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#sort_clause.
PostgreSQLParserListener.prototype.enterSort_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#sort_clause.
PostgreSQLParserListener.prototype.exitSort_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#sortby_list.
PostgreSQLParserListener.prototype.enterSortby_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#sortby_list.
PostgreSQLParserListener.prototype.exitSortby_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#sortby.
PostgreSQLParserListener.prototype.enterSortby = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#sortby.
PostgreSQLParserListener.prototype.exitSortby = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#select_limit.
PostgreSQLParserListener.prototype.enterSelect_limit = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#select_limit.
PostgreSQLParserListener.prototype.exitSelect_limit = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_select_limit.
PostgreSQLParserListener.prototype.enterOpt_select_limit = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_select_limit.
PostgreSQLParserListener.prototype.exitOpt_select_limit = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#limit_clause.
PostgreSQLParserListener.prototype.enterLimit_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#limit_clause.
PostgreSQLParserListener.prototype.exitLimit_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#offset_clause.
PostgreSQLParserListener.prototype.enterOffset_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#offset_clause.
PostgreSQLParserListener.prototype.exitOffset_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#select_limit_value.
PostgreSQLParserListener.prototype.enterSelect_limit_value = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#select_limit_value.
PostgreSQLParserListener.prototype.exitSelect_limit_value = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#select_offset_value.
PostgreSQLParserListener.prototype.enterSelect_offset_value = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#select_offset_value.
PostgreSQLParserListener.prototype.exitSelect_offset_value = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#select_fetch_first_value.
PostgreSQLParserListener.prototype.enterSelect_fetch_first_value = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#select_fetch_first_value.
PostgreSQLParserListener.prototype.exitSelect_fetch_first_value = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#i_or_f_const.
PostgreSQLParserListener.prototype.enterI_or_f_const = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#i_or_f_const.
PostgreSQLParserListener.prototype.exitI_or_f_const = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#row_or_rows.
PostgreSQLParserListener.prototype.enterRow_or_rows = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#row_or_rows.
PostgreSQLParserListener.prototype.exitRow_or_rows = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#first_or_next.
PostgreSQLParserListener.prototype.enterFirst_or_next = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#first_or_next.
PostgreSQLParserListener.prototype.exitFirst_or_next = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#group_clause.
PostgreSQLParserListener.prototype.enterGroup_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#group_clause.
PostgreSQLParserListener.prototype.exitGroup_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#group_by_list.
PostgreSQLParserListener.prototype.enterGroup_by_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#group_by_list.
PostgreSQLParserListener.prototype.exitGroup_by_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#group_by_item.
PostgreSQLParserListener.prototype.enterGroup_by_item = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#group_by_item.
PostgreSQLParserListener.prototype.exitGroup_by_item = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#empty_grouping_set.
PostgreSQLParserListener.prototype.enterEmpty_grouping_set = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#empty_grouping_set.
PostgreSQLParserListener.prototype.exitEmpty_grouping_set = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#rollup_clause.
PostgreSQLParserListener.prototype.enterRollup_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#rollup_clause.
PostgreSQLParserListener.prototype.exitRollup_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#cube_clause.
PostgreSQLParserListener.prototype.enterCube_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#cube_clause.
PostgreSQLParserListener.prototype.exitCube_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#grouping_sets_clause.
PostgreSQLParserListener.prototype.enterGrouping_sets_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#grouping_sets_clause.
PostgreSQLParserListener.prototype.exitGrouping_sets_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#having_clause.
PostgreSQLParserListener.prototype.enterHaving_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#having_clause.
PostgreSQLParserListener.prototype.exitHaving_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#for_locking_clause.
PostgreSQLParserListener.prototype.enterFor_locking_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#for_locking_clause.
PostgreSQLParserListener.prototype.exitFor_locking_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_for_locking_clause.
PostgreSQLParserListener.prototype.enterOpt_for_locking_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_for_locking_clause.
PostgreSQLParserListener.prototype.exitOpt_for_locking_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#for_locking_items.
PostgreSQLParserListener.prototype.enterFor_locking_items = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#for_locking_items.
PostgreSQLParserListener.prototype.exitFor_locking_items = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#for_locking_item.
PostgreSQLParserListener.prototype.enterFor_locking_item = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#for_locking_item.
PostgreSQLParserListener.prototype.exitFor_locking_item = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#for_locking_strength.
PostgreSQLParserListener.prototype.enterFor_locking_strength = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#for_locking_strength.
PostgreSQLParserListener.prototype.exitFor_locking_strength = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#locked_rels_list.
PostgreSQLParserListener.prototype.enterLocked_rels_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#locked_rels_list.
PostgreSQLParserListener.prototype.exitLocked_rels_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#values_clause.
PostgreSQLParserListener.prototype.enterValues_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#values_clause.
PostgreSQLParserListener.prototype.exitValues_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#from_clause.
PostgreSQLParserListener.prototype.enterFrom_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#from_clause.
PostgreSQLParserListener.prototype.exitFrom_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#from_list.
PostgreSQLParserListener.prototype.enterFrom_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#from_list.
PostgreSQLParserListener.prototype.exitFrom_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#table_ref.
PostgreSQLParserListener.prototype.enterTable_ref = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#table_ref.
PostgreSQLParserListener.prototype.exitTable_ref = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#alias_clause.
PostgreSQLParserListener.prototype.enterAlias_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#alias_clause.
PostgreSQLParserListener.prototype.exitAlias_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_alias_clause.
PostgreSQLParserListener.prototype.enterOpt_alias_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_alias_clause.
PostgreSQLParserListener.prototype.exitOpt_alias_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#func_alias_clause.
PostgreSQLParserListener.prototype.enterFunc_alias_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#func_alias_clause.
PostgreSQLParserListener.prototype.exitFunc_alias_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#join_type.
PostgreSQLParserListener.prototype.enterJoin_type = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#join_type.
PostgreSQLParserListener.prototype.exitJoin_type = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#join_qual.
PostgreSQLParserListener.prototype.enterJoin_qual = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#join_qual.
PostgreSQLParserListener.prototype.exitJoin_qual = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#relation_expr.
PostgreSQLParserListener.prototype.enterRelation_expr = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#relation_expr.
PostgreSQLParserListener.prototype.exitRelation_expr = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#relation_expr_list.
PostgreSQLParserListener.prototype.enterRelation_expr_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#relation_expr_list.
PostgreSQLParserListener.prototype.exitRelation_expr_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#relation_expr_opt_alias.
PostgreSQLParserListener.prototype.enterRelation_expr_opt_alias = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#relation_expr_opt_alias.
PostgreSQLParserListener.prototype.exitRelation_expr_opt_alias = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#tablesample_clause.
PostgreSQLParserListener.prototype.enterTablesample_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#tablesample_clause.
PostgreSQLParserListener.prototype.exitTablesample_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_repeatable_clause.
PostgreSQLParserListener.prototype.enterOpt_repeatable_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_repeatable_clause.
PostgreSQLParserListener.prototype.exitOpt_repeatable_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#func_table.
PostgreSQLParserListener.prototype.enterFunc_table = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#func_table.
PostgreSQLParserListener.prototype.exitFunc_table = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#rowsfrom_item.
PostgreSQLParserListener.prototype.enterRowsfrom_item = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#rowsfrom_item.
PostgreSQLParserListener.prototype.exitRowsfrom_item = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#rowsfrom_list.
PostgreSQLParserListener.prototype.enterRowsfrom_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#rowsfrom_list.
PostgreSQLParserListener.prototype.exitRowsfrom_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_col_def_list.
PostgreSQLParserListener.prototype.enterOpt_col_def_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_col_def_list.
PostgreSQLParserListener.prototype.exitOpt_col_def_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_ordinality.
PostgreSQLParserListener.prototype.enterOpt_ordinality = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_ordinality.
PostgreSQLParserListener.prototype.exitOpt_ordinality = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#where_clause.
PostgreSQLParserListener.prototype.enterWhere_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#where_clause.
PostgreSQLParserListener.prototype.exitWhere_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#where_or_current_clause.
PostgreSQLParserListener.prototype.enterWhere_or_current_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#where_or_current_clause.
PostgreSQLParserListener.prototype.exitWhere_or_current_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opttablefuncelementlist.
PostgreSQLParserListener.prototype.enterOpttablefuncelementlist = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opttablefuncelementlist.
PostgreSQLParserListener.prototype.exitOpttablefuncelementlist = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#tablefuncelementlist.
PostgreSQLParserListener.prototype.enterTablefuncelementlist = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#tablefuncelementlist.
PostgreSQLParserListener.prototype.exitTablefuncelementlist = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#tablefuncelement.
PostgreSQLParserListener.prototype.enterTablefuncelement = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#tablefuncelement.
PostgreSQLParserListener.prototype.exitTablefuncelement = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#xmltable.
PostgreSQLParserListener.prototype.enterXmltable = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#xmltable.
PostgreSQLParserListener.prototype.exitXmltable = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#xmltable_column_list.
PostgreSQLParserListener.prototype.enterXmltable_column_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#xmltable_column_list.
PostgreSQLParserListener.prototype.exitXmltable_column_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#xmltable_column_el.
PostgreSQLParserListener.prototype.enterXmltable_column_el = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#xmltable_column_el.
PostgreSQLParserListener.prototype.exitXmltable_column_el = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#xmltable_column_option_list.
PostgreSQLParserListener.prototype.enterXmltable_column_option_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#xmltable_column_option_list.
PostgreSQLParserListener.prototype.exitXmltable_column_option_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#xmltable_column_option_el.
PostgreSQLParserListener.prototype.enterXmltable_column_option_el = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#xmltable_column_option_el.
PostgreSQLParserListener.prototype.exitXmltable_column_option_el = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#xml_namespace_list.
PostgreSQLParserListener.prototype.enterXml_namespace_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#xml_namespace_list.
PostgreSQLParserListener.prototype.exitXml_namespace_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#xml_namespace_el.
PostgreSQLParserListener.prototype.enterXml_namespace_el = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#xml_namespace_el.
PostgreSQLParserListener.prototype.exitXml_namespace_el = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#typename.
PostgreSQLParserListener.prototype.enterTypename = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#typename.
PostgreSQLParserListener.prototype.exitTypename = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_array_bounds.
PostgreSQLParserListener.prototype.enterOpt_array_bounds = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_array_bounds.
PostgreSQLParserListener.prototype.exitOpt_array_bounds = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#simpletypename.
PostgreSQLParserListener.prototype.enterSimpletypename = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#simpletypename.
PostgreSQLParserListener.prototype.exitSimpletypename = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#consttypename.
PostgreSQLParserListener.prototype.enterConsttypename = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#consttypename.
PostgreSQLParserListener.prototype.exitConsttypename = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#generictype.
PostgreSQLParserListener.prototype.enterGenerictype = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#generictype.
PostgreSQLParserListener.prototype.exitGenerictype = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_type_modifiers.
PostgreSQLParserListener.prototype.enterOpt_type_modifiers = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_type_modifiers.
PostgreSQLParserListener.prototype.exitOpt_type_modifiers = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#numeric.
PostgreSQLParserListener.prototype.enterNumeric = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#numeric.
PostgreSQLParserListener.prototype.exitNumeric = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_float.
PostgreSQLParserListener.prototype.enterOpt_float = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_float.
PostgreSQLParserListener.prototype.exitOpt_float = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#bit.
PostgreSQLParserListener.prototype.enterBit = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#bit.
PostgreSQLParserListener.prototype.exitBit = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#constbit.
PostgreSQLParserListener.prototype.enterConstbit = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#constbit.
PostgreSQLParserListener.prototype.exitConstbit = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#bitwithlength.
PostgreSQLParserListener.prototype.enterBitwithlength = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#bitwithlength.
PostgreSQLParserListener.prototype.exitBitwithlength = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#bitwithoutlength.
PostgreSQLParserListener.prototype.enterBitwithoutlength = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#bitwithoutlength.
PostgreSQLParserListener.prototype.exitBitwithoutlength = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#character.
PostgreSQLParserListener.prototype.enterCharacter = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#character.
PostgreSQLParserListener.prototype.exitCharacter = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#constcharacter.
PostgreSQLParserListener.prototype.enterConstcharacter = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#constcharacter.
PostgreSQLParserListener.prototype.exitConstcharacter = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#character_c.
PostgreSQLParserListener.prototype.enterCharacter_c = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#character_c.
PostgreSQLParserListener.prototype.exitCharacter_c = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_varying.
PostgreSQLParserListener.prototype.enterOpt_varying = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_varying.
PostgreSQLParserListener.prototype.exitOpt_varying = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#constdatetime.
PostgreSQLParserListener.prototype.enterConstdatetime = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#constdatetime.
PostgreSQLParserListener.prototype.exitConstdatetime = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#constinterval.
PostgreSQLParserListener.prototype.enterConstinterval = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#constinterval.
PostgreSQLParserListener.prototype.exitConstinterval = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_timezone.
PostgreSQLParserListener.prototype.enterOpt_timezone = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_timezone.
PostgreSQLParserListener.prototype.exitOpt_timezone = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_interval.
PostgreSQLParserListener.prototype.enterOpt_interval = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_interval.
PostgreSQLParserListener.prototype.exitOpt_interval = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#interval_second.
PostgreSQLParserListener.prototype.enterInterval_second = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#interval_second.
PostgreSQLParserListener.prototype.exitInterval_second = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_escape.
PostgreSQLParserListener.prototype.enterOpt_escape = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_escape.
PostgreSQLParserListener.prototype.exitOpt_escape = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#a_expr.
PostgreSQLParserListener.prototype.enterA_expr = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#a_expr.
PostgreSQLParserListener.prototype.exitA_expr = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#a_expr_qual.
PostgreSQLParserListener.prototype.enterA_expr_qual = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#a_expr_qual.
PostgreSQLParserListener.prototype.exitA_expr_qual = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#a_expr_lessless.
PostgreSQLParserListener.prototype.enterA_expr_lessless = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#a_expr_lessless.
PostgreSQLParserListener.prototype.exitA_expr_lessless = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#a_expr_or.
PostgreSQLParserListener.prototype.enterA_expr_or = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#a_expr_or.
PostgreSQLParserListener.prototype.exitA_expr_or = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#a_expr_and.
PostgreSQLParserListener.prototype.enterA_expr_and = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#a_expr_and.
PostgreSQLParserListener.prototype.exitA_expr_and = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#a_expr_in.
PostgreSQLParserListener.prototype.enterA_expr_in = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#a_expr_in.
PostgreSQLParserListener.prototype.exitA_expr_in = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#a_expr_unary_not.
PostgreSQLParserListener.prototype.enterA_expr_unary_not = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#a_expr_unary_not.
PostgreSQLParserListener.prototype.exitA_expr_unary_not = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#a_expr_isnull.
PostgreSQLParserListener.prototype.enterA_expr_isnull = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#a_expr_isnull.
PostgreSQLParserListener.prototype.exitA_expr_isnull = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#a_expr_is_not.
PostgreSQLParserListener.prototype.enterA_expr_is_not = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#a_expr_is_not.
PostgreSQLParserListener.prototype.exitA_expr_is_not = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#a_expr_compare.
PostgreSQLParserListener.prototype.enterA_expr_compare = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#a_expr_compare.
PostgreSQLParserListener.prototype.exitA_expr_compare = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#a_expr_like.
PostgreSQLParserListener.prototype.enterA_expr_like = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#a_expr_like.
PostgreSQLParserListener.prototype.exitA_expr_like = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#a_expr_qual_op.
PostgreSQLParserListener.prototype.enterA_expr_qual_op = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#a_expr_qual_op.
PostgreSQLParserListener.prototype.exitA_expr_qual_op = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#a_expr_unary_qualop.
PostgreSQLParserListener.prototype.enterA_expr_unary_qualop = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#a_expr_unary_qualop.
PostgreSQLParserListener.prototype.exitA_expr_unary_qualop = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#a_expr_add.
PostgreSQLParserListener.prototype.enterA_expr_add = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#a_expr_add.
PostgreSQLParserListener.prototype.exitA_expr_add = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#a_expr_mul.
PostgreSQLParserListener.prototype.enterA_expr_mul = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#a_expr_mul.
PostgreSQLParserListener.prototype.exitA_expr_mul = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#a_expr_caret.
PostgreSQLParserListener.prototype.enterA_expr_caret = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#a_expr_caret.
PostgreSQLParserListener.prototype.exitA_expr_caret = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#a_expr_unary_sign.
PostgreSQLParserListener.prototype.enterA_expr_unary_sign = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#a_expr_unary_sign.
PostgreSQLParserListener.prototype.exitA_expr_unary_sign = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#a_expr_at_time_zone.
PostgreSQLParserListener.prototype.enterA_expr_at_time_zone = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#a_expr_at_time_zone.
PostgreSQLParserListener.prototype.exitA_expr_at_time_zone = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#a_expr_collate.
PostgreSQLParserListener.prototype.enterA_expr_collate = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#a_expr_collate.
PostgreSQLParserListener.prototype.exitA_expr_collate = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#a_expr_typecast.
PostgreSQLParserListener.prototype.enterA_expr_typecast = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#a_expr_typecast.
PostgreSQLParserListener.prototype.exitA_expr_typecast = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#b_expr.
PostgreSQLParserListener.prototype.enterB_expr = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#b_expr.
PostgreSQLParserListener.prototype.exitB_expr = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#c_expr_exists.
PostgreSQLParserListener.prototype.enterC_expr_exists = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#c_expr_exists.
PostgreSQLParserListener.prototype.exitC_expr_exists = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#c_expr_expr.
PostgreSQLParserListener.prototype.enterC_expr_expr = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#c_expr_expr.
PostgreSQLParserListener.prototype.exitC_expr_expr = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#c_expr_case.
PostgreSQLParserListener.prototype.enterC_expr_case = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#c_expr_case.
PostgreSQLParserListener.prototype.exitC_expr_case = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#plsqlvariablename.
PostgreSQLParserListener.prototype.enterPlsqlvariablename = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#plsqlvariablename.
PostgreSQLParserListener.prototype.exitPlsqlvariablename = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#func_application.
PostgreSQLParserListener.prototype.enterFunc_application = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#func_application.
PostgreSQLParserListener.prototype.exitFunc_application = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#func_expr.
PostgreSQLParserListener.prototype.enterFunc_expr = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#func_expr.
PostgreSQLParserListener.prototype.exitFunc_expr = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#func_expr_windowless.
PostgreSQLParserListener.prototype.enterFunc_expr_windowless = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#func_expr_windowless.
PostgreSQLParserListener.prototype.exitFunc_expr_windowless = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#func_expr_common_subexpr.
PostgreSQLParserListener.prototype.enterFunc_expr_common_subexpr = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#func_expr_common_subexpr.
PostgreSQLParserListener.prototype.exitFunc_expr_common_subexpr = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#xml_root_version.
PostgreSQLParserListener.prototype.enterXml_root_version = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#xml_root_version.
PostgreSQLParserListener.prototype.exitXml_root_version = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_xml_root_standalone.
PostgreSQLParserListener.prototype.enterOpt_xml_root_standalone = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_xml_root_standalone.
PostgreSQLParserListener.prototype.exitOpt_xml_root_standalone = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#xml_attributes.
PostgreSQLParserListener.prototype.enterXml_attributes = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#xml_attributes.
PostgreSQLParserListener.prototype.exitXml_attributes = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#xml_attribute_list.
PostgreSQLParserListener.prototype.enterXml_attribute_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#xml_attribute_list.
PostgreSQLParserListener.prototype.exitXml_attribute_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#xml_attribute_el.
PostgreSQLParserListener.prototype.enterXml_attribute_el = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#xml_attribute_el.
PostgreSQLParserListener.prototype.exitXml_attribute_el = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#document_or_content.
PostgreSQLParserListener.prototype.enterDocument_or_content = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#document_or_content.
PostgreSQLParserListener.prototype.exitDocument_or_content = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#xml_whitespace_option.
PostgreSQLParserListener.prototype.enterXml_whitespace_option = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#xml_whitespace_option.
PostgreSQLParserListener.prototype.exitXml_whitespace_option = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#xmlexists_argument.
PostgreSQLParserListener.prototype.enterXmlexists_argument = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#xmlexists_argument.
PostgreSQLParserListener.prototype.exitXmlexists_argument = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#xml_passing_mech.
PostgreSQLParserListener.prototype.enterXml_passing_mech = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#xml_passing_mech.
PostgreSQLParserListener.prototype.exitXml_passing_mech = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#within_group_clause.
PostgreSQLParserListener.prototype.enterWithin_group_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#within_group_clause.
PostgreSQLParserListener.prototype.exitWithin_group_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#filter_clause.
PostgreSQLParserListener.prototype.enterFilter_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#filter_clause.
PostgreSQLParserListener.prototype.exitFilter_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#window_clause.
PostgreSQLParserListener.prototype.enterWindow_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#window_clause.
PostgreSQLParserListener.prototype.exitWindow_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#window_definition_list.
PostgreSQLParserListener.prototype.enterWindow_definition_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#window_definition_list.
PostgreSQLParserListener.prototype.exitWindow_definition_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#window_definition.
PostgreSQLParserListener.prototype.enterWindow_definition = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#window_definition.
PostgreSQLParserListener.prototype.exitWindow_definition = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#over_clause.
PostgreSQLParserListener.prototype.enterOver_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#over_clause.
PostgreSQLParserListener.prototype.exitOver_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#window_specification.
PostgreSQLParserListener.prototype.enterWindow_specification = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#window_specification.
PostgreSQLParserListener.prototype.exitWindow_specification = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_existing_window_name.
PostgreSQLParserListener.prototype.enterOpt_existing_window_name = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_existing_window_name.
PostgreSQLParserListener.prototype.exitOpt_existing_window_name = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_partition_clause.
PostgreSQLParserListener.prototype.enterOpt_partition_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_partition_clause.
PostgreSQLParserListener.prototype.exitOpt_partition_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_frame_clause.
PostgreSQLParserListener.prototype.enterOpt_frame_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_frame_clause.
PostgreSQLParserListener.prototype.exitOpt_frame_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#frame_extent.
PostgreSQLParserListener.prototype.enterFrame_extent = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#frame_extent.
PostgreSQLParserListener.prototype.exitFrame_extent = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#frame_bound.
PostgreSQLParserListener.prototype.enterFrame_bound = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#frame_bound.
PostgreSQLParserListener.prototype.exitFrame_bound = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_window_exclusion_clause.
PostgreSQLParserListener.prototype.enterOpt_window_exclusion_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_window_exclusion_clause.
PostgreSQLParserListener.prototype.exitOpt_window_exclusion_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#row.
PostgreSQLParserListener.prototype.enterRow = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#row.
PostgreSQLParserListener.prototype.exitRow = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#explicit_row.
PostgreSQLParserListener.prototype.enterExplicit_row = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#explicit_row.
PostgreSQLParserListener.prototype.exitExplicit_row = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#implicit_row.
PostgreSQLParserListener.prototype.enterImplicit_row = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#implicit_row.
PostgreSQLParserListener.prototype.exitImplicit_row = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#sub_type.
PostgreSQLParserListener.prototype.enterSub_type = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#sub_type.
PostgreSQLParserListener.prototype.exitSub_type = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#all_op.
PostgreSQLParserListener.prototype.enterAll_op = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#all_op.
PostgreSQLParserListener.prototype.exitAll_op = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#mathop.
PostgreSQLParserListener.prototype.enterMathop = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#mathop.
PostgreSQLParserListener.prototype.exitMathop = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#qual_op.
PostgreSQLParserListener.prototype.enterQual_op = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#qual_op.
PostgreSQLParserListener.prototype.exitQual_op = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#qual_all_op.
PostgreSQLParserListener.prototype.enterQual_all_op = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#qual_all_op.
PostgreSQLParserListener.prototype.exitQual_all_op = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#subquery_Op.
PostgreSQLParserListener.prototype.enterSubquery_Op = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#subquery_Op.
PostgreSQLParserListener.prototype.exitSubquery_Op = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#expr_list.
PostgreSQLParserListener.prototype.enterExpr_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#expr_list.
PostgreSQLParserListener.prototype.exitExpr_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#func_arg_list.
PostgreSQLParserListener.prototype.enterFunc_arg_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#func_arg_list.
PostgreSQLParserListener.prototype.exitFunc_arg_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#func_arg_expr.
PostgreSQLParserListener.prototype.enterFunc_arg_expr = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#func_arg_expr.
PostgreSQLParserListener.prototype.exitFunc_arg_expr = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#type_list.
PostgreSQLParserListener.prototype.enterType_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#type_list.
PostgreSQLParserListener.prototype.exitType_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#array_expr.
PostgreSQLParserListener.prototype.enterArray_expr = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#array_expr.
PostgreSQLParserListener.prototype.exitArray_expr = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#array_expr_list.
PostgreSQLParserListener.prototype.enterArray_expr_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#array_expr_list.
PostgreSQLParserListener.prototype.exitArray_expr_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#extract_list.
PostgreSQLParserListener.prototype.enterExtract_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#extract_list.
PostgreSQLParserListener.prototype.exitExtract_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#extract_arg.
PostgreSQLParserListener.prototype.enterExtract_arg = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#extract_arg.
PostgreSQLParserListener.prototype.exitExtract_arg = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#unicode_normal_form.
PostgreSQLParserListener.prototype.enterUnicode_normal_form = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#unicode_normal_form.
PostgreSQLParserListener.prototype.exitUnicode_normal_form = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#overlay_list.
PostgreSQLParserListener.prototype.enterOverlay_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#overlay_list.
PostgreSQLParserListener.prototype.exitOverlay_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#position_list.
PostgreSQLParserListener.prototype.enterPosition_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#position_list.
PostgreSQLParserListener.prototype.exitPosition_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#substr_list.
PostgreSQLParserListener.prototype.enterSubstr_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#substr_list.
PostgreSQLParserListener.prototype.exitSubstr_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#trim_list.
PostgreSQLParserListener.prototype.enterTrim_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#trim_list.
PostgreSQLParserListener.prototype.exitTrim_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#in_expr_select.
PostgreSQLParserListener.prototype.enterIn_expr_select = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#in_expr_select.
PostgreSQLParserListener.prototype.exitIn_expr_select = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#in_expr_list.
PostgreSQLParserListener.prototype.enterIn_expr_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#in_expr_list.
PostgreSQLParserListener.prototype.exitIn_expr_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#case_expr.
PostgreSQLParserListener.prototype.enterCase_expr = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#case_expr.
PostgreSQLParserListener.prototype.exitCase_expr = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#when_clause_list.
PostgreSQLParserListener.prototype.enterWhen_clause_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#when_clause_list.
PostgreSQLParserListener.prototype.exitWhen_clause_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#when_clause.
PostgreSQLParserListener.prototype.enterWhen_clause = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#when_clause.
PostgreSQLParserListener.prototype.exitWhen_clause = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#case_default.
PostgreSQLParserListener.prototype.enterCase_default = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#case_default.
PostgreSQLParserListener.prototype.exitCase_default = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#case_arg.
PostgreSQLParserListener.prototype.enterCase_arg = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#case_arg.
PostgreSQLParserListener.prototype.exitCase_arg = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#columnref.
PostgreSQLParserListener.prototype.enterColumnref = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#columnref.
PostgreSQLParserListener.prototype.exitColumnref = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#indirection_el.
PostgreSQLParserListener.prototype.enterIndirection_el = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#indirection_el.
PostgreSQLParserListener.prototype.exitIndirection_el = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_slice_bound.
PostgreSQLParserListener.prototype.enterOpt_slice_bound = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_slice_bound.
PostgreSQLParserListener.prototype.exitOpt_slice_bound = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#indirection.
PostgreSQLParserListener.prototype.enterIndirection = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#indirection.
PostgreSQLParserListener.prototype.exitIndirection = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_indirection.
PostgreSQLParserListener.prototype.enterOpt_indirection = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_indirection.
PostgreSQLParserListener.prototype.exitOpt_indirection = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_target_list.
PostgreSQLParserListener.prototype.enterOpt_target_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_target_list.
PostgreSQLParserListener.prototype.exitOpt_target_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#target_list.
PostgreSQLParserListener.prototype.enterTarget_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#target_list.
PostgreSQLParserListener.prototype.exitTarget_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#target_label.
PostgreSQLParserListener.prototype.enterTarget_label = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#target_label.
PostgreSQLParserListener.prototype.exitTarget_label = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#target_star.
PostgreSQLParserListener.prototype.enterTarget_star = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#target_star.
PostgreSQLParserListener.prototype.exitTarget_star = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#qualified_name_list.
PostgreSQLParserListener.prototype.enterQualified_name_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#qualified_name_list.
PostgreSQLParserListener.prototype.exitQualified_name_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#qualified_name.
PostgreSQLParserListener.prototype.enterQualified_name = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#qualified_name.
PostgreSQLParserListener.prototype.exitQualified_name = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#name_list.
PostgreSQLParserListener.prototype.enterName_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#name_list.
PostgreSQLParserListener.prototype.exitName_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#name.
PostgreSQLParserListener.prototype.enterName = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#name.
PostgreSQLParserListener.prototype.exitName = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#attr_name.
PostgreSQLParserListener.prototype.enterAttr_name = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#attr_name.
PostgreSQLParserListener.prototype.exitAttr_name = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#file_name.
PostgreSQLParserListener.prototype.enterFile_name = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#file_name.
PostgreSQLParserListener.prototype.exitFile_name = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#func_name.
PostgreSQLParserListener.prototype.enterFunc_name = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#func_name.
PostgreSQLParserListener.prototype.exitFunc_name = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#aexprconst.
PostgreSQLParserListener.prototype.enterAexprconst = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#aexprconst.
PostgreSQLParserListener.prototype.exitAexprconst = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#xconst.
PostgreSQLParserListener.prototype.enterXconst = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#xconst.
PostgreSQLParserListener.prototype.exitXconst = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#bconst.
PostgreSQLParserListener.prototype.enterBconst = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#bconst.
PostgreSQLParserListener.prototype.exitBconst = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#fconst.
PostgreSQLParserListener.prototype.enterFconst = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#fconst.
PostgreSQLParserListener.prototype.exitFconst = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#iconst.
PostgreSQLParserListener.prototype.enterIconst = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#iconst.
PostgreSQLParserListener.prototype.exitIconst = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#sconst.
PostgreSQLParserListener.prototype.enterSconst = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#sconst.
PostgreSQLParserListener.prototype.exitSconst = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#anysconst.
PostgreSQLParserListener.prototype.enterAnysconst = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#anysconst.
PostgreSQLParserListener.prototype.exitAnysconst = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_uescape.
PostgreSQLParserListener.prototype.enterOpt_uescape = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_uescape.
PostgreSQLParserListener.prototype.exitOpt_uescape = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#signediconst.
PostgreSQLParserListener.prototype.enterSignediconst = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#signediconst.
PostgreSQLParserListener.prototype.exitSignediconst = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#roleid.
PostgreSQLParserListener.prototype.enterRoleid = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#roleid.
PostgreSQLParserListener.prototype.exitRoleid = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#rolespec.
PostgreSQLParserListener.prototype.enterRolespec = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#rolespec.
PostgreSQLParserListener.prototype.exitRolespec = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#role_list.
PostgreSQLParserListener.prototype.enterRole_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#role_list.
PostgreSQLParserListener.prototype.exitRole_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#colid.
PostgreSQLParserListener.prototype.enterColid = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#colid.
PostgreSQLParserListener.prototype.exitColid = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#type_function_name.
PostgreSQLParserListener.prototype.enterType_function_name = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#type_function_name.
PostgreSQLParserListener.prototype.exitType_function_name = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#nonreservedword.
PostgreSQLParserListener.prototype.enterNonreservedword = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#nonreservedword.
PostgreSQLParserListener.prototype.exitNonreservedword = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#collabel.
PostgreSQLParserListener.prototype.enterCollabel = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#collabel.
PostgreSQLParserListener.prototype.exitCollabel = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#identifier.
PostgreSQLParserListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#identifier.
PostgreSQLParserListener.prototype.exitIdentifier = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#plsqlidentifier.
PostgreSQLParserListener.prototype.enterPlsqlidentifier = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#plsqlidentifier.
PostgreSQLParserListener.prototype.exitPlsqlidentifier = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#unreserved_keyword.
PostgreSQLParserListener.prototype.enterUnreserved_keyword = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#unreserved_keyword.
PostgreSQLParserListener.prototype.exitUnreserved_keyword = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#col_name_keyword.
PostgreSQLParserListener.prototype.enterCol_name_keyword = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#col_name_keyword.
PostgreSQLParserListener.prototype.exitCol_name_keyword = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#type_func_name_keyword.
PostgreSQLParserListener.prototype.enterType_func_name_keyword = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#type_func_name_keyword.
PostgreSQLParserListener.prototype.exitType_func_name_keyword = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#reserved_keyword.
PostgreSQLParserListener.prototype.enterReserved_keyword = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#reserved_keyword.
PostgreSQLParserListener.prototype.exitReserved_keyword = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#pl_function.
PostgreSQLParserListener.prototype.enterPl_function = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#pl_function.
PostgreSQLParserListener.prototype.exitPl_function = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#comp_options.
PostgreSQLParserListener.prototype.enterComp_options = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#comp_options.
PostgreSQLParserListener.prototype.exitComp_options = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#comp_option.
PostgreSQLParserListener.prototype.enterComp_option = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#comp_option.
PostgreSQLParserListener.prototype.exitComp_option = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#sharp.
PostgreSQLParserListener.prototype.enterSharp = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#sharp.
PostgreSQLParserListener.prototype.exitSharp = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#option_value.
PostgreSQLParserListener.prototype.enterOption_value = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#option_value.
PostgreSQLParserListener.prototype.exitOption_value = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_semi.
PostgreSQLParserListener.prototype.enterOpt_semi = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_semi.
PostgreSQLParserListener.prototype.exitOpt_semi = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#pl_block.
PostgreSQLParserListener.prototype.enterPl_block = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#pl_block.
PostgreSQLParserListener.prototype.exitPl_block = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#decl_sect.
PostgreSQLParserListener.prototype.enterDecl_sect = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#decl_sect.
PostgreSQLParserListener.prototype.exitDecl_sect = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#decl_start.
PostgreSQLParserListener.prototype.enterDecl_start = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#decl_start.
PostgreSQLParserListener.prototype.exitDecl_start = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#decl_stmts.
PostgreSQLParserListener.prototype.enterDecl_stmts = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#decl_stmts.
PostgreSQLParserListener.prototype.exitDecl_stmts = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#label_decl.
PostgreSQLParserListener.prototype.enterLabel_decl = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#label_decl.
PostgreSQLParserListener.prototype.exitLabel_decl = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#decl_stmt.
PostgreSQLParserListener.prototype.enterDecl_stmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#decl_stmt.
PostgreSQLParserListener.prototype.exitDecl_stmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#decl_statement.
PostgreSQLParserListener.prototype.enterDecl_statement = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#decl_statement.
PostgreSQLParserListener.prototype.exitDecl_statement = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_scrollable.
PostgreSQLParserListener.prototype.enterOpt_scrollable = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_scrollable.
PostgreSQLParserListener.prototype.exitOpt_scrollable = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#decl_cursor_query.
PostgreSQLParserListener.prototype.enterDecl_cursor_query = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#decl_cursor_query.
PostgreSQLParserListener.prototype.exitDecl_cursor_query = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#decl_cursor_args.
PostgreSQLParserListener.prototype.enterDecl_cursor_args = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#decl_cursor_args.
PostgreSQLParserListener.prototype.exitDecl_cursor_args = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#decl_cursor_arglist.
PostgreSQLParserListener.prototype.enterDecl_cursor_arglist = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#decl_cursor_arglist.
PostgreSQLParserListener.prototype.exitDecl_cursor_arglist = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#decl_cursor_arg.
PostgreSQLParserListener.prototype.enterDecl_cursor_arg = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#decl_cursor_arg.
PostgreSQLParserListener.prototype.exitDecl_cursor_arg = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#decl_is_for.
PostgreSQLParserListener.prototype.enterDecl_is_for = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#decl_is_for.
PostgreSQLParserListener.prototype.exitDecl_is_for = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#decl_aliasitem.
PostgreSQLParserListener.prototype.enterDecl_aliasitem = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#decl_aliasitem.
PostgreSQLParserListener.prototype.exitDecl_aliasitem = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#decl_varname.
PostgreSQLParserListener.prototype.enterDecl_varname = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#decl_varname.
PostgreSQLParserListener.prototype.exitDecl_varname = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#decl_const.
PostgreSQLParserListener.prototype.enterDecl_const = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#decl_const.
PostgreSQLParserListener.prototype.exitDecl_const = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#decl_datatype.
PostgreSQLParserListener.prototype.enterDecl_datatype = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#decl_datatype.
PostgreSQLParserListener.prototype.exitDecl_datatype = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#decl_collate.
PostgreSQLParserListener.prototype.enterDecl_collate = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#decl_collate.
PostgreSQLParserListener.prototype.exitDecl_collate = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#decl_notnull.
PostgreSQLParserListener.prototype.enterDecl_notnull = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#decl_notnull.
PostgreSQLParserListener.prototype.exitDecl_notnull = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#decl_defval.
PostgreSQLParserListener.prototype.enterDecl_defval = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#decl_defval.
PostgreSQLParserListener.prototype.exitDecl_defval = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#decl_defkey.
PostgreSQLParserListener.prototype.enterDecl_defkey = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#decl_defkey.
PostgreSQLParserListener.prototype.exitDecl_defkey = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#assign_operator.
PostgreSQLParserListener.prototype.enterAssign_operator = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#assign_operator.
PostgreSQLParserListener.prototype.exitAssign_operator = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#proc_sect.
PostgreSQLParserListener.prototype.enterProc_sect = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#proc_sect.
PostgreSQLParserListener.prototype.exitProc_sect = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#proc_stmt.
PostgreSQLParserListener.prototype.enterProc_stmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#proc_stmt.
PostgreSQLParserListener.prototype.exitProc_stmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#stmt_perform.
PostgreSQLParserListener.prototype.enterStmt_perform = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#stmt_perform.
PostgreSQLParserListener.prototype.exitStmt_perform = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#stmt_call.
PostgreSQLParserListener.prototype.enterStmt_call = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#stmt_call.
PostgreSQLParserListener.prototype.exitStmt_call = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_expr_list.
PostgreSQLParserListener.prototype.enterOpt_expr_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_expr_list.
PostgreSQLParserListener.prototype.exitOpt_expr_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#stmt_assign.
PostgreSQLParserListener.prototype.enterStmt_assign = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#stmt_assign.
PostgreSQLParserListener.prototype.exitStmt_assign = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#stmt_getdiag.
PostgreSQLParserListener.prototype.enterStmt_getdiag = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#stmt_getdiag.
PostgreSQLParserListener.prototype.exitStmt_getdiag = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#getdiag_area_opt.
PostgreSQLParserListener.prototype.enterGetdiag_area_opt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#getdiag_area_opt.
PostgreSQLParserListener.prototype.exitGetdiag_area_opt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#getdiag_list.
PostgreSQLParserListener.prototype.enterGetdiag_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#getdiag_list.
PostgreSQLParserListener.prototype.exitGetdiag_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#getdiag_list_item.
PostgreSQLParserListener.prototype.enterGetdiag_list_item = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#getdiag_list_item.
PostgreSQLParserListener.prototype.exitGetdiag_list_item = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#getdiag_item.
PostgreSQLParserListener.prototype.enterGetdiag_item = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#getdiag_item.
PostgreSQLParserListener.prototype.exitGetdiag_item = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#getdiag_target.
PostgreSQLParserListener.prototype.enterGetdiag_target = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#getdiag_target.
PostgreSQLParserListener.prototype.exitGetdiag_target = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#assign_var.
PostgreSQLParserListener.prototype.enterAssign_var = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#assign_var.
PostgreSQLParserListener.prototype.exitAssign_var = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#stmt_if.
PostgreSQLParserListener.prototype.enterStmt_if = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#stmt_if.
PostgreSQLParserListener.prototype.exitStmt_if = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#stmt_elsifs.
PostgreSQLParserListener.prototype.enterStmt_elsifs = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#stmt_elsifs.
PostgreSQLParserListener.prototype.exitStmt_elsifs = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#stmt_else.
PostgreSQLParserListener.prototype.enterStmt_else = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#stmt_else.
PostgreSQLParserListener.prototype.exitStmt_else = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#stmt_case.
PostgreSQLParserListener.prototype.enterStmt_case = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#stmt_case.
PostgreSQLParserListener.prototype.exitStmt_case = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_expr_until_when.
PostgreSQLParserListener.prototype.enterOpt_expr_until_when = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_expr_until_when.
PostgreSQLParserListener.prototype.exitOpt_expr_until_when = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#case_when_list.
PostgreSQLParserListener.prototype.enterCase_when_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#case_when_list.
PostgreSQLParserListener.prototype.exitCase_when_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#case_when.
PostgreSQLParserListener.prototype.enterCase_when = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#case_when.
PostgreSQLParserListener.prototype.exitCase_when = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_case_else.
PostgreSQLParserListener.prototype.enterOpt_case_else = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_case_else.
PostgreSQLParserListener.prototype.exitOpt_case_else = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#stmt_loop.
PostgreSQLParserListener.prototype.enterStmt_loop = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#stmt_loop.
PostgreSQLParserListener.prototype.exitStmt_loop = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#stmt_while.
PostgreSQLParserListener.prototype.enterStmt_while = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#stmt_while.
PostgreSQLParserListener.prototype.exitStmt_while = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#stmt_for.
PostgreSQLParserListener.prototype.enterStmt_for = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#stmt_for.
PostgreSQLParserListener.prototype.exitStmt_for = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#for_control.
PostgreSQLParserListener.prototype.enterFor_control = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#for_control.
PostgreSQLParserListener.prototype.exitFor_control = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_for_using_expression.
PostgreSQLParserListener.prototype.enterOpt_for_using_expression = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_for_using_expression.
PostgreSQLParserListener.prototype.exitOpt_for_using_expression = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_cursor_parameters.
PostgreSQLParserListener.prototype.enterOpt_cursor_parameters = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_cursor_parameters.
PostgreSQLParserListener.prototype.exitOpt_cursor_parameters = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_reverse.
PostgreSQLParserListener.prototype.enterOpt_reverse = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_reverse.
PostgreSQLParserListener.prototype.exitOpt_reverse = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_by_expression.
PostgreSQLParserListener.prototype.enterOpt_by_expression = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_by_expression.
PostgreSQLParserListener.prototype.exitOpt_by_expression = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#for_variable.
PostgreSQLParserListener.prototype.enterFor_variable = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#for_variable.
PostgreSQLParserListener.prototype.exitFor_variable = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#stmt_foreach_a.
PostgreSQLParserListener.prototype.enterStmt_foreach_a = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#stmt_foreach_a.
PostgreSQLParserListener.prototype.exitStmt_foreach_a = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#foreach_slice.
PostgreSQLParserListener.prototype.enterForeach_slice = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#foreach_slice.
PostgreSQLParserListener.prototype.exitForeach_slice = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#stmt_exit.
PostgreSQLParserListener.prototype.enterStmt_exit = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#stmt_exit.
PostgreSQLParserListener.prototype.exitStmt_exit = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#exit_type.
PostgreSQLParserListener.prototype.enterExit_type = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#exit_type.
PostgreSQLParserListener.prototype.exitExit_type = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#stmt_return.
PostgreSQLParserListener.prototype.enterStmt_return = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#stmt_return.
PostgreSQLParserListener.prototype.exitStmt_return = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_return_result.
PostgreSQLParserListener.prototype.enterOpt_return_result = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_return_result.
PostgreSQLParserListener.prototype.exitOpt_return_result = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#stmt_raise.
PostgreSQLParserListener.prototype.enterStmt_raise = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#stmt_raise.
PostgreSQLParserListener.prototype.exitStmt_raise = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_stmt_raise_level.
PostgreSQLParserListener.prototype.enterOpt_stmt_raise_level = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_stmt_raise_level.
PostgreSQLParserListener.prototype.exitOpt_stmt_raise_level = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_raise_list.
PostgreSQLParserListener.prototype.enterOpt_raise_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_raise_list.
PostgreSQLParserListener.prototype.exitOpt_raise_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_raise_using.
PostgreSQLParserListener.prototype.enterOpt_raise_using = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_raise_using.
PostgreSQLParserListener.prototype.exitOpt_raise_using = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_raise_using_elem.
PostgreSQLParserListener.prototype.enterOpt_raise_using_elem = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_raise_using_elem.
PostgreSQLParserListener.prototype.exitOpt_raise_using_elem = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_raise_using_elem_list.
PostgreSQLParserListener.prototype.enterOpt_raise_using_elem_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_raise_using_elem_list.
PostgreSQLParserListener.prototype.exitOpt_raise_using_elem_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#stmt_assert.
PostgreSQLParserListener.prototype.enterStmt_assert = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#stmt_assert.
PostgreSQLParserListener.prototype.exitStmt_assert = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_stmt_assert_message.
PostgreSQLParserListener.prototype.enterOpt_stmt_assert_message = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_stmt_assert_message.
PostgreSQLParserListener.prototype.exitOpt_stmt_assert_message = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#loop_body.
PostgreSQLParserListener.prototype.enterLoop_body = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#loop_body.
PostgreSQLParserListener.prototype.exitLoop_body = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#stmt_execsql.
PostgreSQLParserListener.prototype.enterStmt_execsql = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#stmt_execsql.
PostgreSQLParserListener.prototype.exitStmt_execsql = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#stmt_dynexecute.
PostgreSQLParserListener.prototype.enterStmt_dynexecute = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#stmt_dynexecute.
PostgreSQLParserListener.prototype.exitStmt_dynexecute = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_execute_using.
PostgreSQLParserListener.prototype.enterOpt_execute_using = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_execute_using.
PostgreSQLParserListener.prototype.exitOpt_execute_using = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_execute_using_list.
PostgreSQLParserListener.prototype.enterOpt_execute_using_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_execute_using_list.
PostgreSQLParserListener.prototype.exitOpt_execute_using_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_execute_into.
PostgreSQLParserListener.prototype.enterOpt_execute_into = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_execute_into.
PostgreSQLParserListener.prototype.exitOpt_execute_into = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#stmt_open.
PostgreSQLParserListener.prototype.enterStmt_open = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#stmt_open.
PostgreSQLParserListener.prototype.exitStmt_open = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_open_bound_list_item.
PostgreSQLParserListener.prototype.enterOpt_open_bound_list_item = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_open_bound_list_item.
PostgreSQLParserListener.prototype.exitOpt_open_bound_list_item = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_open_bound_list.
PostgreSQLParserListener.prototype.enterOpt_open_bound_list = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_open_bound_list.
PostgreSQLParserListener.prototype.exitOpt_open_bound_list = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_open_using.
PostgreSQLParserListener.prototype.enterOpt_open_using = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_open_using.
PostgreSQLParserListener.prototype.exitOpt_open_using = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_scroll_option.
PostgreSQLParserListener.prototype.enterOpt_scroll_option = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_scroll_option.
PostgreSQLParserListener.prototype.exitOpt_scroll_option = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_scroll_option_no.
PostgreSQLParserListener.prototype.enterOpt_scroll_option_no = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_scroll_option_no.
PostgreSQLParserListener.prototype.exitOpt_scroll_option_no = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#stmt_fetch.
PostgreSQLParserListener.prototype.enterStmt_fetch = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#stmt_fetch.
PostgreSQLParserListener.prototype.exitStmt_fetch = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#into_target.
PostgreSQLParserListener.prototype.enterInto_target = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#into_target.
PostgreSQLParserListener.prototype.exitInto_target = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_cursor_from.
PostgreSQLParserListener.prototype.enterOpt_cursor_from = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_cursor_from.
PostgreSQLParserListener.prototype.exitOpt_cursor_from = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_fetch_direction.
PostgreSQLParserListener.prototype.enterOpt_fetch_direction = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_fetch_direction.
PostgreSQLParserListener.prototype.exitOpt_fetch_direction = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#stmt_move.
PostgreSQLParserListener.prototype.enterStmt_move = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#stmt_move.
PostgreSQLParserListener.prototype.exitStmt_move = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#stmt_close.
PostgreSQLParserListener.prototype.enterStmt_close = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#stmt_close.
PostgreSQLParserListener.prototype.exitStmt_close = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#stmt_null.
PostgreSQLParserListener.prototype.enterStmt_null = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#stmt_null.
PostgreSQLParserListener.prototype.exitStmt_null = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#stmt_commit.
PostgreSQLParserListener.prototype.enterStmt_commit = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#stmt_commit.
PostgreSQLParserListener.prototype.exitStmt_commit = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#stmt_rollback.
PostgreSQLParserListener.prototype.enterStmt_rollback = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#stmt_rollback.
PostgreSQLParserListener.prototype.exitStmt_rollback = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#plsql_opt_transaction_chain.
PostgreSQLParserListener.prototype.enterPlsql_opt_transaction_chain = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#plsql_opt_transaction_chain.
PostgreSQLParserListener.prototype.exitPlsql_opt_transaction_chain = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#stmt_set.
PostgreSQLParserListener.prototype.enterStmt_set = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#stmt_set.
PostgreSQLParserListener.prototype.exitStmt_set = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#cursor_variable.
PostgreSQLParserListener.prototype.enterCursor_variable = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#cursor_variable.
PostgreSQLParserListener.prototype.exitCursor_variable = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#exception_sect.
PostgreSQLParserListener.prototype.enterException_sect = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#exception_sect.
PostgreSQLParserListener.prototype.exitException_sect = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#proc_exceptions.
PostgreSQLParserListener.prototype.enterProc_exceptions = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#proc_exceptions.
PostgreSQLParserListener.prototype.exitProc_exceptions = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#proc_exception.
PostgreSQLParserListener.prototype.enterProc_exception = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#proc_exception.
PostgreSQLParserListener.prototype.exitProc_exception = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#proc_conditions.
PostgreSQLParserListener.prototype.enterProc_conditions = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#proc_conditions.
PostgreSQLParserListener.prototype.exitProc_conditions = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#proc_condition.
PostgreSQLParserListener.prototype.enterProc_condition = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#proc_condition.
PostgreSQLParserListener.prototype.exitProc_condition = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_block_label.
PostgreSQLParserListener.prototype.enterOpt_block_label = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_block_label.
PostgreSQLParserListener.prototype.exitOpt_block_label = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_loop_label.
PostgreSQLParserListener.prototype.enterOpt_loop_label = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_loop_label.
PostgreSQLParserListener.prototype.exitOpt_loop_label = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_label.
PostgreSQLParserListener.prototype.enterOpt_label = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_label.
PostgreSQLParserListener.prototype.exitOpt_label = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_exitcond.
PostgreSQLParserListener.prototype.enterOpt_exitcond = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_exitcond.
PostgreSQLParserListener.prototype.exitOpt_exitcond = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#any_identifier.
PostgreSQLParserListener.prototype.enterAny_identifier = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#any_identifier.
PostgreSQLParserListener.prototype.exitAny_identifier = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#plsql_unreserved_keyword.
PostgreSQLParserListener.prototype.enterPlsql_unreserved_keyword = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#plsql_unreserved_keyword.
PostgreSQLParserListener.prototype.exitPlsql_unreserved_keyword = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#sql_expression.
PostgreSQLParserListener.prototype.enterSql_expression = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#sql_expression.
PostgreSQLParserListener.prototype.exitSql_expression = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#expr_until_then.
PostgreSQLParserListener.prototype.enterExpr_until_then = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#expr_until_then.
PostgreSQLParserListener.prototype.exitExpr_until_then = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#expr_until_semi.
PostgreSQLParserListener.prototype.enterExpr_until_semi = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#expr_until_semi.
PostgreSQLParserListener.prototype.exitExpr_until_semi = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#expr_until_rightbracket.
PostgreSQLParserListener.prototype.enterExpr_until_rightbracket = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#expr_until_rightbracket.
PostgreSQLParserListener.prototype.exitExpr_until_rightbracket = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#expr_until_loop.
PostgreSQLParserListener.prototype.enterExpr_until_loop = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#expr_until_loop.
PostgreSQLParserListener.prototype.exitExpr_until_loop = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#make_execsql_stmt.
PostgreSQLParserListener.prototype.enterMake_execsql_stmt = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#make_execsql_stmt.
PostgreSQLParserListener.prototype.exitMake_execsql_stmt = function(ctx) {
};


// Enter a parse tree produced by PostgreSQLParser#opt_returning_clause_into.
PostgreSQLParserListener.prototype.enterOpt_returning_clause_into = function(ctx) {
};

// Exit a parse tree produced by PostgreSQLParser#opt_returning_clause_into.
PostgreSQLParserListener.prototype.exitOpt_returning_clause_into = function(ctx) {
};



exports.PostgreSQLParserListener = PostgreSQLParserListener;