// Generated from dt-sql-parser/src/grammar/impala/ImpalaSqlParser.g4 by ANTLR 4.13.1

// @ts-nocheck

import { AbstractParseTreeVisitor } from "antlr4ng";


import { SQLParserBase } from '../SQLParserBase';


import { ProgramContext } from "./ImpalaSqlParser.js";
import { SingleStatementContext } from "./ImpalaSqlParser.js";
import { SqlStatementContext } from "./ImpalaSqlParser.js";
import { UseStatementContext } from "./ImpalaSqlParser.js";
import { CreateStatementContext } from "./ImpalaSqlParser.js";
import { CreateTableSelectContext } from "./ImpalaSqlParser.js";
import { CreateTableLikeContext } from "./ImpalaSqlParser.js";
import { CreateKuduTableAsSelectContext } from "./ImpalaSqlParser.js";
import { CreateViewContext } from "./ImpalaSqlParser.js";
import { CreateSchemaContext } from "./ImpalaSqlParser.js";
import { CreateRoleContext } from "./ImpalaSqlParser.js";
import { CreateAggregateFunctionContext } from "./ImpalaSqlParser.js";
import { CreateFunctionContext } from "./ImpalaSqlParser.js";
import { AlterStatementContext } from "./ImpalaSqlParser.js";
import { AlterDatabaseContext } from "./ImpalaSqlParser.js";
import { AlterStatsKeyContext } from "./ImpalaSqlParser.js";
import { AlterPartitionCacheContext } from "./ImpalaSqlParser.js";
import { ChangeColumnDefineContext } from "./ImpalaSqlParser.js";
import { AlterDropSingleColumnContext } from "./ImpalaSqlParser.js";
import { AlterTableOwnerContext } from "./ImpalaSqlParser.js";
import { ReplaceOrAddColumnsContext } from "./ImpalaSqlParser.js";
import { AddSingleColumnContext } from "./ImpalaSqlParser.js";
import { AlterTableNonKuduOrKuduOnlyContext } from "./ImpalaSqlParser.js";
import { AddPartitionByRangeOrValueContext } from "./ImpalaSqlParser.js";
import { AlterFormatContext } from "./ImpalaSqlParser.js";
import { RecoverPartitionsContext } from "./ImpalaSqlParser.js";
import { DropPartitionByRangeOrValueContext } from "./ImpalaSqlParser.js";
import { AlterViewContext } from "./ImpalaSqlParser.js";
import { RenameViewContext } from "./ImpalaSqlParser.js";
import { AlterViewOwnerContext } from "./ImpalaSqlParser.js";
import { RenameTableContext } from "./ImpalaSqlParser.js";
import { AlterUnSetOrSetViewTblPropertiesContext } from "./ImpalaSqlParser.js";
import { TruncateTableStatementContext } from "./ImpalaSqlParser.js";
import { DescribeStatementContext } from "./ImpalaSqlParser.js";
import { ComputeStatementContext } from "./ImpalaSqlParser.js";
import { ComputeStatsContext } from "./ImpalaSqlParser.js";
import { ComputeIncrementalStatsContext } from "./ImpalaSqlParser.js";
import { DropStatementContext } from "./ImpalaSqlParser.js";
import { DropSchemaContext } from "./ImpalaSqlParser.js";
import { DropViewContext } from "./ImpalaSqlParser.js";
import { DropTableContext } from "./ImpalaSqlParser.js";
import { DropIncrementalStatsContext } from "./ImpalaSqlParser.js";
import { DropFunctionContext } from "./ImpalaSqlParser.js";
import { DropRoleContext } from "./ImpalaSqlParser.js";
import { GrantStatementContext } from "./ImpalaSqlParser.js";
import { GrantRoleContext } from "./ImpalaSqlParser.js";
import { GrantContext } from "./ImpalaSqlParser.js";
import { RevokeStatementContext } from "./ImpalaSqlParser.js";
import { RevokeRoleContext } from "./ImpalaSqlParser.js";
import { RevokeContext } from "./ImpalaSqlParser.js";
import { InsertStatementContext } from "./ImpalaSqlParser.js";
import { DeleteStatementContext } from "./ImpalaSqlParser.js";
import { DeleteContext } from "./ImpalaSqlParser.js";
import { DeleteTableRefContext } from "./ImpalaSqlParser.js";
import { UpdateStatementContext } from "./ImpalaSqlParser.js";
import { UpsertStatementContext } from "./ImpalaSqlParser.js";
import { ShowStatementContext } from "./ImpalaSqlParser.js";
import { ShowSchemasContext } from "./ImpalaSqlParser.js";
import { ShowTablesContext } from "./ImpalaSqlParser.js";
import { ShowFunctionsContext } from "./ImpalaSqlParser.js";
import { ShowCreateTableContext } from "./ImpalaSqlParser.js";
import { ShowCreateViewContext } from "./ImpalaSqlParser.js";
import { ShowTableStatsContext } from "./ImpalaSqlParser.js";
import { ShowColumnStatsContext } from "./ImpalaSqlParser.js";
import { ShowPartitionsContext } from "./ImpalaSqlParser.js";
import { ShowFilesContext } from "./ImpalaSqlParser.js";
import { ShowRolesContext } from "./ImpalaSqlParser.js";
import { ShowRoleGrantContext } from "./ImpalaSqlParser.js";
import { ShowGrantsContext } from "./ImpalaSqlParser.js";
import { ShowDatabaseGrantContext } from "./ImpalaSqlParser.js";
import { ShowTableGrantContext } from "./ImpalaSqlParser.js";
import { ShowColumnGrantContext } from "./ImpalaSqlParser.js";
import { AddCommentStatementContext } from "./ImpalaSqlParser.js";
import { AddDatabaseCommentsContext } from "./ImpalaSqlParser.js";
import { AddTableCommentsContext } from "./ImpalaSqlParser.js";
import { AddColumnCommentsContext } from "./ImpalaSqlParser.js";
import { ExplainStatementContext } from "./ImpalaSqlParser.js";
import { SetStatementContext } from "./ImpalaSqlParser.js";
import { ShutdownStatementContext } from "./ImpalaSqlParser.js";
import { InvalidateMetaStatementContext } from "./ImpalaSqlParser.js";
import { LoadDataStatementContext } from "./ImpalaSqlParser.js";
import { RefreshStatementContext } from "./ImpalaSqlParser.js";
import { RefreshMetaContext } from "./ImpalaSqlParser.js";
import { RefreshAuthContext } from "./ImpalaSqlParser.js";
import { RefreshFunctionContext } from "./ImpalaSqlParser.js";
import { IfExistsContext } from "./ImpalaSqlParser.js";
import { IfNotExistsContext } from "./ImpalaSqlParser.js";
import { TableNameCreateContext } from "./ImpalaSqlParser.js";
import { DatabaseNameCreateContext } from "./ImpalaSqlParser.js";
import { ViewNameCreateContext } from "./ImpalaSqlParser.js";
import { FunctionNameCreateContext } from "./ImpalaSqlParser.js";
import { ColumnNamePathCreateContext } from "./ImpalaSqlParser.js";
import { DatabaseNamePathContext } from "./ImpalaSqlParser.js";
import { TableNamePathContext } from "./ImpalaSqlParser.js";
import { ViewNamePathContext } from "./ImpalaSqlParser.js";
import { FunctionNamePathContext } from "./ImpalaSqlParser.js";
import { ColumnNamePathContext } from "./ImpalaSqlParser.js";
import { ColumnNameContext } from "./ImpalaSqlParser.js";
import { TableOrViewPathContext } from "./ImpalaSqlParser.js";
import { CreateCommonItemContext } from "./ImpalaSqlParser.js";
import { AssignmentListContext } from "./ImpalaSqlParser.js";
import { AssignmentItemContext } from "./ImpalaSqlParser.js";
import { ViewColumnsContext } from "./ImpalaSqlParser.js";
import { ViewColumnItemContext } from "./ImpalaSqlParser.js";
import { QueryStatementContext } from "./ImpalaSqlParser.js";
import { WithContext } from "./ImpalaSqlParser.js";
import { ConstraintSpecificationContext } from "./ImpalaSqlParser.js";
import { ForeignKeySpecificationContext } from "./ImpalaSqlParser.js";
import { ColumnSpecContext } from "./ImpalaSqlParser.js";
import { ColumnDefinitionContext } from "./ImpalaSqlParser.js";
import { KuduTableElementContext } from "./ImpalaSqlParser.js";
import { KuduColumnDefinitionContext } from "./ImpalaSqlParser.js";
import { CommentClauseContext } from "./ImpalaSqlParser.js";
import { ColumnSpecWithKuduContext } from "./ImpalaSqlParser.js";
import { CreateColumnSpecWithKuduContext } from "./ImpalaSqlParser.js";
import { KuduAttributesContext } from "./ImpalaSqlParser.js";
import { KuduStorageAttrContext } from "./ImpalaSqlParser.js";
import { StatsKeyContext } from "./ImpalaSqlParser.js";
import { FileFormatContext } from "./ImpalaSqlParser.js";
import { KuduPartitionClauseContext } from "./ImpalaSqlParser.js";
import { HashClauseContext } from "./ImpalaSqlParser.js";
import { RangeClauseContext } from "./ImpalaSqlParser.js";
import { KuduPartitionSpecContext } from "./ImpalaSqlParser.js";
import { CacheSpecContext } from "./ImpalaSqlParser.js";
import { RangeOperatorContext } from "./ImpalaSqlParser.js";
import { PartitionColContext } from "./ImpalaSqlParser.js";
import { LikeClauseContext } from "./ImpalaSqlParser.js";
import { PropertiesContext } from "./ImpalaSqlParser.js";
import { PartitionedByContext } from "./ImpalaSqlParser.js";
import { SortedByContext } from "./ImpalaSqlParser.js";
import { RowFormatContext } from "./ImpalaSqlParser.js";
import { PropertyContext } from "./ImpalaSqlParser.js";
import { QueryNoWithContext } from "./ImpalaSqlParser.js";
import { QueryTermDefaultContext } from "./ImpalaSqlParser.js";
import { SetOperationContext } from "./ImpalaSqlParser.js";
import { QueryPrimaryDefaultContext } from "./ImpalaSqlParser.js";
import { TableContext } from "./ImpalaSqlParser.js";
import { InlineTableContext } from "./ImpalaSqlParser.js";
import { SubqueryContext } from "./ImpalaSqlParser.js";
import { SortItemContext } from "./ImpalaSqlParser.js";
import { QuerySpecificationContext } from "./ImpalaSqlParser.js";
import { SelectListContext } from "./ImpalaSqlParser.js";
import { WhereClauseContext } from "./ImpalaSqlParser.js";
import { HavingClauseContext } from "./ImpalaSqlParser.js";
import { GroupByContext } from "./ImpalaSqlParser.js";
import { SingleGroupingSetContext } from "./ImpalaSqlParser.js";
import { GroupingSetContext } from "./ImpalaSqlParser.js";
import { NamedQueryContext } from "./ImpalaSqlParser.js";
import { SetQuantifierContext } from "./ImpalaSqlParser.js";
import { SelectItemContext } from "./ImpalaSqlParser.js";
import { ColumnAliasContext } from "./ImpalaSqlParser.js";
import { SelectLiteralColumnNameContext } from "./ImpalaSqlParser.js";
import { SelectExpressionColumnNameContext } from "./ImpalaSqlParser.js";
import { TableAllColumnsContext } from "./ImpalaSqlParser.js";
import { RelationDefaultContext } from "./ImpalaSqlParser.js";
import { JoinRelationContext } from "./ImpalaSqlParser.js";
import { JoinTypeContext } from "./ImpalaSqlParser.js";
import { JoinCriteriaContext } from "./ImpalaSqlParser.js";
import { SampledRelationContext } from "./ImpalaSqlParser.js";
import { SampleTypeContext } from "./ImpalaSqlParser.js";
import { AliasedRelationContext } from "./ImpalaSqlParser.js";
import { ColumnAliasesContext } from "./ImpalaSqlParser.js";
import { RelationPrimaryContext } from "./ImpalaSqlParser.js";
import { AtomSubQueryTableSourceContext } from "./ImpalaSqlParser.js";
import { SubQueryRelationContext } from "./ImpalaSqlParser.js";
import { UnnestContext } from "./ImpalaSqlParser.js";
import { ParenthesizedRelationContext } from "./ImpalaSqlParser.js";
import { ColumnItemContext } from "./ImpalaSqlParser.js";
import { ExpressionContext } from "./ImpalaSqlParser.js";
import { LogicalNotContext } from "./ImpalaSqlParser.js";
import { PredicatedContext } from "./ImpalaSqlParser.js";
import { LogicalBinaryContext } from "./ImpalaSqlParser.js";
import { ComparisonContext } from "./ImpalaSqlParser.js";
import { QuantifiedComparisonContext } from "./ImpalaSqlParser.js";
import { BetweenContext } from "./ImpalaSqlParser.js";
import { InListContext } from "./ImpalaSqlParser.js";
import { InSubqueryContext } from "./ImpalaSqlParser.js";
import { LikeContext } from "./ImpalaSqlParser.js";
import { REGEXPContext } from "./ImpalaSqlParser.js";
import { NullOrUnKnownOrBooleanPredicateContext } from "./ImpalaSqlParser.js";
import { DistinctFromContext } from "./ImpalaSqlParser.js";
import { ValueExpressionDefaultContext } from "./ImpalaSqlParser.js";
import { ConcatenationContext } from "./ImpalaSqlParser.js";
import { ArithmeticBinaryContext } from "./ImpalaSqlParser.js";
import { ArithmeticUnaryContext } from "./ImpalaSqlParser.js";
import { DereferenceContext } from "./ImpalaSqlParser.js";
import { TypeConstructorContext } from "./ImpalaSqlParser.js";
import { SpecialDateTimeFunctionContext } from "./ImpalaSqlParser.js";
import { SubstringContext } from "./ImpalaSqlParser.js";
import { CastContext } from "./ImpalaSqlParser.js";
import { LambdaContext } from "./ImpalaSqlParser.js";
import { ParenthesizedExpressionContext } from "./ImpalaSqlParser.js";
import { StringLiteralValuesContext } from "./ImpalaSqlParser.js";
import { ParameterContext } from "./ImpalaSqlParser.js";
import { NormalizeContext } from "./ImpalaSqlParser.js";
import { IntervalLiteralContext } from "./ImpalaSqlParser.js";
import { NumericLiteralContext } from "./ImpalaSqlParser.js";
import { BooleanLiteralContext } from "./ImpalaSqlParser.js";
import { SimpleCaseContext } from "./ImpalaSqlParser.js";
import { ColumnReferenceContext } from "./ImpalaSqlParser.js";
import { NullLiteralContext } from "./ImpalaSqlParser.js";
import { RowConstructorContext } from "./ImpalaSqlParser.js";
import { SubscriptContext } from "./ImpalaSqlParser.js";
import { CurrentPathContext } from "./ImpalaSqlParser.js";
import { SubqueryExpressionContext } from "./ImpalaSqlParser.js";
import { BinaryLiteralContext } from "./ImpalaSqlParser.js";
import { CurrentUserContext } from "./ImpalaSqlParser.js";
import { ExtractContext } from "./ImpalaSqlParser.js";
import { ArrayConstructorContext } from "./ImpalaSqlParser.js";
import { FunctionCallContext } from "./ImpalaSqlParser.js";
import { ExistsContext } from "./ImpalaSqlParser.js";
import { PositionContext } from "./ImpalaSqlParser.js";
import { SearchedCaseContext } from "./ImpalaSqlParser.js";
import { GroupingOperationContext } from "./ImpalaSqlParser.js";
import { BasicStringLiteralContext } from "./ImpalaSqlParser.js";
import { UnicodeStringLiteralContext } from "./ImpalaSqlParser.js";
import { ComparisonOperatorContext } from "./ImpalaSqlParser.js";
import { ComparisonQuantifierContext } from "./ImpalaSqlParser.js";
import { BooleanValueContext } from "./ImpalaSqlParser.js";
import { IntervalContext } from "./ImpalaSqlParser.js";
import { IntervalFieldContext } from "./ImpalaSqlParser.js";
import { NormalFormContext } from "./ImpalaSqlParser.js";
import { TypeContext } from "./ImpalaSqlParser.js";
import { DataTypeContext } from "./ImpalaSqlParser.js";
import { TypeParameterContext } from "./ImpalaSqlParser.js";
import { BaseTypeContext } from "./ImpalaSqlParser.js";
import { WhenClauseContext } from "./ImpalaSqlParser.js";
import { FilterContext } from "./ImpalaSqlParser.js";
import { PartitionByClauseContext } from "./ImpalaSqlParser.js";
import { OverContext } from "./ImpalaSqlParser.js";
import { WindowFrameContext } from "./ImpalaSqlParser.js";
import { UnboundedFrameContext } from "./ImpalaSqlParser.js";
import { CurrentRowBoundContext } from "./ImpalaSqlParser.js";
import { BoundedFrameContext } from "./ImpalaSqlParser.js";
import { QualifiedArgumentContext } from "./ImpalaSqlParser.js";
import { UnqualifiedArgumentContext } from "./ImpalaSqlParser.js";
import { PathSpecificationContext } from "./ImpalaSqlParser.js";
import { PrivilegeContext } from "./ImpalaSqlParser.js";
import { ObjectTypeContext } from "./ImpalaSqlParser.js";
import { QualifiedNameContext } from "./ImpalaSqlParser.js";
import { RolePrincipalContext } from "./ImpalaSqlParser.js";
import { UserPrincipalContext } from "./ImpalaSqlParser.js";
import { GroupPrincipalContext } from "./ImpalaSqlParser.js";
import { UnquotedIdentifierContext } from "./ImpalaSqlParser.js";
import { QuotedIdentifierContext } from "./ImpalaSqlParser.js";
import { BackQuotedIdentifierContext } from "./ImpalaSqlParser.js";
import { DigitIdentifierContext } from "./ImpalaSqlParser.js";
import { DecimalLiteralContext } from "./ImpalaSqlParser.js";
import { DoubleLiteralContext } from "./ImpalaSqlParser.js";
import { IntegerLiteralContext } from "./ImpalaSqlParser.js";
import { ReservedKeywordsUsedAsFuncNameContext } from "./ImpalaSqlParser.js";
import { NonReservedContext } from "./ImpalaSqlParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ImpalaSqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class ImpalaSqlParserVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `ImpalaSqlParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
    /**
     * Visit a parse tree produced by `ImpalaSqlParser.singleStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingleStatement?: (ctx: SingleStatementContext) => Result;
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
     * Visit a parse tree produced by `ImpalaSqlParser.alterUnSetOrSetViewTblProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterUnSetOrSetViewTblProperties?: (ctx: AlterUnSetOrSetViewTblPropertiesContext) => Result;
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
     * Visit a parse tree produced by `ImpalaSqlParser.columnName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnName?: (ctx: ColumnNameContext) => Result;
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
     * Visit a parse tree produced by `ImpalaSqlParser.viewColumnItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewColumnItem?: (ctx: ViewColumnItemContext) => Result;
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
     * Visit a parse tree produced by `ImpalaSqlParser.columnSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnSpec?: (ctx: ColumnSpecContext) => Result;
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
     * Visit a parse tree produced by `ImpalaSqlParser.commentClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommentClause?: (ctx: CommentClauseContext) => Result;
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
     * Visit a parse tree produced by `ImpalaSqlParser.selectList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectList?: (ctx: SelectListContext) => Result;
    /**
     * Visit a parse tree produced by `ImpalaSqlParser.whereClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhereClause?: (ctx: WhereClauseContext) => Result;
    /**
     * Visit a parse tree produced by `ImpalaSqlParser.havingClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHavingClause?: (ctx: HavingClauseContext) => Result;
    /**
     * Visit a parse tree produced by `ImpalaSqlParser.groupBy`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupBy?: (ctx: GroupByContext) => Result;
    /**
     * Visit a parse tree produced by the `singleGroupingSet`
     * labeled alternative in `ImpalaSqlParser.groupingElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingleGroupingSet?: (ctx: SingleGroupingSetContext) => Result;
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
     * Visit a parse tree produced by `ImpalaSqlParser.columnAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnAlias?: (ctx: ColumnAliasContext) => Result;
    /**
     * Visit a parse tree produced by `ImpalaSqlParser.selectLiteralColumnName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectLiteralColumnName?: (ctx: SelectLiteralColumnNameContext) => Result;
    /**
     * Visit a parse tree produced by `ImpalaSqlParser.selectExpressionColumnName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectExpressionColumnName?: (ctx: SelectExpressionColumnNameContext) => Result;
    /**
     * Visit a parse tree produced by `ImpalaSqlParser.tableAllColumns`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableAllColumns?: (ctx: TableAllColumnsContext) => Result;
    /**
     * Visit a parse tree produced by the `relationDefault`
     * labeled alternative in `ImpalaSqlParser.relation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelationDefault?: (ctx: RelationDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `joinRelation`
     * labeled alternative in `ImpalaSqlParser.relation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinRelation?: (ctx: JoinRelationContext) => Result;
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
     * Visit a parse tree produced by `ImpalaSqlParser.relationPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelationPrimary?: (ctx: RelationPrimaryContext) => Result;
    /**
     * Visit a parse tree produced by `ImpalaSqlParser.atomSubQueryTableSource`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAtomSubQueryTableSource?: (ctx: AtomSubQueryTableSourceContext) => Result;
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
     * Visit a parse tree produced by the `logicalNot`
     * labeled alternative in `ImpalaSqlParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalNot?: (ctx: LogicalNotContext) => Result;
    /**
     * Visit a parse tree produced by the `predicated`
     * labeled alternative in `ImpalaSqlParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicated?: (ctx: PredicatedContext) => Result;
    /**
     * Visit a parse tree produced by the `logicalBinary`
     * labeled alternative in `ImpalaSqlParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalBinary?: (ctx: LogicalBinaryContext) => Result;
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
     * Visit a parse tree produced by the `valueExpressionDefault`
     * labeled alternative in `ImpalaSqlParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `concatenation`
     * labeled alternative in `ImpalaSqlParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConcatenation?: (ctx: ConcatenationContext) => Result;
    /**
     * Visit a parse tree produced by the `arithmeticBinary`
     * labeled alternative in `ImpalaSqlParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => Result;
    /**
     * Visit a parse tree produced by the `arithmeticUnary`
     * labeled alternative in `ImpalaSqlParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => Result;
    /**
     * Visit a parse tree produced by the `dereference`
     * labeled alternative in `ImpalaSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDereference?: (ctx: DereferenceContext) => Result;
    /**
     * Visit a parse tree produced by the `typeConstructor`
     * labeled alternative in `ImpalaSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeConstructor?: (ctx: TypeConstructorContext) => Result;
    /**
     * Visit a parse tree produced by the `specialDateTimeFunction`
     * labeled alternative in `ImpalaSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSpecialDateTimeFunction?: (ctx: SpecialDateTimeFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `substring`
     * labeled alternative in `ImpalaSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubstring?: (ctx: SubstringContext) => Result;
    /**
     * Visit a parse tree produced by the `cast`
     * labeled alternative in `ImpalaSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCast?: (ctx: CastContext) => Result;
    /**
     * Visit a parse tree produced by the `lambda`
     * labeled alternative in `ImpalaSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLambda?: (ctx: LambdaContext) => Result;
    /**
     * Visit a parse tree produced by the `parenthesizedExpression`
     * labeled alternative in `ImpalaSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `stringLiteralValues`
     * labeled alternative in `ImpalaSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringLiteralValues?: (ctx: StringLiteralValuesContext) => Result;
    /**
     * Visit a parse tree produced by the `parameter`
     * labeled alternative in `ImpalaSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameter?: (ctx: ParameterContext) => Result;
    /**
     * Visit a parse tree produced by the `normalize`
     * labeled alternative in `ImpalaSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNormalize?: (ctx: NormalizeContext) => Result;
    /**
     * Visit a parse tree produced by the `intervalLiteral`
     * labeled alternative in `ImpalaSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntervalLiteral?: (ctx: IntervalLiteralContext) => Result;
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
     * Visit a parse tree produced by the `simpleCase`
     * labeled alternative in `ImpalaSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleCase?: (ctx: SimpleCaseContext) => Result;
    /**
     * Visit a parse tree produced by the `columnReference`
     * labeled alternative in `ImpalaSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnReference?: (ctx: ColumnReferenceContext) => Result;
    /**
     * Visit a parse tree produced by the `nullLiteral`
     * labeled alternative in `ImpalaSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNullLiteral?: (ctx: NullLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `rowConstructor`
     * labeled alternative in `ImpalaSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowConstructor?: (ctx: RowConstructorContext) => Result;
    /**
     * Visit a parse tree produced by the `subscript`
     * labeled alternative in `ImpalaSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubscript?: (ctx: SubscriptContext) => Result;
    /**
     * Visit a parse tree produced by the `currentPath`
     * labeled alternative in `ImpalaSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCurrentPath?: (ctx: CurrentPathContext) => Result;
    /**
     * Visit a parse tree produced by the `subqueryExpression`
     * labeled alternative in `ImpalaSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubqueryExpression?: (ctx: SubqueryExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `binaryLiteral`
     * labeled alternative in `ImpalaSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBinaryLiteral?: (ctx: BinaryLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `currentUser`
     * labeled alternative in `ImpalaSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCurrentUser?: (ctx: CurrentUserContext) => Result;
    /**
     * Visit a parse tree produced by the `extract`
     * labeled alternative in `ImpalaSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtract?: (ctx: ExtractContext) => Result;
    /**
     * Visit a parse tree produced by the `arrayConstructor`
     * labeled alternative in `ImpalaSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayConstructor?: (ctx: ArrayConstructorContext) => Result;
    /**
     * Visit a parse tree produced by the `functionCall`
     * labeled alternative in `ImpalaSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionCall?: (ctx: FunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by the `exists`
     * labeled alternative in `ImpalaSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExists?: (ctx: ExistsContext) => Result;
    /**
     * Visit a parse tree produced by the `position`
     * labeled alternative in `ImpalaSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPosition?: (ctx: PositionContext) => Result;
    /**
     * Visit a parse tree produced by the `searchedCase`
     * labeled alternative in `ImpalaSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSearchedCase?: (ctx: SearchedCaseContext) => Result;
    /**
     * Visit a parse tree produced by the `groupingOperation`
     * labeled alternative in `ImpalaSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingOperation?: (ctx: GroupingOperationContext) => Result;
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
     * Visit a parse tree produced by `ImpalaSqlParser.dataType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDataType?: (ctx: DataTypeContext) => Result;
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
     * Visit a parse tree produced by `ImpalaSqlParser.partitionByClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionByClause?: (ctx: PartitionByClauseContext) => Result;
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
     * Visit a parse tree produced by `ImpalaSqlParser.reservedKeywordsUsedAsFuncName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReservedKeywordsUsedAsFuncName?: (ctx: ReservedKeywordsUsedAsFuncNameContext) => Result;
    /**
     * Visit a parse tree produced by `ImpalaSqlParser.nonReserved`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonReserved?: (ctx: NonReservedContext) => Result;
}

