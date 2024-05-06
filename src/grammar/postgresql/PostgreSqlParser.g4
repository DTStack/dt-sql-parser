/*
 * [The "MIT license"] Copyright (C) 2014 Sam Harwell, Tunnel Vision Laboratories, LLC
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * 1. The above copyright notice and this permission notice shall be included in all copies or
 * substantial portions of the Software. 2. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
 * ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE. 3. Except as contained in this notice, the name of Tunnel Vision
 * Laboratories, LLC. shall not be used in advertising or otherwise to promote the sale, use or
 * other dealings in this Software without prior written authorization from Tunnel Vision
 * Laboratories, LLC.
 */

/**
 * This file is an adaptation of antlr's sql/postgresql/PostgreSQLParser.g4 grammar. Reference:
 * https://github.com/antlr/grammars-v4/blob/master/sql/postgresql/PostgreSQLParser.g4
 */

/**
 * Reference Doc: https://www.postgresql.org/docs/16.1/sql-commands.html
 */

// $antlr-format alignTrailingComments true, columnLimit 150, minEmptyLines 1, maxEmptyLinesToKeep 1, reflowComments false, useTab false
// $antlr-format allowShortRulesOnASingleLine false, allowShortBlocksOnASingleLine true, alignSemicolons hanging, alignColons hanging
// $antlr-format spaceBeforeAssignmentOperators false, keepEmptyLinesAtTheStartOfBlocks true

parser grammar PostgreSqlParser;

options {
    tokenVocab= PostgreSqlLexer;
    caseInsensitive= true;
    superClass=SQLParserBase;
}

@header {
import { SQLParserBase } from '../SQLParserBase';
}

program
    : singleStmt* EOF
    ;

singleStmt
    : stmt SEMI?
    ;

stmt
    : altereventtrigstmt
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
    | alterprocedurestmt
    | alterseqstmt
    | altersystemstmt
    | altertablestmt
    | altertblspcstmt
    | altercompositetypestmt
    | alterpublicationstmt
    | alterrolesetstmt
    | alterroutinestmt
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
    | dropstmt
    | executestmt
    | explainstmt
    | fetchstmt
    | grantstmt
    | grantrolestmt
    | mergestmt
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
    | plsqlconsolecommand
    ;

plsqlconsolecommand
    : MetaCommand EndMetaCommand?
    ;

callstmt
    : KW_CALL func_application
    ;

createrolestmt
    : KW_CREATE KW_ROLE rolespec KW_WITH? optrolelist
    ;

optrolelist
    : createoptroleelem*
    ;

alteroptrolelist
    : alteroptroleelem*
    ;

alteroptroleelem
    : KW_PASSWORD (sconst | KW_NULL)
    | (KW_ENCRYPTED | KW_UNENCRYPTED) KW_PASSWORD sconst
    | (KW_INHERIT | KW_NOINHERIT)
    | (KW_CREATEUSER | KW_NOCREATEUSER)
    | (KW_CREATEROLE | KW_NOCREATEROLE)
    | (KW_CREATEDB | KW_NOCREATEDB)
    | (KW_SUPERUSER | KW_NOSUPERUSER)
    | (KW_LOGIN | KW_NOLOGIN)
    | (KW_REPLICATION | KW_NOREPLICATION)
    | (KW_BYPASSRLS | KW_NOBYPASSRLS)
    | KW_CONNECTION KW_LIMIT signediconst
    | KW_VALID KW_UNTIL sconst
    | KW_IN (KW_ROLE | KW_GROUP) name_list
    | (KW_ROLE | KW_USER) role_list
    | KW_ADMIN name_list
    | identifier
    ;

createoptroleelem
    : alteroptroleelem
    | KW_SYSID Integral
    | (KW_ADMIN | KW_ROLE) role_list
    | KW_IN (KW_ROLE | KW_GROUP) role_list
    ;

createuserstmt
    : KW_CREATE KW_USER rolespec KW_WITH? optrolelist
    ;

alterrolestmt
    : KW_ALTER (KW_ROLE | KW_USER) rolespec KW_WITH? alteroptrolelist
    ;

alterrolesetstmt
    : KW_ALTER (KW_ROLE | KW_USER) (KW_ALL | rolespec) KW_IN KW_DATABASE database_name setresetclause
    ;

alterroutinestmt
    : KW_ALTER KW_ROUTINE routine_name func_args? alter_routine_cluase
    ;

alter_routine_cluase
    : routine_action_list KW_RESTRICT?
    | KW_RENAME KW_TO routine_name_create
    | KW_OWNER KW_TO rolespec
    | KW_SET KW_SCHEMA schema_name_create
    | KW_NO? KW_DEPENDS KW_ON KW_EXTENSION colid
    ;

routine_action_list
    : routine_action (routine_action)*
    ;

routine_action
    : KW_IMMUTABLE
    | KW_STABLE
    | KW_VOLATILE
    | KW_NOT? KW_LEAKPROOF
    | (KW_EXTERNAL? KW_SECURITY KW_INVOKER | KW_EXTERNAL? KW_SECURITY KW_DEFINER)
    | KW_PARALLEL (KW_UNSAFE | KW_RESTRICTED | KW_SAFE)
    | KW_COST collabel
    | KW_ROWS colid
    | KW_SET colid (KW_TO | EQUAL) (colid | KW_DEFAULT)
    | KW_SET colid KW_FROM KW_CURRENT
    | KW_RESET (colid | KW_ALL)
    ;

creategroupstmt
    : KW_CREATE KW_GROUP rolespec KW_WITH? optrolelist
    ;

altergroupstmt
    : KW_ALTER KW_GROUP rolespec add_drop KW_USER role_list
    ;

add_drop
    : KW_ADD
    | KW_DROP
    ;

createschemastmt
    : KW_CREATE KW_SCHEMA opt_if_not_exists? (
        schema_name_create? KW_AUTHORIZATION rolespec
        | schema_name_create
    ) schema_stmt*
    ;

schema_name_create
    : any_name # schemaNameCreate
    ;

schema_stmt
    : createstmt
    | indexstmt
    | createseqstmt
    | createtrigstmt
    | grantstmt
    | viewstmt
    ;

variablesetstmt
    : KW_SET (KW_LOCAL | KW_SESSION)? set_rest
    ;

set_rest
    : KW_TRANSACTION transaction_mode_list
    | KW_SESSION KW_CHARACTERISTICS KW_AS KW_TRANSACTION transaction_mode_list
    | set_rest_more
    ;

generic_set
    : (KW_ALL | var_name) (KW_TO | EQUAL)? (KW_DEFAULT | var_list)?
    ;

set_rest_more
    : KW_TIME KW_ZONE zone_value
    | KW_CATALOG sconst
    | KW_SCHEMA schema_name
    | KW_NAMES opt_encoding?
    | KW_ROLE nonreservedword_or_sconst
    | KW_SESSION KW_AUTHORIZATION nonreservedword_or_sconst
    | KW_XML KW_OPTION document_or_content
    | KW_TRANSACTION KW_SNAPSHOT sconst
    | var_name KW_FROM KW_CURRENT
    | generic_set
    ;

var_name
    : colid (DOT colid)*
    ;

var_list
    : var_value (COMMA var_value)*
    ;

var_value
    : opt_boolean_or_string
    | numericonly
    ;

iso_level
    : KW_READ (KW_UNCOMMITTED | KW_COMMITTED)
    | KW_REPEATABLE KW_READ
    | KW_SERIALIZABLE
    ;

opt_boolean_or_string_column
    : KW_TRUE
    | KW_FALSE
    | KW_ON
    | nonreservedword_column
    | sconst
    ;

opt_boolean_or_string
    : KW_TRUE
    | KW_FALSE
    | KW_ON
    | nonreservedword_or_sconst
    ;

zone_value
    : opt_encoding
    | identifier
    | KW_INTERVAL sconst opt_interval?
    | KW_INTERVAL opt_float sconst
    | numericonly
    | KW_LOCAL
    ;

opt_encoding
    : sconst
    | KW_DEFAULT
    ;

nonreservedword_or_sconst
    : nonreservedword
    | sconst
    ;

variableresetstmt
    : KW_RESET reset_rest
    ;

reset_rest
    : KW_TIME KW_ZONE
    | KW_TRANSACTION KW_ISOLATION KW_LEVEL
    | KW_SESSION KW_AUTHORIZATION
    | generic_reset
    ;

generic_reset
    : KW_ALL
    | var_name
    ;

setresetclause
    : KW_SET set_rest
    | variableresetstmt
    ;

functionsetresetclause
    : KW_SET set_rest_more
    | variableresetstmt
    ;

variableshowstmt
    : KW_SHOW (
        var_name
        | KW_TIME KW_ZONE
        | KW_TRANSACTION KW_ISOLATION KW_LEVEL
        | KW_SESSION KW_AUTHORIZATION
        | KW_ALL
    )
    ;

constraintssetstmt
    : KW_SET KW_CONSTRAINTS (KW_ALL | qualified_name_list) constraints_set_mode
    ;

constraints_set_mode
    : KW_DEFERRED
    | KW_IMMEDIATE
    ;

checkpointstmt
    : KW_CHECKPOINT
    ;

discardstmt
    : KW_DISCARD (KW_ALL | KW_TEMP | KW_TEMPORARY | KW_PLANS | KW_SEQUENCES)
    ;

altertablestmt
    : KW_ALTER KW_TABLE opt_if_exists? relation_expr (alter_table_cmds | partition_cmd)
    | KW_ALTER KW_TABLE KW_ALL KW_IN opttablespace (KW_OWNED KW_BY role_list)? KW_SET KW_TABLESPACE tablespace_name_create KW_NOWAIT?
    | KW_ALTER KW_TABLE opt_if_exists? table_name index_partition_cmd (
        KW_FOR KW_VALUES partition_bound_spec
        | KW_DEFAULT
    )
    | KW_ALTER KW_TABLE opt_if_exists? table_name KW_DETACH KW_PARTITION qualified_name (
        KW_CONCURRENTLY
        | KW_FINALIZE
    )?
    | KW_ALTER KW_INDEX opt_if_exists? qualified_name (alter_table_cmds | index_partition_cmd)
    | KW_ALTER KW_INDEX KW_ALL KW_IN opttablespace (KW_OWNED KW_BY role_list)? KW_SET opttablespace KW_NOWAIT?
    | KW_ALTER KW_SEQUENCE opt_if_exists? qualified_name alter_table_cmds
    | KW_ALTER KW_MATERIALIZED? KW_VIEW opt_if_exists? view_name alter_table_cmds
    | KW_ALTER KW_MATERIALIZED KW_VIEW KW_ALL KW_IN opttablespace (KW_OWNED KW_BY role_list)? KW_SET KW_TABLESPACE tablespace_name_create KW_NOWAIT?
    | KW_ALTER KW_FOREIGN KW_TABLE opt_if_exists? relation_expr alter_table_cmds
    ;

alter_table_cmds
    : alter_table_cmd (COMMA alter_table_cmd)*
    ;

partition_bound_spec
    : KW_IN execute_param_clause
    | KW_FROM partition_bound_cluase KW_TO partition_bound_cluase
    | KW_WITH partition_with_cluase
    ;

partition_bound_cluase
    : OPEN_PAREN partition_bound_choose (COMMA partition_bound_choose)* CLOSE_PAREN
    ;

partition_bound_choose
    : execute_param_clause
    | KW_MINVALUE
    | KW_MAXVALUE
    ;

partition_with_cluase
    : OPEN_PAREN KW_MODULUS numericonly COMMA KW_REMAINDER numericonly CLOSE_PAREN
    ;

partition_cmd
    : index_partition_cmd partitionboundspec
    | KW_DETACH KW_PARTITION qualified_name
    ;

index_partition_cmd
    : KW_ATTACH KW_PARTITION qualified_name
    ;

alter_table_cmd
    : KW_ADD (KW_CONSTRAINT colid)? constraintelem
    | KW_ALTER KW_CONSTRAINT colid constraintattributespec
    | KW_VALIDATE KW_CONSTRAINT colid
    | KW_DROP KW_CONSTRAINT opt_if_exists? colid opt_drop_behavior?
    | KW_SET KW_WITHOUT (KW_OIDS | KW_CLUSTER)
    | KW_CLUSTER KW_ON colid
    | KW_SET (KW_LOGGED | KW_UNLOGGED)
    | KW_ENABLE (KW_REPLICA | KW_ALWAYS)? KW_TRIGGER
    | KW_DISABLE KW_TRIGGER (KW_ALL | KW_USER | colid)
    | KW_ENABLE (KW_ALWAYS | KW_REPLICA) KW_RULE colid
    | KW_DISABLE KW_RULE colid
    | KW_NO? KW_INHERIT qualified_name
    | KW_OF any_name
    | KW_NOT KW_OF
    | KW_OWNER KW_TO rolespec
    | KW_SET KW_TABLESPACE tablespace_name_create
    | KW_REPLICA KW_IDENTITY replica_identity
    | (KW_ENABLE | KW_DISABLE | (KW_NO? KW_FORCE)) KW_ROW KW_LEVEL KW_SECURITY
    | KW_DROP KW_COLUMN? opt_if_exists? column_name opt_drop_behavior?
    | KW_ADD KW_COLUMN? opt_if_not_exists? column_def
    | KW_ALTER KW_COLUMN? column_name (alter_column_default | alter_generic_options)
    | KW_ALTER KW_COLUMN? column_name (KW_DROP | KW_SET) KW_NOT KW_NULL
    | KW_ALTER KW_COLUMN? column_name KW_DROP KW_EXPRESSION opt_if_exists?
    | KW_ALTER KW_COLUMN? column_name KW_SET KW_STATISTICS signediconst
    | (KW_ALTER KW_COLUMN? column_name)? (KW_SET | KW_RESET) reloptions
    | KW_ALTER KW_COLUMN? column_name KW_SET KW_STORAGE colid
    | KW_ALTER KW_COLUMN? column_name KW_ADD KW_GENERATED generated_when KW_AS KW_IDENTITY optparenthesizedseqoptlist?
    | KW_ALTER KW_COLUMN? column_name alter_identity_column_option+
    | KW_ALTER KW_COLUMN? column_name KW_DROP KW_IDENTITY opt_if_exists?
    | KW_ALTER KW_COLUMN? column_name opt_set_data? KW_TYPE typename opt_collate_clause? alter_using?
    | alter_generic_options
    ;

alter_column_default
    : KW_SET KW_DEFAULT a_expr_qual
    | KW_DROP KW_DEFAULT
    ;

opt_drop_behavior
    : KW_CASCADE
    | KW_RESTRICT
    ;

opt_collate_clause
    : KW_COLLATE any_name
    ;

alter_using
    : KW_USING a_expr_qual
    ;

replica_identity
    : KW_NOTHING
    | KW_FULL
    | KW_DEFAULT
    | existingindex
    ;

reloptions
    : OPEN_PAREN reloption_list CLOSE_PAREN
    ;

opt_reloptions
    : KW_WITH reloptions
    ;

reloption_list
    : reloption_elem (COMMA reloption_elem)*
    ;

reloption_elem
    : collabel (EQUAL def_arg | DOT def_elem)?
    ;

alter_identity_column_option
    : KW_RESTART (KW_WITH? numericonly)?
    | KW_SET (seqoptelem | KW_GENERATED generated_when)
    ;

partitionboundspec
    : KW_FOR KW_VALUES KW_WITH OPEN_PAREN hash_partbound CLOSE_PAREN
    | KW_FOR KW_VALUES KW_IN execute_param_clause
    | KW_FOR KW_VALUES KW_FROM execute_param_clause KW_TO execute_param_clause
    | KW_DEFAULT
    ;

hash_partbound_elem
    : nonreservedword Integral
    ;

