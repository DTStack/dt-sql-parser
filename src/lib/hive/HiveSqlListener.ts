// Generated from /Users/ziv/github.com/dt-sql-parser/src/grammar/hive/HiveSql.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./HiveSql";
import { StatementContext } from "./HiveSql";
import { ExplainStatementContext } from "./HiveSql";
import { ExplainOptionContext } from "./HiveSql";
import { VectorizationOnlyContext } from "./HiveSql";
import { VectorizatonDetailContext } from "./HiveSql";
import { ExecStatementContext } from "./HiveSql";
import { LoadStatementContext } from "./HiveSql";
import { ReplicationClauseContext } from "./HiveSql";
import { ExportStatementContext } from "./HiveSql";
import { ImportStatementContext } from "./HiveSql";
import { ReplDumpStatementContext } from "./HiveSql";
import { ReplDbPolicyContext } from "./HiveSql";
import { ReplLoadStatementContext } from "./HiveSql";
import { ReplConfigsContext } from "./HiveSql";
import { ReplConfigsListContext } from "./HiveSql";
import { ReplTableLevelPolicyContext } from "./HiveSql";
import { ReplStatusStatementContext } from "./HiveSql";
import { DdlStatementContext } from "./HiveSql";
import { IfExistsContext } from "./HiveSql";
import { RestrictOrCascadeContext } from "./HiveSql";
import { IfNotExistsContext } from "./HiveSql";
import { ForceContext } from "./HiveSql";
import { RewriteEnabledContext } from "./HiveSql";
import { RewriteDisabledContext } from "./HiveSql";
import { StoredAsDirsContext } from "./HiveSql";
import { OrReplaceContext } from "./HiveSql";
import { CreateDatabaseStatementContext } from "./HiveSql";
import { DbLocationContext } from "./HiveSql";
import { DbManagedLocationContext } from "./HiveSql";
import { DbPropertiesContext } from "./HiveSql";
import { DbPropertiesListContext } from "./HiveSql";
import { DbConnectorNameContext } from "./HiveSql";
import { SwitchDatabaseStatementContext } from "./HiveSql";
import { DropDatabaseStatementContext } from "./HiveSql";
import { DatabaseCommentContext } from "./HiveSql";
import { TruncateTableStatementContext } from "./HiveSql";
import { DropTableStatementContext } from "./HiveSql";
import { InputFileFormatContext } from "./HiveSql";
import { TabTypeExprContext } from "./HiveSql";
import { PartTypeExprContext } from "./HiveSql";
import { TabPartColTypeExprContext } from "./HiveSql";
import { DescStatementContext } from "./HiveSql";
import { AnalyzeStatementContext } from "./HiveSql";
import { From_inContext } from "./HiveSql";
import { Db_schemaContext } from "./HiveSql";
import { ShowStatementContext } from "./HiveSql";
import { ShowTablesFilterExprContext } from "./HiveSql";
import { LockStatementContext } from "./HiveSql";
import { LockDatabaseContext } from "./HiveSql";
import { LockModeContext } from "./HiveSql";
import { UnlockStatementContext } from "./HiveSql";
import { UnlockDatabaseContext } from "./HiveSql";
import { CreateRoleStatementContext } from "./HiveSql";
import { DropRoleStatementContext } from "./HiveSql";
import { GrantPrivilegesContext } from "./HiveSql";
import { RevokePrivilegesContext } from "./HiveSql";
import { GrantRoleContext } from "./HiveSql";
import { RevokeRoleContext } from "./HiveSql";
import { ShowRoleGrantsContext } from "./HiveSql";
import { ShowRolesContext } from "./HiveSql";
import { ShowCurrentRoleContext } from "./HiveSql";
import { SetRoleContext } from "./HiveSql";
import { ShowGrantsContext } from "./HiveSql";
import { ShowRolePrincipalsContext } from "./HiveSql";
import { PrivilegeIncludeColObjectContext } from "./HiveSql";
import { PrivilegeObjectContext } from "./HiveSql";
import { PrivObjectContext } from "./HiveSql";
import { PrivObjectColsContext } from "./HiveSql";
import { PrivilegeListContext } from "./HiveSql";
import { PrivlegeDefContext } from "./HiveSql";
import { PrivilegeTypeContext } from "./HiveSql";
import { PrincipalSpecificationContext } from "./HiveSql";
import { PrincipalNameContext } from "./HiveSql";
import { WithGrantOptionContext } from "./HiveSql";
import { GrantOptionForContext } from "./HiveSql";
import { AdminOptionForContext } from "./HiveSql";
import { WithAdminOptionContext } from "./HiveSql";
import { MetastoreCheckContext } from "./HiveSql";
import { ResourceListContext } from "./HiveSql";
import { ResourceContext } from "./HiveSql";
import { ResourceTypeContext } from "./HiveSql";
import { CreateFunctionStatementContext } from "./HiveSql";
import { DropFunctionStatementContext } from "./HiveSql";
import { ReloadFunctionsStatementContext } from "./HiveSql";
import { CreateMacroStatementContext } from "./HiveSql";
import { DropMacroStatementContext } from "./HiveSql";
import { CreateViewStatementContext } from "./HiveSql";
import { ViewPartitionContext } from "./HiveSql";
import { ViewOrganizationContext } from "./HiveSql";
import { ViewClusterSpecContext } from "./HiveSql";
import { ViewComplexSpecContext } from "./HiveSql";
import { ViewDistSpecContext } from "./HiveSql";
import { ViewSortSpecContext } from "./HiveSql";
import { DropViewStatementContext } from "./HiveSql";
import { CreateMaterializedViewStatementContext } from "./HiveSql";
import { DropMaterializedViewStatementContext } from "./HiveSql";
import { CreateScheduledQueryStatementContext } from "./HiveSql";
import { DropScheduledQueryStatementContext } from "./HiveSql";
import { AlterScheduledQueryStatementContext } from "./HiveSql";
import { AlterScheduledQueryChangeContext } from "./HiveSql";
import { ScheduleSpecContext } from "./HiveSql";
import { ExecutedAsSpecContext } from "./HiveSql";
import { DefinedAsSpecContext } from "./HiveSql";
import { ShowFunctionIdentifierContext } from "./HiveSql";
import { ShowStmtIdentifierContext } from "./HiveSql";
import { TableCommentContext } from "./HiveSql";
import { CreateTablePartitionSpecContext } from "./HiveSql";
import { CreateTablePartitionColumnTypeSpecContext } from "./HiveSql";
import { CreateTablePartitionColumnSpecContext } from "./HiveSql";
import { PartitionTransformSpecContext } from "./HiveSql";
import { ColumnNameTransformConstraintContext } from "./HiveSql";
import { PartitionTransformTypeContext } from "./HiveSql";
import { TableBucketsContext } from "./HiveSql";
import { TableImplBucketsContext } from "./HiveSql";
import { TableSkewedContext } from "./HiveSql";
import { RowFormatContext } from "./HiveSql";
import { RecordReaderContext } from "./HiveSql";
import { RecordWriterContext } from "./HiveSql";
import { RowFormatSerdeContext } from "./HiveSql";
import { RowFormatDelimitedContext } from "./HiveSql";
import { TableRowFormatContext } from "./HiveSql";
import { TablePropertiesPrefixedContext } from "./HiveSql";
import { TablePropertiesContext } from "./HiveSql";
import { TablePropertiesListContext } from "./HiveSql";
import { KeyValuePropertyContext } from "./HiveSql";
import { KeyPropertyContext } from "./HiveSql";
import { TableRowFormatFieldIdentifierContext } from "./HiveSql";
import { TableRowFormatCollItemsIdentifierContext } from "./HiveSql";
import { TableRowFormatMapKeysIdentifierContext } from "./HiveSql";
import { TableRowFormatLinesIdentifierContext } from "./HiveSql";
import { TableRowNullFormatContext } from "./HiveSql";
import { TableFileFormatContext } from "./HiveSql";
import { TableLocationContext } from "./HiveSql";
import { ColumnNameTypeListContext } from "./HiveSql";
import { ColumnNameTypeOrConstraintListContext } from "./HiveSql";
import { ColumnNameColonTypeListContext } from "./HiveSql";
import { ColumnNameListContext } from "./HiveSql";
import { ColumnNameContext } from "./HiveSql";
import { ExtColumnNameContext } from "./HiveSql";
import { ColumnNameOrderListContext } from "./HiveSql";
import { ColumnParenthesesListContext } from "./HiveSql";
import { EnableValidateSpecificationContext } from "./HiveSql";
import { EnableSpecificationContext } from "./HiveSql";
import { ValidateSpecificationContext } from "./HiveSql";
import { EnforcedSpecificationContext } from "./HiveSql";
import { RelySpecificationContext } from "./HiveSql";
import { CreateConstraintContext } from "./HiveSql";
import { AlterConstraintWithNameContext } from "./HiveSql";
import { TableLevelConstraintContext } from "./HiveSql";
import { PkUkConstraintContext } from "./HiveSql";
import { CheckConstraintContext } from "./HiveSql";
import { CreateForeignKeyContext } from "./HiveSql";
import { AlterForeignKeyWithNameContext } from "./HiveSql";
import { SkewedValueElementContext } from "./HiveSql";
import { SkewedColumnValuePairListContext } from "./HiveSql";
import { SkewedColumnValuePairContext } from "./HiveSql";
import { SkewedColumnValuesContext } from "./HiveSql";
import { SkewedColumnValueContext } from "./HiveSql";
import { SkewedValueLocationElementContext } from "./HiveSql";
import { OrderSpecificationContext } from "./HiveSql";
import { NullOrderingContext } from "./HiveSql";
import { ColumnNameOrderContext } from "./HiveSql";
import { ColumnNameCommentListContext } from "./HiveSql";
import { ColumnNameCommentContext } from "./HiveSql";
import { OrderSpecificationRewriteContext } from "./HiveSql";
import { ColumnRefOrderContext } from "./HiveSql";
import { ColumnNameTypeContext } from "./HiveSql";
import { ColumnNameTypeOrConstraintContext } from "./HiveSql";
import { TableConstraintContext } from "./HiveSql";
import { ColumnNameTypeConstraintContext } from "./HiveSql";
import { ColumnConstraintContext } from "./HiveSql";
import { ForeignKeyConstraintContext } from "./HiveSql";
import { ColConstraintContext } from "./HiveSql";
import { AlterColumnConstraintContext } from "./HiveSql";
import { AlterForeignKeyConstraintContext } from "./HiveSql";
import { AlterColConstraintContext } from "./HiveSql";
import { ColumnConstraintTypeContext } from "./HiveSql";
import { DefaultValContext } from "./HiveSql";
import { TableConstraintTypeContext } from "./HiveSql";
import { ConstraintOptsCreateContext } from "./HiveSql";
import { ConstraintOptsAlterContext } from "./HiveSql";
import { ColumnNameColonTypeContext } from "./HiveSql";
import { ColTypeContext } from "./HiveSql";
import { ColTypeListContext } from "./HiveSql";
import { TypeContext } from "./HiveSql";
import { PrimitiveTypeContext } from "./HiveSql";
import { ListTypeContext } from "./HiveSql";
import { StructTypeContext } from "./HiveSql";
import { MapTypeContext } from "./HiveSql";
import { UnionTypeContext } from "./HiveSql";
import { SetOperatorContext } from "./HiveSql";
import { QueryStatementExpressionContext } from "./HiveSql";
import { QueryStatementExpressionBodyContext } from "./HiveSql";
import { WithClauseContext } from "./HiveSql";
import { CteStatementContext } from "./HiveSql";
import { FromStatementContext } from "./HiveSql";
import { SingleFromStatementContext } from "./HiveSql";
import { RegularBodyContext } from "./HiveSql";
import { AtomSelectStatementContext } from "./HiveSql";
import { SelectStatementContext } from "./HiveSql";
import { SetOpSelectStatementContext } from "./HiveSql";
import { SelectStatementWithCTEContext } from "./HiveSql";
import { BodyContext } from "./HiveSql";
import { InsertClauseContext } from "./HiveSql";
import { DestinationContext } from "./HiveSql";
import { LimitClauseContext } from "./HiveSql";
import { DeleteStatementContext } from "./HiveSql";
import { ColumnAssignmentClauseContext } from "./HiveSql";
import { PrecedencePlusExpressionOrDefaultContext } from "./HiveSql";
import { SetColumnsClauseContext } from "./HiveSql";
import { UpdateStatementContext } from "./HiveSql";
import { SqlTransactionStatementContext } from "./HiveSql";
import { StartTransactionStatementContext } from "./HiveSql";
import { TransactionModeContext } from "./HiveSql";
import { TransactionAccessModeContext } from "./HiveSql";
import { IsolationLevelContext } from "./HiveSql";
import { LevelOfIsolationContext } from "./HiveSql";
import { CommitStatementContext } from "./HiveSql";
import { RollbackStatementContext } from "./HiveSql";
import { SetAutoCommitStatementContext } from "./HiveSql";
import { AbortTransactionStatementContext } from "./HiveSql";
import { AbortCompactionStatementContext } from "./HiveSql";
import { MergeStatementContext } from "./HiveSql";
import { WhenClausesContext } from "./HiveSql";
import { WhenNotMatchedClauseContext } from "./HiveSql";
import { WhenMatchedAndClauseContext } from "./HiveSql";
import { WhenMatchedThenClauseContext } from "./HiveSql";
import { UpdateOrDeleteContext } from "./HiveSql";
import { KillQueryStatementContext } from "./HiveSql";
import { CompactionIdContext } from "./HiveSql";
import { CompactionPoolContext } from "./HiveSql";
import { CompactionTypeContext } from "./HiveSql";
import { CompactionStatusContext } from "./HiveSql";
import { AlterStatementContext } from "./HiveSql";
import { AlterTableStatementSuffixContext } from "./HiveSql";
import { AlterTblPartitionStatementSuffixContext } from "./HiveSql";
import { AlterStatementPartitionKeyTypeContext } from "./HiveSql";
import { AlterViewStatementSuffixContext } from "./HiveSql";
import { AlterMaterializedViewStatementSuffixContext } from "./HiveSql";
import { AlterMaterializedViewSuffixRewriteContext } from "./HiveSql";
import { AlterMaterializedViewSuffixRebuildContext } from "./HiveSql";
import { AlterDatabaseStatementSuffixContext } from "./HiveSql";
import { AlterDatabaseSuffixPropertiesContext } from "./HiveSql";
import { AlterDatabaseSuffixSetOwnerContext } from "./HiveSql";
import { AlterDatabaseSuffixSetLocationContext } from "./HiveSql";
import { AlterDatabaseSuffixSetManagedLocationContext } from "./HiveSql";
import { AlterStatementSuffixRenameContext } from "./HiveSql";
import { AlterStatementSuffixAddColContext } from "./HiveSql";
import { AlterStatementSuffixAddConstraintContext } from "./HiveSql";
import { AlterStatementSuffixUpdateColumnsContext } from "./HiveSql";
import { AlterStatementSuffixDropConstraintContext } from "./HiveSql";
import { AlterStatementSuffixRenameColContext } from "./HiveSql";
import { AlterStatementSuffixUpdateStatsColContext } from "./HiveSql";
import { AlterStatementSuffixUpdateStatsContext } from "./HiveSql";
import { AlterStatementChangeColPositionContext } from "./HiveSql";
import { AlterStatementSuffixAddPartitionsContext } from "./HiveSql";
import { AlterStatementSuffixAddPartitionsElementContext } from "./HiveSql";
import { AlterStatementSuffixTouchContext } from "./HiveSql";
import { AlterStatementSuffixArchiveContext } from "./HiveSql";
import { AlterStatementSuffixUnArchiveContext } from "./HiveSql";
import { PartitionLocationContext } from "./HiveSql";
import { AlterStatementSuffixDropPartitionsContext } from "./HiveSql";
import { AlterStatementSuffixPropertiesContext } from "./HiveSql";
import { AlterViewSuffixPropertiesContext } from "./HiveSql";
import { AlterStatementSuffixSerdePropertiesContext } from "./HiveSql";
import { TablePartitionPrefixContext } from "./HiveSql";
import { AlterStatementSuffixFileFormatContext } from "./HiveSql";
import { AlterStatementSuffixClusterbySortbyContext } from "./HiveSql";
import { AlterTblPartitionStatementSuffixSkewedLocationContext } from "./HiveSql";
import { SkewedLocationsContext } from "./HiveSql";
import { SkewedLocationsListContext } from "./HiveSql";
import { SkewedLocationMapContext } from "./HiveSql";
import { AlterStatementSuffixLocationContext } from "./HiveSql";
import { AlterStatementSuffixSkewedbyContext } from "./HiveSql";
import { AlterStatementSuffixExchangePartitionContext } from "./HiveSql";
import { AlterStatementSuffixRenamePartContext } from "./HiveSql";
import { AlterStatementSuffixStatsPartContext } from "./HiveSql";
import { AlterStatementSuffixMergeFilesContext } from "./HiveSql";
import { AlterStatementSuffixBucketNumContext } from "./HiveSql";
import { BlockingContext } from "./HiveSql";
import { CompactPoolContext } from "./HiveSql";
import { AlterStatementSuffixCompactContext } from "./HiveSql";
import { AlterStatementSuffixSetOwnerContext } from "./HiveSql";
import { AlterStatementSuffixSetPartSpecContext } from "./HiveSql";
import { AlterStatementSuffixExecuteContext } from "./HiveSql";
import { FileFormatContext } from "./HiveSql";
import { AlterDataConnectorStatementSuffixContext } from "./HiveSql";
import { AlterDataConnectorSuffixPropertiesContext } from "./HiveSql";
import { AlterDataConnectorSuffixSetOwnerContext } from "./HiveSql";
import { AlterDataConnectorSuffixSetUrlContext } from "./HiveSql";
import { LikeTableOrFileContext } from "./HiveSql";
import { CreateTableStatementContext } from "./HiveSql";
import { CreateDataConnectorStatementContext } from "./HiveSql";
import { DataConnectorCommentContext } from "./HiveSql";
import { DataConnectorUrlContext } from "./HiveSql";
import { DataConnectorTypeContext } from "./HiveSql";
import { DcPropertiesContext } from "./HiveSql";
import { DropDataConnectorStatementContext } from "./HiveSql";
import { TableAllColumnsContext } from "./HiveSql";
import { TableOrColumnContext } from "./HiveSql";
import { DefaultValueContext } from "./HiveSql";
import { ExpressionListContext } from "./HiveSql";
import { AliasListContext } from "./HiveSql";
import { FromClauseContext } from "./HiveSql";
import { FromSourceContext } from "./HiveSql";
import { AtomjoinSourceContext } from "./HiveSql";
import { JoinSourceContext } from "./HiveSql";
import { JoinSourcePartContext } from "./HiveSql";
import { UniqueJoinSourceContext } from "./HiveSql";
import { UniqueJoinExprContext } from "./HiveSql";
import { UniqueJoinTokenContext } from "./HiveSql";
import { JoinTokenContext } from "./HiveSql";
import { LateralViewContext } from "./HiveSql";
import { TableAliasContext } from "./HiveSql";
import { TableBucketSampleContext } from "./HiveSql";
import { SplitSampleContext } from "./HiveSql";
import { TableSampleContext } from "./HiveSql";
import { TableSourceContext } from "./HiveSql";
import { AsOfClauseContext } from "./HiveSql";
import { UniqueJoinTableSourceContext } from "./HiveSql";
import { TableNameContext } from "./HiveSql";
import { ViewNameContext } from "./HiveSql";
import { SubQuerySourceContext } from "./HiveSql";
import { PartitioningSpecContext } from "./HiveSql";
import { PartitionTableFunctionSourceContext } from "./HiveSql";
import { PartitionedTableFunctionContext } from "./HiveSql";
import { WhereClauseContext } from "./HiveSql";
import { SearchConditionContext } from "./HiveSql";
import { ValuesSourceContext } from "./HiveSql";
import { ValuesClauseContext } from "./HiveSql";
import { ValuesTableConstructorContext } from "./HiveSql";
import { ValueRowConstructorContext } from "./HiveSql";
import { FirstValueRowConstructorContext } from "./HiveSql";
import { VirtualTableSourceContext } from "./HiveSql";
import { SelectClauseContext } from "./HiveSql";
import { All_distinctContext } from "./HiveSql";
import { SelectListContext } from "./HiveSql";
import { SelectTrfmClauseContext } from "./HiveSql";
import { SelectItemContext } from "./HiveSql";
import { TrfmClauseContext } from "./HiveSql";
import { SelectExpressionContext } from "./HiveSql";
import { SelectExpressionListContext } from "./HiveSql";
import { Window_clauseContext } from "./HiveSql";
import { Window_defnContext } from "./HiveSql";
import { Window_specificationContext } from "./HiveSql";
import { Window_frameContext } from "./HiveSql";
import { Window_range_expressionContext } from "./HiveSql";
import { Window_value_expressionContext } from "./HiveSql";
import { Window_frame_start_boundaryContext } from "./HiveSql";
import { Window_frame_boundaryContext } from "./HiveSql";
import { GroupByClauseContext } from "./HiveSql";
import { Groupby_expressionContext } from "./HiveSql";
import { GroupByEmptyContext } from "./HiveSql";
import { RollupStandardContext } from "./HiveSql";
import { RollupOldSyntaxContext } from "./HiveSql";
import { GroupingSetExpressionContext } from "./HiveSql";
import { GroupingSetExpressionMultipleContext } from "./HiveSql";
import { GroupingExpressionSingleContext } from "./HiveSql";
import { HavingClauseContext } from "./HiveSql";
import { QualifyClauseContext } from "./HiveSql";
import { HavingConditionContext } from "./HiveSql";
import { ExpressionsInParenthesisContext } from "./HiveSql";
import { ExpressionsNotInParenthesisContext } from "./HiveSql";
import { ExpressionPartContext } from "./HiveSql";
import { ExpressionOrDefaultContext } from "./HiveSql";
import { FirstExpressionsWithAliasContext } from "./HiveSql";
import { ExpressionWithAliasContext } from "./HiveSql";
import { ExpressionsContext } from "./HiveSql";
import { ColumnRefOrderInParenthesisContext } from "./HiveSql";
import { ColumnRefOrderNotInParenthesisContext } from "./HiveSql";
import { OrderByClauseContext } from "./HiveSql";
import { ClusterByClauseContext } from "./HiveSql";
import { PartitionByClauseContext } from "./HiveSql";
import { DistributeByClauseContext } from "./HiveSql";
import { SortByClauseContext } from "./HiveSql";
import { TrimFunctionContext } from "./HiveSql";
import { Function_Context } from "./HiveSql";
import { Null_treatmentContext } from "./HiveSql";
import { FunctionNameContext } from "./HiveSql";
import { CastExpressionContext } from "./HiveSql";
import { CaseExpressionContext } from "./HiveSql";
import { WhenExpressionContext } from "./HiveSql";
import { FloorExpressionContext } from "./HiveSql";
import { FloorDateQualifiersContext } from "./HiveSql";
import { ExtractExpressionContext } from "./HiveSql";
import { TimeQualifiersContext } from "./HiveSql";
import { ConstantContext } from "./HiveSql";
import { PrepareStmtParamContext } from "./HiveSql";
import { ParameterIdxContext } from "./HiveSql";
import { StringLiteralSequenceContext } from "./HiveSql";
import { CharSetStringLiteralContext } from "./HiveSql";
import { DateLiteralContext } from "./HiveSql";
import { TimestampLiteralContext } from "./HiveSql";
import { TimestampLocalTZLiteralContext } from "./HiveSql";
import { IntervalValueContext } from "./HiveSql";
import { IntervalLiteralContext } from "./HiveSql";
import { IntervalExpressionContext } from "./HiveSql";
import { IntervalQualifiersContext } from "./HiveSql";
import { ExpressionContext } from "./HiveSql";
import { AtomExpressionContext } from "./HiveSql";
import { PrecedenceFieldExpressionContext } from "./HiveSql";
import { PrecedenceUnaryOperatorContext } from "./HiveSql";
import { PrecedenceUnaryPrefixExpressionContext } from "./HiveSql";
import { PrecedenceBitwiseXorOperatorContext } from "./HiveSql";
import { PrecedenceBitwiseXorExpressionContext } from "./HiveSql";
import { PrecedenceStarOperatorContext } from "./HiveSql";
import { PrecedenceStarExpressionContext } from "./HiveSql";
import { PrecedencePlusOperatorContext } from "./HiveSql";
import { PrecedencePlusExpressionContext } from "./HiveSql";
import { PrecedenceConcatenateOperatorContext } from "./HiveSql";
import { PrecedenceConcatenateExpressionContext } from "./HiveSql";
import { PrecedenceAmpersandOperatorContext } from "./HiveSql";
import { PrecedenceAmpersandExpressionContext } from "./HiveSql";
import { PrecedenceBitwiseOrOperatorContext } from "./HiveSql";
import { PrecedenceBitwiseOrExpressionContext } from "./HiveSql";
import { PrecedenceRegexpOperatorContext } from "./HiveSql";
import { PrecedenceSimilarOperatorContext } from "./HiveSql";
import { SubQueryExpressionContext } from "./HiveSql";
import { PrecedenceSimilarExpressionContext } from "./HiveSql";
import { PrecedenceSimilarExpressionMainContext } from "./HiveSql";
import { PrecedenceSimilarExpressionPartContext } from "./HiveSql";
import { PrecedenceSimilarExpressionAtomContext } from "./HiveSql";
import { PrecedenceSimilarExpressionQuantifierPredicateContext } from "./HiveSql";
import { QuantifierTypeContext } from "./HiveSql";
import { PrecedenceSimilarExpressionInContext } from "./HiveSql";
import { PrecedenceSimilarExpressionPartNotContext } from "./HiveSql";
import { PrecedenceDistinctOperatorContext } from "./HiveSql";
import { PrecedenceEqualOperatorContext } from "./HiveSql";
import { PrecedenceEqualExpressionContext } from "./HiveSql";
import { IsConditionContext } from "./HiveSql";
import { PrecedenceUnarySuffixExpressionContext } from "./HiveSql";
import { PrecedenceNotOperatorContext } from "./HiveSql";
import { PrecedenceNotExpressionContext } from "./HiveSql";
import { PrecedenceAndOperatorContext } from "./HiveSql";
import { PrecedenceAndExpressionContext } from "./HiveSql";
import { PrecedenceOrOperatorContext } from "./HiveSql";
import { PrecedenceOrExpressionContext } from "./HiveSql";
import { BooleanValueContext } from "./HiveSql";
import { BooleanValueTokContext } from "./HiveSql";
import { TableOrPartitionContext } from "./HiveSql";
import { PartitionSpecContext } from "./HiveSql";
import { PartitionValContext } from "./HiveSql";
import { PartitionSelectorSpecContext } from "./HiveSql";
import { PartitionSelectorValContext } from "./HiveSql";
import { PartitionSelectorOperatorContext } from "./HiveSql";
import { SubQuerySelectorOperatorContext } from "./HiveSql";
import { SysFuncNamesContext } from "./HiveSql";
import { DescFuncNamesContext } from "./HiveSql";
import { Id_Context } from "./HiveSql";
import { FunctionIdentifierContext } from "./HiveSql";
import { PrincipalIdentifierContext } from "./HiveSql";
import { NonReservedContext } from "./HiveSql";
import { Sql11ReservedKeywordsUsedAsFunctionNameContext } from "./HiveSql";
import { HintContext } from "./HiveSql";
import { HintListContext } from "./HiveSql";
import { HintItemContext } from "./HiveSql";
import { HintNameContext } from "./HiveSql";
import { HintArgsContext } from "./HiveSql";
import { HintArgNameContext } from "./HiveSql";
import { PrepareStatementContext } from "./HiveSql";
import { ExecuteStatementContext } from "./HiveSql";
import { ExecuteParamListContext } from "./HiveSql";
import { ResourcePlanDdlStatementsContext } from "./HiveSql";
import { RpAssignContext } from "./HiveSql";
import { RpAssignListContext } from "./HiveSql";
import { RpUnassignContext } from "./HiveSql";
import { RpUnassignListContext } from "./HiveSql";
import { CreateResourcePlanStatementContext } from "./HiveSql";
import { WithReplaceContext } from "./HiveSql";
import { ActivateContext } from "./HiveSql";
import { EnableContext } from "./HiveSql";
import { DisableContext } from "./HiveSql";
import { UnmanagedContext } from "./HiveSql";
import { AlterResourcePlanStatementContext } from "./HiveSql";
import { GlobalWmStatementContext } from "./HiveSql";
import { ReplaceResourcePlanStatementContext } from "./HiveSql";
import { DropResourcePlanStatementContext } from "./HiveSql";
import { PoolPathContext } from "./HiveSql";
import { TriggerExpressionContext } from "./HiveSql";
import { TriggerExpressionStandaloneContext } from "./HiveSql";
import { TriggerOrExpressionContext } from "./HiveSql";
import { TriggerAndExpressionContext } from "./HiveSql";
import { TriggerAtomExpressionContext } from "./HiveSql";
import { TriggerLiteralContext } from "./HiveSql";
import { ComparisionOperatorContext } from "./HiveSql";
import { TriggerActionExpressionContext } from "./HiveSql";
import { TriggerActionExpressionStandaloneContext } from "./HiveSql";
import { CreateTriggerStatementContext } from "./HiveSql";
import { AlterTriggerStatementContext } from "./HiveSql";
import { DropTriggerStatementContext } from "./HiveSql";
import { PoolAssignContext } from "./HiveSql";
import { PoolAssignListContext } from "./HiveSql";
import { CreatePoolStatementContext } from "./HiveSql";
import { AlterPoolStatementContext } from "./HiveSql";
import { DropPoolStatementContext } from "./HiveSql";
import { CreateMappingStatementContext } from "./HiveSql";
import { AlterMappingStatementContext } from "./HiveSql";
import { DropMappingStatementContext } from "./HiveSql";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `HiveSql`.
 */
