/*
 * [The "MIT license"]
 * Copyright (C) 2014 Sam Harwell, Tunnel Vision Laboratories, LLC
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * 1. The above copyright notice and this permission notice shall be included in
 *    all copies or substantial portions of the Software.
 * 2. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 *    THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 *    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 *    DEALINGS IN THE SOFTWARE.
 * 3. Except as contained in this notice, the name of Tunnel Vision
 *    Laboratories, LLC. shall not be used in advertising or otherwise to
 *    promote the sale, use or other dealings in this Software without prior
 *    written authorization from Tunnel Vision Laboratories, LLC.
 */

/**
 * This file is an adaptation of antlr's sql/postgresql/PostgreSQLParser.g4 grammar.
 * Reference: https://github.com/antlr/grammars-v4/blob/master/sql/postgresql/PostgreSQLParser.g4
 */

/**
 * Reference Doc: https://www.postgresql.org/docs/9.3/sql-commands.html
 */

parser grammar PostgreSQLParser;


options {
	tokenVocab = PostgreSQLLexer;
}

program: stmtmulti;

plsqlroot: pl_function;

stmtmulti: (stmt SEMI?)*;

stmt:
	altereventtrigstmt
	| altercollationstmt
	| alterdatabasestmt
	| alterdatabasesetstmt
	| alterdefaultprivilegesstmt
	| alterdomainstmt
	| alterenumstmt
	| alterextensionstmt
	| alterextensioncontentsstmt
	| alterfdwstmt
	| alterforeignserverstmt
	| alterfunctionstmt
	| altergroupstmt
	| alterobjectdependsstmt
	| alterobjectschemastmt
	| alterownerstmt
	| alteroperatorstmt
	| altertypestmt
	| alterpolicystmt
	| alterseqstmt
	| altersystemstmt
	| altertablestmt
	| altertblspcstmt
	| altercompositetypestmt
	| alterpublicationstmt
	| alterrolesetstmt
	| alterrolestmt
	| altersubscriptionstmt
	| alterstatsstmt
	| altertsconfigurationstmt
	| altertsdictionarystmt
	| alterusermappingstmt
	| analyzestmt
	| callstmt
	| checkpointstmt
	| closeportalstmt
	| clusterstmt
	| commentstmt
	| constraintssetstmt
	| copystmt
	| createamstmt
	| createasstmt
	| createassertionstmt
	| createcaststmt
	| createconversionstmt
	| createdomainstmt
	| createextensionstmt
	| createfdwstmt
	| createforeignserverstmt
	| createforeigntablestmt
	| createfunctionstmt
	| creategroupstmt
	| creatematviewstmt
	| createopclassstmt
	| createopfamilystmt
	| createpublicationstmt
	| alteropfamilystmt
	| createpolicystmt
	| createplangstmt
	| createschemastmt
	| createseqstmt
	| createstmt
	| createsubscriptionstmt
	| createstatsstmt
	| createtablespacestmt
	| createtransformstmt
	| createtrigstmt
	| createeventtrigstmt
	| createrolestmt
	| createuserstmt
	| createusermappingstmt
	| createdbstmt
	| deallocatestmt
	| declarecursorstmt
	| definestmt
	| deletestmt
	| discardstmt
	| dostmt
	| dropcaststmt
	| dropopclassstmt
	| dropopfamilystmt
	| dropownedstmt
	| dropstmt
	| dropsubscriptionstmt
	| droptablespacestmt
	| droptransformstmt
	| droprolestmt
	| dropusermappingstmt
	| dropdbstmt
	| executestmt
	| explainstmt
	| fetchstmt
	| grantstmt
	| grantrolestmt
	| importforeignschemastmt
	| indexstmt
	| insertstmt
	| listenstmt
	| refreshmatviewstmt
	| loadstmt
	| lockstmt
	| notifystmt
	| preparestmt
	| reassignownedstmt
	| reindexstmt
	| removeaggrstmt
	| removefuncstmt
	| removeoperstmt
	| renamestmt
	| revokestmt
	| revokerolestmt
	| rulestmt
	| seclabelstmt
	| selectstmt
	| transactionstmt
	| truncatestmt
	| unlistenstmt
	| updatestmt
	| vacuumstmt
	| variableresetstmt
	| variablesetstmt
	| variableshowstmt
	| viewstmt
	| plsqlconsolecommand;

plsqlconsolecommand: MetaCommand EndMetaCommand?;

callstmt: KW_CALL func_application;

createrolestmt: KW_CREATE KW_ROLE roleid opt_with? optrolelist;

opt_with:
	KW_WITH
	; //| WITH_LA

optrolelist: createoptroleelem*;

alteroptrolelist: alteroptroleelem*;

alteroptroleelem:
	KW_PASSWORD (sconst | KW_NULL)
	| (KW_ENCRYPTED | KW_UNENCRYPTED) KW_PASSWORD sconst
	| (KW_INHERIT | KW_NOINHERIT)
	| (KW_CREATEUSER | KW_NOCREATEUSER)
	| (KW_CREATEROLE | KW_NOCREATEROLE)
	| (KW_CREATEDB | KW_NOCREATEDB)
	| (KW_SUPERUSER | KW_NOSUPERUSER)
	| KW_CONNECTION KW_LIMIT signediconst
	| KW_VALID KW_UNTIL sconst
	| KW_USER role_list
	| identifier;

createoptroleelem:
	alteroptroleelem
	| KW_SYSID iconst
	| KW_ADMIN role_list
	| KW_ROLE role_list
	| KW_IN (KW_ROLE | KW_GROUP) role_list;

createuserstmt: KW_CREATE KW_USER roleid opt_with? optrolelist;

alterrolestmt:
	KW_ALTER (KW_ROLE | KW_USER) rolespec opt_with? alteroptrolelist;

opt_in_database: | KW_IN KW_DATABASE name;

alterrolesetstmt:
	KW_ALTER (KW_ROLE | KW_USER) (KW_ALL | rolespec) opt_in_database setresetclause;

droprolestmt:
	KW_DROP (KW_ROLE | KW_USER | KW_GROUP) (KW_IF KW_EXISTS)? role_list;

creategroupstmt: KW_CREATE KW_GROUP groupname opt_with? optrolelist;

altergroupstmt: KW_ALTER KW_GROUP rolespec add_drop KW_USER role_list;

add_drop: KW_ADD | KW_DROP;

createschemastmt:
	KW_CREATE KW_SCHEMA (KW_IF KW_NOT KW_EXISTS)? (
		optschemaname? KW_AUTHORIZATION rolespec
		| colid
	) optschemaeltlist;

optschemaname: colid;

optschemaeltlist: schema_stmt*;

schema_stmt:
	createstmt
	| indexstmt
	| createseqstmt
	| createtrigstmt
	| grantstmt
	| viewstmt;

variablesetstmt: KW_SET (KW_LOCAL | KW_SESSION)? set_rest;

set_rest:
	KW_TRANSACTION transaction_mode_list
	| KW_SESSION KW_CHARACTERISTICS KW_AS KW_TRANSACTION transaction_mode_list
	| set_rest_more;

generic_set: var_name (KW_TO | EQUAL) var_list;

set_rest_more:
	generic_set
	| var_name KW_FROM KW_CURRENT
	| KW_TIME KW_ZONE zone_value
	| KW_CATALOG sconst
	| KW_SCHEMA sconst
	| KW_NAMES opt_encoding?
	| KW_ROLE nonreservedword_or_sconst
	| KW_SESSION KW_AUTHORIZATION nonreservedword_or_sconst
	| KW_XML KW_OPTION document_or_content
	| KW_TRANSACTION KW_SNAPSHOT sconst;

var_name: colid (DOT colid)*;

var_list: var_value (COMMA var_value)*;

var_value: opt_boolean_or_string | numericonly;

iso_level:
	KW_READ (KW_UNCOMMITTED | KW_COMMITTED)
	| KW_REPEATABLE KW_READ
	| KW_SERIALIZABLE;

opt_boolean_or_string:
	KW_TRUE
	| KW_FALSE
	| KW_ON
	| nonreservedword_or_sconst;

zone_value:
	sconst
	| identifier
	| constinterval sconst opt_interval?
	| constinterval OPEN_PAREN iconst CLOSE_PAREN sconst
	| numericonly
	| KW_DEFAULT
	| KW_LOCAL;

opt_encoding: sconst | KW_DEFAULT;

nonreservedword_or_sconst: nonreservedword | sconst;

variableresetstmt: KW_RESET reset_rest;

reset_rest:
	generic_reset
	| KW_TIME KW_ZONE
	| KW_TRANSACTION KW_ISOLATION KW_LEVEL
	| KW_SESSION KW_AUTHORIZATION;

generic_reset: var_name | KW_ALL;

setresetclause: KW_SET set_rest | variableresetstmt;

functionsetresetclause: KW_SET set_rest_more | variableresetstmt;

variableshowstmt:
	KW_SHOW (
		var_name
		| KW_TIME KW_ZONE
		| KW_TRANSACTION KW_ISOLATION KW_LEVEL
		| KW_SESSION KW_AUTHORIZATION
		| KW_ALL
	);

constraintssetstmt:
	KW_SET KW_CONSTRAINTS constraints_set_list constraints_set_mode;

constraints_set_list: KW_ALL | qualified_name_list;

constraints_set_mode: KW_DEFERRED | KW_IMMEDIATE;

checkpointstmt: KW_CHECKPOINT;

discardstmt:
	KW_DISCARD (KW_ALL | KW_TEMP | KW_TEMPORARY | KW_PLANS | KW_SEQUENCES);

altertablestmt:
	KW_ALTER KW_TABLE (KW_IF KW_EXISTS)? relation_expr (
		alter_table_cmds
		| partition_cmd
	)
	| KW_ALTER KW_TABLE KW_ALL KW_IN KW_TABLESPACE name (KW_OWNED KW_BY role_list)? KW_SET KW_TABLESPACE name opt_nowait?
	| KW_ALTER KW_INDEX (KW_IF KW_EXISTS)? qualified_name (
		alter_table_cmds
		| index_partition_cmd
	)
	| KW_ALTER KW_INDEX KW_ALL KW_IN KW_TABLESPACE name (KW_OWNED KW_BY role_list)? KW_SET KW_TABLESPACE name opt_nowait?
	| KW_ALTER KW_SEQUENCE (KW_IF KW_EXISTS)? qualified_name alter_table_cmds
	| KW_ALTER KW_VIEW (KW_IF KW_EXISTS)? qualified_name alter_table_cmds
	| KW_ALTER KW_MATERIALIZED KW_VIEW (KW_IF KW_EXISTS)? qualified_name alter_table_cmds
	| KW_ALTER KW_MATERIALIZED KW_VIEW KW_ALL KW_IN KW_TABLESPACE name (
		KW_OWNED KW_BY role_list
	)? KW_SET KW_TABLESPACE name opt_nowait?
	| KW_ALTER KW_FOREIGN KW_TABLE (KW_IF KW_EXISTS)? relation_expr alter_table_cmds;

alter_table_cmds: alter_table_cmd (COMMA alter_table_cmd)*;

partition_cmd:
	KW_ATTACH KW_PARTITION qualified_name partitionboundspec
	| KW_DETACH KW_PARTITION qualified_name;

index_partition_cmd: KW_ATTACH KW_PARTITION qualified_name;

alter_table_cmd:
	KW_ADD columnDef
	| KW_ADD KW_IF KW_NOT KW_EXISTS columnDef
	| KW_ADD KW_COLUMN columnDef
	| KW_ADD KW_COLUMN KW_IF KW_NOT KW_EXISTS columnDef
	| KW_ALTER opt_column? colid alter_column_default
	| KW_ALTER opt_column? colid KW_DROP KW_NOT KW_NULL
	| KW_ALTER opt_column? colid KW_SET KW_NOT KW_NULL
	| KW_ALTER opt_column? colid KW_DROP KW_EXPRESSION
	| KW_ALTER opt_column? colid KW_DROP KW_EXPRESSION KW_IF KW_EXISTS
	| KW_ALTER opt_column? colid KW_SET KW_STATISTICS signediconst
	| KW_ALTER opt_column? iconst KW_SET KW_STATISTICS signediconst
	| KW_ALTER opt_column? colid KW_SET reloptions
	| KW_ALTER opt_column? colid KW_RESET reloptions
	| KW_ALTER opt_column? colid KW_SET KW_STORAGE colid
	| KW_ALTER opt_column? colid KW_ADD KW_GENERATED generated_when KW_AS KW_IDENTITY
		optparenthesizedseqoptlist?
	| KW_ALTER opt_column? colid alter_identity_column_option_list
	| KW_ALTER opt_column? colid KW_DROP KW_IDENTITY
	| KW_ALTER opt_column? colid KW_DROP KW_IDENTITY KW_IF KW_EXISTS
	| KW_DROP opt_column? KW_IF KW_EXISTS colid opt_drop_behavior?
	| KW_DROP opt_column? colid opt_drop_behavior?
	| KW_ALTER opt_column? colid opt_set_data? KW_TYPE typename opt_collate_clause? alter_using?
	| KW_ALTER opt_column? colid alter_generic_options
	| KW_ADD tableconstraint
	| KW_ALTER KW_CONSTRAINT name constraintattributespec
	| KW_VALIDATE KW_CONSTRAINT name
	| KW_DROP KW_CONSTRAINT KW_IF KW_EXISTS name opt_drop_behavior?
	| KW_DROP KW_CONSTRAINT name opt_drop_behavior?
	| KW_SET KW_WITHOUT KW_OIDS
	| KW_CLUSTER KW_ON name
	| KW_SET KW_WITHOUT KW_CLUSTER
	| KW_SET KW_LOGGED
	| KW_SET KW_UNLOGGED
	| KW_ENABLE KW_TRIGGER name
	| KW_ENABLE KW_ALWAYS KW_TRIGGER name
	| KW_ENABLE KW_REPLICA KW_TRIGGER name
	| KW_ENABLE KW_TRIGGER KW_ALL
	| KW_ENABLE KW_TRIGGER KW_USER
	| KW_DISABLE KW_TRIGGER name
	| KW_DISABLE KW_TRIGGER KW_ALL
	| KW_DISABLE KW_TRIGGER KW_USER
	| KW_ENABLE KW_RULE name
	| KW_ENABLE KW_ALWAYS KW_RULE name
	| KW_ENABLE KW_REPLICA KW_RULE name
	| KW_DISABLE KW_RULE name
	| KW_INHERIT qualified_name
	| KW_NO KW_INHERIT qualified_name
	| KW_OF any_name
	| KW_NOT KW_OF
	| KW_OWNER KW_TO rolespec
	| KW_SET KW_TABLESPACE name
	| KW_SET reloptions
	| KW_RESET reloptions
	| KW_REPLICA KW_IDENTITY replica_identity
	| KW_ENABLE KW_ROW KW_LEVEL KW_SECURITY
	| KW_DISABLE KW_ROW KW_LEVEL KW_SECURITY
	| KW_FORCE KW_ROW KW_LEVEL KW_SECURITY
	| KW_NO KW_FORCE KW_ROW KW_LEVEL KW_SECURITY
	| alter_generic_options;

alter_column_default: KW_SET KW_DEFAULT a_expr | KW_DROP KW_DEFAULT;

opt_drop_behavior: KW_CASCADE | KW_RESTRICT;

opt_collate_clause: KW_COLLATE any_name;

alter_using: KW_USING a_expr;

replica_identity: KW_NOTHING | KW_FULL | KW_DEFAULT | KW_USING KW_INDEX name;

reloptions: OPEN_PAREN reloption_list CLOSE_PAREN;

opt_reloptions: KW_WITH reloptions;

reloption_list: reloption_elem (COMMA reloption_elem)*;

reloption_elem:
	collabel (EQUAL def_arg | DOT collabel (EQUAL def_arg)?)?;

alter_identity_column_option_list:
	alter_identity_column_option+;

alter_identity_column_option:
	KW_RESTART (opt_with? numericonly)?
	| KW_SET (seqoptelem | KW_GENERATED generated_when);

partitionboundspec:
	KW_FOR KW_VALUES KW_WITH OPEN_PAREN hash_partbound CLOSE_PAREN
	| KW_FOR KW_VALUES KW_IN OPEN_PAREN expr_list CLOSE_PAREN
	| KW_FOR KW_VALUES KW_FROM OPEN_PAREN expr_list CLOSE_PAREN KW_TO OPEN_PAREN expr_list CLOSE_PAREN
	| KW_DEFAULT;

hash_partbound_elem: nonreservedword iconst;

hash_partbound:
	hash_partbound_elem (COMMA hash_partbound_elem)*;

altercompositetypestmt: KW_ALTER KW_TYPE any_name alter_type_cmds;

alter_type_cmds: alter_type_cmd (COMMA alter_type_cmd)*;

alter_type_cmd:
	KW_ADD KW_ATTRIBUTE tablefuncelement opt_drop_behavior?
	| KW_DROP KW_ATTRIBUTE (KW_IF KW_EXISTS)? colid opt_drop_behavior?
	| KW_ALTER KW_ATTRIBUTE colid opt_set_data? KW_TYPE typename opt_collate_clause? opt_drop_behavior?;

closeportalstmt: KW_CLOSE (cursor_name | KW_ALL);

copystmt:
	KW_COPY opt_binary? qualified_name opt_column_list? copy_from opt_program? copy_file_name
		copy_delimiter? opt_with? copy_options where_clause?
	| KW_COPY OPEN_PAREN preparablestmt CLOSE_PAREN KW_TO opt_program? copy_file_name opt_with?
		copy_options;

copy_from: KW_FROM | KW_TO;

opt_program: KW_PROGRAM;

copy_file_name: sconst | KW_STDIN | KW_STDOUT;

copy_options:
	copy_opt_list
	| OPEN_PAREN copy_generic_opt_list CLOSE_PAREN;

copy_opt_list: copy_opt_item*;

copy_opt_item:
	KW_BINARY
	| KW_FREEZE
	| KW_DELIMITER opt_as? sconst
	| KW_NULL opt_as? sconst
	| KW_CSV
	| KW_HEADER
	| KW_QUOTE opt_as? sconst
	| KW_ESCAPE opt_as? sconst
	| KW_FORCE KW_QUOTE columnlist
	| KW_FORCE KW_QUOTE STAR
	| KW_FORCE KW_NOT KW_NULL columnlist
	| KW_FORCE KW_NULL columnlist
	| KW_ENCODING sconst;

opt_binary: KW_BINARY;

copy_delimiter: opt_using? KW_DELIMITERS sconst;

opt_using: KW_USING;

copy_generic_opt_list:
	copy_generic_opt_elem (COMMA copy_generic_opt_elem)*;

copy_generic_opt_elem: collabel copy_generic_opt_arg?;

copy_generic_opt_arg:
	opt_boolean_or_string
	| numericonly
	| STAR
	| OPEN_PAREN copy_generic_opt_arg_list CLOSE_PAREN;

copy_generic_opt_arg_list:
	copy_generic_opt_arg_list_item (
		COMMA copy_generic_opt_arg_list_item
	)*;

