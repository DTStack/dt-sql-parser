// Generated from dt-sql-parser/src/grammar/impala/ImpalaSqlParser.g4 by ANTLR 4.13.1

// @ts-nocheck

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


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
 * This interface defines a complete listener for a parse tree produced by
 * `ImpalaSqlParser`.
 */
export class ImpalaSqlParserListener implements ParseTreeListener {
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
     * Enter a parse tree produced by `ImpalaSqlParser.singleStatement`.
     * @param ctx the parse tree
     */
    enterSingleStatement?: (ctx: SingleStatementContext) => void;
    /**
     * Exit a parse tree produced by `ImpalaSqlParser.singleStatement`.
     * @param ctx the parse tree
     */
    exitSingleStatement?: (ctx: SingleStatementContext) => void;
    /**
     * Enter a parse tree produced by `ImpalaSqlParser.sqlStatement`.
     * @param ctx the parse tree
     */
    enterSqlStatement?: (ctx: SqlStatementContext) => void;
    /**
     * Exit a parse tree produced by `ImpalaSqlParser.sqlStatement`.
     * @param ctx the parse tree
     */
    exitSqlStatement?: (ctx: SqlStatementContext) => void;
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
     * Enter a parse tree produced by `ImpalaSqlParser.changeColumnDefine`.
     * @param ctx the parse tree
     */
    enterChangeColumnDefine?: (ctx: ChangeColumnDefineContext) => void;
    /**
     * Exit a parse tree produced by `ImpalaSqlParser.changeColumnDefine`.
     * @param ctx the parse tree
     */
    exitChangeColumnDefine?: (ctx: ChangeColumnDefineContext) => void;
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
     * Enter a parse tree produced by `ImpalaSqlParser.alterUnSetOrSetViewTblProperties`.
     * @param ctx the parse tree
     */
    enterAlterUnSetOrSetViewTblProperties?: (ctx: AlterUnSetOrSetViewTblPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `ImpalaSqlParser.alterUnSetOrSetViewTblProperties`.
     * @param ctx the parse tree
     */
    exitAlterUnSetOrSetViewTblProperties?: (ctx: AlterUnSetOrSetViewTblPropertiesContext) => void;
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
     * Enter a parse tree produced by `ImpalaSqlParser.columnNamePathCreate`.
     * @param ctx the parse tree
     */
    enterColumnNamePathCreate?: (ctx: ColumnNamePathCreateContext) => void;
    /**
     * Exit a parse tree produced by `ImpalaSqlParser.columnNamePathCreate`.
     * @param ctx the parse tree
     */
    exitColumnNamePathCreate?: (ctx: ColumnNamePathCreateContext) => void;
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
     * Enter a parse tree produced by `ImpalaSqlParser.columnName`.
     * @param ctx the parse tree
     */
    enterColumnName?: (ctx: ColumnNameContext) => void;
    /**
     * Exit a parse tree produced by `ImpalaSqlParser.columnName`.
     * @param ctx the parse tree
     */
    exitColumnName?: (ctx: ColumnNameContext) => void;
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
     * Enter a parse tree produced by `ImpalaSqlParser.viewColumnItem`.
     * @param ctx the parse tree
     */
    enterViewColumnItem?: (ctx: ViewColumnItemContext) => void;
    /**
     * Exit a parse tree produced by `ImpalaSqlParser.viewColumnItem`.
     * @param ctx the parse tree
     */
    exitViewColumnItem?: (ctx: ViewColumnItemContext) => void;
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
     * Enter a parse tree produced by `ImpalaSqlParser.columnSpec`.
     * @param ctx the parse tree
     */
    enterColumnSpec?: (ctx: ColumnSpecContext) => void;
    /**
     * Exit a parse tree produced by `ImpalaSqlParser.columnSpec`.
     * @param ctx the parse tree
     */
    exitColumnSpec?: (ctx: ColumnSpecContext) => void;
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
     * Enter a parse tree produced by `ImpalaSqlParser.commentClause`.
     * @param ctx the parse tree
     */
    enterCommentClause?: (ctx: CommentClauseContext) => void;
    /**
     * Exit a parse tree produced by `ImpalaSqlParser.commentClause`.
     * @param ctx the parse tree
     */
    exitCommentClause?: (ctx: CommentClauseContext) => void;
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
     * Enter a parse tree produced by `ImpalaSqlParser.createColumnSpecWithKudu`.
     * @param ctx the parse tree
     */
    enterCreateColumnSpecWithKudu?: (ctx: CreateColumnSpecWithKuduContext) => void;
    /**
     * Exit a parse tree produced by `ImpalaSqlParser.createColumnSpecWithKudu`.
     * @param ctx the parse tree
     */
    exitCreateColumnSpecWithKudu?: (ctx: CreateColumnSpecWithKuduContext) => void;
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
     * Enter a parse tree produced by `ImpalaSqlParser.selectList`.
     * @param ctx the parse tree
     */
    enterSelectList?: (ctx: SelectListContext) => void;
    /**
     * Exit a parse tree produced by `ImpalaSqlParser.selectList`.
     * @param ctx the parse tree
     */
    exitSelectList?: (ctx: SelectListContext) => void;
    /**
     * Enter a parse tree produced by `ImpalaSqlParser.whereClause`.
     * @param ctx the parse tree
     */
    enterWhereClause?: (ctx: WhereClauseContext) => void;
    /**
     * Exit a parse tree produced by `ImpalaSqlParser.whereClause`.
     * @param ctx the parse tree
     */
    exitWhereClause?: (ctx: WhereClauseContext) => void;
    /**
     * Enter a parse tree produced by `ImpalaSqlParser.havingClause`.
     * @param ctx the parse tree
     */
    enterHavingClause?: (ctx: HavingClauseContext) => void;
    /**
     * Exit a parse tree produced by `ImpalaSqlParser.havingClause`.
     * @param ctx the parse tree
     */
    exitHavingClause?: (ctx: HavingClauseContext) => void;
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
     * Enter a parse tree produced by `ImpalaSqlParser.columnAlias`.
     * @param ctx the parse tree
     */
    enterColumnAlias?: (ctx: ColumnAliasContext) => void;
    /**
     * Exit a parse tree produced by `ImpalaSqlParser.columnAlias`.
     * @param ctx the parse tree
     */
    exitColumnAlias?: (ctx: ColumnAliasContext) => void;
    /**
     * Enter a parse tree produced by `ImpalaSqlParser.selectLiteralColumnName`.
     * @param ctx the parse tree
     */
    enterSelectLiteralColumnName?: (ctx: SelectLiteralColumnNameContext) => void;
    /**
     * Exit a parse tree produced by `ImpalaSqlParser.selectLiteralColumnName`.
     * @param ctx the parse tree
     */
    exitSelectLiteralColumnName?: (ctx: SelectLiteralColumnNameContext) => void;
    /**
     * Enter a parse tree produced by `ImpalaSqlParser.selectExpressionColumnName`.
     * @param ctx the parse tree
     */
    enterSelectExpressionColumnName?: (ctx: SelectExpressionColumnNameContext) => void;
    /**
     * Exit a parse tree produced by `ImpalaSqlParser.selectExpressionColumnName`.
     * @param ctx the parse tree
     */
    exitSelectExpressionColumnName?: (ctx: SelectExpressionColumnNameContext) => void;
    /**
     * Enter a parse tree produced by `ImpalaSqlParser.tableAllColumns`.
     * @param ctx the parse tree
     */
    enterTableAllColumns?: (ctx: TableAllColumnsContext) => void;
    /**
     * Exit a parse tree produced by `ImpalaSqlParser.tableAllColumns`.
     * @param ctx the parse tree
     */
    exitTableAllColumns?: (ctx: TableAllColumnsContext) => void;
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
     * Enter a parse tree produced by `ImpalaSqlParser.atomSubQueryTableSource`.
     * @param ctx the parse tree
     */
    enterAtomSubQueryTableSource?: (ctx: AtomSubQueryTableSourceContext) => void;
    /**
     * Exit a parse tree produced by `ImpalaSqlParser.atomSubQueryTableSource`.
     * @param ctx the parse tree
     */
    exitAtomSubQueryTableSource?: (ctx: AtomSubQueryTableSourceContext) => void;
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
     * Enter a parse tree produced by the `nullOrUnKnownOrBooleanPredicate`
     * labeled alternative in `ImpalaSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterNullOrUnKnownOrBooleanPredicate?: (ctx: NullOrUnKnownOrBooleanPredicateContext) => void;
    /**
     * Exit a parse tree produced by the `nullOrUnKnownOrBooleanPredicate`
     * labeled alternative in `ImpalaSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitNullOrUnKnownOrBooleanPredicate?: (ctx: NullOrUnKnownOrBooleanPredicateContext) => void;
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
     * Enter a parse tree produced by `ImpalaSqlParser.dataType`.
     * @param ctx the parse tree
     */
    enterDataType?: (ctx: DataTypeContext) => void;
    /**
     * Exit a parse tree produced by `ImpalaSqlParser.dataType`.
     * @param ctx the parse tree
     */
    exitDataType?: (ctx: DataTypeContext) => void;
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
     * Enter a parse tree produced by `ImpalaSqlParser.partitionByClause`.
     * @param ctx the parse tree
     */
    enterPartitionByClause?: (ctx: PartitionByClauseContext) => void;
    /**
     * Exit a parse tree produced by `ImpalaSqlParser.partitionByClause`.
     * @param ctx the parse tree
     */
    exitPartitionByClause?: (ctx: PartitionByClauseContext) => void;
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
     * Enter a parse tree produced by `ImpalaSqlParser.reservedKeywordsUsedAsFuncName`.
     * @param ctx the parse tree
     */
    enterReservedKeywordsUsedAsFuncName?: (ctx: ReservedKeywordsUsedAsFuncNameContext) => void;
    /**
     * Exit a parse tree produced by `ImpalaSqlParser.reservedKeywordsUsedAsFuncName`.
     * @param ctx the parse tree
     */
    exitReservedKeywordsUsedAsFuncName?: (ctx: ReservedKeywordsUsedAsFuncNameContext) => void;
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

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