hash_partbound
    : hash_partbound_elem (COMMA hash_partbound_elem)*
    ;

altercompositetypestmt
    : KW_ALTER KW_TYPE any_name alter_type_cmds
    ;

alter_type_cmds
    : alter_type_cmd (COMMA alter_type_cmd)*
    ;

alter_type_cmd
    : KW_ADD KW_ATTRIBUTE tablefuncelement opt_drop_behavior?
    | KW_DROP KW_ATTRIBUTE opt_if_exists? colid opt_drop_behavior?
    | KW_ALTER KW_ATTRIBUTE colid opt_set_data? KW_TYPE typename opt_collate_clause? opt_drop_behavior?
    ;

closeportalstmt
    : KW_CLOSE (colid | KW_ALL)
    ;

copystmt
    : KW_COPY KW_BINARY? table_name opt_column_list? copy_from KW_PROGRAM? copy_file_name copy_delimiter? KW_WITH? copy_options where_clause?
    | KW_COPY OPEN_PAREN preparablestmt CLOSE_PAREN KW_TO KW_PROGRAM? copy_file_name KW_WITH? copy_options
    ;

copy_from
    : KW_FROM
    | KW_TO
    ;

copy_file_name
    : sconst
    | KW_STDIN
    | KW_STDOUT
    ;

copy_options
    : copy_opt_item*
    | OPEN_PAREN copy_generic_opt_list CLOSE_PAREN
    ;

copy_opt_item
    : KW_BINARY
    | KW_FREEZE
    | (KW_NULL | KW_DELIMITER | KW_ESCAPE | KW_QUOTE) KW_AS? sconst
    | KW_CSV
    | KW_HEADER
    | KW_FORCE KW_QUOTE (column_list | STAR)
    | KW_FORCE KW_NOT? KW_NULL column_list
    | KW_ENCODING sconst
    ;

copy_delimiter
    : KW_USING? KW_DELIMITERS sconst
    ;

copy_generic_opt_list
    : copy_generic_opt_elem (COMMA copy_generic_opt_elem)*
    ;

copy_generic_opt_elem
    : collabel copy_generic_opt_arg?
    ;

copy_generic_opt_arg
    : opt_boolean_or_string
    | numericonly
    | STAR
    | OPEN_PAREN copy_generic_opt_arg_list CLOSE_PAREN
    ;

copy_generic_opt_arg_list
    : opt_boolean_or_string_column (COMMA opt_boolean_or_string_column)*
    ;

createstmt
    : KW_CREATE opttemp? KW_TABLE opt_if_not_exists? table_name_create (
        OPEN_PAREN tableelementlist? CLOSE_PAREN optinherit? partitionspec? table_access_method_clause? optwith? oncommitoption? opttablespace?
        | KW_OF any_name opttypedtableelementlist? partitionspec? table_access_method_clause? optwith? oncommitoption? opttablespace?
        | KW_PARTITION KW_OF qualified_name opttypedtableelementlist? partitionboundspec partitionspec? table_access_method_clause? optwith?
            oncommitoption? opttablespace?
    ) # columnCreateTable
    ;

opttemp
    : KW_TEMPORARY
    | KW_TEMP
    | (KW_LOCAL | KW_GLOBAL) (KW_TEMPORARY | KW_TEMP)
    | KW_UNLOGGED
    ;

opttypedtableelementlist
    : OPEN_PAREN typedtableelementlist CLOSE_PAREN
    ;

tableelementlist
    : tableelement (COMMA tableelement)*
    ;

typedtableelementlist
    : typedtableelement (COMMA typedtableelement)*
    ;

tableelement
    : column_def
    | tablelikeclause
    | tableconstraint
    ;

typedtableelement
    : columnOptions
    | tableconstraint
    ;

column_def
    : column_name_create typename create_generic_options? storageCluase? (KW_COMPRESSION colid)? (
        opt_collate_clause
    )? (KW_WITH KW_OPTIONS)? colquallist
    ;

compressionCluase
    : KW_COMPRESSION colid
    ;

storageCluase
    : KW_STORAGE (KW_PLAIN | KW_EXTERNAL | KW_EXTENDED | KW_MAIN | KW_DEFAULT | colid)
    ;

columnOptions
    : column_name_create (KW_WITH KW_OPTIONS)? colquallist
    ;

colquallist
    : colconstraint*
    ;

colconstraint
    : (KW_CONSTRAINT colid)? colconstraintelem deferrable_trigger? initially_trigger?
    | colconstraintelem deferrable_trigger? initially_trigger?
    ;

colconstraintelem
    : KW_NOT? KW_NULL
    | KW_UNIQUE opt_definition? optconstablespace?
    | KW_UNIQUE nulls_distinct? index_paramenters_create
    | KW_PRIMARY KW_KEY opt_definition? optconstablespace?
    | KW_CHECK OPEN_PAREN a_expr_qual CLOSE_PAREN (KW_NO KW_INHERIT)?
    | KW_DEFAULT b_expr
    | KW_GENERATED generated_when KW_AS (
        KW_IDENTITY optparenthesizedseqoptlist?
        | OPEN_PAREN a_expr_qual CLOSE_PAREN KW_STORED
    )
    | KW_REFERENCES qualified_name opt_column_list? key_match? key_actions?
    | opt_collate_clause
    ;

nulls_distinct
    : KW_NULLS KW_NOT? KW_DISTINCT
    ;

generated_when
    : KW_ALWAYS
    | KW_BY KW_DEFAULT
    ;

deferrable_trigger
    : KW_NOT? KW_DEFERRABLE
    ;

initially_trigger
    : KW_INITIALLY (KW_DEFERRED | KW_IMMEDIATE)
    ;

tablelikeclause
    : KW_LIKE qualified_name tablelikeoptionlist
    ;

tablelikeoptionlist
    : ((KW_INCLUDING | KW_EXCLUDING) tablelikeoption)*
    ;

tablelikeoption
    : KW_COMMENTS
    | KW_CONSTRAINTS
    | KW_DEFAULTS
    | KW_IDENTITY
    | KW_GENERATED
    | KW_INDEXES
    | KW_STATISTICS
    | KW_STORAGE
    | KW_ALL
    ;

tableconstraint
    : (KW_CONSTRAINT colid)? constraintelem
    ;

constraintelem
    : KW_CHECK OPEN_PAREN a_expr_qual CLOSE_PAREN constraintattributespec
    | (KW_UNIQUE | ( KW_PRIMARY KW_KEY)) (
        opt_column_list opt_c_include? opt_definition? optconstablespace? constraintattributespec
        | existingindex constraintattributespec
    )
    | KW_EXCLUDE table_access_method_clause? OPEN_PAREN exclusionconstraintlist CLOSE_PAREN opt_c_include? opt_definition? optconstablespace?
        exclusionwhereclause? constraintattributespec
    | KW_FOREIGN KW_KEY opt_column_list KW_REFERENCES qualified_name opt_column_list? key_match? key_actions? constraintattributespec
    ;

opt_column_list
    : OPEN_PAREN column_list CLOSE_PAREN
    ;

opt_column_list_create
    : OPEN_PAREN column_list_create CLOSE_PAREN
    ;

column_list
    : column_name (COMMA column_name)*
    ;

column_list_create
    : column_name_create (COMMA column_name_create)*
    ;

opt_c_include
    : KW_INCLUDE opt_column_list
    ;

key_match
    : KW_MATCH (KW_FULL | KW_PARTIAL | KW_SIMPLE)
    ;

exclusionconstraintlist
    : exclusionconstraintelem (COMMA exclusionconstraintelem)*
    ;

exclusionconstraintelem
    : index_elem KW_WITH (any_operator | KW_OPERATOR OPEN_PAREN any_operator CLOSE_PAREN)
    ;

exclusionwhereclause
    : KW_WHERE OPEN_PAREN a_expr_qual CLOSE_PAREN
    ;

key_actions
    : key_update key_delete?
    | key_delete key_update?
    ;

key_update
    : KW_ON KW_UPDATE key_action
    ;

key_delete
    : KW_ON KW_DELETE key_action
    ;

key_action
    : KW_NO KW_ACTION
    | KW_RESTRICT
    | KW_CASCADE
    | KW_SET (KW_NULL | KW_DEFAULT) column_list?
    ;

optinherit
    : KW_INHERITS OPEN_PAREN qualified_name_list CLOSE_PAREN
    ;

partitionspec
    : KW_PARTITION KW_BY colid OPEN_PAREN part_params CLOSE_PAREN
    ;

part_params
    : part_elem (COMMA part_elem)*
    ;

part_elem
    : (column_name | func_expr_windowless | (OPEN_PAREN a_expr_qual CLOSE_PAREN)) opt_collate_clause? any_name?
    ;

table_access_method_clause
    : KW_USING colid
    ;

optwith
    : KW_WITH reloptions
    | (KW_WITHOUT | KW_WITH) KW_OIDS
    ;

oncommitoption
    : KW_ON KW_COMMIT (KW_DROP | KW_DELETE KW_ROWS | KW_PRESERVE KW_ROWS)
    ;

opttablespace
    : KW_TABLESPACE tablespace_name
    ;

index_paramenters_create
    : opt_include? with_clause? optconstablespace?
    ;

optconstablespace
    : KW_USING KW_INDEX opttablespace
    ;

existingindex
    : KW_USING KW_INDEX colid
    ;

createstatsstmt
    : KW_CREATE KW_STATISTICS (opt_if_not_exists? any_name)? opt_column_list? KW_ON (
        column_expr_list
        | expr_list
    ) from_clause
    ;

alterstatsstmt
    : KW_ALTER KW_STATISTICS opt_if_exists? any_name KW_SET KW_STATISTICS signediconst
    ;

createasstmt
    : KW_CREATE opttemp? KW_TABLE opt_if_not_exists? create_as_target KW_AS selectstmt opt_with_data? # queryCreateTable
    ;

create_as_target
    : table_name_create opt_column_list_create? table_access_method_clause? optwith? oncommitoption? opttablespace?
    ;

opt_with_data
    : KW_WITH (KW_DATA | KW_NO KW_DATA)
    ;

creatematviewstmt
    : KW_CREATE KW_UNLOGGED? KW_MATERIALIZED KW_VIEW opt_if_not_exists? create_mv_target KW_AS selectstmt opt_with_data? # createMaterializedView
    ;

create_mv_target
    : view_name_create opt_column_list_create? table_access_method_clause? opt_reloptions? opttablespace?
    ;

refreshmatviewstmt
    : KW_REFRESH KW_MATERIALIZED KW_VIEW KW_CONCURRENTLY? view_name opt_with_data?
    ;

createseqstmt
    : KW_CREATE opttemp? KW_SEQUENCE opt_if_not_exists? qualified_name seqoptlist?
    ;

alterseqstmt
    : KW_ALTER KW_SEQUENCE opt_if_exists? qualified_name seqoptlist
    ;

optparenthesizedseqoptlist
    : OPEN_PAREN seqoptlist CLOSE_PAREN
    ;

seqoptlist
    : seqoptelem+
    ;

seqoptelem
    : KW_AS simpletypename
    | KW_CACHE numericonly?
    | KW_INCREMENT KW_BY? numericonly
    | (KW_MAXVALUE | KW_MINVALUE) numericonly
    | KW_NO (KW_MAXVALUE | KW_MINVALUE | KW_CYCLE)
    | KW_OWNED KW_BY column_name
    | KW_SEQUENCE KW_NAME any_name
    | KW_START KW_WITH? numericonly
    | KW_RESTART KW_WITH? numericonly?
    ;

numericonly
    : (PLUS | MINUS)? Numeric
    | signediconst
    ;

numericonly_list
    : numericonly (COMMA numericonly)*
    ;

createplangstmt
    : KW_CREATE opt_or_replace? KW_TRUSTED? KW_PROCEDURAL? KW_LANGUAGE colid (
        KW_HANDLER any_name (KW_INLINE any_name)? validator_clause?
    )?
    ;

validator_clause
    : KW_VALIDATOR any_name
    | KW_NO KW_VALIDATOR
    ;

createtablespacestmt
    : KW_CREATE opttablespace (KW_OWNER rolespec)? KW_LOCATION sconst opt_reloptions?
    ;

createextensionstmt
    : KW_CREATE KW_EXTENSION opt_if_not_exists? colid KW_WITH? create_extension_opt_item*
    ;

create_extension_opt_item
    : KW_SCHEMA schema_name
    | (KW_VERSION | KW_FROM) nonreservedword_or_sconst
    | KW_CASCADE
    ;

alterextensionstmt
    : KW_ALTER KW_EXTENSION colid KW_UPDATE alter_extension_opt_item*
    ;

alter_extension_opt_item
    : KW_TO nonreservedword_or_sconst
    ;

alterextensioncontentsstmt
    : KW_ALTER KW_EXTENSION colid add_drop (object_type_name | object_type_any_name)
    | KW_ALTER KW_EXTENSION colid add_drop KW_AGGREGATE aggregate_with_argtypes
    | KW_ALTER KW_EXTENSION colid add_drop KW_CAST OPEN_PAREN typename KW_AS typename CLOSE_PAREN
    | KW_ALTER KW_EXTENSION colid add_drop (KW_DOMAIN | KW_TYPE) typename
    | KW_ALTER KW_EXTENSION colid add_drop KW_FUNCTION function_with_argtypes
    | KW_ALTER KW_EXTENSION colid add_drop KW_OPERATOR operator_with_argtypes
    | KW_ALTER KW_EXTENSION colid add_drop KW_OPERATOR (KW_CLASS | KW_FAMILY) any_name table_access_method_clause
    | KW_ALTER KW_EXTENSION colid add_drop KW_PROCEDURE procedure_with_argtypes
    | KW_ALTER KW_EXTENSION colid add_drop KW_ROUTINE routine_with_argtypes
    | KW_ALTER KW_EXTENSION colid add_drop KW_TRANSFORM KW_FOR typename KW_LANGUAGE colid
    ;

createfdwstmt
    : KW_CREATE KW_FOREIGN KW_DATA KW_WRAPPER colid fdw_options? create_generic_options?
    ;

fdw_option
    : (KW_HANDLER | KW_VALIDATOR) any_name?
    | KW_NO (KW_HANDLER | KW_VALIDATOR)
    ;

fdw_options
    : fdw_option+
    ;

alterfdwstmt
    : KW_ALTER KW_FOREIGN KW_DATA KW_WRAPPER colid fdw_options? alter_generic_options
    | KW_ALTER KW_FOREIGN KW_DATA KW_WRAPPER colid fdw_options
    ;

create_generic_options
    : KW_OPTIONS OPEN_PAREN generic_option_list CLOSE_PAREN
    ;

generic_option_list
    : generic_option_elem (COMMA generic_option_elem)*
    ;

alter_generic_options
    : KW_OPTIONS OPEN_PAREN alter_generic_option_list CLOSE_PAREN
    ;

alter_generic_option_list
    : alter_generic_option_elem (COMMA alter_generic_option_elem)*
    ;

alter_generic_option_elem
    : (KW_SET | KW_ADD | KW_DROP) generic_option_elem
    ;

generic_option_elem
    : collabel sconst
    ;

createforeignserverstmt
    : KW_CREATE KW_SERVER opt_if_not_exists? colid opt_type? foreign_server_version? KW_FOREIGN KW_DATA KW_WRAPPER colid create_generic_options?
    ;

opt_type
    : KW_TYPE sconst
    ;

foreign_server_version
    : KW_VERSION (sconst | KW_NULL)
    ;

alterforeignserverstmt
    : KW_ALTER KW_SERVER colid (
        alter_generic_options
        | foreign_server_version alter_generic_options?
    )
    ;

