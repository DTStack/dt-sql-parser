// Generated from dt-sql-parser/src/grammar/sql/SQLParser.g4 by ANTLR 4.13.1

// @ts-nocheck

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


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
 * This interface defines a complete listener for a parse tree produced by
 * `SQLParser`.
 */
export class SQLParserListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `SQLParser.program`.
     * @param ctx the parse tree
     */
    enterProgram?: (ctx: ProgramContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.program`.
     * @param ctx the parse tree
     */
    exitProgram?: (ctx: ProgramContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.singleStatement`.
     * @param ctx the parse tree
     */
    enterSingleStatement?: (ctx: SingleStatementContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.singleStatement`.
     * @param ctx the parse tree
     */
    exitSingleStatement?: (ctx: SingleStatementContext) => void;
    /**
     * Enter a parse tree produced by the `statementDefault`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterStatementDefault?: (ctx: StatementDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `statementDefault`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitStatementDefault?: (ctx: StatementDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `dmlStatement`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterDmlStatement?: (ctx: DmlStatementContext) => void;
    /**
     * Exit a parse tree produced by the `dmlStatement`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitDmlStatement?: (ctx: DmlStatementContext) => void;
    /**
     * Enter a parse tree produced by the `useNamespace`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterUseNamespace?: (ctx: UseNamespaceContext) => void;
    /**
     * Exit a parse tree produced by the `useNamespace`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitUseNamespace?: (ctx: UseNamespaceContext) => void;
    /**
     * Enter a parse tree produced by the `setCatalog`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterSetCatalog?: (ctx: SetCatalogContext) => void;
    /**
     * Exit a parse tree produced by the `setCatalog`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitSetCatalog?: (ctx: SetCatalogContext) => void;
    /**
     * Enter a parse tree produced by the `createNamespace`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateNamespace?: (ctx: CreateNamespaceContext) => void;
    /**
     * Exit a parse tree produced by the `createNamespace`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateNamespace?: (ctx: CreateNamespaceContext) => void;
    /**
     * Enter a parse tree produced by the `setNamespaceProperties`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterSetNamespaceProperties?: (ctx: SetNamespacePropertiesContext) => void;
    /**
     * Exit a parse tree produced by the `setNamespaceProperties`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitSetNamespaceProperties?: (ctx: SetNamespacePropertiesContext) => void;
    /**
     * Enter a parse tree produced by the `setNamespaceLocation`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterSetNamespaceLocation?: (ctx: SetNamespaceLocationContext) => void;
    /**
     * Exit a parse tree produced by the `setNamespaceLocation`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitSetNamespaceLocation?: (ctx: SetNamespaceLocationContext) => void;
    /**
     * Enter a parse tree produced by the `dropNamespace`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterDropNamespace?: (ctx: DropNamespaceContext) => void;
    /**
     * Exit a parse tree produced by the `dropNamespace`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitDropNamespace?: (ctx: DropNamespaceContext) => void;
    /**
     * Enter a parse tree produced by the `showNamespaces`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterShowNamespaces?: (ctx: ShowNamespacesContext) => void;
    /**
     * Exit a parse tree produced by the `showNamespaces`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitShowNamespaces?: (ctx: ShowNamespacesContext) => void;
    /**
     * Enter a parse tree produced by the `createTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateTable?: (ctx: CreateTableContext) => void;
    /**
     * Exit a parse tree produced by the `createTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateTable?: (ctx: CreateTableContext) => void;
    /**
     * Enter a parse tree produced by the `createTableLike`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateTableLike?: (ctx: CreateTableLikeContext) => void;
    /**
     * Exit a parse tree produced by the `createTableLike`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateTableLike?: (ctx: CreateTableLikeContext) => void;
    /**
     * Enter a parse tree produced by the `replaceTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterReplaceTable?: (ctx: ReplaceTableContext) => void;
    /**
     * Exit a parse tree produced by the `replaceTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitReplaceTable?: (ctx: ReplaceTableContext) => void;
    /**
     * Enter a parse tree produced by the `analyze`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterAnalyze?: (ctx: AnalyzeContext) => void;
    /**
     * Exit a parse tree produced by the `analyze`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitAnalyze?: (ctx: AnalyzeContext) => void;
    /**
     * Enter a parse tree produced by the `analyzeTables`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterAnalyzeTables?: (ctx: AnalyzeTablesContext) => void;
    /**
     * Exit a parse tree produced by the `analyzeTables`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitAnalyzeTables?: (ctx: AnalyzeTablesContext) => void;
    /**
     * Enter a parse tree produced by the `alterTableAddColumn`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterAlterTableAddColumn?: (ctx: AlterTableAddColumnContext) => void;
    /**
     * Exit a parse tree produced by the `alterTableAddColumn`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitAlterTableAddColumn?: (ctx: AlterTableAddColumnContext) => void;
    /**
     * Enter a parse tree produced by the `alterTableAddColumns`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterAlterTableAddColumns?: (ctx: AlterTableAddColumnsContext) => void;
    /**
     * Exit a parse tree produced by the `alterTableAddColumns`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitAlterTableAddColumns?: (ctx: AlterTableAddColumnsContext) => void;
    /**
     * Enter a parse tree produced by the `renameTableColumn`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterRenameTableColumn?: (ctx: RenameTableColumnContext) => void;
    /**
     * Exit a parse tree produced by the `renameTableColumn`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitRenameTableColumn?: (ctx: RenameTableColumnContext) => void;
    /**
     * Enter a parse tree produced by the `alterTableDropColumn`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterAlterTableDropColumn?: (ctx: AlterTableDropColumnContext) => void;
    /**
     * Exit a parse tree produced by the `alterTableDropColumn`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitAlterTableDropColumn?: (ctx: AlterTableDropColumnContext) => void;
    /**
     * Enter a parse tree produced by the `dropTableColumns`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterDropTableColumns?: (ctx: DropTableColumnsContext) => void;
    /**
     * Exit a parse tree produced by the `dropTableColumns`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitDropTableColumns?: (ctx: DropTableColumnsContext) => void;
    /**
     * Enter a parse tree produced by the `renameTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterRenameTable?: (ctx: RenameTableContext) => void;
    /**
     * Exit a parse tree produced by the `renameTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitRenameTable?: (ctx: RenameTableContext) => void;
    /**
     * Enter a parse tree produced by the `setTableProperties`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterSetTableProperties?: (ctx: SetTablePropertiesContext) => void;
    /**
     * Exit a parse tree produced by the `setTableProperties`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitSetTableProperties?: (ctx: SetTablePropertiesContext) => void;
    /**
     * Enter a parse tree produced by the `unsetTableProperties`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterUnsetTableProperties?: (ctx: UnsetTablePropertiesContext) => void;
    /**
     * Exit a parse tree produced by the `unsetTableProperties`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitUnsetTableProperties?: (ctx: UnsetTablePropertiesContext) => void;
    /**
     * Enter a parse tree produced by the `alterTableAlterColumn`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterAlterTableAlterColumn?: (ctx: AlterTableAlterColumnContext) => void;
    /**
     * Exit a parse tree produced by the `alterTableAlterColumn`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitAlterTableAlterColumn?: (ctx: AlterTableAlterColumnContext) => void;
    /**
     * Enter a parse tree produced by the `hiveChangeColumn`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterHiveChangeColumn?: (ctx: HiveChangeColumnContext) => void;
    /**
     * Exit a parse tree produced by the `hiveChangeColumn`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitHiveChangeColumn?: (ctx: HiveChangeColumnContext) => void;
    /**
     * Enter a parse tree produced by the `hiveReplaceColumns`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterHiveReplaceColumns?: (ctx: HiveReplaceColumnsContext) => void;
    /**
     * Exit a parse tree produced by the `hiveReplaceColumns`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitHiveReplaceColumns?: (ctx: HiveReplaceColumnsContext) => void;
    /**
     * Enter a parse tree produced by the `setTableSerDe`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterSetTableSerDe?: (ctx: SetTableSerDeContext) => void;
    /**
     * Exit a parse tree produced by the `setTableSerDe`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitSetTableSerDe?: (ctx: SetTableSerDeContext) => void;
    /**
     * Enter a parse tree produced by the `setTableSerDeProperties`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterSetTableSerDeProperties?: (ctx: SetTableSerDePropertiesContext) => void;
    /**
     * Exit a parse tree produced by the `setTableSerDeProperties`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitSetTableSerDeProperties?: (ctx: SetTableSerDePropertiesContext) => void;
    /**
     * Enter a parse tree produced by the `addTablePartition`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterAddTablePartition?: (ctx: AddTablePartitionContext) => void;
    /**
     * Exit a parse tree produced by the `addTablePartition`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitAddTablePartition?: (ctx: AddTablePartitionContext) => void;
    /**
     * Enter a parse tree produced by the `renameTablePartition`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterRenameTablePartition?: (ctx: RenameTablePartitionContext) => void;
    /**
     * Exit a parse tree produced by the `renameTablePartition`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitRenameTablePartition?: (ctx: RenameTablePartitionContext) => void;
    /**
     * Enter a parse tree produced by the `dropTablePartitions`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterDropTablePartitions?: (ctx: DropTablePartitionsContext) => void;
    /**
     * Exit a parse tree produced by the `dropTablePartitions`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitDropTablePartitions?: (ctx: DropTablePartitionsContext) => void;
    /**
     * Enter a parse tree produced by the `setTableLocation`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterSetTableLocation?: (ctx: SetTableLocationContext) => void;
    /**
     * Exit a parse tree produced by the `setTableLocation`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitSetTableLocation?: (ctx: SetTableLocationContext) => void;
    /**
     * Enter a parse tree produced by the `recoverPartitions`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterRecoverPartitions?: (ctx: RecoverPartitionsContext) => void;
    /**
     * Exit a parse tree produced by the `recoverPartitions`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitRecoverPartitions?: (ctx: RecoverPartitionsContext) => void;
    /**
     * Enter a parse tree produced by the `alterMaterializedViewRewrite`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterAlterMaterializedViewRewrite?: (ctx: AlterMaterializedViewRewriteContext) => void;
    /**
     * Exit a parse tree produced by the `alterMaterializedViewRewrite`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitAlterMaterializedViewRewrite?: (ctx: AlterMaterializedViewRewriteContext) => void;
    /**
     * Enter a parse tree produced by the `alterMaterializedViewProperties`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterAlterMaterializedViewProperties?: (ctx: AlterMaterializedViewPropertiesContext) => void;
    /**
     * Exit a parse tree produced by the `alterMaterializedViewProperties`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitAlterMaterializedViewProperties?: (ctx: AlterMaterializedViewPropertiesContext) => void;
    /**
     * Enter a parse tree produced by the `dropTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterDropTable?: (ctx: DropTableContext) => void;
    /**
     * Exit a parse tree produced by the `dropTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitDropTable?: (ctx: DropTableContext) => void;
    /**
     * Enter a parse tree produced by the `dropView`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterDropView?: (ctx: DropViewContext) => void;
    /**
     * Exit a parse tree produced by the `dropView`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitDropView?: (ctx: DropViewContext) => void;
    /**
     * Enter a parse tree produced by the `dropMaterializedView`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterDropMaterializedView?: (ctx: DropMaterializedViewContext) => void;
    /**
     * Exit a parse tree produced by the `dropMaterializedView`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitDropMaterializedView?: (ctx: DropMaterializedViewContext) => void;
    /**
     * Enter a parse tree produced by the `createView`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateView?: (ctx: CreateViewContext) => void;
    /**
     * Exit a parse tree produced by the `createView`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateView?: (ctx: CreateViewContext) => void;
    /**
     * Enter a parse tree produced by the `createTempViewUsing`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateTempViewUsing?: (ctx: CreateTempViewUsingContext) => void;
    /**
     * Exit a parse tree produced by the `createTempViewUsing`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateTempViewUsing?: (ctx: CreateTempViewUsingContext) => void;
    /**
     * Enter a parse tree produced by the `alterViewQuery`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterAlterViewQuery?: (ctx: AlterViewQueryContext) => void;
    /**
     * Exit a parse tree produced by the `alterViewQuery`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitAlterViewQuery?: (ctx: AlterViewQueryContext) => void;
    /**
     * Enter a parse tree produced by the `createFunction`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateFunction?: (ctx: CreateFunctionContext) => void;
    /**
     * Exit a parse tree produced by the `createFunction`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateFunction?: (ctx: CreateFunctionContext) => void;
    /**
     * Enter a parse tree produced by the `createMaterializedView`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => void;
    /**
     * Exit a parse tree produced by the `createMaterializedView`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => void;
    /**
     * Enter a parse tree produced by the `dropFunction`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterDropFunction?: (ctx: DropFunctionContext) => void;
    /**
     * Exit a parse tree produced by the `dropFunction`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitDropFunction?: (ctx: DropFunctionContext) => void;
    /**
     * Enter a parse tree produced by the `declareVariable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterDeclareVariable?: (ctx: DeclareVariableContext) => void;
    /**
     * Exit a parse tree produced by the `declareVariable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitDeclareVariable?: (ctx: DeclareVariableContext) => void;
    /**
     * Enter a parse tree produced by the `dropVariable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterDropVariable?: (ctx: DropVariableContext) => void;
    /**
     * Exit a parse tree produced by the `dropVariable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitDropVariable?: (ctx: DropVariableContext) => void;
    /**
     * Enter a parse tree produced by the `explainStatement`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterExplainStatement?: (ctx: ExplainStatementContext) => void;
    /**
     * Exit a parse tree produced by the `explainStatement`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitExplainStatement?: (ctx: ExplainStatementContext) => void;
    /**
     * Enter a parse tree produced by the `showTables`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterShowTables?: (ctx: ShowTablesContext) => void;
    /**
     * Exit a parse tree produced by the `showTables`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitShowTables?: (ctx: ShowTablesContext) => void;
    /**
     * Enter a parse tree produced by the `showTableExtended`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterShowTableExtended?: (ctx: ShowTableExtendedContext) => void;
    /**
     * Exit a parse tree produced by the `showTableExtended`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitShowTableExtended?: (ctx: ShowTableExtendedContext) => void;
    /**
     * Enter a parse tree produced by the `showTblProperties`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterShowTblProperties?: (ctx: ShowTblPropertiesContext) => void;
    /**
     * Exit a parse tree produced by the `showTblProperties`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitShowTblProperties?: (ctx: ShowTblPropertiesContext) => void;
    /**
     * Enter a parse tree produced by the `showColumns`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterShowColumns?: (ctx: ShowColumnsContext) => void;
    /**
     * Exit a parse tree produced by the `showColumns`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitShowColumns?: (ctx: ShowColumnsContext) => void;
    /**
     * Enter a parse tree produced by the `showViews`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterShowViews?: (ctx: ShowViewsContext) => void;
    /**
     * Exit a parse tree produced by the `showViews`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitShowViews?: (ctx: ShowViewsContext) => void;
    /**
     * Enter a parse tree produced by the `showPartitions`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterShowPartitions?: (ctx: ShowPartitionsContext) => void;
    /**
     * Exit a parse tree produced by the `showPartitions`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitShowPartitions?: (ctx: ShowPartitionsContext) => void;
    /**
     * Enter a parse tree produced by the `showFunctions`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterShowFunctions?: (ctx: ShowFunctionsContext) => void;
    /**
     * Exit a parse tree produced by the `showFunctions`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitShowFunctions?: (ctx: ShowFunctionsContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterShowCreateTable?: (ctx: ShowCreateTableContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitShowCreateTable?: (ctx: ShowCreateTableContext) => void;
    /**
     * Enter a parse tree produced by the `showCurrentNamespace`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterShowCurrentNamespace?: (ctx: ShowCurrentNamespaceContext) => void;
    /**
     * Exit a parse tree produced by the `showCurrentNamespace`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitShowCurrentNamespace?: (ctx: ShowCurrentNamespaceContext) => void;
    /**
     * Enter a parse tree produced by the `showCatalogs`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterShowCatalogs?: (ctx: ShowCatalogsContext) => void;
    /**
     * Exit a parse tree produced by the `showCatalogs`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitShowCatalogs?: (ctx: ShowCatalogsContext) => void;
    /**
     * Enter a parse tree produced by the `showMaterializedViews`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterShowMaterializedViews?: (ctx: ShowMaterializedViewsContext) => void;
    /**
     * Exit a parse tree produced by the `showMaterializedViews`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitShowMaterializedViews?: (ctx: ShowMaterializedViewsContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateMaterializedView`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterShowCreateMaterializedView?: (ctx: ShowCreateMaterializedViewContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateMaterializedView`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitShowCreateMaterializedView?: (ctx: ShowCreateMaterializedViewContext) => void;
    /**
     * Enter a parse tree produced by the `describeFunction`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterDescribeFunction?: (ctx: DescribeFunctionContext) => void;
    /**
     * Exit a parse tree produced by the `describeFunction`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitDescribeFunction?: (ctx: DescribeFunctionContext) => void;
    /**
     * Enter a parse tree produced by the `describeNamespace`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterDescribeNamespace?: (ctx: DescribeNamespaceContext) => void;
    /**
     * Exit a parse tree produced by the `describeNamespace`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitDescribeNamespace?: (ctx: DescribeNamespaceContext) => void;
    /**
     * Enter a parse tree produced by the `describeRelation`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterDescribeRelation?: (ctx: DescribeRelationContext) => void;
    /**
     * Exit a parse tree produced by the `describeRelation`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitDescribeRelation?: (ctx: DescribeRelationContext) => void;
    /**
     * Enter a parse tree produced by the `describeQuery`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterDescribeQuery?: (ctx: DescribeQueryContext) => void;
    /**
     * Exit a parse tree produced by the `describeQuery`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitDescribeQuery?: (ctx: DescribeQueryContext) => void;
    /**
     * Enter a parse tree produced by the `commentNamespace`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterCommentNamespace?: (ctx: CommentNamespaceContext) => void;
    /**
     * Exit a parse tree produced by the `commentNamespace`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitCommentNamespace?: (ctx: CommentNamespaceContext) => void;
    /**
     * Enter a parse tree produced by the `commentTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterCommentTable?: (ctx: CommentTableContext) => void;
    /**
     * Exit a parse tree produced by the `commentTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitCommentTable?: (ctx: CommentTableContext) => void;
    /**
     * Enter a parse tree produced by the `refreshTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterRefreshTable?: (ctx: RefreshTableContext) => void;
    /**
     * Exit a parse tree produced by the `refreshTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitRefreshTable?: (ctx: RefreshTableContext) => void;
    /**
     * Enter a parse tree produced by the `refreshFunction`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterRefreshFunction?: (ctx: RefreshFunctionContext) => void;
    /**
     * Exit a parse tree produced by the `refreshFunction`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitRefreshFunction?: (ctx: RefreshFunctionContext) => void;
    /**
     * Enter a parse tree produced by the `refreshResource`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterRefreshResource?: (ctx: RefreshResourceContext) => void;
    /**
     * Exit a parse tree produced by the `refreshResource`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitRefreshResource?: (ctx: RefreshResourceContext) => void;
    /**
     * Enter a parse tree produced by the `refreshMaterializedView`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterRefreshMaterializedView?: (ctx: RefreshMaterializedViewContext) => void;
    /**
     * Exit a parse tree produced by the `refreshMaterializedView`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitRefreshMaterializedView?: (ctx: RefreshMaterializedViewContext) => void;
    /**
     * Enter a parse tree produced by the `cacheTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterCacheTable?: (ctx: CacheTableContext) => void;
    /**
     * Exit a parse tree produced by the `cacheTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitCacheTable?: (ctx: CacheTableContext) => void;
    /**
     * Enter a parse tree produced by the `unCacheTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterUnCacheTable?: (ctx: UnCacheTableContext) => void;
    /**
     * Exit a parse tree produced by the `unCacheTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitUnCacheTable?: (ctx: UnCacheTableContext) => void;
    /**
     * Enter a parse tree produced by the `clearCache`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterClearCache?: (ctx: ClearCacheContext) => void;
    /**
     * Exit a parse tree produced by the `clearCache`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitClearCache?: (ctx: ClearCacheContext) => void;
    /**
     * Enter a parse tree produced by the `loadData`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterLoadData?: (ctx: LoadDataContext) => void;
    /**
     * Exit a parse tree produced by the `loadData`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitLoadData?: (ctx: LoadDataContext) => void;
    /**
     * Enter a parse tree produced by the `truncateTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterTruncateTable?: (ctx: TruncateTableContext) => void;
    /**
     * Exit a parse tree produced by the `truncateTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitTruncateTable?: (ctx: TruncateTableContext) => void;
    /**
     * Enter a parse tree produced by the `repairTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterRepairTable?: (ctx: RepairTableContext) => void;
    /**
     * Exit a parse tree produced by the `repairTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitRepairTable?: (ctx: RepairTableContext) => void;
    /**
     * Enter a parse tree produced by the `manageResource`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterManageResource?: (ctx: ManageResourceContext) => void;
    /**
     * Exit a parse tree produced by the `manageResource`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitManageResource?: (ctx: ManageResourceContext) => void;
    /**
     * Enter a parse tree produced by the `failNativeCommand`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterFailNativeCommand?: (ctx: FailNativeCommandContext) => void;
    /**
     * Exit a parse tree produced by the `failNativeCommand`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitFailNativeCommand?: (ctx: FailNativeCommandContext) => void;
    /**
     * Enter a parse tree produced by the `setTimeZoneInterval`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterSetTimeZoneInterval?: (ctx: SetTimeZoneIntervalContext) => void;
    /**
     * Exit a parse tree produced by the `setTimeZoneInterval`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitSetTimeZoneInterval?: (ctx: SetTimeZoneIntervalContext) => void;
    /**
     * Enter a parse tree produced by the `setTimeZone`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterSetTimeZone?: (ctx: SetTimeZoneContext) => void;
    /**
     * Exit a parse tree produced by the `setTimeZone`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitSetTimeZone?: (ctx: SetTimeZoneContext) => void;
    /**
     * Enter a parse tree produced by the `setTimeZoneAny`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterSetTimeZoneAny?: (ctx: SetTimeZoneAnyContext) => void;
    /**
     * Exit a parse tree produced by the `setTimeZoneAny`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitSetTimeZoneAny?: (ctx: SetTimeZoneAnyContext) => void;
    /**
     * Enter a parse tree produced by the `setVariableAssignment`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterSetVariableAssignment?: (ctx: SetVariableAssignmentContext) => void;
    /**
     * Exit a parse tree produced by the `setVariableAssignment`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitSetVariableAssignment?: (ctx: SetVariableAssignmentContext) => void;
    /**
     * Enter a parse tree produced by the `setVariableMultiAssignment`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterSetVariableMultiAssignment?: (ctx: SetVariableMultiAssignmentContext) => void;
    /**
     * Exit a parse tree produced by the `setVariableMultiAssignment`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitSetVariableMultiAssignment?: (ctx: SetVariableMultiAssignmentContext) => void;
    /**
     * Enter a parse tree produced by the `setConfig`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterSetConfig?: (ctx: SetConfigContext) => void;
    /**
     * Exit a parse tree produced by the `setConfig`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitSetConfig?: (ctx: SetConfigContext) => void;
    /**
     * Enter a parse tree produced by the `setConfigAndValue`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterSetConfigAndValue?: (ctx: SetConfigAndValueContext) => void;
    /**
     * Exit a parse tree produced by the `setConfigAndValue`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitSetConfigAndValue?: (ctx: SetConfigAndValueContext) => void;
    /**
     * Enter a parse tree produced by the `setConfigAnyKey`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterSetConfigAnyKey?: (ctx: SetConfigAnyKeyContext) => void;
    /**
     * Exit a parse tree produced by the `setConfigAnyKey`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitSetConfigAnyKey?: (ctx: SetConfigAnyKeyContext) => void;
    /**
     * Enter a parse tree produced by the `setAny`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterSetAny?: (ctx: SetAnyContext) => void;
    /**
     * Exit a parse tree produced by the `setAny`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitSetAny?: (ctx: SetAnyContext) => void;
    /**
     * Enter a parse tree produced by the `resetConfig`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterResetConfig?: (ctx: ResetConfigContext) => void;
    /**
     * Exit a parse tree produced by the `resetConfig`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitResetConfig?: (ctx: ResetConfigContext) => void;
    /**
     * Enter a parse tree produced by the `resetAny`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterResetAny?: (ctx: ResetAnyContext) => void;
    /**
     * Exit a parse tree produced by the `resetAny`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitResetAny?: (ctx: ResetAnyContext) => void;
    /**
     * Enter a parse tree produced by the `createIndex`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateIndex?: (ctx: CreateIndexContext) => void;
    /**
     * Exit a parse tree produced by the `createIndex`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateIndex?: (ctx: CreateIndexContext) => void;
    /**
     * Enter a parse tree produced by the `dropIndex`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterDropIndex?: (ctx: DropIndexContext) => void;
    /**
     * Exit a parse tree produced by the `dropIndex`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitDropIndex?: (ctx: DropIndexContext) => void;
    /**
     * Enter a parse tree produced by the `optimizeTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterOptimizeTable?: (ctx: OptimizeTableContext) => void;
    /**
     * Exit a parse tree produced by the `optimizeTable`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitOptimizeTable?: (ctx: OptimizeTableContext) => void;
    /**
     * Enter a parse tree produced by the `unsupportHiveCommands`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    enterUnsupportHiveCommands?: (ctx: UnsupportHiveCommandsContext) => void;
    /**
     * Exit a parse tree produced by the `unsupportHiveCommands`
     * labeled alternative in `SQLParser.statement`.
     * @param ctx the parse tree
     */
    exitUnsupportHiveCommands?: (ctx: UnsupportHiveCommandsContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.timezone`.
     * @param ctx the parse tree
     */
    enterTimezone?: (ctx: TimezoneContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.timezone`.
     * @param ctx the parse tree
     */
    exitTimezone?: (ctx: TimezoneContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.configKey`.
     * @param ctx the parse tree
     */
    enterConfigKey?: (ctx: ConfigKeyContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.configKey`.
     * @param ctx the parse tree
     */
    exitConfigKey?: (ctx: ConfigKeyContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.configValue`.
     * @param ctx the parse tree
     */
    enterConfigValue?: (ctx: ConfigValueContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.configValue`.
     * @param ctx the parse tree
     */
    exitConfigValue?: (ctx: ConfigValueContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.unsupportedHiveNativeCommands`.
     * @param ctx the parse tree
     */
    enterUnsupportedHiveNativeCommands?: (ctx: UnsupportedHiveNativeCommandsContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.unsupportedHiveNativeCommands`.
     * @param ctx the parse tree
     */
    exitUnsupportedHiveNativeCommands?: (ctx: UnsupportedHiveNativeCommandsContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.createTableHeader`.
     * @param ctx the parse tree
     */
    enterCreateTableHeader?: (ctx: CreateTableHeaderContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.createTableHeader`.
     * @param ctx the parse tree
     */
    exitCreateTableHeader?: (ctx: CreateTableHeaderContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.replaceTableHeader`.
     * @param ctx the parse tree
     */
    enterReplaceTableHeader?: (ctx: ReplaceTableHeaderContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.replaceTableHeader`.
     * @param ctx the parse tree
     */
    exitReplaceTableHeader?: (ctx: ReplaceTableHeaderContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.bucketSpec`.
     * @param ctx the parse tree
     */
    enterBucketSpec?: (ctx: BucketSpecContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.bucketSpec`.
     * @param ctx the parse tree
     */
    exitBucketSpec?: (ctx: BucketSpecContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.skewSpec`.
     * @param ctx the parse tree
     */
    enterSkewSpec?: (ctx: SkewSpecContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.skewSpec`.
     * @param ctx the parse tree
     */
    exitSkewSpec?: (ctx: SkewSpecContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.locationSpec`.
     * @param ctx the parse tree
     */
    enterLocationSpec?: (ctx: LocationSpecContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.locationSpec`.
     * @param ctx the parse tree
     */
    exitLocationSpec?: (ctx: LocationSpecContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.commentSpec`.
     * @param ctx the parse tree
     */
    enterCommentSpec?: (ctx: CommentSpecContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.commentSpec`.
     * @param ctx the parse tree
     */
    exitCommentSpec?: (ctx: CommentSpecContext) => void;
    /**
     * Enter a parse tree produced by the `queryStatement`
     * labeled alternative in `SQLParser.query`.
     * @param ctx the parse tree
     */
    enterQueryStatement?: (ctx: QueryStatementContext) => void;
    /**
     * Exit a parse tree produced by the `queryStatement`
     * labeled alternative in `SQLParser.query`.
     * @param ctx the parse tree
     */
    exitQueryStatement?: (ctx: QueryStatementContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.insertInto`.
     * @param ctx the parse tree
     */
    enterInsertInto?: (ctx: InsertIntoContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.insertInto`.
     * @param ctx the parse tree
     */
    exitInsertInto?: (ctx: InsertIntoContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.partitionSpecLocation`.
     * @param ctx the parse tree
     */
    enterPartitionSpecLocation?: (ctx: PartitionSpecLocationContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.partitionSpecLocation`.
     * @param ctx the parse tree
     */
    exitPartitionSpecLocation?: (ctx: PartitionSpecLocationContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.partitionSpec`.
     * @param ctx the parse tree
     */
    enterPartitionSpec?: (ctx: PartitionSpecContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.partitionSpec`.
     * @param ctx the parse tree
     */
    exitPartitionSpec?: (ctx: PartitionSpecContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.partitionVal`.
     * @param ctx the parse tree
     */
    enterPartitionVal?: (ctx: PartitionValContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.partitionVal`.
     * @param ctx the parse tree
     */
    exitPartitionVal?: (ctx: PartitionValContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.namespace`.
     * @param ctx the parse tree
     */
    enterNamespace?: (ctx: NamespaceContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.namespace`.
     * @param ctx the parse tree
     */
    exitNamespace?: (ctx: NamespaceContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.namespaces`.
     * @param ctx the parse tree
     */
    enterNamespaces?: (ctx: NamespacesContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.namespaces`.
     * @param ctx the parse tree
     */
    exitNamespaces?: (ctx: NamespacesContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.describeFuncName`.
     * @param ctx the parse tree
     */
    enterDescribeFuncName?: (ctx: DescribeFuncNameContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.describeFuncName`.
     * @param ctx the parse tree
     */
    exitDescribeFuncName?: (ctx: DescribeFuncNameContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.describeColName`.
     * @param ctx the parse tree
     */
    enterDescribeColName?: (ctx: DescribeColNameContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.describeColName`.
     * @param ctx the parse tree
     */
    exitDescribeColName?: (ctx: DescribeColNameContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.ctes`.
     * @param ctx the parse tree
     */
    enterCtes?: (ctx: CtesContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.ctes`.
     * @param ctx the parse tree
     */
    exitCtes?: (ctx: CtesContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.namedQuery`.
     * @param ctx the parse tree
     */
    enterNamedQuery?: (ctx: NamedQueryContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.namedQuery`.
     * @param ctx the parse tree
     */
    exitNamedQuery?: (ctx: NamedQueryContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.tableProvider`.
     * @param ctx the parse tree
     */
    enterTableProvider?: (ctx: TableProviderContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.tableProvider`.
     * @param ctx the parse tree
     */
    exitTableProvider?: (ctx: TableProviderContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.createTableClauses`.
     * @param ctx the parse tree
     */
    enterCreateTableClauses?: (ctx: CreateTableClausesContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.createTableClauses`.
     * @param ctx the parse tree
     */
    exitCreateTableClauses?: (ctx: CreateTableClausesContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.propertyList`.
     * @param ctx the parse tree
     */
    enterPropertyList?: (ctx: PropertyListContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.propertyList`.
     * @param ctx the parse tree
     */
    exitPropertyList?: (ctx: PropertyListContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.property`.
     * @param ctx the parse tree
     */
    enterProperty?: (ctx: PropertyContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.property`.
     * @param ctx the parse tree
     */
    exitProperty?: (ctx: PropertyContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.propertyKey`.
     * @param ctx the parse tree
     */
    enterPropertyKey?: (ctx: PropertyKeyContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.propertyKey`.
     * @param ctx the parse tree
     */
    exitPropertyKey?: (ctx: PropertyKeyContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.propertyValue`.
     * @param ctx the parse tree
     */
    enterPropertyValue?: (ctx: PropertyValueContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.propertyValue`.
     * @param ctx the parse tree
     */
    exitPropertyValue?: (ctx: PropertyValueContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.expressionPropertyList`.
     * @param ctx the parse tree
     */
    enterExpressionPropertyList?: (ctx: ExpressionPropertyListContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.expressionPropertyList`.
     * @param ctx the parse tree
     */
    exitExpressionPropertyList?: (ctx: ExpressionPropertyListContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.expressionProperty`.
     * @param ctx the parse tree
     */
    enterExpressionProperty?: (ctx: ExpressionPropertyContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.expressionProperty`.
     * @param ctx the parse tree
     */
    exitExpressionProperty?: (ctx: ExpressionPropertyContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.constantList`.
     * @param ctx the parse tree
     */
    enterConstantList?: (ctx: ConstantListContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.constantList`.
     * @param ctx the parse tree
     */
    exitConstantList?: (ctx: ConstantListContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.nestedConstantList`.
     * @param ctx the parse tree
     */
    enterNestedConstantList?: (ctx: NestedConstantListContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.nestedConstantList`.
     * @param ctx the parse tree
     */
    exitNestedConstantList?: (ctx: NestedConstantListContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.createFileFormat`.
     * @param ctx the parse tree
     */
    enterCreateFileFormat?: (ctx: CreateFileFormatContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.createFileFormat`.
     * @param ctx the parse tree
     */
    exitCreateFileFormat?: (ctx: CreateFileFormatContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.fileFormat`.
     * @param ctx the parse tree
     */
    enterFileFormat?: (ctx: FileFormatContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.fileFormat`.
     * @param ctx the parse tree
     */
    exitFileFormat?: (ctx: FileFormatContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.storageHandler`.
     * @param ctx the parse tree
     */
    enterStorageHandler?: (ctx: StorageHandlerContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.storageHandler`.
     * @param ctx the parse tree
     */
    exitStorageHandler?: (ctx: StorageHandlerContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.resource`.
     * @param ctx the parse tree
     */
    enterResource?: (ctx: ResourceContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.resource`.
     * @param ctx the parse tree
     */
    exitResource?: (ctx: ResourceContext) => void;
    /**
     * Enter a parse tree produced by the `insertFromQuery`
     * labeled alternative in `SQLParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     */
    enterInsertFromQuery?: (ctx: InsertFromQueryContext) => void;
    /**
     * Exit a parse tree produced by the `insertFromQuery`
     * labeled alternative in `SQLParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     */
    exitInsertFromQuery?: (ctx: InsertFromQueryContext) => void;
    /**
     * Enter a parse tree produced by the `multipleInsert`
     * labeled alternative in `SQLParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     */
    enterMultipleInsert?: (ctx: MultipleInsertContext) => void;
    /**
     * Exit a parse tree produced by the `multipleInsert`
     * labeled alternative in `SQLParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     */
    exitMultipleInsert?: (ctx: MultipleInsertContext) => void;
    /**
     * Enter a parse tree produced by the `deleteFromTable`
     * labeled alternative in `SQLParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     */
    enterDeleteFromTable?: (ctx: DeleteFromTableContext) => void;
    /**
     * Exit a parse tree produced by the `deleteFromTable`
     * labeled alternative in `SQLParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     */
    exitDeleteFromTable?: (ctx: DeleteFromTableContext) => void;
    /**
     * Enter a parse tree produced by the `updateTable`
     * labeled alternative in `SQLParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     */
    enterUpdateTable?: (ctx: UpdateTableContext) => void;
    /**
     * Exit a parse tree produced by the `updateTable`
     * labeled alternative in `SQLParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     */
    exitUpdateTable?: (ctx: UpdateTableContext) => void;
    /**
     * Enter a parse tree produced by the `mergeIntoTable`
     * labeled alternative in `SQLParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     */
    enterMergeIntoTable?: (ctx: MergeIntoTableContext) => void;
    /**
     * Exit a parse tree produced by the `mergeIntoTable`
     * labeled alternative in `SQLParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     */
    exitMergeIntoTable?: (ctx: MergeIntoTableContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.namespaceName`.
     * @param ctx the parse tree
     */
    enterNamespaceName?: (ctx: NamespaceNameContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.namespaceName`.
     * @param ctx the parse tree
     */
    exitNamespaceName?: (ctx: NamespaceNameContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.namespaceNameCreate`.
     * @param ctx the parse tree
     */
    enterNamespaceNameCreate?: (ctx: NamespaceNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.namespaceNameCreate`.
     * @param ctx the parse tree
     */
    exitNamespaceNameCreate?: (ctx: NamespaceNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.tableNameCreate`.
     * @param ctx the parse tree
     */
    enterTableNameCreate?: (ctx: TableNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.tableNameCreate`.
     * @param ctx the parse tree
     */
    exitTableNameCreate?: (ctx: TableNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.tableName`.
     * @param ctx the parse tree
     */
    enterTableName?: (ctx: TableNameContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.tableName`.
     * @param ctx the parse tree
     */
    exitTableName?: (ctx: TableNameContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.viewNameCreate`.
     * @param ctx the parse tree
     */
    enterViewNameCreate?: (ctx: ViewNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.viewNameCreate`.
     * @param ctx the parse tree
     */
    exitViewNameCreate?: (ctx: ViewNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.viewName`.
     * @param ctx the parse tree
     */
    enterViewName?: (ctx: ViewNameContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.viewName`.
     * @param ctx the parse tree
     */
    exitViewName?: (ctx: ViewNameContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.columnName`.
     * @param ctx the parse tree
     */
    enterColumnName?: (ctx: ColumnNameContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.columnName`.
     * @param ctx the parse tree
     */
    exitColumnName?: (ctx: ColumnNameContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.columnNameSeq`.
     * @param ctx the parse tree
     */
    enterColumnNameSeq?: (ctx: ColumnNameSeqContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.columnNameSeq`.
     * @param ctx the parse tree
     */
    exitColumnNameSeq?: (ctx: ColumnNameSeqContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.columnNameCreate`.
     * @param ctx the parse tree
     */
    enterColumnNameCreate?: (ctx: ColumnNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.columnNameCreate`.
     * @param ctx the parse tree
     */
    exitColumnNameCreate?: (ctx: ColumnNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.identifierReference`.
     * @param ctx the parse tree
     */
    enterIdentifierReference?: (ctx: IdentifierReferenceContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.identifierReference`.
     * @param ctx the parse tree
     */
    exitIdentifierReference?: (ctx: IdentifierReferenceContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.queryOrganization`.
     * @param ctx the parse tree
     */
    enterQueryOrganization?: (ctx: QueryOrganizationContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.queryOrganization`.
     * @param ctx the parse tree
     */
    exitQueryOrganization?: (ctx: QueryOrganizationContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.multiInsertQueryBody`.
     * @param ctx the parse tree
     */
    enterMultiInsertQueryBody?: (ctx: MultiInsertQueryBodyContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.multiInsertQueryBody`.
     * @param ctx the parse tree
     */
    exitMultiInsertQueryBody?: (ctx: MultiInsertQueryBodyContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.queryTerm`.
     * @param ctx the parse tree
     */
    enterQueryTerm?: (ctx: QueryTermContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.queryTerm`.
     * @param ctx the parse tree
     */
    exitQueryTerm?: (ctx: QueryTermContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.queryPrimary`.
     * @param ctx the parse tree
     */
    enterQueryPrimary?: (ctx: QueryPrimaryContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.queryPrimary`.
     * @param ctx the parse tree
     */
    exitQueryPrimary?: (ctx: QueryPrimaryContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.sortItem`.
     * @param ctx the parse tree
     */
    enterSortItem?: (ctx: SortItemContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.sortItem`.
     * @param ctx the parse tree
     */
    exitSortItem?: (ctx: SortItemContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.fromStatement`.
     * @param ctx the parse tree
     */
    enterFromStatement?: (ctx: FromStatementContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.fromStatement`.
     * @param ctx the parse tree
     */
    exitFromStatement?: (ctx: FromStatementContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.fromStatementBody`.
     * @param ctx the parse tree
     */
    enterFromStatementBody?: (ctx: FromStatementBodyContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.fromStatementBody`.
     * @param ctx the parse tree
     */
    exitFromStatementBody?: (ctx: FromStatementBodyContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.querySpecification`.
     * @param ctx the parse tree
     */
    enterQuerySpecification?: (ctx: QuerySpecificationContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.querySpecification`.
     * @param ctx the parse tree
     */
    exitQuerySpecification?: (ctx: QuerySpecificationContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.transformClause`.
     * @param ctx the parse tree
     */
    enterTransformClause?: (ctx: TransformClauseContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.transformClause`.
     * @param ctx the parse tree
     */
    exitTransformClause?: (ctx: TransformClauseContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.selectClause`.
     * @param ctx the parse tree
     */
    enterSelectClause?: (ctx: SelectClauseContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.selectClause`.
     * @param ctx the parse tree
     */
    exitSelectClause?: (ctx: SelectClauseContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.setClause`.
     * @param ctx the parse tree
     */
    enterSetClause?: (ctx: SetClauseContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.setClause`.
     * @param ctx the parse tree
     */
    exitSetClause?: (ctx: SetClauseContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.matchedClause`.
     * @param ctx the parse tree
     */
    enterMatchedClause?: (ctx: MatchedClauseContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.matchedClause`.
     * @param ctx the parse tree
     */
    exitMatchedClause?: (ctx: MatchedClauseContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.notMatchedClause`.
     * @param ctx the parse tree
     */
    enterNotMatchedClause?: (ctx: NotMatchedClauseContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.notMatchedClause`.
     * @param ctx the parse tree
     */
    exitNotMatchedClause?: (ctx: NotMatchedClauseContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.notMatchedBySourceClause`.
     * @param ctx the parse tree
     */
    enterNotMatchedBySourceClause?: (ctx: NotMatchedBySourceClauseContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.notMatchedBySourceClause`.
     * @param ctx the parse tree
     */
    exitNotMatchedBySourceClause?: (ctx: NotMatchedBySourceClauseContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.matchedAction`.
     * @param ctx the parse tree
     */
    enterMatchedAction?: (ctx: MatchedActionContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.matchedAction`.
     * @param ctx the parse tree
     */
    exitMatchedAction?: (ctx: MatchedActionContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.notMatchedAction`.
     * @param ctx the parse tree
     */
    enterNotMatchedAction?: (ctx: NotMatchedActionContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.notMatchedAction`.
     * @param ctx the parse tree
     */
    exitNotMatchedAction?: (ctx: NotMatchedActionContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.notMatchedBySourceAction`.
     * @param ctx the parse tree
     */
    enterNotMatchedBySourceAction?: (ctx: NotMatchedBySourceActionContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.notMatchedBySourceAction`.
     * @param ctx the parse tree
     */
    exitNotMatchedBySourceAction?: (ctx: NotMatchedBySourceActionContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.assignmentList`.
     * @param ctx the parse tree
     */
    enterAssignmentList?: (ctx: AssignmentListContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.assignmentList`.
     * @param ctx the parse tree
     */
    exitAssignmentList?: (ctx: AssignmentListContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.assignment`.
     * @param ctx the parse tree
     */
    enterAssignment?: (ctx: AssignmentContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.assignment`.
     * @param ctx the parse tree
     */
    exitAssignment?: (ctx: AssignmentContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.whereClause`.
     * @param ctx the parse tree
     */
    enterWhereClause?: (ctx: WhereClauseContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.whereClause`.
     * @param ctx the parse tree
     */
    exitWhereClause?: (ctx: WhereClauseContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.havingClause`.
     * @param ctx the parse tree
     */
    enterHavingClause?: (ctx: HavingClauseContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.havingClause`.
     * @param ctx the parse tree
     */
    exitHavingClause?: (ctx: HavingClauseContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.hint`.
     * @param ctx the parse tree
     */
    enterHint?: (ctx: HintContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.hint`.
     * @param ctx the parse tree
     */
    exitHint?: (ctx: HintContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.hintStatement`.
     * @param ctx the parse tree
     */
    enterHintStatement?: (ctx: HintStatementContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.hintStatement`.
     * @param ctx the parse tree
     */
    exitHintStatement?: (ctx: HintStatementContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.fromClause`.
     * @param ctx the parse tree
     */
    enterFromClause?: (ctx: FromClauseContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.fromClause`.
     * @param ctx the parse tree
     */
    exitFromClause?: (ctx: FromClauseContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.functionKind`.
     * @param ctx the parse tree
     */
    enterFunctionKind?: (ctx: FunctionKindContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.functionKind`.
     * @param ctx the parse tree
     */
    exitFunctionKind?: (ctx: FunctionKindContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.temporalClause`.
     * @param ctx the parse tree
     */
    enterTemporalClause?: (ctx: TemporalClauseContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.temporalClause`.
     * @param ctx the parse tree
     */
    exitTemporalClause?: (ctx: TemporalClauseContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.aggregationClause`.
     * @param ctx the parse tree
     */
    enterAggregationClause?: (ctx: AggregationClauseContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.aggregationClause`.
     * @param ctx the parse tree
     */
    exitAggregationClause?: (ctx: AggregationClauseContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.groupByClause`.
     * @param ctx the parse tree
     */
    enterGroupByClause?: (ctx: GroupByClauseContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.groupByClause`.
     * @param ctx the parse tree
     */
    exitGroupByClause?: (ctx: GroupByClauseContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.groupingAnalytics`.
     * @param ctx the parse tree
     */
    enterGroupingAnalytics?: (ctx: GroupingAnalyticsContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.groupingAnalytics`.
     * @param ctx the parse tree
     */
    exitGroupingAnalytics?: (ctx: GroupingAnalyticsContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.groupingElement`.
     * @param ctx the parse tree
     */
    enterGroupingElement?: (ctx: GroupingElementContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.groupingElement`.
     * @param ctx the parse tree
     */
    exitGroupingElement?: (ctx: GroupingElementContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.groupingSet`.
     * @param ctx the parse tree
     */
    enterGroupingSet?: (ctx: GroupingSetContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.groupingSet`.
     * @param ctx the parse tree
     */
    exitGroupingSet?: (ctx: GroupingSetContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.pivotClause`.
     * @param ctx the parse tree
     */
    enterPivotClause?: (ctx: PivotClauseContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.pivotClause`.
     * @param ctx the parse tree
     */
    exitPivotClause?: (ctx: PivotClauseContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.pivotColumn`.
     * @param ctx the parse tree
     */
    enterPivotColumn?: (ctx: PivotColumnContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.pivotColumn`.
     * @param ctx the parse tree
     */
    exitPivotColumn?: (ctx: PivotColumnContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.pivotValue`.
     * @param ctx the parse tree
     */
    enterPivotValue?: (ctx: PivotValueContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.pivotValue`.
     * @param ctx the parse tree
     */
    exitPivotValue?: (ctx: PivotValueContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.unpivotClause`.
     * @param ctx the parse tree
     */
    enterUnpivotClause?: (ctx: UnpivotClauseContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.unpivotClause`.
     * @param ctx the parse tree
     */
    exitUnpivotClause?: (ctx: UnpivotClauseContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.unpivotNullClause`.
     * @param ctx the parse tree
     */
    enterUnpivotNullClause?: (ctx: UnpivotNullClauseContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.unpivotNullClause`.
     * @param ctx the parse tree
     */
    exitUnpivotNullClause?: (ctx: UnpivotNullClauseContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.unpivotOperator`.
     * @param ctx the parse tree
     */
    enterUnpivotOperator?: (ctx: UnpivotOperatorContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.unpivotOperator`.
     * @param ctx the parse tree
     */
    exitUnpivotOperator?: (ctx: UnpivotOperatorContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.unpivotSingleValueColumnClause`.
     * @param ctx the parse tree
     */
    enterUnpivotSingleValueColumnClause?: (ctx: UnpivotSingleValueColumnClauseContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.unpivotSingleValueColumnClause`.
     * @param ctx the parse tree
     */
    exitUnpivotSingleValueColumnClause?: (ctx: UnpivotSingleValueColumnClauseContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.unpivotMultiValueColumnClause`.
     * @param ctx the parse tree
     */
    enterUnpivotMultiValueColumnClause?: (ctx: UnpivotMultiValueColumnClauseContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.unpivotMultiValueColumnClause`.
     * @param ctx the parse tree
     */
    exitUnpivotMultiValueColumnClause?: (ctx: UnpivotMultiValueColumnClauseContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.unpivotColumnSet`.
     * @param ctx the parse tree
     */
    enterUnpivotColumnSet?: (ctx: UnpivotColumnSetContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.unpivotColumnSet`.
     * @param ctx the parse tree
     */
    exitUnpivotColumnSet?: (ctx: UnpivotColumnSetContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.unpivotValueColumn`.
     * @param ctx the parse tree
     */
    enterUnpivotValueColumn?: (ctx: UnpivotValueColumnContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.unpivotValueColumn`.
     * @param ctx the parse tree
     */
    exitUnpivotValueColumn?: (ctx: UnpivotValueColumnContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.unpivotNameColumn`.
     * @param ctx the parse tree
     */
    enterUnpivotNameColumn?: (ctx: UnpivotNameColumnContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.unpivotNameColumn`.
     * @param ctx the parse tree
     */
    exitUnpivotNameColumn?: (ctx: UnpivotNameColumnContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.unpivotColumnAndAlias`.
     * @param ctx the parse tree
     */
    enterUnpivotColumnAndAlias?: (ctx: UnpivotColumnAndAliasContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.unpivotColumnAndAlias`.
     * @param ctx the parse tree
     */
    exitUnpivotColumnAndAlias?: (ctx: UnpivotColumnAndAliasContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.unpivotColumn`.
     * @param ctx the parse tree
     */
    enterUnpivotColumn?: (ctx: UnpivotColumnContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.unpivotColumn`.
     * @param ctx the parse tree
     */
    exitUnpivotColumn?: (ctx: UnpivotColumnContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.unpivotAlias`.
     * @param ctx the parse tree
     */
    enterUnpivotAlias?: (ctx: UnpivotAliasContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.unpivotAlias`.
     * @param ctx the parse tree
     */
    exitUnpivotAlias?: (ctx: UnpivotAliasContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.ifNotExists`.
     * @param ctx the parse tree
     */
    enterIfNotExists?: (ctx: IfNotExistsContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.ifNotExists`.
     * @param ctx the parse tree
     */
    exitIfNotExists?: (ctx: IfNotExistsContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.ifExists`.
     * @param ctx the parse tree
     */
    enterIfExists?: (ctx: IfExistsContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.ifExists`.
     * @param ctx the parse tree
     */
    exitIfExists?: (ctx: IfExistsContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.lateralView`.
     * @param ctx the parse tree
     */
    enterLateralView?: (ctx: LateralViewContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.lateralView`.
     * @param ctx the parse tree
     */
    exitLateralView?: (ctx: LateralViewContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.setQuantifier`.
     * @param ctx the parse tree
     */
    enterSetQuantifier?: (ctx: SetQuantifierContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.setQuantifier`.
     * @param ctx the parse tree
     */
    exitSetQuantifier?: (ctx: SetQuantifierContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.relation`.
     * @param ctx the parse tree
     */
    enterRelation?: (ctx: RelationContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.relation`.
     * @param ctx the parse tree
     */
    exitRelation?: (ctx: RelationContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.relationExtension`.
     * @param ctx the parse tree
     */
    enterRelationExtension?: (ctx: RelationExtensionContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.relationExtension`.
     * @param ctx the parse tree
     */
    exitRelationExtension?: (ctx: RelationExtensionContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.joinRelation`.
     * @param ctx the parse tree
     */
    enterJoinRelation?: (ctx: JoinRelationContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.joinRelation`.
     * @param ctx the parse tree
     */
    exitJoinRelation?: (ctx: JoinRelationContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.joinType`.
     * @param ctx the parse tree
     */
    enterJoinType?: (ctx: JoinTypeContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.joinType`.
     * @param ctx the parse tree
     */
    exitJoinType?: (ctx: JoinTypeContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.joinCriteria`.
     * @param ctx the parse tree
     */
    enterJoinCriteria?: (ctx: JoinCriteriaContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.joinCriteria`.
     * @param ctx the parse tree
     */
    exitJoinCriteria?: (ctx: JoinCriteriaContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.sample`.
     * @param ctx the parse tree
     */
    enterSample?: (ctx: SampleContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.sample`.
     * @param ctx the parse tree
     */
    exitSample?: (ctx: SampleContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.sampleMethod`.
     * @param ctx the parse tree
     */
    enterSampleMethod?: (ctx: SampleMethodContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.sampleMethod`.
     * @param ctx the parse tree
     */
    exitSampleMethod?: (ctx: SampleMethodContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.identifierList`.
     * @param ctx the parse tree
     */
    enterIdentifierList?: (ctx: IdentifierListContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.identifierList`.
     * @param ctx the parse tree
     */
    exitIdentifierList?: (ctx: IdentifierListContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.identifierSeq`.
     * @param ctx the parse tree
     */
    enterIdentifierSeq?: (ctx: IdentifierSeqContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.identifierSeq`.
     * @param ctx the parse tree
     */
    exitIdentifierSeq?: (ctx: IdentifierSeqContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.orderedIdentifierList`.
     * @param ctx the parse tree
     */
    enterOrderedIdentifierList?: (ctx: OrderedIdentifierListContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.orderedIdentifierList`.
     * @param ctx the parse tree
     */
    exitOrderedIdentifierList?: (ctx: OrderedIdentifierListContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.orderedIdentifier`.
     * @param ctx the parse tree
     */
    enterOrderedIdentifier?: (ctx: OrderedIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.orderedIdentifier`.
     * @param ctx the parse tree
     */
    exitOrderedIdentifier?: (ctx: OrderedIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.identifierCommentList`.
     * @param ctx the parse tree
     */
    enterIdentifierCommentList?: (ctx: IdentifierCommentListContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.identifierCommentList`.
     * @param ctx the parse tree
     */
    exitIdentifierCommentList?: (ctx: IdentifierCommentListContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.identifierComment`.
     * @param ctx the parse tree
     */
    enterIdentifierComment?: (ctx: IdentifierCommentContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.identifierComment`.
     * @param ctx the parse tree
     */
    exitIdentifierComment?: (ctx: IdentifierCommentContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.relationPrimary`.
     * @param ctx the parse tree
     */
    enterRelationPrimary?: (ctx: RelationPrimaryContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.relationPrimary`.
     * @param ctx the parse tree
     */
    exitRelationPrimary?: (ctx: RelationPrimaryContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.inlineTable`.
     * @param ctx the parse tree
     */
    enterInlineTable?: (ctx: InlineTableContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.inlineTable`.
     * @param ctx the parse tree
     */
    exitInlineTable?: (ctx: InlineTableContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.functionTableSubqueryArgument`.
     * @param ctx the parse tree
     */
    enterFunctionTableSubqueryArgument?: (ctx: FunctionTableSubqueryArgumentContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.functionTableSubqueryArgument`.
     * @param ctx the parse tree
     */
    exitFunctionTableSubqueryArgument?: (ctx: FunctionTableSubqueryArgumentContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.tableArgumentPartitioning`.
     * @param ctx the parse tree
     */
    enterTableArgumentPartitioning?: (ctx: TableArgumentPartitioningContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.tableArgumentPartitioning`.
     * @param ctx the parse tree
     */
    exitTableArgumentPartitioning?: (ctx: TableArgumentPartitioningContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.functionTableNamedArgumentExpression`.
     * @param ctx the parse tree
     */
    enterFunctionTableNamedArgumentExpression?: (ctx: FunctionTableNamedArgumentExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.functionTableNamedArgumentExpression`.
     * @param ctx the parse tree
     */
    exitFunctionTableNamedArgumentExpression?: (ctx: FunctionTableNamedArgumentExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.functionTableReferenceArgument`.
     * @param ctx the parse tree
     */
    enterFunctionTableReferenceArgument?: (ctx: FunctionTableReferenceArgumentContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.functionTableReferenceArgument`.
     * @param ctx the parse tree
     */
    exitFunctionTableReferenceArgument?: (ctx: FunctionTableReferenceArgumentContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.functionTableArgument`.
     * @param ctx the parse tree
     */
    enterFunctionTableArgument?: (ctx: FunctionTableArgumentContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.functionTableArgument`.
     * @param ctx the parse tree
     */
    exitFunctionTableArgument?: (ctx: FunctionTableArgumentContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.functionTable`.
     * @param ctx the parse tree
     */
    enterFunctionTable?: (ctx: FunctionTableContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.functionTable`.
     * @param ctx the parse tree
     */
    exitFunctionTable?: (ctx: FunctionTableContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.tableAlias`.
     * @param ctx the parse tree
     */
    enterTableAlias?: (ctx: TableAliasContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.tableAlias`.
     * @param ctx the parse tree
     */
    exitTableAlias?: (ctx: TableAliasContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.rowFormat`.
     * @param ctx the parse tree
     */
    enterRowFormat?: (ctx: RowFormatContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.rowFormat`.
     * @param ctx the parse tree
     */
    exitRowFormat?: (ctx: RowFormatContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.multipartIdentifierList`.
     * @param ctx the parse tree
     */
    enterMultipartIdentifierList?: (ctx: MultipartIdentifierListContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.multipartIdentifierList`.
     * @param ctx the parse tree
     */
    exitMultipartIdentifierList?: (ctx: MultipartIdentifierListContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.multipartIdentifier`.
     * @param ctx the parse tree
     */
    enterMultipartIdentifier?: (ctx: MultipartIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.multipartIdentifier`.
     * @param ctx the parse tree
     */
    exitMultipartIdentifier?: (ctx: MultipartIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.multipartIdentifierPropertyList`.
     * @param ctx the parse tree
     */
    enterMultipartIdentifierPropertyList?: (ctx: MultipartIdentifierPropertyListContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.multipartIdentifierPropertyList`.
     * @param ctx the parse tree
     */
    exitMultipartIdentifierPropertyList?: (ctx: MultipartIdentifierPropertyListContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.multipartIdentifierProperty`.
     * @param ctx the parse tree
     */
    enterMultipartIdentifierProperty?: (ctx: MultipartIdentifierPropertyContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.multipartIdentifierProperty`.
     * @param ctx the parse tree
     */
    exitMultipartIdentifierProperty?: (ctx: MultipartIdentifierPropertyContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.tableIdentifier`.
     * @param ctx the parse tree
     */
    enterTableIdentifier?: (ctx: TableIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.tableIdentifier`.
     * @param ctx the parse tree
     */
    exitTableIdentifier?: (ctx: TableIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.viewIdentifier`.
     * @param ctx the parse tree
     */
    enterViewIdentifier?: (ctx: ViewIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.viewIdentifier`.
     * @param ctx the parse tree
     */
    exitViewIdentifier?: (ctx: ViewIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.namedExpression`.
     * @param ctx the parse tree
     */
    enterNamedExpression?: (ctx: NamedExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.namedExpression`.
     * @param ctx the parse tree
     */
    exitNamedExpression?: (ctx: NamedExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.namedExpressionSeq`.
     * @param ctx the parse tree
     */
    enterNamedExpressionSeq?: (ctx: NamedExpressionSeqContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.namedExpressionSeq`.
     * @param ctx the parse tree
     */
    exitNamedExpressionSeq?: (ctx: NamedExpressionSeqContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.partitionFieldList`.
     * @param ctx the parse tree
     */
    enterPartitionFieldList?: (ctx: PartitionFieldListContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.partitionFieldList`.
     * @param ctx the parse tree
     */
    exitPartitionFieldList?: (ctx: PartitionFieldListContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.partitionField`.
     * @param ctx the parse tree
     */
    enterPartitionField?: (ctx: PartitionFieldContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.partitionField`.
     * @param ctx the parse tree
     */
    exitPartitionField?: (ctx: PartitionFieldContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.transform`.
     * @param ctx the parse tree
     */
    enterTransform?: (ctx: TransformContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.transform`.
     * @param ctx the parse tree
     */
    exitTransform?: (ctx: TransformContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.transformArgument`.
     * @param ctx the parse tree
     */
    enterTransformArgument?: (ctx: TransformArgumentContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.transformArgument`.
     * @param ctx the parse tree
     */
    exitTransformArgument?: (ctx: TransformArgumentContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.namedArgumentExpression`.
     * @param ctx the parse tree
     */
    enterNamedArgumentExpression?: (ctx: NamedArgumentExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.namedArgumentExpression`.
     * @param ctx the parse tree
     */
    exitNamedArgumentExpression?: (ctx: NamedArgumentExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.functionArgument`.
     * @param ctx the parse tree
     */
    enterFunctionArgument?: (ctx: FunctionArgumentContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.functionArgument`.
     * @param ctx the parse tree
     */
    exitFunctionArgument?: (ctx: FunctionArgumentContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.expressionSeq`.
     * @param ctx the parse tree
     */
    enterExpressionSeq?: (ctx: ExpressionSeqContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.expressionSeq`.
     * @param ctx the parse tree
     */
    exitExpressionSeq?: (ctx: ExpressionSeqContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterBooleanExpression?: (ctx: BooleanExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitBooleanExpression?: (ctx: BooleanExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.predicate`.
     * @param ctx the parse tree
     */
    enterPredicate?: (ctx: PredicateContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.predicate`.
     * @param ctx the parse tree
     */
    exitPredicate?: (ctx: PredicateContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterValueExpression?: (ctx: ValueExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitValueExpression?: (ctx: ValueExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.datetimeUnit`.
     * @param ctx the parse tree
     */
    enterDatetimeUnit?: (ctx: DatetimeUnitContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.datetimeUnit`.
     * @param ctx the parse tree
     */
    exitDatetimeUnit?: (ctx: DatetimeUnitContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.literalType`.
     * @param ctx the parse tree
     */
    enterLiteralType?: (ctx: LiteralTypeContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.literalType`.
     * @param ctx the parse tree
     */
    exitLiteralType?: (ctx: LiteralTypeContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.constant`.
     * @param ctx the parse tree
     */
    enterConstant?: (ctx: ConstantContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.constant`.
     * @param ctx the parse tree
     */
    exitConstant?: (ctx: ConstantContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.arithmeticOperator`.
     * @param ctx the parse tree
     */
    enterArithmeticOperator?: (ctx: ArithmeticOperatorContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.arithmeticOperator`.
     * @param ctx the parse tree
     */
    exitArithmeticOperator?: (ctx: ArithmeticOperatorContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.predicateOperator`.
     * @param ctx the parse tree
     */
    enterPredicateOperator?: (ctx: PredicateOperatorContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.predicateOperator`.
     * @param ctx the parse tree
     */
    exitPredicateOperator?: (ctx: PredicateOperatorContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.booleanValue`.
     * @param ctx the parse tree
     */
    enterBooleanValue?: (ctx: BooleanValueContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.booleanValue`.
     * @param ctx the parse tree
     */
    exitBooleanValue?: (ctx: BooleanValueContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.interval`.
     * @param ctx the parse tree
     */
    enterInterval?: (ctx: IntervalContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.interval`.
     * @param ctx the parse tree
     */
    exitInterval?: (ctx: IntervalContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.errorCapturingMultiUnitsInterval`.
     * @param ctx the parse tree
     */
    enterErrorCapturingMultiUnitsInterval?: (ctx: ErrorCapturingMultiUnitsIntervalContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.errorCapturingMultiUnitsInterval`.
     * @param ctx the parse tree
     */
    exitErrorCapturingMultiUnitsInterval?: (ctx: ErrorCapturingMultiUnitsIntervalContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.multiUnitsInterval`.
     * @param ctx the parse tree
     */
    enterMultiUnitsInterval?: (ctx: MultiUnitsIntervalContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.multiUnitsInterval`.
     * @param ctx the parse tree
     */
    exitMultiUnitsInterval?: (ctx: MultiUnitsIntervalContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.errorCapturingUnitToUnitInterval`.
     * @param ctx the parse tree
     */
    enterErrorCapturingUnitToUnitInterval?: (ctx: ErrorCapturingUnitToUnitIntervalContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.errorCapturingUnitToUnitInterval`.
     * @param ctx the parse tree
     */
    exitErrorCapturingUnitToUnitInterval?: (ctx: ErrorCapturingUnitToUnitIntervalContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.unitToUnitInterval`.
     * @param ctx the parse tree
     */
    enterUnitToUnitInterval?: (ctx: UnitToUnitIntervalContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.unitToUnitInterval`.
     * @param ctx the parse tree
     */
    exitUnitToUnitInterval?: (ctx: UnitToUnitIntervalContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.intervalValue`.
     * @param ctx the parse tree
     */
    enterIntervalValue?: (ctx: IntervalValueContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.intervalValue`.
     * @param ctx the parse tree
     */
    exitIntervalValue?: (ctx: IntervalValueContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.unitInMultiUnits`.
     * @param ctx the parse tree
     */
    enterUnitInMultiUnits?: (ctx: UnitInMultiUnitsContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.unitInMultiUnits`.
     * @param ctx the parse tree
     */
    exitUnitInMultiUnits?: (ctx: UnitInMultiUnitsContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.unitInUnitToUnit`.
     * @param ctx the parse tree
     */
    enterUnitInUnitToUnit?: (ctx: UnitInUnitToUnitContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.unitInUnitToUnit`.
     * @param ctx the parse tree
     */
    exitUnitInUnitToUnit?: (ctx: UnitInUnitToUnitContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.colPosition`.
     * @param ctx the parse tree
     */
    enterColPosition?: (ctx: ColPositionContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.colPosition`.
     * @param ctx the parse tree
     */
    exitColPosition?: (ctx: ColPositionContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.type`.
     * @param ctx the parse tree
     */
    enterType?: (ctx: TypeContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.type`.
     * @param ctx the parse tree
     */
    exitType?: (ctx: TypeContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.dataType`.
     * @param ctx the parse tree
     */
    enterDataType?: (ctx: DataTypeContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.dataType`.
     * @param ctx the parse tree
     */
    exitDataType?: (ctx: DataTypeContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.qualifiedColTypeWithPositionSeqForAdd`.
     * @param ctx the parse tree
     */
    enterQualifiedColTypeWithPositionSeqForAdd?: (ctx: QualifiedColTypeWithPositionSeqForAddContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.qualifiedColTypeWithPositionSeqForAdd`.
     * @param ctx the parse tree
     */
    exitQualifiedColTypeWithPositionSeqForAdd?: (ctx: QualifiedColTypeWithPositionSeqForAddContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.qualifiedColTypeWithPositionForAdd`.
     * @param ctx the parse tree
     */
    enterQualifiedColTypeWithPositionForAdd?: (ctx: QualifiedColTypeWithPositionForAddContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.qualifiedColTypeWithPositionForAdd`.
     * @param ctx the parse tree
     */
    exitQualifiedColTypeWithPositionForAdd?: (ctx: QualifiedColTypeWithPositionForAddContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.qualifiedColTypeWithPositionSeqForReplace`.
     * @param ctx the parse tree
     */
    enterQualifiedColTypeWithPositionSeqForReplace?: (ctx: QualifiedColTypeWithPositionSeqForReplaceContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.qualifiedColTypeWithPositionSeqForReplace`.
     * @param ctx the parse tree
     */
    exitQualifiedColTypeWithPositionSeqForReplace?: (ctx: QualifiedColTypeWithPositionSeqForReplaceContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.qualifiedColTypeWithPositionForReplace`.
     * @param ctx the parse tree
     */
    enterQualifiedColTypeWithPositionForReplace?: (ctx: QualifiedColTypeWithPositionForReplaceContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.qualifiedColTypeWithPositionForReplace`.
     * @param ctx the parse tree
     */
    exitQualifiedColTypeWithPositionForReplace?: (ctx: QualifiedColTypeWithPositionForReplaceContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.colDefinitionDescriptorWithPosition`.
     * @param ctx the parse tree
     */
    enterColDefinitionDescriptorWithPosition?: (ctx: ColDefinitionDescriptorWithPositionContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.colDefinitionDescriptorWithPosition`.
     * @param ctx the parse tree
     */
    exitColDefinitionDescriptorWithPosition?: (ctx: ColDefinitionDescriptorWithPositionContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.defaultExpression`.
     * @param ctx the parse tree
     */
    enterDefaultExpression?: (ctx: DefaultExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.defaultExpression`.
     * @param ctx the parse tree
     */
    exitDefaultExpression?: (ctx: DefaultExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.variableDefaultExpression`.
     * @param ctx the parse tree
     */
    enterVariableDefaultExpression?: (ctx: VariableDefaultExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.variableDefaultExpression`.
     * @param ctx the parse tree
     */
    exitVariableDefaultExpression?: (ctx: VariableDefaultExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.colTypeList`.
     * @param ctx the parse tree
     */
    enterColTypeList?: (ctx: ColTypeListContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.colTypeList`.
     * @param ctx the parse tree
     */
    exitColTypeList?: (ctx: ColTypeListContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.colType`.
     * @param ctx the parse tree
     */
    enterColType?: (ctx: ColTypeContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.colType`.
     * @param ctx the parse tree
     */
    exitColType?: (ctx: ColTypeContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.createOrReplaceTableColTypeList`.
     * @param ctx the parse tree
     */
    enterCreateOrReplaceTableColTypeList?: (ctx: CreateOrReplaceTableColTypeListContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.createOrReplaceTableColTypeList`.
     * @param ctx the parse tree
     */
    exitCreateOrReplaceTableColTypeList?: (ctx: CreateOrReplaceTableColTypeListContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.createOrReplaceTableColType`.
     * @param ctx the parse tree
     */
    enterCreateOrReplaceTableColType?: (ctx: CreateOrReplaceTableColTypeContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.createOrReplaceTableColType`.
     * @param ctx the parse tree
     */
    exitCreateOrReplaceTableColType?: (ctx: CreateOrReplaceTableColTypeContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.colDefinitionOption`.
     * @param ctx the parse tree
     */
    enterColDefinitionOption?: (ctx: ColDefinitionOptionContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.colDefinitionOption`.
     * @param ctx the parse tree
     */
    exitColDefinitionOption?: (ctx: ColDefinitionOptionContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.generationExpression`.
     * @param ctx the parse tree
     */
    enterGenerationExpression?: (ctx: GenerationExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.generationExpression`.
     * @param ctx the parse tree
     */
    exitGenerationExpression?: (ctx: GenerationExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.complexColTypeList`.
     * @param ctx the parse tree
     */
    enterComplexColTypeList?: (ctx: ComplexColTypeListContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.complexColTypeList`.
     * @param ctx the parse tree
     */
    exitComplexColTypeList?: (ctx: ComplexColTypeListContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.complexColType`.
     * @param ctx the parse tree
     */
    enterComplexColType?: (ctx: ComplexColTypeContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.complexColType`.
     * @param ctx the parse tree
     */
    exitComplexColType?: (ctx: ComplexColTypeContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.whenClause`.
     * @param ctx the parse tree
     */
    enterWhenClause?: (ctx: WhenClauseContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.whenClause`.
     * @param ctx the parse tree
     */
    exitWhenClause?: (ctx: WhenClauseContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.windowClause`.
     * @param ctx the parse tree
     */
    enterWindowClause?: (ctx: WindowClauseContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.windowClause`.
     * @param ctx the parse tree
     */
    exitWindowClause?: (ctx: WindowClauseContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.zorderClause`.
     * @param ctx the parse tree
     */
    enterZorderClause?: (ctx: ZorderClauseContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.zorderClause`.
     * @param ctx the parse tree
     */
    exitZorderClause?: (ctx: ZorderClauseContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.namedWindow`.
     * @param ctx the parse tree
     */
    enterNamedWindow?: (ctx: NamedWindowContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.namedWindow`.
     * @param ctx the parse tree
     */
    exitNamedWindow?: (ctx: NamedWindowContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.windowSpec`.
     * @param ctx the parse tree
     */
    enterWindowSpec?: (ctx: WindowSpecContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.windowSpec`.
     * @param ctx the parse tree
     */
    exitWindowSpec?: (ctx: WindowSpecContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.windowFrame`.
     * @param ctx the parse tree
     */
    enterWindowFrame?: (ctx: WindowFrameContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.windowFrame`.
     * @param ctx the parse tree
     */
    exitWindowFrame?: (ctx: WindowFrameContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.frameBound`.
     * @param ctx the parse tree
     */
    enterFrameBound?: (ctx: FrameBoundContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.frameBound`.
     * @param ctx the parse tree
     */
    exitFrameBound?: (ctx: FrameBoundContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.qualifiedNameList`.
     * @param ctx the parse tree
     */
    enterQualifiedNameList?: (ctx: QualifiedNameListContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.qualifiedNameList`.
     * @param ctx the parse tree
     */
    exitQualifiedNameList?: (ctx: QualifiedNameListContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.functionName`.
     * @param ctx the parse tree
     */
    enterFunctionName?: (ctx: FunctionNameContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.functionName`.
     * @param ctx the parse tree
     */
    exitFunctionName?: (ctx: FunctionNameContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.functionNameCreate`.
     * @param ctx the parse tree
     */
    enterFunctionNameCreate?: (ctx: FunctionNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.functionNameCreate`.
     * @param ctx the parse tree
     */
    exitFunctionNameCreate?: (ctx: FunctionNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.qualifiedName`.
     * @param ctx the parse tree
     */
    enterQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.qualifiedName`.
     * @param ctx the parse tree
     */
    exitQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.errorCapturingIdentifier`.
     * @param ctx the parse tree
     */
    enterErrorCapturingIdentifier?: (ctx: ErrorCapturingIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.errorCapturingIdentifier`.
     * @param ctx the parse tree
     */
    exitErrorCapturingIdentifier?: (ctx: ErrorCapturingIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.errorCapturingIdentifierExtra`.
     * @param ctx the parse tree
     */
    enterErrorCapturingIdentifierExtra?: (ctx: ErrorCapturingIdentifierExtraContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.errorCapturingIdentifierExtra`.
     * @param ctx the parse tree
     */
    exitErrorCapturingIdentifierExtra?: (ctx: ErrorCapturingIdentifierExtraContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.identifier`.
     * @param ctx the parse tree
     */
    enterIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.identifier`.
     * @param ctx the parse tree
     */
    exitIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.strictIdentifier`.
     * @param ctx the parse tree
     */
    enterStrictIdentifier?: (ctx: StrictIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.strictIdentifier`.
     * @param ctx the parse tree
     */
    exitStrictIdentifier?: (ctx: StrictIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.quotedIdentifier`.
     * @param ctx the parse tree
     */
    enterQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.quotedIdentifier`.
     * @param ctx the parse tree
     */
    exitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.backQuotedIdentifier`.
     * @param ctx the parse tree
     */
    enterBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.backQuotedIdentifier`.
     * @param ctx the parse tree
     */
    exitBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.number`.
     * @param ctx the parse tree
     */
    enterNumber?: (ctx: NumberContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.number`.
     * @param ctx the parse tree
     */
    exitNumber?: (ctx: NumberContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.alterColumnAction`.
     * @param ctx the parse tree
     */
    enterAlterColumnAction?: (ctx: AlterColumnActionContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.alterColumnAction`.
     * @param ctx the parse tree
     */
    exitAlterColumnAction?: (ctx: AlterColumnActionContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.stringLit`.
     * @param ctx the parse tree
     */
    enterStringLit?: (ctx: StringLitContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.stringLit`.
     * @param ctx the parse tree
     */
    exitStringLit?: (ctx: StringLitContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.comment`.
     * @param ctx the parse tree
     */
    enterComment?: (ctx: CommentContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.comment`.
     * @param ctx the parse tree
     */
    exitComment?: (ctx: CommentContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.version`.
     * @param ctx the parse tree
     */
    enterVersion?: (ctx: VersionContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.version`.
     * @param ctx the parse tree
     */
    exitVersion?: (ctx: VersionContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.ansiNonReserved`.
     * @param ctx the parse tree
     */
    enterAnsiNonReserved?: (ctx: AnsiNonReservedContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.ansiNonReserved`.
     * @param ctx the parse tree
     */
    exitAnsiNonReserved?: (ctx: AnsiNonReservedContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.strictNonReserved`.
     * @param ctx the parse tree
     */
    enterStrictNonReserved?: (ctx: StrictNonReservedContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.strictNonReserved`.
     * @param ctx the parse tree
     */
    exitStrictNonReserved?: (ctx: StrictNonReservedContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.nonReserved`.
     * @param ctx the parse tree
     */
    enterNonReserved?: (ctx: NonReservedContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.nonReserved`.
     * @param ctx the parse tree
     */
    exitNonReserved?: (ctx: NonReservedContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

