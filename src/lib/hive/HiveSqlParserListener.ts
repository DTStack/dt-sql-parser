// Generated from /Users/hayden/Desktop/dt-works/dt-sql-parser/src/grammar/hive/HiveSqlParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./HiveSqlParser";
import { StatementContext } from "./HiveSqlParser";
import { ExplainStatementContext } from "./HiveSqlParser";
import { ExplainOptionContext } from "./HiveSqlParser";
import { VectorizationOnlyContext } from "./HiveSqlParser";
import { VectorizatonDetailContext } from "./HiveSqlParser";
import { ExecStatementContext } from "./HiveSqlParser";
import { LoadStatementContext } from "./HiveSqlParser";
import { DropPartitionsIgnoreClauseContext } from "./HiveSqlParser";
import { ReplicationClauseContext } from "./HiveSqlParser";
import { ExportStatementContext } from "./HiveSqlParser";
import { ImportStatementContext } from "./HiveSqlParser";
import { ReplDumpStatementContext } from "./HiveSqlParser";
import { ReplDbPolicyContext } from "./HiveSqlParser";
import { ReplLoadStatementContext } from "./HiveSqlParser";
import { ReplConfigsContext } from "./HiveSqlParser";
import { ReplConfigsListContext } from "./HiveSqlParser";
import { ReplTableLevelPolicyContext } from "./HiveSqlParser";
import { ReplStatusStatementContext } from "./HiveSqlParser";
import { DdlStatementContext } from "./HiveSqlParser";
import { IfExistsContext } from "./HiveSqlParser";
import { RestrictOrCascadeContext } from "./HiveSqlParser";
import { IfNotExistsContext } from "./HiveSqlParser";
import { ForceContext } from "./HiveSqlParser";
import { RewriteEnabledContext } from "./HiveSqlParser";
import { RewriteDisabledContext } from "./HiveSqlParser";
import { StoredAsDirsContext } from "./HiveSqlParser";
import { OrReplaceContext } from "./HiveSqlParser";
import { CreateDatabaseStatementContext } from "./HiveSqlParser";
import { DbLocationContext } from "./HiveSqlParser";
import { DbManagedLocationContext } from "./HiveSqlParser";
import { DbPropertiesContext } from "./HiveSqlParser";
import { DbPropertiesListContext } from "./HiveSqlParser";
import { DbConnectorNameContext } from "./HiveSqlParser";
import { SwitchDatabaseStatementContext } from "./HiveSqlParser";
import { DropDatabaseStatementContext } from "./HiveSqlParser";
import { DatabaseCommentContext } from "./HiveSqlParser";
import { TruncateTableStatementContext } from "./HiveSqlParser";
import { DropTableStatementContext } from "./HiveSqlParser";
import { InputFileFormatContext } from "./HiveSqlParser";
import { TabTypeExprContext } from "./HiveSqlParser";
import { PartTypeExprContext } from "./HiveSqlParser";
import { TabPartColTypeExprContext } from "./HiveSqlParser";
import { DescStatementContext } from "./HiveSqlParser";
import { AnalyzeStatementContext } from "./HiveSqlParser";
import { From_inContext } from "./HiveSqlParser";
import { Db_schemaContext } from "./HiveSqlParser";
import { ShowStatementContext } from "./HiveSqlParser";
import { ShowTablesFilterExprContext } from "./HiveSqlParser";
import { LockStatementContext } from "./HiveSqlParser";
import { LockDatabaseContext } from "./HiveSqlParser";
import { LockModeContext } from "./HiveSqlParser";
import { UnlockStatementContext } from "./HiveSqlParser";
import { UnlockDatabaseContext } from "./HiveSqlParser";
import { CreateRoleStatementContext } from "./HiveSqlParser";
import { DropRoleStatementContext } from "./HiveSqlParser";
import { GrantPrivilegesContext } from "./HiveSqlParser";
import { RevokePrivilegesContext } from "./HiveSqlParser";
import { GrantRoleContext } from "./HiveSqlParser";
import { RevokeRoleContext } from "./HiveSqlParser";
import { ShowRoleGrantsContext } from "./HiveSqlParser";
import { ShowRolesContext } from "./HiveSqlParser";
import { ShowCurrentRoleContext } from "./HiveSqlParser";
import { SetRoleContext } from "./HiveSqlParser";
import { ShowGrantsContext } from "./HiveSqlParser";
import { ShowRolePrincipalsContext } from "./HiveSqlParser";
import { PrivilegeIncludeColObjectContext } from "./HiveSqlParser";
import { PrivilegeObjectContext } from "./HiveSqlParser";
import { PrivObjectContext } from "./HiveSqlParser";
import { PrivObjectColsContext } from "./HiveSqlParser";
import { PrivilegeListContext } from "./HiveSqlParser";
import { PrivlegeDefContext } from "./HiveSqlParser";
import { PrivilegeTypeContext } from "./HiveSqlParser";
import { PrincipalSpecificationContext } from "./HiveSqlParser";
import { PrincipalNameContext } from "./HiveSqlParser";
import { PrincipalAlterNameContext } from "./HiveSqlParser";
import { WithGrantOptionContext } from "./HiveSqlParser";
import { GrantOptionForContext } from "./HiveSqlParser";
import { AdminOptionForContext } from "./HiveSqlParser";
import { WithAdminOptionContext } from "./HiveSqlParser";
import { MetastoreCheckContext } from "./HiveSqlParser";
import { ResourceListContext } from "./HiveSqlParser";
import { ResourceContext } from "./HiveSqlParser";
import { ResourceTypeContext } from "./HiveSqlParser";
import { CreateFunctionStatementContext } from "./HiveSqlParser";
import { DropFunctionStatementContext } from "./HiveSqlParser";
import { ReloadFunctionsStatementContext } from "./HiveSqlParser";
import { CreateMacroStatementContext } from "./HiveSqlParser";
import { DropMacroStatementContext } from "./HiveSqlParser";
import { CreateIndexStatementContext } from "./HiveSqlParser";
import { DropIndexStatementContext } from "./HiveSqlParser";
import { CreateViewStatementContext } from "./HiveSqlParser";
import { ViewPartitionContext } from "./HiveSqlParser";
import { ViewOrganizationContext } from "./HiveSqlParser";
import { ViewClusterSpecContext } from "./HiveSqlParser";
import { ViewComplexSpecContext } from "./HiveSqlParser";
import { ViewDistSpecContext } from "./HiveSqlParser";
import { ViewSortSpecContext } from "./HiveSqlParser";
import { DropViewStatementContext } from "./HiveSqlParser";
import { CreateMaterializedViewStatementContext } from "./HiveSqlParser";
import { DropMaterializedViewStatementContext } from "./HiveSqlParser";
import { CreateScheduledQueryStatementContext } from "./HiveSqlParser";
import { DropScheduledQueryStatementContext } from "./HiveSqlParser";
import { AlterScheduledQueryStatementContext } from "./HiveSqlParser";
import { AlterScheduledQueryChangeContext } from "./HiveSqlParser";
import { ScheduleSpecContext } from "./HiveSqlParser";
import { ExecutedAsSpecContext } from "./HiveSqlParser";
import { DefinedAsSpecContext } from "./HiveSqlParser";
import { ShowStmtIdentifierContext } from "./HiveSqlParser";
import { TableCommentContext } from "./HiveSqlParser";
import { CreateTablePartitionSpecContext } from "./HiveSqlParser";
import { CreateTablePartitionColumnTypeSpecContext } from "./HiveSqlParser";
import { CreateTablePartitionColumnSpecContext } from "./HiveSqlParser";
import { PartitionTransformSpecContext } from "./HiveSqlParser";
import { ColumnNameTransformConstraintContext } from "./HiveSqlParser";
import { PartitionTransformTypeContext } from "./HiveSqlParser";
import { TableBucketsContext } from "./HiveSqlParser";
import { TableImplBucketsContext } from "./HiveSqlParser";
import { TableSkewedContext } from "./HiveSqlParser";
import { RowFormatContext } from "./HiveSqlParser";
import { RecordReaderContext } from "./HiveSqlParser";
import { RecordWriterContext } from "./HiveSqlParser";
import { RowFormatSerdeContext } from "./HiveSqlParser";
import { RowFormatDelimitedContext } from "./HiveSqlParser";
import { TableRowFormatContext } from "./HiveSqlParser";
import { TablePropertiesPrefixedContext } from "./HiveSqlParser";
import { TablePropertiesContext } from "./HiveSqlParser";
import { TablePropertiesListContext } from "./HiveSqlParser";
import { KeyValuePropertyContext } from "./HiveSqlParser";
import { KeyPropertyContext } from "./HiveSqlParser";
import { TableRowFormatFieldIdentifierContext } from "./HiveSqlParser";
import { TableRowFormatCollItemsIdentifierContext } from "./HiveSqlParser";
import { TableRowFormatMapKeysIdentifierContext } from "./HiveSqlParser";
import { TableRowFormatLinesIdentifierContext } from "./HiveSqlParser";
import { TableRowNullFormatContext } from "./HiveSqlParser";
import { TableFileFormatContext } from "./HiveSqlParser";
import { TableLocationContext } from "./HiveSqlParser";
import { ColumnNameTypeListContext } from "./HiveSqlParser";
import { ColumnNameTypeOrConstraintListContext } from "./HiveSqlParser";
import { ColumnNameColonTypeListContext } from "./HiveSqlParser";
import { ColumnNameListContext } from "./HiveSqlParser";
import { ColumnNameContext } from "./HiveSqlParser";
import { ExtColumnNameContext } from "./HiveSqlParser";
import { ColumnNameOrderListContext } from "./HiveSqlParser";
import { ColumnParenthesesListContext } from "./HiveSqlParser";
import { EnableValidateSpecificationContext } from "./HiveSqlParser";
import { EnableSpecificationContext } from "./HiveSqlParser";
import { ValidateSpecificationContext } from "./HiveSqlParser";
import { EnforcedSpecificationContext } from "./HiveSqlParser";
import { RelySpecificationContext } from "./HiveSqlParser";
import { CreateConstraintContext } from "./HiveSqlParser";
import { AlterConstraintWithNameContext } from "./HiveSqlParser";
import { TableLevelConstraintContext } from "./HiveSqlParser";
import { PkUkConstraintContext } from "./HiveSqlParser";
import { CheckConstraintContext } from "./HiveSqlParser";
import { CreateForeignKeyContext } from "./HiveSqlParser";
import { AlterForeignKeyWithNameContext } from "./HiveSqlParser";
import { SkewedValueElementContext } from "./HiveSqlParser";
import { SkewedColumnValuePairListContext } from "./HiveSqlParser";
import { SkewedColumnValuePairContext } from "./HiveSqlParser";
import { SkewedColumnValuesContext } from "./HiveSqlParser";
import { SkewedColumnValueContext } from "./HiveSqlParser";
import { SkewedValueLocationElementContext } from "./HiveSqlParser";
import { OrderSpecificationContext } from "./HiveSqlParser";
import { NullOrderingContext } from "./HiveSqlParser";
import { ColumnNameOrderContext } from "./HiveSqlParser";
import { ColumnNameCommentListContext } from "./HiveSqlParser";
import { ColumnNameCommentContext } from "./HiveSqlParser";
import { OrderSpecificationRewriteContext } from "./HiveSqlParser";
import { ColumnRefOrderContext } from "./HiveSqlParser";
import { ColumnNameTypeContext } from "./HiveSqlParser";
import { ColumnNameTypeOrConstraintContext } from "./HiveSqlParser";
import { TableConstraintContext } from "./HiveSqlParser";
import { ColumnNameTypeConstraintContext } from "./HiveSqlParser";
import { ColumnConstraintContext } from "./HiveSqlParser";
import { ForeignKeyConstraintContext } from "./HiveSqlParser";
import { ColConstraintContext } from "./HiveSqlParser";
import { AlterColumnConstraintContext } from "./HiveSqlParser";
import { AlterForeignKeyConstraintContext } from "./HiveSqlParser";
import { AlterColConstraintContext } from "./HiveSqlParser";
import { ColumnConstraintTypeContext } from "./HiveSqlParser";
import { DefaultValContext } from "./HiveSqlParser";
import { TableConstraintTypeContext } from "./HiveSqlParser";
import { ConstraintOptsCreateContext } from "./HiveSqlParser";
import { ConstraintOptsAlterContext } from "./HiveSqlParser";
import { ColumnNameColonTypeContext } from "./HiveSqlParser";
import { ColTypeContext } from "./HiveSqlParser";
import { ColTypeListContext } from "./HiveSqlParser";
import { TypeContext } from "./HiveSqlParser";
import { PrimitiveTypeContext } from "./HiveSqlParser";
import { ListTypeContext } from "./HiveSqlParser";
import { StructTypeContext } from "./HiveSqlParser";
import { MapTypeContext } from "./HiveSqlParser";
import { UnionTypeContext } from "./HiveSqlParser";
import { SetOperatorContext } from "./HiveSqlParser";
import { QueryStatementExpressionContext } from "./HiveSqlParser";
import { QueryStatementExpressionBodyContext } from "./HiveSqlParser";
import { WithClauseContext } from "./HiveSqlParser";
import { CteStatementContext } from "./HiveSqlParser";
import { FromStatementContext } from "./HiveSqlParser";
import { SingleFromStatementContext } from "./HiveSqlParser";
import { RegularBodyContext } from "./HiveSqlParser";
import { AtomSelectStatementContext } from "./HiveSqlParser";
import { SelectStatementContext } from "./HiveSqlParser";
import { SetOpSelectStatementContext } from "./HiveSqlParser";
import { SelectStatementWithCTEContext } from "./HiveSqlParser";
import { BodyContext } from "./HiveSqlParser";
import { InsertClauseContext } from "./HiveSqlParser";
import { DestinationContext } from "./HiveSqlParser";
import { LimitClauseContext } from "./HiveSqlParser";
import { DeleteStatementContext } from "./HiveSqlParser";
import { ColumnAssignmentClauseContext } from "./HiveSqlParser";
import { PrecedencePlusExpressionOrDefaultContext } from "./HiveSqlParser";
import { SetColumnsClauseContext } from "./HiveSqlParser";
import { UpdateStatementContext } from "./HiveSqlParser";
import { SqlTransactionStatementContext } from "./HiveSqlParser";
import { StartTransactionStatementContext } from "./HiveSqlParser";
import { TransactionModeContext } from "./HiveSqlParser";
import { TransactionAccessModeContext } from "./HiveSqlParser";
import { IsolationLevelContext } from "./HiveSqlParser";
import { LevelOfIsolationContext } from "./HiveSqlParser";
import { CommitStatementContext } from "./HiveSqlParser";
import { RollbackStatementContext } from "./HiveSqlParser";
import { SetAutoCommitStatementContext } from "./HiveSqlParser";
import { AbortTransactionStatementContext } from "./HiveSqlParser";
import { AbortCompactionStatementContext } from "./HiveSqlParser";
import { MergeStatementContext } from "./HiveSqlParser";
import { WhenClausesContext } from "./HiveSqlParser";
import { WhenNotMatchedClauseContext } from "./HiveSqlParser";
import { WhenMatchedAndClauseContext } from "./HiveSqlParser";
import { WhenMatchedThenClauseContext } from "./HiveSqlParser";
import { UpdateOrDeleteContext } from "./HiveSqlParser";
import { KillQueryStatementContext } from "./HiveSqlParser";
import { CompactionIdContext } from "./HiveSqlParser";
import { CompactionPoolContext } from "./HiveSqlParser";
import { CompactionTypeContext } from "./HiveSqlParser";
import { CompactionStatusContext } from "./HiveSqlParser";
import { AlterStatementContext } from "./HiveSqlParser";
import { AlterTableStatementSuffixContext } from "./HiveSqlParser";
import { AlterTblPartitionStatementSuffixContext } from "./HiveSqlParser";
import { AlterStatementPartitionKeyTypeContext } from "./HiveSqlParser";
import { AlterViewStatementSuffixContext } from "./HiveSqlParser";
import { AlterMaterializedViewStatementSuffixContext } from "./HiveSqlParser";
import { AlterMaterializedViewSuffixRewriteContext } from "./HiveSqlParser";
import { AlterMaterializedViewSuffixRebuildContext } from "./HiveSqlParser";
import { AlterDatabaseStatementSuffixContext } from "./HiveSqlParser";
import { AlterDatabaseSuffixPropertiesContext } from "./HiveSqlParser";
import { AlterDatabaseSuffixSetOwnerContext } from "./HiveSqlParser";
import { AlterDatabaseSuffixSetLocationContext } from "./HiveSqlParser";
import { AlterDatabaseSuffixSetManagedLocationContext } from "./HiveSqlParser";
import { AlterStatementSuffixRenameContext } from "./HiveSqlParser";
import { AlterStatementSuffixAddColContext } from "./HiveSqlParser";
import { AlterStatementSuffixAddConstraintContext } from "./HiveSqlParser";
import { AlterStatementSuffixUpdateColumnsContext } from "./HiveSqlParser";
import { AlterStatementSuffixProtectionsContext } from "./HiveSqlParser";
import { AlterStatementSuffixDropConstraintContext } from "./HiveSqlParser";
import { AlterStatementSuffixRenameColContext } from "./HiveSqlParser";
import { AlterStatementSuffixUpdateStatsColContext } from "./HiveSqlParser";
import { AlterStatementSuffixUpdateStatsContext } from "./HiveSqlParser";
import { AlterStatementChangeColPositionContext } from "./HiveSqlParser";
import { AlterStatementSuffixAddPartitionsContext } from "./HiveSqlParser";
import { AlterStatementSuffixAddPartitionsElementContext } from "./HiveSqlParser";
import { AlterStatementSuffixTouchContext } from "./HiveSqlParser";
import { AlterStatementSuffixArchiveContext } from "./HiveSqlParser";
import { AlterStatementSuffixUnArchiveContext } from "./HiveSqlParser";
import { PartitionLocationContext } from "./HiveSqlParser";
import { AlterStatementSuffixRecoverPartitionsContext } from "./HiveSqlParser";
import { AlterStatementSuffixDropPartitionsContext } from "./HiveSqlParser";
import { AlterStatementSuffixPropertiesContext } from "./HiveSqlParser";
import { AlterViewSuffixPropertiesContext } from "./HiveSqlParser";
import { AlterStatementSuffixSerdePropertiesContext } from "./HiveSqlParser";
import { TablePartitionPrefixContext } from "./HiveSqlParser";
import { AlterStatementSuffixFileFormatContext } from "./HiveSqlParser";
import { AlterStatementSuffixClusterbySortbyContext } from "./HiveSqlParser";
import { AlterTblPartitionStatementSuffixSkewedLocationContext } from "./HiveSqlParser";
import { SkewedLocationsContext } from "./HiveSqlParser";
import { SkewedLocationsListContext } from "./HiveSqlParser";
import { SkewedLocationMapContext } from "./HiveSqlParser";
import { AlterStatementSuffixLocationContext } from "./HiveSqlParser";
import { AlterStatementSuffixSkewedbyContext } from "./HiveSqlParser";
import { AlterStatementSuffixExchangePartitionContext } from "./HiveSqlParser";
import { AlterStatementSuffixRenamePartContext } from "./HiveSqlParser";
import { AlterStatementSuffixStatsPartContext } from "./HiveSqlParser";
import { AlterStatementSuffixMergeFilesContext } from "./HiveSqlParser";
import { AlterStatementSuffixBucketNumContext } from "./HiveSqlParser";
import { BlockingContext } from "./HiveSqlParser";
import { CompactPoolContext } from "./HiveSqlParser";
import { AlterStatementSuffixCompactContext } from "./HiveSqlParser";
import { AlterStatementSuffixSetOwnerContext } from "./HiveSqlParser";
import { AlterStatementSuffixSetPartSpecContext } from "./HiveSqlParser";
import { AlterStatementSuffixExecuteContext } from "./HiveSqlParser";
import { AlterIndexStatementSuffixContext } from "./HiveSqlParser";
import { FileFormatContext } from "./HiveSqlParser";
import { AlterDataConnectorStatementSuffixContext } from "./HiveSqlParser";
import { AlterDataConnectorSuffixPropertiesContext } from "./HiveSqlParser";
import { AlterDataConnectorSuffixSetOwnerContext } from "./HiveSqlParser";
import { AlterDataConnectorSuffixSetUrlContext } from "./HiveSqlParser";
import { LikeTableOrFileContext } from "./HiveSqlParser";
import { CreateTableStatementContext } from "./HiveSqlParser";
import { CreateDataConnectorStatementContext } from "./HiveSqlParser";
import { DataConnectorCommentContext } from "./HiveSqlParser";
import { DataConnectorUrlContext } from "./HiveSqlParser";
import { DataConnectorTypeContext } from "./HiveSqlParser";
import { DcPropertiesContext } from "./HiveSqlParser";
import { DropDataConnectorStatementContext } from "./HiveSqlParser";
import { TableAllColumnsContext } from "./HiveSqlParser";
import { TableOrColumnContext } from "./HiveSqlParser";
import { DefaultValueContext } from "./HiveSqlParser";
import { ExpressionListContext } from "./HiveSqlParser";
import { AliasListContext } from "./HiveSqlParser";
import { FromClauseContext } from "./HiveSqlParser";
import { FromSourceContext } from "./HiveSqlParser";
import { AtomjoinSourceContext } from "./HiveSqlParser";
import { JoinSourceContext } from "./HiveSqlParser";
import { JoinSourcePartContext } from "./HiveSqlParser";
import { UniqueJoinSourceContext } from "./HiveSqlParser";
import { UniqueJoinExprContext } from "./HiveSqlParser";
import { UniqueJoinTokenContext } from "./HiveSqlParser";
import { JoinTokenContext } from "./HiveSqlParser";
import { LateralViewContext } from "./HiveSqlParser";
import { TableAliasContext } from "./HiveSqlParser";
import { TableBucketSampleContext } from "./HiveSqlParser";
import { SplitSampleContext } from "./HiveSqlParser";
import { TableSampleContext } from "./HiveSqlParser";
import { TableSourceContext } from "./HiveSqlParser";
import { AsOfClauseContext } from "./HiveSqlParser";
import { UniqueJoinTableSourceContext } from "./HiveSqlParser";
import { DbSchemaNameContext } from "./HiveSqlParser";
import { DbSchemaNameCreateContext } from "./HiveSqlParser";
import { TableOrViewContext } from "./HiveSqlParser";
import { TableNameContext } from "./HiveSqlParser";
import { TableNameCreateContext } from "./HiveSqlParser";
import { ViewNameContext } from "./HiveSqlParser";
import { ViewNameCreateContext } from "./HiveSqlParser";
import { SubQuerySourceContext } from "./HiveSqlParser";
import { PartitioningSpecContext } from "./HiveSqlParser";
import { PartitionTableFunctionSourceContext } from "./HiveSqlParser";
import { PartitionedTableFunctionContext } from "./HiveSqlParser";
import { WhereClauseContext } from "./HiveSqlParser";
import { SearchConditionContext } from "./HiveSqlParser";
import { ValuesSourceContext } from "./HiveSqlParser";
import { ValuesClauseContext } from "./HiveSqlParser";
import { ValuesTableConstructorContext } from "./HiveSqlParser";
import { ValueRowConstructorContext } from "./HiveSqlParser";
import { FirstValueRowConstructorContext } from "./HiveSqlParser";
import { VirtualTableSourceContext } from "./HiveSqlParser";
import { SelectClauseContext } from "./HiveSqlParser";
import { All_distinctContext } from "./HiveSqlParser";
import { SelectListContext } from "./HiveSqlParser";
import { SelectTrfmClauseContext } from "./HiveSqlParser";
import { SelectItemContext } from "./HiveSqlParser";
import { TrfmClauseContext } from "./HiveSqlParser";
import { SelectExpressionContext } from "./HiveSqlParser";
import { SelectExpressionListContext } from "./HiveSqlParser";
import { Window_clauseContext } from "./HiveSqlParser";
import { Window_defnContext } from "./HiveSqlParser";
import { Window_specificationContext } from "./HiveSqlParser";
import { Window_frameContext } from "./HiveSqlParser";
import { Window_range_expressionContext } from "./HiveSqlParser";
import { Window_value_expressionContext } from "./HiveSqlParser";
import { Window_frame_start_boundaryContext } from "./HiveSqlParser";
import { Window_frame_boundaryContext } from "./HiveSqlParser";
import { GroupByClauseContext } from "./HiveSqlParser";
import { Groupby_expressionContext } from "./HiveSqlParser";
import { GroupByEmptyContext } from "./HiveSqlParser";
import { RollupStandardContext } from "./HiveSqlParser";
import { RollupOldSyntaxContext } from "./HiveSqlParser";
import { GroupingSetExpressionContext } from "./HiveSqlParser";
import { GroupingSetExpressionMultipleContext } from "./HiveSqlParser";
import { GroupingExpressionSingleContext } from "./HiveSqlParser";
import { HavingClauseContext } from "./HiveSqlParser";
import { QualifyClauseContext } from "./HiveSqlParser";
import { HavingConditionContext } from "./HiveSqlParser";
import { ExpressionsInParenthesisContext } from "./HiveSqlParser";
import { ExpressionsNotInParenthesisContext } from "./HiveSqlParser";
import { ExpressionPartContext } from "./HiveSqlParser";
import { ExpressionOrDefaultContext } from "./HiveSqlParser";
import { FirstExpressionsWithAliasContext } from "./HiveSqlParser";
import { ExpressionWithAliasContext } from "./HiveSqlParser";
import { ExpressionsContext } from "./HiveSqlParser";
import { ColumnRefOrderInParenthesisContext } from "./HiveSqlParser";
import { ColumnRefOrderNotInParenthesisContext } from "./HiveSqlParser";
import { OrderByClauseContext } from "./HiveSqlParser";
import { ClusterByClauseContext } from "./HiveSqlParser";
import { PartitionByClauseContext } from "./HiveSqlParser";
import { DistributeByClauseContext } from "./HiveSqlParser";
import { SortByClauseContext } from "./HiveSqlParser";
import { TrimFunctionContext } from "./HiveSqlParser";
import { Function_Context } from "./HiveSqlParser";
import { Null_treatmentContext } from "./HiveSqlParser";
import { FunctionNameForDDLContext } from "./HiveSqlParser";
import { FunctionNameForInvokeContext } from "./HiveSqlParser";
import { UserDefinedFuncNameContext } from "./HiveSqlParser";
import { FunctionNameCreateContext } from "./HiveSqlParser";
import { CastExpressionContext } from "./HiveSqlParser";
import { CaseExpressionContext } from "./HiveSqlParser";
import { WhenExpressionContext } from "./HiveSqlParser";
import { FloorExpressionContext } from "./HiveSqlParser";
import { FloorDateQualifiersContext } from "./HiveSqlParser";
import { ExtractExpressionContext } from "./HiveSqlParser";
import { TimeQualifiersContext } from "./HiveSqlParser";
import { ConstantContext } from "./HiveSqlParser";
import { PrepareStmtParamContext } from "./HiveSqlParser";
import { ParameterIdxContext } from "./HiveSqlParser";
import { StringLiteralSequenceContext } from "./HiveSqlParser";
import { CharSetStringLiteralContext } from "./HiveSqlParser";
import { DateLiteralContext } from "./HiveSqlParser";
import { TimestampLiteralContext } from "./HiveSqlParser";
import { TimestampLocalTZLiteralContext } from "./HiveSqlParser";
import { IntervalValueContext } from "./HiveSqlParser";
import { IntervalLiteralContext } from "./HiveSqlParser";
import { IntervalExpressionContext } from "./HiveSqlParser";
import { IntervalQualifiersContext } from "./HiveSqlParser";
import { ExpressionContext } from "./HiveSqlParser";
import { AtomExpressionContext } from "./HiveSqlParser";
import { PrecedenceFieldExpressionContext } from "./HiveSqlParser";
import { PrecedenceUnaryOperatorContext } from "./HiveSqlParser";
import { PrecedenceUnaryPrefixExpressionContext } from "./HiveSqlParser";
import { PrecedenceBitwiseXorOperatorContext } from "./HiveSqlParser";
import { PrecedenceBitwiseXorExpressionContext } from "./HiveSqlParser";
import { PrecedenceStarOperatorContext } from "./HiveSqlParser";
import { PrecedenceStarExpressionContext } from "./HiveSqlParser";
import { PrecedencePlusOperatorContext } from "./HiveSqlParser";
import { PrecedencePlusExpressionContext } from "./HiveSqlParser";
import { PrecedenceConcatenateOperatorContext } from "./HiveSqlParser";
import { PrecedenceConcatenateExpressionContext } from "./HiveSqlParser";
import { PrecedenceAmpersandOperatorContext } from "./HiveSqlParser";
import { PrecedenceAmpersandExpressionContext } from "./HiveSqlParser";
import { PrecedenceBitwiseOrOperatorContext } from "./HiveSqlParser";
import { PrecedenceBitwiseOrExpressionContext } from "./HiveSqlParser";
import { PrecedenceRegexpOperatorContext } from "./HiveSqlParser";
import { PrecedenceSimilarOperatorContext } from "./HiveSqlParser";
import { SubQueryExpressionContext } from "./HiveSqlParser";
import { PrecedenceSimilarExpressionContext } from "./HiveSqlParser";
import { PrecedenceSimilarExpressionMainContext } from "./HiveSqlParser";
import { PrecedenceSimilarExpressionPartContext } from "./HiveSqlParser";
import { PrecedenceSimilarExpressionAtomContext } from "./HiveSqlParser";
import { PrecedenceSimilarExpressionQuantifierPredicateContext } from "./HiveSqlParser";
import { QuantifierTypeContext } from "./HiveSqlParser";
import { PrecedenceSimilarExpressionInContext } from "./HiveSqlParser";
import { PrecedenceSimilarExpressionPartNotContext } from "./HiveSqlParser";
import { PrecedenceDistinctOperatorContext } from "./HiveSqlParser";
import { PrecedenceEqualOperatorContext } from "./HiveSqlParser";
import { PrecedenceEqualExpressionContext } from "./HiveSqlParser";
import { IsConditionContext } from "./HiveSqlParser";
import { PrecedenceUnarySuffixExpressionContext } from "./HiveSqlParser";
import { PrecedenceNotOperatorContext } from "./HiveSqlParser";
import { PrecedenceNotExpressionContext } from "./HiveSqlParser";
import { PrecedenceAndOperatorContext } from "./HiveSqlParser";
import { PrecedenceAndExpressionContext } from "./HiveSqlParser";
import { PrecedenceOrOperatorContext } from "./HiveSqlParser";
import { PrecedenceOrExpressionContext } from "./HiveSqlParser";
import { BooleanValueContext } from "./HiveSqlParser";
import { BooleanValueTokContext } from "./HiveSqlParser";
import { TableOrPartitionContext } from "./HiveSqlParser";
import { PartitionSpecContext } from "./HiveSqlParser";
import { PartitionValContext } from "./HiveSqlParser";
import { PartitionSelectorSpecContext } from "./HiveSqlParser";
import { PartitionSelectorValContext } from "./HiveSqlParser";
import { PartitionSelectorOperatorContext } from "./HiveSqlParser";
import { SubQuerySelectorOperatorContext } from "./HiveSqlParser";
import { SysFuncNamesContext } from "./HiveSqlParser";
import { Id_Context } from "./HiveSqlParser";
import { FunctionIdentifierContext } from "./HiveSqlParser";
import { PrincipalIdentifierContext } from "./HiveSqlParser";
import { NonReservedContext } from "./HiveSqlParser";
import { Sql11ReservedKeywordsUsedAsFunctionNameContext } from "./HiveSqlParser";
import { HintContext } from "./HiveSqlParser";
import { HintListContext } from "./HiveSqlParser";
import { HintItemContext } from "./HiveSqlParser";
import { HintNameContext } from "./HiveSqlParser";
import { HintArgsContext } from "./HiveSqlParser";
import { HintArgNameContext } from "./HiveSqlParser";
import { PrepareStatementContext } from "./HiveSqlParser";
import { ExecuteStatementContext } from "./HiveSqlParser";
import { ExecuteParamListContext } from "./HiveSqlParser";
import { ResourcePlanDdlStatementsContext } from "./HiveSqlParser";
import { RpAssignContext } from "./HiveSqlParser";
import { RpAssignListContext } from "./HiveSqlParser";
import { RpUnassignContext } from "./HiveSqlParser";
import { RpUnassignListContext } from "./HiveSqlParser";
import { CreateResourcePlanStatementContext } from "./HiveSqlParser";
import { WithReplaceContext } from "./HiveSqlParser";
import { ActivateContext } from "./HiveSqlParser";
import { EnableContext } from "./HiveSqlParser";
import { DisableContext } from "./HiveSqlParser";
import { UnmanagedContext } from "./HiveSqlParser";
import { YearContext } from "./HiveSqlParser";
import { MonthContext } from "./HiveSqlParser";
import { WeekContext } from "./HiveSqlParser";
import { DayContext } from "./HiveSqlParser";
import { HourContext } from "./HiveSqlParser";
import { MinuteContext } from "./HiveSqlParser";
import { SecondContext } from "./HiveSqlParser";
import { DecimalContext } from "./HiveSqlParser";
import { AlterResourcePlanStatementContext } from "./HiveSqlParser";
import { GlobalWmStatementContext } from "./HiveSqlParser";
import { ReplaceResourcePlanStatementContext } from "./HiveSqlParser";
import { DropResourcePlanStatementContext } from "./HiveSqlParser";
import { PoolPathContext } from "./HiveSqlParser";
import { TriggerExpressionContext } from "./HiveSqlParser";
import { TriggerExpressionStandaloneContext } from "./HiveSqlParser";
import { TriggerOrExpressionContext } from "./HiveSqlParser";
import { TriggerAndExpressionContext } from "./HiveSqlParser";
import { TriggerAtomExpressionContext } from "./HiveSqlParser";
import { TriggerLiteralContext } from "./HiveSqlParser";
import { ComparisionOperatorContext } from "./HiveSqlParser";
import { TriggerActionExpressionContext } from "./HiveSqlParser";
import { TriggerActionExpressionStandaloneContext } from "./HiveSqlParser";
import { CreateTriggerStatementContext } from "./HiveSqlParser";
import { AlterTriggerStatementContext } from "./HiveSqlParser";
import { DropTriggerStatementContext } from "./HiveSqlParser";
import { PoolAssignContext } from "./HiveSqlParser";
import { PoolAssignListContext } from "./HiveSqlParser";
import { CreatePoolStatementContext } from "./HiveSqlParser";
import { AlterPoolStatementContext } from "./HiveSqlParser";
import { DropPoolStatementContext } from "./HiveSqlParser";
import { CreateMappingStatementContext } from "./HiveSqlParser";
import { AlterMappingStatementContext } from "./HiveSqlParser";
import { DropMappingStatementContext } from "./HiveSqlParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `HiveSqlParser`.
 */