copy_generic_opt_arg_list_item: opt_boolean_or_string;

createstmt:
	KW_CREATE opttemp? KW_TABLE (KW_IF KW_NOT KW_EXISTS)? table_qualified_name (
		OPEN_PAREN table_column_list? CLOSE_PAREN optinherit? optpartitionspec?
			table_access_method_clause? optwith? oncommitoption? opttablespace?
		| KW_OF any_name opttypedtableelementlist? optpartitionspec? table_access_method_clause?
			optwith? oncommitoption? opttablespace?
		| KW_PARTITION KW_OF qualified_name opttypedtableelementlist? partitionboundspec optpartitionspec?
			table_access_method_clause? optwith? oncommitoption? opttablespace?
	);

opttemp:
	KW_TEMPORARY
	| KW_TEMP
	| KW_LOCAL (KW_TEMPORARY | KW_TEMP)
	| KW_GLOBAL (KW_TEMPORARY | KW_TEMP)
	| KW_UNLOGGED;

table_column_list: tableelementlist;

opttableelementlist: tableelementlist;

opttypedtableelementlist:
	OPEN_PAREN typedtableelementlist CLOSE_PAREN;

tableelementlist: tableelement (COMMA tableelement)*;

typedtableelementlist:
	typedtableelement (COMMA typedtableelement)*;

tableelement: columnDef | tablelikeclause | tableconstraint;

typedtableelement: columnOptions | tableconstraint;

columnDef: colid typename create_generic_options? (KW_COLLATE any_name)? colquallist;

columnOptions: colid (KW_WITH KW_OPTIONS)? colquallist;

colquallist: colconstraint*;

colconstraint:
	(KW_CONSTRAINT name)? colconstraintelem deferrable_trigger? initially_trigger?
	| colconstraintelem deferrable_trigger? initially_trigger?
	;

colconstraintelem:
	KW_NOT KW_NULL
	| KW_NULL
	| KW_UNIQUE opt_definition? optconstablespace?
	| KW_PRIMARY KW_KEY opt_definition? optconstablespace?
	| KW_CHECK OPEN_PAREN a_expr CLOSE_PAREN opt_no_inherit?
	| KW_DEFAULT b_expr
	| KW_GENERATED generated_when KW_AS (
		KW_IDENTITY optparenthesizedseqoptlist?
		| OPEN_PAREN a_expr CLOSE_PAREN KW_STORED
	)
	| KW_REFERENCES qualified_name opt_column_list? key_match? key_actions?;

generated_when: KW_ALWAYS | KW_BY KW_DEFAULT;

deferrable_trigger:
	KW_DEFERRABLE
	| KW_NOT KW_DEFERRABLE;

initially_trigger:
	KW_INITIALLY (KW_DEFERRED | KW_IMMEDIATE);

tablelikeclause: KW_LIKE qualified_name tablelikeoptionlist;

tablelikeoptionlist: ((KW_INCLUDING | KW_EXCLUDING) tablelikeoption)*;

tablelikeoption:
	KW_COMMENTS
	| KW_CONSTRAINTS
	| KW_DEFAULTS
	| KW_IDENTITY
	| KW_GENERATED
	| KW_INDEXES
	| KW_STATISTICS
	| KW_STORAGE
	| KW_ALL;

tableconstraint:
	KW_CONSTRAINT name constraintelem
	| constraintelem;

constraintelem:
	KW_CHECK OPEN_PAREN a_expr CLOSE_PAREN constraintattributespec
	| KW_UNIQUE (
		OPEN_PAREN columnlist CLOSE_PAREN opt_c_include? opt_definition? optconstablespace?
			constraintattributespec
		| existingindex constraintattributespec
	)
	| KW_PRIMARY KW_KEY (
		OPEN_PAREN columnlist CLOSE_PAREN opt_c_include? opt_definition? optconstablespace?
			constraintattributespec
		| existingindex constraintattributespec
	)
	| KW_EXCLUDE access_method_clause? OPEN_PAREN exclusionconstraintlist CLOSE_PAREN opt_c_include?
		opt_definition? optconstablespace? exclusionwhereclause? constraintattributespec
	| KW_FOREIGN KW_KEY OPEN_PAREN columnlist CLOSE_PAREN KW_REFERENCES qualified_name opt_column_list?
		key_match? key_actions? constraintattributespec;

opt_no_inherit: KW_NO KW_INHERIT;

opt_column_list: OPEN_PAREN columnlist CLOSE_PAREN;

columnlist: columnElem (COMMA columnElem)*;

columnElem: colid;

opt_c_include: KW_INCLUDE OPEN_PAREN columnlist CLOSE_PAREN;

key_match: KW_MATCH (KW_FULL | KW_PARTIAL | KW_SIMPLE);

exclusionconstraintlist:
	exclusionconstraintelem (COMMA exclusionconstraintelem)*;

exclusionconstraintelem:
	index_elem KW_WITH (
		any_operator
		| KW_OPERATOR OPEN_PAREN any_operator CLOSE_PAREN
	);

exclusionwhereclause: KW_WHERE OPEN_PAREN a_expr CLOSE_PAREN;

key_actions:
	key_update
	| key_delete
	| key_update key_delete
	| key_delete key_update;

key_update: KW_ON KW_UPDATE key_action;

key_delete: KW_ON KW_DELETE key_action;

key_action:
	KW_NO KW_ACTION
	| KW_RESTRICT
	| KW_CASCADE
	| KW_SET (KW_NULL | KW_DEFAULT);

optinherit: KW_INHERITS OPEN_PAREN qualified_name_list CLOSE_PAREN;

optpartitionspec: partitionspec;

partitionspec:
	KW_PARTITION KW_BY colid OPEN_PAREN part_params CLOSE_PAREN;

part_params: part_elem (COMMA part_elem)*;

part_elem:
	colid opt_collate? opt_class?
	| func_expr_windowless opt_collate? opt_class?
	| OPEN_PAREN a_expr CLOSE_PAREN opt_collate? opt_class?;

table_access_method_clause: KW_USING name;

optwith: KW_WITH reloptions | KW_WITHOUT KW_OIDS | KW_WITH KW_OIDS;

oncommitoption:
	KW_ON KW_COMMIT (KW_DROP | KW_DELETE KW_ROWS | KW_PRESERVE KW_ROWS);

opttablespace: KW_TABLESPACE name;

optconstablespace: KW_USING KW_INDEX KW_TABLESPACE name;

existingindex: KW_USING KW_INDEX name;

createstatsstmt:
	KW_CREATE KW_STATISTICS (KW_IF KW_NOT KW_EXISTS)? any_name opt_name_list? KW_ON expr_list KW_FROM from_list;

alterstatsstmt:
	KW_ALTER KW_STATISTICS (KW_IF KW_EXISTS)? any_name KW_SET KW_STATISTICS signediconst;

createasstmt:
	KW_CREATE opttemp? KW_TABLE (KW_IF KW_NOT KW_EXISTS)? create_as_target KW_AS selectstmt opt_with_data?;

create_as_target:
	qualified_name opt_column_list? table_access_method_clause? optwith? oncommitoption?
		opttablespace?;

opt_with_data: KW_WITH (KW_DATA | KW_NO KW_DATA);

creatematviewstmt:
	KW_CREATE optnolog? KW_MATERIALIZED KW_VIEW (KW_IF KW_NOT KW_EXISTS)? create_mv_target KW_AS selectstmt
		opt_with_data?;

create_mv_target:
	qualified_name opt_column_list? table_access_method_clause? opt_reloptions? opttablespace?;

optnolog: KW_UNLOGGED;

refreshmatviewstmt:
	KW_REFRESH KW_MATERIALIZED KW_VIEW opt_concurrently? qualified_name opt_with_data?;

createseqstmt:
	KW_CREATE opttemp? KW_SEQUENCE (KW_IF KW_NOT KW_EXISTS)? qualified_name optseqoptlist?;

alterseqstmt:
	KW_ALTER KW_SEQUENCE (KW_IF KW_EXISTS)? qualified_name seqoptlist;

optseqoptlist: seqoptlist;

optparenthesizedseqoptlist: OPEN_PAREN seqoptlist CLOSE_PAREN;

seqoptlist: seqoptelem+;

seqoptelem:
	KW_AS simpletypename
	| KW_CACHE numericonly
	| KW_CYCLE
	| KW_INCREMENT opt_by? numericonly
	| KW_MAXVALUE numericonly
	| KW_MINVALUE numericonly
	| KW_NO (KW_MAXVALUE | KW_MINVALUE | KW_CYCLE)
	| KW_OWNED KW_BY any_name
	| KW_SEQUENCE KW_NAME any_name
	| KW_START opt_with? numericonly
	| KW_RESTART opt_with? numericonly?;

opt_by: KW_BY;

numericonly: fconst | PLUS fconst | MINUS fconst | signediconst;

numericonly_list: numericonly (COMMA numericonly)*;

createplangstmt:
	KW_CREATE opt_or_replace? opt_trusted? opt_procedural? KW_LANGUAGE name (
		KW_HANDLER handler_name opt_inline_handler? opt_validator?
	)?;

opt_trusted: KW_TRUSTED;

handler_name: name attrs?;

opt_inline_handler: KW_INLINE handler_name;

validator_clause: KW_VALIDATOR handler_name | KW_NO KW_VALIDATOR;

opt_validator: validator_clause;

opt_procedural: KW_PROCEDURAL;

createtablespacestmt:
	KW_CREATE KW_TABLESPACE name opttablespaceowner? KW_LOCATION sconst opt_reloptions?;

opttablespaceowner: KW_OWNER rolespec;

droptablespacestmt: KW_DROP KW_TABLESPACE (KW_IF KW_EXISTS)? name;

createextensionstmt:
	KW_CREATE KW_EXTENSION (KW_IF KW_NOT KW_EXISTS)? name opt_with? create_extension_opt_list;

create_extension_opt_list: create_extension_opt_item*;

create_extension_opt_item:
	KW_SCHEMA name
	| KW_VERSION nonreservedword_or_sconst
	| KW_FROM nonreservedword_or_sconst
	| KW_CASCADE;

alterextensionstmt:
	KW_ALTER KW_EXTENSION name KW_UPDATE alter_extension_opt_list;

alter_extension_opt_list: alter_extension_opt_item*;

alter_extension_opt_item: KW_TO nonreservedword_or_sconst;

alterextensioncontentsstmt:
	KW_ALTER KW_EXTENSION name add_drop object_type_name name
	| KW_ALTER KW_EXTENSION name add_drop object_type_any_name any_name
	| KW_ALTER KW_EXTENSION name add_drop KW_AGGREGATE aggregate_with_argtypes
	| KW_ALTER KW_EXTENSION name add_drop KW_CAST OPEN_PAREN typename KW_AS typename CLOSE_PAREN
	| KW_ALTER KW_EXTENSION name add_drop KW_DOMAIN typename
	| KW_ALTER KW_EXTENSION name add_drop KW_FUNCTION function_with_argtypes
	| KW_ALTER KW_EXTENSION name add_drop KW_OPERATOR operator_with_argtypes
	| KW_ALTER KW_EXTENSION name add_drop KW_OPERATOR KW_CLASS any_name KW_USING name
	| KW_ALTER KW_EXTENSION name add_drop KW_OPERATOR KW_FAMILY any_name KW_USING name
	| KW_ALTER KW_EXTENSION name add_drop KW_PROCEDURE function_with_argtypes
	| KW_ALTER KW_EXTENSION name add_drop KW_ROUTINE function_with_argtypes
	| KW_ALTER KW_EXTENSION name add_drop KW_TRANSFORM KW_FOR typename KW_LANGUAGE name
	| KW_ALTER KW_EXTENSION name add_drop KW_TYPE typename;

createfdwstmt:
	KW_CREATE KW_FOREIGN KW_DATA KW_WRAPPER name opt_fdw_options? create_generic_options?;

fdw_option:
	KW_HANDLER handler_name
	| KW_NO KW_HANDLER
	| KW_VALIDATOR handler_name
	| KW_NO KW_VALIDATOR;

fdw_options: fdw_option+;

opt_fdw_options: fdw_options;

alterfdwstmt:
	KW_ALTER KW_FOREIGN KW_DATA KW_WRAPPER name opt_fdw_options? alter_generic_options
	| KW_ALTER KW_FOREIGN KW_DATA KW_WRAPPER name fdw_options;

create_generic_options:
	KW_OPTIONS OPEN_PAREN generic_option_list CLOSE_PAREN;

generic_option_list:
	generic_option_elem (COMMA generic_option_elem)*;

alter_generic_options:
	KW_OPTIONS OPEN_PAREN alter_generic_option_list CLOSE_PAREN;

alter_generic_option_list:
	alter_generic_option_elem (COMMA alter_generic_option_elem)*;

alter_generic_option_elem:
	generic_option_elem
	| KW_SET generic_option_elem
	| KW_ADD generic_option_elem
	| KW_DROP generic_option_elem;

generic_option_elem: generic_option_name generic_option_arg;

generic_option_name: collabel;

generic_option_arg: sconst;

createforeignserverstmt:
	KW_CREATE KW_SERVER name opt_type? opt_foreign_server_version? KW_FOREIGN KW_DATA KW_WRAPPER name
		create_generic_options?
	| KW_CREATE KW_SERVER KW_IF KW_NOT KW_EXISTS name opt_type? opt_foreign_server_version? KW_FOREIGN KW_DATA
		KW_WRAPPER name create_generic_options?;

opt_type: KW_TYPE sconst;

foreign_server_version: KW_VERSION (sconst | KW_NULL);

opt_foreign_server_version: foreign_server_version;

alterforeignserverstmt:
	KW_ALTER KW_SERVER name (
		alter_generic_options
		| foreign_server_version alter_generic_options?
	);

createforeigntablestmt:
	KW_CREATE KW_FOREIGN KW_TABLE qualified_name OPEN_PAREN opttableelementlist? CLOSE_PAREN optinherit?
		KW_SERVER name create_generic_options?
	| KW_CREATE KW_FOREIGN KW_TABLE KW_IF KW_NOT KW_EXISTS qualified_name OPEN_PAREN opttableelementlist?
		CLOSE_PAREN optinherit? KW_SERVER name create_generic_options?
	| KW_CREATE KW_FOREIGN KW_TABLE qualified_name KW_PARTITION KW_OF qualified_name opttypedtableelementlist?
		partitionboundspec KW_SERVER name create_generic_options?
	| KW_CREATE KW_FOREIGN KW_TABLE KW_IF KW_NOT KW_EXISTS qualified_name KW_PARTITION KW_OF qualified_name
		opttypedtableelementlist? partitionboundspec KW_SERVER name create_generic_options?;

importforeignschemastmt:
	KW_IMPORT KW_FOREIGN KW_SCHEMA name import_qualification? KW_FROM KW_SERVER name KW_INTO name
		create_generic_options?;

import_qualification_type: KW_LIMIT KW_TO | KW_EXCEPT;

import_qualification:
	import_qualification_type OPEN_PAREN relation_expr_list CLOSE_PAREN;

createusermappingstmt:
	KW_CREATE KW_USER KW_MAPPING KW_FOR auth_ident KW_SERVER name create_generic_options?
	| KW_CREATE KW_USER KW_MAPPING KW_IF KW_NOT KW_EXISTS KW_FOR auth_ident KW_SERVER name create_generic_options?;

auth_ident: rolespec | KW_USER;

dropusermappingstmt:
	KW_DROP KW_USER KW_MAPPING KW_FOR auth_ident KW_SERVER name
	| KW_DROP KW_USER KW_MAPPING KW_IF KW_EXISTS KW_FOR auth_ident KW_SERVER name;

alterusermappingstmt:
	KW_ALTER KW_USER KW_MAPPING KW_FOR auth_ident KW_SERVER name alter_generic_options;

createpolicystmt:
	KW_CREATE KW_POLICY name KW_ON qualified_name rowsecuritydefaultpermissive? rowsecuritydefaultforcmd?
		rowsecuritydefaulttorole? rowsecurityoptionalexpr? rowsecurityoptionalwithcheck?;

alterpolicystmt:
	KW_ALTER KW_POLICY name KW_ON qualified_name rowsecurityoptionaltorole? rowsecurityoptionalexpr?
		rowsecurityoptionalwithcheck?;

rowsecurityoptionalexpr: KW_USING OPEN_PAREN a_expr CLOSE_PAREN;

rowsecurityoptionalwithcheck:
	KW_WITH KW_CHECK OPEN_PAREN a_expr CLOSE_PAREN;

rowsecuritydefaulttorole: KW_TO role_list;

rowsecurityoptionaltorole: KW_TO role_list;

rowsecuritydefaultpermissive: KW_AS identifier;

rowsecuritydefaultforcmd: KW_FOR row_security_cmd;

row_security_cmd: KW_ALL | KW_SELECT | KW_INSERT | KW_UPDATE | KW_DELETE;

createamstmt:
	KW_CREATE KW_ACCESS KW_METHOD name KW_TYPE am_type KW_HANDLER handler_name;

am_type: KW_INDEX | KW_TABLE;

createtrigstmt:
	KW_CREATE KW_TRIGGER name triggeractiontime triggerevents KW_ON qualified_name triggerreferencing?
		triggerforspec? triggerwhen? KW_EXECUTE function_or_procedure func_name OPEN_PAREN
		triggerfuncargs CLOSE_PAREN
	| KW_CREATE KW_CONSTRAINT? KW_TRIGGER name triggeractiontime triggerevents KW_ON qualified_name optconstrfromtable?
		constraintattributespec foreachrow? triggerwhen? KW_EXECUTE function_or_procedure func_name
		OPEN_PAREN triggerfuncargs CLOSE_PAREN;

triggeractiontime: KW_BEFORE | KW_AFTER | KW_INSTEAD KW_OF;

foreachrow: KW_FOR KW_EACH? roworstatment;
 
roworstatment: KW_ROW | KW_STATEMENT;

triggerevents: triggeroneevent (KW_OR triggeroneevent)*;

triggeroneevent:
	KW_INSERT
	| KW_DELETE
	| KW_UPDATE
	| KW_UPDATE KW_OF columnlist
	| KW_TRUNCATE;

triggerreferencing: KW_REFERENCING triggertransitions;

triggertransitions: triggertransition+;

triggertransition:
	transitionoldornew transitionrowortable opt_as? transitionrelname;

transitionoldornew: KW_NEW | KW_OLD;

transitionrowortable: KW_TABLE | KW_ROW;

transitionrelname: colid;

triggerforspec: KW_FOR triggerforopteach? triggerfortype;

triggerforopteach: KW_EACH;

triggerfortype: KW_ROW | KW_STATEMENT;

triggerwhen: KW_WHEN OPEN_PAREN a_expr CLOSE_PAREN;

function_or_procedure: KW_FUNCTION | KW_PROCEDURE;

triggerfuncargs: (triggerfuncarg |) (COMMA triggerfuncarg)*;

triggerfuncarg: iconst | fconst | sconst | collabel;

