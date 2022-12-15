// Generated from /Users/salvo/dt-sql-parser2/src/grammar/pgsql/PostgreSQLParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by PostgreSQLParser.

function PostgreSQLParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

PostgreSQLParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
PostgreSQLParserVisitor.prototype.constructor = PostgreSQLParserVisitor;

// Visit a parse tree produced by PostgreSQLParser#program.
PostgreSQLParserVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#plsqlroot.
PostgreSQLParserVisitor.prototype.visitPlsqlroot = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#stmtblock.
PostgreSQLParserVisitor.prototype.visitStmtblock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#stmtmulti.
PostgreSQLParserVisitor.prototype.visitStmtmulti = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#stmt.
PostgreSQLParserVisitor.prototype.visitStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#plsqlconsolecommand.
PostgreSQLParserVisitor.prototype.visitPlsqlconsolecommand = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#callstmt.
PostgreSQLParserVisitor.prototype.visitCallstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createrolestmt.
PostgreSQLParserVisitor.prototype.visitCreaterolestmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_with.
PostgreSQLParserVisitor.prototype.visitOpt_with = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#optrolelist.
PostgreSQLParserVisitor.prototype.visitOptrolelist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alteroptrolelist.
PostgreSQLParserVisitor.prototype.visitAlteroptrolelist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alteroptroleelem.
PostgreSQLParserVisitor.prototype.visitAlteroptroleelem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createoptroleelem.
PostgreSQLParserVisitor.prototype.visitCreateoptroleelem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createuserstmt.
PostgreSQLParserVisitor.prototype.visitCreateuserstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alterrolestmt.
PostgreSQLParserVisitor.prototype.visitAlterrolestmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_in_database.
PostgreSQLParserVisitor.prototype.visitOpt_in_database = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alterrolesetstmt.
PostgreSQLParserVisitor.prototype.visitAlterrolesetstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#droprolestmt.
PostgreSQLParserVisitor.prototype.visitDroprolestmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#creategroupstmt.
PostgreSQLParserVisitor.prototype.visitCreategroupstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#altergroupstmt.
PostgreSQLParserVisitor.prototype.visitAltergroupstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#add_drop.
PostgreSQLParserVisitor.prototype.visitAdd_drop = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createschemastmt.
PostgreSQLParserVisitor.prototype.visitCreateschemastmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#optschemaname.
PostgreSQLParserVisitor.prototype.visitOptschemaname = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#optschemaeltlist.
PostgreSQLParserVisitor.prototype.visitOptschemaeltlist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#schema_stmt.
PostgreSQLParserVisitor.prototype.visitSchema_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#variablesetstmt.
PostgreSQLParserVisitor.prototype.visitVariablesetstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#set_rest.
PostgreSQLParserVisitor.prototype.visitSet_rest = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#generic_set.
PostgreSQLParserVisitor.prototype.visitGeneric_set = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#set_rest_more.
PostgreSQLParserVisitor.prototype.visitSet_rest_more = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#var_name.
PostgreSQLParserVisitor.prototype.visitVar_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#var_list.
PostgreSQLParserVisitor.prototype.visitVar_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#var_value.
PostgreSQLParserVisitor.prototype.visitVar_value = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#iso_level.
PostgreSQLParserVisitor.prototype.visitIso_level = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_boolean_or_string.
PostgreSQLParserVisitor.prototype.visitOpt_boolean_or_string = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#zone_value.
PostgreSQLParserVisitor.prototype.visitZone_value = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_encoding.
PostgreSQLParserVisitor.prototype.visitOpt_encoding = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#nonreservedword_or_sconst.
PostgreSQLParserVisitor.prototype.visitNonreservedword_or_sconst = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#variableresetstmt.
PostgreSQLParserVisitor.prototype.visitVariableresetstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#reset_rest.
PostgreSQLParserVisitor.prototype.visitReset_rest = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#generic_reset.
PostgreSQLParserVisitor.prototype.visitGeneric_reset = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#setresetclause.
PostgreSQLParserVisitor.prototype.visitSetresetclause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#functionsetresetclause.
PostgreSQLParserVisitor.prototype.visitFunctionsetresetclause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#variableshowstmt.
PostgreSQLParserVisitor.prototype.visitVariableshowstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#constraintssetstmt.
PostgreSQLParserVisitor.prototype.visitConstraintssetstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#constraints_set_list.
PostgreSQLParserVisitor.prototype.visitConstraints_set_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#constraints_set_mode.
PostgreSQLParserVisitor.prototype.visitConstraints_set_mode = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#checkpointstmt.
PostgreSQLParserVisitor.prototype.visitCheckpointstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#discardstmt.
PostgreSQLParserVisitor.prototype.visitDiscardstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#altertablestmt.
PostgreSQLParserVisitor.prototype.visitAltertablestmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alter_table_cmds.
PostgreSQLParserVisitor.prototype.visitAlter_table_cmds = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#partition_cmd.
PostgreSQLParserVisitor.prototype.visitPartition_cmd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#index_partition_cmd.
PostgreSQLParserVisitor.prototype.visitIndex_partition_cmd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alter_table_cmd.
PostgreSQLParserVisitor.prototype.visitAlter_table_cmd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alter_column_default.
PostgreSQLParserVisitor.prototype.visitAlter_column_default = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_drop_behavior.
PostgreSQLParserVisitor.prototype.visitOpt_drop_behavior = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_collate_clause.
PostgreSQLParserVisitor.prototype.visitOpt_collate_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alter_using.
PostgreSQLParserVisitor.prototype.visitAlter_using = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#replica_identity.
PostgreSQLParserVisitor.prototype.visitReplica_identity = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#reloptions.
PostgreSQLParserVisitor.prototype.visitReloptions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_reloptions.
PostgreSQLParserVisitor.prototype.visitOpt_reloptions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#reloption_list.
PostgreSQLParserVisitor.prototype.visitReloption_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#reloption_elem.
PostgreSQLParserVisitor.prototype.visitReloption_elem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alter_identity_column_option_list.
PostgreSQLParserVisitor.prototype.visitAlter_identity_column_option_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alter_identity_column_option.
PostgreSQLParserVisitor.prototype.visitAlter_identity_column_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#partitionboundspec.
PostgreSQLParserVisitor.prototype.visitPartitionboundspec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#hash_partbound_elem.
PostgreSQLParserVisitor.prototype.visitHash_partbound_elem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#hash_partbound.
PostgreSQLParserVisitor.prototype.visitHash_partbound = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#altercompositetypestmt.
PostgreSQLParserVisitor.prototype.visitAltercompositetypestmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alter_type_cmds.
PostgreSQLParserVisitor.prototype.visitAlter_type_cmds = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alter_type_cmd.
PostgreSQLParserVisitor.prototype.visitAlter_type_cmd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#closeportalstmt.
PostgreSQLParserVisitor.prototype.visitCloseportalstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#copystmt.
PostgreSQLParserVisitor.prototype.visitCopystmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#copy_from.
PostgreSQLParserVisitor.prototype.visitCopy_from = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_program.
PostgreSQLParserVisitor.prototype.visitOpt_program = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#copy_file_name.
PostgreSQLParserVisitor.prototype.visitCopy_file_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#copy_options.
PostgreSQLParserVisitor.prototype.visitCopy_options = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#copy_opt_list.
PostgreSQLParserVisitor.prototype.visitCopy_opt_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#copy_opt_item.
PostgreSQLParserVisitor.prototype.visitCopy_opt_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_binary.
PostgreSQLParserVisitor.prototype.visitOpt_binary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#copy_delimiter.
PostgreSQLParserVisitor.prototype.visitCopy_delimiter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_using.
PostgreSQLParserVisitor.prototype.visitOpt_using = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#copy_generic_opt_list.
PostgreSQLParserVisitor.prototype.visitCopy_generic_opt_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#copy_generic_opt_elem.
PostgreSQLParserVisitor.prototype.visitCopy_generic_opt_elem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#copy_generic_opt_arg.
PostgreSQLParserVisitor.prototype.visitCopy_generic_opt_arg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#copy_generic_opt_arg_list.
PostgreSQLParserVisitor.prototype.visitCopy_generic_opt_arg_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#copy_generic_opt_arg_list_item.
PostgreSQLParserVisitor.prototype.visitCopy_generic_opt_arg_list_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createstmt.
PostgreSQLParserVisitor.prototype.visitCreatestmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opttemp.
PostgreSQLParserVisitor.prototype.visitOpttemp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opttableelementlist.
PostgreSQLParserVisitor.prototype.visitOpttableelementlist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opttypedtableelementlist.
PostgreSQLParserVisitor.prototype.visitOpttypedtableelementlist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#tableelementlist.
PostgreSQLParserVisitor.prototype.visitTableelementlist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#typedtableelementlist.
PostgreSQLParserVisitor.prototype.visitTypedtableelementlist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#tableelement.
PostgreSQLParserVisitor.prototype.visitTableelement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#typedtableelement.
PostgreSQLParserVisitor.prototype.visitTypedtableelement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#columnDef.
PostgreSQLParserVisitor.prototype.visitColumnDef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#columnOptions.
PostgreSQLParserVisitor.prototype.visitColumnOptions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#colquallist.
PostgreSQLParserVisitor.prototype.visitColquallist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#colconstraint.
PostgreSQLParserVisitor.prototype.visitColconstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#colconstraintelem.
PostgreSQLParserVisitor.prototype.visitColconstraintelem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#generated_when.
PostgreSQLParserVisitor.prototype.visitGenerated_when = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#constraintattr.
PostgreSQLParserVisitor.prototype.visitConstraintattr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#tablelikeclause.
PostgreSQLParserVisitor.prototype.visitTablelikeclause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#tablelikeoptionlist.
PostgreSQLParserVisitor.prototype.visitTablelikeoptionlist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#tablelikeoption.
PostgreSQLParserVisitor.prototype.visitTablelikeoption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#tableconstraint.
PostgreSQLParserVisitor.prototype.visitTableconstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#constraintelem.
PostgreSQLParserVisitor.prototype.visitConstraintelem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_no_inherit.
PostgreSQLParserVisitor.prototype.visitOpt_no_inherit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_column_list.
PostgreSQLParserVisitor.prototype.visitOpt_column_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#columnlist.
PostgreSQLParserVisitor.prototype.visitColumnlist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#columnElem.
PostgreSQLParserVisitor.prototype.visitColumnElem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_c_include.
PostgreSQLParserVisitor.prototype.visitOpt_c_include = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#key_match.
PostgreSQLParserVisitor.prototype.visitKey_match = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#exclusionconstraintlist.
PostgreSQLParserVisitor.prototype.visitExclusionconstraintlist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#exclusionconstraintelem.
PostgreSQLParserVisitor.prototype.visitExclusionconstraintelem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#exclusionwhereclause.
PostgreSQLParserVisitor.prototype.visitExclusionwhereclause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#key_actions.
PostgreSQLParserVisitor.prototype.visitKey_actions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#key_update.
PostgreSQLParserVisitor.prototype.visitKey_update = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#key_delete.
PostgreSQLParserVisitor.prototype.visitKey_delete = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#key_action.
PostgreSQLParserVisitor.prototype.visitKey_action = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#optinherit.
PostgreSQLParserVisitor.prototype.visitOptinherit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#optpartitionspec.
PostgreSQLParserVisitor.prototype.visitOptpartitionspec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#partitionspec.
PostgreSQLParserVisitor.prototype.visitPartitionspec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#part_params.
PostgreSQLParserVisitor.prototype.visitPart_params = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#part_elem.
PostgreSQLParserVisitor.prototype.visitPart_elem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#table_access_method_clause.
PostgreSQLParserVisitor.prototype.visitTable_access_method_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#optwith.
PostgreSQLParserVisitor.prototype.visitOptwith = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#oncommitoption.
PostgreSQLParserVisitor.prototype.visitOncommitoption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opttablespace.
PostgreSQLParserVisitor.prototype.visitOpttablespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#optconstablespace.
PostgreSQLParserVisitor.prototype.visitOptconstablespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#existingindex.
PostgreSQLParserVisitor.prototype.visitExistingindex = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createstatsstmt.
PostgreSQLParserVisitor.prototype.visitCreatestatsstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alterstatsstmt.
PostgreSQLParserVisitor.prototype.visitAlterstatsstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createasstmt.
PostgreSQLParserVisitor.prototype.visitCreateasstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#create_as_target.
PostgreSQLParserVisitor.prototype.visitCreate_as_target = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_with_data.
PostgreSQLParserVisitor.prototype.visitOpt_with_data = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#creatematviewstmt.
PostgreSQLParserVisitor.prototype.visitCreatematviewstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#create_mv_target.
PostgreSQLParserVisitor.prototype.visitCreate_mv_target = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#optnolog.
PostgreSQLParserVisitor.prototype.visitOptnolog = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#refreshmatviewstmt.
PostgreSQLParserVisitor.prototype.visitRefreshmatviewstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createseqstmt.
PostgreSQLParserVisitor.prototype.visitCreateseqstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alterseqstmt.
PostgreSQLParserVisitor.prototype.visitAlterseqstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#optseqoptlist.
PostgreSQLParserVisitor.prototype.visitOptseqoptlist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#optparenthesizedseqoptlist.
PostgreSQLParserVisitor.prototype.visitOptparenthesizedseqoptlist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#seqoptlist.
PostgreSQLParserVisitor.prototype.visitSeqoptlist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#seqoptelem.
PostgreSQLParserVisitor.prototype.visitSeqoptelem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_by.
PostgreSQLParserVisitor.prototype.visitOpt_by = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#numericonly.
PostgreSQLParserVisitor.prototype.visitNumericonly = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#numericonly_list.
PostgreSQLParserVisitor.prototype.visitNumericonly_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createplangstmt.
PostgreSQLParserVisitor.prototype.visitCreateplangstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_trusted.
PostgreSQLParserVisitor.prototype.visitOpt_trusted = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#handler_name.
PostgreSQLParserVisitor.prototype.visitHandler_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_inline_handler.
PostgreSQLParserVisitor.prototype.visitOpt_inline_handler = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#validator_clause.
PostgreSQLParserVisitor.prototype.visitValidator_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_validator.
PostgreSQLParserVisitor.prototype.visitOpt_validator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_procedural.
PostgreSQLParserVisitor.prototype.visitOpt_procedural = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createtablespacestmt.
PostgreSQLParserVisitor.prototype.visitCreatetablespacestmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opttablespaceowner.
PostgreSQLParserVisitor.prototype.visitOpttablespaceowner = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#droptablespacestmt.
PostgreSQLParserVisitor.prototype.visitDroptablespacestmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createextensionstmt.
PostgreSQLParserVisitor.prototype.visitCreateextensionstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#create_extension_opt_list.
PostgreSQLParserVisitor.prototype.visitCreate_extension_opt_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#create_extension_opt_item.
PostgreSQLParserVisitor.prototype.visitCreate_extension_opt_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alterextensionstmt.
PostgreSQLParserVisitor.prototype.visitAlterextensionstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alter_extension_opt_list.
PostgreSQLParserVisitor.prototype.visitAlter_extension_opt_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alter_extension_opt_item.
PostgreSQLParserVisitor.prototype.visitAlter_extension_opt_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alterextensioncontentsstmt.
PostgreSQLParserVisitor.prototype.visitAlterextensioncontentsstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createfdwstmt.
PostgreSQLParserVisitor.prototype.visitCreatefdwstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#fdw_option.
PostgreSQLParserVisitor.prototype.visitFdw_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#fdw_options.
PostgreSQLParserVisitor.prototype.visitFdw_options = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_fdw_options.
PostgreSQLParserVisitor.prototype.visitOpt_fdw_options = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alterfdwstmt.
PostgreSQLParserVisitor.prototype.visitAlterfdwstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#create_generic_options.
PostgreSQLParserVisitor.prototype.visitCreate_generic_options = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#generic_option_list.
PostgreSQLParserVisitor.prototype.visitGeneric_option_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alter_generic_options.
PostgreSQLParserVisitor.prototype.visitAlter_generic_options = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alter_generic_option_list.
PostgreSQLParserVisitor.prototype.visitAlter_generic_option_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alter_generic_option_elem.
PostgreSQLParserVisitor.prototype.visitAlter_generic_option_elem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#generic_option_elem.
PostgreSQLParserVisitor.prototype.visitGeneric_option_elem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#generic_option_name.
PostgreSQLParserVisitor.prototype.visitGeneric_option_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#generic_option_arg.
PostgreSQLParserVisitor.prototype.visitGeneric_option_arg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createforeignserverstmt.
PostgreSQLParserVisitor.prototype.visitCreateforeignserverstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_type.
PostgreSQLParserVisitor.prototype.visitOpt_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#foreign_server_version.
PostgreSQLParserVisitor.prototype.visitForeign_server_version = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_foreign_server_version.
PostgreSQLParserVisitor.prototype.visitOpt_foreign_server_version = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alterforeignserverstmt.
PostgreSQLParserVisitor.prototype.visitAlterforeignserverstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createforeigntablestmt.
PostgreSQLParserVisitor.prototype.visitCreateforeigntablestmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#importforeignschemastmt.
PostgreSQLParserVisitor.prototype.visitImportforeignschemastmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#import_qualification_type.
PostgreSQLParserVisitor.prototype.visitImport_qualification_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#import_qualification.
PostgreSQLParserVisitor.prototype.visitImport_qualification = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createusermappingstmt.
PostgreSQLParserVisitor.prototype.visitCreateusermappingstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#auth_ident.
PostgreSQLParserVisitor.prototype.visitAuth_ident = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#dropusermappingstmt.
PostgreSQLParserVisitor.prototype.visitDropusermappingstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alterusermappingstmt.
PostgreSQLParserVisitor.prototype.visitAlterusermappingstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createpolicystmt.
PostgreSQLParserVisitor.prototype.visitCreatepolicystmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alterpolicystmt.
PostgreSQLParserVisitor.prototype.visitAlterpolicystmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#rowsecurityoptionalexpr.
PostgreSQLParserVisitor.prototype.visitRowsecurityoptionalexpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#rowsecurityoptionalwithcheck.
PostgreSQLParserVisitor.prototype.visitRowsecurityoptionalwithcheck = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#rowsecuritydefaulttorole.
PostgreSQLParserVisitor.prototype.visitRowsecuritydefaulttorole = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#rowsecurityoptionaltorole.
PostgreSQLParserVisitor.prototype.visitRowsecurityoptionaltorole = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#rowsecuritydefaultpermissive.
PostgreSQLParserVisitor.prototype.visitRowsecuritydefaultpermissive = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#rowsecuritydefaultforcmd.
PostgreSQLParserVisitor.prototype.visitRowsecuritydefaultforcmd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#row_security_cmd.
PostgreSQLParserVisitor.prototype.visitRow_security_cmd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createamstmt.
PostgreSQLParserVisitor.prototype.visitCreateamstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#am_type.
PostgreSQLParserVisitor.prototype.visitAm_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createtrigstmt.
PostgreSQLParserVisitor.prototype.visitCreatetrigstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#triggeractiontime.
PostgreSQLParserVisitor.prototype.visitTriggeractiontime = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#triggerevents.
PostgreSQLParserVisitor.prototype.visitTriggerevents = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#triggeroneevent.
PostgreSQLParserVisitor.prototype.visitTriggeroneevent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#triggerreferencing.
PostgreSQLParserVisitor.prototype.visitTriggerreferencing = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#triggertransitions.
PostgreSQLParserVisitor.prototype.visitTriggertransitions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#triggertransition.
PostgreSQLParserVisitor.prototype.visitTriggertransition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#transitionoldornew.
PostgreSQLParserVisitor.prototype.visitTransitionoldornew = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#transitionrowortable.
PostgreSQLParserVisitor.prototype.visitTransitionrowortable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#transitionrelname.
PostgreSQLParserVisitor.prototype.visitTransitionrelname = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#triggerforspec.
PostgreSQLParserVisitor.prototype.visitTriggerforspec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#triggerforopteach.
PostgreSQLParserVisitor.prototype.visitTriggerforopteach = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#triggerfortype.
PostgreSQLParserVisitor.prototype.visitTriggerfortype = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#triggerwhen.
PostgreSQLParserVisitor.prototype.visitTriggerwhen = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#function_or_procedure.
PostgreSQLParserVisitor.prototype.visitFunction_or_procedure = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#triggerfuncargs.
PostgreSQLParserVisitor.prototype.visitTriggerfuncargs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#triggerfuncarg.
PostgreSQLParserVisitor.prototype.visitTriggerfuncarg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#optconstrfromtable.
PostgreSQLParserVisitor.prototype.visitOptconstrfromtable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#constraintattributespec.
PostgreSQLParserVisitor.prototype.visitConstraintattributespec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#constraintattributeElem.
PostgreSQLParserVisitor.prototype.visitConstraintattributeElem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createeventtrigstmt.
PostgreSQLParserVisitor.prototype.visitCreateeventtrigstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#event_trigger_when_list.
PostgreSQLParserVisitor.prototype.visitEvent_trigger_when_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#event_trigger_when_item.
PostgreSQLParserVisitor.prototype.visitEvent_trigger_when_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#event_trigger_value_list.
PostgreSQLParserVisitor.prototype.visitEvent_trigger_value_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#altereventtrigstmt.
PostgreSQLParserVisitor.prototype.visitAltereventtrigstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#enable_trigger.
PostgreSQLParserVisitor.prototype.visitEnable_trigger = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createassertionstmt.
PostgreSQLParserVisitor.prototype.visitCreateassertionstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#definestmt.
PostgreSQLParserVisitor.prototype.visitDefinestmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#definition.
PostgreSQLParserVisitor.prototype.visitDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#def_list.
PostgreSQLParserVisitor.prototype.visitDef_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#def_elem.
PostgreSQLParserVisitor.prototype.visitDef_elem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#def_arg.
PostgreSQLParserVisitor.prototype.visitDef_arg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#old_aggr_definition.
PostgreSQLParserVisitor.prototype.visitOld_aggr_definition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#old_aggr_list.
PostgreSQLParserVisitor.prototype.visitOld_aggr_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#old_aggr_elem.
PostgreSQLParserVisitor.prototype.visitOld_aggr_elem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_enum_val_list.
PostgreSQLParserVisitor.prototype.visitOpt_enum_val_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#enum_val_list.
PostgreSQLParserVisitor.prototype.visitEnum_val_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alterenumstmt.
PostgreSQLParserVisitor.prototype.visitAlterenumstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_if_not_exists.
PostgreSQLParserVisitor.prototype.visitOpt_if_not_exists = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createopclassstmt.
PostgreSQLParserVisitor.prototype.visitCreateopclassstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opclass_item_list.
PostgreSQLParserVisitor.prototype.visitOpclass_item_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opclass_item.
PostgreSQLParserVisitor.prototype.visitOpclass_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_default.
PostgreSQLParserVisitor.prototype.visitOpt_default = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_opfamily.
PostgreSQLParserVisitor.prototype.visitOpt_opfamily = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opclass_purpose.
PostgreSQLParserVisitor.prototype.visitOpclass_purpose = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_recheck.
PostgreSQLParserVisitor.prototype.visitOpt_recheck = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createopfamilystmt.
PostgreSQLParserVisitor.prototype.visitCreateopfamilystmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alteropfamilystmt.
PostgreSQLParserVisitor.prototype.visitAlteropfamilystmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opclass_drop_list.
PostgreSQLParserVisitor.prototype.visitOpclass_drop_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opclass_drop.
PostgreSQLParserVisitor.prototype.visitOpclass_drop = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#dropopclassstmt.
PostgreSQLParserVisitor.prototype.visitDropopclassstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#dropopfamilystmt.
PostgreSQLParserVisitor.prototype.visitDropopfamilystmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#dropownedstmt.
PostgreSQLParserVisitor.prototype.visitDropownedstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#reassignownedstmt.
PostgreSQLParserVisitor.prototype.visitReassignownedstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#dropstmt.
PostgreSQLParserVisitor.prototype.visitDropstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#object_type_any_name.
PostgreSQLParserVisitor.prototype.visitObject_type_any_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#object_type_name.
PostgreSQLParserVisitor.prototype.visitObject_type_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#drop_type_name.
PostgreSQLParserVisitor.prototype.visitDrop_type_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#object_type_name_on_any_name.
PostgreSQLParserVisitor.prototype.visitObject_type_name_on_any_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#any_name_list.
PostgreSQLParserVisitor.prototype.visitAny_name_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#any_name.
PostgreSQLParserVisitor.prototype.visitAny_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#attrs.
PostgreSQLParserVisitor.prototype.visitAttrs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#type_name_list.
PostgreSQLParserVisitor.prototype.visitType_name_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#truncatestmt.
PostgreSQLParserVisitor.prototype.visitTruncatestmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_restart_seqs.
PostgreSQLParserVisitor.prototype.visitOpt_restart_seqs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#commentstmt.
PostgreSQLParserVisitor.prototype.visitCommentstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#comment_text.
PostgreSQLParserVisitor.prototype.visitComment_text = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#seclabelstmt.
PostgreSQLParserVisitor.prototype.visitSeclabelstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_provider.
PostgreSQLParserVisitor.prototype.visitOpt_provider = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#security_label.
PostgreSQLParserVisitor.prototype.visitSecurity_label = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#fetchstmt.
PostgreSQLParserVisitor.prototype.visitFetchstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#fetch_args.
PostgreSQLParserVisitor.prototype.visitFetch_args = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#from_in.
PostgreSQLParserVisitor.prototype.visitFrom_in = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_from_in.
PostgreSQLParserVisitor.prototype.visitOpt_from_in = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#grantstmt.
PostgreSQLParserVisitor.prototype.visitGrantstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#revokestmt.
PostgreSQLParserVisitor.prototype.visitRevokestmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#privileges.
PostgreSQLParserVisitor.prototype.visitPrivileges = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#privilege_list.
PostgreSQLParserVisitor.prototype.visitPrivilege_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#privilege.
PostgreSQLParserVisitor.prototype.visitPrivilege = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#privilege_target.
PostgreSQLParserVisitor.prototype.visitPrivilege_target = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#grantee_list.
PostgreSQLParserVisitor.prototype.visitGrantee_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#grantee.
PostgreSQLParserVisitor.prototype.visitGrantee = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_grant_grant_option.
PostgreSQLParserVisitor.prototype.visitOpt_grant_grant_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#grantrolestmt.
PostgreSQLParserVisitor.prototype.visitGrantrolestmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#revokerolestmt.
PostgreSQLParserVisitor.prototype.visitRevokerolestmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_grant_admin_option.
PostgreSQLParserVisitor.prototype.visitOpt_grant_admin_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_granted_by.
PostgreSQLParserVisitor.prototype.visitOpt_granted_by = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alterdefaultprivilegesstmt.
PostgreSQLParserVisitor.prototype.visitAlterdefaultprivilegesstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#defacloptionlist.
PostgreSQLParserVisitor.prototype.visitDefacloptionlist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#defacloption.
PostgreSQLParserVisitor.prototype.visitDefacloption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#defaclaction.
PostgreSQLParserVisitor.prototype.visitDefaclaction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#defacl_privilege_target.
PostgreSQLParserVisitor.prototype.visitDefacl_privilege_target = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#indexstmt.
PostgreSQLParserVisitor.prototype.visitIndexstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_unique.
PostgreSQLParserVisitor.prototype.visitOpt_unique = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_concurrently.
PostgreSQLParserVisitor.prototype.visitOpt_concurrently = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_index_name.
PostgreSQLParserVisitor.prototype.visitOpt_index_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#access_method_clause.
PostgreSQLParserVisitor.prototype.visitAccess_method_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#index_params.
PostgreSQLParserVisitor.prototype.visitIndex_params = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#index_elem_options.
PostgreSQLParserVisitor.prototype.visitIndex_elem_options = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#index_elem.
PostgreSQLParserVisitor.prototype.visitIndex_elem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_include.
PostgreSQLParserVisitor.prototype.visitOpt_include = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#index_including_params.
PostgreSQLParserVisitor.prototype.visitIndex_including_params = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_collate.
PostgreSQLParserVisitor.prototype.visitOpt_collate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_class.
PostgreSQLParserVisitor.prototype.visitOpt_class = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_asc_desc.
PostgreSQLParserVisitor.prototype.visitOpt_asc_desc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_nulls_order.
PostgreSQLParserVisitor.prototype.visitOpt_nulls_order = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createfunctionstmt.
PostgreSQLParserVisitor.prototype.visitCreatefunctionstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_or_replace.
PostgreSQLParserVisitor.prototype.visitOpt_or_replace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#func_args.
PostgreSQLParserVisitor.prototype.visitFunc_args = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#func_args_list.
PostgreSQLParserVisitor.prototype.visitFunc_args_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#function_with_argtypes_list.
PostgreSQLParserVisitor.prototype.visitFunction_with_argtypes_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#function_with_argtypes.
PostgreSQLParserVisitor.prototype.visitFunction_with_argtypes = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#func_args_with_defaults.
PostgreSQLParserVisitor.prototype.visitFunc_args_with_defaults = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#func_args_with_defaults_list.
PostgreSQLParserVisitor.prototype.visitFunc_args_with_defaults_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#func_arg.
PostgreSQLParserVisitor.prototype.visitFunc_arg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#arg_class.
PostgreSQLParserVisitor.prototype.visitArg_class = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#param_name.
PostgreSQLParserVisitor.prototype.visitParam_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#func_return.
PostgreSQLParserVisitor.prototype.visitFunc_return = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#func_type.
PostgreSQLParserVisitor.prototype.visitFunc_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#func_arg_with_default.
PostgreSQLParserVisitor.prototype.visitFunc_arg_with_default = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#aggr_arg.
PostgreSQLParserVisitor.prototype.visitAggr_arg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#aggr_args.
PostgreSQLParserVisitor.prototype.visitAggr_args = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#aggr_args_list.
PostgreSQLParserVisitor.prototype.visitAggr_args_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#aggregate_with_argtypes.
PostgreSQLParserVisitor.prototype.visitAggregate_with_argtypes = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#aggregate_with_argtypes_list.
PostgreSQLParserVisitor.prototype.visitAggregate_with_argtypes_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createfunc_opt_list.
PostgreSQLParserVisitor.prototype.visitCreatefunc_opt_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#common_func_opt_item.
PostgreSQLParserVisitor.prototype.visitCommon_func_opt_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createfunc_opt_item.
PostgreSQLParserVisitor.prototype.visitCreatefunc_opt_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#func_as.
PostgreSQLParserVisitor.prototype.visitFunc_as = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#transform_type_list.
PostgreSQLParserVisitor.prototype.visitTransform_type_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_definition.
PostgreSQLParserVisitor.prototype.visitOpt_definition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#table_func_column.
PostgreSQLParserVisitor.prototype.visitTable_func_column = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#table_func_column_list.
PostgreSQLParserVisitor.prototype.visitTable_func_column_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alterfunctionstmt.
PostgreSQLParserVisitor.prototype.visitAlterfunctionstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alterfunc_opt_list.
PostgreSQLParserVisitor.prototype.visitAlterfunc_opt_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_restrict.
PostgreSQLParserVisitor.prototype.visitOpt_restrict = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#removefuncstmt.
PostgreSQLParserVisitor.prototype.visitRemovefuncstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#removeaggrstmt.
PostgreSQLParserVisitor.prototype.visitRemoveaggrstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#removeoperstmt.
PostgreSQLParserVisitor.prototype.visitRemoveoperstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#oper_argtypes.
PostgreSQLParserVisitor.prototype.visitOper_argtypes = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#any_operator.
PostgreSQLParserVisitor.prototype.visitAny_operator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#operator_with_argtypes_list.
PostgreSQLParserVisitor.prototype.visitOperator_with_argtypes_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#operator_with_argtypes.
PostgreSQLParserVisitor.prototype.visitOperator_with_argtypes = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#dostmt.
PostgreSQLParserVisitor.prototype.visitDostmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#dostmt_opt_list.
PostgreSQLParserVisitor.prototype.visitDostmt_opt_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#dostmt_opt_item.
PostgreSQLParserVisitor.prototype.visitDostmt_opt_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createcaststmt.
PostgreSQLParserVisitor.prototype.visitCreatecaststmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#cast_context.
PostgreSQLParserVisitor.prototype.visitCast_context = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#dropcaststmt.
PostgreSQLParserVisitor.prototype.visitDropcaststmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_if_exists.
PostgreSQLParserVisitor.prototype.visitOpt_if_exists = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createtransformstmt.
PostgreSQLParserVisitor.prototype.visitCreatetransformstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#transform_element_list.
PostgreSQLParserVisitor.prototype.visitTransform_element_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#droptransformstmt.
PostgreSQLParserVisitor.prototype.visitDroptransformstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#reindexstmt.
PostgreSQLParserVisitor.prototype.visitReindexstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#reindex_target_type.
PostgreSQLParserVisitor.prototype.visitReindex_target_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#reindex_target_multitable.
PostgreSQLParserVisitor.prototype.visitReindex_target_multitable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#reindex_option_list.
PostgreSQLParserVisitor.prototype.visitReindex_option_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#reindex_option_elem.
PostgreSQLParserVisitor.prototype.visitReindex_option_elem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#altertblspcstmt.
PostgreSQLParserVisitor.prototype.visitAltertblspcstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#renamestmt.
PostgreSQLParserVisitor.prototype.visitRenamestmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_column.
PostgreSQLParserVisitor.prototype.visitOpt_column = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_set_data.
PostgreSQLParserVisitor.prototype.visitOpt_set_data = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alterobjectdependsstmt.
PostgreSQLParserVisitor.prototype.visitAlterobjectdependsstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_no.
PostgreSQLParserVisitor.prototype.visitOpt_no = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alterobjectschemastmt.
PostgreSQLParserVisitor.prototype.visitAlterobjectschemastmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alteroperatorstmt.
PostgreSQLParserVisitor.prototype.visitAlteroperatorstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#operator_def_list.
PostgreSQLParserVisitor.prototype.visitOperator_def_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#operator_def_elem.
PostgreSQLParserVisitor.prototype.visitOperator_def_elem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#operator_def_arg.
PostgreSQLParserVisitor.prototype.visitOperator_def_arg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#altertypestmt.
PostgreSQLParserVisitor.prototype.visitAltertypestmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alterownerstmt.
PostgreSQLParserVisitor.prototype.visitAlterownerstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createpublicationstmt.
PostgreSQLParserVisitor.prototype.visitCreatepublicationstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_publication_for_tables.
PostgreSQLParserVisitor.prototype.visitOpt_publication_for_tables = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#publication_for_tables.
PostgreSQLParserVisitor.prototype.visitPublication_for_tables = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alterpublicationstmt.
PostgreSQLParserVisitor.prototype.visitAlterpublicationstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createsubscriptionstmt.
PostgreSQLParserVisitor.prototype.visitCreatesubscriptionstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#publication_name_list.
PostgreSQLParserVisitor.prototype.visitPublication_name_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#publication_name_item.
PostgreSQLParserVisitor.prototype.visitPublication_name_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#altersubscriptionstmt.
PostgreSQLParserVisitor.prototype.visitAltersubscriptionstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#dropsubscriptionstmt.
PostgreSQLParserVisitor.prototype.visitDropsubscriptionstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#rulestmt.
PostgreSQLParserVisitor.prototype.visitRulestmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#ruleactionlist.
PostgreSQLParserVisitor.prototype.visitRuleactionlist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#ruleactionmulti.
PostgreSQLParserVisitor.prototype.visitRuleactionmulti = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#ruleactionstmt.
PostgreSQLParserVisitor.prototype.visitRuleactionstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#ruleactionstmtOrEmpty.
PostgreSQLParserVisitor.prototype.visitRuleactionstmtOrEmpty = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#event.
PostgreSQLParserVisitor.prototype.visitEvent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_instead.
PostgreSQLParserVisitor.prototype.visitOpt_instead = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#notifystmt.
PostgreSQLParserVisitor.prototype.visitNotifystmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#notify_payload.
PostgreSQLParserVisitor.prototype.visitNotify_payload = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#listenstmt.
PostgreSQLParserVisitor.prototype.visitListenstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#unlistenstmt.
PostgreSQLParserVisitor.prototype.visitUnlistenstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#transactionstmt.
PostgreSQLParserVisitor.prototype.visitTransactionstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_transaction.
PostgreSQLParserVisitor.prototype.visitOpt_transaction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#transaction_mode_item.
PostgreSQLParserVisitor.prototype.visitTransaction_mode_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#transaction_mode_list.
PostgreSQLParserVisitor.prototype.visitTransaction_mode_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#transaction_mode_list_or_empty.
PostgreSQLParserVisitor.prototype.visitTransaction_mode_list_or_empty = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_transaction_chain.
PostgreSQLParserVisitor.prototype.visitOpt_transaction_chain = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#viewstmt.
PostgreSQLParserVisitor.prototype.visitViewstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_check_option.
PostgreSQLParserVisitor.prototype.visitOpt_check_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#loadstmt.
PostgreSQLParserVisitor.prototype.visitLoadstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createdbstmt.
PostgreSQLParserVisitor.prototype.visitCreatedbstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createdb_opt_list.
PostgreSQLParserVisitor.prototype.visitCreatedb_opt_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createdb_opt_items.
PostgreSQLParserVisitor.prototype.visitCreatedb_opt_items = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createdb_opt_item.
PostgreSQLParserVisitor.prototype.visitCreatedb_opt_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createdb_opt_name.
PostgreSQLParserVisitor.prototype.visitCreatedb_opt_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_equal.
PostgreSQLParserVisitor.prototype.visitOpt_equal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alterdatabasestmt.
PostgreSQLParserVisitor.prototype.visitAlterdatabasestmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alterdatabasesetstmt.
PostgreSQLParserVisitor.prototype.visitAlterdatabasesetstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#dropdbstmt.
PostgreSQLParserVisitor.prototype.visitDropdbstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#drop_option_list.
PostgreSQLParserVisitor.prototype.visitDrop_option_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#drop_option.
PostgreSQLParserVisitor.prototype.visitDrop_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#altercollationstmt.
PostgreSQLParserVisitor.prototype.visitAltercollationstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#altersystemstmt.
PostgreSQLParserVisitor.prototype.visitAltersystemstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createdomainstmt.
PostgreSQLParserVisitor.prototype.visitCreatedomainstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alterdomainstmt.
PostgreSQLParserVisitor.prototype.visitAlterdomainstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_as.
PostgreSQLParserVisitor.prototype.visitOpt_as = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#altertsdictionarystmt.
PostgreSQLParserVisitor.prototype.visitAltertsdictionarystmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#altertsconfigurationstmt.
PostgreSQLParserVisitor.prototype.visitAltertsconfigurationstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#any_with.
PostgreSQLParserVisitor.prototype.visitAny_with = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#createconversionstmt.
PostgreSQLParserVisitor.prototype.visitCreateconversionstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#clusterstmt.
PostgreSQLParserVisitor.prototype.visitClusterstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#cluster_index_specification.
PostgreSQLParserVisitor.prototype.visitCluster_index_specification = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#vacuumstmt.
PostgreSQLParserVisitor.prototype.visitVacuumstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#analyzestmt.
PostgreSQLParserVisitor.prototype.visitAnalyzestmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#vac_analyze_option_list.
PostgreSQLParserVisitor.prototype.visitVac_analyze_option_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#analyze_keyword.
PostgreSQLParserVisitor.prototype.visitAnalyze_keyword = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#vac_analyze_option_elem.
PostgreSQLParserVisitor.prototype.visitVac_analyze_option_elem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#vac_analyze_option_name.
PostgreSQLParserVisitor.prototype.visitVac_analyze_option_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#vac_analyze_option_arg.
PostgreSQLParserVisitor.prototype.visitVac_analyze_option_arg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_analyze.
PostgreSQLParserVisitor.prototype.visitOpt_analyze = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_verbose.
PostgreSQLParserVisitor.prototype.visitOpt_verbose = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_full.
PostgreSQLParserVisitor.prototype.visitOpt_full = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_freeze.
PostgreSQLParserVisitor.prototype.visitOpt_freeze = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_name_list.
PostgreSQLParserVisitor.prototype.visitOpt_name_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#vacuum_relation.
PostgreSQLParserVisitor.prototype.visitVacuum_relation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#vacuum_relation_list.
PostgreSQLParserVisitor.prototype.visitVacuum_relation_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_vacuum_relation_list.
PostgreSQLParserVisitor.prototype.visitOpt_vacuum_relation_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#explainstmt.
PostgreSQLParserVisitor.prototype.visitExplainstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#explainablestmt.
PostgreSQLParserVisitor.prototype.visitExplainablestmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#explain_option_list.
PostgreSQLParserVisitor.prototype.visitExplain_option_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#explain_option_elem.
PostgreSQLParserVisitor.prototype.visitExplain_option_elem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#explain_option_name.
PostgreSQLParserVisitor.prototype.visitExplain_option_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#explain_option_arg.
PostgreSQLParserVisitor.prototype.visitExplain_option_arg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#preparestmt.
PostgreSQLParserVisitor.prototype.visitPreparestmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#prep_type_clause.
PostgreSQLParserVisitor.prototype.visitPrep_type_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#preparablestmt.
PostgreSQLParserVisitor.prototype.visitPreparablestmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#executestmt.
PostgreSQLParserVisitor.prototype.visitExecutestmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#execute_param_clause.
PostgreSQLParserVisitor.prototype.visitExecute_param_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#deallocatestmt.
PostgreSQLParserVisitor.prototype.visitDeallocatestmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#insertstmt.
PostgreSQLParserVisitor.prototype.visitInsertstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#insert_target.
PostgreSQLParserVisitor.prototype.visitInsert_target = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#insert_rest.
PostgreSQLParserVisitor.prototype.visitInsert_rest = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#override_kind.
PostgreSQLParserVisitor.prototype.visitOverride_kind = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#insert_column_list.
PostgreSQLParserVisitor.prototype.visitInsert_column_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#insert_column_item.
PostgreSQLParserVisitor.prototype.visitInsert_column_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_on_conflict.
PostgreSQLParserVisitor.prototype.visitOpt_on_conflict = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_conf_expr.
PostgreSQLParserVisitor.prototype.visitOpt_conf_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#returning_clause.
PostgreSQLParserVisitor.prototype.visitReturning_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#deletestmt.
PostgreSQLParserVisitor.prototype.visitDeletestmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#using_clause.
PostgreSQLParserVisitor.prototype.visitUsing_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#lockstmt.
PostgreSQLParserVisitor.prototype.visitLockstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_lock.
PostgreSQLParserVisitor.prototype.visitOpt_lock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#lock_type.
PostgreSQLParserVisitor.prototype.visitLock_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_nowait.
PostgreSQLParserVisitor.prototype.visitOpt_nowait = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_nowait_or_skip.
PostgreSQLParserVisitor.prototype.visitOpt_nowait_or_skip = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#updatestmt.
PostgreSQLParserVisitor.prototype.visitUpdatestmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#set_clause_list.
PostgreSQLParserVisitor.prototype.visitSet_clause_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#set_clause.
PostgreSQLParserVisitor.prototype.visitSet_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#set_target.
PostgreSQLParserVisitor.prototype.visitSet_target = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#set_target_list.
PostgreSQLParserVisitor.prototype.visitSet_target_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#declarecursorstmt.
PostgreSQLParserVisitor.prototype.visitDeclarecursorstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#cursor_name.
PostgreSQLParserVisitor.prototype.visitCursor_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#cursor_options.
PostgreSQLParserVisitor.prototype.visitCursor_options = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_hold.
PostgreSQLParserVisitor.prototype.visitOpt_hold = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#selectstmt.
PostgreSQLParserVisitor.prototype.visitSelectstmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#select_with_parens.
PostgreSQLParserVisitor.prototype.visitSelect_with_parens = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#select_no_parens.
PostgreSQLParserVisitor.prototype.visitSelect_no_parens = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#select_clause.
PostgreSQLParserVisitor.prototype.visitSelect_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#simple_select.
PostgreSQLParserVisitor.prototype.visitSimple_select = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#union.
PostgreSQLParserVisitor.prototype.visitUnion = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#intersect.
PostgreSQLParserVisitor.prototype.visitIntersect = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#except.
PostgreSQLParserVisitor.prototype.visitExcept = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#set_operator_with_all_or_distinct.
PostgreSQLParserVisitor.prototype.visitSet_operator_with_all_or_distinct = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#with_clause.
PostgreSQLParserVisitor.prototype.visitWith_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#cte_list.
PostgreSQLParserVisitor.prototype.visitCte_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#common_table_expr.
PostgreSQLParserVisitor.prototype.visitCommon_table_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_materialized.
PostgreSQLParserVisitor.prototype.visitOpt_materialized = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_with_clause.
PostgreSQLParserVisitor.prototype.visitOpt_with_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#into_clause.
PostgreSQLParserVisitor.prototype.visitInto_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_strict.
PostgreSQLParserVisitor.prototype.visitOpt_strict = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opttempTableName.
PostgreSQLParserVisitor.prototype.visitOpttempTableName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_table.
PostgreSQLParserVisitor.prototype.visitOpt_table = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#all_or_distinct.
PostgreSQLParserVisitor.prototype.visitAll_or_distinct = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#distinct_clause.
PostgreSQLParserVisitor.prototype.visitDistinct_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_all_clause.
PostgreSQLParserVisitor.prototype.visitOpt_all_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_sort_clause.
PostgreSQLParserVisitor.prototype.visitOpt_sort_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#sort_clause.
PostgreSQLParserVisitor.prototype.visitSort_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#sortby_list.
PostgreSQLParserVisitor.prototype.visitSortby_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#sortby.
PostgreSQLParserVisitor.prototype.visitSortby = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#select_limit.
PostgreSQLParserVisitor.prototype.visitSelect_limit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_select_limit.
PostgreSQLParserVisitor.prototype.visitOpt_select_limit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#limit_clause.
PostgreSQLParserVisitor.prototype.visitLimit_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#offset_clause.
PostgreSQLParserVisitor.prototype.visitOffset_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#select_limit_value.
PostgreSQLParserVisitor.prototype.visitSelect_limit_value = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#select_offset_value.
PostgreSQLParserVisitor.prototype.visitSelect_offset_value = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#select_fetch_first_value.
PostgreSQLParserVisitor.prototype.visitSelect_fetch_first_value = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#i_or_f_const.
PostgreSQLParserVisitor.prototype.visitI_or_f_const = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#row_or_rows.
PostgreSQLParserVisitor.prototype.visitRow_or_rows = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#first_or_next.
PostgreSQLParserVisitor.prototype.visitFirst_or_next = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#group_clause.
PostgreSQLParserVisitor.prototype.visitGroup_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#group_by_list.
PostgreSQLParserVisitor.prototype.visitGroup_by_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#group_by_item.
PostgreSQLParserVisitor.prototype.visitGroup_by_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#empty_grouping_set.
PostgreSQLParserVisitor.prototype.visitEmpty_grouping_set = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#rollup_clause.
PostgreSQLParserVisitor.prototype.visitRollup_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#cube_clause.
PostgreSQLParserVisitor.prototype.visitCube_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#grouping_sets_clause.
PostgreSQLParserVisitor.prototype.visitGrouping_sets_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#having_clause.
PostgreSQLParserVisitor.prototype.visitHaving_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#for_locking_clause.
PostgreSQLParserVisitor.prototype.visitFor_locking_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_for_locking_clause.
PostgreSQLParserVisitor.prototype.visitOpt_for_locking_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#for_locking_items.
PostgreSQLParserVisitor.prototype.visitFor_locking_items = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#for_locking_item.
PostgreSQLParserVisitor.prototype.visitFor_locking_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#for_locking_strength.
PostgreSQLParserVisitor.prototype.visitFor_locking_strength = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#locked_rels_list.
PostgreSQLParserVisitor.prototype.visitLocked_rels_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#values_clause.
PostgreSQLParserVisitor.prototype.visitValues_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#from_clause.
PostgreSQLParserVisitor.prototype.visitFrom_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#from_list.
PostgreSQLParserVisitor.prototype.visitFrom_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#table_ref.
PostgreSQLParserVisitor.prototype.visitTable_ref = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#alias_clause.
PostgreSQLParserVisitor.prototype.visitAlias_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_alias_clause.
PostgreSQLParserVisitor.prototype.visitOpt_alias_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#func_alias_clause.
PostgreSQLParserVisitor.prototype.visitFunc_alias_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#join_type.
PostgreSQLParserVisitor.prototype.visitJoin_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#join_qual.
PostgreSQLParserVisitor.prototype.visitJoin_qual = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#relation_expr.
PostgreSQLParserVisitor.prototype.visitRelation_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#relation_expr_list.
PostgreSQLParserVisitor.prototype.visitRelation_expr_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#relation_expr_opt_alias.
PostgreSQLParserVisitor.prototype.visitRelation_expr_opt_alias = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#tablesample_clause.
PostgreSQLParserVisitor.prototype.visitTablesample_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_repeatable_clause.
PostgreSQLParserVisitor.prototype.visitOpt_repeatable_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#func_table.
PostgreSQLParserVisitor.prototype.visitFunc_table = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#rowsfrom_item.
PostgreSQLParserVisitor.prototype.visitRowsfrom_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#rowsfrom_list.
PostgreSQLParserVisitor.prototype.visitRowsfrom_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_col_def_list.
PostgreSQLParserVisitor.prototype.visitOpt_col_def_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_ordinality.
PostgreSQLParserVisitor.prototype.visitOpt_ordinality = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#where_clause.
PostgreSQLParserVisitor.prototype.visitWhere_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#where_or_current_clause.
PostgreSQLParserVisitor.prototype.visitWhere_or_current_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opttablefuncelementlist.
PostgreSQLParserVisitor.prototype.visitOpttablefuncelementlist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#tablefuncelementlist.
PostgreSQLParserVisitor.prototype.visitTablefuncelementlist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#tablefuncelement.
PostgreSQLParserVisitor.prototype.visitTablefuncelement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#xmltable.
PostgreSQLParserVisitor.prototype.visitXmltable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#xmltable_column_list.
PostgreSQLParserVisitor.prototype.visitXmltable_column_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#xmltable_column_el.
PostgreSQLParserVisitor.prototype.visitXmltable_column_el = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#xmltable_column_option_list.
PostgreSQLParserVisitor.prototype.visitXmltable_column_option_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#xmltable_column_option_el.
PostgreSQLParserVisitor.prototype.visitXmltable_column_option_el = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#xml_namespace_list.
PostgreSQLParserVisitor.prototype.visitXml_namespace_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#xml_namespace_el.
PostgreSQLParserVisitor.prototype.visitXml_namespace_el = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#typename.
PostgreSQLParserVisitor.prototype.visitTypename = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_array_bounds.
PostgreSQLParserVisitor.prototype.visitOpt_array_bounds = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#simpletypename.
PostgreSQLParserVisitor.prototype.visitSimpletypename = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#consttypename.
PostgreSQLParserVisitor.prototype.visitConsttypename = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#generictype.
PostgreSQLParserVisitor.prototype.visitGenerictype = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_type_modifiers.
PostgreSQLParserVisitor.prototype.visitOpt_type_modifiers = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#numeric.
PostgreSQLParserVisitor.prototype.visitNumeric = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_float.
PostgreSQLParserVisitor.prototype.visitOpt_float = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#bit.
PostgreSQLParserVisitor.prototype.visitBit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#constbit.
PostgreSQLParserVisitor.prototype.visitConstbit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#bitwithlength.
PostgreSQLParserVisitor.prototype.visitBitwithlength = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#bitwithoutlength.
PostgreSQLParserVisitor.prototype.visitBitwithoutlength = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#character.
PostgreSQLParserVisitor.prototype.visitCharacter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#constcharacter.
PostgreSQLParserVisitor.prototype.visitConstcharacter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#character_c.
PostgreSQLParserVisitor.prototype.visitCharacter_c = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_varying.
PostgreSQLParserVisitor.prototype.visitOpt_varying = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#constdatetime.
PostgreSQLParserVisitor.prototype.visitConstdatetime = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#constinterval.
PostgreSQLParserVisitor.prototype.visitConstinterval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_timezone.
PostgreSQLParserVisitor.prototype.visitOpt_timezone = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_interval.
PostgreSQLParserVisitor.prototype.visitOpt_interval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#interval_second.
PostgreSQLParserVisitor.prototype.visitInterval_second = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_escape.
PostgreSQLParserVisitor.prototype.visitOpt_escape = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#a_expr.
PostgreSQLParserVisitor.prototype.visitA_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#a_expr_qual.
PostgreSQLParserVisitor.prototype.visitA_expr_qual = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#a_expr_lessless.
PostgreSQLParserVisitor.prototype.visitA_expr_lessless = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#a_expr_or.
PostgreSQLParserVisitor.prototype.visitA_expr_or = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#a_expr_and.
PostgreSQLParserVisitor.prototype.visitA_expr_and = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#a_expr_in.
PostgreSQLParserVisitor.prototype.visitA_expr_in = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#a_expr_unary_not.
PostgreSQLParserVisitor.prototype.visitA_expr_unary_not = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#a_expr_isnull.
PostgreSQLParserVisitor.prototype.visitA_expr_isnull = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#a_expr_is_not.
PostgreSQLParserVisitor.prototype.visitA_expr_is_not = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#a_expr_compare.
PostgreSQLParserVisitor.prototype.visitA_expr_compare = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#a_expr_like.
PostgreSQLParserVisitor.prototype.visitA_expr_like = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#a_expr_qual_op.
PostgreSQLParserVisitor.prototype.visitA_expr_qual_op = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#a_expr_unary_qualop.
PostgreSQLParserVisitor.prototype.visitA_expr_unary_qualop = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#a_expr_add.
PostgreSQLParserVisitor.prototype.visitA_expr_add = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#a_expr_mul.
PostgreSQLParserVisitor.prototype.visitA_expr_mul = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#a_expr_caret.
PostgreSQLParserVisitor.prototype.visitA_expr_caret = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#a_expr_unary_sign.
PostgreSQLParserVisitor.prototype.visitA_expr_unary_sign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#a_expr_at_time_zone.
PostgreSQLParserVisitor.prototype.visitA_expr_at_time_zone = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#a_expr_collate.
PostgreSQLParserVisitor.prototype.visitA_expr_collate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#a_expr_typecast.
PostgreSQLParserVisitor.prototype.visitA_expr_typecast = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#b_expr.
PostgreSQLParserVisitor.prototype.visitB_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#c_expr_exists.
PostgreSQLParserVisitor.prototype.visitC_expr_exists = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#c_expr_expr.
PostgreSQLParserVisitor.prototype.visitC_expr_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#c_expr_case.
PostgreSQLParserVisitor.prototype.visitC_expr_case = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#plsqlvariablename.
PostgreSQLParserVisitor.prototype.visitPlsqlvariablename = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#func_application.
PostgreSQLParserVisitor.prototype.visitFunc_application = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#func_expr.
PostgreSQLParserVisitor.prototype.visitFunc_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#func_expr_windowless.
PostgreSQLParserVisitor.prototype.visitFunc_expr_windowless = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#func_expr_common_subexpr.
PostgreSQLParserVisitor.prototype.visitFunc_expr_common_subexpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#xml_root_version.
PostgreSQLParserVisitor.prototype.visitXml_root_version = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_xml_root_standalone.
PostgreSQLParserVisitor.prototype.visitOpt_xml_root_standalone = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#xml_attributes.
PostgreSQLParserVisitor.prototype.visitXml_attributes = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#xml_attribute_list.
PostgreSQLParserVisitor.prototype.visitXml_attribute_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#xml_attribute_el.
PostgreSQLParserVisitor.prototype.visitXml_attribute_el = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#document_or_content.
PostgreSQLParserVisitor.prototype.visitDocument_or_content = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#xml_whitespace_option.
PostgreSQLParserVisitor.prototype.visitXml_whitespace_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#xmlexists_argument.
PostgreSQLParserVisitor.prototype.visitXmlexists_argument = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#xml_passing_mech.
PostgreSQLParserVisitor.prototype.visitXml_passing_mech = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#within_group_clause.
PostgreSQLParserVisitor.prototype.visitWithin_group_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#filter_clause.
PostgreSQLParserVisitor.prototype.visitFilter_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#window_clause.
PostgreSQLParserVisitor.prototype.visitWindow_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#window_definition_list.
PostgreSQLParserVisitor.prototype.visitWindow_definition_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#window_definition.
PostgreSQLParserVisitor.prototype.visitWindow_definition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#over_clause.
PostgreSQLParserVisitor.prototype.visitOver_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#window_specification.
PostgreSQLParserVisitor.prototype.visitWindow_specification = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_existing_window_name.
PostgreSQLParserVisitor.prototype.visitOpt_existing_window_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_partition_clause.
PostgreSQLParserVisitor.prototype.visitOpt_partition_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_frame_clause.
PostgreSQLParserVisitor.prototype.visitOpt_frame_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#frame_extent.
PostgreSQLParserVisitor.prototype.visitFrame_extent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#frame_bound.
PostgreSQLParserVisitor.prototype.visitFrame_bound = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_window_exclusion_clause.
PostgreSQLParserVisitor.prototype.visitOpt_window_exclusion_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#row.
PostgreSQLParserVisitor.prototype.visitRow = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#explicit_row.
PostgreSQLParserVisitor.prototype.visitExplicit_row = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#implicit_row.
PostgreSQLParserVisitor.prototype.visitImplicit_row = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#sub_type.
PostgreSQLParserVisitor.prototype.visitSub_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#all_op.
PostgreSQLParserVisitor.prototype.visitAll_op = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#mathop.
PostgreSQLParserVisitor.prototype.visitMathop = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#qual_op.
PostgreSQLParserVisitor.prototype.visitQual_op = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#qual_all_op.
PostgreSQLParserVisitor.prototype.visitQual_all_op = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#subquery_Op.
PostgreSQLParserVisitor.prototype.visitSubquery_Op = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#expr_list.
PostgreSQLParserVisitor.prototype.visitExpr_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#func_arg_list.
PostgreSQLParserVisitor.prototype.visitFunc_arg_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#func_arg_expr.
PostgreSQLParserVisitor.prototype.visitFunc_arg_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#type_list.
PostgreSQLParserVisitor.prototype.visitType_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#array_expr.
PostgreSQLParserVisitor.prototype.visitArray_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#array_expr_list.
PostgreSQLParserVisitor.prototype.visitArray_expr_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#extract_list.
PostgreSQLParserVisitor.prototype.visitExtract_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#extract_arg.
PostgreSQLParserVisitor.prototype.visitExtract_arg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#unicode_normal_form.
PostgreSQLParserVisitor.prototype.visitUnicode_normal_form = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#overlay_list.
PostgreSQLParserVisitor.prototype.visitOverlay_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#position_list.
PostgreSQLParserVisitor.prototype.visitPosition_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#substr_list.
PostgreSQLParserVisitor.prototype.visitSubstr_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#trim_list.
PostgreSQLParserVisitor.prototype.visitTrim_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#in_expr_select.
PostgreSQLParserVisitor.prototype.visitIn_expr_select = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#in_expr_list.
PostgreSQLParserVisitor.prototype.visitIn_expr_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#case_expr.
PostgreSQLParserVisitor.prototype.visitCase_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#when_clause_list.
PostgreSQLParserVisitor.prototype.visitWhen_clause_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#when_clause.
PostgreSQLParserVisitor.prototype.visitWhen_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#case_default.
PostgreSQLParserVisitor.prototype.visitCase_default = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#case_arg.
PostgreSQLParserVisitor.prototype.visitCase_arg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#columnref.
PostgreSQLParserVisitor.prototype.visitColumnref = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#indirection_el.
PostgreSQLParserVisitor.prototype.visitIndirection_el = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_slice_bound.
PostgreSQLParserVisitor.prototype.visitOpt_slice_bound = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#indirection.
PostgreSQLParserVisitor.prototype.visitIndirection = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_indirection.
PostgreSQLParserVisitor.prototype.visitOpt_indirection = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_target_list.
PostgreSQLParserVisitor.prototype.visitOpt_target_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#target_list.
PostgreSQLParserVisitor.prototype.visitTarget_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#target_label.
PostgreSQLParserVisitor.prototype.visitTarget_label = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#target_star.
PostgreSQLParserVisitor.prototype.visitTarget_star = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#qualified_name_list.
PostgreSQLParserVisitor.prototype.visitQualified_name_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#qualified_name.
PostgreSQLParserVisitor.prototype.visitQualified_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#name_list.
PostgreSQLParserVisitor.prototype.visitName_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#name.
PostgreSQLParserVisitor.prototype.visitName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#attr_name.
PostgreSQLParserVisitor.prototype.visitAttr_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#file_name.
PostgreSQLParserVisitor.prototype.visitFile_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#func_name.
PostgreSQLParserVisitor.prototype.visitFunc_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#aexprconst.
PostgreSQLParserVisitor.prototype.visitAexprconst = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#xconst.
PostgreSQLParserVisitor.prototype.visitXconst = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#bconst.
PostgreSQLParserVisitor.prototype.visitBconst = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#fconst.
PostgreSQLParserVisitor.prototype.visitFconst = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#iconst.
PostgreSQLParserVisitor.prototype.visitIconst = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#sconst.
PostgreSQLParserVisitor.prototype.visitSconst = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#anysconst.
PostgreSQLParserVisitor.prototype.visitAnysconst = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_uescape.
PostgreSQLParserVisitor.prototype.visitOpt_uescape = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#signediconst.
PostgreSQLParserVisitor.prototype.visitSignediconst = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#roleid.
PostgreSQLParserVisitor.prototype.visitRoleid = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#rolespec.
PostgreSQLParserVisitor.prototype.visitRolespec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#role_list.
PostgreSQLParserVisitor.prototype.visitRole_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#colid.
PostgreSQLParserVisitor.prototype.visitColid = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#type_function_name.
PostgreSQLParserVisitor.prototype.visitType_function_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#nonreservedword.
PostgreSQLParserVisitor.prototype.visitNonreservedword = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#collabel.
PostgreSQLParserVisitor.prototype.visitCollabel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#identifier.
PostgreSQLParserVisitor.prototype.visitIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#plsqlidentifier.
PostgreSQLParserVisitor.prototype.visitPlsqlidentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#unreserved_keyword.
PostgreSQLParserVisitor.prototype.visitUnreserved_keyword = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#col_name_keyword.
PostgreSQLParserVisitor.prototype.visitCol_name_keyword = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#type_func_name_keyword.
PostgreSQLParserVisitor.prototype.visitType_func_name_keyword = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#reserved_keyword.
PostgreSQLParserVisitor.prototype.visitReserved_keyword = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#pl_function.
PostgreSQLParserVisitor.prototype.visitPl_function = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#comp_options.
PostgreSQLParserVisitor.prototype.visitComp_options = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#comp_option.
PostgreSQLParserVisitor.prototype.visitComp_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#sharp.
PostgreSQLParserVisitor.prototype.visitSharp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#option_value.
PostgreSQLParserVisitor.prototype.visitOption_value = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_semi.
PostgreSQLParserVisitor.prototype.visitOpt_semi = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#pl_block.
PostgreSQLParserVisitor.prototype.visitPl_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#decl_sect.
PostgreSQLParserVisitor.prototype.visitDecl_sect = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#decl_start.
PostgreSQLParserVisitor.prototype.visitDecl_start = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#decl_stmts.
PostgreSQLParserVisitor.prototype.visitDecl_stmts = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#label_decl.
PostgreSQLParserVisitor.prototype.visitLabel_decl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#decl_stmt.
PostgreSQLParserVisitor.prototype.visitDecl_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#decl_statement.
PostgreSQLParserVisitor.prototype.visitDecl_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_scrollable.
PostgreSQLParserVisitor.prototype.visitOpt_scrollable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#decl_cursor_query.
PostgreSQLParserVisitor.prototype.visitDecl_cursor_query = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#decl_cursor_args.
PostgreSQLParserVisitor.prototype.visitDecl_cursor_args = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#decl_cursor_arglist.
PostgreSQLParserVisitor.prototype.visitDecl_cursor_arglist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#decl_cursor_arg.
PostgreSQLParserVisitor.prototype.visitDecl_cursor_arg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#decl_is_for.
PostgreSQLParserVisitor.prototype.visitDecl_is_for = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#decl_aliasitem.
PostgreSQLParserVisitor.prototype.visitDecl_aliasitem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#decl_varname.
PostgreSQLParserVisitor.prototype.visitDecl_varname = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#decl_const.
PostgreSQLParserVisitor.prototype.visitDecl_const = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#decl_datatype.
PostgreSQLParserVisitor.prototype.visitDecl_datatype = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#decl_collate.
PostgreSQLParserVisitor.prototype.visitDecl_collate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#decl_notnull.
PostgreSQLParserVisitor.prototype.visitDecl_notnull = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#decl_defval.
PostgreSQLParserVisitor.prototype.visitDecl_defval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#decl_defkey.
PostgreSQLParserVisitor.prototype.visitDecl_defkey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#assign_operator.
PostgreSQLParserVisitor.prototype.visitAssign_operator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#proc_sect.
PostgreSQLParserVisitor.prototype.visitProc_sect = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#proc_stmt.
PostgreSQLParserVisitor.prototype.visitProc_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#stmt_perform.
PostgreSQLParserVisitor.prototype.visitStmt_perform = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#stmt_call.
PostgreSQLParserVisitor.prototype.visitStmt_call = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_expr_list.
PostgreSQLParserVisitor.prototype.visitOpt_expr_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#stmt_assign.
PostgreSQLParserVisitor.prototype.visitStmt_assign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#stmt_getdiag.
PostgreSQLParserVisitor.prototype.visitStmt_getdiag = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#getdiag_area_opt.
PostgreSQLParserVisitor.prototype.visitGetdiag_area_opt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#getdiag_list.
PostgreSQLParserVisitor.prototype.visitGetdiag_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#getdiag_list_item.
PostgreSQLParserVisitor.prototype.visitGetdiag_list_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#getdiag_item.
PostgreSQLParserVisitor.prototype.visitGetdiag_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#getdiag_target.
PostgreSQLParserVisitor.prototype.visitGetdiag_target = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#assign_var.
PostgreSQLParserVisitor.prototype.visitAssign_var = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#stmt_if.
PostgreSQLParserVisitor.prototype.visitStmt_if = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#stmt_elsifs.
PostgreSQLParserVisitor.prototype.visitStmt_elsifs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#stmt_else.
PostgreSQLParserVisitor.prototype.visitStmt_else = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#stmt_case.
PostgreSQLParserVisitor.prototype.visitStmt_case = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_expr_until_when.
PostgreSQLParserVisitor.prototype.visitOpt_expr_until_when = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#case_when_list.
PostgreSQLParserVisitor.prototype.visitCase_when_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#case_when.
PostgreSQLParserVisitor.prototype.visitCase_when = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_case_else.
PostgreSQLParserVisitor.prototype.visitOpt_case_else = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#stmt_loop.
PostgreSQLParserVisitor.prototype.visitStmt_loop = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#stmt_while.
PostgreSQLParserVisitor.prototype.visitStmt_while = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#stmt_for.
PostgreSQLParserVisitor.prototype.visitStmt_for = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#for_control.
PostgreSQLParserVisitor.prototype.visitFor_control = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_for_using_expression.
PostgreSQLParserVisitor.prototype.visitOpt_for_using_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_cursor_parameters.
PostgreSQLParserVisitor.prototype.visitOpt_cursor_parameters = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_reverse.
PostgreSQLParserVisitor.prototype.visitOpt_reverse = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_by_expression.
PostgreSQLParserVisitor.prototype.visitOpt_by_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#for_variable.
PostgreSQLParserVisitor.prototype.visitFor_variable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#stmt_foreach_a.
PostgreSQLParserVisitor.prototype.visitStmt_foreach_a = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#foreach_slice.
PostgreSQLParserVisitor.prototype.visitForeach_slice = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#stmt_exit.
PostgreSQLParserVisitor.prototype.visitStmt_exit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#exit_type.
PostgreSQLParserVisitor.prototype.visitExit_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#stmt_return.
PostgreSQLParserVisitor.prototype.visitStmt_return = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_return_result.
PostgreSQLParserVisitor.prototype.visitOpt_return_result = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#stmt_raise.
PostgreSQLParserVisitor.prototype.visitStmt_raise = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_stmt_raise_level.
PostgreSQLParserVisitor.prototype.visitOpt_stmt_raise_level = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_raise_list.
PostgreSQLParserVisitor.prototype.visitOpt_raise_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_raise_using.
PostgreSQLParserVisitor.prototype.visitOpt_raise_using = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_raise_using_elem.
PostgreSQLParserVisitor.prototype.visitOpt_raise_using_elem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_raise_using_elem_list.
PostgreSQLParserVisitor.prototype.visitOpt_raise_using_elem_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#stmt_assert.
PostgreSQLParserVisitor.prototype.visitStmt_assert = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_stmt_assert_message.
PostgreSQLParserVisitor.prototype.visitOpt_stmt_assert_message = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#loop_body.
PostgreSQLParserVisitor.prototype.visitLoop_body = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#stmt_execsql.
PostgreSQLParserVisitor.prototype.visitStmt_execsql = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#stmt_dynexecute.
PostgreSQLParserVisitor.prototype.visitStmt_dynexecute = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_execute_using.
PostgreSQLParserVisitor.prototype.visitOpt_execute_using = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_execute_using_list.
PostgreSQLParserVisitor.prototype.visitOpt_execute_using_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_execute_into.
PostgreSQLParserVisitor.prototype.visitOpt_execute_into = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#stmt_open.
PostgreSQLParserVisitor.prototype.visitStmt_open = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_open_bound_list_item.
PostgreSQLParserVisitor.prototype.visitOpt_open_bound_list_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_open_bound_list.
PostgreSQLParserVisitor.prototype.visitOpt_open_bound_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_open_using.
PostgreSQLParserVisitor.prototype.visitOpt_open_using = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_scroll_option.
PostgreSQLParserVisitor.prototype.visitOpt_scroll_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_scroll_option_no.
PostgreSQLParserVisitor.prototype.visitOpt_scroll_option_no = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#stmt_fetch.
PostgreSQLParserVisitor.prototype.visitStmt_fetch = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#into_target.
PostgreSQLParserVisitor.prototype.visitInto_target = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_cursor_from.
PostgreSQLParserVisitor.prototype.visitOpt_cursor_from = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_fetch_direction.
PostgreSQLParserVisitor.prototype.visitOpt_fetch_direction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#stmt_move.
PostgreSQLParserVisitor.prototype.visitStmt_move = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#stmt_close.
PostgreSQLParserVisitor.prototype.visitStmt_close = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#stmt_null.
PostgreSQLParserVisitor.prototype.visitStmt_null = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#stmt_commit.
PostgreSQLParserVisitor.prototype.visitStmt_commit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#stmt_rollback.
PostgreSQLParserVisitor.prototype.visitStmt_rollback = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#plsql_opt_transaction_chain.
PostgreSQLParserVisitor.prototype.visitPlsql_opt_transaction_chain = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#stmt_set.
PostgreSQLParserVisitor.prototype.visitStmt_set = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#cursor_variable.
PostgreSQLParserVisitor.prototype.visitCursor_variable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#exception_sect.
PostgreSQLParserVisitor.prototype.visitException_sect = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#proc_exceptions.
PostgreSQLParserVisitor.prototype.visitProc_exceptions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#proc_exception.
PostgreSQLParserVisitor.prototype.visitProc_exception = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#proc_conditions.
PostgreSQLParserVisitor.prototype.visitProc_conditions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#proc_condition.
PostgreSQLParserVisitor.prototype.visitProc_condition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_block_label.
PostgreSQLParserVisitor.prototype.visitOpt_block_label = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_loop_label.
PostgreSQLParserVisitor.prototype.visitOpt_loop_label = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_label.
PostgreSQLParserVisitor.prototype.visitOpt_label = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_exitcond.
PostgreSQLParserVisitor.prototype.visitOpt_exitcond = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#any_identifier.
PostgreSQLParserVisitor.prototype.visitAny_identifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#plsql_unreserved_keyword.
PostgreSQLParserVisitor.prototype.visitPlsql_unreserved_keyword = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#sql_expression.
PostgreSQLParserVisitor.prototype.visitSql_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#expr_until_then.
PostgreSQLParserVisitor.prototype.visitExpr_until_then = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#expr_until_semi.
PostgreSQLParserVisitor.prototype.visitExpr_until_semi = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#expr_until_rightbracket.
PostgreSQLParserVisitor.prototype.visitExpr_until_rightbracket = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#expr_until_loop.
PostgreSQLParserVisitor.prototype.visitExpr_until_loop = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#make_execsql_stmt.
PostgreSQLParserVisitor.prototype.visitMake_execsql_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PostgreSQLParser#opt_returning_clause_into.
PostgreSQLParserVisitor.prototype.visitOpt_returning_clause_into = function(ctx) {
  return this.visitChildren(ctx);
};



exports.PostgreSQLParserVisitor = PostgreSQLParserVisitor;