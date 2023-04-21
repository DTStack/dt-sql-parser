// dt-sql-parser/src/grammar/spark/SparkSql.g4 by ANTLR 4.12.0

import {ParseTreeVisitor} from 'antlr4';


import { ProgramContext } from "./SparkSqlParser";
import { SingleStatementContext } from "./SparkSqlParser";
import { EmptyStatementContext } from "./SparkSqlParser";
import { SingleExpressionContext } from "./SparkSqlParser";
import { SingleTableIdentifierContext } from "./SparkSqlParser";
import { SingleMultipartIdentifierContext } from "./SparkSqlParser";
import { SingleDataTypeContext } from "./SparkSqlParser";
import { SingleTableSchemaContext } from "./SparkSqlParser";
import { StatementDefaultContext } from "./SparkSqlParser";
import { DmlStatementContext } from "./SparkSqlParser";
import { UseContext } from "./SparkSqlParser";
import { CreateNamespaceContext } from "./SparkSqlParser";
import { SetNamespacePropertiesContext } from "./SparkSqlParser";
import { SetNamespaceLocationContext } from "./SparkSqlParser";
import { DropNamespaceContext } from "./SparkSqlParser";
import { ShowNamespacesContext } from "./SparkSqlParser";
import { CreateTableContext } from "./SparkSqlParser";
import { CreateHiveTableContext } from "./SparkSqlParser";
import { CreateTableLikeContext } from "./SparkSqlParser";
import { ReplaceTableContext } from "./SparkSqlParser";
import { AnalyzeContext } from "./SparkSqlParser";
import { AddTableColumnsContext } from "./SparkSqlParser";
import { RenameTableColumnContext } from "./SparkSqlParser";
import { DropTableColumnsContext } from "./SparkSqlParser";
import { RenameTableContext } from "./SparkSqlParser";
import { SetTablePropertiesContext } from "./SparkSqlParser";
import { UnsetTablePropertiesContext } from "./SparkSqlParser";
import { AlterTableAlterColumnContext } from "./SparkSqlParser";
import { HiveChangeColumnContext } from "./SparkSqlParser";
import { HiveReplaceColumnsContext } from "./SparkSqlParser";
import { SetTableSerDeContext } from "./SparkSqlParser";
import { AddTablePartitionContext } from "./SparkSqlParser";
import { RenameTablePartitionContext } from "./SparkSqlParser";
import { DropTablePartitionsContext } from "./SparkSqlParser";
import { SetTableLocationContext } from "./SparkSqlParser";
import { RecoverPartitionsContext } from "./SparkSqlParser";
import { DropTableContext } from "./SparkSqlParser";
import { DropViewContext } from "./SparkSqlParser";
import { CreateViewContext } from "./SparkSqlParser";
import { CreateTempViewUsingContext } from "./SparkSqlParser";
import { AlterViewQueryContext } from "./SparkSqlParser";
import { CreateFunctionContext } from "./SparkSqlParser";
import { DropFunctionContext } from "./SparkSqlParser";
import { ExplainContext } from "./SparkSqlParser";
import { ShowTablesContext } from "./SparkSqlParser";
import { ShowTableContext } from "./SparkSqlParser";
import { ShowTblPropertiesContext } from "./SparkSqlParser";
import { ShowColumnsContext } from "./SparkSqlParser";
import { ShowViewsContext } from "./SparkSqlParser";
import { ShowPartitionsContext } from "./SparkSqlParser";
import { ShowFunctionsContext } from "./SparkSqlParser";
import { ShowCreateTableContext } from "./SparkSqlParser";
import { ShowCurrentNamespaceContext } from "./SparkSqlParser";
import { DescribeFunctionContext } from "./SparkSqlParser";
import { DescribeNamespaceContext } from "./SparkSqlParser";
import { DescribeRelationContext } from "./SparkSqlParser";
import { DescribeQueryContext } from "./SparkSqlParser";
import { CommentNamespaceContext } from "./SparkSqlParser";
import { CommentTableContext } from "./SparkSqlParser";
import { RefreshTableContext } from "./SparkSqlParser";
import { RefreshFunctionContext } from "./SparkSqlParser";
import { RefreshResourceContext } from "./SparkSqlParser";
import { CacheTableContext } from "./SparkSqlParser";
import { UncacheTableContext } from "./SparkSqlParser";
import { ClearCacheContext } from "./SparkSqlParser";
import { LoadDataContext } from "./SparkSqlParser";
import { TruncateTableContext } from "./SparkSqlParser";
import { RepairTableContext } from "./SparkSqlParser";
import { ManageResourceContext } from "./SparkSqlParser";
import { FailNativeCommandContext } from "./SparkSqlParser";
import { SetTimeZoneContext } from "./SparkSqlParser";
import { SetQuotedConfigurationContext } from "./SparkSqlParser";
import { SetConfigurationContext } from "./SparkSqlParser";
import { ResetQuotedConfigurationContext } from "./SparkSqlParser";
import { ResetConfigurationContext } from "./SparkSqlParser";
import { ConfigKeyContext } from "./SparkSqlParser";
import { UnsupportedHiveNativeCommandsContext } from "./SparkSqlParser";
import { CreateTableHeaderContext } from "./SparkSqlParser";
import { ReplaceTableHeaderContext } from "./SparkSqlParser";
import { BucketSpecContext } from "./SparkSqlParser";
import { SkewSpecContext } from "./SparkSqlParser";
import { LocationSpecContext } from "./SparkSqlParser";
import { CommentSpecContext } from "./SparkSqlParser";
import { QueryContext } from "./SparkSqlParser";
import { InsertOverwriteTableContext } from "./SparkSqlParser";
import { InsertIntoTableContext } from "./SparkSqlParser";
import { InsertOverwriteHiveDirContext } from "./SparkSqlParser";
import { InsertOverwriteDirContext } from "./SparkSqlParser";
import { PartitionSpecLocationContext } from "./SparkSqlParser";
import { PartitionSpecContext } from "./SparkSqlParser";
import { PartitionValContext } from "./SparkSqlParser";
import { NamespaceContext } from "./SparkSqlParser";
import { DescribeFuncNameContext } from "./SparkSqlParser";
import { DescribeColNameContext } from "./SparkSqlParser";
import { CtesContext } from "./SparkSqlParser";
import { NamedQueryContext } from "./SparkSqlParser";
import { TableProviderContext } from "./SparkSqlParser";
import { CreateTableClausesContext } from "./SparkSqlParser";
import { TablePropertyListContext } from "./SparkSqlParser";
import { TablePropertyContext } from "./SparkSqlParser";
import { TablePropertyKeyContext } from "./SparkSqlParser";
import { TablePropertyValueContext } from "./SparkSqlParser";
import { ConstantListContext } from "./SparkSqlParser";
import { NestedConstantListContext } from "./SparkSqlParser";
import { CreateFileFormatContext } from "./SparkSqlParser";
import { TableFileFormatContext } from "./SparkSqlParser";
import { GenericFileFormatContext } from "./SparkSqlParser";
import { StorageHandlerContext } from "./SparkSqlParser";
import { ResourceContext } from "./SparkSqlParser";
import { SingleInsertQueryContext } from "./SparkSqlParser";
import { MultiInsertQueryContext } from "./SparkSqlParser";
import { DeleteFromTableContext } from "./SparkSqlParser";
import { UpdateTableContext } from "./SparkSqlParser";
import { MergeIntoTableContext } from "./SparkSqlParser";
import { QueryOrganizationContext } from "./SparkSqlParser";
import { MultiInsertQueryBodyContext } from "./SparkSqlParser";
import { QueryTermDefaultContext } from "./SparkSqlParser";
import { SetOperationContext } from "./SparkSqlParser";
import { QueryPrimaryDefaultContext } from "./SparkSqlParser";
import { FromStmtContext } from "./SparkSqlParser";
import { TableContext } from "./SparkSqlParser";
import { InlineTableDefault1Context } from "./SparkSqlParser";
import { SubqueryContext } from "./SparkSqlParser";
import { SortItemContext } from "./SparkSqlParser";
import { FromStatementContext } from "./SparkSqlParser";
import { FromStatementBodyContext } from "./SparkSqlParser";
import { TransformQuerySpecificationContext } from "./SparkSqlParser";
import { RegularQuerySpecificationContext } from "./SparkSqlParser";
import { TransformClauseContext } from "./SparkSqlParser";
import { SelectClauseContext } from "./SparkSqlParser";
import { SetClauseContext } from "./SparkSqlParser";
import { MatchedClauseContext } from "./SparkSqlParser";
import { NotMatchedClauseContext } from "./SparkSqlParser";
import { MatchedActionContext } from "./SparkSqlParser";
import { NotMatchedActionContext } from "./SparkSqlParser";
import { AssignmentListContext } from "./SparkSqlParser";
import { AssignmentContext } from "./SparkSqlParser";
import { WhereClauseContext } from "./SparkSqlParser";
import { HavingClauseContext } from "./SparkSqlParser";
import { HintContext } from "./SparkSqlParser";
import { HintStatementContext } from "./SparkSqlParser";
import { FromClauseContext } from "./SparkSqlParser";
import { AggregationClauseContext } from "./SparkSqlParser";
import { GroupingSetContext } from "./SparkSqlParser";
import { PivotClauseContext } from "./SparkSqlParser";
import { PivotColumnContext } from "./SparkSqlParser";
import { PivotValueContext } from "./SparkSqlParser";
import { LateralViewContext } from "./SparkSqlParser";
import { SetQuantifierContext } from "./SparkSqlParser";
import { RelationContext } from "./SparkSqlParser";
import { JoinRelationContext } from "./SparkSqlParser";
import { JoinTypeContext } from "./SparkSqlParser";
import { JoinCriteriaContext } from "./SparkSqlParser";
import { SampleContext } from "./SparkSqlParser";
import { SampleByPercentileContext } from "./SparkSqlParser";
import { SampleByRowsContext } from "./SparkSqlParser";
import { SampleByBucketContext } from "./SparkSqlParser";
import { SampleByBytesContext } from "./SparkSqlParser";
import { IdentifierListContext } from "./SparkSqlParser";
import { IdentifierSeqContext } from "./SparkSqlParser";
import { OrderedIdentifierListContext } from "./SparkSqlParser";
import { OrderedIdentifierContext } from "./SparkSqlParser";
import { IdentifierCommentListContext } from "./SparkSqlParser";
import { IdentifierCommentContext } from "./SparkSqlParser";
import { TableNameContext } from "./SparkSqlParser";
import { AliasedQueryContext } from "./SparkSqlParser";
import { AliasedRelationContext } from "./SparkSqlParser";
import { InlineTableDefault2Context } from "./SparkSqlParser";
import { TableValuedFunctionContext } from "./SparkSqlParser";
import { InlineTableContext } from "./SparkSqlParser";
import { FunctionTableContext } from "./SparkSqlParser";
import { TableAliasContext } from "./SparkSqlParser";
import { RowFormatSerdeContext } from "./SparkSqlParser";
import { RowFormatDelimitedContext } from "./SparkSqlParser";
import { MultipartIdentifierListContext } from "./SparkSqlParser";
import { MultipartIdentifierContext } from "./SparkSqlParser";
import { TableIdentifierContext } from "./SparkSqlParser";
import { NamedExpressionContext } from "./SparkSqlParser";
import { NamedExpressionSeqContext } from "./SparkSqlParser";
import { TransformListContext } from "./SparkSqlParser";
import { IdentityTransformContext } from "./SparkSqlParser";
import { ApplyTransformContext } from "./SparkSqlParser";
import { TransformArgumentContext } from "./SparkSqlParser";
import { ExpressionContext } from "./SparkSqlParser";
import { LogicalNotContext } from "./SparkSqlParser";
import { PredicatedContext } from "./SparkSqlParser";
import { ExistsContext } from "./SparkSqlParser";
import { LogicalBinaryContext } from "./SparkSqlParser";
import { PredicateContext } from "./SparkSqlParser";
import { ValueExpressionDefaultContext } from "./SparkSqlParser";
import { ComparisonContext } from "./SparkSqlParser";
import { ArithmeticBinaryContext } from "./SparkSqlParser";
import { ArithmeticUnaryContext } from "./SparkSqlParser";
import { StructContext } from "./SparkSqlParser";
import { DereferenceContext } from "./SparkSqlParser";
import { SimpleCaseContext } from "./SparkSqlParser";
import { ColumnReferenceContext } from "./SparkSqlParser";
import { RowConstructorContext } from "./SparkSqlParser";
import { LastContext } from "./SparkSqlParser";
import { StarContext } from "./SparkSqlParser";
import { OverlayContext } from "./SparkSqlParser";
import { SubscriptContext } from "./SparkSqlParser";
import { SubqueryExpressionContext } from "./SparkSqlParser";
import { SubstringContext } from "./SparkSqlParser";
import { CurrentDatetimeContext } from "./SparkSqlParser";
import { CastContext } from "./SparkSqlParser";
import { ConstantDefaultContext } from "./SparkSqlParser";
import { LambdaContext } from "./SparkSqlParser";
import { ParenthesizedExpressionContext } from "./SparkSqlParser";
import { ExtractContext } from "./SparkSqlParser";
import { TrimContext } from "./SparkSqlParser";
import { FunctionCallContext } from "./SparkSqlParser";
import { SearchedCaseContext } from "./SparkSqlParser";
import { PositionContext } from "./SparkSqlParser";
import { FirstContext } from "./SparkSqlParser";
import { NullLiteralContext } from "./SparkSqlParser";
import { IntervalLiteralContext } from "./SparkSqlParser";
import { TypeConstructorContext } from "./SparkSqlParser";
import { NumericLiteralContext } from "./SparkSqlParser";
import { BooleanLiteralContext } from "./SparkSqlParser";
import { StringLiteralContext } from "./SparkSqlParser";
import { ComparisonOperatorContext } from "./SparkSqlParser";
import { ArithmeticOperatorContext } from "./SparkSqlParser";
import { PredicateOperatorContext } from "./SparkSqlParser";
import { BooleanValueContext } from "./SparkSqlParser";
import { IntervalContext } from "./SparkSqlParser";
import { ErrorCapturingMultiUnitsIntervalContext } from "./SparkSqlParser";
import { MultiUnitsIntervalContext } from "./SparkSqlParser";
import { ErrorCapturingUnitToUnitIntervalContext } from "./SparkSqlParser";
import { UnitToUnitIntervalContext } from "./SparkSqlParser";
import { IntervalValueContext } from "./SparkSqlParser";
import { ColPositionContext } from "./SparkSqlParser";
import { ComplexDataTypeContext } from "./SparkSqlParser";
import { PrimitiveDataTypeContext } from "./SparkSqlParser";
import { QualifiedColTypeWithPositionListContext } from "./SparkSqlParser";
import { QualifiedColTypeWithPositionContext } from "./SparkSqlParser";
import { ColTypeListContext } from "./SparkSqlParser";
import { ColTypeContext } from "./SparkSqlParser";
import { ComplexColTypeListContext } from "./SparkSqlParser";
import { ComplexColTypeContext } from "./SparkSqlParser";
import { WhenClauseContext } from "./SparkSqlParser";
import { WindowClauseContext } from "./SparkSqlParser";
import { NamedWindowContext } from "./SparkSqlParser";
import { WindowRefContext } from "./SparkSqlParser";
import { WindowDefContext } from "./SparkSqlParser";
import { WindowFrameContext } from "./SparkSqlParser";
import { FrameBoundContext } from "./SparkSqlParser";
import { QualifiedNameListContext } from "./SparkSqlParser";
import { FunctionNameContext } from "./SparkSqlParser";
import { QualifiedNameContext } from "./SparkSqlParser";
import { ErrorCapturingIdentifierContext } from "./SparkSqlParser";
import { ErrorIdentContext } from "./SparkSqlParser";
import { RealIdentContext } from "./SparkSqlParser";
import { IdentifierContext } from "./SparkSqlParser";
import { UnquotedIdentifierContext } from "./SparkSqlParser";
import { QuotedIdentifierAlternativeContext } from "./SparkSqlParser";
import { QuotedIdentifierContext } from "./SparkSqlParser";
import { ExponentLiteralContext } from "./SparkSqlParser";
import { DecimalLiteralContext } from "./SparkSqlParser";
import { LegacyDecimalLiteralContext } from "./SparkSqlParser";
import { IntegerLiteralContext } from "./SparkSqlParser";
import { BigIntLiteralContext } from "./SparkSqlParser";
import { SmallIntLiteralContext } from "./SparkSqlParser";
import { TinyIntLiteralContext } from "./SparkSqlParser";
import { DoubleLiteralContext } from "./SparkSqlParser";
import { FloatLiteralContext } from "./SparkSqlParser";
import { BigDecimalLiteralContext } from "./SparkSqlParser";
import { AlterColumnActionContext } from "./SparkSqlParser";
import { AnsiNonReservedContext } from "./SparkSqlParser";
import { StrictNonReservedContext } from "./SparkSqlParser";
import { NonReservedContext } from "./SparkSqlParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SparkSqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class SparkSqlVisitor<Result> extends ParseTreeVisitor<Result> {
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
	 * Visit a parse tree produced by `SparkSqlParser.emptyStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyStatement?: (ctx: EmptyStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SparkSqlParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleExpression?: (ctx: SingleExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `SparkSqlParser.singleTableIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleTableIdentifier?: (ctx: SingleTableIdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by `SparkSqlParser.singleMultipartIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleMultipartIdentifier?: (ctx: SingleMultipartIdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by `SparkSqlParser.singleDataType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleDataType?: (ctx: SingleDataTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `SparkSqlParser.singleTableSchema`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleTableSchema?: (ctx: SingleTableSchemaContext) => Result;
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
	 * Visit a parse tree produced by the `use`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUse?: (ctx: UseContext) => Result;
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
	 * Visit a parse tree produced by the `createHiveTable`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateHiveTable?: (ctx: CreateHiveTableContext) => Result;
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
	 * Visit a parse tree produced by the `addTableColumns`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddTableColumns?: (ctx: AddTableColumnsContext) => Result;
	/**
	 * Visit a parse tree produced by the `renameTableColumn`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameTableColumn?: (ctx: RenameTableColumnContext) => Result;
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
	 * Visit a parse tree produced by the `dropFunction`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropFunction?: (ctx: DropFunctionContext) => Result;
	/**
	 * Visit a parse tree produced by the `explain`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplain?: (ctx: ExplainContext) => Result;
	/**
	 * Visit a parse tree produced by the `showTables`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowTables?: (ctx: ShowTablesContext) => Result;
	/**
	 * Visit a parse tree produced by the `showTable`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowTable?: (ctx: ShowTableContext) => Result;
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
	 * Visit a parse tree produced by the `commentNamespace`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentNamespace?: (ctx: CommentNamespaceContext) => Result;
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
	 * Visit a parse tree produced by the `cacheTable`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCacheTable?: (ctx: CacheTableContext) => Result;
	/**
	 * Visit a parse tree produced by the `uncacheTable`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUncacheTable?: (ctx: UncacheTableContext) => Result;
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
	 * Visit a parse tree produced by the `setTimeZone`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetTimeZone?: (ctx: SetTimeZoneContext) => Result;
	/**
	 * Visit a parse tree produced by the `setQuotedConfiguration`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetQuotedConfiguration?: (ctx: SetQuotedConfigurationContext) => Result;
	/**
	 * Visit a parse tree produced by the `setConfiguration`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetConfiguration?: (ctx: SetConfigurationContext) => Result;
	/**
	 * Visit a parse tree produced by the `resetQuotedConfiguration`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResetQuotedConfiguration?: (ctx: ResetQuotedConfigurationContext) => Result;
	/**
	 * Visit a parse tree produced by the `resetConfiguration`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResetConfiguration?: (ctx: ResetConfigurationContext) => Result;
	/**
	 * Visit a parse tree produced by `SparkSqlParser.configKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConfigKey?: (ctx: ConfigKeyContext) => Result;
	/**
	 * Visit a parse tree produced by `SparkSqlParser.unsupportedHiveNativeCommands`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnsupportedHiveNativeCommands?: (ctx: UnsupportedHiveNativeCommandsContext) => Result;
	/**
	 * Visit a parse tree produced by `SparkSqlParser.createTableHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTableHeader?: (ctx: CreateTableHeaderContext) => Result;
	/**
	 * Visit a parse tree produced by `SparkSqlParser.replaceTableHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplaceTableHeader?: (ctx: ReplaceTableHeaderContext) => Result;
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
	 * Visit a parse tree produced by `SparkSqlParser.locationSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocationSpec?: (ctx: LocationSpecContext) => Result;
	/**
	 * Visit a parse tree produced by `SparkSqlParser.commentSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentSpec?: (ctx: CommentSpecContext) => Result;
	/**
	 * Visit a parse tree produced by `SparkSqlParser.query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery?: (ctx: QueryContext) => Result;
	/**
	 * Visit a parse tree produced by the `insertOverwriteTable`
	 * labeled alternative in `SparkSqlParser.insertInto`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertOverwriteTable?: (ctx: InsertOverwriteTableContext) => Result;
	/**
	 * Visit a parse tree produced by the `insertIntoTable`
	 * labeled alternative in `SparkSqlParser.insertInto`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertIntoTable?: (ctx: InsertIntoTableContext) => Result;
	/**
	 * Visit a parse tree produced by the `insertOverwriteHiveDir`
	 * labeled alternative in `SparkSqlParser.insertInto`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertOverwriteHiveDir?: (ctx: InsertOverwriteHiveDirContext) => Result;
	/**
	 * Visit a parse tree produced by the `insertOverwriteDir`
	 * labeled alternative in `SparkSqlParser.insertInto`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertOverwriteDir?: (ctx: InsertOverwriteDirContext) => Result;
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
	 * Visit a parse tree produced by `SparkSqlParser.tablePropertyList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePropertyList?: (ctx: TablePropertyListContext) => Result;
	/**
	 * Visit a parse tree produced by `SparkSqlParser.tableProperty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableProperty?: (ctx: TablePropertyContext) => Result;
	/**
	 * Visit a parse tree produced by `SparkSqlParser.tablePropertyKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePropertyKey?: (ctx: TablePropertyKeyContext) => Result;
	/**
	 * Visit a parse tree produced by `SparkSqlParser.tablePropertyValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePropertyValue?: (ctx: TablePropertyValueContext) => Result;
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
	 * Visit a parse tree produced by the `tableFileFormat`
	 * labeled alternative in `SparkSqlParser.fileFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableFileFormat?: (ctx: TableFileFormatContext) => Result;
	/**
	 * Visit a parse tree produced by the `genericFileFormat`
	 * labeled alternative in `SparkSqlParser.fileFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericFileFormat?: (ctx: GenericFileFormatContext) => Result;
	/**
	 * Visit a parse tree produced by `SparkSqlParser.storageHandler`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStorageHandler?: (ctx: StorageHandlerContext) => Result;
	/**
	 * Visit a parse tree produced by `SparkSqlParser.resource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResource?: (ctx: ResourceContext) => Result;
	/**
	 * Visit a parse tree produced by the `singleInsertQuery`
	 * labeled alternative in `SparkSqlParser.dmlStatementNoWith`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleInsertQuery?: (ctx: SingleInsertQueryContext) => Result;
	/**
	 * Visit a parse tree produced by the `multiInsertQuery`
	 * labeled alternative in `SparkSqlParser.dmlStatementNoWith`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiInsertQuery?: (ctx: MultiInsertQueryContext) => Result;
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
	 * Visit a parse tree produced by `SparkSqlParser.queryOrganization`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryOrganization?: (ctx: QueryOrganizationContext) => Result;
	/**
	 * Visit a parse tree produced by `SparkSqlParser.multiInsertQueryBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiInsertQueryBody?: (ctx: MultiInsertQueryBodyContext) => Result;
	/**
	 * Visit a parse tree produced by the `queryTermDefault`
	 * labeled alternative in `SparkSqlParser.queryTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryTermDefault?: (ctx: QueryTermDefaultContext) => Result;
	/**
	 * Visit a parse tree produced by the `setOperation`
	 * labeled alternative in `SparkSqlParser.queryTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetOperation?: (ctx: SetOperationContext) => Result;
	/**
	 * Visit a parse tree produced by the `queryPrimaryDefault`
	 * labeled alternative in `SparkSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => Result;
	/**
	 * Visit a parse tree produced by the `fromStmt`
	 * labeled alternative in `SparkSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromStmt?: (ctx: FromStmtContext) => Result;
	/**
	 * Visit a parse tree produced by the `table`
	 * labeled alternative in `SparkSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable?: (ctx: TableContext) => Result;
	/**
	 * Visit a parse tree produced by the `inlineTableDefault1`
	 * labeled alternative in `SparkSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineTableDefault1?: (ctx: InlineTableDefault1Context) => Result;
	/**
	 * Visit a parse tree produced by the `subquery`
	 * labeled alternative in `SparkSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubquery?: (ctx: SubqueryContext) => Result;
	/**
	 * Visit a parse tree produced by `SparkSqlParser.sortItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSortItem?: (ctx: SortItemContext) => Result;
	/**
	 * Visit a parse tree produced by `SparkSqlParser.fromStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromStatement?: (ctx: FromStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SparkSqlParser.fromStatementBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromStatementBody?: (ctx: FromStatementBodyContext) => Result;
	/**
	 * Visit a parse tree produced by the `transformQuerySpecification`
	 * labeled alternative in `SparkSqlParser.querySpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransformQuerySpecification?: (ctx: TransformQuerySpecificationContext) => Result;
	/**
	 * Visit a parse tree produced by the `regularQuerySpecification`
	 * labeled alternative in `SparkSqlParser.querySpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegularQuerySpecification?: (ctx: RegularQuerySpecificationContext) => Result;
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
	 * Visit a parse tree produced by `SparkSqlParser.matchedAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatchedAction?: (ctx: MatchedActionContext) => Result;
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
	 * Visit a parse tree produced by `SparkSqlParser.aggregationClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggregationClause?: (ctx: AggregationClauseContext) => Result;
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
	 * Visit a parse tree produced by the `sampleByPercentile`
	 * labeled alternative in `SparkSqlParser.sampleMethod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSampleByPercentile?: (ctx: SampleByPercentileContext) => Result;
	/**
	 * Visit a parse tree produced by the `sampleByRows`
	 * labeled alternative in `SparkSqlParser.sampleMethod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSampleByRows?: (ctx: SampleByRowsContext) => Result;
	/**
	 * Visit a parse tree produced by the `sampleByBucket`
	 * labeled alternative in `SparkSqlParser.sampleMethod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSampleByBucket?: (ctx: SampleByBucketContext) => Result;
	/**
	 * Visit a parse tree produced by the `sampleByBytes`
	 * labeled alternative in `SparkSqlParser.sampleMethod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSampleByBytes?: (ctx: SampleByBytesContext) => Result;
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
	 * Visit a parse tree produced by the `tableName`
	 * labeled alternative in `SparkSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableName?: (ctx: TableNameContext) => Result;
	/**
	 * Visit a parse tree produced by the `aliasedQuery`
	 * labeled alternative in `SparkSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAliasedQuery?: (ctx: AliasedQueryContext) => Result;
	/**
	 * Visit a parse tree produced by the `aliasedRelation`
	 * labeled alternative in `SparkSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAliasedRelation?: (ctx: AliasedRelationContext) => Result;
	/**
	 * Visit a parse tree produced by the `inlineTableDefault2`
	 * labeled alternative in `SparkSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineTableDefault2?: (ctx: InlineTableDefault2Context) => Result;
	/**
	 * Visit a parse tree produced by the `tableValuedFunction`
	 * labeled alternative in `SparkSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableValuedFunction?: (ctx: TableValuedFunctionContext) => Result;
	/**
	 * Visit a parse tree produced by `SparkSqlParser.inlineTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineTable?: (ctx: InlineTableContext) => Result;
	/**
	 * Visit a parse tree produced by `SparkSqlParser.functionTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionTable?: (ctx: FunctionTableContext) => Result;
	/**
	 * Visit a parse tree produced by `SparkSqlParser.tableAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableAlias?: (ctx: TableAliasContext) => Result;
	/**
	 * Visit a parse tree produced by the `rowFormatSerde`
	 * labeled alternative in `SparkSqlParser.rowFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowFormatSerde?: (ctx: RowFormatSerdeContext) => Result;
	/**
	 * Visit a parse tree produced by the `rowFormatDelimited`
	 * labeled alternative in `SparkSqlParser.rowFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowFormatDelimited?: (ctx: RowFormatDelimitedContext) => Result;
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
	 * Visit a parse tree produced by `SparkSqlParser.tableIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableIdentifier?: (ctx: TableIdentifierContext) => Result;
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
	 * Visit a parse tree produced by `SparkSqlParser.transformList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransformList?: (ctx: TransformListContext) => Result;
	/**
	 * Visit a parse tree produced by the `identityTransform`
	 * labeled alternative in `SparkSqlParser.transform`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentityTransform?: (ctx: IdentityTransformContext) => Result;
	/**
	 * Visit a parse tree produced by the `applyTransform`
	 * labeled alternative in `SparkSqlParser.transform`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitApplyTransform?: (ctx: ApplyTransformContext) => Result;
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
	 * Visit a parse tree produced by the `logicalNot`
	 * labeled alternative in `SparkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalNot?: (ctx: LogicalNotContext) => Result;
	/**
	 * Visit a parse tree produced by the `predicated`
	 * labeled alternative in `SparkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicated?: (ctx: PredicatedContext) => Result;
	/**
	 * Visit a parse tree produced by the `exists`
	 * labeled alternative in `SparkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExists?: (ctx: ExistsContext) => Result;
	/**
	 * Visit a parse tree produced by the `logicalBinary`
	 * labeled alternative in `SparkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalBinary?: (ctx: LogicalBinaryContext) => Result;
	/**
	 * Visit a parse tree produced by `SparkSqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicate?: (ctx: PredicateContext) => Result;
	/**
	 * Visit a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `SparkSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => Result;
	/**
	 * Visit a parse tree produced by the `comparison`
	 * labeled alternative in `SparkSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;
	/**
	 * Visit a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `SparkSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => Result;
	/**
	 * Visit a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `SparkSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => Result;
	/**
	 * Visit a parse tree produced by the `struct`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct?: (ctx: StructContext) => Result;
	/**
	 * Visit a parse tree produced by the `dereference`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDereference?: (ctx: DereferenceContext) => Result;
	/**
	 * Visit a parse tree produced by the `simpleCase`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleCase?: (ctx: SimpleCaseContext) => Result;
	/**
	 * Visit a parse tree produced by the `columnReference`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnReference?: (ctx: ColumnReferenceContext) => Result;
	/**
	 * Visit a parse tree produced by the `rowConstructor`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowConstructor?: (ctx: RowConstructorContext) => Result;
	/**
	 * Visit a parse tree produced by the `last`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLast?: (ctx: LastContext) => Result;
	/**
	 * Visit a parse tree produced by the `star`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStar?: (ctx: StarContext) => Result;
	/**
	 * Visit a parse tree produced by the `overlay`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOverlay?: (ctx: OverlayContext) => Result;
	/**
	 * Visit a parse tree produced by the `subscript`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscript?: (ctx: SubscriptContext) => Result;
	/**
	 * Visit a parse tree produced by the `subqueryExpression`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubqueryExpression?: (ctx: SubqueryExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `substring`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubstring?: (ctx: SubstringContext) => Result;
	/**
	 * Visit a parse tree produced by the `currentDatetime`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentDatetime?: (ctx: CurrentDatetimeContext) => Result;
	/**
	 * Visit a parse tree produced by the `cast`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCast?: (ctx: CastContext) => Result;
	/**
	 * Visit a parse tree produced by the `constantDefault`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantDefault?: (ctx: ConstantDefaultContext) => Result;
	/**
	 * Visit a parse tree produced by the `lambda`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambda?: (ctx: LambdaContext) => Result;
	/**
	 * Visit a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `extract`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtract?: (ctx: ExtractContext) => Result;
	/**
	 * Visit a parse tree produced by the `trim`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrim?: (ctx: TrimContext) => Result;
	/**
	 * Visit a parse tree produced by the `functionCall`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by the `searchedCase`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearchedCase?: (ctx: SearchedCaseContext) => Result;
	/**
	 * Visit a parse tree produced by the `position`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPosition?: (ctx: PositionContext) => Result;
	/**
	 * Visit a parse tree produced by the `first`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFirst?: (ctx: FirstContext) => Result;
	/**
	 * Visit a parse tree produced by the `nullLiteral`
	 * labeled alternative in `SparkSqlParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullLiteral?: (ctx: NullLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `intervalLiteral`
	 * labeled alternative in `SparkSqlParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalLiteral?: (ctx: IntervalLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `typeConstructor`
	 * labeled alternative in `SparkSqlParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeConstructor?: (ctx: TypeConstructorContext) => Result;
	/**
	 * Visit a parse tree produced by the `numericLiteral`
	 * labeled alternative in `SparkSqlParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericLiteral?: (ctx: NumericLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `SparkSqlParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `stringLiteral`
	 * labeled alternative in `SparkSqlParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;
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
	 * Visit a parse tree produced by `SparkSqlParser.colPosition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColPosition?: (ctx: ColPositionContext) => Result;
	/**
	 * Visit a parse tree produced by the `complexDataType`
	 * labeled alternative in `SparkSqlParser.dataType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComplexDataType?: (ctx: ComplexDataTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `primitiveDataType`
	 * labeled alternative in `SparkSqlParser.dataType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveDataType?: (ctx: PrimitiveDataTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `SparkSqlParser.qualifiedColTypeWithPositionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedColTypeWithPositionList?: (ctx: QualifiedColTypeWithPositionListContext) => Result;
	/**
	 * Visit a parse tree produced by `SparkSqlParser.qualifiedColTypeWithPosition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedColTypeWithPosition?: (ctx: QualifiedColTypeWithPositionContext) => Result;
	/**
	 * Visit a parse tree produced by `SparkSqlParser.colTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColTypeList?: (ctx: ColTypeListContext) => Result;
	/**
	 * Visit a parse tree produced by `SparkSqlParser.colType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColType?: (ctx: ColTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `SparkSqlParser.complexColTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComplexColTypeList?: (ctx: ComplexColTypeListContext) => Result;
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
	 * Visit a parse tree produced by `SparkSqlParser.namedWindow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedWindow?: (ctx: NamedWindowContext) => Result;
	/**
	 * Visit a parse tree produced by the `windowRef`
	 * labeled alternative in `SparkSqlParser.windowSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowRef?: (ctx: WindowRefContext) => Result;
	/**
	 * Visit a parse tree produced by the `windowDef`
	 * labeled alternative in `SparkSqlParser.windowSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowDef?: (ctx: WindowDefContext) => Result;
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
	 * Visit a parse tree produced by the `errorIdent`
	 * labeled alternative in `SparkSqlParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErrorIdent?: (ctx: ErrorIdentContext) => Result;
	/**
	 * Visit a parse tree produced by the `realIdent`
	 * labeled alternative in `SparkSqlParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRealIdent?: (ctx: RealIdentContext) => Result;
	/**
	 * Visit a parse tree produced by `SparkSqlParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by the `unquotedIdentifier`
	 * labeled alternative in `SparkSqlParser.strictIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by the `quotedIdentifierAlternative`
	 * labeled alternative in `SparkSqlParser.strictIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuotedIdentifierAlternative?: (ctx: QuotedIdentifierAlternativeContext) => Result;
	/**
	 * Visit a parse tree produced by `SparkSqlParser.quotedIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by the `exponentLiteral`
	 * labeled alternative in `SparkSqlParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExponentLiteral?: (ctx: ExponentLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `decimalLiteral`
	 * labeled alternative in `SparkSqlParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimalLiteral?: (ctx: DecimalLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `legacyDecimalLiteral`
	 * labeled alternative in `SparkSqlParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLegacyDecimalLiteral?: (ctx: LegacyDecimalLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `integerLiteral`
	 * labeled alternative in `SparkSqlParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerLiteral?: (ctx: IntegerLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `bigIntLiteral`
	 * labeled alternative in `SparkSqlParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBigIntLiteral?: (ctx: BigIntLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `smallIntLiteral`
	 * labeled alternative in `SparkSqlParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSmallIntLiteral?: (ctx: SmallIntLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `tinyIntLiteral`
	 * labeled alternative in `SparkSqlParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTinyIntLiteral?: (ctx: TinyIntLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `doubleLiteral`
	 * labeled alternative in `SparkSqlParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoubleLiteral?: (ctx: DoubleLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `floatLiteral`
	 * labeled alternative in `SparkSqlParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatLiteral?: (ctx: FloatLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `bigDecimalLiteral`
	 * labeled alternative in `SparkSqlParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBigDecimalLiteral?: (ctx: BigDecimalLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `SparkSqlParser.alterColumnAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterColumnAction?: (ctx: AlterColumnActionContext) => Result;
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

