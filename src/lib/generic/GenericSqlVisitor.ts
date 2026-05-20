// Generated from dt-sql-parser/src/grammar/generic/GenericSql.g4 by ANTLR 4.13.1

// @ts-nocheck

import { AbstractParseTreeVisitor } from "antlr4ng";


import { SQLParserBase } from '../SQLParserBase';


import { ProgramContext } from "./GenericSqlParser.js";
import { StatementsContext } from "./GenericSqlParser.js";
import { SingleStatementContext } from "./GenericSqlParser.js";
import { StatementDefaultContext } from "./GenericSqlParser.js";
import { InsertContext } from "./GenericSqlParser.js";
import { UpdateContext } from "./GenericSqlParser.js";
import { DeleteContext } from "./GenericSqlParser.js";
import { CreateTableContext } from "./GenericSqlParser.js";
import { AlterTableContext } from "./GenericSqlParser.js";
import { DropTableContext } from "./GenericSqlParser.js";
import { QueryStatementContext } from "./GenericSqlParser.js";
import { WithClauseContext } from "./GenericSqlParser.js";
import { NamedQueryContext } from "./GenericSqlParser.js";
import { QueryNoWithContext } from "./GenericSqlParser.js";
import { QueryTermContext } from "./GenericSqlParser.js";
import { QueryPrimaryContext } from "./GenericSqlParser.js";
import { QuerySpecificationContext } from "./GenericSqlParser.js";
import { SetQuantifierContext } from "./GenericSqlParser.js";
import { SelectItemContext } from "./GenericSqlParser.js";
import { FromClauseContext } from "./GenericSqlParser.js";
import { SimpleRelationContext } from "./GenericSqlParser.js";
import { JoinRelationContext } from "./GenericSqlParser.js";
import { JoinTypeContext } from "./GenericSqlParser.js";
import { AliasedRelationContext } from "./GenericSqlParser.js";
import { TableNameRelationContext } from "./GenericSqlParser.js";
import { SubqueryRelationContext } from "./GenericSqlParser.js";
import { WhereClauseContext } from "./GenericSqlParser.js";
import { GroupByClauseContext } from "./GenericSqlParser.js";
import { HavingClauseContext } from "./GenericSqlParser.js";
import { OrderByClauseContext } from "./GenericSqlParser.js";
import { SortItemContext } from "./GenericSqlParser.js";
import { LimitClauseContext } from "./GenericSqlParser.js";
import { InsertStatementContext } from "./GenericSqlParser.js";
import { ColumnListContext } from "./GenericSqlParser.js";
import { UpdateStatementContext } from "./GenericSqlParser.js";
import { UpdateAssignmentContext } from "./GenericSqlParser.js";
import { DeleteStatementContext } from "./GenericSqlParser.js";
import { CreateTableStatementContext } from "./GenericSqlParser.js";
import { TableElementContext } from "./GenericSqlParser.js";
import { ColumnDefinitionContext } from "./GenericSqlParser.js";
import { TableConstraintContext } from "./GenericSqlParser.js";
import { AlterTableStatementContext } from "./GenericSqlParser.js";
import { DropTableStatementContext } from "./GenericSqlParser.js";
import { ExpressionContext } from "./GenericSqlParser.js";
import { OrExpressionContext } from "./GenericSqlParser.js";
import { AndExpressionContext } from "./GenericSqlParser.js";
import { PredicatedContext } from "./GenericSqlParser.js";
import { NotExpressionContext } from "./GenericSqlParser.js";
import { PredicatedExpressionContext } from "./GenericSqlParser.js";
import { ComparisonPredicateContext } from "./GenericSqlParser.js";
import { InPredicateContext } from "./GenericSqlParser.js";
import { InSubqueryPredicateContext } from "./GenericSqlParser.js";
import { BetweenPredicateContext } from "./GenericSqlParser.js";
import { LikePredicateContext } from "./GenericSqlParser.js";
import { NullPredicateContext } from "./GenericSqlParser.js";
import { DistinctFromPredicateContext } from "./GenericSqlParser.js";
import { ComparisonOperatorContext } from "./GenericSqlParser.js";
import { ValueExpressionDefaultContext } from "./GenericSqlParser.js";
import { ConcatenationContext } from "./GenericSqlParser.js";
import { ArithmeticBinaryContext } from "./GenericSqlParser.js";
import { ArithmeticUnaryContext } from "./GenericSqlParser.js";
import { LiteralExpressionContext } from "./GenericSqlParser.js";
import { FunctionCallContext } from "./GenericSqlParser.js";
import { SearchedCaseExpressionContext } from "./GenericSqlParser.js";
import { SimpleCaseExpressionContext } from "./GenericSqlParser.js";
import { CastExpressionContext } from "./GenericSqlParser.js";
import { CoalesceExpressionContext } from "./GenericSqlParser.js";
import { NullIfExpressionContext } from "./GenericSqlParser.js";
import { ParenthesizedExpressionContext } from "./GenericSqlParser.js";
import { ExistsExpressionContext } from "./GenericSqlParser.js";
import { SubqueryExpressionDefaultContext } from "./GenericSqlParser.js";
import { ColumnReferenceContext } from "./GenericSqlParser.js";
import { WhenClauseContext } from "./GenericSqlParser.js";
import { SubqueryExpressionContext } from "./GenericSqlParser.js";
import { DataTypeContext } from "./GenericSqlParser.js";
import { PropertiesContext } from "./GenericSqlParser.js";
import { PropertyContext } from "./GenericSqlParser.js";
import { NullLiteralContext } from "./GenericSqlParser.js";
import { BooleanLiteralContext } from "./GenericSqlParser.js";
import { IntegerLiteralContext } from "./GenericSqlParser.js";
import { DecimalLiteralContext } from "./GenericSqlParser.js";
import { DoubleLiteralContext } from "./GenericSqlParser.js";
import { StringLiteralContext } from "./GenericSqlParser.js";
import { BinaryLiteralContext } from "./GenericSqlParser.js";
import { IdentifierContext } from "./GenericSqlParser.js";
import { QualifiedNameContext } from "./GenericSqlParser.js";
import { ColumnRefContext } from "./GenericSqlParser.js";
import { TableNameContext } from "./GenericSqlParser.js";
import { TableNameCreateContext } from "./GenericSqlParser.js";
import { NonReservedContext } from "./GenericSqlParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `GenericSqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class GenericSqlVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `GenericSqlParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.statements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatements?: (ctx: StatementsContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.singleStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingleStatement?: (ctx: SingleStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `statementDefault`
     * labeled alternative in `GenericSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatementDefault?: (ctx: StatementDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `insert`
     * labeled alternative in `GenericSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsert?: (ctx: InsertContext) => Result;
    /**
     * Visit a parse tree produced by the `update`
     * labeled alternative in `GenericSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdate?: (ctx: UpdateContext) => Result;
    /**
     * Visit a parse tree produced by the `delete`
     * labeled alternative in `GenericSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDelete?: (ctx: DeleteContext) => Result;
    /**
     * Visit a parse tree produced by the `createTable`
     * labeled alternative in `GenericSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTable?: (ctx: CreateTableContext) => Result;
    /**
     * Visit a parse tree produced by the `alterTable`
     * labeled alternative in `GenericSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTable?: (ctx: AlterTableContext) => Result;
    /**
     * Visit a parse tree produced by the `dropTable`
     * labeled alternative in `GenericSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropTable?: (ctx: DropTableContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.queryStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryStatement?: (ctx: QueryStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.withClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWithClause?: (ctx: WithClauseContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.namedQuery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedQuery?: (ctx: NamedQueryContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.queryNoWith`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryNoWith?: (ctx: QueryNoWithContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.queryTerm`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryTerm?: (ctx: QueryTermContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.queryPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryPrimary?: (ctx: QueryPrimaryContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.querySpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuerySpecification?: (ctx: QuerySpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.setQuantifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetQuantifier?: (ctx: SetQuantifierContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.selectItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectItem?: (ctx: SelectItemContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.fromClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFromClause?: (ctx: FromClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `simpleRelation`
     * labeled alternative in `GenericSqlParser.relation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleRelation?: (ctx: SimpleRelationContext) => Result;
    /**
     * Visit a parse tree produced by the `joinRelation`
     * labeled alternative in `GenericSqlParser.relation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinRelation?: (ctx: JoinRelationContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.joinType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinType?: (ctx: JoinTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.aliasedRelation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAliasedRelation?: (ctx: AliasedRelationContext) => Result;
    /**
     * Visit a parse tree produced by the `tableNameRelation`
     * labeled alternative in `GenericSqlParser.relationPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableNameRelation?: (ctx: TableNameRelationContext) => Result;
    /**
     * Visit a parse tree produced by the `subqueryRelation`
     * labeled alternative in `GenericSqlParser.relationPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubqueryRelation?: (ctx: SubqueryRelationContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.whereClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhereClause?: (ctx: WhereClauseContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.groupByClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupByClause?: (ctx: GroupByClauseContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.havingClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHavingClause?: (ctx: HavingClauseContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.orderByClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderByClause?: (ctx: OrderByClauseContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.sortItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSortItem?: (ctx: SortItemContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.limitClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLimitClause?: (ctx: LimitClauseContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.insertStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertStatement?: (ctx: InsertStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.columnList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnList?: (ctx: ColumnListContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.updateStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdateStatement?: (ctx: UpdateStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.updateAssignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdateAssignment?: (ctx: UpdateAssignmentContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.deleteStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeleteStatement?: (ctx: DeleteStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.createTableStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTableStatement?: (ctx: CreateTableStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.tableElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableElement?: (ctx: TableElementContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.columnDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnDefinition?: (ctx: ColumnDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.tableConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableConstraint?: (ctx: TableConstraintContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.alterTableStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTableStatement?: (ctx: AlterTableStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.dropTableStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropTableStatement?: (ctx: DropTableStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `orExpression`
     * labeled alternative in `GenericSqlParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrExpression?: (ctx: OrExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `andExpression`
     * labeled alternative in `GenericSqlParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAndExpression?: (ctx: AndExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `predicated`
     * labeled alternative in `GenericSqlParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicated?: (ctx: PredicatedContext) => Result;
    /**
     * Visit a parse tree produced by the `notExpression`
     * labeled alternative in `GenericSqlParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotExpression?: (ctx: NotExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.predicatedExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicatedExpression?: (ctx: PredicatedExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `comparisonPredicate`
     * labeled alternative in `GenericSqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparisonPredicate?: (ctx: ComparisonPredicateContext) => Result;
    /**
     * Visit a parse tree produced by the `inPredicate`
     * labeled alternative in `GenericSqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInPredicate?: (ctx: InPredicateContext) => Result;
    /**
     * Visit a parse tree produced by the `inSubqueryPredicate`
     * labeled alternative in `GenericSqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInSubqueryPredicate?: (ctx: InSubqueryPredicateContext) => Result;
    /**
     * Visit a parse tree produced by the `betweenPredicate`
     * labeled alternative in `GenericSqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBetweenPredicate?: (ctx: BetweenPredicateContext) => Result;
    /**
     * Visit a parse tree produced by the `likePredicate`
     * labeled alternative in `GenericSqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLikePredicate?: (ctx: LikePredicateContext) => Result;
    /**
     * Visit a parse tree produced by the `nullPredicate`
     * labeled alternative in `GenericSqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNullPredicate?: (ctx: NullPredicateContext) => Result;
    /**
     * Visit a parse tree produced by the `distinctFromPredicate`
     * labeled alternative in `GenericSqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDistinctFromPredicate?: (ctx: DistinctFromPredicateContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.comparisonOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;
    /**
     * Visit a parse tree produced by the `valueExpressionDefault`
     * labeled alternative in `GenericSqlParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `concatenation`
     * labeled alternative in `GenericSqlParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConcatenation?: (ctx: ConcatenationContext) => Result;
    /**
     * Visit a parse tree produced by the `arithmeticBinary`
     * labeled alternative in `GenericSqlParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => Result;
    /**
     * Visit a parse tree produced by the `arithmeticUnary`
     * labeled alternative in `GenericSqlParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => Result;
    /**
     * Visit a parse tree produced by the `literalExpression`
     * labeled alternative in `GenericSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteralExpression?: (ctx: LiteralExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `functionCall`
     * labeled alternative in `GenericSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionCall?: (ctx: FunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by the `searchedCaseExpression`
     * labeled alternative in `GenericSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSearchedCaseExpression?: (ctx: SearchedCaseExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `simpleCaseExpression`
     * labeled alternative in `GenericSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleCaseExpression?: (ctx: SimpleCaseExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `castExpression`
     * labeled alternative in `GenericSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCastExpression?: (ctx: CastExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `coalesceExpression`
     * labeled alternative in `GenericSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCoalesceExpression?: (ctx: CoalesceExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `nullIfExpression`
     * labeled alternative in `GenericSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNullIfExpression?: (ctx: NullIfExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `parenthesizedExpression`
     * labeled alternative in `GenericSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `existsExpression`
     * labeled alternative in `GenericSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExistsExpression?: (ctx: ExistsExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `subqueryExpressionDefault`
     * labeled alternative in `GenericSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubqueryExpressionDefault?: (ctx: SubqueryExpressionDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `columnReference`
     * labeled alternative in `GenericSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnReference?: (ctx: ColumnReferenceContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.whenClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhenClause?: (ctx: WhenClauseContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.subqueryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubqueryExpression?: (ctx: SubqueryExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.dataType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDataType?: (ctx: DataTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProperties?: (ctx: PropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProperty?: (ctx: PropertyContext) => Result;
    /**
     * Visit a parse tree produced by the `nullLiteral`
     * labeled alternative in `GenericSqlParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNullLiteral?: (ctx: NullLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `booleanLiteral`
     * labeled alternative in `GenericSqlParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `integerLiteral`
     * labeled alternative in `GenericSqlParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntegerLiteral?: (ctx: IntegerLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `decimalLiteral`
     * labeled alternative in `GenericSqlParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecimalLiteral?: (ctx: DecimalLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `doubleLiteral`
     * labeled alternative in `GenericSqlParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDoubleLiteral?: (ctx: DoubleLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `stringLiteral`
     * labeled alternative in `GenericSqlParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringLiteral?: (ctx: StringLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `binaryLiteral`
     * labeled alternative in `GenericSqlParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBinaryLiteral?: (ctx: BinaryLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifier?: (ctx: IdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.qualifiedName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedName?: (ctx: QualifiedNameContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.columnRef`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnRef?: (ctx: ColumnRefContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.tableName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableName?: (ctx: TableNameContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.tableNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableNameCreate?: (ctx: TableNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `GenericSqlParser.nonReserved`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonReserved?: (ctx: NonReservedContext) => Result;
}

