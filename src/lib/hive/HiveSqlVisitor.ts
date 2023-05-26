// Generated from /Users/ziv/github.com/dt-sql-parser/src/grammar/hive/HiveSql.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `HiveSql`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface HiveSqlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `HiveSql.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.explainStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplainStatement?: (ctx: ExplainStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.explainOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplainOption?: (ctx: ExplainOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.vectorizationOnly`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVectorizationOnly?: (ctx: VectorizationOnlyContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.vectorizatonDetail`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVectorizatonDetail?: (ctx: VectorizatonDetailContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.execStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecStatement?: (ctx: ExecStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.loadStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoadStatement?: (ctx: LoadStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.replicationClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplicationClause?: (ctx: ReplicationClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.exportStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExportStatement?: (ctx: ExportStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.importStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportStatement?: (ctx: ImportStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.replDumpStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplDumpStatement?: (ctx: ReplDumpStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.replDbPolicy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplDbPolicy?: (ctx: ReplDbPolicyContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.replLoadStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplLoadStatement?: (ctx: ReplLoadStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.replConfigs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplConfigs?: (ctx: ReplConfigsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.replConfigsList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplConfigsList?: (ctx: ReplConfigsListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.replTableLevelPolicy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplTableLevelPolicy?: (ctx: ReplTableLevelPolicyContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.replStatusStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplStatusStatement?: (ctx: ReplStatusStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.ddlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDdlStatement?: (ctx: DdlStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.ifExists`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfExists?: (ctx: IfExistsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.restrictOrCascade`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRestrictOrCascade?: (ctx: RestrictOrCascadeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.ifNotExists`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfNotExists?: (ctx: IfNotExistsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.force`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForce?: (ctx: ForceContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.rewriteEnabled`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRewriteEnabled?: (ctx: RewriteEnabledContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.rewriteDisabled`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRewriteDisabled?: (ctx: RewriteDisabledContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.storedAsDirs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStoredAsDirs?: (ctx: StoredAsDirsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.orReplace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrReplace?: (ctx: OrReplaceContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.createDatabaseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateDatabaseStatement?: (ctx: CreateDatabaseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.dbLocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDbLocation?: (ctx: DbLocationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.dbManagedLocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDbManagedLocation?: (ctx: DbManagedLocationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.dbProperties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDbProperties?: (ctx: DbPropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.dbPropertiesList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDbPropertiesList?: (ctx: DbPropertiesListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.dbConnectorName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDbConnectorName?: (ctx: DbConnectorNameContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.switchDatabaseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchDatabaseStatement?: (ctx: SwitchDatabaseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.dropDatabaseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropDatabaseStatement?: (ctx: DropDatabaseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.databaseComment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatabaseComment?: (ctx: DatabaseCommentContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.truncateTableStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTruncateTableStatement?: (ctx: TruncateTableStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.dropTableStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropTableStatement?: (ctx: DropTableStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.inputFileFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputFileFormat?: (ctx: InputFileFormatContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.tabTypeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTabTypeExpr?: (ctx: TabTypeExprContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.partTypeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartTypeExpr?: (ctx: PartTypeExprContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.tabPartColTypeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTabPartColTypeExpr?: (ctx: TabPartColTypeExprContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.descStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescStatement?: (ctx: DescStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.analyzeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnalyzeStatement?: (ctx: AnalyzeStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.from_in`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrom_in?: (ctx: From_inContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.db_schema`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDb_schema?: (ctx: Db_schemaContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.showStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowStatement?: (ctx: ShowStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.showTablesFilterExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowTablesFilterExpr?: (ctx: ShowTablesFilterExprContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.lockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLockStatement?: (ctx: LockStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.lockDatabase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLockDatabase?: (ctx: LockDatabaseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.lockMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLockMode?: (ctx: LockModeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.unlockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnlockStatement?: (ctx: UnlockStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.unlockDatabase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnlockDatabase?: (ctx: UnlockDatabaseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.createRoleStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateRoleStatement?: (ctx: CreateRoleStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.dropRoleStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropRoleStatement?: (ctx: DropRoleStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.grantPrivileges`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrantPrivileges?: (ctx: GrantPrivilegesContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.revokePrivileges`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRevokePrivileges?: (ctx: RevokePrivilegesContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.grantRole`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrantRole?: (ctx: GrantRoleContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.revokeRole`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRevokeRole?: (ctx: RevokeRoleContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.showRoleGrants`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowRoleGrants?: (ctx: ShowRoleGrantsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.showRoles`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowRoles?: (ctx: ShowRolesContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.showCurrentRole`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCurrentRole?: (ctx: ShowCurrentRoleContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.setRole`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetRole?: (ctx: SetRoleContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.showGrants`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowGrants?: (ctx: ShowGrantsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.showRolePrincipals`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowRolePrincipals?: (ctx: ShowRolePrincipalsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.privilegeIncludeColObject`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivilegeIncludeColObject?: (ctx: PrivilegeIncludeColObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.privilegeObject`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivilegeObject?: (ctx: PrivilegeObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.privObject`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivObject?: (ctx: PrivObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.privObjectCols`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivObjectCols?: (ctx: PrivObjectColsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.privilegeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivilegeList?: (ctx: PrivilegeListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.privlegeDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivlegeDef?: (ctx: PrivlegeDefContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.privilegeType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivilegeType?: (ctx: PrivilegeTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.principalSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrincipalSpecification?: (ctx: PrincipalSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.principalName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrincipalName?: (ctx: PrincipalNameContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.withGrantOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithGrantOption?: (ctx: WithGrantOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.grantOptionFor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrantOptionFor?: (ctx: GrantOptionForContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.adminOptionFor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdminOptionFor?: (ctx: AdminOptionForContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.withAdminOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithAdminOption?: (ctx: WithAdminOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.metastoreCheck`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMetastoreCheck?: (ctx: MetastoreCheckContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.resourceList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResourceList?: (ctx: ResourceListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.resource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResource?: (ctx: ResourceContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.resourceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResourceType?: (ctx: ResourceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.createFunctionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateFunctionStatement?: (ctx: CreateFunctionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.dropFunctionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropFunctionStatement?: (ctx: DropFunctionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.reloadFunctionsStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReloadFunctionsStatement?: (ctx: ReloadFunctionsStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.createMacroStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateMacroStatement?: (ctx: CreateMacroStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.dropMacroStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropMacroStatement?: (ctx: DropMacroStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.createViewStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateViewStatement?: (ctx: CreateViewStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.viewPartition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewPartition?: (ctx: ViewPartitionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.viewOrganization`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewOrganization?: (ctx: ViewOrganizationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.viewClusterSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewClusterSpec?: (ctx: ViewClusterSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.viewComplexSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewComplexSpec?: (ctx: ViewComplexSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.viewDistSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewDistSpec?: (ctx: ViewDistSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.viewSortSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewSortSpec?: (ctx: ViewSortSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.dropViewStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropViewStatement?: (ctx: DropViewStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.createMaterializedViewStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateMaterializedViewStatement?: (ctx: CreateMaterializedViewStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.dropMaterializedViewStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropMaterializedViewStatement?: (ctx: DropMaterializedViewStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.createScheduledQueryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateScheduledQueryStatement?: (ctx: CreateScheduledQueryStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.dropScheduledQueryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropScheduledQueryStatement?: (ctx: DropScheduledQueryStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterScheduledQueryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterScheduledQueryStatement?: (ctx: AlterScheduledQueryStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterScheduledQueryChange`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterScheduledQueryChange?: (ctx: AlterScheduledQueryChangeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.scheduleSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScheduleSpec?: (ctx: ScheduleSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.executedAsSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecutedAsSpec?: (ctx: ExecutedAsSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.definedAsSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinedAsSpec?: (ctx: DefinedAsSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.showFunctionIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowFunctionIdentifier?: (ctx: ShowFunctionIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.showStmtIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowStmtIdentifier?: (ctx: ShowStmtIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.tableComment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableComment?: (ctx: TableCommentContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.createTablePartitionSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTablePartitionSpec?: (ctx: CreateTablePartitionSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.createTablePartitionColumnTypeSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTablePartitionColumnTypeSpec?: (ctx: CreateTablePartitionColumnTypeSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.createTablePartitionColumnSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTablePartitionColumnSpec?: (ctx: CreateTablePartitionColumnSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.partitionTransformSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionTransformSpec?: (ctx: PartitionTransformSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.columnNameTransformConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameTransformConstraint?: (ctx: ColumnNameTransformConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.partitionTransformType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionTransformType?: (ctx: PartitionTransformTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.tableBuckets`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableBuckets?: (ctx: TableBucketsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.tableImplBuckets`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableImplBuckets?: (ctx: TableImplBucketsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.tableSkewed`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableSkewed?: (ctx: TableSkewedContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.rowFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowFormat?: (ctx: RowFormatContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.recordReader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordReader?: (ctx: RecordReaderContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.recordWriter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordWriter?: (ctx: RecordWriterContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.rowFormatSerde`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowFormatSerde?: (ctx: RowFormatSerdeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.rowFormatDelimited`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowFormatDelimited?: (ctx: RowFormatDelimitedContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.tableRowFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableRowFormat?: (ctx: TableRowFormatContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.tablePropertiesPrefixed`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePropertiesPrefixed?: (ctx: TablePropertiesPrefixedContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.tableProperties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableProperties?: (ctx: TablePropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.tablePropertiesList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePropertiesList?: (ctx: TablePropertiesListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.keyValueProperty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyValueProperty?: (ctx: KeyValuePropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.keyProperty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyProperty?: (ctx: KeyPropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.tableRowFormatFieldIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableRowFormatFieldIdentifier?: (ctx: TableRowFormatFieldIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.tableRowFormatCollItemsIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableRowFormatCollItemsIdentifier?: (ctx: TableRowFormatCollItemsIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.tableRowFormatMapKeysIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableRowFormatMapKeysIdentifier?: (ctx: TableRowFormatMapKeysIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.tableRowFormatLinesIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableRowFormatLinesIdentifier?: (ctx: TableRowFormatLinesIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.tableRowNullFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableRowNullFormat?: (ctx: TableRowNullFormatContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.tableFileFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableFileFormat?: (ctx: TableFileFormatContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.tableLocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableLocation?: (ctx: TableLocationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.columnNameTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameTypeList?: (ctx: ColumnNameTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.columnNameTypeOrConstraintList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameTypeOrConstraintList?: (ctx: ColumnNameTypeOrConstraintListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.columnNameColonTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameColonTypeList?: (ctx: ColumnNameColonTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.columnNameList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameList?: (ctx: ColumnNameListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.columnName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnName?: (ctx: ColumnNameContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.extColumnName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtColumnName?: (ctx: ExtColumnNameContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.columnNameOrderList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameOrderList?: (ctx: ColumnNameOrderListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.columnParenthesesList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnParenthesesList?: (ctx: ColumnParenthesesListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.enableValidateSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnableValidateSpecification?: (ctx: EnableValidateSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.enableSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnableSpecification?: (ctx: EnableSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.validateSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValidateSpecification?: (ctx: ValidateSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.enforcedSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnforcedSpecification?: (ctx: EnforcedSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.relySpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelySpecification?: (ctx: RelySpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.createConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateConstraint?: (ctx: CreateConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterConstraintWithName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterConstraintWithName?: (ctx: AlterConstraintWithNameContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.tableLevelConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableLevelConstraint?: (ctx: TableLevelConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.pkUkConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPkUkConstraint?: (ctx: PkUkConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.checkConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCheckConstraint?: (ctx: CheckConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.createForeignKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateForeignKey?: (ctx: CreateForeignKeyContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterForeignKeyWithName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterForeignKeyWithName?: (ctx: AlterForeignKeyWithNameContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.skewedValueElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkewedValueElement?: (ctx: SkewedValueElementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.skewedColumnValuePairList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkewedColumnValuePairList?: (ctx: SkewedColumnValuePairListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.skewedColumnValuePair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkewedColumnValuePair?: (ctx: SkewedColumnValuePairContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.skewedColumnValues`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkewedColumnValues?: (ctx: SkewedColumnValuesContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.skewedColumnValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkewedColumnValue?: (ctx: SkewedColumnValueContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.skewedValueLocationElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkewedValueLocationElement?: (ctx: SkewedValueLocationElementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.orderSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderSpecification?: (ctx: OrderSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.nullOrdering`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullOrdering?: (ctx: NullOrderingContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.columnNameOrder`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameOrder?: (ctx: ColumnNameOrderContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.columnNameCommentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameCommentList?: (ctx: ColumnNameCommentListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.columnNameComment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameComment?: (ctx: ColumnNameCommentContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.orderSpecificationRewrite`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderSpecificationRewrite?: (ctx: OrderSpecificationRewriteContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.columnRefOrder`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnRefOrder?: (ctx: ColumnRefOrderContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.columnNameType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameType?: (ctx: ColumnNameTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.columnNameTypeOrConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameTypeOrConstraint?: (ctx: ColumnNameTypeOrConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.tableConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableConstraint?: (ctx: TableConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.columnNameTypeConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameTypeConstraint?: (ctx: ColumnNameTypeConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.columnConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnConstraint?: (ctx: ColumnConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.foreignKeyConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForeignKeyConstraint?: (ctx: ForeignKeyConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.colConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColConstraint?: (ctx: ColConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterColumnConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterColumnConstraint?: (ctx: AlterColumnConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterForeignKeyConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterForeignKeyConstraint?: (ctx: AlterForeignKeyConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterColConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterColConstraint?: (ctx: AlterColConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.columnConstraintType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnConstraintType?: (ctx: ColumnConstraintTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.defaultVal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultVal?: (ctx: DefaultValContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.tableConstraintType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableConstraintType?: (ctx: TableConstraintTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.constraintOptsCreate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraintOptsCreate?: (ctx: ConstraintOptsCreateContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.constraintOptsAlter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraintOptsAlter?: (ctx: ConstraintOptsAlterContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.columnNameColonType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameColonType?: (ctx: ColumnNameColonTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.colType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColType?: (ctx: ColTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.colTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColTypeList?: (ctx: ColTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.primitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.listType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListType?: (ctx: ListTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.structType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructType?: (ctx: StructTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.mapType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapType?: (ctx: MapTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.unionType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionType?: (ctx: UnionTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.setOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetOperator?: (ctx: SetOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.queryStatementExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryStatementExpression?: (ctx: QueryStatementExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.queryStatementExpressionBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryStatementExpressionBody?: (ctx: QueryStatementExpressionBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.withClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithClause?: (ctx: WithClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.cteStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCteStatement?: (ctx: CteStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.fromStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromStatement?: (ctx: FromStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.singleFromStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleFromStatement?: (ctx: SingleFromStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.regularBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegularBody?: (ctx: RegularBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.atomSelectStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomSelectStatement?: (ctx: AtomSelectStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.selectStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectStatement?: (ctx: SelectStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.setOpSelectStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetOpSelectStatement?: (ctx: SetOpSelectStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.selectStatementWithCTE`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectStatementWithCTE?: (ctx: SelectStatementWithCTEContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBody?: (ctx: BodyContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.insertClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertClause?: (ctx: InsertClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.destination`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDestination?: (ctx: DestinationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.limitClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLimitClause?: (ctx: LimitClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.deleteStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeleteStatement?: (ctx: DeleteStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.columnAssignmentClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnAssignmentClause?: (ctx: ColumnAssignmentClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedencePlusExpressionOrDefault`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedencePlusExpressionOrDefault?: (ctx: PrecedencePlusExpressionOrDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.setColumnsClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetColumnsClause?: (ctx: SetColumnsClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.updateStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdateStatement?: (ctx: UpdateStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.sqlTransactionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlTransactionStatement?: (ctx: SqlTransactionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.startTransactionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStartTransactionStatement?: (ctx: StartTransactionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.transactionMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransactionMode?: (ctx: TransactionModeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.transactionAccessMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransactionAccessMode?: (ctx: TransactionAccessModeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.isolationLevel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsolationLevel?: (ctx: IsolationLevelContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.levelOfIsolation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLevelOfIsolation?: (ctx: LevelOfIsolationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.commitStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommitStatement?: (ctx: CommitStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.rollbackStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRollbackStatement?: (ctx: RollbackStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.setAutoCommitStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetAutoCommitStatement?: (ctx: SetAutoCommitStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.abortTransactionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbortTransactionStatement?: (ctx: AbortTransactionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.abortCompactionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbortCompactionStatement?: (ctx: AbortCompactionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.mergeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMergeStatement?: (ctx: MergeStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.whenClauses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenClauses?: (ctx: WhenClausesContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.whenNotMatchedClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenNotMatchedClause?: (ctx: WhenNotMatchedClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.whenMatchedAndClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenMatchedAndClause?: (ctx: WhenMatchedAndClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.whenMatchedThenClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenMatchedThenClause?: (ctx: WhenMatchedThenClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.updateOrDelete`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdateOrDelete?: (ctx: UpdateOrDeleteContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.killQueryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKillQueryStatement?: (ctx: KillQueryStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.compactionId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompactionId?: (ctx: CompactionIdContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.compactionPool`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompactionPool?: (ctx: CompactionPoolContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.compactionType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompactionType?: (ctx: CompactionTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.compactionStatus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompactionStatus?: (ctx: CompactionStatusContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatement?: (ctx: AlterStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterTableStatementSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTableStatementSuffix?: (ctx: AlterTableStatementSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterTblPartitionStatementSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTblPartitionStatementSuffix?: (ctx: AlterTblPartitionStatementSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterStatementPartitionKeyType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementPartitionKeyType?: (ctx: AlterStatementPartitionKeyTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterViewStatementSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterViewStatementSuffix?: (ctx: AlterViewStatementSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterMaterializedViewStatementSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterMaterializedViewStatementSuffix?: (ctx: AlterMaterializedViewStatementSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterMaterializedViewSuffixRewrite`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterMaterializedViewSuffixRewrite?: (ctx: AlterMaterializedViewSuffixRewriteContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterMaterializedViewSuffixRebuild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterMaterializedViewSuffixRebuild?: (ctx: AlterMaterializedViewSuffixRebuildContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterDatabaseStatementSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterDatabaseStatementSuffix?: (ctx: AlterDatabaseStatementSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterDatabaseSuffixProperties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterDatabaseSuffixProperties?: (ctx: AlterDatabaseSuffixPropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterDatabaseSuffixSetOwner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterDatabaseSuffixSetOwner?: (ctx: AlterDatabaseSuffixSetOwnerContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterDatabaseSuffixSetLocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterDatabaseSuffixSetLocation?: (ctx: AlterDatabaseSuffixSetLocationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterDatabaseSuffixSetManagedLocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterDatabaseSuffixSetManagedLocation?: (ctx: AlterDatabaseSuffixSetManagedLocationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterStatementSuffixRename`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixRename?: (ctx: AlterStatementSuffixRenameContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterStatementSuffixAddCol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixAddCol?: (ctx: AlterStatementSuffixAddColContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterStatementSuffixAddConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixAddConstraint?: (ctx: AlterStatementSuffixAddConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterStatementSuffixUpdateColumns`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixUpdateColumns?: (ctx: AlterStatementSuffixUpdateColumnsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterStatementSuffixDropConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixDropConstraint?: (ctx: AlterStatementSuffixDropConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterStatementSuffixRenameCol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixRenameCol?: (ctx: AlterStatementSuffixRenameColContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterStatementSuffixUpdateStatsCol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixUpdateStatsCol?: (ctx: AlterStatementSuffixUpdateStatsColContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterStatementSuffixUpdateStats`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixUpdateStats?: (ctx: AlterStatementSuffixUpdateStatsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterStatementChangeColPosition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementChangeColPosition?: (ctx: AlterStatementChangeColPositionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterStatementSuffixAddPartitions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixAddPartitions?: (ctx: AlterStatementSuffixAddPartitionsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterStatementSuffixAddPartitionsElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixAddPartitionsElement?: (ctx: AlterStatementSuffixAddPartitionsElementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterStatementSuffixTouch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixTouch?: (ctx: AlterStatementSuffixTouchContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterStatementSuffixArchive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixArchive?: (ctx: AlterStatementSuffixArchiveContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterStatementSuffixUnArchive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixUnArchive?: (ctx: AlterStatementSuffixUnArchiveContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.partitionLocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionLocation?: (ctx: PartitionLocationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterStatementSuffixDropPartitions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixDropPartitions?: (ctx: AlterStatementSuffixDropPartitionsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterStatementSuffixProperties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixProperties?: (ctx: AlterStatementSuffixPropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterViewSuffixProperties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterViewSuffixProperties?: (ctx: AlterViewSuffixPropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterStatementSuffixSerdeProperties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixSerdeProperties?: (ctx: AlterStatementSuffixSerdePropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.tablePartitionPrefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePartitionPrefix?: (ctx: TablePartitionPrefixContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterStatementSuffixFileFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixFileFormat?: (ctx: AlterStatementSuffixFileFormatContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterStatementSuffixClusterbySortby`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixClusterbySortby?: (ctx: AlterStatementSuffixClusterbySortbyContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterTblPartitionStatementSuffixSkewedLocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTblPartitionStatementSuffixSkewedLocation?: (ctx: AlterTblPartitionStatementSuffixSkewedLocationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.skewedLocations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkewedLocations?: (ctx: SkewedLocationsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.skewedLocationsList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkewedLocationsList?: (ctx: SkewedLocationsListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.skewedLocationMap`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkewedLocationMap?: (ctx: SkewedLocationMapContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterStatementSuffixLocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixLocation?: (ctx: AlterStatementSuffixLocationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterStatementSuffixSkewedby`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixSkewedby?: (ctx: AlterStatementSuffixSkewedbyContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterStatementSuffixExchangePartition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixExchangePartition?: (ctx: AlterStatementSuffixExchangePartitionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterStatementSuffixRenamePart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixRenamePart?: (ctx: AlterStatementSuffixRenamePartContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterStatementSuffixStatsPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixStatsPart?: (ctx: AlterStatementSuffixStatsPartContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterStatementSuffixMergeFiles`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixMergeFiles?: (ctx: AlterStatementSuffixMergeFilesContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterStatementSuffixBucketNum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixBucketNum?: (ctx: AlterStatementSuffixBucketNumContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.blocking`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlocking?: (ctx: BlockingContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.compactPool`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompactPool?: (ctx: CompactPoolContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterStatementSuffixCompact`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixCompact?: (ctx: AlterStatementSuffixCompactContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterStatementSuffixSetOwner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixSetOwner?: (ctx: AlterStatementSuffixSetOwnerContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterStatementSuffixSetPartSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixSetPartSpec?: (ctx: AlterStatementSuffixSetPartSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterStatementSuffixExecute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixExecute?: (ctx: AlterStatementSuffixExecuteContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.fileFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFileFormat?: (ctx: FileFormatContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterDataConnectorStatementSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterDataConnectorStatementSuffix?: (ctx: AlterDataConnectorStatementSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterDataConnectorSuffixProperties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterDataConnectorSuffixProperties?: (ctx: AlterDataConnectorSuffixPropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterDataConnectorSuffixSetOwner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterDataConnectorSuffixSetOwner?: (ctx: AlterDataConnectorSuffixSetOwnerContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterDataConnectorSuffixSetUrl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterDataConnectorSuffixSetUrl?: (ctx: AlterDataConnectorSuffixSetUrlContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.likeTableOrFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLikeTableOrFile?: (ctx: LikeTableOrFileContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.createTableStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTableStatement?: (ctx: CreateTableStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.createDataConnectorStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateDataConnectorStatement?: (ctx: CreateDataConnectorStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.dataConnectorComment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataConnectorComment?: (ctx: DataConnectorCommentContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.dataConnectorUrl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataConnectorUrl?: (ctx: DataConnectorUrlContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.dataConnectorType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataConnectorType?: (ctx: DataConnectorTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.dcProperties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDcProperties?: (ctx: DcPropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.dropDataConnectorStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropDataConnectorStatement?: (ctx: DropDataConnectorStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.tableAllColumns`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableAllColumns?: (ctx: TableAllColumnsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.tableOrColumn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOrColumn?: (ctx: TableOrColumnContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.defaultValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultValue?: (ctx: DefaultValueContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.aliasList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAliasList?: (ctx: AliasListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.fromClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromClause?: (ctx: FromClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.fromSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromSource?: (ctx: FromSourceContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.atomjoinSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomjoinSource?: (ctx: AtomjoinSourceContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.joinSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinSource?: (ctx: JoinSourceContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.joinSourcePart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinSourcePart?: (ctx: JoinSourcePartContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.uniqueJoinSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUniqueJoinSource?: (ctx: UniqueJoinSourceContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.uniqueJoinExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUniqueJoinExpr?: (ctx: UniqueJoinExprContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.uniqueJoinToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUniqueJoinToken?: (ctx: UniqueJoinTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.joinToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinToken?: (ctx: JoinTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.lateralView`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLateralView?: (ctx: LateralViewContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.tableAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableAlias?: (ctx: TableAliasContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.tableBucketSample`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableBucketSample?: (ctx: TableBucketSampleContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.splitSample`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSplitSample?: (ctx: SplitSampleContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.tableSample`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableSample?: (ctx: TableSampleContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.tableSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableSource?: (ctx: TableSourceContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.asOfClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAsOfClause?: (ctx: AsOfClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.uniqueJoinTableSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUniqueJoinTableSource?: (ctx: UniqueJoinTableSourceContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.tableName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableName?: (ctx: TableNameContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.viewName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewName?: (ctx: ViewNameContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.subQuerySource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubQuerySource?: (ctx: SubQuerySourceContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.partitioningSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitioningSpec?: (ctx: PartitioningSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.partitionTableFunctionSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionTableFunctionSource?: (ctx: PartitionTableFunctionSourceContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.partitionedTableFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionedTableFunction?: (ctx: PartitionedTableFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.whereClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhereClause?: (ctx: WhereClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.searchCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearchCondition?: (ctx: SearchConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.valuesSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValuesSource?: (ctx: ValuesSourceContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.valuesClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValuesClause?: (ctx: ValuesClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.valuesTableConstructor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValuesTableConstructor?: (ctx: ValuesTableConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.valueRowConstructor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueRowConstructor?: (ctx: ValueRowConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.firstValueRowConstructor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFirstValueRowConstructor?: (ctx: FirstValueRowConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.virtualTableSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVirtualTableSource?: (ctx: VirtualTableSourceContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.selectClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectClause?: (ctx: SelectClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.all_distinct`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAll_distinct?: (ctx: All_distinctContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.selectList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectList?: (ctx: SelectListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.selectTrfmClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectTrfmClause?: (ctx: SelectTrfmClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.selectItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectItem?: (ctx: SelectItemContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.trfmClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrfmClause?: (ctx: TrfmClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.selectExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectExpression?: (ctx: SelectExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.selectExpressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectExpressionList?: (ctx: SelectExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.window_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindow_clause?: (ctx: Window_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.window_defn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindow_defn?: (ctx: Window_defnContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.window_specification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindow_specification?: (ctx: Window_specificationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.window_frame`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindow_frame?: (ctx: Window_frameContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.window_range_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindow_range_expression?: (ctx: Window_range_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.window_value_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindow_value_expression?: (ctx: Window_value_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.window_frame_start_boundary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindow_frame_start_boundary?: (ctx: Window_frame_start_boundaryContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.window_frame_boundary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindow_frame_boundary?: (ctx: Window_frame_boundaryContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.groupByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupByClause?: (ctx: GroupByClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.groupby_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupby_expression?: (ctx: Groupby_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.groupByEmpty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupByEmpty?: (ctx: GroupByEmptyContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.rollupStandard`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRollupStandard?: (ctx: RollupStandardContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.rollupOldSyntax`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRollupOldSyntax?: (ctx: RollupOldSyntaxContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.groupingSetExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingSetExpression?: (ctx: GroupingSetExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.groupingSetExpressionMultiple`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingSetExpressionMultiple?: (ctx: GroupingSetExpressionMultipleContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.groupingExpressionSingle`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingExpressionSingle?: (ctx: GroupingExpressionSingleContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.havingClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHavingClause?: (ctx: HavingClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.qualifyClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifyClause?: (ctx: QualifyClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.havingCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHavingCondition?: (ctx: HavingConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.expressionsInParenthesis`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionsInParenthesis?: (ctx: ExpressionsInParenthesisContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.expressionsNotInParenthesis`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionsNotInParenthesis?: (ctx: ExpressionsNotInParenthesisContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.expressionPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionPart?: (ctx: ExpressionPartContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.expressionOrDefault`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionOrDefault?: (ctx: ExpressionOrDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.firstExpressionsWithAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFirstExpressionsWithAlias?: (ctx: FirstExpressionsWithAliasContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.expressionWithAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionWithAlias?: (ctx: ExpressionWithAliasContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.expressions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressions?: (ctx: ExpressionsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.columnRefOrderInParenthesis`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnRefOrderInParenthesis?: (ctx: ColumnRefOrderInParenthesisContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.columnRefOrderNotInParenthesis`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnRefOrderNotInParenthesis?: (ctx: ColumnRefOrderNotInParenthesisContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.orderByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderByClause?: (ctx: OrderByClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.clusterByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClusterByClause?: (ctx: ClusterByClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.partitionByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionByClause?: (ctx: PartitionByClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.distributeByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDistributeByClause?: (ctx: DistributeByClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.sortByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSortByClause?: (ctx: SortByClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.trimFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrimFunction?: (ctx: TrimFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.function_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_?: (ctx: Function_Context) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.null_treatment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNull_treatment?: (ctx: Null_treatmentContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.functionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionName?: (ctx: FunctionNameContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.castExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastExpression?: (ctx: CastExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.caseExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseExpression?: (ctx: CaseExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.whenExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenExpression?: (ctx: WhenExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.floorExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloorExpression?: (ctx: FloorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.floorDateQualifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloorDateQualifiers?: (ctx: FloorDateQualifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.extractExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtractExpression?: (ctx: ExtractExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.timeQualifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeQualifiers?: (ctx: TimeQualifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.prepareStmtParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrepareStmtParam?: (ctx: PrepareStmtParamContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.parameterIdx`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterIdx?: (ctx: ParameterIdxContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.stringLiteralSequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteralSequence?: (ctx: StringLiteralSequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.charSetStringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharSetStringLiteral?: (ctx: CharSetStringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.dateLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateLiteral?: (ctx: DateLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.timestampLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimestampLiteral?: (ctx: TimestampLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.timestampLocalTZLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimestampLocalTZLiteral?: (ctx: TimestampLocalTZLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.intervalValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalValue?: (ctx: IntervalValueContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.intervalLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalLiteral?: (ctx: IntervalLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.intervalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalExpression?: (ctx: IntervalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.intervalQualifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalQualifiers?: (ctx: IntervalQualifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.atomExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomExpression?: (ctx: AtomExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedenceFieldExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceFieldExpression?: (ctx: PrecedenceFieldExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedenceUnaryOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceUnaryOperator?: (ctx: PrecedenceUnaryOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedenceUnaryPrefixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceUnaryPrefixExpression?: (ctx: PrecedenceUnaryPrefixExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedenceBitwiseXorOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceBitwiseXorOperator?: (ctx: PrecedenceBitwiseXorOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedenceBitwiseXorExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceBitwiseXorExpression?: (ctx: PrecedenceBitwiseXorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedenceStarOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceStarOperator?: (ctx: PrecedenceStarOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedenceStarExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceStarExpression?: (ctx: PrecedenceStarExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedencePlusOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedencePlusOperator?: (ctx: PrecedencePlusOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedencePlusExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedencePlusExpression?: (ctx: PrecedencePlusExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedenceConcatenateOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceConcatenateOperator?: (ctx: PrecedenceConcatenateOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedenceConcatenateExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceConcatenateExpression?: (ctx: PrecedenceConcatenateExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedenceAmpersandOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceAmpersandOperator?: (ctx: PrecedenceAmpersandOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedenceAmpersandExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceAmpersandExpression?: (ctx: PrecedenceAmpersandExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedenceBitwiseOrOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceBitwiseOrOperator?: (ctx: PrecedenceBitwiseOrOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedenceBitwiseOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceBitwiseOrExpression?: (ctx: PrecedenceBitwiseOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedenceRegexpOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceRegexpOperator?: (ctx: PrecedenceRegexpOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedenceSimilarOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceSimilarOperator?: (ctx: PrecedenceSimilarOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.subQueryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubQueryExpression?: (ctx: SubQueryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedenceSimilarExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceSimilarExpression?: (ctx: PrecedenceSimilarExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedenceSimilarExpressionMain`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceSimilarExpressionMain?: (ctx: PrecedenceSimilarExpressionMainContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedenceSimilarExpressionPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceSimilarExpressionPart?: (ctx: PrecedenceSimilarExpressionPartContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedenceSimilarExpressionAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceSimilarExpressionAtom?: (ctx: PrecedenceSimilarExpressionAtomContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedenceSimilarExpressionQuantifierPredicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceSimilarExpressionQuantifierPredicate?: (ctx: PrecedenceSimilarExpressionQuantifierPredicateContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.quantifierType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantifierType?: (ctx: QuantifierTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedenceSimilarExpressionIn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceSimilarExpressionIn?: (ctx: PrecedenceSimilarExpressionInContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedenceSimilarExpressionPartNot`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceSimilarExpressionPartNot?: (ctx: PrecedenceSimilarExpressionPartNotContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedenceDistinctOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceDistinctOperator?: (ctx: PrecedenceDistinctOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedenceEqualOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceEqualOperator?: (ctx: PrecedenceEqualOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedenceEqualExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceEqualExpression?: (ctx: PrecedenceEqualExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.isCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsCondition?: (ctx: IsConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedenceUnarySuffixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceUnarySuffixExpression?: (ctx: PrecedenceUnarySuffixExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedenceNotOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceNotOperator?: (ctx: PrecedenceNotOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedenceNotExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceNotExpression?: (ctx: PrecedenceNotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedenceAndOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceAndOperator?: (ctx: PrecedenceAndOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedenceAndExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceAndExpression?: (ctx: PrecedenceAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedenceOrOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceOrOperator?: (ctx: PrecedenceOrOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.precedenceOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceOrExpression?: (ctx: PrecedenceOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.booleanValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanValue?: (ctx: BooleanValueContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.booleanValueTok`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanValueTok?: (ctx: BooleanValueTokContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.tableOrPartition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOrPartition?: (ctx: TableOrPartitionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.partitionSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionSpec?: (ctx: PartitionSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.partitionVal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionVal?: (ctx: PartitionValContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.partitionSelectorSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionSelectorSpec?: (ctx: PartitionSelectorSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.partitionSelectorVal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionSelectorVal?: (ctx: PartitionSelectorValContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.partitionSelectorOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionSelectorOperator?: (ctx: PartitionSelectorOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.subQuerySelectorOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubQuerySelectorOperator?: (ctx: SubQuerySelectorOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.sysFuncNames`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSysFuncNames?: (ctx: SysFuncNamesContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.descFuncNames`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescFuncNames?: (ctx: DescFuncNamesContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.id_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId_?: (ctx: Id_Context) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.functionIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionIdentifier?: (ctx: FunctionIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.principalIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrincipalIdentifier?: (ctx: PrincipalIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.nonReserved`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonReserved?: (ctx: NonReservedContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.sql11ReservedKeywordsUsedAsFunctionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSql11ReservedKeywordsUsedAsFunctionName?: (ctx: Sql11ReservedKeywordsUsedAsFunctionNameContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.hint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHint?: (ctx: HintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.hintList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHintList?: (ctx: HintListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.hintItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHintItem?: (ctx: HintItemContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.hintName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHintName?: (ctx: HintNameContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.hintArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHintArgs?: (ctx: HintArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.hintArgName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHintArgName?: (ctx: HintArgNameContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.prepareStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrepareStatement?: (ctx: PrepareStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.executeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecuteStatement?: (ctx: ExecuteStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.executeParamList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecuteParamList?: (ctx: ExecuteParamListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.resourcePlanDdlStatements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResourcePlanDdlStatements?: (ctx: ResourcePlanDdlStatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.rpAssign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRpAssign?: (ctx: RpAssignContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.rpAssignList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRpAssignList?: (ctx: RpAssignListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.rpUnassign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRpUnassign?: (ctx: RpUnassignContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.rpUnassignList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRpUnassignList?: (ctx: RpUnassignListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.createResourcePlanStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateResourcePlanStatement?: (ctx: CreateResourcePlanStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.withReplace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithReplace?: (ctx: WithReplaceContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.activate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivate?: (ctx: ActivateContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.enable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnable?: (ctx: EnableContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.disable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisable?: (ctx: DisableContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.unmanaged`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnmanaged?: (ctx: UnmanagedContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterResourcePlanStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterResourcePlanStatement?: (ctx: AlterResourcePlanStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.globalWmStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalWmStatement?: (ctx: GlobalWmStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.replaceResourcePlanStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplaceResourcePlanStatement?: (ctx: ReplaceResourcePlanStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.dropResourcePlanStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropResourcePlanStatement?: (ctx: DropResourcePlanStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.poolPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPoolPath?: (ctx: PoolPathContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.triggerExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerExpression?: (ctx: TriggerExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.triggerExpressionStandalone`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerExpressionStandalone?: (ctx: TriggerExpressionStandaloneContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.triggerOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerOrExpression?: (ctx: TriggerOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.triggerAndExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerAndExpression?: (ctx: TriggerAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.triggerAtomExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerAtomExpression?: (ctx: TriggerAtomExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.triggerLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerLiteral?: (ctx: TriggerLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.comparisionOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisionOperator?: (ctx: ComparisionOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.triggerActionExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerActionExpression?: (ctx: TriggerActionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.triggerActionExpressionStandalone`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerActionExpressionStandalone?: (ctx: TriggerActionExpressionStandaloneContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.createTriggerStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTriggerStatement?: (ctx: CreateTriggerStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterTriggerStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTriggerStatement?: (ctx: AlterTriggerStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.dropTriggerStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropTriggerStatement?: (ctx: DropTriggerStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.poolAssign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPoolAssign?: (ctx: PoolAssignContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.poolAssignList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPoolAssignList?: (ctx: PoolAssignListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.createPoolStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreatePoolStatement?: (ctx: CreatePoolStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterPoolStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterPoolStatement?: (ctx: AlterPoolStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.dropPoolStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropPoolStatement?: (ctx: DropPoolStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.createMappingStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateMappingStatement?: (ctx: CreateMappingStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.alterMappingStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterMappingStatement?: (ctx: AlterMappingStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSql.dropMappingStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropMappingStatement?: (ctx: DropMappingStatementContext) => Result;
}

