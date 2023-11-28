// Generated from dt-sql-parser/src/grammar/trinosql/TrinoSql.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { TableOrViewRelationContext } from "./TrinoSqlParser";
import { SubqueryRelationContext } from "./TrinoSqlParser";
import { UnnestContext } from "./TrinoSqlParser";
import { LateralContext } from "./TrinoSqlParser";
import { ParenthesizedRelationContext } from "./TrinoSqlParser";
import { RowTypeContext } from "./TrinoSqlParser";
import { IntervalTypeContext } from "./TrinoSqlParser";
import { DateTimeTypeContext } from "./TrinoSqlParser";
import { DoublePrecisionTypeContext } from "./TrinoSqlParser";
import { LegacyArrayTypeContext } from "./TrinoSqlParser";
import { LegacyMapTypeContext } from "./TrinoSqlParser";
import { ArrayTypeContext } from "./TrinoSqlParser";
import { GenericTypeContext } from "./TrinoSqlParser";
import { JoinRelationContext } from "./TrinoSqlParser";
import { RelationDefaultContext } from "./TrinoSqlParser";
import { ComparisonContext } from "./TrinoSqlParser";
import { QuantifiedComparisonContext } from "./TrinoSqlParser";
import { BetweenContext } from "./TrinoSqlParser";
import { InListContext } from "./TrinoSqlParser";
import { InSubqueryContext } from "./TrinoSqlParser";
import { LikeContext } from "./TrinoSqlParser";
import { NullPredicateContext } from "./TrinoSqlParser";
import { DistinctFromContext } from "./TrinoSqlParser";
import { DecimalLiteralContext } from "./TrinoSqlParser";
import { DoubleLiteralContext } from "./TrinoSqlParser";
import { IntegerLiteralContext } from "./TrinoSqlParser";
import { QueryTermDefaultContext } from "./TrinoSqlParser";
import { SetOperationContext } from "./TrinoSqlParser";
import { UnquotedIdentifierContext } from "./TrinoSqlParser";
import { QuotedIdentifierContext } from "./TrinoSqlParser";
import { BackQuotedIdentifierContext } from "./TrinoSqlParser";
import { DigitIdentifierContext } from "./TrinoSqlParser";
import { PatternVariableContext } from "./TrinoSqlParser";
import { EmptyPatternContext } from "./TrinoSqlParser";
import { PatternPermutationContext } from "./TrinoSqlParser";
import { GroupedPatternContext } from "./TrinoSqlParser";
import { PartitionStartAnchorContext } from "./TrinoSqlParser";
import { PartitionEndAnchorContext } from "./TrinoSqlParser";
import { ExcludedPatternContext } from "./TrinoSqlParser";
import { DefaultPropertyValueContext } from "./TrinoSqlParser";
import { NonDefaultPropertyValueContext } from "./TrinoSqlParser";
import { ExplainFormatContext } from "./TrinoSqlParser";
import { ExplainTypeContext } from "./TrinoSqlParser";
import { SingleGroupingSetContext } from "./TrinoSqlParser";
import { RollupContext } from "./TrinoSqlParser";
import { CubeContext } from "./TrinoSqlParser";
import { MultipleGroupingSetsContext } from "./TrinoSqlParser";
import { ValueExpressionDefaultContext } from "./TrinoSqlParser";
import { AtTimeZoneContext } from "./TrinoSqlParser";
import { ArithmeticUnaryContext } from "./TrinoSqlParser";
import { ArithmeticBinaryContext } from "./TrinoSqlParser";
import { ConcatenationContext } from "./TrinoSqlParser";
import { QuantifiedPrimaryContext } from "./TrinoSqlParser";
import { PatternConcatenationContext } from "./TrinoSqlParser";
import { PatternAlternationContext } from "./TrinoSqlParser";
import { SpecifiedPrincipalContext } from "./TrinoSqlParser";
import { CurrentUserGrantorContext } from "./TrinoSqlParser";
import { CurrentRoleGrantorContext } from "./TrinoSqlParser";
import { UnboundedFrameContext } from "./TrinoSqlParser";
import { CurrentRowBoundContext } from "./TrinoSqlParser";
import { BoundedFrameContext } from "./TrinoSqlParser";
import { QueryPrimaryDefaultContext } from "./TrinoSqlParser";
import { TableContext } from "./TrinoSqlParser";
import { InlineTableContext } from "./TrinoSqlParser";
import { SubqueryContext } from "./TrinoSqlParser";
import { NullLiteralContext } from "./TrinoSqlParser";
import { IntervalLiteralContext } from "./TrinoSqlParser";
import { TypeConstructorContext } from "./TrinoSqlParser";
import { NumericLiteralContext } from "./TrinoSqlParser";
import { BooleanLiteralContext } from "./TrinoSqlParser";
import { StringLiteralContext } from "./TrinoSqlParser";
import { BinaryLiteralContext } from "./TrinoSqlParser";
import { ParameterContext } from "./TrinoSqlParser";
import { PositionContext } from "./TrinoSqlParser";
import { RowConstructorContext } from "./TrinoSqlParser";
import { FunctionCallContext } from "./TrinoSqlParser";
import { MeasureContext } from "./TrinoSqlParser";
import { LambdaContext } from "./TrinoSqlParser";
import { SubqueryExpressionContext } from "./TrinoSqlParser";
import { ExistsContext } from "./TrinoSqlParser";
import { SimpleCaseContext } from "./TrinoSqlParser";
import { SearchedCaseContext } from "./TrinoSqlParser";
import { CastContext } from "./TrinoSqlParser";
import { ArrayConstructorContext } from "./TrinoSqlParser";
import { SubscriptContext } from "./TrinoSqlParser";
import { ColumnReferenceContext } from "./TrinoSqlParser";
import { DereferenceContext } from "./TrinoSqlParser";
import { SpecialDateTimeFunctionContext } from "./TrinoSqlParser";
import { CurrentUserContext } from "./TrinoSqlParser";
import { CurrentCatalogContext } from "./TrinoSqlParser";
import { CurrentSchemaContext } from "./TrinoSqlParser";
import { CurrentPathContext } from "./TrinoSqlParser";
import { SubstringContext } from "./TrinoSqlParser";
import { NormalizeContext } from "./TrinoSqlParser";
import { ExtractContext } from "./TrinoSqlParser";
import { ParenthesizedExpressionContext } from "./TrinoSqlParser";
import { GroupingOperationContext } from "./TrinoSqlParser";
import { SelectSingleContext } from "./TrinoSqlParser";
import { SelectAllContext } from "./TrinoSqlParser";
import { QualifiedArgumentContext } from "./TrinoSqlParser";
import { UnqualifiedArgumentContext } from "./TrinoSqlParser";
import { PositionalArgumentContext } from "./TrinoSqlParser";
import { NamedArgumentContext } from "./TrinoSqlParser";
import { MergeUpdateContext } from "./TrinoSqlParser";
import { MergeDeleteContext } from "./TrinoSqlParser";
import { MergeInsertContext } from "./TrinoSqlParser";
import { ZeroOrMoreQuantifierContext } from "./TrinoSqlParser";
import { OneOrMoreQuantifierContext } from "./TrinoSqlParser";
import { ZeroOrOneQuantifierContext } from "./TrinoSqlParser";
import { RangeQuantifierContext } from "./TrinoSqlParser";
import { ReadUncommittedContext } from "./TrinoSqlParser";
import { ReadCommittedContext } from "./TrinoSqlParser";
import { RepeatableReadContext } from "./TrinoSqlParser";
import { SerializableContext } from "./TrinoSqlParser";
import { BasicStringLiteralContext } from "./TrinoSqlParser";
import { UnicodeStringLiteralContext } from "./TrinoSqlParser";
import { UnspecifiedPrincipalContext } from "./TrinoSqlParser";
import { UserPrincipalContext } from "./TrinoSqlParser";
import { RolePrincipalContext } from "./TrinoSqlParser";
import { StatementDefaultContext } from "./TrinoSqlParser";
import { UseContext } from "./TrinoSqlParser";
import { CreateSchemaContext } from "./TrinoSqlParser";
import { DropSchemaContext } from "./TrinoSqlParser";
import { RenameSchemaContext } from "./TrinoSqlParser";
import { SetSchemaAuthorizationContext } from "./TrinoSqlParser";
import { CreateTableAsSelectContext } from "./TrinoSqlParser";
import { CreateTableContext } from "./TrinoSqlParser";
import { DropTableContext } from "./TrinoSqlParser";
import { InsertIntoContext } from "./TrinoSqlParser";
import { DeleteContext } from "./TrinoSqlParser";
import { TruncateTableContext } from "./TrinoSqlParser";
import { RenameTableContext } from "./TrinoSqlParser";
import { CommentTableContext } from "./TrinoSqlParser";
import { CommentColumnContext } from "./TrinoSqlParser";
import { RenameColumnContext } from "./TrinoSqlParser";
import { DropColumnContext } from "./TrinoSqlParser";
import { AddColumnContext } from "./TrinoSqlParser";
import { SetTableAuthorizationContext } from "./TrinoSqlParser";
import { SetTablePropertiesContext } from "./TrinoSqlParser";
import { TableExecuteContext } from "./TrinoSqlParser";
import { AnalyzeContext } from "./TrinoSqlParser";
import { CreateMaterializedViewContext } from "./TrinoSqlParser";
import { CreateViewContext } from "./TrinoSqlParser";
import { RefreshMaterializedViewContext } from "./TrinoSqlParser";
import { DropMaterializedViewContext } from "./TrinoSqlParser";
import { RenameMaterializedViewContext } from "./TrinoSqlParser";
import { SetMaterializedViewPropertiesContext } from "./TrinoSqlParser";
import { DropViewContext } from "./TrinoSqlParser";
import { RenameViewContext } from "./TrinoSqlParser";
import { SetViewAuthorizationContext } from "./TrinoSqlParser";
import { CallContext } from "./TrinoSqlParser";
import { CreateRoleContext } from "./TrinoSqlParser";
import { DropRoleContext } from "./TrinoSqlParser";
import { GrantRolesContext } from "./TrinoSqlParser";
import { RevokeRolesContext } from "./TrinoSqlParser";
import { SetRoleContext } from "./TrinoSqlParser";
import { GrantContext } from "./TrinoSqlParser";
import { DenyContext } from "./TrinoSqlParser";
import { RevokeContext } from "./TrinoSqlParser";
import { ShowGrantsContext } from "./TrinoSqlParser";
import { ExplainContext } from "./TrinoSqlParser";
import { ShowCreateTableContext } from "./TrinoSqlParser";
import { ShowCreateSchemaContext } from "./TrinoSqlParser";
import { ShowCreateViewContext } from "./TrinoSqlParser";
import { ShowCreateMaterializedViewContext } from "./TrinoSqlParser";
import { ShowTablesContext } from "./TrinoSqlParser";
import { ShowSchemasContext } from "./TrinoSqlParser";
import { ShowCatalogsContext } from "./TrinoSqlParser";
import { ShowColumnsContext } from "./TrinoSqlParser";
import { ShowStatsContext } from "./TrinoSqlParser";
import { ShowStatsForQueryContext } from "./TrinoSqlParser";
import { ShowRolesContext } from "./TrinoSqlParser";
import { ShowRoleGrantsContext } from "./TrinoSqlParser";
import { ShowFunctionsContext } from "./TrinoSqlParser";
import { ShowSessionContext } from "./TrinoSqlParser";
import { SetSessionContext } from "./TrinoSqlParser";
import { ResetSessionContext } from "./TrinoSqlParser";
import { StartTransactionContext } from "./TrinoSqlParser";
import { CommitContext } from "./TrinoSqlParser";
import { RollbackContext } from "./TrinoSqlParser";
import { PrepareContext } from "./TrinoSqlParser";
import { DeallocateContext } from "./TrinoSqlParser";
import { ExecuteContext } from "./TrinoSqlParser";
import { DescribeInputContext } from "./TrinoSqlParser";
import { DescribeOutputContext } from "./TrinoSqlParser";
import { SetPathContext } from "./TrinoSqlParser";
import { SetTimeZoneContext } from "./TrinoSqlParser";
import { UpdateContext } from "./TrinoSqlParser";
import { MergeContext } from "./TrinoSqlParser";
import { ShowTableCommentContext } from "./TrinoSqlParser";
import { ShowColumnCommentContext } from "./TrinoSqlParser";
import { TimeZoneIntervalContext } from "./TrinoSqlParser";
import { TimeZoneStringContext } from "./TrinoSqlParser";
import { IsolationLevelContext } from "./TrinoSqlParser";
import { TransactionAccessModeContext } from "./TrinoSqlParser";
import { PredicatedContext } from "./TrinoSqlParser";
import { LogicalNotContext } from "./TrinoSqlParser";
import { LogicalBinaryContext } from "./TrinoSqlParser";
import { ProgramContext } from "./TrinoSqlParser";
import { StatementsContext } from "./TrinoSqlParser";
import { SingleStatementContext } from "./TrinoSqlParser";
import { StandaloneExpressionContext } from "./TrinoSqlParser";
import { StandalonePathSpecificationContext } from "./TrinoSqlParser";
import { StandaloneTypeContext } from "./TrinoSqlParser";
import { StandaloneRowPatternContext } from "./TrinoSqlParser";
import { StatementContext } from "./TrinoSqlParser";
import { QueryContext } from "./TrinoSqlParser";
import { WithContext } from "./TrinoSqlParser";
import { TableElementContext } from "./TrinoSqlParser";
import { ColumnDefinitionContext } from "./TrinoSqlParser";
import { LikeClauseContext } from "./TrinoSqlParser";
import { PropertiesContext } from "./TrinoSqlParser";
import { PropertyAssignmentsContext } from "./TrinoSqlParser";
import { PropertyContext } from "./TrinoSqlParser";
import { PropertyValueContext } from "./TrinoSqlParser";
import { QueryNoWithContext } from "./TrinoSqlParser";
import { LimitRowCountContext } from "./TrinoSqlParser";
import { RowCountContext } from "./TrinoSqlParser";
import { QueryTermContext } from "./TrinoSqlParser";
import { QueryPrimaryContext } from "./TrinoSqlParser";
import { SortItemContext } from "./TrinoSqlParser";
import { QuerySpecificationContext } from "./TrinoSqlParser";
import { GroupByContext } from "./TrinoSqlParser";
import { GroupingElementContext } from "./TrinoSqlParser";
import { GroupingSetContext } from "./TrinoSqlParser";
import { GroupingTermContext } from "./TrinoSqlParser";
import { WindowDefinitionContext } from "./TrinoSqlParser";
import { WindowSpecificationContext } from "./TrinoSqlParser";
import { NamedQueryContext } from "./TrinoSqlParser";
import { SetQuantifierContext } from "./TrinoSqlParser";
import { SelectItemContext } from "./TrinoSqlParser";
import { RelationContext } from "./TrinoSqlParser";
import { JoinTypeContext } from "./TrinoSqlParser";
import { JoinCriteriaContext } from "./TrinoSqlParser";
import { SampledRelationContext } from "./TrinoSqlParser";
import { SampleTypeContext } from "./TrinoSqlParser";
import { PatternRecognitionContext } from "./TrinoSqlParser";
import { MeasureDefinitionContext } from "./TrinoSqlParser";
import { RowsPerMatchContext } from "./TrinoSqlParser";
import { EmptyMatchHandlingContext } from "./TrinoSqlParser";
import { SkipToContext } from "./TrinoSqlParser";
import { SubsetDefinitionContext } from "./TrinoSqlParser";
import { VariableDefinitionContext } from "./TrinoSqlParser";
import { AliasedRelationContext } from "./TrinoSqlParser";
import { ColumnListCreateContext } from "./TrinoSqlParser";
import { ColumnListContext } from "./TrinoSqlParser";
import { ColumnAliasesContext } from "./TrinoSqlParser";
import { RelationPrimaryContext } from "./TrinoSqlParser";
import { ExpressionContext } from "./TrinoSqlParser";
import { BooleanExpressionContext } from "./TrinoSqlParser";
import { PredicateContext } from "./TrinoSqlParser";
import { ValueExpressionContext } from "./TrinoSqlParser";
import { PrimaryExpressionContext } from "./TrinoSqlParser";
import { ProcessingModeContext } from "./TrinoSqlParser";
import { NullTreatmentContext } from "./TrinoSqlParser";
import { StringContext } from "./TrinoSqlParser";
import { TimeZoneSpecifierContext } from "./TrinoSqlParser";
import { ComparisonOperatorContext } from "./TrinoSqlParser";
import { ComparisonQuantifierContext } from "./TrinoSqlParser";
import { BooleanValueContext } from "./TrinoSqlParser";
import { IntervalContext } from "./TrinoSqlParser";
import { IntervalFieldContext } from "./TrinoSqlParser";
import { NormalFormContext } from "./TrinoSqlParser";
import { TypeContext } from "./TrinoSqlParser";
import { RowFieldContext } from "./TrinoSqlParser";
import { TypeParameterContext } from "./TrinoSqlParser";
import { WhenClauseContext } from "./TrinoSqlParser";
import { FilterContext } from "./TrinoSqlParser";
import { MergeCaseContext } from "./TrinoSqlParser";
import { OverContext } from "./TrinoSqlParser";
import { WindowFrameContext } from "./TrinoSqlParser";
import { FrameExtentContext } from "./TrinoSqlParser";
import { FrameBoundContext } from "./TrinoSqlParser";
import { RowPatternContext } from "./TrinoSqlParser";
import { PatternPrimaryContext } from "./TrinoSqlParser";
import { PatternQuantifierContext } from "./TrinoSqlParser";
import { UpdateAssignmentContext } from "./TrinoSqlParser";
import { ExplainOptionContext } from "./TrinoSqlParser";
import { TransactionModeContext } from "./TrinoSqlParser";
import { LevelOfIsolationContext } from "./TrinoSqlParser";
import { CallArgumentContext } from "./TrinoSqlParser";
import { PathElementContext } from "./TrinoSqlParser";
import { PathSpecificationContext } from "./TrinoSqlParser";
import { PrivilegeContext } from "./TrinoSqlParser";
import { TableOrViewNameContext } from "./TrinoSqlParser";
import { TableNameContext } from "./TrinoSqlParser";
import { TableNameCreateContext } from "./TrinoSqlParser";
import { ViewNameContext } from "./TrinoSqlParser";
import { ViewNameCreateContext } from "./TrinoSqlParser";
import { TablePathContext } from "./TrinoSqlParser";
import { ViewPathContext } from "./TrinoSqlParser";
import { SchemaNameContext } from "./TrinoSqlParser";
import { SchemaNameCreateContext } from "./TrinoSqlParser";
import { SchemaPathContext } from "./TrinoSqlParser";
import { CatalogNameContext } from "./TrinoSqlParser";
import { CatalogNameCreateContext } from "./TrinoSqlParser";
import { FunctionNameContext } from "./TrinoSqlParser";
import { ColumnNameContext } from "./TrinoSqlParser";
import { ColumnNameCreateContext } from "./TrinoSqlParser";
import { QualifiedNameContext } from "./TrinoSqlParser";
import { GrantorContext } from "./TrinoSqlParser";
import { PrincipalContext } from "./TrinoSqlParser";
import { RolesContext } from "./TrinoSqlParser";
import { IdentifierContext } from "./TrinoSqlParser";
import { NumberContext } from "./TrinoSqlParser";
import { NonReservedContext } from "./TrinoSqlParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `TrinoSqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface TrinoSqlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `tableOrViewRelation`
	 * labeled alternative in `TrinoSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOrViewRelation?: (ctx: TableOrViewRelationContext) => Result;

	/**
	 * Visit a parse tree produced by the `subqueryRelation`
	 * labeled alternative in `TrinoSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubqueryRelation?: (ctx: SubqueryRelationContext) => Result;

	/**
	 * Visit a parse tree produced by the `unnest`
	 * labeled alternative in `TrinoSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnnest?: (ctx: UnnestContext) => Result;

	/**
	 * Visit a parse tree produced by the `lateral`
	 * labeled alternative in `TrinoSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLateral?: (ctx: LateralContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenthesizedRelation`
	 * labeled alternative in `TrinoSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedRelation?: (ctx: ParenthesizedRelationContext) => Result;

	/**
	 * Visit a parse tree produced by the `rowType`
	 * labeled alternative in `TrinoSqlParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowType?: (ctx: RowTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `intervalType`
	 * labeled alternative in `TrinoSqlParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalType?: (ctx: IntervalTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `dateTimeType`
	 * labeled alternative in `TrinoSqlParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateTimeType?: (ctx: DateTimeTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `doublePrecisionType`
	 * labeled alternative in `TrinoSqlParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoublePrecisionType?: (ctx: DoublePrecisionTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `legacyArrayType`
	 * labeled alternative in `TrinoSqlParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLegacyArrayType?: (ctx: LegacyArrayTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `legacyMapType`
	 * labeled alternative in `TrinoSqlParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLegacyMapType?: (ctx: LegacyMapTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `arrayType`
	 * labeled alternative in `TrinoSqlParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayType?: (ctx: ArrayTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `genericType`
	 * labeled alternative in `TrinoSqlParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericType?: (ctx: GenericTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `joinRelation`
	 * labeled alternative in `TrinoSqlParser.relation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinRelation?: (ctx: JoinRelationContext) => Result;

	/**
	 * Visit a parse tree produced by the `relationDefault`
	 * labeled alternative in `TrinoSqlParser.relation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationDefault?: (ctx: RelationDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `comparison`
	 * labeled alternative in `TrinoSqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by the `quantifiedComparison`
	 * labeled alternative in `TrinoSqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantifiedComparison?: (ctx: QuantifiedComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by the `between`
	 * labeled alternative in `TrinoSqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBetween?: (ctx: BetweenContext) => Result;

	/**
	 * Visit a parse tree produced by the `inList`
	 * labeled alternative in `TrinoSqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInList?: (ctx: InListContext) => Result;

	/**
	 * Visit a parse tree produced by the `inSubquery`
	 * labeled alternative in `TrinoSqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInSubquery?: (ctx: InSubqueryContext) => Result;

	/**
	 * Visit a parse tree produced by the `like`
	 * labeled alternative in `TrinoSqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLike?: (ctx: LikeContext) => Result;

	/**
	 * Visit a parse tree produced by the `nullPredicate`
	 * labeled alternative in `TrinoSqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullPredicate?: (ctx: NullPredicateContext) => Result;

	/**
	 * Visit a parse tree produced by the `distinctFrom`
	 * labeled alternative in `TrinoSqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDistinctFrom?: (ctx: DistinctFromContext) => Result;

	/**
	 * Visit a parse tree produced by the `decimalLiteral`
	 * labeled alternative in `TrinoSqlParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimalLiteral?: (ctx: DecimalLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `doubleLiteral`
	 * labeled alternative in `TrinoSqlParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoubleLiteral?: (ctx: DoubleLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `integerLiteral`
	 * labeled alternative in `TrinoSqlParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerLiteral?: (ctx: IntegerLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `queryTermDefault`
	 * labeled alternative in `TrinoSqlParser.queryTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryTermDefault?: (ctx: QueryTermDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `setOperation`
	 * labeled alternative in `TrinoSqlParser.queryTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetOperation?: (ctx: SetOperationContext) => Result;

	/**
	 * Visit a parse tree produced by the `unquotedIdentifier`
	 * labeled alternative in `TrinoSqlParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `quotedIdentifier`
	 * labeled alternative in `TrinoSqlParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `backQuotedIdentifier`
	 * labeled alternative in `TrinoSqlParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `digitIdentifier`
	 * labeled alternative in `TrinoSqlParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDigitIdentifier?: (ctx: DigitIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `patternVariable`
	 * labeled alternative in `TrinoSqlParser.patternPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternVariable?: (ctx: PatternVariableContext) => Result;

	/**
	 * Visit a parse tree produced by the `emptyPattern`
	 * labeled alternative in `TrinoSqlParser.patternPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyPattern?: (ctx: EmptyPatternContext) => Result;

	/**
	 * Visit a parse tree produced by the `patternPermutation`
	 * labeled alternative in `TrinoSqlParser.patternPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternPermutation?: (ctx: PatternPermutationContext) => Result;

	/**
	 * Visit a parse tree produced by the `groupedPattern`
	 * labeled alternative in `TrinoSqlParser.patternPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupedPattern?: (ctx: GroupedPatternContext) => Result;

	/**
	 * Visit a parse tree produced by the `partitionStartAnchor`
	 * labeled alternative in `TrinoSqlParser.patternPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionStartAnchor?: (ctx: PartitionStartAnchorContext) => Result;

	/**
	 * Visit a parse tree produced by the `partitionEndAnchor`
	 * labeled alternative in `TrinoSqlParser.patternPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionEndAnchor?: (ctx: PartitionEndAnchorContext) => Result;

	/**
	 * Visit a parse tree produced by the `excludedPattern`
	 * labeled alternative in `TrinoSqlParser.patternPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExcludedPattern?: (ctx: ExcludedPatternContext) => Result;

	/**
	 * Visit a parse tree produced by the `defaultPropertyValue`
	 * labeled alternative in `TrinoSqlParser.propertyValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultPropertyValue?: (ctx: DefaultPropertyValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `nonDefaultPropertyValue`
	 * labeled alternative in `TrinoSqlParser.propertyValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonDefaultPropertyValue?: (ctx: NonDefaultPropertyValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `explainFormat`
	 * labeled alternative in `TrinoSqlParser.explainOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplainFormat?: (ctx: ExplainFormatContext) => Result;

	/**
	 * Visit a parse tree produced by the `explainType`
	 * labeled alternative in `TrinoSqlParser.explainOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplainType?: (ctx: ExplainTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `singleGroupingSet`
	 * labeled alternative in `TrinoSqlParser.groupingElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleGroupingSet?: (ctx: SingleGroupingSetContext) => Result;

	/**
	 * Visit a parse tree produced by the `rollup`
	 * labeled alternative in `TrinoSqlParser.groupingElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRollup?: (ctx: RollupContext) => Result;

	/**
	 * Visit a parse tree produced by the `cube`
	 * labeled alternative in `TrinoSqlParser.groupingElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCube?: (ctx: CubeContext) => Result;

	/**
	 * Visit a parse tree produced by the `multipleGroupingSets`
	 * labeled alternative in `TrinoSqlParser.groupingElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultipleGroupingSets?: (ctx: MultipleGroupingSetsContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `TrinoSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `atTimeZone`
	 * labeled alternative in `TrinoSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtTimeZone?: (ctx: AtTimeZoneContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `TrinoSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `TrinoSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `concatenation`
	 * labeled alternative in `TrinoSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConcatenation?: (ctx: ConcatenationContext) => Result;

	/**
	 * Visit a parse tree produced by the `quantifiedPrimary`
	 * labeled alternative in `TrinoSqlParser.rowPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantifiedPrimary?: (ctx: QuantifiedPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `patternConcatenation`
	 * labeled alternative in `TrinoSqlParser.rowPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternConcatenation?: (ctx: PatternConcatenationContext) => Result;

	/**
	 * Visit a parse tree produced by the `patternAlternation`
	 * labeled alternative in `TrinoSqlParser.rowPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternAlternation?: (ctx: PatternAlternationContext) => Result;

	/**
	 * Visit a parse tree produced by the `specifiedPrincipal`
	 * labeled alternative in `TrinoSqlParser.grantor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecifiedPrincipal?: (ctx: SpecifiedPrincipalContext) => Result;

	/**
	 * Visit a parse tree produced by the `currentUserGrantor`
	 * labeled alternative in `TrinoSqlParser.grantor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentUserGrantor?: (ctx: CurrentUserGrantorContext) => Result;

	/**
	 * Visit a parse tree produced by the `currentRoleGrantor`
	 * labeled alternative in `TrinoSqlParser.grantor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentRoleGrantor?: (ctx: CurrentRoleGrantorContext) => Result;

	/**
	 * Visit a parse tree produced by the `unboundedFrame`
	 * labeled alternative in `TrinoSqlParser.frameBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnboundedFrame?: (ctx: UnboundedFrameContext) => Result;

	/**
	 * Visit a parse tree produced by the `currentRowBound`
	 * labeled alternative in `TrinoSqlParser.frameBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentRowBound?: (ctx: CurrentRowBoundContext) => Result;

	/**
	 * Visit a parse tree produced by the `boundedFrame`
	 * labeled alternative in `TrinoSqlParser.frameBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoundedFrame?: (ctx: BoundedFrameContext) => Result;

	/**
	 * Visit a parse tree produced by the `queryPrimaryDefault`
	 * labeled alternative in `TrinoSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `table`
	 * labeled alternative in `TrinoSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable?: (ctx: TableContext) => Result;

	/**
	 * Visit a parse tree produced by the `inlineTable`
	 * labeled alternative in `TrinoSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineTable?: (ctx: InlineTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `subquery`
	 * labeled alternative in `TrinoSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubquery?: (ctx: SubqueryContext) => Result;

	/**
	 * Visit a parse tree produced by the `nullLiteral`
	 * labeled alternative in `TrinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullLiteral?: (ctx: NullLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `intervalLiteral`
	 * labeled alternative in `TrinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalLiteral?: (ctx: IntervalLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeConstructor`
	 * labeled alternative in `TrinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeConstructor?: (ctx: TypeConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by the `numericLiteral`
	 * labeled alternative in `TrinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericLiteral?: (ctx: NumericLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `TrinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringLiteral`
	 * labeled alternative in `TrinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `binaryLiteral`
	 * labeled alternative in `TrinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryLiteral?: (ctx: BinaryLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `parameter`
	 * labeled alternative in `TrinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;

	/**
	 * Visit a parse tree produced by the `position`
	 * labeled alternative in `TrinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPosition?: (ctx: PositionContext) => Result;

	/**
	 * Visit a parse tree produced by the `rowConstructor`
	 * labeled alternative in `TrinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowConstructor?: (ctx: RowConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionCall`
	 * labeled alternative in `TrinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `measure`
	 * labeled alternative in `TrinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMeasure?: (ctx: MeasureContext) => Result;

	/**
	 * Visit a parse tree produced by the `lambda`
	 * labeled alternative in `TrinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambda?: (ctx: LambdaContext) => Result;

	/**
	 * Visit a parse tree produced by the `subqueryExpression`
	 * labeled alternative in `TrinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubqueryExpression?: (ctx: SubqueryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `exists`
	 * labeled alternative in `TrinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExists?: (ctx: ExistsContext) => Result;

	/**
	 * Visit a parse tree produced by the `simpleCase`
	 * labeled alternative in `TrinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleCase?: (ctx: SimpleCaseContext) => Result;

	/**
	 * Visit a parse tree produced by the `searchedCase`
	 * labeled alternative in `TrinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearchedCase?: (ctx: SearchedCaseContext) => Result;

	/**
	 * Visit a parse tree produced by the `cast`
	 * labeled alternative in `TrinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCast?: (ctx: CastContext) => Result;

	/**
	 * Visit a parse tree produced by the `arrayConstructor`
	 * labeled alternative in `TrinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayConstructor?: (ctx: ArrayConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by the `subscript`
	 * labeled alternative in `TrinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscript?: (ctx: SubscriptContext) => Result;

	/**
	 * Visit a parse tree produced by the `columnReference`
	 * labeled alternative in `TrinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnReference?: (ctx: ColumnReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by the `dereference`
	 * labeled alternative in `TrinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDereference?: (ctx: DereferenceContext) => Result;

	/**
	 * Visit a parse tree produced by the `specialDateTimeFunction`
	 * labeled alternative in `TrinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecialDateTimeFunction?: (ctx: SpecialDateTimeFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `currentUser`
	 * labeled alternative in `TrinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentUser?: (ctx: CurrentUserContext) => Result;

	/**
	 * Visit a parse tree produced by the `currentCatalog`
	 * labeled alternative in `TrinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentCatalog?: (ctx: CurrentCatalogContext) => Result;

	/**
	 * Visit a parse tree produced by the `currentSchema`
	 * labeled alternative in `TrinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentSchema?: (ctx: CurrentSchemaContext) => Result;

	/**
	 * Visit a parse tree produced by the `currentPath`
	 * labeled alternative in `TrinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentPath?: (ctx: CurrentPathContext) => Result;

	/**
	 * Visit a parse tree produced by the `substring`
	 * labeled alternative in `TrinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubstring?: (ctx: SubstringContext) => Result;

	/**
	 * Visit a parse tree produced by the `normalize`
	 * labeled alternative in `TrinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalize?: (ctx: NormalizeContext) => Result;

	/**
	 * Visit a parse tree produced by the `extract`
	 * labeled alternative in `TrinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtract?: (ctx: ExtractContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `TrinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `groupingOperation`
	 * labeled alternative in `TrinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingOperation?: (ctx: GroupingOperationContext) => Result;

	/**
	 * Visit a parse tree produced by the `selectSingle`
	 * labeled alternative in `TrinoSqlParser.selectItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectSingle?: (ctx: SelectSingleContext) => Result;

	/**
	 * Visit a parse tree produced by the `selectAll`
	 * labeled alternative in `TrinoSqlParser.selectItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectAll?: (ctx: SelectAllContext) => Result;

	/**
	 * Visit a parse tree produced by the `qualifiedArgument`
	 * labeled alternative in `TrinoSqlParser.pathElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedArgument?: (ctx: QualifiedArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by the `unqualifiedArgument`
	 * labeled alternative in `TrinoSqlParser.pathElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnqualifiedArgument?: (ctx: UnqualifiedArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by the `positionalArgument`
	 * labeled alternative in `TrinoSqlParser.callArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPositionalArgument?: (ctx: PositionalArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by the `namedArgument`
	 * labeled alternative in `TrinoSqlParser.callArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedArgument?: (ctx: NamedArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by the `mergeUpdate`
	 * labeled alternative in `TrinoSqlParser.mergeCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMergeUpdate?: (ctx: MergeUpdateContext) => Result;

	/**
	 * Visit a parse tree produced by the `mergeDelete`
	 * labeled alternative in `TrinoSqlParser.mergeCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMergeDelete?: (ctx: MergeDeleteContext) => Result;

	/**
	 * Visit a parse tree produced by the `mergeInsert`
	 * labeled alternative in `TrinoSqlParser.mergeCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMergeInsert?: (ctx: MergeInsertContext) => Result;

	/**
	 * Visit a parse tree produced by the `zeroOrMoreQuantifier`
	 * labeled alternative in `TrinoSqlParser.patternQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZeroOrMoreQuantifier?: (ctx: ZeroOrMoreQuantifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `oneOrMoreQuantifier`
	 * labeled alternative in `TrinoSqlParser.patternQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOneOrMoreQuantifier?: (ctx: OneOrMoreQuantifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `zeroOrOneQuantifier`
	 * labeled alternative in `TrinoSqlParser.patternQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZeroOrOneQuantifier?: (ctx: ZeroOrOneQuantifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `rangeQuantifier`
	 * labeled alternative in `TrinoSqlParser.patternQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRangeQuantifier?: (ctx: RangeQuantifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `readUncommitted`
	 * labeled alternative in `TrinoSqlParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReadUncommitted?: (ctx: ReadUncommittedContext) => Result;

	/**
	 * Visit a parse tree produced by the `readCommitted`
	 * labeled alternative in `TrinoSqlParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReadCommitted?: (ctx: ReadCommittedContext) => Result;

	/**
	 * Visit a parse tree produced by the `repeatableRead`
	 * labeled alternative in `TrinoSqlParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeatableRead?: (ctx: RepeatableReadContext) => Result;

	/**
	 * Visit a parse tree produced by the `serializable`
	 * labeled alternative in `TrinoSqlParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSerializable?: (ctx: SerializableContext) => Result;

	/**
	 * Visit a parse tree produced by the `basicStringLiteral`
	 * labeled alternative in `TrinoSqlParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasicStringLiteral?: (ctx: BasicStringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `unicodeStringLiteral`
	 * labeled alternative in `TrinoSqlParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnicodeStringLiteral?: (ctx: UnicodeStringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `unspecifiedPrincipal`
	 * labeled alternative in `TrinoSqlParser.principal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnspecifiedPrincipal?: (ctx: UnspecifiedPrincipalContext) => Result;

	/**
	 * Visit a parse tree produced by the `userPrincipal`
	 * labeled alternative in `TrinoSqlParser.principal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUserPrincipal?: (ctx: UserPrincipalContext) => Result;

	/**
	 * Visit a parse tree produced by the `rolePrincipal`
	 * labeled alternative in `TrinoSqlParser.principal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRolePrincipal?: (ctx: RolePrincipalContext) => Result;

	/**
	 * Visit a parse tree produced by the `statementDefault`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementDefault?: (ctx: StatementDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `use`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUse?: (ctx: UseContext) => Result;

	/**
	 * Visit a parse tree produced by the `createSchema`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateSchema?: (ctx: CreateSchemaContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropSchema`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropSchema?: (ctx: DropSchemaContext) => Result;

	/**
	 * Visit a parse tree produced by the `renameSchema`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameSchema?: (ctx: RenameSchemaContext) => Result;

	/**
	 * Visit a parse tree produced by the `setSchemaAuthorization`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetSchemaAuthorization?: (ctx: SetSchemaAuthorizationContext) => Result;

	/**
	 * Visit a parse tree produced by the `createTableAsSelect`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTableAsSelect?: (ctx: CreateTableAsSelectContext) => Result;

	/**
	 * Visit a parse tree produced by the `createTable`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTable?: (ctx: CreateTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropTable`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropTable?: (ctx: DropTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `insertInto`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertInto?: (ctx: InsertIntoContext) => Result;

	/**
	 * Visit a parse tree produced by the `delete`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelete?: (ctx: DeleteContext) => Result;

	/**
	 * Visit a parse tree produced by the `truncateTable`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTruncateTable?: (ctx: TruncateTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `renameTable`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameTable?: (ctx: RenameTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `commentTable`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentTable?: (ctx: CommentTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `commentColumn`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentColumn?: (ctx: CommentColumnContext) => Result;

	/**
	 * Visit a parse tree produced by the `renameColumn`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameColumn?: (ctx: RenameColumnContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropColumn`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropColumn?: (ctx: DropColumnContext) => Result;

	/**
	 * Visit a parse tree produced by the `addColumn`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddColumn?: (ctx: AddColumnContext) => Result;

	/**
	 * Visit a parse tree produced by the `setTableAuthorization`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetTableAuthorization?: (ctx: SetTableAuthorizationContext) => Result;

	/**
	 * Visit a parse tree produced by the `setTableProperties`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetTableProperties?: (ctx: SetTablePropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by the `tableExecute`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableExecute?: (ctx: TableExecuteContext) => Result;

	/**
	 * Visit a parse tree produced by the `analyze`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnalyze?: (ctx: AnalyzeContext) => Result;

	/**
	 * Visit a parse tree produced by the `createMaterializedView`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => Result;

	/**
	 * Visit a parse tree produced by the `createView`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateView?: (ctx: CreateViewContext) => Result;

	/**
	 * Visit a parse tree produced by the `refreshMaterializedView`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefreshMaterializedView?: (ctx: RefreshMaterializedViewContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropMaterializedView`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropMaterializedView?: (ctx: DropMaterializedViewContext) => Result;

	/**
	 * Visit a parse tree produced by the `renameMaterializedView`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameMaterializedView?: (ctx: RenameMaterializedViewContext) => Result;

	/**
	 * Visit a parse tree produced by the `setMaterializedViewProperties`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetMaterializedViewProperties?: (ctx: SetMaterializedViewPropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropView`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropView?: (ctx: DropViewContext) => Result;

	/**
	 * Visit a parse tree produced by the `renameView`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameView?: (ctx: RenameViewContext) => Result;

	/**
	 * Visit a parse tree produced by the `setViewAuthorization`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetViewAuthorization?: (ctx: SetViewAuthorizationContext) => Result;

	/**
	 * Visit a parse tree produced by the `call`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCall?: (ctx: CallContext) => Result;

	/**
	 * Visit a parse tree produced by the `createRole`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateRole?: (ctx: CreateRoleContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropRole`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropRole?: (ctx: DropRoleContext) => Result;

	/**
	 * Visit a parse tree produced by the `grantRoles`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrantRoles?: (ctx: GrantRolesContext) => Result;

	/**
	 * Visit a parse tree produced by the `revokeRoles`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRevokeRoles?: (ctx: RevokeRolesContext) => Result;

	/**
	 * Visit a parse tree produced by the `setRole`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetRole?: (ctx: SetRoleContext) => Result;

	/**
	 * Visit a parse tree produced by the `grant`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrant?: (ctx: GrantContext) => Result;

	/**
	 * Visit a parse tree produced by the `deny`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeny?: (ctx: DenyContext) => Result;

	/**
	 * Visit a parse tree produced by the `revoke`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRevoke?: (ctx: RevokeContext) => Result;

	/**
	 * Visit a parse tree produced by the `showGrants`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowGrants?: (ctx: ShowGrantsContext) => Result;

	/**
	 * Visit a parse tree produced by the `explain`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplain?: (ctx: ExplainContext) => Result;

	/**
	 * Visit a parse tree produced by the `showCreateTable`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCreateTable?: (ctx: ShowCreateTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `showCreateSchema`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCreateSchema?: (ctx: ShowCreateSchemaContext) => Result;

	/**
	 * Visit a parse tree produced by the `showCreateView`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCreateView?: (ctx: ShowCreateViewContext) => Result;

	/**
	 * Visit a parse tree produced by the `showCreateMaterializedView`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCreateMaterializedView?: (ctx: ShowCreateMaterializedViewContext) => Result;

	/**
	 * Visit a parse tree produced by the `showTables`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowTables?: (ctx: ShowTablesContext) => Result;

	/**
	 * Visit a parse tree produced by the `showSchemas`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowSchemas?: (ctx: ShowSchemasContext) => Result;

	/**
	 * Visit a parse tree produced by the `showCatalogs`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCatalogs?: (ctx: ShowCatalogsContext) => Result;

	/**
	 * Visit a parse tree produced by the `showColumns`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowColumns?: (ctx: ShowColumnsContext) => Result;

	/**
	 * Visit a parse tree produced by the `showStats`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowStats?: (ctx: ShowStatsContext) => Result;

	/**
	 * Visit a parse tree produced by the `showStatsForQuery`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowStatsForQuery?: (ctx: ShowStatsForQueryContext) => Result;

	/**
	 * Visit a parse tree produced by the `showRoles`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowRoles?: (ctx: ShowRolesContext) => Result;

	/**
	 * Visit a parse tree produced by the `showRoleGrants`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowRoleGrants?: (ctx: ShowRoleGrantsContext) => Result;

	/**
	 * Visit a parse tree produced by the `showFunctions`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowFunctions?: (ctx: ShowFunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `showSession`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowSession?: (ctx: ShowSessionContext) => Result;

	/**
	 * Visit a parse tree produced by the `setSession`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetSession?: (ctx: SetSessionContext) => Result;

	/**
	 * Visit a parse tree produced by the `resetSession`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResetSession?: (ctx: ResetSessionContext) => Result;

	/**
	 * Visit a parse tree produced by the `startTransaction`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStartTransaction?: (ctx: StartTransactionContext) => Result;

	/**
	 * Visit a parse tree produced by the `commit`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommit?: (ctx: CommitContext) => Result;

	/**
	 * Visit a parse tree produced by the `rollback`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRollback?: (ctx: RollbackContext) => Result;

	/**
	 * Visit a parse tree produced by the `prepare`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrepare?: (ctx: PrepareContext) => Result;

	/**
	 * Visit a parse tree produced by the `deallocate`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeallocate?: (ctx: DeallocateContext) => Result;

	/**
	 * Visit a parse tree produced by the `execute`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecute?: (ctx: ExecuteContext) => Result;

	/**
	 * Visit a parse tree produced by the `describeInput`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescribeInput?: (ctx: DescribeInputContext) => Result;

	/**
	 * Visit a parse tree produced by the `describeOutput`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescribeOutput?: (ctx: DescribeOutputContext) => Result;

	/**
	 * Visit a parse tree produced by the `setPath`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetPath?: (ctx: SetPathContext) => Result;

	/**
	 * Visit a parse tree produced by the `setTimeZone`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetTimeZone?: (ctx: SetTimeZoneContext) => Result;

	/**
	 * Visit a parse tree produced by the `update`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdate?: (ctx: UpdateContext) => Result;

	/**
	 * Visit a parse tree produced by the `merge`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMerge?: (ctx: MergeContext) => Result;

	/**
	 * Visit a parse tree produced by the `showTableComment`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowTableComment?: (ctx: ShowTableCommentContext) => Result;

	/**
	 * Visit a parse tree produced by the `showColumnComment`
	 * labeled alternative in `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowColumnComment?: (ctx: ShowColumnCommentContext) => Result;

	/**
	 * Visit a parse tree produced by the `timeZoneInterval`
	 * labeled alternative in `TrinoSqlParser.timeZoneSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeZoneInterval?: (ctx: TimeZoneIntervalContext) => Result;

	/**
	 * Visit a parse tree produced by the `timeZoneString`
	 * labeled alternative in `TrinoSqlParser.timeZoneSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeZoneString?: (ctx: TimeZoneStringContext) => Result;

	/**
	 * Visit a parse tree produced by the `isolationLevel`
	 * labeled alternative in `TrinoSqlParser.transactionMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsolationLevel?: (ctx: IsolationLevelContext) => Result;

	/**
	 * Visit a parse tree produced by the `transactionAccessMode`
	 * labeled alternative in `TrinoSqlParser.transactionMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransactionAccessMode?: (ctx: TransactionAccessModeContext) => Result;

	/**
	 * Visit a parse tree produced by the `predicated`
	 * labeled alternative in `TrinoSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicated?: (ctx: PredicatedContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalNot`
	 * labeled alternative in `TrinoSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalNot?: (ctx: LogicalNotContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalBinary`
	 * labeled alternative in `TrinoSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalBinary?: (ctx: LogicalBinaryContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.statements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatements?: (ctx: StatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.singleStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleStatement?: (ctx: SingleStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.standaloneExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandaloneExpression?: (ctx: StandaloneExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.standalonePathSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandalonePathSpecification?: (ctx: StandalonePathSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.standaloneType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandaloneType?: (ctx: StandaloneTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.standaloneRowPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandaloneRowPattern?: (ctx: StandaloneRowPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery?: (ctx: QueryContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.with`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWith?: (ctx: WithContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.tableElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableElement?: (ctx: TableElementContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.columnDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnDefinition?: (ctx: ColumnDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.likeClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLikeClause?: (ctx: LikeClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.properties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProperties?: (ctx: PropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.propertyAssignments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyAssignments?: (ctx: PropertyAssignmentsContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.property`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProperty?: (ctx: PropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.propertyValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyValue?: (ctx: PropertyValueContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.queryNoWith`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryNoWith?: (ctx: QueryNoWithContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.limitRowCount`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLimitRowCount?: (ctx: LimitRowCountContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.rowCount`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowCount?: (ctx: RowCountContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.queryTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryTerm?: (ctx: QueryTermContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryPrimary?: (ctx: QueryPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.sortItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSortItem?: (ctx: SortItemContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.querySpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuerySpecification?: (ctx: QuerySpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.groupBy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupBy?: (ctx: GroupByContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.groupingElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingElement?: (ctx: GroupingElementContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.groupingSet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingSet?: (ctx: GroupingSetContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.groupingTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingTerm?: (ctx: GroupingTermContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.windowDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowDefinition?: (ctx: WindowDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.windowSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowSpecification?: (ctx: WindowSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.namedQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedQuery?: (ctx: NamedQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.setQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetQuantifier?: (ctx: SetQuantifierContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.selectItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectItem?: (ctx: SelectItemContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.relation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelation?: (ctx: RelationContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.joinType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinType?: (ctx: JoinTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.joinCriteria`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinCriteria?: (ctx: JoinCriteriaContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.sampledRelation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSampledRelation?: (ctx: SampledRelationContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.sampleType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSampleType?: (ctx: SampleTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.patternRecognition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternRecognition?: (ctx: PatternRecognitionContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.measureDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMeasureDefinition?: (ctx: MeasureDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.rowsPerMatch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowsPerMatch?: (ctx: RowsPerMatchContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.emptyMatchHandling`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyMatchHandling?: (ctx: EmptyMatchHandlingContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.skipTo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkipTo?: (ctx: SkipToContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.subsetDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubsetDefinition?: (ctx: SubsetDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.variableDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDefinition?: (ctx: VariableDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.aliasedRelation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAliasedRelation?: (ctx: AliasedRelationContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.columnListCreate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnListCreate?: (ctx: ColumnListCreateContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.columnList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnList?: (ctx: ColumnListContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.columnAliases`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnAliases?: (ctx: ColumnAliasesContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationPrimary?: (ctx: RelationPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanExpression?: (ctx: BooleanExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicate?: (ctx: PredicateContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueExpression?: (ctx: ValueExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.processingMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcessingMode?: (ctx: ProcessingModeContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.nullTreatment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullTreatment?: (ctx: NullTreatmentContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.timeZoneSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeZoneSpecifier?: (ctx: TimeZoneSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.comparisonOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.comparisonQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonQuantifier?: (ctx: ComparisonQuantifierContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.booleanValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanValue?: (ctx: BooleanValueContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.interval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterval?: (ctx: IntervalContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.intervalField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalField?: (ctx: IntervalFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.normalForm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalForm?: (ctx: NormalFormContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.rowField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowField?: (ctx: RowFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.typeParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameter?: (ctx: TypeParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.whenClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenClause?: (ctx: WhenClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.filter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilter?: (ctx: FilterContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.mergeCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMergeCase?: (ctx: MergeCaseContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.over`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOver?: (ctx: OverContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.windowFrame`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowFrame?: (ctx: WindowFrameContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.frameExtent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrameExtent?: (ctx: FrameExtentContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.frameBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrameBound?: (ctx: FrameBoundContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.rowPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowPattern?: (ctx: RowPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.patternPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternPrimary?: (ctx: PatternPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.patternQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternQuantifier?: (ctx: PatternQuantifierContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.updateAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdateAssignment?: (ctx: UpdateAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.explainOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplainOption?: (ctx: ExplainOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.transactionMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransactionMode?: (ctx: TransactionModeContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLevelOfIsolation?: (ctx: LevelOfIsolationContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.callArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallArgument?: (ctx: CallArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.pathElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPathElement?: (ctx: PathElementContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.pathSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPathSpecification?: (ctx: PathSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.privilege`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivilege?: (ctx: PrivilegeContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.tableOrViewName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOrViewName?: (ctx: TableOrViewNameContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.tableName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableName?: (ctx: TableNameContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.tableNameCreate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableNameCreate?: (ctx: TableNameCreateContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.viewName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewName?: (ctx: ViewNameContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.viewNameCreate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewNameCreate?: (ctx: ViewNameCreateContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.tablePath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePath?: (ctx: TablePathContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.viewPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewPath?: (ctx: ViewPathContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.schemaName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchemaName?: (ctx: SchemaNameContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.schemaNameCreate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchemaNameCreate?: (ctx: SchemaNameCreateContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.schemaPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchemaPath?: (ctx: SchemaPathContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.catalogName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatalogName?: (ctx: CatalogNameContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.catalogNameCreate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatalogNameCreate?: (ctx: CatalogNameCreateContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.functionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionName?: (ctx: FunctionNameContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.columnName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnName?: (ctx: ColumnNameContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.columnNameCreate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameCreate?: (ctx: ColumnNameCreateContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.grantor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrantor?: (ctx: GrantorContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.principal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrincipal?: (ctx: PrincipalContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.roles`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoles?: (ctx: RolesContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSqlParser.nonReserved`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonReserved?: (ctx: NonReservedContext) => Result;
}

