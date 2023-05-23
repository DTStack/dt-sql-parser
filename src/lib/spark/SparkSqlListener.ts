// Generated from /Users/ziv/github.com/dt-sql-parser/src/grammar/spark/SparkSql.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { TableNameContext } from "./SparkSqlParser";
import { AliasedQueryContext } from "./SparkSqlParser";
import { AliasedRelationContext } from "./SparkSqlParser";
import { InlineTableDefault2Context } from "./SparkSqlParser";
import { TableValuedFunctionContext } from "./SparkSqlParser";
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
import { QueryTermDefaultContext } from "./SparkSqlParser";
import { SetOperationContext } from "./SparkSqlParser";
import { InsertOverwriteTableContext } from "./SparkSqlParser";
import { InsertIntoTableContext } from "./SparkSqlParser";
import { InsertOverwriteHiveDirContext } from "./SparkSqlParser";
import { InsertOverwriteDirContext } from "./SparkSqlParser";
import { ValueExpressionDefaultContext } from "./SparkSqlParser";
import { ArithmeticUnaryContext } from "./SparkSqlParser";
import { ArithmeticBinaryContext } from "./SparkSqlParser";
import { ComparisonContext } from "./SparkSqlParser";
import { QueryPrimaryDefaultContext } from "./SparkSqlParser";
import { FromStmtContext } from "./SparkSqlParser";
import { TableContext } from "./SparkSqlParser";
import { InlineTableDefault1Context } from "./SparkSqlParser";
import { SubqueryContext } from "./SparkSqlParser";
import { SingleInsertQueryContext } from "./SparkSqlParser";
import { MultiInsertQueryContext } from "./SparkSqlParser";
import { DeleteFromTableContext } from "./SparkSqlParser";
import { UpdateTableContext } from "./SparkSqlParser";
import { MergeIntoTableContext } from "./SparkSqlParser";
import { CurrentDatetimeContext } from "./SparkSqlParser";
import { SearchedCaseContext } from "./SparkSqlParser";
import { SimpleCaseContext } from "./SparkSqlParser";
import { CastContext } from "./SparkSqlParser";
import { StructContext } from "./SparkSqlParser";
import { FirstContext } from "./SparkSqlParser";
import { LastContext } from "./SparkSqlParser";
import { PositionContext } from "./SparkSqlParser";
import { ConstantDefaultContext } from "./SparkSqlParser";
import { StarContext } from "./SparkSqlParser";
import { RowConstructorContext } from "./SparkSqlParser";
import { SubqueryExpressionContext } from "./SparkSqlParser";
import { FunctionCallContext } from "./SparkSqlParser";
import { LambdaContext } from "./SparkSqlParser";
import { SubscriptContext } from "./SparkSqlParser";
import { ColumnReferenceContext } from "./SparkSqlParser";
import { DereferenceContext } from "./SparkSqlParser";
import { ParenthesizedExpressionContext } from "./SparkSqlParser";
import { ExtractContext } from "./SparkSqlParser";
import { SubstringContext } from "./SparkSqlParser";
import { TrimContext } from "./SparkSqlParser";
import { OverlayContext } from "./SparkSqlParser";
import { UnquotedIdentifierContext } from "./SparkSqlParser";
import { QuotedIdentifierAlternativeContext } from "./SparkSqlParser";
import { TableFileFormatContext } from "./SparkSqlParser";
import { GenericFileFormatContext } from "./SparkSqlParser";
import { SampleByPercentileContext } from "./SparkSqlParser";
import { SampleByRowsContext } from "./SparkSqlParser";
import { SampleByBucketContext } from "./SparkSqlParser";
import { SampleByBytesContext } from "./SparkSqlParser";
import { NullLiteralContext } from "./SparkSqlParser";
import { IntervalLiteralContext } from "./SparkSqlParser";
import { TypeConstructorContext } from "./SparkSqlParser";
import { NumericLiteralContext } from "./SparkSqlParser";
import { BooleanLiteralContext } from "./SparkSqlParser";
import { StringLiteralContext } from "./SparkSqlParser";
import { RowFormatSerdeContext } from "./SparkSqlParser";
import { RowFormatDelimitedContext } from "./SparkSqlParser";
import { ComplexDataTypeContext } from "./SparkSqlParser";
import { PrimitiveDataTypeContext } from "./SparkSqlParser";
import { TransformQuerySpecificationContext } from "./SparkSqlParser";
import { RegularQuerySpecificationContext } from "./SparkSqlParser";
import { ErrorIdentContext } from "./SparkSqlParser";
import { RealIdentContext } from "./SparkSqlParser";
import { WindowRefContext } from "./SparkSqlParser";
import { WindowDefContext } from "./SparkSqlParser";
import { IdentityTransformContext } from "./SparkSqlParser";
import { ApplyTransformContext } from "./SparkSqlParser";
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
import { LogicalNotContext } from "./SparkSqlParser";
import { ExistsContext } from "./SparkSqlParser";
import { PredicatedContext } from "./SparkSqlParser";
import { LogicalBinaryContext } from "./SparkSqlParser";
import { ProgramContext } from "./SparkSqlParser";
import { SingleStatementContext } from "./SparkSqlParser";
import { EmptyStatementContext } from "./SparkSqlParser";
import { SingleExpressionContext } from "./SparkSqlParser";
import { SingleTableIdentifierContext } from "./SparkSqlParser";
import { SingleMultipartIdentifierContext } from "./SparkSqlParser";
import { SingleDataTypeContext } from "./SparkSqlParser";
import { SingleTableSchemaContext } from "./SparkSqlParser";
import { StatementContext } from "./SparkSqlParser";
import { ConfigKeyContext } from "./SparkSqlParser";
import { UnsupportedHiveNativeCommandsContext } from "./SparkSqlParser";
import { CreateTableHeaderContext } from "./SparkSqlParser";
import { ReplaceTableHeaderContext } from "./SparkSqlParser";
import { BucketSpecContext } from "./SparkSqlParser";
import { SkewSpecContext } from "./SparkSqlParser";
import { LocationSpecContext } from "./SparkSqlParser";
import { CommentSpecContext } from "./SparkSqlParser";
import { QueryContext } from "./SparkSqlParser";
import { InsertIntoContext } from "./SparkSqlParser";
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
import { FileFormatContext } from "./SparkSqlParser";
import { StorageHandlerContext } from "./SparkSqlParser";
import { ResourceContext } from "./SparkSqlParser";
import { DmlStatementNoWithContext } from "./SparkSqlParser";
import { QueryOrganizationContext } from "./SparkSqlParser";
import { MultiInsertQueryBodyContext } from "./SparkSqlParser";
import { QueryTermContext } from "./SparkSqlParser";
import { QueryPrimaryContext } from "./SparkSqlParser";
import { SortItemContext } from "./SparkSqlParser";
import { FromStatementContext } from "./SparkSqlParser";
import { FromStatementBodyContext } from "./SparkSqlParser";
import { QuerySpecificationContext } from "./SparkSqlParser";
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
import { SampleMethodContext } from "./SparkSqlParser";
import { IdentifierListContext } from "./SparkSqlParser";
import { IdentifierSeqContext } from "./SparkSqlParser";
import { OrderedIdentifierListContext } from "./SparkSqlParser";
import { OrderedIdentifierContext } from "./SparkSqlParser";
import { IdentifierCommentListContext } from "./SparkSqlParser";
import { IdentifierCommentContext } from "./SparkSqlParser";
import { RelationPrimaryContext } from "./SparkSqlParser";
import { InlineTableContext } from "./SparkSqlParser";
import { FunctionTableContext } from "./SparkSqlParser";
import { TableAliasContext } from "./SparkSqlParser";
import { RowFormatContext } from "./SparkSqlParser";
import { MultipartIdentifierListContext } from "./SparkSqlParser";
import { MultipartIdentifierContext } from "./SparkSqlParser";
import { TableIdentifierContext } from "./SparkSqlParser";
import { NamedExpressionContext } from "./SparkSqlParser";
import { NamedExpressionSeqContext } from "./SparkSqlParser";
import { TransformListContext } from "./SparkSqlParser";
import { TransformContext } from "./SparkSqlParser";
import { TransformArgumentContext } from "./SparkSqlParser";
import { ExpressionContext } from "./SparkSqlParser";
import { BooleanExpressionContext } from "./SparkSqlParser";
import { PredicateContext } from "./SparkSqlParser";
import { ValueExpressionContext } from "./SparkSqlParser";
import { PrimaryExpressionContext } from "./SparkSqlParser";
import { ConstantContext } from "./SparkSqlParser";
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
import { DataTypeContext } from "./SparkSqlParser";
import { QualifiedColTypeWithPositionListContext } from "./SparkSqlParser";
import { QualifiedColTypeWithPositionContext } from "./SparkSqlParser";
import { ColTypeListContext } from "./SparkSqlParser";
import { ColTypeContext } from "./SparkSqlParser";
import { ComplexColTypeListContext } from "./SparkSqlParser";
import { ComplexColTypeContext } from "./SparkSqlParser";
import { WhenClauseContext } from "./SparkSqlParser";
import { WindowClauseContext } from "./SparkSqlParser";
import { NamedWindowContext } from "./SparkSqlParser";
import { WindowSpecContext } from "./SparkSqlParser";
import { WindowFrameContext } from "./SparkSqlParser";
import { FrameBoundContext } from "./SparkSqlParser";
import { QualifiedNameListContext } from "./SparkSqlParser";
import { FunctionNameContext } from "./SparkSqlParser";
import { QualifiedNameContext } from "./SparkSqlParser";
import { ErrorCapturingIdentifierContext } from "./SparkSqlParser";
import { ErrorCapturingIdentifierExtraContext } from "./SparkSqlParser";
import { IdentifierContext } from "./SparkSqlParser";
import { StrictIdentifierContext } from "./SparkSqlParser";
import { QuotedIdentifierContext } from "./SparkSqlParser";
import { NumberContext } from "./SparkSqlParser";
import { AlterColumnActionContext } from "./SparkSqlParser";
import { AnsiNonReservedContext } from "./SparkSqlParser";
import { StrictNonReservedContext } from "./SparkSqlParser";
import { NonReservedContext } from "./SparkSqlParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SparkSqlParser`.
 */