optconstrfromtable: KW_FROM qualified_name;

constraintattributespec: constraintattributeElem*;

constraintattributeElem:
	KW_NOT KW_DEFERRABLE
	| KW_DEFERRABLE
	| KW_INITIALLY KW_IMMEDIATE
	| KW_INITIALLY KW_DEFERRED
	| KW_NOT KW_VALID
	| KW_NO KW_INHERIT;

createeventtrigstmt:
	KW_CREATE KW_EVENT KW_TRIGGER name KW_ON collabel KW_EXECUTE function_or_procedure func_name OPEN_PAREN
		CLOSE_PAREN
	| KW_CREATE KW_EVENT KW_TRIGGER name KW_ON collabel KW_WHEN event_trigger_when_list KW_EXECUTE
		function_or_procedure func_name OPEN_PAREN CLOSE_PAREN;

event_trigger_when_list:
	event_trigger_when_item (KW_AND event_trigger_when_item)*;

event_trigger_when_item:
	colid KW_IN OPEN_PAREN event_trigger_value_list CLOSE_PAREN;

event_trigger_value_list: sconst (COMMA sconst)*;

altereventtrigstmt: KW_ALTER KW_EVENT KW_TRIGGER name enable_trigger;

enable_trigger:
	KW_ENABLE
	| KW_ENABLE KW_REPLICA
	| KW_ENABLE KW_ALWAYS
	| KW_DISABLE;

createassertionstmt:
	KW_CREATE KW_ASSERTION any_name KW_CHECK OPEN_PAREN a_expr CLOSE_PAREN constraintattributespec;

definestmt:
	KW_CREATE opt_or_replace? KW_AGGREGATE func_name aggr_args definition
	| KW_CREATE opt_or_replace? KW_AGGREGATE func_name old_aggr_definition
	| KW_CREATE KW_OPERATOR any_operator definition
	| KW_CREATE KW_TYPE any_name definition
	| KW_CREATE KW_TYPE any_name
	| KW_CREATE KW_TYPE any_name KW_AS OPEN_PAREN opttablefuncelementlist? CLOSE_PAREN
	| KW_CREATE KW_TYPE any_name KW_AS KW_ENUM OPEN_PAREN opt_enum_val_list? CLOSE_PAREN
	| KW_CREATE KW_TYPE any_name KW_AS KW_RANGE definition
	| KW_CREATE KW_TEXT KW_SEARCH KW_PARSER any_name definition
	| KW_CREATE KW_TEXT KW_SEARCH KW_DICTIONARY any_name definition
	| KW_CREATE KW_TEXT KW_SEARCH KW_TEMPLATE any_name definition
	| KW_CREATE KW_TEXT KW_SEARCH KW_CONFIGURATION any_name definition
	| KW_CREATE KW_COLLATION any_name definition
	| KW_CREATE KW_COLLATION KW_IF KW_NOT KW_EXISTS any_name definition
	| KW_CREATE KW_COLLATION any_name KW_FROM any_name
	| KW_CREATE KW_COLLATION KW_IF KW_NOT KW_EXISTS any_name KW_FROM any_name;

definition: OPEN_PAREN def_list CLOSE_PAREN;

def_list: def_elem (COMMA def_elem)*;

def_elem: collabel (EQUAL def_arg)?;

def_arg:
	func_type
	| reserved_keyword
	| qual_all_op
	| numericonly
	| sconst
	| KW_NONE;

old_aggr_definition: OPEN_PAREN old_aggr_list CLOSE_PAREN;

old_aggr_list: old_aggr_elem (COMMA old_aggr_elem)*;

old_aggr_elem: identifier EQUAL def_arg;

opt_enum_val_list: enum_val_list;

enum_val_list: sconst (COMMA sconst)*;

alterenumstmt:
	KW_ALTER KW_TYPE any_name KW_ADD KW_VALUE opt_if_not_exists? sconst
	| KW_ALTER KW_TYPE any_name KW_ADD KW_VALUE opt_if_not_exists? sconst KW_BEFORE sconst
	| KW_ALTER KW_TYPE any_name KW_ADD KW_VALUE opt_if_not_exists? sconst KW_AFTER sconst
	| KW_ALTER KW_TYPE any_name KW_RENAME KW_VALUE sconst KW_TO sconst;

opt_if_not_exists: KW_IF KW_NOT KW_EXISTS;

createopclassstmt:
	KW_CREATE KW_OPERATOR KW_CLASS any_name opt_default? KW_FOR KW_TYPE typename KW_USING name opt_opfamily? KW_AS
		opclass_item_list;

opclass_item_list: opclass_item (COMMA opclass_item)*;

opclass_item:
	KW_OPERATOR iconst any_operator opclass_purpose? opt_recheck?
	| KW_OPERATOR iconst operator_with_argtypes opclass_purpose? opt_recheck?
	| KW_FUNCTION iconst function_with_argtypes
	| KW_FUNCTION iconst OPEN_PAREN type_list CLOSE_PAREN function_with_argtypes
	| KW_STORAGE typename;

opt_default: KW_DEFAULT;

opt_opfamily: KW_FAMILY any_name;

opclass_purpose: KW_FOR KW_SEARCH | KW_FOR KW_ORDER KW_BY any_name;

opt_recheck: KW_RECHECK;

createopfamilystmt: KW_CREATE KW_OPERATOR KW_FAMILY any_name KW_USING name;

alteropfamilystmt:
	KW_ALTER KW_OPERATOR KW_FAMILY any_name KW_USING name KW_ADD opclass_item_list
	| KW_ALTER KW_OPERATOR KW_FAMILY any_name KW_USING name KW_DROP opclass_drop_list;

opclass_drop_list: opclass_drop (COMMA opclass_drop)*;

opclass_drop:
	KW_OPERATOR iconst OPEN_PAREN type_list CLOSE_PAREN
	| KW_FUNCTION iconst OPEN_PAREN type_list CLOSE_PAREN;

dropopclassstmt:
	KW_DROP KW_OPERATOR KW_CLASS any_name KW_USING name opt_drop_behavior?
	| KW_DROP KW_OPERATOR KW_CLASS KW_IF KW_EXISTS any_name KW_USING name opt_drop_behavior?;

dropopfamilystmt:
	KW_DROP KW_OPERATOR KW_FAMILY any_name KW_USING name opt_drop_behavior?
	| KW_DROP KW_OPERATOR KW_FAMILY KW_IF KW_EXISTS any_name KW_USING name opt_drop_behavior?;

dropownedstmt: KW_DROP KW_OWNED KW_BY role_list opt_drop_behavior?;

reassignownedstmt: KW_REASSIGN KW_OWNED KW_BY role_list KW_TO rolespec;

dropstmt:
	KW_DROP object_type_any_name KW_IF KW_EXISTS any_name_list opt_drop_behavior?
	| KW_DROP object_type_any_name any_name_list opt_drop_behavior?
	| KW_DROP drop_type_name KW_IF KW_EXISTS name_list opt_drop_behavior?
	| KW_DROP drop_type_name name_list opt_drop_behavior?
	| KW_DROP object_type_name_on_any_name name KW_ON any_name opt_drop_behavior?
	| KW_DROP object_type_name_on_any_name KW_IF KW_EXISTS name KW_ON any_name opt_drop_behavior?
	| KW_DROP KW_TYPE type_name_list opt_drop_behavior?
	| KW_DROP KW_TYPE KW_IF KW_EXISTS type_name_list opt_drop_behavior?
	| KW_DROP KW_DOMAIN type_name_list opt_drop_behavior?
	| KW_DROP KW_DOMAIN KW_IF KW_EXISTS type_name_list opt_drop_behavior?
	| KW_DROP KW_INDEX KW_CONCURRENTLY any_name_list opt_drop_behavior?
	| KW_DROP KW_INDEX KW_CONCURRENTLY KW_IF KW_EXISTS any_name_list opt_drop_behavior?;

object_type_any_name:
	KW_TABLE
	| KW_SEQUENCE
	| KW_VIEW
	| KW_MATERIALIZED KW_VIEW
	| KW_INDEX
	| KW_FOREIGN KW_TABLE
	| KW_COLLATION
	| KW_CONVERSION
	| KW_STATISTICS
	| KW_TEXT KW_SEARCH KW_PARSER
	| KW_TEXT KW_SEARCH KW_DICTIONARY
	| KW_TEXT KW_SEARCH KW_TEMPLATE
	| KW_TEXT KW_SEARCH KW_CONFIGURATION;

object_type_name:
	drop_type_name
	| KW_DATABASE
	| KW_ROLE
	| KW_SUBSCRIPTION
	| KW_TABLESPACE;

drop_type_name:
	KW_ACCESS KW_METHOD
	| KW_EVENT KW_TRIGGER
	| KW_EXTENSION
	| KW_FOREIGN KW_DATA KW_WRAPPER
	| opt_procedural? KW_LANGUAGE
	| KW_PUBLICATION
	| KW_SCHEMA
	| KW_SERVER;

object_type_name_on_any_name: KW_POLICY | KW_RULE | KW_TRIGGER;

any_name_list: any_name (COMMA any_name)*;

any_name: colid attrs?;

attrs: (DOT attr_name)+;

type_name_list: typename (COMMA typename)*;

truncatestmt:
	KW_TRUNCATE opt_table? relation_expr_list opt_restart_seqs? opt_drop_behavior?;

opt_restart_seqs: KW_CONTINUE KW_IDENTITY | KW_RESTART KW_IDENTITY;

commentstmt:
	KW_COMMENT KW_ON object_type_any_name any_name KW_IS comment_text
	| KW_COMMENT KW_ON KW_COLUMN any_name KW_IS comment_text
	| KW_COMMENT KW_ON object_type_name name KW_IS comment_text
	| KW_COMMENT KW_ON KW_TYPE typename KW_IS comment_text
	| KW_COMMENT KW_ON KW_DOMAIN typename KW_IS comment_text
	| KW_COMMENT KW_ON KW_AGGREGATE aggregate_with_argtypes KW_IS comment_text
	| KW_COMMENT KW_ON KW_FUNCTION function_with_argtypes KW_IS comment_text
	| KW_COMMENT KW_ON KW_OPERATOR operator_with_argtypes KW_IS comment_text
	| KW_COMMENT KW_ON KW_CONSTRAINT name KW_ON any_name KW_IS comment_text
	| KW_COMMENT KW_ON KW_CONSTRAINT name KW_ON KW_DOMAIN any_name KW_IS comment_text
	| KW_COMMENT KW_ON object_type_name_on_any_name name KW_ON any_name KW_IS comment_text
	| KW_COMMENT KW_ON KW_PROCEDURE function_with_argtypes KW_IS comment_text
	| KW_COMMENT KW_ON KW_ROUTINE function_with_argtypes KW_IS comment_text
	| KW_COMMENT KW_ON KW_TRANSFORM KW_FOR typename KW_LANGUAGE name KW_IS comment_text
	| KW_COMMENT KW_ON KW_OPERATOR KW_CLASS any_name KW_USING name KW_IS comment_text
	| KW_COMMENT KW_ON KW_OPERATOR KW_FAMILY any_name KW_USING name KW_IS comment_text
	| KW_COMMENT KW_ON KW_LARGE KW_OBJECT numericonly KW_IS comment_text
	| KW_COMMENT KW_ON KW_CAST OPEN_PAREN typename KW_AS typename CLOSE_PAREN KW_IS comment_text;

comment_text: sconst | KW_NULL;

seclabelstmt:
	KW_SECURITY KW_LABEL opt_provider? KW_ON object_type_any_name any_name KW_IS security_label
	| KW_SECURITY KW_LABEL opt_provider? KW_ON KW_COLUMN any_name KW_IS security_label
	| KW_SECURITY KW_LABEL opt_provider? KW_ON object_type_name name KW_IS security_label
	| KW_SECURITY KW_LABEL opt_provider? KW_ON KW_TYPE typename KW_IS security_label
	| KW_SECURITY KW_LABEL opt_provider? KW_ON KW_DOMAIN typename KW_IS security_label
	| KW_SECURITY KW_LABEL opt_provider? KW_ON KW_AGGREGATE aggregate_with_argtypes KW_IS security_label
	| KW_SECURITY KW_LABEL opt_provider? KW_ON KW_FUNCTION function_with_argtypes KW_IS security_label
	| KW_SECURITY KW_LABEL opt_provider? KW_ON KW_LARGE KW_OBJECT numericonly KW_IS security_label
	| KW_SECURITY KW_LABEL opt_provider? KW_ON KW_PROCEDURE function_with_argtypes KW_IS security_label
	| KW_SECURITY KW_LABEL opt_provider? KW_ON KW_ROUTINE function_with_argtypes KW_IS security_label;

opt_provider: KW_FOR nonreservedword_or_sconst;

security_label: sconst | KW_NULL;

fetchstmt: KW_FETCH fetch_args | KW_MOVE fetch_args;

fetch_args:
	cursor_name
	| from_in cursor_name
	| KW_NEXT opt_from_in? cursor_name
	| KW_PRIOR opt_from_in? cursor_name
	| KW_FIRST opt_from_in? cursor_name
	| KW_LAST opt_from_in? cursor_name
	| KW_ABSOLUTE signediconst opt_from_in? cursor_name
	| KW_RELATIVE signediconst opt_from_in? cursor_name
	| signediconst opt_from_in? cursor_name
	| KW_ALL opt_from_in? cursor_name
	| KW_FORWARD opt_from_in? cursor_name
	| KW_FORWARD signediconst opt_from_in? cursor_name
	| KW_FORWARD KW_ALL opt_from_in? cursor_name
	| KW_BACKWARD opt_from_in? cursor_name
	| KW_BACKWARD signediconst opt_from_in? cursor_name
	| KW_BACKWARD KW_ALL opt_from_in? cursor_name;

from_in: KW_FROM | KW_IN;

opt_from_in: from_in;

grantstmt:
	KW_GRANT privileges KW_ON privilege_target KW_TO grantee_list opt_grant_grant_option?;

revokestmt:
	KW_REVOKE privileges KW_ON privilege_target KW_FROM grantee_list opt_drop_behavior?
	| KW_REVOKE KW_GRANT KW_OPTION KW_FOR privileges KW_ON privilege_target KW_FROM grantee_list opt_drop_behavior?;

privileges:
	privilege_list
	| KW_ALL
	| KW_ALL KW_PRIVILEGES
	| KW_ALL OPEN_PAREN columnlist CLOSE_PAREN
	| KW_ALL KW_PRIVILEGES OPEN_PAREN columnlist CLOSE_PAREN
	| beforeprivilegeselectlist
	;

beforeprivilegeselectlist: beforeprivilegeselect (COMMA beforeprivilegeselect)*;

beforeprivilegeselect:
	KW_SELECT
	| KW_INSERT
	| KW_UPDATE
	| KW_DELETE
	| KW_TRUNCATE
	| KW_PEFERENCES
	| KW_TRIGGER
	| KW_USAGE
	| KW_CREATE
	| KW_CONNECT
	| KW_TEMPORARY
	| KW_TEMP
	| KW_EXECUTE
	;

privilege_list: privilege (COMMA privilege)*;

privilege:
	KW_SELECT opt_column_list?
	| KW_REFERENCES opt_column_list?
	| KW_CREATE opt_column_list?
	| colid opt_column_list?;

privilege_target:
	qualified_name_list
	| KW_TABLE qualified_name_list
	| KW_SEQUENCE qualified_name_list
	| KW_FOREIGN KW_DATA KW_WRAPPER name_list
	| KW_FOREIGN KW_SERVER name_list
	| KW_FUNCTION function_with_argtypes_list
	| KW_PROCEDURE function_with_argtypes_list
	| KW_ROUTINE function_with_argtypes_list
	| KW_DATABASE name_list
	| KW_DOMAIN any_name_list
	| KW_LANGUAGE name_list
	| KW_LARGE KW_OBJECT numericonly_list
	| KW_SCHEMA name_list
	| KW_TABLESPACE name_list
	| KW_TYPE any_name_list
	| KW_ALL KW_TABLES KW_IN KW_SCHEMA name_list
	| KW_ALL KW_SEQUENCES KW_IN KW_SCHEMA name_list
	| KW_ALL KW_FUNCTIONS KW_IN KW_SCHEMA name_list
	| KW_ALL KW_PROCEDURES KW_IN KW_SCHEMA name_list
	| KW_ALL KW_ROUTINES KW_IN KW_SCHEMA name_list;

grantee_list: grantee (COMMA grantee)*;

grantee: rolespec | KW_GROUP rolespec;

opt_grant_grant_option: KW_WITH KW_GRANT KW_OPTION;

grantrolestmt:
	KW_GRANT privilege_list KW_TO role_list opt_grant_admin_option? opt_granted_by?;

revokerolestmt:
	KW_REVOKE privilege_list KW_FROM role_list opt_granted_by? opt_drop_behavior?
	| KW_REVOKE KW_ADMIN KW_OPTION KW_FOR privilege_list KW_FROM role_list opt_granted_by? opt_drop_behavior?;

opt_grant_admin_option: KW_WITH KW_ADMIN KW_OPTION;

opt_granted_by: KW_GRANTED KW_BY rolespec;

alterdefaultprivilegesstmt:
	KW_ALTER KW_DEFAULT KW_PRIVILEGES defacloptionlist defaclaction;

defacloptionlist: defacloption*;

defacloption:
	KW_IN KW_SCHEMA name_list
	| KW_FOR KW_ROLE role_list
	| KW_FOR KW_USER role_list;

defaclaction:
	KW_GRANT privileges KW_ON defacl_privilege_target KW_TO grantee_list opt_grant_grant_option?
	| KW_REVOKE privileges KW_ON defacl_privilege_target KW_FROM grantee_list opt_drop_behavior?
	| KW_REVOKE KW_GRANT KW_OPTION KW_FOR privileges KW_ON defacl_privilege_target KW_FROM grantee_list
		opt_drop_behavior?;

defacl_privilege_target:
	KW_TABLES
	| KW_FUNCTIONS
	| KW_ROUTINES
	| KW_SEQUENCES
	| KW_TYPES
	| KW_SCHEMAS;
//create index

indexstmt:
	KW_CREATE opt_unique? KW_INDEX opt_concurrently? opt_index_name? KW_ON relation_expr access_method_clause
		? OPEN_PAREN index_params CLOSE_PAREN opt_include? opt_reloptions? opttablespace?
		where_clause?
	| KW_CREATE opt_unique? KW_INDEX opt_concurrently? KW_IF KW_NOT KW_EXISTS name KW_ON relation_expr
		access_method_clause? OPEN_PAREN index_params CLOSE_PAREN opt_include? opt_reloptions?
		opttablespace? where_clause?;

opt_unique: KW_UNIQUE;

opt_concurrently: KW_CONCURRENTLY;

opt_index_name: name;

access_method_clause: KW_USING name;

index_params: index_elem (COMMA index_elem)*;

index_elem_options:
	opt_collate? opt_class? opt_asc_desc? opt_nulls_order?
	| opt_collate? any_name reloptions opt_asc_desc? opt_nulls_order?;

