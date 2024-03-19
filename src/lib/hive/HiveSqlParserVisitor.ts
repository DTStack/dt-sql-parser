// Generated from dt-sql-parser/src/grammar/hive/HiveSqlParser.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import SQLParserBase from '../SQLParserBase';


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `HiveSqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class HiveSqlParserVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `HiveSqlParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.explainStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplainStatement?: (ctx: ExplainStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.explainOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplainOption?: (ctx: ExplainOptionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.vectorizationOnly`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVectorizationOnly?: (ctx: VectorizationOnlyContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.vectorizatonDetail`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVectorizatonDetail?: (ctx: VectorizatonDetailContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.execStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExecStatement?: (ctx: ExecStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.loadStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoadStatement?: (ctx: LoadStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.dropPartitionsIgnoreClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropPartitionsIgnoreClause?: (ctx: DropPartitionsIgnoreClauseContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.replicationClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplicationClause?: (ctx: ReplicationClauseContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.exportStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExportStatement?: (ctx: ExportStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.importStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImportStatement?: (ctx: ImportStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.replDumpStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplDumpStatement?: (ctx: ReplDumpStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.replDbPolicy`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplDbPolicy?: (ctx: ReplDbPolicyContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.replLoadStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplLoadStatement?: (ctx: ReplLoadStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.replConfigs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplConfigs?: (ctx: ReplConfigsContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.replConfigsList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplConfigsList?: (ctx: ReplConfigsListContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.replTableLevelPolicy`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplTableLevelPolicy?: (ctx: ReplTableLevelPolicyContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.replStatusStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplStatusStatement?: (ctx: ReplStatusStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.ddlStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDdlStatement?: (ctx: DdlStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.ifExists`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfExists?: (ctx: IfExistsContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.restrictOrCascade`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRestrictOrCascade?: (ctx: RestrictOrCascadeContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.ifNotExists`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfNotExists?: (ctx: IfNotExistsContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.force`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForce?: (ctx: ForceContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.rewriteEnabled`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRewriteEnabled?: (ctx: RewriteEnabledContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.rewriteDisabled`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRewriteDisabled?: (ctx: RewriteDisabledContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.storedAsDirs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStoredAsDirs?: (ctx: StoredAsDirsContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.orReplace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrReplace?: (ctx: OrReplaceContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.createDatabaseStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateDatabaseStatement?: (ctx: CreateDatabaseStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.dbLocation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDbLocation?: (ctx: DbLocationContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.dbManagedLocation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDbManagedLocation?: (ctx: DbManagedLocationContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.dbProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDbProperties?: (ctx: DbPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.dbPropertiesList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDbPropertiesList?: (ctx: DbPropertiesListContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.dbConnectorName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDbConnectorName?: (ctx: DbConnectorNameContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.switchDatabaseStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSwitchDatabaseStatement?: (ctx: SwitchDatabaseStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.dropDatabaseStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropDatabaseStatement?: (ctx: DropDatabaseStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.databaseComment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatabaseComment?: (ctx: DatabaseCommentContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.truncateTableStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTruncateTableStatement?: (ctx: TruncateTableStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.dropTableStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropTableStatement?: (ctx: DropTableStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.inputFileFormat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInputFileFormat?: (ctx: InputFileFormatContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.tabTypeExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTabTypeExpr?: (ctx: TabTypeExprContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.partTypeExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartTypeExpr?: (ctx: PartTypeExprContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.tabPartColTypeExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTabPartColTypeExpr?: (ctx: TabPartColTypeExprContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.descStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescStatement?: (ctx: DescStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.analyzeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyzeStatement?: (ctx: AnalyzeStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.from_in`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrom_in?: (ctx: From_inContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.db_schema`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDb_schema?: (ctx: Db_schemaContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowStatement?: (ctx: ShowStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.showTablesFilterExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTablesFilterExpr?: (ctx: ShowTablesFilterExprContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.lockStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLockStatement?: (ctx: LockStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.lockDatabase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLockDatabase?: (ctx: LockDatabaseContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.lockMode`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLockMode?: (ctx: LockModeContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.unlockStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnlockStatement?: (ctx: UnlockStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.unlockDatabase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnlockDatabase?: (ctx: UnlockDatabaseContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.createRoleStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateRoleStatement?: (ctx: CreateRoleStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.dropRoleStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropRoleStatement?: (ctx: DropRoleStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.grantPrivileges`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrantPrivileges?: (ctx: GrantPrivilegesContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.revokePrivileges`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRevokePrivileges?: (ctx: RevokePrivilegesContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.grantRole`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrantRole?: (ctx: GrantRoleContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.revokeRole`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRevokeRole?: (ctx: RevokeRoleContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.showRoleGrants`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowRoleGrants?: (ctx: ShowRoleGrantsContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.showRoles`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowRoles?: (ctx: ShowRolesContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.showCurrentRole`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCurrentRole?: (ctx: ShowCurrentRoleContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.setRole`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetRole?: (ctx: SetRoleContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.showGrants`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowGrants?: (ctx: ShowGrantsContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.showRolePrincipals`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowRolePrincipals?: (ctx: ShowRolePrincipalsContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.privilegeIncludeColObject`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrivilegeIncludeColObject?: (ctx: PrivilegeIncludeColObjectContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.privilegeObject`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrivilegeObject?: (ctx: PrivilegeObjectContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.privObject`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrivObject?: (ctx: PrivObjectContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.privObjectCols`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrivObjectCols?: (ctx: PrivObjectColsContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.privilegeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrivilegeList?: (ctx: PrivilegeListContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.privlegeDef`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrivlegeDef?: (ctx: PrivlegeDefContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.privilegeType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrivilegeType?: (ctx: PrivilegeTypeContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.principalSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrincipalSpecification?: (ctx: PrincipalSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.principalName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrincipalName?: (ctx: PrincipalNameContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.principalAlterName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrincipalAlterName?: (ctx: PrincipalAlterNameContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.withGrantOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWithGrantOption?: (ctx: WithGrantOptionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.grantOptionFor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrantOptionFor?: (ctx: GrantOptionForContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.adminOptionFor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdminOptionFor?: (ctx: AdminOptionForContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.withAdminOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWithAdminOption?: (ctx: WithAdminOptionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.metastoreCheck`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMetastoreCheck?: (ctx: MetastoreCheckContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.resourceList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResourceList?: (ctx: ResourceListContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.resource`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResource?: (ctx: ResourceContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.resourceType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResourceType?: (ctx: ResourceTypeContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.createFunctionStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateFunctionStatement?: (ctx: CreateFunctionStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.dropFunctionStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropFunctionStatement?: (ctx: DropFunctionStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.reloadFunctionsStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReloadFunctionsStatement?: (ctx: ReloadFunctionsStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.createMacroStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateMacroStatement?: (ctx: CreateMacroStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.dropMacroStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropMacroStatement?: (ctx: DropMacroStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.createIndexStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateIndexStatement?: (ctx: CreateIndexStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.dropIndexStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropIndexStatement?: (ctx: DropIndexStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.createViewStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateViewStatement?: (ctx: CreateViewStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.viewPartition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewPartition?: (ctx: ViewPartitionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.viewOrganization`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewOrganization?: (ctx: ViewOrganizationContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.viewClusterSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewClusterSpec?: (ctx: ViewClusterSpecContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.viewComplexSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewComplexSpec?: (ctx: ViewComplexSpecContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.viewDistSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewDistSpec?: (ctx: ViewDistSpecContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.viewSortSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewSortSpec?: (ctx: ViewSortSpecContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.dropViewStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropViewStatement?: (ctx: DropViewStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.createMaterializedViewStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateMaterializedViewStatement?: (ctx: CreateMaterializedViewStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.dropMaterializedViewStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropMaterializedViewStatement?: (ctx: DropMaterializedViewStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.createScheduledQueryStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateScheduledQueryStatement?: (ctx: CreateScheduledQueryStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.dropScheduledQueryStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropScheduledQueryStatement?: (ctx: DropScheduledQueryStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterScheduledQueryStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterScheduledQueryStatement?: (ctx: AlterScheduledQueryStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterScheduledQueryChange`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterScheduledQueryChange?: (ctx: AlterScheduledQueryChangeContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.scheduleSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitScheduleSpec?: (ctx: ScheduleSpecContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.executedAsSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExecutedAsSpec?: (ctx: ExecutedAsSpecContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.definedAsSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefinedAsSpec?: (ctx: DefinedAsSpecContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.showStmtIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowStmtIdentifier?: (ctx: ShowStmtIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.tableComment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableComment?: (ctx: TableCommentContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.createTablePartitionSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTablePartitionSpec?: (ctx: CreateTablePartitionSpecContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.createTablePartitionColumnTypeSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTablePartitionColumnTypeSpec?: (ctx: CreateTablePartitionColumnTypeSpecContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.createTablePartitionColumnSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTablePartitionColumnSpec?: (ctx: CreateTablePartitionColumnSpecContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.partitionTransformSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionTransformSpec?: (ctx: PartitionTransformSpecContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.columnNameTransformConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameTransformConstraint?: (ctx: ColumnNameTransformConstraintContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.partitionTransformType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionTransformType?: (ctx: PartitionTransformTypeContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.tableBuckets`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableBuckets?: (ctx: TableBucketsContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.tableImplBuckets`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableImplBuckets?: (ctx: TableImplBucketsContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.tableSkewed`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableSkewed?: (ctx: TableSkewedContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.rowFormat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowFormat?: (ctx: RowFormatContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.recordReader`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRecordReader?: (ctx: RecordReaderContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.recordWriter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRecordWriter?: (ctx: RecordWriterContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.rowFormatSerde`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowFormatSerde?: (ctx: RowFormatSerdeContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.rowFormatDelimited`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowFormatDelimited?: (ctx: RowFormatDelimitedContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.tableRowFormat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableRowFormat?: (ctx: TableRowFormatContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.tablePropertiesPrefixed`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablePropertiesPrefixed?: (ctx: TablePropertiesPrefixedContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.tableProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableProperties?: (ctx: TablePropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.tablePropertiesList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablePropertiesList?: (ctx: TablePropertiesListContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.keyValueProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKeyValueProperty?: (ctx: KeyValuePropertyContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.keyProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKeyProperty?: (ctx: KeyPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.tableRowFormatFieldIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableRowFormatFieldIdentifier?: (ctx: TableRowFormatFieldIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.tableRowFormatCollItemsIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableRowFormatCollItemsIdentifier?: (ctx: TableRowFormatCollItemsIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.tableRowFormatMapKeysIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableRowFormatMapKeysIdentifier?: (ctx: TableRowFormatMapKeysIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.tableRowFormatLinesIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableRowFormatLinesIdentifier?: (ctx: TableRowFormatLinesIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.tableRowNullFormat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableRowNullFormat?: (ctx: TableRowNullFormatContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.tableFileFormat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableFileFormat?: (ctx: TableFileFormatContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.tableLocation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableLocation?: (ctx: TableLocationContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.columnNameTypeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameTypeList?: (ctx: ColumnNameTypeListContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.columnNameTypeOrConstraintList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameTypeOrConstraintList?: (ctx: ColumnNameTypeOrConstraintListContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.columnNameColonTypeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameColonTypeList?: (ctx: ColumnNameColonTypeListContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.columnNameList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameList?: (ctx: ColumnNameListContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.columnName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnName?: (ctx: ColumnNameContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.columnNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameCreate?: (ctx: ColumnNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.extColumnName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtColumnName?: (ctx: ExtColumnNameContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.columnNameOrderList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameOrderList?: (ctx: ColumnNameOrderListContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.columnParenthesesList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnParenthesesList?: (ctx: ColumnParenthesesListContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.enableValidateSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnableValidateSpecification?: (ctx: EnableValidateSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.enableSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnableSpecification?: (ctx: EnableSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.validateSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValidateSpecification?: (ctx: ValidateSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.enforcedSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnforcedSpecification?: (ctx: EnforcedSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.relySpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelySpecification?: (ctx: RelySpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.createConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateConstraint?: (ctx: CreateConstraintContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterConstraintWithName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterConstraintWithName?: (ctx: AlterConstraintWithNameContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.tableLevelConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableLevelConstraint?: (ctx: TableLevelConstraintContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.pkUkConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPkUkConstraint?: (ctx: PkUkConstraintContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.checkConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCheckConstraint?: (ctx: CheckConstraintContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.createForeignKey`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateForeignKey?: (ctx: CreateForeignKeyContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterForeignKeyWithName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterForeignKeyWithName?: (ctx: AlterForeignKeyWithNameContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.skewedValueElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSkewedValueElement?: (ctx: SkewedValueElementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.skewedColumnValuePairList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSkewedColumnValuePairList?: (ctx: SkewedColumnValuePairListContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.skewedColumnValuePair`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSkewedColumnValuePair?: (ctx: SkewedColumnValuePairContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.skewedColumnValues`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSkewedColumnValues?: (ctx: SkewedColumnValuesContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.skewedColumnValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSkewedColumnValue?: (ctx: SkewedColumnValueContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.skewedValueLocationElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSkewedValueLocationElement?: (ctx: SkewedValueLocationElementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.orderSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderSpecification?: (ctx: OrderSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.nullOrdering`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNullOrdering?: (ctx: NullOrderingContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.columnNameOrder`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameOrder?: (ctx: ColumnNameOrderContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.columnNameCommentList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameCommentList?: (ctx: ColumnNameCommentListContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.columnNameComment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameComment?: (ctx: ColumnNameCommentContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.orderSpecificationRewrite`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderSpecificationRewrite?: (ctx: OrderSpecificationRewriteContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.columnRefOrder`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnRefOrder?: (ctx: ColumnRefOrderContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.columnNameType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameType?: (ctx: ColumnNameTypeContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.columnNameTypeOrConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameTypeOrConstraint?: (ctx: ColumnNameTypeOrConstraintContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.tableConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableConstraint?: (ctx: TableConstraintContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.columnNameTypeConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameTypeConstraint?: (ctx: ColumnNameTypeConstraintContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.columnConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnConstraint?: (ctx: ColumnConstraintContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.foreignKeyConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForeignKeyConstraint?: (ctx: ForeignKeyConstraintContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.colConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColConstraint?: (ctx: ColConstraintContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterColumnConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterColumnConstraint?: (ctx: AlterColumnConstraintContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterForeignKeyConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterForeignKeyConstraint?: (ctx: AlterForeignKeyConstraintContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterColConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterColConstraint?: (ctx: AlterColConstraintContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.columnConstraintType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnConstraintType?: (ctx: ColumnConstraintTypeContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.defaultVal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefaultVal?: (ctx: DefaultValContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.tableConstraintType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableConstraintType?: (ctx: TableConstraintTypeContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.constraintOptsCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstraintOptsCreate?: (ctx: ConstraintOptsCreateContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.constraintOptsAlter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstraintOptsAlter?: (ctx: ConstraintOptsAlterContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.columnNameColonType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameColonType?: (ctx: ColumnNameColonTypeContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.colType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColType?: (ctx: ColTypeContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.colTypeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColTypeList?: (ctx: ColTypeListContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType?: (ctx: TypeContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.primitiveType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.listType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListType?: (ctx: ListTypeContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.structType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructType?: (ctx: StructTypeContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.mapType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMapType?: (ctx: MapTypeContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.unionType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnionType?: (ctx: UnionTypeContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.setOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetOperator?: (ctx: SetOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.queryStatementExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryStatementExpression?: (ctx: QueryStatementExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.queryStatementExpressionBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryStatementExpressionBody?: (ctx: QueryStatementExpressionBodyContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.withClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWithClause?: (ctx: WithClauseContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.cteStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCteStatement?: (ctx: CteStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.fromStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFromStatement?: (ctx: FromStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `fromInsertStmt`
     * labeled alternative in `HiveSqlParser.singleFromStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFromInsertStmt?: (ctx: FromInsertStmtContext) => Result;
    /**
     * Visit a parse tree produced by the `fromSelectStmt`
     * labeled alternative in `HiveSqlParser.singleFromStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFromSelectStmt?: (ctx: FromSelectStmtContext) => Result;
    /**
     * Visit a parse tree produced by the `insertStmt`
     * labeled alternative in `HiveSqlParser.regularBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertStmt?: (ctx: InsertStmtContext) => Result;
    /**
     * Visit a parse tree produced by the `selectStmt`
     * labeled alternative in `HiveSqlParser.regularBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectStmt?: (ctx: SelectStmtContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.atomSelectStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAtomSelectStatement?: (ctx: AtomSelectStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.selectStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectStatement?: (ctx: SelectStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.setOpSelectStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetOpSelectStatement?: (ctx: SetOpSelectStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.selectStatementWithCTE`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectStatementWithCTE?: (ctx: SelectStatementWithCTEContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.insertClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertClause?: (ctx: InsertClauseContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.destination`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDestination?: (ctx: DestinationContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.limitClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLimitClause?: (ctx: LimitClauseContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.deleteStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeleteStatement?: (ctx: DeleteStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.columnAssignmentClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnAssignmentClause?: (ctx: ColumnAssignmentClauseContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedencePlusExpressionOrDefault`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedencePlusExpressionOrDefault?: (ctx: PrecedencePlusExpressionOrDefaultContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.setColumnsClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetColumnsClause?: (ctx: SetColumnsClauseContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.updateStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdateStatement?: (ctx: UpdateStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.sqlTransactionStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSqlTransactionStatement?: (ctx: SqlTransactionStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.startTransactionStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStartTransactionStatement?: (ctx: StartTransactionStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.transactionMode`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransactionMode?: (ctx: TransactionModeContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.transactionAccessMode`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransactionAccessMode?: (ctx: TransactionAccessModeContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.isolationLevel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIsolationLevel?: (ctx: IsolationLevelContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.levelOfIsolation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLevelOfIsolation?: (ctx: LevelOfIsolationContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.commitStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommitStatement?: (ctx: CommitStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.rollbackStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRollbackStatement?: (ctx: RollbackStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.setAutoCommitStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetAutoCommitStatement?: (ctx: SetAutoCommitStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.abortTransactionStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAbortTransactionStatement?: (ctx: AbortTransactionStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.abortCompactionStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAbortCompactionStatement?: (ctx: AbortCompactionStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.mergeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMergeStatement?: (ctx: MergeStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.whenClauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhenClauses?: (ctx: WhenClausesContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.whenNotMatchedClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhenNotMatchedClause?: (ctx: WhenNotMatchedClauseContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.whenMatchedAndClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhenMatchedAndClause?: (ctx: WhenMatchedAndClauseContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.whenMatchedThenClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhenMatchedThenClause?: (ctx: WhenMatchedThenClauseContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.updateOrDelete`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdateOrDelete?: (ctx: UpdateOrDeleteContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.killQueryStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKillQueryStatement?: (ctx: KillQueryStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.compactionId`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompactionId?: (ctx: CompactionIdContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.compactionPool`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompactionPool?: (ctx: CompactionPoolContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.compactionType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompactionType?: (ctx: CompactionTypeContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.compactionStatus`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompactionStatus?: (ctx: CompactionStatusContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatement?: (ctx: AlterStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterTableStatementSuffix`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTableStatementSuffix?: (ctx: AlterTableStatementSuffixContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterTblPartitionStatementSuffix`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTblPartitionStatementSuffix?: (ctx: AlterTblPartitionStatementSuffixContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatementPartitionKeyType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatementPartitionKeyType?: (ctx: AlterStatementPartitionKeyTypeContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterViewStatementSuffix`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterViewStatementSuffix?: (ctx: AlterViewStatementSuffixContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterMaterializedViewStatementSuffix`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterMaterializedViewStatementSuffix?: (ctx: AlterMaterializedViewStatementSuffixContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterMaterializedViewSuffixRewrite`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterMaterializedViewSuffixRewrite?: (ctx: AlterMaterializedViewSuffixRewriteContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterMaterializedViewSuffixRebuild`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterMaterializedViewSuffixRebuild?: (ctx: AlterMaterializedViewSuffixRebuildContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterDatabaseStatementSuffix`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterDatabaseStatementSuffix?: (ctx: AlterDatabaseStatementSuffixContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterDatabaseSuffixProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterDatabaseSuffixProperties?: (ctx: AlterDatabaseSuffixPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterDatabaseSuffixSetOwner`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterDatabaseSuffixSetOwner?: (ctx: AlterDatabaseSuffixSetOwnerContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterDatabaseSuffixSetLocation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterDatabaseSuffixSetLocation?: (ctx: AlterDatabaseSuffixSetLocationContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterDatabaseSuffixSetManagedLocation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterDatabaseSuffixSetManagedLocation?: (ctx: AlterDatabaseSuffixSetManagedLocationContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatementSuffixRename`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatementSuffixRename?: (ctx: AlterStatementSuffixRenameContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatementSuffixAddCol`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatementSuffixAddCol?: (ctx: AlterStatementSuffixAddColContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatementSuffixAddConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatementSuffixAddConstraint?: (ctx: AlterStatementSuffixAddConstraintContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatementSuffixUpdateColumns`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatementSuffixUpdateColumns?: (ctx: AlterStatementSuffixUpdateColumnsContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatementSuffixProtections`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatementSuffixProtections?: (ctx: AlterStatementSuffixProtectionsContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatementSuffixDropConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatementSuffixDropConstraint?: (ctx: AlterStatementSuffixDropConstraintContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatementSuffixRenameCol`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatementSuffixRenameCol?: (ctx: AlterStatementSuffixRenameColContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatementSuffixUpdateStatsCol`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatementSuffixUpdateStatsCol?: (ctx: AlterStatementSuffixUpdateStatsColContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatementSuffixUpdateStats`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatementSuffixUpdateStats?: (ctx: AlterStatementSuffixUpdateStatsContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatementChangeColPosition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatementChangeColPosition?: (ctx: AlterStatementChangeColPositionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatementSuffixAddPartitions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatementSuffixAddPartitions?: (ctx: AlterStatementSuffixAddPartitionsContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatementSuffixAddPartitionsElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatementSuffixAddPartitionsElement?: (ctx: AlterStatementSuffixAddPartitionsElementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatementSuffixTouch`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatementSuffixTouch?: (ctx: AlterStatementSuffixTouchContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatementSuffixArchive`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatementSuffixArchive?: (ctx: AlterStatementSuffixArchiveContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatementSuffixUnArchive`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatementSuffixUnArchive?: (ctx: AlterStatementSuffixUnArchiveContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.partitionLocation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionLocation?: (ctx: PartitionLocationContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatementSuffixRecoverPartitions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatementSuffixRecoverPartitions?: (ctx: AlterStatementSuffixRecoverPartitionsContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatementSuffixDropPartitions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatementSuffixDropPartitions?: (ctx: AlterStatementSuffixDropPartitionsContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatementSuffixProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatementSuffixProperties?: (ctx: AlterStatementSuffixPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterViewSuffixProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterViewSuffixProperties?: (ctx: AlterViewSuffixPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatementSuffixSerdeProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatementSuffixSerdeProperties?: (ctx: AlterStatementSuffixSerdePropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.tablePartitionPrefix`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablePartitionPrefix?: (ctx: TablePartitionPrefixContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatementSuffixFileFormat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatementSuffixFileFormat?: (ctx: AlterStatementSuffixFileFormatContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatementSuffixClusterbySortby`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatementSuffixClusterbySortby?: (ctx: AlterStatementSuffixClusterbySortbyContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterTblPartitionStatementSuffixSkewedLocation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTblPartitionStatementSuffixSkewedLocation?: (ctx: AlterTblPartitionStatementSuffixSkewedLocationContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.skewedLocations`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSkewedLocations?: (ctx: SkewedLocationsContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.skewedLocationsList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSkewedLocationsList?: (ctx: SkewedLocationsListContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.skewedLocationMap`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSkewedLocationMap?: (ctx: SkewedLocationMapContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatementSuffixLocation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatementSuffixLocation?: (ctx: AlterStatementSuffixLocationContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatementSuffixSkewedby`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatementSuffixSkewedby?: (ctx: AlterStatementSuffixSkewedbyContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatementSuffixExchangePartition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatementSuffixExchangePartition?: (ctx: AlterStatementSuffixExchangePartitionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatementSuffixRenamePart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatementSuffixRenamePart?: (ctx: AlterStatementSuffixRenamePartContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatementSuffixStatsPart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatementSuffixStatsPart?: (ctx: AlterStatementSuffixStatsPartContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatementSuffixMergeFiles`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatementSuffixMergeFiles?: (ctx: AlterStatementSuffixMergeFilesContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatementSuffixBucketNum`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatementSuffixBucketNum?: (ctx: AlterStatementSuffixBucketNumContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.blocking`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlocking?: (ctx: BlockingContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.compactPool`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompactPool?: (ctx: CompactPoolContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatementSuffixCompact`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatementSuffixCompact?: (ctx: AlterStatementSuffixCompactContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatementSuffixSetOwner`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatementSuffixSetOwner?: (ctx: AlterStatementSuffixSetOwnerContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatementSuffixSetPartSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatementSuffixSetPartSpec?: (ctx: AlterStatementSuffixSetPartSpecContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterStatementSuffixExecute`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatementSuffixExecute?: (ctx: AlterStatementSuffixExecuteContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterIndexStatementSuffix`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterIndexStatementSuffix?: (ctx: AlterIndexStatementSuffixContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.fileFormat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFileFormat?: (ctx: FileFormatContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterDataConnectorStatementSuffix`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterDataConnectorStatementSuffix?: (ctx: AlterDataConnectorStatementSuffixContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterDataConnectorSuffixProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterDataConnectorSuffixProperties?: (ctx: AlterDataConnectorSuffixPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterDataConnectorSuffixSetOwner`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterDataConnectorSuffixSetOwner?: (ctx: AlterDataConnectorSuffixSetOwnerContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterDataConnectorSuffixSetUrl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterDataConnectorSuffixSetUrl?: (ctx: AlterDataConnectorSuffixSetUrlContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.likeTableOrFile`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLikeTableOrFile?: (ctx: LikeTableOrFileContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.createTableStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTableStatement?: (ctx: CreateTableStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.createDataConnectorStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateDataConnectorStatement?: (ctx: CreateDataConnectorStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.dataConnectorComment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDataConnectorComment?: (ctx: DataConnectorCommentContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.dataConnectorUrl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDataConnectorUrl?: (ctx: DataConnectorUrlContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.dataConnectorType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDataConnectorType?: (ctx: DataConnectorTypeContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.dcProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDcProperties?: (ctx: DcPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.dropDataConnectorStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropDataConnectorStatement?: (ctx: DropDataConnectorStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.tableAllColumns`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableAllColumns?: (ctx: TableAllColumnsContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.defaultValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefaultValue?: (ctx: DefaultValueContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.expressionList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionList?: (ctx: ExpressionListContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.aliasList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAliasList?: (ctx: AliasListContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.fromClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFromClause?: (ctx: FromClauseContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.fromSource`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFromSource?: (ctx: FromSourceContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.atomjoinSource`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAtomjoinSource?: (ctx: AtomjoinSourceContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.joinSource`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinSource?: (ctx: JoinSourceContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.joinSourcePart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinSourcePart?: (ctx: JoinSourcePartContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.uniqueJoinSource`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUniqueJoinSource?: (ctx: UniqueJoinSourceContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.uniqueJoinExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUniqueJoinExpr?: (ctx: UniqueJoinExprContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.uniqueJoinToken`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUniqueJoinToken?: (ctx: UniqueJoinTokenContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.joinToken`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinToken?: (ctx: JoinTokenContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.lateralView`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLateralView?: (ctx: LateralViewContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.tableAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableAlias?: (ctx: TableAliasContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.tableBucketSample`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableBucketSample?: (ctx: TableBucketSampleContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.splitSample`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSplitSample?: (ctx: SplitSampleContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.tableSample`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableSample?: (ctx: TableSampleContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.tableSource`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableSource?: (ctx: TableSourceContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.asOfClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAsOfClause?: (ctx: AsOfClauseContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.uniqueJoinTableSource`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUniqueJoinTableSource?: (ctx: UniqueJoinTableSourceContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.dbSchemaName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDbSchemaName?: (ctx: DbSchemaNameContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.dbSchemaNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDbSchemaNameCreate?: (ctx: DbSchemaNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.tableOrView`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOrView?: (ctx: TableOrViewContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.tableName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableName?: (ctx: TableNameContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.tableNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableNameCreate?: (ctx: TableNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.viewName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewName?: (ctx: ViewNameContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.viewNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewNameCreate?: (ctx: ViewNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.subQuerySource`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubQuerySource?: (ctx: SubQuerySourceContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.partitioningSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitioningSpec?: (ctx: PartitioningSpecContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.partitionTableFunctionSource`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionTableFunctionSource?: (ctx: PartitionTableFunctionSourceContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.partitionedTableFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionedTableFunction?: (ctx: PartitionedTableFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.whereClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhereClause?: (ctx: WhereClauseContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.searchCondition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSearchCondition?: (ctx: SearchConditionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.valuesSource`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValuesSource?: (ctx: ValuesSourceContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.valuesClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValuesClause?: (ctx: ValuesClauseContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.valuesTableConstructor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValuesTableConstructor?: (ctx: ValuesTableConstructorContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.valueRowConstructor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueRowConstructor?: (ctx: ValueRowConstructorContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.firstValueRowConstructor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFirstValueRowConstructor?: (ctx: FirstValueRowConstructorContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.virtualTableSource`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVirtualTableSource?: (ctx: VirtualTableSourceContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.selectClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectClause?: (ctx: SelectClauseContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.all_distinct`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAll_distinct?: (ctx: All_distinctContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.selectList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectList?: (ctx: SelectListContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.selectTrfmClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectTrfmClause?: (ctx: SelectTrfmClauseContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.selectItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectItem?: (ctx: SelectItemContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.trfmClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrfmClause?: (ctx: TrfmClauseContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.selectExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectExpression?: (ctx: SelectExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.selectExpressionList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectExpressionList?: (ctx: SelectExpressionListContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.window_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindow_clause?: (ctx: Window_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.window_defn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindow_defn?: (ctx: Window_defnContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.window_specification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindow_specification?: (ctx: Window_specificationContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.window_frame`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindow_frame?: (ctx: Window_frameContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.window_range_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindow_range_expression?: (ctx: Window_range_expressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.window_value_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindow_value_expression?: (ctx: Window_value_expressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.window_frame_start_boundary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindow_frame_start_boundary?: (ctx: Window_frame_start_boundaryContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.window_frame_boundary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindow_frame_boundary?: (ctx: Window_frame_boundaryContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.groupByClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupByClause?: (ctx: GroupByClauseContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.groupby_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupby_expression?: (ctx: Groupby_expressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.groupByEmpty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupByEmpty?: (ctx: GroupByEmptyContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.rollupStandard`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRollupStandard?: (ctx: RollupStandardContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.rollupOldSyntax`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRollupOldSyntax?: (ctx: RollupOldSyntaxContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.groupingSetExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingSetExpression?: (ctx: GroupingSetExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.groupingSetExpressionMultiple`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingSetExpressionMultiple?: (ctx: GroupingSetExpressionMultipleContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.groupingExpressionSingle`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingExpressionSingle?: (ctx: GroupingExpressionSingleContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.havingClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHavingClause?: (ctx: HavingClauseContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.qualifyClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifyClause?: (ctx: QualifyClauseContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.havingCondition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHavingCondition?: (ctx: HavingConditionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.expressionsInParenthesis`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionsInParenthesis?: (ctx: ExpressionsInParenthesisContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.expressionsNotInParenthesis`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionsNotInParenthesis?: (ctx: ExpressionsNotInParenthesisContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.expressionPart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionPart?: (ctx: ExpressionPartContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.expressionOrDefault`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionOrDefault?: (ctx: ExpressionOrDefaultContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.firstExpressionsWithAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFirstExpressionsWithAlias?: (ctx: FirstExpressionsWithAliasContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.expressionWithAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionWithAlias?: (ctx: ExpressionWithAliasContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.expressions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressions?: (ctx: ExpressionsContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.columnRefOrderInParenthesis`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnRefOrderInParenthesis?: (ctx: ColumnRefOrderInParenthesisContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.columnRefOrderNotInParenthesis`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnRefOrderNotInParenthesis?: (ctx: ColumnRefOrderNotInParenthesisContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.orderByClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderByClause?: (ctx: OrderByClauseContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.clusterByClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClusterByClause?: (ctx: ClusterByClauseContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.partitionByClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionByClause?: (ctx: PartitionByClauseContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.distributeByClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDistributeByClause?: (ctx: DistributeByClauseContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.sortByClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSortByClause?: (ctx: SortByClauseContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.trimFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrimFunction?: (ctx: TrimFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.function_`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_?: (ctx: Function_Context) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.null_treatment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNull_treatment?: (ctx: Null_treatmentContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.functionNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionNameCreate?: (ctx: FunctionNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.functionNameForDDL`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionNameForDDL?: (ctx: FunctionNameForDDLContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.functionNameForInvoke`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionNameForInvoke?: (ctx: FunctionNameForInvokeContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.userDefinedFuncName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUserDefinedFuncName?: (ctx: UserDefinedFuncNameContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.internalFunctionName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInternalFunctionName?: (ctx: InternalFunctionNameContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.castExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCastExpression?: (ctx: CastExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.caseExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCaseExpression?: (ctx: CaseExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.whenExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhenExpression?: (ctx: WhenExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.floorExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFloorExpression?: (ctx: FloorExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.floorDateQualifiers`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFloorDateQualifiers?: (ctx: FloorDateQualifiersContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.extractExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtractExpression?: (ctx: ExtractExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.timeQualifiers`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimeQualifiers?: (ctx: TimeQualifiersContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.constant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstant?: (ctx: ConstantContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.prepareStmtParam`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrepareStmtParam?: (ctx: PrepareStmtParamContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.parameterIdx`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameterIdx?: (ctx: ParameterIdxContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.stringLiteralSequence`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringLiteralSequence?: (ctx: StringLiteralSequenceContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.charSetStringLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCharSetStringLiteral?: (ctx: CharSetStringLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.dateLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDateLiteral?: (ctx: DateLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.timestampLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimestampLiteral?: (ctx: TimestampLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.timestampLocalTZLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimestampLocalTZLiteral?: (ctx: TimestampLocalTZLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.intervalValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntervalValue?: (ctx: IntervalValueContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.intervalLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntervalLiteral?: (ctx: IntervalLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.intervalExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntervalExpression?: (ctx: IntervalExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.intervalQualifiers`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntervalQualifiers?: (ctx: IntervalQualifiersContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.atomExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAtomExpression?: (ctx: AtomExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedenceFieldExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedenceFieldExpression?: (ctx: PrecedenceFieldExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedenceUnaryOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedenceUnaryOperator?: (ctx: PrecedenceUnaryOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedenceUnaryPrefixExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedenceUnaryPrefixExpression?: (ctx: PrecedenceUnaryPrefixExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedenceBitwiseXorOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedenceBitwiseXorOperator?: (ctx: PrecedenceBitwiseXorOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedenceBitwiseXorExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedenceBitwiseXorExpression?: (ctx: PrecedenceBitwiseXorExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedenceStarOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedenceStarOperator?: (ctx: PrecedenceStarOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedenceStarExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedenceStarExpression?: (ctx: PrecedenceStarExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedencePlusOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedencePlusOperator?: (ctx: PrecedencePlusOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedencePlusExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedencePlusExpression?: (ctx: PrecedencePlusExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedenceConcatenateOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedenceConcatenateOperator?: (ctx: PrecedenceConcatenateOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedenceConcatenateExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedenceConcatenateExpression?: (ctx: PrecedenceConcatenateExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedenceAmpersandOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedenceAmpersandOperator?: (ctx: PrecedenceAmpersandOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedenceAmpersandExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedenceAmpersandExpression?: (ctx: PrecedenceAmpersandExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedenceBitwiseOrOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedenceBitwiseOrOperator?: (ctx: PrecedenceBitwiseOrOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedenceBitwiseOrExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedenceBitwiseOrExpression?: (ctx: PrecedenceBitwiseOrExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedenceRegexpOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedenceRegexpOperator?: (ctx: PrecedenceRegexpOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedenceSimilarOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedenceSimilarOperator?: (ctx: PrecedenceSimilarOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.subQueryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubQueryExpression?: (ctx: SubQueryExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedenceSimilarExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedenceSimilarExpression?: (ctx: PrecedenceSimilarExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedenceSimilarExpressionMain`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedenceSimilarExpressionMain?: (ctx: PrecedenceSimilarExpressionMainContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedenceSimilarExpressionPart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedenceSimilarExpressionPart?: (ctx: PrecedenceSimilarExpressionPartContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedenceSimilarExpressionAtom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedenceSimilarExpressionAtom?: (ctx: PrecedenceSimilarExpressionAtomContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedenceSimilarExpressionQuantifierPredicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedenceSimilarExpressionQuantifierPredicate?: (ctx: PrecedenceSimilarExpressionQuantifierPredicateContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.quantifierType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuantifierType?: (ctx: QuantifierTypeContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedenceSimilarExpressionIn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedenceSimilarExpressionIn?: (ctx: PrecedenceSimilarExpressionInContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedenceSimilarExpressionPartNot`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedenceSimilarExpressionPartNot?: (ctx: PrecedenceSimilarExpressionPartNotContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedenceDistinctOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedenceDistinctOperator?: (ctx: PrecedenceDistinctOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedenceEqualOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedenceEqualOperator?: (ctx: PrecedenceEqualOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedenceEqualExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedenceEqualExpression?: (ctx: PrecedenceEqualExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.isCondition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIsCondition?: (ctx: IsConditionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedenceUnarySuffixExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedenceUnarySuffixExpression?: (ctx: PrecedenceUnarySuffixExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedenceNotOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedenceNotOperator?: (ctx: PrecedenceNotOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedenceNotExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedenceNotExpression?: (ctx: PrecedenceNotExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedenceAndOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedenceAndOperator?: (ctx: PrecedenceAndOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedenceAndExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedenceAndExpression?: (ctx: PrecedenceAndExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedenceOrOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedenceOrOperator?: (ctx: PrecedenceOrOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.precedenceOrExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecedenceOrExpression?: (ctx: PrecedenceOrExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.booleanValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanValue?: (ctx: BooleanValueContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.booleanValueTok`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanValueTok?: (ctx: BooleanValueTokContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.tableOrPartition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOrPartition?: (ctx: TableOrPartitionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.partitionSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionSpec?: (ctx: PartitionSpecContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.partitionVal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionVal?: (ctx: PartitionValContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.partitionSelectorSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionSelectorSpec?: (ctx: PartitionSelectorSpecContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.partitionSelectorVal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionSelectorVal?: (ctx: PartitionSelectorValContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.partitionSelectorOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionSelectorOperator?: (ctx: PartitionSelectorOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.subQuerySelectorOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubQuerySelectorOperator?: (ctx: SubQuerySelectorOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.sysFuncNames`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSysFuncNames?: (ctx: SysFuncNamesContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.id_`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitId_?: (ctx: Id_Context) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.functionIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionIdentifier?: (ctx: FunctionIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.principalIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrincipalIdentifier?: (ctx: PrincipalIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.nonReserved`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonReserved?: (ctx: NonReservedContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.sql11ReservedKeywordsUsedAsFunctionName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSql11ReservedKeywordsUsedAsFunctionName?: (ctx: Sql11ReservedKeywordsUsedAsFunctionNameContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.hint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHint?: (ctx: HintContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.hintList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHintList?: (ctx: HintListContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.hintItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHintItem?: (ctx: HintItemContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.hintName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHintName?: (ctx: HintNameContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.hintArgs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHintArgs?: (ctx: HintArgsContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.hintArgName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHintArgName?: (ctx: HintArgNameContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.prepareStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrepareStatement?: (ctx: PrepareStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.executeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExecuteStatement?: (ctx: ExecuteStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.executeParamList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExecuteParamList?: (ctx: ExecuteParamListContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.resourcePlanDdlStatements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResourcePlanDdlStatements?: (ctx: ResourcePlanDdlStatementsContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.rpAssign`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRpAssign?: (ctx: RpAssignContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.rpAssignList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRpAssignList?: (ctx: RpAssignListContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.rpUnassign`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRpUnassign?: (ctx: RpUnassignContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.rpUnassignList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRpUnassignList?: (ctx: RpUnassignListContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.createResourcePlanStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateResourcePlanStatement?: (ctx: CreateResourcePlanStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.withReplace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWithReplace?: (ctx: WithReplaceContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.activate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitActivate?: (ctx: ActivateContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.enable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnable?: (ctx: EnableContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.disable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDisable?: (ctx: DisableContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.unmanaged`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnmanaged?: (ctx: UnmanagedContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.year`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYear?: (ctx: YearContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.month`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMonth?: (ctx: MonthContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.week`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWeek?: (ctx: WeekContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.day`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDay?: (ctx: DayContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.hour`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHour?: (ctx: HourContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.minute`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMinute?: (ctx: MinuteContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.second`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSecond?: (ctx: SecondContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.decimal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecimal?: (ctx: DecimalContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterResourcePlanStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterResourcePlanStatement?: (ctx: AlterResourcePlanStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.globalWmStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGlobalWmStatement?: (ctx: GlobalWmStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.replaceResourcePlanStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplaceResourcePlanStatement?: (ctx: ReplaceResourcePlanStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.dropResourcePlanStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropResourcePlanStatement?: (ctx: DropResourcePlanStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.poolPath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPoolPath?: (ctx: PoolPathContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.triggerExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerExpression?: (ctx: TriggerExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.triggerExpressionStandalone`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerExpressionStandalone?: (ctx: TriggerExpressionStandaloneContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.triggerOrExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerOrExpression?: (ctx: TriggerOrExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.triggerAndExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerAndExpression?: (ctx: TriggerAndExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.triggerAtomExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerAtomExpression?: (ctx: TriggerAtomExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.triggerLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerLiteral?: (ctx: TriggerLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.comparisionOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparisionOperator?: (ctx: ComparisionOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.triggerActionExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerActionExpression?: (ctx: TriggerActionExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.triggerActionExpressionStandalone`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerActionExpressionStandalone?: (ctx: TriggerActionExpressionStandaloneContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.createTriggerStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTriggerStatement?: (ctx: CreateTriggerStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterTriggerStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTriggerStatement?: (ctx: AlterTriggerStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.dropTriggerStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropTriggerStatement?: (ctx: DropTriggerStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.poolAssign`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPoolAssign?: (ctx: PoolAssignContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.poolAssignList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPoolAssignList?: (ctx: PoolAssignListContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.createPoolStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatePoolStatement?: (ctx: CreatePoolStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterPoolStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterPoolStatement?: (ctx: AlterPoolStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.dropPoolStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropPoolStatement?: (ctx: DropPoolStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.createMappingStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateMappingStatement?: (ctx: CreateMappingStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.alterMappingStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterMappingStatement?: (ctx: AlterMappingStatementContext) => Result;
    /**
     * Visit a parse tree produced by `HiveSqlParser.dropMappingStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropMappingStatement?: (ctx: DropMappingStatementContext) => Result;
}