createforeigntablestmt
    : KW_CREATE KW_FOREIGN KW_TABLE opt_if_not_exists? table_name_create OPEN_PAREN tableelementlist? CLOSE_PAREN optinherit? KW_SERVER colid
        create_generic_options? # createForeignTable
    | KW_CREATE KW_FOREIGN KW_TABLE opt_if_not_exists? table_name_create KW_PARTITION KW_OF table_name opttypedtableelementlist? partitionboundspec
        KW_SERVER colid create_generic_options? # createPartitionForeignTable
    ;

importforeignschemastmt
    : KW_IMPORT KW_FOREIGN KW_SCHEMA schema_name import_qualification? KW_FROM KW_SERVER colid KW_INTO colid create_generic_options?
    ;

import_qualification_type
    : KW_LIMIT KW_TO
    | KW_EXCEPT
    ;

import_qualification
    : import_qualification_type OPEN_PAREN relation_expr_list CLOSE_PAREN
    ;

createusermappingstmt
    : KW_CREATE KW_USER KW_MAPPING opt_if_not_exists? KW_FOR auth_ident KW_SERVER colid create_generic_options?
    ;

auth_ident
    : rolespec
    | KW_USER
    ;

alterusermappingstmt
    : KW_ALTER KW_USER KW_MAPPING KW_FOR auth_ident KW_SERVER colid alter_generic_options
    ;

createpolicystmt
    : KW_CREATE KW_POLICY colid KW_ON qualified_name rowsecuritydefaultpermissive? rowsecuritydefaultforcmd? rowsecuritydefaulttorole?
        rowsecurityoptionalexpr? rowsecurityoptionalwithcheck?
    ;

alterpolicystmt
    : KW_ALTER KW_POLICY colid KW_ON qualified_name rowsecuritydefaulttorole? rowsecurityoptionalexpr? rowsecurityoptionalwithcheck?
    ;

alterprocedurestmt
    : KW_ALTER KW_PROCEDURE procedure_name func_args? procedure_cluase
    ;

procedure_cluase
    : procedure_action (procedure_action)* KW_RESTRICT?
    | KW_RENAME KW_TO procedure_name_create
    | KW_OWNER KW_TO rolespec
    | KW_SET KW_SCHEMA schema_name_create
    | KW_NO? KW_DEPENDS KW_ON KW_EXTENSION colid
    ;

procedure_action
    : (KW_EXTERNAL? KW_SECURITY KW_INVOKER | KW_EXTERNAL? KW_SECURITY KW_DEFINER)
    | KW_SET colid (KW_TO | STAR) (colid | KW_DEFAULT)
    | KW_SET colid KW_FROM KW_CURRENT
    | KW_RESET (colid | KW_ALL)
    ;

rowsecurityoptionalexpr
    : KW_USING OPEN_PAREN a_expr_qual CLOSE_PAREN
    ;

rowsecurityoptionalwithcheck
    : KW_WITH KW_CHECK OPEN_PAREN a_expr_qual CLOSE_PAREN
    ;

rowsecuritydefaulttorole
    : KW_TO role_list
    ;

rowsecuritydefaultpermissive
    : KW_AS (KW_PERMISSIVE | KW_RESTRICTIVE | identifier)
    ;

rowsecuritydefaultforcmd
    : KW_FOR row_security_cmd
    ;

row_security_cmd
    : KW_ALL
    | KW_SELECT
    | KW_INSERT
    | KW_UPDATE
    | KW_DELETE
    ;

createamstmt
    : KW_CREATE KW_ACCESS KW_METHOD colid KW_TYPE am_type KW_HANDLER any_name
    ;

am_type
    : KW_INDEX
    | KW_TABLE
    ;

createtrigstmt
    : KW_CREATE opt_or_replace? KW_TRIGGER colid triggeractiontime triggerevents KW_ON table_name triggerreferencing? triggerforspec? triggerwhen?
        KW_EXECUTE function_or_procedure OPEN_PAREN triggerfuncargs CLOSE_PAREN
    | KW_CREATE opt_or_replace? KW_CONSTRAINT? KW_TRIGGER colid triggeractiontime triggerevents KW_ON table_name optconstrfromtable?
        constraintattributespec foreachrow? triggerwhen? KW_EXECUTE function_or_procedure OPEN_PAREN triggerfuncargs CLOSE_PAREN
    ;

triggeractiontime
    : KW_BEFORE
    | KW_AFTER
    | KW_INSTEAD KW_OF
    ;

foreachrow
    : KW_FOR KW_EACH? roworstatment
    ;

roworstatment
    : KW_ROW
    | KW_STATEMENT
    ;

triggerevents
    : triggeroneevent (KW_OR triggeroneevent)*
    ;

triggeroneevent
    : KW_INSERT
    | KW_DELETE
    | KW_UPDATE (KW_OF column_list)?
    | KW_TRUNCATE
    ;

triggerreferencing
    : KW_REFERENCING triggertransition+
    ;

triggertransition
    : transitionoldornew transitionrowortable KW_AS? colid
    ;

transitionoldornew
    : KW_NEW
    | KW_OLD
    ;

transitionrowortable
    : KW_TABLE
    | KW_ROW
    ;

triggerforspec
    : KW_FOR KW_EACH? triggerfortype
    ;

triggerfortype
    : KW_ROW
    | KW_STATEMENT
    ;

triggerwhen
    : KW_WHEN OPEN_PAREN a_expr_qual CLOSE_PAREN
    ;

function_or_procedure
    : KW_FUNCTION function_name
    | KW_PROCEDURE procedure_name
    ;

triggerfuncargs
    : (triggerfuncarg |) (COMMA triggerfuncarg)*
    ;

triggerfuncarg
    : Integral
    | Numeric
    | sconst
    | collabel
    ;

optconstrfromtable
    : KW_FROM qualified_name
    ;

constraintattributespec
    : constraintattributeElem*
    ;

constraintattributeElem
    : KW_NOT? KW_DEFERRABLE
    | KW_INITIALLY (KW_IMMEDIATE | KW_DEFERRED)
    | KW_NOT KW_VALID
    | KW_NO KW_INHERIT
    ;

createeventtrigstmt
    : KW_CREATE KW_EVENT KW_TRIGGER colid KW_ON collabel (KW_WHEN event_trigger_when_list)? KW_EXECUTE function_or_procedure empty_grouping_set
    ;

event_trigger_when_list
    : event_trigger_when_item (KW_AND event_trigger_when_item)*
    ;

event_trigger_when_item
    : colid KW_IN OPEN_PAREN event_trigger_value_list CLOSE_PAREN
    ;

altereventtrigstmt
    : KW_ALTER KW_EVENT KW_TRIGGER colid enable_trigger
    ;

enable_trigger
    : KW_ENABLE (KW_REPLICA | KW_ALWAYS)?
    | KW_DISABLE
    ;

createassertionstmt
    : KW_CREATE KW_ASSERTION any_name KW_CHECK OPEN_PAREN a_expr_qual CLOSE_PAREN constraintattributespec
    ;

definestmt
    : KW_CREATE opt_or_replace? KW_AGGREGATE function_name (
        (aggr_args definition)
        | old_aggr_definition
    )
    | KW_CREATE KW_OPERATOR any_operator definition
    | KW_CREATE KW_TYPE any_name definition?
    | KW_CREATE KW_TYPE any_name KW_AS OPEN_PAREN tablefuncelementlist? CLOSE_PAREN
    | KW_CREATE KW_TYPE any_name KW_AS KW_ENUM OPEN_PAREN event_trigger_value_list? CLOSE_PAREN
    | KW_CREATE KW_TYPE any_name KW_AS KW_RANGE definition
    | KW_CREATE KW_TEXT KW_SEARCH (KW_PARSER | KW_DICTIONARY | KW_TEMPLATE | KW_CONFIGURATION) any_name definition
    | KW_CREATE KW_COLLATION opt_if_not_exists? any_name (definition | (KW_FROM any_name))
    ;

definition
    : OPEN_PAREN def_list CLOSE_PAREN
    ;

def_list
    : def_elem (COMMA def_elem)*
    ;

def_elem
    : collabel (EQUAL def_arg)?
    ;

def_arg
    : func_type
    | reserved_keyword
    | qual_all_op
    | numericonly
    | sconst
    | KW_NONE
    ;

old_aggr_definition
    : OPEN_PAREN old_aggr_list CLOSE_PAREN
    ;

old_aggr_list
    : old_aggr_elem (COMMA old_aggr_elem)*
    ;

old_aggr_elem
    : identifier EQUAL def_arg
    ;

event_trigger_value_list
    : sconst (notify_payload)*
    ;

alterenumstmt
    : KW_ALTER KW_TYPE any_name KW_ADD KW_VALUE opt_if_not_exists? sconst (
        (KW_BEFORE | KW_AFTER) sconst
    )?
    | KW_ALTER KW_TYPE any_name KW_RENAME KW_VALUE sconst KW_TO sconst
    ;

opt_if_not_exists
    : KW_IF KW_NOT KW_EXISTS
    ;

createopclassstmt
    : KW_CREATE KW_OPERATOR KW_CLASS any_name KW_DEFAULT? KW_FOR KW_TYPE typename table_access_method_clause opt_opfamily? KW_AS opclass_item_list
    ;

opclass_item_list
    : opclass_item (COMMA opclass_item)*
    ;

opclass_item
    : KW_OPERATOR Integral any_operator opclass_purpose? KW_RECHECK?
    | KW_OPERATOR Integral operator_with_argtypes opclass_purpose? KW_RECHECK?
    | KW_FUNCTION Integral prep_type_clause? function_with_argtypes
    | KW_STORAGE typename
    ;

opt_opfamily
    : KW_FAMILY any_name
    ;

opclass_purpose
    : KW_FOR KW_SEARCH
    | KW_FOR KW_ORDER KW_BY any_name
    ;

createopfamilystmt
    : KW_CREATE KW_OPERATOR opt_opfamily table_access_method_clause
    ;

alteropfamilystmt
    : KW_ALTER KW_OPERATOR opt_opfamily table_access_method_clause KW_ADD opclass_item_list
    | KW_ALTER KW_OPERATOR opt_opfamily table_access_method_clause KW_DROP opclass_drop_list
    ;

opclass_drop_list
    : opclass_drop (COMMA opclass_drop)*
    ;

opclass_drop
    : (KW_OPERATOR | KW_FUNCTION) Integral prep_type_clause
    ;

reassignownedstmt
    : KW_REASSIGN KW_OWNED KW_BY role_list KW_TO rolespec
    ;

dropstmt
    : KW_DROP (
        KW_SEQUENCE
        | KW_INDEX
        | KW_COLLATION
        | KW_CONVERSION
        | KW_STATISTICS
        | KW_PUBLICATION
        | KW_SERVER
        | KW_ACCESS KW_METHOD
        | KW_EVENT KW_TRIGGER
        | KW_EXTENSION
        | KW_PROCEDURAL? KW_LANGUAGE
        | KW_FOREIGN KW_DATA KW_WRAPPER
    ) opt_if_exists? name_list opt_drop_behavior?
    | KW_DROP KW_MATERIALIZED? KW_VIEW opt_if_exists? view_nameList opt_drop_behavior?
    | KW_DROP KW_FOREIGN? KW_TABLE opt_if_exists? table_name_list opt_drop_behavior?
    | KW_DROP KW_TEXT KW_SEARCH (KW_PARSER | KW_DICTIONARY | KW_TEMPLATE | KW_CONFIGURATION) opt_if_exists? name_list opt_drop_behavior?
    | KW_DROP KW_SCHEMA opt_if_exists? schema_name_list opt_drop_behavior?
    | KW_DROP (KW_POLICY | KW_RULE | KW_TRIGGER) opt_if_exists? colid KW_ON any_name opt_drop_behavior?
    | KW_DROP (KW_TYPE | KW_DOMAIN) opt_if_exists? type_name_list opt_drop_behavior?
    | KW_DROP KW_INDEX KW_CONCURRENTLY opt_if_exists? any_name_list opt_drop_behavior?
    | KW_DROP KW_CAST opt_if_exists? OPEN_PAREN typename KW_AS typename CLOSE_PAREN opt_drop_behavior?
    | KW_DROP KW_OPERATOR (KW_CLASS | KW_FAMILY) opt_if_exists? any_name table_access_method_clause opt_drop_behavior?
    | KW_DROP KW_OWNED KW_BY role_list opt_drop_behavior?
    | KW_DROP KW_SUBSCRIPTION opt_if_exists? colid opt_drop_behavior?
    | KW_DROP KW_TABLESPACE opt_if_exists? tablespace_name
    | KW_DROP KW_TRANSFORM opt_if_exists? KW_FOR typename KW_LANGUAGE colid opt_drop_behavior?
    | KW_DROP (KW_ROLE | KW_USER | KW_GROUP) opt_if_exists? role_list
    | KW_DROP KW_USER KW_MAPPING opt_if_exists? KW_FOR auth_ident KW_SERVER colid
    | KW_DROP KW_DATABASE opt_if_exists? database_name (
        KW_WITH? OPEN_PAREN drop_option_list CLOSE_PAREN
    )?
    ;

view_nameList
    : view_name (COMMA view_name)*
    ;

object_type_any_name
    : KW_FOREIGN? KW_TABLE table_name
    | KW_MATERIALIZED? KW_VIEW view_name
    | (KW_INDEX | KW_COLLATION | KW_CONVERSION | KW_STATISTICS | KW_SEQUENCE) any_name
    | KW_TEXT KW_SEARCH (KW_PARSER | KW_DICTIONARY | KW_TEMPLATE | KW_CONFIGURATION) any_name
    ;

object_type_name
    : (
        KW_EVENT KW_TRIGGER
        | KW_ACCESS KW_METHOD
        | KW_EXTENSION
        | KW_PUBLICATION
        | KW_SERVER
        | KW_ROLE
        | KW_SUBSCRIPTION
        | KW_FOREIGN KW_DATA KW_WRAPPER
        | KW_PROCEDURAL? KW_LANGUAGE
    ) colid
    | KW_SCHEMA schema_name
    | KW_DATABASE database_name
    | opttablespace
    ;

object_type_name_on_any_name
    : KW_POLICY
    | KW_RULE
    | KW_TRIGGER
    ;

any_name_list
    : any_name (COMMA any_name)*
    ;

relation_column_name
    : colid attrs? DOT column_name
    ;

any_name
    : colid attrs?
    ;

attrs
    : (DOT collabel)+
    ;

type_name_list
    : typename (COMMA typename)*
    ;

truncatestmt
    : KW_TRUNCATE KW_TABLE? truncate_table (COMMA truncate_table)* (
        (KW_CONTINUE | KW_RESTART) KW_IDENTITY
    )? opt_drop_behavior?
    ;

truncate_table
    : KW_ONLY? table_name STAR?
    ;

commentstmt
    : KW_COMMENT KW_ON (
        object_type_any_name
        | object_type_name
        | KW_COLUMN relation_column_name
        | (KW_TYPE | KW_DOMAIN) typename
        | KW_AGGREGATE aggregate_with_argtypes
        | KW_FUNCTION function_with_argtypes
        | KW_OPERATOR operator_with_argtypes
        | KW_CONSTRAINT colid KW_ON (table_name | (KW_DOMAIN? any_name))
        | (KW_POLICY | KW_RULE | KW_TRIGGER) colid KW_ON any_name
        | KW_PROCEDURE procedure_with_argtypes
        | KW_ROUTINE routine_with_argtypes
        | KW_TRANSFORM KW_FOR typename KW_LANGUAGE colid
        | KW_OPERATOR (KW_CLASS | KW_FAMILY) any_name table_access_method_clause
        | KW_LARGE KW_OBJECT numericonly
        | KW_CAST OPEN_PAREN typename KW_AS typename CLOSE_PAREN
    ) KW_IS comment_text
    ;

