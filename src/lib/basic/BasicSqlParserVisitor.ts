// Generated from dt-sql-parser/src/grammar/basic/BasicSqlParser.g4 by ANTLR 4.13.1

// @ts-nocheck

import { AbstractParseTreeVisitor } from "antlr4ng";


import { SQLParserBase } from '../SQLParserBase';


import { ProgramContext } from "./BasicSqlParser.js";
import { SingleStatementContext } from "./BasicSqlParser.js";
import { StatementDefaultContext } from "./BasicSqlParser.js";
import { DmlStatementContext } from "./BasicSqlParser.js";
import { UseNamespaceContext } from "./BasicSqlParser.js";
import { SetCatalogContext } from "./BasicSqlParser.js";
import { CreateNamespaceContext } from "./BasicSqlParser.js";
import { SetNamespacePropertiesContext } from "./BasicSqlParser.js";
import { SetNamespaceLocationContext } from "./BasicSqlParser.js";
import { DropNamespaceContext } from "./BasicSqlParser.js";
import { ShowNamespacesContext } from "./BasicSqlParser.js";
import { CreateTableContext } from "./BasicSqlParser.js";
import { CreateTableLikeContext } from "./BasicSqlParser.js";
import { ReplaceTableContext } from "./BasicSqlParser.js";
import { AnalyzeContext } from "./BasicSqlParser.js";
import { AnalyzeTablesContext } from "./BasicSqlParser.js";
import { AlterTableAddColumnContext } from "./BasicSqlParser.js";
import { AlterTableAddColumnsContext } from "./BasicSqlParser.js";
import { RenameTableColumnContext } from "./BasicSqlParser.js";
import { AlterTableDropColumnContext } from "./BasicSqlParser.js";
import { DropTableColumnsContext } from "./BasicSqlParser.js";
import { RenameTableContext } from "./BasicSqlParser.js";
import { SetTablePropertiesContext } from "./BasicSqlParser.js";
import { UnsetTablePropertiesContext } from "./BasicSqlParser.js";
import { AlterTableAlterColumnContext } from "./BasicSqlParser.js";
import { HiveChangeColumnContext } from "./BasicSqlParser.js";
import { HiveReplaceColumnsContext } from "./BasicSqlParser.js";
import { SetTableSerDeContext } from "./BasicSqlParser.js";
import { SetTableSerDePropertiesContext } from "./BasicSqlParser.js";
import { AddTablePartitionContext } from "./BasicSqlParser.js";
import { RenameTablePartitionContext } from "./BasicSqlParser.js";
import { DropTablePartitionsContext } from "./BasicSqlParser.js";
import { SetTableLocationContext } from "./BasicSqlParser.js";
import { RecoverPartitionsContext } from "./BasicSqlParser.js";
import { AlterMaterializedViewRewriteContext } from "./BasicSqlParser.js";
import { AlterMaterializedViewPropertiesContext } from "./BasicSqlParser.js";
import { DropTableContext } from "./BasicSqlParser.js";
import { DropViewContext } from "./BasicSqlParser.js";
import { DropMaterializedViewContext } from "./BasicSqlParser.js";
import { CreateViewContext } from "./BasicSqlParser.js";
import { CreateTempViewUsingContext } from "./BasicSqlParser.js";
import { AlterViewQueryContext } from "./BasicSqlParser.js";
import { CreateFunctionContext } from "./BasicSqlParser.js";
import { CreateMaterializedViewContext } from "./BasicSqlParser.js";
import { DropFunctionContext } from "./BasicSqlParser.js";
import { DeclareVariableContext } from "./BasicSqlParser.js";
import { DropVariableContext } from "./BasicSqlParser.js";
import { ExplainStatementContext } from "./BasicSqlParser.js";
import { ShowTablesContext } from "./BasicSqlParser.js";
import { ShowTableExtendedContext } from "./BasicSqlParser.js";
import { ShowTblPropertiesContext } from "./BasicSqlParser.js";
import { ShowColumnsContext } from "./BasicSqlParser.js";
import { ShowViewsContext } from "./BasicSqlParser.js";
import { ShowPartitionsContext } from "./BasicSqlParser.js";
import { ShowFunctionsContext } from "./BasicSqlParser.js";
import { ShowCreateTableContext } from "./BasicSqlParser.js";
import { ShowCurrentNamespaceContext } from "./BasicSqlParser.js";
import { ShowCatalogsContext } from "./BasicSqlParser.js";
import { ShowMaterializedViewsContext } from "./BasicSqlParser.js";
import { ShowCreateMaterializedViewContext } from "./BasicSqlParser.js";
import { DescribeFunctionContext } from "./BasicSqlParser.js";
import { DescribeNamespaceContext } from "./BasicSqlParser.js";
import { DescribeRelationContext } from "./BasicSqlParser.js";
import { DescribeQueryContext } from "./BasicSqlParser.js";
import { CommentNamespaceContext } from "./BasicSqlParser.js";
import { CommentTableContext } from "./BasicSqlParser.js";
import { RefreshTableContext } from "./BasicSqlParser.js";
import { RefreshFunctionContext } from "./BasicSqlParser.js";
import { RefreshResourceContext } from "./BasicSqlParser.js";
import { RefreshMaterializedViewContext } from "./BasicSqlParser.js";
import { CacheTableContext } from "./BasicSqlParser.js";
import { UnCacheTableContext } from "./BasicSqlParser.js";
import { ClearCacheContext } from "./BasicSqlParser.js";
import { LoadDataContext } from "./BasicSqlParser.js";
import { TruncateTableContext } from "./BasicSqlParser.js";
import { RepairTableContext } from "./BasicSqlParser.js";
import { ManageResourceContext } from "./BasicSqlParser.js";
import { FailNativeCommandContext } from "./BasicSqlParser.js";
import { SetTimeZoneIntervalContext } from "./BasicSqlParser.js";
import { SetTimeZoneContext } from "./BasicSqlParser.js";
import { SetTimeZoneAnyContext } from "./BasicSqlParser.js";
import { SetVariableAssignmentContext } from "./BasicSqlParser.js";
import { SetVariableMultiAssignmentContext } from "./BasicSqlParser.js";
import { SetConfigContext } from "./BasicSqlParser.js";
import { SetConfigAndValueContext } from "./BasicSqlParser.js";
import { SetConfigAnyKeyContext } from "./BasicSqlParser.js";
import { SetAnyContext } from "./BasicSqlParser.js";
import { ResetConfigContext } from "./BasicSqlParser.js";
import { ResetAnyContext } from "./BasicSqlParser.js";
import { CreateIndexContext } from "./BasicSqlParser.js";
import { DropIndexContext } from "./BasicSqlParser.js";
import { OptimizeTableContext } from "./BasicSqlParser.js";
import { UnsupportHiveCommandsContext } from "./BasicSqlParser.js";
import { TimezoneContext } from "./BasicSqlParser.js";
import { ConfigKeyContext } from "./BasicSqlParser.js";
import { ConfigValueContext } from "./BasicSqlParser.js";
import { UnsupportedHiveNativeCommandsContext } from "./BasicSqlParser.js";
import { CreateTableHeaderContext } from "./BasicSqlParser.js";
import { ReplaceTableHeaderContext } from "./BasicSqlParser.js";
import { BucketSpecContext } from "./BasicSqlParser.js";
import { SkewSpecContext } from "./BasicSqlParser.js";
import { LocationSpecContext } from "./BasicSqlParser.js";
import { CommentSpecContext } from "./BasicSqlParser.js";
import { QueryStatementContext } from "./BasicSqlParser.js";
import { InsertIntoContext } from "./BasicSqlParser.js";
import { PartitionSpecLocationContext } from "./BasicSqlParser.js";
import { PartitionSpecContext } from "./BasicSqlParser.js";
import { PartitionValContext } from "./BasicSqlParser.js";
import { NamespaceContext } from "./BasicSqlParser.js";
import { NamespacesContext } from "./BasicSqlParser.js";
import { DescribeFuncNameContext } from "./BasicSqlParser.js";
import { DescribeColNameContext } from "./BasicSqlParser.js";
import { CtesContext } from "./BasicSqlParser.js";
import { NamedQueryContext } from "./BasicSqlParser.js";
import { TableProviderContext } from "./BasicSqlParser.js";
import { CreateTableClausesContext } from "./BasicSqlParser.js";
import { PropertyListContext } from "./BasicSqlParser.js";
import { PropertyContext } from "./BasicSqlParser.js";
import { PropertyKeyContext } from "./BasicSqlParser.js";
import { PropertyValueContext } from "./BasicSqlParser.js";
import { ExpressionPropertyListContext } from "./BasicSqlParser.js";
import { ExpressionPropertyContext } from "./BasicSqlParser.js";
import { ConstantListContext } from "./BasicSqlParser.js";
import { NestedConstantListContext } from "./BasicSqlParser.js";
import { CreateFileFormatContext } from "./BasicSqlParser.js";
import { FileFormatContext } from "./BasicSqlParser.js";
import { StorageHandlerContext } from "./BasicSqlParser.js";
import { ResourceContext } from "./BasicSqlParser.js";
import { InsertFromQueryContext } from "./BasicSqlParser.js";
import { MultipleInsertContext } from "./BasicSqlParser.js";
import { DeleteFromTableContext } from "./BasicSqlParser.js";
import { UpdateTableContext } from "./BasicSqlParser.js";
import { MergeIntoTableContext } from "./BasicSqlParser.js";
import { NamespaceNameContext } from "./BasicSqlParser.js";
import { NamespaceNameCreateContext } from "./BasicSqlParser.js";
import { TableNameCreateContext } from "./BasicSqlParser.js";
import { TableNameContext } from "./BasicSqlParser.js";
import { ViewNameCreateContext } from "./BasicSqlParser.js";
import { ViewNameContext } from "./BasicSqlParser.js";
import { ColumnNameContext } from "./BasicSqlParser.js";
import { ColumnNameSeqContext } from "./BasicSqlParser.js";
import { ColumnNameCreateContext } from "./BasicSqlParser.js";
import { IdentifierReferenceContext } from "./BasicSqlParser.js";
import { QueryOrganizationContext } from "./BasicSqlParser.js";
import { MultiInsertQueryBodyContext } from "./BasicSqlParser.js";
import { QueryTermContext } from "./BasicSqlParser.js";
import { QueryPrimaryContext } from "./BasicSqlParser.js";
import { SortItemContext } from "./BasicSqlParser.js";
import { FromStatementContext } from "./BasicSqlParser.js";
import { FromStatementBodyContext } from "./BasicSqlParser.js";
import { QuerySpecificationContext } from "./BasicSqlParser.js";
import { TransformClauseContext } from "./BasicSqlParser.js";
import { SelectClauseContext } from "./BasicSqlParser.js";
import { SetClauseContext } from "./BasicSqlParser.js";
import { MatchedClauseContext } from "./BasicSqlParser.js";
import { NotMatchedClauseContext } from "./BasicSqlParser.js";
import { NotMatchedBySourceClauseContext } from "./BasicSqlParser.js";
import { MatchedActionContext } from "./BasicSqlParser.js";
import { NotMatchedActionContext } from "./BasicSqlParser.js";
import { NotMatchedBySourceActionContext } from "./BasicSqlParser.js";
import { AssignmentListContext } from "./BasicSqlParser.js";
import { AssignmentContext } from "./BasicSqlParser.js";
import { WhereClauseContext } from "./BasicSqlParser.js";
import { HavingClauseContext } from "./BasicSqlParser.js";
import { HintContext } from "./BasicSqlParser.js";
import { HintStatementContext } from "./BasicSqlParser.js";
import { FromClauseContext } from "./BasicSqlParser.js";
import { FunctionKindContext } from "./BasicSqlParser.js";
import { TemporalClauseContext } from "./BasicSqlParser.js";
import { AggregationClauseContext } from "./BasicSqlParser.js";
import { GroupByClauseContext } from "./BasicSqlParser.js";
import { GroupingAnalyticsContext } from "./BasicSqlParser.js";
import { GroupingElementContext } from "./BasicSqlParser.js";
import { GroupingSetContext } from "./BasicSqlParser.js";
import { PivotClauseContext } from "./BasicSqlParser.js";
import { PivotColumnContext } from "./BasicSqlParser.js";
import { PivotValueContext } from "./BasicSqlParser.js";
import { UnpivotClauseContext } from "./BasicSqlParser.js";
import { UnpivotNullClauseContext } from "./BasicSqlParser.js";
import { UnpivotOperatorContext } from "./BasicSqlParser.js";
import { UnpivotSingleValueColumnClauseContext } from "./BasicSqlParser.js";
import { UnpivotMultiValueColumnClauseContext } from "./BasicSqlParser.js";
import { UnpivotColumnSetContext } from "./BasicSqlParser.js";
import { UnpivotValueColumnContext } from "./BasicSqlParser.js";
import { UnpivotNameColumnContext } from "./BasicSqlParser.js";
import { UnpivotColumnAndAliasContext } from "./BasicSqlParser.js";
import { UnpivotColumnContext } from "./BasicSqlParser.js";
import { UnpivotAliasContext } from "./BasicSqlParser.js";
import { IfNotExistsContext } from "./BasicSqlParser.js";
import { IfExistsContext } from "./BasicSqlParser.js";
import { LateralViewContext } from "./BasicSqlParser.js";
import { SetQuantifierContext } from "./BasicSqlParser.js";
import { RelationContext } from "./BasicSqlParser.js";
import { RelationExtensionContext } from "./BasicSqlParser.js";
import { JoinRelationContext } from "./BasicSqlParser.js";
import { JoinTypeContext } from "./BasicSqlParser.js";
import { JoinCriteriaContext } from "./BasicSqlParser.js";
import { SampleContext } from "./BasicSqlParser.js";
import { SampleMethodContext } from "./BasicSqlParser.js";
import { IdentifierListContext } from "./BasicSqlParser.js";
import { IdentifierSeqContext } from "./BasicSqlParser.js";
import { OrderedIdentifierListContext } from "./BasicSqlParser.js";
import { OrderedIdentifierContext } from "./BasicSqlParser.js";
import { IdentifierCommentListContext } from "./BasicSqlParser.js";
import { IdentifierCommentContext } from "./BasicSqlParser.js";
import { RelationPrimaryContext } from "./BasicSqlParser.js";
import { InlineTableContext } from "./BasicSqlParser.js";
import { FunctionTableSubqueryArgumentContext } from "./BasicSqlParser.js";
import { TableArgumentPartitioningContext } from "./BasicSqlParser.js";
import { FunctionTableNamedArgumentExpressionContext } from "./BasicSqlParser.js";
import { FunctionTableReferenceArgumentContext } from "./BasicSqlParser.js";
import { FunctionTableArgumentContext } from "./BasicSqlParser.js";
import { FunctionTableContext } from "./BasicSqlParser.js";
import { TableAliasContext } from "./BasicSqlParser.js";
import { RowFormatContext } from "./BasicSqlParser.js";
import { MultipartIdentifierListContext } from "./BasicSqlParser.js";
import { MultipartIdentifierContext } from "./BasicSqlParser.js";
import { MultipartIdentifierPropertyListContext } from "./BasicSqlParser.js";
import { MultipartIdentifierPropertyContext } from "./BasicSqlParser.js";
import { TableIdentifierContext } from "./BasicSqlParser.js";
import { ViewIdentifierContext } from "./BasicSqlParser.js";
import { NamedExpressionContext } from "./BasicSqlParser.js";
import { NamedExpressionSeqContext } from "./BasicSqlParser.js";
import { PartitionFieldListContext } from "./BasicSqlParser.js";
import { PartitionFieldContext } from "./BasicSqlParser.js";
import { TransformContext } from "./BasicSqlParser.js";
import { TransformArgumentContext } from "./BasicSqlParser.js";
import { ExpressionContext } from "./BasicSqlParser.js";
import { NamedArgumentExpressionContext } from "./BasicSqlParser.js";
import { FunctionArgumentContext } from "./BasicSqlParser.js";
import { ExpressionSeqContext } from "./BasicSqlParser.js";
import { BooleanExpressionContext } from "./BasicSqlParser.js";
import { PredicateContext } from "./BasicSqlParser.js";
import { ValueExpressionContext } from "./BasicSqlParser.js";
import { DatetimeUnitContext } from "./BasicSqlParser.js";
import { PrimaryExpressionContext } from "./BasicSqlParser.js";
import { LiteralTypeContext } from "./BasicSqlParser.js";
import { ConstantContext } from "./BasicSqlParser.js";
import { ComparisonOperatorContext } from "./BasicSqlParser.js";
import { ArithmeticOperatorContext } from "./BasicSqlParser.js";
import { PredicateOperatorContext } from "./BasicSqlParser.js";
import { BooleanValueContext } from "./BasicSqlParser.js";
import { IntervalContext } from "./BasicSqlParser.js";
import { ErrorCapturingMultiUnitsIntervalContext } from "./BasicSqlParser.js";
import { MultiUnitsIntervalContext } from "./BasicSqlParser.js";
import { ErrorCapturingUnitToUnitIntervalContext } from "./BasicSqlParser.js";
import { UnitToUnitIntervalContext } from "./BasicSqlParser.js";
import { IntervalValueContext } from "./BasicSqlParser.js";
import { UnitInMultiUnitsContext } from "./BasicSqlParser.js";
import { UnitInUnitToUnitContext } from "./BasicSqlParser.js";
import { ColPositionContext } from "./BasicSqlParser.js";
import { TypeContext } from "./BasicSqlParser.js";
import { DataTypeContext } from "./BasicSqlParser.js";
import { QualifiedColTypeWithPositionSeqForAddContext } from "./BasicSqlParser.js";
import { QualifiedColTypeWithPositionForAddContext } from "./BasicSqlParser.js";
import { QualifiedColTypeWithPositionSeqForReplaceContext } from "./BasicSqlParser.js";
import { QualifiedColTypeWithPositionForReplaceContext } from "./BasicSqlParser.js";
import { ColDefinitionDescriptorWithPositionContext } from "./BasicSqlParser.js";
import { DefaultExpressionContext } from "./BasicSqlParser.js";
import { VariableDefaultExpressionContext } from "./BasicSqlParser.js";
import { ColTypeListContext } from "./BasicSqlParser.js";
import { ColTypeContext } from "./BasicSqlParser.js";
import { CreateOrReplaceTableColTypeListContext } from "./BasicSqlParser.js";
import { CreateOrReplaceTableColTypeContext } from "./BasicSqlParser.js";
import { ColDefinitionOptionContext } from "./BasicSqlParser.js";
import { GenerationExpressionContext } from "./BasicSqlParser.js";
import { ComplexColTypeListContext } from "./BasicSqlParser.js";
import { ComplexColTypeContext } from "./BasicSqlParser.js";
import { WhenClauseContext } from "./BasicSqlParser.js";
import { WindowClauseContext } from "./BasicSqlParser.js";
import { ZorderClauseContext } from "./BasicSqlParser.js";
import { NamedWindowContext } from "./BasicSqlParser.js";
import { WindowSpecContext } from "./BasicSqlParser.js";
import { WindowFrameContext } from "./BasicSqlParser.js";
import { FrameBoundContext } from "./BasicSqlParser.js";
import { QualifiedNameListContext } from "./BasicSqlParser.js";
import { FunctionNameContext } from "./BasicSqlParser.js";
import { FunctionNameCreateContext } from "./BasicSqlParser.js";
import { QualifiedNameContext } from "./BasicSqlParser.js";
import { ErrorCapturingIdentifierContext } from "./BasicSqlParser.js";
import { ErrorCapturingIdentifierExtraContext } from "./BasicSqlParser.js";
import { IdentifierContext } from "./BasicSqlParser.js";
import { StrictIdentifierContext } from "./BasicSqlParser.js";
import { QuotedIdentifierContext } from "./BasicSqlParser.js";
import { BackQuotedIdentifierContext } from "./BasicSqlParser.js";
import { NumberContext } from "./BasicSqlParser.js";
import { AlterColumnActionContext } from "./BasicSqlParser.js";
import { StringLitContext } from "./BasicSqlParser.js";
import { CommentContext } from "./BasicSqlParser.js";
import { VersionContext } from "./BasicSqlParser.js";
import { AnsiNonReservedContext } from "./BasicSqlParser.js";
import { StrictNonReservedContext } from "./BasicSqlParser.js";
import { NonReservedContext } from "./BasicSqlParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `BasicSqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class BasicSqlParserVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `BasicSqlParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.singleStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingleStatement?: (ctx: SingleStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `statementDefault`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatementDefault?: (ctx: StatementDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `dmlStatement`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDmlStatement?: (ctx: DmlStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `useNamespace`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUseNamespace?: (ctx: UseNamespaceContext) => Result;
    /**
     * Visit a parse tree produced by the `setCatalog`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetCatalog?: (ctx: SetCatalogContext) => Result;
    /**
     * Visit a parse tree produced by the `createNamespace`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateNamespace?: (ctx: CreateNamespaceContext) => Result;
    /**
     * Visit a parse tree produced by the `setNamespaceProperties`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetNamespaceProperties?: (ctx: SetNamespacePropertiesContext) => Result;
    /**
     * Visit a parse tree produced by the `setNamespaceLocation`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetNamespaceLocation?: (ctx: SetNamespaceLocationContext) => Result;
    /**
     * Visit a parse tree produced by the `dropNamespace`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropNamespace?: (ctx: DropNamespaceContext) => Result;
    /**
     * Visit a parse tree produced by the `showNamespaces`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowNamespaces?: (ctx: ShowNamespacesContext) => Result;
    /**
     * Visit a parse tree produced by the `createTable`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTable?: (ctx: CreateTableContext) => Result;
    /**
     * Visit a parse tree produced by the `createTableLike`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTableLike?: (ctx: CreateTableLikeContext) => Result;
    /**
     * Visit a parse tree produced by the `replaceTable`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplaceTable?: (ctx: ReplaceTableContext) => Result;
    /**
     * Visit a parse tree produced by the `analyze`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyze?: (ctx: AnalyzeContext) => Result;
    /**
     * Visit a parse tree produced by the `analyzeTables`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyzeTables?: (ctx: AnalyzeTablesContext) => Result;
    /**
     * Visit a parse tree produced by the `alterTableAddColumn`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTableAddColumn?: (ctx: AlterTableAddColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `alterTableAddColumns`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTableAddColumns?: (ctx: AlterTableAddColumnsContext) => Result;
    /**
     * Visit a parse tree produced by the `renameTableColumn`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenameTableColumn?: (ctx: RenameTableColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `alterTableDropColumn`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTableDropColumn?: (ctx: AlterTableDropColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `dropTableColumns`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropTableColumns?: (ctx: DropTableColumnsContext) => Result;
    /**
     * Visit a parse tree produced by the `renameTable`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenameTable?: (ctx: RenameTableContext) => Result;
    /**
     * Visit a parse tree produced by the `setTableProperties`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTableProperties?: (ctx: SetTablePropertiesContext) => Result;
    /**
     * Visit a parse tree produced by the `unsetTableProperties`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnsetTableProperties?: (ctx: UnsetTablePropertiesContext) => Result;
    /**
     * Visit a parse tree produced by the `alterTableAlterColumn`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTableAlterColumn?: (ctx: AlterTableAlterColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `hiveChangeColumn`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHiveChangeColumn?: (ctx: HiveChangeColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `hiveReplaceColumns`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHiveReplaceColumns?: (ctx: HiveReplaceColumnsContext) => Result;
    /**
     * Visit a parse tree produced by the `setTableSerDe`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTableSerDe?: (ctx: SetTableSerDeContext) => Result;
    /**
     * Visit a parse tree produced by the `setTableSerDeProperties`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTableSerDeProperties?: (ctx: SetTableSerDePropertiesContext) => Result;
    /**
     * Visit a parse tree produced by the `addTablePartition`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddTablePartition?: (ctx: AddTablePartitionContext) => Result;
    /**
     * Visit a parse tree produced by the `renameTablePartition`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenameTablePartition?: (ctx: RenameTablePartitionContext) => Result;
    /**
     * Visit a parse tree produced by the `dropTablePartitions`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropTablePartitions?: (ctx: DropTablePartitionsContext) => Result;
    /**
     * Visit a parse tree produced by the `setTableLocation`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTableLocation?: (ctx: SetTableLocationContext) => Result;
    /**
     * Visit a parse tree produced by the `recoverPartitions`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRecoverPartitions?: (ctx: RecoverPartitionsContext) => Result;
    /**
     * Visit a parse tree produced by the `alterMaterializedViewRewrite`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterMaterializedViewRewrite?: (ctx: AlterMaterializedViewRewriteContext) => Result;
    /**
     * Visit a parse tree produced by the `alterMaterializedViewProperties`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterMaterializedViewProperties?: (ctx: AlterMaterializedViewPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by the `dropTable`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropTable?: (ctx: DropTableContext) => Result;
    /**
     * Visit a parse tree produced by the `dropView`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropView?: (ctx: DropViewContext) => Result;
    /**
     * Visit a parse tree produced by the `dropMaterializedView`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropMaterializedView?: (ctx: DropMaterializedViewContext) => Result;
    /**
     * Visit a parse tree produced by the `createView`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateView?: (ctx: CreateViewContext) => Result;
    /**
     * Visit a parse tree produced by the `createTempViewUsing`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTempViewUsing?: (ctx: CreateTempViewUsingContext) => Result;
    /**
     * Visit a parse tree produced by the `alterViewQuery`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterViewQuery?: (ctx: AlterViewQueryContext) => Result;
    /**
     * Visit a parse tree produced by the `createFunction`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateFunction?: (ctx: CreateFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `createMaterializedView`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => Result;
    /**
     * Visit a parse tree produced by the `dropFunction`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropFunction?: (ctx: DropFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `declareVariable`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeclareVariable?: (ctx: DeclareVariableContext) => Result;
    /**
     * Visit a parse tree produced by the `dropVariable`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropVariable?: (ctx: DropVariableContext) => Result;
    /**
     * Visit a parse tree produced by the `explainStatement`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplainStatement?: (ctx: ExplainStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `showTables`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTables?: (ctx: ShowTablesContext) => Result;
    /**
     * Visit a parse tree produced by the `showTableExtended`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTableExtended?: (ctx: ShowTableExtendedContext) => Result;
    /**
     * Visit a parse tree produced by the `showTblProperties`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTblProperties?: (ctx: ShowTblPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by the `showColumns`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowColumns?: (ctx: ShowColumnsContext) => Result;
    /**
     * Visit a parse tree produced by the `showViews`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowViews?: (ctx: ShowViewsContext) => Result;
    /**
     * Visit a parse tree produced by the `showPartitions`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowPartitions?: (ctx: ShowPartitionsContext) => Result;
    /**
     * Visit a parse tree produced by the `showFunctions`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowFunctions?: (ctx: ShowFunctionsContext) => Result;
    /**
     * Visit a parse tree produced by the `showCreateTable`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCreateTable?: (ctx: ShowCreateTableContext) => Result;
    /**
     * Visit a parse tree produced by the `showCurrentNamespace`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCurrentNamespace?: (ctx: ShowCurrentNamespaceContext) => Result;
    /**
     * Visit a parse tree produced by the `showCatalogs`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCatalogs?: (ctx: ShowCatalogsContext) => Result;
    /**
     * Visit a parse tree produced by the `showMaterializedViews`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowMaterializedViews?: (ctx: ShowMaterializedViewsContext) => Result;
    /**
     * Visit a parse tree produced by the `showCreateMaterializedView`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCreateMaterializedView?: (ctx: ShowCreateMaterializedViewContext) => Result;
    /**
     * Visit a parse tree produced by the `describeFunction`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeFunction?: (ctx: DescribeFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `describeNamespace`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeNamespace?: (ctx: DescribeNamespaceContext) => Result;
    /**
     * Visit a parse tree produced by the `describeRelation`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeRelation?: (ctx: DescribeRelationContext) => Result;
    /**
     * Visit a parse tree produced by the `describeQuery`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeQuery?: (ctx: DescribeQueryContext) => Result;
    /**
     * Visit a parse tree produced by the `commentNamespace`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommentNamespace?: (ctx: CommentNamespaceContext) => Result;
    /**
     * Visit a parse tree produced by the `commentTable`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommentTable?: (ctx: CommentTableContext) => Result;
    /**
     * Visit a parse tree produced by the `refreshTable`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefreshTable?: (ctx: RefreshTableContext) => Result;
    /**
     * Visit a parse tree produced by the `refreshFunction`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefreshFunction?: (ctx: RefreshFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `refreshResource`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefreshResource?: (ctx: RefreshResourceContext) => Result;
    /**
     * Visit a parse tree produced by the `refreshMaterializedView`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefreshMaterializedView?: (ctx: RefreshMaterializedViewContext) => Result;
    /**
     * Visit a parse tree produced by the `cacheTable`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCacheTable?: (ctx: CacheTableContext) => Result;
    /**
     * Visit a parse tree produced by the `unCacheTable`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnCacheTable?: (ctx: UnCacheTableContext) => Result;
    /**
     * Visit a parse tree produced by the `clearCache`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClearCache?: (ctx: ClearCacheContext) => Result;
    /**
     * Visit a parse tree produced by the `loadData`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoadData?: (ctx: LoadDataContext) => Result;
    /**
     * Visit a parse tree produced by the `truncateTable`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTruncateTable?: (ctx: TruncateTableContext) => Result;
    /**
     * Visit a parse tree produced by the `repairTable`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRepairTable?: (ctx: RepairTableContext) => Result;
    /**
     * Visit a parse tree produced by the `manageResource`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitManageResource?: (ctx: ManageResourceContext) => Result;
    /**
     * Visit a parse tree produced by the `failNativeCommand`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFailNativeCommand?: (ctx: FailNativeCommandContext) => Result;
    /**
     * Visit a parse tree produced by the `setTimeZoneInterval`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTimeZoneInterval?: (ctx: SetTimeZoneIntervalContext) => Result;
    /**
     * Visit a parse tree produced by the `setTimeZone`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTimeZone?: (ctx: SetTimeZoneContext) => Result;
    /**
     * Visit a parse tree produced by the `setTimeZoneAny`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTimeZoneAny?: (ctx: SetTimeZoneAnyContext) => Result;
    /**
     * Visit a parse tree produced by the `setVariableAssignment`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetVariableAssignment?: (ctx: SetVariableAssignmentContext) => Result;
    /**
     * Visit a parse tree produced by the `setVariableMultiAssignment`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetVariableMultiAssignment?: (ctx: SetVariableMultiAssignmentContext) => Result;
    /**
     * Visit a parse tree produced by the `setConfig`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetConfig?: (ctx: SetConfigContext) => Result;
    /**
     * Visit a parse tree produced by the `setConfigAndValue`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetConfigAndValue?: (ctx: SetConfigAndValueContext) => Result;
    /**
     * Visit a parse tree produced by the `setConfigAnyKey`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetConfigAnyKey?: (ctx: SetConfigAnyKeyContext) => Result;
    /**
     * Visit a parse tree produced by the `setAny`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetAny?: (ctx: SetAnyContext) => Result;
    /**
     * Visit a parse tree produced by the `resetConfig`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResetConfig?: (ctx: ResetConfigContext) => Result;
    /**
     * Visit a parse tree produced by the `resetAny`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResetAny?: (ctx: ResetAnyContext) => Result;
    /**
     * Visit a parse tree produced by the `createIndex`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateIndex?: (ctx: CreateIndexContext) => Result;
    /**
     * Visit a parse tree produced by the `dropIndex`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropIndex?: (ctx: DropIndexContext) => Result;
    /**
     * Visit a parse tree produced by the `optimizeTable`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptimizeTable?: (ctx: OptimizeTableContext) => Result;
    /**
     * Visit a parse tree produced by the `unsupportHiveCommands`
     * labeled alternative in `BasicSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnsupportHiveCommands?: (ctx: UnsupportHiveCommandsContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.timezone`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimezone?: (ctx: TimezoneContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.configKey`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConfigKey?: (ctx: ConfigKeyContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.configValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConfigValue?: (ctx: ConfigValueContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.unsupportedHiveNativeCommands`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnsupportedHiveNativeCommands?: (ctx: UnsupportedHiveNativeCommandsContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.createTableHeader`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTableHeader?: (ctx: CreateTableHeaderContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.replaceTableHeader`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplaceTableHeader?: (ctx: ReplaceTableHeaderContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.bucketSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBucketSpec?: (ctx: BucketSpecContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.skewSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSkewSpec?: (ctx: SkewSpecContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.locationSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocationSpec?: (ctx: LocationSpecContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.commentSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommentSpec?: (ctx: CommentSpecContext) => Result;
    /**
     * Visit a parse tree produced by the `queryStatement`
     * labeled alternative in `BasicSqlParser.query`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryStatement?: (ctx: QueryStatementContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.insertInto`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertInto?: (ctx: InsertIntoContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.partitionSpecLocation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionSpecLocation?: (ctx: PartitionSpecLocationContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.partitionSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionSpec?: (ctx: PartitionSpecContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.partitionVal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionVal?: (ctx: PartitionValContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.namespace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamespace?: (ctx: NamespaceContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.namespaces`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamespaces?: (ctx: NamespacesContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.describeFuncName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeFuncName?: (ctx: DescribeFuncNameContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.describeColName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeColName?: (ctx: DescribeColNameContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.ctes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCtes?: (ctx: CtesContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.namedQuery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedQuery?: (ctx: NamedQueryContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.tableProvider`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableProvider?: (ctx: TableProviderContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.createTableClauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTableClauses?: (ctx: CreateTableClausesContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.propertyList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyList?: (ctx: PropertyListContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProperty?: (ctx: PropertyContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.propertyKey`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyKey?: (ctx: PropertyKeyContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.propertyValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyValue?: (ctx: PropertyValueContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.expressionPropertyList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionPropertyList?: (ctx: ExpressionPropertyListContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.expressionProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionProperty?: (ctx: ExpressionPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.constantList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstantList?: (ctx: ConstantListContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.nestedConstantList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNestedConstantList?: (ctx: NestedConstantListContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.createFileFormat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateFileFormat?: (ctx: CreateFileFormatContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.fileFormat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFileFormat?: (ctx: FileFormatContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.storageHandler`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStorageHandler?: (ctx: StorageHandlerContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.resource`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResource?: (ctx: ResourceContext) => Result;
    /**
     * Visit a parse tree produced by the `insertFromQuery`
     * labeled alternative in `BasicSqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertFromQuery?: (ctx: InsertFromQueryContext) => Result;
    /**
     * Visit a parse tree produced by the `multipleInsert`
     * labeled alternative in `BasicSqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipleInsert?: (ctx: MultipleInsertContext) => Result;
    /**
     * Visit a parse tree produced by the `deleteFromTable`
     * labeled alternative in `BasicSqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeleteFromTable?: (ctx: DeleteFromTableContext) => Result;
    /**
     * Visit a parse tree produced by the `updateTable`
     * labeled alternative in `BasicSqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdateTable?: (ctx: UpdateTableContext) => Result;
    /**
     * Visit a parse tree produced by the `mergeIntoTable`
     * labeled alternative in `BasicSqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMergeIntoTable?: (ctx: MergeIntoTableContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.namespaceName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamespaceName?: (ctx: NamespaceNameContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.namespaceNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamespaceNameCreate?: (ctx: NamespaceNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.tableNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableNameCreate?: (ctx: TableNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.tableName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableName?: (ctx: TableNameContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.viewNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewNameCreate?: (ctx: ViewNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.viewName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewName?: (ctx: ViewNameContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.columnName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnName?: (ctx: ColumnNameContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.columnNameSeq`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameSeq?: (ctx: ColumnNameSeqContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.columnNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameCreate?: (ctx: ColumnNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.identifierReference`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierReference?: (ctx: IdentifierReferenceContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.queryOrganization`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryOrganization?: (ctx: QueryOrganizationContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.multiInsertQueryBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiInsertQueryBody?: (ctx: MultiInsertQueryBodyContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.queryTerm`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryTerm?: (ctx: QueryTermContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.queryPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryPrimary?: (ctx: QueryPrimaryContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.sortItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSortItem?: (ctx: SortItemContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.fromStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFromStatement?: (ctx: FromStatementContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.fromStatementBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFromStatementBody?: (ctx: FromStatementBodyContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.querySpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuerySpecification?: (ctx: QuerySpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.transformClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransformClause?: (ctx: TransformClauseContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.selectClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectClause?: (ctx: SelectClauseContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.setClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetClause?: (ctx: SetClauseContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.matchedClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMatchedClause?: (ctx: MatchedClauseContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.notMatchedClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotMatchedClause?: (ctx: NotMatchedClauseContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.notMatchedBySourceClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotMatchedBySourceClause?: (ctx: NotMatchedBySourceClauseContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.matchedAction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMatchedAction?: (ctx: MatchedActionContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.notMatchedAction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotMatchedAction?: (ctx: NotMatchedActionContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.notMatchedBySourceAction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotMatchedBySourceAction?: (ctx: NotMatchedBySourceActionContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.assignmentList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignmentList?: (ctx: AssignmentListContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.assignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignment?: (ctx: AssignmentContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.whereClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhereClause?: (ctx: WhereClauseContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.havingClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHavingClause?: (ctx: HavingClauseContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.hint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHint?: (ctx: HintContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.hintStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHintStatement?: (ctx: HintStatementContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.fromClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFromClause?: (ctx: FromClauseContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.functionKind`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionKind?: (ctx: FunctionKindContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.temporalClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTemporalClause?: (ctx: TemporalClauseContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.aggregationClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregationClause?: (ctx: AggregationClauseContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.groupByClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupByClause?: (ctx: GroupByClauseContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.groupingAnalytics`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingAnalytics?: (ctx: GroupingAnalyticsContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.groupingElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingElement?: (ctx: GroupingElementContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.groupingSet`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingSet?: (ctx: GroupingSetContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.pivotClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPivotClause?: (ctx: PivotClauseContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.pivotColumn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPivotColumn?: (ctx: PivotColumnContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.pivotValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPivotValue?: (ctx: PivotValueContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.unpivotClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotClause?: (ctx: UnpivotClauseContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.unpivotNullClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotNullClause?: (ctx: UnpivotNullClauseContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.unpivotOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotOperator?: (ctx: UnpivotOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.unpivotSingleValueColumnClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotSingleValueColumnClause?: (ctx: UnpivotSingleValueColumnClauseContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.unpivotMultiValueColumnClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotMultiValueColumnClause?: (ctx: UnpivotMultiValueColumnClauseContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.unpivotColumnSet`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotColumnSet?: (ctx: UnpivotColumnSetContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.unpivotValueColumn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotValueColumn?: (ctx: UnpivotValueColumnContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.unpivotNameColumn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotNameColumn?: (ctx: UnpivotNameColumnContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.unpivotColumnAndAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotColumnAndAlias?: (ctx: UnpivotColumnAndAliasContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.unpivotColumn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotColumn?: (ctx: UnpivotColumnContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.unpivotAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotAlias?: (ctx: UnpivotAliasContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.ifNotExists`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfNotExists?: (ctx: IfNotExistsContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.ifExists`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfExists?: (ctx: IfExistsContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.lateralView`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLateralView?: (ctx: LateralViewContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.setQuantifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetQuantifier?: (ctx: SetQuantifierContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.relation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelation?: (ctx: RelationContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.relationExtension`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelationExtension?: (ctx: RelationExtensionContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.joinRelation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinRelation?: (ctx: JoinRelationContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.joinType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinType?: (ctx: JoinTypeContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.joinCriteria`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinCriteria?: (ctx: JoinCriteriaContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.sample`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSample?: (ctx: SampleContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.sampleMethod`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSampleMethod?: (ctx: SampleMethodContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.identifierList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierList?: (ctx: IdentifierListContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.identifierSeq`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierSeq?: (ctx: IdentifierSeqContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.orderedIdentifierList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderedIdentifierList?: (ctx: OrderedIdentifierListContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.orderedIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderedIdentifier?: (ctx: OrderedIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.identifierCommentList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierCommentList?: (ctx: IdentifierCommentListContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.identifierComment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierComment?: (ctx: IdentifierCommentContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.relationPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelationPrimary?: (ctx: RelationPrimaryContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.inlineTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInlineTable?: (ctx: InlineTableContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.functionTableSubqueryArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionTableSubqueryArgument?: (ctx: FunctionTableSubqueryArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.tableArgumentPartitioning`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableArgumentPartitioning?: (ctx: TableArgumentPartitioningContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.functionTableNamedArgumentExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionTableNamedArgumentExpression?: (ctx: FunctionTableNamedArgumentExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.functionTableReferenceArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionTableReferenceArgument?: (ctx: FunctionTableReferenceArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.functionTableArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionTableArgument?: (ctx: FunctionTableArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.functionTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionTable?: (ctx: FunctionTableContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.tableAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableAlias?: (ctx: TableAliasContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.rowFormat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowFormat?: (ctx: RowFormatContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.multipartIdentifierList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipartIdentifierList?: (ctx: MultipartIdentifierListContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.multipartIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipartIdentifier?: (ctx: MultipartIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.multipartIdentifierPropertyList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipartIdentifierPropertyList?: (ctx: MultipartIdentifierPropertyListContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.multipartIdentifierProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipartIdentifierProperty?: (ctx: MultipartIdentifierPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.tableIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableIdentifier?: (ctx: TableIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.viewIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewIdentifier?: (ctx: ViewIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.namedExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedExpression?: (ctx: NamedExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.namedExpressionSeq`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedExpressionSeq?: (ctx: NamedExpressionSeqContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.partitionFieldList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionFieldList?: (ctx: PartitionFieldListContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.partitionField`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionField?: (ctx: PartitionFieldContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.transform`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransform?: (ctx: TransformContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.transformArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransformArgument?: (ctx: TransformArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.namedArgumentExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedArgumentExpression?: (ctx: NamedArgumentExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.functionArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionArgument?: (ctx: FunctionArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.expressionSeq`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionSeq?: (ctx: ExpressionSeqContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanExpression?: (ctx: BooleanExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicate?: (ctx: PredicateContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueExpression?: (ctx: ValueExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.datetimeUnit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatetimeUnit?: (ctx: DatetimeUnitContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.literalType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteralType?: (ctx: LiteralTypeContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.constant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstant?: (ctx: ConstantContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.comparisonOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.arithmeticOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArithmeticOperator?: (ctx: ArithmeticOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.predicateOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicateOperator?: (ctx: PredicateOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.booleanValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanValue?: (ctx: BooleanValueContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.interval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterval?: (ctx: IntervalContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.errorCapturingMultiUnitsInterval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorCapturingMultiUnitsInterval?: (ctx: ErrorCapturingMultiUnitsIntervalContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.multiUnitsInterval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiUnitsInterval?: (ctx: MultiUnitsIntervalContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.errorCapturingUnitToUnitInterval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorCapturingUnitToUnitInterval?: (ctx: ErrorCapturingUnitToUnitIntervalContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.unitToUnitInterval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnitToUnitInterval?: (ctx: UnitToUnitIntervalContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.intervalValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntervalValue?: (ctx: IntervalValueContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.unitInMultiUnits`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnitInMultiUnits?: (ctx: UnitInMultiUnitsContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.unitInUnitToUnit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnitInUnitToUnit?: (ctx: UnitInUnitToUnitContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.colPosition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColPosition?: (ctx: ColPositionContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType?: (ctx: TypeContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.dataType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDataType?: (ctx: DataTypeContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.qualifiedColTypeWithPositionSeqForAdd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedColTypeWithPositionSeqForAdd?: (ctx: QualifiedColTypeWithPositionSeqForAddContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.qualifiedColTypeWithPositionForAdd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedColTypeWithPositionForAdd?: (ctx: QualifiedColTypeWithPositionForAddContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.qualifiedColTypeWithPositionSeqForReplace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedColTypeWithPositionSeqForReplace?: (ctx: QualifiedColTypeWithPositionSeqForReplaceContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.qualifiedColTypeWithPositionForReplace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedColTypeWithPositionForReplace?: (ctx: QualifiedColTypeWithPositionForReplaceContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.colDefinitionDescriptorWithPosition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColDefinitionDescriptorWithPosition?: (ctx: ColDefinitionDescriptorWithPositionContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.defaultExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefaultExpression?: (ctx: DefaultExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.variableDefaultExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableDefaultExpression?: (ctx: VariableDefaultExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.colTypeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColTypeList?: (ctx: ColTypeListContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.colType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColType?: (ctx: ColTypeContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.createOrReplaceTableColTypeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateOrReplaceTableColTypeList?: (ctx: CreateOrReplaceTableColTypeListContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.createOrReplaceTableColType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateOrReplaceTableColType?: (ctx: CreateOrReplaceTableColTypeContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.colDefinitionOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColDefinitionOption?: (ctx: ColDefinitionOptionContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.generationExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenerationExpression?: (ctx: GenerationExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.complexColTypeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComplexColTypeList?: (ctx: ComplexColTypeListContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.complexColType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComplexColType?: (ctx: ComplexColTypeContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.whenClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhenClause?: (ctx: WhenClauseContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.windowClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowClause?: (ctx: WindowClauseContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.zorderClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitZorderClause?: (ctx: ZorderClauseContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.namedWindow`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedWindow?: (ctx: NamedWindowContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.windowSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowSpec?: (ctx: WindowSpecContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.windowFrame`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowFrame?: (ctx: WindowFrameContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.frameBound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrameBound?: (ctx: FrameBoundContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.qualifiedNameList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedNameList?: (ctx: QualifiedNameListContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.functionName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionName?: (ctx: FunctionNameContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.functionNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionNameCreate?: (ctx: FunctionNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.qualifiedName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedName?: (ctx: QualifiedNameContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.errorCapturingIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorCapturingIdentifier?: (ctx: ErrorCapturingIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.errorCapturingIdentifierExtra`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorCapturingIdentifierExtra?: (ctx: ErrorCapturingIdentifierExtraContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifier?: (ctx: IdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.strictIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStrictIdentifier?: (ctx: StrictIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.quotedIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.backQuotedIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.number`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumber?: (ctx: NumberContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.alterColumnAction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterColumnAction?: (ctx: AlterColumnActionContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.stringLit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringLit?: (ctx: StringLitContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.comment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComment?: (ctx: CommentContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.version`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVersion?: (ctx: VersionContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.ansiNonReserved`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnsiNonReserved?: (ctx: AnsiNonReservedContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.strictNonReserved`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStrictNonReserved?: (ctx: StrictNonReservedContext) => Result;
    /**
     * Visit a parse tree produced by `BasicSqlParser.nonReserved`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonReserved?: (ctx: NonReservedContext) => Result;
}

