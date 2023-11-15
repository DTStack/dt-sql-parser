// Generated from /Users/shuangxu/Documents/workspace/dt-sql-parser/src/grammar/impala/ImpalaSqlParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { TableNameContext } from "./ImpalaSqlParserParser";
import { SubqueryRelationContext } from "./ImpalaSqlParserParser";
import { UnnestContext } from "./ImpalaSqlParserParser";
import { LateralContext } from "./ImpalaSqlParserParser";
import { ParenthesizedRelationContext } from "./ImpalaSqlParserParser";
import { JoinRelationContext } from "./ImpalaSqlParserParser";
import { RelationDefaultContext } from "./ImpalaSqlParserParser";
import { ComparisonContext } from "./ImpalaSqlParserParser";
import { QuantifiedComparisonContext } from "./ImpalaSqlParserParser";
import { BetweenContext } from "./ImpalaSqlParserParser";
import { InListContext } from "./ImpalaSqlParserParser";
import { InSubqueryContext } from "./ImpalaSqlParserParser";
import { LikeContext } from "./ImpalaSqlParserParser";
import { NullPredicateContext } from "./ImpalaSqlParserParser";
import { DistinctFromContext } from "./ImpalaSqlParserParser";
import { DecimalLiteralContext } from "./ImpalaSqlParserParser";
import { DoubleLiteralContext } from "./ImpalaSqlParserParser";
import { IntegerLiteralContext } from "./ImpalaSqlParserParser";
import { QueryTermDefaultContext } from "./ImpalaSqlParserParser";
import { SetOperationContext } from "./ImpalaSqlParserParser";
import { UnquotedIdentifierContext } from "./ImpalaSqlParserParser";
import { QuotedIdentifierContext } from "./ImpalaSqlParserParser";
import { BackQuotedIdentifierContext } from "./ImpalaSqlParserParser";
import { DigitIdentifierContext } from "./ImpalaSqlParserParser";
import { SingleGroupingSetContext } from "./ImpalaSqlParserParser";
import { ValueExpressionDefaultContext } from "./ImpalaSqlParserParser";
import { ArithmeticUnaryContext } from "./ImpalaSqlParserParser";
import { ArithmeticBinaryContext } from "./ImpalaSqlParserParser";
import { ConcatenationContext } from "./ImpalaSqlParserParser";
import { BasicStringLiteralContext } from "./ImpalaSqlParserParser";
import { UnicodeStringLiteralContext } from "./ImpalaSqlParserParser";
import { RolePrincipalContext } from "./ImpalaSqlParserParser";
import { UserPrincipalContext } from "./ImpalaSqlParserParser";
import { GroupPrincipalContext } from "./ImpalaSqlParserParser";
import { UnboundedFrameContext } from "./ImpalaSqlParserParser";
import { CurrentRowBoundContext } from "./ImpalaSqlParserParser";
import { BoundedFrameContext } from "./ImpalaSqlParserParser";
import { StatementDefaultContext } from "./ImpalaSqlParserParser";
import { UseContext } from "./ImpalaSqlParserParser";
import { CreateSchemaContext } from "./ImpalaSqlParserParser";
import { AlterSchemaContext } from "./ImpalaSqlParserParser";
import { DropSchemaContext } from "./ImpalaSqlParserParser";
import { CreateTableContext } from "./ImpalaSqlParserParser";
import { CreateTableLikeContext } from "./ImpalaSqlParserParser";
import { CreateKuduTableContext } from "./ImpalaSqlParserParser";
import { CreateKuduTableAsSelectContext } from "./ImpalaSqlParserParser";
import { RenameTableContext } from "./ImpalaSqlParserParser";
import { AddColumnsContext } from "./ImpalaSqlParserParser";
import { ReplaceColumnsContext } from "./ImpalaSqlParserParser";
import { EditColumnDefineContext } from "./ImpalaSqlParserParser";
import { AddSingleColumnContext } from "./ImpalaSqlParserParser";
import { DropSingleColumnContext } from "./ImpalaSqlParserParser";
import { AlterTableOwnerContext } from "./ImpalaSqlParserParser";
import { AlterTableKuduOnlyContext } from "./ImpalaSqlParserParser";
import { AlterTableNonKuduContext } from "./ImpalaSqlParserParser";
import { AddPartitionByValueContext } from "./ImpalaSqlParserParser";
import { AddPartitionByRangeContext } from "./ImpalaSqlParserParser";
import { DropPartitionByValueContext } from "./ImpalaSqlParserParser";
import { RecoverPartitionsContext } from "./ImpalaSqlParserParser";
import { AlterFormatContext } from "./ImpalaSqlParserParser";
import { AlterStatsKeyContext } from "./ImpalaSqlParserParser";
import { AlterPartitionCacheContext } from "./ImpalaSqlParserParser";
import { DropTableContext } from "./ImpalaSqlParserParser";
import { TruncateTableContext } from "./ImpalaSqlParserParser";
import { CreateViewContext } from "./ImpalaSqlParserParser";
import { AlterViewContext } from "./ImpalaSqlParserParser";
import { RenameViewContext } from "./ImpalaSqlParserParser";
import { AlterViewOwnerContext } from "./ImpalaSqlParserParser";
import { AlterSetViewTblpropertiesContext } from "./ImpalaSqlParserParser";
import { AlterUnSetViewTblpropertiesContext } from "./ImpalaSqlParserParser";
import { DropViewContext } from "./ImpalaSqlParserParser";
import { DescribeDbOrTableContext } from "./ImpalaSqlParserParser";
import { ComputeStatsContext } from "./ImpalaSqlParserParser";
import { ComputeIncrementalStatsContext } from "./ImpalaSqlParserParser";
import { DropStatsContext } from "./ImpalaSqlParserParser";
import { DropIncrementalStatsContext } from "./ImpalaSqlParserParser";
import { CreateFunctionContext } from "./ImpalaSqlParserParser";
import { RefreshFunctionContext } from "./ImpalaSqlParserParser";
import { DropFunctionContext } from "./ImpalaSqlParserParser";
import { CreateRoleContext } from "./ImpalaSqlParserParser";
import { DropRoleContext } from "./ImpalaSqlParserParser";
import { GrantRoleContext } from "./ImpalaSqlParserParser";
import { GrantContext } from "./ImpalaSqlParserParser";
import { RevokeContext } from "./ImpalaSqlParserParser";
import { InsertIntoContext } from "./ImpalaSqlParserParser";
import { DeleteContext } from "./ImpalaSqlParserParser";
import { DeleteTableRefContext } from "./ImpalaSqlParserParser";
import { UpdateTableContext } from "./ImpalaSqlParserParser";
import { UpsertContext } from "./ImpalaSqlParserParser";
import { ShowSchemasContext } from "./ImpalaSqlParserParser";
import { ShowTablesContext } from "./ImpalaSqlParserParser";
import { ShowFunctionsContext } from "./ImpalaSqlParserParser";
import { ShowCreateTableContext } from "./ImpalaSqlParserParser";
import { ShowCreateViewContext } from "./ImpalaSqlParserParser";
import { ShowTableStatsContext } from "./ImpalaSqlParserParser";
import { ShowColumnStatsContext } from "./ImpalaSqlParserParser";
import { ShowPartitionsContext } from "./ImpalaSqlParserParser";
import { ShowFilesContext } from "./ImpalaSqlParserParser";
import { ShowRolesContext } from "./ImpalaSqlParserParser";
import { ShowRoleGrantContext } from "./ImpalaSqlParserParser";
import { ShowGrantRoleContext } from "./ImpalaSqlParserParser";
import { ShowGrantUserContext } from "./ImpalaSqlParserParser";
import { AddCommentsContext } from "./ImpalaSqlParserParser";
import { ExplainContext } from "./ImpalaSqlParserParser";
import { SetSessionContext } from "./ImpalaSqlParserParser";
import { ShutdownContext } from "./ImpalaSqlParserParser";
import { InvalidateMetaContext } from "./ImpalaSqlParserParser";
import { LoadDataContext } from "./ImpalaSqlParserParser";
import { RefreshMetaContext } from "./ImpalaSqlParserParser";
import { RefreshAuthContext } from "./ImpalaSqlParserParser";
import { QueryPrimaryDefaultContext } from "./ImpalaSqlParserParser";
import { TableContext } from "./ImpalaSqlParserParser";
import { InlineTableContext } from "./ImpalaSqlParserParser";
import { SubqueryContext } from "./ImpalaSqlParserParser";
import { NullLiteralContext } from "./ImpalaSqlParserParser";
import { IntervalLiteralContext } from "./ImpalaSqlParserParser";
import { TypeConstructorContext } from "./ImpalaSqlParserParser";
import { NumericLiteralContext } from "./ImpalaSqlParserParser";
import { BooleanLiteralContext } from "./ImpalaSqlParserParser";
import { StringLiteralContext } from "./ImpalaSqlParserParser";
import { BinaryLiteralContext } from "./ImpalaSqlParserParser";
import { ParameterContext } from "./ImpalaSqlParserParser";
import { PositionContext } from "./ImpalaSqlParserParser";
import { RowConstructorContext } from "./ImpalaSqlParserParser";
import { FunctionCallContext } from "./ImpalaSqlParserParser";
import { LambdaContext } from "./ImpalaSqlParserParser";
import { SubqueryExpressionContext } from "./ImpalaSqlParserParser";
import { ExistsContext } from "./ImpalaSqlParserParser";
import { SimpleCaseContext } from "./ImpalaSqlParserParser";
import { SearchedCaseContext } from "./ImpalaSqlParserParser";
import { CastContext } from "./ImpalaSqlParserParser";
import { ArrayConstructorContext } from "./ImpalaSqlParserParser";
import { SubscriptContext } from "./ImpalaSqlParserParser";
import { ColumnReferenceContext } from "./ImpalaSqlParserParser";
import { DereferenceContext } from "./ImpalaSqlParserParser";
import { SpecialDateTimeFunctionContext } from "./ImpalaSqlParserParser";
import { CurrentUserContext } from "./ImpalaSqlParserParser";
import { CurrentPathContext } from "./ImpalaSqlParserParser";
import { SubstringContext } from "./ImpalaSqlParserParser";
import { NormalizeContext } from "./ImpalaSqlParserParser";
import { ExtractContext } from "./ImpalaSqlParserParser";
import { ParenthesizedExpressionContext } from "./ImpalaSqlParserParser";
import { GroupingOperationContext } from "./ImpalaSqlParserParser";
import { SelectSingleContext } from "./ImpalaSqlParserParser";
import { SelectAllContext } from "./ImpalaSqlParserParser";
import { PredicatedContext } from "./ImpalaSqlParserParser";
import { LogicalNotContext } from "./ImpalaSqlParserParser";
import { LogicalBinaryContext } from "./ImpalaSqlParserParser";
import { QualifiedArgumentContext } from "./ImpalaSqlParserParser";
import { UnqualifiedArgumentContext } from "./ImpalaSqlParserParser";
import { ProgramContext } from "./ImpalaSqlParserParser";
import { StatementContext } from "./ImpalaSqlParserParser";
import { AssignmentListContext } from "./ImpalaSqlParserParser";
import { AssignmentItemContext } from "./ImpalaSqlParserParser";
import { ViewColumnsContext } from "./ImpalaSqlParserParser";
import { QueryContext } from "./ImpalaSqlParserParser";
import { WithContext } from "./ImpalaSqlParserParser";
import { TableElementContext } from "./ImpalaSqlParserParser";
import { ColumnDefinitionContext } from "./ImpalaSqlParserParser";
import { KuduTableElementContext } from "./ImpalaSqlParserParser";
import { KuduColumnDefinitionContext } from "./ImpalaSqlParserParser";
import { ColumnSpecWithKuduContext } from "./ImpalaSqlParserParser";
import { KuduAttributesContext } from "./ImpalaSqlParserParser";
import { KuduStorageAttrContext } from "./ImpalaSqlParserParser";
import { StatsKeyContext } from "./ImpalaSqlParserParser";
import { FileFormatContext } from "./ImpalaSqlParserParser";
import { KuduPartitionSpecContext } from "./ImpalaSqlParserParser";
import { ConstantsContext } from "./ImpalaSqlParserParser";
import { CacheSpecContext } from "./ImpalaSqlParserParser";
import { RangeOperatorContext } from "./ImpalaSqlParserParser";
import { PartitionColContext } from "./ImpalaSqlParserParser";
import { LikeClauseContext } from "./ImpalaSqlParserParser";
import { HintClauseContext } from "./ImpalaSqlParserParser";
import { PropertiesContext } from "./ImpalaSqlParserParser";
import { PartitionedByContext } from "./ImpalaSqlParserParser";
import { SortedByContext } from "./ImpalaSqlParserParser";
import { RowFormatContext } from "./ImpalaSqlParserParser";
import { PropertyContext } from "./ImpalaSqlParserParser";
import { QueryNoWithContext } from "./ImpalaSqlParserParser";
import { QueryTermContext } from "./ImpalaSqlParserParser";
import { QueryPrimaryContext } from "./ImpalaSqlParserParser";
import { SortItemContext } from "./ImpalaSqlParserParser";
import { QuerySpecificationContext } from "./ImpalaSqlParserParser";
import { GroupByContext } from "./ImpalaSqlParserParser";
import { GroupingElementContext } from "./ImpalaSqlParserParser";
import { GroupingSetContext } from "./ImpalaSqlParserParser";
import { NamedQueryContext } from "./ImpalaSqlParserParser";
import { SetQuantifierContext } from "./ImpalaSqlParserParser";
import { SelectItemContext } from "./ImpalaSqlParserParser";
import { RelationContext } from "./ImpalaSqlParserParser";
import { JoinTypeContext } from "./ImpalaSqlParserParser";
import { JoinCriteriaContext } from "./ImpalaSqlParserParser";
import { SampledRelationContext } from "./ImpalaSqlParserParser";
import { SampleTypeContext } from "./ImpalaSqlParserParser";
import { AliasedRelationContext } from "./ImpalaSqlParserParser";
import { ColumnAliasesContext } from "./ImpalaSqlParserParser";
import { RelationPrimaryContext } from "./ImpalaSqlParserParser";
import { ExpressionContext } from "./ImpalaSqlParserParser";
import { BooleanExpressionContext } from "./ImpalaSqlParserParser";
import { PredicateContext } from "./ImpalaSqlParserParser";
import { ValueExpressionContext } from "./ImpalaSqlParserParser";
import { PrimaryExpressionContext } from "./ImpalaSqlParserParser";
import { StringContext } from "./ImpalaSqlParserParser";
import { ComparisonOperatorContext } from "./ImpalaSqlParserParser";
import { ComparisonQuantifierContext } from "./ImpalaSqlParserParser";
import { BooleanValueContext } from "./ImpalaSqlParserParser";
import { IntervalContext } from "./ImpalaSqlParserParser";
import { IntervalFieldContext } from "./ImpalaSqlParserParser";
import { NormalFormContext } from "./ImpalaSqlParserParser";
import { TypeContext } from "./ImpalaSqlParserParser";
import { TypeParameterContext } from "./ImpalaSqlParserParser";
import { BaseTypeContext } from "./ImpalaSqlParserParser";
import { WhenClauseContext } from "./ImpalaSqlParserParser";
import { FilterContext } from "./ImpalaSqlParserParser";
import { OverContext } from "./ImpalaSqlParserParser";
import { WindowFrameContext } from "./ImpalaSqlParserParser";
import { FrameBoundContext } from "./ImpalaSqlParserParser";
import { PathElementContext } from "./ImpalaSqlParserParser";
import { PathSpecificationContext } from "./ImpalaSqlParserParser";
import { PrivilegeContext } from "./ImpalaSqlParserParser";
import { ObjectTypeContext } from "./ImpalaSqlParserParser";
import { QualifiedNameContext } from "./ImpalaSqlParserParser";
import { PrincipalContext } from "./ImpalaSqlParserParser";
import { IdentifierContext } from "./ImpalaSqlParserParser";
import { NumberContext } from "./ImpalaSqlParserParser";
import { NonReservedContext } from "./ImpalaSqlParserParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ImpalaSqlParserParser`.
 */