index_elem:
	colid index_elem_options
	| func_expr_windowless index_elem_options
	| OPEN_PAREN a_expr CLOSE_PAREN index_elem_options;

opt_include:
	KW_INCLUDE OPEN_PAREN index_including_params CLOSE_PAREN;

index_including_params: index_elem (COMMA index_elem)*;

opt_collate: KW_COLLATE any_name;

opt_class: any_name;

opt_asc_desc: KW_ASC | KW_DESC;

opt_nulls_order: KW_NULLS KW_FIRST | KW_NULLS KW_LAST;

createfunctionstmt:
	KW_CREATE opt_or_replace? (KW_FUNCTION | KW_PROCEDURE) func_name func_args_with_defaults (
		KW_RETURNS (
			func_return
			| KW_TABLE OPEN_PAREN table_func_column_list CLOSE_PAREN
		)
	)? createfunc_opt_list (KW_WITH attrilist)?; // TODO --> WITH 后面的( attribute [, ...] )表达式还需要再修改

attrilist: OPEN_PAREN colid (COMMA colid)* CLOSE_PAREN;

opt_or_replace: KW_OR KW_REPLACE;

func_args: OPEN_PAREN func_args_list? CLOSE_PAREN;

func_args_list: func_arg (COMMA func_arg)*;

function_with_argtypes_list:
	function_with_argtypes (COMMA function_with_argtypes)*;

function_with_argtypes:
	func_name func_args
	| type_func_name_keyword
	| colid indirection?;

func_args_with_defaults:
	OPEN_PAREN func_args_with_defaults_list? CLOSE_PAREN;

func_args_with_defaults_list:
	func_arg_with_default (COMMA func_arg_with_default)*;

func_arg:
	arg_class param_name? func_type
	| param_name arg_class? func_type
	| func_type;

arg_class: KW_IN KW_OUT? | KW_OUT | KW_INOUT | KW_VARIADIC;

param_name: type_function_name;

func_return: func_type;

func_type:
	typename
	| type_function_name attrs PERCENT KW_TYPE
	| KW_SETOF type_function_name attrs PERCENT KW_TYPE;

func_arg_with_default: func_arg ((KW_DEFAULT | EQUAL) a_expr)?;

aggr_arg: func_arg;

aggr_args:
	OPEN_PAREN (
		STAR
		| aggr_args_list
		| KW_ORDER KW_BY aggr_args_list
		| aggr_args_list KW_ORDER KW_BY aggr_args_list
	) CLOSE_PAREN;

aggr_args_list: aggr_arg (COMMA aggr_arg)*;

aggregate_with_argtypes: func_name aggr_args;

aggregate_with_argtypes_list:
	aggregate_with_argtypes (COMMA aggregate_with_argtypes)*;

createfunc_opt_list:
	createfunc_opt_item+ ;

common_func_opt_item:
	KW_CALLED KW_ON KW_NULL KW_INPUT
	| KW_RETURNS KW_NULL KW_ON KW_NULL KW_INPUT
	| KW_STRICT
	| KW_IMMUTABLE
	| KW_STABLE
	| KW_VOLATILE
	| KW_EXTERNAL KW_SECURITY KW_DEFINER
	| KW_EXTERNAL KW_SECURITY KW_INVOKER
	| KW_SECURITY KW_DEFINER
	| KW_SECURITY KW_INVOKER
	| KW_LEAKPROOF
	| KW_NOT KW_LEAKPROOF
	| KW_COST numericonly
	| KW_ROWS numericonly
	| KW_SUPPORT any_name
	| functionsetresetclause
	| KW_PARALLEL colid;

createfunc_opt_item:
	KW_AS func_as
	| KW_LANGUAGE nonreservedword_or_sconst
	| KW_TRANSFORM transform_type_list
	| KW_WINDOW
	| common_func_opt_item;
//https://www.postgresql.org/docs/9.1/sql-createfunction.html

//    | KW_AS 'definition'

//    | KW_AS 'obj_file', 'link_symbol'

func_as
	locals[ParserRuleContext Definition]:
	/* |KW_AS 'definition'*/ def = sconst
	/*| KW_AS 'obj_file', 'link_symbol'*/
	| sconst COMMA sconst;

transform_type_list:
	KW_FOR KW_TYPE typename (COMMA KW_FOR KW_TYPE typename)*;

opt_definition: KW_WITH definition;

table_func_column: param_name func_type;

table_func_column_list:
	table_func_column (COMMA table_func_column)*;

alterfunctionstmt:
	KW_ALTER (KW_FUNCTION | KW_PROCEDURE | KW_ROUTINE) function_with_argtypes alterfunc_opt_list opt_restrict?;

alterfunc_opt_list: common_func_opt_item+;

opt_restrict: KW_RESTRICT;

removefuncstmt:
	KW_DROP KW_FUNCTION function_with_argtypes_list opt_drop_behavior?
	| KW_DROP KW_FUNCTION KW_IF KW_EXISTS function_with_argtypes_list opt_drop_behavior?
	| KW_DROP KW_PROCEDURE function_with_argtypes_list opt_drop_behavior?
	| KW_DROP KW_PROCEDURE KW_IF KW_EXISTS function_with_argtypes_list opt_drop_behavior?
	| KW_DROP KW_ROUTINE function_with_argtypes_list opt_drop_behavior?
	| KW_DROP KW_ROUTINE KW_IF KW_EXISTS function_with_argtypes_list opt_drop_behavior?;

removeaggrstmt:
	KW_DROP KW_AGGREGATE aggregate_with_argtypes_list opt_drop_behavior?
	| KW_DROP KW_AGGREGATE KW_IF KW_EXISTS aggregate_with_argtypes_list opt_drop_behavior?;

removeoperstmt:
	KW_DROP KW_OPERATOR operator_with_argtypes_list opt_drop_behavior?
	| KW_DROP KW_OPERATOR KW_IF KW_EXISTS operator_with_argtypes_list opt_drop_behavior?;

oper_argtypes:
	OPEN_PAREN typename CLOSE_PAREN
	| OPEN_PAREN typename COMMA typename CLOSE_PAREN
	| OPEN_PAREN KW_NONE COMMA typename CLOSE_PAREN
	| OPEN_PAREN typename COMMA KW_NONE CLOSE_PAREN;

any_operator: (colid DOT)* all_op;

operator_with_argtypes_list:
	operator_with_argtypes (COMMA operator_with_argtypes)*;

operator_with_argtypes: any_operator oper_argtypes;

dostmt: KW_DO dostmt_opt_list;

dostmt_opt_list: dostmt_opt_item+;

dostmt_opt_item: sconst | KW_LANGUAGE nonreservedword_or_sconst;

createcaststmt:
	KW_CREATE KW_CAST OPEN_PAREN typename KW_AS typename CLOSE_PAREN KW_WITH KW_FUNCTION function_with_argtypes
		cast_context?
	| KW_CREATE KW_CAST OPEN_PAREN typename KW_AS typename CLOSE_PAREN KW_WITHOUT KW_FUNCTION cast_context?
	| KW_CREATE KW_CAST OPEN_PAREN typename KW_AS typename CLOSE_PAREN KW_WITH KW_INOUT cast_context?;

cast_context: KW_AS KW_IMPLICIT | KW_AS KW_ASSIGNMENT;

dropcaststmt:
	KW_DROP KW_CAST opt_if_exists? OPEN_PAREN typename KW_AS typename CLOSE_PAREN opt_drop_behavior?;

opt_if_exists: KW_IF KW_EXISTS;

createtransformstmt:
	KW_CREATE opt_or_replace? KW_TRANSFORM KW_FOR typename KW_LANGUAGE name OPEN_PAREN transform_element_list
		CLOSE_PAREN;

transform_element_list:
	KW_FROM KW_SQL KW_WITH KW_FUNCTION function_with_argtypes COMMA KW_TO KW_SQL KW_WITH KW_FUNCTION
		function_with_argtypes
	| KW_TO KW_SQL KW_WITH KW_FUNCTION function_with_argtypes COMMA KW_FROM KW_SQL KW_WITH KW_FUNCTION
		function_with_argtypes
	| KW_FROM KW_SQL KW_WITH KW_FUNCTION function_with_argtypes
	| KW_TO KW_SQL KW_WITH KW_FUNCTION function_with_argtypes;

droptransformstmt:
	KW_DROP KW_TRANSFORM opt_if_exists? KW_FOR typename KW_LANGUAGE name opt_drop_behavior?;

reindexstmt:
	KW_REINDEX reindex_target_type opt_concurrently? qualified_name
	| KW_REINDEX reindex_target_multitable opt_concurrently? name
	| KW_REINDEX OPEN_PAREN reindex_option_list CLOSE_PAREN reindex_target_type opt_concurrently?
		qualified_name
	| KW_REINDEX OPEN_PAREN reindex_option_list CLOSE_PAREN reindex_target_multitable opt_concurrently?
		name;

reindex_target_type: KW_INDEX | KW_TABLE;

reindex_target_multitable: KW_SCHEMA | KW_SYSTEM | KW_DATABASE;

reindex_option_list:
	reindex_option_elem (COMMA reindex_option_elem)*;

reindex_option_elem: KW_VERBOSE;

altertblspcstmt:
	KW_ALTER KW_TABLESPACE name KW_SET reloptions
	| KW_ALTER KW_TABLESPACE name KW_RESET reloptions;

renamestmt:
	KW_ALTER KW_AGGREGATE aggregate_with_argtypes KW_RENAME KW_TO name
	| KW_ALTER KW_COLLATION any_name KW_RENAME KW_TO name
	| KW_ALTER KW_CONVERSION any_name KW_RENAME KW_TO name
	| KW_ALTER KW_DATABASE name KW_RENAME KW_TO name
	| KW_ALTER KW_DOMAIN any_name KW_RENAME KW_TO name
	| KW_ALTER KW_DOMAIN any_name KW_RENAME KW_CONSTRAINT name KW_TO name
	| KW_ALTER KW_FOREIGN KW_DATA KW_WRAPPER name KW_RENAME KW_TO name
	| KW_ALTER KW_FUNCTION function_with_argtypes KW_RENAME KW_TO name
	| KW_ALTER KW_GROUP roleid KW_RENAME KW_TO roleid
	| KW_ALTER opt_procedural? KW_LANGUAGE name KW_RENAME KW_TO name
	| KW_ALTER KW_OPERATOR KW_CLASS any_name KW_USING name KW_RENAME KW_TO name
	| KW_ALTER KW_OPERATOR KW_FAMILY any_name KW_USING name KW_RENAME KW_TO name
	| KW_ALTER KW_POLICY name KW_ON qualified_name KW_RENAME KW_TO name
	| KW_ALTER KW_POLICY KW_IF KW_EXISTS name KW_ON qualified_name KW_RENAME KW_TO name
	| KW_ALTER KW_PROCEDURE function_with_argtypes KW_RENAME KW_TO name
	| KW_ALTER KW_PUBLICATION name KW_RENAME KW_TO name
	| KW_ALTER KW_ROUTINE function_with_argtypes KW_RENAME KW_TO name
	| KW_ALTER KW_SCHEMA name KW_RENAME KW_TO name
	| KW_ALTER KW_SERVER name KW_RENAME KW_TO name
	| KW_ALTER KW_SUBSCRIPTION name KW_RENAME KW_TO name
	| KW_ALTER KW_TABLE relation_expr KW_RENAME KW_TO name
	| KW_ALTER KW_TABLE KW_IF KW_EXISTS relation_expr KW_RENAME KW_TO name
	| KW_ALTER KW_SEQUENCE qualified_name KW_RENAME KW_TO name
	| KW_ALTER KW_SEQUENCE KW_IF KW_EXISTS qualified_name KW_RENAME KW_TO name
	| KW_ALTER KW_VIEW qualified_name KW_RENAME KW_TO name
	| KW_ALTER KW_VIEW KW_IF KW_EXISTS qualified_name KW_RENAME KW_TO name
	| KW_ALTER KW_MATERIALIZED KW_VIEW qualified_name KW_RENAME KW_TO name
	| KW_ALTER KW_MATERIALIZED KW_VIEW KW_IF KW_EXISTS qualified_name KW_RENAME KW_TO name
	| KW_ALTER KW_INDEX qualified_name KW_RENAME KW_TO name
	| KW_ALTER KW_INDEX KW_IF KW_EXISTS qualified_name KW_RENAME KW_TO name
	| KW_ALTER KW_FOREIGN KW_TABLE relation_expr KW_RENAME KW_TO name
	| KW_ALTER KW_FOREIGN KW_TABLE KW_IF KW_EXISTS relation_expr KW_RENAME KW_TO name
	| KW_ALTER KW_TABLE relation_expr KW_RENAME opt_column? name KW_TO name
	| KW_ALTER KW_TABLE KW_IF KW_EXISTS relation_expr KW_RENAME opt_column? name KW_TO name
	| KW_ALTER KW_VIEW qualified_name KW_RENAME opt_column? name KW_TO name
	| KW_ALTER KW_VIEW KW_IF KW_EXISTS qualified_name KW_RENAME opt_column? name KW_TO name
	| KW_ALTER KW_MATERIALIZED KW_VIEW qualified_name KW_RENAME opt_column? name KW_TO name
	| KW_ALTER KW_MATERIALIZED KW_VIEW KW_IF KW_EXISTS qualified_name KW_RENAME opt_column? name KW_TO name
	| KW_ALTER KW_TABLE relation_expr KW_RENAME KW_CONSTRAINT name KW_TO name
	| KW_ALTER KW_TABLE KW_IF KW_EXISTS relation_expr KW_RENAME KW_CONSTRAINT name KW_TO name
	| KW_ALTER KW_FOREIGN KW_TABLE relation_expr KW_RENAME opt_column? name KW_TO name
	| KW_ALTER KW_FOREIGN KW_TABLE KW_IF KW_EXISTS relation_expr KW_RENAME opt_column? name KW_TO name
	| KW_ALTER KW_RULE name KW_ON qualified_name KW_RENAME KW_TO name
	| KW_ALTER KW_TRIGGER name KW_ON qualified_name KW_RENAME KW_TO name
	| KW_ALTER KW_EVENT KW_TRIGGER name KW_RENAME KW_TO name
	| KW_ALTER KW_ROLE roleid KW_RENAME KW_TO roleid
	| KW_ALTER KW_USER roleid KW_RENAME KW_TO roleid
	| KW_ALTER KW_TABLESPACE name KW_RENAME KW_TO name
	| KW_ALTER KW_STATISTICS any_name KW_RENAME KW_TO name
	| KW_ALTER KW_TEXT KW_SEARCH KW_PARSER any_name KW_RENAME KW_TO name
	| KW_ALTER KW_TEXT KW_SEARCH KW_DICTIONARY any_name KW_RENAME KW_TO name
	| KW_ALTER KW_TEXT KW_SEARCH KW_TEMPLATE any_name KW_RENAME KW_TO name
	| KW_ALTER KW_TEXT KW_SEARCH KW_CONFIGURATION any_name KW_RENAME KW_TO name
	| KW_ALTER KW_TYPE any_name KW_RENAME KW_TO name
	| KW_ALTER KW_TYPE any_name KW_RENAME KW_ATTRIBUTE name KW_TO name opt_drop_behavior?;

opt_column: KW_COLUMN;

opt_set_data: KW_SET KW_DATA;

alterobjectdependsstmt:
	KW_ALTER KW_FUNCTION function_with_argtypes opt_no? KW_DEPENDS KW_ON KW_EXTENSION name
	| KW_ALTER KW_PROCEDURE function_with_argtypes opt_no? KW_DEPENDS KW_ON KW_EXTENSION name
	| KW_ALTER KW_ROUTINE function_with_argtypes opt_no? KW_DEPENDS KW_ON KW_EXTENSION name
	| KW_ALTER KW_TRIGGER name KW_ON qualified_name opt_no? KW_DEPENDS KW_ON KW_EXTENSION name
	| KW_ALTER KW_MATERIALIZED KW_VIEW qualified_name opt_no? KW_DEPENDS KW_ON KW_EXTENSION name
	| KW_ALTER KW_INDEX qualified_name opt_no? KW_DEPENDS KW_ON KW_EXTENSION name;

opt_no: KW_NO;

alterobjectschemastmt:
	KW_ALTER KW_AGGREGATE aggregate_with_argtypes KW_SET KW_SCHEMA name
	| KW_ALTER KW_COLLATION any_name KW_SET KW_SCHEMA name
	| KW_ALTER KW_CONVERSION any_name KW_SET KW_SCHEMA name
	| KW_ALTER KW_DOMAIN any_name KW_SET KW_SCHEMA name
	| KW_ALTER KW_EXTENSION name KW_SET KW_SCHEMA name
	| KW_ALTER KW_FUNCTION function_with_argtypes KW_SET KW_SCHEMA name
	| KW_ALTER KW_OPERATOR operator_with_argtypes KW_SET KW_SCHEMA name
	| KW_ALTER KW_OPERATOR KW_CLASS any_name KW_USING name KW_SET KW_SCHEMA name
	| KW_ALTER KW_OPERATOR KW_FAMILY any_name KW_USING name KW_SET KW_SCHEMA name
	| KW_ALTER KW_PROCEDURE function_with_argtypes KW_SET KW_SCHEMA name
	| KW_ALTER KW_ROUTINE function_with_argtypes KW_SET KW_SCHEMA name
	| KW_ALTER KW_TABLE relation_expr KW_SET KW_SCHEMA name
	| KW_ALTER KW_TABLE KW_IF KW_EXISTS relation_expr KW_SET KW_SCHEMA name
	| KW_ALTER KW_STATISTICS any_name KW_SET KW_SCHEMA name
	| KW_ALTER KW_TEXT KW_SEARCH KW_PARSER any_name KW_SET KW_SCHEMA name
	| KW_ALTER KW_TEXT KW_SEARCH KW_DICTIONARY any_name KW_SET KW_SCHEMA name
	| KW_ALTER KW_TEXT KW_SEARCH KW_TEMPLATE any_name KW_SET KW_SCHEMA name
	| KW_ALTER KW_TEXT KW_SEARCH KW_CONFIGURATION any_name KW_SET KW_SCHEMA name
	| KW_ALTER KW_SEQUENCE qualified_name KW_SET KW_SCHEMA name
	| KW_ALTER KW_SEQUENCE KW_IF KW_EXISTS qualified_name KW_SET KW_SCHEMA name
	| KW_ALTER KW_VIEW qualified_name KW_SET KW_SCHEMA name
	| KW_ALTER KW_VIEW KW_IF KW_EXISTS qualified_name KW_SET KW_SCHEMA name
	| KW_ALTER KW_MATERIALIZED KW_VIEW qualified_name KW_SET KW_SCHEMA name
	| KW_ALTER KW_MATERIALIZED KW_VIEW KW_IF KW_EXISTS qualified_name KW_SET KW_SCHEMA name
	| KW_ALTER KW_FOREIGN KW_TABLE relation_expr KW_SET KW_SCHEMA name
	| KW_ALTER KW_FOREIGN KW_TABLE KW_IF KW_EXISTS relation_expr KW_SET KW_SCHEMA name
	| KW_ALTER KW_TYPE any_name KW_SET KW_SCHEMA name;

