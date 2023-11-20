// Generated from /Users/shuangxu/Documents/workspace/dt-sql-parser/src/grammar/impala/ImpalaSqlParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
import { REGEXPContext } from "./ImpalaSqlParserParser";
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
import { CreateTableSelectContext } from "./ImpalaSqlParserParser";
import { CreateTableLikeContext } from "./ImpalaSqlParserParser";
import { CreateKuduTableAsSelectContext } from "./ImpalaSqlParserParser";
import { RenameTableContext } from "./ImpalaSqlParserParser";
import { AddSingleColumnContext } from "./ImpalaSqlParserParser";
import { AddColumnsContext } from "./ImpalaSqlParserParser";
import { ReplaceColumnsContext } from "./ImpalaSqlParserParser";
import { EditColumnDefineContext } from "./ImpalaSqlParserParser";
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
import { CreateCommonItemContext } from "./ImpalaSqlParserParser";
import { AssignmentListContext } from "./ImpalaSqlParserParser";
import { AssignmentItemContext } from "./ImpalaSqlParserParser";
import { ViewColumnsContext } from "./ImpalaSqlParserParser";
import { QueryContext } from "./ImpalaSqlParserParser";
import { WithContext } from "./ImpalaSqlParserParser";
import { ConstraintSpecificationContext } from "./ImpalaSqlParserParser";
import { ForeignKeySpecificationContext } from "./ImpalaSqlParserParser";
import { ColumnDefinitionContext } from "./ImpalaSqlParserParser";
import { KuduTableElementContext } from "./ImpalaSqlParserParser";
import { KuduColumnDefinitionContext } from "./ImpalaSqlParserParser";
import { ColumnSpecWithKuduContext } from "./ImpalaSqlParserParser";
import { KuduAttributesContext } from "./ImpalaSqlParserParser";
import { KuduStorageAttrContext } from "./ImpalaSqlParserParser";
import { StatsKeyContext } from "./ImpalaSqlParserParser";
import { FileFormatContext } from "./ImpalaSqlParserParser";
import { KuduPartitionClauseContext } from "./ImpalaSqlParserParser";
import { HashClauseContext } from "./ImpalaSqlParserParser";
import { RangeClauseContext } from "./ImpalaSqlParserParser";
import { KuduPartitionSpecContext } from "./ImpalaSqlParserParser";
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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ImpalaSqlParserParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ImpalaSqlParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `tableName`
	 * labeled alternative in `ImpalaSqlParserParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableName?: (ctx: TableNameContext) => Result;

	/**
	 * Visit a parse tree produced by the `subqueryRelation`
	 * labeled alternative in `ImpalaSqlParserParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubqueryRelation?: (ctx: SubqueryRelationContext) => Result;

	/**
	 * Visit a parse tree produced by the `unnest`
	 * labeled alternative in `ImpalaSqlParserParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnnest?: (ctx: UnnestContext) => Result;

	/**
	 * Visit a parse tree produced by the `lateral`
	 * labeled alternative in `ImpalaSqlParserParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLateral?: (ctx: LateralContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenthesizedRelation`
	 * labeled alternative in `ImpalaSqlParserParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedRelation?: (ctx: ParenthesizedRelationContext) => Result;

	/**
	 * Visit a parse tree produced by the `joinRelation`
	 * labeled alternative in `ImpalaSqlParserParser.relation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinRelation?: (ctx: JoinRelationContext) => Result;

	/**
	 * Visit a parse tree produced by the `relationDefault`
	 * labeled alternative in `ImpalaSqlParserParser.relation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationDefault?: (ctx: RelationDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `comparison`
	 * labeled alternative in `ImpalaSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by the `quantifiedComparison`
	 * labeled alternative in `ImpalaSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantifiedComparison?: (ctx: QuantifiedComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by the `between`
	 * labeled alternative in `ImpalaSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBetween?: (ctx: BetweenContext) => Result;

	/**
	 * Visit a parse tree produced by the `inList`
	 * labeled alternative in `ImpalaSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInList?: (ctx: InListContext) => Result;

	/**
	 * Visit a parse tree produced by the `inSubquery`
	 * labeled alternative in `ImpalaSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInSubquery?: (ctx: InSubqueryContext) => Result;

	/**
	 * Visit a parse tree produced by the `like`
	 * labeled alternative in `ImpalaSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLike?: (ctx: LikeContext) => Result;

	/**
	 * Visit a parse tree produced by the `REGEXP`
	 * labeled alternative in `ImpalaSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitREGEXP?: (ctx: REGEXPContext) => Result;

	/**
	 * Visit a parse tree produced by the `nullPredicate`
	 * labeled alternative in `ImpalaSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullPredicate?: (ctx: NullPredicateContext) => Result;

	/**
	 * Visit a parse tree produced by the `distinctFrom`
	 * labeled alternative in `ImpalaSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDistinctFrom?: (ctx: DistinctFromContext) => Result;

	/**
	 * Visit a parse tree produced by the `decimalLiteral`
	 * labeled alternative in `ImpalaSqlParserParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimalLiteral?: (ctx: DecimalLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `doubleLiteral`
	 * labeled alternative in `ImpalaSqlParserParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoubleLiteral?: (ctx: DoubleLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `integerLiteral`
	 * labeled alternative in `ImpalaSqlParserParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerLiteral?: (ctx: IntegerLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `queryTermDefault`
	 * labeled alternative in `ImpalaSqlParserParser.queryTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryTermDefault?: (ctx: QueryTermDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `setOperation`
	 * labeled alternative in `ImpalaSqlParserParser.queryTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetOperation?: (ctx: SetOperationContext) => Result;

	/**
	 * Visit a parse tree produced by the `unquotedIdentifier`
	 * labeled alternative in `ImpalaSqlParserParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `quotedIdentifier`
	 * labeled alternative in `ImpalaSqlParserParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `backQuotedIdentifier`
	 * labeled alternative in `ImpalaSqlParserParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `digitIdentifier`
	 * labeled alternative in `ImpalaSqlParserParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDigitIdentifier?: (ctx: DigitIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `singleGroupingSet`
	 * labeled alternative in `ImpalaSqlParserParser.groupingElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleGroupingSet?: (ctx: SingleGroupingSetContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `ImpalaSqlParserParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `ImpalaSqlParserParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `ImpalaSqlParserParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `concatenation`
	 * labeled alternative in `ImpalaSqlParserParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConcatenation?: (ctx: ConcatenationContext) => Result;

	/**
	 * Visit a parse tree produced by the `basicStringLiteral`
	 * labeled alternative in `ImpalaSqlParserParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasicStringLiteral?: (ctx: BasicStringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `unicodeStringLiteral`
	 * labeled alternative in `ImpalaSqlParserParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnicodeStringLiteral?: (ctx: UnicodeStringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `rolePrincipal`
	 * labeled alternative in `ImpalaSqlParserParser.principal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRolePrincipal?: (ctx: RolePrincipalContext) => Result;

	/**
	 * Visit a parse tree produced by the `userPrincipal`
	 * labeled alternative in `ImpalaSqlParserParser.principal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUserPrincipal?: (ctx: UserPrincipalContext) => Result;

	/**
	 * Visit a parse tree produced by the `groupPrincipal`
	 * labeled alternative in `ImpalaSqlParserParser.principal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupPrincipal?: (ctx: GroupPrincipalContext) => Result;

	/**
	 * Visit a parse tree produced by the `unboundedFrame`
	 * labeled alternative in `ImpalaSqlParserParser.frameBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnboundedFrame?: (ctx: UnboundedFrameContext) => Result;

	/**
	 * Visit a parse tree produced by the `currentRowBound`
	 * labeled alternative in `ImpalaSqlParserParser.frameBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentRowBound?: (ctx: CurrentRowBoundContext) => Result;

	/**
	 * Visit a parse tree produced by the `boundedFrame`
	 * labeled alternative in `ImpalaSqlParserParser.frameBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoundedFrame?: (ctx: BoundedFrameContext) => Result;

	/**
	 * Visit a parse tree produced by the `statementDefault`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementDefault?: (ctx: StatementDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `use`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUse?: (ctx: UseContext) => Result;

	/**
	 * Visit a parse tree produced by the `createSchema`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateSchema?: (ctx: CreateSchemaContext) => Result;

	/**
	 * Visit a parse tree produced by the `alterSchema`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterSchema?: (ctx: AlterSchemaContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropSchema`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropSchema?: (ctx: DropSchemaContext) => Result;

	/**
	 * Visit a parse tree produced by the `createTableSelect`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTableSelect?: (ctx: CreateTableSelectContext) => Result;

	/**
	 * Visit a parse tree produced by the `createTableLike`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTableLike?: (ctx: CreateTableLikeContext) => Result;

	/**
	 * Visit a parse tree produced by the `createKuduTableAsSelect`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateKuduTableAsSelect?: (ctx: CreateKuduTableAsSelectContext) => Result;

	/**
	 * Visit a parse tree produced by the `renameTable`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameTable?: (ctx: RenameTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `addSingleColumn`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddSingleColumn?: (ctx: AddSingleColumnContext) => Result;

	/**
	 * Visit a parse tree produced by the `addColumns`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddColumns?: (ctx: AddColumnsContext) => Result;

	/**
	 * Visit a parse tree produced by the `replaceColumns`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplaceColumns?: (ctx: ReplaceColumnsContext) => Result;

	/**
	 * Visit a parse tree produced by the `editColumnDefine`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEditColumnDefine?: (ctx: EditColumnDefineContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropSingleColumn`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropSingleColumn?: (ctx: DropSingleColumnContext) => Result;

	/**
	 * Visit a parse tree produced by the `alterTableOwner`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTableOwner?: (ctx: AlterTableOwnerContext) => Result;

	/**
	 * Visit a parse tree produced by the `alterTableKuduOnly`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTableKuduOnly?: (ctx: AlterTableKuduOnlyContext) => Result;

	/**
	 * Visit a parse tree produced by the `alterTableNonKudu`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTableNonKudu?: (ctx: AlterTableNonKuduContext) => Result;

	/**
	 * Visit a parse tree produced by the `addPartitionByValue`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddPartitionByValue?: (ctx: AddPartitionByValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `addPartitionByRange`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddPartitionByRange?: (ctx: AddPartitionByRangeContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropPartitionByValue`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropPartitionByValue?: (ctx: DropPartitionByValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `recoverPartitions`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecoverPartitions?: (ctx: RecoverPartitionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `alterFormat`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterFormat?: (ctx: AlterFormatContext) => Result;

	/**
	 * Visit a parse tree produced by the `alterStatsKey`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatsKey?: (ctx: AlterStatsKeyContext) => Result;

	/**
	 * Visit a parse tree produced by the `alterPartitionCache`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterPartitionCache?: (ctx: AlterPartitionCacheContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropTable`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropTable?: (ctx: DropTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `truncateTable`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTruncateTable?: (ctx: TruncateTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `createView`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateView?: (ctx: CreateViewContext) => Result;

	/**
	 * Visit a parse tree produced by the `alterView`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterView?: (ctx: AlterViewContext) => Result;

	/**
	 * Visit a parse tree produced by the `renameView`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameView?: (ctx: RenameViewContext) => Result;

	/**
	 * Visit a parse tree produced by the `alterViewOwner`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterViewOwner?: (ctx: AlterViewOwnerContext) => Result;

	/**
	 * Visit a parse tree produced by the `alterSetViewTblproperties`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterSetViewTblproperties?: (ctx: AlterSetViewTblpropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by the `alterUnSetViewTblproperties`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterUnSetViewTblproperties?: (ctx: AlterUnSetViewTblpropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropView`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropView?: (ctx: DropViewContext) => Result;

	/**
	 * Visit a parse tree produced by the `describeDbOrTable`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescribeDbOrTable?: (ctx: DescribeDbOrTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `computeStats`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComputeStats?: (ctx: ComputeStatsContext) => Result;

	/**
	 * Visit a parse tree produced by the `computeIncrementalStats`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComputeIncrementalStats?: (ctx: ComputeIncrementalStatsContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropStats`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropStats?: (ctx: DropStatsContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropIncrementalStats`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropIncrementalStats?: (ctx: DropIncrementalStatsContext) => Result;

	/**
	 * Visit a parse tree produced by the `createFunction`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateFunction?: (ctx: CreateFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `refreshFunction`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefreshFunction?: (ctx: RefreshFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropFunction`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropFunction?: (ctx: DropFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `createRole`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateRole?: (ctx: CreateRoleContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropRole`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropRole?: (ctx: DropRoleContext) => Result;

	/**
	 * Visit a parse tree produced by the `grantRole`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrantRole?: (ctx: GrantRoleContext) => Result;

	/**
	 * Visit a parse tree produced by the `grant`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrant?: (ctx: GrantContext) => Result;

	/**
	 * Visit a parse tree produced by the `revoke`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRevoke?: (ctx: RevokeContext) => Result;

	/**
	 * Visit a parse tree produced by the `insertInto`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertInto?: (ctx: InsertIntoContext) => Result;

	/**
	 * Visit a parse tree produced by the `delete`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelete?: (ctx: DeleteContext) => Result;

	/**
	 * Visit a parse tree produced by the `deleteTableRef`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeleteTableRef?: (ctx: DeleteTableRefContext) => Result;

	/**
	 * Visit a parse tree produced by the `updateTable`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdateTable?: (ctx: UpdateTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `upsert`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpsert?: (ctx: UpsertContext) => Result;

	/**
	 * Visit a parse tree produced by the `showSchemas`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowSchemas?: (ctx: ShowSchemasContext) => Result;

	/**
	 * Visit a parse tree produced by the `showTables`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowTables?: (ctx: ShowTablesContext) => Result;

	/**
	 * Visit a parse tree produced by the `showFunctions`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowFunctions?: (ctx: ShowFunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `showCreateTable`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCreateTable?: (ctx: ShowCreateTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `showCreateView`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCreateView?: (ctx: ShowCreateViewContext) => Result;

	/**
	 * Visit a parse tree produced by the `showTableStats`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowTableStats?: (ctx: ShowTableStatsContext) => Result;

	/**
	 * Visit a parse tree produced by the `showColumnStats`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowColumnStats?: (ctx: ShowColumnStatsContext) => Result;

	/**
	 * Visit a parse tree produced by the `showPartitions`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowPartitions?: (ctx: ShowPartitionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `showFiles`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowFiles?: (ctx: ShowFilesContext) => Result;

	/**
	 * Visit a parse tree produced by the `showRoles`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowRoles?: (ctx: ShowRolesContext) => Result;

	/**
	 * Visit a parse tree produced by the `showRoleGrant`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowRoleGrant?: (ctx: ShowRoleGrantContext) => Result;

	/**
	 * Visit a parse tree produced by the `showGrantRole`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowGrantRole?: (ctx: ShowGrantRoleContext) => Result;

	/**
	 * Visit a parse tree produced by the `showGrantUser`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowGrantUser?: (ctx: ShowGrantUserContext) => Result;

	/**
	 * Visit a parse tree produced by the `addComments`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddComments?: (ctx: AddCommentsContext) => Result;

	/**
	 * Visit a parse tree produced by the `explain`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplain?: (ctx: ExplainContext) => Result;

	/**
	 * Visit a parse tree produced by the `setSession`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetSession?: (ctx: SetSessionContext) => Result;

	/**
	 * Visit a parse tree produced by the `shutdown`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShutdown?: (ctx: ShutdownContext) => Result;

	/**
	 * Visit a parse tree produced by the `invalidateMeta`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInvalidateMeta?: (ctx: InvalidateMetaContext) => Result;

	/**
	 * Visit a parse tree produced by the `loadData`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoadData?: (ctx: LoadDataContext) => Result;

	/**
	 * Visit a parse tree produced by the `refreshMeta`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefreshMeta?: (ctx: RefreshMetaContext) => Result;

	/**
	 * Visit a parse tree produced by the `refreshAuth`
	 * labeled alternative in `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefreshAuth?: (ctx: RefreshAuthContext) => Result;

	/**
	 * Visit a parse tree produced by the `queryPrimaryDefault`
	 * labeled alternative in `ImpalaSqlParserParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `table`
	 * labeled alternative in `ImpalaSqlParserParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable?: (ctx: TableContext) => Result;

	/**
	 * Visit a parse tree produced by the `inlineTable`
	 * labeled alternative in `ImpalaSqlParserParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineTable?: (ctx: InlineTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `subquery`
	 * labeled alternative in `ImpalaSqlParserParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubquery?: (ctx: SubqueryContext) => Result;

	/**
	 * Visit a parse tree produced by the `nullLiteral`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullLiteral?: (ctx: NullLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `intervalLiteral`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalLiteral?: (ctx: IntervalLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeConstructor`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeConstructor?: (ctx: TypeConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by the `numericLiteral`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericLiteral?: (ctx: NumericLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringLiteral`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `binaryLiteral`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryLiteral?: (ctx: BinaryLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `parameter`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;

	/**
	 * Visit a parse tree produced by the `position`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPosition?: (ctx: PositionContext) => Result;

	/**
	 * Visit a parse tree produced by the `rowConstructor`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowConstructor?: (ctx: RowConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionCall`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `lambda`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambda?: (ctx: LambdaContext) => Result;

	/**
	 * Visit a parse tree produced by the `subqueryExpression`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubqueryExpression?: (ctx: SubqueryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `exists`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExists?: (ctx: ExistsContext) => Result;

	/**
	 * Visit a parse tree produced by the `simpleCase`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleCase?: (ctx: SimpleCaseContext) => Result;

	/**
	 * Visit a parse tree produced by the `searchedCase`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearchedCase?: (ctx: SearchedCaseContext) => Result;

	/**
	 * Visit a parse tree produced by the `cast`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCast?: (ctx: CastContext) => Result;

	/**
	 * Visit a parse tree produced by the `arrayConstructor`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayConstructor?: (ctx: ArrayConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by the `subscript`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscript?: (ctx: SubscriptContext) => Result;

	/**
	 * Visit a parse tree produced by the `columnReference`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnReference?: (ctx: ColumnReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by the `dereference`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDereference?: (ctx: DereferenceContext) => Result;

	/**
	 * Visit a parse tree produced by the `specialDateTimeFunction`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecialDateTimeFunction?: (ctx: SpecialDateTimeFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `currentUser`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentUser?: (ctx: CurrentUserContext) => Result;

	/**
	 * Visit a parse tree produced by the `currentPath`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentPath?: (ctx: CurrentPathContext) => Result;

	/**
	 * Visit a parse tree produced by the `substring`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubstring?: (ctx: SubstringContext) => Result;

	/**
	 * Visit a parse tree produced by the `normalize`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalize?: (ctx: NormalizeContext) => Result;

	/**
	 * Visit a parse tree produced by the `extract`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtract?: (ctx: ExtractContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `groupingOperation`
	 * labeled alternative in `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingOperation?: (ctx: GroupingOperationContext) => Result;

	/**
	 * Visit a parse tree produced by the `selectSingle`
	 * labeled alternative in `ImpalaSqlParserParser.selectItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectSingle?: (ctx: SelectSingleContext) => Result;

	/**
	 * Visit a parse tree produced by the `selectAll`
	 * labeled alternative in `ImpalaSqlParserParser.selectItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectAll?: (ctx: SelectAllContext) => Result;

	/**
	 * Visit a parse tree produced by the `predicated`
	 * labeled alternative in `ImpalaSqlParserParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicated?: (ctx: PredicatedContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalNot`
	 * labeled alternative in `ImpalaSqlParserParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalNot?: (ctx: LogicalNotContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalBinary`
	 * labeled alternative in `ImpalaSqlParserParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalBinary?: (ctx: LogicalBinaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `qualifiedArgument`
	 * labeled alternative in `ImpalaSqlParserParser.pathElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedArgument?: (ctx: QualifiedArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by the `unqualifiedArgument`
	 * labeled alternative in `ImpalaSqlParserParser.pathElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnqualifiedArgument?: (ctx: UnqualifiedArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.createCommonItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateCommonItem?: (ctx: CreateCommonItemContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.assignmentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentList?: (ctx: AssignmentListContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.assignmentItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentItem?: (ctx: AssignmentItemContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.viewColumns`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewColumns?: (ctx: ViewColumnsContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery?: (ctx: QueryContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.with`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWith?: (ctx: WithContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.constraintSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraintSpecification?: (ctx: ConstraintSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.foreignKeySpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForeignKeySpecification?: (ctx: ForeignKeySpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.columnDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnDefinition?: (ctx: ColumnDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.kuduTableElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKuduTableElement?: (ctx: KuduTableElementContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.kuduColumnDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKuduColumnDefinition?: (ctx: KuduColumnDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.columnSpecWithKudu`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnSpecWithKudu?: (ctx: ColumnSpecWithKuduContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.kuduAttributes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKuduAttributes?: (ctx: KuduAttributesContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.kuduStorageAttr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKuduStorageAttr?: (ctx: KuduStorageAttrContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.statsKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatsKey?: (ctx: StatsKeyContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.fileFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFileFormat?: (ctx: FileFormatContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.kuduPartitionClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKuduPartitionClause?: (ctx: KuduPartitionClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.hashClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHashClause?: (ctx: HashClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.rangeClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRangeClause?: (ctx: RangeClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.kuduPartitionSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKuduPartitionSpec?: (ctx: KuduPartitionSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.cacheSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCacheSpec?: (ctx: CacheSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.rangeOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRangeOperator?: (ctx: RangeOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.partitionCol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionCol?: (ctx: PartitionColContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.likeClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLikeClause?: (ctx: LikeClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.hintClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHintClause?: (ctx: HintClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.properties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProperties?: (ctx: PropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.partitionedBy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionedBy?: (ctx: PartitionedByContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.sortedBy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSortedBy?: (ctx: SortedByContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.rowFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowFormat?: (ctx: RowFormatContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.property`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProperty?: (ctx: PropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.queryNoWith`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryNoWith?: (ctx: QueryNoWithContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.queryTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryTerm?: (ctx: QueryTermContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryPrimary?: (ctx: QueryPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.sortItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSortItem?: (ctx: SortItemContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.querySpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuerySpecification?: (ctx: QuerySpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.groupBy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupBy?: (ctx: GroupByContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.groupingElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingElement?: (ctx: GroupingElementContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.groupingSet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingSet?: (ctx: GroupingSetContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.namedQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedQuery?: (ctx: NamedQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.setQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetQuantifier?: (ctx: SetQuantifierContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.selectItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectItem?: (ctx: SelectItemContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.relation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelation?: (ctx: RelationContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.joinType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinType?: (ctx: JoinTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.joinCriteria`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinCriteria?: (ctx: JoinCriteriaContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.sampledRelation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSampledRelation?: (ctx: SampledRelationContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.sampleType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSampleType?: (ctx: SampleTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.aliasedRelation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAliasedRelation?: (ctx: AliasedRelationContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.columnAliases`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnAliases?: (ctx: ColumnAliasesContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationPrimary?: (ctx: RelationPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanExpression?: (ctx: BooleanExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicate?: (ctx: PredicateContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueExpression?: (ctx: ValueExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.comparisonOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.comparisonQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonQuantifier?: (ctx: ComparisonQuantifierContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.booleanValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanValue?: (ctx: BooleanValueContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.interval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterval?: (ctx: IntervalContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.intervalField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalField?: (ctx: IntervalFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.normalForm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalForm?: (ctx: NormalFormContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.typeParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameter?: (ctx: TypeParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.baseType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBaseType?: (ctx: BaseTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.whenClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenClause?: (ctx: WhenClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.filter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilter?: (ctx: FilterContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.over`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOver?: (ctx: OverContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.windowFrame`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowFrame?: (ctx: WindowFrameContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.frameBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrameBound?: (ctx: FrameBoundContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.pathElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPathElement?: (ctx: PathElementContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.pathSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPathSpecification?: (ctx: PathSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.privilege`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivilege?: (ctx: PrivilegeContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.objectType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectType?: (ctx: ObjectTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.principal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrincipal?: (ctx: PrincipalContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `ImpalaSqlParserParser.nonReserved`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonReserved?: (ctx: NonReservedContext) => Result;
}