comment_text
    : sconst
    | KW_NULL
    ;

seclabelstmt
    : KW_SECURITY KW_LABEL opt_provider? KW_ON (
        (KW_TYPE | KW_DOMAIN) typename
        | KW_AGGREGATE aggregate_with_argtypes
        | KW_COLUMN column_name
        | KW_FUNCTION function_with_argtypes
        | KW_LARGE KW_OBJECT numericonly
        | KW_PROCEDURE procedure_with_argtypes
        | KW_ROUTINE routine_with_argtypes
        | object_type_any_name
        | object_type_name
    ) KW_IS comment_text
    ;

opt_provider
    : KW_FOR nonreservedword_or_sconst
    ;

fetchstmt
    : (KW_FETCH | KW_MOVE) fetch_args
    ;

fetch_args
    : (KW_NEXT | KW_PRIOR | KW_FIRST | KW_LAST)? from_in? colid
    | (KW_ABSOLUTE | KW_RELATIVE)? signediconst from_in? colid
    | KW_FORWARD signediconst? from_in? colid
    | KW_FORWARD? KW_ALL from_in? colid
    | KW_BACKWARD (KW_ALL? | signediconst) from_in? colid
    ;

from_in
    : KW_FROM
    | KW_IN
    ;

grantstmt
    : KW_GRANT privileges KW_ON privilege_target KW_TO grantee_list opt_grant_grant_option?
    ;

revokestmt
    : KW_REVOKE (KW_GRANT KW_OPTION KW_FOR)? privileges KW_ON privilege_target KW_FROM grantee_list opt_drop_behavior?
    ;

privileges
    : privilege_list
    | KW_ALL KW_PRIVILEGES? (opt_column_list)?
    | beforeprivilegeselectlist
    ;

beforeprivilegeselectlist
    : beforeprivilegeselect (COMMA beforeprivilegeselect)*
    ;

beforeprivilegeselect
    : KW_SELECT
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

privilege_list
    : privilege (COMMA privilege)*
    ;

privilege
    : (KW_SELECT | KW_REFERENCES | KW_CREATE | colid) opt_column_list?
    ;

privilege_target
    : KW_TABLE table_name_list
    | KW_SEQUENCE? qualified_name_list
    | (KW_FOREIGN (KW_DATA KW_WRAPPER | KW_SERVER) | KW_LANGUAGE) name_list
    | KW_FOREIGN KW_SERVER name_list
    | KW_FUNCTION function_with_argtypes_list
    | KW_PROCEDURE procedure_with_argtypes_list
    | KW_ROUTINE routine_with_argtypes_list
    | KW_DATABASE database_nameList
    | (KW_DOMAIN | KW_TYPE) any_name_list
    | KW_LARGE KW_OBJECT numericonly_list
    | KW_SCHEMA schema_name_list
    | KW_TABLESPACE tablespace_name_list
    | KW_ALL (KW_TABLES | KW_SEQUENCES | KW_FUNCTIONS | KW_PROCEDURES | KW_ROUTINES) KW_IN KW_SCHEMA schema_name_list
    ;

grantee_list
    : grantee (COMMA grantee)*
    ;

grantee
    : KW_GROUP? rolespec
    ;

opt_grant_grant_option
    : KW_WITH KW_GRANT KW_OPTION
    ;

grantrolestmt
    : KW_GRANT privilege_list rowsecuritydefaulttorole (KW_WITH KW_ADMIN KW_OPTION)? opt_granted_by?
    ;

revokerolestmt
    : KW_REVOKE (KW_ADMIN KW_OPTION KW_FOR)? privilege_list KW_FROM role_list opt_granted_by? opt_drop_behavior?
    ;

opt_granted_by
    : KW_GRANTED KW_BY rolespec
    ;

alterdefaultprivilegesstmt
    : KW_ALTER KW_DEFAULT KW_PRIVILEGES defacloptionlist defaclaction
    ;

defacloptionlist
    : defacloption*
    ;

defacloption
    : KW_IN KW_SCHEMA schema_name_list
    | KW_FOR (KW_ROLE | KW_USER) role_list
    ;

defaclaction
    : KW_GRANT privileges KW_ON defacl_privilege_target KW_TO grantee_list opt_grant_grant_option?
    | KW_REVOKE privileges KW_ON defacl_privilege_target KW_FROM grantee_list opt_drop_behavior?
    | KW_REVOKE KW_GRANT KW_OPTION KW_FOR privileges KW_ON defacl_privilege_target KW_FROM grantee_list opt_drop_behavior?
    ;

defacl_privilege_target
    : KW_TABLES
    | KW_FUNCTIONS
    | KW_ROUTINES
    | KW_SEQUENCES
    | KW_TYPES
    | KW_SCHEMAS
    ;

//create index

indexstmt
    : KW_CREATE KW_UNIQUE? KW_INDEX KW_CONCURRENTLY? opt_if_not_exists? colid? KW_ON relation_expr table_access_method_clause? OPEN_PAREN index_params
        CLOSE_PAREN opt_include? nulls_distinct? opt_reloptions? opttablespace? where_clause?
    ;

index_params
    : index_elem (COMMA index_elem)*
    ;

index_elem_options
    : opt_collate_clause? (any_name? | any_name reloptions) opt_asc_desc? opt_nulls_order?
    ;

index_elem
    : (column_name | func_expr_windowless | OPEN_PAREN a_expr_qual CLOSE_PAREN) index_elem_options
    ;

opt_include
    : KW_INCLUDE OPEN_PAREN index_params CLOSE_PAREN
    ;

opt_asc_desc
    : KW_ASC
    | KW_DESC
    ;

opt_nulls_order
    : KW_NULLS (KW_FIRST | KW_LAST)
    ;

createfunctionstmt
    : KW_CREATE opt_or_replace? (
        KW_FUNCTION function_name_create
        | KW_PROCEDURE procedure_name_create
    ) func_args_with_defaults (
        KW_RETURNS (func_type | KW_TABLE OPEN_PAREN table_func_column_list CLOSE_PAREN)
    )? createfunc_opt_list (KW_WITH attrilist)?
    ;

attrilist
    : OPEN_PAREN name_list CLOSE_PAREN
    ;

opt_or_replace
    : KW_OR KW_REPLACE
    ;

func_args
    : OPEN_PAREN func_args_list? CLOSE_PAREN
    ;

func_args_list
    : func_arg (COMMA func_arg)*
    ;

routine_with_argtypes_list
    : routine_with_argtypes (COMMA routine_with_argtypes)*
    ;

routine_with_argtypes
    : routine_name func_args
    | type_func_name_keyword
    | qualified_name
    ;

procedure_with_argtypes_list
    : procedure_with_argtypes (COMMA procedure_with_argtypes)*
    ;

procedure_with_argtypes
    : procedure_name func_args
    | type_func_name_keyword
    | qualified_name
    ;

function_with_argtypes_list
    : function_with_argtypes (COMMA function_with_argtypes)*
    ;

function_with_argtypes
    : function_name func_args
    | type_func_name_keyword
    | qualified_name
    ;

func_args_with_defaults
    : OPEN_PAREN func_args_with_defaults_list? CLOSE_PAREN
    ;

func_args_with_defaults_list
    : func_arg_with_default (COMMA func_arg_with_default)*
    ;

func_arg
    : (arg_class type_function_name? | type_function_name arg_class?)? func_type
    ;

arg_class
    : KW_IN KW_OUT?
    | KW_OUT
    | KW_INOUT
    | KW_VARIADIC
    ;

func_type
    : typename
    | KW_SETOF? type_function_name attrs PERCENT KW_TYPE
    ;

func_arg_with_default
    : func_arg ((KW_DEFAULT | EQUAL) a_expr_qual)?
    ;

aggr_args
    : OPEN_PAREN (STAR | func_args_list? (KW_ORDER KW_BY func_args_list)?) CLOSE_PAREN
    ;

aggregate_with_argtypes
    : function_name aggr_args
    ;

aggregate_with_argtypes_list
    : aggregate_with_argtypes (COMMA aggregate_with_argtypes)*
    ;

createfunc_opt_list
    : createfunc_opt_item+
    ;

common_func_opt_item
    : (KW_RETURNS KW_NULL | KW_CALLED) KW_ON KW_NULL KW_INPUT
    | KW_STRICT
    | KW_IMMUTABLE
    | KW_STABLE
    | KW_VOLATILE
    | KW_EXTERNAL? KW_SECURITY (KW_DEFINER | KW_INVOKER)
    | KW_LEAKPROOF
    | KW_NOT KW_LEAKPROOF
    | (KW_COST | KW_ROWS) numericonly
    | KW_SUPPORT any_name
    | functionsetresetclause
    | KW_PARALLEL colid
    ;

createfunc_opt_item
    : KW_AS sconst notify_payload
    | KW_LANGUAGE nonreservedword_or_sconst
    | KW_TRANSFORM transform_type_name_list
    | KW_WINDOW
    | KW_SET colid (KW_TO colid | EQUAL colid | KW_FROM KW_CURRENT)
    | KW_AS colid
    | stmt
    | common_func_opt_item
    | colid
    ;

//https://www.postgresql.org/docs/9.1/sql-createfunction.html

//    | KW_AS 'definition'

//    | KW_AS 'obj_file', 'link_symbol'

transform_type_name_list
    : KW_FOR KW_TYPE typename (COMMA KW_FOR KW_TYPE typename)*
    ;

opt_definition
    : KW_WITH definition
    ;

table_func_column
    : column_name func_type
    ;

table_func_column_list
    : table_func_column (COMMA table_func_column)*
    ;

alterfunctionstmt
    : KW_ALTER alterFunctionTypeClause alterfunc_opt_list KW_RESTRICT?
    ;

alterFunctionTypeClause
    : KW_FUNCTION function_with_argtypes
    | KW_PROCEDURE procedure_with_argtypes
    | KW_ROUTINE routine_with_argtypes
    ;

alterfunc_opt_list
    : common_func_opt_item+
    ;

removefuncstmt
    : KW_DROP KW_FUNCTION opt_if_exists? function_with_argtypes_list opt_drop_behavior?
    | KW_DROP KW_PROCEDURE opt_if_exists? procedure_with_argtypes_list opt_drop_behavior?
    | KW_DROP KW_ROUTINE opt_if_exists? routine_with_argtypes_list opt_drop_behavior?
    ;

removeaggrstmt
    : KW_DROP KW_AGGREGATE opt_if_exists? aggregate_with_argtypes_list opt_drop_behavior?
    ;

removeoperstmt
    : KW_DROP KW_OPERATOR opt_if_exists? operator_with_argtypes_list opt_drop_behavior?
    ;

oper_argtypes
    : OPEN_PAREN typename (COMMA typename)? CLOSE_PAREN
    | OPEN_PAREN KW_NONE COMMA typename CLOSE_PAREN
    | OPEN_PAREN typename COMMA KW_NONE CLOSE_PAREN
    ;

any_operator
    : (colid DOT)* all_op
    ;

operator_with_argtypes_list
    : operator_with_argtypes (COMMA operator_with_argtypes)*
    ;

operator_with_argtypes
    : any_operator oper_argtypes
    ;

dostmt
    : KW_DO dostmt_opt_item+
    ;

dostmt_opt_item
    : sconst
    | KW_LANGUAGE nonreservedword_or_sconst
    ;

createcaststmt
    : KW_CREATE KW_CAST OPEN_PAREN typename KW_AS typename CLOSE_PAREN (
        (KW_WITHOUT KW_FUNCTION cast_context?)
        | (KW_WITH KW_FUNCTION function_with_argtypes cast_context?)
        | ( KW_WITH KW_INOUT cast_context?)
    )
    ;

cast_context
    : KW_AS (KW_ASSIGNMENT | KW_IMPLICIT)
    ;

opt_if_exists
    : KW_IF KW_EXISTS
    ;

createtransformstmt
    : KW_CREATE opt_or_replace? KW_TRANSFORM KW_FOR typename KW_LANGUAGE colid OPEN_PAREN transform_element_list CLOSE_PAREN
    ;

transform_element_list
    : KW_FROM sql_with_function (COMMA KW_TO sql_with_function)?
    | KW_TO sql_with_function (COMMA KW_FROM sql_with_function)?
    ;

sql_with_function
    : KW_SQL KW_WITH KW_FUNCTION function_with_argtypes
    ;

reindexstmt
    : KW_REINDEX (OPEN_PAREN reindex_option_list CLOSE_PAREN)? (
        reindex_target_type
        | reindex_target_multitable
    )
    ;

reindex_target_type
    : KW_INDEX KW_CONCURRENTLY? qualified_name
    | KW_TABLE KW_CONCURRENTLY? table_name
    ;

reindex_target_multitable
    : KW_SCHEMA KW_CONCURRENTLY? schema_name
    | KW_SYSTEM KW_CONCURRENTLY? colid
    | KW_DATABASE KW_CONCURRENTLY? database_name
    ;

reindex_option_list
    : KW_VERBOSE (COMMA KW_VERBOSE)*
    ;

altertblspcstmt
    : KW_ALTER opttablespace (KW_SET | KW_RESET) reloptions
    ;

renamestmt
    : KW_ALTER KW_AGGREGATE aggregate_with_argtypes KW_RENAME KW_TO colid
    | KW_ALTER KW_DATABASE database_name KW_RENAME KW_TO database_name_create
    | KW_ALTER (KW_DOMAIN | KW_STATISTICS | KW_TYPE | KW_CONVERSION | KW_COLLATION) any_name KW_RENAME KW_TO colid
    | KW_ALTER KW_DOMAIN any_name KW_RENAME KW_CONSTRAINT colid KW_TO colid
    | KW_ALTER KW_FUNCTION function_with_argtypes KW_RENAME KW_TO function_name_create
    | KW_ALTER KW_OPERATOR (KW_CLASS | KW_FAMILY) any_name table_access_method_clause KW_RENAME KW_TO colid
    | KW_ALTER KW_PROCEDURE procedure_with_argtypes KW_RENAME KW_TO procedure_name_create
    | KW_ALTER KW_ROUTINE routine_with_argtypes KW_RENAME KW_TO colid
    | KW_ALTER KW_SCHEMA schema_name KW_RENAME KW_TO schema_name_create
    | KW_ALTER (KW_SEQUENCE | KW_INDEX) opt_if_exists? qualified_name KW_RENAME KW_TO colid
    | KW_ALTER KW_MATERIALIZED? KW_VIEW opt_if_exists? view_name KW_RENAME KW_TO view_name_create
    | KW_ALTER KW_FOREIGN? KW_TABLE opt_if_exists? relation_expr KW_RENAME KW_TO table_name_create
    | KW_ALTER KW_TABLE opt_if_exists? relation_expr KW_RENAME KW_COLUMN? column_name KW_TO column_name_create
    | KW_ALTER KW_VIEW opt_if_exists? view_name KW_RENAME KW_COLUMN? column_name KW_TO column_name_create
    | KW_ALTER KW_MATERIALIZED KW_VIEW opt_if_exists? view_name KW_RENAME KW_COLUMN? column_name KW_TO column_name_create
    | KW_ALTER KW_TABLE opt_if_exists? relation_expr KW_RENAME KW_CONSTRAINT colid KW_TO colid
    | KW_ALTER KW_FOREIGN KW_TABLE opt_if_exists? relation_expr KW_RENAME KW_COLUMN? column_name KW_TO column_name_create
    | KW_ALTER ((KW_POLICY opt_if_exists?) | KW_RULE | KW_TRIGGER) colid KW_ON qualified_name KW_RENAME KW_TO colid
    | KW_ALTER (
        KW_FOREIGN KW_DATA KW_WRAPPER
        | (KW_PROCEDURAL? KW_LANGUAGE)
        | KW_PUBLICATION
        | KW_SERVER
        | KW_SUBSCRIPTION
        | (KW_EVENT KW_TRIGGER)
    ) colid KW_RENAME KW_TO colid
    | KW_ALTER (KW_USER | KW_ROLE | KW_GROUP) rolespec KW_RENAME KW_TO rolespec
    | KW_ALTER opttablespace KW_RENAME KW_TO tablespace_name_create
    | KW_ALTER KW_TEXT KW_SEARCH (KW_PARSER | KW_DICTIONARY | KW_TEMPLATE | KW_CONFIGURATION) any_name KW_RENAME KW_TO colid
    | KW_ALTER KW_TYPE any_name KW_RENAME KW_ATTRIBUTE colid KW_TO colid opt_drop_behavior?
    ;