alteroperatorstmt:
	KW_ALTER KW_OPERATOR operator_with_argtypes KW_SET OPEN_PAREN operator_def_list CLOSE_PAREN;

operator_def_list: operator_def_elem (COMMA operator_def_elem)*;

operator_def_elem:
	collabel EQUAL KW_NONE
	| collabel EQUAL operator_def_arg;

operator_def_arg:
	func_type
	| reserved_keyword
	| qual_all_op
	| numericonly
	| sconst;

altertypestmt:
	KW_ALTER KW_TYPE any_name KW_SET OPEN_PAREN operator_def_list CLOSE_PAREN;

alterownerstmt:
	KW_ALTER KW_AGGREGATE aggregate_with_argtypes KW_OWNER KW_TO rolespec
	| KW_ALTER KW_COLLATION any_name KW_OWNER KW_TO rolespec
	| KW_ALTER KW_CONVERSION any_name KW_OWNER KW_TO rolespec
	| KW_ALTER KW_DATABASE name KW_OWNER KW_TO rolespec
	| KW_ALTER KW_DOMAIN any_name KW_OWNER KW_TO rolespec
	| KW_ALTER KW_FUNCTION function_with_argtypes KW_OWNER KW_TO rolespec
	| KW_ALTER opt_procedural? KW_LANGUAGE name KW_OWNER KW_TO rolespec
	| KW_ALTER KW_LARGE KW_OBJECT numericonly KW_OWNER KW_TO rolespec
	| KW_ALTER KW_OPERATOR operator_with_argtypes KW_OWNER KW_TO rolespec
	| KW_ALTER KW_OPERATOR KW_CLASS any_name KW_USING name KW_OWNER KW_TO rolespec
	| KW_ALTER KW_OPERATOR KW_FAMILY any_name KW_USING name KW_OWNER KW_TO rolespec
	| KW_ALTER KW_PROCEDURE function_with_argtypes KW_OWNER KW_TO rolespec
	| KW_ALTER KW_ROUTINE function_with_argtypes KW_OWNER KW_TO rolespec
	| KW_ALTER KW_SCHEMA name KW_OWNER KW_TO rolespec
	| KW_ALTER KW_TYPE any_name KW_OWNER KW_TO rolespec
	| KW_ALTER KW_TABLESPACE name KW_OWNER KW_TO rolespec
	| KW_ALTER KW_STATISTICS any_name KW_OWNER KW_TO rolespec
	| KW_ALTER KW_TEXT KW_SEARCH KW_DICTIONARY any_name KW_OWNER KW_TO rolespec
	| KW_ALTER KW_TEXT KW_SEARCH KW_CONFIGURATION any_name KW_OWNER KW_TO rolespec
	| KW_ALTER KW_FOREIGN KW_DATA KW_WRAPPER name KW_OWNER KW_TO rolespec
	| KW_ALTER KW_SERVER name KW_OWNER KW_TO rolespec
	| KW_ALTER KW_EVENT KW_TRIGGER name KW_OWNER KW_TO rolespec
	| KW_ALTER KW_PUBLICATION name KW_OWNER KW_TO rolespec
	| KW_ALTER KW_SUBSCRIPTION name KW_OWNER KW_TO rolespec;

createpublicationstmt:
	KW_CREATE KW_PUBLICATION name opt_publication_for_tables? opt_definition?;

opt_publication_for_tables: publication_for_tables;

publication_for_tables:
	KW_FOR KW_TABLE relation_expr_list
	| KW_FOR KW_ALL KW_TABLES;

alterpublicationstmt:
	KW_ALTER KW_PUBLICATION name KW_SET definition
	| KW_ALTER KW_PUBLICATION name KW_ADD KW_TABLE relation_expr_list
	| KW_ALTER KW_PUBLICATION name KW_SET KW_TABLE relation_expr_list
	| KW_ALTER KW_PUBLICATION name KW_DROP KW_TABLE relation_expr_list;

createsubscriptionstmt:
	KW_CREATE KW_SUBSCRIPTION name KW_CONNECTION sconst KW_PUBLICATION publication_name_list opt_definition?;

publication_name_list:
	publication_name_item (COMMA publication_name_item)*;

publication_name_item: collabel;

altersubscriptionstmt:
	KW_ALTER KW_SUBSCRIPTION name KW_SET definition
	| KW_ALTER KW_SUBSCRIPTION name KW_CONNECTION sconst
	| KW_ALTER KW_SUBSCRIPTION name KW_REFRESH KW_PUBLICATION opt_definition?
	| KW_ALTER KW_SUBSCRIPTION name KW_SET KW_PUBLICATION publication_name_list opt_definition?
	| KW_ALTER KW_SUBSCRIPTION name KW_ENABLE
	| KW_ALTER KW_SUBSCRIPTION name KW_DISABLE;

dropsubscriptionstmt:
	KW_DROP KW_SUBSCRIPTION name opt_drop_behavior?
	| KW_DROP KW_SUBSCRIPTION KW_IF KW_EXISTS name opt_drop_behavior?;

rulestmt:
	KW_CREATE opt_or_replace? KW_RULE name KW_AS KW_ON event KW_TO qualified_name where_clause? KW_DO opt_instead?
		ruleactionlist;

ruleactionlist:
	KW_NOTHING
	| ruleactionstmt
	| OPEN_PAREN ruleactionmulti CLOSE_PAREN;

ruleactionmulti:
	ruleactionstmtOrEmpty? (SEMI ruleactionstmtOrEmpty?)*;

ruleactionstmt:
	selectstmt
	| insertstmt
	| updatestmt
	| deletestmt
	| notifystmt;

ruleactionstmtOrEmpty: ruleactionstmt;

event: KW_SELECT | KW_UPDATE | KW_DELETE | KW_INSERT;

opt_instead: KW_INSTEAD | KW_ALSO;

notifystmt: KW_NOTIFY colid notify_payload?;

notify_payload: COMMA sconst;

listenstmt: KW_LISTEN colid;

unlistenstmt: KW_UNLISTEN colid | KW_UNLISTEN STAR;

transactionstmt:
	KW_ABORT opt_transaction? opt_transaction_chain?
	| KW_BEGIN opt_transaction? transaction_mode_list_or_empty?
	| KW_START KW_TRANSACTION transaction_mode_list_or_empty?
	| KW_COMMIT opt_transaction? opt_transaction_chain?
	| KW_END opt_transaction? opt_transaction_chain?
	| KW_ROLLBACK opt_transaction? opt_transaction_chain?
	| KW_SAVEPOINT colid
	| KW_RELEASE KW_SAVEPOINT colid
	| KW_RELEASE colid
	| KW_ROLLBACK opt_transaction? KW_TO KW_SAVEPOINT colid
	| KW_ROLLBACK opt_transaction? KW_TO colid
	| KW_PREPARE KW_TRANSACTION sconst
	| KW_COMMIT KW_PREPARED sconst
	| KW_ROLLBACK KW_PREPARED sconst;

opt_transaction: KW_WORK | KW_TRANSACTION;

transaction_mode_item:
	KW_ISOLATION KW_LEVEL iso_level
	| KW_READ KW_ONLY
	| KW_READ KW_WRITE
	| KW_DEFERRABLE
	| KW_NOT KW_DEFERRABLE;

transaction_mode_list:
	transaction_mode_item (COMMA? transaction_mode_item)*;

transaction_mode_list_or_empty: transaction_mode_list;

opt_transaction_chain: KW_AND KW_NO? KW_CHAIN;

viewstmt:
	KW_CREATE (KW_OR KW_REPLACE)? opttemp? (
		KW_VIEW qualified_name opt_column_list? opt_reloptions?
		| KW_RECURSIVE KW_VIEW qualified_name OPEN_PAREN columnlist CLOSE_PAREN opt_reloptions?
	) KW_AS selectstmt opt_check_option?;

opt_check_option: KW_WITH (KW_CASCADED | KW_LOCAL)? KW_CHECK KW_OPTION;

loadstmt: KW_LOAD file_name;

createdbstmt: KW_CREATE KW_DATABASE name opt_with? createdb_opt_list?;

createdb_opt_list: createdb_opt_items;

createdb_opt_items: createdb_opt_item+;

createdb_opt_item:
	createdb_opt_name opt_equal? (
		signediconst
		| opt_boolean_or_string
		| KW_DEFAULT
	);

createdb_opt_name:
	identifier
	| KW_CONNECTION KW_LIMIT
	| KW_ENCODING
	| KW_LOCATION
	| KW_OWNER
	| KW_TABLESPACE
	| KW_TEMPLATE;

opt_equal: EQUAL;

alterdatabasestmt:
	KW_ALTER KW_DATABASE name (
		KW_WITH createdb_opt_list?
		| createdb_opt_list?
		| KW_SET KW_TABLESPACE name
	);

alterdatabasesetstmt: KW_ALTER KW_DATABASE name setresetclause;

dropdbstmt:
	KW_DROP KW_DATABASE (KW_IF KW_EXISTS)? name (
		opt_with? OPEN_PAREN drop_option_list CLOSE_PAREN
	)?;

drop_option_list: drop_option (COMMA drop_option)*;

drop_option: KW_FORCE;

altercollationstmt: KW_ALTER KW_COLLATION any_name KW_REFRESH KW_VERSION;

altersystemstmt: KW_ALTER KW_SYSTEM (KW_SET | KW_RESET) generic_set;

createdomainstmt:
	KW_CREATE KW_DOMAIN any_name opt_as? typename colquallist;

alterdomainstmt:
	KW_ALTER KW_DOMAIN any_name (
		alter_column_default
		| KW_DROP KW_NOT KW_NULL
		| KW_SET KW_NOT KW_NULL
		| KW_ADD tableconstraint
		| KW_DROP KW_CONSTRAINT (KW_IF KW_EXISTS)? name opt_drop_behavior?
		| KW_VALIDATE KW_CONSTRAINT name
	);

opt_as: KW_AS;

altertsdictionarystmt:
	KW_ALTER KW_TEXT KW_SEARCH KW_DICTIONARY any_name definition;

altertsconfigurationstmt:
	KW_ALTER KW_TEXT KW_SEARCH KW_CONFIGURATION any_name KW_ADD KW_MAPPING KW_FOR name_list any_with any_name_list
	| KW_ALTER KW_TEXT KW_SEARCH KW_CONFIGURATION any_name KW_ALTER KW_MAPPING KW_FOR name_list any_with any_name_list
	| KW_ALTER KW_TEXT KW_SEARCH KW_CONFIGURATION any_name KW_ALTER KW_MAPPING KW_REPLACE any_name any_with any_name
	| KW_ALTER KW_TEXT KW_SEARCH KW_CONFIGURATION any_name KW_ALTER KW_MAPPING KW_FOR name_list KW_REPLACE any_name
		any_with any_name
	| KW_ALTER KW_TEXT KW_SEARCH KW_CONFIGURATION any_name KW_DROP KW_MAPPING KW_FOR name_list
	| KW_ALTER KW_TEXT KW_SEARCH KW_CONFIGURATION any_name KW_DROP KW_MAPPING KW_IF KW_EXISTS KW_FOR name_list;

any_with:
	KW_WITH
	; //         | WITH_LA

createconversionstmt:
	KW_CREATE opt_default? KW_CONVERSION any_name KW_FOR sconst KW_TO sconst KW_FROM any_name;

clusterstmt:
	KW_CLUSTER opt_verbose? qualified_name cluster_index_specification?
	| KW_CLUSTER opt_verbose?
	| KW_CLUSTER opt_verbose? name KW_ON qualified_name;

cluster_index_specification: KW_USING name;

vacuumstmt:
	KW_VACUUM opt_full? opt_freeze? opt_verbose? opt_analyze? opt_vacuum_relation_list?
	| KW_VACUUM OPEN_PAREN vac_analyze_option_list CLOSE_PAREN opt_vacuum_relation_list?;

analyzestmt:
	analyze_keyword opt_verbose? opt_vacuum_relation_list?
	| analyze_keyword OPEN_PAREN vac_analyze_option_list CLOSE_PAREN opt_vacuum_relation_list?;

vac_analyze_option_list:
	vac_analyze_option_elem (COMMA vac_analyze_option_elem)*;

analyze_keyword: KW_ANALYZE | KW_ANALYSE;

vac_analyze_option_elem:
	vac_analyze_option_name vac_analyze_option_arg?;

vac_analyze_option_name: nonreservedword | analyze_keyword;

vac_analyze_option_arg: opt_boolean_or_string | numericonly;

opt_analyze: analyze_keyword;

opt_verbose: KW_VERBOSE;

opt_full: KW_FULL;

opt_freeze: KW_FREEZE;

opt_name_list: OPEN_PAREN name_list CLOSE_PAREN;

vacuum_relation: qualified_name opt_name_list?;

vacuum_relation_list: vacuum_relation (COMMA vacuum_relation)*;

opt_vacuum_relation_list: vacuum_relation_list;

explainstmt:
	KW_EXPLAIN explainablestmt
	| KW_EXPLAIN analyze_keyword opt_verbose? explainablestmt
	| KW_EXPLAIN KW_VERBOSE explainablestmt
	| KW_EXPLAIN OPEN_PAREN explain_option_list CLOSE_PAREN explainablestmt;

explainablestmt:
	selectstmt
	| insertstmt
	| updatestmt
	| deletestmt
	| declarecursorstmt
	| createasstmt
	| creatematviewstmt
	| refreshmatviewstmt
	| executestmt;

explain_option_list:
	explain_option_elem (COMMA explain_option_elem)*;

explain_option_elem: explain_option_name explain_option_arg?;

explain_option_name: nonreservedword | analyze_keyword;

explain_option_arg: opt_boolean_or_string | numericonly;

preparestmt: KW_PREPARE name prep_type_clause? KW_AS preparablestmt;

prep_type_clause: OPEN_PAREN type_list CLOSE_PAREN;

preparablestmt:
	selectstmt
	| insertstmt
	| updatestmt
	| deletestmt;

executestmt:
	KW_EXECUTE name execute_param_clause?
	| KW_CREATE opttemp? KW_TABLE create_as_target KW_AS KW_EXECUTE name execute_param_clause? opt_with_data?
	| KW_CREATE opttemp? KW_TABLE KW_IF KW_NOT KW_EXISTS create_as_target KW_AS KW_EXECUTE name execute_param_clause?
		opt_with_data?;

execute_param_clause: OPEN_PAREN expr_list CLOSE_PAREN;

deallocatestmt:
	KW_DEALLOCATE name
	| KW_DEALLOCATE KW_PREPARE name
	| KW_DEALLOCATE KW_ALL
	| KW_DEALLOCATE KW_PREPARE KW_ALL;

insertstmt:
	opt_with_clause? KW_INSERT KW_INTO insert_target insert_rest opt_on_conflict? returning_clause?;

insert_target: qualified_name (KW_AS colid)?;

insert_rest:
	selectstmt
	| KW_OVERRIDING override_kind KW_VALUE selectstmt
	| OPEN_PAREN insert_column_list CLOSE_PAREN (
		KW_OVERRIDING override_kind KW_VALUE
	)? selectstmt
	| KW_DEFAULT KW_VALUES;

override_kind: KW_USER | KW_SYSTEM;

insert_column_list:
	insert_column_item (COMMA insert_column_item)*;

insert_column_item: colid opt_indirection;

opt_on_conflict:
	KW_ON KW_CONFLICT opt_conf_expr? KW_DO (
		KW_UPDATE KW_SET set_clause_list where_clause?
		| KW_NOTHING
	);

opt_conf_expr:
	OPEN_PAREN index_params CLOSE_PAREN where_clause?
	| KW_ON KW_CONSTRAINT name;

returning_clause: KW_RETURNING target_list;

deletestmt:
	opt_with_clause? KW_DELETE KW_FROM relation_expr_opt_alias using_clause? where_or_current_clause?
		returning_clause?;

using_clause: KW_USING from_list;

lockstmt:
	KW_LOCK opt_table? relation_expr_list opt_lock? opt_nowait?;

opt_lock: KW_IN lock_type KW_MODE;

lock_type:
	KW_ACCESS (KW_SHARE | KW_EXCLUSIVE)
	| KW_ROW (KW_SHARE | KW_EXCLUSIVE)
	| KW_SHARE (KW_UPDATE KW_EXCLUSIVE | KW_ROW KW_EXCLUSIVE)?
	| KW_EXCLUSIVE;

opt_nowait: KW_NOWAIT;

opt_nowait_or_skip: KW_NOWAIT | KW_SKIP KW_LOCKED;

updatestmt:
	opt_with_clause? KW_UPDATE relation_expr_opt_alias KW_SET set_clause_list from_clause?
		where_or_current_clause? returning_clause?;

set_clause_list: set_clause (COMMA set_clause)*;

set_clause:
	set_target EQUAL a_expr
	| OPEN_PAREN set_target_list CLOSE_PAREN EQUAL a_expr;

set_target: colid opt_indirection;

set_target_list: set_target (COMMA set_target)*;

declarecursorstmt:
	KW_DECLARE cursor_name cursor_options KW_CURSOR opt_hold KW_FOR selectstmt;

cursor_name: name;

cursor_options: (KW_NO KW_SCROLL | KW_SCROLL | KW_BINARY | KW_INSENSITIVE)*;

opt_hold: | KW_WITH KW_HOLD | KW_WITHOUT KW_HOLD;
/*
 TODO: why select_with_parens alternative is needed at all? i guess it because original byson
 grammar can choose selectstmt(2)->select_with_parens on only OPEN_PARENT/SELECT kewords at the
 begining of statement; (select * from tab); parse can go through selectstmt(
 )->select_no_parens(1)->select_clause(2)->select_with_parens(1)->select_no_parens(1)->select_clause(1)->simple_select
 instead of
 selectstmt(1)->select_no_parens(1)->select_clause(2)->select_with_parens(1)->select_no_parens(1)->select_clause(1)->simple_select
 all standard tests passed on both variants
 */

selectstmt: select_no_parens | select_with_parens;

select_with_parens:
	OPEN_PAREN select_no_parens CLOSE_PAREN
	| OPEN_PAREN select_with_parens CLOSE_PAREN;

select_no_parens:
	select_clause opt_sort_clause? (
		for_locking_clause opt_select_limit?
		| select_limit opt_for_locking_clause?
	)?
	| with_clause select_clause opt_sort_clause? (
		for_locking_clause opt_select_limit?
		| select_limit opt_for_locking_clause?
	)?;

select_clause: simple_select | select_with_parens;

simple_select: (
		KW_SELECT (
			opt_all_clause? into_clause? opt_target_list?
			| distinct_clause? target_list?
		) into_clause? from_clause? where_clause? group_clause? having_clause? window_clause?
		| values_clause
		| KW_TABLE relation_expr
		| select_with_parens set_operator_with_all_or_distinct (
			simple_select
			| select_with_parens
		)
	) (
		set_operator_with_all_or_distinct (
			simple_select
			| select_with_parens
		)
	)*;