export interface ImpalaSqlParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `tableName`
	 * labeled alternative in `ImpalaSqlParserParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterTableName?: (ctx: TableNameContext) => void;
	/**
	 * Exit a parse tree produced by the `tableName`
	 * labeled alternative in `ImpalaSqlParserParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitTableName?: (ctx: TableNameContext) => void;

	/**
	 * Enter a parse tree produced by the `subqueryRelation`
	 * labeled alternative in `ImpalaSqlParserParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterSubqueryRelation?: (ctx: SubqueryRelationContext) => void;
	/**
	 * Exit a parse tree produced by the `subqueryRelation`
	 * labeled alternative in `ImpalaSqlParserParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitSubqueryRelation?: (ctx: SubqueryRelationContext) => void;

	/**
	 * Enter a parse tree produced by the `unnest`
	 * labeled alternative in `ImpalaSqlParserParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterUnnest?: (ctx: UnnestContext) => void;
	/**
	 * Exit a parse tree produced by the `unnest`
	 * labeled alternative in `ImpalaSqlParserParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitUnnest?: (ctx: UnnestContext) => void;

	/**
	 * Enter a parse tree produced by the `lateral`
	 * labeled alternative in `ImpalaSqlParserParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterLateral?: (ctx: LateralContext) => void;
	/**
	 * Exit a parse tree produced by the `lateral`
	 * labeled alternative in `ImpalaSqlParserParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitLateral?: (ctx: LateralContext) => void;

	/**
	 * Enter a parse tree produced by the `parenthesizedRelation`
	 * labeled alternative in `ImpalaSqlParserParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedRelation?: (ctx: ParenthesizedRelationContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesizedRelation`
	 * labeled alternative in `ImpalaSqlParserParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedRelation?: (ctx: ParenthesizedRelationContext) => void;

	/**
	 * Enter a parse tree produced by the `joinRelation`
	 * labeled alternative in `ImpalaSqlParserParser.relation`.
	 * @param ctx the parse tree
	 */
	enterJoinRelation?: (ctx: JoinRelationContext) => void;
	/**
	 * Exit a parse tree produced by the `joinRelation`
	 * labeled alternative in `ImpalaSqlParserParser.relation`.
	 * @param ctx the parse tree
	 */
	exitJoinRelation?: (ctx: JoinRelationContext) => void;

	/**
	 * Enter a parse tree produced by the `relationDefault`
	 * labeled alternative in `ImpalaSqlParserParser.relation`.
	 * @param ctx the parse tree
	 */
	enterRelationDefault?: (ctx: RelationDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `relationDefault`
	 * labeled alternative in `ImpalaSqlParserParser.relation`.
	 * @param ctx the parse tree
	 */
	exitRelationDefault?: (ctx: RelationDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `comparison`
	 * labeled alternative in `ImpalaSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Exit a parse tree produced by the `comparison`
	 * labeled alternative in `ImpalaSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitComparison?: (ctx: ComparisonContext) => void;

	/**
	 * Enter a parse tree produced by the `quantifiedComparison`
	 * labeled alternative in `ImpalaSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterQuantifiedComparison?: (ctx: QuantifiedComparisonContext) => void;
	/**
	 * Exit a parse tree produced by the `quantifiedComparison`
	 * labeled alternative in `ImpalaSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitQuantifiedComparison?: (ctx: QuantifiedComparisonContext) => void;

	/**
	 * Enter a parse tree produced by the `between`
	 * labeled alternative in `ImpalaSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterBetween?: (ctx: BetweenContext) => void;
	/**
	 * Exit a parse tree produced by the `between`
	 * labeled alternative in `ImpalaSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitBetween?: (ctx: BetweenContext) => void;

	/**
	 * Enter a parse tree produced by the `inList`
	 * labeled alternative in `ImpalaSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterInList?: (ctx: InListContext) => void;
	/**
	 * Exit a parse tree produced by the `inList`
	 * labeled alternative in `ImpalaSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitInList?: (ctx: InListContext) => void;

	/**
	 * Enter a parse tree produced by the `inSubquery`
	 * labeled alternative in `ImpalaSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterInSubquery?: (ctx: InSubqueryContext) => void;
	/**
	 * Exit a parse tree produced by the `inSubquery`
	 * labeled alternative in `ImpalaSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitInSubquery?: (ctx: InSubqueryContext) => void;

	/**
	 * Enter a parse tree produced by the `like`
	 * labeled alternative in `ImpalaSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterLike?: (ctx: LikeContext) => void;
	/**
	 * Exit a parse tree produced by the `like`
	 * labeled alternative in `ImpalaSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitLike?: (ctx: LikeContext) => void;

	/**
	 * Enter a parse tree produced by the `nullPredicate`
	 * labeled alternative in `ImpalaSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterNullPredicate?: (ctx: NullPredicateContext) => void;
	/**
	 * Exit a parse tree produced by the `nullPredicate`
	 * labeled alternative in `ImpalaSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitNullPredicate?: (ctx: NullPredicateContext) => void;

	/**
	 * Enter a parse tree produced by the `distinctFrom`
	 * labeled alternative in `ImpalaSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterDistinctFrom?: (ctx: DistinctFromContext) => void;
	/**
	 * Exit a parse tree produced by the `distinctFrom`
	 * labeled alternative in `ImpalaSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitDistinctFrom?: (ctx: DistinctFromContext) => void;

	/**
	 * Enter a parse tree produced by the `decimalLiteral`
	 * labeled alternative in `ImpalaSqlParserParser.number`.
	 * @param ctx the parse tree
	 */
	enterDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `decimalLiteral`
	 * labeled alternative in `ImpalaSqlParserParser.number`.
	 * @param ctx the parse tree
	 */
	exitDecimalLiteral?: (ctx: DecimalLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `doubleLiteral`
	 * labeled alternative in `ImpalaSqlParserParser.number`.
	 * @param ctx the parse tree
	 */
	enterDoubleLiteral?: (ctx: DoubleLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `doubleLiteral`
	 * labeled alternative in `ImpalaSqlParserParser.number`.
	 * @param ctx the parse tree
	 */
	exitDoubleLiteral?: (ctx: DoubleLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `integerLiteral`
	 * labeled alternative in `ImpalaSqlParserParser.number`.
	 * @param ctx the parse tree
	 */
	enterIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `integerLiteral`
	 * labeled alternative in `ImpalaSqlParserParser.number`.
	 * @param ctx the parse tree
	 */
	exitIntegerLiteral?: (ctx: IntegerLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `queryTermDefault`
	 * labeled alternative in `ImpalaSqlParserParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	enterQueryTermDefault?: (ctx: QueryTermDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `queryTermDefault`
	 * labeled alternative in `ImpalaSqlParserParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	exitQueryTermDefault?: (ctx: QueryTermDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `setOperation`
	 * labeled alternative in `ImpalaSqlParserParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	enterSetOperation?: (ctx: SetOperationContext) => void;
	/**
	 * Exit a parse tree produced by the `setOperation`
	 * labeled alternative in `ImpalaSqlParserParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	exitSetOperation?: (ctx: SetOperationContext) => void;

	/**
	 * Enter a parse tree produced by the `unquotedIdentifier`
	 * labeled alternative in `ImpalaSqlParserParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `unquotedIdentifier`
	 * labeled alternative in `ImpalaSqlParserParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by the `quotedIdentifier`
	 * labeled alternative in `ImpalaSqlParserParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `quotedIdentifier`
	 * labeled alternative in `ImpalaSqlParserParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by the `backQuotedIdentifier`
	 * labeled alternative in `ImpalaSqlParserParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `backQuotedIdentifier`
	 * labeled alternative in `ImpalaSqlParserParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by the `digitIdentifier`
	 * labeled alternative in `ImpalaSqlParserParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterDigitIdentifier?: (ctx: DigitIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `digitIdentifier`
	 * labeled alternative in `ImpalaSqlParserParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitDigitIdentifier?: (ctx: DigitIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by the `singleGroupingSet`
	 * labeled alternative in `ImpalaSqlParserParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	enterSingleGroupingSet?: (ctx: SingleGroupingSetContext) => void;
	/**
	 * Exit a parse tree produced by the `singleGroupingSet`
	 * labeled alternative in `ImpalaSqlParserParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	exitSingleGroupingSet?: (ctx: SingleGroupingSetContext) => void;

	/**
	 * Enter a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `ImpalaSqlParserParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `ImpalaSqlParserParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `ImpalaSqlParserParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `ImpalaSqlParserParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;

	/**
	 * Enter a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `ImpalaSqlParserParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `ImpalaSqlParserParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;

	/**
	 * Enter a parse tree produced by the `concatenation`
	 * labeled alternative in `ImpalaSqlParserParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterConcatenation?: (ctx: ConcatenationContext) => void;
	/**
	 * Exit a parse tree produced by the `concatenation`
	 * labeled alternative in `ImpalaSqlParserParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitConcatenation?: (ctx: ConcatenationContext) => void;

	/**
	 * Enter a parse tree produced by the `basicStringLiteral`
	 * labeled alternative in `ImpalaSqlParserParser.string`.
	 * @param ctx the parse tree
	 */
	enterBasicStringLiteral?: (ctx: BasicStringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `basicStringLiteral`
	 * labeled alternative in `ImpalaSqlParserParser.string`.
	 * @param ctx the parse tree
	 */
	exitBasicStringLiteral?: (ctx: BasicStringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `unicodeStringLiteral`
	 * labeled alternative in `ImpalaSqlParserParser.string`.
	 * @param ctx the parse tree
	 */
	enterUnicodeStringLiteral?: (ctx: UnicodeStringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `unicodeStringLiteral`
	 * labeled alternative in `ImpalaSqlParserParser.string`.
	 * @param ctx the parse tree
	 */
	exitUnicodeStringLiteral?: (ctx: UnicodeStringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `rolePrincipal`
	 * labeled alternative in `ImpalaSqlParserParser.principal`.
	 * @param ctx the parse tree
	 */
	enterRolePrincipal?: (ctx: RolePrincipalContext) => void;
	/**
	 * Exit a parse tree produced by the `rolePrincipal`
	 * labeled alternative in `ImpalaSqlParserParser.principal`.
	 * @param ctx the parse tree
	 */
	exitRolePrincipal?: (ctx: RolePrincipalContext) => void;

	/**
	 * Enter a parse tree produced by the `userPrincipal`
	 * labeled alternative in `ImpalaSqlParserParser.principal`.
	 * @param ctx the parse tree
	 */
	enterUserPrincipal?: (ctx: UserPrincipalContext) => void;
	/**
	 * Exit a parse tree produced by the `userPrincipal`
	 * labeled alternative in `ImpalaSqlParserParser.principal`.
	 * @param ctx the parse tree
	 */
	exitUserPrincipal?: (ctx: UserPrincipalContext) => void;

	/**
	 * Enter a parse tree produced by the `groupPrincipal`
	 * labeled alternative in `ImpalaSqlParserParser.principal`.
	 * @param ctx the parse tree
	 */
	enterGroupPrincipal?: (ctx: GroupPrincipalContext) => void;
	/**
	 * Exit a parse tree produced by the `groupPrincipal`
	 * labeled alternative in `ImpalaSqlParserParser.principal`.
	 * @param ctx the parse tree
	 */
	exitGroupPrincipal?: (ctx: GroupPrincipalContext) => void;

	/**
	 * Enter a parse tree produced by the `unboundedFrame`
	 * labeled alternative in `ImpalaSqlParserParser.frameBound`.
	 * @param ctx the parse tree
	 */
	enterUnboundedFrame?: (ctx: UnboundedFrameContext) => void;
	/**
	 * Exit a parse tree produced by the `unboundedFrame`
	 * labeled alternative in `ImpalaSqlParserParser.frameBound`.
	 * @param ctx the parse tree
	 */
	exitUnboundedFrame?: (ctx: UnboundedFrameContext) => void;

	/**
	 * Enter a parse tree produced by the `currentRowBound`
	 * labeled alternative in `ImpalaSqlParserParser.frameBound`.
	 * @param ctx the parse tree
	 */
	enterCurrentRowBound?: (ctx: CurrentRowBoundContext) => void;
	/**
	 * Exit a parse tree produced by the `currentRowBound`
	 * labeled alternative in `ImpalaSqlParserParser.frameBound`.
	 * @param ctx the parse tree
	 */
	exitCurrentRowBound?: (ctx: CurrentRowBoundContext) => void;

	/**
	 * Enter a parse tree produced by the `boundedFrame`
	 * labeled alternative in `ImpalaSqlParserParser.frameBound`.
	 * @param ctx the parse tree
	 */
	enterBoundedFrame?: (ctx: BoundedFrameContext) => void;
	/**
	 * Exit a parse tree produced by the `boundedFrame`
	 * labeled alternative in `ImpalaSqlParserParser.frameBound`.
	 * @param ctx the parse tree
	 */
	exitBoundedFrame?: (ctx: BoundedFrameContext) => void;

	/**
	 * Enter a parse tree produced by the `statementDefault`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatementDefault?: (ctx: StatementDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `statementDefault`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatementDefault?: (ctx: StatementDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `use`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterUse?: (ctx: UseContext) => void;
	/**
	 * Exit a parse tree produced by the `use`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitUse?: (ctx: UseContext) => void;

	/**
	 * Enter a parse tree produced by the `createSchema`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateSchema?: (ctx: CreateSchemaContext) => void;
	/**
	 * Exit a parse tree produced by the `createSchema`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateSchema?: (ctx: CreateSchemaContext) => void;

	/**
	 * Enter a parse tree produced by the `alterSchema`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterAlterSchema?: (ctx: AlterSchemaContext) => void;
	/**
	 * Exit a parse tree produced by the `alterSchema`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitAlterSchema?: (ctx: AlterSchemaContext) => void;

	/**
	 * Enter a parse tree produced by the `dropSchema`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDropSchema?: (ctx: DropSchemaContext) => void;
	/**
	 * Exit a parse tree produced by the `dropSchema`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDropSchema?: (ctx: DropSchemaContext) => void;

	/**
	 * Enter a parse tree produced by the `createTable`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateTable?: (ctx: CreateTableContext) => void;
	/**
	 * Exit a parse tree produced by the `createTable`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateTable?: (ctx: CreateTableContext) => void;

	/**
	 * Enter a parse tree produced by the `createTableLike`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateTableLike?: (ctx: CreateTableLikeContext) => void;
	/**
	 * Exit a parse tree produced by the `createTableLike`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateTableLike?: (ctx: CreateTableLikeContext) => void;

	/**
	 * Enter a parse tree produced by the `createKuduTable`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateKuduTable?: (ctx: CreateKuduTableContext) => void;
	/**
	 * Exit a parse tree produced by the `createKuduTable`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateKuduTable?: (ctx: CreateKuduTableContext) => void;

	/**
	 * Enter a parse tree produced by the `createKuduTableAsSelect`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateKuduTableAsSelect?: (ctx: CreateKuduTableAsSelectContext) => void;
	/**
	 * Exit a parse tree produced by the `createKuduTableAsSelect`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateKuduTableAsSelect?: (ctx: CreateKuduTableAsSelectContext) => void;

	/**
	 * Enter a parse tree produced by the `renameTable`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRenameTable?: (ctx: RenameTableContext) => void;
	/**
	 * Exit a parse tree produced by the `renameTable`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRenameTable?: (ctx: RenameTableContext) => void;

	/**
	 * Enter a parse tree produced by the `addColumns`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterAddColumns?: (ctx: AddColumnsContext) => void;
	/**
	 * Exit a parse tree produced by the `addColumns`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitAddColumns?: (ctx: AddColumnsContext) => void;

	/**
	 * Enter a parse tree produced by the `replaceColumns`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterReplaceColumns?: (ctx: ReplaceColumnsContext) => void;
	/**
	 * Exit a parse tree produced by the `replaceColumns`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitReplaceColumns?: (ctx: ReplaceColumnsContext) => void;

	/**
	 * Enter a parse tree produced by the `editColumnDefine`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterEditColumnDefine?: (ctx: EditColumnDefineContext) => void;
	/**
	 * Exit a parse tree produced by the `editColumnDefine`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitEditColumnDefine?: (ctx: EditColumnDefineContext) => void;

	/**
	 * Enter a parse tree produced by the `addSingleColumn`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterAddSingleColumn?: (ctx: AddSingleColumnContext) => void;
	/**
	 * Exit a parse tree produced by the `addSingleColumn`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitAddSingleColumn?: (ctx: AddSingleColumnContext) => void;

	/**
	 * Enter a parse tree produced by the `dropSingleColumn`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDropSingleColumn?: (ctx: DropSingleColumnContext) => void;
	/**
	 * Exit a parse tree produced by the `dropSingleColumn`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDropSingleColumn?: (ctx: DropSingleColumnContext) => void;

	/**
	 * Enter a parse tree produced by the `alterTableOwner`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterAlterTableOwner?: (ctx: AlterTableOwnerContext) => void;
	/**
	 * Exit a parse tree produced by the `alterTableOwner`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitAlterTableOwner?: (ctx: AlterTableOwnerContext) => void;

	/**
	 * Enter a parse tree produced by the `alterTableKuduOnly`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterAlterTableKuduOnly?: (ctx: AlterTableKuduOnlyContext) => void;
	/**
	 * Exit a parse tree produced by the `alterTableKuduOnly`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitAlterTableKuduOnly?: (ctx: AlterTableKuduOnlyContext) => void;

	/**
	 * Enter a parse tree produced by the `alterTableNonKudu`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterAlterTableNonKudu?: (ctx: AlterTableNonKuduContext) => void;
	/**
	 * Exit a parse tree produced by the `alterTableNonKudu`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitAlterTableNonKudu?: (ctx: AlterTableNonKuduContext) => void;

	/**
	 * Enter a parse tree produced by the `addPartitionByValue`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterAddPartitionByValue?: (ctx: AddPartitionByValueContext) => void;
	/**
	 * Exit a parse tree produced by the `addPartitionByValue`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitAddPartitionByValue?: (ctx: AddPartitionByValueContext) => void;

	/**
	 * Enter a parse tree produced by the `addPartitionByRange`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterAddPartitionByRange?: (ctx: AddPartitionByRangeContext) => void;
	/**
	 * Exit a parse tree produced by the `addPartitionByRange`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitAddPartitionByRange?: (ctx: AddPartitionByRangeContext) => void;

	/**
	 * Enter a parse tree produced by the `dropPartitionByValue`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDropPartitionByValue?: (ctx: DropPartitionByValueContext) => void;
	/**
	 * Exit a parse tree produced by the `dropPartitionByValue`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDropPartitionByValue?: (ctx: DropPartitionByValueContext) => void;

	/**
	 * Enter a parse tree produced by the `recoverPartitions`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRecoverPartitions?: (ctx: RecoverPartitionsContext) => void;
	/**
	 * Exit a parse tree produced by the `recoverPartitions`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRecoverPartitions?: (ctx: RecoverPartitionsContext) => void;

	/**
	 * Enter a parse tree produced by the `alterFormat`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterAlterFormat?: (ctx: AlterFormatContext) => void;
	/**
	 * Exit a parse tree produced by the `alterFormat`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitAlterFormat?: (ctx: AlterFormatContext) => void;

	/**
	 * Enter a parse tree produced by the `alterStatsKey`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterAlterStatsKey?: (ctx: AlterStatsKeyContext) => void;
	/**
	 * Exit a parse tree produced by the `alterStatsKey`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitAlterStatsKey?: (ctx: AlterStatsKeyContext) => void;

	/**
	 * Enter a parse tree produced by the `alterPartitionCache`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterAlterPartitionCache?: (ctx: AlterPartitionCacheContext) => void;
	/**
	 * Exit a parse tree produced by the `alterPartitionCache`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitAlterPartitionCache?: (ctx: AlterPartitionCacheContext) => void;

	/**
	 * Enter a parse tree produced by the `dropTable`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDropTable?: (ctx: DropTableContext) => void;
	/**
	 * Exit a parse tree produced by the `dropTable`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDropTable?: (ctx: DropTableContext) => void;

	/**
	 * Enter a parse tree produced by the `truncateTable`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterTruncateTable?: (ctx: TruncateTableContext) => void;
	/**
	 * Exit a parse tree produced by the `truncateTable`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitTruncateTable?: (ctx: TruncateTableContext) => void;

	/**
	 * Enter a parse tree produced by the `createView`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateView?: (ctx: CreateViewContext) => void;
	/**
	 * Exit a parse tree produced by the `createView`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateView?: (ctx: CreateViewContext) => void;

	/**
	 * Enter a parse tree produced by the `alterView`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterAlterView?: (ctx: AlterViewContext) => void;
	/**
	 * Exit a parse tree produced by the `alterView`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitAlterView?: (ctx: AlterViewContext) => void;

	/**
	 * Enter a parse tree produced by the `renameView`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRenameView?: (ctx: RenameViewContext) => void;
	/**
	 * Exit a parse tree produced by the `renameView`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRenameView?: (ctx: RenameViewContext) => void;

	/**
	 * Enter a parse tree produced by the `alterViewOwner`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterAlterViewOwner?: (ctx: AlterViewOwnerContext) => void;
	/**
	 * Exit a parse tree produced by the `alterViewOwner`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitAlterViewOwner?: (ctx: AlterViewOwnerContext) => void;

	/**
	 * Enter a parse tree produced by the `alterSetViewTblproperties`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterAlterSetViewTblproperties?: (ctx: AlterSetViewTblpropertiesContext) => void;
	/**
	 * Exit a parse tree produced by the `alterSetViewTblproperties`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitAlterSetViewTblproperties?: (ctx: AlterSetViewTblpropertiesContext) => void;

	/**
	 * Enter a parse tree produced by the `alterUnSetViewTblproperties`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterAlterUnSetViewTblproperties?: (ctx: AlterUnSetViewTblpropertiesContext) => void;
	/**
	 * Exit a parse tree produced by the `alterUnSetViewTblproperties`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitAlterUnSetViewTblproperties?: (ctx: AlterUnSetViewTblpropertiesContext) => void;

	/**
	 * Enter a parse tree produced by the `dropView`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDropView?: (ctx: DropViewContext) => void;
	/**
	 * Exit a parse tree produced by the `dropView`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDropView?: (ctx: DropViewContext) => void;

	/**
	 * Enter a parse tree produced by the `describeDbOrTable`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDescribeDbOrTable?: (ctx: DescribeDbOrTableContext) => void;
	/**
	 * Exit a parse tree produced by the `describeDbOrTable`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDescribeDbOrTable?: (ctx: DescribeDbOrTableContext) => void;

	/**
	 * Enter a parse tree produced by the `computeStats`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterComputeStats?: (ctx: ComputeStatsContext) => void;
	/**
	 * Exit a parse tree produced by the `computeStats`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitComputeStats?: (ctx: ComputeStatsContext) => void;

	/**
	 * Enter a parse tree produced by the `computeIncrementalStats`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterComputeIncrementalStats?: (ctx: ComputeIncrementalStatsContext) => void;
	/**
	 * Exit a parse tree produced by the `computeIncrementalStats`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitComputeIncrementalStats?: (ctx: ComputeIncrementalStatsContext) => void;

	/**
	 * Enter a parse tree produced by the `dropStats`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDropStats?: (ctx: DropStatsContext) => void;
	/**
	 * Exit a parse tree produced by the `dropStats`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDropStats?: (ctx: DropStatsContext) => void;

	/**
	 * Enter a parse tree produced by the `dropIncrementalStats`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDropIncrementalStats?: (ctx: DropIncrementalStatsContext) => void;
	/**
	 * Exit a parse tree produced by the `dropIncrementalStats`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDropIncrementalStats?: (ctx: DropIncrementalStatsContext) => void;

	/**
	 * Enter a parse tree produced by the `createFunction`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateFunction?: (ctx: CreateFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `createFunction`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateFunction?: (ctx: CreateFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `refreshFunction`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRefreshFunction?: (ctx: RefreshFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `refreshFunction`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRefreshFunction?: (ctx: RefreshFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `dropFunction`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDropFunction?: (ctx: DropFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `dropFunction`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDropFunction?: (ctx: DropFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `createRole`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateRole?: (ctx: CreateRoleContext) => void;
	/**
	 * Exit a parse tree produced by the `createRole`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateRole?: (ctx: CreateRoleContext) => void;

	/**
	 * Enter a parse tree produced by the `dropRole`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDropRole?: (ctx: DropRoleContext) => void;
	/**
	 * Exit a parse tree produced by the `dropRole`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDropRole?: (ctx: DropRoleContext) => void;

	/**
	 * Enter a parse tree produced by the `grantRole`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterGrantRole?: (ctx: GrantRoleContext) => void;
	/**
	 * Exit a parse tree produced by the `grantRole`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitGrantRole?: (ctx: GrantRoleContext) => void;

	/**
	 * Enter a parse tree produced by the `grant`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterGrant?: (ctx: GrantContext) => void;
	/**
	 * Exit a parse tree produced by the `grant`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitGrant?: (ctx: GrantContext) => void;

	/**
	 * Enter a parse tree produced by the `revoke`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRevoke?: (ctx: RevokeContext) => void;
	/**
	 * Exit a parse tree produced by the `revoke`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRevoke?: (ctx: RevokeContext) => void;

	/**
	 * Enter a parse tree produced by the `insertInto`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterInsertInto?: (ctx: InsertIntoContext) => void;
	/**
	 * Exit a parse tree produced by the `insertInto`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitInsertInto?: (ctx: InsertIntoContext) => void;

	/**
	 * Enter a parse tree produced by the `delete`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDelete?: (ctx: DeleteContext) => void;
	/**
	 * Exit a parse tree produced by the `delete`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDelete?: (ctx: DeleteContext) => void;

	/**
	 * Enter a parse tree produced by the `deleteTableRef`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDeleteTableRef?: (ctx: DeleteTableRefContext) => void;
	/**
	 * Exit a parse tree produced by the `deleteTableRef`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDeleteTableRef?: (ctx: DeleteTableRefContext) => void;

	/**
	 * Enter a parse tree produced by the `updateTable`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterUpdateTable?: (ctx: UpdateTableContext) => void;
	/**
	 * Exit a parse tree produced by the `updateTable`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitUpdateTable?: (ctx: UpdateTableContext) => void;

	/**
	 * Enter a parse tree produced by the `upsert`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterUpsert?: (ctx: UpsertContext) => void;
	/**
	 * Exit a parse tree produced by the `upsert`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitUpsert?: (ctx: UpsertContext) => void;

	/**
	 * Enter a parse tree produced by the `showSchemas`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowSchemas?: (ctx: ShowSchemasContext) => void;
	/**
	 * Exit a parse tree produced by the `showSchemas`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowSchemas?: (ctx: ShowSchemasContext) => void;

	/**
	 * Enter a parse tree produced by the `showTables`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowTables?: (ctx: ShowTablesContext) => void;
	/**
	 * Exit a parse tree produced by the `showTables`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowTables?: (ctx: ShowTablesContext) => void;

	/**
	 * Enter a parse tree produced by the `showFunctions`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowFunctions?: (ctx: ShowFunctionsContext) => void;
	/**
	 * Exit a parse tree produced by the `showFunctions`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowFunctions?: (ctx: ShowFunctionsContext) => void;

	/**
	 * Enter a parse tree produced by the `showCreateTable`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowCreateTable?: (ctx: ShowCreateTableContext) => void;
	/**
	 * Exit a parse tree produced by the `showCreateTable`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowCreateTable?: (ctx: ShowCreateTableContext) => void;

	/**
	 * Enter a parse tree produced by the `showCreateView`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowCreateView?: (ctx: ShowCreateViewContext) => void;
	/**
	 * Exit a parse tree produced by the `showCreateView`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowCreateView?: (ctx: ShowCreateViewContext) => void;

	/**
	 * Enter a parse tree produced by the `showTableStats`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowTableStats?: (ctx: ShowTableStatsContext) => void;
	/**
	 * Exit a parse tree produced by the `showTableStats`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowTableStats?: (ctx: ShowTableStatsContext) => void;

	/**
	 * Enter a parse tree produced by the `showColumnStats`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowColumnStats?: (ctx: ShowColumnStatsContext) => void;
	/**
	 * Exit a parse tree produced by the `showColumnStats`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowColumnStats?: (ctx: ShowColumnStatsContext) => void;

	/**
	 * Enter a parse tree produced by the `showPartitions`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowPartitions?: (ctx: ShowPartitionsContext) => void;
	/**
	 * Exit a parse tree produced by the `showPartitions`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowPartitions?: (ctx: ShowPartitionsContext) => void;

	/**
	 * Enter a parse tree produced by the `showFiles`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowFiles?: (ctx: ShowFilesContext) => void;
	/**
	 * Exit a parse tree produced by the `showFiles`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowFiles?: (ctx: ShowFilesContext) => void;

	/**
	 * Enter a parse tree produced by the `showRoles`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowRoles?: (ctx: ShowRolesContext) => void;
	/**
	 * Exit a parse tree produced by the `showRoles`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowRoles?: (ctx: ShowRolesContext) => void;

	/**
	 * Enter a parse tree produced by the `showRoleGrant`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowRoleGrant?: (ctx: ShowRoleGrantContext) => void;
	/**
	 * Exit a parse tree produced by the `showRoleGrant`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowRoleGrant?: (ctx: ShowRoleGrantContext) => void;

	/**
	 * Enter a parse tree produced by the `showGrantRole`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowGrantRole?: (ctx: ShowGrantRoleContext) => void;
	/**
	 * Exit a parse tree produced by the `showGrantRole`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowGrantRole?: (ctx: ShowGrantRoleContext) => void;

	/**
	 * Enter a parse tree produced by the `showGrantUser`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowGrantUser?: (ctx: ShowGrantUserContext) => void;
	/**
	 * Exit a parse tree produced by the `showGrantUser`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowGrantUser?: (ctx: ShowGrantUserContext) => void;

	/**
	 * Enter a parse tree produced by the `addComments`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterAddComments?: (ctx: AddCommentsContext) => void;
	/**
	 * Exit a parse tree produced by the `addComments`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitAddComments?: (ctx: AddCommentsContext) => void;

	/**
	 * Enter a parse tree produced by the `explain`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterExplain?: (ctx: ExplainContext) => void;
	/**
	 * Exit a parse tree produced by the `explain`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitExplain?: (ctx: ExplainContext) => void;

	/**
	 * Enter a parse tree produced by the `setSession`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSetSession?: (ctx: SetSessionContext) => void;
	/**
	 * Exit a parse tree produced by the `setSession`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSetSession?: (ctx: SetSessionContext) => void;

	/**
	 * Enter a parse tree produced by the `shutdown`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShutdown?: (ctx: ShutdownContext) => void;
	/**
	 * Exit a parse tree produced by the `shutdown`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShutdown?: (ctx: ShutdownContext) => void;

	/**
	 * Enter a parse tree produced by the `invalidateMeta`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterInvalidateMeta?: (ctx: InvalidateMetaContext) => void;
	/**
	 * Exit a parse tree produced by the `invalidateMeta`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitInvalidateMeta?: (ctx: InvalidateMetaContext) => void;

	/**
	 * Enter a parse tree produced by the `loadData`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterLoadData?: (ctx: LoadDataContext) => void;
	/**
	 * Exit a parse tree produced by the `loadData`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitLoadData?: (ctx: LoadDataContext) => void;

	/**
	 * Enter a parse tree produced by the `refreshMeta`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRefreshMeta?: (ctx: RefreshMetaContext) => void;
	/**
	 * Exit a parse tree produced by the `refreshMeta`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRefreshMeta?: (ctx: RefreshMetaContext) => void;

	/**
	 * Enter a parse tree produced by the `refreshAuth`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRefreshAuth?: (ctx: RefreshAuthContext) => void;
	/**
	 * Exit a parse tree produced by the `refreshAuth`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRefreshAuth?: (ctx: RefreshAuthContext) => void;

	/**
	 * Enter a parse tree produced by the `queryPrimaryDefault`
	 * labeled alternative in `ImpalaSqlParserParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	enterQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `queryPrimaryDefault`
	 * labeled alternative in `ImpalaSqlParserParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	exitQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `table`
	 * labeled alternative in `ImpalaSqlParserParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	enterTable?: (ctx: TableContext) => void;
	/**
	 * Exit a parse tree produced by the `table`
	 * labeled alternative in `ImpalaSqlParserParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	exitTable?: (ctx: TableContext) => void;

	/**
	 * Enter a parse tree produced by the `inlineTable`
	 * labeled alternative in `ImpalaSqlParserParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	enterInlineTable?: (ctx: InlineTableContext) => void;
	/**
	 * Exit a parse tree produced by the `inlineTable`
	 * labeled alternative in `ImpalaSqlParserParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	exitInlineTable?: (ctx: InlineTableContext) => void;

	/**
	 * Enter a parse tree produced by the `subquery`
	 * labeled alternative in `ImpalaSqlParserParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	enterSubquery?: (ctx: SubqueryContext) => void;
	/**
	 * Exit a parse tree produced by the `subquery`
	 * labeled alternative in `ImpalaSqlParserParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	exitSubquery?: (ctx: SubqueryContext) => void;

	/**
	 * Enter a parse tree produced by the `nullLiteral`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterNullLiteral?: (ctx: NullLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `nullLiteral`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitNullLiteral?: (ctx: NullLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `intervalLiteral`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterIntervalLiteral?: (ctx: IntervalLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `intervalLiteral`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitIntervalLiteral?: (ctx: IntervalLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `typeConstructor`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterTypeConstructor?: (ctx: TypeConstructorContext) => void;
	/**
	 * Exit a parse tree produced by the `typeConstructor`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitTypeConstructor?: (ctx: TypeConstructorContext) => void;

	/**
	 * Enter a parse tree produced by the `numericLiteral`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterNumericLiteral?: (ctx: NumericLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `numericLiteral`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitNumericLiteral?: (ctx: NumericLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `stringLiteral`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `stringLiteral`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `binaryLiteral`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterBinaryLiteral?: (ctx: BinaryLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `binaryLiteral`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitBinaryLiteral?: (ctx: BinaryLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `parameter`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by the `parameter`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;

	/**
	 * Enter a parse tree produced by the `position`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPosition?: (ctx: PositionContext) => void;
	/**
	 * Exit a parse tree produced by the `position`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPosition?: (ctx: PositionContext) => void;

	/**
	 * Enter a parse tree produced by the `rowConstructor`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterRowConstructor?: (ctx: RowConstructorContext) => void;
	/**
	 * Exit a parse tree produced by the `rowConstructor`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitRowConstructor?: (ctx: RowConstructorContext) => void;

	/**
	 * Enter a parse tree produced by the `functionCall`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `functionCall`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by the `lambda`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterLambda?: (ctx: LambdaContext) => void;
	/**
	 * Exit a parse tree produced by the `lambda`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitLambda?: (ctx: LambdaContext) => void;

	/**
	 * Enter a parse tree produced by the `subqueryExpression`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `subqueryExpression`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `exists`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterExists?: (ctx: ExistsContext) => void;
	/**
	 * Exit a parse tree produced by the `exists`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitExists?: (ctx: ExistsContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleCase`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSimpleCase?: (ctx: SimpleCaseContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleCase`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSimpleCase?: (ctx: SimpleCaseContext) => void;

	/**
	 * Enter a parse tree produced by the `searchedCase`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSearchedCase?: (ctx: SearchedCaseContext) => void;
	/**
	 * Exit a parse tree produced by the `searchedCase`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSearchedCase?: (ctx: SearchedCaseContext) => void;

	/**
	 * Enter a parse tree produced by the `cast`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterCast?: (ctx: CastContext) => void;
	/**
	 * Exit a parse tree produced by the `cast`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitCast?: (ctx: CastContext) => void;

	/**
	 * Enter a parse tree produced by the `arrayConstructor`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterArrayConstructor?: (ctx: ArrayConstructorContext) => void;
	/**
	 * Exit a parse tree produced by the `arrayConstructor`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitArrayConstructor?: (ctx: ArrayConstructorContext) => void;

	/**
	 * Enter a parse tree produced by the `subscript`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSubscript?: (ctx: SubscriptContext) => void;
	/**
	 * Exit a parse tree produced by the `subscript`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSubscript?: (ctx: SubscriptContext) => void;

	/**
	 * Enter a parse tree produced by the `columnReference`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterColumnReference?: (ctx: ColumnReferenceContext) => void;
	/**
	 * Exit a parse tree produced by the `columnReference`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitColumnReference?: (ctx: ColumnReferenceContext) => void;

	/**
	 * Enter a parse tree produced by the `dereference`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterDereference?: (ctx: DereferenceContext) => void;
	/**
	 * Exit a parse tree produced by the `dereference`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitDereference?: (ctx: DereferenceContext) => void;

	/**
	 * Enter a parse tree produced by the `specialDateTimeFunction`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSpecialDateTimeFunction?: (ctx: SpecialDateTimeFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `specialDateTimeFunction`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSpecialDateTimeFunction?: (ctx: SpecialDateTimeFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `currentUser`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterCurrentUser?: (ctx: CurrentUserContext) => void;
	/**
	 * Exit a parse tree produced by the `currentUser`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitCurrentUser?: (ctx: CurrentUserContext) => void;

	/**
	 * Enter a parse tree produced by the `currentPath`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterCurrentPath?: (ctx: CurrentPathContext) => void;
	/**
	 * Exit a parse tree produced by the `currentPath`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitCurrentPath?: (ctx: CurrentPathContext) => void;

	/**
	 * Enter a parse tree produced by the `substring`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSubstring?: (ctx: SubstringContext) => void;
	/**
	 * Exit a parse tree produced by the `substring`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSubstring?: (ctx: SubstringContext) => void;

	/**
	 * Enter a parse tree produced by the `normalize`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterNormalize?: (ctx: NormalizeContext) => void;
	/**
	 * Exit a parse tree produced by the `normalize`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitNormalize?: (ctx: NormalizeContext) => void;

	/**
	 * Enter a parse tree produced by the `extract`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterExtract?: (ctx: ExtractContext) => void;
	/**
	 * Exit a parse tree produced by the `extract`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitExtract?: (ctx: ExtractContext) => void;

	/**
	 * Enter a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `groupingOperation`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterGroupingOperation?: (ctx: GroupingOperationContext) => void;
	/**
	 * Exit a parse tree produced by the `groupingOperation`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitGroupingOperation?: (ctx: GroupingOperationContext) => void;

	/**
	 * Enter a parse tree produced by the `selectSingle`
	 * labeled alternative in `ImpalaSqlParserParser.selectItem`.
	 * @param ctx the parse tree
	 */
	enterSelectSingle?: (ctx: SelectSingleContext) => void;
	/**
	 * Exit a parse tree produced by the `selectSingle`
	 * labeled alternative in `ImpalaSqlParserParser.selectItem`.
	 * @param ctx the parse tree
	 */
	exitSelectSingle?: (ctx: SelectSingleContext) => void;

	/**
	 * Enter a parse tree produced by the `selectAll`
	 * labeled alternative in `ImpalaSqlParserParser.selectItem`.
	 * @param ctx the parse tree
	 */
	enterSelectAll?: (ctx: SelectAllContext) => void;
	/**
	 * Exit a parse tree produced by the `selectAll`
	 * labeled alternative in `ImpalaSqlParserParser.selectItem`.
	 * @param ctx the parse tree
	 */
	exitSelectAll?: (ctx: SelectAllContext) => void;

	/**
	 * Enter a parse tree produced by the `predicated`
	 * labeled alternative in `ImpalaSqlParserParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterPredicated?: (ctx: PredicatedContext) => void;
	/**
	 * Exit a parse tree produced by the `predicated`
	 * labeled alternative in `ImpalaSqlParserParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitPredicated?: (ctx: PredicatedContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalNot`
	 * labeled alternative in `ImpalaSqlParserParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalNot?: (ctx: LogicalNotContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalNot`
	 * labeled alternative in `ImpalaSqlParserParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalNot?: (ctx: LogicalNotContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalBinary`
	 * labeled alternative in `ImpalaSqlParserParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalBinary?: (ctx: LogicalBinaryContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalBinary`
	 * labeled alternative in `ImpalaSqlParserParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalBinary?: (ctx: LogicalBinaryContext) => void;

	/**
	 * Enter a parse tree produced by the `qualifiedArgument`
	 * labeled alternative in `ImpalaSqlParserParser.pathElement`.
	 * @param ctx the parse tree
	 */
	enterQualifiedArgument?: (ctx: QualifiedArgumentContext) => void;
	/**
	 * Exit a parse tree produced by the `qualifiedArgument`
	 * labeled alternative in `ImpalaSqlParserParser.pathElement`.
	 * @param ctx the parse tree
	 */
	exitQualifiedArgument?: (ctx: QualifiedArgumentContext) => void;

	/**
	 * Enter a parse tree produced by the `unqualifiedArgument`
	 * labeled alternative in `ImpalaSqlParserParser.pathElement`.
	 * @param ctx the parse tree
	 */
	enterUnqualifiedArgument?: (ctx: UnqualifiedArgumentContext) => void;
	/**
	 * Exit a parse tree produced by the `unqualifiedArgument`
	 * labeled alternative in `ImpalaSqlParserParser.pathElement`.
	 * @param ctx the parse tree
	 */
	exitUnqualifiedArgument?: (ctx: UnqualifiedArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.assignmentList`.
	 * @param ctx the parse tree
	 */
	enterAssignmentList?: (ctx: AssignmentListContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.assignmentList`.
	 * @param ctx the parse tree
	 */
	exitAssignmentList?: (ctx: AssignmentListContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.assignmentItem`.
	 * @param ctx the parse tree
	 */
	enterAssignmentItem?: (ctx: AssignmentItemContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.assignmentItem`.
	 * @param ctx the parse tree
	 */
	exitAssignmentItem?: (ctx: AssignmentItemContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.viewColumns`.
	 * @param ctx the parse tree
	 */
	enterViewColumns?: (ctx: ViewColumnsContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.viewColumns`.
	 * @param ctx the parse tree
	 */
	exitViewColumns?: (ctx: ViewColumnsContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.query`.
	 * @param ctx the parse tree
	 */
	enterQuery?: (ctx: QueryContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.query`.
	 * @param ctx the parse tree
	 */
	exitQuery?: (ctx: QueryContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.with`.
	 * @param ctx the parse tree
	 */
	enterWith?: (ctx: WithContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.with`.
	 * @param ctx the parse tree
	 */
	exitWith?: (ctx: WithContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.tableElement`.
	 * @param ctx the parse tree
	 */
	enterTableElement?: (ctx: TableElementContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.tableElement`.
	 * @param ctx the parse tree
	 */
	exitTableElement?: (ctx: TableElementContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.columnDefinition`.
	 * @param ctx the parse tree
	 */
	enterColumnDefinition?: (ctx: ColumnDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.columnDefinition`.
	 * @param ctx the parse tree
	 */
	exitColumnDefinition?: (ctx: ColumnDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.kuduTableElement`.
	 * @param ctx the parse tree
	 */
	enterKuduTableElement?: (ctx: KuduTableElementContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.kuduTableElement`.
	 * @param ctx the parse tree
	 */
	exitKuduTableElement?: (ctx: KuduTableElementContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.kuduColumnDefinition`.
	 * @param ctx the parse tree
	 */
	enterKuduColumnDefinition?: (ctx: KuduColumnDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.kuduColumnDefinition`.
	 * @param ctx the parse tree
	 */
	exitKuduColumnDefinition?: (ctx: KuduColumnDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.columnSpecWithKudu`.
	 * @param ctx the parse tree
	 */
	enterColumnSpecWithKudu?: (ctx: ColumnSpecWithKuduContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.columnSpecWithKudu`.
	 * @param ctx the parse tree
	 */
	exitColumnSpecWithKudu?: (ctx: ColumnSpecWithKuduContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.kuduAttributes`.
	 * @param ctx the parse tree
	 */
	enterKuduAttributes?: (ctx: KuduAttributesContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.kuduAttributes`.
	 * @param ctx the parse tree
	 */
	exitKuduAttributes?: (ctx: KuduAttributesContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.kuduStorageAttr`.
	 * @param ctx the parse tree
	 */
	enterKuduStorageAttr?: (ctx: KuduStorageAttrContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.kuduStorageAttr`.
	 * @param ctx the parse tree
	 */
	exitKuduStorageAttr?: (ctx: KuduStorageAttrContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.statsKey`.
	 * @param ctx the parse tree
	 */
	enterStatsKey?: (ctx: StatsKeyContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.statsKey`.
	 * @param ctx the parse tree
	 */
	exitStatsKey?: (ctx: StatsKeyContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.fileFormat`.
	 * @param ctx the parse tree
	 */
	enterFileFormat?: (ctx: FileFormatContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.fileFormat`.
	 * @param ctx the parse tree
	 */
	exitFileFormat?: (ctx: FileFormatContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.kuduPartitionSpec`.
	 * @param ctx the parse tree
	 */
	enterKuduPartitionSpec?: (ctx: KuduPartitionSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.kuduPartitionSpec`.
	 * @param ctx the parse tree
	 */
	exitKuduPartitionSpec?: (ctx: KuduPartitionSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.constants`.
	 * @param ctx the parse tree
	 */
	enterConstants?: (ctx: ConstantsContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.constants`.
	 * @param ctx the parse tree
	 */
	exitConstants?: (ctx: ConstantsContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.cacheSpec`.
	 * @param ctx the parse tree
	 */
	enterCacheSpec?: (ctx: CacheSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.cacheSpec`.
	 * @param ctx the parse tree
	 */
	exitCacheSpec?: (ctx: CacheSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.rangeOperator`.
	 * @param ctx the parse tree
	 */
	enterRangeOperator?: (ctx: RangeOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.rangeOperator`.
	 * @param ctx the parse tree
	 */
	exitRangeOperator?: (ctx: RangeOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.partitionCol`.
	 * @param ctx the parse tree
	 */
	enterPartitionCol?: (ctx: PartitionColContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.partitionCol`.
	 * @param ctx the parse tree
	 */
	exitPartitionCol?: (ctx: PartitionColContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.likeClause`.
	 * @param ctx the parse tree
	 */
	enterLikeClause?: (ctx: LikeClauseContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.likeClause`.
	 * @param ctx the parse tree
	 */
	exitLikeClause?: (ctx: LikeClauseContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.hintClause`.
	 * @param ctx the parse tree
	 */
	enterHintClause?: (ctx: HintClauseContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.hintClause`.
	 * @param ctx the parse tree
	 */
	exitHintClause?: (ctx: HintClauseContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.properties`.
	 * @param ctx the parse tree
	 */
	enterProperties?: (ctx: PropertiesContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.properties`.
	 * @param ctx the parse tree
	 */
	exitProperties?: (ctx: PropertiesContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.partitionedBy`.
	 * @param ctx the parse tree
	 */
	enterPartitionedBy?: (ctx: PartitionedByContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.partitionedBy`.
	 * @param ctx the parse tree
	 */
	exitPartitionedBy?: (ctx: PartitionedByContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.sortedBy`.
	 * @param ctx the parse tree
	 */
	enterSortedBy?: (ctx: SortedByContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.sortedBy`.
	 * @param ctx the parse tree
	 */
	exitSortedBy?: (ctx: SortedByContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.rowFormat`.
	 * @param ctx the parse tree
	 */
	enterRowFormat?: (ctx: RowFormatContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.rowFormat`.
	 * @param ctx the parse tree
	 */
	exitRowFormat?: (ctx: RowFormatContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.property`.
	 * @param ctx the parse tree
	 */
	enterProperty?: (ctx: PropertyContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.property`.
	 * @param ctx the parse tree
	 */
	exitProperty?: (ctx: PropertyContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.queryNoWith`.
	 * @param ctx the parse tree
	 */
	enterQueryNoWith?: (ctx: QueryNoWithContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.queryNoWith`.
	 * @param ctx the parse tree
	 */
	exitQueryNoWith?: (ctx: QueryNoWithContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	enterQueryTerm?: (ctx: QueryTermContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	exitQueryTerm?: (ctx: QueryTermContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	enterQueryPrimary?: (ctx: QueryPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	exitQueryPrimary?: (ctx: QueryPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.sortItem`.
	 * @param ctx the parse tree
	 */
	enterSortItem?: (ctx: SortItemContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.sortItem`.
	 * @param ctx the parse tree
	 */
	exitSortItem?: (ctx: SortItemContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.querySpecification`.
	 * @param ctx the parse tree
	 */
	enterQuerySpecification?: (ctx: QuerySpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.querySpecification`.
	 * @param ctx the parse tree
	 */
	exitQuerySpecification?: (ctx: QuerySpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.groupBy`.
	 * @param ctx the parse tree
	 */
	enterGroupBy?: (ctx: GroupByContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.groupBy`.
	 * @param ctx the parse tree
	 */
	exitGroupBy?: (ctx: GroupByContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	enterGroupingElement?: (ctx: GroupingElementContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	exitGroupingElement?: (ctx: GroupingElementContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.groupingSet`.
	 * @param ctx the parse tree
	 */
	enterGroupingSet?: (ctx: GroupingSetContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.groupingSet`.
	 * @param ctx the parse tree
	 */
	exitGroupingSet?: (ctx: GroupingSetContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.namedQuery`.
	 * @param ctx the parse tree
	 */
	enterNamedQuery?: (ctx: NamedQueryContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.namedQuery`.
	 * @param ctx the parse tree
	 */
	exitNamedQuery?: (ctx: NamedQueryContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.setQuantifier`.
	 * @param ctx the parse tree
	 */
	enterSetQuantifier?: (ctx: SetQuantifierContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.setQuantifier`.
	 * @param ctx the parse tree
	 */
	exitSetQuantifier?: (ctx: SetQuantifierContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.selectItem`.
	 * @param ctx the parse tree
	 */
	enterSelectItem?: (ctx: SelectItemContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.selectItem`.
	 * @param ctx the parse tree
	 */
	exitSelectItem?: (ctx: SelectItemContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.relation`.
	 * @param ctx the parse tree
	 */
	enterRelation?: (ctx: RelationContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.relation`.
	 * @param ctx the parse tree
	 */
	exitRelation?: (ctx: RelationContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.joinType`.
	 * @param ctx the parse tree
	 */
	enterJoinType?: (ctx: JoinTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.joinType`.
	 * @param ctx the parse tree
	 */
	exitJoinType?: (ctx: JoinTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.joinCriteria`.
	 * @param ctx the parse tree
	 */
	enterJoinCriteria?: (ctx: JoinCriteriaContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.joinCriteria`.
	 * @param ctx the parse tree
	 */
	exitJoinCriteria?: (ctx: JoinCriteriaContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.sampledRelation`.
	 * @param ctx the parse tree
	 */
	enterSampledRelation?: (ctx: SampledRelationContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.sampledRelation`.
	 * @param ctx the parse tree
	 */
	exitSampledRelation?: (ctx: SampledRelationContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.sampleType`.
	 * @param ctx the parse tree
	 */
	enterSampleType?: (ctx: SampleTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.sampleType`.
	 * @param ctx the parse tree
	 */
	exitSampleType?: (ctx: SampleTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.aliasedRelation`.
	 * @param ctx the parse tree
	 */
	enterAliasedRelation?: (ctx: AliasedRelationContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.aliasedRelation`.
	 * @param ctx the parse tree
	 */
	exitAliasedRelation?: (ctx: AliasedRelationContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.columnAliases`.
	 * @param ctx the parse tree
	 */
	enterColumnAliases?: (ctx: ColumnAliasesContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.columnAliases`.
	 * @param ctx the parse tree
	 */
	exitColumnAliases?: (ctx: ColumnAliasesContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterRelationPrimary?: (ctx: RelationPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitRelationPrimary?: (ctx: RelationPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanExpression?: (ctx: BooleanExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanExpression?: (ctx: BooleanExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterPredicate?: (ctx: PredicateContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitPredicate?: (ctx: PredicateContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterValueExpression?: (ctx: ValueExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitValueExpression?: (ctx: ValueExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.comparisonQuantifier`.
	 * @param ctx the parse tree
	 */
	enterComparisonQuantifier?: (ctx: ComparisonQuantifierContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.comparisonQuantifier`.
	 * @param ctx the parse tree
	 */
	exitComparisonQuantifier?: (ctx: ComparisonQuantifierContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.booleanValue`.
	 * @param ctx the parse tree
	 */
	enterBooleanValue?: (ctx: BooleanValueContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.booleanValue`.
	 * @param ctx the parse tree
	 */
	exitBooleanValue?: (ctx: BooleanValueContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.interval`.
	 * @param ctx the parse tree
	 */
	enterInterval?: (ctx: IntervalContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.interval`.
	 * @param ctx the parse tree
	 */
	exitInterval?: (ctx: IntervalContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.intervalField`.
	 * @param ctx the parse tree
	 */
	enterIntervalField?: (ctx: IntervalFieldContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.intervalField`.
	 * @param ctx the parse tree
	 */
	exitIntervalField?: (ctx: IntervalFieldContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.normalForm`.
	 * @param ctx the parse tree
	 */
	enterNormalForm?: (ctx: NormalFormContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.normalForm`.
	 * @param ctx the parse tree
	 */
	exitNormalForm?: (ctx: NormalFormContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	enterTypeParameter?: (ctx: TypeParameterContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	exitTypeParameter?: (ctx: TypeParameterContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.baseType`.
	 * @param ctx the parse tree
	 */
	enterBaseType?: (ctx: BaseTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.baseType`.
	 * @param ctx the parse tree
	 */
	exitBaseType?: (ctx: BaseTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.whenClause`.
	 * @param ctx the parse tree
	 */
	enterWhenClause?: (ctx: WhenClauseContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.whenClause`.
	 * @param ctx the parse tree
	 */
	exitWhenClause?: (ctx: WhenClauseContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.filter`.
	 * @param ctx the parse tree
	 */
	enterFilter?: (ctx: FilterContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.filter`.
	 * @param ctx the parse tree
	 */
	exitFilter?: (ctx: FilterContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.over`.
	 * @param ctx the parse tree
	 */
	enterOver?: (ctx: OverContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.over`.
	 * @param ctx the parse tree
	 */
	exitOver?: (ctx: OverContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.windowFrame`.
	 * @param ctx the parse tree
	 */
	enterWindowFrame?: (ctx: WindowFrameContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.windowFrame`.
	 * @param ctx the parse tree
	 */
	exitWindowFrame?: (ctx: WindowFrameContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.frameBound`.
	 * @param ctx the parse tree
	 */
	enterFrameBound?: (ctx: FrameBoundContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.frameBound`.
	 * @param ctx the parse tree
	 */
	exitFrameBound?: (ctx: FrameBoundContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.pathElement`.
	 * @param ctx the parse tree
	 */
	enterPathElement?: (ctx: PathElementContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.pathElement`.
	 * @param ctx the parse tree
	 */
	exitPathElement?: (ctx: PathElementContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.pathSpecification`.
	 * @param ctx the parse tree
	 */
	enterPathSpecification?: (ctx: PathSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.pathSpecification`.
	 * @param ctx the parse tree
	 */
	exitPathSpecification?: (ctx: PathSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.privilege`.
	 * @param ctx the parse tree
	 */
	enterPrivilege?: (ctx: PrivilegeContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.privilege`.
	 * @param ctx the parse tree
	 */
	exitPrivilege?: (ctx: PrivilegeContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.objectType`.
	 * @param ctx the parse tree
	 */
	enterObjectType?: (ctx: ObjectTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.objectType`.
	 * @param ctx the parse tree
	 */
	exitObjectType?: (ctx: ObjectTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedName?: (ctx: QualifiedNameContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.principal`.
	 * @param ctx the parse tree
	 */
	enterPrincipal?: (ctx: PrincipalContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.principal`.
	 * @param ctx the parse tree
	 */
	exitPrincipal?: (ctx: PrincipalContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParserParser.nonReserved`.
	 * @param ctx the parse tree
	 */
	enterNonReserved?: (ctx: NonReservedContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParserParser.nonReserved`.
	 * @param ctx the parse tree
	 */
	exitNonReserved?: (ctx: NonReservedContext) => void;
}

