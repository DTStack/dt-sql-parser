// Generated from dt-sql-parser/src/grammar/generic/GenericSql.g4 by ANTLR 4.13.1

// @ts-nocheck

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


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
 * This interface defines a complete listener for a parse tree produced by
 * `GenericSqlParser`.
 */
export class GenericSqlListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `GenericSqlParser.program`.
     * @param ctx the parse tree
     */
    enterProgram?: (ctx: ProgramContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.program`.
     * @param ctx the parse tree
     */
    exitProgram?: (ctx: ProgramContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.statements`.
     * @param ctx the parse tree
     */
    enterStatements?: (ctx: StatementsContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.statements`.
     * @param ctx the parse tree
     */
    exitStatements?: (ctx: StatementsContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.singleStatement`.
     * @param ctx the parse tree
     */
    enterSingleStatement?: (ctx: SingleStatementContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.singleStatement`.
     * @param ctx the parse tree
     */
    exitSingleStatement?: (ctx: SingleStatementContext) => void;
    /**
     * Enter a parse tree produced by the `statementDefault`
     * labeled alternative in `GenericSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterStatementDefault?: (ctx: StatementDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `statementDefault`
     * labeled alternative in `GenericSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitStatementDefault?: (ctx: StatementDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `insert`
     * labeled alternative in `GenericSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterInsert?: (ctx: InsertContext) => void;
    /**
     * Exit a parse tree produced by the `insert`
     * labeled alternative in `GenericSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitInsert?: (ctx: InsertContext) => void;
    /**
     * Enter a parse tree produced by the `update`
     * labeled alternative in `GenericSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterUpdate?: (ctx: UpdateContext) => void;
    /**
     * Exit a parse tree produced by the `update`
     * labeled alternative in `GenericSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitUpdate?: (ctx: UpdateContext) => void;
    /**
     * Enter a parse tree produced by the `delete`
     * labeled alternative in `GenericSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDelete?: (ctx: DeleteContext) => void;
    /**
     * Exit a parse tree produced by the `delete`
     * labeled alternative in `GenericSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDelete?: (ctx: DeleteContext) => void;
    /**
     * Enter a parse tree produced by the `createTable`
     * labeled alternative in `GenericSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateTable?: (ctx: CreateTableContext) => void;
    /**
     * Exit a parse tree produced by the `createTable`
     * labeled alternative in `GenericSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateTable?: (ctx: CreateTableContext) => void;
    /**
     * Enter a parse tree produced by the `alterTable`
     * labeled alternative in `GenericSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterAlterTable?: (ctx: AlterTableContext) => void;
    /**
     * Exit a parse tree produced by the `alterTable`
     * labeled alternative in `GenericSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitAlterTable?: (ctx: AlterTableContext) => void;
    /**
     * Enter a parse tree produced by the `dropTable`
     * labeled alternative in `GenericSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDropTable?: (ctx: DropTableContext) => void;
    /**
     * Exit a parse tree produced by the `dropTable`
     * labeled alternative in `GenericSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDropTable?: (ctx: DropTableContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.queryStatement`.
     * @param ctx the parse tree
     */
    enterQueryStatement?: (ctx: QueryStatementContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.queryStatement`.
     * @param ctx the parse tree
     */
    exitQueryStatement?: (ctx: QueryStatementContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.withClause`.
     * @param ctx the parse tree
     */
    enterWithClause?: (ctx: WithClauseContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.withClause`.
     * @param ctx the parse tree
     */
    exitWithClause?: (ctx: WithClauseContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.namedQuery`.
     * @param ctx the parse tree
     */
    enterNamedQuery?: (ctx: NamedQueryContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.namedQuery`.
     * @param ctx the parse tree
     */
    exitNamedQuery?: (ctx: NamedQueryContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.queryNoWith`.
     * @param ctx the parse tree
     */
    enterQueryNoWith?: (ctx: QueryNoWithContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.queryNoWith`.
     * @param ctx the parse tree
     */
    exitQueryNoWith?: (ctx: QueryNoWithContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.queryTerm`.
     * @param ctx the parse tree
     */
    enterQueryTerm?: (ctx: QueryTermContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.queryTerm`.
     * @param ctx the parse tree
     */
    exitQueryTerm?: (ctx: QueryTermContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.queryPrimary`.
     * @param ctx the parse tree
     */
    enterQueryPrimary?: (ctx: QueryPrimaryContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.queryPrimary`.
     * @param ctx the parse tree
     */
    exitQueryPrimary?: (ctx: QueryPrimaryContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.querySpecification`.
     * @param ctx the parse tree
     */
    enterQuerySpecification?: (ctx: QuerySpecificationContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.querySpecification`.
     * @param ctx the parse tree
     */
    exitQuerySpecification?: (ctx: QuerySpecificationContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.setQuantifier`.
     * @param ctx the parse tree
     */
    enterSetQuantifier?: (ctx: SetQuantifierContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.setQuantifier`.
     * @param ctx the parse tree
     */
    exitSetQuantifier?: (ctx: SetQuantifierContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.selectItem`.
     * @param ctx the parse tree
     */
    enterSelectItem?: (ctx: SelectItemContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.selectItem`.
     * @param ctx the parse tree
     */
    exitSelectItem?: (ctx: SelectItemContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.fromClause`.
     * @param ctx the parse tree
     */
    enterFromClause?: (ctx: FromClauseContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.fromClause`.
     * @param ctx the parse tree
     */
    exitFromClause?: (ctx: FromClauseContext) => void;
    /**
     * Enter a parse tree produced by the `simpleRelation`
     * labeled alternative in `GenericSqlParser.relation`.
     * @param ctx the parse tree
     */
    enterSimpleRelation?: (ctx: SimpleRelationContext) => void;
    /**
     * Exit a parse tree produced by the `simpleRelation`
     * labeled alternative in `GenericSqlParser.relation`.
     * @param ctx the parse tree
     */
    exitSimpleRelation?: (ctx: SimpleRelationContext) => void;
    /**
     * Enter a parse tree produced by the `joinRelation`
     * labeled alternative in `GenericSqlParser.relation`.
     * @param ctx the parse tree
     */
    enterJoinRelation?: (ctx: JoinRelationContext) => void;
    /**
     * Exit a parse tree produced by the `joinRelation`
     * labeled alternative in `GenericSqlParser.relation`.
     * @param ctx the parse tree
     */
    exitJoinRelation?: (ctx: JoinRelationContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.joinType`.
     * @param ctx the parse tree
     */
    enterJoinType?: (ctx: JoinTypeContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.joinType`.
     * @param ctx the parse tree
     */
    exitJoinType?: (ctx: JoinTypeContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.aliasedRelation`.
     * @param ctx the parse tree
     */
    enterAliasedRelation?: (ctx: AliasedRelationContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.aliasedRelation`.
     * @param ctx the parse tree
     */
    exitAliasedRelation?: (ctx: AliasedRelationContext) => void;
    /**
     * Enter a parse tree produced by the `tableNameRelation`
     * labeled alternative in `GenericSqlParser.relationPrimary`.
     * @param ctx the parse tree
     */
    enterTableNameRelation?: (ctx: TableNameRelationContext) => void;
    /**
     * Exit a parse tree produced by the `tableNameRelation`
     * labeled alternative in `GenericSqlParser.relationPrimary`.
     * @param ctx the parse tree
     */
    exitTableNameRelation?: (ctx: TableNameRelationContext) => void;
    /**
     * Enter a parse tree produced by the `subqueryRelation`
     * labeled alternative in `GenericSqlParser.relationPrimary`.
     * @param ctx the parse tree
     */
    enterSubqueryRelation?: (ctx: SubqueryRelationContext) => void;
    /**
     * Exit a parse tree produced by the `subqueryRelation`
     * labeled alternative in `GenericSqlParser.relationPrimary`.
     * @param ctx the parse tree
     */
    exitSubqueryRelation?: (ctx: SubqueryRelationContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.whereClause`.
     * @param ctx the parse tree
     */
    enterWhereClause?: (ctx: WhereClauseContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.whereClause`.
     * @param ctx the parse tree
     */
    exitWhereClause?: (ctx: WhereClauseContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.groupByClause`.
     * @param ctx the parse tree
     */
    enterGroupByClause?: (ctx: GroupByClauseContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.groupByClause`.
     * @param ctx the parse tree
     */
    exitGroupByClause?: (ctx: GroupByClauseContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.havingClause`.
     * @param ctx the parse tree
     */
    enterHavingClause?: (ctx: HavingClauseContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.havingClause`.
     * @param ctx the parse tree
     */
    exitHavingClause?: (ctx: HavingClauseContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.orderByClause`.
     * @param ctx the parse tree
     */
    enterOrderByClause?: (ctx: OrderByClauseContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.orderByClause`.
     * @param ctx the parse tree
     */
    exitOrderByClause?: (ctx: OrderByClauseContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.sortItem`.
     * @param ctx the parse tree
     */
    enterSortItem?: (ctx: SortItemContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.sortItem`.
     * @param ctx the parse tree
     */
    exitSortItem?: (ctx: SortItemContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.limitClause`.
     * @param ctx the parse tree
     */
    enterLimitClause?: (ctx: LimitClauseContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.limitClause`.
     * @param ctx the parse tree
     */
    exitLimitClause?: (ctx: LimitClauseContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.insertStatement`.
     * @param ctx the parse tree
     */
    enterInsertStatement?: (ctx: InsertStatementContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.insertStatement`.
     * @param ctx the parse tree
     */
    exitInsertStatement?: (ctx: InsertStatementContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.columnList`.
     * @param ctx the parse tree
     */
    enterColumnList?: (ctx: ColumnListContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.columnList`.
     * @param ctx the parse tree
     */
    exitColumnList?: (ctx: ColumnListContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.updateStatement`.
     * @param ctx the parse tree
     */
    enterUpdateStatement?: (ctx: UpdateStatementContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.updateStatement`.
     * @param ctx the parse tree
     */
    exitUpdateStatement?: (ctx: UpdateStatementContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.updateAssignment`.
     * @param ctx the parse tree
     */
    enterUpdateAssignment?: (ctx: UpdateAssignmentContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.updateAssignment`.
     * @param ctx the parse tree
     */
    exitUpdateAssignment?: (ctx: UpdateAssignmentContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.deleteStatement`.
     * @param ctx the parse tree
     */
    enterDeleteStatement?: (ctx: DeleteStatementContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.deleteStatement`.
     * @param ctx the parse tree
     */
    exitDeleteStatement?: (ctx: DeleteStatementContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.createTableStatement`.
     * @param ctx the parse tree
     */
    enterCreateTableStatement?: (ctx: CreateTableStatementContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.createTableStatement`.
     * @param ctx the parse tree
     */
    exitCreateTableStatement?: (ctx: CreateTableStatementContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.tableElement`.
     * @param ctx the parse tree
     */
    enterTableElement?: (ctx: TableElementContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.tableElement`.
     * @param ctx the parse tree
     */
    exitTableElement?: (ctx: TableElementContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.columnDefinition`.
     * @param ctx the parse tree
     */
    enterColumnDefinition?: (ctx: ColumnDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.columnDefinition`.
     * @param ctx the parse tree
     */
    exitColumnDefinition?: (ctx: ColumnDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.tableConstraint`.
     * @param ctx the parse tree
     */
    enterTableConstraint?: (ctx: TableConstraintContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.tableConstraint`.
     * @param ctx the parse tree
     */
    exitTableConstraint?: (ctx: TableConstraintContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.alterTableStatement`.
     * @param ctx the parse tree
     */
    enterAlterTableStatement?: (ctx: AlterTableStatementContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.alterTableStatement`.
     * @param ctx the parse tree
     */
    exitAlterTableStatement?: (ctx: AlterTableStatementContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.dropTableStatement`.
     * @param ctx the parse tree
     */
    enterDropTableStatement?: (ctx: DropTableStatementContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.dropTableStatement`.
     * @param ctx the parse tree
     */
    exitDropTableStatement?: (ctx: DropTableStatementContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `orExpression`
     * labeled alternative in `GenericSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterOrExpression?: (ctx: OrExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `orExpression`
     * labeled alternative in `GenericSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitOrExpression?: (ctx: OrExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `andExpression`
     * labeled alternative in `GenericSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterAndExpression?: (ctx: AndExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `andExpression`
     * labeled alternative in `GenericSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitAndExpression?: (ctx: AndExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `predicated`
     * labeled alternative in `GenericSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterPredicated?: (ctx: PredicatedContext) => void;
    /**
     * Exit a parse tree produced by the `predicated`
     * labeled alternative in `GenericSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitPredicated?: (ctx: PredicatedContext) => void;
    /**
     * Enter a parse tree produced by the `notExpression`
     * labeled alternative in `GenericSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterNotExpression?: (ctx: NotExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `notExpression`
     * labeled alternative in `GenericSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitNotExpression?: (ctx: NotExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.predicatedExpression`.
     * @param ctx the parse tree
     */
    enterPredicatedExpression?: (ctx: PredicatedExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.predicatedExpression`.
     * @param ctx the parse tree
     */
    exitPredicatedExpression?: (ctx: PredicatedExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `comparisonPredicate`
     * labeled alternative in `GenericSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterComparisonPredicate?: (ctx: ComparisonPredicateContext) => void;
    /**
     * Exit a parse tree produced by the `comparisonPredicate`
     * labeled alternative in `GenericSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitComparisonPredicate?: (ctx: ComparisonPredicateContext) => void;
    /**
     * Enter a parse tree produced by the `inPredicate`
     * labeled alternative in `GenericSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterInPredicate?: (ctx: InPredicateContext) => void;
    /**
     * Exit a parse tree produced by the `inPredicate`
     * labeled alternative in `GenericSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitInPredicate?: (ctx: InPredicateContext) => void;
    /**
     * Enter a parse tree produced by the `inSubqueryPredicate`
     * labeled alternative in `GenericSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterInSubqueryPredicate?: (ctx: InSubqueryPredicateContext) => void;
    /**
     * Exit a parse tree produced by the `inSubqueryPredicate`
     * labeled alternative in `GenericSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitInSubqueryPredicate?: (ctx: InSubqueryPredicateContext) => void;
    /**
     * Enter a parse tree produced by the `betweenPredicate`
     * labeled alternative in `GenericSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterBetweenPredicate?: (ctx: BetweenPredicateContext) => void;
    /**
     * Exit a parse tree produced by the `betweenPredicate`
     * labeled alternative in `GenericSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitBetweenPredicate?: (ctx: BetweenPredicateContext) => void;
    /**
     * Enter a parse tree produced by the `likePredicate`
     * labeled alternative in `GenericSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterLikePredicate?: (ctx: LikePredicateContext) => void;
    /**
     * Exit a parse tree produced by the `likePredicate`
     * labeled alternative in `GenericSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitLikePredicate?: (ctx: LikePredicateContext) => void;
    /**
     * Enter a parse tree produced by the `nullPredicate`
     * labeled alternative in `GenericSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterNullPredicate?: (ctx: NullPredicateContext) => void;
    /**
     * Exit a parse tree produced by the `nullPredicate`
     * labeled alternative in `GenericSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitNullPredicate?: (ctx: NullPredicateContext) => void;
    /**
     * Enter a parse tree produced by the `distinctFromPredicate`
     * labeled alternative in `GenericSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterDistinctFromPredicate?: (ctx: DistinctFromPredicateContext) => void;
    /**
     * Exit a parse tree produced by the `distinctFromPredicate`
     * labeled alternative in `GenericSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitDistinctFromPredicate?: (ctx: DistinctFromPredicateContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Enter a parse tree produced by the `valueExpressionDefault`
     * labeled alternative in `GenericSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `valueExpressionDefault`
     * labeled alternative in `GenericSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `concatenation`
     * labeled alternative in `GenericSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterConcatenation?: (ctx: ConcatenationContext) => void;
    /**
     * Exit a parse tree produced by the `concatenation`
     * labeled alternative in `GenericSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitConcatenation?: (ctx: ConcatenationContext) => void;
    /**
     * Enter a parse tree produced by the `arithmeticBinary`
     * labeled alternative in `GenericSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
    /**
     * Exit a parse tree produced by the `arithmeticBinary`
     * labeled alternative in `GenericSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
    /**
     * Enter a parse tree produced by the `arithmeticUnary`
     * labeled alternative in `GenericSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
    /**
     * Exit a parse tree produced by the `arithmeticUnary`
     * labeled alternative in `GenericSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
    /**
     * Enter a parse tree produced by the `literalExpression`
     * labeled alternative in `GenericSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterLiteralExpression?: (ctx: LiteralExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `literalExpression`
     * labeled alternative in `GenericSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitLiteralExpression?: (ctx: LiteralExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `functionCall`
     * labeled alternative in `GenericSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `functionCall`
     * labeled alternative in `GenericSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `searchedCaseExpression`
     * labeled alternative in `GenericSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSearchedCaseExpression?: (ctx: SearchedCaseExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `searchedCaseExpression`
     * labeled alternative in `GenericSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSearchedCaseExpression?: (ctx: SearchedCaseExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `simpleCaseExpression`
     * labeled alternative in `GenericSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSimpleCaseExpression?: (ctx: SimpleCaseExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `simpleCaseExpression`
     * labeled alternative in `GenericSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSimpleCaseExpression?: (ctx: SimpleCaseExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `castExpression`
     * labeled alternative in `GenericSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCastExpression?: (ctx: CastExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `castExpression`
     * labeled alternative in `GenericSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCastExpression?: (ctx: CastExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `coalesceExpression`
     * labeled alternative in `GenericSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCoalesceExpression?: (ctx: CoalesceExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `coalesceExpression`
     * labeled alternative in `GenericSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCoalesceExpression?: (ctx: CoalesceExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `nullIfExpression`
     * labeled alternative in `GenericSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterNullIfExpression?: (ctx: NullIfExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `nullIfExpression`
     * labeled alternative in `GenericSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitNullIfExpression?: (ctx: NullIfExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `parenthesizedExpression`
     * labeled alternative in `GenericSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `parenthesizedExpression`
     * labeled alternative in `GenericSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `existsExpression`
     * labeled alternative in `GenericSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterExistsExpression?: (ctx: ExistsExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `existsExpression`
     * labeled alternative in `GenericSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitExistsExpression?: (ctx: ExistsExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `subqueryExpressionDefault`
     * labeled alternative in `GenericSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSubqueryExpressionDefault?: (ctx: SubqueryExpressionDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `subqueryExpressionDefault`
     * labeled alternative in `GenericSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSubqueryExpressionDefault?: (ctx: SubqueryExpressionDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `columnReference`
     * labeled alternative in `GenericSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterColumnReference?: (ctx: ColumnReferenceContext) => void;
    /**
     * Exit a parse tree produced by the `columnReference`
     * labeled alternative in `GenericSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitColumnReference?: (ctx: ColumnReferenceContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.whenClause`.
     * @param ctx the parse tree
     */
    enterWhenClause?: (ctx: WhenClauseContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.whenClause`.
     * @param ctx the parse tree
     */
    exitWhenClause?: (ctx: WhenClauseContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.subqueryExpression`.
     * @param ctx the parse tree
     */
    enterSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.subqueryExpression`.
     * @param ctx the parse tree
     */
    exitSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.dataType`.
     * @param ctx the parse tree
     */
    enterDataType?: (ctx: DataTypeContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.dataType`.
     * @param ctx the parse tree
     */
    exitDataType?: (ctx: DataTypeContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.properties`.
     * @param ctx the parse tree
     */
    enterProperties?: (ctx: PropertiesContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.properties`.
     * @param ctx the parse tree
     */
    exitProperties?: (ctx: PropertiesContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.property`.
     * @param ctx the parse tree
     */
    enterProperty?: (ctx: PropertyContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.property`.
     * @param ctx the parse tree
     */
    exitProperty?: (ctx: PropertyContext) => void;
    /**
     * Enter a parse tree produced by the `nullLiteral`
     * labeled alternative in `GenericSqlParser.literal`.
     * @param ctx the parse tree
     */
    enterNullLiteral?: (ctx: NullLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `nullLiteral`
     * labeled alternative in `GenericSqlParser.literal`.
     * @param ctx the parse tree
     */
    exitNullLiteral?: (ctx: NullLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `booleanLiteral`
     * labeled alternative in `GenericSqlParser.literal`.
     * @param ctx the parse tree
     */
    enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `booleanLiteral`
     * labeled alternative in `GenericSqlParser.literal`.
     * @param ctx the parse tree
     */
    exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `integerLiteral`
     * labeled alternative in `GenericSqlParser.literal`.
     * @param ctx the parse tree
     */
    enterIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `integerLiteral`
     * labeled alternative in `GenericSqlParser.literal`.
     * @param ctx the parse tree
     */
    exitIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `decimalLiteral`
     * labeled alternative in `GenericSqlParser.literal`.
     * @param ctx the parse tree
     */
    enterDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `decimalLiteral`
     * labeled alternative in `GenericSqlParser.literal`.
     * @param ctx the parse tree
     */
    exitDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `doubleLiteral`
     * labeled alternative in `GenericSqlParser.literal`.
     * @param ctx the parse tree
     */
    enterDoubleLiteral?: (ctx: DoubleLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `doubleLiteral`
     * labeled alternative in `GenericSqlParser.literal`.
     * @param ctx the parse tree
     */
    exitDoubleLiteral?: (ctx: DoubleLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `stringLiteral`
     * labeled alternative in `GenericSqlParser.literal`.
     * @param ctx the parse tree
     */
    enterStringLiteral?: (ctx: StringLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `stringLiteral`
     * labeled alternative in `GenericSqlParser.literal`.
     * @param ctx the parse tree
     */
    exitStringLiteral?: (ctx: StringLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `binaryLiteral`
     * labeled alternative in `GenericSqlParser.literal`.
     * @param ctx the parse tree
     */
    enterBinaryLiteral?: (ctx: BinaryLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `binaryLiteral`
     * labeled alternative in `GenericSqlParser.literal`.
     * @param ctx the parse tree
     */
    exitBinaryLiteral?: (ctx: BinaryLiteralContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.identifier`.
     * @param ctx the parse tree
     */
    enterIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.identifier`.
     * @param ctx the parse tree
     */
    exitIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.qualifiedName`.
     * @param ctx the parse tree
     */
    enterQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.qualifiedName`.
     * @param ctx the parse tree
     */
    exitQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.columnRef`.
     * @param ctx the parse tree
     */
    enterColumnRef?: (ctx: ColumnRefContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.columnRef`.
     * @param ctx the parse tree
     */
    exitColumnRef?: (ctx: ColumnRefContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.tableName`.
     * @param ctx the parse tree
     */
    enterTableName?: (ctx: TableNameContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.tableName`.
     * @param ctx the parse tree
     */
    exitTableName?: (ctx: TableNameContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.tableNameCreate`.
     * @param ctx the parse tree
     */
    enterTableNameCreate?: (ctx: TableNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.tableNameCreate`.
     * @param ctx the parse tree
     */
    exitTableNameCreate?: (ctx: TableNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `GenericSqlParser.nonReserved`.
     * @param ctx the parse tree
     */
    enterNonReserved?: (ctx: NonReservedContext) => void;
    /**
     * Exit a parse tree produced by `GenericSqlParser.nonReserved`.
     * @param ctx the parse tree
     */
    exitNonReserved?: (ctx: NonReservedContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

