// Generated from dt-sql-parser/src/grammar/spark/SparkSqlParser.g4 by ANTLR 4.13.1

// @ts-nocheck

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


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
import { CommentNamespaceContext } from "./SparkSqlParser.js";
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
import { TimezoneContext } from "./SparkSqlParser.js";
import { ConfigKeyContext } from "./SparkSqlParser.js";
import { ConfigValueContext } from "./SparkSqlParser.js";
import { UnsupportedHiveNativeCommandsContext } from "./SparkSqlParser.js";
import { CreateTableHeaderContext } from "./SparkSqlParser.js";
import { ReplaceTableHeaderContext } from "./SparkSqlParser.js";
import { BucketSpecContext } from "./SparkSqlParser.js";
import { SkewSpecContext } from "./SparkSqlParser.js";
import { LocationSpecContext } from "./SparkSqlParser.js";
import { CommentSpecContext } from "./SparkSqlParser.js";
import { QueryStatementContext } from "./SparkSqlParser.js";
import { InsertIntoContext } from "./SparkSqlParser.js";
import { PartitionSpecLocationContext } from "./SparkSqlParser.js";
import { PartitionSpecContext } from "./SparkSqlParser.js";
import { PartitionValContext } from "./SparkSqlParser.js";
import { NamespaceContext } from "./SparkSqlParser.js";
import { NamespacesContext } from "./SparkSqlParser.js";
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
import { ResourceContext } from "./SparkSqlParser.js";
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
import { ColumnNameSeqContext } from "./SparkSqlParser.js";
import { ColumnNameCreateContext } from "./SparkSqlParser.js";
import { IdentifierReferenceContext } from "./SparkSqlParser.js";
import { QueryOrganizationContext } from "./SparkSqlParser.js";
import { MultiInsertQueryBodyContext } from "./SparkSqlParser.js";
import { QueryTermContext } from "./SparkSqlParser.js";
import { QueryPrimaryContext } from "./SparkSqlParser.js";
import { SortItemContext } from "./SparkSqlParser.js";
import { FromStatementContext } from "./SparkSqlParser.js";
import { FromStatementBodyContext } from "./SparkSqlParser.js";
import { QuerySpecificationContext } from "./SparkSqlParser.js";
import { TransformClauseContext } from "./SparkSqlParser.js";
import { SelectClauseContext } from "./SparkSqlParser.js";
import { SetClauseContext } from "./SparkSqlParser.js";
import { MatchedClauseContext } from "./SparkSqlParser.js";
import { NotMatchedClauseContext } from "./SparkSqlParser.js";
import { NotMatchedBySourceClauseContext } from "./SparkSqlParser.js";
import { MatchedActionContext } from "./SparkSqlParser.js";
import { NotMatchedActionContext } from "./SparkSqlParser.js";
import { NotMatchedBySourceActionContext } from "./SparkSqlParser.js";
import { AssignmentListContext } from "./SparkSqlParser.js";
import { AssignmentContext } from "./SparkSqlParser.js";
import { WhereClauseContext } from "./SparkSqlParser.js";
import { HavingClauseContext } from "./SparkSqlParser.js";
import { HintContext } from "./SparkSqlParser.js";
import { HintStatementContext } from "./SparkSqlParser.js";
import { FromClauseContext } from "./SparkSqlParser.js";
import { FunctionKindContext } from "./SparkSqlParser.js";
import { TemporalClauseContext } from "./SparkSqlParser.js";
import { AggregationClauseContext } from "./SparkSqlParser.js";
import { GroupByClauseContext } from "./SparkSqlParser.js";
import { GroupingAnalyticsContext } from "./SparkSqlParser.js";
import { GroupingElementContext } from "./SparkSqlParser.js";
import { GroupingSetContext } from "./SparkSqlParser.js";
import { PivotClauseContext } from "./SparkSqlParser.js";
import { PivotColumnContext } from "./SparkSqlParser.js";
import { PivotValueContext } from "./SparkSqlParser.js";
import { UnpivotClauseContext } from "./SparkSqlParser.js";
import { UnpivotNullClauseContext } from "./SparkSqlParser.js";
import { UnpivotOperatorContext } from "./SparkSqlParser.js";
import { UnpivotSingleValueColumnClauseContext } from "./SparkSqlParser.js";
import { UnpivotMultiValueColumnClauseContext } from "./SparkSqlParser.js";
import { UnpivotColumnSetContext } from "./SparkSqlParser.js";
import { UnpivotValueColumnContext } from "./SparkSqlParser.js";
import { UnpivotNameColumnContext } from "./SparkSqlParser.js";
import { UnpivotColumnAndAliasContext } from "./SparkSqlParser.js";
import { UnpivotColumnContext } from "./SparkSqlParser.js";
import { UnpivotAliasContext } from "./SparkSqlParser.js";
import { IfNotExistsContext } from "./SparkSqlParser.js";
import { IfExistsContext } from "./SparkSqlParser.js";
import { LateralViewContext } from "./SparkSqlParser.js";
import { SetQuantifierContext } from "./SparkSqlParser.js";
import { RelationContext } from "./SparkSqlParser.js";
import { RelationExtensionContext } from "./SparkSqlParser.js";
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
import { InlineTableContext } from "./SparkSqlParser.js";
import { FunctionTableSubqueryArgumentContext } from "./SparkSqlParser.js";
import { TableArgumentPartitioningContext } from "./SparkSqlParser.js";
import { FunctionTableNamedArgumentExpressionContext } from "./SparkSqlParser.js";
import { FunctionTableReferenceArgumentContext } from "./SparkSqlParser.js";
import { FunctionTableArgumentContext } from "./SparkSqlParser.js";
import { FunctionTableContext } from "./SparkSqlParser.js";
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
import { DefaultExpressionContext } from "./SparkSqlParser.js";
import { VariableDefaultExpressionContext } from "./SparkSqlParser.js";
import { ColTypeListContext } from "./SparkSqlParser.js";
import { ColTypeContext } from "./SparkSqlParser.js";
import { CreateOrReplaceTableColTypeListContext } from "./SparkSqlParser.js";
import { CreateOrReplaceTableColTypeContext } from "./SparkSqlParser.js";
import { ColDefinitionOptionContext } from "./SparkSqlParser.js";
import { GenerationExpressionContext } from "./SparkSqlParser.js";
import { ComplexColTypeListContext } from "./SparkSqlParser.js";
import { ComplexColTypeContext } from "./SparkSqlParser.js";
import { WhenClauseContext } from "./SparkSqlParser.js";
import { WindowClauseContext } from "./SparkSqlParser.js";
import { ZorderClauseContext } from "./SparkSqlParser.js";
import { NamedWindowContext } from "./SparkSqlParser.js";
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
import { BackQuotedIdentifierContext } from "./SparkSqlParser.js";
import { NumberContext } from "./SparkSqlParser.js";
import { AlterColumnActionContext } from "./SparkSqlParser.js";
import { StringLitContext } from "./SparkSqlParser.js";
import { CommentContext } from "./SparkSqlParser.js";
import { VersionContext } from "./SparkSqlParser.js";
import { AnsiNonReservedContext } from "./SparkSqlParser.js";
import { StrictNonReservedContext } from "./SparkSqlParser.js";
import { NonReservedContext } from "./SparkSqlParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SparkSqlParser`.
 */
