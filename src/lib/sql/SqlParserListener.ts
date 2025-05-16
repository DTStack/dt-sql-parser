// Generated from dt-sql-parser/src/grammar/sql/SqlParser.g4 by ANTLR 4.13.1

// @ts-nocheck

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


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
 * This interface defines a complete listener for a parse tree produced by
 * `SqlParser`.
 */
export class SqlParserListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `SqlParser.program`.
     * @param ctx the parse tree
     */
    enterProgram?: (ctx: ProgramContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.program`.
     * @param ctx the parse tree
     */
    exitProgram?: (ctx: ProgramContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.singleStatement`.
     * @param ctx the parse tree
     */
    enterSingleStatement?: (ctx: SingleStatementContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.singleStatement`.
     * @param ctx the parse tree
     */
    exitSingleStatement?: (ctx: SingleStatementContext) => void;
    /**
     * Enter a parse tree produced by the `statementDefault`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    enterStatementDefault?: (ctx: StatementDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `statementDefault`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    exitStatementDefault?: (ctx: StatementDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `dmlStatement`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDmlStatement?: (ctx: DmlStatementContext) => void;
    /**
     * Exit a parse tree produced by the `dmlStatement`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDmlStatement?: (ctx: DmlStatementContext) => void;
    /**
     * Enter a parse tree produced by the `useNamespace`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    enterUseNamespace?: (ctx: UseNamespaceContext) => void;
    /**
     * Exit a parse tree produced by the `useNamespace`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    exitUseNamespace?: (ctx: UseNamespaceContext) => void;
    /**
     * Enter a parse tree produced by the `alter`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    enterAlter?: (ctx: AlterContext) => void;
    /**
     * Exit a parse tree produced by the `alter`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    exitAlter?: (ctx: AlterContext) => void;
    /**
     * Enter a parse tree produced by the `create`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    enterCreate?: (ctx: CreateContext) => void;
    /**
     * Exit a parse tree produced by the `create`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    exitCreate?: (ctx: CreateContext) => void;
    /**
     * Enter a parse tree produced by the `drop`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDrop?: (ctx: DropContext) => void;
    /**
     * Exit a parse tree produced by the `drop`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDrop?: (ctx: DropContext) => void;
    /**
     * Enter a parse tree produced by the `show`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    enterShow?: (ctx: ShowContext) => void;
    /**
     * Exit a parse tree produced by the `show`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    exitShow?: (ctx: ShowContext) => void;
    /**
     * Enter a parse tree produced by the `truncateTable`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    enterTruncateTable?: (ctx: TruncateTableContext) => void;
    /**
     * Exit a parse tree produced by the `truncateTable`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    exitTruncateTable?: (ctx: TruncateTableContext) => void;
    /**
     * Enter a parse tree produced by the `analyze`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    enterAnalyze?: (ctx: AnalyzeContext) => void;
    /**
     * Exit a parse tree produced by the `analyze`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    exitAnalyze?: (ctx: AnalyzeContext) => void;
    /**
     * Enter a parse tree produced by the `analyzeTables`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    enterAnalyzeTables?: (ctx: AnalyzeTablesContext) => void;
    /**
     * Exit a parse tree produced by the `analyzeTables`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    exitAnalyzeTables?: (ctx: AnalyzeTablesContext) => void;
    /**
     * Enter a parse tree produced by the `declareVariable`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDeclareVariable?: (ctx: DeclareVariableContext) => void;
    /**
     * Exit a parse tree produced by the `declareVariable`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDeclareVariable?: (ctx: DeclareVariableContext) => void;
    /**
     * Enter a parse tree produced by the `explainStatement`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    enterExplainStatement?: (ctx: ExplainStatementContext) => void;
    /**
     * Exit a parse tree produced by the `explainStatement`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    exitExplainStatement?: (ctx: ExplainStatementContext) => void;
    /**
     * Enter a parse tree produced by the `describeFunction`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDescribeFunction?: (ctx: DescribeFunctionContext) => void;
    /**
     * Exit a parse tree produced by the `describeFunction`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDescribeFunction?: (ctx: DescribeFunctionContext) => void;
    /**
     * Enter a parse tree produced by the `describeNamespace`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDescribeNamespace?: (ctx: DescribeNamespaceContext) => void;
    /**
     * Exit a parse tree produced by the `describeNamespace`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDescribeNamespace?: (ctx: DescribeNamespaceContext) => void;
    /**
     * Enter a parse tree produced by the `describeQuery`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDescribeQuery?: (ctx: DescribeQueryContext) => void;
    /**
     * Exit a parse tree produced by the `describeQuery`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDescribeQuery?: (ctx: DescribeQueryContext) => void;
    /**
     * Enter a parse tree produced by the `describeRelation`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDescribeRelation?: (ctx: DescribeRelationContext) => void;
    /**
     * Exit a parse tree produced by the `describeRelation`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDescribeRelation?: (ctx: DescribeRelationContext) => void;
    /**
     * Enter a parse tree produced by the `commentNamespace`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    enterCommentNamespace?: (ctx: CommentNamespaceContext) => void;
    /**
     * Exit a parse tree produced by the `commentNamespace`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    exitCommentNamespace?: (ctx: CommentNamespaceContext) => void;
    /**
     * Enter a parse tree produced by the `refreshTable`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    enterRefreshTable?: (ctx: RefreshTableContext) => void;
    /**
     * Exit a parse tree produced by the `refreshTable`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    exitRefreshTable?: (ctx: RefreshTableContext) => void;
    /**
     * Enter a parse tree produced by the `refreshFunction`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    enterRefreshFunction?: (ctx: RefreshFunctionContext) => void;
    /**
     * Exit a parse tree produced by the `refreshFunction`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    exitRefreshFunction?: (ctx: RefreshFunctionContext) => void;
    /**
     * Enter a parse tree produced by the `refreshResource`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    enterRefreshResource?: (ctx: RefreshResourceContext) => void;
    /**
     * Exit a parse tree produced by the `refreshResource`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    exitRefreshResource?: (ctx: RefreshResourceContext) => void;
    /**
     * Enter a parse tree produced by the `cacheTable`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    enterCacheTable?: (ctx: CacheTableContext) => void;
    /**
     * Exit a parse tree produced by the `cacheTable`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    exitCacheTable?: (ctx: CacheTableContext) => void;
    /**
     * Enter a parse tree produced by the `unCacheTable`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    enterUnCacheTable?: (ctx: UnCacheTableContext) => void;
    /**
     * Exit a parse tree produced by the `unCacheTable`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    exitUnCacheTable?: (ctx: UnCacheTableContext) => void;
    /**
     * Enter a parse tree produced by the `clearCache`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    enterClearCache?: (ctx: ClearCacheContext) => void;
    /**
     * Exit a parse tree produced by the `clearCache`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    exitClearCache?: (ctx: ClearCacheContext) => void;
    /**
     * Enter a parse tree produced by the `loadData`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    enterLoadData?: (ctx: LoadDataContext) => void;
    /**
     * Exit a parse tree produced by the `loadData`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    exitLoadData?: (ctx: LoadDataContext) => void;
    /**
     * Enter a parse tree produced by the `repairTable`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    enterRepairTable?: (ctx: RepairTableContext) => void;
    /**
     * Exit a parse tree produced by the `repairTable`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    exitRepairTable?: (ctx: RepairTableContext) => void;
    /**
     * Enter a parse tree produced by the `manageResource`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    enterManageResource?: (ctx: ManageResourceContext) => void;
    /**
     * Exit a parse tree produced by the `manageResource`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    exitManageResource?: (ctx: ManageResourceContext) => void;
    /**
     * Enter a parse tree produced by the `setAny`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    enterSetAny?: (ctx: SetAnyContext) => void;
    /**
     * Exit a parse tree produced by the `setAny`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    exitSetAny?: (ctx: SetAnyContext) => void;
    /**
     * Enter a parse tree produced by the `resetAny`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    enterResetAny?: (ctx: ResetAnyContext) => void;
    /**
     * Exit a parse tree produced by the `resetAny`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    exitResetAny?: (ctx: ResetAnyContext) => void;
    /**
     * Enter a parse tree produced by the `optimizeTable`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    enterOptimizeTable?: (ctx: OptimizeTableContext) => void;
    /**
     * Exit a parse tree produced by the `optimizeTable`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    exitOptimizeTable?: (ctx: OptimizeTableContext) => void;
    /**
     * Enter a parse tree produced by the `unsupportHiveCommands`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    enterUnsupportHiveCommands?: (ctx: UnsupportHiveCommandsContext) => void;
    /**
     * Exit a parse tree produced by the `unsupportHiveCommands`
     * labeled alternative in `SqlParser.statement`.
     * @param ctx the parse tree
     */
    exitUnsupportHiveCommands?: (ctx: UnsupportHiveCommandsContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.alterStatement`.
     * @param ctx the parse tree
     */
    enterAlterStatement?: (ctx: AlterStatementContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.alterStatement`.
     * @param ctx the parse tree
     */
    exitAlterStatement?: (ctx: AlterStatementContext) => void;
    /**
     * Enter a parse tree produced by the `createNamespace`
     * labeled alternative in `SqlParser.createStatement`.
     * @param ctx the parse tree
     */
    enterCreateNamespace?: (ctx: CreateNamespaceContext) => void;
    /**
     * Exit a parse tree produced by the `createNamespace`
     * labeled alternative in `SqlParser.createStatement`.
     * @param ctx the parse tree
     */
    exitCreateNamespace?: (ctx: CreateNamespaceContext) => void;
    /**
     * Enter a parse tree produced by the `createTable`
     * labeled alternative in `SqlParser.createStatement`.
     * @param ctx the parse tree
     */
    enterCreateTable?: (ctx: CreateTableContext) => void;
    /**
     * Exit a parse tree produced by the `createTable`
     * labeled alternative in `SqlParser.createStatement`.
     * @param ctx the parse tree
     */
    exitCreateTable?: (ctx: CreateTableContext) => void;
    /**
     * Enter a parse tree produced by the `replaceTable`
     * labeled alternative in `SqlParser.createStatement`.
     * @param ctx the parse tree
     */
    enterReplaceTable?: (ctx: ReplaceTableContext) => void;
    /**
     * Exit a parse tree produced by the `replaceTable`
     * labeled alternative in `SqlParser.createStatement`.
     * @param ctx the parse tree
     */
    exitReplaceTable?: (ctx: ReplaceTableContext) => void;
    /**
     * Enter a parse tree produced by the `createTableLike`
     * labeled alternative in `SqlParser.createStatement`.
     * @param ctx the parse tree
     */
    enterCreateTableLike?: (ctx: CreateTableLikeContext) => void;
    /**
     * Exit a parse tree produced by the `createTableLike`
     * labeled alternative in `SqlParser.createStatement`.
     * @param ctx the parse tree
     */
    exitCreateTableLike?: (ctx: CreateTableLikeContext) => void;
    /**
     * Enter a parse tree produced by the `createView`
     * labeled alternative in `SqlParser.createStatement`.
     * @param ctx the parse tree
     */
    enterCreateView?: (ctx: CreateViewContext) => void;
    /**
     * Exit a parse tree produced by the `createView`
     * labeled alternative in `SqlParser.createStatement`.
     * @param ctx the parse tree
     */
    exitCreateView?: (ctx: CreateViewContext) => void;
    /**
     * Enter a parse tree produced by the `createTempViewUsing`
     * labeled alternative in `SqlParser.createStatement`.
     * @param ctx the parse tree
     */
    enterCreateTempViewUsing?: (ctx: CreateTempViewUsingContext) => void;
    /**
     * Exit a parse tree produced by the `createTempViewUsing`
     * labeled alternative in `SqlParser.createStatement`.
     * @param ctx the parse tree
     */
    exitCreateTempViewUsing?: (ctx: CreateTempViewUsingContext) => void;
    /**
     * Enter a parse tree produced by the `createFunction`
     * labeled alternative in `SqlParser.createStatement`.
     * @param ctx the parse tree
     */
    enterCreateFunction?: (ctx: CreateFunctionContext) => void;
    /**
     * Exit a parse tree produced by the `createFunction`
     * labeled alternative in `SqlParser.createStatement`.
     * @param ctx the parse tree
     */
    exitCreateFunction?: (ctx: CreateFunctionContext) => void;
    /**
     * Enter a parse tree produced by the `createIndex`
     * labeled alternative in `SqlParser.createStatement`.
     * @param ctx the parse tree
     */
    enterCreateIndex?: (ctx: CreateIndexContext) => void;
    /**
     * Exit a parse tree produced by the `createIndex`
     * labeled alternative in `SqlParser.createStatement`.
     * @param ctx the parse tree
     */
    exitCreateIndex?: (ctx: CreateIndexContext) => void;
    /**
     * Enter a parse tree produced by the `createRole`
     * labeled alternative in `SqlParser.createStatement`.
     * @param ctx the parse tree
     */
    enterCreateRole?: (ctx: CreateRoleContext) => void;
    /**
     * Exit a parse tree produced by the `createRole`
     * labeled alternative in `SqlParser.createStatement`.
     * @param ctx the parse tree
     */
    exitCreateRole?: (ctx: CreateRoleContext) => void;
    /**
     * Enter a parse tree produced by the `dropNamespace`
     * labeled alternative in `SqlParser.dropStatement`.
     * @param ctx the parse tree
     */
    enterDropNamespace?: (ctx: DropNamespaceContext) => void;
    /**
     * Exit a parse tree produced by the `dropNamespace`
     * labeled alternative in `SqlParser.dropStatement`.
     * @param ctx the parse tree
     */
    exitDropNamespace?: (ctx: DropNamespaceContext) => void;
    /**
     * Enter a parse tree produced by the `dropTable`
     * labeled alternative in `SqlParser.dropStatement`.
     * @param ctx the parse tree
     */
    enterDropTable?: (ctx: DropTableContext) => void;
    /**
     * Exit a parse tree produced by the `dropTable`
     * labeled alternative in `SqlParser.dropStatement`.
     * @param ctx the parse tree
     */
    exitDropTable?: (ctx: DropTableContext) => void;
    /**
     * Enter a parse tree produced by the `dropView`
     * labeled alternative in `SqlParser.dropStatement`.
     * @param ctx the parse tree
     */
    enterDropView?: (ctx: DropViewContext) => void;
    /**
     * Exit a parse tree produced by the `dropView`
     * labeled alternative in `SqlParser.dropStatement`.
     * @param ctx the parse tree
     */
    exitDropView?: (ctx: DropViewContext) => void;
    /**
     * Enter a parse tree produced by the `dropFunction`
     * labeled alternative in `SqlParser.dropStatement`.
     * @param ctx the parse tree
     */
    enterDropFunction?: (ctx: DropFunctionContext) => void;
    /**
     * Exit a parse tree produced by the `dropFunction`
     * labeled alternative in `SqlParser.dropStatement`.
     * @param ctx the parse tree
     */
    exitDropFunction?: (ctx: DropFunctionContext) => void;
    /**
     * Enter a parse tree produced by the `dropVariable`
     * labeled alternative in `SqlParser.dropStatement`.
     * @param ctx the parse tree
     */
    enterDropVariable?: (ctx: DropVariableContext) => void;
    /**
     * Exit a parse tree produced by the `dropVariable`
     * labeled alternative in `SqlParser.dropStatement`.
     * @param ctx the parse tree
     */
    exitDropVariable?: (ctx: DropVariableContext) => void;
    /**
     * Enter a parse tree produced by the `dropIndex`
     * labeled alternative in `SqlParser.dropStatement`.
     * @param ctx the parse tree
     */
    enterDropIndex?: (ctx: DropIndexContext) => void;
    /**
     * Exit a parse tree produced by the `dropIndex`
     * labeled alternative in `SqlParser.dropStatement`.
     * @param ctx the parse tree
     */
    exitDropIndex?: (ctx: DropIndexContext) => void;
    /**
     * Enter a parse tree produced by the `dropRole`
     * labeled alternative in `SqlParser.dropStatement`.
     * @param ctx the parse tree
     */
    enterDropRole?: (ctx: DropRoleContext) => void;
    /**
     * Exit a parse tree produced by the `dropRole`
     * labeled alternative in `SqlParser.dropStatement`.
     * @param ctx the parse tree
     */
    exitDropRole?: (ctx: DropRoleContext) => void;
    /**
     * Enter a parse tree produced by the `insertFromQuery`
     * labeled alternative in `SqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     */
    enterInsertFromQuery?: (ctx: InsertFromQueryContext) => void;
    /**
     * Exit a parse tree produced by the `insertFromQuery`
     * labeled alternative in `SqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     */
    exitInsertFromQuery?: (ctx: InsertFromQueryContext) => void;
    /**
     * Enter a parse tree produced by the `multipleInsert`
     * labeled alternative in `SqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     */
    enterMultipleInsert?: (ctx: MultipleInsertContext) => void;
    /**
     * Exit a parse tree produced by the `multipleInsert`
     * labeled alternative in `SqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     */
    exitMultipleInsert?: (ctx: MultipleInsertContext) => void;
    /**
     * Enter a parse tree produced by the `deleteFromTable`
     * labeled alternative in `SqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     */
    enterDeleteFromTable?: (ctx: DeleteFromTableContext) => void;
    /**
     * Exit a parse tree produced by the `deleteFromTable`
     * labeled alternative in `SqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     */
    exitDeleteFromTable?: (ctx: DeleteFromTableContext) => void;
    /**
     * Enter a parse tree produced by the `updateTable`
     * labeled alternative in `SqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     */
    enterUpdateTable?: (ctx: UpdateTableContext) => void;
    /**
     * Exit a parse tree produced by the `updateTable`
     * labeled alternative in `SqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     */
    exitUpdateTable?: (ctx: UpdateTableContext) => void;
    /**
     * Enter a parse tree produced by the `mergeIntoTable`
     * labeled alternative in `SqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     */
    enterMergeIntoTable?: (ctx: MergeIntoTableContext) => void;
    /**
     * Exit a parse tree produced by the `mergeIntoTable`
     * labeled alternative in `SqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     */
    exitMergeIntoTable?: (ctx: MergeIntoTableContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.insertInto`.
     * @param ctx the parse tree
     */
    enterInsertInto?: (ctx: InsertIntoContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.insertInto`.
     * @param ctx the parse tree
     */
    exitInsertInto?: (ctx: InsertIntoContext) => void;
    /**
     * Enter a parse tree produced by the `showNamespaces`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowNamespaces?: (ctx: ShowNamespacesContext) => void;
    /**
     * Exit a parse tree produced by the `showNamespaces`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowNamespaces?: (ctx: ShowNamespacesContext) => void;
    /**
     * Enter a parse tree produced by the `showTables`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowTables?: (ctx: ShowTablesContext) => void;
    /**
     * Exit a parse tree produced by the `showTables`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowTables?: (ctx: ShowTablesContext) => void;
    /**
     * Enter a parse tree produced by the `showTableExtended`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowTableExtended?: (ctx: ShowTableExtendedContext) => void;
    /**
     * Exit a parse tree produced by the `showTableExtended`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowTableExtended?: (ctx: ShowTableExtendedContext) => void;
    /**
     * Enter a parse tree produced by the `showTblProperties`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowTblProperties?: (ctx: ShowTblPropertiesContext) => void;
    /**
     * Exit a parse tree produced by the `showTblProperties`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowTblProperties?: (ctx: ShowTblPropertiesContext) => void;
    /**
     * Enter a parse tree produced by the `showColumns`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowColumns?: (ctx: ShowColumnsContext) => void;
    /**
     * Exit a parse tree produced by the `showColumns`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowColumns?: (ctx: ShowColumnsContext) => void;
    /**
     * Enter a parse tree produced by the `showViews`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowViews?: (ctx: ShowViewsContext) => void;
    /**
     * Exit a parse tree produced by the `showViews`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowViews?: (ctx: ShowViewsContext) => void;
    /**
     * Enter a parse tree produced by the `showPartitions`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowPartitions?: (ctx: ShowPartitionsContext) => void;
    /**
     * Exit a parse tree produced by the `showPartitions`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowPartitions?: (ctx: ShowPartitionsContext) => void;
    /**
     * Enter a parse tree produced by the `showFunctions`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowFunctions?: (ctx: ShowFunctionsContext) => void;
    /**
     * Exit a parse tree produced by the `showFunctions`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowFunctions?: (ctx: ShowFunctionsContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateTable`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowCreateTable?: (ctx: ShowCreateTableContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateTable`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowCreateTable?: (ctx: ShowCreateTableContext) => void;
    /**
     * Enter a parse tree produced by the `showCurrentNamespace`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowCurrentNamespace?: (ctx: ShowCurrentNamespaceContext) => void;
    /**
     * Exit a parse tree produced by the `showCurrentNamespace`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowCurrentNamespace?: (ctx: ShowCurrentNamespaceContext) => void;
    /**
     * Enter a parse tree produced by the `showCatalogs`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowCatalogs?: (ctx: ShowCatalogsContext) => void;
    /**
     * Exit a parse tree produced by the `showCatalogs`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowCatalogs?: (ctx: ShowCatalogsContext) => void;
    /**
     * Enter a parse tree produced by the `showOther`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowOther?: (ctx: ShowOtherContext) => void;
    /**
     * Exit a parse tree produced by the `showOther`
     * labeled alternative in `SqlParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowOther?: (ctx: ShowOtherContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.unsupportedCommands`.
     * @param ctx the parse tree
     */
    enterUnsupportedCommands?: (ctx: UnsupportedCommandsContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.unsupportedCommands`.
     * @param ctx the parse tree
     */
    exitUnsupportedCommands?: (ctx: UnsupportedCommandsContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.bucketSpec`.
     * @param ctx the parse tree
     */
    enterBucketSpec?: (ctx: BucketSpecContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.bucketSpec`.
     * @param ctx the parse tree
     */
    exitBucketSpec?: (ctx: BucketSpecContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.skewSpec`.
     * @param ctx the parse tree
     */
    enterSkewSpec?: (ctx: SkewSpecContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.skewSpec`.
     * @param ctx the parse tree
     */
    exitSkewSpec?: (ctx: SkewSpecContext) => void;
    /**
     * Enter a parse tree produced by the `queryStatement`
     * labeled alternative in `SqlParser.query`.
     * @param ctx the parse tree
     */
    enterQueryStatement?: (ctx: QueryStatementContext) => void;
    /**
     * Exit a parse tree produced by the `queryStatement`
     * labeled alternative in `SqlParser.query`.
     * @param ctx the parse tree
     */
    exitQueryStatement?: (ctx: QueryStatementContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.partitionSpecLocation`.
     * @param ctx the parse tree
     */
    enterPartitionSpecLocation?: (ctx: PartitionSpecLocationContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.partitionSpecLocation`.
     * @param ctx the parse tree
     */
    exitPartitionSpecLocation?: (ctx: PartitionSpecLocationContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.partitionSpec`.
     * @param ctx the parse tree
     */
    enterPartitionSpec?: (ctx: PartitionSpecContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.partitionSpec`.
     * @param ctx the parse tree
     */
    exitPartitionSpec?: (ctx: PartitionSpecContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.partitionVal`.
     * @param ctx the parse tree
     */
    enterPartitionVal?: (ctx: PartitionValContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.partitionVal`.
     * @param ctx the parse tree
     */
    exitPartitionVal?: (ctx: PartitionValContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.namespace`.
     * @param ctx the parse tree
     */
    enterNamespace?: (ctx: NamespaceContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.namespace`.
     * @param ctx the parse tree
     */
    exitNamespace?: (ctx: NamespaceContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.describeFuncName`.
     * @param ctx the parse tree
     */
    enterDescribeFuncName?: (ctx: DescribeFuncNameContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.describeFuncName`.
     * @param ctx the parse tree
     */
    exitDescribeFuncName?: (ctx: DescribeFuncNameContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.describeColName`.
     * @param ctx the parse tree
     */
    enterDescribeColName?: (ctx: DescribeColNameContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.describeColName`.
     * @param ctx the parse tree
     */
    exitDescribeColName?: (ctx: DescribeColNameContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.ctes`.
     * @param ctx the parse tree
     */
    enterCtes?: (ctx: CtesContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.ctes`.
     * @param ctx the parse tree
     */
    exitCtes?: (ctx: CtesContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.namedQuery`.
     * @param ctx the parse tree
     */
    enterNamedQuery?: (ctx: NamedQueryContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.namedQuery`.
     * @param ctx the parse tree
     */
    exitNamedQuery?: (ctx: NamedQueryContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.tableProvider`.
     * @param ctx the parse tree
     */
    enterTableProvider?: (ctx: TableProviderContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.tableProvider`.
     * @param ctx the parse tree
     */
    exitTableProvider?: (ctx: TableProviderContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.createTableClauses`.
     * @param ctx the parse tree
     */
    enterCreateTableClauses?: (ctx: CreateTableClausesContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.createTableClauses`.
     * @param ctx the parse tree
     */
    exitCreateTableClauses?: (ctx: CreateTableClausesContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.tableLifecycle`.
     * @param ctx the parse tree
     */
    enterTableLifecycle?: (ctx: TableLifecycleContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.tableLifecycle`.
     * @param ctx the parse tree
     */
    exitTableLifecycle?: (ctx: TableLifecycleContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.propertyList`.
     * @param ctx the parse tree
     */
    enterPropertyList?: (ctx: PropertyListContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.propertyList`.
     * @param ctx the parse tree
     */
    exitPropertyList?: (ctx: PropertyListContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.property`.
     * @param ctx the parse tree
     */
    enterProperty?: (ctx: PropertyContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.property`.
     * @param ctx the parse tree
     */
    exitProperty?: (ctx: PropertyContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.propertyKey`.
     * @param ctx the parse tree
     */
    enterPropertyKey?: (ctx: PropertyKeyContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.propertyKey`.
     * @param ctx the parse tree
     */
    exitPropertyKey?: (ctx: PropertyKeyContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.propertyValue`.
     * @param ctx the parse tree
     */
    enterPropertyValue?: (ctx: PropertyValueContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.propertyValue`.
     * @param ctx the parse tree
     */
    exitPropertyValue?: (ctx: PropertyValueContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.expressionPropertyList`.
     * @param ctx the parse tree
     */
    enterExpressionPropertyList?: (ctx: ExpressionPropertyListContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.expressionPropertyList`.
     * @param ctx the parse tree
     */
    exitExpressionPropertyList?: (ctx: ExpressionPropertyListContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.expressionProperty`.
     * @param ctx the parse tree
     */
    enterExpressionProperty?: (ctx: ExpressionPropertyContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.expressionProperty`.
     * @param ctx the parse tree
     */
    exitExpressionProperty?: (ctx: ExpressionPropertyContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.constantList`.
     * @param ctx the parse tree
     */
    enterConstantList?: (ctx: ConstantListContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.constantList`.
     * @param ctx the parse tree
     */
    exitConstantList?: (ctx: ConstantListContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.nestedConstantList`.
     * @param ctx the parse tree
     */
    enterNestedConstantList?: (ctx: NestedConstantListContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.nestedConstantList`.
     * @param ctx the parse tree
     */
    exitNestedConstantList?: (ctx: NestedConstantListContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.createFileFormat`.
     * @param ctx the parse tree
     */
    enterCreateFileFormat?: (ctx: CreateFileFormatContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.createFileFormat`.
     * @param ctx the parse tree
     */
    exitCreateFileFormat?: (ctx: CreateFileFormatContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.fileFormat`.
     * @param ctx the parse tree
     */
    enterFileFormat?: (ctx: FileFormatContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.fileFormat`.
     * @param ctx the parse tree
     */
    exitFileFormat?: (ctx: FileFormatContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.storageHandler`.
     * @param ctx the parse tree
     */
    enterStorageHandler?: (ctx: StorageHandlerContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.storageHandler`.
     * @param ctx the parse tree
     */
    exitStorageHandler?: (ctx: StorageHandlerContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.namespaceName`.
     * @param ctx the parse tree
     */
    enterNamespaceName?: (ctx: NamespaceNameContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.namespaceName`.
     * @param ctx the parse tree
     */
    exitNamespaceName?: (ctx: NamespaceNameContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.namespaceNameCreate`.
     * @param ctx the parse tree
     */
    enterNamespaceNameCreate?: (ctx: NamespaceNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.namespaceNameCreate`.
     * @param ctx the parse tree
     */
    exitNamespaceNameCreate?: (ctx: NamespaceNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.tableNameCreate`.
     * @param ctx the parse tree
     */
    enterTableNameCreate?: (ctx: TableNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.tableNameCreate`.
     * @param ctx the parse tree
     */
    exitTableNameCreate?: (ctx: TableNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.tableName`.
     * @param ctx the parse tree
     */
    enterTableName?: (ctx: TableNameContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.tableName`.
     * @param ctx the parse tree
     */
    exitTableName?: (ctx: TableNameContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.viewNameCreate`.
     * @param ctx the parse tree
     */
    enterViewNameCreate?: (ctx: ViewNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.viewNameCreate`.
     * @param ctx the parse tree
     */
    exitViewNameCreate?: (ctx: ViewNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.viewName`.
     * @param ctx the parse tree
     */
    enterViewName?: (ctx: ViewNameContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.viewName`.
     * @param ctx the parse tree
     */
    exitViewName?: (ctx: ViewNameContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.columnName`.
     * @param ctx the parse tree
     */
    enterColumnName?: (ctx: ColumnNameContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.columnName`.
     * @param ctx the parse tree
     */
    exitColumnName?: (ctx: ColumnNameContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.columnNameSeq`.
     * @param ctx the parse tree
     */
    enterColumnNameSeq?: (ctx: ColumnNameSeqContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.columnNameSeq`.
     * @param ctx the parse tree
     */
    exitColumnNameSeq?: (ctx: ColumnNameSeqContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.columnNameCreate`.
     * @param ctx the parse tree
     */
    enterColumnNameCreate?: (ctx: ColumnNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.columnNameCreate`.
     * @param ctx the parse tree
     */
    exitColumnNameCreate?: (ctx: ColumnNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.identifierReference`.
     * @param ctx the parse tree
     */
    enterIdentifierReference?: (ctx: IdentifierReferenceContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.identifierReference`.
     * @param ctx the parse tree
     */
    exitIdentifierReference?: (ctx: IdentifierReferenceContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.queryOrganization`.
     * @param ctx the parse tree
     */
    enterQueryOrganization?: (ctx: QueryOrganizationContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.queryOrganization`.
     * @param ctx the parse tree
     */
    exitQueryOrganization?: (ctx: QueryOrganizationContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.queryTerm`.
     * @param ctx the parse tree
     */
    enterQueryTerm?: (ctx: QueryTermContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.queryTerm`.
     * @param ctx the parse tree
     */
    exitQueryTerm?: (ctx: QueryTermContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.queryPrimary`.
     * @param ctx the parse tree
     */
    enterQueryPrimary?: (ctx: QueryPrimaryContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.queryPrimary`.
     * @param ctx the parse tree
     */
    exitQueryPrimary?: (ctx: QueryPrimaryContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.sortItem`.
     * @param ctx the parse tree
     */
    enterSortItem?: (ctx: SortItemContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.sortItem`.
     * @param ctx the parse tree
     */
    exitSortItem?: (ctx: SortItemContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.fromStatementBody`.
     * @param ctx the parse tree
     */
    enterFromStatementBody?: (ctx: FromStatementBodyContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.fromStatementBody`.
     * @param ctx the parse tree
     */
    exitFromStatementBody?: (ctx: FromStatementBodyContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.querySpecification`.
     * @param ctx the parse tree
     */
    enterQuerySpecification?: (ctx: QuerySpecificationContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.querySpecification`.
     * @param ctx the parse tree
     */
    exitQuerySpecification?: (ctx: QuerySpecificationContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.transformClause`.
     * @param ctx the parse tree
     */
    enterTransformClause?: (ctx: TransformClauseContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.transformClause`.
     * @param ctx the parse tree
     */
    exitTransformClause?: (ctx: TransformClauseContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.selectClause`.
     * @param ctx the parse tree
     */
    enterSelectClause?: (ctx: SelectClauseContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.selectClause`.
     * @param ctx the parse tree
     */
    exitSelectClause?: (ctx: SelectClauseContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.setClause`.
     * @param ctx the parse tree
     */
    enterSetClause?: (ctx: SetClauseContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.setClause`.
     * @param ctx the parse tree
     */
    exitSetClause?: (ctx: SetClauseContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.matchedClause`.
     * @param ctx the parse tree
     */
    enterMatchedClause?: (ctx: MatchedClauseContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.matchedClause`.
     * @param ctx the parse tree
     */
    exitMatchedClause?: (ctx: MatchedClauseContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.notMatchedClause`.
     * @param ctx the parse tree
     */
    enterNotMatchedClause?: (ctx: NotMatchedClauseContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.notMatchedClause`.
     * @param ctx the parse tree
     */
    exitNotMatchedClause?: (ctx: NotMatchedClauseContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.notMatchedBySourceClause`.
     * @param ctx the parse tree
     */
    enterNotMatchedBySourceClause?: (ctx: NotMatchedBySourceClauseContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.notMatchedBySourceClause`.
     * @param ctx the parse tree
     */
    exitNotMatchedBySourceClause?: (ctx: NotMatchedBySourceClauseContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.notMatchedAction`.
     * @param ctx the parse tree
     */
    enterNotMatchedAction?: (ctx: NotMatchedActionContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.notMatchedAction`.
     * @param ctx the parse tree
     */
    exitNotMatchedAction?: (ctx: NotMatchedActionContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.assignmentList`.
     * @param ctx the parse tree
     */
    enterAssignmentList?: (ctx: AssignmentListContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.assignmentList`.
     * @param ctx the parse tree
     */
    exitAssignmentList?: (ctx: AssignmentListContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.assignment`.
     * @param ctx the parse tree
     */
    enterAssignment?: (ctx: AssignmentContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.assignment`.
     * @param ctx the parse tree
     */
    exitAssignment?: (ctx: AssignmentContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.whereClause`.
     * @param ctx the parse tree
     */
    enterWhereClause?: (ctx: WhereClauseContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.whereClause`.
     * @param ctx the parse tree
     */
    exitWhereClause?: (ctx: WhereClauseContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.havingClause`.
     * @param ctx the parse tree
     */
    enterHavingClause?: (ctx: HavingClauseContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.havingClause`.
     * @param ctx the parse tree
     */
    exitHavingClause?: (ctx: HavingClauseContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.hint`.
     * @param ctx the parse tree
     */
    enterHint?: (ctx: HintContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.hint`.
     * @param ctx the parse tree
     */
    exitHint?: (ctx: HintContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.hintStatement`.
     * @param ctx the parse tree
     */
    enterHintStatement?: (ctx: HintStatementContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.hintStatement`.
     * @param ctx the parse tree
     */
    exitHintStatement?: (ctx: HintStatementContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.fromClause`.
     * @param ctx the parse tree
     */
    enterFromClause?: (ctx: FromClauseContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.fromClause`.
     * @param ctx the parse tree
     */
    exitFromClause?: (ctx: FromClauseContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.temporalClause`.
     * @param ctx the parse tree
     */
    enterTemporalClause?: (ctx: TemporalClauseContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.temporalClause`.
     * @param ctx the parse tree
     */
    exitTemporalClause?: (ctx: TemporalClauseContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.aggregationClause`.
     * @param ctx the parse tree
     */
    enterAggregationClause?: (ctx: AggregationClauseContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.aggregationClause`.
     * @param ctx the parse tree
     */
    exitAggregationClause?: (ctx: AggregationClauseContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.groupByClause`.
     * @param ctx the parse tree
     */
    enterGroupByClause?: (ctx: GroupByClauseContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.groupByClause`.
     * @param ctx the parse tree
     */
    exitGroupByClause?: (ctx: GroupByClauseContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.groupingAnalytics`.
     * @param ctx the parse tree
     */
    enterGroupingAnalytics?: (ctx: GroupingAnalyticsContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.groupingAnalytics`.
     * @param ctx the parse tree
     */
    exitGroupingAnalytics?: (ctx: GroupingAnalyticsContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.groupingSet`.
     * @param ctx the parse tree
     */
    enterGroupingSet?: (ctx: GroupingSetContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.groupingSet`.
     * @param ctx the parse tree
     */
    exitGroupingSet?: (ctx: GroupingSetContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.pivotClause`.
     * @param ctx the parse tree
     */
    enterPivotClause?: (ctx: PivotClauseContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.pivotClause`.
     * @param ctx the parse tree
     */
    exitPivotClause?: (ctx: PivotClauseContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.pivotColumn`.
     * @param ctx the parse tree
     */
    enterPivotColumn?: (ctx: PivotColumnContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.pivotColumn`.
     * @param ctx the parse tree
     */
    exitPivotColumn?: (ctx: PivotColumnContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.pivotValue`.
     * @param ctx the parse tree
     */
    enterPivotValue?: (ctx: PivotValueContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.pivotValue`.
     * @param ctx the parse tree
     */
    exitPivotValue?: (ctx: PivotValueContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.unpivotClause`.
     * @param ctx the parse tree
     */
    enterUnpivotClause?: (ctx: UnpivotClauseContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.unpivotClause`.
     * @param ctx the parse tree
     */
    exitUnpivotClause?: (ctx: UnpivotClauseContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.unpivotSingleValueColumnClause`.
     * @param ctx the parse tree
     */
    enterUnpivotSingleValueColumnClause?: (ctx: UnpivotSingleValueColumnClauseContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.unpivotSingleValueColumnClause`.
     * @param ctx the parse tree
     */
    exitUnpivotSingleValueColumnClause?: (ctx: UnpivotSingleValueColumnClauseContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.unpivotMultiValueColumnClause`.
     * @param ctx the parse tree
     */
    enterUnpivotMultiValueColumnClause?: (ctx: UnpivotMultiValueColumnClauseContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.unpivotMultiValueColumnClause`.
     * @param ctx the parse tree
     */
    exitUnpivotMultiValueColumnClause?: (ctx: UnpivotMultiValueColumnClauseContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.unpivotColumnSet`.
     * @param ctx the parse tree
     */
    enterUnpivotColumnSet?: (ctx: UnpivotColumnSetContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.unpivotColumnSet`.
     * @param ctx the parse tree
     */
    exitUnpivotColumnSet?: (ctx: UnpivotColumnSetContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.unpivotColumnAndAlias`.
     * @param ctx the parse tree
     */
    enterUnpivotColumnAndAlias?: (ctx: UnpivotColumnAndAliasContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.unpivotColumnAndAlias`.
     * @param ctx the parse tree
     */
    exitUnpivotColumnAndAlias?: (ctx: UnpivotColumnAndAliasContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.ifNotExists`.
     * @param ctx the parse tree
     */
    enterIfNotExists?: (ctx: IfNotExistsContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.ifNotExists`.
     * @param ctx the parse tree
     */
    exitIfNotExists?: (ctx: IfNotExistsContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.ifExists`.
     * @param ctx the parse tree
     */
    enterIfExists?: (ctx: IfExistsContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.ifExists`.
     * @param ctx the parse tree
     */
    exitIfExists?: (ctx: IfExistsContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.lateralView`.
     * @param ctx the parse tree
     */
    enterLateralView?: (ctx: LateralViewContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.lateralView`.
     * @param ctx the parse tree
     */
    exitLateralView?: (ctx: LateralViewContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.setQuantifier`.
     * @param ctx the parse tree
     */
    enterSetQuantifier?: (ctx: SetQuantifierContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.setQuantifier`.
     * @param ctx the parse tree
     */
    exitSetQuantifier?: (ctx: SetQuantifierContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.relation`.
     * @param ctx the parse tree
     */
    enterRelation?: (ctx: RelationContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.relation`.
     * @param ctx the parse tree
     */
    exitRelation?: (ctx: RelationContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.joinRelation`.
     * @param ctx the parse tree
     */
    enterJoinRelation?: (ctx: JoinRelationContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.joinRelation`.
     * @param ctx the parse tree
     */
    exitJoinRelation?: (ctx: JoinRelationContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.joinType`.
     * @param ctx the parse tree
     */
    enterJoinType?: (ctx: JoinTypeContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.joinType`.
     * @param ctx the parse tree
     */
    exitJoinType?: (ctx: JoinTypeContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.joinCriteria`.
     * @param ctx the parse tree
     */
    enterJoinCriteria?: (ctx: JoinCriteriaContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.joinCriteria`.
     * @param ctx the parse tree
     */
    exitJoinCriteria?: (ctx: JoinCriteriaContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.sample`.
     * @param ctx the parse tree
     */
    enterSample?: (ctx: SampleContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.sample`.
     * @param ctx the parse tree
     */
    exitSample?: (ctx: SampleContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.sampleMethod`.
     * @param ctx the parse tree
     */
    enterSampleMethod?: (ctx: SampleMethodContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.sampleMethod`.
     * @param ctx the parse tree
     */
    exitSampleMethod?: (ctx: SampleMethodContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.identifierList`.
     * @param ctx the parse tree
     */
    enterIdentifierList?: (ctx: IdentifierListContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.identifierList`.
     * @param ctx the parse tree
     */
    exitIdentifierList?: (ctx: IdentifierListContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.identifierSeq`.
     * @param ctx the parse tree
     */
    enterIdentifierSeq?: (ctx: IdentifierSeqContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.identifierSeq`.
     * @param ctx the parse tree
     */
    exitIdentifierSeq?: (ctx: IdentifierSeqContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.orderedIdentifierList`.
     * @param ctx the parse tree
     */
    enterOrderedIdentifierList?: (ctx: OrderedIdentifierListContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.orderedIdentifierList`.
     * @param ctx the parse tree
     */
    exitOrderedIdentifierList?: (ctx: OrderedIdentifierListContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.orderedIdentifier`.
     * @param ctx the parse tree
     */
    enterOrderedIdentifier?: (ctx: OrderedIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.orderedIdentifier`.
     * @param ctx the parse tree
     */
    exitOrderedIdentifier?: (ctx: OrderedIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.identifierCommentList`.
     * @param ctx the parse tree
     */
    enterIdentifierCommentList?: (ctx: IdentifierCommentListContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.identifierCommentList`.
     * @param ctx the parse tree
     */
    exitIdentifierCommentList?: (ctx: IdentifierCommentListContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.identifierComment`.
     * @param ctx the parse tree
     */
    enterIdentifierComment?: (ctx: IdentifierCommentContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.identifierComment`.
     * @param ctx the parse tree
     */
    exitIdentifierComment?: (ctx: IdentifierCommentContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.relationPrimary`.
     * @param ctx the parse tree
     */
    enterRelationPrimary?: (ctx: RelationPrimaryContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.relationPrimary`.
     * @param ctx the parse tree
     */
    exitRelationPrimary?: (ctx: RelationPrimaryContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.functionTableSubqueryArgument`.
     * @param ctx the parse tree
     */
    enterFunctionTableSubqueryArgument?: (ctx: FunctionTableSubqueryArgumentContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.functionTableSubqueryArgument`.
     * @param ctx the parse tree
     */
    exitFunctionTableSubqueryArgument?: (ctx: FunctionTableSubqueryArgumentContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.tableArgumentPartitioning`.
     * @param ctx the parse tree
     */
    enterTableArgumentPartitioning?: (ctx: TableArgumentPartitioningContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.tableArgumentPartitioning`.
     * @param ctx the parse tree
     */
    exitTableArgumentPartitioning?: (ctx: TableArgumentPartitioningContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.functionTableNamedArgumentExpression`.
     * @param ctx the parse tree
     */
    enterFunctionTableNamedArgumentExpression?: (ctx: FunctionTableNamedArgumentExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.functionTableNamedArgumentExpression`.
     * @param ctx the parse tree
     */
    exitFunctionTableNamedArgumentExpression?: (ctx: FunctionTableNamedArgumentExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.functionTableReferenceArgument`.
     * @param ctx the parse tree
     */
    enterFunctionTableReferenceArgument?: (ctx: FunctionTableReferenceArgumentContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.functionTableReferenceArgument`.
     * @param ctx the parse tree
     */
    exitFunctionTableReferenceArgument?: (ctx: FunctionTableReferenceArgumentContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.functionTableArgument`.
     * @param ctx the parse tree
     */
    enterFunctionTableArgument?: (ctx: FunctionTableArgumentContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.functionTableArgument`.
     * @param ctx the parse tree
     */
    exitFunctionTableArgument?: (ctx: FunctionTableArgumentContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.tableAlias`.
     * @param ctx the parse tree
     */
    enterTableAlias?: (ctx: TableAliasContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.tableAlias`.
     * @param ctx the parse tree
     */
    exitTableAlias?: (ctx: TableAliasContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.rowFormat`.
     * @param ctx the parse tree
     */
    enterRowFormat?: (ctx: RowFormatContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.rowFormat`.
     * @param ctx the parse tree
     */
    exitRowFormat?: (ctx: RowFormatContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.multipartIdentifierList`.
     * @param ctx the parse tree
     */
    enterMultipartIdentifierList?: (ctx: MultipartIdentifierListContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.multipartIdentifierList`.
     * @param ctx the parse tree
     */
    exitMultipartIdentifierList?: (ctx: MultipartIdentifierListContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.multipartIdentifier`.
     * @param ctx the parse tree
     */
    enterMultipartIdentifier?: (ctx: MultipartIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.multipartIdentifier`.
     * @param ctx the parse tree
     */
    exitMultipartIdentifier?: (ctx: MultipartIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.multipartIdentifierPropertyList`.
     * @param ctx the parse tree
     */
    enterMultipartIdentifierPropertyList?: (ctx: MultipartIdentifierPropertyListContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.multipartIdentifierPropertyList`.
     * @param ctx the parse tree
     */
    exitMultipartIdentifierPropertyList?: (ctx: MultipartIdentifierPropertyListContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.multipartIdentifierProperty`.
     * @param ctx the parse tree
     */
    enterMultipartIdentifierProperty?: (ctx: MultipartIdentifierPropertyContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.multipartIdentifierProperty`.
     * @param ctx the parse tree
     */
    exitMultipartIdentifierProperty?: (ctx: MultipartIdentifierPropertyContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.tableIdentifier`.
     * @param ctx the parse tree
     */
    enterTableIdentifier?: (ctx: TableIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.tableIdentifier`.
     * @param ctx the parse tree
     */
    exitTableIdentifier?: (ctx: TableIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.viewIdentifier`.
     * @param ctx the parse tree
     */
    enterViewIdentifier?: (ctx: ViewIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.viewIdentifier`.
     * @param ctx the parse tree
     */
    exitViewIdentifier?: (ctx: ViewIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.namedExpression`.
     * @param ctx the parse tree
     */
    enterNamedExpression?: (ctx: NamedExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.namedExpression`.
     * @param ctx the parse tree
     */
    exitNamedExpression?: (ctx: NamedExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.namedExpressionSeq`.
     * @param ctx the parse tree
     */
    enterNamedExpressionSeq?: (ctx: NamedExpressionSeqContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.namedExpressionSeq`.
     * @param ctx the parse tree
     */
    exitNamedExpressionSeq?: (ctx: NamedExpressionSeqContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.partitionFieldList`.
     * @param ctx the parse tree
     */
    enterPartitionFieldList?: (ctx: PartitionFieldListContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.partitionFieldList`.
     * @param ctx the parse tree
     */
    exitPartitionFieldList?: (ctx: PartitionFieldListContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.partitionField`.
     * @param ctx the parse tree
     */
    enterPartitionField?: (ctx: PartitionFieldContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.partitionField`.
     * @param ctx the parse tree
     */
    exitPartitionField?: (ctx: PartitionFieldContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.transform`.
     * @param ctx the parse tree
     */
    enterTransform?: (ctx: TransformContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.transform`.
     * @param ctx the parse tree
     */
    exitTransform?: (ctx: TransformContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.transformArgument`.
     * @param ctx the parse tree
     */
    enterTransformArgument?: (ctx: TransformArgumentContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.transformArgument`.
     * @param ctx the parse tree
     */
    exitTransformArgument?: (ctx: TransformArgumentContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.namedArgumentExpression`.
     * @param ctx the parse tree
     */
    enterNamedArgumentExpression?: (ctx: NamedArgumentExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.namedArgumentExpression`.
     * @param ctx the parse tree
     */
    exitNamedArgumentExpression?: (ctx: NamedArgumentExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.functionArgument`.
     * @param ctx the parse tree
     */
    enterFunctionArgument?: (ctx: FunctionArgumentContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.functionArgument`.
     * @param ctx the parse tree
     */
    exitFunctionArgument?: (ctx: FunctionArgumentContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.expressionSeq`.
     * @param ctx the parse tree
     */
    enterExpressionSeq?: (ctx: ExpressionSeqContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.expressionSeq`.
     * @param ctx the parse tree
     */
    exitExpressionSeq?: (ctx: ExpressionSeqContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterBooleanExpression?: (ctx: BooleanExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitBooleanExpression?: (ctx: BooleanExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterPredicate?: (ctx: PredicateContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitPredicate?: (ctx: PredicateContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterValueExpression?: (ctx: ValueExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitValueExpression?: (ctx: ValueExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.datetimeUnit`.
     * @param ctx the parse tree
     */
    enterDatetimeUnit?: (ctx: DatetimeUnitContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.datetimeUnit`.
     * @param ctx the parse tree
     */
    exitDatetimeUnit?: (ctx: DatetimeUnitContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.literalType`.
     * @param ctx the parse tree
     */
    enterLiteralType?: (ctx: LiteralTypeContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.literalType`.
     * @param ctx the parse tree
     */
    exitLiteralType?: (ctx: LiteralTypeContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.constant`.
     * @param ctx the parse tree
     */
    enterConstant?: (ctx: ConstantContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.constant`.
     * @param ctx the parse tree
     */
    exitConstant?: (ctx: ConstantContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.arithmeticOperator`.
     * @param ctx the parse tree
     */
    enterArithmeticOperator?: (ctx: ArithmeticOperatorContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.arithmeticOperator`.
     * @param ctx the parse tree
     */
    exitArithmeticOperator?: (ctx: ArithmeticOperatorContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.predicateOperator`.
     * @param ctx the parse tree
     */
    enterPredicateOperator?: (ctx: PredicateOperatorContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.predicateOperator`.
     * @param ctx the parse tree
     */
    exitPredicateOperator?: (ctx: PredicateOperatorContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.booleanValue`.
     * @param ctx the parse tree
     */
    enterBooleanValue?: (ctx: BooleanValueContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.booleanValue`.
     * @param ctx the parse tree
     */
    exitBooleanValue?: (ctx: BooleanValueContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.interval`.
     * @param ctx the parse tree
     */
    enterInterval?: (ctx: IntervalContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.interval`.
     * @param ctx the parse tree
     */
    exitInterval?: (ctx: IntervalContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.errorCapturingMultiUnitsInterval`.
     * @param ctx the parse tree
     */
    enterErrorCapturingMultiUnitsInterval?: (ctx: ErrorCapturingMultiUnitsIntervalContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.errorCapturingMultiUnitsInterval`.
     * @param ctx the parse tree
     */
    exitErrorCapturingMultiUnitsInterval?: (ctx: ErrorCapturingMultiUnitsIntervalContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.errorCapturingUnitToUnitInterval`.
     * @param ctx the parse tree
     */
    enterErrorCapturingUnitToUnitInterval?: (ctx: ErrorCapturingUnitToUnitIntervalContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.errorCapturingUnitToUnitInterval`.
     * @param ctx the parse tree
     */
    exitErrorCapturingUnitToUnitInterval?: (ctx: ErrorCapturingUnitToUnitIntervalContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.multiUnitsInterval`.
     * @param ctx the parse tree
     */
    enterMultiUnitsInterval?: (ctx: MultiUnitsIntervalContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.multiUnitsInterval`.
     * @param ctx the parse tree
     */
    exitMultiUnitsInterval?: (ctx: MultiUnitsIntervalContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.unitToUnitInterval`.
     * @param ctx the parse tree
     */
    enterUnitToUnitInterval?: (ctx: UnitToUnitIntervalContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.unitToUnitInterval`.
     * @param ctx the parse tree
     */
    exitUnitToUnitInterval?: (ctx: UnitToUnitIntervalContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.intervalValue`.
     * @param ctx the parse tree
     */
    enterIntervalValue?: (ctx: IntervalValueContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.intervalValue`.
     * @param ctx the parse tree
     */
    exitIntervalValue?: (ctx: IntervalValueContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.unitInMultiUnits`.
     * @param ctx the parse tree
     */
    enterUnitInMultiUnits?: (ctx: UnitInMultiUnitsContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.unitInMultiUnits`.
     * @param ctx the parse tree
     */
    exitUnitInMultiUnits?: (ctx: UnitInMultiUnitsContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.unitInUnitToUnit`.
     * @param ctx the parse tree
     */
    enterUnitInUnitToUnit?: (ctx: UnitInUnitToUnitContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.unitInUnitToUnit`.
     * @param ctx the parse tree
     */
    exitUnitInUnitToUnit?: (ctx: UnitInUnitToUnitContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.colPosition`.
     * @param ctx the parse tree
     */
    enterColPosition?: (ctx: ColPositionContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.colPosition`.
     * @param ctx the parse tree
     */
    exitColPosition?: (ctx: ColPositionContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.type`.
     * @param ctx the parse tree
     */
    enterType?: (ctx: TypeContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.type`.
     * @param ctx the parse tree
     */
    exitType?: (ctx: TypeContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.dataType`.
     * @param ctx the parse tree
     */
    enterDataType?: (ctx: DataTypeContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.dataType`.
     * @param ctx the parse tree
     */
    exitDataType?: (ctx: DataTypeContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.qualifiedColTypeWithPositionSeqForAdd`.
     * @param ctx the parse tree
     */
    enterQualifiedColTypeWithPositionSeqForAdd?: (ctx: QualifiedColTypeWithPositionSeqForAddContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.qualifiedColTypeWithPositionSeqForAdd`.
     * @param ctx the parse tree
     */
    exitQualifiedColTypeWithPositionSeqForAdd?: (ctx: QualifiedColTypeWithPositionSeqForAddContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.qualifiedColTypeWithPositionForAdd`.
     * @param ctx the parse tree
     */
    enterQualifiedColTypeWithPositionForAdd?: (ctx: QualifiedColTypeWithPositionForAddContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.qualifiedColTypeWithPositionForAdd`.
     * @param ctx the parse tree
     */
    exitQualifiedColTypeWithPositionForAdd?: (ctx: QualifiedColTypeWithPositionForAddContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.qualifiedColTypeWithPositionSeqForReplace`.
     * @param ctx the parse tree
     */
    enterQualifiedColTypeWithPositionSeqForReplace?: (ctx: QualifiedColTypeWithPositionSeqForReplaceContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.qualifiedColTypeWithPositionSeqForReplace`.
     * @param ctx the parse tree
     */
    exitQualifiedColTypeWithPositionSeqForReplace?: (ctx: QualifiedColTypeWithPositionSeqForReplaceContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.qualifiedColTypeWithPositionForReplace`.
     * @param ctx the parse tree
     */
    enterQualifiedColTypeWithPositionForReplace?: (ctx: QualifiedColTypeWithPositionForReplaceContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.qualifiedColTypeWithPositionForReplace`.
     * @param ctx the parse tree
     */
    exitQualifiedColTypeWithPositionForReplace?: (ctx: QualifiedColTypeWithPositionForReplaceContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.colDefinitionDescriptorWithPosition`.
     * @param ctx the parse tree
     */
    enterColDefinitionDescriptorWithPosition?: (ctx: ColDefinitionDescriptorWithPositionContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.colDefinitionDescriptorWithPosition`.
     * @param ctx the parse tree
     */
    exitColDefinitionDescriptorWithPosition?: (ctx: ColDefinitionDescriptorWithPositionContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.variableDefaultExpression`.
     * @param ctx the parse tree
     */
    enterVariableDefaultExpression?: (ctx: VariableDefaultExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.variableDefaultExpression`.
     * @param ctx the parse tree
     */
    exitVariableDefaultExpression?: (ctx: VariableDefaultExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.colTypeList`.
     * @param ctx the parse tree
     */
    enterColTypeList?: (ctx: ColTypeListContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.colTypeList`.
     * @param ctx the parse tree
     */
    exitColTypeList?: (ctx: ColTypeListContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.columnType`.
     * @param ctx the parse tree
     */
    enterColumnType?: (ctx: ColumnTypeContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.columnType`.
     * @param ctx the parse tree
     */
    exitColumnType?: (ctx: ColumnTypeContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.createOrReplaceTableColTypeList`.
     * @param ctx the parse tree
     */
    enterCreateOrReplaceTableColTypeList?: (ctx: CreateOrReplaceTableColTypeListContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.createOrReplaceTableColTypeList`.
     * @param ctx the parse tree
     */
    exitCreateOrReplaceTableColTypeList?: (ctx: CreateOrReplaceTableColTypeListContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.createOrReplaceTableColType`.
     * @param ctx the parse tree
     */
    enterCreateOrReplaceTableColType?: (ctx: CreateOrReplaceTableColTypeContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.createOrReplaceTableColType`.
     * @param ctx the parse tree
     */
    exitCreateOrReplaceTableColType?: (ctx: CreateOrReplaceTableColTypeContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.colDefinitionOption`.
     * @param ctx the parse tree
     */
    enterColDefinitionOption?: (ctx: ColDefinitionOptionContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.colDefinitionOption`.
     * @param ctx the parse tree
     */
    exitColDefinitionOption?: (ctx: ColDefinitionOptionContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.complexColType`.
     * @param ctx the parse tree
     */
    enterComplexColType?: (ctx: ComplexColTypeContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.complexColType`.
     * @param ctx the parse tree
     */
    exitComplexColType?: (ctx: ComplexColTypeContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.whenClause`.
     * @param ctx the parse tree
     */
    enterWhenClause?: (ctx: WhenClauseContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.whenClause`.
     * @param ctx the parse tree
     */
    exitWhenClause?: (ctx: WhenClauseContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.windowClause`.
     * @param ctx the parse tree
     */
    enterWindowClause?: (ctx: WindowClauseContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.windowClause`.
     * @param ctx the parse tree
     */
    exitWindowClause?: (ctx: WindowClauseContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.windowSpec`.
     * @param ctx the parse tree
     */
    enterWindowSpec?: (ctx: WindowSpecContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.windowSpec`.
     * @param ctx the parse tree
     */
    exitWindowSpec?: (ctx: WindowSpecContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.windowFrame`.
     * @param ctx the parse tree
     */
    enterWindowFrame?: (ctx: WindowFrameContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.windowFrame`.
     * @param ctx the parse tree
     */
    exitWindowFrame?: (ctx: WindowFrameContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.frameBound`.
     * @param ctx the parse tree
     */
    enterFrameBound?: (ctx: FrameBoundContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.frameBound`.
     * @param ctx the parse tree
     */
    exitFrameBound?: (ctx: FrameBoundContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.qualifiedNameList`.
     * @param ctx the parse tree
     */
    enterQualifiedNameList?: (ctx: QualifiedNameListContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.qualifiedNameList`.
     * @param ctx the parse tree
     */
    exitQualifiedNameList?: (ctx: QualifiedNameListContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.functionName`.
     * @param ctx the parse tree
     */
    enterFunctionName?: (ctx: FunctionNameContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.functionName`.
     * @param ctx the parse tree
     */
    exitFunctionName?: (ctx: FunctionNameContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.functionNameCreate`.
     * @param ctx the parse tree
     */
    enterFunctionNameCreate?: (ctx: FunctionNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.functionNameCreate`.
     * @param ctx the parse tree
     */
    exitFunctionNameCreate?: (ctx: FunctionNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.qualifiedName`.
     * @param ctx the parse tree
     */
    enterQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.qualifiedName`.
     * @param ctx the parse tree
     */
    exitQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.errorCapturingIdentifier`.
     * @param ctx the parse tree
     */
    enterErrorCapturingIdentifier?: (ctx: ErrorCapturingIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.errorCapturingIdentifier`.
     * @param ctx the parse tree
     */
    exitErrorCapturingIdentifier?: (ctx: ErrorCapturingIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.errorCapturingIdentifierExtra`.
     * @param ctx the parse tree
     */
    enterErrorCapturingIdentifierExtra?: (ctx: ErrorCapturingIdentifierExtraContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.errorCapturingIdentifierExtra`.
     * @param ctx the parse tree
     */
    exitErrorCapturingIdentifierExtra?: (ctx: ErrorCapturingIdentifierExtraContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.identifier`.
     * @param ctx the parse tree
     */
    enterIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.identifier`.
     * @param ctx the parse tree
     */
    exitIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.strictIdentifier`.
     * @param ctx the parse tree
     */
    enterStrictIdentifier?: (ctx: StrictIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.strictIdentifier`.
     * @param ctx the parse tree
     */
    exitStrictIdentifier?: (ctx: StrictIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.number`.
     * @param ctx the parse tree
     */
    enterNumber?: (ctx: NumberContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.number`.
     * @param ctx the parse tree
     */
    exitNumber?: (ctx: NumberContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.alterColumnAction`.
     * @param ctx the parse tree
     */
    enterAlterColumnAction?: (ctx: AlterColumnActionContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.alterColumnAction`.
     * @param ctx the parse tree
     */
    exitAlterColumnAction?: (ctx: AlterColumnActionContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.stringLit`.
     * @param ctx the parse tree
     */
    enterStringLit?: (ctx: StringLitContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.stringLit`.
     * @param ctx the parse tree
     */
    exitStringLit?: (ctx: StringLitContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.ansiNonReserved`.
     * @param ctx the parse tree
     */
    enterAnsiNonReserved?: (ctx: AnsiNonReservedContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.ansiNonReserved`.
     * @param ctx the parse tree
     */
    exitAnsiNonReserved?: (ctx: AnsiNonReservedContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.strictNonReserved`.
     * @param ctx the parse tree
     */
    enterStrictNonReserved?: (ctx: StrictNonReservedContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.strictNonReserved`.
     * @param ctx the parse tree
     */
    exitStrictNonReserved?: (ctx: StrictNonReservedContext) => void;
    /**
     * Enter a parse tree produced by `SqlParser.nonReserved`.
     * @param ctx the parse tree
     */
    enterNonReserved?: (ctx: NonReservedContext) => void;
    /**
     * Exit a parse tree produced by `SqlParser.nonReserved`.
     * @param ctx the parse tree
     */
    exitNonReserved?: (ctx: NonReservedContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

