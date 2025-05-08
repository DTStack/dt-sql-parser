// Generated from dt-sql-parser/src/grammar/sql/SqlParser.g4 by ANTLR 4.13.1

// @ts-nocheck

import { AbstractParseTreeVisitor } from "antlr4ng";


import { SQLParserBase } from '../SQLParserBase';


import { ProgramContext } from "./SqlParser.js";
import { SingleStatementContext } from "./SqlParser.js";
import { StatementDefaultContext } from "./SqlParser.js";
import { DmlStatementContext } from "./SqlParser.js";
import { UseNamespaceContext } from "./SqlParser.js";
import { AlterContext } from "./SqlParser.js";
import { CreateContext } from "./SqlParser.js";
import { DropContext } from "./SqlParser.js";
import { ShowContext } from "./SqlParser.js";
import { TruncateTableContext } from "./SqlParser.js";
import { AnalyzeContext } from "./SqlParser.js";
import { AnalyzeTablesContext } from "./SqlParser.js";
import { DeclareVariableContext } from "./SqlParser.js";
import { ExplainStatementContext } from "./SqlParser.js";
import { DescribeFunctionContext } from "./SqlParser.js";
import { DescribeNamespaceContext } from "./SqlParser.js";
import { DescribeQueryContext } from "./SqlParser.js";
import { DescribeRelationContext } from "./SqlParser.js";
import { CommentNamespaceContext } from "./SqlParser.js";
import { RefreshTableContext } from "./SqlParser.js";
import { RefreshFunctionContext } from "./SqlParser.js";
import { RefreshResourceContext } from "./SqlParser.js";
import { CacheTableContext } from "./SqlParser.js";
import { UnCacheTableContext } from "./SqlParser.js";
import { ClearCacheContext } from "./SqlParser.js";
import { LoadDataContext } from "./SqlParser.js";
import { RepairTableContext } from "./SqlParser.js";
import { ManageResourceContext } from "./SqlParser.js";
import { SetAnyContext } from "./SqlParser.js";
import { ResetAnyContext } from "./SqlParser.js";
import { OptimizeTableContext } from "./SqlParser.js";
import { UnsupportHiveCommandsContext } from "./SqlParser.js";
import { AlterStatementContext } from "./SqlParser.js";
import { CreateNamespaceContext } from "./SqlParser.js";
import { CreateTableContext } from "./SqlParser.js";
import { ReplaceTableContext } from "./SqlParser.js";
import { CreateTableLikeContext } from "./SqlParser.js";
import { CreateViewContext } from "./SqlParser.js";
import { CreateTempViewUsingContext } from "./SqlParser.js";
import { CreateFunctionContext } from "./SqlParser.js";
import { CreateIndexContext } from "./SqlParser.js";
import { CreateRoleContext } from "./SqlParser.js";
import { DropNamespaceContext } from "./SqlParser.js";
import { DropTableContext } from "./SqlParser.js";
import { DropViewContext } from "./SqlParser.js";
import { DropFunctionContext } from "./SqlParser.js";
import { DropVariableContext } from "./SqlParser.js";
import { DropIndexContext } from "./SqlParser.js";
import { DropRoleContext } from "./SqlParser.js";
import { InsertFromQueryContext } from "./SqlParser.js";
import { MultipleInsertContext } from "./SqlParser.js";
import { DeleteFromTableContext } from "./SqlParser.js";
import { UpdateTableContext } from "./SqlParser.js";
import { MergeIntoTableContext } from "./SqlParser.js";
import { InsertIntoContext } from "./SqlParser.js";
import { ShowNamespacesContext } from "./SqlParser.js";
import { ShowTablesContext } from "./SqlParser.js";
import { ShowTableExtendedContext } from "./SqlParser.js";
import { ShowTblPropertiesContext } from "./SqlParser.js";
import { ShowColumnsContext } from "./SqlParser.js";
import { ShowViewsContext } from "./SqlParser.js";
import { ShowPartitionsContext } from "./SqlParser.js";
import { ShowFunctionsContext } from "./SqlParser.js";
import { ShowCreateTableContext } from "./SqlParser.js";
import { ShowCurrentNamespaceContext } from "./SqlParser.js";
import { ShowCatalogsContext } from "./SqlParser.js";
import { ShowOtherContext } from "./SqlParser.js";
import { UnsupportedCommandsContext } from "./SqlParser.js";
import { BucketSpecContext } from "./SqlParser.js";
import { SkewSpecContext } from "./SqlParser.js";
import { QueryStatementContext } from "./SqlParser.js";
import { PartitionSpecLocationContext } from "./SqlParser.js";
import { PartitionSpecContext } from "./SqlParser.js";
import { PartitionValContext } from "./SqlParser.js";
import { NamespaceContext } from "./SqlParser.js";
import { DescribeFuncNameContext } from "./SqlParser.js";
import { DescribeColNameContext } from "./SqlParser.js";
import { CtesContext } from "./SqlParser.js";
import { NamedQueryContext } from "./SqlParser.js";
import { TableProviderContext } from "./SqlParser.js";
import { CreateTableClausesContext } from "./SqlParser.js";
import { TableLifecycleContext } from "./SqlParser.js";
import { PropertyListContext } from "./SqlParser.js";
import { PropertyContext } from "./SqlParser.js";
import { PropertyKeyContext } from "./SqlParser.js";
import { PropertyValueContext } from "./SqlParser.js";
import { ExpressionPropertyListContext } from "./SqlParser.js";
import { ExpressionPropertyContext } from "./SqlParser.js";
import { ConstantListContext } from "./SqlParser.js";
import { NestedConstantListContext } from "./SqlParser.js";
import { CreateFileFormatContext } from "./SqlParser.js";
import { FileFormatContext } from "./SqlParser.js";
import { StorageHandlerContext } from "./SqlParser.js";
import { NamespaceNameContext } from "./SqlParser.js";
import { NamespaceNameCreateContext } from "./SqlParser.js";
import { TableNameCreateContext } from "./SqlParser.js";
import { TableNameContext } from "./SqlParser.js";
import { ViewNameCreateContext } from "./SqlParser.js";
import { ViewNameContext } from "./SqlParser.js";
import { ColumnNameContext } from "./SqlParser.js";
import { ColumnNameSeqContext } from "./SqlParser.js";
import { ColumnNameCreateContext } from "./SqlParser.js";
import { IdentifierReferenceContext } from "./SqlParser.js";
import { QueryOrganizationContext } from "./SqlParser.js";
import { QueryTermContext } from "./SqlParser.js";
import { QueryPrimaryContext } from "./SqlParser.js";
import { SortItemContext } from "./SqlParser.js";
import { FromStatementBodyContext } from "./SqlParser.js";
import { QuerySpecificationContext } from "./SqlParser.js";
import { TransformClauseContext } from "./SqlParser.js";
import { SelectClauseContext } from "./SqlParser.js";
import { SetClauseContext } from "./SqlParser.js";
import { MatchedClauseContext } from "./SqlParser.js";
import { NotMatchedClauseContext } from "./SqlParser.js";
import { NotMatchedBySourceClauseContext } from "./SqlParser.js";
import { NotMatchedActionContext } from "./SqlParser.js";
import { AssignmentListContext } from "./SqlParser.js";
import { AssignmentContext } from "./SqlParser.js";
import { WhereClauseContext } from "./SqlParser.js";
import { HavingClauseContext } from "./SqlParser.js";
import { HintContext } from "./SqlParser.js";
import { HintStatementContext } from "./SqlParser.js";
import { FromClauseContext } from "./SqlParser.js";
import { TemporalClauseContext } from "./SqlParser.js";
import { AggregationClauseContext } from "./SqlParser.js";
import { GroupByClauseContext } from "./SqlParser.js";
import { GroupingAnalyticsContext } from "./SqlParser.js";
import { GroupingSetContext } from "./SqlParser.js";
import { PivotClauseContext } from "./SqlParser.js";
import { PivotColumnContext } from "./SqlParser.js";
import { PivotValueContext } from "./SqlParser.js";
import { UnpivotClauseContext } from "./SqlParser.js";
import { UnpivotSingleValueColumnClauseContext } from "./SqlParser.js";
import { UnpivotMultiValueColumnClauseContext } from "./SqlParser.js";
import { UnpivotColumnSetContext } from "./SqlParser.js";
import { UnpivotColumnAndAliasContext } from "./SqlParser.js";
import { IfNotExistsContext } from "./SqlParser.js";
import { IfExistsContext } from "./SqlParser.js";
import { LateralViewContext } from "./SqlParser.js";
import { SetQuantifierContext } from "./SqlParser.js";
import { RelationContext } from "./SqlParser.js";
import { JoinRelationContext } from "./SqlParser.js";
import { JoinTypeContext } from "./SqlParser.js";
import { JoinCriteriaContext } from "./SqlParser.js";
import { SampleContext } from "./SqlParser.js";
import { SampleMethodContext } from "./SqlParser.js";
import { IdentifierListContext } from "./SqlParser.js";
import { IdentifierSeqContext } from "./SqlParser.js";
import { OrderedIdentifierListContext } from "./SqlParser.js";
import { OrderedIdentifierContext } from "./SqlParser.js";
import { IdentifierCommentListContext } from "./SqlParser.js";
import { IdentifierCommentContext } from "./SqlParser.js";
import { RelationPrimaryContext } from "./SqlParser.js";
import { FunctionTableSubqueryArgumentContext } from "./SqlParser.js";
import { TableArgumentPartitioningContext } from "./SqlParser.js";
import { FunctionTableNamedArgumentExpressionContext } from "./SqlParser.js";
import { FunctionTableReferenceArgumentContext } from "./SqlParser.js";
import { FunctionTableArgumentContext } from "./SqlParser.js";
import { TableAliasContext } from "./SqlParser.js";
import { RowFormatContext } from "./SqlParser.js";
import { MultipartIdentifierListContext } from "./SqlParser.js";
import { MultipartIdentifierContext } from "./SqlParser.js";
import { MultipartIdentifierPropertyListContext } from "./SqlParser.js";
import { MultipartIdentifierPropertyContext } from "./SqlParser.js";
import { TableIdentifierContext } from "./SqlParser.js";
import { ViewIdentifierContext } from "./SqlParser.js";
import { NamedExpressionContext } from "./SqlParser.js";
import { NamedExpressionSeqContext } from "./SqlParser.js";
import { PartitionFieldListContext } from "./SqlParser.js";
import { PartitionFieldContext } from "./SqlParser.js";
import { TransformContext } from "./SqlParser.js";
import { TransformArgumentContext } from "./SqlParser.js";
import { ExpressionContext } from "./SqlParser.js";
import { NamedArgumentExpressionContext } from "./SqlParser.js";
import { FunctionArgumentContext } from "./SqlParser.js";
import { ExpressionSeqContext } from "./SqlParser.js";
import { BooleanExpressionContext } from "./SqlParser.js";
import { PredicateContext } from "./SqlParser.js";
import { ValueExpressionContext } from "./SqlParser.js";
import { DatetimeUnitContext } from "./SqlParser.js";
import { PrimaryExpressionContext } from "./SqlParser.js";
import { LiteralTypeContext } from "./SqlParser.js";
import { ConstantContext } from "./SqlParser.js";
import { ComparisonOperatorContext } from "./SqlParser.js";
import { ArithmeticOperatorContext } from "./SqlParser.js";
import { PredicateOperatorContext } from "./SqlParser.js";
import { BooleanValueContext } from "./SqlParser.js";
import { IntervalContext } from "./SqlParser.js";
import { ErrorCapturingMultiUnitsIntervalContext } from "./SqlParser.js";
import { ErrorCapturingUnitToUnitIntervalContext } from "./SqlParser.js";
import { MultiUnitsIntervalContext } from "./SqlParser.js";
import { UnitToUnitIntervalContext } from "./SqlParser.js";
import { IntervalValueContext } from "./SqlParser.js";
import { UnitInMultiUnitsContext } from "./SqlParser.js";
import { UnitInUnitToUnitContext } from "./SqlParser.js";
import { ColPositionContext } from "./SqlParser.js";
import { TypeContext } from "./SqlParser.js";
import { DataTypeContext } from "./SqlParser.js";
import { QualifiedColTypeWithPositionSeqForAddContext } from "./SqlParser.js";
import { QualifiedColTypeWithPositionForAddContext } from "./SqlParser.js";
import { QualifiedColTypeWithPositionSeqForReplaceContext } from "./SqlParser.js";
import { QualifiedColTypeWithPositionForReplaceContext } from "./SqlParser.js";
import { ColDefinitionDescriptorWithPositionContext } from "./SqlParser.js";
import { VariableDefaultExpressionContext } from "./SqlParser.js";
import { ColTypeListContext } from "./SqlParser.js";
import { ColumnTypeContext } from "./SqlParser.js";
import { CreateOrReplaceTableColTypeListContext } from "./SqlParser.js";
import { CreateOrReplaceTableColTypeContext } from "./SqlParser.js";
import { ColDefinitionOptionContext } from "./SqlParser.js";
import { ComplexColTypeContext } from "./SqlParser.js";
import { WhenClauseContext } from "./SqlParser.js";
import { WindowClauseContext } from "./SqlParser.js";
import { WindowSpecContext } from "./SqlParser.js";
import { WindowFrameContext } from "./SqlParser.js";
import { FrameBoundContext } from "./SqlParser.js";
import { QualifiedNameListContext } from "./SqlParser.js";
import { FunctionNameContext } from "./SqlParser.js";
import { FunctionNameCreateContext } from "./SqlParser.js";
import { QualifiedNameContext } from "./SqlParser.js";
import { ErrorCapturingIdentifierContext } from "./SqlParser.js";
import { ErrorCapturingIdentifierExtraContext } from "./SqlParser.js";
import { IdentifierContext } from "./SqlParser.js";
import { StrictIdentifierContext } from "./SqlParser.js";
import { NumberContext } from "./SqlParser.js";
import { AlterColumnActionContext } from "./SqlParser.js";
import { StringLitContext } from "./SqlParser.js";
import { AnsiNonReservedContext } from "./SqlParser.js";
import { StrictNonReservedContext } from "./SqlParser.js";
import { NonReservedContext } from "./SqlParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class SqlParserVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `SqlParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.singleStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingleStatement?: (ctx: SingleStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `statementDefault`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatementDefault?: (ctx: StatementDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `dmlStatement`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDmlStatement?: (ctx: DmlStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `useNamespace`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUseNamespace?: (ctx: UseNamespaceContext) => Result;
    /**
     * Visit a parse tree produced by the `alter`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter?: (ctx: AlterContext) => Result;
    /**
     * Visit a parse tree produced by the `create`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate?: (ctx: CreateContext) => Result;
    /**
     * Visit a parse tree produced by the `drop`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop?: (ctx: DropContext) => Result;
    /**
     * Visit a parse tree produced by the `show`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShow?: (ctx: ShowContext) => Result;
    /**
     * Visit a parse tree produced by the `truncateTable`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTruncateTable?: (ctx: TruncateTableContext) => Result;
    /**
     * Visit a parse tree produced by the `analyze`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyze?: (ctx: AnalyzeContext) => Result;
    /**
     * Visit a parse tree produced by the `analyzeTables`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyzeTables?: (ctx: AnalyzeTablesContext) => Result;
    /**
     * Visit a parse tree produced by the `declareVariable`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeclareVariable?: (ctx: DeclareVariableContext) => Result;
    /**
     * Visit a parse tree produced by the `explainStatement`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplainStatement?: (ctx: ExplainStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `describeFunction`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeFunction?: (ctx: DescribeFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `describeNamespace`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeNamespace?: (ctx: DescribeNamespaceContext) => Result;
    /**
     * Visit a parse tree produced by the `describeQuery`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeQuery?: (ctx: DescribeQueryContext) => Result;
    /**
     * Visit a parse tree produced by the `describeRelation`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeRelation?: (ctx: DescribeRelationContext) => Result;
    /**
     * Visit a parse tree produced by the `commentNamespace`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommentNamespace?: (ctx: CommentNamespaceContext) => Result;
    /**
     * Visit a parse tree produced by the `refreshTable`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefreshTable?: (ctx: RefreshTableContext) => Result;
    /**
     * Visit a parse tree produced by the `refreshFunction`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefreshFunction?: (ctx: RefreshFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `refreshResource`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefreshResource?: (ctx: RefreshResourceContext) => Result;
    /**
     * Visit a parse tree produced by the `cacheTable`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCacheTable?: (ctx: CacheTableContext) => Result;
    /**
     * Visit a parse tree produced by the `unCacheTable`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnCacheTable?: (ctx: UnCacheTableContext) => Result;
    /**
     * Visit a parse tree produced by the `clearCache`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClearCache?: (ctx: ClearCacheContext) => Result;
    /**
     * Visit a parse tree produced by the `loadData`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoadData?: (ctx: LoadDataContext) => Result;
    /**
     * Visit a parse tree produced by the `repairTable`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRepairTable?: (ctx: RepairTableContext) => Result;
    /**
     * Visit a parse tree produced by the `manageResource`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitManageResource?: (ctx: ManageResourceContext) => Result;
    /**
     * Visit a parse tree produced by the `setAny`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetAny?: (ctx: SetAnyContext) => Result;
    /**
     * Visit a parse tree produced by the `resetAny`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResetAny?: (ctx: ResetAnyContext) => Result;
    /**
     * Visit a parse tree produced by the `optimizeTable`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptimizeTable?: (ctx: OptimizeTableContext) => Result;
    /**
     * Visit a parse tree produced by the `unsupportHiveCommands`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnsupportHiveCommands?: (ctx: UnsupportHiveCommandsContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.alterStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatement?: (ctx: AlterStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `createNamespace`
     * labeled alternative in `SqlParser.createStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateNamespace?: (ctx: CreateNamespaceContext) => Result;
    /**
     * Visit a parse tree produced by the `createTable`
     * labeled alternative in `SqlParser.createStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTable?: (ctx: CreateTableContext) => Result;
    /**
     * Visit a parse tree produced by the `replaceTable`
     * labeled alternative in `SqlParser.createStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplaceTable?: (ctx: ReplaceTableContext) => Result;
    /**
     * Visit a parse tree produced by the `createTableLike`
     * labeled alternative in `SqlParser.createStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTableLike?: (ctx: CreateTableLikeContext) => Result;
    /**
     * Visit a parse tree produced by the `createView`
     * labeled alternative in `SqlParser.createStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateView?: (ctx: CreateViewContext) => Result;
    /**
     * Visit a parse tree produced by the `createTempViewUsing`
     * labeled alternative in `SqlParser.createStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTempViewUsing?: (ctx: CreateTempViewUsingContext) => Result;
    /**
     * Visit a parse tree produced by the `createFunction`
     * labeled alternative in `SqlParser.createStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateFunction?: (ctx: CreateFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `createIndex`
     * labeled alternative in `SqlParser.createStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateIndex?: (ctx: CreateIndexContext) => Result;
    /**
     * Visit a parse tree produced by the `createRole`
     * labeled alternative in `SqlParser.createStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateRole?: (ctx: CreateRoleContext) => Result;
    /**
     * Visit a parse tree produced by the `dropNamespace`
     * labeled alternative in `SqlParser.dropStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropNamespace?: (ctx: DropNamespaceContext) => Result;
    /**
     * Visit a parse tree produced by the `dropTable`
     * labeled alternative in `SqlParser.dropStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropTable?: (ctx: DropTableContext) => Result;
    /**
     * Visit a parse tree produced by the `dropView`
     * labeled alternative in `SqlParser.dropStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropView?: (ctx: DropViewContext) => Result;
    /**
     * Visit a parse tree produced by the `dropFunction`
     * labeled alternative in `SqlParser.dropStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropFunction?: (ctx: DropFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `dropVariable`
     * labeled alternative in `SqlParser.dropStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropVariable?: (ctx: DropVariableContext) => Result;
    /**
     * Visit a parse tree produced by the `dropIndex`
     * labeled alternative in `SqlParser.dropStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropIndex?: (ctx: DropIndexContext) => Result;
    /**
     * Visit a parse tree produced by the `dropRole`
     * labeled alternative in `SqlParser.dropStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropRole?: (ctx: DropRoleContext) => Result;
    /**
     * Visit a parse tree produced by the `insertFromQuery`
     * labeled alternative in `SqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertFromQuery?: (ctx: InsertFromQueryContext) => Result;
    /**
     * Visit a parse tree produced by the `multipleInsert`
     * labeled alternative in `SqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipleInsert?: (ctx: MultipleInsertContext) => Result;
    /**
     * Visit a parse tree produced by the `deleteFromTable`
     * labeled alternative in `SqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeleteFromTable?: (ctx: DeleteFromTableContext) => Result;
    /**
     * Visit a parse tree produced by the `updateTable`
     * labeled alternative in `SqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdateTable?: (ctx: UpdateTableContext) => Result;
    /**
     * Visit a parse tree produced by the `mergeIntoTable`
     * labeled alternative in `SqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMergeIntoTable?: (ctx: MergeIntoTableContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.insertInto`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertInto?: (ctx: InsertIntoContext) => Result;
    /**
     * Visit a parse tree produced by the `showNamespaces`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowNamespaces?: (ctx: ShowNamespacesContext) => Result;
    /**
     * Visit a parse tree produced by the `showTables`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTables?: (ctx: ShowTablesContext) => Result;
    /**
     * Visit a parse tree produced by the `showTableExtended`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTableExtended?: (ctx: ShowTableExtendedContext) => Result;
    /**
     * Visit a parse tree produced by the `showTblProperties`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTblProperties?: (ctx: ShowTblPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by the `showColumns`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowColumns?: (ctx: ShowColumnsContext) => Result;
    /**
     * Visit a parse tree produced by the `showViews`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowViews?: (ctx: ShowViewsContext) => Result;
    /**
     * Visit a parse tree produced by the `showPartitions`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowPartitions?: (ctx: ShowPartitionsContext) => Result;
    /**
     * Visit a parse tree produced by the `showFunctions`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowFunctions?: (ctx: ShowFunctionsContext) => Result;
    /**
     * Visit a parse tree produced by the `showCreateTable`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCreateTable?: (ctx: ShowCreateTableContext) => Result;
    /**
     * Visit a parse tree produced by the `showCurrentNamespace`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCurrentNamespace?: (ctx: ShowCurrentNamespaceContext) => Result;
    /**
     * Visit a parse tree produced by the `showCatalogs`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCatalogs?: (ctx: ShowCatalogsContext) => Result;
    /**
     * Visit a parse tree produced by the `showOther`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowOther?: (ctx: ShowOtherContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.unsupportedCommands`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnsupportedCommands?: (ctx: UnsupportedCommandsContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.bucketSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBucketSpec?: (ctx: BucketSpecContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.skewSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSkewSpec?: (ctx: SkewSpecContext) => Result;
    /**
     * Visit a parse tree produced by the `queryStatement`
     * labeled alternative in `SqlParser.query`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryStatement?: (ctx: QueryStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.partitionSpecLocation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionSpecLocation?: (ctx: PartitionSpecLocationContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.partitionSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionSpec?: (ctx: PartitionSpecContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.partitionVal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionVal?: (ctx: PartitionValContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.namespace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamespace?: (ctx: NamespaceContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.describeFuncName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeFuncName?: (ctx: DescribeFuncNameContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.describeColName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeColName?: (ctx: DescribeColNameContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.ctes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCtes?: (ctx: CtesContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.namedQuery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedQuery?: (ctx: NamedQueryContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.tableProvider`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableProvider?: (ctx: TableProviderContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.createTableClauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTableClauses?: (ctx: CreateTableClausesContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.tableLifecycle`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableLifecycle?: (ctx: TableLifecycleContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.propertyList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyList?: (ctx: PropertyListContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProperty?: (ctx: PropertyContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.propertyKey`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyKey?: (ctx: PropertyKeyContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.propertyValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyValue?: (ctx: PropertyValueContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.expressionPropertyList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionPropertyList?: (ctx: ExpressionPropertyListContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.expressionProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionProperty?: (ctx: ExpressionPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.constantList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstantList?: (ctx: ConstantListContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.nestedConstantList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNestedConstantList?: (ctx: NestedConstantListContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.createFileFormat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateFileFormat?: (ctx: CreateFileFormatContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.fileFormat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFileFormat?: (ctx: FileFormatContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.storageHandler`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStorageHandler?: (ctx: StorageHandlerContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.namespaceName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamespaceName?: (ctx: NamespaceNameContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.namespaceNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamespaceNameCreate?: (ctx: NamespaceNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.tableNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableNameCreate?: (ctx: TableNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.tableName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableName?: (ctx: TableNameContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.viewNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewNameCreate?: (ctx: ViewNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.viewName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewName?: (ctx: ViewNameContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.columnName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnName?: (ctx: ColumnNameContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.columnNameSeq`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameSeq?: (ctx: ColumnNameSeqContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.columnNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameCreate?: (ctx: ColumnNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.identifierReference`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierReference?: (ctx: IdentifierReferenceContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.queryOrganization`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryOrganization?: (ctx: QueryOrganizationContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.queryTerm`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryTerm?: (ctx: QueryTermContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.queryPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryPrimary?: (ctx: QueryPrimaryContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.sortItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSortItem?: (ctx: SortItemContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.fromStatementBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFromStatementBody?: (ctx: FromStatementBodyContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.querySpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuerySpecification?: (ctx: QuerySpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.transformClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransformClause?: (ctx: TransformClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.selectClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectClause?: (ctx: SelectClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.setClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetClause?: (ctx: SetClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.matchedClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMatchedClause?: (ctx: MatchedClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.notMatchedClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotMatchedClause?: (ctx: NotMatchedClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.notMatchedBySourceClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotMatchedBySourceClause?: (ctx: NotMatchedBySourceClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.notMatchedAction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotMatchedAction?: (ctx: NotMatchedActionContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.assignmentList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignmentList?: (ctx: AssignmentListContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.assignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignment?: (ctx: AssignmentContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.whereClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhereClause?: (ctx: WhereClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.havingClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHavingClause?: (ctx: HavingClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.hint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHint?: (ctx: HintContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.hintStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHintStatement?: (ctx: HintStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.fromClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFromClause?: (ctx: FromClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.temporalClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTemporalClause?: (ctx: TemporalClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.aggregationClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregationClause?: (ctx: AggregationClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.groupByClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupByClause?: (ctx: GroupByClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.groupingAnalytics`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingAnalytics?: (ctx: GroupingAnalyticsContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.groupingSet`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingSet?: (ctx: GroupingSetContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.pivotClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPivotClause?: (ctx: PivotClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.pivotColumn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPivotColumn?: (ctx: PivotColumnContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.pivotValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPivotValue?: (ctx: PivotValueContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.unpivotClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotClause?: (ctx: UnpivotClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.unpivotSingleValueColumnClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotSingleValueColumnClause?: (ctx: UnpivotSingleValueColumnClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.unpivotMultiValueColumnClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotMultiValueColumnClause?: (ctx: UnpivotMultiValueColumnClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.unpivotColumnSet`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotColumnSet?: (ctx: UnpivotColumnSetContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.unpivotColumnAndAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotColumnAndAlias?: (ctx: UnpivotColumnAndAliasContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.ifNotExists`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfNotExists?: (ctx: IfNotExistsContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.ifExists`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfExists?: (ctx: IfExistsContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.lateralView`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLateralView?: (ctx: LateralViewContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.setQuantifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetQuantifier?: (ctx: SetQuantifierContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.relation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelation?: (ctx: RelationContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.joinRelation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinRelation?: (ctx: JoinRelationContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.joinType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinType?: (ctx: JoinTypeContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.joinCriteria`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinCriteria?: (ctx: JoinCriteriaContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.sample`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSample?: (ctx: SampleContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.sampleMethod`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSampleMethod?: (ctx: SampleMethodContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.identifierList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierList?: (ctx: IdentifierListContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.identifierSeq`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierSeq?: (ctx: IdentifierSeqContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.orderedIdentifierList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderedIdentifierList?: (ctx: OrderedIdentifierListContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.orderedIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderedIdentifier?: (ctx: OrderedIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.identifierCommentList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierCommentList?: (ctx: IdentifierCommentListContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.identifierComment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierComment?: (ctx: IdentifierCommentContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.relationPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelationPrimary?: (ctx: RelationPrimaryContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.functionTableSubqueryArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionTableSubqueryArgument?: (ctx: FunctionTableSubqueryArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.tableArgumentPartitioning`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableArgumentPartitioning?: (ctx: TableArgumentPartitioningContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.functionTableNamedArgumentExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionTableNamedArgumentExpression?: (ctx: FunctionTableNamedArgumentExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.functionTableReferenceArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionTableReferenceArgument?: (ctx: FunctionTableReferenceArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.functionTableArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionTableArgument?: (ctx: FunctionTableArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.tableAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableAlias?: (ctx: TableAliasContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.rowFormat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowFormat?: (ctx: RowFormatContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.multipartIdentifierList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipartIdentifierList?: (ctx: MultipartIdentifierListContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.multipartIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipartIdentifier?: (ctx: MultipartIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.multipartIdentifierPropertyList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipartIdentifierPropertyList?: (ctx: MultipartIdentifierPropertyListContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.multipartIdentifierProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipartIdentifierProperty?: (ctx: MultipartIdentifierPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.tableIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableIdentifier?: (ctx: TableIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.viewIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewIdentifier?: (ctx: ViewIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.namedExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedExpression?: (ctx: NamedExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.namedExpressionSeq`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedExpressionSeq?: (ctx: NamedExpressionSeqContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.partitionFieldList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionFieldList?: (ctx: PartitionFieldListContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.partitionField`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionField?: (ctx: PartitionFieldContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.transform`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransform?: (ctx: TransformContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.transformArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransformArgument?: (ctx: TransformArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.namedArgumentExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedArgumentExpression?: (ctx: NamedArgumentExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.functionArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionArgument?: (ctx: FunctionArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.expressionSeq`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionSeq?: (ctx: ExpressionSeqContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanExpression?: (ctx: BooleanExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicate?: (ctx: PredicateContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueExpression?: (ctx: ValueExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.datetimeUnit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatetimeUnit?: (ctx: DatetimeUnitContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.literalType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteralType?: (ctx: LiteralTypeContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.constant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstant?: (ctx: ConstantContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.comparisonOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.arithmeticOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArithmeticOperator?: (ctx: ArithmeticOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.predicateOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicateOperator?: (ctx: PredicateOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.booleanValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanValue?: (ctx: BooleanValueContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.interval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterval?: (ctx: IntervalContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.errorCapturingMultiUnitsInterval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorCapturingMultiUnitsInterval?: (ctx: ErrorCapturingMultiUnitsIntervalContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.errorCapturingUnitToUnitInterval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorCapturingUnitToUnitInterval?: (ctx: ErrorCapturingUnitToUnitIntervalContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.multiUnitsInterval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiUnitsInterval?: (ctx: MultiUnitsIntervalContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.unitToUnitInterval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnitToUnitInterval?: (ctx: UnitToUnitIntervalContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.intervalValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntervalValue?: (ctx: IntervalValueContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.unitInMultiUnits`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnitInMultiUnits?: (ctx: UnitInMultiUnitsContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.unitInUnitToUnit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnitInUnitToUnit?: (ctx: UnitInUnitToUnitContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.colPosition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColPosition?: (ctx: ColPositionContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType?: (ctx: TypeContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.dataType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDataType?: (ctx: DataTypeContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.qualifiedColTypeWithPositionSeqForAdd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedColTypeWithPositionSeqForAdd?: (ctx: QualifiedColTypeWithPositionSeqForAddContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.qualifiedColTypeWithPositionForAdd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedColTypeWithPositionForAdd?: (ctx: QualifiedColTypeWithPositionForAddContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.qualifiedColTypeWithPositionSeqForReplace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedColTypeWithPositionSeqForReplace?: (ctx: QualifiedColTypeWithPositionSeqForReplaceContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.qualifiedColTypeWithPositionForReplace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedColTypeWithPositionForReplace?: (ctx: QualifiedColTypeWithPositionForReplaceContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.colDefinitionDescriptorWithPosition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColDefinitionDescriptorWithPosition?: (ctx: ColDefinitionDescriptorWithPositionContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.variableDefaultExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableDefaultExpression?: (ctx: VariableDefaultExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.colTypeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColTypeList?: (ctx: ColTypeListContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.columnType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnType?: (ctx: ColumnTypeContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.createOrReplaceTableColTypeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateOrReplaceTableColTypeList?: (ctx: CreateOrReplaceTableColTypeListContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.createOrReplaceTableColType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateOrReplaceTableColType?: (ctx: CreateOrReplaceTableColTypeContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.colDefinitionOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColDefinitionOption?: (ctx: ColDefinitionOptionContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.complexColType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComplexColType?: (ctx: ComplexColTypeContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.whenClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhenClause?: (ctx: WhenClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.windowClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowClause?: (ctx: WindowClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.windowSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowSpec?: (ctx: WindowSpecContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.windowFrame`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowFrame?: (ctx: WindowFrameContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.frameBound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrameBound?: (ctx: FrameBoundContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.qualifiedNameList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedNameList?: (ctx: QualifiedNameListContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.functionName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionName?: (ctx: FunctionNameContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.functionNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionNameCreate?: (ctx: FunctionNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.qualifiedName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedName?: (ctx: QualifiedNameContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.errorCapturingIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorCapturingIdentifier?: (ctx: ErrorCapturingIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.errorCapturingIdentifierExtra`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorCapturingIdentifierExtra?: (ctx: ErrorCapturingIdentifierExtraContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifier?: (ctx: IdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.strictIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStrictIdentifier?: (ctx: StrictIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.number`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumber?: (ctx: NumberContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.alterColumnAction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterColumnAction?: (ctx: AlterColumnActionContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.stringLit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringLit?: (ctx: StringLitContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.ansiNonReserved`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnsiNonReserved?: (ctx: AnsiNonReservedContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.strictNonReserved`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStrictNonReserved?: (ctx: StrictNonReservedContext) => Result;
    /**
     * Visit a parse tree produced by `SqlParser.nonReserved`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonReserved?: (ctx: NonReservedContext) => Result;
}