opt_set_data
    : KW_SET KW_DATA
    ;

alterobjectdependsstmt
    : KW_ALTER (
        KW_FUNCTION function_with_argtypes
        | KW_PROCEDURE procedure_with_argtypes
        | KW_ROUTINE routine_with_argtypes
        | KW_TRIGGER colid KW_ON qualified_name
        | KW_MATERIALIZED KW_VIEW view_name
        | KW_INDEX qualified_name
    ) KW_NO? KW_DEPENDS KW_ON KW_EXTENSION colid
    ;

alterobjectschemastmt
    : KW_ALTER KW_AGGREGATE aggregate_with_argtypes KW_SET KW_SCHEMA schema_name
    | KW_ALTER (KW_COLLATION | KW_CONVERSION | KW_DOMAIN | KW_STATISTICS | KW_TYPE) any_name KW_SET KW_SCHEMA schema_name
    | KW_ALTER KW_EXTENSION colid KW_SET KW_SCHEMA schema_name
    | KW_ALTER KW_FUNCTION function_with_argtypes KW_SET KW_SCHEMA schema_name
    | KW_ALTER KW_OPERATOR operator_with_argtypes KW_SET KW_SCHEMA schema_name
    | KW_ALTER KW_OPERATOR (KW_CLASS | KW_FAMILY) any_name table_access_method_clause KW_SET KW_SCHEMA schema_name
    | KW_ALTER KW_PROCEDURE procedure_with_argtypes KW_SET KW_SCHEMA schema_name
    | KW_ALTER KW_ROUTINE routine_with_argtypes KW_SET KW_SCHEMA schema_name
    | KW_ALTER KW_TEXT KW_SEARCH (KW_PARSER | KW_DICTIONARY | KW_TEMPLATE | KW_CONFIGURATION) any_name KW_SET KW_SCHEMA schema_name
    | KW_ALTER KW_SEQUENCE opt_if_exists? qualified_name KW_SET KW_SCHEMA schema_name
    | KW_ALTER KW_MATERIALIZED? KW_VIEW opt_if_exists? view_name KW_SET KW_SCHEMA schema_name
    | KW_ALTER KW_FOREIGN? KW_TABLE opt_if_exists? relation_expr KW_SET KW_SCHEMA schema_name
    ;

alteroperatorstmt
    : KW_ALTER KW_OPERATOR operator_with_argtypes KW_SET OPEN_PAREN operator_def_list CLOSE_PAREN
    ;

operator_def_list
    : operator_def_elem (COMMA operator_def_elem)*
    ;

operator_def_elem
    : collabel EQUAL (KW_NONE | operator_def_arg)
    ;

operator_def_arg
    : func_type
    | reserved_keyword
    | qual_all_op
    | numericonly
    | sconst
    ;

altertypestmt
    : KW_ALTER KW_TYPE any_name KW_SET OPEN_PAREN operator_def_list CLOSE_PAREN
    ;

alterownerstmt
    : KW_ALTER KW_AGGREGATE aggregate_with_argtypes KW_OWNER KW_TO rolespec
    | KW_ALTER (KW_COLLATION | KW_CONVERSION | KW_DOMAIN | KW_TYPE | KW_STATISTICS) any_name KW_OWNER KW_TO rolespec
    | KW_ALTER KW_DATABASE database_name KW_OWNER KW_TO rolespec
    | KW_ALTER KW_FUNCTION function_with_argtypes KW_OWNER KW_TO rolespec
    | KW_ALTER KW_PROCEDURAL? KW_LANGUAGE colid KW_OWNER KW_TO rolespec
    | KW_ALTER KW_LARGE KW_OBJECT numericonly KW_OWNER KW_TO rolespec
    | KW_ALTER KW_OPERATOR operator_with_argtypes KW_OWNER KW_TO rolespec
    | KW_ALTER KW_OPERATOR (KW_CLASS | KW_FAMILY) any_name table_access_method_clause KW_OWNER KW_TO rolespec
    | KW_ALTER KW_PROCEDURE procedure_with_argtypes KW_OWNER KW_TO rolespec
    | KW_ALTER KW_ROUTINE routine_with_argtypes KW_OWNER KW_TO rolespec
    | KW_ALTER KW_SCHEMA schema_name KW_OWNER KW_TO rolespec
    | KW_ALTER opttablespace KW_OWNER KW_TO rolespec
    | KW_ALTER KW_TEXT KW_SEARCH (KW_DICTIONARY | KW_CONFIGURATION) any_name KW_OWNER KW_TO rolespec
    | KW_ALTER (
        KW_SERVER
        | (KW_FOREIGN KW_DATA KW_WRAPPER)
        | (KW_EVENT KW_TRIGGER)
        | KW_PUBLICATION
        | KW_SUBSCRIPTION
    ) colid KW_OWNER KW_TO rolespec
    ;

createpublicationstmt
    : KW_CREATE KW_PUBLICATION colid publication_for_tables? opt_definition?
    ;

publication_for_tables
    : KW_FOR KW_TABLE relation_expr_list
    | KW_FOR KW_ALL KW_TABLES
    ;

alterpublicationstmt
    : KW_ALTER KW_PUBLICATION colid KW_SET definition
    | KW_ALTER KW_PUBLICATION colid (KW_ADD | KW_SET | KW_DROP) publication_relation_expr_list
    | KW_ALTER KW_PUBLICATION colid (
        (KW_OWNER KW_TO rolespec)
        | (KW_SET definition)
        | (KW_RENAME KW_TO colid)
    )
    ;

createsubscriptionstmt
    : KW_CREATE KW_SUBSCRIPTION colid KW_CONNECTION sconst KW_PUBLICATION publication_name_list opt_definition?
    ;

publication_name_list
    : collabel (COMMA collabel)*
    ;

altersubscriptionstmt
    : KW_ALTER KW_SUBSCRIPTION colid KW_SET definition
    | KW_ALTER KW_SUBSCRIPTION colid KW_CONNECTION sconst
    | KW_ALTER KW_SUBSCRIPTION colid KW_REFRESH KW_PUBLICATION opt_definition?
    | KW_ALTER KW_SUBSCRIPTION colid (KW_SET | KW_ADD | KW_DROP) KW_PUBLICATION publication_name_list opt_definition?
    | KW_ALTER KW_SUBSCRIPTION colid (KW_ENABLE | KW_DISABLE)
    | KW_ALTER KW_SUBSCRIPTION colid KW_SKIP OPEN_PAREN old_aggr_elem CLOSE_PAREN
    | KW_ALTER KW_SUBSCRIPTION colid KW_OWNER KW_TO rolespec
    ;

rulestmt
    : KW_CREATE opt_or_replace? KW_RULE colid KW_AS KW_ON event KW_TO qualified_name where_clause? KW_DO opt_instead? ruleactionlist
    ;

ruleactionlist
    : KW_NOTHING
    | ruleactionstmt
    | OPEN_PAREN ruleactionmulti CLOSE_PAREN
    ;

ruleactionmulti
    : ruleactionstmtOrEmpty? (SEMI ruleactionstmtOrEmpty?)*
    ;

ruleactionstmt
    : selectstmt
    | insertstmt
    | updatestmt
    | deletestmt
    | notifystmt
    ;

ruleactionstmtOrEmpty
    : ruleactionstmt
    ;

event
    : KW_SELECT
    | KW_UPDATE
    | KW_DELETE
    | KW_INSERT
    ;

opt_instead
    : KW_INSTEAD
    | KW_ALSO
    ;

notifystmt
    : KW_NOTIFY colid notify_payload?
    ;

notify_payload
    : COMMA sconst
    ;

listenstmt
    : KW_LISTEN colid
    ;

unlistenstmt
    : KW_UNLISTEN (colid | STAR)
    ;

transactionstmt
    : KW_BEGIN opt_transaction? transaction_mode_list?
    | KW_START KW_TRANSACTION transaction_mode_list?
    | KW_SAVEPOINT colid
    | KW_RELEASE KW_SAVEPOINT? colid
    | KW_PREPARE KW_TRANSACTION sconst
    | (KW_COMMIT | KW_ROLLBACK) KW_PREPARED sconst
    | (KW_ABORT | KW_END | KW_COMMIT | KW_ROLLBACK) opt_transaction? opt_transaction_chain?
    | KW_ROLLBACK opt_transaction? KW_TO KW_SAVEPOINT? colid
    ;

opt_transaction
    : KW_WORK
    | KW_TRANSACTION
    ;

transaction_mode_item
    : KW_ISOLATION KW_LEVEL iso_level
    | KW_READ (KW_ONLY | KW_WRITE)
    | KW_NOT? KW_DEFERRABLE
    ;

transaction_mode_list
    : transaction_mode_item (COMMA? transaction_mode_item)*
    ;

opt_transaction_chain
    : KW_AND KW_NO? KW_CHAIN
    ;

viewstmt
    : KW_CREATE (KW_OR KW_REPLACE)? opttemp? (
        KW_VIEW view_name_create opt_column_list_create? opt_reloptions?
        | KW_RECURSIVE KW_VIEW view_name_create opt_column_list opt_reloptions?
    ) KW_AS selectstmt opt_check_option? # createView
    ;

opt_check_option
    : KW_WITH (KW_CASCADED | KW_LOCAL)? KW_CHECK KW_OPTION
    ;

loadstmt
    : KW_LOAD sconst
    ;

createdbstmt
    : KW_CREATE KW_DATABASE database_name_create KW_WITH? createdb_opt_items? # createDatabase
    ;

createdb_opt_items
    : createdb_opt_item+
    ;

createdb_opt_item
    : createdb_opt_name EQUAL? (signediconst | opt_boolean_or_string | KW_DEFAULT)
    ;

createdb_opt_name
    : KW_CONNECTION KW_LIMIT
    | KW_ENCODING
    | KW_LOCATION
    | KW_OWNER
    | KW_TABLESPACE
    | KW_TEMPLATE
    | identifier
    ;

alterdatabasestmt
    : KW_ALTER KW_DATABASE database_name (
        (KW_SET KW_TABLESPACE tablespace_name_create)?
        | (KW_WITH? createdb_opt_items)?
    )
    ;

alterdatabasesetstmt
    : KW_ALTER KW_DATABASE database_name setresetclause?
    ;

drop_option_list
    : KW_FORCE (COMMA KW_FORCE)*
    ;

altercollationstmt
    : KW_ALTER KW_COLLATION any_name KW_REFRESH KW_VERSION
    ;

altersystemstmt
    : KW_ALTER KW_SYSTEM (KW_SET | KW_RESET) generic_set
    ;

createdomainstmt
    : KW_CREATE KW_DOMAIN any_name KW_AS? typename colquallist
    ;

alterdomainstmt
    : KW_ALTER KW_DOMAIN any_name (
        alter_column_default
        | (KW_DROP | KW_SET) KW_NOT KW_NULL
        | KW_ADD tableconstraint
        | KW_DROP KW_CONSTRAINT opt_if_exists? colid opt_drop_behavior?
        | KW_VALIDATE KW_CONSTRAINT colid
    )
    ;

altertsdictionarystmt
    : KW_ALTER KW_TEXT KW_SEARCH KW_DICTIONARY any_name definition
    ;

altertsconfigurationstmt
    : KW_ALTER KW_TEXT KW_SEARCH KW_CONFIGURATION any_name (KW_ADD | KW_ALTER) KW_MAPPING KW_FOR name_list KW_WITH any_name_list
    | KW_ALTER KW_TEXT KW_SEARCH KW_CONFIGURATION any_name KW_ALTER KW_MAPPING (KW_FOR name_list)? KW_REPLACE any_name KW_WITH any_name
    | KW_ALTER KW_TEXT KW_SEARCH KW_CONFIGURATION any_name KW_DROP KW_MAPPING opt_if_exists? KW_FOR name_list
    ;

createconversionstmt
    : KW_CREATE KW_DEFAULT? KW_CONVERSION any_name KW_FOR sconst KW_TO sconst KW_FROM any_name
    ;

clusterstmt
    : KW_CLUSTER opt_verbose? (table_name table_access_method_clause?)?
    | KW_CLUSTER opt_verbose_list table_name table_access_method_clause?
    ;

opt_verbose_list
    : OPEN_PAREN opt_verbose (COMMA opt_verbose)* CLOSE_PAREN
    ;

vacuumstmt
    : KW_VACUUM KW_FULL? KW_FREEZE? opt_verbose? analyze_keyword? vacuum_relation_list?
    | KW_VACUUM (OPEN_PAREN vac_analyze_option_list CLOSE_PAREN)? vacuum_relation_list?
    ;

analyzestmt
    : analyze_keyword opt_verbose? vacuum_relation_list?
    | analyze_keyword OPEN_PAREN analyze_options_list CLOSE_PAREN vacuum_relation_list?
    ;

vac_analyze_option_list
    : vac_analyze_option_elem (COMMA vac_analyze_option_elem)*
    ;

analyze_keyword
    : KW_ANALYZE
    | KW_ANALYSE
    ;

vac_analyze_option_elem
    : vac_analyze_option_name vac_analyze_option_arg?
    ;

vac_analyze_option_name
    : nonreservedword
    | analyze_keyword
    ;

vac_analyze_option_arg
    : opt_boolean_or_string
    | numericonly
    ;

analyze_options_list
    : analyze_option_elem (COMMA analyze_option_elem)*
    ;

analyze_option_elem
    : opt_verbose
    | opt_skiplock
    | opt_buffer_usage_limit
    ; // support on v12+

opt_verbose
    : KW_VERBOSE (KW_FALSE | KW_TRUE)?
    ;

opt_skiplock
    : KW_SKIP_LOCKED (KW_FALSE | KW_TRUE)?
    ;

opt_buffer_usage_limit
    : KW_BUFFER_USAGE_LIMIT (numericonly | sconst)
    ;

vacuum_relation
    : table_name opt_column_list?
    ;

vacuum_relation_list
    : vacuum_relation (COMMA vacuum_relation)*
    ;

explainstmt
    : KW_EXPLAIN (
        (OPEN_PAREN explain_option_list CLOSE_PAREN)
        | KW_VERBOSE?
        | (analyze_keyword opt_verbose?)?
    ) explainablestmt
    ;

explainablestmt
    : selectstmt
    | insertstmt
    | updatestmt
    | deletestmt
    | declarecursorstmt
    | createasstmt
    | creatematviewstmt
    | refreshmatviewstmt
    | executestmt
    ;

explain_option_list
    : explain_option_elem (COMMA explain_option_elem)*
    ;

explain_option_elem
    : vac_analyze_option_name vac_analyze_option_arg?
    ;

preparestmt
    : KW_PREPARE colid prep_type_clause? KW_AS preparablestmt
    ;

prep_type_clause
    : OPEN_PAREN type_name_list CLOSE_PAREN
    ;

preparablestmt
    : selectstmt
    | insertstmt
    | updatestmt
    | deletestmt
    ;

executestmt
    : KW_EXECUTE colid execute_param_clause?
    | KW_CREATE opttemp? KW_TABLE opt_if_not_exists? create_as_target KW_AS KW_EXECUTE colid execute_param_clause? opt_with_data?
    ;