export interface HiveSqlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `HiveSql.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.explainStatement`.
	 * @param ctx the parse tree
	 */
	enterExplainStatement?: (ctx: ExplainStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.explainStatement`.
	 * @param ctx the parse tree
	 */
	exitExplainStatement?: (ctx: ExplainStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.explainOption`.
	 * @param ctx the parse tree
	 */
	enterExplainOption?: (ctx: ExplainOptionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.explainOption`.
	 * @param ctx the parse tree
	 */
	exitExplainOption?: (ctx: ExplainOptionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.vectorizationOnly`.
	 * @param ctx the parse tree
	 */
	enterVectorizationOnly?: (ctx: VectorizationOnlyContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.vectorizationOnly`.
	 * @param ctx the parse tree
	 */
	exitVectorizationOnly?: (ctx: VectorizationOnlyContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.vectorizatonDetail`.
	 * @param ctx the parse tree
	 */
	enterVectorizatonDetail?: (ctx: VectorizatonDetailContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.vectorizatonDetail`.
	 * @param ctx the parse tree
	 */
	exitVectorizatonDetail?: (ctx: VectorizatonDetailContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.execStatement`.
	 * @param ctx the parse tree
	 */
	enterExecStatement?: (ctx: ExecStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.execStatement`.
	 * @param ctx the parse tree
	 */
	exitExecStatement?: (ctx: ExecStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.loadStatement`.
	 * @param ctx the parse tree
	 */
	enterLoadStatement?: (ctx: LoadStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.loadStatement`.
	 * @param ctx the parse tree
	 */
	exitLoadStatement?: (ctx: LoadStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.replicationClause`.
	 * @param ctx the parse tree
	 */
	enterReplicationClause?: (ctx: ReplicationClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.replicationClause`.
	 * @param ctx the parse tree
	 */
	exitReplicationClause?: (ctx: ReplicationClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.exportStatement`.
	 * @param ctx the parse tree
	 */
	enterExportStatement?: (ctx: ExportStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.exportStatement`.
	 * @param ctx the parse tree
	 */
	exitExportStatement?: (ctx: ExportStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.importStatement`.
	 * @param ctx the parse tree
	 */
	enterImportStatement?: (ctx: ImportStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.importStatement`.
	 * @param ctx the parse tree
	 */
	exitImportStatement?: (ctx: ImportStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.replDumpStatement`.
	 * @param ctx the parse tree
	 */
	enterReplDumpStatement?: (ctx: ReplDumpStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.replDumpStatement`.
	 * @param ctx the parse tree
	 */
	exitReplDumpStatement?: (ctx: ReplDumpStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.replDbPolicy`.
	 * @param ctx the parse tree
	 */
	enterReplDbPolicy?: (ctx: ReplDbPolicyContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.replDbPolicy`.
	 * @param ctx the parse tree
	 */
	exitReplDbPolicy?: (ctx: ReplDbPolicyContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.replLoadStatement`.
	 * @param ctx the parse tree
	 */
	enterReplLoadStatement?: (ctx: ReplLoadStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.replLoadStatement`.
	 * @param ctx the parse tree
	 */
	exitReplLoadStatement?: (ctx: ReplLoadStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.replConfigs`.
	 * @param ctx the parse tree
	 */
	enterReplConfigs?: (ctx: ReplConfigsContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.replConfigs`.
	 * @param ctx the parse tree
	 */
	exitReplConfigs?: (ctx: ReplConfigsContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.replConfigsList`.
	 * @param ctx the parse tree
	 */
	enterReplConfigsList?: (ctx: ReplConfigsListContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.replConfigsList`.
	 * @param ctx the parse tree
	 */
	exitReplConfigsList?: (ctx: ReplConfigsListContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.replTableLevelPolicy`.
	 * @param ctx the parse tree
	 */
	enterReplTableLevelPolicy?: (ctx: ReplTableLevelPolicyContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.replTableLevelPolicy`.
	 * @param ctx the parse tree
	 */
	exitReplTableLevelPolicy?: (ctx: ReplTableLevelPolicyContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.replStatusStatement`.
	 * @param ctx the parse tree
	 */
	enterReplStatusStatement?: (ctx: ReplStatusStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.replStatusStatement`.
	 * @param ctx the parse tree
	 */
	exitReplStatusStatement?: (ctx: ReplStatusStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.ddlStatement`.
	 * @param ctx the parse tree
	 */
	enterDdlStatement?: (ctx: DdlStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.ddlStatement`.
	 * @param ctx the parse tree
	 */
	exitDdlStatement?: (ctx: DdlStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.ifExists`.
	 * @param ctx the parse tree
	 */
	enterIfExists?: (ctx: IfExistsContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.ifExists`.
	 * @param ctx the parse tree
	 */
	exitIfExists?: (ctx: IfExistsContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.restrictOrCascade`.
	 * @param ctx the parse tree
	 */
	enterRestrictOrCascade?: (ctx: RestrictOrCascadeContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.restrictOrCascade`.
	 * @param ctx the parse tree
	 */
	exitRestrictOrCascade?: (ctx: RestrictOrCascadeContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.ifNotExists`.
	 * @param ctx the parse tree
	 */
	enterIfNotExists?: (ctx: IfNotExistsContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.ifNotExists`.
	 * @param ctx the parse tree
	 */
	exitIfNotExists?: (ctx: IfNotExistsContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.force`.
	 * @param ctx the parse tree
	 */
	enterForce?: (ctx: ForceContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.force`.
	 * @param ctx the parse tree
	 */
	exitForce?: (ctx: ForceContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.rewriteEnabled`.
	 * @param ctx the parse tree
	 */
	enterRewriteEnabled?: (ctx: RewriteEnabledContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.rewriteEnabled`.
	 * @param ctx the parse tree
	 */
	exitRewriteEnabled?: (ctx: RewriteEnabledContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.rewriteDisabled`.
	 * @param ctx the parse tree
	 */
	enterRewriteDisabled?: (ctx: RewriteDisabledContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.rewriteDisabled`.
	 * @param ctx the parse tree
	 */
	exitRewriteDisabled?: (ctx: RewriteDisabledContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.storedAsDirs`.
	 * @param ctx the parse tree
	 */
	enterStoredAsDirs?: (ctx: StoredAsDirsContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.storedAsDirs`.
	 * @param ctx the parse tree
	 */
	exitStoredAsDirs?: (ctx: StoredAsDirsContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.orReplace`.
	 * @param ctx the parse tree
	 */
	enterOrReplace?: (ctx: OrReplaceContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.orReplace`.
	 * @param ctx the parse tree
	 */
	exitOrReplace?: (ctx: OrReplaceContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.createDatabaseStatement`.
	 * @param ctx the parse tree
	 */
	enterCreateDatabaseStatement?: (ctx: CreateDatabaseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.createDatabaseStatement`.
	 * @param ctx the parse tree
	 */
	exitCreateDatabaseStatement?: (ctx: CreateDatabaseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.dbLocation`.
	 * @param ctx the parse tree
	 */
	enterDbLocation?: (ctx: DbLocationContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.dbLocation`.
	 * @param ctx the parse tree
	 */
	exitDbLocation?: (ctx: DbLocationContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.dbManagedLocation`.
	 * @param ctx the parse tree
	 */
	enterDbManagedLocation?: (ctx: DbManagedLocationContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.dbManagedLocation`.
	 * @param ctx the parse tree
	 */
	exitDbManagedLocation?: (ctx: DbManagedLocationContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.dbProperties`.
	 * @param ctx the parse tree
	 */
	enterDbProperties?: (ctx: DbPropertiesContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.dbProperties`.
	 * @param ctx the parse tree
	 */
	exitDbProperties?: (ctx: DbPropertiesContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.dbPropertiesList`.
	 * @param ctx the parse tree
	 */
	enterDbPropertiesList?: (ctx: DbPropertiesListContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.dbPropertiesList`.
	 * @param ctx the parse tree
	 */
	exitDbPropertiesList?: (ctx: DbPropertiesListContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.dbConnectorName`.
	 * @param ctx the parse tree
	 */
	enterDbConnectorName?: (ctx: DbConnectorNameContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.dbConnectorName`.
	 * @param ctx the parse tree
	 */
	exitDbConnectorName?: (ctx: DbConnectorNameContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.switchDatabaseStatement`.
	 * @param ctx the parse tree
	 */
	enterSwitchDatabaseStatement?: (ctx: SwitchDatabaseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.switchDatabaseStatement`.
	 * @param ctx the parse tree
	 */
	exitSwitchDatabaseStatement?: (ctx: SwitchDatabaseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.dropDatabaseStatement`.
	 * @param ctx the parse tree
	 */
	enterDropDatabaseStatement?: (ctx: DropDatabaseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.dropDatabaseStatement`.
	 * @param ctx the parse tree
	 */
	exitDropDatabaseStatement?: (ctx: DropDatabaseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.databaseComment`.
	 * @param ctx the parse tree
	 */
	enterDatabaseComment?: (ctx: DatabaseCommentContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.databaseComment`.
	 * @param ctx the parse tree
	 */
	exitDatabaseComment?: (ctx: DatabaseCommentContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.truncateTableStatement`.
	 * @param ctx the parse tree
	 */
	enterTruncateTableStatement?: (ctx: TruncateTableStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.truncateTableStatement`.
	 * @param ctx the parse tree
	 */
	exitTruncateTableStatement?: (ctx: TruncateTableStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.dropTableStatement`.
	 * @param ctx the parse tree
	 */
	enterDropTableStatement?: (ctx: DropTableStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.dropTableStatement`.
	 * @param ctx the parse tree
	 */
	exitDropTableStatement?: (ctx: DropTableStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.inputFileFormat`.
	 * @param ctx the parse tree
	 */
	enterInputFileFormat?: (ctx: InputFileFormatContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.inputFileFormat`.
	 * @param ctx the parse tree
	 */
	exitInputFileFormat?: (ctx: InputFileFormatContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.tabTypeExpr`.
	 * @param ctx the parse tree
	 */
	enterTabTypeExpr?: (ctx: TabTypeExprContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.tabTypeExpr`.
	 * @param ctx the parse tree
	 */
	exitTabTypeExpr?: (ctx: TabTypeExprContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.partTypeExpr`.
	 * @param ctx the parse tree
	 */
	enterPartTypeExpr?: (ctx: PartTypeExprContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.partTypeExpr`.
	 * @param ctx the parse tree
	 */
	exitPartTypeExpr?: (ctx: PartTypeExprContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.tabPartColTypeExpr`.
	 * @param ctx the parse tree
	 */
	enterTabPartColTypeExpr?: (ctx: TabPartColTypeExprContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.tabPartColTypeExpr`.
	 * @param ctx the parse tree
	 */
	exitTabPartColTypeExpr?: (ctx: TabPartColTypeExprContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.descStatement`.
	 * @param ctx the parse tree
	 */
	enterDescStatement?: (ctx: DescStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.descStatement`.
	 * @param ctx the parse tree
	 */
	exitDescStatement?: (ctx: DescStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.analyzeStatement`.
	 * @param ctx the parse tree
	 */
	enterAnalyzeStatement?: (ctx: AnalyzeStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.analyzeStatement`.
	 * @param ctx the parse tree
	 */
	exitAnalyzeStatement?: (ctx: AnalyzeStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.from_in`.
	 * @param ctx the parse tree
	 */
	enterFrom_in?: (ctx: From_inContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.from_in`.
	 * @param ctx the parse tree
	 */
	exitFrom_in?: (ctx: From_inContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.db_schema`.
	 * @param ctx the parse tree
	 */
	enterDb_schema?: (ctx: Db_schemaContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.db_schema`.
	 * @param ctx the parse tree
	 */
	exitDb_schema?: (ctx: Db_schemaContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.showStatement`.
	 * @param ctx the parse tree
	 */
	enterShowStatement?: (ctx: ShowStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.showStatement`.
	 * @param ctx the parse tree
	 */
	exitShowStatement?: (ctx: ShowStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.showTablesFilterExpr`.
	 * @param ctx the parse tree
	 */
	enterShowTablesFilterExpr?: (ctx: ShowTablesFilterExprContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.showTablesFilterExpr`.
	 * @param ctx the parse tree
	 */
	exitShowTablesFilterExpr?: (ctx: ShowTablesFilterExprContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.lockStatement`.
	 * @param ctx the parse tree
	 */
	enterLockStatement?: (ctx: LockStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.lockStatement`.
	 * @param ctx the parse tree
	 */
	exitLockStatement?: (ctx: LockStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.lockDatabase`.
	 * @param ctx the parse tree
	 */
	enterLockDatabase?: (ctx: LockDatabaseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.lockDatabase`.
	 * @param ctx the parse tree
	 */
	exitLockDatabase?: (ctx: LockDatabaseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.lockMode`.
	 * @param ctx the parse tree
	 */
	enterLockMode?: (ctx: LockModeContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.lockMode`.
	 * @param ctx the parse tree
	 */
	exitLockMode?: (ctx: LockModeContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.unlockStatement`.
	 * @param ctx the parse tree
	 */
	enterUnlockStatement?: (ctx: UnlockStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.unlockStatement`.
	 * @param ctx the parse tree
	 */
	exitUnlockStatement?: (ctx: UnlockStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.unlockDatabase`.
	 * @param ctx the parse tree
	 */
	enterUnlockDatabase?: (ctx: UnlockDatabaseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.unlockDatabase`.
	 * @param ctx the parse tree
	 */
	exitUnlockDatabase?: (ctx: UnlockDatabaseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.createRoleStatement`.
	 * @param ctx the parse tree
	 */
	enterCreateRoleStatement?: (ctx: CreateRoleStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.createRoleStatement`.
	 * @param ctx the parse tree
	 */
	exitCreateRoleStatement?: (ctx: CreateRoleStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.dropRoleStatement`.
	 * @param ctx the parse tree
	 */
	enterDropRoleStatement?: (ctx: DropRoleStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.dropRoleStatement`.
	 * @param ctx the parse tree
	 */
	exitDropRoleStatement?: (ctx: DropRoleStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.grantPrivileges`.
	 * @param ctx the parse tree
	 */
	enterGrantPrivileges?: (ctx: GrantPrivilegesContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.grantPrivileges`.
	 * @param ctx the parse tree
	 */
	exitGrantPrivileges?: (ctx: GrantPrivilegesContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.revokePrivileges`.
	 * @param ctx the parse tree
	 */
	enterRevokePrivileges?: (ctx: RevokePrivilegesContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.revokePrivileges`.
	 * @param ctx the parse tree
	 */
	exitRevokePrivileges?: (ctx: RevokePrivilegesContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.grantRole`.
	 * @param ctx the parse tree
	 */
	enterGrantRole?: (ctx: GrantRoleContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.grantRole`.
	 * @param ctx the parse tree
	 */
	exitGrantRole?: (ctx: GrantRoleContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.revokeRole`.
	 * @param ctx the parse tree
	 */
	enterRevokeRole?: (ctx: RevokeRoleContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.revokeRole`.
	 * @param ctx the parse tree
	 */
	exitRevokeRole?: (ctx: RevokeRoleContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.showRoleGrants`.
	 * @param ctx the parse tree
	 */
	enterShowRoleGrants?: (ctx: ShowRoleGrantsContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.showRoleGrants`.
	 * @param ctx the parse tree
	 */
	exitShowRoleGrants?: (ctx: ShowRoleGrantsContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.showRoles`.
	 * @param ctx the parse tree
	 */
	enterShowRoles?: (ctx: ShowRolesContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.showRoles`.
	 * @param ctx the parse tree
	 */
	exitShowRoles?: (ctx: ShowRolesContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.showCurrentRole`.
	 * @param ctx the parse tree
	 */
	enterShowCurrentRole?: (ctx: ShowCurrentRoleContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.showCurrentRole`.
	 * @param ctx the parse tree
	 */
	exitShowCurrentRole?: (ctx: ShowCurrentRoleContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.setRole`.
	 * @param ctx the parse tree
	 */
	enterSetRole?: (ctx: SetRoleContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.setRole`.
	 * @param ctx the parse tree
	 */
	exitSetRole?: (ctx: SetRoleContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.showGrants`.
	 * @param ctx the parse tree
	 */
	enterShowGrants?: (ctx: ShowGrantsContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.showGrants`.
	 * @param ctx the parse tree
	 */
	exitShowGrants?: (ctx: ShowGrantsContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.showRolePrincipals`.
	 * @param ctx the parse tree
	 */
	enterShowRolePrincipals?: (ctx: ShowRolePrincipalsContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.showRolePrincipals`.
	 * @param ctx the parse tree
	 */
	exitShowRolePrincipals?: (ctx: ShowRolePrincipalsContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.privilegeIncludeColObject`.
	 * @param ctx the parse tree
	 */
	enterPrivilegeIncludeColObject?: (ctx: PrivilegeIncludeColObjectContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.privilegeIncludeColObject`.
	 * @param ctx the parse tree
	 */
	exitPrivilegeIncludeColObject?: (ctx: PrivilegeIncludeColObjectContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.privilegeObject`.
	 * @param ctx the parse tree
	 */
	enterPrivilegeObject?: (ctx: PrivilegeObjectContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.privilegeObject`.
	 * @param ctx the parse tree
	 */
	exitPrivilegeObject?: (ctx: PrivilegeObjectContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.privObject`.
	 * @param ctx the parse tree
	 */
	enterPrivObject?: (ctx: PrivObjectContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.privObject`.
	 * @param ctx the parse tree
	 */
	exitPrivObject?: (ctx: PrivObjectContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.privObjectCols`.
	 * @param ctx the parse tree
	 */
	enterPrivObjectCols?: (ctx: PrivObjectColsContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.privObjectCols`.
	 * @param ctx the parse tree
	 */
	exitPrivObjectCols?: (ctx: PrivObjectColsContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.privilegeList`.
	 * @param ctx the parse tree
	 */
	enterPrivilegeList?: (ctx: PrivilegeListContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.privilegeList`.
	 * @param ctx the parse tree
	 */
	exitPrivilegeList?: (ctx: PrivilegeListContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.privlegeDef`.
	 * @param ctx the parse tree
	 */
	enterPrivlegeDef?: (ctx: PrivlegeDefContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.privlegeDef`.
	 * @param ctx the parse tree
	 */
	exitPrivlegeDef?: (ctx: PrivlegeDefContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.privilegeType`.
	 * @param ctx the parse tree
	 */
	enterPrivilegeType?: (ctx: PrivilegeTypeContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.privilegeType`.
	 * @param ctx the parse tree
	 */
	exitPrivilegeType?: (ctx: PrivilegeTypeContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.principalSpecification`.
	 * @param ctx the parse tree
	 */
	enterPrincipalSpecification?: (ctx: PrincipalSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.principalSpecification`.
	 * @param ctx the parse tree
	 */
	exitPrincipalSpecification?: (ctx: PrincipalSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.principalName`.
	 * @param ctx the parse tree
	 */
	enterPrincipalName?: (ctx: PrincipalNameContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.principalName`.
	 * @param ctx the parse tree
	 */
	exitPrincipalName?: (ctx: PrincipalNameContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.withGrantOption`.
	 * @param ctx the parse tree
	 */
	enterWithGrantOption?: (ctx: WithGrantOptionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.withGrantOption`.
	 * @param ctx the parse tree
	 */
	exitWithGrantOption?: (ctx: WithGrantOptionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.grantOptionFor`.
	 * @param ctx the parse tree
	 */
	enterGrantOptionFor?: (ctx: GrantOptionForContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.grantOptionFor`.
	 * @param ctx the parse tree
	 */
	exitGrantOptionFor?: (ctx: GrantOptionForContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.adminOptionFor`.
	 * @param ctx the parse tree
	 */
	enterAdminOptionFor?: (ctx: AdminOptionForContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.adminOptionFor`.
	 * @param ctx the parse tree
	 */
	exitAdminOptionFor?: (ctx: AdminOptionForContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.withAdminOption`.
	 * @param ctx the parse tree
	 */
	enterWithAdminOption?: (ctx: WithAdminOptionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.withAdminOption`.
	 * @param ctx the parse tree
	 */
	exitWithAdminOption?: (ctx: WithAdminOptionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.metastoreCheck`.
	 * @param ctx the parse tree
	 */
	enterMetastoreCheck?: (ctx: MetastoreCheckContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.metastoreCheck`.
	 * @param ctx the parse tree
	 */
	exitMetastoreCheck?: (ctx: MetastoreCheckContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.resourceList`.
	 * @param ctx the parse tree
	 */
	enterResourceList?: (ctx: ResourceListContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.resourceList`.
	 * @param ctx the parse tree
	 */
	exitResourceList?: (ctx: ResourceListContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.resource`.
	 * @param ctx the parse tree
	 */
	enterResource?: (ctx: ResourceContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.resource`.
	 * @param ctx the parse tree
	 */
	exitResource?: (ctx: ResourceContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.resourceType`.
	 * @param ctx the parse tree
	 */
	enterResourceType?: (ctx: ResourceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.resourceType`.
	 * @param ctx the parse tree
	 */
	exitResourceType?: (ctx: ResourceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.createFunctionStatement`.
	 * @param ctx the parse tree
	 */
	enterCreateFunctionStatement?: (ctx: CreateFunctionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.createFunctionStatement`.
	 * @param ctx the parse tree
	 */
	exitCreateFunctionStatement?: (ctx: CreateFunctionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.dropFunctionStatement`.
	 * @param ctx the parse tree
	 */
	enterDropFunctionStatement?: (ctx: DropFunctionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.dropFunctionStatement`.
	 * @param ctx the parse tree
	 */
	exitDropFunctionStatement?: (ctx: DropFunctionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.reloadFunctionsStatement`.
	 * @param ctx the parse tree
	 */
	enterReloadFunctionsStatement?: (ctx: ReloadFunctionsStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.reloadFunctionsStatement`.
	 * @param ctx the parse tree
	 */
	exitReloadFunctionsStatement?: (ctx: ReloadFunctionsStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.createMacroStatement`.
	 * @param ctx the parse tree
	 */
	enterCreateMacroStatement?: (ctx: CreateMacroStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.createMacroStatement`.
	 * @param ctx the parse tree
	 */
	exitCreateMacroStatement?: (ctx: CreateMacroStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.dropMacroStatement`.
	 * @param ctx the parse tree
	 */
	enterDropMacroStatement?: (ctx: DropMacroStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.dropMacroStatement`.
	 * @param ctx the parse tree
	 */
	exitDropMacroStatement?: (ctx: DropMacroStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.createViewStatement`.
	 * @param ctx the parse tree
	 */
	enterCreateViewStatement?: (ctx: CreateViewStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.createViewStatement`.
	 * @param ctx the parse tree
	 */
	exitCreateViewStatement?: (ctx: CreateViewStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.viewPartition`.
	 * @param ctx the parse tree
	 */
	enterViewPartition?: (ctx: ViewPartitionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.viewPartition`.
	 * @param ctx the parse tree
	 */
	exitViewPartition?: (ctx: ViewPartitionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.viewOrganization`.
	 * @param ctx the parse tree
	 */
	enterViewOrganization?: (ctx: ViewOrganizationContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.viewOrganization`.
	 * @param ctx the parse tree
	 */
	exitViewOrganization?: (ctx: ViewOrganizationContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.viewClusterSpec`.
	 * @param ctx the parse tree
	 */
	enterViewClusterSpec?: (ctx: ViewClusterSpecContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.viewClusterSpec`.
	 * @param ctx the parse tree
	 */
	exitViewClusterSpec?: (ctx: ViewClusterSpecContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.viewComplexSpec`.
	 * @param ctx the parse tree
	 */
	enterViewComplexSpec?: (ctx: ViewComplexSpecContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.viewComplexSpec`.
	 * @param ctx the parse tree
	 */
	exitViewComplexSpec?: (ctx: ViewComplexSpecContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.viewDistSpec`.
	 * @param ctx the parse tree
	 */
	enterViewDistSpec?: (ctx: ViewDistSpecContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.viewDistSpec`.
	 * @param ctx the parse tree
	 */
	exitViewDistSpec?: (ctx: ViewDistSpecContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.viewSortSpec`.
	 * @param ctx the parse tree
	 */
	enterViewSortSpec?: (ctx: ViewSortSpecContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.viewSortSpec`.
	 * @param ctx the parse tree
	 */
	exitViewSortSpec?: (ctx: ViewSortSpecContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.dropViewStatement`.
	 * @param ctx the parse tree
	 */
	enterDropViewStatement?: (ctx: DropViewStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.dropViewStatement`.
	 * @param ctx the parse tree
	 */
	exitDropViewStatement?: (ctx: DropViewStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.createMaterializedViewStatement`.
	 * @param ctx the parse tree
	 */
	enterCreateMaterializedViewStatement?: (ctx: CreateMaterializedViewStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.createMaterializedViewStatement`.
	 * @param ctx the parse tree
	 */
	exitCreateMaterializedViewStatement?: (ctx: CreateMaterializedViewStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.dropMaterializedViewStatement`.
	 * @param ctx the parse tree
	 */
	enterDropMaterializedViewStatement?: (ctx: DropMaterializedViewStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.dropMaterializedViewStatement`.
	 * @param ctx the parse tree
	 */
	exitDropMaterializedViewStatement?: (ctx: DropMaterializedViewStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.createScheduledQueryStatement`.
	 * @param ctx the parse tree
	 */
	enterCreateScheduledQueryStatement?: (ctx: CreateScheduledQueryStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.createScheduledQueryStatement`.
	 * @param ctx the parse tree
	 */
	exitCreateScheduledQueryStatement?: (ctx: CreateScheduledQueryStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.dropScheduledQueryStatement`.
	 * @param ctx the parse tree
	 */
	enterDropScheduledQueryStatement?: (ctx: DropScheduledQueryStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.dropScheduledQueryStatement`.
	 * @param ctx the parse tree
	 */
	exitDropScheduledQueryStatement?: (ctx: DropScheduledQueryStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterScheduledQueryStatement`.
	 * @param ctx the parse tree
	 */
	enterAlterScheduledQueryStatement?: (ctx: AlterScheduledQueryStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterScheduledQueryStatement`.
	 * @param ctx the parse tree
	 */
	exitAlterScheduledQueryStatement?: (ctx: AlterScheduledQueryStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterScheduledQueryChange`.
	 * @param ctx the parse tree
	 */
	enterAlterScheduledQueryChange?: (ctx: AlterScheduledQueryChangeContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterScheduledQueryChange`.
	 * @param ctx the parse tree
	 */
	exitAlterScheduledQueryChange?: (ctx: AlterScheduledQueryChangeContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.scheduleSpec`.
	 * @param ctx the parse tree
	 */
	enterScheduleSpec?: (ctx: ScheduleSpecContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.scheduleSpec`.
	 * @param ctx the parse tree
	 */
	exitScheduleSpec?: (ctx: ScheduleSpecContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.executedAsSpec`.
	 * @param ctx the parse tree
	 */
	enterExecutedAsSpec?: (ctx: ExecutedAsSpecContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.executedAsSpec`.
	 * @param ctx the parse tree
	 */
	exitExecutedAsSpec?: (ctx: ExecutedAsSpecContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.definedAsSpec`.
	 * @param ctx the parse tree
	 */
	enterDefinedAsSpec?: (ctx: DefinedAsSpecContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.definedAsSpec`.
	 * @param ctx the parse tree
	 */
	exitDefinedAsSpec?: (ctx: DefinedAsSpecContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.showFunctionIdentifier`.
	 * @param ctx the parse tree
	 */
	enterShowFunctionIdentifier?: (ctx: ShowFunctionIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.showFunctionIdentifier`.
	 * @param ctx the parse tree
	 */
	exitShowFunctionIdentifier?: (ctx: ShowFunctionIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.showStmtIdentifier`.
	 * @param ctx the parse tree
	 */
	enterShowStmtIdentifier?: (ctx: ShowStmtIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.showStmtIdentifier`.
	 * @param ctx the parse tree
	 */
	exitShowStmtIdentifier?: (ctx: ShowStmtIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.tableComment`.
	 * @param ctx the parse tree
	 */
	enterTableComment?: (ctx: TableCommentContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.tableComment`.
	 * @param ctx the parse tree
	 */
	exitTableComment?: (ctx: TableCommentContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.createTablePartitionSpec`.
	 * @param ctx the parse tree
	 */
	enterCreateTablePartitionSpec?: (ctx: CreateTablePartitionSpecContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.createTablePartitionSpec`.
	 * @param ctx the parse tree
	 */
	exitCreateTablePartitionSpec?: (ctx: CreateTablePartitionSpecContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.createTablePartitionColumnTypeSpec`.
	 * @param ctx the parse tree
	 */
	enterCreateTablePartitionColumnTypeSpec?: (ctx: CreateTablePartitionColumnTypeSpecContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.createTablePartitionColumnTypeSpec`.
	 * @param ctx the parse tree
	 */
	exitCreateTablePartitionColumnTypeSpec?: (ctx: CreateTablePartitionColumnTypeSpecContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.createTablePartitionColumnSpec`.
	 * @param ctx the parse tree
	 */
	enterCreateTablePartitionColumnSpec?: (ctx: CreateTablePartitionColumnSpecContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.createTablePartitionColumnSpec`.
	 * @param ctx the parse tree
	 */
	exitCreateTablePartitionColumnSpec?: (ctx: CreateTablePartitionColumnSpecContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.partitionTransformSpec`.
	 * @param ctx the parse tree
	 */
	enterPartitionTransformSpec?: (ctx: PartitionTransformSpecContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.partitionTransformSpec`.
	 * @param ctx the parse tree
	 */
	exitPartitionTransformSpec?: (ctx: PartitionTransformSpecContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.columnNameTransformConstraint`.
	 * @param ctx the parse tree
	 */
	enterColumnNameTransformConstraint?: (ctx: ColumnNameTransformConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.columnNameTransformConstraint`.
	 * @param ctx the parse tree
	 */
	exitColumnNameTransformConstraint?: (ctx: ColumnNameTransformConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.partitionTransformType`.
	 * @param ctx the parse tree
	 */
	enterPartitionTransformType?: (ctx: PartitionTransformTypeContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.partitionTransformType`.
	 * @param ctx the parse tree
	 */
	exitPartitionTransformType?: (ctx: PartitionTransformTypeContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.tableBuckets`.
	 * @param ctx the parse tree
	 */
	enterTableBuckets?: (ctx: TableBucketsContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.tableBuckets`.
	 * @param ctx the parse tree
	 */
	exitTableBuckets?: (ctx: TableBucketsContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.tableImplBuckets`.
	 * @param ctx the parse tree
	 */
	enterTableImplBuckets?: (ctx: TableImplBucketsContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.tableImplBuckets`.
	 * @param ctx the parse tree
	 */
	exitTableImplBuckets?: (ctx: TableImplBucketsContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.tableSkewed`.
	 * @param ctx the parse tree
	 */
	enterTableSkewed?: (ctx: TableSkewedContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.tableSkewed`.
	 * @param ctx the parse tree
	 */
	exitTableSkewed?: (ctx: TableSkewedContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.rowFormat`.
	 * @param ctx the parse tree
	 */
	enterRowFormat?: (ctx: RowFormatContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.rowFormat`.
	 * @param ctx the parse tree
	 */
	exitRowFormat?: (ctx: RowFormatContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.recordReader`.
	 * @param ctx the parse tree
	 */
	enterRecordReader?: (ctx: RecordReaderContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.recordReader`.
	 * @param ctx the parse tree
	 */
	exitRecordReader?: (ctx: RecordReaderContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.recordWriter`.
	 * @param ctx the parse tree
	 */
	enterRecordWriter?: (ctx: RecordWriterContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.recordWriter`.
	 * @param ctx the parse tree
	 */
	exitRecordWriter?: (ctx: RecordWriterContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.rowFormatSerde`.
	 * @param ctx the parse tree
	 */
	enterRowFormatSerde?: (ctx: RowFormatSerdeContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.rowFormatSerde`.
	 * @param ctx the parse tree
	 */
	exitRowFormatSerde?: (ctx: RowFormatSerdeContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.rowFormatDelimited`.
	 * @param ctx the parse tree
	 */
	enterRowFormatDelimited?: (ctx: RowFormatDelimitedContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.rowFormatDelimited`.
	 * @param ctx the parse tree
	 */
	exitRowFormatDelimited?: (ctx: RowFormatDelimitedContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.tableRowFormat`.
	 * @param ctx the parse tree
	 */
	enterTableRowFormat?: (ctx: TableRowFormatContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.tableRowFormat`.
	 * @param ctx the parse tree
	 */
	exitTableRowFormat?: (ctx: TableRowFormatContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.tablePropertiesPrefixed`.
	 * @param ctx the parse tree
	 */
	enterTablePropertiesPrefixed?: (ctx: TablePropertiesPrefixedContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.tablePropertiesPrefixed`.
	 * @param ctx the parse tree
	 */
	exitTablePropertiesPrefixed?: (ctx: TablePropertiesPrefixedContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.tableProperties`.
	 * @param ctx the parse tree
	 */
	enterTableProperties?: (ctx: TablePropertiesContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.tableProperties`.
	 * @param ctx the parse tree
	 */
	exitTableProperties?: (ctx: TablePropertiesContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.tablePropertiesList`.
	 * @param ctx the parse tree
	 */
	enterTablePropertiesList?: (ctx: TablePropertiesListContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.tablePropertiesList`.
	 * @param ctx the parse tree
	 */
	exitTablePropertiesList?: (ctx: TablePropertiesListContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.keyValueProperty`.
	 * @param ctx the parse tree
	 */
	enterKeyValueProperty?: (ctx: KeyValuePropertyContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.keyValueProperty`.
	 * @param ctx the parse tree
	 */
	exitKeyValueProperty?: (ctx: KeyValuePropertyContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.keyProperty`.
	 * @param ctx the parse tree
	 */
	enterKeyProperty?: (ctx: KeyPropertyContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.keyProperty`.
	 * @param ctx the parse tree
	 */
	exitKeyProperty?: (ctx: KeyPropertyContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.tableRowFormatFieldIdentifier`.
	 * @param ctx the parse tree
	 */
	enterTableRowFormatFieldIdentifier?: (ctx: TableRowFormatFieldIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.tableRowFormatFieldIdentifier`.
	 * @param ctx the parse tree
	 */
	exitTableRowFormatFieldIdentifier?: (ctx: TableRowFormatFieldIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.tableRowFormatCollItemsIdentifier`.
	 * @param ctx the parse tree
	 */
	enterTableRowFormatCollItemsIdentifier?: (ctx: TableRowFormatCollItemsIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.tableRowFormatCollItemsIdentifier`.
	 * @param ctx the parse tree
	 */
	exitTableRowFormatCollItemsIdentifier?: (ctx: TableRowFormatCollItemsIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.tableRowFormatMapKeysIdentifier`.
	 * @param ctx the parse tree
	 */
	enterTableRowFormatMapKeysIdentifier?: (ctx: TableRowFormatMapKeysIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.tableRowFormatMapKeysIdentifier`.
	 * @param ctx the parse tree
	 */
	exitTableRowFormatMapKeysIdentifier?: (ctx: TableRowFormatMapKeysIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.tableRowFormatLinesIdentifier`.
	 * @param ctx the parse tree
	 */
	enterTableRowFormatLinesIdentifier?: (ctx: TableRowFormatLinesIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.tableRowFormatLinesIdentifier`.
	 * @param ctx the parse tree
	 */
	exitTableRowFormatLinesIdentifier?: (ctx: TableRowFormatLinesIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.tableRowNullFormat`.
	 * @param ctx the parse tree
	 */
	enterTableRowNullFormat?: (ctx: TableRowNullFormatContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.tableRowNullFormat`.
	 * @param ctx the parse tree
	 */
	exitTableRowNullFormat?: (ctx: TableRowNullFormatContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.tableFileFormat`.
	 * @param ctx the parse tree
	 */
	enterTableFileFormat?: (ctx: TableFileFormatContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.tableFileFormat`.
	 * @param ctx the parse tree
	 */
	exitTableFileFormat?: (ctx: TableFileFormatContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.tableLocation`.
	 * @param ctx the parse tree
	 */
	enterTableLocation?: (ctx: TableLocationContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.tableLocation`.
	 * @param ctx the parse tree
	 */
	exitTableLocation?: (ctx: TableLocationContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.columnNameTypeList`.
	 * @param ctx the parse tree
	 */
	enterColumnNameTypeList?: (ctx: ColumnNameTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.columnNameTypeList`.
	 * @param ctx the parse tree
	 */
	exitColumnNameTypeList?: (ctx: ColumnNameTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.columnNameTypeOrConstraintList`.
	 * @param ctx the parse tree
	 */
	enterColumnNameTypeOrConstraintList?: (ctx: ColumnNameTypeOrConstraintListContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.columnNameTypeOrConstraintList`.
	 * @param ctx the parse tree
	 */
	exitColumnNameTypeOrConstraintList?: (ctx: ColumnNameTypeOrConstraintListContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.columnNameColonTypeList`.
	 * @param ctx the parse tree
	 */
	enterColumnNameColonTypeList?: (ctx: ColumnNameColonTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.columnNameColonTypeList`.
	 * @param ctx the parse tree
	 */
	exitColumnNameColonTypeList?: (ctx: ColumnNameColonTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.columnNameList`.
	 * @param ctx the parse tree
	 */
	enterColumnNameList?: (ctx: ColumnNameListContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.columnNameList`.
	 * @param ctx the parse tree
	 */
	exitColumnNameList?: (ctx: ColumnNameListContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.columnName`.
	 * @param ctx the parse tree
	 */
	enterColumnName?: (ctx: ColumnNameContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.columnName`.
	 * @param ctx the parse tree
	 */
	exitColumnName?: (ctx: ColumnNameContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.extColumnName`.
	 * @param ctx the parse tree
	 */
	enterExtColumnName?: (ctx: ExtColumnNameContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.extColumnName`.
	 * @param ctx the parse tree
	 */
	exitExtColumnName?: (ctx: ExtColumnNameContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.columnNameOrderList`.
	 * @param ctx the parse tree
	 */
	enterColumnNameOrderList?: (ctx: ColumnNameOrderListContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.columnNameOrderList`.
	 * @param ctx the parse tree
	 */
	exitColumnNameOrderList?: (ctx: ColumnNameOrderListContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.columnParenthesesList`.
	 * @param ctx the parse tree
	 */
	enterColumnParenthesesList?: (ctx: ColumnParenthesesListContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.columnParenthesesList`.
	 * @param ctx the parse tree
	 */
	exitColumnParenthesesList?: (ctx: ColumnParenthesesListContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.enableValidateSpecification`.
	 * @param ctx the parse tree
	 */
	enterEnableValidateSpecification?: (ctx: EnableValidateSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.enableValidateSpecification`.
	 * @param ctx the parse tree
	 */
	exitEnableValidateSpecification?: (ctx: EnableValidateSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.enableSpecification`.
	 * @param ctx the parse tree
	 */
	enterEnableSpecification?: (ctx: EnableSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.enableSpecification`.
	 * @param ctx the parse tree
	 */
	exitEnableSpecification?: (ctx: EnableSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.validateSpecification`.
	 * @param ctx the parse tree
	 */
	enterValidateSpecification?: (ctx: ValidateSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.validateSpecification`.
	 * @param ctx the parse tree
	 */
	exitValidateSpecification?: (ctx: ValidateSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.enforcedSpecification`.
	 * @param ctx the parse tree
	 */
	enterEnforcedSpecification?: (ctx: EnforcedSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.enforcedSpecification`.
	 * @param ctx the parse tree
	 */
	exitEnforcedSpecification?: (ctx: EnforcedSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.relySpecification`.
	 * @param ctx the parse tree
	 */
	enterRelySpecification?: (ctx: RelySpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.relySpecification`.
	 * @param ctx the parse tree
	 */
	exitRelySpecification?: (ctx: RelySpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.createConstraint`.
	 * @param ctx the parse tree
	 */
	enterCreateConstraint?: (ctx: CreateConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.createConstraint`.
	 * @param ctx the parse tree
	 */
	exitCreateConstraint?: (ctx: CreateConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterConstraintWithName`.
	 * @param ctx the parse tree
	 */
	enterAlterConstraintWithName?: (ctx: AlterConstraintWithNameContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterConstraintWithName`.
	 * @param ctx the parse tree
	 */
	exitAlterConstraintWithName?: (ctx: AlterConstraintWithNameContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.tableLevelConstraint`.
	 * @param ctx the parse tree
	 */
	enterTableLevelConstraint?: (ctx: TableLevelConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.tableLevelConstraint`.
	 * @param ctx the parse tree
	 */
	exitTableLevelConstraint?: (ctx: TableLevelConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.pkUkConstraint`.
	 * @param ctx the parse tree
	 */
	enterPkUkConstraint?: (ctx: PkUkConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.pkUkConstraint`.
	 * @param ctx the parse tree
	 */
	exitPkUkConstraint?: (ctx: PkUkConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.checkConstraint`.
	 * @param ctx the parse tree
	 */
	enterCheckConstraint?: (ctx: CheckConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.checkConstraint`.
	 * @param ctx the parse tree
	 */
	exitCheckConstraint?: (ctx: CheckConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.createForeignKey`.
	 * @param ctx the parse tree
	 */
	enterCreateForeignKey?: (ctx: CreateForeignKeyContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.createForeignKey`.
	 * @param ctx the parse tree
	 */
	exitCreateForeignKey?: (ctx: CreateForeignKeyContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterForeignKeyWithName`.
	 * @param ctx the parse tree
	 */
	enterAlterForeignKeyWithName?: (ctx: AlterForeignKeyWithNameContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterForeignKeyWithName`.
	 * @param ctx the parse tree
	 */
	exitAlterForeignKeyWithName?: (ctx: AlterForeignKeyWithNameContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.skewedValueElement`.
	 * @param ctx the parse tree
	 */
	enterSkewedValueElement?: (ctx: SkewedValueElementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.skewedValueElement`.
	 * @param ctx the parse tree
	 */
	exitSkewedValueElement?: (ctx: SkewedValueElementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.skewedColumnValuePairList`.
	 * @param ctx the parse tree
	 */
	enterSkewedColumnValuePairList?: (ctx: SkewedColumnValuePairListContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.skewedColumnValuePairList`.
	 * @param ctx the parse tree
	 */
	exitSkewedColumnValuePairList?: (ctx: SkewedColumnValuePairListContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.skewedColumnValuePair`.
	 * @param ctx the parse tree
	 */
	enterSkewedColumnValuePair?: (ctx: SkewedColumnValuePairContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.skewedColumnValuePair`.
	 * @param ctx the parse tree
	 */
	exitSkewedColumnValuePair?: (ctx: SkewedColumnValuePairContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.skewedColumnValues`.
	 * @param ctx the parse tree
	 */
	enterSkewedColumnValues?: (ctx: SkewedColumnValuesContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.skewedColumnValues`.
	 * @param ctx the parse tree
	 */
	exitSkewedColumnValues?: (ctx: SkewedColumnValuesContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.skewedColumnValue`.
	 * @param ctx the parse tree
	 */
	enterSkewedColumnValue?: (ctx: SkewedColumnValueContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.skewedColumnValue`.
	 * @param ctx the parse tree
	 */
	exitSkewedColumnValue?: (ctx: SkewedColumnValueContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.skewedValueLocationElement`.
	 * @param ctx the parse tree
	 */
	enterSkewedValueLocationElement?: (ctx: SkewedValueLocationElementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.skewedValueLocationElement`.
	 * @param ctx the parse tree
	 */
	exitSkewedValueLocationElement?: (ctx: SkewedValueLocationElementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.orderSpecification`.
	 * @param ctx the parse tree
	 */
	enterOrderSpecification?: (ctx: OrderSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.orderSpecification`.
	 * @param ctx the parse tree
	 */
	exitOrderSpecification?: (ctx: OrderSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.nullOrdering`.
	 * @param ctx the parse tree
	 */
	enterNullOrdering?: (ctx: NullOrderingContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.nullOrdering`.
	 * @param ctx the parse tree
	 */
	exitNullOrdering?: (ctx: NullOrderingContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.columnNameOrder`.
	 * @param ctx the parse tree
	 */
	enterColumnNameOrder?: (ctx: ColumnNameOrderContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.columnNameOrder`.
	 * @param ctx the parse tree
	 */
	exitColumnNameOrder?: (ctx: ColumnNameOrderContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.columnNameCommentList`.
	 * @param ctx the parse tree
	 */
	enterColumnNameCommentList?: (ctx: ColumnNameCommentListContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.columnNameCommentList`.
	 * @param ctx the parse tree
	 */
	exitColumnNameCommentList?: (ctx: ColumnNameCommentListContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.columnNameComment`.
	 * @param ctx the parse tree
	 */
	enterColumnNameComment?: (ctx: ColumnNameCommentContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.columnNameComment`.
	 * @param ctx the parse tree
	 */
	exitColumnNameComment?: (ctx: ColumnNameCommentContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.orderSpecificationRewrite`.
	 * @param ctx the parse tree
	 */
	enterOrderSpecificationRewrite?: (ctx: OrderSpecificationRewriteContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.orderSpecificationRewrite`.
	 * @param ctx the parse tree
	 */
	exitOrderSpecificationRewrite?: (ctx: OrderSpecificationRewriteContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.columnRefOrder`.
	 * @param ctx the parse tree
	 */
	enterColumnRefOrder?: (ctx: ColumnRefOrderContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.columnRefOrder`.
	 * @param ctx the parse tree
	 */
	exitColumnRefOrder?: (ctx: ColumnRefOrderContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.columnNameType`.
	 * @param ctx the parse tree
	 */
	enterColumnNameType?: (ctx: ColumnNameTypeContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.columnNameType`.
	 * @param ctx the parse tree
	 */
	exitColumnNameType?: (ctx: ColumnNameTypeContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.columnNameTypeOrConstraint`.
	 * @param ctx the parse tree
	 */
	enterColumnNameTypeOrConstraint?: (ctx: ColumnNameTypeOrConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.columnNameTypeOrConstraint`.
	 * @param ctx the parse tree
	 */
	exitColumnNameTypeOrConstraint?: (ctx: ColumnNameTypeOrConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.tableConstraint`.
	 * @param ctx the parse tree
	 */
	enterTableConstraint?: (ctx: TableConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.tableConstraint`.
	 * @param ctx the parse tree
	 */
	exitTableConstraint?: (ctx: TableConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.columnNameTypeConstraint`.
	 * @param ctx the parse tree
	 */
	enterColumnNameTypeConstraint?: (ctx: ColumnNameTypeConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.columnNameTypeConstraint`.
	 * @param ctx the parse tree
	 */
	exitColumnNameTypeConstraint?: (ctx: ColumnNameTypeConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.columnConstraint`.
	 * @param ctx the parse tree
	 */
	enterColumnConstraint?: (ctx: ColumnConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.columnConstraint`.
	 * @param ctx the parse tree
	 */
	exitColumnConstraint?: (ctx: ColumnConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.foreignKeyConstraint`.
	 * @param ctx the parse tree
	 */
	enterForeignKeyConstraint?: (ctx: ForeignKeyConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.foreignKeyConstraint`.
	 * @param ctx the parse tree
	 */
	exitForeignKeyConstraint?: (ctx: ForeignKeyConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.colConstraint`.
	 * @param ctx the parse tree
	 */
	enterColConstraint?: (ctx: ColConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.colConstraint`.
	 * @param ctx the parse tree
	 */
	exitColConstraint?: (ctx: ColConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterColumnConstraint`.
	 * @param ctx the parse tree
	 */
	enterAlterColumnConstraint?: (ctx: AlterColumnConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterColumnConstraint`.
	 * @param ctx the parse tree
	 */
	exitAlterColumnConstraint?: (ctx: AlterColumnConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterForeignKeyConstraint`.
	 * @param ctx the parse tree
	 */
	enterAlterForeignKeyConstraint?: (ctx: AlterForeignKeyConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterForeignKeyConstraint`.
	 * @param ctx the parse tree
	 */
	exitAlterForeignKeyConstraint?: (ctx: AlterForeignKeyConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterColConstraint`.
	 * @param ctx the parse tree
	 */
	enterAlterColConstraint?: (ctx: AlterColConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterColConstraint`.
	 * @param ctx the parse tree
	 */
	exitAlterColConstraint?: (ctx: AlterColConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.columnConstraintType`.
	 * @param ctx the parse tree
	 */
	enterColumnConstraintType?: (ctx: ColumnConstraintTypeContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.columnConstraintType`.
	 * @param ctx the parse tree
	 */
	exitColumnConstraintType?: (ctx: ColumnConstraintTypeContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.defaultVal`.
	 * @param ctx the parse tree
	 */
	enterDefaultVal?: (ctx: DefaultValContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.defaultVal`.
	 * @param ctx the parse tree
	 */
	exitDefaultVal?: (ctx: DefaultValContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.tableConstraintType`.
	 * @param ctx the parse tree
	 */
	enterTableConstraintType?: (ctx: TableConstraintTypeContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.tableConstraintType`.
	 * @param ctx the parse tree
	 */
	exitTableConstraintType?: (ctx: TableConstraintTypeContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.constraintOptsCreate`.
	 * @param ctx the parse tree
	 */
	enterConstraintOptsCreate?: (ctx: ConstraintOptsCreateContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.constraintOptsCreate`.
	 * @param ctx the parse tree
	 */
	exitConstraintOptsCreate?: (ctx: ConstraintOptsCreateContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.constraintOptsAlter`.
	 * @param ctx the parse tree
	 */
	enterConstraintOptsAlter?: (ctx: ConstraintOptsAlterContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.constraintOptsAlter`.
	 * @param ctx the parse tree
	 */
	exitConstraintOptsAlter?: (ctx: ConstraintOptsAlterContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.columnNameColonType`.
	 * @param ctx the parse tree
	 */
	enterColumnNameColonType?: (ctx: ColumnNameColonTypeContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.columnNameColonType`.
	 * @param ctx the parse tree
	 */
	exitColumnNameColonType?: (ctx: ColumnNameColonTypeContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.colType`.
	 * @param ctx the parse tree
	 */
	enterColType?: (ctx: ColTypeContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.colType`.
	 * @param ctx the parse tree
	 */
	exitColType?: (ctx: ColTypeContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.colTypeList`.
	 * @param ctx the parse tree
	 */
	enterColTypeList?: (ctx: ColTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.colTypeList`.
	 * @param ctx the parse tree
	 */
	exitColTypeList?: (ctx: ColTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.primitiveType`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.primitiveType`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveType?: (ctx: PrimitiveTypeContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.listType`.
	 * @param ctx the parse tree
	 */
	enterListType?: (ctx: ListTypeContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.listType`.
	 * @param ctx the parse tree
	 */
	exitListType?: (ctx: ListTypeContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.structType`.
	 * @param ctx the parse tree
	 */
	enterStructType?: (ctx: StructTypeContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.structType`.
	 * @param ctx the parse tree
	 */
	exitStructType?: (ctx: StructTypeContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.mapType`.
	 * @param ctx the parse tree
	 */
	enterMapType?: (ctx: MapTypeContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.mapType`.
	 * @param ctx the parse tree
	 */
	exitMapType?: (ctx: MapTypeContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.unionType`.
	 * @param ctx the parse tree
	 */
	enterUnionType?: (ctx: UnionTypeContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.unionType`.
	 * @param ctx the parse tree
	 */
	exitUnionType?: (ctx: UnionTypeContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.setOperator`.
	 * @param ctx the parse tree
	 */
	enterSetOperator?: (ctx: SetOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.setOperator`.
	 * @param ctx the parse tree
	 */
	exitSetOperator?: (ctx: SetOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.queryStatementExpression`.
	 * @param ctx the parse tree
	 */
	enterQueryStatementExpression?: (ctx: QueryStatementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.queryStatementExpression`.
	 * @param ctx the parse tree
	 */
	exitQueryStatementExpression?: (ctx: QueryStatementExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.queryStatementExpressionBody`.
	 * @param ctx the parse tree
	 */
	enterQueryStatementExpressionBody?: (ctx: QueryStatementExpressionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.queryStatementExpressionBody`.
	 * @param ctx the parse tree
	 */
	exitQueryStatementExpressionBody?: (ctx: QueryStatementExpressionBodyContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.withClause`.
	 * @param ctx the parse tree
	 */
	enterWithClause?: (ctx: WithClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.withClause`.
	 * @param ctx the parse tree
	 */
	exitWithClause?: (ctx: WithClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.cteStatement`.
	 * @param ctx the parse tree
	 */
	enterCteStatement?: (ctx: CteStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.cteStatement`.
	 * @param ctx the parse tree
	 */
	exitCteStatement?: (ctx: CteStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.fromStatement`.
	 * @param ctx the parse tree
	 */
	enterFromStatement?: (ctx: FromStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.fromStatement`.
	 * @param ctx the parse tree
	 */
	exitFromStatement?: (ctx: FromStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.singleFromStatement`.
	 * @param ctx the parse tree
	 */
	enterSingleFromStatement?: (ctx: SingleFromStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.singleFromStatement`.
	 * @param ctx the parse tree
	 */
	exitSingleFromStatement?: (ctx: SingleFromStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.regularBody`.
	 * @param ctx the parse tree
	 */
	enterRegularBody?: (ctx: RegularBodyContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.regularBody`.
	 * @param ctx the parse tree
	 */
	exitRegularBody?: (ctx: RegularBodyContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.atomSelectStatement`.
	 * @param ctx the parse tree
	 */
	enterAtomSelectStatement?: (ctx: AtomSelectStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.atomSelectStatement`.
	 * @param ctx the parse tree
	 */
	exitAtomSelectStatement?: (ctx: AtomSelectStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.selectStatement`.
	 * @param ctx the parse tree
	 */
	enterSelectStatement?: (ctx: SelectStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.selectStatement`.
	 * @param ctx the parse tree
	 */
	exitSelectStatement?: (ctx: SelectStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.setOpSelectStatement`.
	 * @param ctx the parse tree
	 */
	enterSetOpSelectStatement?: (ctx: SetOpSelectStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.setOpSelectStatement`.
	 * @param ctx the parse tree
	 */
	exitSetOpSelectStatement?: (ctx: SetOpSelectStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.selectStatementWithCTE`.
	 * @param ctx the parse tree
	 */
	enterSelectStatementWithCTE?: (ctx: SelectStatementWithCTEContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.selectStatementWithCTE`.
	 * @param ctx the parse tree
	 */
	exitSelectStatementWithCTE?: (ctx: SelectStatementWithCTEContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.body`.
	 * @param ctx the parse tree
	 */
	enterBody?: (ctx: BodyContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.body`.
	 * @param ctx the parse tree
	 */
	exitBody?: (ctx: BodyContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.insertClause`.
	 * @param ctx the parse tree
	 */
	enterInsertClause?: (ctx: InsertClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.insertClause`.
	 * @param ctx the parse tree
	 */
	exitInsertClause?: (ctx: InsertClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.destination`.
	 * @param ctx the parse tree
	 */
	enterDestination?: (ctx: DestinationContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.destination`.
	 * @param ctx the parse tree
	 */
	exitDestination?: (ctx: DestinationContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.limitClause`.
	 * @param ctx the parse tree
	 */
	enterLimitClause?: (ctx: LimitClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.limitClause`.
	 * @param ctx the parse tree
	 */
	exitLimitClause?: (ctx: LimitClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.deleteStatement`.
	 * @param ctx the parse tree
	 */
	enterDeleteStatement?: (ctx: DeleteStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.deleteStatement`.
	 * @param ctx the parse tree
	 */
	exitDeleteStatement?: (ctx: DeleteStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.columnAssignmentClause`.
	 * @param ctx the parse tree
	 */
	enterColumnAssignmentClause?: (ctx: ColumnAssignmentClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.columnAssignmentClause`.
	 * @param ctx the parse tree
	 */
	exitColumnAssignmentClause?: (ctx: ColumnAssignmentClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedencePlusExpressionOrDefault`.
	 * @param ctx the parse tree
	 */
	enterPrecedencePlusExpressionOrDefault?: (ctx: PrecedencePlusExpressionOrDefaultContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedencePlusExpressionOrDefault`.
	 * @param ctx the parse tree
	 */
	exitPrecedencePlusExpressionOrDefault?: (ctx: PrecedencePlusExpressionOrDefaultContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.setColumnsClause`.
	 * @param ctx the parse tree
	 */
	enterSetColumnsClause?: (ctx: SetColumnsClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.setColumnsClause`.
	 * @param ctx the parse tree
	 */
	exitSetColumnsClause?: (ctx: SetColumnsClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.updateStatement`.
	 * @param ctx the parse tree
	 */
	enterUpdateStatement?: (ctx: UpdateStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.updateStatement`.
	 * @param ctx the parse tree
	 */
	exitUpdateStatement?: (ctx: UpdateStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.sqlTransactionStatement`.
	 * @param ctx the parse tree
	 */
	enterSqlTransactionStatement?: (ctx: SqlTransactionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.sqlTransactionStatement`.
	 * @param ctx the parse tree
	 */
	exitSqlTransactionStatement?: (ctx: SqlTransactionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.startTransactionStatement`.
	 * @param ctx the parse tree
	 */
	enterStartTransactionStatement?: (ctx: StartTransactionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.startTransactionStatement`.
	 * @param ctx the parse tree
	 */
	exitStartTransactionStatement?: (ctx: StartTransactionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.transactionMode`.
	 * @param ctx the parse tree
	 */
	enterTransactionMode?: (ctx: TransactionModeContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.transactionMode`.
	 * @param ctx the parse tree
	 */
	exitTransactionMode?: (ctx: TransactionModeContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.transactionAccessMode`.
	 * @param ctx the parse tree
	 */
	enterTransactionAccessMode?: (ctx: TransactionAccessModeContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.transactionAccessMode`.
	 * @param ctx the parse tree
	 */
	exitTransactionAccessMode?: (ctx: TransactionAccessModeContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.isolationLevel`.
	 * @param ctx the parse tree
	 */
	enterIsolationLevel?: (ctx: IsolationLevelContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.isolationLevel`.
	 * @param ctx the parse tree
	 */
	exitIsolationLevel?: (ctx: IsolationLevelContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.levelOfIsolation`.
	 * @param ctx the parse tree
	 */
	enterLevelOfIsolation?: (ctx: LevelOfIsolationContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.levelOfIsolation`.
	 * @param ctx the parse tree
	 */
	exitLevelOfIsolation?: (ctx: LevelOfIsolationContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.commitStatement`.
	 * @param ctx the parse tree
	 */
	enterCommitStatement?: (ctx: CommitStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.commitStatement`.
	 * @param ctx the parse tree
	 */
	exitCommitStatement?: (ctx: CommitStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.rollbackStatement`.
	 * @param ctx the parse tree
	 */
	enterRollbackStatement?: (ctx: RollbackStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.rollbackStatement`.
	 * @param ctx the parse tree
	 */
	exitRollbackStatement?: (ctx: RollbackStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.setAutoCommitStatement`.
	 * @param ctx the parse tree
	 */
	enterSetAutoCommitStatement?: (ctx: SetAutoCommitStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.setAutoCommitStatement`.
	 * @param ctx the parse tree
	 */
	exitSetAutoCommitStatement?: (ctx: SetAutoCommitStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.abortTransactionStatement`.
	 * @param ctx the parse tree
	 */
	enterAbortTransactionStatement?: (ctx: AbortTransactionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.abortTransactionStatement`.
	 * @param ctx the parse tree
	 */
	exitAbortTransactionStatement?: (ctx: AbortTransactionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.abortCompactionStatement`.
	 * @param ctx the parse tree
	 */
	enterAbortCompactionStatement?: (ctx: AbortCompactionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.abortCompactionStatement`.
	 * @param ctx the parse tree
	 */
	exitAbortCompactionStatement?: (ctx: AbortCompactionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.mergeStatement`.
	 * @param ctx the parse tree
	 */
	enterMergeStatement?: (ctx: MergeStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.mergeStatement`.
	 * @param ctx the parse tree
	 */
	exitMergeStatement?: (ctx: MergeStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.whenClauses`.
	 * @param ctx the parse tree
	 */
	enterWhenClauses?: (ctx: WhenClausesContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.whenClauses`.
	 * @param ctx the parse tree
	 */
	exitWhenClauses?: (ctx: WhenClausesContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.whenNotMatchedClause`.
	 * @param ctx the parse tree
	 */
	enterWhenNotMatchedClause?: (ctx: WhenNotMatchedClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.whenNotMatchedClause`.
	 * @param ctx the parse tree
	 */
	exitWhenNotMatchedClause?: (ctx: WhenNotMatchedClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.whenMatchedAndClause`.
	 * @param ctx the parse tree
	 */
	enterWhenMatchedAndClause?: (ctx: WhenMatchedAndClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.whenMatchedAndClause`.
	 * @param ctx the parse tree
	 */
	exitWhenMatchedAndClause?: (ctx: WhenMatchedAndClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.whenMatchedThenClause`.
	 * @param ctx the parse tree
	 */
	enterWhenMatchedThenClause?: (ctx: WhenMatchedThenClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.whenMatchedThenClause`.
	 * @param ctx the parse tree
	 */
	exitWhenMatchedThenClause?: (ctx: WhenMatchedThenClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.updateOrDelete`.
	 * @param ctx the parse tree
	 */
	enterUpdateOrDelete?: (ctx: UpdateOrDeleteContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.updateOrDelete`.
	 * @param ctx the parse tree
	 */
	exitUpdateOrDelete?: (ctx: UpdateOrDeleteContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.killQueryStatement`.
	 * @param ctx the parse tree
	 */
	enterKillQueryStatement?: (ctx: KillQueryStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.killQueryStatement`.
	 * @param ctx the parse tree
	 */
	exitKillQueryStatement?: (ctx: KillQueryStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.compactionId`.
	 * @param ctx the parse tree
	 */
	enterCompactionId?: (ctx: CompactionIdContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.compactionId`.
	 * @param ctx the parse tree
	 */
	exitCompactionId?: (ctx: CompactionIdContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.compactionPool`.
	 * @param ctx the parse tree
	 */
	enterCompactionPool?: (ctx: CompactionPoolContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.compactionPool`.
	 * @param ctx the parse tree
	 */
	exitCompactionPool?: (ctx: CompactionPoolContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.compactionType`.
	 * @param ctx the parse tree
	 */
	enterCompactionType?: (ctx: CompactionTypeContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.compactionType`.
	 * @param ctx the parse tree
	 */
	exitCompactionType?: (ctx: CompactionTypeContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.compactionStatus`.
	 * @param ctx the parse tree
	 */
	enterCompactionStatus?: (ctx: CompactionStatusContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.compactionStatus`.
	 * @param ctx the parse tree
	 */
	exitCompactionStatus?: (ctx: CompactionStatusContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterStatement`.
	 * @param ctx the parse tree
	 */
	enterAlterStatement?: (ctx: AlterStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterStatement`.
	 * @param ctx the parse tree
	 */
	exitAlterStatement?: (ctx: AlterStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterTableStatementSuffix`.
	 * @param ctx the parse tree
	 */
	enterAlterTableStatementSuffix?: (ctx: AlterTableStatementSuffixContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterTableStatementSuffix`.
	 * @param ctx the parse tree
	 */
	exitAlterTableStatementSuffix?: (ctx: AlterTableStatementSuffixContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterTblPartitionStatementSuffix`.
	 * @param ctx the parse tree
	 */
	enterAlterTblPartitionStatementSuffix?: (ctx: AlterTblPartitionStatementSuffixContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterTblPartitionStatementSuffix`.
	 * @param ctx the parse tree
	 */
	exitAlterTblPartitionStatementSuffix?: (ctx: AlterTblPartitionStatementSuffixContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterStatementPartitionKeyType`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementPartitionKeyType?: (ctx: AlterStatementPartitionKeyTypeContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterStatementPartitionKeyType`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementPartitionKeyType?: (ctx: AlterStatementPartitionKeyTypeContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterViewStatementSuffix`.
	 * @param ctx the parse tree
	 */
	enterAlterViewStatementSuffix?: (ctx: AlterViewStatementSuffixContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterViewStatementSuffix`.
	 * @param ctx the parse tree
	 */
	exitAlterViewStatementSuffix?: (ctx: AlterViewStatementSuffixContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterMaterializedViewStatementSuffix`.
	 * @param ctx the parse tree
	 */
	enterAlterMaterializedViewStatementSuffix?: (ctx: AlterMaterializedViewStatementSuffixContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterMaterializedViewStatementSuffix`.
	 * @param ctx the parse tree
	 */
	exitAlterMaterializedViewStatementSuffix?: (ctx: AlterMaterializedViewStatementSuffixContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterMaterializedViewSuffixRewrite`.
	 * @param ctx the parse tree
	 */
	enterAlterMaterializedViewSuffixRewrite?: (ctx: AlterMaterializedViewSuffixRewriteContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterMaterializedViewSuffixRewrite`.
	 * @param ctx the parse tree
	 */
	exitAlterMaterializedViewSuffixRewrite?: (ctx: AlterMaterializedViewSuffixRewriteContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterMaterializedViewSuffixRebuild`.
	 * @param ctx the parse tree
	 */
	enterAlterMaterializedViewSuffixRebuild?: (ctx: AlterMaterializedViewSuffixRebuildContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterMaterializedViewSuffixRebuild`.
	 * @param ctx the parse tree
	 */
	exitAlterMaterializedViewSuffixRebuild?: (ctx: AlterMaterializedViewSuffixRebuildContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterDatabaseStatementSuffix`.
	 * @param ctx the parse tree
	 */
	enterAlterDatabaseStatementSuffix?: (ctx: AlterDatabaseStatementSuffixContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterDatabaseStatementSuffix`.
	 * @param ctx the parse tree
	 */
	exitAlterDatabaseStatementSuffix?: (ctx: AlterDatabaseStatementSuffixContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterDatabaseSuffixProperties`.
	 * @param ctx the parse tree
	 */
	enterAlterDatabaseSuffixProperties?: (ctx: AlterDatabaseSuffixPropertiesContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterDatabaseSuffixProperties`.
	 * @param ctx the parse tree
	 */
	exitAlterDatabaseSuffixProperties?: (ctx: AlterDatabaseSuffixPropertiesContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterDatabaseSuffixSetOwner`.
	 * @param ctx the parse tree
	 */
	enterAlterDatabaseSuffixSetOwner?: (ctx: AlterDatabaseSuffixSetOwnerContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterDatabaseSuffixSetOwner`.
	 * @param ctx the parse tree
	 */
	exitAlterDatabaseSuffixSetOwner?: (ctx: AlterDatabaseSuffixSetOwnerContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterDatabaseSuffixSetLocation`.
	 * @param ctx the parse tree
	 */
	enterAlterDatabaseSuffixSetLocation?: (ctx: AlterDatabaseSuffixSetLocationContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterDatabaseSuffixSetLocation`.
	 * @param ctx the parse tree
	 */
	exitAlterDatabaseSuffixSetLocation?: (ctx: AlterDatabaseSuffixSetLocationContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterDatabaseSuffixSetManagedLocation`.
	 * @param ctx the parse tree
	 */
	enterAlterDatabaseSuffixSetManagedLocation?: (ctx: AlterDatabaseSuffixSetManagedLocationContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterDatabaseSuffixSetManagedLocation`.
	 * @param ctx the parse tree
	 */
	exitAlterDatabaseSuffixSetManagedLocation?: (ctx: AlterDatabaseSuffixSetManagedLocationContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterStatementSuffixRename`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixRename?: (ctx: AlterStatementSuffixRenameContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterStatementSuffixRename`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixRename?: (ctx: AlterStatementSuffixRenameContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterStatementSuffixAddCol`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixAddCol?: (ctx: AlterStatementSuffixAddColContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterStatementSuffixAddCol`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixAddCol?: (ctx: AlterStatementSuffixAddColContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterStatementSuffixAddConstraint`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixAddConstraint?: (ctx: AlterStatementSuffixAddConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterStatementSuffixAddConstraint`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixAddConstraint?: (ctx: AlterStatementSuffixAddConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterStatementSuffixUpdateColumns`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixUpdateColumns?: (ctx: AlterStatementSuffixUpdateColumnsContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterStatementSuffixUpdateColumns`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixUpdateColumns?: (ctx: AlterStatementSuffixUpdateColumnsContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterStatementSuffixDropConstraint`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixDropConstraint?: (ctx: AlterStatementSuffixDropConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterStatementSuffixDropConstraint`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixDropConstraint?: (ctx: AlterStatementSuffixDropConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterStatementSuffixRenameCol`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixRenameCol?: (ctx: AlterStatementSuffixRenameColContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterStatementSuffixRenameCol`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixRenameCol?: (ctx: AlterStatementSuffixRenameColContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterStatementSuffixUpdateStatsCol`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixUpdateStatsCol?: (ctx: AlterStatementSuffixUpdateStatsColContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterStatementSuffixUpdateStatsCol`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixUpdateStatsCol?: (ctx: AlterStatementSuffixUpdateStatsColContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterStatementSuffixUpdateStats`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixUpdateStats?: (ctx: AlterStatementSuffixUpdateStatsContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterStatementSuffixUpdateStats`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixUpdateStats?: (ctx: AlterStatementSuffixUpdateStatsContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterStatementChangeColPosition`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementChangeColPosition?: (ctx: AlterStatementChangeColPositionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterStatementChangeColPosition`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementChangeColPosition?: (ctx: AlterStatementChangeColPositionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterStatementSuffixAddPartitions`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixAddPartitions?: (ctx: AlterStatementSuffixAddPartitionsContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterStatementSuffixAddPartitions`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixAddPartitions?: (ctx: AlterStatementSuffixAddPartitionsContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterStatementSuffixAddPartitionsElement`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixAddPartitionsElement?: (ctx: AlterStatementSuffixAddPartitionsElementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterStatementSuffixAddPartitionsElement`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixAddPartitionsElement?: (ctx: AlterStatementSuffixAddPartitionsElementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterStatementSuffixTouch`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixTouch?: (ctx: AlterStatementSuffixTouchContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterStatementSuffixTouch`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixTouch?: (ctx: AlterStatementSuffixTouchContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterStatementSuffixArchive`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixArchive?: (ctx: AlterStatementSuffixArchiveContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterStatementSuffixArchive`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixArchive?: (ctx: AlterStatementSuffixArchiveContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterStatementSuffixUnArchive`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixUnArchive?: (ctx: AlterStatementSuffixUnArchiveContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterStatementSuffixUnArchive`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixUnArchive?: (ctx: AlterStatementSuffixUnArchiveContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.partitionLocation`.
	 * @param ctx the parse tree
	 */
	enterPartitionLocation?: (ctx: PartitionLocationContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.partitionLocation`.
	 * @param ctx the parse tree
	 */
	exitPartitionLocation?: (ctx: PartitionLocationContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterStatementSuffixDropPartitions`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixDropPartitions?: (ctx: AlterStatementSuffixDropPartitionsContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterStatementSuffixDropPartitions`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixDropPartitions?: (ctx: AlterStatementSuffixDropPartitionsContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterStatementSuffixProperties`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixProperties?: (ctx: AlterStatementSuffixPropertiesContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterStatementSuffixProperties`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixProperties?: (ctx: AlterStatementSuffixPropertiesContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterViewSuffixProperties`.
	 * @param ctx the parse tree
	 */
	enterAlterViewSuffixProperties?: (ctx: AlterViewSuffixPropertiesContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterViewSuffixProperties`.
	 * @param ctx the parse tree
	 */
	exitAlterViewSuffixProperties?: (ctx: AlterViewSuffixPropertiesContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterStatementSuffixSerdeProperties`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixSerdeProperties?: (ctx: AlterStatementSuffixSerdePropertiesContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterStatementSuffixSerdeProperties`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixSerdeProperties?: (ctx: AlterStatementSuffixSerdePropertiesContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.tablePartitionPrefix`.
	 * @param ctx the parse tree
	 */
	enterTablePartitionPrefix?: (ctx: TablePartitionPrefixContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.tablePartitionPrefix`.
	 * @param ctx the parse tree
	 */
	exitTablePartitionPrefix?: (ctx: TablePartitionPrefixContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterStatementSuffixFileFormat`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixFileFormat?: (ctx: AlterStatementSuffixFileFormatContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterStatementSuffixFileFormat`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixFileFormat?: (ctx: AlterStatementSuffixFileFormatContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterStatementSuffixClusterbySortby`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixClusterbySortby?: (ctx: AlterStatementSuffixClusterbySortbyContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterStatementSuffixClusterbySortby`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixClusterbySortby?: (ctx: AlterStatementSuffixClusterbySortbyContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterTblPartitionStatementSuffixSkewedLocation`.
	 * @param ctx the parse tree
	 */
	enterAlterTblPartitionStatementSuffixSkewedLocation?: (ctx: AlterTblPartitionStatementSuffixSkewedLocationContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterTblPartitionStatementSuffixSkewedLocation`.
	 * @param ctx the parse tree
	 */
	exitAlterTblPartitionStatementSuffixSkewedLocation?: (ctx: AlterTblPartitionStatementSuffixSkewedLocationContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.skewedLocations`.
	 * @param ctx the parse tree
	 */
	enterSkewedLocations?: (ctx: SkewedLocationsContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.skewedLocations`.
	 * @param ctx the parse tree
	 */
	exitSkewedLocations?: (ctx: SkewedLocationsContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.skewedLocationsList`.
	 * @param ctx the parse tree
	 */
	enterSkewedLocationsList?: (ctx: SkewedLocationsListContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.skewedLocationsList`.
	 * @param ctx the parse tree
	 */
	exitSkewedLocationsList?: (ctx: SkewedLocationsListContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.skewedLocationMap`.
	 * @param ctx the parse tree
	 */
	enterSkewedLocationMap?: (ctx: SkewedLocationMapContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.skewedLocationMap`.
	 * @param ctx the parse tree
	 */
	exitSkewedLocationMap?: (ctx: SkewedLocationMapContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterStatementSuffixLocation`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixLocation?: (ctx: AlterStatementSuffixLocationContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterStatementSuffixLocation`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixLocation?: (ctx: AlterStatementSuffixLocationContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterStatementSuffixSkewedby`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixSkewedby?: (ctx: AlterStatementSuffixSkewedbyContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterStatementSuffixSkewedby`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixSkewedby?: (ctx: AlterStatementSuffixSkewedbyContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterStatementSuffixExchangePartition`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixExchangePartition?: (ctx: AlterStatementSuffixExchangePartitionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterStatementSuffixExchangePartition`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixExchangePartition?: (ctx: AlterStatementSuffixExchangePartitionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterStatementSuffixRenamePart`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixRenamePart?: (ctx: AlterStatementSuffixRenamePartContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterStatementSuffixRenamePart`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixRenamePart?: (ctx: AlterStatementSuffixRenamePartContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterStatementSuffixStatsPart`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixStatsPart?: (ctx: AlterStatementSuffixStatsPartContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterStatementSuffixStatsPart`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixStatsPart?: (ctx: AlterStatementSuffixStatsPartContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterStatementSuffixMergeFiles`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixMergeFiles?: (ctx: AlterStatementSuffixMergeFilesContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterStatementSuffixMergeFiles`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixMergeFiles?: (ctx: AlterStatementSuffixMergeFilesContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterStatementSuffixBucketNum`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixBucketNum?: (ctx: AlterStatementSuffixBucketNumContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterStatementSuffixBucketNum`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixBucketNum?: (ctx: AlterStatementSuffixBucketNumContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.blocking`.
	 * @param ctx the parse tree
	 */
	enterBlocking?: (ctx: BlockingContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.blocking`.
	 * @param ctx the parse tree
	 */
	exitBlocking?: (ctx: BlockingContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.compactPool`.
	 * @param ctx the parse tree
	 */
	enterCompactPool?: (ctx: CompactPoolContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.compactPool`.
	 * @param ctx the parse tree
	 */
	exitCompactPool?: (ctx: CompactPoolContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterStatementSuffixCompact`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixCompact?: (ctx: AlterStatementSuffixCompactContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterStatementSuffixCompact`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixCompact?: (ctx: AlterStatementSuffixCompactContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterStatementSuffixSetOwner`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixSetOwner?: (ctx: AlterStatementSuffixSetOwnerContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterStatementSuffixSetOwner`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixSetOwner?: (ctx: AlterStatementSuffixSetOwnerContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterStatementSuffixSetPartSpec`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixSetPartSpec?: (ctx: AlterStatementSuffixSetPartSpecContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterStatementSuffixSetPartSpec`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixSetPartSpec?: (ctx: AlterStatementSuffixSetPartSpecContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterStatementSuffixExecute`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixExecute?: (ctx: AlterStatementSuffixExecuteContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterStatementSuffixExecute`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixExecute?: (ctx: AlterStatementSuffixExecuteContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.fileFormat`.
	 * @param ctx the parse tree
	 */
	enterFileFormat?: (ctx: FileFormatContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.fileFormat`.
	 * @param ctx the parse tree
	 */
	exitFileFormat?: (ctx: FileFormatContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterDataConnectorStatementSuffix`.
	 * @param ctx the parse tree
	 */
	enterAlterDataConnectorStatementSuffix?: (ctx: AlterDataConnectorStatementSuffixContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterDataConnectorStatementSuffix`.
	 * @param ctx the parse tree
	 */
	exitAlterDataConnectorStatementSuffix?: (ctx: AlterDataConnectorStatementSuffixContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterDataConnectorSuffixProperties`.
	 * @param ctx the parse tree
	 */
	enterAlterDataConnectorSuffixProperties?: (ctx: AlterDataConnectorSuffixPropertiesContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterDataConnectorSuffixProperties`.
	 * @param ctx the parse tree
	 */
	exitAlterDataConnectorSuffixProperties?: (ctx: AlterDataConnectorSuffixPropertiesContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterDataConnectorSuffixSetOwner`.
	 * @param ctx the parse tree
	 */
	enterAlterDataConnectorSuffixSetOwner?: (ctx: AlterDataConnectorSuffixSetOwnerContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterDataConnectorSuffixSetOwner`.
	 * @param ctx the parse tree
	 */
	exitAlterDataConnectorSuffixSetOwner?: (ctx: AlterDataConnectorSuffixSetOwnerContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterDataConnectorSuffixSetUrl`.
	 * @param ctx the parse tree
	 */
	enterAlterDataConnectorSuffixSetUrl?: (ctx: AlterDataConnectorSuffixSetUrlContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterDataConnectorSuffixSetUrl`.
	 * @param ctx the parse tree
	 */
	exitAlterDataConnectorSuffixSetUrl?: (ctx: AlterDataConnectorSuffixSetUrlContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.likeTableOrFile`.
	 * @param ctx the parse tree
	 */
	enterLikeTableOrFile?: (ctx: LikeTableOrFileContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.likeTableOrFile`.
	 * @param ctx the parse tree
	 */
	exitLikeTableOrFile?: (ctx: LikeTableOrFileContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.createTableStatement`.
	 * @param ctx the parse tree
	 */
	enterCreateTableStatement?: (ctx: CreateTableStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.createTableStatement`.
	 * @param ctx the parse tree
	 */
	exitCreateTableStatement?: (ctx: CreateTableStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.createDataConnectorStatement`.
	 * @param ctx the parse tree
	 */
	enterCreateDataConnectorStatement?: (ctx: CreateDataConnectorStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.createDataConnectorStatement`.
	 * @param ctx the parse tree
	 */
	exitCreateDataConnectorStatement?: (ctx: CreateDataConnectorStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.dataConnectorComment`.
	 * @param ctx the parse tree
	 */
	enterDataConnectorComment?: (ctx: DataConnectorCommentContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.dataConnectorComment`.
	 * @param ctx the parse tree
	 */
	exitDataConnectorComment?: (ctx: DataConnectorCommentContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.dataConnectorUrl`.
	 * @param ctx the parse tree
	 */
	enterDataConnectorUrl?: (ctx: DataConnectorUrlContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.dataConnectorUrl`.
	 * @param ctx the parse tree
	 */
	exitDataConnectorUrl?: (ctx: DataConnectorUrlContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.dataConnectorType`.
	 * @param ctx the parse tree
	 */
	enterDataConnectorType?: (ctx: DataConnectorTypeContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.dataConnectorType`.
	 * @param ctx the parse tree
	 */
	exitDataConnectorType?: (ctx: DataConnectorTypeContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.dcProperties`.
	 * @param ctx the parse tree
	 */
	enterDcProperties?: (ctx: DcPropertiesContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.dcProperties`.
	 * @param ctx the parse tree
	 */
	exitDcProperties?: (ctx: DcPropertiesContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.dropDataConnectorStatement`.
	 * @param ctx the parse tree
	 */
	enterDropDataConnectorStatement?: (ctx: DropDataConnectorStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.dropDataConnectorStatement`.
	 * @param ctx the parse tree
	 */
	exitDropDataConnectorStatement?: (ctx: DropDataConnectorStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.tableAllColumns`.
	 * @param ctx the parse tree
	 */
	enterTableAllColumns?: (ctx: TableAllColumnsContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.tableAllColumns`.
	 * @param ctx the parse tree
	 */
	exitTableAllColumns?: (ctx: TableAllColumnsContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.tableOrColumn`.
	 * @param ctx the parse tree
	 */
	enterTableOrColumn?: (ctx: TableOrColumnContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.tableOrColumn`.
	 * @param ctx the parse tree
	 */
	exitTableOrColumn?: (ctx: TableOrColumnContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.defaultValue`.
	 * @param ctx the parse tree
	 */
	enterDefaultValue?: (ctx: DefaultValueContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.defaultValue`.
	 * @param ctx the parse tree
	 */
	exitDefaultValue?: (ctx: DefaultValueContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.aliasList`.
	 * @param ctx the parse tree
	 */
	enterAliasList?: (ctx: AliasListContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.aliasList`.
	 * @param ctx the parse tree
	 */
	exitAliasList?: (ctx: AliasListContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.fromClause`.
	 * @param ctx the parse tree
	 */
	enterFromClause?: (ctx: FromClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.fromClause`.
	 * @param ctx the parse tree
	 */
	exitFromClause?: (ctx: FromClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.fromSource`.
	 * @param ctx the parse tree
	 */
	enterFromSource?: (ctx: FromSourceContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.fromSource`.
	 * @param ctx the parse tree
	 */
	exitFromSource?: (ctx: FromSourceContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.atomjoinSource`.
	 * @param ctx the parse tree
	 */
	enterAtomjoinSource?: (ctx: AtomjoinSourceContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.atomjoinSource`.
	 * @param ctx the parse tree
	 */
	exitAtomjoinSource?: (ctx: AtomjoinSourceContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.joinSource`.
	 * @param ctx the parse tree
	 */
	enterJoinSource?: (ctx: JoinSourceContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.joinSource`.
	 * @param ctx the parse tree
	 */
	exitJoinSource?: (ctx: JoinSourceContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.joinSourcePart`.
	 * @param ctx the parse tree
	 */
	enterJoinSourcePart?: (ctx: JoinSourcePartContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.joinSourcePart`.
	 * @param ctx the parse tree
	 */
	exitJoinSourcePart?: (ctx: JoinSourcePartContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.uniqueJoinSource`.
	 * @param ctx the parse tree
	 */
	enterUniqueJoinSource?: (ctx: UniqueJoinSourceContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.uniqueJoinSource`.
	 * @param ctx the parse tree
	 */
	exitUniqueJoinSource?: (ctx: UniqueJoinSourceContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.uniqueJoinExpr`.
	 * @param ctx the parse tree
	 */
	enterUniqueJoinExpr?: (ctx: UniqueJoinExprContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.uniqueJoinExpr`.
	 * @param ctx the parse tree
	 */
	exitUniqueJoinExpr?: (ctx: UniqueJoinExprContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.uniqueJoinToken`.
	 * @param ctx the parse tree
	 */
	enterUniqueJoinToken?: (ctx: UniqueJoinTokenContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.uniqueJoinToken`.
	 * @param ctx the parse tree
	 */
	exitUniqueJoinToken?: (ctx: UniqueJoinTokenContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.joinToken`.
	 * @param ctx the parse tree
	 */
	enterJoinToken?: (ctx: JoinTokenContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.joinToken`.
	 * @param ctx the parse tree
	 */
	exitJoinToken?: (ctx: JoinTokenContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.lateralView`.
	 * @param ctx the parse tree
	 */
	enterLateralView?: (ctx: LateralViewContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.lateralView`.
	 * @param ctx the parse tree
	 */
	exitLateralView?: (ctx: LateralViewContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.tableAlias`.
	 * @param ctx the parse tree
	 */
	enterTableAlias?: (ctx: TableAliasContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.tableAlias`.
	 * @param ctx the parse tree
	 */
	exitTableAlias?: (ctx: TableAliasContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.tableBucketSample`.
	 * @param ctx the parse tree
	 */
	enterTableBucketSample?: (ctx: TableBucketSampleContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.tableBucketSample`.
	 * @param ctx the parse tree
	 */
	exitTableBucketSample?: (ctx: TableBucketSampleContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.splitSample`.
	 * @param ctx the parse tree
	 */
	enterSplitSample?: (ctx: SplitSampleContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.splitSample`.
	 * @param ctx the parse tree
	 */
	exitSplitSample?: (ctx: SplitSampleContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.tableSample`.
	 * @param ctx the parse tree
	 */
	enterTableSample?: (ctx: TableSampleContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.tableSample`.
	 * @param ctx the parse tree
	 */
	exitTableSample?: (ctx: TableSampleContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.tableSource`.
	 * @param ctx the parse tree
	 */
	enterTableSource?: (ctx: TableSourceContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.tableSource`.
	 * @param ctx the parse tree
	 */
	exitTableSource?: (ctx: TableSourceContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.asOfClause`.
	 * @param ctx the parse tree
	 */
	enterAsOfClause?: (ctx: AsOfClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.asOfClause`.
	 * @param ctx the parse tree
	 */
	exitAsOfClause?: (ctx: AsOfClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.uniqueJoinTableSource`.
	 * @param ctx the parse tree
	 */
	enterUniqueJoinTableSource?: (ctx: UniqueJoinTableSourceContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.uniqueJoinTableSource`.
	 * @param ctx the parse tree
	 */
	exitUniqueJoinTableSource?: (ctx: UniqueJoinTableSourceContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.tableName`.
	 * @param ctx the parse tree
	 */
	enterTableName?: (ctx: TableNameContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.tableName`.
	 * @param ctx the parse tree
	 */
	exitTableName?: (ctx: TableNameContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.viewName`.
	 * @param ctx the parse tree
	 */
	enterViewName?: (ctx: ViewNameContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.viewName`.
	 * @param ctx the parse tree
	 */
	exitViewName?: (ctx: ViewNameContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.subQuerySource`.
	 * @param ctx the parse tree
	 */
	enterSubQuerySource?: (ctx: SubQuerySourceContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.subQuerySource`.
	 * @param ctx the parse tree
	 */
	exitSubQuerySource?: (ctx: SubQuerySourceContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.partitioningSpec`.
	 * @param ctx the parse tree
	 */
	enterPartitioningSpec?: (ctx: PartitioningSpecContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.partitioningSpec`.
	 * @param ctx the parse tree
	 */
	exitPartitioningSpec?: (ctx: PartitioningSpecContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.partitionTableFunctionSource`.
	 * @param ctx the parse tree
	 */
	enterPartitionTableFunctionSource?: (ctx: PartitionTableFunctionSourceContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.partitionTableFunctionSource`.
	 * @param ctx the parse tree
	 */
	exitPartitionTableFunctionSource?: (ctx: PartitionTableFunctionSourceContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.partitionedTableFunction`.
	 * @param ctx the parse tree
	 */
	enterPartitionedTableFunction?: (ctx: PartitionedTableFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.partitionedTableFunction`.
	 * @param ctx the parse tree
	 */
	exitPartitionedTableFunction?: (ctx: PartitionedTableFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.whereClause`.
	 * @param ctx the parse tree
	 */
	enterWhereClause?: (ctx: WhereClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.whereClause`.
	 * @param ctx the parse tree
	 */
	exitWhereClause?: (ctx: WhereClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.searchCondition`.
	 * @param ctx the parse tree
	 */
	enterSearchCondition?: (ctx: SearchConditionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.searchCondition`.
	 * @param ctx the parse tree
	 */
	exitSearchCondition?: (ctx: SearchConditionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.valuesSource`.
	 * @param ctx the parse tree
	 */
	enterValuesSource?: (ctx: ValuesSourceContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.valuesSource`.
	 * @param ctx the parse tree
	 */
	exitValuesSource?: (ctx: ValuesSourceContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.valuesClause`.
	 * @param ctx the parse tree
	 */
	enterValuesClause?: (ctx: ValuesClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.valuesClause`.
	 * @param ctx the parse tree
	 */
	exitValuesClause?: (ctx: ValuesClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.valuesTableConstructor`.
	 * @param ctx the parse tree
	 */
	enterValuesTableConstructor?: (ctx: ValuesTableConstructorContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.valuesTableConstructor`.
	 * @param ctx the parse tree
	 */
	exitValuesTableConstructor?: (ctx: ValuesTableConstructorContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.valueRowConstructor`.
	 * @param ctx the parse tree
	 */
	enterValueRowConstructor?: (ctx: ValueRowConstructorContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.valueRowConstructor`.
	 * @param ctx the parse tree
	 */
	exitValueRowConstructor?: (ctx: ValueRowConstructorContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.firstValueRowConstructor`.
	 * @param ctx the parse tree
	 */
	enterFirstValueRowConstructor?: (ctx: FirstValueRowConstructorContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.firstValueRowConstructor`.
	 * @param ctx the parse tree
	 */
	exitFirstValueRowConstructor?: (ctx: FirstValueRowConstructorContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.virtualTableSource`.
	 * @param ctx the parse tree
	 */
	enterVirtualTableSource?: (ctx: VirtualTableSourceContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.virtualTableSource`.
	 * @param ctx the parse tree
	 */
	exitVirtualTableSource?: (ctx: VirtualTableSourceContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.selectClause`.
	 * @param ctx the parse tree
	 */
	enterSelectClause?: (ctx: SelectClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.selectClause`.
	 * @param ctx the parse tree
	 */
	exitSelectClause?: (ctx: SelectClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.all_distinct`.
	 * @param ctx the parse tree
	 */
	enterAll_distinct?: (ctx: All_distinctContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.all_distinct`.
	 * @param ctx the parse tree
	 */
	exitAll_distinct?: (ctx: All_distinctContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.selectList`.
	 * @param ctx the parse tree
	 */
	enterSelectList?: (ctx: SelectListContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.selectList`.
	 * @param ctx the parse tree
	 */
	exitSelectList?: (ctx: SelectListContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.selectTrfmClause`.
	 * @param ctx the parse tree
	 */
	enterSelectTrfmClause?: (ctx: SelectTrfmClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.selectTrfmClause`.
	 * @param ctx the parse tree
	 */
	exitSelectTrfmClause?: (ctx: SelectTrfmClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.selectItem`.
	 * @param ctx the parse tree
	 */
	enterSelectItem?: (ctx: SelectItemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.selectItem`.
	 * @param ctx the parse tree
	 */
	exitSelectItem?: (ctx: SelectItemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.trfmClause`.
	 * @param ctx the parse tree
	 */
	enterTrfmClause?: (ctx: TrfmClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.trfmClause`.
	 * @param ctx the parse tree
	 */
	exitTrfmClause?: (ctx: TrfmClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.selectExpression`.
	 * @param ctx the parse tree
	 */
	enterSelectExpression?: (ctx: SelectExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.selectExpression`.
	 * @param ctx the parse tree
	 */
	exitSelectExpression?: (ctx: SelectExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.selectExpressionList`.
	 * @param ctx the parse tree
	 */
	enterSelectExpressionList?: (ctx: SelectExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.selectExpressionList`.
	 * @param ctx the parse tree
	 */
	exitSelectExpressionList?: (ctx: SelectExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.window_clause`.
	 * @param ctx the parse tree
	 */
	enterWindow_clause?: (ctx: Window_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.window_clause`.
	 * @param ctx the parse tree
	 */
	exitWindow_clause?: (ctx: Window_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.window_defn`.
	 * @param ctx the parse tree
	 */
	enterWindow_defn?: (ctx: Window_defnContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.window_defn`.
	 * @param ctx the parse tree
	 */
	exitWindow_defn?: (ctx: Window_defnContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.window_specification`.
	 * @param ctx the parse tree
	 */
	enterWindow_specification?: (ctx: Window_specificationContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.window_specification`.
	 * @param ctx the parse tree
	 */
	exitWindow_specification?: (ctx: Window_specificationContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.window_frame`.
	 * @param ctx the parse tree
	 */
	enterWindow_frame?: (ctx: Window_frameContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.window_frame`.
	 * @param ctx the parse tree
	 */
	exitWindow_frame?: (ctx: Window_frameContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.window_range_expression`.
	 * @param ctx the parse tree
	 */
	enterWindow_range_expression?: (ctx: Window_range_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.window_range_expression`.
	 * @param ctx the parse tree
	 */
	exitWindow_range_expression?: (ctx: Window_range_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.window_value_expression`.
	 * @param ctx the parse tree
	 */
	enterWindow_value_expression?: (ctx: Window_value_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.window_value_expression`.
	 * @param ctx the parse tree
	 */
	exitWindow_value_expression?: (ctx: Window_value_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.window_frame_start_boundary`.
	 * @param ctx the parse tree
	 */
	enterWindow_frame_start_boundary?: (ctx: Window_frame_start_boundaryContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.window_frame_start_boundary`.
	 * @param ctx the parse tree
	 */
	exitWindow_frame_start_boundary?: (ctx: Window_frame_start_boundaryContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.window_frame_boundary`.
	 * @param ctx the parse tree
	 */
	enterWindow_frame_boundary?: (ctx: Window_frame_boundaryContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.window_frame_boundary`.
	 * @param ctx the parse tree
	 */
	exitWindow_frame_boundary?: (ctx: Window_frame_boundaryContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.groupByClause`.
	 * @param ctx the parse tree
	 */
	enterGroupByClause?: (ctx: GroupByClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.groupByClause`.
	 * @param ctx the parse tree
	 */
	exitGroupByClause?: (ctx: GroupByClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.groupby_expression`.
	 * @param ctx the parse tree
	 */
	enterGroupby_expression?: (ctx: Groupby_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.groupby_expression`.
	 * @param ctx the parse tree
	 */
	exitGroupby_expression?: (ctx: Groupby_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.groupByEmpty`.
	 * @param ctx the parse tree
	 */
	enterGroupByEmpty?: (ctx: GroupByEmptyContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.groupByEmpty`.
	 * @param ctx the parse tree
	 */
	exitGroupByEmpty?: (ctx: GroupByEmptyContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.rollupStandard`.
	 * @param ctx the parse tree
	 */
	enterRollupStandard?: (ctx: RollupStandardContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.rollupStandard`.
	 * @param ctx the parse tree
	 */
	exitRollupStandard?: (ctx: RollupStandardContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.rollupOldSyntax`.
	 * @param ctx the parse tree
	 */
	enterRollupOldSyntax?: (ctx: RollupOldSyntaxContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.rollupOldSyntax`.
	 * @param ctx the parse tree
	 */
	exitRollupOldSyntax?: (ctx: RollupOldSyntaxContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.groupingSetExpression`.
	 * @param ctx the parse tree
	 */
	enterGroupingSetExpression?: (ctx: GroupingSetExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.groupingSetExpression`.
	 * @param ctx the parse tree
	 */
	exitGroupingSetExpression?: (ctx: GroupingSetExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.groupingSetExpressionMultiple`.
	 * @param ctx the parse tree
	 */
	enterGroupingSetExpressionMultiple?: (ctx: GroupingSetExpressionMultipleContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.groupingSetExpressionMultiple`.
	 * @param ctx the parse tree
	 */
	exitGroupingSetExpressionMultiple?: (ctx: GroupingSetExpressionMultipleContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.groupingExpressionSingle`.
	 * @param ctx the parse tree
	 */
	enterGroupingExpressionSingle?: (ctx: GroupingExpressionSingleContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.groupingExpressionSingle`.
	 * @param ctx the parse tree
	 */
	exitGroupingExpressionSingle?: (ctx: GroupingExpressionSingleContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.havingClause`.
	 * @param ctx the parse tree
	 */
	enterHavingClause?: (ctx: HavingClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.havingClause`.
	 * @param ctx the parse tree
	 */
	exitHavingClause?: (ctx: HavingClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.qualifyClause`.
	 * @param ctx the parse tree
	 */
	enterQualifyClause?: (ctx: QualifyClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.qualifyClause`.
	 * @param ctx the parse tree
	 */
	exitQualifyClause?: (ctx: QualifyClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.havingCondition`.
	 * @param ctx the parse tree
	 */
	enterHavingCondition?: (ctx: HavingConditionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.havingCondition`.
	 * @param ctx the parse tree
	 */
	exitHavingCondition?: (ctx: HavingConditionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.expressionsInParenthesis`.
	 * @param ctx the parse tree
	 */
	enterExpressionsInParenthesis?: (ctx: ExpressionsInParenthesisContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.expressionsInParenthesis`.
	 * @param ctx the parse tree
	 */
	exitExpressionsInParenthesis?: (ctx: ExpressionsInParenthesisContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.expressionsNotInParenthesis`.
	 * @param ctx the parse tree
	 */
	enterExpressionsNotInParenthesis?: (ctx: ExpressionsNotInParenthesisContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.expressionsNotInParenthesis`.
	 * @param ctx the parse tree
	 */
	exitExpressionsNotInParenthesis?: (ctx: ExpressionsNotInParenthesisContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.expressionPart`.
	 * @param ctx the parse tree
	 */
	enterExpressionPart?: (ctx: ExpressionPartContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.expressionPart`.
	 * @param ctx the parse tree
	 */
	exitExpressionPart?: (ctx: ExpressionPartContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.expressionOrDefault`.
	 * @param ctx the parse tree
	 */
	enterExpressionOrDefault?: (ctx: ExpressionOrDefaultContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.expressionOrDefault`.
	 * @param ctx the parse tree
	 */
	exitExpressionOrDefault?: (ctx: ExpressionOrDefaultContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.firstExpressionsWithAlias`.
	 * @param ctx the parse tree
	 */
	enterFirstExpressionsWithAlias?: (ctx: FirstExpressionsWithAliasContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.firstExpressionsWithAlias`.
	 * @param ctx the parse tree
	 */
	exitFirstExpressionsWithAlias?: (ctx: FirstExpressionsWithAliasContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.expressionWithAlias`.
	 * @param ctx the parse tree
	 */
	enterExpressionWithAlias?: (ctx: ExpressionWithAliasContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.expressionWithAlias`.
	 * @param ctx the parse tree
	 */
	exitExpressionWithAlias?: (ctx: ExpressionWithAliasContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.expressions`.
	 * @param ctx the parse tree
	 */
	enterExpressions?: (ctx: ExpressionsContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.expressions`.
	 * @param ctx the parse tree
	 */
	exitExpressions?: (ctx: ExpressionsContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.columnRefOrderInParenthesis`.
	 * @param ctx the parse tree
	 */
	enterColumnRefOrderInParenthesis?: (ctx: ColumnRefOrderInParenthesisContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.columnRefOrderInParenthesis`.
	 * @param ctx the parse tree
	 */
	exitColumnRefOrderInParenthesis?: (ctx: ColumnRefOrderInParenthesisContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.columnRefOrderNotInParenthesis`.
	 * @param ctx the parse tree
	 */
	enterColumnRefOrderNotInParenthesis?: (ctx: ColumnRefOrderNotInParenthesisContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.columnRefOrderNotInParenthesis`.
	 * @param ctx the parse tree
	 */
	exitColumnRefOrderNotInParenthesis?: (ctx: ColumnRefOrderNotInParenthesisContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.orderByClause`.
	 * @param ctx the parse tree
	 */
	enterOrderByClause?: (ctx: OrderByClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.orderByClause`.
	 * @param ctx the parse tree
	 */
	exitOrderByClause?: (ctx: OrderByClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.clusterByClause`.
	 * @param ctx the parse tree
	 */
	enterClusterByClause?: (ctx: ClusterByClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.clusterByClause`.
	 * @param ctx the parse tree
	 */
	exitClusterByClause?: (ctx: ClusterByClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.partitionByClause`.
	 * @param ctx the parse tree
	 */
	enterPartitionByClause?: (ctx: PartitionByClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.partitionByClause`.
	 * @param ctx the parse tree
	 */
	exitPartitionByClause?: (ctx: PartitionByClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.distributeByClause`.
	 * @param ctx the parse tree
	 */
	enterDistributeByClause?: (ctx: DistributeByClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.distributeByClause`.
	 * @param ctx the parse tree
	 */
	exitDistributeByClause?: (ctx: DistributeByClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.sortByClause`.
	 * @param ctx the parse tree
	 */
	enterSortByClause?: (ctx: SortByClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.sortByClause`.
	 * @param ctx the parse tree
	 */
	exitSortByClause?: (ctx: SortByClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.trimFunction`.
	 * @param ctx the parse tree
	 */
	enterTrimFunction?: (ctx: TrimFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.trimFunction`.
	 * @param ctx the parse tree
	 */
	exitTrimFunction?: (ctx: TrimFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.function_`.
	 * @param ctx the parse tree
	 */
	enterFunction_?: (ctx: Function_Context) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.function_`.
	 * @param ctx the parse tree
	 */
	exitFunction_?: (ctx: Function_Context) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.null_treatment`.
	 * @param ctx the parse tree
	 */
	enterNull_treatment?: (ctx: Null_treatmentContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.null_treatment`.
	 * @param ctx the parse tree
	 */
	exitNull_treatment?: (ctx: Null_treatmentContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.functionName`.
	 * @param ctx the parse tree
	 */
	enterFunctionName?: (ctx: FunctionNameContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.functionName`.
	 * @param ctx the parse tree
	 */
	exitFunctionName?: (ctx: FunctionNameContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.castExpression`.
	 * @param ctx the parse tree
	 */
	enterCastExpression?: (ctx: CastExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.castExpression`.
	 * @param ctx the parse tree
	 */
	exitCastExpression?: (ctx: CastExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.caseExpression`.
	 * @param ctx the parse tree
	 */
	enterCaseExpression?: (ctx: CaseExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.caseExpression`.
	 * @param ctx the parse tree
	 */
	exitCaseExpression?: (ctx: CaseExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.whenExpression`.
	 * @param ctx the parse tree
	 */
	enterWhenExpression?: (ctx: WhenExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.whenExpression`.
	 * @param ctx the parse tree
	 */
	exitWhenExpression?: (ctx: WhenExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.floorExpression`.
	 * @param ctx the parse tree
	 */
	enterFloorExpression?: (ctx: FloorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.floorExpression`.
	 * @param ctx the parse tree
	 */
	exitFloorExpression?: (ctx: FloorExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.floorDateQualifiers`.
	 * @param ctx the parse tree
	 */
	enterFloorDateQualifiers?: (ctx: FloorDateQualifiersContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.floorDateQualifiers`.
	 * @param ctx the parse tree
	 */
	exitFloorDateQualifiers?: (ctx: FloorDateQualifiersContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.extractExpression`.
	 * @param ctx the parse tree
	 */
	enterExtractExpression?: (ctx: ExtractExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.extractExpression`.
	 * @param ctx the parse tree
	 */
	exitExtractExpression?: (ctx: ExtractExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.timeQualifiers`.
	 * @param ctx the parse tree
	 */
	enterTimeQualifiers?: (ctx: TimeQualifiersContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.timeQualifiers`.
	 * @param ctx the parse tree
	 */
	exitTimeQualifiers?: (ctx: TimeQualifiersContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.prepareStmtParam`.
	 * @param ctx the parse tree
	 */
	enterPrepareStmtParam?: (ctx: PrepareStmtParamContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.prepareStmtParam`.
	 * @param ctx the parse tree
	 */
	exitPrepareStmtParam?: (ctx: PrepareStmtParamContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.parameterIdx`.
	 * @param ctx the parse tree
	 */
	enterParameterIdx?: (ctx: ParameterIdxContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.parameterIdx`.
	 * @param ctx the parse tree
	 */
	exitParameterIdx?: (ctx: ParameterIdxContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.stringLiteralSequence`.
	 * @param ctx the parse tree
	 */
	enterStringLiteralSequence?: (ctx: StringLiteralSequenceContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.stringLiteralSequence`.
	 * @param ctx the parse tree
	 */
	exitStringLiteralSequence?: (ctx: StringLiteralSequenceContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.charSetStringLiteral`.
	 * @param ctx the parse tree
	 */
	enterCharSetStringLiteral?: (ctx: CharSetStringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.charSetStringLiteral`.
	 * @param ctx the parse tree
	 */
	exitCharSetStringLiteral?: (ctx: CharSetStringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.dateLiteral`.
	 * @param ctx the parse tree
	 */
	enterDateLiteral?: (ctx: DateLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.dateLiteral`.
	 * @param ctx the parse tree
	 */
	exitDateLiteral?: (ctx: DateLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.timestampLiteral`.
	 * @param ctx the parse tree
	 */
	enterTimestampLiteral?: (ctx: TimestampLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.timestampLiteral`.
	 * @param ctx the parse tree
	 */
	exitTimestampLiteral?: (ctx: TimestampLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.timestampLocalTZLiteral`.
	 * @param ctx the parse tree
	 */
	enterTimestampLocalTZLiteral?: (ctx: TimestampLocalTZLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.timestampLocalTZLiteral`.
	 * @param ctx the parse tree
	 */
	exitTimestampLocalTZLiteral?: (ctx: TimestampLocalTZLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.intervalValue`.
	 * @param ctx the parse tree
	 */
	enterIntervalValue?: (ctx: IntervalValueContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.intervalValue`.
	 * @param ctx the parse tree
	 */
	exitIntervalValue?: (ctx: IntervalValueContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.intervalLiteral`.
	 * @param ctx the parse tree
	 */
	enterIntervalLiteral?: (ctx: IntervalLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.intervalLiteral`.
	 * @param ctx the parse tree
	 */
	exitIntervalLiteral?: (ctx: IntervalLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.intervalExpression`.
	 * @param ctx the parse tree
	 */
	enterIntervalExpression?: (ctx: IntervalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.intervalExpression`.
	 * @param ctx the parse tree
	 */
	exitIntervalExpression?: (ctx: IntervalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.intervalQualifiers`.
	 * @param ctx the parse tree
	 */
	enterIntervalQualifiers?: (ctx: IntervalQualifiersContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.intervalQualifiers`.
	 * @param ctx the parse tree
	 */
	exitIntervalQualifiers?: (ctx: IntervalQualifiersContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.atomExpression`.
	 * @param ctx the parse tree
	 */
	enterAtomExpression?: (ctx: AtomExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.atomExpression`.
	 * @param ctx the parse tree
	 */
	exitAtomExpression?: (ctx: AtomExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedenceFieldExpression`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceFieldExpression?: (ctx: PrecedenceFieldExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedenceFieldExpression`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceFieldExpression?: (ctx: PrecedenceFieldExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedenceUnaryOperator`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceUnaryOperator?: (ctx: PrecedenceUnaryOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedenceUnaryOperator`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceUnaryOperator?: (ctx: PrecedenceUnaryOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedenceUnaryPrefixExpression`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceUnaryPrefixExpression?: (ctx: PrecedenceUnaryPrefixExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedenceUnaryPrefixExpression`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceUnaryPrefixExpression?: (ctx: PrecedenceUnaryPrefixExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedenceBitwiseXorOperator`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceBitwiseXorOperator?: (ctx: PrecedenceBitwiseXorOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedenceBitwiseXorOperator`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceBitwiseXorOperator?: (ctx: PrecedenceBitwiseXorOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedenceBitwiseXorExpression`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceBitwiseXorExpression?: (ctx: PrecedenceBitwiseXorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedenceBitwiseXorExpression`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceBitwiseXorExpression?: (ctx: PrecedenceBitwiseXorExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedenceStarOperator`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceStarOperator?: (ctx: PrecedenceStarOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedenceStarOperator`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceStarOperator?: (ctx: PrecedenceStarOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedenceStarExpression`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceStarExpression?: (ctx: PrecedenceStarExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedenceStarExpression`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceStarExpression?: (ctx: PrecedenceStarExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedencePlusOperator`.
	 * @param ctx the parse tree
	 */
	enterPrecedencePlusOperator?: (ctx: PrecedencePlusOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedencePlusOperator`.
	 * @param ctx the parse tree
	 */
	exitPrecedencePlusOperator?: (ctx: PrecedencePlusOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedencePlusExpression`.
	 * @param ctx the parse tree
	 */
	enterPrecedencePlusExpression?: (ctx: PrecedencePlusExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedencePlusExpression`.
	 * @param ctx the parse tree
	 */
	exitPrecedencePlusExpression?: (ctx: PrecedencePlusExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedenceConcatenateOperator`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceConcatenateOperator?: (ctx: PrecedenceConcatenateOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedenceConcatenateOperator`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceConcatenateOperator?: (ctx: PrecedenceConcatenateOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedenceConcatenateExpression`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceConcatenateExpression?: (ctx: PrecedenceConcatenateExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedenceConcatenateExpression`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceConcatenateExpression?: (ctx: PrecedenceConcatenateExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedenceAmpersandOperator`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceAmpersandOperator?: (ctx: PrecedenceAmpersandOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedenceAmpersandOperator`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceAmpersandOperator?: (ctx: PrecedenceAmpersandOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedenceAmpersandExpression`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceAmpersandExpression?: (ctx: PrecedenceAmpersandExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedenceAmpersandExpression`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceAmpersandExpression?: (ctx: PrecedenceAmpersandExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedenceBitwiseOrOperator`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceBitwiseOrOperator?: (ctx: PrecedenceBitwiseOrOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedenceBitwiseOrOperator`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceBitwiseOrOperator?: (ctx: PrecedenceBitwiseOrOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedenceBitwiseOrExpression`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceBitwiseOrExpression?: (ctx: PrecedenceBitwiseOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedenceBitwiseOrExpression`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceBitwiseOrExpression?: (ctx: PrecedenceBitwiseOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedenceRegexpOperator`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceRegexpOperator?: (ctx: PrecedenceRegexpOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedenceRegexpOperator`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceRegexpOperator?: (ctx: PrecedenceRegexpOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedenceSimilarOperator`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceSimilarOperator?: (ctx: PrecedenceSimilarOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedenceSimilarOperator`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceSimilarOperator?: (ctx: PrecedenceSimilarOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.subQueryExpression`.
	 * @param ctx the parse tree
	 */
	enterSubQueryExpression?: (ctx: SubQueryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.subQueryExpression`.
	 * @param ctx the parse tree
	 */
	exitSubQueryExpression?: (ctx: SubQueryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedenceSimilarExpression`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceSimilarExpression?: (ctx: PrecedenceSimilarExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedenceSimilarExpression`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceSimilarExpression?: (ctx: PrecedenceSimilarExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedenceSimilarExpressionMain`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceSimilarExpressionMain?: (ctx: PrecedenceSimilarExpressionMainContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedenceSimilarExpressionMain`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceSimilarExpressionMain?: (ctx: PrecedenceSimilarExpressionMainContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedenceSimilarExpressionPart`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceSimilarExpressionPart?: (ctx: PrecedenceSimilarExpressionPartContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedenceSimilarExpressionPart`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceSimilarExpressionPart?: (ctx: PrecedenceSimilarExpressionPartContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedenceSimilarExpressionAtom`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceSimilarExpressionAtom?: (ctx: PrecedenceSimilarExpressionAtomContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedenceSimilarExpressionAtom`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceSimilarExpressionAtom?: (ctx: PrecedenceSimilarExpressionAtomContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedenceSimilarExpressionQuantifierPredicate`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceSimilarExpressionQuantifierPredicate?: (ctx: PrecedenceSimilarExpressionQuantifierPredicateContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedenceSimilarExpressionQuantifierPredicate`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceSimilarExpressionQuantifierPredicate?: (ctx: PrecedenceSimilarExpressionQuantifierPredicateContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.quantifierType`.
	 * @param ctx the parse tree
	 */
	enterQuantifierType?: (ctx: QuantifierTypeContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.quantifierType`.
	 * @param ctx the parse tree
	 */
	exitQuantifierType?: (ctx: QuantifierTypeContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedenceSimilarExpressionIn`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceSimilarExpressionIn?: (ctx: PrecedenceSimilarExpressionInContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedenceSimilarExpressionIn`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceSimilarExpressionIn?: (ctx: PrecedenceSimilarExpressionInContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedenceSimilarExpressionPartNot`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceSimilarExpressionPartNot?: (ctx: PrecedenceSimilarExpressionPartNotContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedenceSimilarExpressionPartNot`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceSimilarExpressionPartNot?: (ctx: PrecedenceSimilarExpressionPartNotContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedenceDistinctOperator`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceDistinctOperator?: (ctx: PrecedenceDistinctOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedenceDistinctOperator`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceDistinctOperator?: (ctx: PrecedenceDistinctOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedenceEqualOperator`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceEqualOperator?: (ctx: PrecedenceEqualOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedenceEqualOperator`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceEqualOperator?: (ctx: PrecedenceEqualOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedenceEqualExpression`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceEqualExpression?: (ctx: PrecedenceEqualExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedenceEqualExpression`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceEqualExpression?: (ctx: PrecedenceEqualExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.isCondition`.
	 * @param ctx the parse tree
	 */
	enterIsCondition?: (ctx: IsConditionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.isCondition`.
	 * @param ctx the parse tree
	 */
	exitIsCondition?: (ctx: IsConditionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedenceUnarySuffixExpression`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceUnarySuffixExpression?: (ctx: PrecedenceUnarySuffixExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedenceUnarySuffixExpression`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceUnarySuffixExpression?: (ctx: PrecedenceUnarySuffixExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedenceNotOperator`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceNotOperator?: (ctx: PrecedenceNotOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedenceNotOperator`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceNotOperator?: (ctx: PrecedenceNotOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedenceNotExpression`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceNotExpression?: (ctx: PrecedenceNotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedenceNotExpression`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceNotExpression?: (ctx: PrecedenceNotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedenceAndOperator`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceAndOperator?: (ctx: PrecedenceAndOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedenceAndOperator`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceAndOperator?: (ctx: PrecedenceAndOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedenceAndExpression`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceAndExpression?: (ctx: PrecedenceAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedenceAndExpression`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceAndExpression?: (ctx: PrecedenceAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedenceOrOperator`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceOrOperator?: (ctx: PrecedenceOrOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedenceOrOperator`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceOrOperator?: (ctx: PrecedenceOrOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.precedenceOrExpression`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceOrExpression?: (ctx: PrecedenceOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.precedenceOrExpression`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceOrExpression?: (ctx: PrecedenceOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.booleanValue`.
	 * @param ctx the parse tree
	 */
	enterBooleanValue?: (ctx: BooleanValueContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.booleanValue`.
	 * @param ctx the parse tree
	 */
	exitBooleanValue?: (ctx: BooleanValueContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.booleanValueTok`.
	 * @param ctx the parse tree
	 */
	enterBooleanValueTok?: (ctx: BooleanValueTokContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.booleanValueTok`.
	 * @param ctx the parse tree
	 */
	exitBooleanValueTok?: (ctx: BooleanValueTokContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.tableOrPartition`.
	 * @param ctx the parse tree
	 */
	enterTableOrPartition?: (ctx: TableOrPartitionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.tableOrPartition`.
	 * @param ctx the parse tree
	 */
	exitTableOrPartition?: (ctx: TableOrPartitionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.partitionSpec`.
	 * @param ctx the parse tree
	 */
	enterPartitionSpec?: (ctx: PartitionSpecContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.partitionSpec`.
	 * @param ctx the parse tree
	 */
	exitPartitionSpec?: (ctx: PartitionSpecContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.partitionVal`.
	 * @param ctx the parse tree
	 */
	enterPartitionVal?: (ctx: PartitionValContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.partitionVal`.
	 * @param ctx the parse tree
	 */
	exitPartitionVal?: (ctx: PartitionValContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.partitionSelectorSpec`.
	 * @param ctx the parse tree
	 */
	enterPartitionSelectorSpec?: (ctx: PartitionSelectorSpecContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.partitionSelectorSpec`.
	 * @param ctx the parse tree
	 */
	exitPartitionSelectorSpec?: (ctx: PartitionSelectorSpecContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.partitionSelectorVal`.
	 * @param ctx the parse tree
	 */
	enterPartitionSelectorVal?: (ctx: PartitionSelectorValContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.partitionSelectorVal`.
	 * @param ctx the parse tree
	 */
	exitPartitionSelectorVal?: (ctx: PartitionSelectorValContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.partitionSelectorOperator`.
	 * @param ctx the parse tree
	 */
	enterPartitionSelectorOperator?: (ctx: PartitionSelectorOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.partitionSelectorOperator`.
	 * @param ctx the parse tree
	 */
	exitPartitionSelectorOperator?: (ctx: PartitionSelectorOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.subQuerySelectorOperator`.
	 * @param ctx the parse tree
	 */
	enterSubQuerySelectorOperator?: (ctx: SubQuerySelectorOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.subQuerySelectorOperator`.
	 * @param ctx the parse tree
	 */
	exitSubQuerySelectorOperator?: (ctx: SubQuerySelectorOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.sysFuncNames`.
	 * @param ctx the parse tree
	 */
	enterSysFuncNames?: (ctx: SysFuncNamesContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.sysFuncNames`.
	 * @param ctx the parse tree
	 */
	exitSysFuncNames?: (ctx: SysFuncNamesContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.descFuncNames`.
	 * @param ctx the parse tree
	 */
	enterDescFuncNames?: (ctx: DescFuncNamesContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.descFuncNames`.
	 * @param ctx the parse tree
	 */
	exitDescFuncNames?: (ctx: DescFuncNamesContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.id_`.
	 * @param ctx the parse tree
	 */
	enterId_?: (ctx: Id_Context) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.id_`.
	 * @param ctx the parse tree
	 */
	exitId_?: (ctx: Id_Context) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.functionIdentifier`.
	 * @param ctx the parse tree
	 */
	enterFunctionIdentifier?: (ctx: FunctionIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.functionIdentifier`.
	 * @param ctx the parse tree
	 */
	exitFunctionIdentifier?: (ctx: FunctionIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.principalIdentifier`.
	 * @param ctx the parse tree
	 */
	enterPrincipalIdentifier?: (ctx: PrincipalIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.principalIdentifier`.
	 * @param ctx the parse tree
	 */
	exitPrincipalIdentifier?: (ctx: PrincipalIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.nonReserved`.
	 * @param ctx the parse tree
	 */
	enterNonReserved?: (ctx: NonReservedContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.nonReserved`.
	 * @param ctx the parse tree
	 */
	exitNonReserved?: (ctx: NonReservedContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.sql11ReservedKeywordsUsedAsFunctionName`.
	 * @param ctx the parse tree
	 */
	enterSql11ReservedKeywordsUsedAsFunctionName?: (ctx: Sql11ReservedKeywordsUsedAsFunctionNameContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.sql11ReservedKeywordsUsedAsFunctionName`.
	 * @param ctx the parse tree
	 */
	exitSql11ReservedKeywordsUsedAsFunctionName?: (ctx: Sql11ReservedKeywordsUsedAsFunctionNameContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.hint`.
	 * @param ctx the parse tree
	 */
	enterHint?: (ctx: HintContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.hint`.
	 * @param ctx the parse tree
	 */
	exitHint?: (ctx: HintContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.hintList`.
	 * @param ctx the parse tree
	 */
	enterHintList?: (ctx: HintListContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.hintList`.
	 * @param ctx the parse tree
	 */
	exitHintList?: (ctx: HintListContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.hintItem`.
	 * @param ctx the parse tree
	 */
	enterHintItem?: (ctx: HintItemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.hintItem`.
	 * @param ctx the parse tree
	 */
	exitHintItem?: (ctx: HintItemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.hintName`.
	 * @param ctx the parse tree
	 */
	enterHintName?: (ctx: HintNameContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.hintName`.
	 * @param ctx the parse tree
	 */
	exitHintName?: (ctx: HintNameContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.hintArgs`.
	 * @param ctx the parse tree
	 */
	enterHintArgs?: (ctx: HintArgsContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.hintArgs`.
	 * @param ctx the parse tree
	 */
	exitHintArgs?: (ctx: HintArgsContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.hintArgName`.
	 * @param ctx the parse tree
	 */
	enterHintArgName?: (ctx: HintArgNameContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.hintArgName`.
	 * @param ctx the parse tree
	 */
	exitHintArgName?: (ctx: HintArgNameContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.prepareStatement`.
	 * @param ctx the parse tree
	 */
	enterPrepareStatement?: (ctx: PrepareStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.prepareStatement`.
	 * @param ctx the parse tree
	 */
	exitPrepareStatement?: (ctx: PrepareStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.executeStatement`.
	 * @param ctx the parse tree
	 */
	enterExecuteStatement?: (ctx: ExecuteStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.executeStatement`.
	 * @param ctx the parse tree
	 */
	exitExecuteStatement?: (ctx: ExecuteStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.executeParamList`.
	 * @param ctx the parse tree
	 */
	enterExecuteParamList?: (ctx: ExecuteParamListContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.executeParamList`.
	 * @param ctx the parse tree
	 */
	exitExecuteParamList?: (ctx: ExecuteParamListContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.resourcePlanDdlStatements`.
	 * @param ctx the parse tree
	 */
	enterResourcePlanDdlStatements?: (ctx: ResourcePlanDdlStatementsContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.resourcePlanDdlStatements`.
	 * @param ctx the parse tree
	 */
	exitResourcePlanDdlStatements?: (ctx: ResourcePlanDdlStatementsContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.rpAssign`.
	 * @param ctx the parse tree
	 */
	enterRpAssign?: (ctx: RpAssignContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.rpAssign`.
	 * @param ctx the parse tree
	 */
	exitRpAssign?: (ctx: RpAssignContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.rpAssignList`.
	 * @param ctx the parse tree
	 */
	enterRpAssignList?: (ctx: RpAssignListContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.rpAssignList`.
	 * @param ctx the parse tree
	 */
	exitRpAssignList?: (ctx: RpAssignListContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.rpUnassign`.
	 * @param ctx the parse tree
	 */
	enterRpUnassign?: (ctx: RpUnassignContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.rpUnassign`.
	 * @param ctx the parse tree
	 */
	exitRpUnassign?: (ctx: RpUnassignContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.rpUnassignList`.
	 * @param ctx the parse tree
	 */
	enterRpUnassignList?: (ctx: RpUnassignListContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.rpUnassignList`.
	 * @param ctx the parse tree
	 */
	exitRpUnassignList?: (ctx: RpUnassignListContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.createResourcePlanStatement`.
	 * @param ctx the parse tree
	 */
	enterCreateResourcePlanStatement?: (ctx: CreateResourcePlanStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.createResourcePlanStatement`.
	 * @param ctx the parse tree
	 */
	exitCreateResourcePlanStatement?: (ctx: CreateResourcePlanStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.withReplace`.
	 * @param ctx the parse tree
	 */
	enterWithReplace?: (ctx: WithReplaceContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.withReplace`.
	 * @param ctx the parse tree
	 */
	exitWithReplace?: (ctx: WithReplaceContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.activate`.
	 * @param ctx the parse tree
	 */
	enterActivate?: (ctx: ActivateContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.activate`.
	 * @param ctx the parse tree
	 */
	exitActivate?: (ctx: ActivateContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.enable`.
	 * @param ctx the parse tree
	 */
	enterEnable?: (ctx: EnableContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.enable`.
	 * @param ctx the parse tree
	 */
	exitEnable?: (ctx: EnableContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.disable`.
	 * @param ctx the parse tree
	 */
	enterDisable?: (ctx: DisableContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.disable`.
	 * @param ctx the parse tree
	 */
	exitDisable?: (ctx: DisableContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.unmanaged`.
	 * @param ctx the parse tree
	 */
	enterUnmanaged?: (ctx: UnmanagedContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.unmanaged`.
	 * @param ctx the parse tree
	 */
	exitUnmanaged?: (ctx: UnmanagedContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterResourcePlanStatement`.
	 * @param ctx the parse tree
	 */
	enterAlterResourcePlanStatement?: (ctx: AlterResourcePlanStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterResourcePlanStatement`.
	 * @param ctx the parse tree
	 */
	exitAlterResourcePlanStatement?: (ctx: AlterResourcePlanStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.globalWmStatement`.
	 * @param ctx the parse tree
	 */
	enterGlobalWmStatement?: (ctx: GlobalWmStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.globalWmStatement`.
	 * @param ctx the parse tree
	 */
	exitGlobalWmStatement?: (ctx: GlobalWmStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.replaceResourcePlanStatement`.
	 * @param ctx the parse tree
	 */
	enterReplaceResourcePlanStatement?: (ctx: ReplaceResourcePlanStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.replaceResourcePlanStatement`.
	 * @param ctx the parse tree
	 */
	exitReplaceResourcePlanStatement?: (ctx: ReplaceResourcePlanStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.dropResourcePlanStatement`.
	 * @param ctx the parse tree
	 */
	enterDropResourcePlanStatement?: (ctx: DropResourcePlanStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.dropResourcePlanStatement`.
	 * @param ctx the parse tree
	 */
	exitDropResourcePlanStatement?: (ctx: DropResourcePlanStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.poolPath`.
	 * @param ctx the parse tree
	 */
	enterPoolPath?: (ctx: PoolPathContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.poolPath`.
	 * @param ctx the parse tree
	 */
	exitPoolPath?: (ctx: PoolPathContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.triggerExpression`.
	 * @param ctx the parse tree
	 */
	enterTriggerExpression?: (ctx: TriggerExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.triggerExpression`.
	 * @param ctx the parse tree
	 */
	exitTriggerExpression?: (ctx: TriggerExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.triggerExpressionStandalone`.
	 * @param ctx the parse tree
	 */
	enterTriggerExpressionStandalone?: (ctx: TriggerExpressionStandaloneContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.triggerExpressionStandalone`.
	 * @param ctx the parse tree
	 */
	exitTriggerExpressionStandalone?: (ctx: TriggerExpressionStandaloneContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.triggerOrExpression`.
	 * @param ctx the parse tree
	 */
	enterTriggerOrExpression?: (ctx: TriggerOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.triggerOrExpression`.
	 * @param ctx the parse tree
	 */
	exitTriggerOrExpression?: (ctx: TriggerOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.triggerAndExpression`.
	 * @param ctx the parse tree
	 */
	enterTriggerAndExpression?: (ctx: TriggerAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.triggerAndExpression`.
	 * @param ctx the parse tree
	 */
	exitTriggerAndExpression?: (ctx: TriggerAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.triggerAtomExpression`.
	 * @param ctx the parse tree
	 */
	enterTriggerAtomExpression?: (ctx: TriggerAtomExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.triggerAtomExpression`.
	 * @param ctx the parse tree
	 */
	exitTriggerAtomExpression?: (ctx: TriggerAtomExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.triggerLiteral`.
	 * @param ctx the parse tree
	 */
	enterTriggerLiteral?: (ctx: TriggerLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.triggerLiteral`.
	 * @param ctx the parse tree
	 */
	exitTriggerLiteral?: (ctx: TriggerLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.comparisionOperator`.
	 * @param ctx the parse tree
	 */
	enterComparisionOperator?: (ctx: ComparisionOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.comparisionOperator`.
	 * @param ctx the parse tree
	 */
	exitComparisionOperator?: (ctx: ComparisionOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.triggerActionExpression`.
	 * @param ctx the parse tree
	 */
	enterTriggerActionExpression?: (ctx: TriggerActionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.triggerActionExpression`.
	 * @param ctx the parse tree
	 */
	exitTriggerActionExpression?: (ctx: TriggerActionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.triggerActionExpressionStandalone`.
	 * @param ctx the parse tree
	 */
	enterTriggerActionExpressionStandalone?: (ctx: TriggerActionExpressionStandaloneContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.triggerActionExpressionStandalone`.
	 * @param ctx the parse tree
	 */
	exitTriggerActionExpressionStandalone?: (ctx: TriggerActionExpressionStandaloneContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.createTriggerStatement`.
	 * @param ctx the parse tree
	 */
	enterCreateTriggerStatement?: (ctx: CreateTriggerStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.createTriggerStatement`.
	 * @param ctx the parse tree
	 */
	exitCreateTriggerStatement?: (ctx: CreateTriggerStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterTriggerStatement`.
	 * @param ctx the parse tree
	 */
	enterAlterTriggerStatement?: (ctx: AlterTriggerStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterTriggerStatement`.
	 * @param ctx the parse tree
	 */
	exitAlterTriggerStatement?: (ctx: AlterTriggerStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.dropTriggerStatement`.
	 * @param ctx the parse tree
	 */
	enterDropTriggerStatement?: (ctx: DropTriggerStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.dropTriggerStatement`.
	 * @param ctx the parse tree
	 */
	exitDropTriggerStatement?: (ctx: DropTriggerStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.poolAssign`.
	 * @param ctx the parse tree
	 */
	enterPoolAssign?: (ctx: PoolAssignContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.poolAssign`.
	 * @param ctx the parse tree
	 */
	exitPoolAssign?: (ctx: PoolAssignContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.poolAssignList`.
	 * @param ctx the parse tree
	 */
	enterPoolAssignList?: (ctx: PoolAssignListContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.poolAssignList`.
	 * @param ctx the parse tree
	 */
	exitPoolAssignList?: (ctx: PoolAssignListContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.createPoolStatement`.
	 * @param ctx the parse tree
	 */
	enterCreatePoolStatement?: (ctx: CreatePoolStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.createPoolStatement`.
	 * @param ctx the parse tree
	 */
	exitCreatePoolStatement?: (ctx: CreatePoolStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterPoolStatement`.
	 * @param ctx the parse tree
	 */
	enterAlterPoolStatement?: (ctx: AlterPoolStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterPoolStatement`.
	 * @param ctx the parse tree
	 */
	exitAlterPoolStatement?: (ctx: AlterPoolStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.dropPoolStatement`.
	 * @param ctx the parse tree
	 */
	enterDropPoolStatement?: (ctx: DropPoolStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.dropPoolStatement`.
	 * @param ctx the parse tree
	 */
	exitDropPoolStatement?: (ctx: DropPoolStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.createMappingStatement`.
	 * @param ctx the parse tree
	 */
	enterCreateMappingStatement?: (ctx: CreateMappingStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.createMappingStatement`.
	 * @param ctx the parse tree
	 */
	exitCreateMappingStatement?: (ctx: CreateMappingStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alterMappingStatement`.
	 * @param ctx the parse tree
	 */
	enterAlterMappingStatement?: (ctx: AlterMappingStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alterMappingStatement`.
	 * @param ctx the parse tree
	 */
	exitAlterMappingStatement?: (ctx: AlterMappingStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.dropMappingStatement`.
	 * @param ctx the parse tree
	 */
	enterDropMappingStatement?: (ctx: DropMappingStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.dropMappingStatement`.
	 * @param ctx the parse tree
	 */
	exitDropMappingStatement?: (ctx: DropMappingStatementContext) => void;
}

