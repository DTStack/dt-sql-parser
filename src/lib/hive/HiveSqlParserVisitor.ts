// Generated from /Users/xuxiaoqi/Documents/dt-sql-parser-copy/src/grammar/hive/HiveSqlParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
import { ShowFunctionIdentifierContext } from "./HiveSqlParser";
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
import { TableNameContext } from "./HiveSqlParser";
import { ViewNameContext } from "./HiveSqlParser";
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
import { FunctionNameContext } from "./HiveSqlParser";
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
import { DescFuncNamesContext } from "./HiveSqlParser";
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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `HiveSqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface HiveSqlParserVisitor<Result> extends ParseTreeVisitor<Result> {
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
	 * Visit a parse tree produced by `HiveSqlParser.showFunctionIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowFunctionIdentifier?: (ctx: ShowFunctionIdentifierContext) => Result;

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
	 * Visit a parse tree produced by `HiveSqlParser.singleFromStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleFromStatement?: (ctx: SingleFromStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSqlParser.regularBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegularBody?: (ctx: RegularBodyContext) => Result;

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
	 * Visit a parse tree produced by `HiveSqlParser.body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBody?: (ctx: BodyContext) => Result;

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
	 * Visit a parse tree produced by `HiveSqlParser.tableOrColumn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOrColumn?: (ctx: TableOrColumnContext) => Result;

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
	 * Visit a parse tree produced by `HiveSqlParser.tableName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableName?: (ctx: TableNameContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSqlParser.viewName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewName?: (ctx: ViewNameContext) => Result;

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
	 * Visit a parse tree produced by `HiveSqlParser.functionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionName?: (ctx: FunctionNameContext) => Result;

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
	 * Visit a parse tree produced by `HiveSqlParser.descFuncNames`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescFuncNames?: (ctx: DescFuncNamesContext) => Result;

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