execute_param_clause
    : OPEN_PAREN expr_list CLOSE_PAREN
    ;

deallocatestmt
    : KW_DEALLOCATE KW_PREPARE? (colid | KW_ALL)
    ;

insertstmt
    : with_clause? KW_INSERT KW_INTO insert_target insert_rest opt_on_conflict? returning_clause? # insertStatement
    ;

insert_target
    : table_name (KW_AS colid)?
    ;

insert_rest
    : (OPEN_PAREN insert_column_list CLOSE_PAREN)? (KW_OVERRIDING override_kind KW_VALUE)? (
        default_values_or_values
        | selectstmt
    )
    ;

override_kind
    : KW_USER
    | KW_SYSTEM
    ;

insert_column_list
    : insert_column_item (COMMA insert_column_item)*
    ;

insert_column_item
    : column_name opt_indirection
    ;

opt_on_conflict
    : KW_ON KW_CONFLICT opt_conf_expr? KW_DO (
        KW_UPDATE KW_SET set_clause_list where_clause?
        | KW_NOTHING
    )
    ;

opt_conf_expr
    : OPEN_PAREN index_params CLOSE_PAREN where_clause?
    | KW_ON KW_CONSTRAINT colid
    ;

returning_clause
    : KW_RETURNING target_list
    ;

deletestmt
    : with_clause? KW_DELETE KW_FROM relation_expr_opt_alias using_clause? where_or_current_clause? returning_clause?
    ;

using_clause
    : KW_USING from_list
    ;

lockstmt
    : KW_LOCK KW_TABLE? relation_expr_list opt_lock? KW_NOWAIT?
    ;

opt_lock
    : KW_IN lock_type KW_MODE
    ;

lock_type
    : (KW_ACCESS | KW_ROW) (KW_SHARE | KW_EXCLUSIVE)
    | KW_SHARE (KW_UPDATE KW_EXCLUSIVE | KW_ROW KW_EXCLUSIVE)?
    | KW_EXCLUSIVE
    ;

opt_nowait_or_skip
    : KW_NOWAIT
    | KW_SKIP KW_LOCKED
    ;

updatestmt
    : with_clause? KW_UPDATE relation_expr_opt_alias KW_SET set_clause_list from_clause? where_or_current_clause? returning_clause?
    ;

set_clause_list
    : set_clause (COMMA set_clause)*
    ;

set_clause
    : insert_column_item EQUAL a_expr_qual
    | OPEN_PAREN insert_column_list CLOSE_PAREN EQUAL (
        KW_ROW? a_expr_qual
        | OPEN_PAREN select_clause CLOSE_PAREN
    )
    ;

declarecursorstmt
    : KW_DECLARE colid cursor_options KW_CURSOR opt_hold? KW_FOR selectstmt
    ;

cursor_options
    : (KW_NO KW_SCROLL | KW_SCROLL | KW_BINARY | KW_INSENSITIVE)*
    ;

opt_hold
    : (KW_WITH | KW_WITHOUT) KW_HOLD
    ;

/*
 TODO: why select_with_parens alternative is needed at all? i guess it because original byson
 grammar can choose selectstmt(2)->select_with_parens on only OPEN_PARENT/SELECT kewords at the
 begining of statement; (select * from tab); parse can go through selectstmt(
 )->select_no_parens(1)->select_clause(2)->select_with_parens(1)->select_no_parens(1)->select_clause(1)->simple_select
 instead of
 selectstmt(1)->select_no_parens(1)->select_clause(2)->select_with_parens(1)->select_no_parens(1)->select_clause(1)->simple_select
 all standard tests passed on both variants
 */

selectstmt
    : select_no_parens   # selectStatement
    | select_with_parens # selectStatement
    ;

select_with_parens
    : OPEN_PAREN (select_no_parens | select_with_parens) CLOSE_PAREN
    ;

select_no_parens
    : with_clause? select_clause sort_clause? (
        for_locking_clause select_limit?
        | select_limit for_locking_clause?
    )?
    ;

select_clause
    : simple_select
    | select_with_parens
    ;

simple_select
    : (
        KW_SELECT (KW_ALL? into_clause? target_list? | distinct_clause? target_list?) into_clause? from_clause? where_clause? group_clause?
            having_clause? window_clause?
        | values_clause
        | KW_TABLE relation_expr
        | select_with_parens set_operator_with_all_or_distinct (simple_select | select_with_parens)
    ) (set_operator_with_all_or_distinct ( simple_select | select_with_parens))*
    ;

set_operator
    : KW_UNION     # union
    | KW_INTERSECT # intersect
    | KW_EXCEPT    # except
    ;

set_operator_with_all_or_distinct
    : set_operator all_or_distinct?
    ;

with_clause
    : KW_WITH KW_RECURSIVE? cte_list
    ;

cte_list
    : common_table_expr (COMMA common_table_expr)*
    ;

common_table_expr
    : colid opt_column_list? KW_AS opt_materialized? OPEN_PAREN preparablestmt CLOSE_PAREN search_cluase? cycle_cluase?
    ;

search_cluase
    : KW_SEARCH (KW_BREADTH | KW_DEPTH) KW_FIRST KW_BY column_list KW_SET column_name
    ;

cycle_cluase
    : KW_CYCLE column_list KW_SET column_name (KW_TO colid KW_DEFAULT colid)? KW_USING column_name
    ;

opt_materialized
    : KW_NOT? KW_MATERIALIZED
    ;

into_clause
    : KW_INTO (KW_STRICT? opttempTableName | expr_list)
    ;

opttempTableName
    : (KW_LOCAL | KW_GLOBAL)? (KW_TEMPORARY | KW_TEMP) KW_TABLE? table_name_create
    | KW_UNLOGGED KW_TABLE? table_name_create
    | KW_TABLE? table_name_create
    ;

all_or_distinct
    : KW_ALL
    | KW_DISTINCT
    ;

distinct_clause
    : KW_DISTINCT (KW_ON execute_param_clause)?
    ;

sort_clause
    : KW_ORDER KW_BY sortby_list
    ;

sortby_list
    : sortby (COMMA sortby)*
    ;

sortby
    : column_expr_noparen (KW_USING qual_all_op | opt_asc_desc)? opt_nulls_order?
    ;

select_limit
    : // https://www.postgresql.org/docs/16/sql-select.html#SQL-LIMIT
    offset_clause fetch_clause?
    | (limit_clause | fetch_clause) offset_clause?
    ;

limit_clause
    : KW_LIMIT select_limit_value (COMMA a_expr_qual)?
    ;

fetch_clause
    : KW_FETCH first_or_next (
        select_fetch_first_value row_or_rows (KW_ONLY | KW_WITH KW_TIES)
        | row_or_rows (KW_ONLY | KW_WITH KW_TIES)
    )
    ;

offset_clause
    : KW_OFFSET (select_fetch_first_value row_or_rows | a_expr_qual)
    ;

select_limit_value
    : a_expr_qual
    | KW_ALL
    ;

select_fetch_first_value
    : (PLUS | MINUS) i_or_f_const
    | c_expr
    ;

i_or_f_const
    : Integral
    | Numeric
    ;

row_or_rows
    : KW_ROW
    | KW_ROWS
    ;

first_or_next
    : KW_FIRST
    | KW_NEXT
    ;

group_clause
    : KW_GROUP KW_BY (all_or_distinct)? group_by_list
    ;

group_by_list
    : group_by_item (COMMA group_by_item)*
    ;

group_by_item
    : column_expr_noparen
    | empty_grouping_set
    | cube_clause
    | rollup_clause
    | grouping_sets_clause
    | OPEN_PAREN column_expr_list_noparen CLOSE_PAREN
    ;

empty_grouping_set
    : OPEN_PAREN CLOSE_PAREN
    ;

rollup_clause
    : KW_ROLLUP OPEN_PAREN column_expr_list_noparen CLOSE_PAREN
    ;

cube_clause
    : KW_CUBE OPEN_PAREN column_expr_list_noparen CLOSE_PAREN
    ;

grouping_sets_clause
    : KW_GROUPING KW_SETS OPEN_PAREN group_by_list CLOSE_PAREN
    ;

having_clause
    : KW_HAVING a_expr_qual
    ;

for_locking_clause
    : for_locking_items
    | KW_FOR KW_READ KW_ONLY
    ;

for_locking_items
    : for_locking_item+
    ;

for_locking_item
    : for_locking_strength locked_rels_list? opt_nowait_or_skip?
    ;

for_locking_strength
    : KW_FOR ((KW_NO KW_KEY)? KW_UPDATE | KW_KEY? KW_SHARE)
    ;

locked_rels_list
    : KW_OF qualified_name_list
    ;

values_clause
    : KW_VALUES execute_param_clause (COMMA execute_param_clause)*
    ;

from_clause
    : KW_FROM from_list
    ;

from_list
    : table_ref (COMMA table_ref)*
    ;

table_ref
    : (
        (relation_expr | view_relation_expr) alias_clause? tablesample_clause?
        | func_table func_alias_clause?
        | xmltable alias_clause?
        | select_with_parens alias_clause?
        | KW_LATERAL (
            xmltable alias_clause?
            | func_table func_alias_clause?
            | select_with_parens alias_clause?
        )
        | OPEN_PAREN table_ref (
            KW_CROSS KW_JOIN table_ref
            | KW_NATURAL join_type? KW_JOIN table_ref
            | join_type? KW_JOIN table_ref join_qual
        )? CLOSE_PAREN alias_clause?
    ) (
        KW_CROSS KW_JOIN table_ref
        | KW_NATURAL join_type? KW_JOIN table_ref
        | join_type? KW_JOIN table_ref join_qual
    )*
    ;

alias_clause
    : KW_AS? colid (OPEN_PAREN name_list CLOSE_PAREN)?
    ;

func_alias_clause
    : alias_clause
    | (KW_AS colid? | colid) OPEN_PAREN tablefuncelementlist CLOSE_PAREN
    ;

join_type
    : (KW_FULL | KW_LEFT | KW_RIGHT | KW_INNER) KW_OUTER?
    ;

join_qual
    : KW_USING opt_column_list
    | KW_ON a_expr_qual
    ;

relation_expr
    : truncate_table
    | KW_ONLY ( table_name | OPEN_PAREN table_name CLOSE_PAREN)
    | KW_IN KW_SCHEMA (schema_name | KW_CURRENT_SCHEMA)
    ;

view_relation_expr
    : KW_ONLY? view_name STAR? column_list? where_clause?
    ;

publication_relation_expr
    : KW_TABLE truncate_table (opt_column_list)? where_clause?
    | KW_TABLE KW_ONLY ( table_name | OPEN_PAREN table_name CLOSE_PAREN)
    | KW_TABLES KW_IN KW_SCHEMA (schema_name | KW_CURRENT_SCHEMA)
    ;

relation_expr_list
    : relation_expr (COMMA relation_expr)*
    ;

publication_relation_expr_list
    : publication_relation_expr (COMMA publication_relation_expr)*
    ;

relation_expr_opt_alias
    : relation_expr (KW_AS? colid)?
    ;

tablesample_clause
    : KW_TABLESAMPLE function_name execute_param_clause opt_repeatable_clause?
    ;

opt_repeatable_clause
    : KW_REPEATABLE OPEN_PAREN a_expr_qual CLOSE_PAREN
    ;

func_table
    : func_expr_windowless opt_ordinality?
    | KW_ROWS KW_FROM OPEN_PAREN rowsfrom_list CLOSE_PAREN opt_ordinality?
    ;

rowsfrom_item
    : func_expr_windowless opt_col_def_list?
    ;

rowsfrom_list
    : rowsfrom_item (COMMA rowsfrom_item)*
    ;

opt_col_def_list
    : KW_AS OPEN_PAREN tablefuncelementlist CLOSE_PAREN
    ;

opt_ordinality
    : KW_WITH KW_ORDINALITY
    ;

where_clause
    : KW_WHERE column_expr_noparen
    ;

where_or_current_clause
    : KW_WHERE (KW_CURRENT KW_OF colid | a_expr_qual)
    ;

tablefuncelementlist
    : tablefuncelement (COMMA tablefuncelement)*
    ;

tablefuncelement
    : colid typename opt_collate_clause?
    ;

xmltable
    : KW_XMLTABLE OPEN_PAREN (
        (KW_XMLNAMESPACES OPEN_PAREN xml_namespace_list CLOSE_PAREN COMMA)? c_expr xmlexists_argument KW_COLUMNS xmltable_column_list
    ) CLOSE_PAREN
    ;

xmltable_column_list
    : xmltable_column_el (COMMA xmltable_column_el)*
    ;

xmltable_column_el
    : colid (typename xmltable_column_option_list? | KW_FOR KW_ORDINALITY)
    ;

xmltable_column_option_list
    : xmltable_column_option_el+
    ;

xmltable_column_option_el
    : (KW_DEFAULT | identifier) a_expr_qual
    | KW_NOT? KW_NULL
    ;

xml_namespace_list
    : xml_namespace_el (COMMA xml_namespace_el)*
    ;

xml_namespace_el
    : b_expr KW_AS collabel
    | KW_DEFAULT b_expr
    ;

typename
    : KW_SETOF? simpletypename (opt_array_bounds | KW_ARRAY (OPEN_BRACKET Integral CLOSE_BRACKET)?)
    | qualified_name PERCENT (KW_ROWTYPE | KW_TYPE)
    ;

opt_array_bounds
    : (OPEN_BRACKET Integral? CLOSE_BRACKET)*
    ;

simpletypename
    : generictype
    | numeric
    | bit
    | character
    | constdatetime
    | KW_INTERVAL ( opt_interval? | opt_float)
    ;

consttypename
    : numeric
    | bit
    | character
    | constdatetime
    ;

generictype
    : type_function_name attrs? execute_param_clause?
    ;

numeric
    : KW_INT
    | KW_INTEGER
    | KW_SMALLINT
    | KW_BIGINT
    | KW_REAL
    | KW_FLOAT opt_float?
    | KW_DOUBLE KW_PRECISION
    | (KW_DECIMAL | KW_DEC | KW_NUMERIC) execute_param_clause?
    | KW_BOOLEAN
    ;

opt_float
    : OPEN_PAREN Integral CLOSE_PAREN
    ;

bit
    : bitwithlength
    | bitwithoutlength
    ;

bitwithlength
    : bitwithoutlength execute_param_clause
    ;

bitwithoutlength
    : KW_BIT KW_VARYING?
    ;

character
    : character_c (opt_float)?
    ;

character_c
    : (KW_CHARACTER | KW_CHAR | KW_NCHAR) KW_VARYING?
    | KW_VARCHAR
    | KW_NATIONAL (KW_CHARACTER | KW_CHAR) KW_VARYING?
    ;

constdatetime
    : (KW_TIMESTAMP | KW_TIME) (opt_float)? opt_timezone?
    ;

opt_timezone
    : (KW_WITH | KW_WITHOUT) KW_TIME KW_ZONE
    ;

opt_interval
    : KW_MONTH
    | interval_second
    | KW_YEAR (KW_TO KW_MONTH)?
    | KW_DAY (KW_TO (KW_HOUR | KW_MINUTE | interval_second))?
    | KW_HOUR (KW_TO (KW_MINUTE | interval_second))?
    | KW_MINUTE (KW_TO interval_second)?
    ;

interval_second
    : KW_SECOND (opt_float)?
    ;

