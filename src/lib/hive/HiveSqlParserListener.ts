// Generated from dt-sql-parser/src/grammar/hive/HiveSqlParser.g4 by ANTLR 4.13.1

// @ts-nocheck

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { SQLParserBase } from '../SQLParserBase';


import { ProgramContext } from "./HiveSqlParser.js";
import { StatementContext } from "./HiveSqlParser.js";
import { ExplainStatementContext } from "./HiveSqlParser.js";
import { ExplainOptionContext } from "./HiveSqlParser.js";
import { VectorizationOnlyContext } from "./HiveSqlParser.js";
import { VectorizatonDetailContext } from "./HiveSqlParser.js";
import { ExecStatementContext } from "./HiveSqlParser.js";
import { LoadStatementContext } from "./HiveSqlParser.js";
import { DropPartitionsIgnoreClauseContext } from "./HiveSqlParser.js";
import { ReplicationClauseContext } from "./HiveSqlParser.js";
import { ExportStatementContext } from "./HiveSqlParser.js";
import { ImportStatementContext } from "./HiveSqlParser.js";
import { ReplDumpStatementContext } from "./HiveSqlParser.js";
import { ReplDbPolicyContext } from "./HiveSqlParser.js";
import { ReplLoadStatementContext } from "./HiveSqlParser.js";
import { ReplConfigsContext } from "./HiveSqlParser.js";
import { ReplConfigsListContext } from "./HiveSqlParser.js";
import { ReplTableLevelPolicyContext } from "./HiveSqlParser.js";
import { ReplStatusStatementContext } from "./HiveSqlParser.js";
import { DdlStatementContext } from "./HiveSqlParser.js";
import { IfExistsContext } from "./HiveSqlParser.js";
import { RestrictOrCascadeContext } from "./HiveSqlParser.js";
import { IfNotExistsContext } from "./HiveSqlParser.js";
import { ForceContext } from "./HiveSqlParser.js";
import { RewriteEnabledContext } from "./HiveSqlParser.js";
import { RewriteDisabledContext } from "./HiveSqlParser.js";
import { StoredAsDirsContext } from "./HiveSqlParser.js";
import { OrReplaceContext } from "./HiveSqlParser.js";
import { CreateDatabaseStatementContext } from "./HiveSqlParser.js";
import { DbLocationContext } from "./HiveSqlParser.js";
import { DbManagedLocationContext } from "./HiveSqlParser.js";
import { DbPropertiesContext } from "./HiveSqlParser.js";
import { DbPropertiesListContext } from "./HiveSqlParser.js";
import { DbConnectorNameContext } from "./HiveSqlParser.js";
import { SwitchDatabaseStatementContext } from "./HiveSqlParser.js";
import { DropDatabaseStatementContext } from "./HiveSqlParser.js";
import { DatabaseCommentContext } from "./HiveSqlParser.js";
import { TruncateTableStatementContext } from "./HiveSqlParser.js";
import { DropTableStatementContext } from "./HiveSqlParser.js";
import { InputFileFormatContext } from "./HiveSqlParser.js";
import { TabTypeExprContext } from "./HiveSqlParser.js";
import { PartTypeExprContext } from "./HiveSqlParser.js";
import { TabPartColTypeExprContext } from "./HiveSqlParser.js";
import { DescStatementContext } from "./HiveSqlParser.js";
import { AnalyzeStatementContext } from "./HiveSqlParser.js";
import { From_inContext } from "./HiveSqlParser.js";
import { Db_schemaContext } from "./HiveSqlParser.js";
import { ShowStatementContext } from "./HiveSqlParser.js";
import { ShowTablesFilterExprContext } from "./HiveSqlParser.js";
import { LockStatementContext } from "./HiveSqlParser.js";
import { LockDatabaseContext } from "./HiveSqlParser.js";
import { LockModeContext } from "./HiveSqlParser.js";
import { UnlockStatementContext } from "./HiveSqlParser.js";
import { UnlockDatabaseContext } from "./HiveSqlParser.js";
import { CreateRoleStatementContext } from "./HiveSqlParser.js";
import { DropRoleStatementContext } from "./HiveSqlParser.js";
import { GrantPrivilegesContext } from "./HiveSqlParser.js";
import { RevokePrivilegesContext } from "./HiveSqlParser.js";
import { GrantRoleContext } from "./HiveSqlParser.js";
import { RevokeRoleContext } from "./HiveSqlParser.js";
import { ShowRoleGrantsContext } from "./HiveSqlParser.js";
import { ShowRolesContext } from "./HiveSqlParser.js";
import { ShowCurrentRoleContext } from "./HiveSqlParser.js";
import { SetRoleContext } from "./HiveSqlParser.js";
import { ShowGrantsContext } from "./HiveSqlParser.js";
import { ShowRolePrincipalsContext } from "./HiveSqlParser.js";
import { PrivilegeIncludeColObjectContext } from "./HiveSqlParser.js";
import { PrivilegeObjectContext } from "./HiveSqlParser.js";
import { PrivObjectContext } from "./HiveSqlParser.js";
import { PrivObjectColsContext } from "./HiveSqlParser.js";
import { PrivilegeListContext } from "./HiveSqlParser.js";
import { PrivlegeDefContext } from "./HiveSqlParser.js";
import { PrivilegeTypeContext } from "./HiveSqlParser.js";
import { PrincipalSpecificationContext } from "./HiveSqlParser.js";
import { PrincipalNameContext } from "./HiveSqlParser.js";
import { PrincipalAlterNameContext } from "./HiveSqlParser.js";
import { WithGrantOptionContext } from "./HiveSqlParser.js";
import { GrantOptionForContext } from "./HiveSqlParser.js";
import { AdminOptionForContext } from "./HiveSqlParser.js";
import { WithAdminOptionContext } from "./HiveSqlParser.js";
import { MetastoreCheckContext } from "./HiveSqlParser.js";
import { ResourceListContext } from "./HiveSqlParser.js";
import { ResourceContext } from "./HiveSqlParser.js";
import { ResourceTypeContext } from "./HiveSqlParser.js";
import { CreateFunctionStatementContext } from "./HiveSqlParser.js";
import { DropFunctionStatementContext } from "./HiveSqlParser.js";
import { ReloadFunctionsStatementContext } from "./HiveSqlParser.js";
import { CreateMacroStatementContext } from "./HiveSqlParser.js";
import { DropMacroStatementContext } from "./HiveSqlParser.js";
import { CreateIndexStatementContext } from "./HiveSqlParser.js";
import { DropIndexStatementContext } from "./HiveSqlParser.js";
import { CreateViewStatementContext } from "./HiveSqlParser.js";
import { ViewPartitionContext } from "./HiveSqlParser.js";
import { ViewOrganizationContext } from "./HiveSqlParser.js";
import { ViewClusterSpecContext } from "./HiveSqlParser.js";
import { ViewComplexSpecContext } from "./HiveSqlParser.js";
import { ViewDistSpecContext } from "./HiveSqlParser.js";
import { ViewSortSpecContext } from "./HiveSqlParser.js";
import { DropViewStatementContext } from "./HiveSqlParser.js";
import { CreateMaterializedViewStatementContext } from "./HiveSqlParser.js";
import { DropMaterializedViewStatementContext } from "./HiveSqlParser.js";
import { CreateScheduledQueryStatementContext } from "./HiveSqlParser.js";
import { DropScheduledQueryStatementContext } from "./HiveSqlParser.js";
import { AlterScheduledQueryStatementContext } from "./HiveSqlParser.js";
import { AlterScheduledQueryChangeContext } from "./HiveSqlParser.js";
import { ScheduleSpecContext } from "./HiveSqlParser.js";
import { ExecutedAsSpecContext } from "./HiveSqlParser.js";
import { DefinedAsSpecContext } from "./HiveSqlParser.js";
import { ShowStmtIdentifierContext } from "./HiveSqlParser.js";
import { TableCommentContext } from "./HiveSqlParser.js";
import { TableLifecycleContext } from "./HiveSqlParser.js";
import { CreateTablePartitionSpecContext } from "./HiveSqlParser.js";
import { CreateTablePartitionColumnTypeSpecContext } from "./HiveSqlParser.js";
import { CreateTablePartitionColumnSpecContext } from "./HiveSqlParser.js";
import { PartitionTransformSpecContext } from "./HiveSqlParser.js";
import { ColumnNameTransformConstraintContext } from "./HiveSqlParser.js";
import { PartitionTransformTypeContext } from "./HiveSqlParser.js";
import { TableBucketsContext } from "./HiveSqlParser.js";
import { TableImplBucketsContext } from "./HiveSqlParser.js";
import { TableSkewedContext } from "./HiveSqlParser.js";
import { RowFormatContext } from "./HiveSqlParser.js";
import { RecordReaderContext } from "./HiveSqlParser.js";
import { RecordWriterContext } from "./HiveSqlParser.js";
import { RowFormatSerdeContext } from "./HiveSqlParser.js";
import { RowFormatDelimitedContext } from "./HiveSqlParser.js";
import { TableRowFormatContext } from "./HiveSqlParser.js";
import { TablePropertiesPrefixedContext } from "./HiveSqlParser.js";
import { TablePropertiesContext } from "./HiveSqlParser.js";
import { TablePropertiesListContext } from "./HiveSqlParser.js";
import { KeyValuePropertyContext } from "./HiveSqlParser.js";
import { KeyPropertyContext } from "./HiveSqlParser.js";
import { TableRowFormatFieldIdentifierContext } from "./HiveSqlParser.js";
import { TableRowFormatCollItemsIdentifierContext } from "./HiveSqlParser.js";
import { TableRowFormatMapKeysIdentifierContext } from "./HiveSqlParser.js";
import { TableRowFormatLinesIdentifierContext } from "./HiveSqlParser.js";
import { TableRowNullFormatContext } from "./HiveSqlParser.js";
import { TableFileFormatContext } from "./HiveSqlParser.js";
import { TableLocationContext } from "./HiveSqlParser.js";
import { ColumnNameTypeListContext } from "./HiveSqlParser.js";
import { ColumnNameTypeOrConstraintListContext } from "./HiveSqlParser.js";
import { ColumnNameColonTypeListContext } from "./HiveSqlParser.js";
import { ColumnNameListContext } from "./HiveSqlParser.js";
import { ColumnNameContext } from "./HiveSqlParser.js";
import { ColumnNameCreateContext } from "./HiveSqlParser.js";
import { ExtColumnNameContext } from "./HiveSqlParser.js";
import { ColumnNameOrderListContext } from "./HiveSqlParser.js";
import { ColumnParenthesesListContext } from "./HiveSqlParser.js";
import { EnableValidateSpecificationContext } from "./HiveSqlParser.js";
import { EnableSpecificationContext } from "./HiveSqlParser.js";
import { ValidateSpecificationContext } from "./HiveSqlParser.js";
import { EnforcedSpecificationContext } from "./HiveSqlParser.js";
import { RelySpecificationContext } from "./HiveSqlParser.js";
import { CreateConstraintContext } from "./HiveSqlParser.js";
import { AlterConstraintWithNameContext } from "./HiveSqlParser.js";
import { TableLevelConstraintContext } from "./HiveSqlParser.js";
import { PkUkConstraintContext } from "./HiveSqlParser.js";
import { CheckConstraintContext } from "./HiveSqlParser.js";
import { CreateForeignKeyContext } from "./HiveSqlParser.js";
import { AlterForeignKeyWithNameContext } from "./HiveSqlParser.js";
import { SkewedValueElementContext } from "./HiveSqlParser.js";
import { SkewedColumnValuePairListContext } from "./HiveSqlParser.js";
import { SkewedColumnValuePairContext } from "./HiveSqlParser.js";
import { SkewedColumnValuesContext } from "./HiveSqlParser.js";
import { SkewedColumnValueContext } from "./HiveSqlParser.js";
import { SkewedValueLocationElementContext } from "./HiveSqlParser.js";
import { OrderSpecificationContext } from "./HiveSqlParser.js";
import { NullOrderingContext } from "./HiveSqlParser.js";
import { ColumnNameOrderContext } from "./HiveSqlParser.js";
import { ColumnNameCommentListContext } from "./HiveSqlParser.js";
import { ColumnNameCommentContext } from "./HiveSqlParser.js";
import { OrderSpecificationRewriteContext } from "./HiveSqlParser.js";
import { ColumnRefOrderContext } from "./HiveSqlParser.js";
import { ColumnNameTypeContext } from "./HiveSqlParser.js";
import { ColumnNameTypeOrConstraintContext } from "./HiveSqlParser.js";
import { TableConstraintContext } from "./HiveSqlParser.js";
import { ColumnNameTypeConstraintContext } from "./HiveSqlParser.js";
import { ColumnConstraintContext } from "./HiveSqlParser.js";
import { ForeignKeyConstraintContext } from "./HiveSqlParser.js";
import { ColConstraintContext } from "./HiveSqlParser.js";
import { AlterColumnConstraintContext } from "./HiveSqlParser.js";
import { AlterForeignKeyConstraintContext } from "./HiveSqlParser.js";
import { AlterColConstraintContext } from "./HiveSqlParser.js";
import { ColumnConstraintTypeContext } from "./HiveSqlParser.js";
import { DefaultValContext } from "./HiveSqlParser.js";
import { TableConstraintTypeContext } from "./HiveSqlParser.js";
import { ConstraintOptsCreateContext } from "./HiveSqlParser.js";
import { ConstraintOptsAlterContext } from "./HiveSqlParser.js";
import { ColumnNameColonTypeContext } from "./HiveSqlParser.js";
import { ColTypeContext } from "./HiveSqlParser.js";
import { ColTypeListContext } from "./HiveSqlParser.js";
import { TypeContext } from "./HiveSqlParser.js";
import { PrimitiveTypeContext } from "./HiveSqlParser.js";
import { ListTypeContext } from "./HiveSqlParser.js";
import { StructTypeContext } from "./HiveSqlParser.js";
import { MapTypeContext } from "./HiveSqlParser.js";
import { UnionTypeContext } from "./HiveSqlParser.js";
import { SetOperatorContext } from "./HiveSqlParser.js";
import { QueryStatementExpressionContext } from "./HiveSqlParser.js";
import { QueryStatementExpressionBodyContext } from "./HiveSqlParser.js";
import { WithClauseContext } from "./HiveSqlParser.js";
import { CteStatementContext } from "./HiveSqlParser.js";
import { FromStatementContext } from "./HiveSqlParser.js";
import { FromInsertStmtContext } from "./HiveSqlParser.js";
import { FromSelectStmtContext } from "./HiveSqlParser.js";
import { InsertStmtContext } from "./HiveSqlParser.js";
import { SelectStmtContext } from "./HiveSqlParser.js";
import { AtomSelectStatementContext } from "./HiveSqlParser.js";
import { SelectStatementContext } from "./HiveSqlParser.js";
import { SetOpSelectStatementContext } from "./HiveSqlParser.js";
import { SelectStatementWithCTEContext } from "./HiveSqlParser.js";
import { InsertClauseContext } from "./HiveSqlParser.js";
import { DestinationContext } from "./HiveSqlParser.js";
import { LimitClauseContext } from "./HiveSqlParser.js";
import { DeleteStatementContext } from "./HiveSqlParser.js";
import { ColumnAssignmentClauseContext } from "./HiveSqlParser.js";
import { PrecedencePlusExpressionOrDefaultContext } from "./HiveSqlParser.js";
import { SetColumnsClauseContext } from "./HiveSqlParser.js";
import { UpdateStatementContext } from "./HiveSqlParser.js";
import { SqlTransactionStatementContext } from "./HiveSqlParser.js";
import { StartTransactionStatementContext } from "./HiveSqlParser.js";
import { TransactionModeContext } from "./HiveSqlParser.js";
import { TransactionAccessModeContext } from "./HiveSqlParser.js";
import { IsolationLevelContext } from "./HiveSqlParser.js";
import { LevelOfIsolationContext } from "./HiveSqlParser.js";
import { CommitStatementContext } from "./HiveSqlParser.js";
import { RollbackStatementContext } from "./HiveSqlParser.js";
import { SetAutoCommitStatementContext } from "./HiveSqlParser.js";
import { AbortTransactionStatementContext } from "./HiveSqlParser.js";
import { AbortCompactionStatementContext } from "./HiveSqlParser.js";
import { MergeStatementContext } from "./HiveSqlParser.js";
import { WhenClausesContext } from "./HiveSqlParser.js";
import { WhenNotMatchedClauseContext } from "./HiveSqlParser.js";
import { WhenMatchedAndClauseContext } from "./HiveSqlParser.js";
import { WhenMatchedThenClauseContext } from "./HiveSqlParser.js";
import { UpdateOrDeleteContext } from "./HiveSqlParser.js";
import { KillQueryStatementContext } from "./HiveSqlParser.js";
import { CompactionIdContext } from "./HiveSqlParser.js";
import { CompactionPoolContext } from "./HiveSqlParser.js";
import { CompactionTypeContext } from "./HiveSqlParser.js";
import { CompactionStatusContext } from "./HiveSqlParser.js";
import { AlterStatementContext } from "./HiveSqlParser.js";
import { AlterTableStatementSuffixContext } from "./HiveSqlParser.js";
import { AlterTblPartitionStatementSuffixContext } from "./HiveSqlParser.js";
import { AlterStatementPartitionKeyTypeContext } from "./HiveSqlParser.js";
import { AlterViewStatementSuffixContext } from "./HiveSqlParser.js";
import { AlterMaterializedViewStatementSuffixContext } from "./HiveSqlParser.js";
import { AlterMaterializedViewSuffixRewriteContext } from "./HiveSqlParser.js";
import { AlterMaterializedViewSuffixRebuildContext } from "./HiveSqlParser.js";
import { AlterDatabaseStatementSuffixContext } from "./HiveSqlParser.js";
import { AlterDatabaseSuffixPropertiesContext } from "./HiveSqlParser.js";
import { AlterDatabaseSuffixSetOwnerContext } from "./HiveSqlParser.js";
import { AlterDatabaseSuffixSetLocationContext } from "./HiveSqlParser.js";
import { AlterDatabaseSuffixSetManagedLocationContext } from "./HiveSqlParser.js";
import { AlterStatementSuffixRenameContext } from "./HiveSqlParser.js";
import { AlterStatementSuffixAddColContext } from "./HiveSqlParser.js";
import { AlterStatementSuffixAddConstraintContext } from "./HiveSqlParser.js";
import { AlterStatementSuffixUpdateColumnsContext } from "./HiveSqlParser.js";
import { AlterStatementSuffixProtectionsContext } from "./HiveSqlParser.js";
import { AlterStatementSuffixDropConstraintContext } from "./HiveSqlParser.js";
import { AlterStatementSuffixRenameColContext } from "./HiveSqlParser.js";
import { AlterStatementSuffixUpdateStatsColContext } from "./HiveSqlParser.js";
import { AlterStatementSuffixUpdateStatsContext } from "./HiveSqlParser.js";
import { AlterStatementChangeColPositionContext } from "./HiveSqlParser.js";
import { AlterStatementSuffixAddPartitionsContext } from "./HiveSqlParser.js";
import { AlterStatementSuffixAddPartitionsElementContext } from "./HiveSqlParser.js";
import { AlterStatementSuffixTouchContext } from "./HiveSqlParser.js";
import { AlterStatementSuffixArchiveContext } from "./HiveSqlParser.js";
import { AlterStatementSuffixUnArchiveContext } from "./HiveSqlParser.js";
import { PartitionLocationContext } from "./HiveSqlParser.js";
import { AlterStatementSuffixRecoverPartitionsContext } from "./HiveSqlParser.js";
import { AlterStatementSuffixDropPartitionsContext } from "./HiveSqlParser.js";
import { AlterStatementSuffixPropertiesContext } from "./HiveSqlParser.js";
import { AlterViewSuffixPropertiesContext } from "./HiveSqlParser.js";
import { AlterStatementSuffixSerdePropertiesContext } from "./HiveSqlParser.js";
import { TablePartitionPrefixContext } from "./HiveSqlParser.js";
import { AlterStatementSuffixFileFormatContext } from "./HiveSqlParser.js";
import { AlterStatementSuffixClusterbySortbyContext } from "./HiveSqlParser.js";
import { AlterTblPartitionStatementSuffixSkewedLocationContext } from "./HiveSqlParser.js";
import { SkewedLocationsContext } from "./HiveSqlParser.js";
import { SkewedLocationsListContext } from "./HiveSqlParser.js";
import { SkewedLocationMapContext } from "./HiveSqlParser.js";
import { AlterStatementSuffixLocationContext } from "./HiveSqlParser.js";
import { AlterStatementSuffixSkewedbyContext } from "./HiveSqlParser.js";
import { AlterStatementSuffixExchangePartitionContext } from "./HiveSqlParser.js";
import { AlterStatementSuffixRenamePartContext } from "./HiveSqlParser.js";
import { AlterStatementSuffixStatsPartContext } from "./HiveSqlParser.js";
import { AlterStatementSuffixMergeFilesContext } from "./HiveSqlParser.js";
import { AlterStatementSuffixBucketNumContext } from "./HiveSqlParser.js";
import { BlockingContext } from "./HiveSqlParser.js";
import { CompactPoolContext } from "./HiveSqlParser.js";
import { AlterStatementSuffixCompactContext } from "./HiveSqlParser.js";
import { AlterStatementSuffixSetOwnerContext } from "./HiveSqlParser.js";
import { AlterStatementSuffixSetPartSpecContext } from "./HiveSqlParser.js";
import { AlterStatementSuffixExecuteContext } from "./HiveSqlParser.js";
import { AlterIndexStatementSuffixContext } from "./HiveSqlParser.js";
import { FileFormatContext } from "./HiveSqlParser.js";
import { AlterDataConnectorStatementSuffixContext } from "./HiveSqlParser.js";
import { AlterDataConnectorSuffixPropertiesContext } from "./HiveSqlParser.js";
import { AlterDataConnectorSuffixSetOwnerContext } from "./HiveSqlParser.js";
import { AlterDataConnectorSuffixSetUrlContext } from "./HiveSqlParser.js";
import { LikeTableOrFileContext } from "./HiveSqlParser.js";
import { CreateTableStatementContext } from "./HiveSqlParser.js";
import { CreateDataConnectorStatementContext } from "./HiveSqlParser.js";
import { DataConnectorCommentContext } from "./HiveSqlParser.js";
import { DataConnectorUrlContext } from "./HiveSqlParser.js";
import { DataConnectorTypeContext } from "./HiveSqlParser.js";
import { DcPropertiesContext } from "./HiveSqlParser.js";
import { DropDataConnectorStatementContext } from "./HiveSqlParser.js";
import { TableAllColumnsContext } from "./HiveSqlParser.js";
import { DefaultValueContext } from "./HiveSqlParser.js";
import { ExpressionListContext } from "./HiveSqlParser.js";
import { AliasListContext } from "./HiveSqlParser.js";
import { FromClauseContext } from "./HiveSqlParser.js";
import { FromSourceContext } from "./HiveSqlParser.js";
import { AtomjoinSourceContext } from "./HiveSqlParser.js";
import { JoinSourceContext } from "./HiveSqlParser.js";
import { JoinSourcePartContext } from "./HiveSqlParser.js";
import { UniqueJoinSourceContext } from "./HiveSqlParser.js";
import { UniqueJoinExprContext } from "./HiveSqlParser.js";
import { UniqueJoinTokenContext } from "./HiveSqlParser.js";
import { JoinTokenContext } from "./HiveSqlParser.js";
import { LateralViewContext } from "./HiveSqlParser.js";
import { TableAliasContext } from "./HiveSqlParser.js";
import { TableBucketSampleContext } from "./HiveSqlParser.js";
import { SplitSampleContext } from "./HiveSqlParser.js";
import { TableSampleContext } from "./HiveSqlParser.js";
import { TableSourceContext } from "./HiveSqlParser.js";
import { AsOfClauseContext } from "./HiveSqlParser.js";
import { UniqueJoinTableSourceContext } from "./HiveSqlParser.js";
import { DbSchemaNameContext } from "./HiveSqlParser.js";
import { DbSchemaNameCreateContext } from "./HiveSqlParser.js";
import { TableOrViewContext } from "./HiveSqlParser.js";
import { TableNameContext } from "./HiveSqlParser.js";
import { TableNameCreateContext } from "./HiveSqlParser.js";
import { ViewNameContext } from "./HiveSqlParser.js";
import { ViewNameCreateContext } from "./HiveSqlParser.js";
import { SubQuerySourceContext } from "./HiveSqlParser.js";
import { PartitioningSpecContext } from "./HiveSqlParser.js";
import { PartitionTableFunctionSourceContext } from "./HiveSqlParser.js";
import { PartitionedTableFunctionContext } from "./HiveSqlParser.js";
import { WhereClauseContext } from "./HiveSqlParser.js";
import { SearchConditionContext } from "./HiveSqlParser.js";
import { ValuesSourceContext } from "./HiveSqlParser.js";
import { ValuesClauseContext } from "./HiveSqlParser.js";
import { ValuesTableConstructorContext } from "./HiveSqlParser.js";
import { ValueRowConstructorContext } from "./HiveSqlParser.js";
import { FirstValueRowConstructorContext } from "./HiveSqlParser.js";
import { VirtualTableSourceContext } from "./HiveSqlParser.js";
import { SelectClauseContext } from "./HiveSqlParser.js";
import { All_distinctContext } from "./HiveSqlParser.js";
import { SelectListContext } from "./HiveSqlParser.js";
import { SelectTrfmClauseContext } from "./HiveSqlParser.js";
import { SelectItemContext } from "./HiveSqlParser.js";
import { TrfmClauseContext } from "./HiveSqlParser.js";
import { SelectExpressionContext } from "./HiveSqlParser.js";
import { SelectExpressionListContext } from "./HiveSqlParser.js";
import { Window_clauseContext } from "./HiveSqlParser.js";
import { Window_defnContext } from "./HiveSqlParser.js";
import { Window_specificationContext } from "./HiveSqlParser.js";
import { Window_frameContext } from "./HiveSqlParser.js";
import { Window_range_expressionContext } from "./HiveSqlParser.js";
import { Window_value_expressionContext } from "./HiveSqlParser.js";
import { Window_frame_start_boundaryContext } from "./HiveSqlParser.js";
import { Window_frame_boundaryContext } from "./HiveSqlParser.js";
import { GroupByClauseContext } from "./HiveSqlParser.js";
import { Groupby_expressionContext } from "./HiveSqlParser.js";
import { GroupByEmptyContext } from "./HiveSqlParser.js";
import { RollupStandardContext } from "./HiveSqlParser.js";
import { RollupOldSyntaxContext } from "./HiveSqlParser.js";
import { GroupingSetExpressionContext } from "./HiveSqlParser.js";
import { GroupingSetExpressionMultipleContext } from "./HiveSqlParser.js";
import { GroupingExpressionSingleContext } from "./HiveSqlParser.js";
import { HavingClauseContext } from "./HiveSqlParser.js";
import { QualifyClauseContext } from "./HiveSqlParser.js";
import { HavingConditionContext } from "./HiveSqlParser.js";
import { ExpressionsInParenthesisContext } from "./HiveSqlParser.js";
import { ExpressionsNotInParenthesisContext } from "./HiveSqlParser.js";
import { ExpressionPartContext } from "./HiveSqlParser.js";
import { ExpressionOrDefaultContext } from "./HiveSqlParser.js";
import { FirstExpressionsWithAliasContext } from "./HiveSqlParser.js";
import { ExpressionWithAliasContext } from "./HiveSqlParser.js";
import { ExpressionsContext } from "./HiveSqlParser.js";
import { ColumnRefOrderInParenthesisContext } from "./HiveSqlParser.js";
import { ColumnRefOrderNotInParenthesisContext } from "./HiveSqlParser.js";
import { OrderByClauseContext } from "./HiveSqlParser.js";
import { ClusterByClauseContext } from "./HiveSqlParser.js";
import { PartitionByClauseContext } from "./HiveSqlParser.js";
import { DistributeByClauseContext } from "./HiveSqlParser.js";
import { SortByClauseContext } from "./HiveSqlParser.js";
import { TrimFunctionContext } from "./HiveSqlParser.js";
import { Function_Context } from "./HiveSqlParser.js";
import { Null_treatmentContext } from "./HiveSqlParser.js";
import { FunctionNameCreateContext } from "./HiveSqlParser.js";
import { FunctionNameForDDLContext } from "./HiveSqlParser.js";
import { FunctionNameForInvokeContext } from "./HiveSqlParser.js";
import { UserDefinedFuncNameContext } from "./HiveSqlParser.js";
import { InternalFunctionNameContext } from "./HiveSqlParser.js";
import { CastExpressionContext } from "./HiveSqlParser.js";
import { CaseExpressionContext } from "./HiveSqlParser.js";
import { WhenExpressionContext } from "./HiveSqlParser.js";
import { FloorExpressionContext } from "./HiveSqlParser.js";
import { FloorDateQualifiersContext } from "./HiveSqlParser.js";
import { ExtractExpressionContext } from "./HiveSqlParser.js";
import { TimeQualifiersContext } from "./HiveSqlParser.js";
import { ConstantContext } from "./HiveSqlParser.js";
import { PrepareStmtParamContext } from "./HiveSqlParser.js";
import { ParameterIdxContext } from "./HiveSqlParser.js";
import { StringLiteralSequenceContext } from "./HiveSqlParser.js";
import { CharSetStringLiteralContext } from "./HiveSqlParser.js";
import { DateLiteralContext } from "./HiveSqlParser.js";
import { TimestampLiteralContext } from "./HiveSqlParser.js";
import { TimestampLocalTZLiteralContext } from "./HiveSqlParser.js";
import { IntervalValueContext } from "./HiveSqlParser.js";
import { IntervalLiteralContext } from "./HiveSqlParser.js";
import { IntervalExpressionContext } from "./HiveSqlParser.js";
import { IntervalQualifiersContext } from "./HiveSqlParser.js";
import { ExpressionContext } from "./HiveSqlParser.js";
import { AtomExpressionContext } from "./HiveSqlParser.js";
import { PrecedenceFieldExpressionContext } from "./HiveSqlParser.js";
import { PrecedenceUnaryOperatorContext } from "./HiveSqlParser.js";
import { PrecedenceUnaryPrefixExpressionContext } from "./HiveSqlParser.js";
import { PrecedenceBitwiseXorOperatorContext } from "./HiveSqlParser.js";
import { PrecedenceBitwiseXorExpressionContext } from "./HiveSqlParser.js";
import { PrecedenceStarOperatorContext } from "./HiveSqlParser.js";
import { PrecedenceStarExpressionContext } from "./HiveSqlParser.js";
import { PrecedencePlusOperatorContext } from "./HiveSqlParser.js";
import { PrecedencePlusExpressionContext } from "./HiveSqlParser.js";
import { PrecedenceConcatenateOperatorContext } from "./HiveSqlParser.js";
import { PrecedenceConcatenateExpressionContext } from "./HiveSqlParser.js";
import { PrecedenceAmpersandOperatorContext } from "./HiveSqlParser.js";
import { PrecedenceAmpersandExpressionContext } from "./HiveSqlParser.js";
import { PrecedenceBitwiseOrOperatorContext } from "./HiveSqlParser.js";
import { PrecedenceBitwiseOrExpressionContext } from "./HiveSqlParser.js";
import { PrecedenceRegexpOperatorContext } from "./HiveSqlParser.js";
import { PrecedenceSimilarOperatorContext } from "./HiveSqlParser.js";
import { SubQueryExpressionContext } from "./HiveSqlParser.js";
import { PrecedenceSimilarExpressionContext } from "./HiveSqlParser.js";
import { PrecedenceSimilarExpressionMainContext } from "./HiveSqlParser.js";
import { PrecedenceSimilarExpressionPartContext } from "./HiveSqlParser.js";
import { PrecedenceSimilarExpressionAtomContext } from "./HiveSqlParser.js";
import { PrecedenceSimilarExpressionQuantifierPredicateContext } from "./HiveSqlParser.js";
import { QuantifierTypeContext } from "./HiveSqlParser.js";
import { PrecedenceSimilarExpressionInContext } from "./HiveSqlParser.js";
import { PrecedenceSimilarExpressionPartNotContext } from "./HiveSqlParser.js";
import { PrecedenceDistinctOperatorContext } from "./HiveSqlParser.js";
import { PrecedenceEqualOperatorContext } from "./HiveSqlParser.js";
import { PrecedenceEqualExpressionContext } from "./HiveSqlParser.js";
import { IsConditionContext } from "./HiveSqlParser.js";
import { PrecedenceUnarySuffixExpressionContext } from "./HiveSqlParser.js";
import { PrecedenceNotOperatorContext } from "./HiveSqlParser.js";
import { PrecedenceNotExpressionContext } from "./HiveSqlParser.js";
import { PrecedenceAndOperatorContext } from "./HiveSqlParser.js";
import { PrecedenceAndExpressionContext } from "./HiveSqlParser.js";
import { PrecedenceOrOperatorContext } from "./HiveSqlParser.js";
import { PrecedenceOrExpressionContext } from "./HiveSqlParser.js";
import { BooleanValueContext } from "./HiveSqlParser.js";
import { BooleanValueTokContext } from "./HiveSqlParser.js";
import { TableOrPartitionContext } from "./HiveSqlParser.js";
import { PartitionSpecContext } from "./HiveSqlParser.js";
import { PartitionValContext } from "./HiveSqlParser.js";
import { PartitionSelectorSpecContext } from "./HiveSqlParser.js";
import { PartitionSelectorValContext } from "./HiveSqlParser.js";
import { PartitionSelectorOperatorContext } from "./HiveSqlParser.js";
import { SubQuerySelectorOperatorContext } from "./HiveSqlParser.js";
import { SysFuncNamesContext } from "./HiveSqlParser.js";
import { Id_Context } from "./HiveSqlParser.js";
import { FunctionIdentifierContext } from "./HiveSqlParser.js";
import { PrincipalIdentifierContext } from "./HiveSqlParser.js";
import { NonReservedContext } from "./HiveSqlParser.js";
import { Sql11ReservedKeywordsUsedAsFunctionNameContext } from "./HiveSqlParser.js";
import { HintContext } from "./HiveSqlParser.js";
import { HintListContext } from "./HiveSqlParser.js";
import { HintItemContext } from "./HiveSqlParser.js";
import { HintNameContext } from "./HiveSqlParser.js";
import { HintArgsContext } from "./HiveSqlParser.js";
import { HintArgNameContext } from "./HiveSqlParser.js";
import { PrepareStatementContext } from "./HiveSqlParser.js";
import { ExecuteStatementContext } from "./HiveSqlParser.js";
import { SetConfigPropertiesStatementContext } from "./HiveSqlParser.js";
import { ExecuteParamListContext } from "./HiveSqlParser.js";
import { ResourcePlanDdlStatementsContext } from "./HiveSqlParser.js";
import { RpAssignContext } from "./HiveSqlParser.js";
import { RpAssignListContext } from "./HiveSqlParser.js";
import { RpUnassignContext } from "./HiveSqlParser.js";
import { RpUnassignListContext } from "./HiveSqlParser.js";
import { CreateResourcePlanStatementContext } from "./HiveSqlParser.js";
import { WithReplaceContext } from "./HiveSqlParser.js";
import { ActivateContext } from "./HiveSqlParser.js";
import { EnableContext } from "./HiveSqlParser.js";
import { DisableContext } from "./HiveSqlParser.js";
import { UnmanagedContext } from "./HiveSqlParser.js";
import { YearContext } from "./HiveSqlParser.js";
import { MonthContext } from "./HiveSqlParser.js";
import { WeekContext } from "./HiveSqlParser.js";
import { DayContext } from "./HiveSqlParser.js";
import { HourContext } from "./HiveSqlParser.js";
import { MinuteContext } from "./HiveSqlParser.js";
import { SecondContext } from "./HiveSqlParser.js";
import { DecimalContext } from "./HiveSqlParser.js";
import { AlterResourcePlanStatementContext } from "./HiveSqlParser.js";
import { GlobalWmStatementContext } from "./HiveSqlParser.js";
import { ReplaceResourcePlanStatementContext } from "./HiveSqlParser.js";
import { DropResourcePlanStatementContext } from "./HiveSqlParser.js";
import { PoolPathContext } from "./HiveSqlParser.js";
import { TriggerExpressionContext } from "./HiveSqlParser.js";
import { TriggerExpressionStandaloneContext } from "./HiveSqlParser.js";
import { TriggerOrExpressionContext } from "./HiveSqlParser.js";
import { TriggerAndExpressionContext } from "./HiveSqlParser.js";
import { TriggerAtomExpressionContext } from "./HiveSqlParser.js";
import { TriggerLiteralContext } from "./HiveSqlParser.js";
import { ComparisionOperatorContext } from "./HiveSqlParser.js";
import { TriggerActionExpressionContext } from "./HiveSqlParser.js";
import { TriggerActionExpressionStandaloneContext } from "./HiveSqlParser.js";
import { CreateTriggerStatementContext } from "./HiveSqlParser.js";
import { AlterTriggerStatementContext } from "./HiveSqlParser.js";
import { DropTriggerStatementContext } from "./HiveSqlParser.js";
import { PoolAssignContext } from "./HiveSqlParser.js";
import { PoolAssignListContext } from "./HiveSqlParser.js";
import { CreatePoolStatementContext } from "./HiveSqlParser.js";
import { AlterPoolStatementContext } from "./HiveSqlParser.js";
import { DropPoolStatementContext } from "./HiveSqlParser.js";
import { CreateMappingStatementContext } from "./HiveSqlParser.js";
import { AlterMappingStatementContext } from "./HiveSqlParser.js";
import { DropMappingStatementContext } from "./HiveSqlParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `HiveSqlParser`.
 */
