// Generated from /Users/shuangxu/Documents/workspace/dt-sql-parser/src/grammar/impala/ImpalaSqlParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { JoinRelationContext } from "./ImpalaSqlParser";
import { RelationDefaultContext } from "./ImpalaSqlParser";
import { ComparisonContext } from "./ImpalaSqlParser";
import { QuantifiedComparisonContext } from "./ImpalaSqlParser";
import { BetweenContext } from "./ImpalaSqlParser";
import { InListContext } from "./ImpalaSqlParser";
import { InSubqueryContext } from "./ImpalaSqlParser";
import { LikeContext } from "./ImpalaSqlParser";
import { REGEXPContext } from "./ImpalaSqlParser";
import { NullPredicateContext } from "./ImpalaSqlParser";
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
import { EditColumnDefineContext } from "./ImpalaSqlParser";
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
 * This interface defines a complete listener for a parse tree produced by
 * `ImpalaSqlParser`.
 */
export interface ImpalaSqlParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `joinRelation`
	 * labeled alternative in `ImpalaSqlParser.relation`.
	 * @param ctx the parse tree
	 */
	enterJoinRelation?: (ctx: JoinRelationContext) => void;
	/**
	 * Exit a parse tree produced by the `joinRelation`
	 * labeled alternative in `ImpalaSqlParser.relation`.
	 * @param ctx the parse tree
	 */
	exitJoinRelation?: (ctx: JoinRelationContext) => void;

	/**
	 * Enter a parse tree produced by the `relationDefault`
	 * labeled alternative in `ImpalaSqlParser.relation`.
	 * @param ctx the parse tree
	 */
	enterRelationDefault?: (ctx: RelationDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `relationDefault`
	 * labeled alternative in `ImpalaSqlParser.relation`.
	 * @param ctx the parse tree
	 */
	exitRelationDefault?: (ctx: RelationDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `comparison`
	 * labeled alternative in `ImpalaSqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Exit a parse tree produced by the `comparison`
	 * labeled alternative in `ImpalaSqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitComparison?: (ctx: ComparisonContext) => void;

	/**
	 * Enter a parse tree produced by the `quantifiedComparison`
	 * labeled alternative in `ImpalaSqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterQuantifiedComparison?: (ctx: QuantifiedComparisonContext) => void;
	/**
	 * Exit a parse tree produced by the `quantifiedComparison`
	 * labeled alternative in `ImpalaSqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitQuantifiedComparison?: (ctx: QuantifiedComparisonContext) => void;

	/**
	 * Enter a parse tree produced by the `between`
	 * labeled alternative in `ImpalaSqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterBetween?: (ctx: BetweenContext) => void;
	/**
	 * Exit a parse tree produced by the `between`
	 * labeled alternative in `ImpalaSqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitBetween?: (ctx: BetweenContext) => void;

	/**
	 * Enter a parse tree produced by the `inList`
	 * labeled alternative in `ImpalaSqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterInList?: (ctx: InListContext) => void;
	/**
	 * Exit a parse tree produced by the `inList`
	 * labeled alternative in `ImpalaSqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitInList?: (ctx: InListContext) => void;

	/**
	 * Enter a parse tree produced by the `inSubquery`
	 * labeled alternative in `ImpalaSqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterInSubquery?: (ctx: InSubqueryContext) => void;
	/**
	 * Exit a parse tree produced by the `inSubquery`
	 * labeled alternative in `ImpalaSqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitInSubquery?: (ctx: InSubqueryContext) => void;

	/**
	 * Enter a parse tree produced by the `like`
	 * labeled alternative in `ImpalaSqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterLike?: (ctx: LikeContext) => void;
	/**
	 * Exit a parse tree produced by the `like`
	 * labeled alternative in `ImpalaSqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitLike?: (ctx: LikeContext) => void;

	/**
	 * Enter a parse tree produced by the `REGEXP`
	 * labeled alternative in `ImpalaSqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterREGEXP?: (ctx: REGEXPContext) => void;
	/**
	 * Exit a parse tree produced by the `REGEXP`
	 * labeled alternative in `ImpalaSqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitREGEXP?: (ctx: REGEXPContext) => void;

	/**
	 * Enter a parse tree produced by the `nullPredicate`
	 * labeled alternative in `ImpalaSqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterNullPredicate?: (ctx: NullPredicateContext) => void;
	/**
	 * Exit a parse tree produced by the `nullPredicate`
	 * labeled alternative in `ImpalaSqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitNullPredicate?: (ctx: NullPredicateContext) => void;

	/**
	 * Enter a parse tree produced by the `distinctFrom`
	 * labeled alternative in `ImpalaSqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterDistinctFrom?: (ctx: DistinctFromContext) => void;
	/**
	 * Exit a parse tree produced by the `distinctFrom`
	 * labeled alternative in `ImpalaSqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitDistinctFrom?: (ctx: DistinctFromContext) => void;

	/**
	 * Enter a parse tree produced by the `decimalLiteral`
	 * labeled alternative in `ImpalaSqlParser.number`.
	 * @param ctx the parse tree
	 */
	enterDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `decimalLiteral`
	 * labeled alternative in `ImpalaSqlParser.number`.
	 * @param ctx the parse tree
	 */
	exitDecimalLiteral?: (ctx: DecimalLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `doubleLiteral`
	 * labeled alternative in `ImpalaSqlParser.number`.
	 * @param ctx the parse tree
	 */
	enterDoubleLiteral?: (ctx: DoubleLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `doubleLiteral`
	 * labeled alternative in `ImpalaSqlParser.number`.
	 * @param ctx the parse tree
	 */
	exitDoubleLiteral?: (ctx: DoubleLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `integerLiteral`
	 * labeled alternative in `ImpalaSqlParser.number`.
	 * @param ctx the parse tree
	 */
	enterIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `integerLiteral`
	 * labeled alternative in `ImpalaSqlParser.number`.
	 * @param ctx the parse tree
	 */
	exitIntegerLiteral?: (ctx: IntegerLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `queryTermDefault`
	 * labeled alternative in `ImpalaSqlParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	enterQueryTermDefault?: (ctx: QueryTermDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `queryTermDefault`
	 * labeled alternative in `ImpalaSqlParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	exitQueryTermDefault?: (ctx: QueryTermDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `setOperation`
	 * labeled alternative in `ImpalaSqlParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	enterSetOperation?: (ctx: SetOperationContext) => void;
	/**
	 * Exit a parse tree produced by the `setOperation`
	 * labeled alternative in `ImpalaSqlParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	exitSetOperation?: (ctx: SetOperationContext) => void;

	/**
	 * Enter a parse tree produced by the `unquotedIdentifier`
	 * labeled alternative in `ImpalaSqlParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `unquotedIdentifier`
	 * labeled alternative in `ImpalaSqlParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by the `quotedIdentifier`
	 * labeled alternative in `ImpalaSqlParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `quotedIdentifier`
	 * labeled alternative in `ImpalaSqlParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by the `backQuotedIdentifier`
	 * labeled alternative in `ImpalaSqlParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `backQuotedIdentifier`
	 * labeled alternative in `ImpalaSqlParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by the `digitIdentifier`
	 * labeled alternative in `ImpalaSqlParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterDigitIdentifier?: (ctx: DigitIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `digitIdentifier`
	 * labeled alternative in `ImpalaSqlParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitDigitIdentifier?: (ctx: DigitIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by the `singleGroupingSet`
	 * labeled alternative in `ImpalaSqlParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	enterSingleGroupingSet?: (ctx: SingleGroupingSetContext) => void;
	/**
	 * Exit a parse tree produced by the `singleGroupingSet`
	 * labeled alternative in `ImpalaSqlParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	exitSingleGroupingSet?: (ctx: SingleGroupingSetContext) => void;

	/**
	 * Enter a parse tree produced by the `basicStringLiteral`
	 * labeled alternative in `ImpalaSqlParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	enterBasicStringLiteral?: (ctx: BasicStringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `basicStringLiteral`
	 * labeled alternative in `ImpalaSqlParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	exitBasicStringLiteral?: (ctx: BasicStringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `unicodeStringLiteral`
	 * labeled alternative in `ImpalaSqlParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	enterUnicodeStringLiteral?: (ctx: UnicodeStringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `unicodeStringLiteral`
	 * labeled alternative in `ImpalaSqlParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	exitUnicodeStringLiteral?: (ctx: UnicodeStringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `ImpalaSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `ImpalaSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `ImpalaSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `ImpalaSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;

	/**
	 * Enter a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `ImpalaSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `ImpalaSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;

	/**
	 * Enter a parse tree produced by the `concatenation`
	 * labeled alternative in `ImpalaSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterConcatenation?: (ctx: ConcatenationContext) => void;
	/**
	 * Exit a parse tree produced by the `concatenation`
	 * labeled alternative in `ImpalaSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitConcatenation?: (ctx: ConcatenationContext) => void;

	/**
	 * Enter a parse tree produced by the `unboundedFrame`
	 * labeled alternative in `ImpalaSqlParser.frameBound`.
	 * @param ctx the parse tree
	 */
	enterUnboundedFrame?: (ctx: UnboundedFrameContext) => void;
	/**
	 * Exit a parse tree produced by the `unboundedFrame`
	 * labeled alternative in `ImpalaSqlParser.frameBound`.
	 * @param ctx the parse tree
	 */
	exitUnboundedFrame?: (ctx: UnboundedFrameContext) => void;

	/**
	 * Enter a parse tree produced by the `currentRowBound`
	 * labeled alternative in `ImpalaSqlParser.frameBound`.
	 * @param ctx the parse tree
	 */
	enterCurrentRowBound?: (ctx: CurrentRowBoundContext) => void;
	/**
	 * Exit a parse tree produced by the `currentRowBound`
	 * labeled alternative in `ImpalaSqlParser.frameBound`.
	 * @param ctx the parse tree
	 */
	exitCurrentRowBound?: (ctx: CurrentRowBoundContext) => void;

	/**
	 * Enter a parse tree produced by the `boundedFrame`
	 * labeled alternative in `ImpalaSqlParser.frameBound`.
	 * @param ctx the parse tree
	 */
	enterBoundedFrame?: (ctx: BoundedFrameContext) => void;
	/**
	 * Exit a parse tree produced by the `boundedFrame`
	 * labeled alternative in `ImpalaSqlParser.frameBound`.
	 * @param ctx the parse tree
	 */
	exitBoundedFrame?: (ctx: BoundedFrameContext) => void;

	/**
	 * Enter a parse tree produced by the `queryPrimaryDefault`
	 * labeled alternative in `ImpalaSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	enterQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `queryPrimaryDefault`
	 * labeled alternative in `ImpalaSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	exitQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `table`
	 * labeled alternative in `ImpalaSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	enterTable?: (ctx: TableContext) => void;
	/**
	 * Exit a parse tree produced by the `table`
	 * labeled alternative in `ImpalaSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	exitTable?: (ctx: TableContext) => void;

	/**
	 * Enter a parse tree produced by the `inlineTable`
	 * labeled alternative in `ImpalaSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	enterInlineTable?: (ctx: InlineTableContext) => void;
	/**
	 * Exit a parse tree produced by the `inlineTable`
	 * labeled alternative in `ImpalaSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	exitInlineTable?: (ctx: InlineTableContext) => void;

	/**
	 * Enter a parse tree produced by the `subquery`
	 * labeled alternative in `ImpalaSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	enterSubquery?: (ctx: SubqueryContext) => void;
	/**
	 * Exit a parse tree produced by the `subquery`
	 * labeled alternative in `ImpalaSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	exitSubquery?: (ctx: SubqueryContext) => void;

	/**
	 * Enter a parse tree produced by the `nullLiteral`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterNullLiteral?: (ctx: NullLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `nullLiteral`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitNullLiteral?: (ctx: NullLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `intervalLiteral`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterIntervalLiteral?: (ctx: IntervalLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `intervalLiteral`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitIntervalLiteral?: (ctx: IntervalLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `typeConstructor`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterTypeConstructor?: (ctx: TypeConstructorContext) => void;
	/**
	 * Exit a parse tree produced by the `typeConstructor`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitTypeConstructor?: (ctx: TypeConstructorContext) => void;

	/**
	 * Enter a parse tree produced by the `numericLiteral`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterNumericLiteral?: (ctx: NumericLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `numericLiteral`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitNumericLiteral?: (ctx: NumericLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `stringLiteralValues`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterStringLiteralValues?: (ctx: StringLiteralValuesContext) => void;
	/**
	 * Exit a parse tree produced by the `stringLiteralValues`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitStringLiteralValues?: (ctx: StringLiteralValuesContext) => void;

	/**
	 * Enter a parse tree produced by the `binaryLiteral`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterBinaryLiteral?: (ctx: BinaryLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `binaryLiteral`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitBinaryLiteral?: (ctx: BinaryLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `parameter`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by the `parameter`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;

	/**
	 * Enter a parse tree produced by the `position`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPosition?: (ctx: PositionContext) => void;
	/**
	 * Exit a parse tree produced by the `position`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPosition?: (ctx: PositionContext) => void;

	/**
	 * Enter a parse tree produced by the `rowConstructor`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterRowConstructor?: (ctx: RowConstructorContext) => void;
	/**
	 * Exit a parse tree produced by the `rowConstructor`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitRowConstructor?: (ctx: RowConstructorContext) => void;

	/**
	 * Enter a parse tree produced by the `functionCall`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `functionCall`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by the `lambda`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterLambda?: (ctx: LambdaContext) => void;
	/**
	 * Exit a parse tree produced by the `lambda`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitLambda?: (ctx: LambdaContext) => void;

	/**
	 * Enter a parse tree produced by the `subqueryExpression`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `subqueryExpression`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `exists`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterExists?: (ctx: ExistsContext) => void;
	/**
	 * Exit a parse tree produced by the `exists`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitExists?: (ctx: ExistsContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleCase`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSimpleCase?: (ctx: SimpleCaseContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleCase`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSimpleCase?: (ctx: SimpleCaseContext) => void;

	/**
	 * Enter a parse tree produced by the `searchedCase`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSearchedCase?: (ctx: SearchedCaseContext) => void;
	/**
	 * Exit a parse tree produced by the `searchedCase`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSearchedCase?: (ctx: SearchedCaseContext) => void;

	/**
	 * Enter a parse tree produced by the `cast`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterCast?: (ctx: CastContext) => void;
	/**
	 * Exit a parse tree produced by the `cast`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitCast?: (ctx: CastContext) => void;

	/**
	 * Enter a parse tree produced by the `arrayConstructor`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterArrayConstructor?: (ctx: ArrayConstructorContext) => void;
	/**
	 * Exit a parse tree produced by the `arrayConstructor`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitArrayConstructor?: (ctx: ArrayConstructorContext) => void;

	/**
	 * Enter a parse tree produced by the `subscript`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSubscript?: (ctx: SubscriptContext) => void;
	/**
	 * Exit a parse tree produced by the `subscript`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSubscript?: (ctx: SubscriptContext) => void;

	/**
	 * Enter a parse tree produced by the `columnReference`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterColumnReference?: (ctx: ColumnReferenceContext) => void;
	/**
	 * Exit a parse tree produced by the `columnReference`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitColumnReference?: (ctx: ColumnReferenceContext) => void;

	/**
	 * Enter a parse tree produced by the `dereference`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterDereference?: (ctx: DereferenceContext) => void;
	/**
	 * Exit a parse tree produced by the `dereference`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitDereference?: (ctx: DereferenceContext) => void;

	/**
	 * Enter a parse tree produced by the `specialDateTimeFunction`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSpecialDateTimeFunction?: (ctx: SpecialDateTimeFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `specialDateTimeFunction`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSpecialDateTimeFunction?: (ctx: SpecialDateTimeFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `currentUser`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterCurrentUser?: (ctx: CurrentUserContext) => void;
	/**
	 * Exit a parse tree produced by the `currentUser`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitCurrentUser?: (ctx: CurrentUserContext) => void;

	/**
	 * Enter a parse tree produced by the `currentPath`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterCurrentPath?: (ctx: CurrentPathContext) => void;
	/**
	 * Exit a parse tree produced by the `currentPath`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitCurrentPath?: (ctx: CurrentPathContext) => void;

	/**
	 * Enter a parse tree produced by the `substring`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSubstring?: (ctx: SubstringContext) => void;
	/**
	 * Exit a parse tree produced by the `substring`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSubstring?: (ctx: SubstringContext) => void;

	/**
	 * Enter a parse tree produced by the `normalize`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterNormalize?: (ctx: NormalizeContext) => void;
	/**
	 * Exit a parse tree produced by the `normalize`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitNormalize?: (ctx: NormalizeContext) => void;

	/**
	 * Enter a parse tree produced by the `extract`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterExtract?: (ctx: ExtractContext) => void;
	/**
	 * Exit a parse tree produced by the `extract`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitExtract?: (ctx: ExtractContext) => void;

	/**
	 * Enter a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `groupingOperation`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterGroupingOperation?: (ctx: GroupingOperationContext) => void;
	/**
	 * Exit a parse tree produced by the `groupingOperation`
	 * labeled alternative in `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitGroupingOperation?: (ctx: GroupingOperationContext) => void;

	/**
	 * Enter a parse tree produced by the `selectSingle`
	 * labeled alternative in `ImpalaSqlParser.selectItem`.
	 * @param ctx the parse tree
	 */
	enterSelectSingle?: (ctx: SelectSingleContext) => void;
	/**
	 * Exit a parse tree produced by the `selectSingle`
	 * labeled alternative in `ImpalaSqlParser.selectItem`.
	 * @param ctx the parse tree
	 */
	exitSelectSingle?: (ctx: SelectSingleContext) => void;

	/**
	 * Enter a parse tree produced by the `selectAll`
	 * labeled alternative in `ImpalaSqlParser.selectItem`.
	 * @param ctx the parse tree
	 */
	enterSelectAll?: (ctx: SelectAllContext) => void;
	/**
	 * Exit a parse tree produced by the `selectAll`
	 * labeled alternative in `ImpalaSqlParser.selectItem`.
	 * @param ctx the parse tree
	 */
	exitSelectAll?: (ctx: SelectAllContext) => void;

	/**
	 * Enter a parse tree produced by the `qualifiedArgument`
	 * labeled alternative in `ImpalaSqlParser.pathElement`.
	 * @param ctx the parse tree
	 */
	enterQualifiedArgument?: (ctx: QualifiedArgumentContext) => void;
	/**
	 * Exit a parse tree produced by the `qualifiedArgument`
	 * labeled alternative in `ImpalaSqlParser.pathElement`.
	 * @param ctx the parse tree
	 */
	exitQualifiedArgument?: (ctx: QualifiedArgumentContext) => void;

	/**
	 * Enter a parse tree produced by the `unqualifiedArgument`
	 * labeled alternative in `ImpalaSqlParser.pathElement`.
	 * @param ctx the parse tree
	 */
	enterUnqualifiedArgument?: (ctx: UnqualifiedArgumentContext) => void;
	/**
	 * Exit a parse tree produced by the `unqualifiedArgument`
	 * labeled alternative in `ImpalaSqlParser.pathElement`.
	 * @param ctx the parse tree
	 */
	exitUnqualifiedArgument?: (ctx: UnqualifiedArgumentContext) => void;

	/**
	 * Enter a parse tree produced by the `rolePrincipal`
	 * labeled alternative in `ImpalaSqlParser.principal`.
	 * @param ctx the parse tree
	 */
	enterRolePrincipal?: (ctx: RolePrincipalContext) => void;
	/**
	 * Exit a parse tree produced by the `rolePrincipal`
	 * labeled alternative in `ImpalaSqlParser.principal`.
	 * @param ctx the parse tree
	 */
	exitRolePrincipal?: (ctx: RolePrincipalContext) => void;

	/**
	 * Enter a parse tree produced by the `userPrincipal`
	 * labeled alternative in `ImpalaSqlParser.principal`.
	 * @param ctx the parse tree
	 */
	enterUserPrincipal?: (ctx: UserPrincipalContext) => void;
	/**
	 * Exit a parse tree produced by the `userPrincipal`
	 * labeled alternative in `ImpalaSqlParser.principal`.
	 * @param ctx the parse tree
	 */
	exitUserPrincipal?: (ctx: UserPrincipalContext) => void;

	/**
	 * Enter a parse tree produced by the `groupPrincipal`
	 * labeled alternative in `ImpalaSqlParser.principal`.
	 * @param ctx the parse tree
	 */
	enterGroupPrincipal?: (ctx: GroupPrincipalContext) => void;
	/**
	 * Exit a parse tree produced by the `groupPrincipal`
	 * labeled alternative in `ImpalaSqlParser.principal`.
	 * @param ctx the parse tree
	 */
	exitGroupPrincipal?: (ctx: GroupPrincipalContext) => void;

	/**
	 * Enter a parse tree produced by the `predicated`
	 * labeled alternative in `ImpalaSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterPredicated?: (ctx: PredicatedContext) => void;
	/**
	 * Exit a parse tree produced by the `predicated`
	 * labeled alternative in `ImpalaSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitPredicated?: (ctx: PredicatedContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalNot`
	 * labeled alternative in `ImpalaSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalNot?: (ctx: LogicalNotContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalNot`
	 * labeled alternative in `ImpalaSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalNot?: (ctx: LogicalNotContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalBinary`
	 * labeled alternative in `ImpalaSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalBinary?: (ctx: LogicalBinaryContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalBinary`
	 * labeled alternative in `ImpalaSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalBinary?: (ctx: LogicalBinaryContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.useStatement`.
	 * @param ctx the parse tree
	 */
	enterUseStatement?: (ctx: UseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.useStatement`.
	 * @param ctx the parse tree
	 */
	exitUseStatement?: (ctx: UseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.createStatement`.
	 * @param ctx the parse tree
	 */
	enterCreateStatement?: (ctx: CreateStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.createStatement`.
	 * @param ctx the parse tree
	 */
	exitCreateStatement?: (ctx: CreateStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.createTableSelect`.
	 * @param ctx the parse tree
	 */
	enterCreateTableSelect?: (ctx: CreateTableSelectContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.createTableSelect`.
	 * @param ctx the parse tree
	 */
	exitCreateTableSelect?: (ctx: CreateTableSelectContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.createTableLike`.
	 * @param ctx the parse tree
	 */
	enterCreateTableLike?: (ctx: CreateTableLikeContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.createTableLike`.
	 * @param ctx the parse tree
	 */
	exitCreateTableLike?: (ctx: CreateTableLikeContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.createKuduTableAsSelect`.
	 * @param ctx the parse tree
	 */
	enterCreateKuduTableAsSelect?: (ctx: CreateKuduTableAsSelectContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.createKuduTableAsSelect`.
	 * @param ctx the parse tree
	 */
	exitCreateKuduTableAsSelect?: (ctx: CreateKuduTableAsSelectContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.createView`.
	 * @param ctx the parse tree
	 */
	enterCreateView?: (ctx: CreateViewContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.createView`.
	 * @param ctx the parse tree
	 */
	exitCreateView?: (ctx: CreateViewContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.createSchema`.
	 * @param ctx the parse tree
	 */
	enterCreateSchema?: (ctx: CreateSchemaContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.createSchema`.
	 * @param ctx the parse tree
	 */
	exitCreateSchema?: (ctx: CreateSchemaContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.createRole`.
	 * @param ctx the parse tree
	 */
	enterCreateRole?: (ctx: CreateRoleContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.createRole`.
	 * @param ctx the parse tree
	 */
	exitCreateRole?: (ctx: CreateRoleContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.createAggregateFunction`.
	 * @param ctx the parse tree
	 */
	enterCreateAggregateFunction?: (ctx: CreateAggregateFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.createAggregateFunction`.
	 * @param ctx the parse tree
	 */
	exitCreateAggregateFunction?: (ctx: CreateAggregateFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.createFunction`.
	 * @param ctx the parse tree
	 */
	enterCreateFunction?: (ctx: CreateFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.createFunction`.
	 * @param ctx the parse tree
	 */
	exitCreateFunction?: (ctx: CreateFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.alterStatement`.
	 * @param ctx the parse tree
	 */
	enterAlterStatement?: (ctx: AlterStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.alterStatement`.
	 * @param ctx the parse tree
	 */
	exitAlterStatement?: (ctx: AlterStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.alterDatabase`.
	 * @param ctx the parse tree
	 */
	enterAlterDatabase?: (ctx: AlterDatabaseContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.alterDatabase`.
	 * @param ctx the parse tree
	 */
	exitAlterDatabase?: (ctx: AlterDatabaseContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.alterStatsKey`.
	 * @param ctx the parse tree
	 */
	enterAlterStatsKey?: (ctx: AlterStatsKeyContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.alterStatsKey`.
	 * @param ctx the parse tree
	 */
	exitAlterStatsKey?: (ctx: AlterStatsKeyContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.alterPartitionCache`.
	 * @param ctx the parse tree
	 */
	enterAlterPartitionCache?: (ctx: AlterPartitionCacheContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.alterPartitionCache`.
	 * @param ctx the parse tree
	 */
	exitAlterPartitionCache?: (ctx: AlterPartitionCacheContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.editColumnDefine`.
	 * @param ctx the parse tree
	 */
	enterEditColumnDefine?: (ctx: EditColumnDefineContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.editColumnDefine`.
	 * @param ctx the parse tree
	 */
	exitEditColumnDefine?: (ctx: EditColumnDefineContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.alterDropSingleColumn`.
	 * @param ctx the parse tree
	 */
	enterAlterDropSingleColumn?: (ctx: AlterDropSingleColumnContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.alterDropSingleColumn`.
	 * @param ctx the parse tree
	 */
	exitAlterDropSingleColumn?: (ctx: AlterDropSingleColumnContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.alterTableOwner`.
	 * @param ctx the parse tree
	 */
	enterAlterTableOwner?: (ctx: AlterTableOwnerContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.alterTableOwner`.
	 * @param ctx the parse tree
	 */
	exitAlterTableOwner?: (ctx: AlterTableOwnerContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.replaceOrAddColumns`.
	 * @param ctx the parse tree
	 */
	enterReplaceOrAddColumns?: (ctx: ReplaceOrAddColumnsContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.replaceOrAddColumns`.
	 * @param ctx the parse tree
	 */
	exitReplaceOrAddColumns?: (ctx: ReplaceOrAddColumnsContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.addSingleColumn`.
	 * @param ctx the parse tree
	 */
	enterAddSingleColumn?: (ctx: AddSingleColumnContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.addSingleColumn`.
	 * @param ctx the parse tree
	 */
	exitAddSingleColumn?: (ctx: AddSingleColumnContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.alterTableNonKuduOrKuduOnly`.
	 * @param ctx the parse tree
	 */
	enterAlterTableNonKuduOrKuduOnly?: (ctx: AlterTableNonKuduOrKuduOnlyContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.alterTableNonKuduOrKuduOnly`.
	 * @param ctx the parse tree
	 */
	exitAlterTableNonKuduOrKuduOnly?: (ctx: AlterTableNonKuduOrKuduOnlyContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.addPartitionByRangeOrValue`.
	 * @param ctx the parse tree
	 */
	enterAddPartitionByRangeOrValue?: (ctx: AddPartitionByRangeOrValueContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.addPartitionByRangeOrValue`.
	 * @param ctx the parse tree
	 */
	exitAddPartitionByRangeOrValue?: (ctx: AddPartitionByRangeOrValueContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.alterFormat`.
	 * @param ctx the parse tree
	 */
	enterAlterFormat?: (ctx: AlterFormatContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.alterFormat`.
	 * @param ctx the parse tree
	 */
	exitAlterFormat?: (ctx: AlterFormatContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.recoverPartitions`.
	 * @param ctx the parse tree
	 */
	enterRecoverPartitions?: (ctx: RecoverPartitionsContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.recoverPartitions`.
	 * @param ctx the parse tree
	 */
	exitRecoverPartitions?: (ctx: RecoverPartitionsContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.dropPartitionByRangeOrValue`.
	 * @param ctx the parse tree
	 */
	enterDropPartitionByRangeOrValue?: (ctx: DropPartitionByRangeOrValueContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.dropPartitionByRangeOrValue`.
	 * @param ctx the parse tree
	 */
	exitDropPartitionByRangeOrValue?: (ctx: DropPartitionByRangeOrValueContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.alterView`.
	 * @param ctx the parse tree
	 */
	enterAlterView?: (ctx: AlterViewContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.alterView`.
	 * @param ctx the parse tree
	 */
	exitAlterView?: (ctx: AlterViewContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.renameView`.
	 * @param ctx the parse tree
	 */
	enterRenameView?: (ctx: RenameViewContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.renameView`.
	 * @param ctx the parse tree
	 */
	exitRenameView?: (ctx: RenameViewContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.alterViewOwner`.
	 * @param ctx the parse tree
	 */
	enterAlterViewOwner?: (ctx: AlterViewOwnerContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.alterViewOwner`.
	 * @param ctx the parse tree
	 */
	exitAlterViewOwner?: (ctx: AlterViewOwnerContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.renameTable`.
	 * @param ctx the parse tree
	 */
	enterRenameTable?: (ctx: RenameTableContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.renameTable`.
	 * @param ctx the parse tree
	 */
	exitRenameTable?: (ctx: RenameTableContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.alterUnSetOrSetViewTblproperties`.
	 * @param ctx the parse tree
	 */
	enterAlterUnSetOrSetViewTblproperties?: (ctx: AlterUnSetOrSetViewTblpropertiesContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.alterUnSetOrSetViewTblproperties`.
	 * @param ctx the parse tree
	 */
	exitAlterUnSetOrSetViewTblproperties?: (ctx: AlterUnSetOrSetViewTblpropertiesContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.truncateTableStatement`.
	 * @param ctx the parse tree
	 */
	enterTruncateTableStatement?: (ctx: TruncateTableStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.truncateTableStatement`.
	 * @param ctx the parse tree
	 */
	exitTruncateTableStatement?: (ctx: TruncateTableStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.describeStatement`.
	 * @param ctx the parse tree
	 */
	enterDescribeStatement?: (ctx: DescribeStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.describeStatement`.
	 * @param ctx the parse tree
	 */
	exitDescribeStatement?: (ctx: DescribeStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.computeStatement`.
	 * @param ctx the parse tree
	 */
	enterComputeStatement?: (ctx: ComputeStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.computeStatement`.
	 * @param ctx the parse tree
	 */
	exitComputeStatement?: (ctx: ComputeStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.computeStats`.
	 * @param ctx the parse tree
	 */
	enterComputeStats?: (ctx: ComputeStatsContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.computeStats`.
	 * @param ctx the parse tree
	 */
	exitComputeStats?: (ctx: ComputeStatsContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.computeIncrementalStats`.
	 * @param ctx the parse tree
	 */
	enterComputeIncrementalStats?: (ctx: ComputeIncrementalStatsContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.computeIncrementalStats`.
	 * @param ctx the parse tree
	 */
	exitComputeIncrementalStats?: (ctx: ComputeIncrementalStatsContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.dropStatement`.
	 * @param ctx the parse tree
	 */
	enterDropStatement?: (ctx: DropStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.dropStatement`.
	 * @param ctx the parse tree
	 */
	exitDropStatement?: (ctx: DropStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.dropSchema`.
	 * @param ctx the parse tree
	 */
	enterDropSchema?: (ctx: DropSchemaContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.dropSchema`.
	 * @param ctx the parse tree
	 */
	exitDropSchema?: (ctx: DropSchemaContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.dropView`.
	 * @param ctx the parse tree
	 */
	enterDropView?: (ctx: DropViewContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.dropView`.
	 * @param ctx the parse tree
	 */
	exitDropView?: (ctx: DropViewContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.dropTable`.
	 * @param ctx the parse tree
	 */
	enterDropTable?: (ctx: DropTableContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.dropTable`.
	 * @param ctx the parse tree
	 */
	exitDropTable?: (ctx: DropTableContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.dropIncrementalStats`.
	 * @param ctx the parse tree
	 */
	enterDropIncrementalStats?: (ctx: DropIncrementalStatsContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.dropIncrementalStats`.
	 * @param ctx the parse tree
	 */
	exitDropIncrementalStats?: (ctx: DropIncrementalStatsContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.dropFunction`.
	 * @param ctx the parse tree
	 */
	enterDropFunction?: (ctx: DropFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.dropFunction`.
	 * @param ctx the parse tree
	 */
	exitDropFunction?: (ctx: DropFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.dropRole`.
	 * @param ctx the parse tree
	 */
	enterDropRole?: (ctx: DropRoleContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.dropRole`.
	 * @param ctx the parse tree
	 */
	exitDropRole?: (ctx: DropRoleContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.grantStatement`.
	 * @param ctx the parse tree
	 */
	enterGrantStatement?: (ctx: GrantStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.grantStatement`.
	 * @param ctx the parse tree
	 */
	exitGrantStatement?: (ctx: GrantStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.grantRole`.
	 * @param ctx the parse tree
	 */
	enterGrantRole?: (ctx: GrantRoleContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.grantRole`.
	 * @param ctx the parse tree
	 */
	exitGrantRole?: (ctx: GrantRoleContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.grant`.
	 * @param ctx the parse tree
	 */
	enterGrant?: (ctx: GrantContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.grant`.
	 * @param ctx the parse tree
	 */
	exitGrant?: (ctx: GrantContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.revokeStatement`.
	 * @param ctx the parse tree
	 */
	enterRevokeStatement?: (ctx: RevokeStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.revokeStatement`.
	 * @param ctx the parse tree
	 */
	exitRevokeStatement?: (ctx: RevokeStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.revokeRole`.
	 * @param ctx the parse tree
	 */
	enterRevokeRole?: (ctx: RevokeRoleContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.revokeRole`.
	 * @param ctx the parse tree
	 */
	exitRevokeRole?: (ctx: RevokeRoleContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.revoke`.
	 * @param ctx the parse tree
	 */
	enterRevoke?: (ctx: RevokeContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.revoke`.
	 * @param ctx the parse tree
	 */
	exitRevoke?: (ctx: RevokeContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.insertStatement`.
	 * @param ctx the parse tree
	 */
	enterInsertStatement?: (ctx: InsertStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.insertStatement`.
	 * @param ctx the parse tree
	 */
	exitInsertStatement?: (ctx: InsertStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.deleteStatement`.
	 * @param ctx the parse tree
	 */
	enterDeleteStatement?: (ctx: DeleteStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.deleteStatement`.
	 * @param ctx the parse tree
	 */
	exitDeleteStatement?: (ctx: DeleteStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.delete`.
	 * @param ctx the parse tree
	 */
	enterDelete?: (ctx: DeleteContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.delete`.
	 * @param ctx the parse tree
	 */
	exitDelete?: (ctx: DeleteContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.deleteTableRef`.
	 * @param ctx the parse tree
	 */
	enterDeleteTableRef?: (ctx: DeleteTableRefContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.deleteTableRef`.
	 * @param ctx the parse tree
	 */
	exitDeleteTableRef?: (ctx: DeleteTableRefContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.updateStatement`.
	 * @param ctx the parse tree
	 */
	enterUpdateStatement?: (ctx: UpdateStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.updateStatement`.
	 * @param ctx the parse tree
	 */
	exitUpdateStatement?: (ctx: UpdateStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.upsertStatement`.
	 * @param ctx the parse tree
	 */
	enterUpsertStatement?: (ctx: UpsertStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.upsertStatement`.
	 * @param ctx the parse tree
	 */
	exitUpsertStatement?: (ctx: UpsertStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	enterShowStatement?: (ctx: ShowStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	exitShowStatement?: (ctx: ShowStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.showSchemas`.
	 * @param ctx the parse tree
	 */
	enterShowSchemas?: (ctx: ShowSchemasContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.showSchemas`.
	 * @param ctx the parse tree
	 */
	exitShowSchemas?: (ctx: ShowSchemasContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.showTables`.
	 * @param ctx the parse tree
	 */
	enterShowTables?: (ctx: ShowTablesContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.showTables`.
	 * @param ctx the parse tree
	 */
	exitShowTables?: (ctx: ShowTablesContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.showFunctions`.
	 * @param ctx the parse tree
	 */
	enterShowFunctions?: (ctx: ShowFunctionsContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.showFunctions`.
	 * @param ctx the parse tree
	 */
	exitShowFunctions?: (ctx: ShowFunctionsContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.showCreateTable`.
	 * @param ctx the parse tree
	 */
	enterShowCreateTable?: (ctx: ShowCreateTableContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.showCreateTable`.
	 * @param ctx the parse tree
	 */
	exitShowCreateTable?: (ctx: ShowCreateTableContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.showCreateView`.
	 * @param ctx the parse tree
	 */
	enterShowCreateView?: (ctx: ShowCreateViewContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.showCreateView`.
	 * @param ctx the parse tree
	 */
	exitShowCreateView?: (ctx: ShowCreateViewContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.showTableStats`.
	 * @param ctx the parse tree
	 */
	enterShowTableStats?: (ctx: ShowTableStatsContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.showTableStats`.
	 * @param ctx the parse tree
	 */
	exitShowTableStats?: (ctx: ShowTableStatsContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.showColumnStats`.
	 * @param ctx the parse tree
	 */
	enterShowColumnStats?: (ctx: ShowColumnStatsContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.showColumnStats`.
	 * @param ctx the parse tree
	 */
	exitShowColumnStats?: (ctx: ShowColumnStatsContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.showPartitions`.
	 * @param ctx the parse tree
	 */
	enterShowPartitions?: (ctx: ShowPartitionsContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.showPartitions`.
	 * @param ctx the parse tree
	 */
	exitShowPartitions?: (ctx: ShowPartitionsContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.showFiles`.
	 * @param ctx the parse tree
	 */
	enterShowFiles?: (ctx: ShowFilesContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.showFiles`.
	 * @param ctx the parse tree
	 */
	exitShowFiles?: (ctx: ShowFilesContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.showRoles`.
	 * @param ctx the parse tree
	 */
	enterShowRoles?: (ctx: ShowRolesContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.showRoles`.
	 * @param ctx the parse tree
	 */
	exitShowRoles?: (ctx: ShowRolesContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.showRoleGrant`.
	 * @param ctx the parse tree
	 */
	enterShowRoleGrant?: (ctx: ShowRoleGrantContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.showRoleGrant`.
	 * @param ctx the parse tree
	 */
	exitShowRoleGrant?: (ctx: ShowRoleGrantContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.showGrants`.
	 * @param ctx the parse tree
	 */
	enterShowGrants?: (ctx: ShowGrantsContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.showGrants`.
	 * @param ctx the parse tree
	 */
	exitShowGrants?: (ctx: ShowGrantsContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.showDatabaseGrant`.
	 * @param ctx the parse tree
	 */
	enterShowDatabaseGrant?: (ctx: ShowDatabaseGrantContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.showDatabaseGrant`.
	 * @param ctx the parse tree
	 */
	exitShowDatabaseGrant?: (ctx: ShowDatabaseGrantContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.showTableGrant`.
	 * @param ctx the parse tree
	 */
	enterShowTableGrant?: (ctx: ShowTableGrantContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.showTableGrant`.
	 * @param ctx the parse tree
	 */
	exitShowTableGrant?: (ctx: ShowTableGrantContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.showColumnGrant`.
	 * @param ctx the parse tree
	 */
	enterShowColumnGrant?: (ctx: ShowColumnGrantContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.showColumnGrant`.
	 * @param ctx the parse tree
	 */
	exitShowColumnGrant?: (ctx: ShowColumnGrantContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.addCommentStatement`.
	 * @param ctx the parse tree
	 */
	enterAddCommentStatement?: (ctx: AddCommentStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.addCommentStatement`.
	 * @param ctx the parse tree
	 */
	exitAddCommentStatement?: (ctx: AddCommentStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.addDatabaseComments`.
	 * @param ctx the parse tree
	 */
	enterAddDatabaseComments?: (ctx: AddDatabaseCommentsContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.addDatabaseComments`.
	 * @param ctx the parse tree
	 */
	exitAddDatabaseComments?: (ctx: AddDatabaseCommentsContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.addTableComments`.
	 * @param ctx the parse tree
	 */
	enterAddTableComments?: (ctx: AddTableCommentsContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.addTableComments`.
	 * @param ctx the parse tree
	 */
	exitAddTableComments?: (ctx: AddTableCommentsContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.addColumnComments`.
	 * @param ctx the parse tree
	 */
	enterAddColumnComments?: (ctx: AddColumnCommentsContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.addColumnComments`.
	 * @param ctx the parse tree
	 */
	exitAddColumnComments?: (ctx: AddColumnCommentsContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.explainStatement`.
	 * @param ctx the parse tree
	 */
	enterExplainStatement?: (ctx: ExplainStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.explainStatement`.
	 * @param ctx the parse tree
	 */
	exitExplainStatement?: (ctx: ExplainStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.setStatement`.
	 * @param ctx the parse tree
	 */
	enterSetStatement?: (ctx: SetStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.setStatement`.
	 * @param ctx the parse tree
	 */
	exitSetStatement?: (ctx: SetStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.shutdownStatement`.
	 * @param ctx the parse tree
	 */
	enterShutdownStatement?: (ctx: ShutdownStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.shutdownStatement`.
	 * @param ctx the parse tree
	 */
	exitShutdownStatement?: (ctx: ShutdownStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.invalidateMetaStatement`.
	 * @param ctx the parse tree
	 */
	enterInvalidateMetaStatement?: (ctx: InvalidateMetaStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.invalidateMetaStatement`.
	 * @param ctx the parse tree
	 */
	exitInvalidateMetaStatement?: (ctx: InvalidateMetaStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.loadDataStatement`.
	 * @param ctx the parse tree
	 */
	enterLoadDataStatement?: (ctx: LoadDataStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.loadDataStatement`.
	 * @param ctx the parse tree
	 */
	exitLoadDataStatement?: (ctx: LoadDataStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.refreshStatement`.
	 * @param ctx the parse tree
	 */
	enterRefreshStatement?: (ctx: RefreshStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.refreshStatement`.
	 * @param ctx the parse tree
	 */
	exitRefreshStatement?: (ctx: RefreshStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.refreshMeta`.
	 * @param ctx the parse tree
	 */
	enterRefreshMeta?: (ctx: RefreshMetaContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.refreshMeta`.
	 * @param ctx the parse tree
	 */
	exitRefreshMeta?: (ctx: RefreshMetaContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.refreshAuth`.
	 * @param ctx the parse tree
	 */
	enterRefreshAuth?: (ctx: RefreshAuthContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.refreshAuth`.
	 * @param ctx the parse tree
	 */
	exitRefreshAuth?: (ctx: RefreshAuthContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.refreshFunction`.
	 * @param ctx the parse tree
	 */
	enterRefreshFunction?: (ctx: RefreshFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.refreshFunction`.
	 * @param ctx the parse tree
	 */
	exitRefreshFunction?: (ctx: RefreshFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.ifExists`.
	 * @param ctx the parse tree
	 */
	enterIfExists?: (ctx: IfExistsContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.ifExists`.
	 * @param ctx the parse tree
	 */
	exitIfExists?: (ctx: IfExistsContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.ifNotExists`.
	 * @param ctx the parse tree
	 */
	enterIfNotExists?: (ctx: IfNotExistsContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.ifNotExists`.
	 * @param ctx the parse tree
	 */
	exitIfNotExists?: (ctx: IfNotExistsContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.tableNameCreate`.
	 * @param ctx the parse tree
	 */
	enterTableNameCreate?: (ctx: TableNameCreateContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.tableNameCreate`.
	 * @param ctx the parse tree
	 */
	exitTableNameCreate?: (ctx: TableNameCreateContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.databaseNameCreate`.
	 * @param ctx the parse tree
	 */
	enterDatabaseNameCreate?: (ctx: DatabaseNameCreateContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.databaseNameCreate`.
	 * @param ctx the parse tree
	 */
	exitDatabaseNameCreate?: (ctx: DatabaseNameCreateContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.viewNameCreate`.
	 * @param ctx the parse tree
	 */
	enterViewNameCreate?: (ctx: ViewNameCreateContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.viewNameCreate`.
	 * @param ctx the parse tree
	 */
	exitViewNameCreate?: (ctx: ViewNameCreateContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.functionNameCreate`.
	 * @param ctx the parse tree
	 */
	enterFunctionNameCreate?: (ctx: FunctionNameCreateContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.functionNameCreate`.
	 * @param ctx the parse tree
	 */
	exitFunctionNameCreate?: (ctx: FunctionNameCreateContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.databaseNamePath`.
	 * @param ctx the parse tree
	 */
	enterDatabaseNamePath?: (ctx: DatabaseNamePathContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.databaseNamePath`.
	 * @param ctx the parse tree
	 */
	exitDatabaseNamePath?: (ctx: DatabaseNamePathContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.tableNamePath`.
	 * @param ctx the parse tree
	 */
	enterTableNamePath?: (ctx: TableNamePathContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.tableNamePath`.
	 * @param ctx the parse tree
	 */
	exitTableNamePath?: (ctx: TableNamePathContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.viewNamePath`.
	 * @param ctx the parse tree
	 */
	enterViewNamePath?: (ctx: ViewNamePathContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.viewNamePath`.
	 * @param ctx the parse tree
	 */
	exitViewNamePath?: (ctx: ViewNamePathContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.functionNamePath`.
	 * @param ctx the parse tree
	 */
	enterFunctionNamePath?: (ctx: FunctionNamePathContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.functionNamePath`.
	 * @param ctx the parse tree
	 */
	exitFunctionNamePath?: (ctx: FunctionNamePathContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.columnNamePath`.
	 * @param ctx the parse tree
	 */
	enterColumnNamePath?: (ctx: ColumnNamePathContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.columnNamePath`.
	 * @param ctx the parse tree
	 */
	exitColumnNamePath?: (ctx: ColumnNamePathContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.tableOrViewPath`.
	 * @param ctx the parse tree
	 */
	enterTableOrViewPath?: (ctx: TableOrViewPathContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.tableOrViewPath`.
	 * @param ctx the parse tree
	 */
	exitTableOrViewPath?: (ctx: TableOrViewPathContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.createCommonItem`.
	 * @param ctx the parse tree
	 */
	enterCreateCommonItem?: (ctx: CreateCommonItemContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.createCommonItem`.
	 * @param ctx the parse tree
	 */
	exitCreateCommonItem?: (ctx: CreateCommonItemContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.assignmentList`.
	 * @param ctx the parse tree
	 */
	enterAssignmentList?: (ctx: AssignmentListContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.assignmentList`.
	 * @param ctx the parse tree
	 */
	exitAssignmentList?: (ctx: AssignmentListContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.assignmentItem`.
	 * @param ctx the parse tree
	 */
	enterAssignmentItem?: (ctx: AssignmentItemContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.assignmentItem`.
	 * @param ctx the parse tree
	 */
	exitAssignmentItem?: (ctx: AssignmentItemContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.viewColumns`.
	 * @param ctx the parse tree
	 */
	enterViewColumns?: (ctx: ViewColumnsContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.viewColumns`.
	 * @param ctx the parse tree
	 */
	exitViewColumns?: (ctx: ViewColumnsContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.queryStatement`.
	 * @param ctx the parse tree
	 */
	enterQueryStatement?: (ctx: QueryStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.queryStatement`.
	 * @param ctx the parse tree
	 */
	exitQueryStatement?: (ctx: QueryStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.with`.
	 * @param ctx the parse tree
	 */
	enterWith?: (ctx: WithContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.with`.
	 * @param ctx the parse tree
	 */
	exitWith?: (ctx: WithContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.constraintSpecification`.
	 * @param ctx the parse tree
	 */
	enterConstraintSpecification?: (ctx: ConstraintSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.constraintSpecification`.
	 * @param ctx the parse tree
	 */
	exitConstraintSpecification?: (ctx: ConstraintSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.foreignKeySpecification`.
	 * @param ctx the parse tree
	 */
	enterForeignKeySpecification?: (ctx: ForeignKeySpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.foreignKeySpecification`.
	 * @param ctx the parse tree
	 */
	exitForeignKeySpecification?: (ctx: ForeignKeySpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.columnDefinition`.
	 * @param ctx the parse tree
	 */
	enterColumnDefinition?: (ctx: ColumnDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.columnDefinition`.
	 * @param ctx the parse tree
	 */
	exitColumnDefinition?: (ctx: ColumnDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.kuduTableElement`.
	 * @param ctx the parse tree
	 */
	enterKuduTableElement?: (ctx: KuduTableElementContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.kuduTableElement`.
	 * @param ctx the parse tree
	 */
	exitKuduTableElement?: (ctx: KuduTableElementContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.kuduColumnDefinition`.
	 * @param ctx the parse tree
	 */
	enterKuduColumnDefinition?: (ctx: KuduColumnDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.kuduColumnDefinition`.
	 * @param ctx the parse tree
	 */
	exitKuduColumnDefinition?: (ctx: KuduColumnDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.columnSpecWithKudu`.
	 * @param ctx the parse tree
	 */
	enterColumnSpecWithKudu?: (ctx: ColumnSpecWithKuduContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.columnSpecWithKudu`.
	 * @param ctx the parse tree
	 */
	exitColumnSpecWithKudu?: (ctx: ColumnSpecWithKuduContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.kuduAttributes`.
	 * @param ctx the parse tree
	 */
	enterKuduAttributes?: (ctx: KuduAttributesContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.kuduAttributes`.
	 * @param ctx the parse tree
	 */
	exitKuduAttributes?: (ctx: KuduAttributesContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.kuduStorageAttr`.
	 * @param ctx the parse tree
	 */
	enterKuduStorageAttr?: (ctx: KuduStorageAttrContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.kuduStorageAttr`.
	 * @param ctx the parse tree
	 */
	exitKuduStorageAttr?: (ctx: KuduStorageAttrContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.statsKey`.
	 * @param ctx the parse tree
	 */
	enterStatsKey?: (ctx: StatsKeyContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.statsKey`.
	 * @param ctx the parse tree
	 */
	exitStatsKey?: (ctx: StatsKeyContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.fileFormat`.
	 * @param ctx the parse tree
	 */
	enterFileFormat?: (ctx: FileFormatContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.fileFormat`.
	 * @param ctx the parse tree
	 */
	exitFileFormat?: (ctx: FileFormatContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.kuduPartitionClause`.
	 * @param ctx the parse tree
	 */
	enterKuduPartitionClause?: (ctx: KuduPartitionClauseContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.kuduPartitionClause`.
	 * @param ctx the parse tree
	 */
	exitKuduPartitionClause?: (ctx: KuduPartitionClauseContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.hashClause`.
	 * @param ctx the parse tree
	 */
	enterHashClause?: (ctx: HashClauseContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.hashClause`.
	 * @param ctx the parse tree
	 */
	exitHashClause?: (ctx: HashClauseContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.rangeClause`.
	 * @param ctx the parse tree
	 */
	enterRangeClause?: (ctx: RangeClauseContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.rangeClause`.
	 * @param ctx the parse tree
	 */
	exitRangeClause?: (ctx: RangeClauseContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.kuduPartitionSpec`.
	 * @param ctx the parse tree
	 */
	enterKuduPartitionSpec?: (ctx: KuduPartitionSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.kuduPartitionSpec`.
	 * @param ctx the parse tree
	 */
	exitKuduPartitionSpec?: (ctx: KuduPartitionSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.cacheSpec`.
	 * @param ctx the parse tree
	 */
	enterCacheSpec?: (ctx: CacheSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.cacheSpec`.
	 * @param ctx the parse tree
	 */
	exitCacheSpec?: (ctx: CacheSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.rangeOperator`.
	 * @param ctx the parse tree
	 */
	enterRangeOperator?: (ctx: RangeOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.rangeOperator`.
	 * @param ctx the parse tree
	 */
	exitRangeOperator?: (ctx: RangeOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.partitionCol`.
	 * @param ctx the parse tree
	 */
	enterPartitionCol?: (ctx: PartitionColContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.partitionCol`.
	 * @param ctx the parse tree
	 */
	exitPartitionCol?: (ctx: PartitionColContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.likeClause`.
	 * @param ctx the parse tree
	 */
	enterLikeClause?: (ctx: LikeClauseContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.likeClause`.
	 * @param ctx the parse tree
	 */
	exitLikeClause?: (ctx: LikeClauseContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.properties`.
	 * @param ctx the parse tree
	 */
	enterProperties?: (ctx: PropertiesContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.properties`.
	 * @param ctx the parse tree
	 */
	exitProperties?: (ctx: PropertiesContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.partitionedBy`.
	 * @param ctx the parse tree
	 */
	enterPartitionedBy?: (ctx: PartitionedByContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.partitionedBy`.
	 * @param ctx the parse tree
	 */
	exitPartitionedBy?: (ctx: PartitionedByContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.sortedBy`.
	 * @param ctx the parse tree
	 */
	enterSortedBy?: (ctx: SortedByContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.sortedBy`.
	 * @param ctx the parse tree
	 */
	exitSortedBy?: (ctx: SortedByContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.rowFormat`.
	 * @param ctx the parse tree
	 */
	enterRowFormat?: (ctx: RowFormatContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.rowFormat`.
	 * @param ctx the parse tree
	 */
	exitRowFormat?: (ctx: RowFormatContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.property`.
	 * @param ctx the parse tree
	 */
	enterProperty?: (ctx: PropertyContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.property`.
	 * @param ctx the parse tree
	 */
	exitProperty?: (ctx: PropertyContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.queryNoWith`.
	 * @param ctx the parse tree
	 */
	enterQueryNoWith?: (ctx: QueryNoWithContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.queryNoWith`.
	 * @param ctx the parse tree
	 */
	exitQueryNoWith?: (ctx: QueryNoWithContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	enterQueryTerm?: (ctx: QueryTermContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	exitQueryTerm?: (ctx: QueryTermContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	enterQueryPrimary?: (ctx: QueryPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	exitQueryPrimary?: (ctx: QueryPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.sortItem`.
	 * @param ctx the parse tree
	 */
	enterSortItem?: (ctx: SortItemContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.sortItem`.
	 * @param ctx the parse tree
	 */
	exitSortItem?: (ctx: SortItemContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.querySpecification`.
	 * @param ctx the parse tree
	 */
	enterQuerySpecification?: (ctx: QuerySpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.querySpecification`.
	 * @param ctx the parse tree
	 */
	exitQuerySpecification?: (ctx: QuerySpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.groupBy`.
	 * @param ctx the parse tree
	 */
	enterGroupBy?: (ctx: GroupByContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.groupBy`.
	 * @param ctx the parse tree
	 */
	exitGroupBy?: (ctx: GroupByContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	enterGroupingElement?: (ctx: GroupingElementContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	exitGroupingElement?: (ctx: GroupingElementContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.groupingSet`.
	 * @param ctx the parse tree
	 */
	enterGroupingSet?: (ctx: GroupingSetContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.groupingSet`.
	 * @param ctx the parse tree
	 */
	exitGroupingSet?: (ctx: GroupingSetContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.namedQuery`.
	 * @param ctx the parse tree
	 */
	enterNamedQuery?: (ctx: NamedQueryContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.namedQuery`.
	 * @param ctx the parse tree
	 */
	exitNamedQuery?: (ctx: NamedQueryContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.setQuantifier`.
	 * @param ctx the parse tree
	 */
	enterSetQuantifier?: (ctx: SetQuantifierContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.setQuantifier`.
	 * @param ctx the parse tree
	 */
	exitSetQuantifier?: (ctx: SetQuantifierContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.selectItem`.
	 * @param ctx the parse tree
	 */
	enterSelectItem?: (ctx: SelectItemContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.selectItem`.
	 * @param ctx the parse tree
	 */
	exitSelectItem?: (ctx: SelectItemContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.relation`.
	 * @param ctx the parse tree
	 */
	enterRelation?: (ctx: RelationContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.relation`.
	 * @param ctx the parse tree
	 */
	exitRelation?: (ctx: RelationContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.joinType`.
	 * @param ctx the parse tree
	 */
	enterJoinType?: (ctx: JoinTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.joinType`.
	 * @param ctx the parse tree
	 */
	exitJoinType?: (ctx: JoinTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.joinCriteria`.
	 * @param ctx the parse tree
	 */
	enterJoinCriteria?: (ctx: JoinCriteriaContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.joinCriteria`.
	 * @param ctx the parse tree
	 */
	exitJoinCriteria?: (ctx: JoinCriteriaContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.sampledRelation`.
	 * @param ctx the parse tree
	 */
	enterSampledRelation?: (ctx: SampledRelationContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.sampledRelation`.
	 * @param ctx the parse tree
	 */
	exitSampledRelation?: (ctx: SampledRelationContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.sampleType`.
	 * @param ctx the parse tree
	 */
	enterSampleType?: (ctx: SampleTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.sampleType`.
	 * @param ctx the parse tree
	 */
	exitSampleType?: (ctx: SampleTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.aliasedRelation`.
	 * @param ctx the parse tree
	 */
	enterAliasedRelation?: (ctx: AliasedRelationContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.aliasedRelation`.
	 * @param ctx the parse tree
	 */
	exitAliasedRelation?: (ctx: AliasedRelationContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.columnAliases`.
	 * @param ctx the parse tree
	 */
	enterColumnAliases?: (ctx: ColumnAliasesContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.columnAliases`.
	 * @param ctx the parse tree
	 */
	exitColumnAliases?: (ctx: ColumnAliasesContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterRelationPrimary?: (ctx: RelationPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitRelationPrimary?: (ctx: RelationPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.subQueryRelation`.
	 * @param ctx the parse tree
	 */
	enterSubQueryRelation?: (ctx: SubQueryRelationContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.subQueryRelation`.
	 * @param ctx the parse tree
	 */
	exitSubQueryRelation?: (ctx: SubQueryRelationContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.unnest`.
	 * @param ctx the parse tree
	 */
	enterUnnest?: (ctx: UnnestContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.unnest`.
	 * @param ctx the parse tree
	 */
	exitUnnest?: (ctx: UnnestContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.parenthesizedRelation`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedRelation?: (ctx: ParenthesizedRelationContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.parenthesizedRelation`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedRelation?: (ctx: ParenthesizedRelationContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.columnItem`.
	 * @param ctx the parse tree
	 */
	enterColumnItem?: (ctx: ColumnItemContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.columnItem`.
	 * @param ctx the parse tree
	 */
	exitColumnItem?: (ctx: ColumnItemContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanExpression?: (ctx: BooleanExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanExpression?: (ctx: BooleanExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterPredicate?: (ctx: PredicateContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitPredicate?: (ctx: PredicateContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterValueExpression?: (ctx: ValueExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitValueExpression?: (ctx: ValueExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.comparisonQuantifier`.
	 * @param ctx the parse tree
	 */
	enterComparisonQuantifier?: (ctx: ComparisonQuantifierContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.comparisonQuantifier`.
	 * @param ctx the parse tree
	 */
	exitComparisonQuantifier?: (ctx: ComparisonQuantifierContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.booleanValue`.
	 * @param ctx the parse tree
	 */
	enterBooleanValue?: (ctx: BooleanValueContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.booleanValue`.
	 * @param ctx the parse tree
	 */
	exitBooleanValue?: (ctx: BooleanValueContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.interval`.
	 * @param ctx the parse tree
	 */
	enterInterval?: (ctx: IntervalContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.interval`.
	 * @param ctx the parse tree
	 */
	exitInterval?: (ctx: IntervalContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.intervalField`.
	 * @param ctx the parse tree
	 */
	enterIntervalField?: (ctx: IntervalFieldContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.intervalField`.
	 * @param ctx the parse tree
	 */
	exitIntervalField?: (ctx: IntervalFieldContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.normalForm`.
	 * @param ctx the parse tree
	 */
	enterNormalForm?: (ctx: NormalFormContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.normalForm`.
	 * @param ctx the parse tree
	 */
	exitNormalForm?: (ctx: NormalFormContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	enterTypeParameter?: (ctx: TypeParameterContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	exitTypeParameter?: (ctx: TypeParameterContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.baseType`.
	 * @param ctx the parse tree
	 */
	enterBaseType?: (ctx: BaseTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.baseType`.
	 * @param ctx the parse tree
	 */
	exitBaseType?: (ctx: BaseTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.whenClause`.
	 * @param ctx the parse tree
	 */
	enterWhenClause?: (ctx: WhenClauseContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.whenClause`.
	 * @param ctx the parse tree
	 */
	exitWhenClause?: (ctx: WhenClauseContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.filter`.
	 * @param ctx the parse tree
	 */
	enterFilter?: (ctx: FilterContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.filter`.
	 * @param ctx the parse tree
	 */
	exitFilter?: (ctx: FilterContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.over`.
	 * @param ctx the parse tree
	 */
	enterOver?: (ctx: OverContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.over`.
	 * @param ctx the parse tree
	 */
	exitOver?: (ctx: OverContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.windowFrame`.
	 * @param ctx the parse tree
	 */
	enterWindowFrame?: (ctx: WindowFrameContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.windowFrame`.
	 * @param ctx the parse tree
	 */
	exitWindowFrame?: (ctx: WindowFrameContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.frameBound`.
	 * @param ctx the parse tree
	 */
	enterFrameBound?: (ctx: FrameBoundContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.frameBound`.
	 * @param ctx the parse tree
	 */
	exitFrameBound?: (ctx: FrameBoundContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.pathElement`.
	 * @param ctx the parse tree
	 */
	enterPathElement?: (ctx: PathElementContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.pathElement`.
	 * @param ctx the parse tree
	 */
	exitPathElement?: (ctx: PathElementContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.pathSpecification`.
	 * @param ctx the parse tree
	 */
	enterPathSpecification?: (ctx: PathSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.pathSpecification`.
	 * @param ctx the parse tree
	 */
	exitPathSpecification?: (ctx: PathSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.privilege`.
	 * @param ctx the parse tree
	 */
	enterPrivilege?: (ctx: PrivilegeContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.privilege`.
	 * @param ctx the parse tree
	 */
	exitPrivilege?: (ctx: PrivilegeContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.objectType`.
	 * @param ctx the parse tree
	 */
	enterObjectType?: (ctx: ObjectTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.objectType`.
	 * @param ctx the parse tree
	 */
	exitObjectType?: (ctx: ObjectTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedName?: (ctx: QualifiedNameContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.principal`.
	 * @param ctx the parse tree
	 */
	enterPrincipal?: (ctx: PrincipalContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.principal`.
	 * @param ctx the parse tree
	 */
	exitPrincipal?: (ctx: PrincipalContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `ImpalaSqlParser.nonReserved`.
	 * @param ctx the parse tree
	 */
	enterNonReserved?: (ctx: NonReservedContext) => void;
	/**
	 * Exit a parse tree produced by `ImpalaSqlParser.nonReserved`.
	 * @param ctx the parse tree
	 */
	exitNonReserved?: (ctx: NonReservedContext) => void;
}