opt_escape
    : KW_ESCAPE a_expr_qual
    ;

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
 KW_FROM a_expr |OF OPEN_PAREN type_name_list CLOSE_PAREN |DOCUMENT_P |unicode_normal_form? NORMALIZED ) --
 12 | a_expr (ISNULL|NOTNULL) -- 13 | row OVERLAPS row -- 14 //NOT right logical negation | NOT
 a_expr -- 15 //AND left logical conjunction | a_expr AND a_expr -- 16 //OR left logical disjunction
 | a_expr OR a_expr -- 17 | a_expr (LESS_LESS|GREATER_GREATER) a_expr -- 18 | a_expr qual_op -- 19 |
 a_expr NOT? IN_P in_expr -- 20 | a_expr subquery_Op sub_type (select_with_parens|OPEN_PAREN a_expr
 CLOSE_PAREN) -- 21 | UNIQUE select_with_parens -- 22 | KW_DEFAULT -- 23 ;
 */

/*23*/

/*moved to c_expr*/

/*22*/

/*moved to c_expr*/

/*19*/

a_expr_qual
    : a_expr_lessless qual_op?
    ;

/*18*/

a_expr_lessless
    : a_expr_or ((LESS_LESS | GREATER_GREATER) a_expr_or)*
    ;

/*17*/

a_expr_or
    : a_expr_and (KW_OR a_expr_and)*
    ;

/*16*/

a_expr_and
    : a_expr_in (KW_AND a_expr_in)*
    ;

/*20*/

a_expr_in
    : a_expr_unary_not (KW_NOT? KW_IN in_expr)?
    ;

/*15*/

a_expr_unary_not
    : KW_NOT? a_expr_isnull
    ;

/*14*/

/*moved to c_expr*/

/*13*/

a_expr_isnull
    : a_expr_is_not (KW_ISNULL | KW_NOTNULL)?
    ;

/*12*/

a_expr_is_not
    : a_expr_compare (
        KW_IS KW_NOT? (
            KW_NULL
            | KW_TRUE
            | KW_FALSE
            | KW_UNKNOWN
            | KW_DISTINCT KW_FROM a_expr_qual
            | KW_OF prep_type_clause
            | KW_DOCUMENT
            | unicode_normal_form? KW_NORMALIZED
        )
    )?
    ;

/*11*/

a_expr_compare
    : a_expr_like (
        (LT | GT | EQUAL | LESS_EQUALS | GREATER_EQUALS | NOT_EQUALS) a_expr_like
        | subquery_Op sub_type (select_with_parens | OPEN_PAREN a_expr_qual CLOSE_PAREN) /*21*/
    )?
    ;

/*10*/

a_expr_like
    : a_expr_qual_op (
        KW_NOT? (KW_LIKE | KW_ILIKE | KW_SIMILAR KW_TO | KW_BETWEEN KW_SYMMETRIC?) a_expr_qual_op opt_escape?
    )?
    ;

/* 8*/

a_expr_qual_op
    : a_expr_unary_qualop (qual_op a_expr_unary_qualop)*
    ;

/* 9*/

a_expr_unary_qualop
    : qual_op? a_expr_add
    ;

/* 7*/

a_expr_add
    : a_expr_mul ((MINUS | PLUS) a_expr_mul)*
    ;

/* 6*/

a_expr_mul
    : a_expr_caret ((STAR | SLASH | PERCENT) a_expr_caret)*
    ;

/* 5*/

a_expr_caret
    : a_expr_unary_sign (CARET a_expr_qual)?
    ;

/* 4*/

a_expr_unary_sign
    : (MINUS | PLUS)? a_expr_at_time_zone /* */
    ;

/* 3*/

a_expr_at_time_zone
    : a_expr_collate (KW_AT KW_TIME KW_ZONE a_expr_qual)?
    ;

/* 2*/

a_expr_collate
    : a_expr_typecast (opt_collate_clause)?
    ;

/* 1*/

a_expr_typecast
    : c_expr (TYPECAST typename)*
    ;

b_expr
    : c_expr
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
    | b_expr ( LT | GT | EQUAL | LESS_EQUALS | GREATER_EQUALS | NOT_EQUALS) b_expr
    | qual_op b_expr
    | b_expr qual_op
    //S ISNULL NOTNULL	 	IS TRUE, IS FALSE, IS NULL, IS KW_DISTINCT FROM, etc
    | b_expr KW_IS KW_NOT? (KW_DISTINCT KW_FROM b_expr | KW_OF prep_type_clause | KW_DOCUMENT)
    ;

c_expr
    : (KW_EXISTS | KW_UNIQUE) select_with_parens                           # c_expr_exists
    | KW_ARRAY (select_with_parens | array_expr)                           # c_expr_expr
    | PARAM opt_indirection                                                # c_expr_expr
    | KW_GROUPING execute_param_clause                                     # c_expr_expr
    | aexprconst                                                           # c_expr_expr
    | PLSQLVARIABLENAME                                                    # c_expr_expr
    | OPEN_PAREN a_expr_in_parens= a_expr_qual CLOSE_PAREN opt_indirection # c_expr_expr
    | case_expr                                                            # c_expr_case
    | func_expr                                                            # c_expr_expr
    | select_with_parens indirection?                                      # c_expr_expr
    | explicit_row                                                         # c_expr_expr
    | implicit_row                                                         # c_expr_expr
    | row KW_OVERLAPS row /* 14*/                                          # c_expr_expr
    | qualified_name                                                       # c_expr_expr
    ;

func_application
    : function_name (
        OPEN_PAREN (
            func_arg_list (COMMA KW_VARIADIC func_arg_expr)? sort_clause?
            | KW_VARIADIC func_arg_expr sort_clause?
            | (KW_ALL | KW_DISTINCT) func_arg_list sort_clause?
            | STAR
            |
        ) CLOSE_PAREN
    )?
    ;

func_expr
    : func_application within_group_clause? filter_clause? over_clause?
    | func_expr_common_subexpr
    ;

func_expr_windowless
    : func_application
    | func_expr_common_subexpr
    ;

func_expr_common_subexpr
    : KW_COLLATION KW_FOR OPEN_PAREN a_expr_qual CLOSE_PAREN
    | KW_CURRENT_DATE
    | (KW_CURRENT_TIME | KW_CURRENT_TIMESTAMP | KW_LOCALTIME | KW_LOCALTIMESTAMP) (opt_float)?
    | KW_CURRENT_ROLE
    | KW_CURRENT_USER
    | KW_SESSION_USER
    | KW_USER
    | KW_CURRENT_CATALOG
    | KW_CURRENT_SCHEMA
    | KW_CAST OPEN_PAREN a_expr_qual KW_AS typename CLOSE_PAREN
    | KW_EXTRACT OPEN_PAREN extract_list? CLOSE_PAREN
    | KW_NORMALIZE OPEN_PAREN a_expr_qual (COMMA unicode_normal_form)? CLOSE_PAREN
    | KW_OVERLAY OPEN_PAREN overlay_list CLOSE_PAREN
    | KW_POSITION OPEN_PAREN position_list? CLOSE_PAREN
    | KW_SUBSTRING OPEN_PAREN substr_list? CLOSE_PAREN
    | KW_TREAT OPEN_PAREN a_expr_qual KW_AS typename CLOSE_PAREN
    | KW_TRIM OPEN_PAREN (KW_BOTH | KW_LEADING | KW_TRAILING)? trim_list CLOSE_PAREN
    | KW_NULLIF OPEN_PAREN a_expr_qual COMMA a_expr_qual CLOSE_PAREN
    | (KW_COALESCE | KW_GREATEST | KW_LEAST | KW_XMLCONCAT) execute_param_clause
    | KW_XMLELEMENT OPEN_PAREN KW_NAME collabel (COMMA (xml_attributes | expr_list))? CLOSE_PAREN
    | KW_XMLEXISTS OPEN_PAREN c_expr xmlexists_argument CLOSE_PAREN
    | KW_XMLFOREST OPEN_PAREN xml_attribute_list CLOSE_PAREN
    | KW_XMLPARSE OPEN_PAREN document_or_content a_expr_qual xml_whitespace_option? CLOSE_PAREN
    | KW_XMLPI OPEN_PAREN KW_NAME collabel (COMMA a_expr_qual)? CLOSE_PAREN
    | KW_XMLROOT OPEN_PAREN KW_XML a_expr_qual COMMA xml_root_version opt_xml_root_standalone? CLOSE_PAREN
    | KW_XMLSERIALIZE OPEN_PAREN document_or_content a_expr_qual KW_AS simpletypename CLOSE_PAREN
    ;

xml_root_version
    : KW_VERSION (( KW_NO KW_VALUE) | a_expr_qual)
    ;

opt_xml_root_standalone
    : COMMA KW_STANDALONE ((KW_NO? KW_VALUE) | KW_YES)
    ;

xml_attributes
    : KW_XMLATTRIBUTES OPEN_PAREN xml_attribute_list CLOSE_PAREN
    ;

xml_attribute_list
    : xml_attribute_el (COMMA xml_attribute_el)*
    ;

xml_attribute_el
    : a_expr_qual (KW_AS collabel)?
    ;

document_or_content
    : KW_DOCUMENT
    | KW_CONTENT
    ;

xml_whitespace_option
    : (KW_PRESERVE | KW_STRIP) KW_WHITESPACE
    ;

xmlexists_argument
    : KW_PASSING xml_passing_mech? c_expr xml_passing_mech?
    ;

xml_passing_mech
    : KW_BY (KW_REF | KW_VALUE)
    ;

within_group_clause
    : KW_WITHIN KW_GROUP OPEN_PAREN sort_clause CLOSE_PAREN
    ;

filter_clause
    : KW_FILTER OPEN_PAREN KW_WHERE a_expr_qual CLOSE_PAREN
    ;

window_clause
    : KW_WINDOW window_definition_list
    ;

window_definition_list
    : window_definition (COMMA window_definition)*
    ;

window_definition
    : colid KW_AS window_specification
    ;

over_clause
    : KW_OVER (window_specification | colid)
    ;

window_specification
    : OPEN_PAREN colid? opt_partition_clause? sort_clause? opt_frame_clause? CLOSE_PAREN
    ;

opt_partition_clause
    : KW_PARTITION KW_BY expr_list
    ;

opt_frame_clause
    : (KW_RANGE | KW_ROWS | KW_GROUPS) frame_extent opt_window_exclusion_clause?
    ;

frame_extent
    : (KW_BETWEEN frame_bound KW_AND)? frame_bound
    ;

frame_bound
    : (KW_UNBOUNDED | a_expr_qual) (KW_PRECEDING | KW_FOLLOWING)
    | KW_CURRENT KW_ROW
    ;

opt_window_exclusion_clause
    : KW_EXCLUDE (KW_CURRENT KW_ROW | KW_GROUP | KW_TIES | KW_NO KW_OTHERS)
    ;

row
    : explicit_row
    | OPEN_PAREN expr_list COMMA a_expr_qual CLOSE_PAREN
    ;

explicit_row
    : KW_ROW OPEN_PAREN expr_list? CLOSE_PAREN
    ;

implicit_row
    : OPEN_PAREN a_expr_qual COMMA expr_list CLOSE_PAREN
    ;

sub_type
    : KW_ANY
    | KW_SOME
    | KW_ALL
    ;

all_op
    : Operator
    | mathop
    ;

mathop
    : PLUS
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
    | NOT_EQUALS
    ;

qual_op
    : Operator
    | KW_OPERATOR OPEN_PAREN any_operator CLOSE_PAREN
    ;

qual_all_op
    : all_op
    | KW_OPERATOR OPEN_PAREN any_operator CLOSE_PAREN
    ;

subquery_Op
    : qual_all_op
    | KW_NOT? KW_LIKE
    | KW_NOT? KW_ILIKE
    ;

expr_list
    : a_expr_qual (COMMA a_expr_qual)*
    ;

column_expr_list_noparen
    : column_expr_noparen (COMMA column_expr_noparen)*
    ;

column_expr_list
    : column_expr (COMMA column_expr)*
    ;

column_expr
    : (OPEN_PAREN a_expr_qual CLOSE_PAREN)
    | column_name
    ;

column_expr_noparen
    : a_expr_qual
    | column_name
    ;

func_arg_list
    : func_arg_expr (COMMA func_arg_expr)*
    ;

func_arg_expr
    : a_expr_qual
    | type_function_name (COLON_EQUALS | EQUALS_GREATER) a_expr_qual
    ;

array_expr
    : OPEN_BRACKET (expr_list | array_expr_list)? CLOSE_BRACKET
    ;

array_expr_list
    : array_expr (COMMA array_expr)*
    ;

extract_list
    : extract_arg KW_FROM a_expr_qual
    ;

extract_arg
    : identifier
    | KW_YEAR
    | KW_MONTH
    | KW_DAY
    | KW_HOUR
    | KW_MINUTE
    | KW_SECOND
    | sconst
    ;

unicode_normal_form
    : KW_NFC
    | KW_NFD
    | KW_NFKC
    | KW_NFKD
    ;

overlay_list
    : a_expr_qual KW_PLACING a_expr_qual KW_FROM a_expr_qual (KW_FOR a_expr_qual)?
    ;

position_list
    : b_expr KW_IN b_expr
    ;

substr_list
    : a_expr_qual KW_FROM a_expr_qual (KW_FOR a_expr_qual)?
    | a_expr_qual KW_FOR a_expr_qual (KW_FROM a_expr_qual)?
    | a_expr_qual KW_SIMILAR a_expr_qual KW_ESCAPE a_expr_qual
    | expr_list
    ;

trim_list
    : (a_expr_qual? KW_FROM)? expr_list
    ;

in_expr
    : select_with_parens   # in_expr_select
    | execute_param_clause # in_expr_list
    ;

case_expr
    : KW_CASE a_expr_qual? when_clause_list case_default? KW_END
    ;

when_clause_list
    : when_clause+
    ;

when_clause
    : KW_WHEN a_expr_qual KW_THEN a_expr_qual
    ;

case_default
    : KW_ELSE a_expr_qual
    ;

indirection_el
    : DOT (collabel | STAR)
    | OPEN_BRACKET (a_expr_qual | a_expr_qual? COLON a_expr_qual?) CLOSE_BRACKET
    ;

indirection
    : indirection_el+
    ;

opt_indirection
    : indirection_el*
    ;

target_list
    : target_el (COMMA target_el)*
    ;

target_el
    : column_expr_noparen (KW_AS collabel | identifier |) # target_label
    | STAR                                                # target_star
    ;

qualified_name_list
    : qualified_name (COMMA qualified_name)*
    ;

table_name_list
    : table_name (COMMA table_name)*
    ;

schema_name_list
    : schema_name (COMMA schema_name)*
    ;

database_nameList
    : database_name (COMMA database_name)*
    ;

procedure_name_list
    : procedure_name (COMMA procedure_name)*
    ;

tablespace_name_create
    : qualified_name # tablespaceNameCreate
    ;

tablespace_name
    : qualified_name # tablespaceName
    ;

table_name_create
    : qualified_name # tableNameCreate
    ;

table_name
    : qualified_name # tableName
    ;

view_name_create
    : qualified_name # viewNameCreate
    ;

view_name
    : any_name # viewName
    ;

qualified_name
    : colid indirection?
    ;

tablespace_name_list
    : tablespace_name (COMMA tablespace_name)*
    ;

name_list
    : colid (COMMA colid)*
    ;

database_name_create
    : any_name # databaseNameCreate
    ;

database_name
    : any_name # databaseName
    ;

schema_name
    : any_name # schemaName
    ;

routine_name_create
    : colid # routineNameCreate
    ;

routine_name
    : colid # routineName
    ;

procedure_name
    : type_function_name # procedureName
    | colid indirection  # procedureName
    ;

procedure_name_create
    : type_function_name # procedureNameCreate
    | colid indirection  # procedureNameCreate
    ;

column_name
    : colid opt_indirection      # columnName
    | {this.shouldMatchEmpty()}? # columnNameMatch
    ;

column_name_create
    : colid # columnNameCreate
    ;