set_operator:
	KW_UNION		# union
	| KW_INTERSECT	# intersect
	| KW_EXCEPT	# except;

set_operator_with_all_or_distinct:
	set_operator all_or_distinct?;

with_clause: KW_WITH KW_RECURSIVE? cte_list;

cte_list: common_table_expr (COMMA common_table_expr)*;

common_table_expr:
	name opt_name_list? KW_AS opt_materialized? OPEN_PAREN preparablestmt CLOSE_PAREN;

opt_materialized: KW_MATERIALIZED | KW_NOT KW_MATERIALIZED;

opt_with_clause: with_clause;

into_clause: KW_INTO (opt_strict opttempTableName | into_target);

opt_strict: | KW_STRICT;

opttempTableName: (KW_LOCAL | KW_GLOBAL)? (KW_TEMPORARY | KW_TEMP) opt_table? qualified_name
	| KW_UNLOGGED opt_table? qualified_name
	| KW_TABLE qualified_name
	| qualified_name;

opt_table: KW_TABLE;

all_or_distinct: KW_ALL | KW_DISTINCT;

distinct_clause:
	KW_DISTINCT (KW_ON OPEN_PAREN expr_list CLOSE_PAREN)?;

opt_all_clause: KW_ALL;

opt_sort_clause: sort_clause;

sort_clause: KW_ORDER KW_BY sortby_list;

sortby_list: sortby (COMMA sortby)*;

sortby:
	a_expr (KW_USING qual_all_op | opt_asc_desc)? opt_nulls_order?;

select_limit:
	limit_clause offset_clause?
	| offset_clause limit_clause?;

opt_select_limit: select_limit;

limit_clause:
	KW_LIMIT select_limit_value (COMMA select_offset_value)?
	| KW_FETCH first_or_next (
		select_fetch_first_value row_or_rows (KW_ONLY | KW_WITH KW_TIES)
		| row_or_rows (KW_ONLY | KW_WITH KW_TIES)
	);

offset_clause:
	KW_OFFSET (
		select_offset_value
		| select_fetch_first_value row_or_rows
	);

select_limit_value: a_expr | KW_ALL;

select_offset_value: a_expr;

select_fetch_first_value:
	c_expr
	| PLUS i_or_f_const
	| MINUS i_or_f_const;

i_or_f_const: iconst | fconst;

row_or_rows: KW_ROW | KW_ROWS;

first_or_next: KW_FIRST | KW_NEXT;

group_clause: KW_GROUP KW_BY group_by_list;

group_by_list: group_by_item (COMMA group_by_item)*;

group_by_item:
	a_expr
	| empty_grouping_set
	| cube_clause
	| rollup_clause
	| grouping_sets_clause;

empty_grouping_set: OPEN_PAREN CLOSE_PAREN;

rollup_clause: KW_ROLLUP OPEN_PAREN expr_list CLOSE_PAREN;

cube_clause: KW_CUBE OPEN_PAREN expr_list CLOSE_PAREN;

grouping_sets_clause:
	KW_GROUPING KW_SETS OPEN_PAREN group_by_list CLOSE_PAREN;

having_clause: KW_HAVING a_expr;

for_locking_clause: for_locking_items | KW_FOR KW_READ KW_ONLY;

opt_for_locking_clause: for_locking_clause;

for_locking_items: for_locking_item+;

for_locking_item:
	for_locking_strength locked_rels_list? opt_nowait_or_skip?;

for_locking_strength: KW_FOR ((KW_NO KW_KEY)? KW_UPDATE | KW_KEY? KW_SHARE);

locked_rels_list: KW_OF qualified_name_list;

values_clause:
	KW_VALUES OPEN_PAREN expr_list CLOSE_PAREN (
		COMMA OPEN_PAREN expr_list CLOSE_PAREN
	)*;

from_clause: KW_FROM from_list;

from_list: table_ref (COMMA table_ref)*;

table_ref: (
		relation_expr opt_alias_clause? tablesample_clause?
		| func_table func_alias_clause?
		| xmltable opt_alias_clause?
		| select_with_parens opt_alias_clause?
		| KW_LATERAL (
			xmltable opt_alias_clause?
			| func_table func_alias_clause?
			| select_with_parens opt_alias_clause?
		)
		| OPEN_PAREN table_ref (
			KW_CROSS KW_JOIN table_ref
			| KW_NATURAL join_type? KW_JOIN table_ref
			| join_type? KW_JOIN table_ref join_qual
		)? CLOSE_PAREN opt_alias_clause?
	) (
		KW_CROSS KW_JOIN table_ref
		| KW_NATURAL join_type? KW_JOIN table_ref
		| join_type? KW_JOIN table_ref join_qual
	)*;

alias_clause: KW_AS? colid (OPEN_PAREN name_list CLOSE_PAREN)?;

opt_alias_clause: alias_clause;

func_alias_clause:
	alias_clause
	| (KW_AS colid? | colid) OPEN_PAREN tablefuncelementlist CLOSE_PAREN;

join_type: (KW_FULL | KW_LEFT | KW_RIGHT | KW_INNER) KW_OUTER?;

join_qual: KW_USING OPEN_PAREN name_list CLOSE_PAREN | KW_ON a_expr;

relation_expr:
	 KW_ONLY? qualified_name STAR?
	| KW_ONLY (
		qualified_name
		| OPEN_PAREN qualified_name CLOSE_PAREN
	);

relation_expr_list: relation_expr (COMMA relation_expr)*;

relation_expr_opt_alias: relation_expr (KW_AS? colid)?;

tablesample_clause:
	KW_TABLESAMPLE func_name OPEN_PAREN expr_list CLOSE_PAREN opt_repeatable_clause?;

opt_repeatable_clause: KW_REPEATABLE OPEN_PAREN a_expr CLOSE_PAREN;

func_table:
	func_expr_windowless opt_ordinality?
	| KW_ROWS KW_FROM OPEN_PAREN rowsfrom_list CLOSE_PAREN opt_ordinality?;

rowsfrom_item: func_expr_windowless opt_col_def_list?;

rowsfrom_list: rowsfrom_item (COMMA rowsfrom_item)*;

opt_col_def_list:
	KW_AS OPEN_PAREN tablefuncelementlist CLOSE_PAREN;

opt_ordinality: KW_WITH KW_ORDINALITY;

where_clause: KW_WHERE a_expr;

where_or_current_clause:
	KW_WHERE (KW_CURRENT KW_OF cursor_name | a_expr);

opttablefuncelementlist: tablefuncelementlist;

tablefuncelementlist:
	tablefuncelement (COMMA tablefuncelement)*;

tablefuncelement: colid typename opt_collate_clause?;

xmltable:
	KW_XMLTABLE OPEN_PAREN (
		c_expr xmlexists_argument KW_COLUMNS xmltable_column_list
		| KW_XMLNAMESPACES OPEN_PAREN xml_namespace_list CLOSE_PAREN COMMA c_expr xmlexists_argument
			KW_COLUMNS xmltable_column_list
	) CLOSE_PAREN;

xmltable_column_list:
	xmltable_column_el (COMMA xmltable_column_el)*;

xmltable_column_el:
	colid (
		typename xmltable_column_option_list?
		| KW_FOR KW_ORDINALITY
	);

xmltable_column_option_list: xmltable_column_option_el+;

xmltable_column_option_el:
	KW_DEFAULT a_expr
	| identifier a_expr
	| KW_NOT KW_NULL
	| KW_NULL;

xml_namespace_list: xml_namespace_el (COMMA xml_namespace_el)*;

xml_namespace_el: b_expr KW_AS collabel | KW_DEFAULT b_expr;

typename:
	KW_SETOF? simpletypename (
		opt_array_bounds
		| KW_ARRAY (OPEN_BRACKET iconst CLOSE_BRACKET)?
	)
	| qualified_name PERCENT (KW_ROWTYPE | KW_TYPE);

opt_array_bounds: (OPEN_BRACKET iconst? CLOSE_BRACKET)*;

simpletypename:
	generictype
	| numeric
	| bit
	| character
	| constdatetime
	| constinterval (
		opt_interval?
		| OPEN_PAREN iconst CLOSE_PAREN
	);

consttypename:
	numeric
	| constbit
	| constcharacter
	| constdatetime;

generictype: type_function_name attrs? opt_type_modifiers?;

opt_type_modifiers: OPEN_PAREN expr_list CLOSE_PAREN;

numeric:
	KW_INT
	| KW_INTEGER
	| KW_SMALLINT
	| KW_BIGINT
	| KW_REAL
	| KW_FLOAT opt_float?
	| KW_DOUBLE KW_PRECISION
	| KW_DECIMAL opt_type_modifiers?
	| KW_DEC opt_type_modifiers?
	| KW_NUMERIC opt_type_modifiers?
	| KW_BOOLEAN;

opt_float: OPEN_PAREN iconst CLOSE_PAREN;

bit: bitwithlength | bitwithoutlength;

constbit: bitwithlength | bitwithoutlength;

bitwithlength:
	KW_BIT opt_varying? OPEN_PAREN expr_list CLOSE_PAREN;

bitwithoutlength: KW_BIT opt_varying?;

character: character_c (OPEN_PAREN iconst CLOSE_PAREN)?;

constcharacter: character_c (OPEN_PAREN iconst CLOSE_PAREN)?;

character_c: (KW_CHARACTER | KW_CHAR | KW_NCHAR) opt_varying?
	| KW_VARCHAR
	| KW_NATIONAL (KW_CHARACTER | KW_CHAR) opt_varying?;

opt_varying: KW_VARYING;

constdatetime: (KW_TIMESTAMP | KW_TIME) (OPEN_PAREN iconst CLOSE_PAREN)? opt_timezone?;

constinterval: KW_INTERVAL;
//TODO with_la was used

opt_timezone: KW_WITH KW_TIME KW_ZONE | KW_WITHOUT KW_TIME KW_ZONE;

opt_interval:
	KW_YEAR
	| KW_MONTH
	| KW_DAY
	| KW_HOUR
	| KW_MINUTE
	| interval_second
	| KW_YEAR KW_TO KW_MONTH
	| KW_DAY KW_TO (KW_HOUR | KW_MINUTE | interval_second)
	| KW_HOUR KW_TO (KW_MINUTE | interval_second)
	| KW_MINUTE KW_TO interval_second;

interval_second: KW_SECOND (OPEN_PAREN iconst CLOSE_PAREN)?;

opt_escape: KW_ESCAPE a_expr;
//precendence accroding to Table 4.2. Operator Precedence (highest to lowest)

//https://www.postgresql.org/docs/12/sql-syntax-lexical.html#SQL-PRECEDENCE

/*
 original version of a_expr, for info a_expr: c_expr //:: left PostgreSQL-style typecast | a_expr
 TYPECAST typename -- 1 | a_expr KW_COLLATE any_name -- 2 | a_expr AT TIME ZONE a_expr-- 3 //right
 unary plus, unary minus | (PLUS| MINUS) a_expr -- 4 //left exponentiation | a_expr CARET a_expr --
 5 //left multiplication, division, modulo | a_expr (STAR | SLASH | PERCENT) a_expr -- 6 //left
 addition, subtraction | a_expr (PLUS | MINUS) a_expr -- 7 //left all other native and user-defined
 operators | a_expr qual_op a_expr -- 8 | qual_op a_expr -- 9 //range containment, set membership,
 string matching BETWEEN IN LIKE ILIKE SIMILAR | a_expr NOT? (LIKE|ILIKE|SIMILAR TO|(BETWEEN
 SYMMETRIC?)) a_expr opt_escape? -- 10 //< > = <= >= <> comparison operators | a_expr (LT | GT |
 EQUAL | LESS_EQUALS | GREATER_EQUALS | NOT_EQUALS) a_expr -- 11 //IS ISNULL NOTNULL IS TRUE, IS
 FALSE, IS NULL, IS KW_DISTINCT FROM, etc | a_expr IS NOT? ( NULL_P |TRUE_P |FALSE_P |UNKNOWN |KW_DISTINCT
 KW_FROM a_expr |OF OPEN_PAREN type_list CLOSE_PAREN |DOCUMENT_P |unicode_normal_form? NORMALIZED ) --
 12 | a_expr (ISNULL|NOTNULL) -- 13 | row OVERLAPS row -- 14 //NOT right logical negation | NOT
 a_expr -- 15 //AND left logical conjunction | a_expr AND a_expr -- 16 //OR left logical disjunction
 | a_expr OR a_expr -- 17 | a_expr (LESS_LESS|GREATER_GREATER) a_expr -- 18 | a_expr qual_op -- 19 |
 a_expr NOT? IN_P in_expr -- 20 | a_expr subquery_Op sub_type (select_with_parens|OPEN_PAREN a_expr
 CLOSE_PAREN) -- 21 | UNIQUE select_with_parens -- 22 | KW_DEFAULT -- 23 ;
 */

a_expr: a_expr_qual;
/*23*/

/*moved to c_expr*/

/*22*/

/*moved to c_expr*/

/*19*/

a_expr_qual: a_expr_lessless qual_op?;
/*18*/

a_expr_lessless:
	a_expr_or ((LESS_LESS | GREATER_GREATER) a_expr_or)*;
/*17*/

a_expr_or: a_expr_and (KW_OR a_expr_and)*;
/*16*/

a_expr_and: a_expr_in (KW_AND a_expr_in)*;
/*20*/

a_expr_in: a_expr_unary_not (KW_NOT? KW_IN in_expr)?;
/*15*/

a_expr_unary_not: KW_NOT? a_expr_isnull;
/*14*/

/*moved to c_expr*/

/*13*/

a_expr_isnull: a_expr_is_not (KW_ISNULL | KW_NOTNULL)?;
/*12*/

a_expr_is_not:
	a_expr_compare (
		KW_IS KW_NOT? (
			KW_NULL
			| KW_TRUE
			| KW_FALSE
			| KW_UNKNOWN
			| KW_DISTINCT KW_FROM a_expr
			| KW_OF OPEN_PAREN type_list CLOSE_PAREN
			| KW_DOCUMENT
			| unicode_normal_form? KW_NORMALIZED
		)
	)?;
/*11*/

a_expr_compare:
	a_expr_like (
		(
			LT
			| GT
			| EQUAL
			| LESS_EQUALS
			| GREATER_EQUALS
			| NOT_EQUALS
		) a_expr_like
		| subquery_Op sub_type (
			select_with_parens
			| OPEN_PAREN a_expr CLOSE_PAREN
		) /*21*/
	)?;
/*10*/

a_expr_like:
	a_expr_qual_op (
		KW_NOT? (KW_LIKE | KW_ILIKE | KW_SIMILAR KW_TO | KW_BETWEEN KW_SYMMETRIC?) a_expr_qual_op opt_escape?
	)?;
/* 8*/

a_expr_qual_op:
	a_expr_unary_qualop (qual_op a_expr_unary_qualop)*;
/* 9*/

a_expr_unary_qualop: qual_op? a_expr_add;
/* 7*/

a_expr_add: a_expr_mul ((MINUS | PLUS) a_expr_mul)*;
/* 6*/

a_expr_mul:
	a_expr_caret ((STAR | SLASH | PERCENT) a_expr_caret)*;
/* 5*/

a_expr_caret: a_expr_unary_sign (CARET a_expr)?;
/* 4*/

a_expr_unary_sign: (MINUS | PLUS)? a_expr_at_time_zone /* */;
/* 3*/

a_expr_at_time_zone: a_expr_collate (KW_AT KW_TIME KW_ZONE a_expr)?;
/* 2*/

a_expr_collate: a_expr_typecast (KW_COLLATE any_name)?;
/* 1*/

a_expr_typecast: c_expr (TYPECAST typename)*;

b_expr:
	c_expr
	| b_expr TYPECAST typename
	//right	unary plus, unary minus
	| (PLUS | MINUS) b_expr
	//^	left	exponentiation
	| b_expr CARET b_expr
	//* / %	left	multiplication, division, modulo
	| b_expr (STAR | SLASH | PERCENT) b_expr
	//+ -	left	addition, subtraction
	| b_expr (PLUS | MINUS) b_expr
	//(any other operator)	left	all other native and user-defined operators
	| b_expr qual_op b_expr
	//< > = <= >= <>	 	comparison operators
	| b_expr (
		LT
		| GT
		| EQUAL
		| LESS_EQUALS
		| GREATER_EQUALS
		| NOT_EQUALS
	) b_expr
	| qual_op b_expr
	| b_expr qual_op
	//S ISNULL NOTNULL	 	IS TRUE, IS FALSE, IS NULL, IS KW_DISTINCT FROM, etc
	| b_expr KW_IS KW_NOT? (
		KW_DISTINCT KW_FROM b_expr
		| KW_OF OPEN_PAREN type_list CLOSE_PAREN
		| KW_DOCUMENT
	);

c_expr:
	KW_EXISTS select_with_parens											# c_expr_exists
	| KW_ARRAY (select_with_parens | array_expr)							# c_expr_expr
	| PARAM opt_indirection												# c_expr_expr
	| KW_GROUPING OPEN_PAREN expr_list CLOSE_PAREN							# c_expr_expr
	| /*22*/ KW_UNIQUE select_with_parens									# c_expr_expr
	| columnref															# c_expr_expr
	| aexprconst														# c_expr_expr
	| plsqlvariablename													# c_expr_expr
	| OPEN_PAREN a_expr_in_parens = a_expr CLOSE_PAREN opt_indirection	# c_expr_expr
	| case_expr															# c_expr_case
	| func_expr															# c_expr_expr
	| select_with_parens indirection?									# c_expr_expr
	| explicit_row														# c_expr_expr
	| implicit_row														# c_expr_expr
	| row KW_OVERLAPS row /* 14*/											# c_expr_expr;

plsqlvariablename: PLSQLVARIABLENAME;

func_application:
	func_name OPEN_PAREN (
		func_arg_list (COMMA KW_VARIADIC func_arg_expr)? opt_sort_clause?
		| KW_VARIADIC func_arg_expr opt_sort_clause?
		| (KW_ALL | KW_DISTINCT) func_arg_list opt_sort_clause?
		| STAR
		|
	) CLOSE_PAREN;

func_expr:
	func_application within_group_clause? filter_clause? over_clause?
	| func_expr_common_subexpr;

func_expr_windowless:
	func_application
	| func_expr_common_subexpr;