export class HiveSqlParserListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `HiveSqlParser.program`.
     * @param ctx the parse tree
     */
    enterProgram?: (ctx: ProgramContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.program`.
     * @param ctx the parse tree
     */
    exitProgram?: (ctx: ProgramContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterStatement?: (ctx: StatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitStatement?: (ctx: StatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.explainStatement`.
     * @param ctx the parse tree
     */
    enterExplainStatement?: (ctx: ExplainStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.explainStatement`.
     * @param ctx the parse tree
     */
    exitExplainStatement?: (ctx: ExplainStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.explainOption`.
     * @param ctx the parse tree
     */
    enterExplainOption?: (ctx: ExplainOptionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.explainOption`.
     * @param ctx the parse tree
     */
    exitExplainOption?: (ctx: ExplainOptionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.vectorizationOnly`.
     * @param ctx the parse tree
     */
    enterVectorizationOnly?: (ctx: VectorizationOnlyContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.vectorizationOnly`.
     * @param ctx the parse tree
     */
    exitVectorizationOnly?: (ctx: VectorizationOnlyContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.vectorizatonDetail`.
     * @param ctx the parse tree
     */
    enterVectorizatonDetail?: (ctx: VectorizatonDetailContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.vectorizatonDetail`.
     * @param ctx the parse tree
     */
    exitVectorizatonDetail?: (ctx: VectorizatonDetailContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.execStatement`.
     * @param ctx the parse tree
     */
    enterExecStatement?: (ctx: ExecStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.execStatement`.
     * @param ctx the parse tree
     */
    exitExecStatement?: (ctx: ExecStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.loadStatement`.
     * @param ctx the parse tree
     */
    enterLoadStatement?: (ctx: LoadStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.loadStatement`.
     * @param ctx the parse tree
     */
    exitLoadStatement?: (ctx: LoadStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.dropPartitionsIgnoreClause`.
     * @param ctx the parse tree
     */
    enterDropPartitionsIgnoreClause?: (ctx: DropPartitionsIgnoreClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.dropPartitionsIgnoreClause`.
     * @param ctx the parse tree
     */
    exitDropPartitionsIgnoreClause?: (ctx: DropPartitionsIgnoreClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.replicationClause`.
     * @param ctx the parse tree
     */
    enterReplicationClause?: (ctx: ReplicationClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.replicationClause`.
     * @param ctx the parse tree
     */
    exitReplicationClause?: (ctx: ReplicationClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.exportStatement`.
     * @param ctx the parse tree
     */
    enterExportStatement?: (ctx: ExportStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.exportStatement`.
     * @param ctx the parse tree
     */
    exitExportStatement?: (ctx: ExportStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.importStatement`.
     * @param ctx the parse tree
     */
    enterImportStatement?: (ctx: ImportStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.importStatement`.
     * @param ctx the parse tree
     */
    exitImportStatement?: (ctx: ImportStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.replDumpStatement`.
     * @param ctx the parse tree
     */
    enterReplDumpStatement?: (ctx: ReplDumpStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.replDumpStatement`.
     * @param ctx the parse tree
     */
    exitReplDumpStatement?: (ctx: ReplDumpStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.replDbPolicy`.
     * @param ctx the parse tree
     */
    enterReplDbPolicy?: (ctx: ReplDbPolicyContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.replDbPolicy`.
     * @param ctx the parse tree
     */
    exitReplDbPolicy?: (ctx: ReplDbPolicyContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.replLoadStatement`.
     * @param ctx the parse tree
     */
    enterReplLoadStatement?: (ctx: ReplLoadStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.replLoadStatement`.
     * @param ctx the parse tree
     */
    exitReplLoadStatement?: (ctx: ReplLoadStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.replConfigs`.
     * @param ctx the parse tree
     */
    enterReplConfigs?: (ctx: ReplConfigsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.replConfigs`.
     * @param ctx the parse tree
     */
    exitReplConfigs?: (ctx: ReplConfigsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.replConfigsList`.
     * @param ctx the parse tree
     */
    enterReplConfigsList?: (ctx: ReplConfigsListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.replConfigsList`.
     * @param ctx the parse tree
     */
    exitReplConfigsList?: (ctx: ReplConfigsListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.replTableLevelPolicy`.
     * @param ctx the parse tree
     */
    enterReplTableLevelPolicy?: (ctx: ReplTableLevelPolicyContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.replTableLevelPolicy`.
     * @param ctx the parse tree
     */
    exitReplTableLevelPolicy?: (ctx: ReplTableLevelPolicyContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.replStatusStatement`.
     * @param ctx the parse tree
     */
    enterReplStatusStatement?: (ctx: ReplStatusStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.replStatusStatement`.
     * @param ctx the parse tree
     */
    exitReplStatusStatement?: (ctx: ReplStatusStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.ddlStatement`.
     * @param ctx the parse tree
     */
    enterDdlStatement?: (ctx: DdlStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.ddlStatement`.
     * @param ctx the parse tree
     */
    exitDdlStatement?: (ctx: DdlStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.ifExists`.
     * @param ctx the parse tree
     */
    enterIfExists?: (ctx: IfExistsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.ifExists`.
     * @param ctx the parse tree
     */
    exitIfExists?: (ctx: IfExistsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.restrictOrCascade`.
     * @param ctx the parse tree
     */
    enterRestrictOrCascade?: (ctx: RestrictOrCascadeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.restrictOrCascade`.
     * @param ctx the parse tree
     */
    exitRestrictOrCascade?: (ctx: RestrictOrCascadeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.ifNotExists`.
     * @param ctx the parse tree
     */
    enterIfNotExists?: (ctx: IfNotExistsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.ifNotExists`.
     * @param ctx the parse tree
     */
    exitIfNotExists?: (ctx: IfNotExistsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.force`.
     * @param ctx the parse tree
     */
    enterForce?: (ctx: ForceContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.force`.
     * @param ctx the parse tree
     */
    exitForce?: (ctx: ForceContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.rewriteEnabled`.
     * @param ctx the parse tree
     */
    enterRewriteEnabled?: (ctx: RewriteEnabledContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.rewriteEnabled`.
     * @param ctx the parse tree
     */
    exitRewriteEnabled?: (ctx: RewriteEnabledContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.rewriteDisabled`.
     * @param ctx the parse tree
     */
    enterRewriteDisabled?: (ctx: RewriteDisabledContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.rewriteDisabled`.
     * @param ctx the parse tree
     */
    exitRewriteDisabled?: (ctx: RewriteDisabledContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.storedAsDirs`.
     * @param ctx the parse tree
     */
    enterStoredAsDirs?: (ctx: StoredAsDirsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.storedAsDirs`.
     * @param ctx the parse tree
     */
    exitStoredAsDirs?: (ctx: StoredAsDirsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.orReplace`.
     * @param ctx the parse tree
     */
    enterOrReplace?: (ctx: OrReplaceContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.orReplace`.
     * @param ctx the parse tree
     */
    exitOrReplace?: (ctx: OrReplaceContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.createDatabaseStatement`.
     * @param ctx the parse tree
     */
    enterCreateDatabaseStatement?: (ctx: CreateDatabaseStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.createDatabaseStatement`.
     * @param ctx the parse tree
     */
    exitCreateDatabaseStatement?: (ctx: CreateDatabaseStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.dbLocation`.
     * @param ctx the parse tree
     */
    enterDbLocation?: (ctx: DbLocationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.dbLocation`.
     * @param ctx the parse tree
     */
    exitDbLocation?: (ctx: DbLocationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.dbManagedLocation`.
     * @param ctx the parse tree
     */
    enterDbManagedLocation?: (ctx: DbManagedLocationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.dbManagedLocation`.
     * @param ctx the parse tree
     */
    exitDbManagedLocation?: (ctx: DbManagedLocationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.dbProperties`.
     * @param ctx the parse tree
     */
    enterDbProperties?: (ctx: DbPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.dbProperties`.
     * @param ctx the parse tree
     */
    exitDbProperties?: (ctx: DbPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.dbPropertiesList`.
     * @param ctx the parse tree
     */
    enterDbPropertiesList?: (ctx: DbPropertiesListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.dbPropertiesList`.
     * @param ctx the parse tree
     */
    exitDbPropertiesList?: (ctx: DbPropertiesListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.dbConnectorName`.
     * @param ctx the parse tree
     */
    enterDbConnectorName?: (ctx: DbConnectorNameContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.dbConnectorName`.
     * @param ctx the parse tree
     */
    exitDbConnectorName?: (ctx: DbConnectorNameContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.switchDatabaseStatement`.
     * @param ctx the parse tree
     */
    enterSwitchDatabaseStatement?: (ctx: SwitchDatabaseStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.switchDatabaseStatement`.
     * @param ctx the parse tree
     */
    exitSwitchDatabaseStatement?: (ctx: SwitchDatabaseStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.dropDatabaseStatement`.
     * @param ctx the parse tree
     */
    enterDropDatabaseStatement?: (ctx: DropDatabaseStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.dropDatabaseStatement`.
     * @param ctx the parse tree
     */
    exitDropDatabaseStatement?: (ctx: DropDatabaseStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.databaseComment`.
     * @param ctx the parse tree
     */
    enterDatabaseComment?: (ctx: DatabaseCommentContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.databaseComment`.
     * @param ctx the parse tree
     */
    exitDatabaseComment?: (ctx: DatabaseCommentContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.truncateTableStatement`.
     * @param ctx the parse tree
     */
    enterTruncateTableStatement?: (ctx: TruncateTableStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.truncateTableStatement`.
     * @param ctx the parse tree
     */
    exitTruncateTableStatement?: (ctx: TruncateTableStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.dropTableStatement`.
     * @param ctx the parse tree
     */
    enterDropTableStatement?: (ctx: DropTableStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.dropTableStatement`.
     * @param ctx the parse tree
     */
    exitDropTableStatement?: (ctx: DropTableStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.inputFileFormat`.
     * @param ctx the parse tree
     */
    enterInputFileFormat?: (ctx: InputFileFormatContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.inputFileFormat`.
     * @param ctx the parse tree
     */
    exitInputFileFormat?: (ctx: InputFileFormatContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.tabTypeExpr`.
     * @param ctx the parse tree
     */
    enterTabTypeExpr?: (ctx: TabTypeExprContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.tabTypeExpr`.
     * @param ctx the parse tree
     */
    exitTabTypeExpr?: (ctx: TabTypeExprContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.partTypeExpr`.
     * @param ctx the parse tree
     */
    enterPartTypeExpr?: (ctx: PartTypeExprContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.partTypeExpr`.
     * @param ctx the parse tree
     */
    exitPartTypeExpr?: (ctx: PartTypeExprContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.tabPartColTypeExpr`.
     * @param ctx the parse tree
     */
    enterTabPartColTypeExpr?: (ctx: TabPartColTypeExprContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.tabPartColTypeExpr`.
     * @param ctx the parse tree
     */
    exitTabPartColTypeExpr?: (ctx: TabPartColTypeExprContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.descStatement`.
     * @param ctx the parse tree
     */
    enterDescStatement?: (ctx: DescStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.descStatement`.
     * @param ctx the parse tree
     */
    exitDescStatement?: (ctx: DescStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.analyzeStatement`.
     * @param ctx the parse tree
     */
    enterAnalyzeStatement?: (ctx: AnalyzeStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.analyzeStatement`.
     * @param ctx the parse tree
     */
    exitAnalyzeStatement?: (ctx: AnalyzeStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.from_in`.
     * @param ctx the parse tree
     */
    enterFrom_in?: (ctx: From_inContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.from_in`.
     * @param ctx the parse tree
     */
    exitFrom_in?: (ctx: From_inContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.db_schema`.
     * @param ctx the parse tree
     */
    enterDb_schema?: (ctx: Db_schemaContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.db_schema`.
     * @param ctx the parse tree
     */
    exitDb_schema?: (ctx: Db_schemaContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowStatement?: (ctx: ShowStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowStatement?: (ctx: ShowStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.showTablesFilterExpr`.
     * @param ctx the parse tree
     */
    enterShowTablesFilterExpr?: (ctx: ShowTablesFilterExprContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.showTablesFilterExpr`.
     * @param ctx the parse tree
     */
    exitShowTablesFilterExpr?: (ctx: ShowTablesFilterExprContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.lockStatement`.
     * @param ctx the parse tree
     */
    enterLockStatement?: (ctx: LockStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.lockStatement`.
     * @param ctx the parse tree
     */
    exitLockStatement?: (ctx: LockStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.lockDatabase`.
     * @param ctx the parse tree
     */
    enterLockDatabase?: (ctx: LockDatabaseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.lockDatabase`.
     * @param ctx the parse tree
     */
    exitLockDatabase?: (ctx: LockDatabaseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.lockMode`.
     * @param ctx the parse tree
     */
    enterLockMode?: (ctx: LockModeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.lockMode`.
     * @param ctx the parse tree
     */
    exitLockMode?: (ctx: LockModeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.unlockStatement`.
     * @param ctx the parse tree
     */
    enterUnlockStatement?: (ctx: UnlockStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.unlockStatement`.
     * @param ctx the parse tree
     */
    exitUnlockStatement?: (ctx: UnlockStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.unlockDatabase`.
     * @param ctx the parse tree
     */
    enterUnlockDatabase?: (ctx: UnlockDatabaseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.unlockDatabase`.
     * @param ctx the parse tree
     */
    exitUnlockDatabase?: (ctx: UnlockDatabaseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.createRoleStatement`.
     * @param ctx the parse tree
     */
    enterCreateRoleStatement?: (ctx: CreateRoleStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.createRoleStatement`.
     * @param ctx the parse tree
     */
    exitCreateRoleStatement?: (ctx: CreateRoleStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.dropRoleStatement`.
     * @param ctx the parse tree
     */
    enterDropRoleStatement?: (ctx: DropRoleStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.dropRoleStatement`.
     * @param ctx the parse tree
     */
    exitDropRoleStatement?: (ctx: DropRoleStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.grantPrivileges`.
     * @param ctx the parse tree
     */
    enterGrantPrivileges?: (ctx: GrantPrivilegesContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.grantPrivileges`.
     * @param ctx the parse tree
     */
    exitGrantPrivileges?: (ctx: GrantPrivilegesContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.revokePrivileges`.
     * @param ctx the parse tree
     */
    enterRevokePrivileges?: (ctx: RevokePrivilegesContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.revokePrivileges`.
     * @param ctx the parse tree
     */
    exitRevokePrivileges?: (ctx: RevokePrivilegesContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.grantRole`.
     * @param ctx the parse tree
     */
    enterGrantRole?: (ctx: GrantRoleContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.grantRole`.
     * @param ctx the parse tree
     */
    exitGrantRole?: (ctx: GrantRoleContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.revokeRole`.
     * @param ctx the parse tree
     */
    enterRevokeRole?: (ctx: RevokeRoleContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.revokeRole`.
     * @param ctx the parse tree
     */
    exitRevokeRole?: (ctx: RevokeRoleContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.showRoleGrants`.
     * @param ctx the parse tree
     */
    enterShowRoleGrants?: (ctx: ShowRoleGrantsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.showRoleGrants`.
     * @param ctx the parse tree
     */
    exitShowRoleGrants?: (ctx: ShowRoleGrantsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.showRoles`.
     * @param ctx the parse tree
     */
    enterShowRoles?: (ctx: ShowRolesContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.showRoles`.
     * @param ctx the parse tree
     */
    exitShowRoles?: (ctx: ShowRolesContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.showCurrentRole`.
     * @param ctx the parse tree
     */
    enterShowCurrentRole?: (ctx: ShowCurrentRoleContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.showCurrentRole`.
     * @param ctx the parse tree
     */
    exitShowCurrentRole?: (ctx: ShowCurrentRoleContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.setRole`.
     * @param ctx the parse tree
     */
    enterSetRole?: (ctx: SetRoleContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.setRole`.
     * @param ctx the parse tree
     */
    exitSetRole?: (ctx: SetRoleContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.showGrants`.
     * @param ctx the parse tree
     */
    enterShowGrants?: (ctx: ShowGrantsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.showGrants`.
     * @param ctx the parse tree
     */
    exitShowGrants?: (ctx: ShowGrantsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.showRolePrincipals`.
     * @param ctx the parse tree
     */
    enterShowRolePrincipals?: (ctx: ShowRolePrincipalsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.showRolePrincipals`.
     * @param ctx the parse tree
     */
    exitShowRolePrincipals?: (ctx: ShowRolePrincipalsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.privilegeIncludeColObject`.
     * @param ctx the parse tree
     */
    enterPrivilegeIncludeColObject?: (ctx: PrivilegeIncludeColObjectContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.privilegeIncludeColObject`.
     * @param ctx the parse tree
     */
    exitPrivilegeIncludeColObject?: (ctx: PrivilegeIncludeColObjectContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.privilegeObject`.
     * @param ctx the parse tree
     */
    enterPrivilegeObject?: (ctx: PrivilegeObjectContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.privilegeObject`.
     * @param ctx the parse tree
     */
    exitPrivilegeObject?: (ctx: PrivilegeObjectContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.privObject`.
     * @param ctx the parse tree
     */
    enterPrivObject?: (ctx: PrivObjectContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.privObject`.
     * @param ctx the parse tree
     */
    exitPrivObject?: (ctx: PrivObjectContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.privObjectCols`.
     * @param ctx the parse tree
     */
    enterPrivObjectCols?: (ctx: PrivObjectColsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.privObjectCols`.
     * @param ctx the parse tree
     */
    exitPrivObjectCols?: (ctx: PrivObjectColsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.privilegeList`.
     * @param ctx the parse tree
     */
    enterPrivilegeList?: (ctx: PrivilegeListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.privilegeList`.
     * @param ctx the parse tree
     */
    exitPrivilegeList?: (ctx: PrivilegeListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.privlegeDef`.
     * @param ctx the parse tree
     */
    enterPrivlegeDef?: (ctx: PrivlegeDefContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.privlegeDef`.
     * @param ctx the parse tree
     */
    exitPrivlegeDef?: (ctx: PrivlegeDefContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.privilegeType`.
     * @param ctx the parse tree
     */
    enterPrivilegeType?: (ctx: PrivilegeTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.privilegeType`.
     * @param ctx the parse tree
     */
    exitPrivilegeType?: (ctx: PrivilegeTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.principalSpecification`.
     * @param ctx the parse tree
     */
    enterPrincipalSpecification?: (ctx: PrincipalSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.principalSpecification`.
     * @param ctx the parse tree
     */
    exitPrincipalSpecification?: (ctx: PrincipalSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.principalName`.
     * @param ctx the parse tree
     */
    enterPrincipalName?: (ctx: PrincipalNameContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.principalName`.
     * @param ctx the parse tree
     */
    exitPrincipalName?: (ctx: PrincipalNameContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.principalAlterName`.
     * @param ctx the parse tree
     */
    enterPrincipalAlterName?: (ctx: PrincipalAlterNameContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.principalAlterName`.
     * @param ctx the parse tree
     */
    exitPrincipalAlterName?: (ctx: PrincipalAlterNameContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.withGrantOption`.
     * @param ctx the parse tree
     */
    enterWithGrantOption?: (ctx: WithGrantOptionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.withGrantOption`.
     * @param ctx the parse tree
     */
    exitWithGrantOption?: (ctx: WithGrantOptionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.grantOptionFor`.
     * @param ctx the parse tree
     */
    enterGrantOptionFor?: (ctx: GrantOptionForContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.grantOptionFor`.
     * @param ctx the parse tree
     */
    exitGrantOptionFor?: (ctx: GrantOptionForContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.adminOptionFor`.
     * @param ctx the parse tree
     */
    enterAdminOptionFor?: (ctx: AdminOptionForContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.adminOptionFor`.
     * @param ctx the parse tree
     */
    exitAdminOptionFor?: (ctx: AdminOptionForContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.withAdminOption`.
     * @param ctx the parse tree
     */
    enterWithAdminOption?: (ctx: WithAdminOptionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.withAdminOption`.
     * @param ctx the parse tree
     */
    exitWithAdminOption?: (ctx: WithAdminOptionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.metastoreCheck`.
     * @param ctx the parse tree
     */
    enterMetastoreCheck?: (ctx: MetastoreCheckContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.metastoreCheck`.
     * @param ctx the parse tree
     */
    exitMetastoreCheck?: (ctx: MetastoreCheckContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.resourceList`.
     * @param ctx the parse tree
     */
    enterResourceList?: (ctx: ResourceListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.resourceList`.
     * @param ctx the parse tree
     */
    exitResourceList?: (ctx: ResourceListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.resource`.
     * @param ctx the parse tree
     */
    enterResource?: (ctx: ResourceContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.resource`.
     * @param ctx the parse tree
     */
    exitResource?: (ctx: ResourceContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.resourceType`.
     * @param ctx the parse tree
     */
    enterResourceType?: (ctx: ResourceTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.resourceType`.
     * @param ctx the parse tree
     */
    exitResourceType?: (ctx: ResourceTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.createFunctionStatement`.
     * @param ctx the parse tree
     */
    enterCreateFunctionStatement?: (ctx: CreateFunctionStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.createFunctionStatement`.
     * @param ctx the parse tree
     */
    exitCreateFunctionStatement?: (ctx: CreateFunctionStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.dropFunctionStatement`.
     * @param ctx the parse tree
     */
    enterDropFunctionStatement?: (ctx: DropFunctionStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.dropFunctionStatement`.
     * @param ctx the parse tree
     */
    exitDropFunctionStatement?: (ctx: DropFunctionStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.reloadFunctionsStatement`.
     * @param ctx the parse tree
     */
    enterReloadFunctionsStatement?: (ctx: ReloadFunctionsStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.reloadFunctionsStatement`.
     * @param ctx the parse tree
     */
    exitReloadFunctionsStatement?: (ctx: ReloadFunctionsStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.createMacroStatement`.
     * @param ctx the parse tree
     */
    enterCreateMacroStatement?: (ctx: CreateMacroStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.createMacroStatement`.
     * @param ctx the parse tree
     */
    exitCreateMacroStatement?: (ctx: CreateMacroStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.dropMacroStatement`.
     * @param ctx the parse tree
     */
    enterDropMacroStatement?: (ctx: DropMacroStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.dropMacroStatement`.
     * @param ctx the parse tree
     */
    exitDropMacroStatement?: (ctx: DropMacroStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.createIndexStatement`.
     * @param ctx the parse tree
     */
    enterCreateIndexStatement?: (ctx: CreateIndexStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.createIndexStatement`.
     * @param ctx the parse tree
     */
    exitCreateIndexStatement?: (ctx: CreateIndexStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.dropIndexStatement`.
     * @param ctx the parse tree
     */
    enterDropIndexStatement?: (ctx: DropIndexStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.dropIndexStatement`.
     * @param ctx the parse tree
     */
    exitDropIndexStatement?: (ctx: DropIndexStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.createViewStatement`.
     * @param ctx the parse tree
     */
    enterCreateViewStatement?: (ctx: CreateViewStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.createViewStatement`.
     * @param ctx the parse tree
     */
    exitCreateViewStatement?: (ctx: CreateViewStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.viewPartition`.
     * @param ctx the parse tree
     */
    enterViewPartition?: (ctx: ViewPartitionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.viewPartition`.
     * @param ctx the parse tree
     */
    exitViewPartition?: (ctx: ViewPartitionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.viewOrganization`.
     * @param ctx the parse tree
     */
    enterViewOrganization?: (ctx: ViewOrganizationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.viewOrganization`.
     * @param ctx the parse tree
     */
    exitViewOrganization?: (ctx: ViewOrganizationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.viewClusterSpec`.
     * @param ctx the parse tree
     */
    enterViewClusterSpec?: (ctx: ViewClusterSpecContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.viewClusterSpec`.
     * @param ctx the parse tree
     */
    exitViewClusterSpec?: (ctx: ViewClusterSpecContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.viewComplexSpec`.
     * @param ctx the parse tree
     */
    enterViewComplexSpec?: (ctx: ViewComplexSpecContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.viewComplexSpec`.
     * @param ctx the parse tree
     */
    exitViewComplexSpec?: (ctx: ViewComplexSpecContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.viewDistSpec`.
     * @param ctx the parse tree
     */
    enterViewDistSpec?: (ctx: ViewDistSpecContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.viewDistSpec`.
     * @param ctx the parse tree
     */
    exitViewDistSpec?: (ctx: ViewDistSpecContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.viewSortSpec`.
     * @param ctx the parse tree
     */
    enterViewSortSpec?: (ctx: ViewSortSpecContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.viewSortSpec`.
     * @param ctx the parse tree
     */
    exitViewSortSpec?: (ctx: ViewSortSpecContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.dropViewStatement`.
     * @param ctx the parse tree
     */
    enterDropViewStatement?: (ctx: DropViewStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.dropViewStatement`.
     * @param ctx the parse tree
     */
    exitDropViewStatement?: (ctx: DropViewStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.createMaterializedViewStatement`.
     * @param ctx the parse tree
     */
    enterCreateMaterializedViewStatement?: (ctx: CreateMaterializedViewStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.createMaterializedViewStatement`.
     * @param ctx the parse tree
     */
    exitCreateMaterializedViewStatement?: (ctx: CreateMaterializedViewStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.dropMaterializedViewStatement`.
     * @param ctx the parse tree
     */
    enterDropMaterializedViewStatement?: (ctx: DropMaterializedViewStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.dropMaterializedViewStatement`.
     * @param ctx the parse tree
     */
    exitDropMaterializedViewStatement?: (ctx: DropMaterializedViewStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.createScheduledQueryStatement`.
     * @param ctx the parse tree
     */
    enterCreateScheduledQueryStatement?: (ctx: CreateScheduledQueryStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.createScheduledQueryStatement`.
     * @param ctx the parse tree
     */
    exitCreateScheduledQueryStatement?: (ctx: CreateScheduledQueryStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.dropScheduledQueryStatement`.
     * @param ctx the parse tree
     */
    enterDropScheduledQueryStatement?: (ctx: DropScheduledQueryStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.dropScheduledQueryStatement`.
     * @param ctx the parse tree
     */
    exitDropScheduledQueryStatement?: (ctx: DropScheduledQueryStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterScheduledQueryStatement`.
     * @param ctx the parse tree
     */
    enterAlterScheduledQueryStatement?: (ctx: AlterScheduledQueryStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterScheduledQueryStatement`.
     * @param ctx the parse tree
     */
    exitAlterScheduledQueryStatement?: (ctx: AlterScheduledQueryStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterScheduledQueryChange`.
     * @param ctx the parse tree
     */
    enterAlterScheduledQueryChange?: (ctx: AlterScheduledQueryChangeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterScheduledQueryChange`.
     * @param ctx the parse tree
     */
    exitAlterScheduledQueryChange?: (ctx: AlterScheduledQueryChangeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.scheduleSpec`.
     * @param ctx the parse tree
     */
    enterScheduleSpec?: (ctx: ScheduleSpecContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.scheduleSpec`.
     * @param ctx the parse tree
     */
    exitScheduleSpec?: (ctx: ScheduleSpecContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.executedAsSpec`.
     * @param ctx the parse tree
     */
    enterExecutedAsSpec?: (ctx: ExecutedAsSpecContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.executedAsSpec`.
     * @param ctx the parse tree
     */
    exitExecutedAsSpec?: (ctx: ExecutedAsSpecContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.definedAsSpec`.
     * @param ctx the parse tree
     */
    enterDefinedAsSpec?: (ctx: DefinedAsSpecContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.definedAsSpec`.
     * @param ctx the parse tree
     */
    exitDefinedAsSpec?: (ctx: DefinedAsSpecContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.showStmtIdentifier`.
     * @param ctx the parse tree
     */
    enterShowStmtIdentifier?: (ctx: ShowStmtIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.showStmtIdentifier`.
     * @param ctx the parse tree
     */
    exitShowStmtIdentifier?: (ctx: ShowStmtIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.tableComment`.
     * @param ctx the parse tree
     */
    enterTableComment?: (ctx: TableCommentContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.tableComment`.
     * @param ctx the parse tree
     */
    exitTableComment?: (ctx: TableCommentContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.tableLifecycle`.
     * @param ctx the parse tree
     */
    enterTableLifecycle?: (ctx: TableLifecycleContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.tableLifecycle`.
     * @param ctx the parse tree
     */
    exitTableLifecycle?: (ctx: TableLifecycleContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.createTablePartitionSpec`.
     * @param ctx the parse tree
     */
    enterCreateTablePartitionSpec?: (ctx: CreateTablePartitionSpecContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.createTablePartitionSpec`.
     * @param ctx the parse tree
     */
    exitCreateTablePartitionSpec?: (ctx: CreateTablePartitionSpecContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.createTablePartitionColumnTypeSpec`.
     * @param ctx the parse tree
     */
    enterCreateTablePartitionColumnTypeSpec?: (ctx: CreateTablePartitionColumnTypeSpecContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.createTablePartitionColumnTypeSpec`.
     * @param ctx the parse tree
     */
    exitCreateTablePartitionColumnTypeSpec?: (ctx: CreateTablePartitionColumnTypeSpecContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.createTablePartitionColumnSpec`.
     * @param ctx the parse tree
     */
    enterCreateTablePartitionColumnSpec?: (ctx: CreateTablePartitionColumnSpecContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.createTablePartitionColumnSpec`.
     * @param ctx the parse tree
     */
    exitCreateTablePartitionColumnSpec?: (ctx: CreateTablePartitionColumnSpecContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.partitionTransformSpec`.
     * @param ctx the parse tree
     */
    enterPartitionTransformSpec?: (ctx: PartitionTransformSpecContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.partitionTransformSpec`.
     * @param ctx the parse tree
     */
    exitPartitionTransformSpec?: (ctx: PartitionTransformSpecContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.columnNameTransformConstraint`.
     * @param ctx the parse tree
     */
    enterColumnNameTransformConstraint?: (ctx: ColumnNameTransformConstraintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.columnNameTransformConstraint`.
     * @param ctx the parse tree
     */
    exitColumnNameTransformConstraint?: (ctx: ColumnNameTransformConstraintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.partitionTransformType`.
     * @param ctx the parse tree
     */
    enterPartitionTransformType?: (ctx: PartitionTransformTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.partitionTransformType`.
     * @param ctx the parse tree
     */
    exitPartitionTransformType?: (ctx: PartitionTransformTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.tableBuckets`.
     * @param ctx the parse tree
     */
    enterTableBuckets?: (ctx: TableBucketsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.tableBuckets`.
     * @param ctx the parse tree
     */
    exitTableBuckets?: (ctx: TableBucketsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.tableImplBuckets`.
     * @param ctx the parse tree
     */
    enterTableImplBuckets?: (ctx: TableImplBucketsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.tableImplBuckets`.
     * @param ctx the parse tree
     */
    exitTableImplBuckets?: (ctx: TableImplBucketsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.tableSkewed`.
     * @param ctx the parse tree
     */
    enterTableSkewed?: (ctx: TableSkewedContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.tableSkewed`.
     * @param ctx the parse tree
     */
    exitTableSkewed?: (ctx: TableSkewedContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.rowFormat`.
     * @param ctx the parse tree
     */
    enterRowFormat?: (ctx: RowFormatContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.rowFormat`.
     * @param ctx the parse tree
     */
    exitRowFormat?: (ctx: RowFormatContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.recordReader`.
     * @param ctx the parse tree
     */
    enterRecordReader?: (ctx: RecordReaderContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.recordReader`.
     * @param ctx the parse tree
     */
    exitRecordReader?: (ctx: RecordReaderContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.recordWriter`.
     * @param ctx the parse tree
     */
    enterRecordWriter?: (ctx: RecordWriterContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.recordWriter`.
     * @param ctx the parse tree
     */
    exitRecordWriter?: (ctx: RecordWriterContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.rowFormatSerde`.
     * @param ctx the parse tree
     */
    enterRowFormatSerde?: (ctx: RowFormatSerdeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.rowFormatSerde`.
     * @param ctx the parse tree
     */
    exitRowFormatSerde?: (ctx: RowFormatSerdeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.rowFormatDelimited`.
     * @param ctx the parse tree
     */
    enterRowFormatDelimited?: (ctx: RowFormatDelimitedContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.rowFormatDelimited`.
     * @param ctx the parse tree
     */
    exitRowFormatDelimited?: (ctx: RowFormatDelimitedContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.tableRowFormat`.
     * @param ctx the parse tree
     */
    enterTableRowFormat?: (ctx: TableRowFormatContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.tableRowFormat`.
     * @param ctx the parse tree
     */
    exitTableRowFormat?: (ctx: TableRowFormatContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.tablePropertiesPrefixed`.
     * @param ctx the parse tree
     */
    enterTablePropertiesPrefixed?: (ctx: TablePropertiesPrefixedContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.tablePropertiesPrefixed`.
     * @param ctx the parse tree
     */
    exitTablePropertiesPrefixed?: (ctx: TablePropertiesPrefixedContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.tableProperties`.
     * @param ctx the parse tree
     */
    enterTableProperties?: (ctx: TablePropertiesContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.tableProperties`.
     * @param ctx the parse tree
     */
    exitTableProperties?: (ctx: TablePropertiesContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.tablePropertiesList`.
     * @param ctx the parse tree
     */
    enterTablePropertiesList?: (ctx: TablePropertiesListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.tablePropertiesList`.
     * @param ctx the parse tree
     */
    exitTablePropertiesList?: (ctx: TablePropertiesListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.keyValueProperty`.
     * @param ctx the parse tree
     */
    enterKeyValueProperty?: (ctx: KeyValuePropertyContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.keyValueProperty`.
     * @param ctx the parse tree
     */
    exitKeyValueProperty?: (ctx: KeyValuePropertyContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.keyProperty`.
     * @param ctx the parse tree
     */
    enterKeyProperty?: (ctx: KeyPropertyContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.keyProperty`.
     * @param ctx the parse tree
     */
    exitKeyProperty?: (ctx: KeyPropertyContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.tableRowFormatFieldIdentifier`.
     * @param ctx the parse tree
     */
    enterTableRowFormatFieldIdentifier?: (ctx: TableRowFormatFieldIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.tableRowFormatFieldIdentifier`.
     * @param ctx the parse tree
     */
    exitTableRowFormatFieldIdentifier?: (ctx: TableRowFormatFieldIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.tableRowFormatCollItemsIdentifier`.
     * @param ctx the parse tree
     */
    enterTableRowFormatCollItemsIdentifier?: (ctx: TableRowFormatCollItemsIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.tableRowFormatCollItemsIdentifier`.
     * @param ctx the parse tree
     */
    exitTableRowFormatCollItemsIdentifier?: (ctx: TableRowFormatCollItemsIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.tableRowFormatMapKeysIdentifier`.
     * @param ctx the parse tree
     */
    enterTableRowFormatMapKeysIdentifier?: (ctx: TableRowFormatMapKeysIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.tableRowFormatMapKeysIdentifier`.
     * @param ctx the parse tree
     */
    exitTableRowFormatMapKeysIdentifier?: (ctx: TableRowFormatMapKeysIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.tableRowFormatLinesIdentifier`.
     * @param ctx the parse tree
     */
    enterTableRowFormatLinesIdentifier?: (ctx: TableRowFormatLinesIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.tableRowFormatLinesIdentifier`.
     * @param ctx the parse tree
     */
    exitTableRowFormatLinesIdentifier?: (ctx: TableRowFormatLinesIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.tableRowNullFormat`.
     * @param ctx the parse tree
     */
    enterTableRowNullFormat?: (ctx: TableRowNullFormatContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.tableRowNullFormat`.
     * @param ctx the parse tree
     */
    exitTableRowNullFormat?: (ctx: TableRowNullFormatContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.tableFileFormat`.
     * @param ctx the parse tree
     */
    enterTableFileFormat?: (ctx: TableFileFormatContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.tableFileFormat`.
     * @param ctx the parse tree
     */
    exitTableFileFormat?: (ctx: TableFileFormatContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.tableLocation`.
     * @param ctx the parse tree
     */
    enterTableLocation?: (ctx: TableLocationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.tableLocation`.
     * @param ctx the parse tree
     */
    exitTableLocation?: (ctx: TableLocationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.columnNameTypeList`.
     * @param ctx the parse tree
     */
    enterColumnNameTypeList?: (ctx: ColumnNameTypeListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.columnNameTypeList`.
     * @param ctx the parse tree
     */
    exitColumnNameTypeList?: (ctx: ColumnNameTypeListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.columnNameTypeOrConstraintList`.
     * @param ctx the parse tree
     */
    enterColumnNameTypeOrConstraintList?: (ctx: ColumnNameTypeOrConstraintListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.columnNameTypeOrConstraintList`.
     * @param ctx the parse tree
     */
    exitColumnNameTypeOrConstraintList?: (ctx: ColumnNameTypeOrConstraintListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.columnNameColonTypeList`.
     * @param ctx the parse tree
     */
    enterColumnNameColonTypeList?: (ctx: ColumnNameColonTypeListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.columnNameColonTypeList`.
     * @param ctx the parse tree
     */
    exitColumnNameColonTypeList?: (ctx: ColumnNameColonTypeListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.columnNameList`.
     * @param ctx the parse tree
     */
    enterColumnNameList?: (ctx: ColumnNameListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.columnNameList`.
     * @param ctx the parse tree
     */
    exitColumnNameList?: (ctx: ColumnNameListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.columnName`.
     * @param ctx the parse tree
     */
    enterColumnName?: (ctx: ColumnNameContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.columnName`.
     * @param ctx the parse tree
     */
    exitColumnName?: (ctx: ColumnNameContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.columnNameCreate`.
     * @param ctx the parse tree
     */
    enterColumnNameCreate?: (ctx: ColumnNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.columnNameCreate`.
     * @param ctx the parse tree
     */
    exitColumnNameCreate?: (ctx: ColumnNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.extColumnName`.
     * @param ctx the parse tree
     */
    enterExtColumnName?: (ctx: ExtColumnNameContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.extColumnName`.
     * @param ctx the parse tree
     */
    exitExtColumnName?: (ctx: ExtColumnNameContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.columnNameOrderList`.
     * @param ctx the parse tree
     */
    enterColumnNameOrderList?: (ctx: ColumnNameOrderListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.columnNameOrderList`.
     * @param ctx the parse tree
     */
    exitColumnNameOrderList?: (ctx: ColumnNameOrderListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.columnParenthesesList`.
     * @param ctx the parse tree
     */
    enterColumnParenthesesList?: (ctx: ColumnParenthesesListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.columnParenthesesList`.
     * @param ctx the parse tree
     */
    exitColumnParenthesesList?: (ctx: ColumnParenthesesListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.enableValidateSpecification`.
     * @param ctx the parse tree
     */
    enterEnableValidateSpecification?: (ctx: EnableValidateSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.enableValidateSpecification`.
     * @param ctx the parse tree
     */
    exitEnableValidateSpecification?: (ctx: EnableValidateSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.enableSpecification`.
     * @param ctx the parse tree
     */
    enterEnableSpecification?: (ctx: EnableSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.enableSpecification`.
     * @param ctx the parse tree
     */
    exitEnableSpecification?: (ctx: EnableSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.validateSpecification`.
     * @param ctx the parse tree
     */
    enterValidateSpecification?: (ctx: ValidateSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.validateSpecification`.
     * @param ctx the parse tree
     */
    exitValidateSpecification?: (ctx: ValidateSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.enforcedSpecification`.
     * @param ctx the parse tree
     */
    enterEnforcedSpecification?: (ctx: EnforcedSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.enforcedSpecification`.
     * @param ctx the parse tree
     */
    exitEnforcedSpecification?: (ctx: EnforcedSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.relySpecification`.
     * @param ctx the parse tree
     */
    enterRelySpecification?: (ctx: RelySpecificationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.relySpecification`.
     * @param ctx the parse tree
     */
    exitRelySpecification?: (ctx: RelySpecificationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.createConstraint`.
     * @param ctx the parse tree
     */
    enterCreateConstraint?: (ctx: CreateConstraintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.createConstraint`.
     * @param ctx the parse tree
     */
    exitCreateConstraint?: (ctx: CreateConstraintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterConstraintWithName`.
     * @param ctx the parse tree
     */
    enterAlterConstraintWithName?: (ctx: AlterConstraintWithNameContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterConstraintWithName`.
     * @param ctx the parse tree
     */
    exitAlterConstraintWithName?: (ctx: AlterConstraintWithNameContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.tableLevelConstraint`.
     * @param ctx the parse tree
     */
    enterTableLevelConstraint?: (ctx: TableLevelConstraintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.tableLevelConstraint`.
     * @param ctx the parse tree
     */
    exitTableLevelConstraint?: (ctx: TableLevelConstraintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.pkUkConstraint`.
     * @param ctx the parse tree
     */
    enterPkUkConstraint?: (ctx: PkUkConstraintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.pkUkConstraint`.
     * @param ctx the parse tree
     */
    exitPkUkConstraint?: (ctx: PkUkConstraintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.checkConstraint`.
     * @param ctx the parse tree
     */
    enterCheckConstraint?: (ctx: CheckConstraintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.checkConstraint`.
     * @param ctx the parse tree
     */
    exitCheckConstraint?: (ctx: CheckConstraintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.createForeignKey`.
     * @param ctx the parse tree
     */
    enterCreateForeignKey?: (ctx: CreateForeignKeyContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.createForeignKey`.
     * @param ctx the parse tree
     */
    exitCreateForeignKey?: (ctx: CreateForeignKeyContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterForeignKeyWithName`.
     * @param ctx the parse tree
     */
    enterAlterForeignKeyWithName?: (ctx: AlterForeignKeyWithNameContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterForeignKeyWithName`.
     * @param ctx the parse tree
     */
    exitAlterForeignKeyWithName?: (ctx: AlterForeignKeyWithNameContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.skewedValueElement`.
     * @param ctx the parse tree
     */
    enterSkewedValueElement?: (ctx: SkewedValueElementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.skewedValueElement`.
     * @param ctx the parse tree
     */
    exitSkewedValueElement?: (ctx: SkewedValueElementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.skewedColumnValuePairList`.
     * @param ctx the parse tree
     */
    enterSkewedColumnValuePairList?: (ctx: SkewedColumnValuePairListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.skewedColumnValuePairList`.
     * @param ctx the parse tree
     */
    exitSkewedColumnValuePairList?: (ctx: SkewedColumnValuePairListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.skewedColumnValuePair`.
     * @param ctx the parse tree
     */
    enterSkewedColumnValuePair?: (ctx: SkewedColumnValuePairContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.skewedColumnValuePair`.
     * @param ctx the parse tree
     */
    exitSkewedColumnValuePair?: (ctx: SkewedColumnValuePairContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.skewedColumnValues`.
     * @param ctx the parse tree
     */
    enterSkewedColumnValues?: (ctx: SkewedColumnValuesContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.skewedColumnValues`.
     * @param ctx the parse tree
     */
    exitSkewedColumnValues?: (ctx: SkewedColumnValuesContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.skewedColumnValue`.
     * @param ctx the parse tree
     */
    enterSkewedColumnValue?: (ctx: SkewedColumnValueContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.skewedColumnValue`.
     * @param ctx the parse tree
     */
    exitSkewedColumnValue?: (ctx: SkewedColumnValueContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.skewedValueLocationElement`.
     * @param ctx the parse tree
     */
    enterSkewedValueLocationElement?: (ctx: SkewedValueLocationElementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.skewedValueLocationElement`.
     * @param ctx the parse tree
     */
    exitSkewedValueLocationElement?: (ctx: SkewedValueLocationElementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.orderSpecification`.
     * @param ctx the parse tree
     */
    enterOrderSpecification?: (ctx: OrderSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.orderSpecification`.
     * @param ctx the parse tree
     */
    exitOrderSpecification?: (ctx: OrderSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.nullOrdering`.
     * @param ctx the parse tree
     */
    enterNullOrdering?: (ctx: NullOrderingContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.nullOrdering`.
     * @param ctx the parse tree
     */
    exitNullOrdering?: (ctx: NullOrderingContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.columnNameOrder`.
     * @param ctx the parse tree
     */
    enterColumnNameOrder?: (ctx: ColumnNameOrderContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.columnNameOrder`.
     * @param ctx the parse tree
     */
    exitColumnNameOrder?: (ctx: ColumnNameOrderContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.columnNameCommentList`.
     * @param ctx the parse tree
     */
    enterColumnNameCommentList?: (ctx: ColumnNameCommentListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.columnNameCommentList`.
     * @param ctx the parse tree
     */
    exitColumnNameCommentList?: (ctx: ColumnNameCommentListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.columnNameComment`.
     * @param ctx the parse tree
     */
    enterColumnNameComment?: (ctx: ColumnNameCommentContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.columnNameComment`.
     * @param ctx the parse tree
     */
    exitColumnNameComment?: (ctx: ColumnNameCommentContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.orderSpecificationRewrite`.
     * @param ctx the parse tree
     */
    enterOrderSpecificationRewrite?: (ctx: OrderSpecificationRewriteContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.orderSpecificationRewrite`.
     * @param ctx the parse tree
     */
    exitOrderSpecificationRewrite?: (ctx: OrderSpecificationRewriteContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.columnRefOrder`.
     * @param ctx the parse tree
     */
    enterColumnRefOrder?: (ctx: ColumnRefOrderContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.columnRefOrder`.
     * @param ctx the parse tree
     */
    exitColumnRefOrder?: (ctx: ColumnRefOrderContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.columnNameType`.
     * @param ctx the parse tree
     */
    enterColumnNameType?: (ctx: ColumnNameTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.columnNameType`.
     * @param ctx the parse tree
     */
    exitColumnNameType?: (ctx: ColumnNameTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.columnNameTypeOrConstraint`.
     * @param ctx the parse tree
     */
    enterColumnNameTypeOrConstraint?: (ctx: ColumnNameTypeOrConstraintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.columnNameTypeOrConstraint`.
     * @param ctx the parse tree
     */
    exitColumnNameTypeOrConstraint?: (ctx: ColumnNameTypeOrConstraintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.tableConstraint`.
     * @param ctx the parse tree
     */
    enterTableConstraint?: (ctx: TableConstraintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.tableConstraint`.
     * @param ctx the parse tree
     */
    exitTableConstraint?: (ctx: TableConstraintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.columnNameTypeConstraint`.
     * @param ctx the parse tree
     */
    enterColumnNameTypeConstraint?: (ctx: ColumnNameTypeConstraintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.columnNameTypeConstraint`.
     * @param ctx the parse tree
     */
    exitColumnNameTypeConstraint?: (ctx: ColumnNameTypeConstraintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterColumnConstraint?: (ctx: ColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitColumnConstraint?: (ctx: ColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.foreignKeyConstraint`.
     * @param ctx the parse tree
     */
    enterForeignKeyConstraint?: (ctx: ForeignKeyConstraintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.foreignKeyConstraint`.
     * @param ctx the parse tree
     */
    exitForeignKeyConstraint?: (ctx: ForeignKeyConstraintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.colConstraint`.
     * @param ctx the parse tree
     */
    enterColConstraint?: (ctx: ColConstraintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.colConstraint`.
     * @param ctx the parse tree
     */
    exitColConstraint?: (ctx: ColConstraintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterColumnConstraint`.
     * @param ctx the parse tree
     */
    enterAlterColumnConstraint?: (ctx: AlterColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterColumnConstraint`.
     * @param ctx the parse tree
     */
    exitAlterColumnConstraint?: (ctx: AlterColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterForeignKeyConstraint`.
     * @param ctx the parse tree
     */
    enterAlterForeignKeyConstraint?: (ctx: AlterForeignKeyConstraintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterForeignKeyConstraint`.
     * @param ctx the parse tree
     */
    exitAlterForeignKeyConstraint?: (ctx: AlterForeignKeyConstraintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterColConstraint`.
     * @param ctx the parse tree
     */
    enterAlterColConstraint?: (ctx: AlterColConstraintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterColConstraint`.
     * @param ctx the parse tree
     */
    exitAlterColConstraint?: (ctx: AlterColConstraintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.columnConstraintType`.
     * @param ctx the parse tree
     */
    enterColumnConstraintType?: (ctx: ColumnConstraintTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.columnConstraintType`.
     * @param ctx the parse tree
     */
    exitColumnConstraintType?: (ctx: ColumnConstraintTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.defaultVal`.
     * @param ctx the parse tree
     */
    enterDefaultVal?: (ctx: DefaultValContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.defaultVal`.
     * @param ctx the parse tree
     */
    exitDefaultVal?: (ctx: DefaultValContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.tableConstraintType`.
     * @param ctx the parse tree
     */
    enterTableConstraintType?: (ctx: TableConstraintTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.tableConstraintType`.
     * @param ctx the parse tree
     */
    exitTableConstraintType?: (ctx: TableConstraintTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.constraintOptsCreate`.
     * @param ctx the parse tree
     */
    enterConstraintOptsCreate?: (ctx: ConstraintOptsCreateContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.constraintOptsCreate`.
     * @param ctx the parse tree
     */
    exitConstraintOptsCreate?: (ctx: ConstraintOptsCreateContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.constraintOptsAlter`.
     * @param ctx the parse tree
     */
    enterConstraintOptsAlter?: (ctx: ConstraintOptsAlterContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.constraintOptsAlter`.
     * @param ctx the parse tree
     */
    exitConstraintOptsAlter?: (ctx: ConstraintOptsAlterContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.columnNameColonType`.
     * @param ctx the parse tree
     */
    enterColumnNameColonType?: (ctx: ColumnNameColonTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.columnNameColonType`.
     * @param ctx the parse tree
     */
    exitColumnNameColonType?: (ctx: ColumnNameColonTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.colType`.
     * @param ctx the parse tree
     */
    enterColType?: (ctx: ColTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.colType`.
     * @param ctx the parse tree
     */
    exitColType?: (ctx: ColTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.colTypeList`.
     * @param ctx the parse tree
     */
    enterColTypeList?: (ctx: ColTypeListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.colTypeList`.
     * @param ctx the parse tree
     */
    exitColTypeList?: (ctx: ColTypeListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.type`.
     * @param ctx the parse tree
     */
    enterType?: (ctx: TypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.type`.
     * @param ctx the parse tree
     */
    exitType?: (ctx: TypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.primitiveType`.
     * @param ctx the parse tree
     */
    enterPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.primitiveType`.
     * @param ctx the parse tree
     */
    exitPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.listType`.
     * @param ctx the parse tree
     */
    enterListType?: (ctx: ListTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.listType`.
     * @param ctx the parse tree
     */
    exitListType?: (ctx: ListTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.structType`.
     * @param ctx the parse tree
     */
    enterStructType?: (ctx: StructTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.structType`.
     * @param ctx the parse tree
     */
    exitStructType?: (ctx: StructTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.mapType`.
     * @param ctx the parse tree
     */
    enterMapType?: (ctx: MapTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.mapType`.
     * @param ctx the parse tree
     */
    exitMapType?: (ctx: MapTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.unionType`.
     * @param ctx the parse tree
     */
    enterUnionType?: (ctx: UnionTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.unionType`.
     * @param ctx the parse tree
     */
    exitUnionType?: (ctx: UnionTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.setOperator`.
     * @param ctx the parse tree
     */
    enterSetOperator?: (ctx: SetOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.setOperator`.
     * @param ctx the parse tree
     */
    exitSetOperator?: (ctx: SetOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.queryStatementExpression`.
     * @param ctx the parse tree
     */
    enterQueryStatementExpression?: (ctx: QueryStatementExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.queryStatementExpression`.
     * @param ctx the parse tree
     */
    exitQueryStatementExpression?: (ctx: QueryStatementExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.queryStatementExpressionBody`.
     * @param ctx the parse tree
     */
    enterQueryStatementExpressionBody?: (ctx: QueryStatementExpressionBodyContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.queryStatementExpressionBody`.
     * @param ctx the parse tree
     */
    exitQueryStatementExpressionBody?: (ctx: QueryStatementExpressionBodyContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.withClause`.
     * @param ctx the parse tree
     */
    enterWithClause?: (ctx: WithClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.withClause`.
     * @param ctx the parse tree
     */
    exitWithClause?: (ctx: WithClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.cteStatement`.
     * @param ctx the parse tree
     */
    enterCteStatement?: (ctx: CteStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.cteStatement`.
     * @param ctx the parse tree
     */
    exitCteStatement?: (ctx: CteStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.fromStatement`.
     * @param ctx the parse tree
     */
    enterFromStatement?: (ctx: FromStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.fromStatement`.
     * @param ctx the parse tree
     */
    exitFromStatement?: (ctx: FromStatementContext) => void;
    /**
     * Enter a parse tree produced by the `fromInsertStmt`
     * labeled alternative in `HiveSqlParser.singleFromStatement`.
     * @param ctx the parse tree
     */
    enterFromInsertStmt?: (ctx: FromInsertStmtContext) => void;
    /**
     * Exit a parse tree produced by the `fromInsertStmt`
     * labeled alternative in `HiveSqlParser.singleFromStatement`.
     * @param ctx the parse tree
     */
    exitFromInsertStmt?: (ctx: FromInsertStmtContext) => void;
    /**
     * Enter a parse tree produced by the `fromSelectStmt`
     * labeled alternative in `HiveSqlParser.singleFromStatement`.
     * @param ctx the parse tree
     */
    enterFromSelectStmt?: (ctx: FromSelectStmtContext) => void;
    /**
     * Exit a parse tree produced by the `fromSelectStmt`
     * labeled alternative in `HiveSqlParser.singleFromStatement`.
     * @param ctx the parse tree
     */
    exitFromSelectStmt?: (ctx: FromSelectStmtContext) => void;
    /**
     * Enter a parse tree produced by the `insertStmt`
     * labeled alternative in `HiveSqlParser.regularBody`.
     * @param ctx the parse tree
     */
    enterInsertStmt?: (ctx: InsertStmtContext) => void;
    /**
     * Exit a parse tree produced by the `insertStmt`
     * labeled alternative in `HiveSqlParser.regularBody`.
     * @param ctx the parse tree
     */
    exitInsertStmt?: (ctx: InsertStmtContext) => void;
    /**
     * Enter a parse tree produced by the `selectStmt`
     * labeled alternative in `HiveSqlParser.regularBody`.
     * @param ctx the parse tree
     */
    enterSelectStmt?: (ctx: SelectStmtContext) => void;
    /**
     * Exit a parse tree produced by the `selectStmt`
     * labeled alternative in `HiveSqlParser.regularBody`.
     * @param ctx the parse tree
     */
    exitSelectStmt?: (ctx: SelectStmtContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.atomSelectStatement`.
     * @param ctx the parse tree
     */
    enterAtomSelectStatement?: (ctx: AtomSelectStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.atomSelectStatement`.
     * @param ctx the parse tree
     */
    exitAtomSelectStatement?: (ctx: AtomSelectStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.selectStatement`.
     * @param ctx the parse tree
     */
    enterSelectStatement?: (ctx: SelectStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.selectStatement`.
     * @param ctx the parse tree
     */
    exitSelectStatement?: (ctx: SelectStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.setOpSelectStatement`.
     * @param ctx the parse tree
     */
    enterSetOpSelectStatement?: (ctx: SetOpSelectStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.setOpSelectStatement`.
     * @param ctx the parse tree
     */
    exitSetOpSelectStatement?: (ctx: SetOpSelectStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.selectStatementWithCTE`.
     * @param ctx the parse tree
     */
    enterSelectStatementWithCTE?: (ctx: SelectStatementWithCTEContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.selectStatementWithCTE`.
     * @param ctx the parse tree
     */
    exitSelectStatementWithCTE?: (ctx: SelectStatementWithCTEContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.insertClause`.
     * @param ctx the parse tree
     */
    enterInsertClause?: (ctx: InsertClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.insertClause`.
     * @param ctx the parse tree
     */
    exitInsertClause?: (ctx: InsertClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.destination`.
     * @param ctx the parse tree
     */
    enterDestination?: (ctx: DestinationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.destination`.
     * @param ctx the parse tree
     */
    exitDestination?: (ctx: DestinationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.limitClause`.
     * @param ctx the parse tree
     */
    enterLimitClause?: (ctx: LimitClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.limitClause`.
     * @param ctx the parse tree
     */
    exitLimitClause?: (ctx: LimitClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.deleteStatement`.
     * @param ctx the parse tree
     */
    enterDeleteStatement?: (ctx: DeleteStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.deleteStatement`.
     * @param ctx the parse tree
     */
    exitDeleteStatement?: (ctx: DeleteStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.columnAssignmentClause`.
     * @param ctx the parse tree
     */
    enterColumnAssignmentClause?: (ctx: ColumnAssignmentClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.columnAssignmentClause`.
     * @param ctx the parse tree
     */
    exitColumnAssignmentClause?: (ctx: ColumnAssignmentClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedencePlusExpressionOrDefault`.
     * @param ctx the parse tree
     */
    enterPrecedencePlusExpressionOrDefault?: (ctx: PrecedencePlusExpressionOrDefaultContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedencePlusExpressionOrDefault`.
     * @param ctx the parse tree
     */
    exitPrecedencePlusExpressionOrDefault?: (ctx: PrecedencePlusExpressionOrDefaultContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.setColumnsClause`.
     * @param ctx the parse tree
     */
    enterSetColumnsClause?: (ctx: SetColumnsClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.setColumnsClause`.
     * @param ctx the parse tree
     */
    exitSetColumnsClause?: (ctx: SetColumnsClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.updateStatement`.
     * @param ctx the parse tree
     */
    enterUpdateStatement?: (ctx: UpdateStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.updateStatement`.
     * @param ctx the parse tree
     */
    exitUpdateStatement?: (ctx: UpdateStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.sqlTransactionStatement`.
     * @param ctx the parse tree
     */
    enterSqlTransactionStatement?: (ctx: SqlTransactionStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.sqlTransactionStatement`.
     * @param ctx the parse tree
     */
    exitSqlTransactionStatement?: (ctx: SqlTransactionStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.startTransactionStatement`.
     * @param ctx the parse tree
     */
    enterStartTransactionStatement?: (ctx: StartTransactionStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.startTransactionStatement`.
     * @param ctx the parse tree
     */
    exitStartTransactionStatement?: (ctx: StartTransactionStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.transactionMode`.
     * @param ctx the parse tree
     */
    enterTransactionMode?: (ctx: TransactionModeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.transactionMode`.
     * @param ctx the parse tree
     */
    exitTransactionMode?: (ctx: TransactionModeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.transactionAccessMode`.
     * @param ctx the parse tree
     */
    enterTransactionAccessMode?: (ctx: TransactionAccessModeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.transactionAccessMode`.
     * @param ctx the parse tree
     */
    exitTransactionAccessMode?: (ctx: TransactionAccessModeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.isolationLevel`.
     * @param ctx the parse tree
     */
    enterIsolationLevel?: (ctx: IsolationLevelContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.isolationLevel`.
     * @param ctx the parse tree
     */
    exitIsolationLevel?: (ctx: IsolationLevelContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.levelOfIsolation`.
     * @param ctx the parse tree
     */
    enterLevelOfIsolation?: (ctx: LevelOfIsolationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.levelOfIsolation`.
     * @param ctx the parse tree
     */
    exitLevelOfIsolation?: (ctx: LevelOfIsolationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.commitStatement`.
     * @param ctx the parse tree
     */
    enterCommitStatement?: (ctx: CommitStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.commitStatement`.
     * @param ctx the parse tree
     */
    exitCommitStatement?: (ctx: CommitStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.rollbackStatement`.
     * @param ctx the parse tree
     */
    enterRollbackStatement?: (ctx: RollbackStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.rollbackStatement`.
     * @param ctx the parse tree
     */
    exitRollbackStatement?: (ctx: RollbackStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.setAutoCommitStatement`.
     * @param ctx the parse tree
     */
    enterSetAutoCommitStatement?: (ctx: SetAutoCommitStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.setAutoCommitStatement`.
     * @param ctx the parse tree
     */
    exitSetAutoCommitStatement?: (ctx: SetAutoCommitStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.abortTransactionStatement`.
     * @param ctx the parse tree
     */
    enterAbortTransactionStatement?: (ctx: AbortTransactionStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.abortTransactionStatement`.
     * @param ctx the parse tree
     */
    exitAbortTransactionStatement?: (ctx: AbortTransactionStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.abortCompactionStatement`.
     * @param ctx the parse tree
     */
    enterAbortCompactionStatement?: (ctx: AbortCompactionStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.abortCompactionStatement`.
     * @param ctx the parse tree
     */
    exitAbortCompactionStatement?: (ctx: AbortCompactionStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.mergeStatement`.
     * @param ctx the parse tree
     */
    enterMergeStatement?: (ctx: MergeStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.mergeStatement`.
     * @param ctx the parse tree
     */
    exitMergeStatement?: (ctx: MergeStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.whenClauses`.
     * @param ctx the parse tree
     */
    enterWhenClauses?: (ctx: WhenClausesContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.whenClauses`.
     * @param ctx the parse tree
     */
    exitWhenClauses?: (ctx: WhenClausesContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.whenNotMatchedClause`.
     * @param ctx the parse tree
     */
    enterWhenNotMatchedClause?: (ctx: WhenNotMatchedClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.whenNotMatchedClause`.
     * @param ctx the parse tree
     */
    exitWhenNotMatchedClause?: (ctx: WhenNotMatchedClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.whenMatchedAndClause`.
     * @param ctx the parse tree
     */
    enterWhenMatchedAndClause?: (ctx: WhenMatchedAndClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.whenMatchedAndClause`.
     * @param ctx the parse tree
     */
    exitWhenMatchedAndClause?: (ctx: WhenMatchedAndClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.whenMatchedThenClause`.
     * @param ctx the parse tree
     */
    enterWhenMatchedThenClause?: (ctx: WhenMatchedThenClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.whenMatchedThenClause`.
     * @param ctx the parse tree
     */
    exitWhenMatchedThenClause?: (ctx: WhenMatchedThenClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.updateOrDelete`.
     * @param ctx the parse tree
     */
    enterUpdateOrDelete?: (ctx: UpdateOrDeleteContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.updateOrDelete`.
     * @param ctx the parse tree
     */
    exitUpdateOrDelete?: (ctx: UpdateOrDeleteContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.killQueryStatement`.
     * @param ctx the parse tree
     */
    enterKillQueryStatement?: (ctx: KillQueryStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.killQueryStatement`.
     * @param ctx the parse tree
     */
    exitKillQueryStatement?: (ctx: KillQueryStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.compactionId`.
     * @param ctx the parse tree
     */
    enterCompactionId?: (ctx: CompactionIdContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.compactionId`.
     * @param ctx the parse tree
     */
    exitCompactionId?: (ctx: CompactionIdContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.compactionPool`.
     * @param ctx the parse tree
     */
    enterCompactionPool?: (ctx: CompactionPoolContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.compactionPool`.
     * @param ctx the parse tree
     */
    exitCompactionPool?: (ctx: CompactionPoolContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.compactionType`.
     * @param ctx the parse tree
     */
    enterCompactionType?: (ctx: CompactionTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.compactionType`.
     * @param ctx the parse tree
     */
    exitCompactionType?: (ctx: CompactionTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.compactionStatus`.
     * @param ctx the parse tree
     */
    enterCompactionStatus?: (ctx: CompactionStatusContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.compactionStatus`.
     * @param ctx the parse tree
     */
    exitCompactionStatus?: (ctx: CompactionStatusContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatement`.
     * @param ctx the parse tree
     */
    enterAlterStatement?: (ctx: AlterStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatement`.
     * @param ctx the parse tree
     */
    exitAlterStatement?: (ctx: AlterStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterTableStatementSuffix`.
     * @param ctx the parse tree
     */
    enterAlterTableStatementSuffix?: (ctx: AlterTableStatementSuffixContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterTableStatementSuffix`.
     * @param ctx the parse tree
     */
    exitAlterTableStatementSuffix?: (ctx: AlterTableStatementSuffixContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterTblPartitionStatementSuffix`.
     * @param ctx the parse tree
     */
    enterAlterTblPartitionStatementSuffix?: (ctx: AlterTblPartitionStatementSuffixContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterTblPartitionStatementSuffix`.
     * @param ctx the parse tree
     */
    exitAlterTblPartitionStatementSuffix?: (ctx: AlterTblPartitionStatementSuffixContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatementPartitionKeyType`.
     * @param ctx the parse tree
     */
    enterAlterStatementPartitionKeyType?: (ctx: AlterStatementPartitionKeyTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatementPartitionKeyType`.
     * @param ctx the parse tree
     */
    exitAlterStatementPartitionKeyType?: (ctx: AlterStatementPartitionKeyTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterViewStatementSuffix`.
     * @param ctx the parse tree
     */
    enterAlterViewStatementSuffix?: (ctx: AlterViewStatementSuffixContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterViewStatementSuffix`.
     * @param ctx the parse tree
     */
    exitAlterViewStatementSuffix?: (ctx: AlterViewStatementSuffixContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterMaterializedViewStatementSuffix`.
     * @param ctx the parse tree
     */
    enterAlterMaterializedViewStatementSuffix?: (ctx: AlterMaterializedViewStatementSuffixContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterMaterializedViewStatementSuffix`.
     * @param ctx the parse tree
     */
    exitAlterMaterializedViewStatementSuffix?: (ctx: AlterMaterializedViewStatementSuffixContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterMaterializedViewSuffixRewrite`.
     * @param ctx the parse tree
     */
    enterAlterMaterializedViewSuffixRewrite?: (ctx: AlterMaterializedViewSuffixRewriteContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterMaterializedViewSuffixRewrite`.
     * @param ctx the parse tree
     */
    exitAlterMaterializedViewSuffixRewrite?: (ctx: AlterMaterializedViewSuffixRewriteContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterMaterializedViewSuffixRebuild`.
     * @param ctx the parse tree
     */
    enterAlterMaterializedViewSuffixRebuild?: (ctx: AlterMaterializedViewSuffixRebuildContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterMaterializedViewSuffixRebuild`.
     * @param ctx the parse tree
     */
    exitAlterMaterializedViewSuffixRebuild?: (ctx: AlterMaterializedViewSuffixRebuildContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterDatabaseStatementSuffix`.
     * @param ctx the parse tree
     */
    enterAlterDatabaseStatementSuffix?: (ctx: AlterDatabaseStatementSuffixContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterDatabaseStatementSuffix`.
     * @param ctx the parse tree
     */
    exitAlterDatabaseStatementSuffix?: (ctx: AlterDatabaseStatementSuffixContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterDatabaseSuffixProperties`.
     * @param ctx the parse tree
     */
    enterAlterDatabaseSuffixProperties?: (ctx: AlterDatabaseSuffixPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterDatabaseSuffixProperties`.
     * @param ctx the parse tree
     */
    exitAlterDatabaseSuffixProperties?: (ctx: AlterDatabaseSuffixPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterDatabaseSuffixSetOwner`.
     * @param ctx the parse tree
     */
    enterAlterDatabaseSuffixSetOwner?: (ctx: AlterDatabaseSuffixSetOwnerContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterDatabaseSuffixSetOwner`.
     * @param ctx the parse tree
     */
    exitAlterDatabaseSuffixSetOwner?: (ctx: AlterDatabaseSuffixSetOwnerContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterDatabaseSuffixSetLocation`.
     * @param ctx the parse tree
     */
    enterAlterDatabaseSuffixSetLocation?: (ctx: AlterDatabaseSuffixSetLocationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterDatabaseSuffixSetLocation`.
     * @param ctx the parse tree
     */
    exitAlterDatabaseSuffixSetLocation?: (ctx: AlterDatabaseSuffixSetLocationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterDatabaseSuffixSetManagedLocation`.
     * @param ctx the parse tree
     */
    enterAlterDatabaseSuffixSetManagedLocation?: (ctx: AlterDatabaseSuffixSetManagedLocationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterDatabaseSuffixSetManagedLocation`.
     * @param ctx the parse tree
     */
    exitAlterDatabaseSuffixSetManagedLocation?: (ctx: AlterDatabaseSuffixSetManagedLocationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatementSuffixRename`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixRename?: (ctx: AlterStatementSuffixRenameContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatementSuffixRename`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixRename?: (ctx: AlterStatementSuffixRenameContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatementSuffixAddCol`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixAddCol?: (ctx: AlterStatementSuffixAddColContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatementSuffixAddCol`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixAddCol?: (ctx: AlterStatementSuffixAddColContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatementSuffixAddConstraint`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixAddConstraint?: (ctx: AlterStatementSuffixAddConstraintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatementSuffixAddConstraint`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixAddConstraint?: (ctx: AlterStatementSuffixAddConstraintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatementSuffixUpdateColumns`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixUpdateColumns?: (ctx: AlterStatementSuffixUpdateColumnsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatementSuffixUpdateColumns`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixUpdateColumns?: (ctx: AlterStatementSuffixUpdateColumnsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatementSuffixProtections`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixProtections?: (ctx: AlterStatementSuffixProtectionsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatementSuffixProtections`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixProtections?: (ctx: AlterStatementSuffixProtectionsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatementSuffixDropConstraint`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixDropConstraint?: (ctx: AlterStatementSuffixDropConstraintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatementSuffixDropConstraint`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixDropConstraint?: (ctx: AlterStatementSuffixDropConstraintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatementSuffixRenameCol`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixRenameCol?: (ctx: AlterStatementSuffixRenameColContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatementSuffixRenameCol`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixRenameCol?: (ctx: AlterStatementSuffixRenameColContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatementSuffixUpdateStatsCol`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixUpdateStatsCol?: (ctx: AlterStatementSuffixUpdateStatsColContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatementSuffixUpdateStatsCol`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixUpdateStatsCol?: (ctx: AlterStatementSuffixUpdateStatsColContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatementSuffixUpdateStats`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixUpdateStats?: (ctx: AlterStatementSuffixUpdateStatsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatementSuffixUpdateStats`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixUpdateStats?: (ctx: AlterStatementSuffixUpdateStatsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatementChangeColPosition`.
     * @param ctx the parse tree
     */
    enterAlterStatementChangeColPosition?: (ctx: AlterStatementChangeColPositionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatementChangeColPosition`.
     * @param ctx the parse tree
     */
    exitAlterStatementChangeColPosition?: (ctx: AlterStatementChangeColPositionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatementSuffixAddPartitions`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixAddPartitions?: (ctx: AlterStatementSuffixAddPartitionsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatementSuffixAddPartitions`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixAddPartitions?: (ctx: AlterStatementSuffixAddPartitionsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatementSuffixAddPartitionsElement`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixAddPartitionsElement?: (ctx: AlterStatementSuffixAddPartitionsElementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatementSuffixAddPartitionsElement`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixAddPartitionsElement?: (ctx: AlterStatementSuffixAddPartitionsElementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatementSuffixTouch`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixTouch?: (ctx: AlterStatementSuffixTouchContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatementSuffixTouch`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixTouch?: (ctx: AlterStatementSuffixTouchContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatementSuffixArchive`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixArchive?: (ctx: AlterStatementSuffixArchiveContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatementSuffixArchive`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixArchive?: (ctx: AlterStatementSuffixArchiveContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatementSuffixUnArchive`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixUnArchive?: (ctx: AlterStatementSuffixUnArchiveContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatementSuffixUnArchive`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixUnArchive?: (ctx: AlterStatementSuffixUnArchiveContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.partitionLocation`.
     * @param ctx the parse tree
     */
    enterPartitionLocation?: (ctx: PartitionLocationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.partitionLocation`.
     * @param ctx the parse tree
     */
    exitPartitionLocation?: (ctx: PartitionLocationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatementSuffixRecoverPartitions`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixRecoverPartitions?: (ctx: AlterStatementSuffixRecoverPartitionsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatementSuffixRecoverPartitions`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixRecoverPartitions?: (ctx: AlterStatementSuffixRecoverPartitionsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatementSuffixDropPartitions`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixDropPartitions?: (ctx: AlterStatementSuffixDropPartitionsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatementSuffixDropPartitions`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixDropPartitions?: (ctx: AlterStatementSuffixDropPartitionsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatementSuffixProperties`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixProperties?: (ctx: AlterStatementSuffixPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatementSuffixProperties`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixProperties?: (ctx: AlterStatementSuffixPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterViewSuffixProperties`.
     * @param ctx the parse tree
     */
    enterAlterViewSuffixProperties?: (ctx: AlterViewSuffixPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterViewSuffixProperties`.
     * @param ctx the parse tree
     */
    exitAlterViewSuffixProperties?: (ctx: AlterViewSuffixPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatementSuffixSerdeProperties`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixSerdeProperties?: (ctx: AlterStatementSuffixSerdePropertiesContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatementSuffixSerdeProperties`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixSerdeProperties?: (ctx: AlterStatementSuffixSerdePropertiesContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.tablePartitionPrefix`.
     * @param ctx the parse tree
     */
    enterTablePartitionPrefix?: (ctx: TablePartitionPrefixContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.tablePartitionPrefix`.
     * @param ctx the parse tree
     */
    exitTablePartitionPrefix?: (ctx: TablePartitionPrefixContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatementSuffixFileFormat`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixFileFormat?: (ctx: AlterStatementSuffixFileFormatContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatementSuffixFileFormat`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixFileFormat?: (ctx: AlterStatementSuffixFileFormatContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatementSuffixClusterbySortby`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixClusterbySortby?: (ctx: AlterStatementSuffixClusterbySortbyContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatementSuffixClusterbySortby`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixClusterbySortby?: (ctx: AlterStatementSuffixClusterbySortbyContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterTblPartitionStatementSuffixSkewedLocation`.
     * @param ctx the parse tree
     */
    enterAlterTblPartitionStatementSuffixSkewedLocation?: (ctx: AlterTblPartitionStatementSuffixSkewedLocationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterTblPartitionStatementSuffixSkewedLocation`.
     * @param ctx the parse tree
     */
    exitAlterTblPartitionStatementSuffixSkewedLocation?: (ctx: AlterTblPartitionStatementSuffixSkewedLocationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.skewedLocations`.
     * @param ctx the parse tree
     */
    enterSkewedLocations?: (ctx: SkewedLocationsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.skewedLocations`.
     * @param ctx the parse tree
     */
    exitSkewedLocations?: (ctx: SkewedLocationsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.skewedLocationsList`.
     * @param ctx the parse tree
     */
    enterSkewedLocationsList?: (ctx: SkewedLocationsListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.skewedLocationsList`.
     * @param ctx the parse tree
     */
    exitSkewedLocationsList?: (ctx: SkewedLocationsListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.skewedLocationMap`.
     * @param ctx the parse tree
     */
    enterSkewedLocationMap?: (ctx: SkewedLocationMapContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.skewedLocationMap`.
     * @param ctx the parse tree
     */
    exitSkewedLocationMap?: (ctx: SkewedLocationMapContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatementSuffixLocation`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixLocation?: (ctx: AlterStatementSuffixLocationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatementSuffixLocation`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixLocation?: (ctx: AlterStatementSuffixLocationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatementSuffixSkewedby`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixSkewedby?: (ctx: AlterStatementSuffixSkewedbyContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatementSuffixSkewedby`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixSkewedby?: (ctx: AlterStatementSuffixSkewedbyContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatementSuffixExchangePartition`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixExchangePartition?: (ctx: AlterStatementSuffixExchangePartitionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatementSuffixExchangePartition`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixExchangePartition?: (ctx: AlterStatementSuffixExchangePartitionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatementSuffixRenamePart`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixRenamePart?: (ctx: AlterStatementSuffixRenamePartContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatementSuffixRenamePart`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixRenamePart?: (ctx: AlterStatementSuffixRenamePartContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatementSuffixStatsPart`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixStatsPart?: (ctx: AlterStatementSuffixStatsPartContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatementSuffixStatsPart`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixStatsPart?: (ctx: AlterStatementSuffixStatsPartContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatementSuffixMergeFiles`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixMergeFiles?: (ctx: AlterStatementSuffixMergeFilesContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatementSuffixMergeFiles`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixMergeFiles?: (ctx: AlterStatementSuffixMergeFilesContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatementSuffixBucketNum`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixBucketNum?: (ctx: AlterStatementSuffixBucketNumContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatementSuffixBucketNum`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixBucketNum?: (ctx: AlterStatementSuffixBucketNumContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.blocking`.
     * @param ctx the parse tree
     */
    enterBlocking?: (ctx: BlockingContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.blocking`.
     * @param ctx the parse tree
     */
    exitBlocking?: (ctx: BlockingContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.compactPool`.
     * @param ctx the parse tree
     */
    enterCompactPool?: (ctx: CompactPoolContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.compactPool`.
     * @param ctx the parse tree
     */
    exitCompactPool?: (ctx: CompactPoolContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatementSuffixCompact`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixCompact?: (ctx: AlterStatementSuffixCompactContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatementSuffixCompact`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixCompact?: (ctx: AlterStatementSuffixCompactContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatementSuffixSetOwner`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixSetOwner?: (ctx: AlterStatementSuffixSetOwnerContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatementSuffixSetOwner`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixSetOwner?: (ctx: AlterStatementSuffixSetOwnerContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatementSuffixSetPartSpec`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixSetPartSpec?: (ctx: AlterStatementSuffixSetPartSpecContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatementSuffixSetPartSpec`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixSetPartSpec?: (ctx: AlterStatementSuffixSetPartSpecContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterStatementSuffixExecute`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixExecute?: (ctx: AlterStatementSuffixExecuteContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterStatementSuffixExecute`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixExecute?: (ctx: AlterStatementSuffixExecuteContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterIndexStatementSuffix`.
     * @param ctx the parse tree
     */
    enterAlterIndexStatementSuffix?: (ctx: AlterIndexStatementSuffixContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterIndexStatementSuffix`.
     * @param ctx the parse tree
     */
    exitAlterIndexStatementSuffix?: (ctx: AlterIndexStatementSuffixContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.fileFormat`.
     * @param ctx the parse tree
     */
    enterFileFormat?: (ctx: FileFormatContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.fileFormat`.
     * @param ctx the parse tree
     */
    exitFileFormat?: (ctx: FileFormatContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterDataConnectorStatementSuffix`.
     * @param ctx the parse tree
     */
    enterAlterDataConnectorStatementSuffix?: (ctx: AlterDataConnectorStatementSuffixContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterDataConnectorStatementSuffix`.
     * @param ctx the parse tree
     */
    exitAlterDataConnectorStatementSuffix?: (ctx: AlterDataConnectorStatementSuffixContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterDataConnectorSuffixProperties`.
     * @param ctx the parse tree
     */
    enterAlterDataConnectorSuffixProperties?: (ctx: AlterDataConnectorSuffixPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterDataConnectorSuffixProperties`.
     * @param ctx the parse tree
     */
    exitAlterDataConnectorSuffixProperties?: (ctx: AlterDataConnectorSuffixPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterDataConnectorSuffixSetOwner`.
     * @param ctx the parse tree
     */
    enterAlterDataConnectorSuffixSetOwner?: (ctx: AlterDataConnectorSuffixSetOwnerContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterDataConnectorSuffixSetOwner`.
     * @param ctx the parse tree
     */
    exitAlterDataConnectorSuffixSetOwner?: (ctx: AlterDataConnectorSuffixSetOwnerContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterDataConnectorSuffixSetUrl`.
     * @param ctx the parse tree
     */
    enterAlterDataConnectorSuffixSetUrl?: (ctx: AlterDataConnectorSuffixSetUrlContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterDataConnectorSuffixSetUrl`.
     * @param ctx the parse tree
     */
    exitAlterDataConnectorSuffixSetUrl?: (ctx: AlterDataConnectorSuffixSetUrlContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.likeTableOrFile`.
     * @param ctx the parse tree
     */
    enterLikeTableOrFile?: (ctx: LikeTableOrFileContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.likeTableOrFile`.
     * @param ctx the parse tree
     */
    exitLikeTableOrFile?: (ctx: LikeTableOrFileContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.createTableStatement`.
     * @param ctx the parse tree
     */
    enterCreateTableStatement?: (ctx: CreateTableStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.createTableStatement`.
     * @param ctx the parse tree
     */
    exitCreateTableStatement?: (ctx: CreateTableStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.createDataConnectorStatement`.
     * @param ctx the parse tree
     */
    enterCreateDataConnectorStatement?: (ctx: CreateDataConnectorStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.createDataConnectorStatement`.
     * @param ctx the parse tree
     */
    exitCreateDataConnectorStatement?: (ctx: CreateDataConnectorStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.dataConnectorComment`.
     * @param ctx the parse tree
     */
    enterDataConnectorComment?: (ctx: DataConnectorCommentContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.dataConnectorComment`.
     * @param ctx the parse tree
     */
    exitDataConnectorComment?: (ctx: DataConnectorCommentContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.dataConnectorUrl`.
     * @param ctx the parse tree
     */
    enterDataConnectorUrl?: (ctx: DataConnectorUrlContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.dataConnectorUrl`.
     * @param ctx the parse tree
     */
    exitDataConnectorUrl?: (ctx: DataConnectorUrlContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.dataConnectorType`.
     * @param ctx the parse tree
     */
    enterDataConnectorType?: (ctx: DataConnectorTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.dataConnectorType`.
     * @param ctx the parse tree
     */
    exitDataConnectorType?: (ctx: DataConnectorTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.dcProperties`.
     * @param ctx the parse tree
     */
    enterDcProperties?: (ctx: DcPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.dcProperties`.
     * @param ctx the parse tree
     */
    exitDcProperties?: (ctx: DcPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.dropDataConnectorStatement`.
     * @param ctx the parse tree
     */
    enterDropDataConnectorStatement?: (ctx: DropDataConnectorStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.dropDataConnectorStatement`.
     * @param ctx the parse tree
     */
    exitDropDataConnectorStatement?: (ctx: DropDataConnectorStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.tableAllColumns`.
     * @param ctx the parse tree
     */
    enterTableAllColumns?: (ctx: TableAllColumnsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.tableAllColumns`.
     * @param ctx the parse tree
     */
    exitTableAllColumns?: (ctx: TableAllColumnsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.defaultValue`.
     * @param ctx the parse tree
     */
    enterDefaultValue?: (ctx: DefaultValueContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.defaultValue`.
     * @param ctx the parse tree
     */
    exitDefaultValue?: (ctx: DefaultValueContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.expressionList`.
     * @param ctx the parse tree
     */
    enterExpressionList?: (ctx: ExpressionListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.expressionList`.
     * @param ctx the parse tree
     */
    exitExpressionList?: (ctx: ExpressionListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.aliasList`.
     * @param ctx the parse tree
     */
    enterAliasList?: (ctx: AliasListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.aliasList`.
     * @param ctx the parse tree
     */
    exitAliasList?: (ctx: AliasListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.fromClause`.
     * @param ctx the parse tree
     */
    enterFromClause?: (ctx: FromClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.fromClause`.
     * @param ctx the parse tree
     */
    exitFromClause?: (ctx: FromClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.fromSource`.
     * @param ctx the parse tree
     */
    enterFromSource?: (ctx: FromSourceContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.fromSource`.
     * @param ctx the parse tree
     */
    exitFromSource?: (ctx: FromSourceContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.atomjoinSource`.
     * @param ctx the parse tree
     */
    enterAtomjoinSource?: (ctx: AtomjoinSourceContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.atomjoinSource`.
     * @param ctx the parse tree
     */
    exitAtomjoinSource?: (ctx: AtomjoinSourceContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.joinSource`.
     * @param ctx the parse tree
     */
    enterJoinSource?: (ctx: JoinSourceContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.joinSource`.
     * @param ctx the parse tree
     */
    exitJoinSource?: (ctx: JoinSourceContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.joinSourcePart`.
     * @param ctx the parse tree
     */
    enterJoinSourcePart?: (ctx: JoinSourcePartContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.joinSourcePart`.
     * @param ctx the parse tree
     */
    exitJoinSourcePart?: (ctx: JoinSourcePartContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.uniqueJoinSource`.
     * @param ctx the parse tree
     */
    enterUniqueJoinSource?: (ctx: UniqueJoinSourceContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.uniqueJoinSource`.
     * @param ctx the parse tree
     */
    exitUniqueJoinSource?: (ctx: UniqueJoinSourceContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.uniqueJoinExpr`.
     * @param ctx the parse tree
     */
    enterUniqueJoinExpr?: (ctx: UniqueJoinExprContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.uniqueJoinExpr`.
     * @param ctx the parse tree
     */
    exitUniqueJoinExpr?: (ctx: UniqueJoinExprContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.uniqueJoinToken`.
     * @param ctx the parse tree
     */
    enterUniqueJoinToken?: (ctx: UniqueJoinTokenContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.uniqueJoinToken`.
     * @param ctx the parse tree
     */
    exitUniqueJoinToken?: (ctx: UniqueJoinTokenContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.joinToken`.
     * @param ctx the parse tree
     */
    enterJoinToken?: (ctx: JoinTokenContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.joinToken`.
     * @param ctx the parse tree
     */
    exitJoinToken?: (ctx: JoinTokenContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.lateralView`.
     * @param ctx the parse tree
     */
    enterLateralView?: (ctx: LateralViewContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.lateralView`.
     * @param ctx the parse tree
     */
    exitLateralView?: (ctx: LateralViewContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.tableAlias`.
     * @param ctx the parse tree
     */
    enterTableAlias?: (ctx: TableAliasContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.tableAlias`.
     * @param ctx the parse tree
     */
    exitTableAlias?: (ctx: TableAliasContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.tableBucketSample`.
     * @param ctx the parse tree
     */
    enterTableBucketSample?: (ctx: TableBucketSampleContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.tableBucketSample`.
     * @param ctx the parse tree
     */
    exitTableBucketSample?: (ctx: TableBucketSampleContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.splitSample`.
     * @param ctx the parse tree
     */
    enterSplitSample?: (ctx: SplitSampleContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.splitSample`.
     * @param ctx the parse tree
     */
    exitSplitSample?: (ctx: SplitSampleContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.tableSample`.
     * @param ctx the parse tree
     */
    enterTableSample?: (ctx: TableSampleContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.tableSample`.
     * @param ctx the parse tree
     */
    exitTableSample?: (ctx: TableSampleContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.tableSource`.
     * @param ctx the parse tree
     */
    enterTableSource?: (ctx: TableSourceContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.tableSource`.
     * @param ctx the parse tree
     */
    exitTableSource?: (ctx: TableSourceContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.asOfClause`.
     * @param ctx the parse tree
     */
    enterAsOfClause?: (ctx: AsOfClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.asOfClause`.
     * @param ctx the parse tree
     */
    exitAsOfClause?: (ctx: AsOfClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.uniqueJoinTableSource`.
     * @param ctx the parse tree
     */
    enterUniqueJoinTableSource?: (ctx: UniqueJoinTableSourceContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.uniqueJoinTableSource`.
     * @param ctx the parse tree
     */
    exitUniqueJoinTableSource?: (ctx: UniqueJoinTableSourceContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.dbSchemaName`.
     * @param ctx the parse tree
     */
    enterDbSchemaName?: (ctx: DbSchemaNameContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.dbSchemaName`.
     * @param ctx the parse tree
     */
    exitDbSchemaName?: (ctx: DbSchemaNameContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.dbSchemaNameCreate`.
     * @param ctx the parse tree
     */
    enterDbSchemaNameCreate?: (ctx: DbSchemaNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.dbSchemaNameCreate`.
     * @param ctx the parse tree
     */
    exitDbSchemaNameCreate?: (ctx: DbSchemaNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.tableOrView`.
     * @param ctx the parse tree
     */
    enterTableOrView?: (ctx: TableOrViewContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.tableOrView`.
     * @param ctx the parse tree
     */
    exitTableOrView?: (ctx: TableOrViewContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.tableName`.
     * @param ctx the parse tree
     */
    enterTableName?: (ctx: TableNameContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.tableName`.
     * @param ctx the parse tree
     */
    exitTableName?: (ctx: TableNameContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.tableNameCreate`.
     * @param ctx the parse tree
     */
    enterTableNameCreate?: (ctx: TableNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.tableNameCreate`.
     * @param ctx the parse tree
     */
    exitTableNameCreate?: (ctx: TableNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.viewName`.
     * @param ctx the parse tree
     */
    enterViewName?: (ctx: ViewNameContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.viewName`.
     * @param ctx the parse tree
     */
    exitViewName?: (ctx: ViewNameContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.viewNameCreate`.
     * @param ctx the parse tree
     */
    enterViewNameCreate?: (ctx: ViewNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.viewNameCreate`.
     * @param ctx the parse tree
     */
    exitViewNameCreate?: (ctx: ViewNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.subQuerySource`.
     * @param ctx the parse tree
     */
    enterSubQuerySource?: (ctx: SubQuerySourceContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.subQuerySource`.
     * @param ctx the parse tree
     */
    exitSubQuerySource?: (ctx: SubQuerySourceContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.partitioningSpec`.
     * @param ctx the parse tree
     */
    enterPartitioningSpec?: (ctx: PartitioningSpecContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.partitioningSpec`.
     * @param ctx the parse tree
     */
    exitPartitioningSpec?: (ctx: PartitioningSpecContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.partitionTableFunctionSource`.
     * @param ctx the parse tree
     */
    enterPartitionTableFunctionSource?: (ctx: PartitionTableFunctionSourceContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.partitionTableFunctionSource`.
     * @param ctx the parse tree
     */
    exitPartitionTableFunctionSource?: (ctx: PartitionTableFunctionSourceContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.partitionedTableFunction`.
     * @param ctx the parse tree
     */
    enterPartitionedTableFunction?: (ctx: PartitionedTableFunctionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.partitionedTableFunction`.
     * @param ctx the parse tree
     */
    exitPartitionedTableFunction?: (ctx: PartitionedTableFunctionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.whereClause`.
     * @param ctx the parse tree
     */
    enterWhereClause?: (ctx: WhereClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.whereClause`.
     * @param ctx the parse tree
     */
    exitWhereClause?: (ctx: WhereClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.searchCondition`.
     * @param ctx the parse tree
     */
    enterSearchCondition?: (ctx: SearchConditionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.searchCondition`.
     * @param ctx the parse tree
     */
    exitSearchCondition?: (ctx: SearchConditionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.valuesSource`.
     * @param ctx the parse tree
     */
    enterValuesSource?: (ctx: ValuesSourceContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.valuesSource`.
     * @param ctx the parse tree
     */
    exitValuesSource?: (ctx: ValuesSourceContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.valuesClause`.
     * @param ctx the parse tree
     */
    enterValuesClause?: (ctx: ValuesClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.valuesClause`.
     * @param ctx the parse tree
     */
    exitValuesClause?: (ctx: ValuesClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.valuesTableConstructor`.
     * @param ctx the parse tree
     */
    enterValuesTableConstructor?: (ctx: ValuesTableConstructorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.valuesTableConstructor`.
     * @param ctx the parse tree
     */
    exitValuesTableConstructor?: (ctx: ValuesTableConstructorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.valueRowConstructor`.
     * @param ctx the parse tree
     */
    enterValueRowConstructor?: (ctx: ValueRowConstructorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.valueRowConstructor`.
     * @param ctx the parse tree
     */
    exitValueRowConstructor?: (ctx: ValueRowConstructorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.firstValueRowConstructor`.
     * @param ctx the parse tree
     */
    enterFirstValueRowConstructor?: (ctx: FirstValueRowConstructorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.firstValueRowConstructor`.
     * @param ctx the parse tree
     */
    exitFirstValueRowConstructor?: (ctx: FirstValueRowConstructorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.virtualTableSource`.
     * @param ctx the parse tree
     */
    enterVirtualTableSource?: (ctx: VirtualTableSourceContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.virtualTableSource`.
     * @param ctx the parse tree
     */
    exitVirtualTableSource?: (ctx: VirtualTableSourceContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.selectClause`.
     * @param ctx the parse tree
     */
    enterSelectClause?: (ctx: SelectClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.selectClause`.
     * @param ctx the parse tree
     */
    exitSelectClause?: (ctx: SelectClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.all_distinct`.
     * @param ctx the parse tree
     */
    enterAll_distinct?: (ctx: All_distinctContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.all_distinct`.
     * @param ctx the parse tree
     */
    exitAll_distinct?: (ctx: All_distinctContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.selectList`.
     * @param ctx the parse tree
     */
    enterSelectList?: (ctx: SelectListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.selectList`.
     * @param ctx the parse tree
     */
    exitSelectList?: (ctx: SelectListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.selectTrfmClause`.
     * @param ctx the parse tree
     */
    enterSelectTrfmClause?: (ctx: SelectTrfmClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.selectTrfmClause`.
     * @param ctx the parse tree
     */
    exitSelectTrfmClause?: (ctx: SelectTrfmClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.selectItem`.
     * @param ctx the parse tree
     */
    enterSelectItem?: (ctx: SelectItemContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.selectItem`.
     * @param ctx the parse tree
     */
    exitSelectItem?: (ctx: SelectItemContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.trfmClause`.
     * @param ctx the parse tree
     */
    enterTrfmClause?: (ctx: TrfmClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.trfmClause`.
     * @param ctx the parse tree
     */
    exitTrfmClause?: (ctx: TrfmClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.selectExpression`.
     * @param ctx the parse tree
     */
    enterSelectExpression?: (ctx: SelectExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.selectExpression`.
     * @param ctx the parse tree
     */
    exitSelectExpression?: (ctx: SelectExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.selectExpressionList`.
     * @param ctx the parse tree
     */
    enterSelectExpressionList?: (ctx: SelectExpressionListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.selectExpressionList`.
     * @param ctx the parse tree
     */
    exitSelectExpressionList?: (ctx: SelectExpressionListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.window_clause`.
     * @param ctx the parse tree
     */
    enterWindow_clause?: (ctx: Window_clauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.window_clause`.
     * @param ctx the parse tree
     */
    exitWindow_clause?: (ctx: Window_clauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.window_defn`.
     * @param ctx the parse tree
     */
    enterWindow_defn?: (ctx: Window_defnContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.window_defn`.
     * @param ctx the parse tree
     */
    exitWindow_defn?: (ctx: Window_defnContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.window_specification`.
     * @param ctx the parse tree
     */
    enterWindow_specification?: (ctx: Window_specificationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.window_specification`.
     * @param ctx the parse tree
     */
    exitWindow_specification?: (ctx: Window_specificationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.window_frame`.
     * @param ctx the parse tree
     */
    enterWindow_frame?: (ctx: Window_frameContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.window_frame`.
     * @param ctx the parse tree
     */
    exitWindow_frame?: (ctx: Window_frameContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.window_range_expression`.
     * @param ctx the parse tree
     */
    enterWindow_range_expression?: (ctx: Window_range_expressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.window_range_expression`.
     * @param ctx the parse tree
     */
    exitWindow_range_expression?: (ctx: Window_range_expressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.window_value_expression`.
     * @param ctx the parse tree
     */
    enterWindow_value_expression?: (ctx: Window_value_expressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.window_value_expression`.
     * @param ctx the parse tree
     */
    exitWindow_value_expression?: (ctx: Window_value_expressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.window_frame_start_boundary`.
     * @param ctx the parse tree
     */
    enterWindow_frame_start_boundary?: (ctx: Window_frame_start_boundaryContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.window_frame_start_boundary`.
     * @param ctx the parse tree
     */
    exitWindow_frame_start_boundary?: (ctx: Window_frame_start_boundaryContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.window_frame_boundary`.
     * @param ctx the parse tree
     */
    enterWindow_frame_boundary?: (ctx: Window_frame_boundaryContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.window_frame_boundary`.
     * @param ctx the parse tree
     */
    exitWindow_frame_boundary?: (ctx: Window_frame_boundaryContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.groupByClause`.
     * @param ctx the parse tree
     */
    enterGroupByClause?: (ctx: GroupByClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.groupByClause`.
     * @param ctx the parse tree
     */
    exitGroupByClause?: (ctx: GroupByClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.groupby_expression`.
     * @param ctx the parse tree
     */
    enterGroupby_expression?: (ctx: Groupby_expressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.groupby_expression`.
     * @param ctx the parse tree
     */
    exitGroupby_expression?: (ctx: Groupby_expressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.groupByEmpty`.
     * @param ctx the parse tree
     */
    enterGroupByEmpty?: (ctx: GroupByEmptyContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.groupByEmpty`.
     * @param ctx the parse tree
     */
    exitGroupByEmpty?: (ctx: GroupByEmptyContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.rollupStandard`.
     * @param ctx the parse tree
     */
    enterRollupStandard?: (ctx: RollupStandardContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.rollupStandard`.
     * @param ctx the parse tree
     */
    exitRollupStandard?: (ctx: RollupStandardContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.rollupOldSyntax`.
     * @param ctx the parse tree
     */
    enterRollupOldSyntax?: (ctx: RollupOldSyntaxContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.rollupOldSyntax`.
     * @param ctx the parse tree
     */
    exitRollupOldSyntax?: (ctx: RollupOldSyntaxContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.groupingSetExpression`.
     * @param ctx the parse tree
     */
    enterGroupingSetExpression?: (ctx: GroupingSetExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.groupingSetExpression`.
     * @param ctx the parse tree
     */
    exitGroupingSetExpression?: (ctx: GroupingSetExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.groupingSetExpressionMultiple`.
     * @param ctx the parse tree
     */
    enterGroupingSetExpressionMultiple?: (ctx: GroupingSetExpressionMultipleContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.groupingSetExpressionMultiple`.
     * @param ctx the parse tree
     */
    exitGroupingSetExpressionMultiple?: (ctx: GroupingSetExpressionMultipleContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.groupingExpressionSingle`.
     * @param ctx the parse tree
     */
    enterGroupingExpressionSingle?: (ctx: GroupingExpressionSingleContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.groupingExpressionSingle`.
     * @param ctx the parse tree
     */
    exitGroupingExpressionSingle?: (ctx: GroupingExpressionSingleContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.havingClause`.
     * @param ctx the parse tree
     */
    enterHavingClause?: (ctx: HavingClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.havingClause`.
     * @param ctx the parse tree
     */
    exitHavingClause?: (ctx: HavingClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.qualifyClause`.
     * @param ctx the parse tree
     */
    enterQualifyClause?: (ctx: QualifyClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.qualifyClause`.
     * @param ctx the parse tree
     */
    exitQualifyClause?: (ctx: QualifyClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.havingCondition`.
     * @param ctx the parse tree
     */
    enterHavingCondition?: (ctx: HavingConditionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.havingCondition`.
     * @param ctx the parse tree
     */
    exitHavingCondition?: (ctx: HavingConditionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.expressionsInParenthesis`.
     * @param ctx the parse tree
     */
    enterExpressionsInParenthesis?: (ctx: ExpressionsInParenthesisContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.expressionsInParenthesis`.
     * @param ctx the parse tree
     */
    exitExpressionsInParenthesis?: (ctx: ExpressionsInParenthesisContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.expressionsNotInParenthesis`.
     * @param ctx the parse tree
     */
    enterExpressionsNotInParenthesis?: (ctx: ExpressionsNotInParenthesisContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.expressionsNotInParenthesis`.
     * @param ctx the parse tree
     */
    exitExpressionsNotInParenthesis?: (ctx: ExpressionsNotInParenthesisContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.expressionPart`.
     * @param ctx the parse tree
     */
    enterExpressionPart?: (ctx: ExpressionPartContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.expressionPart`.
     * @param ctx the parse tree
     */
    exitExpressionPart?: (ctx: ExpressionPartContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.expressionOrDefault`.
     * @param ctx the parse tree
     */
    enterExpressionOrDefault?: (ctx: ExpressionOrDefaultContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.expressionOrDefault`.
     * @param ctx the parse tree
     */
    exitExpressionOrDefault?: (ctx: ExpressionOrDefaultContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.firstExpressionsWithAlias`.
     * @param ctx the parse tree
     */
    enterFirstExpressionsWithAlias?: (ctx: FirstExpressionsWithAliasContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.firstExpressionsWithAlias`.
     * @param ctx the parse tree
     */
    exitFirstExpressionsWithAlias?: (ctx: FirstExpressionsWithAliasContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.expressionWithAlias`.
     * @param ctx the parse tree
     */
    enterExpressionWithAlias?: (ctx: ExpressionWithAliasContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.expressionWithAlias`.
     * @param ctx the parse tree
     */
    exitExpressionWithAlias?: (ctx: ExpressionWithAliasContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.expressions`.
     * @param ctx the parse tree
     */
    enterExpressions?: (ctx: ExpressionsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.expressions`.
     * @param ctx the parse tree
     */
    exitExpressions?: (ctx: ExpressionsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.columnRefOrderInParenthesis`.
     * @param ctx the parse tree
     */
    enterColumnRefOrderInParenthesis?: (ctx: ColumnRefOrderInParenthesisContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.columnRefOrderInParenthesis`.
     * @param ctx the parse tree
     */
    exitColumnRefOrderInParenthesis?: (ctx: ColumnRefOrderInParenthesisContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.columnRefOrderNotInParenthesis`.
     * @param ctx the parse tree
     */
    enterColumnRefOrderNotInParenthesis?: (ctx: ColumnRefOrderNotInParenthesisContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.columnRefOrderNotInParenthesis`.
     * @param ctx the parse tree
     */
    exitColumnRefOrderNotInParenthesis?: (ctx: ColumnRefOrderNotInParenthesisContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.orderByClause`.
     * @param ctx the parse tree
     */
    enterOrderByClause?: (ctx: OrderByClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.orderByClause`.
     * @param ctx the parse tree
     */
    exitOrderByClause?: (ctx: OrderByClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.clusterByClause`.
     * @param ctx the parse tree
     */
    enterClusterByClause?: (ctx: ClusterByClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.clusterByClause`.
     * @param ctx the parse tree
     */
    exitClusterByClause?: (ctx: ClusterByClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.partitionByClause`.
     * @param ctx the parse tree
     */
    enterPartitionByClause?: (ctx: PartitionByClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.partitionByClause`.
     * @param ctx the parse tree
     */
    exitPartitionByClause?: (ctx: PartitionByClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.distributeByClause`.
     * @param ctx the parse tree
     */
    enterDistributeByClause?: (ctx: DistributeByClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.distributeByClause`.
     * @param ctx the parse tree
     */
    exitDistributeByClause?: (ctx: DistributeByClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.sortByClause`.
     * @param ctx the parse tree
     */
    enterSortByClause?: (ctx: SortByClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.sortByClause`.
     * @param ctx the parse tree
     */
    exitSortByClause?: (ctx: SortByClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.trimFunction`.
     * @param ctx the parse tree
     */
    enterTrimFunction?: (ctx: TrimFunctionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.trimFunction`.
     * @param ctx the parse tree
     */
    exitTrimFunction?: (ctx: TrimFunctionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.function_`.
     * @param ctx the parse tree
     */
    enterFunction_?: (ctx: Function_Context) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.function_`.
     * @param ctx the parse tree
     */
    exitFunction_?: (ctx: Function_Context) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.null_treatment`.
     * @param ctx the parse tree
     */
    enterNull_treatment?: (ctx: Null_treatmentContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.null_treatment`.
     * @param ctx the parse tree
     */
    exitNull_treatment?: (ctx: Null_treatmentContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.functionNameCreate`.
     * @param ctx the parse tree
     */
    enterFunctionNameCreate?: (ctx: FunctionNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.functionNameCreate`.
     * @param ctx the parse tree
     */
    exitFunctionNameCreate?: (ctx: FunctionNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.functionNameForDDL`.
     * @param ctx the parse tree
     */
    enterFunctionNameForDDL?: (ctx: FunctionNameForDDLContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.functionNameForDDL`.
     * @param ctx the parse tree
     */
    exitFunctionNameForDDL?: (ctx: FunctionNameForDDLContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.functionNameForInvoke`.
     * @param ctx the parse tree
     */
    enterFunctionNameForInvoke?: (ctx: FunctionNameForInvokeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.functionNameForInvoke`.
     * @param ctx the parse tree
     */
    exitFunctionNameForInvoke?: (ctx: FunctionNameForInvokeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.userDefinedFuncName`.
     * @param ctx the parse tree
     */
    enterUserDefinedFuncName?: (ctx: UserDefinedFuncNameContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.userDefinedFuncName`.
     * @param ctx the parse tree
     */
    exitUserDefinedFuncName?: (ctx: UserDefinedFuncNameContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.internalFunctionName`.
     * @param ctx the parse tree
     */
    enterInternalFunctionName?: (ctx: InternalFunctionNameContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.internalFunctionName`.
     * @param ctx the parse tree
     */
    exitInternalFunctionName?: (ctx: InternalFunctionNameContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.castExpression`.
     * @param ctx the parse tree
     */
    enterCastExpression?: (ctx: CastExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.castExpression`.
     * @param ctx the parse tree
     */
    exitCastExpression?: (ctx: CastExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.caseExpression`.
     * @param ctx the parse tree
     */
    enterCaseExpression?: (ctx: CaseExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.caseExpression`.
     * @param ctx the parse tree
     */
    exitCaseExpression?: (ctx: CaseExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.whenExpression`.
     * @param ctx the parse tree
     */
    enterWhenExpression?: (ctx: WhenExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.whenExpression`.
     * @param ctx the parse tree
     */
    exitWhenExpression?: (ctx: WhenExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.floorExpression`.
     * @param ctx the parse tree
     */
    enterFloorExpression?: (ctx: FloorExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.floorExpression`.
     * @param ctx the parse tree
     */
    exitFloorExpression?: (ctx: FloorExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.floorDateQualifiers`.
     * @param ctx the parse tree
     */
    enterFloorDateQualifiers?: (ctx: FloorDateQualifiersContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.floorDateQualifiers`.
     * @param ctx the parse tree
     */
    exitFloorDateQualifiers?: (ctx: FloorDateQualifiersContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.extractExpression`.
     * @param ctx the parse tree
     */
    enterExtractExpression?: (ctx: ExtractExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.extractExpression`.
     * @param ctx the parse tree
     */
    exitExtractExpression?: (ctx: ExtractExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.timeQualifiers`.
     * @param ctx the parse tree
     */
    enterTimeQualifiers?: (ctx: TimeQualifiersContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.timeQualifiers`.
     * @param ctx the parse tree
     */
    exitTimeQualifiers?: (ctx: TimeQualifiersContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.constant`.
     * @param ctx the parse tree
     */
    enterConstant?: (ctx: ConstantContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.constant`.
     * @param ctx the parse tree
     */
    exitConstant?: (ctx: ConstantContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.prepareStmtParam`.
     * @param ctx the parse tree
     */
    enterPrepareStmtParam?: (ctx: PrepareStmtParamContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.prepareStmtParam`.
     * @param ctx the parse tree
     */
    exitPrepareStmtParam?: (ctx: PrepareStmtParamContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.parameterIdx`.
     * @param ctx the parse tree
     */
    enterParameterIdx?: (ctx: ParameterIdxContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.parameterIdx`.
     * @param ctx the parse tree
     */
    exitParameterIdx?: (ctx: ParameterIdxContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.stringLiteralSequence`.
     * @param ctx the parse tree
     */
    enterStringLiteralSequence?: (ctx: StringLiteralSequenceContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.stringLiteralSequence`.
     * @param ctx the parse tree
     */
    exitStringLiteralSequence?: (ctx: StringLiteralSequenceContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.charSetStringLiteral`.
     * @param ctx the parse tree
     */
    enterCharSetStringLiteral?: (ctx: CharSetStringLiteralContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.charSetStringLiteral`.
     * @param ctx the parse tree
     */
    exitCharSetStringLiteral?: (ctx: CharSetStringLiteralContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.dateLiteral`.
     * @param ctx the parse tree
     */
    enterDateLiteral?: (ctx: DateLiteralContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.dateLiteral`.
     * @param ctx the parse tree
     */
    exitDateLiteral?: (ctx: DateLiteralContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.timestampLiteral`.
     * @param ctx the parse tree
     */
    enterTimestampLiteral?: (ctx: TimestampLiteralContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.timestampLiteral`.
     * @param ctx the parse tree
     */
    exitTimestampLiteral?: (ctx: TimestampLiteralContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.timestampLocalTZLiteral`.
     * @param ctx the parse tree
     */
    enterTimestampLocalTZLiteral?: (ctx: TimestampLocalTZLiteralContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.timestampLocalTZLiteral`.
     * @param ctx the parse tree
     */
    exitTimestampLocalTZLiteral?: (ctx: TimestampLocalTZLiteralContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.intervalValue`.
     * @param ctx the parse tree
     */
    enterIntervalValue?: (ctx: IntervalValueContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.intervalValue`.
     * @param ctx the parse tree
     */
    exitIntervalValue?: (ctx: IntervalValueContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.intervalLiteral`.
     * @param ctx the parse tree
     */
    enterIntervalLiteral?: (ctx: IntervalLiteralContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.intervalLiteral`.
     * @param ctx the parse tree
     */
    exitIntervalLiteral?: (ctx: IntervalLiteralContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.intervalExpression`.
     * @param ctx the parse tree
     */
    enterIntervalExpression?: (ctx: IntervalExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.intervalExpression`.
     * @param ctx the parse tree
     */
    exitIntervalExpression?: (ctx: IntervalExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.intervalQualifiers`.
     * @param ctx the parse tree
     */
    enterIntervalQualifiers?: (ctx: IntervalQualifiersContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.intervalQualifiers`.
     * @param ctx the parse tree
     */
    exitIntervalQualifiers?: (ctx: IntervalQualifiersContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.atomExpression`.
     * @param ctx the parse tree
     */
    enterAtomExpression?: (ctx: AtomExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.atomExpression`.
     * @param ctx the parse tree
     */
    exitAtomExpression?: (ctx: AtomExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedenceFieldExpression`.
     * @param ctx the parse tree
     */
    enterPrecedenceFieldExpression?: (ctx: PrecedenceFieldExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedenceFieldExpression`.
     * @param ctx the parse tree
     */
    exitPrecedenceFieldExpression?: (ctx: PrecedenceFieldExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedenceUnaryOperator`.
     * @param ctx the parse tree
     */
    enterPrecedenceUnaryOperator?: (ctx: PrecedenceUnaryOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedenceUnaryOperator`.
     * @param ctx the parse tree
     */
    exitPrecedenceUnaryOperator?: (ctx: PrecedenceUnaryOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedenceUnaryPrefixExpression`.
     * @param ctx the parse tree
     */
    enterPrecedenceUnaryPrefixExpression?: (ctx: PrecedenceUnaryPrefixExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedenceUnaryPrefixExpression`.
     * @param ctx the parse tree
     */
    exitPrecedenceUnaryPrefixExpression?: (ctx: PrecedenceUnaryPrefixExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedenceBitwiseXorOperator`.
     * @param ctx the parse tree
     */
    enterPrecedenceBitwiseXorOperator?: (ctx: PrecedenceBitwiseXorOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedenceBitwiseXorOperator`.
     * @param ctx the parse tree
     */
    exitPrecedenceBitwiseXorOperator?: (ctx: PrecedenceBitwiseXorOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedenceBitwiseXorExpression`.
     * @param ctx the parse tree
     */
    enterPrecedenceBitwiseXorExpression?: (ctx: PrecedenceBitwiseXorExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedenceBitwiseXorExpression`.
     * @param ctx the parse tree
     */
    exitPrecedenceBitwiseXorExpression?: (ctx: PrecedenceBitwiseXorExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedenceStarOperator`.
     * @param ctx the parse tree
     */
    enterPrecedenceStarOperator?: (ctx: PrecedenceStarOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedenceStarOperator`.
     * @param ctx the parse tree
     */
    exitPrecedenceStarOperator?: (ctx: PrecedenceStarOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedenceStarExpression`.
     * @param ctx the parse tree
     */
    enterPrecedenceStarExpression?: (ctx: PrecedenceStarExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedenceStarExpression`.
     * @param ctx the parse tree
     */
    exitPrecedenceStarExpression?: (ctx: PrecedenceStarExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedencePlusOperator`.
     * @param ctx the parse tree
     */
    enterPrecedencePlusOperator?: (ctx: PrecedencePlusOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedencePlusOperator`.
     * @param ctx the parse tree
     */
    exitPrecedencePlusOperator?: (ctx: PrecedencePlusOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedencePlusExpression`.
     * @param ctx the parse tree
     */
    enterPrecedencePlusExpression?: (ctx: PrecedencePlusExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedencePlusExpression`.
     * @param ctx the parse tree
     */
    exitPrecedencePlusExpression?: (ctx: PrecedencePlusExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedenceConcatenateOperator`.
     * @param ctx the parse tree
     */
    enterPrecedenceConcatenateOperator?: (ctx: PrecedenceConcatenateOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedenceConcatenateOperator`.
     * @param ctx the parse tree
     */
    exitPrecedenceConcatenateOperator?: (ctx: PrecedenceConcatenateOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedenceConcatenateExpression`.
     * @param ctx the parse tree
     */
    enterPrecedenceConcatenateExpression?: (ctx: PrecedenceConcatenateExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedenceConcatenateExpression`.
     * @param ctx the parse tree
     */
    exitPrecedenceConcatenateExpression?: (ctx: PrecedenceConcatenateExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedenceAmpersandOperator`.
     * @param ctx the parse tree
     */
    enterPrecedenceAmpersandOperator?: (ctx: PrecedenceAmpersandOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedenceAmpersandOperator`.
     * @param ctx the parse tree
     */
    exitPrecedenceAmpersandOperator?: (ctx: PrecedenceAmpersandOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedenceAmpersandExpression`.
     * @param ctx the parse tree
     */
    enterPrecedenceAmpersandExpression?: (ctx: PrecedenceAmpersandExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedenceAmpersandExpression`.
     * @param ctx the parse tree
     */
    exitPrecedenceAmpersandExpression?: (ctx: PrecedenceAmpersandExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedenceBitwiseOrOperator`.
     * @param ctx the parse tree
     */
    enterPrecedenceBitwiseOrOperator?: (ctx: PrecedenceBitwiseOrOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedenceBitwiseOrOperator`.
     * @param ctx the parse tree
     */
    exitPrecedenceBitwiseOrOperator?: (ctx: PrecedenceBitwiseOrOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedenceBitwiseOrExpression`.
     * @param ctx the parse tree
     */
    enterPrecedenceBitwiseOrExpression?: (ctx: PrecedenceBitwiseOrExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedenceBitwiseOrExpression`.
     * @param ctx the parse tree
     */
    exitPrecedenceBitwiseOrExpression?: (ctx: PrecedenceBitwiseOrExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedenceRegexpOperator`.
     * @param ctx the parse tree
     */
    enterPrecedenceRegexpOperator?: (ctx: PrecedenceRegexpOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedenceRegexpOperator`.
     * @param ctx the parse tree
     */
    exitPrecedenceRegexpOperator?: (ctx: PrecedenceRegexpOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedenceSimilarOperator`.
     * @param ctx the parse tree
     */
    enterPrecedenceSimilarOperator?: (ctx: PrecedenceSimilarOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedenceSimilarOperator`.
     * @param ctx the parse tree
     */
    exitPrecedenceSimilarOperator?: (ctx: PrecedenceSimilarOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.subQueryExpression`.
     * @param ctx the parse tree
     */
    enterSubQueryExpression?: (ctx: SubQueryExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.subQueryExpression`.
     * @param ctx the parse tree
     */
    exitSubQueryExpression?: (ctx: SubQueryExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedenceSimilarExpression`.
     * @param ctx the parse tree
     */
    enterPrecedenceSimilarExpression?: (ctx: PrecedenceSimilarExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedenceSimilarExpression`.
     * @param ctx the parse tree
     */
    exitPrecedenceSimilarExpression?: (ctx: PrecedenceSimilarExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedenceSimilarExpressionMain`.
     * @param ctx the parse tree
     */
    enterPrecedenceSimilarExpressionMain?: (ctx: PrecedenceSimilarExpressionMainContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedenceSimilarExpressionMain`.
     * @param ctx the parse tree
     */
    exitPrecedenceSimilarExpressionMain?: (ctx: PrecedenceSimilarExpressionMainContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedenceSimilarExpressionPart`.
     * @param ctx the parse tree
     */
    enterPrecedenceSimilarExpressionPart?: (ctx: PrecedenceSimilarExpressionPartContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedenceSimilarExpressionPart`.
     * @param ctx the parse tree
     */
    exitPrecedenceSimilarExpressionPart?: (ctx: PrecedenceSimilarExpressionPartContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedenceSimilarExpressionAtom`.
     * @param ctx the parse tree
     */
    enterPrecedenceSimilarExpressionAtom?: (ctx: PrecedenceSimilarExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedenceSimilarExpressionAtom`.
     * @param ctx the parse tree
     */
    exitPrecedenceSimilarExpressionAtom?: (ctx: PrecedenceSimilarExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedenceSimilarExpressionQuantifierPredicate`.
     * @param ctx the parse tree
     */
    enterPrecedenceSimilarExpressionQuantifierPredicate?: (ctx: PrecedenceSimilarExpressionQuantifierPredicateContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedenceSimilarExpressionQuantifierPredicate`.
     * @param ctx the parse tree
     */
    exitPrecedenceSimilarExpressionQuantifierPredicate?: (ctx: PrecedenceSimilarExpressionQuantifierPredicateContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.quantifierType`.
     * @param ctx the parse tree
     */
    enterQuantifierType?: (ctx: QuantifierTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.quantifierType`.
     * @param ctx the parse tree
     */
    exitQuantifierType?: (ctx: QuantifierTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedenceSimilarExpressionIn`.
     * @param ctx the parse tree
     */
    enterPrecedenceSimilarExpressionIn?: (ctx: PrecedenceSimilarExpressionInContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedenceSimilarExpressionIn`.
     * @param ctx the parse tree
     */
    exitPrecedenceSimilarExpressionIn?: (ctx: PrecedenceSimilarExpressionInContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedenceSimilarExpressionPartNot`.
     * @param ctx the parse tree
     */
    enterPrecedenceSimilarExpressionPartNot?: (ctx: PrecedenceSimilarExpressionPartNotContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedenceSimilarExpressionPartNot`.
     * @param ctx the parse tree
     */
    exitPrecedenceSimilarExpressionPartNot?: (ctx: PrecedenceSimilarExpressionPartNotContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedenceDistinctOperator`.
     * @param ctx the parse tree
     */
    enterPrecedenceDistinctOperator?: (ctx: PrecedenceDistinctOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedenceDistinctOperator`.
     * @param ctx the parse tree
     */
    exitPrecedenceDistinctOperator?: (ctx: PrecedenceDistinctOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedenceEqualOperator`.
     * @param ctx the parse tree
     */
    enterPrecedenceEqualOperator?: (ctx: PrecedenceEqualOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedenceEqualOperator`.
     * @param ctx the parse tree
     */
    exitPrecedenceEqualOperator?: (ctx: PrecedenceEqualOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedenceEqualExpression`.
     * @param ctx the parse tree
     */
    enterPrecedenceEqualExpression?: (ctx: PrecedenceEqualExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedenceEqualExpression`.
     * @param ctx the parse tree
     */
    exitPrecedenceEqualExpression?: (ctx: PrecedenceEqualExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.isCondition`.
     * @param ctx the parse tree
     */
    enterIsCondition?: (ctx: IsConditionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.isCondition`.
     * @param ctx the parse tree
     */
    exitIsCondition?: (ctx: IsConditionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedenceUnarySuffixExpression`.
     * @param ctx the parse tree
     */
    enterPrecedenceUnarySuffixExpression?: (ctx: PrecedenceUnarySuffixExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedenceUnarySuffixExpression`.
     * @param ctx the parse tree
     */
    exitPrecedenceUnarySuffixExpression?: (ctx: PrecedenceUnarySuffixExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedenceNotOperator`.
     * @param ctx the parse tree
     */
    enterPrecedenceNotOperator?: (ctx: PrecedenceNotOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedenceNotOperator`.
     * @param ctx the parse tree
     */
    exitPrecedenceNotOperator?: (ctx: PrecedenceNotOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedenceNotExpression`.
     * @param ctx the parse tree
     */
    enterPrecedenceNotExpression?: (ctx: PrecedenceNotExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedenceNotExpression`.
     * @param ctx the parse tree
     */
    exitPrecedenceNotExpression?: (ctx: PrecedenceNotExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedenceAndOperator`.
     * @param ctx the parse tree
     */
    enterPrecedenceAndOperator?: (ctx: PrecedenceAndOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedenceAndOperator`.
     * @param ctx the parse tree
     */
    exitPrecedenceAndOperator?: (ctx: PrecedenceAndOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedenceAndExpression`.
     * @param ctx the parse tree
     */
    enterPrecedenceAndExpression?: (ctx: PrecedenceAndExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedenceAndExpression`.
     * @param ctx the parse tree
     */
    exitPrecedenceAndExpression?: (ctx: PrecedenceAndExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedenceOrOperator`.
     * @param ctx the parse tree
     */
    enterPrecedenceOrOperator?: (ctx: PrecedenceOrOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedenceOrOperator`.
     * @param ctx the parse tree
     */
    exitPrecedenceOrOperator?: (ctx: PrecedenceOrOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.precedenceOrExpression`.
     * @param ctx the parse tree
     */
    enterPrecedenceOrExpression?: (ctx: PrecedenceOrExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.precedenceOrExpression`.
     * @param ctx the parse tree
     */
    exitPrecedenceOrExpression?: (ctx: PrecedenceOrExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.booleanValue`.
     * @param ctx the parse tree
     */
    enterBooleanValue?: (ctx: BooleanValueContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.booleanValue`.
     * @param ctx the parse tree
     */
    exitBooleanValue?: (ctx: BooleanValueContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.booleanValueTok`.
     * @param ctx the parse tree
     */
    enterBooleanValueTok?: (ctx: BooleanValueTokContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.booleanValueTok`.
     * @param ctx the parse tree
     */
    exitBooleanValueTok?: (ctx: BooleanValueTokContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.tableOrPartition`.
     * @param ctx the parse tree
     */
    enterTableOrPartition?: (ctx: TableOrPartitionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.tableOrPartition`.
     * @param ctx the parse tree
     */
    exitTableOrPartition?: (ctx: TableOrPartitionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.partitionSpec`.
     * @param ctx the parse tree
     */
    enterPartitionSpec?: (ctx: PartitionSpecContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.partitionSpec`.
     * @param ctx the parse tree
     */
    exitPartitionSpec?: (ctx: PartitionSpecContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.partitionVal`.
     * @param ctx the parse tree
     */
    enterPartitionVal?: (ctx: PartitionValContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.partitionVal`.
     * @param ctx the parse tree
     */
    exitPartitionVal?: (ctx: PartitionValContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.partitionSelectorSpec`.
     * @param ctx the parse tree
     */
    enterPartitionSelectorSpec?: (ctx: PartitionSelectorSpecContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.partitionSelectorSpec`.
     * @param ctx the parse tree
     */
    exitPartitionSelectorSpec?: (ctx: PartitionSelectorSpecContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.partitionSelectorVal`.
     * @param ctx the parse tree
     */
    enterPartitionSelectorVal?: (ctx: PartitionSelectorValContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.partitionSelectorVal`.
     * @param ctx the parse tree
     */
    exitPartitionSelectorVal?: (ctx: PartitionSelectorValContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.partitionSelectorOperator`.
     * @param ctx the parse tree
     */
    enterPartitionSelectorOperator?: (ctx: PartitionSelectorOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.partitionSelectorOperator`.
     * @param ctx the parse tree
     */
    exitPartitionSelectorOperator?: (ctx: PartitionSelectorOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.subQuerySelectorOperator`.
     * @param ctx the parse tree
     */
    enterSubQuerySelectorOperator?: (ctx: SubQuerySelectorOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.subQuerySelectorOperator`.
     * @param ctx the parse tree
     */
    exitSubQuerySelectorOperator?: (ctx: SubQuerySelectorOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.sysFuncNames`.
     * @param ctx the parse tree
     */
    enterSysFuncNames?: (ctx: SysFuncNamesContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.sysFuncNames`.
     * @param ctx the parse tree
     */
    exitSysFuncNames?: (ctx: SysFuncNamesContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.id_`.
     * @param ctx the parse tree
     */
    enterId_?: (ctx: Id_Context) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.id_`.
     * @param ctx the parse tree
     */
    exitId_?: (ctx: Id_Context) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.functionIdentifier`.
     * @param ctx the parse tree
     */
    enterFunctionIdentifier?: (ctx: FunctionIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.functionIdentifier`.
     * @param ctx the parse tree
     */
    exitFunctionIdentifier?: (ctx: FunctionIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.principalIdentifier`.
     * @param ctx the parse tree
     */
    enterPrincipalIdentifier?: (ctx: PrincipalIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.principalIdentifier`.
     * @param ctx the parse tree
     */
    exitPrincipalIdentifier?: (ctx: PrincipalIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.nonReserved`.
     * @param ctx the parse tree
     */
    enterNonReserved?: (ctx: NonReservedContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.nonReserved`.
     * @param ctx the parse tree
     */
    exitNonReserved?: (ctx: NonReservedContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.sql11ReservedKeywordsUsedAsFunctionName`.
     * @param ctx the parse tree
     */
    enterSql11ReservedKeywordsUsedAsFunctionName?: (ctx: Sql11ReservedKeywordsUsedAsFunctionNameContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.sql11ReservedKeywordsUsedAsFunctionName`.
     * @param ctx the parse tree
     */
    exitSql11ReservedKeywordsUsedAsFunctionName?: (ctx: Sql11ReservedKeywordsUsedAsFunctionNameContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.hint`.
     * @param ctx the parse tree
     */
    enterHint?: (ctx: HintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.hint`.
     * @param ctx the parse tree
     */
    exitHint?: (ctx: HintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.hintList`.
     * @param ctx the parse tree
     */
    enterHintList?: (ctx: HintListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.hintList`.
     * @param ctx the parse tree
     */
    exitHintList?: (ctx: HintListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.hintItem`.
     * @param ctx the parse tree
     */
    enterHintItem?: (ctx: HintItemContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.hintItem`.
     * @param ctx the parse tree
     */
    exitHintItem?: (ctx: HintItemContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.hintName`.
     * @param ctx the parse tree
     */
    enterHintName?: (ctx: HintNameContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.hintName`.
     * @param ctx the parse tree
     */
    exitHintName?: (ctx: HintNameContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.hintArgs`.
     * @param ctx the parse tree
     */
    enterHintArgs?: (ctx: HintArgsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.hintArgs`.
     * @param ctx the parse tree
     */
    exitHintArgs?: (ctx: HintArgsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.hintArgName`.
     * @param ctx the parse tree
     */
    enterHintArgName?: (ctx: HintArgNameContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.hintArgName`.
     * @param ctx the parse tree
     */
    exitHintArgName?: (ctx: HintArgNameContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.prepareStatement`.
     * @param ctx the parse tree
     */
    enterPrepareStatement?: (ctx: PrepareStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.prepareStatement`.
     * @param ctx the parse tree
     */
    exitPrepareStatement?: (ctx: PrepareStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.executeStatement`.
     * @param ctx the parse tree
     */
    enterExecuteStatement?: (ctx: ExecuteStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.executeStatement`.
     * @param ctx the parse tree
     */
    exitExecuteStatement?: (ctx: ExecuteStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.setConfigPropertiesStatement`.
     * @param ctx the parse tree
     */
    enterSetConfigPropertiesStatement?: (ctx: SetConfigPropertiesStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.setConfigPropertiesStatement`.
     * @param ctx the parse tree
     */
    exitSetConfigPropertiesStatement?: (ctx: SetConfigPropertiesStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.executeParamList`.
     * @param ctx the parse tree
     */
    enterExecuteParamList?: (ctx: ExecuteParamListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.executeParamList`.
     * @param ctx the parse tree
     */
    exitExecuteParamList?: (ctx: ExecuteParamListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.resourcePlanDdlStatements`.
     * @param ctx the parse tree
     */
    enterResourcePlanDdlStatements?: (ctx: ResourcePlanDdlStatementsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.resourcePlanDdlStatements`.
     * @param ctx the parse tree
     */
    exitResourcePlanDdlStatements?: (ctx: ResourcePlanDdlStatementsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.rpAssign`.
     * @param ctx the parse tree
     */
    enterRpAssign?: (ctx: RpAssignContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.rpAssign`.
     * @param ctx the parse tree
     */
    exitRpAssign?: (ctx: RpAssignContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.rpAssignList`.
     * @param ctx the parse tree
     */
    enterRpAssignList?: (ctx: RpAssignListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.rpAssignList`.
     * @param ctx the parse tree
     */
    exitRpAssignList?: (ctx: RpAssignListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.rpUnassign`.
     * @param ctx the parse tree
     */
    enterRpUnassign?: (ctx: RpUnassignContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.rpUnassign`.
     * @param ctx the parse tree
     */
    exitRpUnassign?: (ctx: RpUnassignContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.rpUnassignList`.
     * @param ctx the parse tree
     */
    enterRpUnassignList?: (ctx: RpUnassignListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.rpUnassignList`.
     * @param ctx the parse tree
     */
    exitRpUnassignList?: (ctx: RpUnassignListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.createResourcePlanStatement`.
     * @param ctx the parse tree
     */
    enterCreateResourcePlanStatement?: (ctx: CreateResourcePlanStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.createResourcePlanStatement`.
     * @param ctx the parse tree
     */
    exitCreateResourcePlanStatement?: (ctx: CreateResourcePlanStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.withReplace`.
     * @param ctx the parse tree
     */
    enterWithReplace?: (ctx: WithReplaceContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.withReplace`.
     * @param ctx the parse tree
     */
    exitWithReplace?: (ctx: WithReplaceContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.activate`.
     * @param ctx the parse tree
     */
    enterActivate?: (ctx: ActivateContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.activate`.
     * @param ctx the parse tree
     */
    exitActivate?: (ctx: ActivateContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.enable`.
     * @param ctx the parse tree
     */
    enterEnable?: (ctx: EnableContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.enable`.
     * @param ctx the parse tree
     */
    exitEnable?: (ctx: EnableContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.disable`.
     * @param ctx the parse tree
     */
    enterDisable?: (ctx: DisableContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.disable`.
     * @param ctx the parse tree
     */
    exitDisable?: (ctx: DisableContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.unmanaged`.
     * @param ctx the parse tree
     */
    enterUnmanaged?: (ctx: UnmanagedContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.unmanaged`.
     * @param ctx the parse tree
     */
    exitUnmanaged?: (ctx: UnmanagedContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.year`.
     * @param ctx the parse tree
     */
    enterYear?: (ctx: YearContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.year`.
     * @param ctx the parse tree
     */
    exitYear?: (ctx: YearContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.month`.
     * @param ctx the parse tree
     */
    enterMonth?: (ctx: MonthContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.month`.
     * @param ctx the parse tree
     */
    exitMonth?: (ctx: MonthContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.week`.
     * @param ctx the parse tree
     */
    enterWeek?: (ctx: WeekContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.week`.
     * @param ctx the parse tree
     */
    exitWeek?: (ctx: WeekContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.day`.
     * @param ctx the parse tree
     */
    enterDay?: (ctx: DayContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.day`.
     * @param ctx the parse tree
     */
    exitDay?: (ctx: DayContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.hour`.
     * @param ctx the parse tree
     */
    enterHour?: (ctx: HourContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.hour`.
     * @param ctx the parse tree
     */
    exitHour?: (ctx: HourContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.minute`.
     * @param ctx the parse tree
     */
    enterMinute?: (ctx: MinuteContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.minute`.
     * @param ctx the parse tree
     */
    exitMinute?: (ctx: MinuteContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.second`.
     * @param ctx the parse tree
     */
    enterSecond?: (ctx: SecondContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.second`.
     * @param ctx the parse tree
     */
    exitSecond?: (ctx: SecondContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.decimal`.
     * @param ctx the parse tree
     */
    enterDecimal?: (ctx: DecimalContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.decimal`.
     * @param ctx the parse tree
     */
    exitDecimal?: (ctx: DecimalContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterResourcePlanStatement`.
     * @param ctx the parse tree
     */
    enterAlterResourcePlanStatement?: (ctx: AlterResourcePlanStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterResourcePlanStatement`.
     * @param ctx the parse tree
     */
    exitAlterResourcePlanStatement?: (ctx: AlterResourcePlanStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.globalWmStatement`.
     * @param ctx the parse tree
     */
    enterGlobalWmStatement?: (ctx: GlobalWmStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.globalWmStatement`.
     * @param ctx the parse tree
     */
    exitGlobalWmStatement?: (ctx: GlobalWmStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.replaceResourcePlanStatement`.
     * @param ctx the parse tree
     */
    enterReplaceResourcePlanStatement?: (ctx: ReplaceResourcePlanStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.replaceResourcePlanStatement`.
     * @param ctx the parse tree
     */
    exitReplaceResourcePlanStatement?: (ctx: ReplaceResourcePlanStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.dropResourcePlanStatement`.
     * @param ctx the parse tree
     */
    enterDropResourcePlanStatement?: (ctx: DropResourcePlanStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.dropResourcePlanStatement`.
     * @param ctx the parse tree
     */
    exitDropResourcePlanStatement?: (ctx: DropResourcePlanStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.poolPath`.
     * @param ctx the parse tree
     */
    enterPoolPath?: (ctx: PoolPathContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.poolPath`.
     * @param ctx the parse tree
     */
    exitPoolPath?: (ctx: PoolPathContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.triggerExpression`.
     * @param ctx the parse tree
     */
    enterTriggerExpression?: (ctx: TriggerExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.triggerExpression`.
     * @param ctx the parse tree
     */
    exitTriggerExpression?: (ctx: TriggerExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.triggerExpressionStandalone`.
     * @param ctx the parse tree
     */
    enterTriggerExpressionStandalone?: (ctx: TriggerExpressionStandaloneContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.triggerExpressionStandalone`.
     * @param ctx the parse tree
     */
    exitTriggerExpressionStandalone?: (ctx: TriggerExpressionStandaloneContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.triggerOrExpression`.
     * @param ctx the parse tree
     */
    enterTriggerOrExpression?: (ctx: TriggerOrExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.triggerOrExpression`.
     * @param ctx the parse tree
     */
    exitTriggerOrExpression?: (ctx: TriggerOrExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.triggerAndExpression`.
     * @param ctx the parse tree
     */
    enterTriggerAndExpression?: (ctx: TriggerAndExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.triggerAndExpression`.
     * @param ctx the parse tree
     */
    exitTriggerAndExpression?: (ctx: TriggerAndExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.triggerAtomExpression`.
     * @param ctx the parse tree
     */
    enterTriggerAtomExpression?: (ctx: TriggerAtomExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.triggerAtomExpression`.
     * @param ctx the parse tree
     */
    exitTriggerAtomExpression?: (ctx: TriggerAtomExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.triggerLiteral`.
     * @param ctx the parse tree
     */
    enterTriggerLiteral?: (ctx: TriggerLiteralContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.triggerLiteral`.
     * @param ctx the parse tree
     */
    exitTriggerLiteral?: (ctx: TriggerLiteralContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.comparisionOperator`.
     * @param ctx the parse tree
     */
    enterComparisionOperator?: (ctx: ComparisionOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.comparisionOperator`.
     * @param ctx the parse tree
     */
    exitComparisionOperator?: (ctx: ComparisionOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.triggerActionExpression`.
     * @param ctx the parse tree
     */
    enterTriggerActionExpression?: (ctx: TriggerActionExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.triggerActionExpression`.
     * @param ctx the parse tree
     */
    exitTriggerActionExpression?: (ctx: TriggerActionExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.triggerActionExpressionStandalone`.
     * @param ctx the parse tree
     */
    enterTriggerActionExpressionStandalone?: (ctx: TriggerActionExpressionStandaloneContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.triggerActionExpressionStandalone`.
     * @param ctx the parse tree
     */
    exitTriggerActionExpressionStandalone?: (ctx: TriggerActionExpressionStandaloneContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.createTriggerStatement`.
     * @param ctx the parse tree
     */
    enterCreateTriggerStatement?: (ctx: CreateTriggerStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.createTriggerStatement`.
     * @param ctx the parse tree
     */
    exitCreateTriggerStatement?: (ctx: CreateTriggerStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterTriggerStatement`.
     * @param ctx the parse tree
     */
    enterAlterTriggerStatement?: (ctx: AlterTriggerStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterTriggerStatement`.
     * @param ctx the parse tree
     */
    exitAlterTriggerStatement?: (ctx: AlterTriggerStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.dropTriggerStatement`.
     * @param ctx the parse tree
     */
    enterDropTriggerStatement?: (ctx: DropTriggerStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.dropTriggerStatement`.
     * @param ctx the parse tree
     */
    exitDropTriggerStatement?: (ctx: DropTriggerStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.poolAssign`.
     * @param ctx the parse tree
     */
    enterPoolAssign?: (ctx: PoolAssignContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.poolAssign`.
     * @param ctx the parse tree
     */
    exitPoolAssign?: (ctx: PoolAssignContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.poolAssignList`.
     * @param ctx the parse tree
     */
    enterPoolAssignList?: (ctx: PoolAssignListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.poolAssignList`.
     * @param ctx the parse tree
     */
    exitPoolAssignList?: (ctx: PoolAssignListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.createPoolStatement`.
     * @param ctx the parse tree
     */
    enterCreatePoolStatement?: (ctx: CreatePoolStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.createPoolStatement`.
     * @param ctx the parse tree
     */
    exitCreatePoolStatement?: (ctx: CreatePoolStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterPoolStatement`.
     * @param ctx the parse tree
     */
    enterAlterPoolStatement?: (ctx: AlterPoolStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterPoolStatement`.
     * @param ctx the parse tree
     */
    exitAlterPoolStatement?: (ctx: AlterPoolStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.dropPoolStatement`.
     * @param ctx the parse tree
     */
    enterDropPoolStatement?: (ctx: DropPoolStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.dropPoolStatement`.
     * @param ctx the parse tree
     */
    exitDropPoolStatement?: (ctx: DropPoolStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.createMappingStatement`.
     * @param ctx the parse tree
     */
    enterCreateMappingStatement?: (ctx: CreateMappingStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.createMappingStatement`.
     * @param ctx the parse tree
     */
    exitCreateMappingStatement?: (ctx: CreateMappingStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.alterMappingStatement`.
     * @param ctx the parse tree
     */
    enterAlterMappingStatement?: (ctx: AlterMappingStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.alterMappingStatement`.
     * @param ctx the parse tree
     */
    exitAlterMappingStatement?: (ctx: AlterMappingStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSqlParser.dropMappingStatement`.
     * @param ctx the parse tree
     */
    enterDropMappingStatement?: (ctx: DropMappingStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSqlParser.dropMappingStatement`.
     * @param ctx the parse tree
     */
    exitDropMappingStatement?: (ctx: DropMappingStatementContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