export interface SparkSqlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `tableName`
	 * labeled alternative in `SparkSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterTableName?: (ctx: TableNameContext) => void;
	/**
	 * Exit a parse tree produced by the `tableName`
	 * labeled alternative in `SparkSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitTableName?: (ctx: TableNameContext) => void;

	/**
	 * Enter a parse tree produced by the `aliasedQuery`
	 * labeled alternative in `SparkSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterAliasedQuery?: (ctx: AliasedQueryContext) => void;
	/**
	 * Exit a parse tree produced by the `aliasedQuery`
	 * labeled alternative in `SparkSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitAliasedQuery?: (ctx: AliasedQueryContext) => void;

	/**
	 * Enter a parse tree produced by the `aliasedRelation`
	 * labeled alternative in `SparkSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterAliasedRelation?: (ctx: AliasedRelationContext) => void;
	/**
	 * Exit a parse tree produced by the `aliasedRelation`
	 * labeled alternative in `SparkSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitAliasedRelation?: (ctx: AliasedRelationContext) => void;

	/**
	 * Enter a parse tree produced by the `inlineTableDefault2`
	 * labeled alternative in `SparkSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterInlineTableDefault2?: (ctx: InlineTableDefault2Context) => void;
	/**
	 * Exit a parse tree produced by the `inlineTableDefault2`
	 * labeled alternative in `SparkSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitInlineTableDefault2?: (ctx: InlineTableDefault2Context) => void;

	/**
	 * Enter a parse tree produced by the `tableValuedFunction`
	 * labeled alternative in `SparkSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterTableValuedFunction?: (ctx: TableValuedFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `tableValuedFunction`
	 * labeled alternative in `SparkSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitTableValuedFunction?: (ctx: TableValuedFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `exponentLiteral`
	 * labeled alternative in `SparkSqlParser.number`.
	 * @param ctx the parse tree
	 */
	enterExponentLiteral?: (ctx: ExponentLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `exponentLiteral`
	 * labeled alternative in `SparkSqlParser.number`.
	 * @param ctx the parse tree
	 */
	exitExponentLiteral?: (ctx: ExponentLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `decimalLiteral`
	 * labeled alternative in `SparkSqlParser.number`.
	 * @param ctx the parse tree
	 */
	enterDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `decimalLiteral`
	 * labeled alternative in `SparkSqlParser.number`.
	 * @param ctx the parse tree
	 */
	exitDecimalLiteral?: (ctx: DecimalLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `legacyDecimalLiteral`
	 * labeled alternative in `SparkSqlParser.number`.
	 * @param ctx the parse tree
	 */
	enterLegacyDecimalLiteral?: (ctx: LegacyDecimalLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `legacyDecimalLiteral`
	 * labeled alternative in `SparkSqlParser.number`.
	 * @param ctx the parse tree
	 */
	exitLegacyDecimalLiteral?: (ctx: LegacyDecimalLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `integerLiteral`
	 * labeled alternative in `SparkSqlParser.number`.
	 * @param ctx the parse tree
	 */
	enterIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `integerLiteral`
	 * labeled alternative in `SparkSqlParser.number`.
	 * @param ctx the parse tree
	 */
	exitIntegerLiteral?: (ctx: IntegerLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `bigIntLiteral`
	 * labeled alternative in `SparkSqlParser.number`.
	 * @param ctx the parse tree
	 */
	enterBigIntLiteral?: (ctx: BigIntLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `bigIntLiteral`
	 * labeled alternative in `SparkSqlParser.number`.
	 * @param ctx the parse tree
	 */
	exitBigIntLiteral?: (ctx: BigIntLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `smallIntLiteral`
	 * labeled alternative in `SparkSqlParser.number`.
	 * @param ctx the parse tree
	 */
	enterSmallIntLiteral?: (ctx: SmallIntLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `smallIntLiteral`
	 * labeled alternative in `SparkSqlParser.number`.
	 * @param ctx the parse tree
	 */
	exitSmallIntLiteral?: (ctx: SmallIntLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `tinyIntLiteral`
	 * labeled alternative in `SparkSqlParser.number`.
	 * @param ctx the parse tree
	 */
	enterTinyIntLiteral?: (ctx: TinyIntLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `tinyIntLiteral`
	 * labeled alternative in `SparkSqlParser.number`.
	 * @param ctx the parse tree
	 */
	exitTinyIntLiteral?: (ctx: TinyIntLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `doubleLiteral`
	 * labeled alternative in `SparkSqlParser.number`.
	 * @param ctx the parse tree
	 */
	enterDoubleLiteral?: (ctx: DoubleLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `doubleLiteral`
	 * labeled alternative in `SparkSqlParser.number`.
	 * @param ctx the parse tree
	 */
	exitDoubleLiteral?: (ctx: DoubleLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `floatLiteral`
	 * labeled alternative in `SparkSqlParser.number`.
	 * @param ctx the parse tree
	 */
	enterFloatLiteral?: (ctx: FloatLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `floatLiteral`
	 * labeled alternative in `SparkSqlParser.number`.
	 * @param ctx the parse tree
	 */
	exitFloatLiteral?: (ctx: FloatLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `bigDecimalLiteral`
	 * labeled alternative in `SparkSqlParser.number`.
	 * @param ctx the parse tree
	 */
	enterBigDecimalLiteral?: (ctx: BigDecimalLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `bigDecimalLiteral`
	 * labeled alternative in `SparkSqlParser.number`.
	 * @param ctx the parse tree
	 */
	exitBigDecimalLiteral?: (ctx: BigDecimalLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `queryTermDefault`
	 * labeled alternative in `SparkSqlParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	enterQueryTermDefault?: (ctx: QueryTermDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `queryTermDefault`
	 * labeled alternative in `SparkSqlParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	exitQueryTermDefault?: (ctx: QueryTermDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `setOperation`
	 * labeled alternative in `SparkSqlParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	enterSetOperation?: (ctx: SetOperationContext) => void;
	/**
	 * Exit a parse tree produced by the `setOperation`
	 * labeled alternative in `SparkSqlParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	exitSetOperation?: (ctx: SetOperationContext) => void;

	/**
	 * Enter a parse tree produced by the `insertOverwriteTable`
	 * labeled alternative in `SparkSqlParser.insertInto`.
	 * @param ctx the parse tree
	 */
	enterInsertOverwriteTable?: (ctx: InsertOverwriteTableContext) => void;
	/**
	 * Exit a parse tree produced by the `insertOverwriteTable`
	 * labeled alternative in `SparkSqlParser.insertInto`.
	 * @param ctx the parse tree
	 */
	exitInsertOverwriteTable?: (ctx: InsertOverwriteTableContext) => void;

	/**
	 * Enter a parse tree produced by the `insertIntoTable`
	 * labeled alternative in `SparkSqlParser.insertInto`.
	 * @param ctx the parse tree
	 */
	enterInsertIntoTable?: (ctx: InsertIntoTableContext) => void;
	/**
	 * Exit a parse tree produced by the `insertIntoTable`
	 * labeled alternative in `SparkSqlParser.insertInto`.
	 * @param ctx the parse tree
	 */
	exitInsertIntoTable?: (ctx: InsertIntoTableContext) => void;

	/**
	 * Enter a parse tree produced by the `insertOverwriteHiveDir`
	 * labeled alternative in `SparkSqlParser.insertInto`.
	 * @param ctx the parse tree
	 */
	enterInsertOverwriteHiveDir?: (ctx: InsertOverwriteHiveDirContext) => void;
	/**
	 * Exit a parse tree produced by the `insertOverwriteHiveDir`
	 * labeled alternative in `SparkSqlParser.insertInto`.
	 * @param ctx the parse tree
	 */
	exitInsertOverwriteHiveDir?: (ctx: InsertOverwriteHiveDirContext) => void;

	/**
	 * Enter a parse tree produced by the `insertOverwriteDir`
	 * labeled alternative in `SparkSqlParser.insertInto`.
	 * @param ctx the parse tree
	 */
	enterInsertOverwriteDir?: (ctx: InsertOverwriteDirContext) => void;
	/**
	 * Exit a parse tree produced by the `insertOverwriteDir`
	 * labeled alternative in `SparkSqlParser.insertInto`.
	 * @param ctx the parse tree
	 */
	exitInsertOverwriteDir?: (ctx: InsertOverwriteDirContext) => void;

	/**
	 * Enter a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `SparkSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `SparkSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `SparkSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `SparkSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;

	/**
	 * Enter a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `SparkSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `SparkSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;

	/**
	 * Enter a parse tree produced by the `comparison`
	 * labeled alternative in `SparkSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Exit a parse tree produced by the `comparison`
	 * labeled alternative in `SparkSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitComparison?: (ctx: ComparisonContext) => void;

	/**
	 * Enter a parse tree produced by the `queryPrimaryDefault`
	 * labeled alternative in `SparkSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	enterQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `queryPrimaryDefault`
	 * labeled alternative in `SparkSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	exitQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `fromStmt`
	 * labeled alternative in `SparkSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	enterFromStmt?: (ctx: FromStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `fromStmt`
	 * labeled alternative in `SparkSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	exitFromStmt?: (ctx: FromStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `table`
	 * labeled alternative in `SparkSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	enterTable?: (ctx: TableContext) => void;
	/**
	 * Exit a parse tree produced by the `table`
	 * labeled alternative in `SparkSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	exitTable?: (ctx: TableContext) => void;

	/**
	 * Enter a parse tree produced by the `inlineTableDefault1`
	 * labeled alternative in `SparkSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	enterInlineTableDefault1?: (ctx: InlineTableDefault1Context) => void;
	/**
	 * Exit a parse tree produced by the `inlineTableDefault1`
	 * labeled alternative in `SparkSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	exitInlineTableDefault1?: (ctx: InlineTableDefault1Context) => void;

	/**
	 * Enter a parse tree produced by the `subquery`
	 * labeled alternative in `SparkSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	enterSubquery?: (ctx: SubqueryContext) => void;
	/**
	 * Exit a parse tree produced by the `subquery`
	 * labeled alternative in `SparkSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	exitSubquery?: (ctx: SubqueryContext) => void;

	/**
	 * Enter a parse tree produced by the `singleInsertQuery`
	 * labeled alternative in `SparkSqlParser.dmlStatementNoWith`.
	 * @param ctx the parse tree
	 */
	enterSingleInsertQuery?: (ctx: SingleInsertQueryContext) => void;
	/**
	 * Exit a parse tree produced by the `singleInsertQuery`
	 * labeled alternative in `SparkSqlParser.dmlStatementNoWith`.
	 * @param ctx the parse tree
	 */
	exitSingleInsertQuery?: (ctx: SingleInsertQueryContext) => void;

	/**
	 * Enter a parse tree produced by the `multiInsertQuery`
	 * labeled alternative in `SparkSqlParser.dmlStatementNoWith`.
	 * @param ctx the parse tree
	 */
	enterMultiInsertQuery?: (ctx: MultiInsertQueryContext) => void;
	/**
	 * Exit a parse tree produced by the `multiInsertQuery`
	 * labeled alternative in `SparkSqlParser.dmlStatementNoWith`.
	 * @param ctx the parse tree
	 */
	exitMultiInsertQuery?: (ctx: MultiInsertQueryContext) => void;

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
	 * Enter a parse tree produced by the `currentDatetime`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterCurrentDatetime?: (ctx: CurrentDatetimeContext) => void;
	/**
	 * Exit a parse tree produced by the `currentDatetime`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitCurrentDatetime?: (ctx: CurrentDatetimeContext) => void;

	/**
	 * Enter a parse tree produced by the `searchedCase`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSearchedCase?: (ctx: SearchedCaseContext) => void;
	/**
	 * Exit a parse tree produced by the `searchedCase`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSearchedCase?: (ctx: SearchedCaseContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleCase`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSimpleCase?: (ctx: SimpleCaseContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleCase`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSimpleCase?: (ctx: SimpleCaseContext) => void;

	/**
	 * Enter a parse tree produced by the `cast`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterCast?: (ctx: CastContext) => void;
	/**
	 * Exit a parse tree produced by the `cast`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitCast?: (ctx: CastContext) => void;

	/**
	 * Enter a parse tree produced by the `struct`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterStruct?: (ctx: StructContext) => void;
	/**
	 * Exit a parse tree produced by the `struct`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitStruct?: (ctx: StructContext) => void;

	/**
	 * Enter a parse tree produced by the `first`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterFirst?: (ctx: FirstContext) => void;
	/**
	 * Exit a parse tree produced by the `first`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitFirst?: (ctx: FirstContext) => void;

	/**
	 * Enter a parse tree produced by the `last`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterLast?: (ctx: LastContext) => void;
	/**
	 * Exit a parse tree produced by the `last`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitLast?: (ctx: LastContext) => void;

	/**
	 * Enter a parse tree produced by the `position`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPosition?: (ctx: PositionContext) => void;
	/**
	 * Exit a parse tree produced by the `position`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPosition?: (ctx: PositionContext) => void;

	/**
	 * Enter a parse tree produced by the `constantDefault`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterConstantDefault?: (ctx: ConstantDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `constantDefault`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitConstantDefault?: (ctx: ConstantDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `star`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterStar?: (ctx: StarContext) => void;
	/**
	 * Exit a parse tree produced by the `star`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitStar?: (ctx: StarContext) => void;

	/**
	 * Enter a parse tree produced by the `rowConstructor`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterRowConstructor?: (ctx: RowConstructorContext) => void;
	/**
	 * Exit a parse tree produced by the `rowConstructor`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitRowConstructor?: (ctx: RowConstructorContext) => void;

	/**
	 * Enter a parse tree produced by the `subqueryExpression`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `subqueryExpression`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `functionCall`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `functionCall`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by the `lambda`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterLambda?: (ctx: LambdaContext) => void;
	/**
	 * Exit a parse tree produced by the `lambda`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitLambda?: (ctx: LambdaContext) => void;

	/**
	 * Enter a parse tree produced by the `subscript`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSubscript?: (ctx: SubscriptContext) => void;
	/**
	 * Exit a parse tree produced by the `subscript`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSubscript?: (ctx: SubscriptContext) => void;

	/**
	 * Enter a parse tree produced by the `columnReference`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterColumnReference?: (ctx: ColumnReferenceContext) => void;
	/**
	 * Exit a parse tree produced by the `columnReference`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitColumnReference?: (ctx: ColumnReferenceContext) => void;

	/**
	 * Enter a parse tree produced by the `dereference`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterDereference?: (ctx: DereferenceContext) => void;
	/**
	 * Exit a parse tree produced by the `dereference`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitDereference?: (ctx: DereferenceContext) => void;

	/**
	 * Enter a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `extract`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterExtract?: (ctx: ExtractContext) => void;
	/**
	 * Exit a parse tree produced by the `extract`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitExtract?: (ctx: ExtractContext) => void;

	/**
	 * Enter a parse tree produced by the `substring`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSubstring?: (ctx: SubstringContext) => void;
	/**
	 * Exit a parse tree produced by the `substring`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSubstring?: (ctx: SubstringContext) => void;

	/**
	 * Enter a parse tree produced by the `trim`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterTrim?: (ctx: TrimContext) => void;
	/**
	 * Exit a parse tree produced by the `trim`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitTrim?: (ctx: TrimContext) => void;

	/**
	 * Enter a parse tree produced by the `overlay`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterOverlay?: (ctx: OverlayContext) => void;
	/**
	 * Exit a parse tree produced by the `overlay`
	 * labeled alternative in `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitOverlay?: (ctx: OverlayContext) => void;

	/**
	 * Enter a parse tree produced by the `unquotedIdentifier`
	 * labeled alternative in `SparkSqlParser.strictIdentifier`.
	 * @param ctx the parse tree
	 */
	enterUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `unquotedIdentifier`
	 * labeled alternative in `SparkSqlParser.strictIdentifier`.
	 * @param ctx the parse tree
	 */
	exitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by the `quotedIdentifierAlternative`
	 * labeled alternative in `SparkSqlParser.strictIdentifier`.
	 * @param ctx the parse tree
	 */
	enterQuotedIdentifierAlternative?: (ctx: QuotedIdentifierAlternativeContext) => void;
	/**
	 * Exit a parse tree produced by the `quotedIdentifierAlternative`
	 * labeled alternative in `SparkSqlParser.strictIdentifier`.
	 * @param ctx the parse tree
	 */
	exitQuotedIdentifierAlternative?: (ctx: QuotedIdentifierAlternativeContext) => void;

	/**
	 * Enter a parse tree produced by the `tableFileFormat`
	 * labeled alternative in `SparkSqlParser.fileFormat`.
	 * @param ctx the parse tree
	 */
	enterTableFileFormat?: (ctx: TableFileFormatContext) => void;
	/**
	 * Exit a parse tree produced by the `tableFileFormat`
	 * labeled alternative in `SparkSqlParser.fileFormat`.
	 * @param ctx the parse tree
	 */
	exitTableFileFormat?: (ctx: TableFileFormatContext) => void;

	/**
	 * Enter a parse tree produced by the `genericFileFormat`
	 * labeled alternative in `SparkSqlParser.fileFormat`.
	 * @param ctx the parse tree
	 */
	enterGenericFileFormat?: (ctx: GenericFileFormatContext) => void;
	/**
	 * Exit a parse tree produced by the `genericFileFormat`
	 * labeled alternative in `SparkSqlParser.fileFormat`.
	 * @param ctx the parse tree
	 */
	exitGenericFileFormat?: (ctx: GenericFileFormatContext) => void;

	/**
	 * Enter a parse tree produced by the `sampleByPercentile`
	 * labeled alternative in `SparkSqlParser.sampleMethod`.
	 * @param ctx the parse tree
	 */
	enterSampleByPercentile?: (ctx: SampleByPercentileContext) => void;
	/**
	 * Exit a parse tree produced by the `sampleByPercentile`
	 * labeled alternative in `SparkSqlParser.sampleMethod`.
	 * @param ctx the parse tree
	 */
	exitSampleByPercentile?: (ctx: SampleByPercentileContext) => void;

	/**
	 * Enter a parse tree produced by the `sampleByRows`
	 * labeled alternative in `SparkSqlParser.sampleMethod`.
	 * @param ctx the parse tree
	 */
	enterSampleByRows?: (ctx: SampleByRowsContext) => void;
	/**
	 * Exit a parse tree produced by the `sampleByRows`
	 * labeled alternative in `SparkSqlParser.sampleMethod`.
	 * @param ctx the parse tree
	 */
	exitSampleByRows?: (ctx: SampleByRowsContext) => void;

	/**
	 * Enter a parse tree produced by the `sampleByBucket`
	 * labeled alternative in `SparkSqlParser.sampleMethod`.
	 * @param ctx the parse tree
	 */
	enterSampleByBucket?: (ctx: SampleByBucketContext) => void;
	/**
	 * Exit a parse tree produced by the `sampleByBucket`
	 * labeled alternative in `SparkSqlParser.sampleMethod`.
	 * @param ctx the parse tree
	 */
	exitSampleByBucket?: (ctx: SampleByBucketContext) => void;

	/**
	 * Enter a parse tree produced by the `sampleByBytes`
	 * labeled alternative in `SparkSqlParser.sampleMethod`.
	 * @param ctx the parse tree
	 */
	enterSampleByBytes?: (ctx: SampleByBytesContext) => void;
	/**
	 * Exit a parse tree produced by the `sampleByBytes`
	 * labeled alternative in `SparkSqlParser.sampleMethod`.
	 * @param ctx the parse tree
	 */
	exitSampleByBytes?: (ctx: SampleByBytesContext) => void;

	/**
	 * Enter a parse tree produced by the `nullLiteral`
	 * labeled alternative in `SparkSqlParser.constant`.
	 * @param ctx the parse tree
	 */
	enterNullLiteral?: (ctx: NullLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `nullLiteral`
	 * labeled alternative in `SparkSqlParser.constant`.
	 * @param ctx the parse tree
	 */
	exitNullLiteral?: (ctx: NullLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `intervalLiteral`
	 * labeled alternative in `SparkSqlParser.constant`.
	 * @param ctx the parse tree
	 */
	enterIntervalLiteral?: (ctx: IntervalLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `intervalLiteral`
	 * labeled alternative in `SparkSqlParser.constant`.
	 * @param ctx the parse tree
	 */
	exitIntervalLiteral?: (ctx: IntervalLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `typeConstructor`
	 * labeled alternative in `SparkSqlParser.constant`.
	 * @param ctx the parse tree
	 */
	enterTypeConstructor?: (ctx: TypeConstructorContext) => void;
	/**
	 * Exit a parse tree produced by the `typeConstructor`
	 * labeled alternative in `SparkSqlParser.constant`.
	 * @param ctx the parse tree
	 */
	exitTypeConstructor?: (ctx: TypeConstructorContext) => void;

	/**
	 * Enter a parse tree produced by the `numericLiteral`
	 * labeled alternative in `SparkSqlParser.constant`.
	 * @param ctx the parse tree
	 */
	enterNumericLiteral?: (ctx: NumericLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `numericLiteral`
	 * labeled alternative in `SparkSqlParser.constant`.
	 * @param ctx the parse tree
	 */
	exitNumericLiteral?: (ctx: NumericLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `SparkSqlParser.constant`.
	 * @param ctx the parse tree
	 */
	enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `SparkSqlParser.constant`.
	 * @param ctx the parse tree
	 */
	exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `stringLiteral`
	 * labeled alternative in `SparkSqlParser.constant`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `stringLiteral`
	 * labeled alternative in `SparkSqlParser.constant`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `rowFormatSerde`
	 * labeled alternative in `SparkSqlParser.rowFormat`.
	 * @param ctx the parse tree
	 */
	enterRowFormatSerde?: (ctx: RowFormatSerdeContext) => void;
	/**
	 * Exit a parse tree produced by the `rowFormatSerde`
	 * labeled alternative in `SparkSqlParser.rowFormat`.
	 * @param ctx the parse tree
	 */
	exitRowFormatSerde?: (ctx: RowFormatSerdeContext) => void;

	/**
	 * Enter a parse tree produced by the `rowFormatDelimited`
	 * labeled alternative in `SparkSqlParser.rowFormat`.
	 * @param ctx the parse tree
	 */
	enterRowFormatDelimited?: (ctx: RowFormatDelimitedContext) => void;
	/**
	 * Exit a parse tree produced by the `rowFormatDelimited`
	 * labeled alternative in `SparkSqlParser.rowFormat`.
	 * @param ctx the parse tree
	 */
	exitRowFormatDelimited?: (ctx: RowFormatDelimitedContext) => void;

	/**
	 * Enter a parse tree produced by the `complexDataType`
	 * labeled alternative in `SparkSqlParser.dataType`.
	 * @param ctx the parse tree
	 */
	enterComplexDataType?: (ctx: ComplexDataTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `complexDataType`
	 * labeled alternative in `SparkSqlParser.dataType`.
	 * @param ctx the parse tree
	 */
	exitComplexDataType?: (ctx: ComplexDataTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `primitiveDataType`
	 * labeled alternative in `SparkSqlParser.dataType`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveDataType?: (ctx: PrimitiveDataTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `primitiveDataType`
	 * labeled alternative in `SparkSqlParser.dataType`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveDataType?: (ctx: PrimitiveDataTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `transformQuerySpecification`
	 * labeled alternative in `SparkSqlParser.querySpecification`.
	 * @param ctx the parse tree
	 */
	enterTransformQuerySpecification?: (ctx: TransformQuerySpecificationContext) => void;
	/**
	 * Exit a parse tree produced by the `transformQuerySpecification`
	 * labeled alternative in `SparkSqlParser.querySpecification`.
	 * @param ctx the parse tree
	 */
	exitTransformQuerySpecification?: (ctx: TransformQuerySpecificationContext) => void;

	/**
	 * Enter a parse tree produced by the `regularQuerySpecification`
	 * labeled alternative in `SparkSqlParser.querySpecification`.
	 * @param ctx the parse tree
	 */
	enterRegularQuerySpecification?: (ctx: RegularQuerySpecificationContext) => void;
	/**
	 * Exit a parse tree produced by the `regularQuerySpecification`
	 * labeled alternative in `SparkSqlParser.querySpecification`.
	 * @param ctx the parse tree
	 */
	exitRegularQuerySpecification?: (ctx: RegularQuerySpecificationContext) => void;

	/**
	 * Enter a parse tree produced by the `errorIdent`
	 * labeled alternative in `SparkSqlParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 */
	enterErrorIdent?: (ctx: ErrorIdentContext) => void;
	/**
	 * Exit a parse tree produced by the `errorIdent`
	 * labeled alternative in `SparkSqlParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 */
	exitErrorIdent?: (ctx: ErrorIdentContext) => void;

	/**
	 * Enter a parse tree produced by the `realIdent`
	 * labeled alternative in `SparkSqlParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 */
	enterRealIdent?: (ctx: RealIdentContext) => void;
	/**
	 * Exit a parse tree produced by the `realIdent`
	 * labeled alternative in `SparkSqlParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 */
	exitRealIdent?: (ctx: RealIdentContext) => void;

	/**
	 * Enter a parse tree produced by the `windowRef`
	 * labeled alternative in `SparkSqlParser.windowSpec`.
	 * @param ctx the parse tree
	 */
	enterWindowRef?: (ctx: WindowRefContext) => void;
	/**
	 * Exit a parse tree produced by the `windowRef`
	 * labeled alternative in `SparkSqlParser.windowSpec`.
	 * @param ctx the parse tree
	 */
	exitWindowRef?: (ctx: WindowRefContext) => void;

	/**
	 * Enter a parse tree produced by the `windowDef`
	 * labeled alternative in `SparkSqlParser.windowSpec`.
	 * @param ctx the parse tree
	 */
	enterWindowDef?: (ctx: WindowDefContext) => void;
	/**
	 * Exit a parse tree produced by the `windowDef`
	 * labeled alternative in `SparkSqlParser.windowSpec`.
	 * @param ctx the parse tree
	 */
	exitWindowDef?: (ctx: WindowDefContext) => void;

	/**
	 * Enter a parse tree produced by the `identityTransform`
	 * labeled alternative in `SparkSqlParser.transform`.
	 * @param ctx the parse tree
	 */
	enterIdentityTransform?: (ctx: IdentityTransformContext) => void;
	/**
	 * Exit a parse tree produced by the `identityTransform`
	 * labeled alternative in `SparkSqlParser.transform`.
	 * @param ctx the parse tree
	 */
	exitIdentityTransform?: (ctx: IdentityTransformContext) => void;

	/**
	 * Enter a parse tree produced by the `applyTransform`
	 * labeled alternative in `SparkSqlParser.transform`.
	 * @param ctx the parse tree
	 */
	enterApplyTransform?: (ctx: ApplyTransformContext) => void;
	/**
	 * Exit a parse tree produced by the `applyTransform`
	 * labeled alternative in `SparkSqlParser.transform`.
	 * @param ctx the parse tree
	 */
	exitApplyTransform?: (ctx: ApplyTransformContext) => void;

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
	 * Enter a parse tree produced by the `use`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterUse?: (ctx: UseContext) => void;
	/**
	 * Exit a parse tree produced by the `use`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitUse?: (ctx: UseContext) => void;

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
	 * Enter a parse tree produced by the `createHiveTable`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateHiveTable?: (ctx: CreateHiveTableContext) => void;
	/**
	 * Exit a parse tree produced by the `createHiveTable`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateHiveTable?: (ctx: CreateHiveTableContext) => void;

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
	 * Enter a parse tree produced by the `addTableColumns`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterAddTableColumns?: (ctx: AddTableColumnsContext) => void;
	/**
	 * Exit a parse tree produced by the `addTableColumns`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitAddTableColumns?: (ctx: AddTableColumnsContext) => void;

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
	 * Enter a parse tree produced by the `explain`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterExplain?: (ctx: ExplainContext) => void;
	/**
	 * Exit a parse tree produced by the `explain`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitExplain?: (ctx: ExplainContext) => void;

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
	 * Enter a parse tree produced by the `showTable`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowTable?: (ctx: ShowTableContext) => void;
	/**
	 * Exit a parse tree produced by the `showTable`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowTable?: (ctx: ShowTableContext) => void;

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
	 * Enter a parse tree produced by the `uncacheTable`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterUncacheTable?: (ctx: UncacheTableContext) => void;
	/**
	 * Exit a parse tree produced by the `uncacheTable`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitUncacheTable?: (ctx: UncacheTableContext) => void;

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
	 * Enter a parse tree produced by the `setQuotedConfiguration`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSetQuotedConfiguration?: (ctx: SetQuotedConfigurationContext) => void;
	/**
	 * Exit a parse tree produced by the `setQuotedConfiguration`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSetQuotedConfiguration?: (ctx: SetQuotedConfigurationContext) => void;

	/**
	 * Enter a parse tree produced by the `setConfiguration`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSetConfiguration?: (ctx: SetConfigurationContext) => void;
	/**
	 * Exit a parse tree produced by the `setConfiguration`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSetConfiguration?: (ctx: SetConfigurationContext) => void;

	/**
	 * Enter a parse tree produced by the `resetQuotedConfiguration`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterResetQuotedConfiguration?: (ctx: ResetQuotedConfigurationContext) => void;
	/**
	 * Exit a parse tree produced by the `resetQuotedConfiguration`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitResetQuotedConfiguration?: (ctx: ResetQuotedConfigurationContext) => void;

	/**
	 * Enter a parse tree produced by the `resetConfiguration`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterResetConfiguration?: (ctx: ResetConfigurationContext) => void;
	/**
	 * Exit a parse tree produced by the `resetConfiguration`
	 * labeled alternative in `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitResetConfiguration?: (ctx: ResetConfigurationContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalNot`
	 * labeled alternative in `SparkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalNot?: (ctx: LogicalNotContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalNot`
	 * labeled alternative in `SparkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalNot?: (ctx: LogicalNotContext) => void;

	/**
	 * Enter a parse tree produced by the `exists`
	 * labeled alternative in `SparkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterExists?: (ctx: ExistsContext) => void;
	/**
	 * Exit a parse tree produced by the `exists`
	 * labeled alternative in `SparkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitExists?: (ctx: ExistsContext) => void;

	/**
	 * Enter a parse tree produced by the `predicated`
	 * labeled alternative in `SparkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterPredicated?: (ctx: PredicatedContext) => void;
	/**
	 * Exit a parse tree produced by the `predicated`
	 * labeled alternative in `SparkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitPredicated?: (ctx: PredicatedContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalBinary`
	 * labeled alternative in `SparkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalBinary?: (ctx: LogicalBinaryContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalBinary`
	 * labeled alternative in `SparkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalBinary?: (ctx: LogicalBinaryContext) => void;

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
	 * Enter a parse tree produced by `SparkSqlParser.emptyStatement`.
	 * @param ctx the parse tree
	 */
	enterEmptyStatement?: (ctx: EmptyStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.emptyStatement`.
	 * @param ctx the parse tree
	 */
	exitEmptyStatement?: (ctx: EmptyStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterSingleExpression?: (ctx: SingleExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitSingleExpression?: (ctx: SingleExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.singleTableIdentifier`.
	 * @param ctx the parse tree
	 */
	enterSingleTableIdentifier?: (ctx: SingleTableIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.singleTableIdentifier`.
	 * @param ctx the parse tree
	 */
	exitSingleTableIdentifier?: (ctx: SingleTableIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.singleMultipartIdentifier`.
	 * @param ctx the parse tree
	 */
	enterSingleMultipartIdentifier?: (ctx: SingleMultipartIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.singleMultipartIdentifier`.
	 * @param ctx the parse tree
	 */
	exitSingleMultipartIdentifier?: (ctx: SingleMultipartIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.singleDataType`.
	 * @param ctx the parse tree
	 */
	enterSingleDataType?: (ctx: SingleDataTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.singleDataType`.
	 * @param ctx the parse tree
	 */
	exitSingleDataType?: (ctx: SingleDataTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.singleTableSchema`.
	 * @param ctx the parse tree
	 */
	enterSingleTableSchema?: (ctx: SingleTableSchemaContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.singleTableSchema`.
	 * @param ctx the parse tree
	 */
	exitSingleTableSchema?: (ctx: SingleTableSchemaContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

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
	 * Enter a parse tree produced by `SparkSqlParser.query`.
	 * @param ctx the parse tree
	 */
	enterQuery?: (ctx: QueryContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.query`.
	 * @param ctx the parse tree
	 */
	exitQuery?: (ctx: QueryContext) => void;

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
	 * Enter a parse tree produced by `SparkSqlParser.tablePropertyList`.
	 * @param ctx the parse tree
	 */
	enterTablePropertyList?: (ctx: TablePropertyListContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.tablePropertyList`.
	 * @param ctx the parse tree
	 */
	exitTablePropertyList?: (ctx: TablePropertyListContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.tableProperty`.
	 * @param ctx the parse tree
	 */
	enterTableProperty?: (ctx: TablePropertyContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.tableProperty`.
	 * @param ctx the parse tree
	 */
	exitTableProperty?: (ctx: TablePropertyContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.tablePropertyKey`.
	 * @param ctx the parse tree
	 */
	enterTablePropertyKey?: (ctx: TablePropertyKeyContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.tablePropertyKey`.
	 * @param ctx the parse tree
	 */
	exitTablePropertyKey?: (ctx: TablePropertyKeyContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.tablePropertyValue`.
	 * @param ctx the parse tree
	 */
	enterTablePropertyValue?: (ctx: TablePropertyValueContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.tablePropertyValue`.
	 * @param ctx the parse tree
	 */
	exitTablePropertyValue?: (ctx: TablePropertyValueContext) => void;

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
	 * Enter a parse tree produced by `SparkSqlParser.dmlStatementNoWith`.
	 * @param ctx the parse tree
	 */
	enterDmlStatementNoWith?: (ctx: DmlStatementNoWithContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.dmlStatementNoWith`.
	 * @param ctx the parse tree
	 */
	exitDmlStatementNoWith?: (ctx: DmlStatementNoWithContext) => void;

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
	 * Enter a parse tree produced by `SparkSqlParser.transformList`.
	 * @param ctx the parse tree
	 */
	enterTransformList?: (ctx: TransformListContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.transformList`.
	 * @param ctx the parse tree
	 */
	exitTransformList?: (ctx: TransformListContext) => void;

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
	 * Enter a parse tree produced by `SparkSqlParser.qualifiedColTypeWithPositionList`.
	 * @param ctx the parse tree
	 */
	enterQualifiedColTypeWithPositionList?: (ctx: QualifiedColTypeWithPositionListContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.qualifiedColTypeWithPositionList`.
	 * @param ctx the parse tree
	 */
	exitQualifiedColTypeWithPositionList?: (ctx: QualifiedColTypeWithPositionListContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.qualifiedColTypeWithPosition`.
	 * @param ctx the parse tree
	 */
	enterQualifiedColTypeWithPosition?: (ctx: QualifiedColTypeWithPositionContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.qualifiedColTypeWithPosition`.
	 * @param ctx the parse tree
	 */
	exitQualifiedColTypeWithPosition?: (ctx: QualifiedColTypeWithPositionContext) => void;

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
}