function_name_create
    : type_function_name # functionNameCreate
    | colid indirection  # functionNameCreate
    ;

function_name
    : type_function_name # functionName
    | colid indirection  # functionName
    ;

usual_name
    : type_function_name
    | colid indirection
    ;

aexprconst
    : Integral
    | Numeric
    | sconst
    | BinaryStringConstant
    | HexadecimalStringConstant
    | function_name (sconst | OPEN_PAREN func_arg_list sort_clause? CLOSE_PAREN sconst)
    | consttypename sconst
    | KW_INTERVAL ( sconst opt_interval? | opt_float sconst)
    | KW_TRUE
    | KW_FALSE
    | KW_NULL
    ;

sconst
    : anysconst opt_uescape?
    ;

anysconst
    : StringConstant
    | UnicodeEscapeStringConstant
    | BeginDollarStringConstant DollarText* EndDollarStringConstant
    | EscapeStringConstant
    ;

opt_uescape
    : KW_UESCAPE anysconst
    ;

signediconst
    : (PLUS | MINUS)? Integral
    ;

rolespec
    : nonreservedword
    | KW_CURRENT_USER
    | KW_CURRENT_ROLE
    | KW_SESSION_USER
    | KW_PUBLIC
    ;

role_list
    : rolespec (COMMA rolespec)*
    ;

colid
    : identifier
    | unreserved_keyword
    | col_name_keyword
    | plsql_unreserved_keyword
    ;

exclude_element
    : opt_definition
    | (OPEN_PAREN a_expr_qual CLOSE_PAREN) identifier opt_asc_desc? opt_nulls_order?
    ;

index_paramenters
    : (KW_WITH reloptions)? optconstablespace?
    ;

type_function_name
    : identifier
    | unreserved_keyword
    | plsql_unreserved_keyword
    | type_func_name_keyword
    ;

nonreservedword_column
    : column_name
    | type_func_name_keyword
    ;

nonreservedword
    : identifier
    | unreserved_keyword
    | col_name_keyword
    | type_func_name_keyword
    ;

collabel
    : nonreservedword
    | plsql_unreserved_keyword
    | reserved_keyword
    ;

identifier
    : Identifier opt_uescape?
    | sconst
    | QuotedIdentifier
    | UnicodeQuotedIdentifier
    | PLSQLVARIABLENAME
    | PLSQLIDENTIFIER
    | plsql_unreserved_keyword
    ;

unreserved_keyword
    : KW_ABORT
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
    | KW_BUFFER_USAGE_LIMIT
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
    | KW_SKIP_LOCKED
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
    | KW_ZONE
    ;

col_name_keyword
    : KW_BETWEEN
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
    | KW_XMLTABLE
    ;

type_func_name_keyword
    : KW_AUTHORIZATION
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
    | KW_VERBOSE
    ;

reserved_keyword
    : KW_ALL
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
    | KW_WITH
    ;

/************************************************************************************************************************************************************/
/*PL/SQL GRAMMAR */

/*PLSQL grammar */

/************************************************************************************************************************************************************/
pl_function
    : comp_options pl_block SEMI?
    ;

comp_options
    : comp_option*
    ;

comp_option
    : Operator KW_OPTION KW_DUMP
    | Operator KW_PRINT_STRICT_PARAMS option_value
    | Operator KW_VARIABLE_CONFLICT (KW_ERROR | KW_USE_VARIABLE | KW_USE_COLUMN)
    ;

option_value
    : sconst
    | reserved_keyword
    | plsql_unreserved_keyword
    | unreserved_keyword
    ;

// exception_sect means opt_exception_sect in original grammar, don't be confused!

pl_block
    : decl_sect KW_BEGIN proc_sect exception_sect? KW_END any_identifier?
    ;

decl_sect
    : label_decl? (KW_DECLARE decl_stmts?)?
    ;

decl_stmts
    : decl_stmt+
    ;

label_decl
    : LESS_LESS any_identifier GREATER_GREATER
    ;

decl_stmt
    : decl_statement
    | KW_DECLARE
    | label_decl
    ;

decl_statement
    : any_identifier (
        KW_ALIAS KW_FOR decl_aliasitem
        | KW_CONSTANT? typename (opt_collate_clause)? (KW_NOT KW_NULL)? (
            decl_defkey sql_expression
        )?
        | opt_scrollable? KW_CURSOR decl_cursor_args? decl_is_for selectstmt
    ) SEMI
    ;

opt_scrollable
    : KW_NO? KW_SCROLL
    ;

decl_cursor_args
    : OPEN_PAREN decl_cursor_arglist CLOSE_PAREN
    ;

decl_cursor_arglist
    : decl_cursor_arg (COMMA decl_cursor_arg)*
    ;

decl_cursor_arg
    : any_identifier typename
    ;

decl_is_for
    : KW_IS
    | KW_FOR
    ;

decl_aliasitem
    : PARAM
    | colid
    ;

decl_defkey
    : assign_operator
    | KW_DEFAULT
    ;

assign_operator
    : EQUAL
    | COLON_EQUALS
    ;

proc_sect
    : proc_stmt*
    ;

proc_stmt
    : pl_block SEMI
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
    | stmt_set
    ;

stmt_perform
    : KW_PERFORM sql_expression SEMI
    ;

stmt_call
    : KW_CALL any_identifier (OPEN_PAREN expr_list? CLOSE_PAREN SEMI)?
    | KW_DO any_identifier OPEN_PAREN expr_list? CLOSE_PAREN SEMI
    ;

stmt_assign
    : assign_var assign_operator sql_expression SEMI
    ;

stmt_getdiag
    : KW_GET getdiag_area_opt? KW_DIAGNOSTICS getdiag_list SEMI
    ;

getdiag_area_opt
    : KW_CURRENT
    | KW_STACKED
    ;

getdiag_list
    : getdiag_list_item (COMMA getdiag_list_item)*
    ;

getdiag_list_item
    : assign_var assign_operator colid
    ;

assign_var
    : (any_name | PARAM) (OPEN_BRACKET a_expr_qual CLOSE_BRACKET)*
    ;

stmt_if
    : KW_IF sql_expression KW_THEN proc_sect stmt_elsifs stmt_else? KW_END KW_IF SEMI
    ;

stmt_elsifs
    : (KW_ELSIF a_expr_qual KW_THEN proc_sect)*
    ;

stmt_else
    : KW_ELSE proc_sect
    ;

stmt_case
    : KW_CASE sql_expression? case_when_list stmt_else? KW_END KW_CASE SEMI
    ;

case_when_list
    : case_when+
    ;

case_when
    : KW_WHEN expr_list KW_THEN proc_sect
    ;

stmt_loop
    : label_decl? loop_body
    ;

stmt_while
    : label_decl? KW_WHILE a_expr_qual loop_body
    ;

stmt_for
    : label_decl? KW_FOR for_control loop_body
    ;

//TODO: rewrite using read_sql_expression logic?

for_control
    : any_name_list KW_IN (
        colid execute_param_clause?
        | selectstmt
        | explainstmt
        | KW_EXECUTE a_expr_qual opt_for_using_expression?
        | KW_REVERSE? a_expr_qual DOT_DOT a_expr_qual opt_by_expression?
    )
    ;

opt_for_using_expression
    : KW_USING expr_list
    ;

opt_by_expression
    : KW_BY a_expr_qual
    ;

stmt_foreach_a
    : label_decl? KW_FOREACH any_name_list foreach_slice? KW_IN KW_ARRAY a_expr_qual loop_body
    ;

foreach_slice
    : KW_SLICE Integral
    ;

stmt_exit
    : exit_type any_identifier? opt_exitcond? SEMI
    ;

exit_type
    : KW_EXIT
    | KW_CONTINUE
    ;

//todo implement RETURN statement according to initial grammar line 1754

stmt_return
    : KW_RETURN (
        KW_NEXT sql_expression
        | KW_QUERY ( KW_EXECUTE a_expr_qual opt_for_using_expression | selectstmt)
        | sql_expression?
    ) SEMI
    ;

//https://www.postgresql.org/docs/current/plpgsql-errors-and-messages.html

//RAISE [ level ] 'format' [, expression [, ... ]] [ USING option = expression [, ... ] ];

//RAISE [ level ] condition_name [ USING option = expression [, ... ] ];

//RAISE [ level ] SQLSTATE 'sqlstate' [ USING option = expression [, ... ] ];

//RAISE [ level ] USING option = expression [, ... ];

//RAISE ;

stmt_raise
    : KW_RAISE (
        opt_stmt_raise_level? (identifier | (KW_SQLSTATE sconst) | (sconst opt_raise_list?))? opt_raise_using? SEMI
    )?
    ;

opt_stmt_raise_level
    : KW_DEBUG
    | KW_LOG
    | KW_INFO
    | KW_NOTICE
    | KW_WARNING
    | KW_EXCEPTION
    ;

opt_raise_list
    : (COMMA a_expr_qual)+
    ;

opt_raise_using
    : KW_USING opt_raise_using_elem_list
    ;

opt_raise_using_elem
    : identifier EQUAL a_expr_qual
    ;

opt_raise_using_elem_list
    : opt_raise_using_elem (COMMA opt_raise_using_elem)*
    ;

//todo imnplement

stmt_assert
    : KW_ASSERT sql_expression opt_stmt_assert_message? SEMI
    ;

opt_stmt_assert_message
    : COMMA sql_expression
    ;

loop_body
    : KW_LOOP proc_sect KW_END KW_LOOP any_identifier? SEMI
    ;

//TODO: looks like all other statements like INSERT/SELECT/UPDATE/DELETE are handled here;

//pls take a look at original grammar

stmt_execsql
    : make_execsql_stmt SEMI
    /*K_IMPORT
	 | K_INSERT | t_word | t_cword
	 */
    ;

//https://www.postgresql.org/docs/current/plpgsql-statements.html#PLPGSQL-STATEMENTS-SQL-NORESULT

//EXECUTE command-string [ INTO [STRICT] target ] [ USING expression [, ... ] ];

stmt_dynexecute
    : KW_EXECUTE a_expr_qual (
        /*this is silly, but i have to time to find nice way to code */ opt_execute_into? opt_for_using_expression?
        | opt_for_using_expression? opt_execute_into?
        |
    ) SEMI
    ;

opt_execute_into
    : KW_INTO KW_STRICT? expr_list
    ;

//https://www.postgresql.org/docs/current/plpgsql-cursors.html#PLPGSQL-CURSOR-OPENING

//OPEN unbound_cursorvar [ [ NO ] SCROLL ] KW_FOR query;

//OPEN unbound_cursorvar [ [ NO ] SCROLL ] KW_FOR EXECUTE query_string

//                                     [ USING expression [, ... ] ];

//OPEN bound_cursorvar [ ( [ argument_name := ] argument_value [, ...] ) ];

stmt_open
    : KW_OPEN (
        cursor_variable opt_scrollable? KW_FOR (
            selectstmt
            | KW_EXECUTE sql_expression opt_for_using_expression?
        )
        | colid (OPEN_PAREN opt_open_bound_list CLOSE_PAREN)?
    ) SEMI
    ;

opt_open_bound_list_item
    : (colid COLON_EQUALS)? a_expr_qual
    ;

opt_open_bound_list
    : opt_open_bound_list_item (COMMA opt_open_bound_list_item)*
    ;

//https://www.postgresql.org/docs/current/plpgsql-cursors.html#PLPGSQL-CURSOR-OPENING

//FETCH [ direction { KW_FROM | IN } ] cursor INTO target;

stmt_fetch
    : KW_FETCH direction= opt_fetch_direction? from_in? cursor_variable KW_INTO expr_list SEMI
    ;

opt_fetch_direction
    : KW_NEXT
    | KW_PRIOR
    | KW_FIRST
    | KW_LAST
    | (KW_ABSOLUTE | KW_RELATIVE)? a_expr_qual
    | KW_ALL
    | (KW_FORWARD | KW_BACKWARD) (a_expr_qual | KW_ALL)?
    ;

//https://www.postgresql.org/docs/current/plpgsql-cursors.html#PLPGSQL-CURSOR-OPENING

//MOVE [ direction { KW_FROM | IN } ] cursor;

stmt_move
    : KW_MOVE opt_fetch_direction? cursor_variable SEMI
    ;

mergestmt
    : with_clause? KW_MERGE KW_INTO (KW_ONLY)? table_name (STAR)? (KW_AS? colid)? KW_USING data_source KW_ON a_expr_qual merge_when_clause+
    ;

data_source
    : ((KW_ONLY)? table_name (STAR)? | ( select_no_parens | values_clause)) (KW_AS? colid)?
    ;

merge_when_clause
    : KW_WHEN KW_MATCHED (KW_AND a_expr_qual)? KW_THEN (
        merge_update
        | KW_DELETE
        | KW_DO KW_NOTHING
    )
    | KW_WHEN KW_NOT KW_MATCHED (KW_AND a_expr_qual)? KW_THEN (merge_insert | KW_DO KW_NOTHING)
    ;

merge_insert
    : KW_INSERT (opt_column_list)? (KW_OVERRIDING (KW_SYSTEM | KW_USER) KW_VALUE)? default_values_or_values
    ;

merge_update
    : KW_UPDATE KW_SET (
        column_name EQUAL exprofdefault
        | opt_column_list EQUAL OPEN_PAREN exprofdefaultlist CLOSE_PAREN
    )+
    ;

default_values_or_values
    : KW_VALUES exprofdefaultlist
    | KW_DEFAULT KW_VALUES
    ;

exprofdefaultlist
    : OPEN_PAREN exprofdefault (COMMA exprofdefault)* CLOSE_PAREN
    ;

exprofdefault
    : sortby
    | KW_DEFAULT
    ;

stmt_close
    : KW_CLOSE cursor_variable SEMI
    ;

stmt_null
    : KW_NULL SEMI
    ;

stmt_commit
    : KW_COMMIT plsql_opt_transaction_chain? SEMI
    ;

stmt_rollback
    : KW_ROLLBACK plsql_opt_transaction_chain? SEMI
    ;

plsql_opt_transaction_chain
    : KW_AND KW_NO? KW_CHAIN
    ;

stmt_set
    : KW_SET any_name KW_TO KW_DEFAULT SEMI
    | KW_RESET (any_name | KW_ALL) SEMI
    ;

cursor_variable
    : colid
    | PARAM
    ;

exception_sect
    : KW_EXCEPTION proc_exceptions
    ;

proc_exceptions
    : proc_exception+
    ;

proc_exception
    : KW_WHEN proc_conditions KW_THEN proc_sect
    ;

proc_conditions
    : proc_condition (KW_OR proc_condition)*
    ;

proc_condition
    : any_identifier
    | KW_SQLSTATE sconst
    ;

//sql_expression:

//;

//a_expr_qual:

//;

//a_expr_qual:

//;

opt_exitcond
    : KW_WHEN sql_expression
    ;

any_identifier
    : colid
    | plsql_unreserved_keyword
    ;

plsql_unreserved_keyword
    : KW_ABSOLUTE
    | KW_ALIAS
    | KW_AND
    | KW_ARRAY
    | KW_ASSERT
    | KW_BACKWARD
    | KW_CALL
    | KW_CHAIN
    | KW_CLOSE
    | KW_COLLATE
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
    //| TABLE_NAME
    | KW_TYPE
    | KW_USE_COLUMN
    | KW_USE_VARIABLE
    | KW_VARIABLE_CONFLICT
    | KW_WARNING
    | KW_OUTER
    ;

sql_expression
    : target_list? into_clause? from_clause? where_clause? group_clause? having_clause? window_clause?
    ;

make_execsql_stmt
    : stmt opt_returning_clause_into?
    ;

opt_returning_clause_into
    : KW_INTO KW_STRICT? expr_list
    ;