func_expr_common_subexpr:
	KW_COLLATION KW_FOR OPEN_PAREN a_expr CLOSE_PAREN
	| KW_CURRENT_DATE
	| KW_CURRENT_TIME (OPEN_PAREN iconst CLOSE_PAREN)?
	| KW_CURRENT_TIMESTAMP (OPEN_PAREN iconst CLOSE_PAREN)?
	| KW_LOCALTIME (OPEN_PAREN iconst CLOSE_PAREN)?
	| KW_LOCALTIMESTAMP (OPEN_PAREN iconst CLOSE_PAREN)?
	| KW_CURRENT_ROLE
	| KW_CURRENT_USER
	| KW_SESSION_USER
	| KW_USER
	| KW_CURRENT_CATALOG
	| KW_CURRENT_SCHEMA
	| KW_CAST OPEN_PAREN a_expr KW_AS typename CLOSE_PAREN
	| KW_EXTRACT OPEN_PAREN extract_list? CLOSE_PAREN
	| KW_NORMALIZE OPEN_PAREN a_expr (COMMA unicode_normal_form)? CLOSE_PAREN
	| KW_OVERLAY OPEN_PAREN overlay_list CLOSE_PAREN
	| KW_POSITION OPEN_PAREN position_list? CLOSE_PAREN
	| KW_SUBSTRING OPEN_PAREN substr_list? CLOSE_PAREN
	| KW_TREAT OPEN_PAREN a_expr KW_AS typename CLOSE_PAREN
	| KW_TRIM OPEN_PAREN (KW_BOTH | KW_LEADING | KW_TRAILING)? trim_list CLOSE_PAREN
	| KW_NULLIF OPEN_PAREN a_expr COMMA a_expr CLOSE_PAREN
	| KW_COALESCE OPEN_PAREN expr_list CLOSE_PAREN
	| KW_GREATEST OPEN_PAREN expr_list CLOSE_PAREN
	| KW_LEAST OPEN_PAREN expr_list CLOSE_PAREN
	| KW_XMLCONCAT OPEN_PAREN expr_list CLOSE_PAREN
	| KW_XMLELEMENT OPEN_PAREN KW_NAME collabel (
		COMMA (xml_attributes | expr_list)
	)? CLOSE_PAREN
	| KW_XMLEXISTS OPEN_PAREN c_expr xmlexists_argument CLOSE_PAREN
	| KW_XMLFOREST OPEN_PAREN xml_attribute_list CLOSE_PAREN
	| KW_XMLPARSE OPEN_PAREN document_or_content a_expr xml_whitespace_option? CLOSE_PAREN
	| KW_XMLPI OPEN_PAREN KW_NAME collabel (COMMA a_expr)? CLOSE_PAREN
	| KW_XMLROOT OPEN_PAREN KW_XML a_expr COMMA xml_root_version opt_xml_root_standalone? CLOSE_PAREN
	| KW_XMLSERIALIZE OPEN_PAREN document_or_content a_expr KW_AS simpletypename CLOSE_PAREN;

xml_root_version: KW_VERSION a_expr | KW_VERSION KW_NO KW_VALUE;

opt_xml_root_standalone:
	COMMA KW_STANDALONE KW_YES
	| COMMA KW_STANDALONE KW_NO
	| COMMA KW_STANDALONE KW_NO KW_VALUE;

xml_attributes:
	KW_XMLATTRIBUTES OPEN_PAREN xml_attribute_list CLOSE_PAREN;

xml_attribute_list: xml_attribute_el (COMMA xml_attribute_el)*;

xml_attribute_el: a_expr (KW_AS collabel)?;

document_or_content: KW_DOCUMENT | KW_CONTENT;

xml_whitespace_option:
	KW_PRESERVE KW_WHITESPACE
	| KW_STRIP KW_WHITESPACE;

xmlexists_argument:
	KW_PASSING c_expr
	| KW_PASSING c_expr xml_passing_mech
	| KW_PASSING xml_passing_mech c_expr
	| KW_PASSING xml_passing_mech c_expr xml_passing_mech;

xml_passing_mech: KW_BY (KW_REF | KW_VALUE);

within_group_clause:
	KW_WITHIN KW_GROUP OPEN_PAREN sort_clause CLOSE_PAREN;

filter_clause: KW_FILTER OPEN_PAREN KW_WHERE a_expr CLOSE_PAREN;

window_clause: KW_WINDOW window_definition_list;

window_definition_list:
	window_definition (COMMA window_definition)*;

window_definition: colid KW_AS window_specification;

over_clause: KW_OVER (window_specification | colid);

window_specification:
	OPEN_PAREN opt_existing_window_name? opt_partition_clause? opt_sort_clause? opt_frame_clause?
		CLOSE_PAREN;

opt_existing_window_name: colid;

opt_partition_clause: KW_PARTITION KW_BY expr_list;

opt_frame_clause:
	KW_RANGE frame_extent opt_window_exclusion_clause?
	| KW_ROWS frame_extent opt_window_exclusion_clause?
	| KW_GROUPS frame_extent opt_window_exclusion_clause?;

frame_extent: frame_bound | KW_BETWEEN frame_bound KW_AND frame_bound;

frame_bound:
	KW_UNBOUNDED (KW_PRECEDING | KW_FOLLOWING)
	| KW_CURRENT KW_ROW
	| a_expr (KW_PRECEDING | KW_FOLLOWING);

opt_window_exclusion_clause:
	KW_EXCLUDE (KW_CURRENT KW_ROW | KW_GROUP | KW_TIES | KW_NO KW_OTHERS);

row:
	KW_ROW OPEN_PAREN expr_list? CLOSE_PAREN
	| OPEN_PAREN expr_list COMMA a_expr CLOSE_PAREN;

explicit_row: KW_ROW OPEN_PAREN expr_list? CLOSE_PAREN;

implicit_row: OPEN_PAREN expr_list COMMA a_expr CLOSE_PAREN;

sub_type: KW_ANY | KW_SOME | KW_ALL;

all_op: Operator | mathop;

mathop:
	PLUS
	| MINUS
	| STAR
	| SLASH
	| PERCENT
	| CARET
	| LT
	| GT
	| EQUAL
	| LESS_EQUALS
	| GREATER_EQUALS
	| NOT_EQUALS;

qual_op:
	Operator
	| KW_OPERATOR OPEN_PAREN any_operator CLOSE_PAREN;

qual_all_op:
	all_op
	| KW_OPERATOR OPEN_PAREN any_operator CLOSE_PAREN;

subquery_Op:
	all_op
	| KW_OPERATOR OPEN_PAREN any_operator CLOSE_PAREN
	| KW_LIKE
	| KW_NOT KW_LIKE
	| KW_ILIKE
	| KW_NOT KW_ILIKE;

expr_list: a_expr (COMMA a_expr)*;

func_arg_list: func_arg_expr (COMMA func_arg_expr)*;

func_arg_expr:
	a_expr
	| param_name (COLON_EQUALS | EQUALS_GREATER) a_expr;

type_list: typename (COMMA typename)*;

array_expr:
	OPEN_BRACKET (expr_list | array_expr_list)? CLOSE_BRACKET;

array_expr_list: array_expr (COMMA array_expr)*;

extract_list: extract_arg KW_FROM a_expr;

extract_arg:
	identifier
	| KW_YEAR
	| KW_MONTH
	| KW_DAY
	| KW_HOUR
	| KW_MINUTE
	| KW_SECOND
	| sconst;

unicode_normal_form: KW_NFC | KW_NFD | KW_NFKC | KW_NFKD;

overlay_list: a_expr KW_PLACING a_expr KW_FROM a_expr (KW_FOR a_expr)?;

position_list: b_expr KW_IN b_expr;

substr_list:
	a_expr KW_FROM a_expr KW_FOR a_expr
	| a_expr KW_FOR a_expr KW_FROM a_expr
	| a_expr KW_FROM a_expr
	| a_expr KW_FOR a_expr
	| a_expr KW_SIMILAR a_expr KW_ESCAPE a_expr
	| expr_list;

trim_list: a_expr KW_FROM expr_list | KW_FROM expr_list | expr_list;

in_expr:
	select_with_parens					# in_expr_select
	| OPEN_PAREN expr_list CLOSE_PAREN	# in_expr_list;

case_expr: KW_CASE case_arg? when_clause_list case_default? KW_END;

when_clause_list: when_clause+;

when_clause: KW_WHEN a_expr KW_THEN a_expr;

case_default: KW_ELSE a_expr;

case_arg: a_expr;

columnref: colid indirection?;

indirection_el:
	DOT (attr_name | STAR)
	| OPEN_BRACKET (
		a_expr
		| opt_slice_bound? COLON opt_slice_bound?
	) CLOSE_BRACKET;

opt_slice_bound: a_expr;

indirection: indirection_el+;

opt_indirection: indirection_el*;

opt_target_list: target_list;

target_list: target_el (COMMA target_el)*;

target_el:
	a_expr (KW_AS collabel | identifier |)	# target_label
	| STAR								# target_star;

qualified_name_list: qualified_name (COMMA qualified_name)*;

table_qualified_name: colid indirection?;

qualified_name: colid indirection?;

name_list: name (COMMA name)*;

name: colid;

attr_name: collabel;

file_name: sconst;

func_name: type_function_name | colid indirection;

aexprconst:
	iconst
	| fconst
	| sconst
	| bconst
	| xconst
	| func_name (
		sconst
		| OPEN_PAREN func_arg_list opt_sort_clause? CLOSE_PAREN sconst
	)
	| consttypename sconst
	| constinterval (
		sconst opt_interval?
		| OPEN_PAREN iconst CLOSE_PAREN sconst
	)
	| KW_TRUE
	| KW_FALSE
	| KW_NULL;

xconst: HexadecimalStringConstant;

bconst: BinaryStringConstant;

fconst: Numeric;

iconst: Integral;

sconst: anysconst opt_uescape?;

anysconst:
	StringConstant
	| UnicodeEscapeStringConstant
	| BeginDollarStringConstant DollarText* EndDollarStringConstant
	| EscapeStringConstant;

opt_uescape: KW_UESCAPE anysconst;

signediconst: iconst | PLUS iconst | MINUS iconst;

groupname: rolespec;

roleid: rolespec;

rolespec: nonreservedword | KW_CURRENT_USER | KW_SESSION_USER | KW_PUBLIC;

role_list: rolespec (COMMA rolespec)*;

colid:
	identifier
	| unreserved_keyword
	| col_name_keyword
	| plsql_unreserved_keyword;

index_method_choices:
	identifier;

exclude_element:
	opt_definition | (OPEN_PAREN a_expr CLOSE_PAREN) identifier opt_asc_desc? opt_nulls_order?;

index_paramenters:
	(KW_WITH reloptions)? optconstablespace?;

wherePredicate:
	KW_WHERE identifier;

type_function_name:
	identifier
	| unreserved_keyword
	| plsql_unreserved_keyword
	| type_func_name_keyword;

nonreservedword:
	identifier
	| unreserved_keyword
	| col_name_keyword
	| type_func_name_keyword;

collabel:
	identifier
	| plsql_unreserved_keyword
	| unreserved_keyword
	| col_name_keyword
	| type_func_name_keyword
	| reserved_keyword;

identifier:
	Identifier opt_uescape?
	| QuotedIdentifier
	| UnicodeQuotedIdentifier
	| plsqlvariablename
	| plsqlidentifier
	| plsql_unreserved_keyword;

plsqlidentifier: PLSQLIDENTIFIER;

unreserved_keyword:
	KW_ABORT
	| KW_ABSOLUTE
	| KW_ACCESS
	| KW_ACTION
	| KW_ADD
	| KW_ADMIN
	| KW_AFTER
	| KW_AGGREGATE
	| KW_ALSO
	| KW_ALTER
	| KW_ALWAYS
	| KW_ASSERTION
	| KW_ASSIGNMENT
	| KW_AT
	| KW_ATTACH
	| KW_ATTRIBUTE
	| KW_BACKWARD
	| KW_BEFORE
	| KW_BEGIN
	| KW_BY
	| KW_CACHE
	| KW_CALL
	| KW_CALLED
	| KW_CASCADE
	| KW_CASCADED
	| KW_CATALOG
	| KW_CHAIN
	| KW_CHARACTERISTICS
	| KW_CHECKPOINT
	| KW_CLASS
	| KW_CLOSE
	| KW_CLUSTER
	| KW_COLUMNS
	| KW_COMMENT
	| KW_COMMENTS
	| KW_COMMIT
	| KW_COMMITTED
	| KW_CONFIGURATION
	| KW_CONFLICT
	| KW_CONNECTION
	| KW_CONSTRAINTS
	| KW_CONTENT
	| KW_CONTINUE
	| KW_CONVERSION
	| KW_COPY
	| KW_COST
	| KW_CSV
	| KW_CUBE
	| KW_CURRENT
	| KW_CURSOR
	| KW_CYCLE
	| KW_DATA
	| KW_DATABASE
	| KW_DAY
	| KW_DEALLOCATE
	| KW_DECLARE
	| KW_DEFAULTS
	| KW_DEFERRED
	| KW_DEFINER
	| KW_DELETE
	| KW_DELIMITER
	| KW_DELIMITERS
	| KW_DEPENDS
	| KW_DETACH
	| KW_DICTIONARY
	| KW_DISABLE
	| KW_DISCARD
	| KW_DOCUMENT
	| KW_DOMAIN
	| KW_DOUBLE
	| KW_DROP
	| KW_EACH
	| KW_ENABLE
	| KW_ENCODING
	| KW_ENCRYPTED
	| KW_ENUM
	| KW_ESCAPE
	| KW_EVENT
	| KW_EXCLUDE
	| KW_EXCLUDING
	| KW_EXCLUSIVE
	| KW_EXECUTE
	| KW_EXPLAIN
	| KW_EXPRESSION
	| KW_EXTENSION
	| KW_EXTERNAL
	| KW_FAMILY
	| KW_FILTER
	| KW_FIRST
	| KW_FOLLOWING
	| KW_FORCE
	| KW_FORWARD
	| KW_FUNCTION
	| KW_FUNCTIONS
	| KW_GENERATED
	| KW_GLOBAL
	| KW_GRANTED
	| KW_GROUPS
	| KW_HANDLER
	| KW_HEADER
	| KW_HOLD
	| KW_HOUR
	| KW_IDENTITY
	| KW_IF
	| KW_IMMEDIATE
	| KW_IMMUTABLE
	| KW_IMPLICIT
	| KW_IMPORT
	| KW_INCLUDE
	| KW_INCLUDING
	| KW_INCREMENT
	| KW_INDEX
	| KW_INDEXES
	| KW_INHERIT
	| KW_INHERITS
	| KW_INLINE
	| KW_INPUT
	| KW_INSENSITIVE
	| KW_INSERT
	| KW_INSTEAD
	| KW_INVOKER
	| KW_ISOLATION
	| KW_KEY
	| KW_LABEL
	| KW_LANGUAGE
	| KW_LARGE
	| KW_LAST
	| KW_LEAKPROOF
	| KW_LEVEL
	| KW_LISTEN
	| KW_LOAD
	| KW_LOCAL
	| KW_LOCATION
	| KW_LOCK
	| KW_LOCKED
	| KW_LOGGED
	| KW_MAPPING
	| KW_MATCH
	| KW_MATERIALIZED
	| KW_MAXVALUE
	| KW_METHOD
	| KW_MINUTE
	| KW_MINVALUE
	| KW_MODE
	| KW_MONTH
	| KW_MOVE
	| KW_NAME
	| KW_NAMES
	| KW_NEW
	| KW_NEXT
	| KW_NFC
	| KW_NFD
	| KW_NFKC
	| KW_NFKD
	| KW_NO
	| KW_NORMALIZED
	| KW_NOTHING
	| KW_NOTIFY
	| KW_NOWAIT
	| KW_NULLS
	| KW_OBJECT
	| KW_OF
	| KW_OFF
	| KW_OIDS
	| KW_OLD
	| KW_OPERATOR
	| KW_OPTION
	| KW_OPTIONS
	| KW_ORDINALITY
	| KW_OTHERS
	| KW_OVER
	| KW_OVERRIDING
	| KW_OWNED
	| KW_OWNER
	| KW_PARALLEL
	| KW_PARSER
	| KW_PARTIAL
	| KW_PARTITION
	| KW_PASSING
	| KW_PASSWORD
	| KW_PLANS
	| KW_POLICY
	| KW_PRECEDING
	| KW_PREPARE
	| KW_PREPARED
	| KW_PRESERVE
	| KW_PRIOR
	| KW_PRIVILEGES
	| KW_PROCEDURAL
	| KW_PROCEDURE
	| KW_PROCEDURES
	| KW_PROGRAM
	| KW_PUBLICATION
	| KW_QUOTE
	| KW_RANGE
	| KW_READ
	| KW_REASSIGN
	| KW_RECHECK
	| KW_RECURSIVE
	| KW_REF
	| KW_REFERENCING
	| KW_REFRESH
	| KW_REINDEX
	| KW_RELATIVE
	| KW_RELEASE
	| KW_RENAME
	| KW_REPEATABLE
	| KW_REPLACE
	| KW_REPLICA
	| KW_RESET
	| KW_RESTART
	| KW_RESTRICT
	| KW_RETURNS
	| KW_REVOKE
	| KW_ROLE
	| KW_ROLLBACK
	| KW_ROLLUP
	| KW_ROUTINE
	| KW_ROUTINES
	| KW_ROWS
	| KW_RULE
	| KW_SAVEPOINT
	| KW_SCHEMA
	| KW_SCHEMAS
	| KW_SCROLL
	| KW_SEARCH
	| KW_SECOND
	| KW_SECURITY
	| KW_SEQUENCE
	| KW_SEQUENCES
	| KW_SERIALIZABLE
	| KW_SERVER
	| KW_SESSION
	| KW_SET
	| KW_SETS
	| KW_SHARE
	| KW_SHOW
	| KW_SIMPLE
	| KW_SKIP
	| KW_SNAPSHOT
	| KW_SQL
	| KW_STABLE
	| KW_STANDALONE
	| KW_START
	| KW_STATEMENT
	| KW_STATISTICS
	| KW_STDIN
	| KW_STDOUT
	| KW_STORAGE
	| KW_STORED
	| KW_STRICT
	| KW_STRIP
	| KW_SUBSCRIPTION
	| KW_SUPPORT
	| KW_SYSID
	| KW_SYSTEM
	| KW_TABLES
	| KW_TABLESPACE
	| KW_TEMP
	| KW_TEMPLATE
	| KW_TEMPORARY
	| KW_TEXT
	| KW_TIES
	| KW_TRANSACTION
	| KW_TRANSFORM
	| KW_TRIGGER
	| KW_TRUNCATE
	| KW_TRUSTED
	| KW_TYPE
	| KW_TYPES
	| KW_UESCAPE
	| KW_UNBOUNDED
	| KW_UNCOMMITTED
	| KW_UNENCRYPTED
	| KW_UNKNOWN
	| KW_UNLISTEN
	| KW_UNLOGGED
	| KW_UNTIL
	| KW_UPDATE
	| KW_VACUUM
	| KW_VALID
	| KW_VALIDATE
	| KW_VALIDATOR
	| KW_VALUE
	| KW_VARYING
	| KW_VERSION
	| KW_VIEW
	| KW_VIEWS
	| KW_VOLATILE
	| KW_WHITESPACE
	| KW_WITHIN
	| KW_WITHOUT
	| KW_WORK
	| KW_WRAPPER
	| KW_WRITE
	| KW_XML
	| KW_YEAR
	| KW_YES
	| KW_ZONE;