export class SparkSqlParserListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `SparkSqlParser.program`.
     * @param ctx the parse tree
     */
    enterProgram?: (ctx: ProgramContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.program`.
     * @param ctx the parse tree
     */
    exitProgram?: (ctx: ProgramContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.singleStatement`.
     * @param ctx the parse tree
     */
    enterSingleStatement?: (ctx: SingleStatementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.singleStatement`.
     * @param ctx the parse tree
     */
    exitSingleStatement?: (ctx: SingleStatementContext) => void;
    /**
     * Enter a parse tree produced by the `statementDefault`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterStatementDefault?: (ctx: StatementDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `statementDefault`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitStatementDefault?: (ctx: StatementDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `dmlStatement`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDmlStatement?: (ctx: DmlStatementContext) => void;
    /**
     * Exit a parse tree produced by the `dmlStatement`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDmlStatement?: (ctx: DmlStatementContext) => void;
    /**
     * Enter a parse tree produced by the `useNamespace`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterUseNamespace?: (ctx: UseNamespaceContext) => void;
    /**
     * Exit a parse tree produced by the `useNamespace`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitUseNamespace?: (ctx: UseNamespaceContext) => void;
    /**
     * Enter a parse tree produced by the `setCatalog`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterSetCatalog?: (ctx: SetCatalogContext) => void;
    /**
     * Exit a parse tree produced by the `setCatalog`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitSetCatalog?: (ctx: SetCatalogContext) => void;
    /**
     * Enter a parse tree produced by the `createNamespace`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateNamespace?: (ctx: CreateNamespaceContext) => void;
    /**
     * Exit a parse tree produced by the `createNamespace`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateNamespace?: (ctx: CreateNamespaceContext) => void;
    /**
     * Enter a parse tree produced by the `setNamespaceProperties`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterSetNamespaceProperties?: (ctx: SetNamespacePropertiesContext) => void;
    /**
     * Exit a parse tree produced by the `setNamespaceProperties`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitSetNamespaceProperties?: (ctx: SetNamespacePropertiesContext) => void;
    /**
     * Enter a parse tree produced by the `setNamespaceLocation`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterSetNamespaceLocation?: (ctx: SetNamespaceLocationContext) => void;
    /**
     * Exit a parse tree produced by the `setNamespaceLocation`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitSetNamespaceLocation?: (ctx: SetNamespaceLocationContext) => void;
    /**
     * Enter a parse tree produced by the `dropNamespace`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDropNamespace?: (ctx: DropNamespaceContext) => void;
    /**
     * Exit a parse tree produced by the `dropNamespace`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDropNamespace?: (ctx: DropNamespaceContext) => void;
    /**
     * Enter a parse tree produced by the `showNamespaces`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterShowNamespaces?: (ctx: ShowNamespacesContext) => void;
    /**
     * Exit a parse tree produced by the `showNamespaces`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitShowNamespaces?: (ctx: ShowNamespacesContext) => void;
    /**
     * Enter a parse tree produced by the `createTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateTable?: (ctx: CreateTableContext) => void;
    /**
     * Exit a parse tree produced by the `createTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateTable?: (ctx: CreateTableContext) => void;
    /**
     * Enter a parse tree produced by the `createTableLike`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateTableLike?: (ctx: CreateTableLikeContext) => void;
    /**
     * Exit a parse tree produced by the `createTableLike`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateTableLike?: (ctx: CreateTableLikeContext) => void;
    /**
     * Enter a parse tree produced by the `replaceTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterReplaceTable?: (ctx: ReplaceTableContext) => void;
    /**
     * Exit a parse tree produced by the `replaceTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitReplaceTable?: (ctx: ReplaceTableContext) => void;
    /**
     * Enter a parse tree produced by the `analyze`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterAnalyze?: (ctx: AnalyzeContext) => void;
    /**
     * Exit a parse tree produced by the `analyze`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitAnalyze?: (ctx: AnalyzeContext) => void;
    /**
     * Enter a parse tree produced by the `analyzeTables`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterAnalyzeTables?: (ctx: AnalyzeTablesContext) => void;
    /**
     * Exit a parse tree produced by the `analyzeTables`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitAnalyzeTables?: (ctx: AnalyzeTablesContext) => void;
    /**
     * Enter a parse tree produced by the `alterTableAddColumn`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterAlterTableAddColumn?: (ctx: AlterTableAddColumnContext) => void;
    /**
     * Exit a parse tree produced by the `alterTableAddColumn`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitAlterTableAddColumn?: (ctx: AlterTableAddColumnContext) => void;
    /**
     * Enter a parse tree produced by the `alterTableAddColumns`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterAlterTableAddColumns?: (ctx: AlterTableAddColumnsContext) => void;
    /**
     * Exit a parse tree produced by the `alterTableAddColumns`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitAlterTableAddColumns?: (ctx: AlterTableAddColumnsContext) => void;
    /**
     * Enter a parse tree produced by the `renameTableColumn`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterRenameTableColumn?: (ctx: RenameTableColumnContext) => void;
    /**
     * Exit a parse tree produced by the `renameTableColumn`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitRenameTableColumn?: (ctx: RenameTableColumnContext) => void;
    /**
     * Enter a parse tree produced by the `alterTableDropColumn`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterAlterTableDropColumn?: (ctx: AlterTableDropColumnContext) => void;
    /**
     * Exit a parse tree produced by the `alterTableDropColumn`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitAlterTableDropColumn?: (ctx: AlterTableDropColumnContext) => void;
    /**
     * Enter a parse tree produced by the `dropTableColumns`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDropTableColumns?: (ctx: DropTableColumnsContext) => void;
    /**
     * Exit a parse tree produced by the `dropTableColumns`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDropTableColumns?: (ctx: DropTableColumnsContext) => void;
    /**
     * Enter a parse tree produced by the `renameTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterRenameTable?: (ctx: RenameTableContext) => void;
    /**
     * Exit a parse tree produced by the `renameTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitRenameTable?: (ctx: RenameTableContext) => void;
    /**
     * Enter a parse tree produced by the `setTableProperties`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterSetTableProperties?: (ctx: SetTablePropertiesContext) => void;
    /**
     * Exit a parse tree produced by the `setTableProperties`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitSetTableProperties?: (ctx: SetTablePropertiesContext) => void;
    /**
     * Enter a parse tree produced by the `unsetTableProperties`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterUnsetTableProperties?: (ctx: UnsetTablePropertiesContext) => void;
    /**
     * Exit a parse tree produced by the `unsetTableProperties`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitUnsetTableProperties?: (ctx: UnsetTablePropertiesContext) => void;
    /**
     * Enter a parse tree produced by the `alterTableAlterColumn`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterAlterTableAlterColumn?: (ctx: AlterTableAlterColumnContext) => void;
    /**
     * Exit a parse tree produced by the `alterTableAlterColumn`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitAlterTableAlterColumn?: (ctx: AlterTableAlterColumnContext) => void;
    /**
     * Enter a parse tree produced by the `hiveChangeColumn`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterHiveChangeColumn?: (ctx: HiveChangeColumnContext) => void;
    /**
     * Exit a parse tree produced by the `hiveChangeColumn`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitHiveChangeColumn?: (ctx: HiveChangeColumnContext) => void;
    /**
     * Enter a parse tree produced by the `hiveReplaceColumns`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterHiveReplaceColumns?: (ctx: HiveReplaceColumnsContext) => void;
    /**
     * Exit a parse tree produced by the `hiveReplaceColumns`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitHiveReplaceColumns?: (ctx: HiveReplaceColumnsContext) => void;
    /**
     * Enter a parse tree produced by the `setTableSerDe`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterSetTableSerDe?: (ctx: SetTableSerDeContext) => void;
    /**
     * Exit a parse tree produced by the `setTableSerDe`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitSetTableSerDe?: (ctx: SetTableSerDeContext) => void;
    /**
     * Enter a parse tree produced by the `setTableSerDeProperties`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterSetTableSerDeProperties?: (ctx: SetTableSerDePropertiesContext) => void;
    /**
     * Exit a parse tree produced by the `setTableSerDeProperties`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitSetTableSerDeProperties?: (ctx: SetTableSerDePropertiesContext) => void;
    /**
     * Enter a parse tree produced by the `addTablePartition`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterAddTablePartition?: (ctx: AddTablePartitionContext) => void;
    /**
     * Exit a parse tree produced by the `addTablePartition`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitAddTablePartition?: (ctx: AddTablePartitionContext) => void;
    /**
     * Enter a parse tree produced by the `renameTablePartition`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterRenameTablePartition?: (ctx: RenameTablePartitionContext) => void;
    /**
     * Exit a parse tree produced by the `renameTablePartition`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitRenameTablePartition?: (ctx: RenameTablePartitionContext) => void;
    /**
     * Enter a parse tree produced by the `dropTablePartitions`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDropTablePartitions?: (ctx: DropTablePartitionsContext) => void;
    /**
     * Exit a parse tree produced by the `dropTablePartitions`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDropTablePartitions?: (ctx: DropTablePartitionsContext) => void;
    /**
     * Enter a parse tree produced by the `setTableLocation`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterSetTableLocation?: (ctx: SetTableLocationContext) => void;
    /**
     * Exit a parse tree produced by the `setTableLocation`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitSetTableLocation?: (ctx: SetTableLocationContext) => void;
    /**
     * Enter a parse tree produced by the `recoverPartitions`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterRecoverPartitions?: (ctx: RecoverPartitionsContext) => void;
    /**
     * Exit a parse tree produced by the `recoverPartitions`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitRecoverPartitions?: (ctx: RecoverPartitionsContext) => void;
    /**
     * Enter a parse tree produced by the `alterMaterializedViewRewrite`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterAlterMaterializedViewRewrite?: (ctx: AlterMaterializedViewRewriteContext) => void;
    /**
     * Exit a parse tree produced by the `alterMaterializedViewRewrite`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitAlterMaterializedViewRewrite?: (ctx: AlterMaterializedViewRewriteContext) => void;
    /**
     * Enter a parse tree produced by the `alterMaterializedViewProperties`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterAlterMaterializedViewProperties?: (ctx: AlterMaterializedViewPropertiesContext) => void;
    /**
     * Exit a parse tree produced by the `alterMaterializedViewProperties`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitAlterMaterializedViewProperties?: (ctx: AlterMaterializedViewPropertiesContext) => void;
    /**
     * Enter a parse tree produced by the `dropTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDropTable?: (ctx: DropTableContext) => void;
    /**
     * Exit a parse tree produced by the `dropTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDropTable?: (ctx: DropTableContext) => void;
    /**
     * Enter a parse tree produced by the `dropView`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDropView?: (ctx: DropViewContext) => void;
    /**
     * Exit a parse tree produced by the `dropView`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDropView?: (ctx: DropViewContext) => void;
    /**
     * Enter a parse tree produced by the `dropMaterializedView`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDropMaterializedView?: (ctx: DropMaterializedViewContext) => void;
    /**
     * Exit a parse tree produced by the `dropMaterializedView`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDropMaterializedView?: (ctx: DropMaterializedViewContext) => void;
    /**
     * Enter a parse tree produced by the `createView`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateView?: (ctx: CreateViewContext) => void;
    /**
     * Exit a parse tree produced by the `createView`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateView?: (ctx: CreateViewContext) => void;
    /**
     * Enter a parse tree produced by the `createTempViewUsing`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateTempViewUsing?: (ctx: CreateTempViewUsingContext) => void;
    /**
     * Exit a parse tree produced by the `createTempViewUsing`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateTempViewUsing?: (ctx: CreateTempViewUsingContext) => void;
    /**
     * Enter a parse tree produced by the `alterViewQuery`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterAlterViewQuery?: (ctx: AlterViewQueryContext) => void;
    /**
     * Exit a parse tree produced by the `alterViewQuery`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitAlterViewQuery?: (ctx: AlterViewQueryContext) => void;
    /**
     * Enter a parse tree produced by the `createFunction`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateFunction?: (ctx: CreateFunctionContext) => void;
    /**
     * Exit a parse tree produced by the `createFunction`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateFunction?: (ctx: CreateFunctionContext) => void;
    /**
     * Enter a parse tree produced by the `createMaterializedView`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => void;
    /**
     * Exit a parse tree produced by the `createMaterializedView`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => void;
    /**
     * Enter a parse tree produced by the `dropFunction`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDropFunction?: (ctx: DropFunctionContext) => void;
    /**
     * Exit a parse tree produced by the `dropFunction`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDropFunction?: (ctx: DropFunctionContext) => void;
    /**
     * Enter a parse tree produced by the `declareVariable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDeclareVariable?: (ctx: DeclareVariableContext) => void;
    /**
     * Exit a parse tree produced by the `declareVariable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDeclareVariable?: (ctx: DeclareVariableContext) => void;
    /**
     * Enter a parse tree produced by the `dropVariable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDropVariable?: (ctx: DropVariableContext) => void;
    /**
     * Exit a parse tree produced by the `dropVariable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDropVariable?: (ctx: DropVariableContext) => void;
    /**
     * Enter a parse tree produced by the `explainStatement`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterExplainStatement?: (ctx: ExplainStatementContext) => void;
    /**
     * Exit a parse tree produced by the `explainStatement`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitExplainStatement?: (ctx: ExplainStatementContext) => void;
    /**
     * Enter a parse tree produced by the `showTables`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterShowTables?: (ctx: ShowTablesContext) => void;
    /**
     * Exit a parse tree produced by the `showTables`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitShowTables?: (ctx: ShowTablesContext) => void;
    /**
     * Enter a parse tree produced by the `showTableExtended`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterShowTableExtended?: (ctx: ShowTableExtendedContext) => void;
    /**
     * Exit a parse tree produced by the `showTableExtended`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitShowTableExtended?: (ctx: ShowTableExtendedContext) => void;
    /**
     * Enter a parse tree produced by the `showTblProperties`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterShowTblProperties?: (ctx: ShowTblPropertiesContext) => void;
    /**
     * Exit a parse tree produced by the `showTblProperties`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitShowTblProperties?: (ctx: ShowTblPropertiesContext) => void;
    /**
     * Enter a parse tree produced by the `showColumns`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterShowColumns?: (ctx: ShowColumnsContext) => void;
    /**
     * Exit a parse tree produced by the `showColumns`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitShowColumns?: (ctx: ShowColumnsContext) => void;
    /**
     * Enter a parse tree produced by the `showViews`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterShowViews?: (ctx: ShowViewsContext) => void;
    /**
     * Exit a parse tree produced by the `showViews`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitShowViews?: (ctx: ShowViewsContext) => void;
    /**
     * Enter a parse tree produced by the `showPartitions`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterShowPartitions?: (ctx: ShowPartitionsContext) => void;
    /**
     * Exit a parse tree produced by the `showPartitions`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitShowPartitions?: (ctx: ShowPartitionsContext) => void;
    /**
     * Enter a parse tree produced by the `showFunctions`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterShowFunctions?: (ctx: ShowFunctionsContext) => void;
    /**
     * Exit a parse tree produced by the `showFunctions`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitShowFunctions?: (ctx: ShowFunctionsContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterShowCreateTable?: (ctx: ShowCreateTableContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitShowCreateTable?: (ctx: ShowCreateTableContext) => void;
    /**
     * Enter a parse tree produced by the `showCurrentNamespace`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterShowCurrentNamespace?: (ctx: ShowCurrentNamespaceContext) => void;
    /**
     * Exit a parse tree produced by the `showCurrentNamespace`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitShowCurrentNamespace?: (ctx: ShowCurrentNamespaceContext) => void;
    /**
     * Enter a parse tree produced by the `showCatalogs`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterShowCatalogs?: (ctx: ShowCatalogsContext) => void;
    /**
     * Exit a parse tree produced by the `showCatalogs`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitShowCatalogs?: (ctx: ShowCatalogsContext) => void;
    /**
     * Enter a parse tree produced by the `showMaterializedViews`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterShowMaterializedViews?: (ctx: ShowMaterializedViewsContext) => void;
    /**
     * Exit a parse tree produced by the `showMaterializedViews`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitShowMaterializedViews?: (ctx: ShowMaterializedViewsContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateMaterializedView`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterShowCreateMaterializedView?: (ctx: ShowCreateMaterializedViewContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateMaterializedView`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitShowCreateMaterializedView?: (ctx: ShowCreateMaterializedViewContext) => void;
    /**
     * Enter a parse tree produced by the `describeFunction`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDescribeFunction?: (ctx: DescribeFunctionContext) => void;
    /**
     * Exit a parse tree produced by the `describeFunction`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDescribeFunction?: (ctx: DescribeFunctionContext) => void;
    /**
     * Enter a parse tree produced by the `describeNamespace`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDescribeNamespace?: (ctx: DescribeNamespaceContext) => void;
    /**
     * Exit a parse tree produced by the `describeNamespace`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDescribeNamespace?: (ctx: DescribeNamespaceContext) => void;
    /**
     * Enter a parse tree produced by the `describeRelation`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDescribeRelation?: (ctx: DescribeRelationContext) => void;
    /**
     * Exit a parse tree produced by the `describeRelation`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDescribeRelation?: (ctx: DescribeRelationContext) => void;
    /**
     * Enter a parse tree produced by the `describeQuery`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDescribeQuery?: (ctx: DescribeQueryContext) => void;
    /**
     * Exit a parse tree produced by the `describeQuery`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDescribeQuery?: (ctx: DescribeQueryContext) => void;
    /**
     * Enter a parse tree produced by the `commentNamespace`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterCommentNamespace?: (ctx: CommentNamespaceContext) => void;
    /**
     * Exit a parse tree produced by the `commentNamespace`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitCommentNamespace?: (ctx: CommentNamespaceContext) => void;
    /**
     * Enter a parse tree produced by the `commentTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterCommentTable?: (ctx: CommentTableContext) => void;
    /**
     * Exit a parse tree produced by the `commentTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitCommentTable?: (ctx: CommentTableContext) => void;
    /**
     * Enter a parse tree produced by the `refreshTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterRefreshTable?: (ctx: RefreshTableContext) => void;
    /**
     * Exit a parse tree produced by the `refreshTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitRefreshTable?: (ctx: RefreshTableContext) => void;
    /**
     * Enter a parse tree produced by the `refreshFunction`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterRefreshFunction?: (ctx: RefreshFunctionContext) => void;
    /**
     * Exit a parse tree produced by the `refreshFunction`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitRefreshFunction?: (ctx: RefreshFunctionContext) => void;
    /**
     * Enter a parse tree produced by the `refreshResource`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterRefreshResource?: (ctx: RefreshResourceContext) => void;
    /**
     * Exit a parse tree produced by the `refreshResource`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitRefreshResource?: (ctx: RefreshResourceContext) => void;
    /**
     * Enter a parse tree produced by the `refreshMaterializedView`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterRefreshMaterializedView?: (ctx: RefreshMaterializedViewContext) => void;
    /**
     * Exit a parse tree produced by the `refreshMaterializedView`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitRefreshMaterializedView?: (ctx: RefreshMaterializedViewContext) => void;
    /**
     * Enter a parse tree produced by the `cacheTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterCacheTable?: (ctx: CacheTableContext) => void;
    /**
     * Exit a parse tree produced by the `cacheTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitCacheTable?: (ctx: CacheTableContext) => void;
    /**
     * Enter a parse tree produced by the `unCacheTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterUnCacheTable?: (ctx: UnCacheTableContext) => void;
    /**
     * Exit a parse tree produced by the `unCacheTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitUnCacheTable?: (ctx: UnCacheTableContext) => void;
    /**
     * Enter a parse tree produced by the `clearCache`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterClearCache?: (ctx: ClearCacheContext) => void;
    /**
     * Exit a parse tree produced by the `clearCache`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitClearCache?: (ctx: ClearCacheContext) => void;
    /**
     * Enter a parse tree produced by the `loadData`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterLoadData?: (ctx: LoadDataContext) => void;
    /**
     * Exit a parse tree produced by the `loadData`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitLoadData?: (ctx: LoadDataContext) => void;
    /**
     * Enter a parse tree produced by the `truncateTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterTruncateTable?: (ctx: TruncateTableContext) => void;
    /**
     * Exit a parse tree produced by the `truncateTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitTruncateTable?: (ctx: TruncateTableContext) => void;
    /**
     * Enter a parse tree produced by the `repairTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterRepairTable?: (ctx: RepairTableContext) => void;
    /**
     * Exit a parse tree produced by the `repairTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitRepairTable?: (ctx: RepairTableContext) => void;
    /**
     * Enter a parse tree produced by the `manageResource`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterManageResource?: (ctx: ManageResourceContext) => void;
    /**
     * Exit a parse tree produced by the `manageResource`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitManageResource?: (ctx: ManageResourceContext) => void;
    /**
     * Enter a parse tree produced by the `failNativeCommand`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterFailNativeCommand?: (ctx: FailNativeCommandContext) => void;
    /**
     * Exit a parse tree produced by the `failNativeCommand`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitFailNativeCommand?: (ctx: FailNativeCommandContext) => void;
    /**
     * Enter a parse tree produced by the `setTimeZoneInterval`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterSetTimeZoneInterval?: (ctx: SetTimeZoneIntervalContext) => void;
    /**
     * Exit a parse tree produced by the `setTimeZoneInterval`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitSetTimeZoneInterval?: (ctx: SetTimeZoneIntervalContext) => void;
    /**
     * Enter a parse tree produced by the `setTimeZone`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterSetTimeZone?: (ctx: SetTimeZoneContext) => void;
    /**
     * Exit a parse tree produced by the `setTimeZone`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitSetTimeZone?: (ctx: SetTimeZoneContext) => void;
    /**
     * Enter a parse tree produced by the `setTimeZoneAny`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterSetTimeZoneAny?: (ctx: SetTimeZoneAnyContext) => void;
    /**
     * Exit a parse tree produced by the `setTimeZoneAny`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitSetTimeZoneAny?: (ctx: SetTimeZoneAnyContext) => void;
    /**
     * Enter a parse tree produced by the `setVariableAssignment`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterSetVariableAssignment?: (ctx: SetVariableAssignmentContext) => void;
    /**
     * Exit a parse tree produced by the `setVariableAssignment`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitSetVariableAssignment?: (ctx: SetVariableAssignmentContext) => void;
    /**
     * Enter a parse tree produced by the `setVariableMultiAssignment`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterSetVariableMultiAssignment?: (ctx: SetVariableMultiAssignmentContext) => void;
    /**
     * Exit a parse tree produced by the `setVariableMultiAssignment`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitSetVariableMultiAssignment?: (ctx: SetVariableMultiAssignmentContext) => void;
    /**
     * Enter a parse tree produced by the `setConfig`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterSetConfig?: (ctx: SetConfigContext) => void;
    /**
     * Exit a parse tree produced by the `setConfig`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitSetConfig?: (ctx: SetConfigContext) => void;
    /**
     * Enter a parse tree produced by the `setConfigAndValue`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterSetConfigAndValue?: (ctx: SetConfigAndValueContext) => void;
    /**
     * Exit a parse tree produced by the `setConfigAndValue`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitSetConfigAndValue?: (ctx: SetConfigAndValueContext) => void;
    /**
     * Enter a parse tree produced by the `setConfigAnyKey`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterSetConfigAnyKey?: (ctx: SetConfigAnyKeyContext) => void;
    /**
     * Exit a parse tree produced by the `setConfigAnyKey`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitSetConfigAnyKey?: (ctx: SetConfigAnyKeyContext) => void;
    /**
     * Enter a parse tree produced by the `setAny`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterSetAny?: (ctx: SetAnyContext) => void;
    /**
     * Exit a parse tree produced by the `setAny`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitSetAny?: (ctx: SetAnyContext) => void;
    /**
     * Enter a parse tree produced by the `resetConfig`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterResetConfig?: (ctx: ResetConfigContext) => void;
    /**
     * Exit a parse tree produced by the `resetConfig`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitResetConfig?: (ctx: ResetConfigContext) => void;
    /**
     * Enter a parse tree produced by the `resetAny`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterResetAny?: (ctx: ResetAnyContext) => void;
    /**
     * Exit a parse tree produced by the `resetAny`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitResetAny?: (ctx: ResetAnyContext) => void;
    /**
     * Enter a parse tree produced by the `createIndex`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateIndex?: (ctx: CreateIndexContext) => void;
    /**
     * Exit a parse tree produced by the `createIndex`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateIndex?: (ctx: CreateIndexContext) => void;
    /**
     * Enter a parse tree produced by the `dropIndex`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDropIndex?: (ctx: DropIndexContext) => void;
    /**
     * Exit a parse tree produced by the `dropIndex`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDropIndex?: (ctx: DropIndexContext) => void;
    /**
     * Enter a parse tree produced by the `optimizeTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterOptimizeTable?: (ctx: OptimizeTableContext) => void;
    /**
     * Exit a parse tree produced by the `optimizeTable`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitOptimizeTable?: (ctx: OptimizeTableContext) => void;
    /**
     * Enter a parse tree produced by the `unsupportHiveCommands`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterUnsupportHiveCommands?: (ctx: UnsupportHiveCommandsContext) => void;
    /**
     * Exit a parse tree produced by the `unsupportHiveCommands`
     * labeled alternative in `SparkSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitUnsupportHiveCommands?: (ctx: UnsupportHiveCommandsContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.timezone`.
     * @param ctx the parse tree
     */
    enterTimezone?: (ctx: TimezoneContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.timezone`.
     * @param ctx the parse tree
     */
    exitTimezone?: (ctx: TimezoneContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.configKey`.
     * @param ctx the parse tree
     */
    enterConfigKey?: (ctx: ConfigKeyContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.configKey`.
     * @param ctx the parse tree
     */
    exitConfigKey?: (ctx: ConfigKeyContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.configValue`.
     * @param ctx the parse tree
     */
    enterConfigValue?: (ctx: ConfigValueContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.configValue`.
     * @param ctx the parse tree
     */
    exitConfigValue?: (ctx: ConfigValueContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.unsupportedHiveNativeCommands`.
     * @param ctx the parse tree
     */
    enterUnsupportedHiveNativeCommands?: (ctx: UnsupportedHiveNativeCommandsContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.unsupportedHiveNativeCommands`.
     * @param ctx the parse tree
     */
    exitUnsupportedHiveNativeCommands?: (ctx: UnsupportedHiveNativeCommandsContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.createTableHeader`.
     * @param ctx the parse tree
     */
    enterCreateTableHeader?: (ctx: CreateTableHeaderContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.createTableHeader`.
     * @param ctx the parse tree
     */
    exitCreateTableHeader?: (ctx: CreateTableHeaderContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.replaceTableHeader`.
     * @param ctx the parse tree
     */
    enterReplaceTableHeader?: (ctx: ReplaceTableHeaderContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.replaceTableHeader`.
     * @param ctx the parse tree
     */
    exitReplaceTableHeader?: (ctx: ReplaceTableHeaderContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.bucketSpec`.
     * @param ctx the parse tree
     */
    enterBucketSpec?: (ctx: BucketSpecContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.bucketSpec`.
     * @param ctx the parse tree
     */
    exitBucketSpec?: (ctx: BucketSpecContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.skewSpec`.
     * @param ctx the parse tree
     */
    enterSkewSpec?: (ctx: SkewSpecContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.skewSpec`.
     * @param ctx the parse tree
     */
    exitSkewSpec?: (ctx: SkewSpecContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.locationSpec`.
     * @param ctx the parse tree
     */
    enterLocationSpec?: (ctx: LocationSpecContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.locationSpec`.
     * @param ctx the parse tree
     */
    exitLocationSpec?: (ctx: LocationSpecContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.commentSpec`.
     * @param ctx the parse tree
     */
    enterCommentSpec?: (ctx: CommentSpecContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.commentSpec`.
     * @param ctx the parse tree
     */
    exitCommentSpec?: (ctx: CommentSpecContext) => void;
    /**
     * Enter a parse tree produced by the `queryStatement`
     * labeled alternative in `SparkSqlParser.query`.
     * @param ctx the parse tree
     */
    enterQueryStatement?: (ctx: QueryStatementContext) => void;
    /**
     * Exit a parse tree produced by the `queryStatement`
     * labeled alternative in `SparkSqlParser.query`.
     * @param ctx the parse tree
     */
    exitQueryStatement?: (ctx: QueryStatementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.insertInto`.
     * @param ctx the parse tree
     */
    enterInsertInto?: (ctx: InsertIntoContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.insertInto`.
     * @param ctx the parse tree
     */
    exitInsertInto?: (ctx: InsertIntoContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.partitionSpecLocation`.
     * @param ctx the parse tree
     */
    enterPartitionSpecLocation?: (ctx: PartitionSpecLocationContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.partitionSpecLocation`.
     * @param ctx the parse tree
     */
    exitPartitionSpecLocation?: (ctx: PartitionSpecLocationContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.partitionSpec`.
     * @param ctx the parse tree
     */
    enterPartitionSpec?: (ctx: PartitionSpecContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.partitionSpec`.
     * @param ctx the parse tree
     */
    exitPartitionSpec?: (ctx: PartitionSpecContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.partitionVal`.
     * @param ctx the parse tree
     */
    enterPartitionVal?: (ctx: PartitionValContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.partitionVal`.
     * @param ctx the parse tree
     */
    exitPartitionVal?: (ctx: PartitionValContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.namespace`.
     * @param ctx the parse tree
     */
    enterNamespace?: (ctx: NamespaceContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.namespace`.
     * @param ctx the parse tree
     */
    exitNamespace?: (ctx: NamespaceContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.namespaces`.
     * @param ctx the parse tree
     */
    enterNamespaces?: (ctx: NamespacesContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.namespaces`.
     * @param ctx the parse tree
     */
    exitNamespaces?: (ctx: NamespacesContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.describeFuncName`.
     * @param ctx the parse tree
     */
    enterDescribeFuncName?: (ctx: DescribeFuncNameContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.describeFuncName`.
     * @param ctx the parse tree
     */
    exitDescribeFuncName?: (ctx: DescribeFuncNameContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.describeColName`.
     * @param ctx the parse tree
     */
    enterDescribeColName?: (ctx: DescribeColNameContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.describeColName`.
     * @param ctx the parse tree
     */
    exitDescribeColName?: (ctx: DescribeColNameContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.ctes`.
     * @param ctx the parse tree
     */
    enterCtes?: (ctx: CtesContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.ctes`.
     * @param ctx the parse tree
     */
    exitCtes?: (ctx: CtesContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.namedQuery`.
     * @param ctx the parse tree
     */
    enterNamedQuery?: (ctx: NamedQueryContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.namedQuery`.
     * @param ctx the parse tree
     */
    exitNamedQuery?: (ctx: NamedQueryContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.tableProvider`.
     * @param ctx the parse tree
     */
    enterTableProvider?: (ctx: TableProviderContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.tableProvider`.
     * @param ctx the parse tree
     */
    exitTableProvider?: (ctx: TableProviderContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.createTableClauses`.
     * @param ctx the parse tree
     */
    enterCreateTableClauses?: (ctx: CreateTableClausesContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.createTableClauses`.
     * @param ctx the parse tree
     */
    exitCreateTableClauses?: (ctx: CreateTableClausesContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.tableLifecycle`.
     * @param ctx the parse tree
     */
    enterTableLifecycle?: (ctx: TableLifecycleContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.tableLifecycle`.
     * @param ctx the parse tree
     */
    exitTableLifecycle?: (ctx: TableLifecycleContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.propertyList`.
     * @param ctx the parse tree
     */
    enterPropertyList?: (ctx: PropertyListContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.propertyList`.
     * @param ctx the parse tree
     */
    exitPropertyList?: (ctx: PropertyListContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.property`.
     * @param ctx the parse tree
     */
    enterProperty?: (ctx: PropertyContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.property`.
     * @param ctx the parse tree
     */
    exitProperty?: (ctx: PropertyContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.propertyKey`.
     * @param ctx the parse tree
     */
    enterPropertyKey?: (ctx: PropertyKeyContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.propertyKey`.
     * @param ctx the parse tree
     */
    exitPropertyKey?: (ctx: PropertyKeyContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.propertyValue`.
     * @param ctx the parse tree
     */
    enterPropertyValue?: (ctx: PropertyValueContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.propertyValue`.
     * @param ctx the parse tree
     */
    exitPropertyValue?: (ctx: PropertyValueContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.expressionPropertyList`.
     * @param ctx the parse tree
     */
    enterExpressionPropertyList?: (ctx: ExpressionPropertyListContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.expressionPropertyList`.
     * @param ctx the parse tree
     */
    exitExpressionPropertyList?: (ctx: ExpressionPropertyListContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.expressionProperty`.
     * @param ctx the parse tree
     */
    enterExpressionProperty?: (ctx: ExpressionPropertyContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.expressionProperty`.
     * @param ctx the parse tree
     */
    exitExpressionProperty?: (ctx: ExpressionPropertyContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.constantList`.
     * @param ctx the parse tree
     */
    enterConstantList?: (ctx: ConstantListContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.constantList`.
     * @param ctx the parse tree
     */
    exitConstantList?: (ctx: ConstantListContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.nestedConstantList`.
     * @param ctx the parse tree
     */
    enterNestedConstantList?: (ctx: NestedConstantListContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.nestedConstantList`.
     * @param ctx the parse tree
     */
    exitNestedConstantList?: (ctx: NestedConstantListContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.createFileFormat`.
     * @param ctx the parse tree
     */
    enterCreateFileFormat?: (ctx: CreateFileFormatContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.createFileFormat`.
     * @param ctx the parse tree
     */
    exitCreateFileFormat?: (ctx: CreateFileFormatContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.fileFormat`.
     * @param ctx the parse tree
     */
    enterFileFormat?: (ctx: FileFormatContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.fileFormat`.
     * @param ctx the parse tree
     */
    exitFileFormat?: (ctx: FileFormatContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.storageHandler`.
     * @param ctx the parse tree
     */
    enterStorageHandler?: (ctx: StorageHandlerContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.storageHandler`.
     * @param ctx the parse tree
     */
    exitStorageHandler?: (ctx: StorageHandlerContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.resource`.
     * @param ctx the parse tree
     */
    enterResource?: (ctx: ResourceContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.resource`.
     * @param ctx the parse tree
     */
    exitResource?: (ctx: ResourceContext) => void;
    /**
     * Enter a parse tree produced by the `insertFromQuery`
     * labeled alternative in `SparkSqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     */
    enterInsertFromQuery?: (ctx: InsertFromQueryContext) => void;
    /**
     * Exit a parse tree produced by the `insertFromQuery`
     * labeled alternative in `SparkSqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     */
    exitInsertFromQuery?: (ctx: InsertFromQueryContext) => void;
    /**
     * Enter a parse tree produced by the `multipleInsert`
     * labeled alternative in `SparkSqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     */
    enterMultipleInsert?: (ctx: MultipleInsertContext) => void;
    /**
     * Exit a parse tree produced by the `multipleInsert`
     * labeled alternative in `SparkSqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     */
    exitMultipleInsert?: (ctx: MultipleInsertContext) => void;
    /**
     * Enter a parse tree produced by the `deleteFromTable`
     * labeled alternative in `SparkSqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     */
    enterDeleteFromTable?: (ctx: DeleteFromTableContext) => void;
    /**
     * Exit a parse tree produced by the `deleteFromTable`
     * labeled alternative in `SparkSqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     */
    exitDeleteFromTable?: (ctx: DeleteFromTableContext) => void;
    /**
     * Enter a parse tree produced by the `updateTable`
     * labeled alternative in `SparkSqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     */
    enterUpdateTable?: (ctx: UpdateTableContext) => void;
    /**
     * Exit a parse tree produced by the `updateTable`
     * labeled alternative in `SparkSqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     */
    exitUpdateTable?: (ctx: UpdateTableContext) => void;
    /**
     * Enter a parse tree produced by the `mergeIntoTable`
     * labeled alternative in `SparkSqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     */
    enterMergeIntoTable?: (ctx: MergeIntoTableContext) => void;
    /**
     * Exit a parse tree produced by the `mergeIntoTable`
     * labeled alternative in `SparkSqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     */
    exitMergeIntoTable?: (ctx: MergeIntoTableContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.namespaceName`.
     * @param ctx the parse tree
     */
    enterNamespaceName?: (ctx: NamespaceNameContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.namespaceName`.
     * @param ctx the parse tree
     */
    exitNamespaceName?: (ctx: NamespaceNameContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.namespaceNameCreate`.
     * @param ctx the parse tree
     */
    enterNamespaceNameCreate?: (ctx: NamespaceNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.namespaceNameCreate`.
     * @param ctx the parse tree
     */
    exitNamespaceNameCreate?: (ctx: NamespaceNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.tableNameCreate`.
     * @param ctx the parse tree
     */
    enterTableNameCreate?: (ctx: TableNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.tableNameCreate`.
     * @param ctx the parse tree
     */
    exitTableNameCreate?: (ctx: TableNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.tableName`.
     * @param ctx the parse tree
     */
    enterTableName?: (ctx: TableNameContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.tableName`.
     * @param ctx the parse tree
     */
    exitTableName?: (ctx: TableNameContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.viewNameCreate`.
     * @param ctx the parse tree
     */
    enterViewNameCreate?: (ctx: ViewNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.viewNameCreate`.
     * @param ctx the parse tree
     */
    exitViewNameCreate?: (ctx: ViewNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.viewName`.
     * @param ctx the parse tree
     */
    enterViewName?: (ctx: ViewNameContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.viewName`.
     * @param ctx the parse tree
     */
    exitViewName?: (ctx: ViewNameContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.columnName`.
     * @param ctx the parse tree
     */
    enterColumnName?: (ctx: ColumnNameContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.columnName`.
     * @param ctx the parse tree
     */
    exitColumnName?: (ctx: ColumnNameContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.columnNameSeq`.
     * @param ctx the parse tree
     */
    enterColumnNameSeq?: (ctx: ColumnNameSeqContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.columnNameSeq`.
     * @param ctx the parse tree
     */
    exitColumnNameSeq?: (ctx: ColumnNameSeqContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.columnNameCreate`.
     * @param ctx the parse tree
     */
    enterColumnNameCreate?: (ctx: ColumnNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.columnNameCreate`.
     * @param ctx the parse tree
     */
    exitColumnNameCreate?: (ctx: ColumnNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.identifierReference`.
     * @param ctx the parse tree
     */
    enterIdentifierReference?: (ctx: IdentifierReferenceContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.identifierReference`.
     * @param ctx the parse tree
     */
    exitIdentifierReference?: (ctx: IdentifierReferenceContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.queryOrganization`.
     * @param ctx the parse tree
     */
    enterQueryOrganization?: (ctx: QueryOrganizationContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.queryOrganization`.
     * @param ctx the parse tree
     */
    exitQueryOrganization?: (ctx: QueryOrganizationContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.multiInsertQueryBody`.
     * @param ctx the parse tree
     */
    enterMultiInsertQueryBody?: (ctx: MultiInsertQueryBodyContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.multiInsertQueryBody`.
     * @param ctx the parse tree
     */
    exitMultiInsertQueryBody?: (ctx: MultiInsertQueryBodyContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.queryTerm`.
     * @param ctx the parse tree
     */
    enterQueryTerm?: (ctx: QueryTermContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.queryTerm`.
     * @param ctx the parse tree
     */
    exitQueryTerm?: (ctx: QueryTermContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.queryPrimary`.
     * @param ctx the parse tree
     */
    enterQueryPrimary?: (ctx: QueryPrimaryContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.queryPrimary`.
     * @param ctx the parse tree
     */
    exitQueryPrimary?: (ctx: QueryPrimaryContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.sortItem`.
     * @param ctx the parse tree
     */
    enterSortItem?: (ctx: SortItemContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.sortItem`.
     * @param ctx the parse tree
     */
    exitSortItem?: (ctx: SortItemContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.fromStatement`.
     * @param ctx the parse tree
     */
    enterFromStatement?: (ctx: FromStatementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.fromStatement`.
     * @param ctx the parse tree
     */
    exitFromStatement?: (ctx: FromStatementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.fromStatementBody`.
     * @param ctx the parse tree
     */
    enterFromStatementBody?: (ctx: FromStatementBodyContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.fromStatementBody`.
     * @param ctx the parse tree
     */
    exitFromStatementBody?: (ctx: FromStatementBodyContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.querySpecification`.
     * @param ctx the parse tree
     */
    enterQuerySpecification?: (ctx: QuerySpecificationContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.querySpecification`.
     * @param ctx the parse tree
     */
    exitQuerySpecification?: (ctx: QuerySpecificationContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.transformClause`.
     * @param ctx the parse tree
     */
    enterTransformClause?: (ctx: TransformClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.transformClause`.
     * @param ctx the parse tree
     */
    exitTransformClause?: (ctx: TransformClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.selectClause`.
     * @param ctx the parse tree
     */
    enterSelectClause?: (ctx: SelectClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.selectClause`.
     * @param ctx the parse tree
     */
    exitSelectClause?: (ctx: SelectClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.setClause`.
     * @param ctx the parse tree
     */
    enterSetClause?: (ctx: SetClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.setClause`.
     * @param ctx the parse tree
     */
    exitSetClause?: (ctx: SetClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.matchedClause`.
     * @param ctx the parse tree
     */
    enterMatchedClause?: (ctx: MatchedClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.matchedClause`.
     * @param ctx the parse tree
     */
    exitMatchedClause?: (ctx: MatchedClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.notMatchedClause`.
     * @param ctx the parse tree
     */
    enterNotMatchedClause?: (ctx: NotMatchedClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.notMatchedClause`.
     * @param ctx the parse tree
     */
    exitNotMatchedClause?: (ctx: NotMatchedClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.notMatchedBySourceClause`.
     * @param ctx the parse tree
     */
    enterNotMatchedBySourceClause?: (ctx: NotMatchedBySourceClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.notMatchedBySourceClause`.
     * @param ctx the parse tree
     */
    exitNotMatchedBySourceClause?: (ctx: NotMatchedBySourceClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.matchedAction`.
     * @param ctx the parse tree
     */
    enterMatchedAction?: (ctx: MatchedActionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.matchedAction`.
     * @param ctx the parse tree
     */
    exitMatchedAction?: (ctx: MatchedActionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.notMatchedAction`.
     * @param ctx the parse tree
     */
    enterNotMatchedAction?: (ctx: NotMatchedActionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.notMatchedAction`.
     * @param ctx the parse tree
     */
    exitNotMatchedAction?: (ctx: NotMatchedActionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.notMatchedBySourceAction`.
     * @param ctx the parse tree
     */
    enterNotMatchedBySourceAction?: (ctx: NotMatchedBySourceActionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.notMatchedBySourceAction`.
     * @param ctx the parse tree
     */
    exitNotMatchedBySourceAction?: (ctx: NotMatchedBySourceActionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.assignmentList`.
     * @param ctx the parse tree
     */
    enterAssignmentList?: (ctx: AssignmentListContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.assignmentList`.
     * @param ctx the parse tree
     */
    exitAssignmentList?: (ctx: AssignmentListContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.assignment`.
     * @param ctx the parse tree
     */
    enterAssignment?: (ctx: AssignmentContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.assignment`.
     * @param ctx the parse tree
     */
    exitAssignment?: (ctx: AssignmentContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.whereClause`.
     * @param ctx the parse tree
     */
    enterWhereClause?: (ctx: WhereClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.whereClause`.
     * @param ctx the parse tree
     */
    exitWhereClause?: (ctx: WhereClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.havingClause`.
     * @param ctx the parse tree
     */
    enterHavingClause?: (ctx: HavingClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.havingClause`.
     * @param ctx the parse tree
     */
    exitHavingClause?: (ctx: HavingClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.hint`.
     * @param ctx the parse tree
     */
    enterHint?: (ctx: HintContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.hint`.
     * @param ctx the parse tree
     */
    exitHint?: (ctx: HintContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.hintStatement`.
     * @param ctx the parse tree
     */
    enterHintStatement?: (ctx: HintStatementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.hintStatement`.
     * @param ctx the parse tree
     */
    exitHintStatement?: (ctx: HintStatementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.fromClause`.
     * @param ctx the parse tree
     */
    enterFromClause?: (ctx: FromClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.fromClause`.
     * @param ctx the parse tree
     */
    exitFromClause?: (ctx: FromClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.functionKind`.
     * @param ctx the parse tree
     */
    enterFunctionKind?: (ctx: FunctionKindContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.functionKind`.
     * @param ctx the parse tree
     */
    exitFunctionKind?: (ctx: FunctionKindContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.temporalClause`.
     * @param ctx the parse tree
     */
    enterTemporalClause?: (ctx: TemporalClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.temporalClause`.
     * @param ctx the parse tree
     */
    exitTemporalClause?: (ctx: TemporalClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.aggregationClause`.
     * @param ctx the parse tree
     */
    enterAggregationClause?: (ctx: AggregationClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.aggregationClause`.
     * @param ctx the parse tree
     */
    exitAggregationClause?: (ctx: AggregationClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.groupByClause`.
     * @param ctx the parse tree
     */
    enterGroupByClause?: (ctx: GroupByClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.groupByClause`.
     * @param ctx the parse tree
     */
    exitGroupByClause?: (ctx: GroupByClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.groupingAnalytics`.
     * @param ctx the parse tree
     */
    enterGroupingAnalytics?: (ctx: GroupingAnalyticsContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.groupingAnalytics`.
     * @param ctx the parse tree
     */
    exitGroupingAnalytics?: (ctx: GroupingAnalyticsContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.groupingElement`.
     * @param ctx the parse tree
     */
    enterGroupingElement?: (ctx: GroupingElementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.groupingElement`.
     * @param ctx the parse tree
     */
    exitGroupingElement?: (ctx: GroupingElementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.groupingSet`.
     * @param ctx the parse tree
     */
    enterGroupingSet?: (ctx: GroupingSetContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.groupingSet`.
     * @param ctx the parse tree
     */
    exitGroupingSet?: (ctx: GroupingSetContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.pivotClause`.
     * @param ctx the parse tree
     */
    enterPivotClause?: (ctx: PivotClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.pivotClause`.
     * @param ctx the parse tree
     */
    exitPivotClause?: (ctx: PivotClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.pivotColumn`.
     * @param ctx the parse tree
     */
    enterPivotColumn?: (ctx: PivotColumnContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.pivotColumn`.
     * @param ctx the parse tree
     */
    exitPivotColumn?: (ctx: PivotColumnContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.pivotValue`.
     * @param ctx the parse tree
     */
    enterPivotValue?: (ctx: PivotValueContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.pivotValue`.
     * @param ctx the parse tree
     */
    exitPivotValue?: (ctx: PivotValueContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.unpivotClause`.
     * @param ctx the parse tree
     */
    enterUnpivotClause?: (ctx: UnpivotClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.unpivotClause`.
     * @param ctx the parse tree
     */
    exitUnpivotClause?: (ctx: UnpivotClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.unpivotNullClause`.
     * @param ctx the parse tree
     */
    enterUnpivotNullClause?: (ctx: UnpivotNullClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.unpivotNullClause`.
     * @param ctx the parse tree
     */
    exitUnpivotNullClause?: (ctx: UnpivotNullClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.unpivotOperator`.
     * @param ctx the parse tree
     */
    enterUnpivotOperator?: (ctx: UnpivotOperatorContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.unpivotOperator`.
     * @param ctx the parse tree
     */
    exitUnpivotOperator?: (ctx: UnpivotOperatorContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.unpivotSingleValueColumnClause`.
     * @param ctx the parse tree
     */
    enterUnpivotSingleValueColumnClause?: (ctx: UnpivotSingleValueColumnClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.unpivotSingleValueColumnClause`.
     * @param ctx the parse tree
     */
    exitUnpivotSingleValueColumnClause?: (ctx: UnpivotSingleValueColumnClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.unpivotMultiValueColumnClause`.
     * @param ctx the parse tree
     */
    enterUnpivotMultiValueColumnClause?: (ctx: UnpivotMultiValueColumnClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.unpivotMultiValueColumnClause`.
     * @param ctx the parse tree
     */
    exitUnpivotMultiValueColumnClause?: (ctx: UnpivotMultiValueColumnClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.unpivotColumnSet`.
     * @param ctx the parse tree
     */
    enterUnpivotColumnSet?: (ctx: UnpivotColumnSetContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.unpivotColumnSet`.
     * @param ctx the parse tree
     */
    exitUnpivotColumnSet?: (ctx: UnpivotColumnSetContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.unpivotValueColumn`.
     * @param ctx the parse tree
     */
    enterUnpivotValueColumn?: (ctx: UnpivotValueColumnContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.unpivotValueColumn`.
     * @param ctx the parse tree
     */
    exitUnpivotValueColumn?: (ctx: UnpivotValueColumnContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.unpivotNameColumn`.
     * @param ctx the parse tree
     */
    enterUnpivotNameColumn?: (ctx: UnpivotNameColumnContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.unpivotNameColumn`.
     * @param ctx the parse tree
     */
    exitUnpivotNameColumn?: (ctx: UnpivotNameColumnContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.unpivotColumnAndAlias`.
     * @param ctx the parse tree
     */
    enterUnpivotColumnAndAlias?: (ctx: UnpivotColumnAndAliasContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.unpivotColumnAndAlias`.
     * @param ctx the parse tree
     */
    exitUnpivotColumnAndAlias?: (ctx: UnpivotColumnAndAliasContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.unpivotColumn`.
     * @param ctx the parse tree
     */
    enterUnpivotColumn?: (ctx: UnpivotColumnContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.unpivotColumn`.
     * @param ctx the parse tree
     */
    exitUnpivotColumn?: (ctx: UnpivotColumnContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.unpivotAlias`.
     * @param ctx the parse tree
     */
    enterUnpivotAlias?: (ctx: UnpivotAliasContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.unpivotAlias`.
     * @param ctx the parse tree
     */
    exitUnpivotAlias?: (ctx: UnpivotAliasContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.ifNotExists`.
     * @param ctx the parse tree
     */
    enterIfNotExists?: (ctx: IfNotExistsContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.ifNotExists`.
     * @param ctx the parse tree
     */
    exitIfNotExists?: (ctx: IfNotExistsContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.ifExists`.
     * @param ctx the parse tree
     */
    enterIfExists?: (ctx: IfExistsContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.ifExists`.
     * @param ctx the parse tree
     */
    exitIfExists?: (ctx: IfExistsContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.lateralView`.
     * @param ctx the parse tree
     */
    enterLateralView?: (ctx: LateralViewContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.lateralView`.
     * @param ctx the parse tree
     */
    exitLateralView?: (ctx: LateralViewContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.setQuantifier`.
     * @param ctx the parse tree
     */
    enterSetQuantifier?: (ctx: SetQuantifierContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.setQuantifier`.
     * @param ctx the parse tree
     */
    exitSetQuantifier?: (ctx: SetQuantifierContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.relation`.
     * @param ctx the parse tree
     */
    enterRelation?: (ctx: RelationContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.relation`.
     * @param ctx the parse tree
     */
    exitRelation?: (ctx: RelationContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.relationExtension`.
     * @param ctx the parse tree
     */
    enterRelationExtension?: (ctx: RelationExtensionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.relationExtension`.
     * @param ctx the parse tree
     */
    exitRelationExtension?: (ctx: RelationExtensionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.joinRelation`.
     * @param ctx the parse tree
     */
    enterJoinRelation?: (ctx: JoinRelationContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.joinRelation`.
     * @param ctx the parse tree
     */
    exitJoinRelation?: (ctx: JoinRelationContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.joinType`.
     * @param ctx the parse tree
     */
    enterJoinType?: (ctx: JoinTypeContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.joinType`.
     * @param ctx the parse tree
     */
    exitJoinType?: (ctx: JoinTypeContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.joinCriteria`.
     * @param ctx the parse tree
     */
    enterJoinCriteria?: (ctx: JoinCriteriaContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.joinCriteria`.
     * @param ctx the parse tree
     */
    exitJoinCriteria?: (ctx: JoinCriteriaContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.sample`.
     * @param ctx the parse tree
     */
    enterSample?: (ctx: SampleContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.sample`.
     * @param ctx the parse tree
     */
    exitSample?: (ctx: SampleContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.sampleMethod`.
     * @param ctx the parse tree
     */
    enterSampleMethod?: (ctx: SampleMethodContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.sampleMethod`.
     * @param ctx the parse tree
     */
    exitSampleMethod?: (ctx: SampleMethodContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.identifierList`.
     * @param ctx the parse tree
     */
    enterIdentifierList?: (ctx: IdentifierListContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.identifierList`.
     * @param ctx the parse tree
     */
    exitIdentifierList?: (ctx: IdentifierListContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.identifierSeq`.
     * @param ctx the parse tree
     */
    enterIdentifierSeq?: (ctx: IdentifierSeqContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.identifierSeq`.
     * @param ctx the parse tree
     */
    exitIdentifierSeq?: (ctx: IdentifierSeqContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.orderedIdentifierList`.
     * @param ctx the parse tree
     */
    enterOrderedIdentifierList?: (ctx: OrderedIdentifierListContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.orderedIdentifierList`.
     * @param ctx the parse tree
     */
    exitOrderedIdentifierList?: (ctx: OrderedIdentifierListContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.orderedIdentifier`.
     * @param ctx the parse tree
     */
    enterOrderedIdentifier?: (ctx: OrderedIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.orderedIdentifier`.
     * @param ctx the parse tree
     */
    exitOrderedIdentifier?: (ctx: OrderedIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.identifierCommentList`.
     * @param ctx the parse tree
     */
    enterIdentifierCommentList?: (ctx: IdentifierCommentListContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.identifierCommentList`.
     * @param ctx the parse tree
     */
    exitIdentifierCommentList?: (ctx: IdentifierCommentListContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.identifierComment`.
     * @param ctx the parse tree
     */
    enterIdentifierComment?: (ctx: IdentifierCommentContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.identifierComment`.
     * @param ctx the parse tree
     */
    exitIdentifierComment?: (ctx: IdentifierCommentContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.relationPrimary`.
     * @param ctx the parse tree
     */
    enterRelationPrimary?: (ctx: RelationPrimaryContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.relationPrimary`.
     * @param ctx the parse tree
     */
    exitRelationPrimary?: (ctx: RelationPrimaryContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.inlineTable`.
     * @param ctx the parse tree
     */
    enterInlineTable?: (ctx: InlineTableContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.inlineTable`.
     * @param ctx the parse tree
     */
    exitInlineTable?: (ctx: InlineTableContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.functionTableSubqueryArgument`.
     * @param ctx the parse tree
     */
    enterFunctionTableSubqueryArgument?: (ctx: FunctionTableSubqueryArgumentContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.functionTableSubqueryArgument`.
     * @param ctx the parse tree
     */
    exitFunctionTableSubqueryArgument?: (ctx: FunctionTableSubqueryArgumentContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.tableArgumentPartitioning`.
     * @param ctx the parse tree
     */
    enterTableArgumentPartitioning?: (ctx: TableArgumentPartitioningContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.tableArgumentPartitioning`.
     * @param ctx the parse tree
     */
    exitTableArgumentPartitioning?: (ctx: TableArgumentPartitioningContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.functionTableNamedArgumentExpression`.
     * @param ctx the parse tree
     */
    enterFunctionTableNamedArgumentExpression?: (ctx: FunctionTableNamedArgumentExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.functionTableNamedArgumentExpression`.
     * @param ctx the parse tree
     */
    exitFunctionTableNamedArgumentExpression?: (ctx: FunctionTableNamedArgumentExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.functionTableReferenceArgument`.
     * @param ctx the parse tree
     */
    enterFunctionTableReferenceArgument?: (ctx: FunctionTableReferenceArgumentContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.functionTableReferenceArgument`.
     * @param ctx the parse tree
     */
    exitFunctionTableReferenceArgument?: (ctx: FunctionTableReferenceArgumentContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.functionTableArgument`.
     * @param ctx the parse tree
     */
    enterFunctionTableArgument?: (ctx: FunctionTableArgumentContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.functionTableArgument`.
     * @param ctx the parse tree
     */
    exitFunctionTableArgument?: (ctx: FunctionTableArgumentContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.functionTable`.
     * @param ctx the parse tree
     */
    enterFunctionTable?: (ctx: FunctionTableContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.functionTable`.
     * @param ctx the parse tree
     */
    exitFunctionTable?: (ctx: FunctionTableContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.tableAlias`.
     * @param ctx the parse tree
     */
    enterTableAlias?: (ctx: TableAliasContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.tableAlias`.
     * @param ctx the parse tree
     */
    exitTableAlias?: (ctx: TableAliasContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.rowFormat`.
     * @param ctx the parse tree
     */
    enterRowFormat?: (ctx: RowFormatContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.rowFormat`.
     * @param ctx the parse tree
     */
    exitRowFormat?: (ctx: RowFormatContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.multipartIdentifierList`.
     * @param ctx the parse tree
     */
    enterMultipartIdentifierList?: (ctx: MultipartIdentifierListContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.multipartIdentifierList`.
     * @param ctx the parse tree
     */
    exitMultipartIdentifierList?: (ctx: MultipartIdentifierListContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.multipartIdentifier`.
     * @param ctx the parse tree
     */
    enterMultipartIdentifier?: (ctx: MultipartIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.multipartIdentifier`.
     * @param ctx the parse tree
     */
    exitMultipartIdentifier?: (ctx: MultipartIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.multipartIdentifierPropertyList`.
     * @param ctx the parse tree
     */
    enterMultipartIdentifierPropertyList?: (ctx: MultipartIdentifierPropertyListContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.multipartIdentifierPropertyList`.
     * @param ctx the parse tree
     */
    exitMultipartIdentifierPropertyList?: (ctx: MultipartIdentifierPropertyListContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.multipartIdentifierProperty`.
     * @param ctx the parse tree
     */
    enterMultipartIdentifierProperty?: (ctx: MultipartIdentifierPropertyContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.multipartIdentifierProperty`.
     * @param ctx the parse tree
     */
    exitMultipartIdentifierProperty?: (ctx: MultipartIdentifierPropertyContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.tableIdentifier`.
     * @param ctx the parse tree
     */
    enterTableIdentifier?: (ctx: TableIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.tableIdentifier`.
     * @param ctx the parse tree
     */
    exitTableIdentifier?: (ctx: TableIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.viewIdentifier`.
     * @param ctx the parse tree
     */
    enterViewIdentifier?: (ctx: ViewIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.viewIdentifier`.
     * @param ctx the parse tree
     */
    exitViewIdentifier?: (ctx: ViewIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.namedExpression`.
     * @param ctx the parse tree
     */
    enterNamedExpression?: (ctx: NamedExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.namedExpression`.
     * @param ctx the parse tree
     */
    exitNamedExpression?: (ctx: NamedExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.namedExpressionSeq`.
     * @param ctx the parse tree
     */
    enterNamedExpressionSeq?: (ctx: NamedExpressionSeqContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.namedExpressionSeq`.
     * @param ctx the parse tree
     */
    exitNamedExpressionSeq?: (ctx: NamedExpressionSeqContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.partitionFieldList`.
     * @param ctx the parse tree
     */
    enterPartitionFieldList?: (ctx: PartitionFieldListContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.partitionFieldList`.
     * @param ctx the parse tree
     */
    exitPartitionFieldList?: (ctx: PartitionFieldListContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.partitionField`.
     * @param ctx the parse tree
     */
    enterPartitionField?: (ctx: PartitionFieldContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.partitionField`.
     * @param ctx the parse tree
     */
    exitPartitionField?: (ctx: PartitionFieldContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.transform`.
     * @param ctx the parse tree
     */
    enterTransform?: (ctx: TransformContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.transform`.
     * @param ctx the parse tree
     */
    exitTransform?: (ctx: TransformContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.transformArgument`.
     * @param ctx the parse tree
     */
    enterTransformArgument?: (ctx: TransformArgumentContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.transformArgument`.
     * @param ctx the parse tree
     */
    exitTransformArgument?: (ctx: TransformArgumentContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.namedArgumentExpression`.
     * @param ctx the parse tree
     */
    enterNamedArgumentExpression?: (ctx: NamedArgumentExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.namedArgumentExpression`.
     * @param ctx the parse tree
     */
    exitNamedArgumentExpression?: (ctx: NamedArgumentExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.functionArgument`.
     * @param ctx the parse tree
     */
    enterFunctionArgument?: (ctx: FunctionArgumentContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.functionArgument`.
     * @param ctx the parse tree
     */
    exitFunctionArgument?: (ctx: FunctionArgumentContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.expressionSeq`.
     * @param ctx the parse tree
     */
    enterExpressionSeq?: (ctx: ExpressionSeqContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.expressionSeq`.
     * @param ctx the parse tree
     */
    exitExpressionSeq?: (ctx: ExpressionSeqContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterBooleanExpression?: (ctx: BooleanExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitBooleanExpression?: (ctx: BooleanExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterPredicate?: (ctx: PredicateContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitPredicate?: (ctx: PredicateContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterValueExpression?: (ctx: ValueExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitValueExpression?: (ctx: ValueExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.datetimeUnit`.
     * @param ctx the parse tree
     */
    enterDatetimeUnit?: (ctx: DatetimeUnitContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.datetimeUnit`.
     * @param ctx the parse tree
     */
    exitDatetimeUnit?: (ctx: DatetimeUnitContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.literalType`.
     * @param ctx the parse tree
     */
    enterLiteralType?: (ctx: LiteralTypeContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.literalType`.
     * @param ctx the parse tree
     */
    exitLiteralType?: (ctx: LiteralTypeContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.constant`.
     * @param ctx the parse tree
     */
    enterConstant?: (ctx: ConstantContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.constant`.
     * @param ctx the parse tree
     */
    exitConstant?: (ctx: ConstantContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.arithmeticOperator`.
     * @param ctx the parse tree
     */
    enterArithmeticOperator?: (ctx: ArithmeticOperatorContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.arithmeticOperator`.
     * @param ctx the parse tree
     */
    exitArithmeticOperator?: (ctx: ArithmeticOperatorContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.predicateOperator`.
     * @param ctx the parse tree
     */
    enterPredicateOperator?: (ctx: PredicateOperatorContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.predicateOperator`.
     * @param ctx the parse tree
     */
    exitPredicateOperator?: (ctx: PredicateOperatorContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.booleanValue`.
     * @param ctx the parse tree
     */
    enterBooleanValue?: (ctx: BooleanValueContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.booleanValue`.
     * @param ctx the parse tree
     */
    exitBooleanValue?: (ctx: BooleanValueContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.interval`.
     * @param ctx the parse tree
     */
    enterInterval?: (ctx: IntervalContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.interval`.
     * @param ctx the parse tree
     */
    exitInterval?: (ctx: IntervalContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.errorCapturingMultiUnitsInterval`.
     * @param ctx the parse tree
     */
    enterErrorCapturingMultiUnitsInterval?: (ctx: ErrorCapturingMultiUnitsIntervalContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.errorCapturingMultiUnitsInterval`.
     * @param ctx the parse tree
     */
    exitErrorCapturingMultiUnitsInterval?: (ctx: ErrorCapturingMultiUnitsIntervalContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.multiUnitsInterval`.
     * @param ctx the parse tree
     */
    enterMultiUnitsInterval?: (ctx: MultiUnitsIntervalContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.multiUnitsInterval`.
     * @param ctx the parse tree
     */
    exitMultiUnitsInterval?: (ctx: MultiUnitsIntervalContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.errorCapturingUnitToUnitInterval`.
     * @param ctx the parse tree
     */
    enterErrorCapturingUnitToUnitInterval?: (ctx: ErrorCapturingUnitToUnitIntervalContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.errorCapturingUnitToUnitInterval`.
     * @param ctx the parse tree
     */
    exitErrorCapturingUnitToUnitInterval?: (ctx: ErrorCapturingUnitToUnitIntervalContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.unitToUnitInterval`.
     * @param ctx the parse tree
     */
    enterUnitToUnitInterval?: (ctx: UnitToUnitIntervalContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.unitToUnitInterval`.
     * @param ctx the parse tree
     */
    exitUnitToUnitInterval?: (ctx: UnitToUnitIntervalContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.intervalValue`.
     * @param ctx the parse tree
     */
    enterIntervalValue?: (ctx: IntervalValueContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.intervalValue`.
     * @param ctx the parse tree
     */
    exitIntervalValue?: (ctx: IntervalValueContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.unitInMultiUnits`.
     * @param ctx the parse tree
     */
    enterUnitInMultiUnits?: (ctx: UnitInMultiUnitsContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.unitInMultiUnits`.
     * @param ctx the parse tree
     */
    exitUnitInMultiUnits?: (ctx: UnitInMultiUnitsContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.unitInUnitToUnit`.
     * @param ctx the parse tree
     */
    enterUnitInUnitToUnit?: (ctx: UnitInUnitToUnitContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.unitInUnitToUnit`.
     * @param ctx the parse tree
     */
    exitUnitInUnitToUnit?: (ctx: UnitInUnitToUnitContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.colPosition`.
     * @param ctx the parse tree
     */
    enterColPosition?: (ctx: ColPositionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.colPosition`.
     * @param ctx the parse tree
     */
    exitColPosition?: (ctx: ColPositionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.type`.
     * @param ctx the parse tree
     */
    enterType?: (ctx: TypeContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.type`.
     * @param ctx the parse tree
     */
    exitType?: (ctx: TypeContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.dataType`.
     * @param ctx the parse tree
     */
    enterDataType?: (ctx: DataTypeContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.dataType`.
     * @param ctx the parse tree
     */
    exitDataType?: (ctx: DataTypeContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.qualifiedColTypeWithPositionSeqForAdd`.
     * @param ctx the parse tree
     */
    enterQualifiedColTypeWithPositionSeqForAdd?: (ctx: QualifiedColTypeWithPositionSeqForAddContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.qualifiedColTypeWithPositionSeqForAdd`.
     * @param ctx the parse tree
     */
    exitQualifiedColTypeWithPositionSeqForAdd?: (ctx: QualifiedColTypeWithPositionSeqForAddContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.qualifiedColTypeWithPositionForAdd`.
     * @param ctx the parse tree
     */
    enterQualifiedColTypeWithPositionForAdd?: (ctx: QualifiedColTypeWithPositionForAddContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.qualifiedColTypeWithPositionForAdd`.
     * @param ctx the parse tree
     */
    exitQualifiedColTypeWithPositionForAdd?: (ctx: QualifiedColTypeWithPositionForAddContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.qualifiedColTypeWithPositionSeqForReplace`.
     * @param ctx the parse tree
     */
    enterQualifiedColTypeWithPositionSeqForReplace?: (ctx: QualifiedColTypeWithPositionSeqForReplaceContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.qualifiedColTypeWithPositionSeqForReplace`.
     * @param ctx the parse tree
     */
    exitQualifiedColTypeWithPositionSeqForReplace?: (ctx: QualifiedColTypeWithPositionSeqForReplaceContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.qualifiedColTypeWithPositionForReplace`.
     * @param ctx the parse tree
     */
    enterQualifiedColTypeWithPositionForReplace?: (ctx: QualifiedColTypeWithPositionForReplaceContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.qualifiedColTypeWithPositionForReplace`.
     * @param ctx the parse tree
     */
    exitQualifiedColTypeWithPositionForReplace?: (ctx: QualifiedColTypeWithPositionForReplaceContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.colDefinitionDescriptorWithPosition`.
     * @param ctx the parse tree
     */
    enterColDefinitionDescriptorWithPosition?: (ctx: ColDefinitionDescriptorWithPositionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.colDefinitionDescriptorWithPosition`.
     * @param ctx the parse tree
     */
    exitColDefinitionDescriptorWithPosition?: (ctx: ColDefinitionDescriptorWithPositionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.defaultExpression`.
     * @param ctx the parse tree
     */
    enterDefaultExpression?: (ctx: DefaultExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.defaultExpression`.
     * @param ctx the parse tree
     */
    exitDefaultExpression?: (ctx: DefaultExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.variableDefaultExpression`.
     * @param ctx the parse tree
     */
    enterVariableDefaultExpression?: (ctx: VariableDefaultExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.variableDefaultExpression`.
     * @param ctx the parse tree
     */
    exitVariableDefaultExpression?: (ctx: VariableDefaultExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.colTypeList`.
     * @param ctx the parse tree
     */
    enterColTypeList?: (ctx: ColTypeListContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.colTypeList`.
     * @param ctx the parse tree
     */
    exitColTypeList?: (ctx: ColTypeListContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.colType`.
     * @param ctx the parse tree
     */
    enterColType?: (ctx: ColTypeContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.colType`.
     * @param ctx the parse tree
     */
    exitColType?: (ctx: ColTypeContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.createOrReplaceTableColTypeList`.
     * @param ctx the parse tree
     */
    enterCreateOrReplaceTableColTypeList?: (ctx: CreateOrReplaceTableColTypeListContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.createOrReplaceTableColTypeList`.
     * @param ctx the parse tree
     */
    exitCreateOrReplaceTableColTypeList?: (ctx: CreateOrReplaceTableColTypeListContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.createOrReplaceTableColType`.
     * @param ctx the parse tree
     */
    enterCreateOrReplaceTableColType?: (ctx: CreateOrReplaceTableColTypeContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.createOrReplaceTableColType`.
     * @param ctx the parse tree
     */
    exitCreateOrReplaceTableColType?: (ctx: CreateOrReplaceTableColTypeContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.colDefinitionOption`.
     * @param ctx the parse tree
     */
    enterColDefinitionOption?: (ctx: ColDefinitionOptionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.colDefinitionOption`.
     * @param ctx the parse tree
     */
    exitColDefinitionOption?: (ctx: ColDefinitionOptionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.generationExpression`.
     * @param ctx the parse tree
     */
    enterGenerationExpression?: (ctx: GenerationExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.generationExpression`.
     * @param ctx the parse tree
     */
    exitGenerationExpression?: (ctx: GenerationExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.complexColTypeList`.
     * @param ctx the parse tree
     */
    enterComplexColTypeList?: (ctx: ComplexColTypeListContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.complexColTypeList`.
     * @param ctx the parse tree
     */
    exitComplexColTypeList?: (ctx: ComplexColTypeListContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.complexColType`.
     * @param ctx the parse tree
     */
    enterComplexColType?: (ctx: ComplexColTypeContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.complexColType`.
     * @param ctx the parse tree
     */
    exitComplexColType?: (ctx: ComplexColTypeContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.whenClause`.
     * @param ctx the parse tree
     */
    enterWhenClause?: (ctx: WhenClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.whenClause`.
     * @param ctx the parse tree
     */
    exitWhenClause?: (ctx: WhenClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.windowClause`.
     * @param ctx the parse tree
     */
    enterWindowClause?: (ctx: WindowClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.windowClause`.
     * @param ctx the parse tree
     */
    exitWindowClause?: (ctx: WindowClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.zorderClause`.
     * @param ctx the parse tree
     */
    enterZorderClause?: (ctx: ZorderClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.zorderClause`.
     * @param ctx the parse tree
     */
    exitZorderClause?: (ctx: ZorderClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.namedWindow`.
     * @param ctx the parse tree
     */
    enterNamedWindow?: (ctx: NamedWindowContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.namedWindow`.
     * @param ctx the parse tree
     */
    exitNamedWindow?: (ctx: NamedWindowContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.windowSpec`.
     * @param ctx the parse tree
     */
    enterWindowSpec?: (ctx: WindowSpecContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.windowSpec`.
     * @param ctx the parse tree
     */
    exitWindowSpec?: (ctx: WindowSpecContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.windowFrame`.
     * @param ctx the parse tree
     */
    enterWindowFrame?: (ctx: WindowFrameContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.windowFrame`.
     * @param ctx the parse tree
     */
    exitWindowFrame?: (ctx: WindowFrameContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.frameBound`.
     * @param ctx the parse tree
     */
    enterFrameBound?: (ctx: FrameBoundContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.frameBound`.
     * @param ctx the parse tree
     */
    exitFrameBound?: (ctx: FrameBoundContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.qualifiedNameList`.
     * @param ctx the parse tree
     */
    enterQualifiedNameList?: (ctx: QualifiedNameListContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.qualifiedNameList`.
     * @param ctx the parse tree
     */
    exitQualifiedNameList?: (ctx: QualifiedNameListContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.functionName`.
     * @param ctx the parse tree
     */
    enterFunctionName?: (ctx: FunctionNameContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.functionName`.
     * @param ctx the parse tree
     */
    exitFunctionName?: (ctx: FunctionNameContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.functionNameCreate`.
     * @param ctx the parse tree
     */
    enterFunctionNameCreate?: (ctx: FunctionNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.functionNameCreate`.
     * @param ctx the parse tree
     */
    exitFunctionNameCreate?: (ctx: FunctionNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.qualifiedName`.
     * @param ctx the parse tree
     */
    enterQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.qualifiedName`.
     * @param ctx the parse tree
     */
    exitQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.errorCapturingIdentifier`.
     * @param ctx the parse tree
     */
    enterErrorCapturingIdentifier?: (ctx: ErrorCapturingIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.errorCapturingIdentifier`.
     * @param ctx the parse tree
     */
    exitErrorCapturingIdentifier?: (ctx: ErrorCapturingIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.errorCapturingIdentifierExtra`.
     * @param ctx the parse tree
     */
    enterErrorCapturingIdentifierExtra?: (ctx: ErrorCapturingIdentifierExtraContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.errorCapturingIdentifierExtra`.
     * @param ctx the parse tree
     */
    exitErrorCapturingIdentifierExtra?: (ctx: ErrorCapturingIdentifierExtraContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.identifier`.
     * @param ctx the parse tree
     */
    enterIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.identifier`.
     * @param ctx the parse tree
     */
    exitIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.strictIdentifier`.
     * @param ctx the parse tree
     */
    enterStrictIdentifier?: (ctx: StrictIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.strictIdentifier`.
     * @param ctx the parse tree
     */
    exitStrictIdentifier?: (ctx: StrictIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.quotedIdentifier`.
     * @param ctx the parse tree
     */
    enterQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.quotedIdentifier`.
     * @param ctx the parse tree
     */
    exitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.backQuotedIdentifier`.
     * @param ctx the parse tree
     */
    enterBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.backQuotedIdentifier`.
     * @param ctx the parse tree
     */
    exitBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.number`.
     * @param ctx the parse tree
     */
    enterNumber?: (ctx: NumberContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.number`.
     * @param ctx the parse tree
     */
    exitNumber?: (ctx: NumberContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.alterColumnAction`.
     * @param ctx the parse tree
     */
    enterAlterColumnAction?: (ctx: AlterColumnActionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.alterColumnAction`.
     * @param ctx the parse tree
     */
    exitAlterColumnAction?: (ctx: AlterColumnActionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.stringLit`.
     * @param ctx the parse tree
     */
    enterStringLit?: (ctx: StringLitContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.stringLit`.
     * @param ctx the parse tree
     */
    exitStringLit?: (ctx: StringLitContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.comment`.
     * @param ctx the parse tree
     */
    enterComment?: (ctx: CommentContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.comment`.
     * @param ctx the parse tree
     */
    exitComment?: (ctx: CommentContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.version`.
     * @param ctx the parse tree
     */
    enterVersion?: (ctx: VersionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.version`.
     * @param ctx the parse tree
     */
    exitVersion?: (ctx: VersionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.ansiNonReserved`.
     * @param ctx the parse tree
     */
    enterAnsiNonReserved?: (ctx: AnsiNonReservedContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.ansiNonReserved`.
     * @param ctx the parse tree
     */
    exitAnsiNonReserved?: (ctx: AnsiNonReservedContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.strictNonReserved`.
     * @param ctx the parse tree
     */
    enterStrictNonReserved?: (ctx: StrictNonReservedContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.strictNonReserved`.
     * @param ctx the parse tree
     */
    exitStrictNonReserved?: (ctx: StrictNonReservedContext) => void;
    /**
     * Enter a parse tree produced by `SparkSqlParser.nonReserved`.
     * @param ctx the parse tree
     */
    enterNonReserved?: (ctx: NonReservedContext) => void;
    /**
     * Exit a parse tree produced by `SparkSqlParser.nonReserved`.
     * @param ctx the parse tree
     */
    exitNonReserved?: (ctx: NonReservedContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

