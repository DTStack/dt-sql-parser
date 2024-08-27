// Generated from dt-sql-parser/src/grammar/sql/SQLParser.g4 by ANTLR 4.13.1

// @ts-nocheck

import { AbstractParseTreeVisitor } from "antlr4ng";


import { SQLParserBase } from '../SQLParserBase';


import { ProgramContext } from "./SQLParser.js";
import { SingleStatementContext } from "./SQLParser.js";
import { StatementDefaultContext } from "./SQLParser.js";
import { DmlStatementContext } from "./SQLParser.js";
import { UseNamespaceContext } from "./SQLParser.js";
import { SetCatalogContext } from "./SQLParser.js";
import { CreateNamespaceContext } from "./SQLParser.js";
import { SetNamespacePropertiesContext } from "./SQLParser.js";
import { SetNamespaceLocationContext } from "./SQLParser.js";
import { DropNamespaceContext } from "./SQLParser.js";
import { ShowNamespacesContext } from "./SQLParser.js";
import { CreateTableContext } from "./SQLParser.js";
import { CreateTableLikeContext } from "./SQLParser.js";
import { ReplaceTableContext } from "./SQLParser.js";
import { AnalyzeContext } from "./SQLParser.js";
import { AnalyzeTablesContext } from "./SQLParser.js";
import { AlterTableAddColumnContext } from "./SQLParser.js";
import { AlterTableAddColumnsContext } from "./SQLParser.js";
import { RenameTableColumnContext } from "./SQLParser.js";
import { AlterTableDropColumnContext } from "./SQLParser.js";
import { DropTableColumnsContext } from "./SQLParser.js";
import { RenameTableContext } from "./SQLParser.js";
import { SetTablePropertiesContext } from "./SQLParser.js";
import { UnsetTablePropertiesContext } from "./SQLParser.js";
import { AlterTableAlterColumnContext } from "./SQLParser.js";
import { HiveChangeColumnContext } from "./SQLParser.js";
import { HiveReplaceColumnsContext } from "./SQLParser.js";
import { SetTableSerDeContext } from "./SQLParser.js";
import { SetTableSerDePropertiesContext } from "./SQLParser.js";
import { AddTablePartitionContext } from "./SQLParser.js";
import { RenameTablePartitionContext } from "./SQLParser.js";
import { DropTablePartitionsContext } from "./SQLParser.js";
import { SetTableLocationContext } from "./SQLParser.js";
import { RecoverPartitionsContext } from "./SQLParser.js";
import { AlterMaterializedViewRewriteContext } from "./SQLParser.js";
import { AlterMaterializedViewPropertiesContext } from "./SQLParser.js";
import { DropTableContext } from "./SQLParser.js";
import { DropViewContext } from "./SQLParser.js";
import { DropMaterializedViewContext } from "./SQLParser.js";
import { CreateViewContext } from "./SQLParser.js";
import { CreateTempViewUsingContext } from "./SQLParser.js";
import { AlterViewQueryContext } from "./SQLParser.js";
import { CreateFunctionContext } from "./SQLParser.js";
import { CreateMaterializedViewContext } from "./SQLParser.js";
import { DropFunctionContext } from "./SQLParser.js";
import { DeclareVariableContext } from "./SQLParser.js";
import { DropVariableContext } from "./SQLParser.js";
import { ExplainStatementContext } from "./SQLParser.js";
import { ShowTablesContext } from "./SQLParser.js";
import { ShowTableExtendedContext } from "./SQLParser.js";
import { ShowTblPropertiesContext } from "./SQLParser.js";
import { ShowColumnsContext } from "./SQLParser.js";
import { ShowViewsContext } from "./SQLParser.js";
import { ShowPartitionsContext } from "./SQLParser.js";
import { ShowFunctionsContext } from "./SQLParser.js";
import { ShowCreateTableContext } from "./SQLParser.js";
import { ShowCurrentNamespaceContext } from "./SQLParser.js";
import { ShowCatalogsContext } from "./SQLParser.js";
import { ShowMaterializedViewsContext } from "./SQLParser.js";
import { ShowCreateMaterializedViewContext } from "./SQLParser.js";
import { DescribeFunctionContext } from "./SQLParser.js";
import { DescribeNamespaceContext } from "./SQLParser.js";
import { DescribeRelationContext } from "./SQLParser.js";
import { DescribeQueryContext } from "./SQLParser.js";
import { CommentNamespaceContext } from "./SQLParser.js";
import { CommentTableContext } from "./SQLParser.js";
import { RefreshTableContext } from "./SQLParser.js";
import { RefreshFunctionContext } from "./SQLParser.js";
import { RefreshResourceContext } from "./SQLParser.js";
import { RefreshMaterializedViewContext } from "./SQLParser.js";
import { CacheTableContext } from "./SQLParser.js";
import { UnCacheTableContext } from "./SQLParser.js";
import { ClearCacheContext } from "./SQLParser.js";
import { LoadDataContext } from "./SQLParser.js";
import { TruncateTableContext } from "./SQLParser.js";
import { RepairTableContext } from "./SQLParser.js";
import { ManageResourceContext } from "./SQLParser.js";
import { FailNativeCommandContext } from "./SQLParser.js";
import { SetTimeZoneIntervalContext } from "./SQLParser.js";
import { SetTimeZoneContext } from "./SQLParser.js";
import { SetTimeZoneAnyContext } from "./SQLParser.js";
import { SetVariableAssignmentContext } from "./SQLParser.js";
import { SetVariableMultiAssignmentContext } from "./SQLParser.js";
import { SetConfigContext } from "./SQLParser.js";
import { SetConfigAndValueContext } from "./SQLParser.js";
import { SetConfigAnyKeyContext } from "./SQLParser.js";
import { SetAnyContext } from "./SQLParser.js";
import { ResetConfigContext } from "./SQLParser.js";
import { ResetAnyContext } from "./SQLParser.js";
import { CreateIndexContext } from "./SQLParser.js";
import { DropIndexContext } from "./SQLParser.js";
import { OptimizeTableContext } from "./SQLParser.js";
import { UnsupportHiveCommandsContext } from "./SQLParser.js";
import { TimezoneContext } from "./SQLParser.js";
import { ConfigKeyContext } from "./SQLParser.js";
import { ConfigValueContext } from "./SQLParser.js";
import { UnsupportedHiveNativeCommandsContext } from "./SQLParser.js";
import { CreateTableHeaderContext } from "./SQLParser.js";
import { ReplaceTableHeaderContext } from "./SQLParser.js";
import { BucketSpecContext } from "./SQLParser.js";
import { SkewSpecContext } from "./SQLParser.js";
import { LocationSpecContext } from "./SQLParser.js";
import { CommentSpecContext } from "./SQLParser.js";
import { QueryStatementContext } from "./SQLParser.js";
import { InsertIntoContext } from "./SQLParser.js";
import { PartitionSpecLocationContext } from "./SQLParser.js";
import { PartitionSpecContext } from "./SQLParser.js";
import { PartitionValContext } from "./SQLParser.js";
import { NamespaceContext } from "./SQLParser.js";
import { NamespacesContext } from "./SQLParser.js";
import { DescribeFuncNameContext } from "./SQLParser.js";
import { DescribeColNameContext } from "./SQLParser.js";
import { CtesContext } from "./SQLParser.js";
import { NamedQueryContext } from "./SQLParser.js";
import { TableProviderContext } from "./SQLParser.js";
import { CreateTableClausesContext } from "./SQLParser.js";
import { PropertyListContext } from "./SQLParser.js";
import { PropertyContext } from "./SQLParser.js";
import { PropertyKeyContext } from "./SQLParser.js";
import { PropertyValueContext } from "./SQLParser.js";
import { ExpressionPropertyListContext } from "./SQLParser.js";
import { ExpressionPropertyContext } from "./SQLParser.js";
import { ConstantListContext } from "./SQLParser.js";
import { NestedConstantListContext } from "./SQLParser.js";
import { CreateFileFormatContext } from "./SQLParser.js";
import { FileFormatContext } from "./SQLParser.js";
import { StorageHandlerContext } from "./SQLParser.js";
import { ResourceContext } from "./SQLParser.js";
import { InsertFromQueryContext } from "./SQLParser.js";
import { MultipleInsertContext } from "./SQLParser.js";
import { DeleteFromTableContext } from "./SQLParser.js";
import { UpdateTableContext } from "./SQLParser.js";
import { MergeIntoTableContext } from "./SQLParser.js";
import { NamespaceNameContext } from "./SQLParser.js";
import { NamespaceNameCreateContext } from "./SQLParser.js";
import { TableNameCreateContext } from "./SQLParser.js";
import { TableNameContext } from "./SQLParser.js";
import { ViewNameCreateContext } from "./SQLParser.js";
import { ViewNameContext } from "./SQLParser.js";
import { ColumnNameContext } from "./SQLParser.js";
import { ColumnNameSeqContext } from "./SQLParser.js";
import { ColumnNameCreateContext } from "./SQLParser.js";
import { IdentifierReferenceContext } from "./SQLParser.js";
import { QueryOrganizationContext } from "./SQLParser.js";
import { MultiInsertQueryBodyContext } from "./SQLParser.js";
import { QueryTermContext } from "./SQLParser.js";
import { QueryPrimaryContext } from "./SQLParser.js";
import { SortItemContext } from "./SQLParser.js";
import { FromStatementContext } from "./SQLParser.js";
import { FromStatementBodyContext } from "./SQLParser.js";
import { QuerySpecificationContext } from "./SQLParser.js";
import { TransformClauseContext } from "./SQLParser.js";
import { SelectClauseContext } from "./SQLParser.js";
import { SetClauseContext } from "./SQLParser.js";
import { MatchedClauseContext } from "./SQLParser.js";
import { NotMatchedClauseContext } from "./SQLParser.js";
import { NotMatchedBySourceClauseContext } from "./SQLParser.js";
import { MatchedActionContext } from "./SQLParser.js";
import { NotMatchedActionContext } from "./SQLParser.js";
import { NotMatchedBySourceActionContext } from "./SQLParser.js";
import { AssignmentListContext } from "./SQLParser.js";
import { AssignmentContext } from "./SQLParser.js";
import { WhereClauseContext } from "./SQLParser.js";
import { HavingClauseContext } from "./SQLParser.js";
import { HintContext } from "./SQLParser.js";
import { HintStatementContext } from "./SQLParser.js";
import { FromClauseContext } from "./SQLParser.js";
import { FunctionKindContext } from "./SQLParser.js";
import { TemporalClauseContext } from "./SQLParser.js";
import { AggregationClauseContext } from "./SQLParser.js";
import { GroupByClauseContext } from "./SQLParser.js";
import { GroupingAnalyticsContext } from "./SQLParser.js";
import { GroupingElementContext } from "./SQLParser.js";
import { GroupingSetContext } from "./SQLParser.js";
import { PivotClauseContext } from "./SQLParser.js";
import { PivotColumnContext } from "./SQLParser.js";
import { PivotValueContext } from "./SQLParser.js";
import { UnpivotClauseContext } from "./SQLParser.js";
import { UnpivotNullClauseContext } from "./SQLParser.js";
import { UnpivotOperatorContext } from "./SQLParser.js";
import { UnpivotSingleValueColumnClauseContext } from "./SQLParser.js";
import { UnpivotMultiValueColumnClauseContext } from "./SQLParser.js";
import { UnpivotColumnSetContext } from "./SQLParser.js";
import { UnpivotValueColumnContext } from "./SQLParser.js";
import { UnpivotNameColumnContext } from "./SQLParser.js";
import { UnpivotColumnAndAliasContext } from "./SQLParser.js";
import { UnpivotColumnContext } from "./SQLParser.js";
import { UnpivotAliasContext } from "./SQLParser.js";
import { IfNotExistsContext } from "./SQLParser.js";
import { IfExistsContext } from "./SQLParser.js";
import { LateralViewContext } from "./SQLParser.js";
import { SetQuantifierContext } from "./SQLParser.js";
import { RelationContext } from "./SQLParser.js";
import { RelationExtensionContext } from "./SQLParser.js";
import { JoinRelationContext } from "./SQLParser.js";
import { JoinTypeContext } from "./SQLParser.js";
import { JoinCriteriaContext } from "./SQLParser.js";
import { SampleContext } from "./SQLParser.js";
import { SampleMethodContext } from "./SQLParser.js";
import { IdentifierListContext } from "./SQLParser.js";
import { IdentifierSeqContext } from "./SQLParser.js";
import { OrderedIdentifierListContext } from "./SQLParser.js";
import { OrderedIdentifierContext } from "./SQLParser.js";
import { IdentifierCommentListContext } from "./SQLParser.js";
import { IdentifierCommentContext } from "./SQLParser.js";
import { RelationPrimaryContext } from "./SQLParser.js";
import { InlineTableContext } from "./SQLParser.js";
import { FunctionTableSubqueryArgumentContext } from "./SQLParser.js";
import { TableArgumentPartitioningContext } from "./SQLParser.js";
import { FunctionTableNamedArgumentExpressionContext } from "./SQLParser.js";
import { FunctionTableReferenceArgumentContext } from "./SQLParser.js";
import { FunctionTableArgumentContext } from "./SQLParser.js";
import { FunctionTableContext } from "./SQLParser.js";
import { TableAliasContext } from "./SQLParser.js";
import { RowFormatContext } from "./SQLParser.js";
import { MultipartIdentifierListContext } from "./SQLParser.js";
import { MultipartIdentifierContext } from "./SQLParser.js";
import { MultipartIdentifierPropertyListContext } from "./SQLParser.js";
import { MultipartIdentifierPropertyContext } from "./SQLParser.js";
import { TableIdentifierContext } from "./SQLParser.js";
import { ViewIdentifierContext } from "./SQLParser.js";
import { NamedExpressionContext } from "./SQLParser.js";
import { NamedExpressionSeqContext } from "./SQLParser.js";
import { PartitionFieldListContext } from "./SQLParser.js";
import { PartitionFieldContext } from "./SQLParser.js";
import { TransformContext } from "./SQLParser.js";
import { TransformArgumentContext } from "./SQLParser.js";
import { ExpressionContext } from "./SQLParser.js";
import { NamedArgumentExpressionContext } from "./SQLParser.js";
import { FunctionArgumentContext } from "./SQLParser.js";
import { ExpressionSeqContext } from "./SQLParser.js";
import { BooleanExpressionContext } from "./SQLParser.js";
import { PredicateContext } from "./SQLParser.js";
import { ValueExpressionContext } from "./SQLParser.js";
import { DatetimeUnitContext } from "./SQLParser.js";
import { PrimaryExpressionContext } from "./SQLParser.js";
import { LiteralTypeContext } from "./SQLParser.js";
import { ConstantContext } from "./SQLParser.js";
import { ComparisonOperatorContext } from "./SQLParser.js";
import { ArithmeticOperatorContext } from "./SQLParser.js";
import { PredicateOperatorContext } from "./SQLParser.js";
import { BooleanValueContext } from "./SQLParser.js";
import { IntervalContext } from "./SQLParser.js";
import { ErrorCapturingMultiUnitsIntervalContext } from "./SQLParser.js";
import { MultiUnitsIntervalContext } from "./SQLParser.js";
import { ErrorCapturingUnitToUnitIntervalContext } from "./SQLParser.js";
import { UnitToUnitIntervalContext } from "./SQLParser.js";
import { IntervalValueContext } from "./SQLParser.js";
import { UnitInMultiUnitsContext } from "./SQLParser.js";
import { UnitInUnitToUnitContext } from "./SQLParser.js";
import { ColPositionContext } from "./SQLParser.js";
import { TypeContext } from "./SQLParser.js";
import { DataTypeContext } from "./SQLParser.js";
import { QualifiedColTypeWithPositionSeqForAddContext } from "./SQLParser.js";
import { QualifiedColTypeWithPositionForAddContext } from "./SQLParser.js";
import { QualifiedColTypeWithPositionSeqForReplaceContext } from "./SQLParser.js";
import { QualifiedColTypeWithPositionForReplaceContext } from "./SQLParser.js";
import { ColDefinitionDescriptorWithPositionContext } from "./SQLParser.js";
import { DefaultExpressionContext } from "./SQLParser.js";
import { VariableDefaultExpressionContext } from "./SQLParser.js";
import { ColTypeListContext } from "./SQLParser.js";
import { ColTypeContext } from "./SQLParser.js";
import { CreateOrReplaceTableColTypeListContext } from "./SQLParser.js";
import { CreateOrReplaceTableColTypeContext } from "./SQLParser.js";
import { ColDefinitionOptionContext } from "./SQLParser.js";
import { GenerationExpressionContext } from "./SQLParser.js";
import { ComplexColTypeListContext } from "./SQLParser.js";
import { ComplexColTypeContext } from "./SQLParser.js";
import { WhenClauseContext } from "./SQLParser.js";
import { WindowClauseContext } from "./SQLParser.js";
import { ZorderClauseContext } from "./SQLParser.js";
import { NamedWindowContext } from "./SQLParser.js";
import { WindowSpecContext } from "./SQLParser.js";
import { WindowFrameContext } from "./SQLParser.js";
import { FrameBoundContext } from "./SQLParser.js";
import { QualifiedNameListContext } from "./SQLParser.js";
import { FunctionNameContext } from "./SQLParser.js";
import { FunctionNameCreateContext } from "./SQLParser.js";
import { QualifiedNameContext } from "./SQLParser.js";
import { ErrorCapturingIdentifierContext } from "./SQLParser.js";
import { ErrorCapturingIdentifierExtraContext } from "./SQLParser.js";
import { IdentifierContext } from "./SQLParser.js";
import { StrictIdentifierContext } from "./SQLParser.js";
import { QuotedIdentifierContext } from "./SQLParser.js";
import { BackQuotedIdentifierContext } from "./SQLParser.js";
import { NumberContext } from "./SQLParser.js";
import { AlterColumnActionContext } from "./SQLParser.js";
import { StringLitContext } from "./SQLParser.js";
import { CommentContext } from "./SQLParser.js";
import { VersionContext } from "./SQLParser.js";
import { AnsiNonReservedContext } from "./SQLParser.js";
import { StrictNonReservedContext } from "./SQLParser.js";
import { NonReservedContext } from "./SQLParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SQLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class SQLParserVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `SQLParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.singleStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingleStatement?: (ctx: SingleStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `statementDefault`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatementDefault?: (ctx: StatementDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `dmlStatement`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDmlStatement?: (ctx: DmlStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `useNamespace`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUseNamespace?: (ctx: UseNamespaceContext) => Result;
    /**
     * Visit a parse tree produced by the `setCatalog`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetCatalog?: (ctx: SetCatalogContext) => Result;
    /**
     * Visit a parse tree produced by the `createNamespace`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateNamespace?: (ctx: CreateNamespaceContext) => Result;
    /**
     * Visit a parse tree produced by the `setNamespaceProperties`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetNamespaceProperties?: (ctx: SetNamespacePropertiesContext) => Result;
    /**
     * Visit a parse tree produced by the `setNamespaceLocation`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetNamespaceLocation?: (ctx: SetNamespaceLocationContext) => Result;
    /**
     * Visit a parse tree produced by the `dropNamespace`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropNamespace?: (ctx: DropNamespaceContext) => Result;
    /**
     * Visit a parse tree produced by the `showNamespaces`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowNamespaces?: (ctx: ShowNamespacesContext) => Result;
    /**
     * Visit a parse tree produced by the `createTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTable?: (ctx: CreateTableContext) => Result;
    /**
     * Visit a parse tree produced by the `createTableLike`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTableLike?: (ctx: CreateTableLikeContext) => Result;
    /**
     * Visit a parse tree produced by the `replaceTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplaceTable?: (ctx: ReplaceTableContext) => Result;
    /**
     * Visit a parse tree produced by the `analyze`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyze?: (ctx: AnalyzeContext) => Result;
    /**
     * Visit a parse tree produced by the `analyzeTables`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyzeTables?: (ctx: AnalyzeTablesContext) => Result;
    /**
     * Visit a parse tree produced by the `alterTableAddColumn`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTableAddColumn?: (ctx: AlterTableAddColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `alterTableAddColumns`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTableAddColumns?: (ctx: AlterTableAddColumnsContext) => Result;
    /**
     * Visit a parse tree produced by the `renameTableColumn`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenameTableColumn?: (ctx: RenameTableColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `alterTableDropColumn`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTableDropColumn?: (ctx: AlterTableDropColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `dropTableColumns`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropTableColumns?: (ctx: DropTableColumnsContext) => Result;
    /**
     * Visit a parse tree produced by the `renameTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenameTable?: (ctx: RenameTableContext) => Result;
    /**
     * Visit a parse tree produced by the `setTableProperties`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTableProperties?: (ctx: SetTablePropertiesContext) => Result;
    /**
     * Visit a parse tree produced by the `unsetTableProperties`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnsetTableProperties?: (ctx: UnsetTablePropertiesContext) => Result;
    /**
     * Visit a parse tree produced by the `alterTableAlterColumn`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTableAlterColumn?: (ctx: AlterTableAlterColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `hiveChangeColumn`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHiveChangeColumn?: (ctx: HiveChangeColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `hiveReplaceColumns`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHiveReplaceColumns?: (ctx: HiveReplaceColumnsContext) => Result;
    /**
     * Visit a parse tree produced by the `setTableSerDe`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTableSerDe?: (ctx: SetTableSerDeContext) => Result;
    /**
     * Visit a parse tree produced by the `setTableSerDeProperties`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTableSerDeProperties?: (ctx: SetTableSerDePropertiesContext) => Result;
    /**
     * Visit a parse tree produced by the `addTablePartition`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddTablePartition?: (ctx: AddTablePartitionContext) => Result;
    /**
     * Visit a parse tree produced by the `renameTablePartition`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenameTablePartition?: (ctx: RenameTablePartitionContext) => Result;
    /**
     * Visit a parse tree produced by the `dropTablePartitions`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropTablePartitions?: (ctx: DropTablePartitionsContext) => Result;
    /**
     * Visit a parse tree produced by the `setTableLocation`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTableLocation?: (ctx: SetTableLocationContext) => Result;
    /**
     * Visit a parse tree produced by the `recoverPartitions`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRecoverPartitions?: (ctx: RecoverPartitionsContext) => Result;
    /**
     * Visit a parse tree produced by the `alterMaterializedViewRewrite`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterMaterializedViewRewrite?: (ctx: AlterMaterializedViewRewriteContext) => Result;
    /**
     * Visit a parse tree produced by the `alterMaterializedViewProperties`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterMaterializedViewProperties?: (ctx: AlterMaterializedViewPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by the `dropTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropTable?: (ctx: DropTableContext) => Result;
    /**
     * Visit a parse tree produced by the `dropView`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropView?: (ctx: DropViewContext) => Result;
    /**
     * Visit a parse tree produced by the `dropMaterializedView`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropMaterializedView?: (ctx: DropMaterializedViewContext) => Result;
    /**
     * Visit a parse tree produced by the `createView`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateView?: (ctx: CreateViewContext) => Result;
    /**
     * Visit a parse tree produced by the `createTempViewUsing`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTempViewUsing?: (ctx: CreateTempViewUsingContext) => Result;
    /**
     * Visit a parse tree produced by the `alterViewQuery`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterViewQuery?: (ctx: AlterViewQueryContext) => Result;
    /**
     * Visit a parse tree produced by the `createFunction`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateFunction?: (ctx: CreateFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `createMaterializedView`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => Result;
    /**
     * Visit a parse tree produced by the `dropFunction`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropFunction?: (ctx: DropFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `declareVariable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeclareVariable?: (ctx: DeclareVariableContext) => Result;
    /**
     * Visit a parse tree produced by the `dropVariable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropVariable?: (ctx: DropVariableContext) => Result;
    /**
     * Visit a parse tree produced by the `explainStatement`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplainStatement?: (ctx: ExplainStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `showTables`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTables?: (ctx: ShowTablesContext) => Result;
    /**
     * Visit a parse tree produced by the `showTableExtended`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTableExtended?: (ctx: ShowTableExtendedContext) => Result;
    /**
     * Visit a parse tree produced by the `showTblProperties`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTblProperties?: (ctx: ShowTblPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by the `showColumns`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowColumns?: (ctx: ShowColumnsContext) => Result;
    /**
     * Visit a parse tree produced by the `showViews`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowViews?: (ctx: ShowViewsContext) => Result;
    /**
     * Visit a parse tree produced by the `showPartitions`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowPartitions?: (ctx: ShowPartitionsContext) => Result;
    /**
     * Visit a parse tree produced by the `showFunctions`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowFunctions?: (ctx: ShowFunctionsContext) => Result;
    /**
     * Visit a parse tree produced by the `showCreateTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCreateTable?: (ctx: ShowCreateTableContext) => Result;
    /**
     * Visit a parse tree produced by the `showCurrentNamespace`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCurrentNamespace?: (ctx: ShowCurrentNamespaceContext) => Result;
    /**
     * Visit a parse tree produced by the `showCatalogs`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCatalogs?: (ctx: ShowCatalogsContext) => Result;
    /**
     * Visit a parse tree produced by the `showMaterializedViews`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowMaterializedViews?: (ctx: ShowMaterializedViewsContext) => Result;
    /**
     * Visit a parse tree produced by the `showCreateMaterializedView`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCreateMaterializedView?: (ctx: ShowCreateMaterializedViewContext) => Result;
    /**
     * Visit a parse tree produced by the `describeFunction`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeFunction?: (ctx: DescribeFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `describeNamespace`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeNamespace?: (ctx: DescribeNamespaceContext) => Result;
    /**
     * Visit a parse tree produced by the `describeRelation`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeRelation?: (ctx: DescribeRelationContext) => Result;
    /**
     * Visit a parse tree produced by the `describeQuery`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeQuery?: (ctx: DescribeQueryContext) => Result;
    /**
     * Visit a parse tree produced by the `commentNamespace`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommentNamespace?: (ctx: CommentNamespaceContext) => Result;
    /**
     * Visit a parse tree produced by the `commentTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommentTable?: (ctx: CommentTableContext) => Result;
    /**
     * Visit a parse tree produced by the `refreshTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefreshTable?: (ctx: RefreshTableContext) => Result;
    /**
     * Visit a parse tree produced by the `refreshFunction`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefreshFunction?: (ctx: RefreshFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `refreshResource`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefreshResource?: (ctx: RefreshResourceContext) => Result;
    /**
     * Visit a parse tree produced by the `refreshMaterializedView`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefreshMaterializedView?: (ctx: RefreshMaterializedViewContext) => Result;
    /**
     * Visit a parse tree produced by the `cacheTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCacheTable?: (ctx: CacheTableContext) => Result;
    /**
     * Visit a parse tree produced by the `unCacheTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnCacheTable?: (ctx: UnCacheTableContext) => Result;
    /**
     * Visit a parse tree produced by the `clearCache`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClearCache?: (ctx: ClearCacheContext) => Result;
    /**
     * Visit a parse tree produced by the `loadData`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoadData?: (ctx: LoadDataContext) => Result;
    /**
     * Visit a parse tree produced by the `truncateTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTruncateTable?: (ctx: TruncateTableContext) => Result;
    /**
     * Visit a parse tree produced by the `repairTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRepairTable?: (ctx: RepairTableContext) => Result;
    /**
     * Visit a parse tree produced by the `manageResource`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitManageResource?: (ctx: ManageResourceContext) => Result;
    /**
     * Visit a parse tree produced by the `failNativeCommand`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFailNativeCommand?: (ctx: FailNativeCommandContext) => Result;
    /**
     * Visit a parse tree produced by the `setTimeZoneInterval`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTimeZoneInterval?: (ctx: SetTimeZoneIntervalContext) => Result;
    /**
     * Visit a parse tree produced by the `setTimeZone`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTimeZone?: (ctx: SetTimeZoneContext) => Result;
    /**
     * Visit a parse tree produced by the `setTimeZoneAny`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTimeZoneAny?: (ctx: SetTimeZoneAnyContext) => Result;
    /**
     * Visit a parse tree produced by the `setVariableAssignment`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetVariableAssignment?: (ctx: SetVariableAssignmentContext) => Result;
    /**
     * Visit a parse tree produced by the `setVariableMultiAssignment`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetVariableMultiAssignment?: (ctx: SetVariableMultiAssignmentContext) => Result;
    /**
     * Visit a parse tree produced by the `setConfig`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetConfig?: (ctx: SetConfigContext) => Result;
    /**
     * Visit a parse tree produced by the `setConfigAndValue`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetConfigAndValue?: (ctx: SetConfigAndValueContext) => Result;
    /**
     * Visit a parse tree produced by the `setConfigAnyKey`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetConfigAnyKey?: (ctx: SetConfigAnyKeyContext) => Result;
    /**
     * Visit a parse tree produced by the `setAny`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetAny?: (ctx: SetAnyContext) => Result;
    /**
     * Visit a parse tree produced by the `resetConfig`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResetConfig?: (ctx: ResetConfigContext) => Result;
    /**
     * Visit a parse tree produced by the `resetAny`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResetAny?: (ctx: ResetAnyContext) => Result;
    /**
     * Visit a parse tree produced by the `createIndex`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateIndex?: (ctx: CreateIndexContext) => Result;
    /**
     * Visit a parse tree produced by the `dropIndex`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropIndex?: (ctx: DropIndexContext) => Result;
    /**
     * Visit a parse tree produced by the `optimizeTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptimizeTable?: (ctx: OptimizeTableContext) => Result;
    /**
     * Visit a parse tree produced by the `unsupportHiveCommands`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnsupportHiveCommands?: (ctx: UnsupportHiveCommandsContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.timezone`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimezone?: (ctx: TimezoneContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.configKey`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConfigKey?: (ctx: ConfigKeyContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.configValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConfigValue?: (ctx: ConfigValueContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.unsupportedHiveNativeCommands`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnsupportedHiveNativeCommands?: (ctx: UnsupportedHiveNativeCommandsContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.createTableHeader`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTableHeader?: (ctx: CreateTableHeaderContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.replaceTableHeader`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplaceTableHeader?: (ctx: ReplaceTableHeaderContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.bucketSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBucketSpec?: (ctx: BucketSpecContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.skewSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSkewSpec?: (ctx: SkewSpecContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.locationSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocationSpec?: (ctx: LocationSpecContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.commentSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommentSpec?: (ctx: CommentSpecContext) => Result;
    /**
     * Visit a parse tree produced by the `queryStatement`
     * labeled alternative in `SQLParser.query`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryStatement?: (ctx: QueryStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.insertInto`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertInto?: (ctx: InsertIntoContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.partitionSpecLocation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionSpecLocation?: (ctx: PartitionSpecLocationContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.partitionSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionSpec?: (ctx: PartitionSpecContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.partitionVal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionVal?: (ctx: PartitionValContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.namespace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamespace?: (ctx: NamespaceContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.namespaces`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamespaces?: (ctx: NamespacesContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.describeFuncName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeFuncName?: (ctx: DescribeFuncNameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.describeColName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeColName?: (ctx: DescribeColNameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.ctes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCtes?: (ctx: CtesContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.namedQuery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedQuery?: (ctx: NamedQueryContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.tableProvider`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableProvider?: (ctx: TableProviderContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.createTableClauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTableClauses?: (ctx: CreateTableClausesContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.propertyList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyList?: (ctx: PropertyListContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProperty?: (ctx: PropertyContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.propertyKey`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyKey?: (ctx: PropertyKeyContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.propertyValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyValue?: (ctx: PropertyValueContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.expressionPropertyList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionPropertyList?: (ctx: ExpressionPropertyListContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.expressionProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionProperty?: (ctx: ExpressionPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.constantList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstantList?: (ctx: ConstantListContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.nestedConstantList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNestedConstantList?: (ctx: NestedConstantListContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.createFileFormat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateFileFormat?: (ctx: CreateFileFormatContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.fileFormat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFileFormat?: (ctx: FileFormatContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.storageHandler`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStorageHandler?: (ctx: StorageHandlerContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.resource`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResource?: (ctx: ResourceContext) => Result;
    /**
     * Visit a parse tree produced by the `insertFromQuery`
     * labeled alternative in `SQLParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertFromQuery?: (ctx: InsertFromQueryContext) => Result;
    /**
     * Visit a parse tree produced by the `multipleInsert`
     * labeled alternative in `SQLParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipleInsert?: (ctx: MultipleInsertContext) => Result;
    /**
     * Visit a parse tree produced by the `deleteFromTable`
     * labeled alternative in `SQLParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeleteFromTable?: (ctx: DeleteFromTableContext) => Result;
    /**
     * Visit a parse tree produced by the `updateTable`
     * labeled alternative in `SQLParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdateTable?: (ctx: UpdateTableContext) => Result;
    /**
     * Visit a parse tree produced by the `mergeIntoTable`
     * labeled alternative in `SQLParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMergeIntoTable?: (ctx: MergeIntoTableContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.namespaceName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamespaceName?: (ctx: NamespaceNameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.namespaceNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamespaceNameCreate?: (ctx: NamespaceNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.tableNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableNameCreate?: (ctx: TableNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.tableName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableName?: (ctx: TableNameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.viewNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewNameCreate?: (ctx: ViewNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.viewName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewName?: (ctx: ViewNameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.columnName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnName?: (ctx: ColumnNameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.columnNameSeq`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameSeq?: (ctx: ColumnNameSeqContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.columnNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameCreate?: (ctx: ColumnNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.identifierReference`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierReference?: (ctx: IdentifierReferenceContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.queryOrganization`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryOrganization?: (ctx: QueryOrganizationContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.multiInsertQueryBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiInsertQueryBody?: (ctx: MultiInsertQueryBodyContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.queryTerm`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryTerm?: (ctx: QueryTermContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.queryPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryPrimary?: (ctx: QueryPrimaryContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.sortItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSortItem?: (ctx: SortItemContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.fromStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFromStatement?: (ctx: FromStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.fromStatementBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFromStatementBody?: (ctx: FromStatementBodyContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.querySpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuerySpecification?: (ctx: QuerySpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.transformClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransformClause?: (ctx: TransformClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.selectClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectClause?: (ctx: SelectClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.setClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetClause?: (ctx: SetClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.matchedClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMatchedClause?: (ctx: MatchedClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.notMatchedClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotMatchedClause?: (ctx: NotMatchedClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.notMatchedBySourceClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotMatchedBySourceClause?: (ctx: NotMatchedBySourceClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.matchedAction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMatchedAction?: (ctx: MatchedActionContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.notMatchedAction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotMatchedAction?: (ctx: NotMatchedActionContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.notMatchedBySourceAction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotMatchedBySourceAction?: (ctx: NotMatchedBySourceActionContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.assignmentList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignmentList?: (ctx: AssignmentListContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.assignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignment?: (ctx: AssignmentContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.whereClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhereClause?: (ctx: WhereClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.havingClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHavingClause?: (ctx: HavingClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.hint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHint?: (ctx: HintContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.hintStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHintStatement?: (ctx: HintStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.fromClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFromClause?: (ctx: FromClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.functionKind`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionKind?: (ctx: FunctionKindContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.temporalClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTemporalClause?: (ctx: TemporalClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.aggregationClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregationClause?: (ctx: AggregationClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.groupByClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupByClause?: (ctx: GroupByClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.groupingAnalytics`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingAnalytics?: (ctx: GroupingAnalyticsContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.groupingElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingElement?: (ctx: GroupingElementContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.groupingSet`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingSet?: (ctx: GroupingSetContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.pivotClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPivotClause?: (ctx: PivotClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.pivotColumn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPivotColumn?: (ctx: PivotColumnContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.pivotValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPivotValue?: (ctx: PivotValueContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.unpivotClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotClause?: (ctx: UnpivotClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.unpivotNullClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotNullClause?: (ctx: UnpivotNullClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.unpivotOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotOperator?: (ctx: UnpivotOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.unpivotSingleValueColumnClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotSingleValueColumnClause?: (ctx: UnpivotSingleValueColumnClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.unpivotMultiValueColumnClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotMultiValueColumnClause?: (ctx: UnpivotMultiValueColumnClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.unpivotColumnSet`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotColumnSet?: (ctx: UnpivotColumnSetContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.unpivotValueColumn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotValueColumn?: (ctx: UnpivotValueColumnContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.unpivotNameColumn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotNameColumn?: (ctx: UnpivotNameColumnContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.unpivotColumnAndAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotColumnAndAlias?: (ctx: UnpivotColumnAndAliasContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.unpivotColumn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotColumn?: (ctx: UnpivotColumnContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.unpivotAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotAlias?: (ctx: UnpivotAliasContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.ifNotExists`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfNotExists?: (ctx: IfNotExistsContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.ifExists`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfExists?: (ctx: IfExistsContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.lateralView`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLateralView?: (ctx: LateralViewContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.setQuantifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetQuantifier?: (ctx: SetQuantifierContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.relation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelation?: (ctx: RelationContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.relationExtension`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelationExtension?: (ctx: RelationExtensionContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.joinRelation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinRelation?: (ctx: JoinRelationContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.joinType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinType?: (ctx: JoinTypeContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.joinCriteria`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinCriteria?: (ctx: JoinCriteriaContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.sample`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSample?: (ctx: SampleContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.sampleMethod`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSampleMethod?: (ctx: SampleMethodContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.identifierList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierList?: (ctx: IdentifierListContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.identifierSeq`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierSeq?: (ctx: IdentifierSeqContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.orderedIdentifierList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderedIdentifierList?: (ctx: OrderedIdentifierListContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.orderedIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderedIdentifier?: (ctx: OrderedIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.identifierCommentList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierCommentList?: (ctx: IdentifierCommentListContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.identifierComment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierComment?: (ctx: IdentifierCommentContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.relationPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelationPrimary?: (ctx: RelationPrimaryContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.inlineTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInlineTable?: (ctx: InlineTableContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.functionTableSubqueryArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionTableSubqueryArgument?: (ctx: FunctionTableSubqueryArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.tableArgumentPartitioning`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableArgumentPartitioning?: (ctx: TableArgumentPartitioningContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.functionTableNamedArgumentExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionTableNamedArgumentExpression?: (ctx: FunctionTableNamedArgumentExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.functionTableReferenceArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionTableReferenceArgument?: (ctx: FunctionTableReferenceArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.functionTableArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionTableArgument?: (ctx: FunctionTableArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.functionTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionTable?: (ctx: FunctionTableContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.tableAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableAlias?: (ctx: TableAliasContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.rowFormat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowFormat?: (ctx: RowFormatContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.multipartIdentifierList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipartIdentifierList?: (ctx: MultipartIdentifierListContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.multipartIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipartIdentifier?: (ctx: MultipartIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.multipartIdentifierPropertyList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipartIdentifierPropertyList?: (ctx: MultipartIdentifierPropertyListContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.multipartIdentifierProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipartIdentifierProperty?: (ctx: MultipartIdentifierPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.tableIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableIdentifier?: (ctx: TableIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.viewIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewIdentifier?: (ctx: ViewIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.namedExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedExpression?: (ctx: NamedExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.namedExpressionSeq`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedExpressionSeq?: (ctx: NamedExpressionSeqContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.partitionFieldList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionFieldList?: (ctx: PartitionFieldListContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.partitionField`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionField?: (ctx: PartitionFieldContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.transform`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransform?: (ctx: TransformContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.transformArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransformArgument?: (ctx: TransformArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.namedArgumentExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedArgumentExpression?: (ctx: NamedArgumentExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.functionArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionArgument?: (ctx: FunctionArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.expressionSeq`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionSeq?: (ctx: ExpressionSeqContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanExpression?: (ctx: BooleanExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicate?: (ctx: PredicateContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueExpression?: (ctx: ValueExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.datetimeUnit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatetimeUnit?: (ctx: DatetimeUnitContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.literalType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteralType?: (ctx: LiteralTypeContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.constant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstant?: (ctx: ConstantContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.comparisonOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.arithmeticOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArithmeticOperator?: (ctx: ArithmeticOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.predicateOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicateOperator?: (ctx: PredicateOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.booleanValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanValue?: (ctx: BooleanValueContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.interval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterval?: (ctx: IntervalContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.errorCapturingMultiUnitsInterval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorCapturingMultiUnitsInterval?: (ctx: ErrorCapturingMultiUnitsIntervalContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.multiUnitsInterval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiUnitsInterval?: (ctx: MultiUnitsIntervalContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.errorCapturingUnitToUnitInterval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorCapturingUnitToUnitInterval?: (ctx: ErrorCapturingUnitToUnitIntervalContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.unitToUnitInterval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnitToUnitInterval?: (ctx: UnitToUnitIntervalContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.intervalValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntervalValue?: (ctx: IntervalValueContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.unitInMultiUnits`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnitInMultiUnits?: (ctx: UnitInMultiUnitsContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.unitInUnitToUnit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnitInUnitToUnit?: (ctx: UnitInUnitToUnitContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.colPosition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColPosition?: (ctx: ColPositionContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType?: (ctx: TypeContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.dataType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDataType?: (ctx: DataTypeContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.qualifiedColTypeWithPositionSeqForAdd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedColTypeWithPositionSeqForAdd?: (ctx: QualifiedColTypeWithPositionSeqForAddContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.qualifiedColTypeWithPositionForAdd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedColTypeWithPositionForAdd?: (ctx: QualifiedColTypeWithPositionForAddContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.qualifiedColTypeWithPositionSeqForReplace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedColTypeWithPositionSeqForReplace?: (ctx: QualifiedColTypeWithPositionSeqForReplaceContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.qualifiedColTypeWithPositionForReplace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedColTypeWithPositionForReplace?: (ctx: QualifiedColTypeWithPositionForReplaceContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.colDefinitionDescriptorWithPosition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColDefinitionDescriptorWithPosition?: (ctx: ColDefinitionDescriptorWithPositionContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.defaultExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefaultExpression?: (ctx: DefaultExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.variableDefaultExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableDefaultExpression?: (ctx: VariableDefaultExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.colTypeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColTypeList?: (ctx: ColTypeListContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.colType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColType?: (ctx: ColTypeContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.createOrReplaceTableColTypeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateOrReplaceTableColTypeList?: (ctx: CreateOrReplaceTableColTypeListContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.createOrReplaceTableColType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateOrReplaceTableColType?: (ctx: CreateOrReplaceTableColTypeContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.colDefinitionOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColDefinitionOption?: (ctx: ColDefinitionOptionContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.generationExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenerationExpression?: (ctx: GenerationExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.complexColTypeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComplexColTypeList?: (ctx: ComplexColTypeListContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.complexColType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComplexColType?: (ctx: ComplexColTypeContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.whenClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhenClause?: (ctx: WhenClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.windowClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowClause?: (ctx: WindowClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.zorderClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitZorderClause?: (ctx: ZorderClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.namedWindow`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedWindow?: (ctx: NamedWindowContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.windowSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowSpec?: (ctx: WindowSpecContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.windowFrame`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowFrame?: (ctx: WindowFrameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.frameBound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrameBound?: (ctx: FrameBoundContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.qualifiedNameList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedNameList?: (ctx: QualifiedNameListContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.functionName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionName?: (ctx: FunctionNameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.functionNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionNameCreate?: (ctx: FunctionNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.qualifiedName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedName?: (ctx: QualifiedNameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.errorCapturingIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorCapturingIdentifier?: (ctx: ErrorCapturingIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.errorCapturingIdentifierExtra`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorCapturingIdentifierExtra?: (ctx: ErrorCapturingIdentifierExtraContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifier?: (ctx: IdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.strictIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStrictIdentifier?: (ctx: StrictIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.quotedIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.backQuotedIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.number`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumber?: (ctx: NumberContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.alterColumnAction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterColumnAction?: (ctx: AlterColumnActionContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.stringLit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringLit?: (ctx: StringLitContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.comment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComment?: (ctx: CommentContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.version`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVersion?: (ctx: VersionContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.ansiNonReserved`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnsiNonReserved?: (ctx: AnsiNonReservedContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.strictNonReserved`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStrictNonReserved?: (ctx: StrictNonReservedContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.nonReserved`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonReserved?: (ctx: NonReservedContext) => Result;
}