export interface HiveSqlParserListener extends ParseTreeListener {
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
	 * Enter a parse tree produced by `HiveSqlParser.singleFromStatement`.
	 * @param ctx the parse tree
	 */
	enterSingleFromStatement?: (ctx: SingleFromStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSqlParser.singleFromStatement`.
	 * @param ctx the parse tree
	 */
	exitSingleFromStatement?: (ctx: SingleFromStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSqlParser.regularBody`.
	 * @param ctx the parse tree
	 */
	enterRegularBody?: (ctx: RegularBodyContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSqlParser.regularBody`.
	 * @param ctx the parse tree
	 */
	exitRegularBody?: (ctx: RegularBodyContext) => void;

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
	 * Enter a parse tree produced by `HiveSqlParser.body`.
	 * @param ctx the parse tree
	 */
	enterBody?: (ctx: BodyContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSqlParser.body`.
	 * @param ctx the parse tree
	 */
	exitBody?: (ctx: BodyContext) => void;

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
	 * Enter a parse tree produced by `HiveSqlParser.tableOrColumn`.
	 * @param ctx the parse tree
	 */
	enterTableOrColumn?: (ctx: TableOrColumnContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSqlParser.tableOrColumn`.
	 * @param ctx the parse tree
	 */
	exitTableOrColumn?: (ctx: TableOrColumnContext) => void;

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
}