col_name_keyword:
	KW_BETWEEN
	| KW_BIGINT
	| bit
	| KW_BOOLEAN
	| KW_CHAR
	| character
	| KW_COALESCE
	| KW_DEC
	| KW_DECIMAL
	| KW_EXISTS
	| KW_EXTRACT
	| KW_FLOAT
	| KW_GREATEST
	| KW_GROUPING
	| KW_INOUT
	| KW_INT
	| KW_INTEGER
	| KW_INTERVAL
	| KW_LEAST
	| KW_NATIONAL
	| KW_NCHAR
	| KW_NONE
	| KW_NORMALIZE
	| KW_NULLIF
	| numeric
	| KW_OUT
	| KW_OVERLAY
	| KW_POSITION
	| KW_PRECISION
	| KW_REAL
	| KW_ROW
	| KW_SETOF
	| KW_SMALLINT
	| KW_SUBSTRING
	| KW_TIME
	| KW_TIMESTAMP
	| KW_TREAT
	| KW_TRIM
	| KW_VALUES
	| KW_VARCHAR
	| KW_XMLATTRIBUTES
	| KW_XMLCONCAT
	| KW_XMLELEMENT
	| KW_XMLEXISTS
	| KW_XMLFOREST
	| KW_XMLNAMESPACES
	| KW_XMLPARSE
	| KW_XMLPI
	| KW_XMLROOT
	| KW_XMLSERIALIZE
	| KW_XMLTABLE;

type_func_name_keyword:
	KW_AUTHORIZATION
	| KW_BINARY
	| KW_COLLATION
	| KW_CONCURRENTLY
	| KW_CROSS
	| KW_CURRENT_SCHEMA
	| KW_FREEZE
	| KW_FULL
	| KW_ILIKE
	| KW_INNER
	| KW_IS
	| KW_ISNULL
	| KW_JOIN
	| KW_LEFT
	| KW_LIKE
	| KW_NATURAL
	| KW_NOTNULL
	| KW_OUTER
	| KW_OVERLAPS
	| KW_RIGHT
	| KW_SIMILAR
	| KW_TABLESAMPLE
	| KW_VERBOSE;

reserved_keyword:
	KW_ALL
	| KW_ANALYSE
	| KW_ANALYZE
	| KW_AND
	| KW_ANY
	| KW_ARRAY
	| KW_AS
	| KW_ASC
	| KW_ASYMMETRIC
	| KW_BOTH
	| KW_CASE
	| KW_CAST
	| KW_CHECK
	| KW_COLLATE
	| KW_COLUMN
	| KW_CONSTRAINT
	| KW_CREATE
	| KW_CURRENT_CATALOG
	| KW_CURRENT_DATE
	| KW_CURRENT_ROLE
	| KW_CURRENT_TIME
	| KW_CURRENT_TIMESTAMP
	| KW_CURRENT_USER
	//                 | KW_DEFAULT
	| KW_DEFERRABLE
	| KW_DESC
	| KW_DISTINCT
	| KW_DO
	| KW_ELSE
	| KW_END
	| KW_EXCEPT
	| KW_FALSE
	| KW_FETCH
	| KW_FOR
	| KW_FOREIGN
	| KW_FROM
	| KW_GRANT
	| KW_GROUP
	| KW_HAVING
	| KW_IN
	| KW_INITIALLY
	| KW_INTERSECT
	/*
	 from pl_gram.y, line ~2982 Fortunately, INTO is a fully reserved word in the main grammar, so
	 at least we need not worry about it appearing as an identifier.
	 */

	//                 | INTO
	| KW_LATERAL
	| KW_LEADING
	| KW_LIMIT
	| KW_LOCALTIME
	| KW_LOCALTIMESTAMP
	| KW_NOT
	| KW_NULL
	| KW_OFFSET
	| KW_ON
	| KW_ONLY
	| KW_OR
	| KW_ORDER
	| KW_PLACING
	| KW_PRIMARY
	| KW_REFERENCES
	| KW_RETURNING
	| KW_SELECT
	| KW_SESSION_USER
	| KW_SOME
	| KW_SYMMETRIC
	| KW_TABLE
	| KW_THEN
	| KW_TO
	| KW_TRAILING
	| KW_TRUE
	| KW_UNION
	| KW_UNIQUE
	| KW_USER
	| KW_USING
	| KW_VARIADIC
	| KW_WHEN
	| KW_WHERE
	| KW_WINDOW
	| KW_WITH;

/************************************************************************************************************************************************************/
/*PL/SQL GRAMMAR */

/*PLSQL grammar */

/************************************************************************************************************************************************************/
	pl_function: comp_options pl_block opt_semi;

comp_options: comp_option*;

comp_option:
	sharp KW_OPTION KW_DUMP
	| sharp KW_PRINT_STRICT_PARAMS option_value
	| sharp KW_VARIABLE_CONFLICT KW_ERROR
	| sharp KW_VARIABLE_CONFLICT KW_USE_VARIABLE
	| sharp KW_VARIABLE_CONFLICT KW_USE_COLUMN;

sharp: Operator;

option_value:
	sconst
	| reserved_keyword
	| plsql_unreserved_keyword
	| unreserved_keyword;

opt_semi: | SEMI;
// exception_sect means opt_exception_sect in original grammar, don't be confused!

pl_block:
	decl_sect KW_BEGIN proc_sect exception_sect KW_END opt_label;

decl_sect: opt_block_label (decl_start decl_stmts?)?;

decl_start: KW_DECLARE;

decl_stmts: decl_stmt+;

label_decl: LESS_LESS any_identifier GREATER_GREATER;

decl_stmt: decl_statement | KW_DECLARE | label_decl;

decl_statement:
	decl_varname (
		KW_ALIAS KW_FOR decl_aliasitem
		| decl_const decl_datatype decl_collate decl_notnull decl_defval
		| opt_scrollable KW_CURSOR decl_cursor_args decl_is_for decl_cursor_query
	) SEMI;

opt_scrollable: | KW_NO KW_SCROLL | KW_SCROLL;

decl_cursor_query: selectstmt;

decl_cursor_args: | OPEN_PAREN decl_cursor_arglist CLOSE_PAREN;

decl_cursor_arglist: decl_cursor_arg (COMMA decl_cursor_arg)*;

decl_cursor_arg: decl_varname decl_datatype;

decl_is_for: KW_IS | KW_FOR;

decl_aliasitem: PARAM | colid;

decl_varname: any_identifier;

decl_const: | KW_CONSTANT;

decl_datatype: typename; //TODO: $$ = read_datatype(yychar);

decl_collate: | KW_COLLATE any_name;

decl_notnull: | KW_NOT KW_NULL;

decl_defval: | decl_defkey sql_expression;

decl_defkey: assign_operator | KW_DEFAULT;

assign_operator: EQUAL | COLON_EQUALS;

proc_sect: proc_stmt*;

proc_stmt:
	pl_block SEMI
	| stmt_return
	| stmt_raise
	| stmt_assign
	| stmt_if
	| stmt_case
	| stmt_loop
	| stmt_while
	| stmt_for
	| stmt_foreach_a
	| stmt_exit
	| stmt_assert
	| stmt_execsql
	| stmt_dynexecute
	| stmt_perform
	| stmt_call
	| stmt_getdiag
	| stmt_open
	| stmt_fetch
	| stmt_move
	| stmt_close
	| stmt_null
	| stmt_commit
	| stmt_rollback
	| stmt_set;

stmt_perform: KW_PERFORM expr_until_semi SEMI;

stmt_call:
	KW_CALL any_identifier OPEN_PAREN opt_expr_list CLOSE_PAREN SEMI
	| KW_DO any_identifier OPEN_PAREN opt_expr_list CLOSE_PAREN SEMI;

opt_expr_list: | expr_list;

stmt_assign: assign_var assign_operator sql_expression SEMI;

stmt_getdiag:
	KW_GET getdiag_area_opt KW_DIAGNOSTICS getdiag_list SEMI;

getdiag_area_opt: | KW_CURRENT | KW_STACKED;

getdiag_list: getdiag_list_item (COMMA getdiag_list_item)*;

getdiag_list_item: getdiag_target assign_operator getdiag_item;

getdiag_item: colid;

getdiag_target: assign_var;

assign_var: (any_name | PARAM) (
		OPEN_BRACKET expr_until_rightbracket CLOSE_BRACKET
	)*;

stmt_if:
	KW_IF expr_until_then KW_THEN proc_sect stmt_elsifs stmt_else KW_END KW_IF SEMI;

stmt_elsifs: (KW_ELSIF a_expr KW_THEN proc_sect)*;

stmt_else: | KW_ELSE proc_sect;

stmt_case:
	KW_CASE opt_expr_until_when case_when_list opt_case_else KW_END KW_CASE SEMI;

opt_expr_until_when: | sql_expression;

case_when_list: case_when+;

case_when: KW_WHEN expr_list KW_THEN proc_sect;

opt_case_else: | KW_ELSE proc_sect;

stmt_loop: opt_loop_label loop_body;

stmt_while: opt_loop_label KW_WHILE expr_until_loop loop_body;

stmt_for: opt_loop_label KW_FOR for_control loop_body;
//TODO: rewrite using read_sql_expression logic?

for_control:
	for_variable KW_IN (
		cursor_name opt_cursor_parameters
		| selectstmt
		| explainstmt
		| KW_EXECUTE a_expr opt_for_using_expression
		| opt_reverse a_expr DOT_DOT a_expr opt_by_expression
	);

opt_for_using_expression: | KW_USING expr_list;

opt_cursor_parameters:
	| OPEN_PAREN a_expr (COMMA a_expr)* CLOSE_PAREN;

opt_reverse: | KW_REVERSE;

opt_by_expression: | KW_BY a_expr;

for_variable: any_name_list;

stmt_foreach_a:
	opt_loop_label KW_FOREACH for_variable foreach_slice KW_IN KW_ARRAY a_expr loop_body;

foreach_slice: | KW_SLICE iconst;

stmt_exit: exit_type opt_label opt_exitcond? SEMI;

exit_type: KW_EXIT | KW_CONTINUE;
//todo implement RETURN statement according to initial grammar line 1754

stmt_return:
	KW_RETURN (
		KW_NEXT sql_expression
		| KW_QUERY (
			KW_EXECUTE a_expr opt_for_using_expression
			| selectstmt
		)
		| opt_return_result
	) SEMI;

opt_return_result: | sql_expression;
//https://www.postgresql.org/docs/current/plpgsql-errors-and-messages.html

//RAISE [ level ] 'format' [, expression [, ... ]] [ USING option = expression [, ... ] ];

//RAISE [ level ] condition_name [ USING option = expression [, ... ] ];

//RAISE [ level ] SQLSTATE 'sqlstate' [ USING option = expression [, ... ] ];

//RAISE [ level ] USING option = expression [, ... ];

//RAISE ;

stmt_raise:
	KW_RAISE opt_stmt_raise_level? sconst opt_raise_list opt_raise_using SEMI
	| KW_RAISE opt_stmt_raise_level? identifier opt_raise_using SEMI
	| KW_RAISE opt_stmt_raise_level? KW_SQLSTATE sconst opt_raise_using SEMI
	| KW_RAISE opt_stmt_raise_level? opt_raise_using SEMI
	| KW_RAISE;

opt_stmt_raise_level:
	KW_DEBUG
	| KW_LOG
	| KW_INFO
	| KW_NOTICE
	| KW_WARNING
	| KW_EXCEPTION;

opt_raise_list: | (COMMA a_expr)+;

opt_raise_using: | KW_USING opt_raise_using_elem_list;

opt_raise_using_elem: identifier EQUAL a_expr;

opt_raise_using_elem_list:
	opt_raise_using_elem (COMMA opt_raise_using_elem)*;
//todo imnplement

stmt_assert: KW_ASSERT sql_expression opt_stmt_assert_message SEMI;

opt_stmt_assert_message: | COMMA sql_expression;

loop_body: KW_LOOP proc_sect KW_END KW_LOOP opt_label SEMI;
//TODO: looks like all other statements like INSERT/SELECT/UPDATE/DELETE are handled here;

//pls take a look at original grammar

stmt_execsql:
	make_execsql_stmt SEMI
	/*K_IMPORT
	 | K_INSERT | t_word | t_cword
	 */;
//https://www.postgresql.org/docs/current/plpgsql-statements.html#PLPGSQL-STATEMENTS-SQL-NORESULT

//EXECUTE command-string [ INTO [STRICT] target ] [ USING expression [, ... ] ];

stmt_dynexecute:
	KW_EXECUTE a_expr (
		/*this is silly, but i have to time to find nice way to code */ opt_execute_into
			opt_execute_using
		| opt_execute_using opt_execute_into
		|
	) SEMI;

opt_execute_using: | KW_USING opt_execute_using_list;

opt_execute_using_list: a_expr (COMMA a_expr)*;

opt_execute_into: | KW_INTO KW_STRICT? into_target;
//https://www.postgresql.org/docs/current/plpgsql-cursors.html#PLPGSQL-CURSOR-OPENING

//OPEN unbound_cursorvar [ [ NO ] SCROLL ] KW_FOR query;

//OPEN unbound_cursorvar [ [ NO ] SCROLL ] KW_FOR EXECUTE query_string

//                                     [ USING expression [, ... ] ];

//OPEN bound_cursorvar [ ( [ argument_name := ] argument_value [, ...] ) ];

stmt_open:
	KW_OPEN (
		cursor_variable opt_scroll_option KW_FOR (
			selectstmt
			| KW_EXECUTE sql_expression opt_open_using
		)
		| colid (OPEN_PAREN opt_open_bound_list CLOSE_PAREN)?
	) SEMI;

opt_open_bound_list_item: colid COLON_EQUALS a_expr | a_expr;

opt_open_bound_list:
	opt_open_bound_list_item (COMMA opt_open_bound_list_item)*;

opt_open_using: | KW_USING expr_list;

opt_scroll_option: | opt_scroll_option_no KW_SCROLL;

opt_scroll_option_no: | KW_NO;
//https://www.postgresql.org/docs/current/plpgsql-cursors.html#PLPGSQL-CURSOR-OPENING

//FETCH [ direction { KW_FROM | IN } ] cursor INTO target;

stmt_fetch:
	KW_FETCH direction = opt_fetch_direction? opt_cursor_from cursor_variable KW_INTO into_target SEMI;

into_target: expr_list;

opt_cursor_from: | KW_FROM | KW_IN;

opt_fetch_direction:
	KW_NEXT
	| KW_PRIOR
	| KW_FIRST
	| KW_LAST
	| KW_ABSOLUTE a_expr
	| KW_RELATIVE a_expr
	| a_expr
	| KW_ALL
	| (KW_FORWARD | KW_BACKWARD) (a_expr | KW_ALL)?;
//https://www.postgresql.org/docs/current/plpgsql-cursors.html#PLPGSQL-CURSOR-OPENING

//MOVE [ direction { KW_FROM | IN } ] cursor;

stmt_move: KW_MOVE opt_fetch_direction? cursor_variable SEMI;

stmt_close: KW_CLOSE cursor_variable SEMI;

stmt_null: KW_NULL SEMI;

stmt_commit: KW_COMMIT plsql_opt_transaction_chain? SEMI;

stmt_rollback: KW_ROLLBACK plsql_opt_transaction_chain? SEMI;

plsql_opt_transaction_chain: KW_AND KW_NO? KW_CHAIN;

stmt_set:
	KW_SET any_name KW_TO KW_DEFAULT SEMI
	| KW_RESET (any_name | KW_ALL) SEMI;

cursor_variable: colid | PARAM;

exception_sect: | KW_EXCEPTION proc_exceptions;

proc_exceptions: proc_exception+;

proc_exception: KW_WHEN proc_conditions KW_THEN proc_sect;

proc_conditions: proc_condition (KW_OR proc_condition)*;

proc_condition: any_identifier | KW_SQLSTATE sconst;
//expr_until_semi:

//;

//expr_until_rightbracket:

//;

//expr_until_loop:

//;

opt_block_label: | label_decl;

opt_loop_label: | label_decl;

opt_label: | any_identifier;

opt_exitcond: KW_WHEN expr_until_semi;

any_identifier: colid | plsql_unreserved_keyword;

plsql_unreserved_keyword:
	KW_ABSOLUTE
	| KW_ALIAS
	| KW_AND
	| KW_ARRAY
	| KW_ASSERT
	| KW_BACKWARD
	| KW_CALL
	| KW_CHAIN
	| KW_CLOSE
	| KW_COLLATE
	| KW_COLUMN
	//| COLUMN_NAME
	| KW_COMMIT
	| KW_CONSTANT
	| KW_CONSTRAINT
	//| CONSTRAINT_NAME
	| KW_CONTINUE
	| KW_CURRENT
	| KW_CURSOR
	//| DATATYPE
	| KW_DEBUG
	| KW_DEFAULT
	//| DETAIL
	| KW_DIAGNOSTICS
	| KW_DO
	| KW_DUMP
	| KW_ELSIF
	//| ERRCODE
	| KW_ERROR
	| KW_EXCEPTION
	| KW_EXIT
	| KW_FETCH
	| KW_FIRST
	| KW_FORWARD
	| KW_GET
	//| HINT

	//| IMPORT
	| KW_INFO
	| KW_INSERT
	| KW_IS
	| KW_LAST
	| KW_LOG
	//| MESSAGE

	//| MESSAGE_TEXT
	| KW_MOVE
	| KW_NEXT
	| KW_NO
	| KW_NOTICE
	| KW_OPEN
	| KW_OPTION
	| KW_PERFORM
	//| PG_CONTEXT

	//| PG_DATATYPE_NAME

	//| PG_EXCEPTION_CONTEXT

	//| PG_EXCEPTION_DETAIL

	//| PG_EXCEPTION_HINT
	| KW_PRINT_STRICT_PARAMS
	| KW_PRIOR
	| KW_QUERY
	| KW_RAISE
	| KW_RELATIVE
	| KW_RESET
	| KW_RETURN
	//| RETURNED_SQLSTATE
	| KW_REVERSE
	| KW_ROLLBACK
	//| ROW_COUNT
	| KW_ROWTYPE
	| KW_SCHEMA
	//| SCHEMA_NAME
	| KW_SCROLL
	| KW_SET
	| KW_SLICE
	| KW_SQLSTATE
	| KW_STACKED
	| KW_TABLE
	//| TABLE_NAME
	| KW_TYPE
	| KW_USE_COLUMN
	| KW_USE_VARIABLE
	| KW_VARIABLE_CONFLICT
	| KW_WARNING
	| KW_OUTER;

sql_expression:
	opt_target_list? into_clause? from_clause? where_clause? group_clause? having_clause?
		window_clause?;

expr_until_then: sql_expression;

expr_until_semi: sql_expression;

expr_until_rightbracket: a_expr;

expr_until_loop: a_expr;

make_execsql_stmt: stmt opt_returning_clause_into?;

opt_returning_clause_into: KW_INTO opt_strict into_target;
