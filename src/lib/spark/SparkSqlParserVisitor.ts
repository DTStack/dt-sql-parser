// Generated from dt-sql-parser/src/grammar/spark/SparkSqlParser.g4 by ANTLR 4.13.1

// @ts-nocheck

import { AbstractParseTreeVisitor } from "antlr4ng";


import { SQLParserBase } from '../SQLParserBase';


import { ProgramContext } from "./SparkSqlParser.js";
import { SingleStatementContext } from "./SparkSqlParser.js";
import { StatementDefaultContext } from "./SparkSqlParser.js";
import { DmlStatementContext } from "./SparkSqlParser.js";
import { UseNamespaceContext } from "./SparkSqlParser.js";
import { SetCatalogContext } from "./SparkSqlParser.js";
import { CreateNamespaceContext } from "./SparkSqlParser.js";
import { SetNamespacePropertiesContext } from "./SparkSqlParser.js";
import { SetNamespaceLocationContext } from "./SparkSqlParser.js";
import { DropNamespaceContext } from "./SparkSqlParser.js";
import { ShowNamespacesContext } from "./SparkSqlParser.js";
import { CreateTableContext } from "./SparkSqlParser.js";
import { CreateTableLikeContext } from "./SparkSqlParser.js";
import { ReplaceTableContext } from "./SparkSqlParser.js";
import { AnalyzeContext } from "./SparkSqlParser.js";
import { AnalyzeTablesContext } from "./SparkSqlParser.js";
import { AlterTableAddColumnContext } from "./SparkSqlParser.js";
import { AlterTableAddColumnsContext } from "./SparkSqlParser.js";
import { RenameTableColumnContext } from "./SparkSqlParser.js";
import { AlterTableDropColumnContext } from "./SparkSqlParser.js";
import { DropTableColumnsContext } from "./SparkSqlParser.js";
import { RenameTableContext } from "./SparkSqlParser.js";
import { SetTablePropertiesContext } from "./SparkSqlParser.js";
import { UnsetTablePropertiesContext } from "./SparkSqlParser.js";
import { AlterTableAlterColumnContext } from "./SparkSqlParser.js";
import { HiveChangeColumnContext } from "./SparkSqlParser.js";
import { HiveReplaceColumnsContext } from "./SparkSqlParser.js";
import { SetTableSerDeContext } from "./SparkSqlParser.js";
import { SetTableSerDePropertiesContext } from "./SparkSqlParser.js";
import { AddTablePartitionContext } from "./SparkSqlParser.js";
import { RenameTablePartitionContext } from "./SparkSqlParser.js";
import { DropTablePartitionsContext } from "./SparkSqlParser.js";
import { SetTableLocationContext } from "./SparkSqlParser.js";
import { RecoverPartitionsContext } from "./SparkSqlParser.js";
import { AlterMaterializedViewRewriteContext } from "./SparkSqlParser.js";
import { AlterMaterializedViewPropertiesContext } from "./SparkSqlParser.js";
import { DropTableContext } from "./SparkSqlParser.js";
import { DropViewContext } from "./SparkSqlParser.js";
import { DropMaterializedViewContext } from "./SparkSqlParser.js";
import { CreateViewContext } from "./SparkSqlParser.js";
import { CreateTempViewUsingContext } from "./SparkSqlParser.js";
import { AlterViewQueryContext } from "./SparkSqlParser.js";
import { CreateFunctionContext } from "./SparkSqlParser.js";
import { CreateMaterializedViewContext } from "./SparkSqlParser.js";
import { DropFunctionContext } from "./SparkSqlParser.js";
import { DeclareVariableContext } from "./SparkSqlParser.js";
import { DropVariableContext } from "./SparkSqlParser.js";
import { ExplainStatementContext } from "./SparkSqlParser.js";
import { ShowTablesContext } from "./SparkSqlParser.js";
import { ShowTableExtendedContext } from "./SparkSqlParser.js";
import { ShowTblPropertiesContext } from "./SparkSqlParser.js";
import { ShowColumnsContext } from "./SparkSqlParser.js";
import { ShowViewsContext } from "./SparkSqlParser.js";
import { ShowPartitionsContext } from "./SparkSqlParser.js";
import { ShowFunctionsContext } from "./SparkSqlParser.js";
import { ShowCreateTableContext } from "./SparkSqlParser.js";
import { ShowCurrentNamespaceContext } from "./SparkSqlParser.js";
import { ShowCatalogsContext } from "./SparkSqlParser.js";
import { ShowMaterializedViewsContext } from "./SparkSqlParser.js";
import { ShowCreateMaterializedViewContext } from "./SparkSqlParser.js";
import { DescribeFunctionContext } from "./SparkSqlParser.js";
import { DescribeNamespaceContext } from "./SparkSqlParser.js";
import { DescribeRelationContext } from "./SparkSqlParser.js";
import { DescribeQueryContext } from "./SparkSqlParser.js";
import { CommentTableContext } from "./SparkSqlParser.js";
import { RefreshTableContext } from "./SparkSqlParser.js";
import { RefreshFunctionContext } from "./SparkSqlParser.js";
import { RefreshResourceContext } from "./SparkSqlParser.js";
import { RefreshMaterializedViewContext } from "./SparkSqlParser.js";
import { CacheTableContext } from "./SparkSqlParser.js";
import { UnCacheTableContext } from "./SparkSqlParser.js";
import { ClearCacheContext } from "./SparkSqlParser.js";
import { LoadDataContext } from "./SparkSqlParser.js";
import { TruncateTableContext } from "./SparkSqlParser.js";
import { RepairTableContext } from "./SparkSqlParser.js";
import { ManageResourceContext } from "./SparkSqlParser.js";
import { FailNativeCommandContext } from "./SparkSqlParser.js";
import { SetTimeZoneIntervalContext } from "./SparkSqlParser.js";
import { SetTimeZoneContext } from "./SparkSqlParser.js";
import { SetTimeZoneAnyContext } from "./SparkSqlParser.js";
import { SetVariableAssignmentContext } from "./SparkSqlParser.js";
import { SetVariableMultiAssignmentContext } from "./SparkSqlParser.js";
import { SetConfigContext } from "./SparkSqlParser.js";
import { SetConfigAndValueContext } from "./SparkSqlParser.js";
import { SetConfigAnyKeyContext } from "./SparkSqlParser.js";
import { SetAnyContext } from "./SparkSqlParser.js";
import { ResetConfigContext } from "./SparkSqlParser.js";
import { ResetAnyContext } from "./SparkSqlParser.js";
import { CreateIndexContext } from "./SparkSqlParser.js";
import { DropIndexContext } from "./SparkSqlParser.js";
import { OptimizeTableContext } from "./SparkSqlParser.js";
import { UnsupportHiveCommandsContext } from "./SparkSqlParser.js";
import { UnsupportedHiveNativeCommandsContext } from "./SparkSqlParser.js";
import { BucketSpecContext } from "./SparkSqlParser.js";
import { SkewSpecContext } from "./SparkSqlParser.js";
import { QueryStatementContext } from "./SparkSqlParser.js";
import { InsertIntoContext } from "./SparkSqlParser.js";
import { PartitionSpecLocationContext } from "./SparkSqlParser.js";
import { PartitionSpecContext } from "./SparkSqlParser.js";
import { PartitionValContext } from "./SparkSqlParser.js";
import { NamespaceContext } from "./SparkSqlParser.js";
import { DescribeFuncNameContext } from "./SparkSqlParser.js";
import { DescribeColNameContext } from "./SparkSqlParser.js";
import { CtesContext } from "./SparkSqlParser.js";
import { NamedQueryContext } from "./SparkSqlParser.js";
import { TableProviderContext } from "./SparkSqlParser.js";
import { CreateTableClausesContext } from "./SparkSqlParser.js";
import { TableLifecycleContext } from "./SparkSqlParser.js";
import { PropertyListContext } from "./SparkSqlParser.js";
import { PropertyContext } from "./SparkSqlParser.js";
import { PropertyKeyContext } from "./SparkSqlParser.js";
import { PropertyValueContext } from "./SparkSqlParser.js";
import { ExpressionPropertyListContext } from "./SparkSqlParser.js";
import { ExpressionPropertyContext } from "./SparkSqlParser.js";
import { ConstantListContext } from "./SparkSqlParser.js";
import { NestedConstantListContext } from "./SparkSqlParser.js";
import { CreateFileFormatContext } from "./SparkSqlParser.js";
import { FileFormatContext } from "./SparkSqlParser.js";
import { StorageHandlerContext } from "./SparkSqlParser.js";
import { InsertFromQueryContext } from "./SparkSqlParser.js";
import { MultipleInsertContext } from "./SparkSqlParser.js";
import { DeleteFromTableContext } from "./SparkSqlParser.js";
import { UpdateTableContext } from "./SparkSqlParser.js";
import { MergeIntoTableContext } from "./SparkSqlParser.js";
import { NamespaceNameContext } from "./SparkSqlParser.js";
import { NamespaceNameCreateContext } from "./SparkSqlParser.js";
import { TableNameCreateContext } from "./SparkSqlParser.js";
import { TableNameContext } from "./SparkSqlParser.js";
import { ViewNameCreateContext } from "./SparkSqlParser.js";
import { ViewNameContext } from "./SparkSqlParser.js";
import { ColumnNameContext } from "./SparkSqlParser.js";
import { ColumnNamePathContext } from "./SparkSqlParser.js";
import { ColumnNameSeqContext } from "./SparkSqlParser.js";
import { ColumnNameCreateContext } from "./SparkSqlParser.js";
import { IdentifierReferenceContext } from "./SparkSqlParser.js";
import { QueryOrganizationContext } from "./SparkSqlParser.js";
import { LimitClauseContext } from "./SparkSqlParser.js";
import { OrderOrSortByClauseContext } from "./SparkSqlParser.js";
import { ClusterOrDistributeByContext } from "./SparkSqlParser.js";
import { QueryTermContext } from "./SparkSqlParser.js";
import { QueryPrimaryContext } from "./SparkSqlParser.js";
import { SortItemContext } from "./SparkSqlParser.js";
import { FromStatementBodyContext } from "./SparkSqlParser.js";
import { QuerySpecificationContext } from "./SparkSqlParser.js";
import { TransformClauseContext } from "./SparkSqlParser.js";
import { SelectClauseContext } from "./SparkSqlParser.js";
import { SetClauseContext } from "./SparkSqlParser.js";
import { MatchedClauseContext } from "./SparkSqlParser.js";
import { NotMatchedClauseContext } from "./SparkSqlParser.js";
import { NotMatchedBySourceClauseContext } from "./SparkSqlParser.js";
import { NotMatchedActionContext } from "./SparkSqlParser.js";
import { AssignmentListContext } from "./SparkSqlParser.js";
import { AssignmentContext } from "./SparkSqlParser.js";
import { WhereClauseContext } from "./SparkSqlParser.js";
import { HavingClauseContext } from "./SparkSqlParser.js";
import { HintContext } from "./SparkSqlParser.js";
import { HintStatementContext } from "./SparkSqlParser.js";
import { FromClauseContext } from "./SparkSqlParser.js";
import { TemporalClauseContext } from "./SparkSqlParser.js";
import { AggregationClauseContext } from "./SparkSqlParser.js";
import { GroupByClauseContext } from "./SparkSqlParser.js";
import { GroupingAnalyticsContext } from "./SparkSqlParser.js";
import { GroupingSetContext } from "./SparkSqlParser.js";
import { PivotClauseContext } from "./SparkSqlParser.js";
import { PivotColumnContext } from "./SparkSqlParser.js";
import { PivotValueContext } from "./SparkSqlParser.js";
import { UnpivotClauseContext } from "./SparkSqlParser.js";
import { UnpivotSingleValueColumnClauseContext } from "./SparkSqlParser.js";
import { UnpivotMultiValueColumnClauseContext } from "./SparkSqlParser.js";
import { UnpivotColumnSetContext } from "./SparkSqlParser.js";
import { UnpivotColumnAndAliasContext } from "./SparkSqlParser.js";
import { IfNotExistsContext } from "./SparkSqlParser.js";
import { IfExistsContext } from "./SparkSqlParser.js";
import { LateralViewContext } from "./SparkSqlParser.js";
import { SetQuantifierContext } from "./SparkSqlParser.js";
import { RelationContext } from "./SparkSqlParser.js";
import { JoinRelationContext } from "./SparkSqlParser.js";
import { JoinTypeContext } from "./SparkSqlParser.js";
import { JoinCriteriaContext } from "./SparkSqlParser.js";
import { SampleContext } from "./SparkSqlParser.js";
import { SampleMethodContext } from "./SparkSqlParser.js";
import { IdentifierListContext } from "./SparkSqlParser.js";
import { IdentifierSeqContext } from "./SparkSqlParser.js";
import { OrderedIdentifierListContext } from "./SparkSqlParser.js";
import { OrderedIdentifierContext } from "./SparkSqlParser.js";
import { IdentifierCommentListContext } from "./SparkSqlParser.js";
import { IdentifierCommentContext } from "./SparkSqlParser.js";
import { RelationPrimaryContext } from "./SparkSqlParser.js";
import { FunctionTableSubqueryArgumentContext } from "./SparkSqlParser.js";
import { TableArgumentPartitioningContext } from "./SparkSqlParser.js";
import { FunctionTableNamedArgumentExpressionContext } from "./SparkSqlParser.js";
import { FunctionTableReferenceArgumentContext } from "./SparkSqlParser.js";
import { FunctionTableArgumentContext } from "./SparkSqlParser.js";
import { TableAliasContext } from "./SparkSqlParser.js";
import { RowFormatContext } from "./SparkSqlParser.js";
import { MultipartIdentifierListContext } from "./SparkSqlParser.js";
import { MultipartIdentifierContext } from "./SparkSqlParser.js";
import { MultipartIdentifierPropertyListContext } from "./SparkSqlParser.js";
import { MultipartIdentifierPropertyContext } from "./SparkSqlParser.js";
import { TableIdentifierContext } from "./SparkSqlParser.js";
import { ViewIdentifierContext } from "./SparkSqlParser.js";
import { NamedExpressionContext } from "./SparkSqlParser.js";
import { NamedExpressionSeqContext } from "./SparkSqlParser.js";
import { PartitionFieldListContext } from "./SparkSqlParser.js";
import { PartitionFieldContext } from "./SparkSqlParser.js";
import { TransformContext } from "./SparkSqlParser.js";
import { TransformArgumentContext } from "./SparkSqlParser.js";
import { ExpressionContext } from "./SparkSqlParser.js";
import { NamedArgumentExpressionContext } from "./SparkSqlParser.js";
import { FunctionArgumentContext } from "./SparkSqlParser.js";
import { ExpressionSeqContext } from "./SparkSqlParser.js";
import { BooleanExpressionContext } from "./SparkSqlParser.js";
import { PredicateContext } from "./SparkSqlParser.js";
import { ValueExpressionContext } from "./SparkSqlParser.js";
import { DatetimeUnitContext } from "./SparkSqlParser.js";
import { PrimaryExpressionContext } from "./SparkSqlParser.js";
import { LiteralTypeContext } from "./SparkSqlParser.js";
import { ConstantContext } from "./SparkSqlParser.js";
import { ComparisonOperatorContext } from "./SparkSqlParser.js";
import { ArithmeticOperatorContext } from "./SparkSqlParser.js";
import { PredicateOperatorContext } from "./SparkSqlParser.js";
import { BooleanValueContext } from "./SparkSqlParser.js";
import { IntervalContext } from "./SparkSqlParser.js";
import { ErrorCapturingMultiUnitsIntervalContext } from "./SparkSqlParser.js";
import { MultiUnitsIntervalContext } from "./SparkSqlParser.js";
import { ErrorCapturingUnitToUnitIntervalContext } from "./SparkSqlParser.js";
import { UnitToUnitIntervalContext } from "./SparkSqlParser.js";
import { IntervalValueContext } from "./SparkSqlParser.js";
import { UnitInMultiUnitsContext } from "./SparkSqlParser.js";
import { UnitInUnitToUnitContext } from "./SparkSqlParser.js";
import { ColPositionContext } from "./SparkSqlParser.js";
import { TypeContext } from "./SparkSqlParser.js";
import { DataTypeContext } from "./SparkSqlParser.js";
import { QualifiedColTypeWithPositionSeqForAddContext } from "./SparkSqlParser.js";
import { QualifiedColTypeWithPositionForAddContext } from "./SparkSqlParser.js";
import { QualifiedColTypeWithPositionSeqForReplaceContext } from "./SparkSqlParser.js";
import { QualifiedColTypeWithPositionForReplaceContext } from "./SparkSqlParser.js";
import { ColDefinitionDescriptorWithPositionContext } from "./SparkSqlParser.js";
import { VariableDefaultExpressionContext } from "./SparkSqlParser.js";
import { ColTypeListContext } from "./SparkSqlParser.js";
import { ColumnTypeContext } from "./SparkSqlParser.js";
import { CreateOrReplaceTableColTypeListContext } from "./SparkSqlParser.js";
import { CreateOrReplaceTableColTypeContext } from "./SparkSqlParser.js";
import { ColDefinitionOptionContext } from "./SparkSqlParser.js";
import { ComplexColTypeContext } from "./SparkSqlParser.js";
import { WhenClauseContext } from "./SparkSqlParser.js";
import { WindowClauseContext } from "./SparkSqlParser.js";
import { WindowSpecContext } from "./SparkSqlParser.js";
import { WindowFrameContext } from "./SparkSqlParser.js";
import { FrameBoundContext } from "./SparkSqlParser.js";
import { QualifiedNameListContext } from "./SparkSqlParser.js";
import { FunctionNameContext } from "./SparkSqlParser.js";
import { FunctionNameCreateContext } from "./SparkSqlParser.js";
import { QualifiedNameContext } from "./SparkSqlParser.js";
import { ErrorCapturingIdentifierContext } from "./SparkSqlParser.js";
import { ErrorCapturingIdentifierExtraContext } from "./SparkSqlParser.js";
import { IdentifierContext } from "./SparkSqlParser.js";
import { StrictIdentifierContext } from "./SparkSqlParser.js";
import { QuotedIdentifierContext } from "./SparkSqlParser.js";
import { NumberContext } from "./SparkSqlParser.js";
import { AlterColumnActionContext } from "./SparkSqlParser.js";
import { StringLitContext } from "./SparkSqlParser.js";
import { AnsiNonReservedContext } from "./SparkSqlParser.js";
import { StrictNonReservedContext } from "./SparkSqlParser.js";
import { NonReservedContext } from "./SparkSqlParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SparkSqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class SparkSqlParserVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `SparkSqlParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.singleStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingleStatement?: (ctx: SingleStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `statementDefault`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatementDefault?: (ctx: StatementDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `dmlStatement`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDmlStatement?: (ctx: DmlStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `useNamespace`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUseNamespace?: (ctx: UseNamespaceContext) => Result;
    /**
     * Visit a parse tree produced by the `setCatalog`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetCatalog?: (ctx: SetCatalogContext) => Result;
    /**
     * Visit a parse tree produced by the `createNamespace`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateNamespace?: (ctx: CreateNamespaceContext) => Result;
    /**
     * Visit a parse tree produced by the `setNamespaceProperties`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetNamespaceProperties?: (ctx: SetNamespacePropertiesContext) => Result;
    /**
     * Visit a parse tree produced by the `setNamespaceLocation`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetNamespaceLocation?: (ctx: SetNamespaceLocationContext) => Result;
    /**
     * Visit a parse tree produced by the `dropNamespace`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropNamespace?: (ctx: DropNamespaceContext) => Result;
    /**
     * Visit a parse tree produced by the `showNamespaces`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowNamespaces?: (ctx: ShowNamespacesContext) => Result;
    /**
     * Visit a parse tree produced by the `createTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTable?: (ctx: CreateTableContext) => Result;
    /**
     * Visit a parse tree produced by the `createTableLike`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTableLike?: (ctx: CreateTableLikeContext) => Result;
    /**
     * Visit a parse tree produced by the `replaceTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplaceTable?: (ctx: ReplaceTableContext) => Result;
    /**
     * Visit a parse tree produced by the `analyze`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyze?: (ctx: AnalyzeContext) => Result;
    /**
     * Visit a parse tree produced by the `analyzeTables`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyzeTables?: (ctx: AnalyzeTablesContext) => Result;
    /**
     * Visit a parse tree produced by the `alterTableAddColumn`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTableAddColumn?: (ctx: AlterTableAddColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `alterTableAddColumns`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTableAddColumns?: (ctx: AlterTableAddColumnsContext) => Result;
    /**
     * Visit a parse tree produced by the `renameTableColumn`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenameTableColumn?: (ctx: RenameTableColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `alterTableDropColumn`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTableDropColumn?: (ctx: AlterTableDropColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `dropTableColumns`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropTableColumns?: (ctx: DropTableColumnsContext) => Result;
    /**
     * Visit a parse tree produced by the `renameTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenameTable?: (ctx: RenameTableContext) => Result;
    /**
     * Visit a parse tree produced by the `setTableProperties`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTableProperties?: (ctx: SetTablePropertiesContext) => Result;
    /**
     * Visit a parse tree produced by the `unsetTableProperties`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnsetTableProperties?: (ctx: UnsetTablePropertiesContext) => Result;
    /**
     * Visit a parse tree produced by the `alterTableAlterColumn`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTableAlterColumn?: (ctx: AlterTableAlterColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `hiveChangeColumn`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHiveChangeColumn?: (ctx: HiveChangeColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `hiveReplaceColumns`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHiveReplaceColumns?: (ctx: HiveReplaceColumnsContext) => Result;
    /**
     * Visit a parse tree produced by the `setTableSerDe`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTableSerDe?: (ctx: SetTableSerDeContext) => Result;
    /**
     * Visit a parse tree produced by the `setTableSerDeProperties`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTableSerDeProperties?: (ctx: SetTableSerDePropertiesContext) => Result;
    /**
     * Visit a parse tree produced by the `addTablePartition`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddTablePartition?: (ctx: AddTablePartitionContext) => Result;
    /**
     * Visit a parse tree produced by the `renameTablePartition`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenameTablePartition?: (ctx: RenameTablePartitionContext) => Result;
    /**
     * Visit a parse tree produced by the `dropTablePartitions`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropTablePartitions?: (ctx: DropTablePartitionsContext) => Result;
    /**
     * Visit a parse tree produced by the `setTableLocation`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTableLocation?: (ctx: SetTableLocationContext) => Result;
    /**
     * Visit a parse tree produced by the `recoverPartitions`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRecoverPartitions?: (ctx: RecoverPartitionsContext) => Result;
    /**
     * Visit a parse tree produced by the `alterMaterializedViewRewrite`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterMaterializedViewRewrite?: (ctx: AlterMaterializedViewRewriteContext) => Result;
    /**
     * Visit a parse tree produced by the `alterMaterializedViewProperties`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterMaterializedViewProperties?: (ctx: AlterMaterializedViewPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by the `dropTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropTable?: (ctx: DropTableContext) => Result;
    /**
     * Visit a parse tree produced by the `dropView`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropView?: (ctx: DropViewContext) => Result;
    /**
     * Visit a parse tree produced by the `dropMaterializedView`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropMaterializedView?: (ctx: DropMaterializedViewContext) => Result;
    /**
     * Visit a parse tree produced by the `createView`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateView?: (ctx: CreateViewContext) => Result;
    /**
     * Visit a parse tree produced by the `createTempViewUsing`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTempViewUsing?: (ctx: CreateTempViewUsingContext) => Result;
    /**
     * Visit a parse tree produced by the `alterViewQuery`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterViewQuery?: (ctx: AlterViewQueryContext) => Result;
    /**
     * Visit a parse tree produced by the `createFunction`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateFunction?: (ctx: CreateFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `createMaterializedView`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => Result;
    /**
     * Visit a parse tree produced by the `dropFunction`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropFunction?: (ctx: DropFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `declareVariable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeclareVariable?: (ctx: DeclareVariableContext) => Result;
    /**
     * Visit a parse tree produced by the `dropVariable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropVariable?: (ctx: DropVariableContext) => Result;
    /**
     * Visit a parse tree produced by the `explainStatement`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplainStatement?: (ctx: ExplainStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `showTables`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTables?: (ctx: ShowTablesContext) => Result;
    /**
     * Visit a parse tree produced by the `showTableExtended`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTableExtended?: (ctx: ShowTableExtendedContext) => Result;
    /**
     * Visit a parse tree produced by the `showTblProperties`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTblProperties?: (ctx: ShowTblPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by the `showColumns`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowColumns?: (ctx: ShowColumnsContext) => Result;
    /**
     * Visit a parse tree produced by the `showViews`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowViews?: (ctx: ShowViewsContext) => Result;
    /**
     * Visit a parse tree produced by the `showPartitions`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowPartitions?: (ctx: ShowPartitionsContext) => Result;
    /**
     * Visit a parse tree produced by the `showFunctions`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowFunctions?: (ctx: ShowFunctionsContext) => Result;
    /**
     * Visit a parse tree produced by the `showCreateTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCreateTable?: (ctx: ShowCreateTableContext) => Result;
    /**
     * Visit a parse tree produced by the `showCurrentNamespace`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCurrentNamespace?: (ctx: ShowCurrentNamespaceContext) => Result;
    /**
     * Visit a parse tree produced by the `showCatalogs`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCatalogs?: (ctx: ShowCatalogsContext) => Result;
    /**
     * Visit a parse tree produced by the `showMaterializedViews`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowMaterializedViews?: (ctx: ShowMaterializedViewsContext) => Result;
    /**
     * Visit a parse tree produced by the `showCreateMaterializedView`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCreateMaterializedView?: (ctx: ShowCreateMaterializedViewContext) => Result;
    /**
     * Visit a parse tree produced by the `describeFunction`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeFunction?: (ctx: DescribeFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `describeNamespace`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeNamespace?: (ctx: DescribeNamespaceContext) => Result;
    /**
     * Visit a parse tree produced by the `describeRelation`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeRelation?: (ctx: DescribeRelationContext) => Result;
    /**
     * Visit a parse tree produced by the `describeQuery`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeQuery?: (ctx: DescribeQueryContext) => Result;
    /**
     * Visit a parse tree produced by the `commentTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommentTable?: (ctx: CommentTableContext) => Result;
    /**
     * Visit a parse tree produced by the `refreshTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefreshTable?: (ctx: RefreshTableContext) => Result;
    /**
     * Visit a parse tree produced by the `refreshFunction`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefreshFunction?: (ctx: RefreshFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `refreshResource`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefreshResource?: (ctx: RefreshResourceContext) => Result;
    /**
     * Visit a parse tree produced by the `refreshMaterializedView`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefreshMaterializedView?: (ctx: RefreshMaterializedViewContext) => Result;
    /**
     * Visit a parse tree produced by the `cacheTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCacheTable?: (ctx: CacheTableContext) => Result;
    /**
     * Visit a parse tree produced by the `unCacheTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnCacheTable?: (ctx: UnCacheTableContext) => Result;
    /**
     * Visit a parse tree produced by the `clearCache`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClearCache?: (ctx: ClearCacheContext) => Result;
    /**
     * Visit a parse tree produced by the `loadData`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoadData?: (ctx: LoadDataContext) => Result;
    /**
     * Visit a parse tree produced by the `truncateTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTruncateTable?: (ctx: TruncateTableContext) => Result;
    /**
     * Visit a parse tree produced by the `repairTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRepairTable?: (ctx: RepairTableContext) => Result;
    /**
     * Visit a parse tree produced by the `manageResource`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitManageResource?: (ctx: ManageResourceContext) => Result;
    /**
     * Visit a parse tree produced by the `failNativeCommand`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFailNativeCommand?: (ctx: FailNativeCommandContext) => Result;
    /**
     * Visit a parse tree produced by the `setTimeZoneInterval`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTimeZoneInterval?: (ctx: SetTimeZoneIntervalContext) => Result;
    /**
     * Visit a parse tree produced by the `setTimeZone`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTimeZone?: (ctx: SetTimeZoneContext) => Result;
    /**
     * Visit a parse tree produced by the `setTimeZoneAny`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTimeZoneAny?: (ctx: SetTimeZoneAnyContext) => Result;
    /**
     * Visit a parse tree produced by the `setVariableAssignment`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetVariableAssignment?: (ctx: SetVariableAssignmentContext) => Result;
    /**
     * Visit a parse tree produced by the `setVariableMultiAssignment`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetVariableMultiAssignment?: (ctx: SetVariableMultiAssignmentContext) => Result;
    /**
     * Visit a parse tree produced by the `setConfig`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetConfig?: (ctx: SetConfigContext) => Result;
    /**
     * Visit a parse tree produced by the `setConfigAndValue`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetConfigAndValue?: (ctx: SetConfigAndValueContext) => Result;
    /**
     * Visit a parse tree produced by the `setConfigAnyKey`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetConfigAnyKey?: (ctx: SetConfigAnyKeyContext) => Result;
    /**
     * Visit a parse tree produced by the `setAny`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetAny?: (ctx: SetAnyContext) => Result;
    /**
     * Visit a parse tree produced by the `resetConfig`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResetConfig?: (ctx: ResetConfigContext) => Result;
    /**
     * Visit a parse tree produced by the `resetAny`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResetAny?: (ctx: ResetAnyContext) => Result;
    /**
     * Visit a parse tree produced by the `createIndex`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateIndex?: (ctx: CreateIndexContext) => Result;
    /**
     * Visit a parse tree produced by the `dropIndex`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropIndex?: (ctx: DropIndexContext) => Result;
    /**
     * Visit a parse tree produced by the `optimizeTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptimizeTable?: (ctx: OptimizeTableContext) => Result;
    /**
     * Visit a parse tree produced by the `unsupportHiveCommands`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnsupportHiveCommands?: (ctx: UnsupportHiveCommandsContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.unsupportedHiveNativeCommands`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnsupportedHiveNativeCommands?: (ctx: UnsupportedHiveNativeCommandsContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.bucketSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBucketSpec?: (ctx: BucketSpecContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.skewSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSkewSpec?: (ctx: SkewSpecContext) => Result;
    /**
     * Visit a parse tree produced by the `queryStatement`
     * labeled alternative in `SparkSqlParser.query`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryStatement?: (ctx: QueryStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.insertInto`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertInto?: (ctx: InsertIntoContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.partitionSpecLocation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionSpecLocation?: (ctx: PartitionSpecLocationContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.partitionSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionSpec?: (ctx: PartitionSpecContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.partitionVal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionVal?: (ctx: PartitionValContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.namespace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamespace?: (ctx: NamespaceContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.describeFuncName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeFuncName?: (ctx: DescribeFuncNameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.describeColName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeColName?: (ctx: DescribeColNameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.ctes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCtes?: (ctx: CtesContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.namedQuery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedQuery?: (ctx: NamedQueryContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.tableProvider`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableProvider?: (ctx: TableProviderContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.createTableClauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTableClauses?: (ctx: CreateTableClausesContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.tableLifecycle`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableLifecycle?: (ctx: TableLifecycleContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.propertyList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyList?: (ctx: PropertyListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProperty?: (ctx: PropertyContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.propertyKey`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyKey?: (ctx: PropertyKeyContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.propertyValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyValue?: (ctx: PropertyValueContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.expressionPropertyList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionPropertyList?: (ctx: ExpressionPropertyListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.expressionProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionProperty?: (ctx: ExpressionPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.constantList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstantList?: (ctx: ConstantListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.nestedConstantList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNestedConstantList?: (ctx: NestedConstantListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.createFileFormat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateFileFormat?: (ctx: CreateFileFormatContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.fileFormat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFileFormat?: (ctx: FileFormatContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.storageHandler`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStorageHandler?: (ctx: StorageHandlerContext) => Result;
    /**
     * Visit a parse tree produced by the `insertFromQuery`
     * labeled alternative in `SparkSqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertFromQuery?: (ctx: InsertFromQueryContext) => Result;
    /**
     * Visit a parse tree produced by the `multipleInsert`
     * labeled alternative in `SparkSqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipleInsert?: (ctx: MultipleInsertContext) => Result;
    /**
     * Visit a parse tree produced by the `deleteFromTable`
     * labeled alternative in `SparkSqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeleteFromTable?: (ctx: DeleteFromTableContext) => Result;
    /**
     * Visit a parse tree produced by the `updateTable`
     * labeled alternative in `SparkSqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdateTable?: (ctx: UpdateTableContext) => Result;
    /**
     * Visit a parse tree produced by the `mergeIntoTable`
     * labeled alternative in `SparkSqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMergeIntoTable?: (ctx: MergeIntoTableContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.namespaceName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamespaceName?: (ctx: NamespaceNameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.namespaceNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamespaceNameCreate?: (ctx: NamespaceNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.tableNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableNameCreate?: (ctx: TableNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.tableName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableName?: (ctx: TableNameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.viewNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewNameCreate?: (ctx: ViewNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.viewName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewName?: (ctx: ViewNameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.columnName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnName?: (ctx: ColumnNameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.columnNamePath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNamePath?: (ctx: ColumnNamePathContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.columnNameSeq`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameSeq?: (ctx: ColumnNameSeqContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.columnNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameCreate?: (ctx: ColumnNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.identifierReference`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierReference?: (ctx: IdentifierReferenceContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.queryOrganization`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryOrganization?: (ctx: QueryOrganizationContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.limitClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLimitClause?: (ctx: LimitClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.orderOrSortByClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderOrSortByClause?: (ctx: OrderOrSortByClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.clusterOrDistributeBy`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClusterOrDistributeBy?: (ctx: ClusterOrDistributeByContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.queryTerm`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryTerm?: (ctx: QueryTermContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.queryPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryPrimary?: (ctx: QueryPrimaryContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.sortItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSortItem?: (ctx: SortItemContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.fromStatementBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFromStatementBody?: (ctx: FromStatementBodyContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.querySpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuerySpecification?: (ctx: QuerySpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.transformClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransformClause?: (ctx: TransformClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.selectClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectClause?: (ctx: SelectClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.setClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetClause?: (ctx: SetClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.matchedClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMatchedClause?: (ctx: MatchedClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.notMatchedClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotMatchedClause?: (ctx: NotMatchedClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.notMatchedBySourceClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotMatchedBySourceClause?: (ctx: NotMatchedBySourceClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.notMatchedAction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotMatchedAction?: (ctx: NotMatchedActionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.assignmentList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignmentList?: (ctx: AssignmentListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.assignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignment?: (ctx: AssignmentContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.whereClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhereClause?: (ctx: WhereClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.havingClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHavingClause?: (ctx: HavingClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.hint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHint?: (ctx: HintContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.hintStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHintStatement?: (ctx: HintStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.fromClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFromClause?: (ctx: FromClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.temporalClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTemporalClause?: (ctx: TemporalClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.aggregationClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregationClause?: (ctx: AggregationClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.groupByClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupByClause?: (ctx: GroupByClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.groupingAnalytics`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingAnalytics?: (ctx: GroupingAnalyticsContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.groupingSet`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingSet?: (ctx: GroupingSetContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.pivotClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPivotClause?: (ctx: PivotClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.pivotColumn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPivotColumn?: (ctx: PivotColumnContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.pivotValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPivotValue?: (ctx: PivotValueContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.unpivotClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotClause?: (ctx: UnpivotClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.unpivotSingleValueColumnClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotSingleValueColumnClause?: (ctx: UnpivotSingleValueColumnClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.unpivotMultiValueColumnClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotMultiValueColumnClause?: (ctx: UnpivotMultiValueColumnClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.unpivotColumnSet`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotColumnSet?: (ctx: UnpivotColumnSetContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.unpivotColumnAndAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotColumnAndAlias?: (ctx: UnpivotColumnAndAliasContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.ifNotExists`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfNotExists?: (ctx: IfNotExistsContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.ifExists`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfExists?: (ctx: IfExistsContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.lateralView`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLateralView?: (ctx: LateralViewContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.setQuantifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetQuantifier?: (ctx: SetQuantifierContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.relation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelation?: (ctx: RelationContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.joinRelation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinRelation?: (ctx: JoinRelationContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.joinType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinType?: (ctx: JoinTypeContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.joinCriteria`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinCriteria?: (ctx: JoinCriteriaContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.sample`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSample?: (ctx: SampleContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.sampleMethod`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSampleMethod?: (ctx: SampleMethodContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.identifierList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierList?: (ctx: IdentifierListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.identifierSeq`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierSeq?: (ctx: IdentifierSeqContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.orderedIdentifierList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderedIdentifierList?: (ctx: OrderedIdentifierListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.orderedIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderedIdentifier?: (ctx: OrderedIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.identifierCommentList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierCommentList?: (ctx: IdentifierCommentListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.identifierComment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierComment?: (ctx: IdentifierCommentContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.relationPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelationPrimary?: (ctx: RelationPrimaryContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.functionTableSubqueryArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionTableSubqueryArgument?: (ctx: FunctionTableSubqueryArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.tableArgumentPartitioning`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableArgumentPartitioning?: (ctx: TableArgumentPartitioningContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.functionTableNamedArgumentExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionTableNamedArgumentExpression?: (ctx: FunctionTableNamedArgumentExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.functionTableReferenceArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionTableReferenceArgument?: (ctx: FunctionTableReferenceArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.functionTableArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionTableArgument?: (ctx: FunctionTableArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.tableAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableAlias?: (ctx: TableAliasContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.rowFormat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowFormat?: (ctx: RowFormatContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.multipartIdentifierList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipartIdentifierList?: (ctx: MultipartIdentifierListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.multipartIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipartIdentifier?: (ctx: MultipartIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.multipartIdentifierPropertyList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipartIdentifierPropertyList?: (ctx: MultipartIdentifierPropertyListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.multipartIdentifierProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipartIdentifierProperty?: (ctx: MultipartIdentifierPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.tableIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableIdentifier?: (ctx: TableIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.viewIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewIdentifier?: (ctx: ViewIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.namedExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedExpression?: (ctx: NamedExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.namedExpressionSeq`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedExpressionSeq?: (ctx: NamedExpressionSeqContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.partitionFieldList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionFieldList?: (ctx: PartitionFieldListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.partitionField`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionField?: (ctx: PartitionFieldContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.transform`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransform?: (ctx: TransformContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.transformArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransformArgument?: (ctx: TransformArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.namedArgumentExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedArgumentExpression?: (ctx: NamedArgumentExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.functionArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionArgument?: (ctx: FunctionArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.expressionSeq`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionSeq?: (ctx: ExpressionSeqContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanExpression?: (ctx: BooleanExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicate?: (ctx: PredicateContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueExpression?: (ctx: ValueExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.datetimeUnit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatetimeUnit?: (ctx: DatetimeUnitContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.literalType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteralType?: (ctx: LiteralTypeContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.constant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstant?: (ctx: ConstantContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.comparisonOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.arithmeticOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArithmeticOperator?: (ctx: ArithmeticOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.predicateOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicateOperator?: (ctx: PredicateOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.booleanValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanValue?: (ctx: BooleanValueContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.interval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterval?: (ctx: IntervalContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.errorCapturingMultiUnitsInterval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorCapturingMultiUnitsInterval?: (ctx: ErrorCapturingMultiUnitsIntervalContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.multiUnitsInterval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiUnitsInterval?: (ctx: MultiUnitsIntervalContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.errorCapturingUnitToUnitInterval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorCapturingUnitToUnitInterval?: (ctx: ErrorCapturingUnitToUnitIntervalContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.unitToUnitInterval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnitToUnitInterval?: (ctx: UnitToUnitIntervalContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.intervalValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntervalValue?: (ctx: IntervalValueContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.unitInMultiUnits`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnitInMultiUnits?: (ctx: UnitInMultiUnitsContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.unitInUnitToUnit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnitInUnitToUnit?: (ctx: UnitInUnitToUnitContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.colPosition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColPosition?: (ctx: ColPositionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType?: (ctx: TypeContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.dataType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDataType?: (ctx: DataTypeContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.qualifiedColTypeWithPositionSeqForAdd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedColTypeWithPositionSeqForAdd?: (ctx: QualifiedColTypeWithPositionSeqForAddContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.qualifiedColTypeWithPositionForAdd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedColTypeWithPositionForAdd?: (ctx: QualifiedColTypeWithPositionForAddContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.qualifiedColTypeWithPositionSeqForReplace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedColTypeWithPositionSeqForReplace?: (ctx: QualifiedColTypeWithPositionSeqForReplaceContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.qualifiedColTypeWithPositionForReplace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedColTypeWithPositionForReplace?: (ctx: QualifiedColTypeWithPositionForReplaceContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.colDefinitionDescriptorWithPosition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColDefinitionDescriptorWithPosition?: (ctx: ColDefinitionDescriptorWithPositionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.variableDefaultExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableDefaultExpression?: (ctx: VariableDefaultExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.colTypeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColTypeList?: (ctx: ColTypeListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.columnType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnType?: (ctx: ColumnTypeContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.createOrReplaceTableColTypeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateOrReplaceTableColTypeList?: (ctx: CreateOrReplaceTableColTypeListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.createOrReplaceTableColType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateOrReplaceTableColType?: (ctx: CreateOrReplaceTableColTypeContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.colDefinitionOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColDefinitionOption?: (ctx: ColDefinitionOptionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.complexColType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComplexColType?: (ctx: ComplexColTypeContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.whenClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhenClause?: (ctx: WhenClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.windowClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowClause?: (ctx: WindowClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.windowSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowSpec?: (ctx: WindowSpecContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.windowFrame`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowFrame?: (ctx: WindowFrameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.frameBound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrameBound?: (ctx: FrameBoundContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.qualifiedNameList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedNameList?: (ctx: QualifiedNameListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.functionName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionName?: (ctx: FunctionNameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.functionNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionNameCreate?: (ctx: FunctionNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.qualifiedName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedName?: (ctx: QualifiedNameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.errorCapturingIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorCapturingIdentifier?: (ctx: ErrorCapturingIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.errorCapturingIdentifierExtra`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorCapturingIdentifierExtra?: (ctx: ErrorCapturingIdentifierExtraContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifier?: (ctx: IdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.strictIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStrictIdentifier?: (ctx: StrictIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.quotedIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.number`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumber?: (ctx: NumberContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.alterColumnAction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterColumnAction?: (ctx: AlterColumnActionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.stringLit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringLit?: (ctx: StringLitContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.ansiNonReserved`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnsiNonReserved?: (ctx: AnsiNonReservedContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.strictNonReserved`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStrictNonReserved?: (ctx: StrictNonReservedContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.nonReserved`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonReserved?: (ctx: NonReservedContext) => Result;
}

