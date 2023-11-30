// Generated from dt-sql-parser/src/grammar/impala/ImpalaSqlParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { JoinRelationContext } from "./ImpalaSqlParser";
import { RelationDefaultContext } from "./ImpalaSqlParser";
import { ComparisonContext } from "./ImpalaSqlParser";
import { QuantifiedComparisonContext } from "./ImpalaSqlParser";
import { BetweenContext } from "./ImpalaSqlParser";
import { InListContext } from "./ImpalaSqlParser";
import { InSubqueryContext } from "./ImpalaSqlParser";
import { LikeContext } from "./ImpalaSqlParser";
import { REGEXPContext } from "./ImpalaSqlParser";
import { NullOrUnKnownOrBooleanPredicateContext } from "./ImpalaSqlParser";
import { DistinctFromContext } from "./ImpalaSqlParser";
import { DecimalLiteralContext } from "./ImpalaSqlParser";
import { DoubleLiteralContext } from "./ImpalaSqlParser";
import { IntegerLiteralContext } from "./ImpalaSqlParser";
import { QueryTermDefaultContext } from "./ImpalaSqlParser";
import { SetOperationContext } from "./ImpalaSqlParser";
import { UnquotedIdentifierContext } from "./ImpalaSqlParser";
import { QuotedIdentifierContext } from "./ImpalaSqlParser";
import { BackQuotedIdentifierContext } from "./ImpalaSqlParser";
import { DigitIdentifierContext } from "./ImpalaSqlParser";
import { SingleGroupingSetContext } from "./ImpalaSqlParser";
import { BasicStringLiteralContext } from "./ImpalaSqlParser";
import { UnicodeStringLiteralContext } from "./ImpalaSqlParser";
import { ValueExpressionDefaultContext } from "./ImpalaSqlParser";
import { ArithmeticUnaryContext } from "./ImpalaSqlParser";
import { ArithmeticBinaryContext } from "./ImpalaSqlParser";
import { ConcatenationContext } from "./ImpalaSqlParser";
import { UnboundedFrameContext } from "./ImpalaSqlParser";
import { CurrentRowBoundContext } from "./ImpalaSqlParser";
import { BoundedFrameContext } from "./ImpalaSqlParser";
import { QueryPrimaryDefaultContext } from "./ImpalaSqlParser";
import { TableContext } from "./ImpalaSqlParser";
import { InlineTableContext } from "./ImpalaSqlParser";
import { SubqueryContext } from "./ImpalaSqlParser";
import { NullLiteralContext } from "./ImpalaSqlParser";
import { IntervalLiteralContext } from "./ImpalaSqlParser";
import { TypeConstructorContext } from "./ImpalaSqlParser";
import { NumericLiteralContext } from "./ImpalaSqlParser";
import { BooleanLiteralContext } from "./ImpalaSqlParser";
import { StringLiteralValuesContext } from "./ImpalaSqlParser";
import { BinaryLiteralContext } from "./ImpalaSqlParser";
import { ParameterContext } from "./ImpalaSqlParser";
import { PositionContext } from "./ImpalaSqlParser";
import { RowConstructorContext } from "./ImpalaSqlParser";
import { FunctionCallContext } from "./ImpalaSqlParser";
import { LambdaContext } from "./ImpalaSqlParser";
import { SubqueryExpressionContext } from "./ImpalaSqlParser";
import { ExistsContext } from "./ImpalaSqlParser";
import { SimpleCaseContext } from "./ImpalaSqlParser";
import { SearchedCaseContext } from "./ImpalaSqlParser";
import { CastContext } from "./ImpalaSqlParser";
import { ArrayConstructorContext } from "./ImpalaSqlParser";
import { SubscriptContext } from "./ImpalaSqlParser";
import { ColumnReferenceContext } from "./ImpalaSqlParser";
import { DereferenceContext } from "./ImpalaSqlParser";
import { SpecialDateTimeFunctionContext } from "./ImpalaSqlParser";
import { CurrentUserContext } from "./ImpalaSqlParser";
import { CurrentPathContext } from "./ImpalaSqlParser";
import { SubstringContext } from "./ImpalaSqlParser";
import { NormalizeContext } from "./ImpalaSqlParser";
import { ExtractContext } from "./ImpalaSqlParser";
import { ParenthesizedExpressionContext } from "./ImpalaSqlParser";
import { GroupingOperationContext } from "./ImpalaSqlParser";
import { SelectSingleContext } from "./ImpalaSqlParser";
import { SelectAllContext } from "./ImpalaSqlParser";
import { QualifiedArgumentContext } from "./ImpalaSqlParser";
import { UnqualifiedArgumentContext } from "./ImpalaSqlParser";
import { RolePrincipalContext } from "./ImpalaSqlParser";
import { UserPrincipalContext } from "./ImpalaSqlParser";
import { GroupPrincipalContext } from "./ImpalaSqlParser";
import { PredicatedContext } from "./ImpalaSqlParser";
import { LogicalNotContext } from "./ImpalaSqlParser";
import { LogicalBinaryContext } from "./ImpalaSqlParser";
import { ProgramContext } from "./ImpalaSqlParser";
import { StatementContext } from "./ImpalaSqlParser";
import { SqlStatementsContext } from "./ImpalaSqlParser";
import { EmptyStatementContext } from "./ImpalaSqlParser";
import { SqlStatementContext } from "./ImpalaSqlParser";
import { UseStatementContext } from "./ImpalaSqlParser";
import { CreateStatementContext } from "./ImpalaSqlParser";
import { CreateTableSelectContext } from "./ImpalaSqlParser";
import { CreateTableLikeContext } from "./ImpalaSqlParser";
import { CreateKuduTableAsSelectContext } from "./ImpalaSqlParser";
import { CreateViewContext } from "./ImpalaSqlParser";
import { CreateSchemaContext } from "./ImpalaSqlParser";
import { CreateRoleContext } from "./ImpalaSqlParser";
import { CreateAggregateFunctionContext } from "./ImpalaSqlParser";
import { CreateFunctionContext } from "./ImpalaSqlParser";
import { AlterStatementContext } from "./ImpalaSqlParser";
import { AlterDatabaseContext } from "./ImpalaSqlParser";
import { AlterStatsKeyContext } from "./ImpalaSqlParser";
import { AlterPartitionCacheContext } from "./ImpalaSqlParser";
import { ChangeColumnDefineContext } from "./ImpalaSqlParser";
import { AlterDropSingleColumnContext } from "./ImpalaSqlParser";
import { AlterTableOwnerContext } from "./ImpalaSqlParser";
import { ReplaceOrAddColumnsContext } from "./ImpalaSqlParser";
import { AddSingleColumnContext } from "./ImpalaSqlParser";
import { AlterTableNonKuduOrKuduOnlyContext } from "./ImpalaSqlParser";
import { AddPartitionByRangeOrValueContext } from "./ImpalaSqlParser";
import { AlterFormatContext } from "./ImpalaSqlParser";
import { RecoverPartitionsContext } from "./ImpalaSqlParser";
import { DropPartitionByRangeOrValueContext } from "./ImpalaSqlParser";
import { AlterViewContext } from "./ImpalaSqlParser";
import { RenameViewContext } from "./ImpalaSqlParser";
import { AlterViewOwnerContext } from "./ImpalaSqlParser";
import { RenameTableContext } from "./ImpalaSqlParser";
import { AlterUnSetOrSetViewTblpropertiesContext } from "./ImpalaSqlParser";
import { TruncateTableStatementContext } from "./ImpalaSqlParser";
import { DescribeStatementContext } from "./ImpalaSqlParser";
import { ComputeStatementContext } from "./ImpalaSqlParser";
import { ComputeStatsContext } from "./ImpalaSqlParser";
import { ComputeIncrementalStatsContext } from "./ImpalaSqlParser";
import { DropStatementContext } from "./ImpalaSqlParser";
import { DropSchemaContext } from "./ImpalaSqlParser";
import { DropViewContext } from "./ImpalaSqlParser";
import { DropTableContext } from "./ImpalaSqlParser";
import { DropIncrementalStatsContext } from "./ImpalaSqlParser";
import { DropFunctionContext } from "./ImpalaSqlParser";
import { DropRoleContext } from "./ImpalaSqlParser";
import { GrantStatementContext } from "./ImpalaSqlParser";
import { GrantRoleContext } from "./ImpalaSqlParser";
import { GrantContext } from "./ImpalaSqlParser";
import { RevokeStatementContext } from "./ImpalaSqlParser";
import { RevokeRoleContext } from "./ImpalaSqlParser";
import { RevokeContext } from "./ImpalaSqlParser";
import { InsertStatementContext } from "./ImpalaSqlParser";
import { DeleteStatementContext } from "./ImpalaSqlParser";
import { DeleteContext } from "./ImpalaSqlParser";
import { DeleteTableRefContext } from "./ImpalaSqlParser";
import { UpdateStatementContext } from "./ImpalaSqlParser";
import { UpsertStatementContext } from "./ImpalaSqlParser";
import { ShowStatementContext } from "./ImpalaSqlParser";
import { ShowSchemasContext } from "./ImpalaSqlParser";
import { ShowTablesContext } from "./ImpalaSqlParser";
import { ShowFunctionsContext } from "./ImpalaSqlParser";
import { ShowCreateTableContext } from "./ImpalaSqlParser";
import { ShowCreateViewContext } from "./ImpalaSqlParser";
import { ShowTableStatsContext } from "./ImpalaSqlParser";
import { ShowColumnStatsContext } from "./ImpalaSqlParser";
import { ShowPartitionsContext } from "./ImpalaSqlParser";
import { ShowFilesContext } from "./ImpalaSqlParser";
import { ShowRolesContext } from "./ImpalaSqlParser";
import { ShowRoleGrantContext } from "./ImpalaSqlParser";
import { ShowGrantsContext } from "./ImpalaSqlParser";
import { ShowDatabaseGrantContext } from "./ImpalaSqlParser";
import { ShowTableGrantContext } from "./ImpalaSqlParser";
import { ShowColumnGrantContext } from "./ImpalaSqlParser";
import { AddCommentStatementContext } from "./ImpalaSqlParser";
import { AddDatabaseCommentsContext } from "./ImpalaSqlParser";
import { AddTableCommentsContext } from "./ImpalaSqlParser";
import { AddColumnCommentsContext } from "./ImpalaSqlParser";
import { ExplainStatementContext } from "./ImpalaSqlParser";
import { SetStatementContext } from "./ImpalaSqlParser";
import { ShutdownStatementContext } from "./ImpalaSqlParser";
import { InvalidateMetaStatementContext } from "./ImpalaSqlParser";
import { LoadDataStatementContext } from "./ImpalaSqlParser";
import { RefreshStatementContext } from "./ImpalaSqlParser";
import { RefreshMetaContext } from "./ImpalaSqlParser";
import { RefreshAuthContext } from "./ImpalaSqlParser";
import { RefreshFunctionContext } from "./ImpalaSqlParser";
import { IfExistsContext } from "./ImpalaSqlParser";
import { IfNotExistsContext } from "./ImpalaSqlParser";
import { TableNameCreateContext } from "./ImpalaSqlParser";
import { DatabaseNameCreateContext } from "./ImpalaSqlParser";
import { ViewNameCreateContext } from "./ImpalaSqlParser";
import { FunctionNameCreateContext } from "./ImpalaSqlParser";
import { ColumnNamePathCreateContext } from "./ImpalaSqlParser";
import { DatabaseNamePathContext } from "./ImpalaSqlParser";
import { TableNamePathContext } from "./ImpalaSqlParser";
import { ViewNamePathContext } from "./ImpalaSqlParser";
import { FunctionNamePathContext } from "./ImpalaSqlParser";
import { ColumnNamePathContext } from "./ImpalaSqlParser";
import { TableOrViewPathContext } from "./ImpalaSqlParser";
import { CreateCommonItemContext } from "./ImpalaSqlParser";
import { AssignmentListContext } from "./ImpalaSqlParser";
import { AssignmentItemContext } from "./ImpalaSqlParser";
import { ViewColumnsContext } from "./ImpalaSqlParser";
import { QueryStatementContext } from "./ImpalaSqlParser";
import { WithContext } from "./ImpalaSqlParser";
import { ConstraintSpecificationContext } from "./ImpalaSqlParser";
import { ForeignKeySpecificationContext } from "./ImpalaSqlParser";
import { ColumnDefinitionContext } from "./ImpalaSqlParser";
import { KuduTableElementContext } from "./ImpalaSqlParser";
import { KuduColumnDefinitionContext } from "./ImpalaSqlParser";
import { ColumnSpecWithKuduContext } from "./ImpalaSqlParser";
import { CreateColumnSpecWithKuduContext } from "./ImpalaSqlParser";
import { KuduAttributesContext } from "./ImpalaSqlParser";
import { KuduStorageAttrContext } from "./ImpalaSqlParser";
import { StatsKeyContext } from "./ImpalaSqlParser";
import { FileFormatContext } from "./ImpalaSqlParser";
import { KuduPartitionClauseContext } from "./ImpalaSqlParser";
import { HashClauseContext } from "./ImpalaSqlParser";
import { RangeClauseContext } from "./ImpalaSqlParser";
import { KuduPartitionSpecContext } from "./ImpalaSqlParser";
import { CacheSpecContext } from "./ImpalaSqlParser";
import { RangeOperatorContext } from "./ImpalaSqlParser";
import { PartitionColContext } from "./ImpalaSqlParser";
import { LikeClauseContext } from "./ImpalaSqlParser";
import { PropertiesContext } from "./ImpalaSqlParser";
import { PartitionedByContext } from "./ImpalaSqlParser";
import { SortedByContext } from "./ImpalaSqlParser";
import { RowFormatContext } from "./ImpalaSqlParser";
import { PropertyContext } from "./ImpalaSqlParser";
import { QueryNoWithContext } from "./ImpalaSqlParser";
import { QueryTermContext } from "./ImpalaSqlParser";
import { QueryPrimaryContext } from "./ImpalaSqlParser";
import { SortItemContext } from "./ImpalaSqlParser";
import { QuerySpecificationContext } from "./ImpalaSqlParser";
import { GroupByContext } from "./ImpalaSqlParser";
import { GroupingElementContext } from "./ImpalaSqlParser";
import { GroupingSetContext } from "./ImpalaSqlParser";
import { NamedQueryContext } from "./ImpalaSqlParser";
import { SetQuantifierContext } from "./ImpalaSqlParser";
import { SelectItemContext } from "./ImpalaSqlParser";
import { RelationContext } from "./ImpalaSqlParser";
import { JoinTypeContext } from "./ImpalaSqlParser";
import { JoinCriteriaContext } from "./ImpalaSqlParser";
import { SampledRelationContext } from "./ImpalaSqlParser";
import { SampleTypeContext } from "./ImpalaSqlParser";
import { AliasedRelationContext } from "./ImpalaSqlParser";
import { ColumnAliasesContext } from "./ImpalaSqlParser";
import { CreateColumnAliasesContext } from "./ImpalaSqlParser";
import { RelationPrimaryContext } from "./ImpalaSqlParser";
import { SubQueryRelationContext } from "./ImpalaSqlParser";
import { UnnestContext } from "./ImpalaSqlParser";
import { ParenthesizedRelationContext } from "./ImpalaSqlParser";
import { ColumnItemContext } from "./ImpalaSqlParser";
import { ExpressionContext } from "./ImpalaSqlParser";
import { BooleanExpressionContext } from "./ImpalaSqlParser";
import { PredicateContext } from "./ImpalaSqlParser";
import { ValueExpressionContext } from "./ImpalaSqlParser";
import { PrimaryExpressionContext } from "./ImpalaSqlParser";
import { StringLiteralContext } from "./ImpalaSqlParser";
import { ComparisonOperatorContext } from "./ImpalaSqlParser";
import { ComparisonQuantifierContext } from "./ImpalaSqlParser";
import { BooleanValueContext } from "./ImpalaSqlParser";
import { IntervalContext } from "./ImpalaSqlParser";
import { IntervalFieldContext } from "./ImpalaSqlParser";
import { NormalFormContext } from "./ImpalaSqlParser";
import { TypeContext } from "./ImpalaSqlParser";
import { TypeParameterContext } from "./ImpalaSqlParser";
import { BaseTypeContext } from "./ImpalaSqlParser";
import { WhenClauseContext } from "./ImpalaSqlParser";
import { FilterContext } from "./ImpalaSqlParser";
import { OverContext } from "./ImpalaSqlParser";
import { WindowFrameContext } from "./ImpalaSqlParser";
import { FrameBoundContext } from "./ImpalaSqlParser";
import { PathElementContext } from "./ImpalaSqlParser";
import { PathSpecificationContext } from "./ImpalaSqlParser";
import { PrivilegeContext } from "./ImpalaSqlParser";
import { ObjectTypeContext } from "./ImpalaSqlParser";
import { QualifiedNameContext } from "./ImpalaSqlParser";
import { PrincipalContext } from "./ImpalaSqlParser";
import { IdentifierContext } from "./ImpalaSqlParser";
import { NumberContext } from "./ImpalaSqlParser";
import { NonReservedContext } from "./ImpalaSqlParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ImpalaSqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ImpalaSqlParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `joinRelation`
	 * labeled alternative in `ImpalaSqlParser.relation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinRelation?: (ctx: JoinRelationContext) => Result;

	/**
	 * Visit a parse tree produced by the `relationDefault`
	 * labeled alternative in `ImpalaSqlParser.relation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationDefault?: (ctx: RelationDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `comparison`
	 * labeled alternative in `ImpalaSqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by the `quantifiedComparison`
	 * labeled alternative in `ImpalaSqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantifiedComparison?: (ctx: QuantifiedComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by the `between`
	 * labeled alternative in `ImpalaSqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBetween?: (ctx: BetweenContext) => Result;

	/**
	 * Visit a parse tree produced by the `inList`
	 * labeled alternative in `ImpalaSqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInList?: (ctx: InListContext) => Result;

	/**
	 * Visit a parse tree produced by the `inSubquery`
	 * labeled alternative in `ImpalaSqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInSubquery?: (ctx: InSubqueryContext) => Result;

	/**
	 * Visit a parse tree produced by the `like`
	 * labeled alternative in `ImpalaSqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLike?: (ctx: LikeContext) => Result;

	/**
	 * Visit a parse tree produced by the `REGEXP`
	 * labeled alternative in `ImpalaSqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitREGEXP?: (ctx: REGEXPContext) => Result;

	/**
	 * Visit a parse tree produced by the `nullOrUnKnownOrBooleanPredicate`
	 * labeled alternative in `ImpalaSqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullOrUnKnownOrBooleanPredicate?: (ctx: NullOrUnKnownOrBooleanPredicateContext) => Result;

	/**
	 * Visit a parse tree produced by the `distinctFrom`
	 * labeled alternative in `ImpalaSqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDistinctFrom?: (ctx: DistinctFromContext) => Result;

	/**
	 * Visit a parse tree produced by the `decimalLiteral`
	 * labeled alternative in `ImpalaSqlParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimalLiteral?: (ctx: DecimalLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `doubleLiteral`
	 * labeled alternative in `ImpalaSqlParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoubleLiteral?: (ctx: DoubleLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `integerLiteral`
	 * labeled alternative in `ImpalaSqlParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerLiteral?: (ctx: IntegerLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `queryTermDefault`
	 * labeled alternative in `ImpalaSqlParser.queryTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryTermDefault?: (ctx: QueryTermDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `setOperation`
	 * labeled alternative in `ImpalaSqlParser.queryTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetOperation?: (ctx: SetOperationContext) => Result;

	/**
	 * Visit a parse tree produced by the `unquotedIdentifier`
	 * labeled alternative in `ImpalaSqlParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `quotedIdentifier`
	 * labeled alternative in `ImpalaSqlParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `backQuotedIdentifier`
	 * labeled alternative in `ImpalaSqlParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `digitIdentifier`
	 * labeled alternative in `ImpalaSqlParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDigitIdentifier?: (ctx: DigitIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `singleGroupingSet`
	 * labeled alternative in `ImpalaSqlParser.groupingElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleGroupingSet?: (ctx: SingleGroupingSetContext) => Result;

	/**
	 * Visit a parse tree produced by the `basicStringLiteral`
	 * labeled alternative in `ImpalaSqlParser.stringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasicStringLiteral?: (ctx: BasicStringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `unicodeStringLiteral`
	 * labeled alternative in `ImpalaSqlParser.stringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnicodeStringLiteral?: (ctx: UnicodeStringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `ImpalaSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `ImpalaSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `ImpalaSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `concatenation`
	 * labeled alternative in `ImpalaSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConcatenation?: (ctx: ConcatenationContext) => Result;

	/**
	 * Visit a parse tree produced by the `unboundedFrame`
	 * labeled alternative in `ImpalaSqlParser.frameBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnboundedFrame?: (ctx: UnboundedFrameContext) => Result;

	/**
	 * Visit a parse tree produced by the `currentRowBound`
	 * labeled alternative in `ImpalaSqlParser.frameBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentRowBound?: (ctx: CurrentRowBoundContext) => Result;

	/**
	 * Visit a parse tree produced by the `boundedFrame`
	 * labeled alternative in `ImpalaSqlParser.frameBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoundedFrame?: (ctx: BoundedFrameContext) => Result;

	/**
	 * Visit a parse tree produced by the `queryPrimaryDefault`
	 * labeled alternative in `ImpalaSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `table`
	 * labeled alternative in `ImpalaSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable?: (ctx: TableContext) => Result;

	/**
	 * Visit a parse tree produced by the `inlineTable`
	 * labeled alternative in `ImpalaSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineTable?: (ctx: InlineTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `subquery`
	 * labeled alternative in `ImpalaSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubquery?: (ctx: SubqueryContext) => Result;

	/**
	 * Visit a parse tree produced by the `nullLiteral`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullLiteral?: (ctx: NullLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `intervalLiteral`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalLiteral?: (ctx: IntervalLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeConstructor`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeConstructor?: (ctx: TypeConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by the `numericLiteral`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericLiteral?: (ctx: NumericLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringLiteralValues`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteralValues?: (ctx: StringLiteralValuesContext) => Result;

	/**
	 * Visit a parse tree produced by the `binaryLiteral`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryLiteral?: (ctx: BinaryLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `parameter`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;

	/**
	 * Visit a parse tree produced by the `position`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPosition?: (ctx: PositionContext) => Result;

	/**
	 * Visit a parse tree produced by the `rowConstructor`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowConstructor?: (ctx: RowConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionCall`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `lambda`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambda?: (ctx: LambdaContext) => Result;

	/**
	 * Visit a parse tree produced by the `subqueryExpression`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubqueryExpression?: (ctx: SubqueryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `exists`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExists?: (ctx: ExistsContext) => Result;

	/**
	 * Visit a parse tree produced by the `simpleCase`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleCase?: (ctx: SimpleCaseContext) => Result;

	/**
	 * Visit a parse tree produced by the `searchedCase`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearchedCase?: (ctx: SearchedCaseContext) => Result;

	/**
	 * Visit a parse tree produced by the `cast`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCast?: (ctx: CastContext) => Result;

	/**
	 * Visit a parse tree produced by the `arrayConstructor`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayConstructor?: (ctx: ArrayConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by the `subscript`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscript?: (ctx: SubscriptContext) => Result;

	/**
	 * Visit a parse tree produced by the `columnReference`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnReference?: (ctx: ColumnReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by the `dereference`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDereference?: (ctx: DereferenceContext) => Result;

	/**
	 * Visit a parse tree produced by the `specialDateTimeFunction`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecialDateTimeFunction?: (ctx: SpecialDateTimeFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `currentUser`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentUser?: (ctx: CurrentUserContext) => Result;

	/**
	 * Visit a parse tree produced by the `currentPath`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentPath?: (ctx: CurrentPathContext) => Result;

	/**
	 * Visit a parse tree produced by the `substring`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubstring?: (ctx: SubstringContext) => Result;

	/**
	 * Visit a parse tree produced by the `normalize`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalize?: (ctx: NormalizeContext) => Result;

	/**
	 * Visit a parse tree produced by the `extract`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtract?: (ctx: ExtractContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `groupingOperation`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingOperation?: (ctx: GroupingOperationContext) => Result;

	/**
	 * Visit a parse tree produced by the `selectSingle`
	 * labeled alternative in `ImpalaSqlParser.selectItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectSingle?: (ctx: SelectSingleContext) => Result;

	/**
	 * Visit a parse tree produced by the `selectAll`
	 * labeled alternative in `ImpalaSqlParser.selectItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectAll?: (ctx: SelectAllContext) => Result;

	/**
	 * Visit a parse tree produced by the `qualifiedArgument`
	 * labeled alternative in `ImpalaSqlParser.pathElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedArgument?: (ctx: QualifiedArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by the `unqualifiedArgument`
	 * labeled alternative in `ImpalaSqlParser.pathElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnqualifiedArgument?: (ctx: UnqualifiedArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by the `rolePrincipal`
	 * labeled alternative in `ImpalaSqlParser.principal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRolePrincipal?: (ctx: RolePrincipalContext) => Result;

	/**
	 * Visit a parse tree produced by the `userPrincipal`
	 * labeled alternative in `ImpalaSqlParser.principal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUserPrincipal?: (ctx: UserPrincipalContext) => Result;

	/**
	 * Visit a parse tree produced by the `groupPrincipal`
	 * labeled alternative in `ImpalaSqlParser.principal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupPrincipal?: (ctx: GroupPrincipalContext) => Result;

	/**
	 * Visit a parse tree produced by the `predicated`
	 * labeled alternative in `ImpalaSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicated?: (ctx: PredicatedContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalNot`
	 * labeled alternative in `ImpalaSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalNot?: (ctx: LogicalNotContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalBinary`
	 * labeled alternative in `ImpalaSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalBinary?: (ctx: LogicalBinaryContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.sqlStatements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlStatements?: (ctx: SqlStatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.emptyStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyStatement?: (ctx: EmptyStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.sqlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlStatement?: (ctx: SqlStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.useStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUseStatement?: (ctx: UseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.createStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateStatement?: (ctx: CreateStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.createTableSelect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTableSelect?: (ctx: CreateTableSelectContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.createTableLike`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTableLike?: (ctx: CreateTableLikeContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.createKuduTableAsSelect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateKuduTableAsSelect?: (ctx: CreateKuduTableAsSelectContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.createView`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateView?: (ctx: CreateViewContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.createSchema`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateSchema?: (ctx: CreateSchemaContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.createRole`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateRole?: (ctx: CreateRoleContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.createAggregateFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateAggregateFunction?: (ctx: CreateAggregateFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.createFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateFunction?: (ctx: CreateFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.alterStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatement?: (ctx: AlterStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.alterDatabase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterDatabase?: (ctx: AlterDatabaseContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.alterStatsKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatsKey?: (ctx: AlterStatsKeyContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.alterPartitionCache`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterPartitionCache?: (ctx: AlterPartitionCacheContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.changeColumnDefine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChangeColumnDefine?: (ctx: ChangeColumnDefineContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.alterDropSingleColumn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterDropSingleColumn?: (ctx: AlterDropSingleColumnContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.alterTableOwner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTableOwner?: (ctx: AlterTableOwnerContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.replaceOrAddColumns`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplaceOrAddColumns?: (ctx: ReplaceOrAddColumnsContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.addSingleColumn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddSingleColumn?: (ctx: AddSingleColumnContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.alterTableNonKuduOrKuduOnly`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTableNonKuduOrKuduOnly?: (ctx: AlterTableNonKuduOrKuduOnlyContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.addPartitionByRangeOrValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddPartitionByRangeOrValue?: (ctx: AddPartitionByRangeOrValueContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.alterFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterFormat?: (ctx: AlterFormatContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.recoverPartitions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecoverPartitions?: (ctx: RecoverPartitionsContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.dropPartitionByRangeOrValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropPartitionByRangeOrValue?: (ctx: DropPartitionByRangeOrValueContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.alterView`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterView?: (ctx: AlterViewContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.renameView`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameView?: (ctx: RenameViewContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.alterViewOwner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterViewOwner?: (ctx: AlterViewOwnerContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.renameTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameTable?: (ctx: RenameTableContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.alterUnSetOrSetViewTblproperties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterUnSetOrSetViewTblproperties?: (ctx: AlterUnSetOrSetViewTblpropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.truncateTableStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTruncateTableStatement?: (ctx: TruncateTableStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.describeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescribeStatement?: (ctx: DescribeStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.computeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComputeStatement?: (ctx: ComputeStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.computeStats`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComputeStats?: (ctx: ComputeStatsContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.computeIncrementalStats`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComputeIncrementalStats?: (ctx: ComputeIncrementalStatsContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.dropStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropStatement?: (ctx: DropStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.dropSchema`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropSchema?: (ctx: DropSchemaContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.dropView`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropView?: (ctx: DropViewContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.dropTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropTable?: (ctx: DropTableContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.dropIncrementalStats`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropIncrementalStats?: (ctx: DropIncrementalStatsContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.dropFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropFunction?: (ctx: DropFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.dropRole`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropRole?: (ctx: DropRoleContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.grantStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrantStatement?: (ctx: GrantStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.grantRole`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrantRole?: (ctx: GrantRoleContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.grant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrant?: (ctx: GrantContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.revokeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRevokeStatement?: (ctx: RevokeStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.revokeRole`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRevokeRole?: (ctx: RevokeRoleContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.revoke`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRevoke?: (ctx: RevokeContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.insertStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertStatement?: (ctx: InsertStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.deleteStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeleteStatement?: (ctx: DeleteStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.delete`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelete?: (ctx: DeleteContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.deleteTableRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeleteTableRef?: (ctx: DeleteTableRefContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.updateStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdateStatement?: (ctx: UpdateStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.upsertStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpsertStatement?: (ctx: UpsertStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.showStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowStatement?: (ctx: ShowStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.showSchemas`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowSchemas?: (ctx: ShowSchemasContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.showTables`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowTables?: (ctx: ShowTablesContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.showFunctions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowFunctions?: (ctx: ShowFunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.showCreateTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCreateTable?: (ctx: ShowCreateTableContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.showCreateView`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCreateView?: (ctx: ShowCreateViewContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.showTableStats`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowTableStats?: (ctx: ShowTableStatsContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.showColumnStats`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowColumnStats?: (ctx: ShowColumnStatsContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.showPartitions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowPartitions?: (ctx: ShowPartitionsContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.showFiles`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowFiles?: (ctx: ShowFilesContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.showRoles`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowRoles?: (ctx: ShowRolesContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.showRoleGrant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowRoleGrant?: (ctx: ShowRoleGrantContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.showGrants`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowGrants?: (ctx: ShowGrantsContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.showDatabaseGrant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowDatabaseGrant?: (ctx: ShowDatabaseGrantContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.showTableGrant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowTableGrant?: (ctx: ShowTableGrantContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.showColumnGrant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowColumnGrant?: (ctx: ShowColumnGrantContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.addCommentStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddCommentStatement?: (ctx: AddCommentStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.addDatabaseComments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddDatabaseComments?: (ctx: AddDatabaseCommentsContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.addTableComments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddTableComments?: (ctx: AddTableCommentsContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.addColumnComments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddColumnComments?: (ctx: AddColumnCommentsContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.explainStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplainStatement?: (ctx: ExplainStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.setStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetStatement?: (ctx: SetStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.shutdownStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShutdownStatement?: (ctx: ShutdownStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.invalidateMetaStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInvalidateMetaStatement?: (ctx: InvalidateMetaStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.loadDataStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoadDataStatement?: (ctx: LoadDataStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.refreshStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefreshStatement?: (ctx: RefreshStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.refreshMeta`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefreshMeta?: (ctx: RefreshMetaContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.refreshAuth`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefreshAuth?: (ctx: RefreshAuthContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.refreshFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefreshFunction?: (ctx: RefreshFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.ifExists`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfExists?: (ctx: IfExistsContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.ifNotExists`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfNotExists?: (ctx: IfNotExistsContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.tableNameCreate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableNameCreate?: (ctx: TableNameCreateContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.databaseNameCreate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatabaseNameCreate?: (ctx: DatabaseNameCreateContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.viewNameCreate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewNameCreate?: (ctx: ViewNameCreateContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.functionNameCreate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionNameCreate?: (ctx: FunctionNameCreateContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.columnNamePathCreate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNamePathCreate?: (ctx: ColumnNamePathCreateContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.databaseNamePath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatabaseNamePath?: (ctx: DatabaseNamePathContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.tableNamePath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableNamePath?: (ctx: TableNamePathContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.viewNamePath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewNamePath?: (ctx: ViewNamePathContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.functionNamePath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionNamePath?: (ctx: FunctionNamePathContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.columnNamePath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNamePath?: (ctx: ColumnNamePathContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.tableOrViewPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOrViewPath?: (ctx: TableOrViewPathContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.createCommonItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateCommonItem?: (ctx: CreateCommonItemContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.assignmentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentList?: (ctx: AssignmentListContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.assignmentItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentItem?: (ctx: AssignmentItemContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.viewColumns`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewColumns?: (ctx: ViewColumnsContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.queryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryStatement?: (ctx: QueryStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.with`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWith?: (ctx: WithContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.constraintSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraintSpecification?: (ctx: ConstraintSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.foreignKeySpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForeignKeySpecification?: (ctx: ForeignKeySpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.columnDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnDefinition?: (ctx: ColumnDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.kuduTableElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKuduTableElement?: (ctx: KuduTableElementContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.kuduColumnDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKuduColumnDefinition?: (ctx: KuduColumnDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.columnSpecWithKudu`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnSpecWithKudu?: (ctx: ColumnSpecWithKuduContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.createColumnSpecWithKudu`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateColumnSpecWithKudu?: (ctx: CreateColumnSpecWithKuduContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.kuduAttributes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKuduAttributes?: (ctx: KuduAttributesContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.kuduStorageAttr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKuduStorageAttr?: (ctx: KuduStorageAttrContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.statsKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatsKey?: (ctx: StatsKeyContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.fileFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFileFormat?: (ctx: FileFormatContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.kuduPartitionClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKuduPartitionClause?: (ctx: KuduPartitionClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.hashClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHashClause?: (ctx: HashClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.rangeClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRangeClause?: (ctx: RangeClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.kuduPartitionSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKuduPartitionSpec?: (ctx: KuduPartitionSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.cacheSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCacheSpec?: (ctx: CacheSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.rangeOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRangeOperator?: (ctx: RangeOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.partitionCol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionCol?: (ctx: PartitionColContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.likeClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLikeClause?: (ctx: LikeClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.properties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProperties?: (ctx: PropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.partitionedBy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionedBy?: (ctx: PartitionedByContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.sortedBy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSortedBy?: (ctx: SortedByContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.rowFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowFormat?: (ctx: RowFormatContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.property`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProperty?: (ctx: PropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.queryNoWith`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryNoWith?: (ctx: QueryNoWithContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.queryTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryTerm?: (ctx: QueryTermContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryPrimary?: (ctx: QueryPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.sortItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSortItem?: (ctx: SortItemContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.querySpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuerySpecification?: (ctx: QuerySpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.groupBy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupBy?: (ctx: GroupByContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.groupingElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingElement?: (ctx: GroupingElementContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.groupingSet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingSet?: (ctx: GroupingSetContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.namedQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedQuery?: (ctx: NamedQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.setQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetQuantifier?: (ctx: SetQuantifierContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.selectItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectItem?: (ctx: SelectItemContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.relation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelation?: (ctx: RelationContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.joinType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinType?: (ctx: JoinTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.joinCriteria`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinCriteria?: (ctx: JoinCriteriaContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.sampledRelation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSampledRelation?: (ctx: SampledRelationContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.sampleType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSampleType?: (ctx: SampleTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.aliasedRelation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAliasedRelation?: (ctx: AliasedRelationContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.columnAliases`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnAliases?: (ctx: ColumnAliasesContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.createColumnAliases`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateColumnAliases?: (ctx: CreateColumnAliasesContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationPrimary?: (ctx: RelationPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.subQueryRelation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubQueryRelation?: (ctx: SubQueryRelationContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.unnest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnnest?: (ctx: UnnestContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.parenthesizedRelation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedRelation?: (ctx: ParenthesizedRelationContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.columnItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnItem?: (ctx: ColumnItemContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanExpression?: (ctx: BooleanExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicate?: (ctx: PredicateContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueExpression?: (ctx: ValueExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.stringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.comparisonOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.comparisonQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonQuantifier?: (ctx: ComparisonQuantifierContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.booleanValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanValue?: (ctx: BooleanValueContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.interval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterval?: (ctx: IntervalContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.intervalField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalField?: (ctx: IntervalFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.normalForm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalForm?: (ctx: NormalFormContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.typeParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameter?: (ctx: TypeParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.baseType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBaseType?: (ctx: BaseTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.whenClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenClause?: (ctx: WhenClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.filter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilter?: (ctx: FilterContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.over`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOver?: (ctx: OverContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.windowFrame`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowFrame?: (ctx: WindowFrameContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.frameBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrameBound?: (ctx: FrameBoundContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.pathElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPathElement?: (ctx: PathElementContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.pathSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPathSpecification?: (ctx: PathSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.privilege`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivilege?: (ctx: PrivilegeContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.objectType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectType?: (ctx: ObjectTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.principal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrincipal?: (ctx: PrincipalContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParser.nonReserved`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonReserved?: (ctx: NonReservedContext) => Result;
}

