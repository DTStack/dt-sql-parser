// Generated from dt-sql-parser/src/grammar/trinosql/TrinoSql.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import SQLParserBase from '../SQLParserBase';


import { ProgramContext } from "./TrinoSqlParser.js";
import { StatementsContext } from "./TrinoSqlParser.js";
import { StandaloneClauseContext } from "./TrinoSqlParser.js";
import { SingleStatementContext } from "./TrinoSqlParser.js";
import { StandaloneExpressionContext } from "./TrinoSqlParser.js";
import { StandalonePathSpecificationContext } from "./TrinoSqlParser.js";
import { StandaloneTypeContext } from "./TrinoSqlParser.js";
import { StandaloneRowPatternContext } from "./TrinoSqlParser.js";
import { StatementDefaultContext } from "./TrinoSqlParser.js";
import { UseContext } from "./TrinoSqlParser.js";
import { CreateSchemaContext } from "./TrinoSqlParser.js";
import { DropSchemaContext } from "./TrinoSqlParser.js";
import { RenameSchemaContext } from "./TrinoSqlParser.js";
import { SetSchemaAuthorizationContext } from "./TrinoSqlParser.js";
import { CreateTableAsSelectContext } from "./TrinoSqlParser.js";
import { CreateTableContext } from "./TrinoSqlParser.js";
import { DropTableContext } from "./TrinoSqlParser.js";
import { InsertIntoContext } from "./TrinoSqlParser.js";
import { DeleteContext } from "./TrinoSqlParser.js";
import { TruncateTableContext } from "./TrinoSqlParser.js";
import { RenameTableContext } from "./TrinoSqlParser.js";
import { CommentTableContext } from "./TrinoSqlParser.js";
import { CommentColumnContext } from "./TrinoSqlParser.js";
import { RenameColumnContext } from "./TrinoSqlParser.js";
import { DropColumnContext } from "./TrinoSqlParser.js";
import { AddColumnContext } from "./TrinoSqlParser.js";
import { SetTableAuthorizationContext } from "./TrinoSqlParser.js";
import { SetTablePropertiesContext } from "./TrinoSqlParser.js";
import { TableExecuteContext } from "./TrinoSqlParser.js";
import { AnalyzeContext } from "./TrinoSqlParser.js";
import { CreateMaterializedViewContext } from "./TrinoSqlParser.js";
import { CreateViewContext } from "./TrinoSqlParser.js";
import { RefreshMaterializedViewContext } from "./TrinoSqlParser.js";
import { DropMaterializedViewContext } from "./TrinoSqlParser.js";
import { RenameMaterializedViewContext } from "./TrinoSqlParser.js";
import { SetMaterializedViewPropertiesContext } from "./TrinoSqlParser.js";
import { DropViewContext } from "./TrinoSqlParser.js";
import { RenameViewContext } from "./TrinoSqlParser.js";
import { SetViewAuthorizationContext } from "./TrinoSqlParser.js";
import { CallContext } from "./TrinoSqlParser.js";
import { CreateRoleContext } from "./TrinoSqlParser.js";
import { DropRoleContext } from "./TrinoSqlParser.js";
import { GrantRolesContext } from "./TrinoSqlParser.js";
import { RevokeRolesContext } from "./TrinoSqlParser.js";
import { SetRoleContext } from "./TrinoSqlParser.js";
import { GrantContext } from "./TrinoSqlParser.js";
import { DenyContext } from "./TrinoSqlParser.js";
import { RevokeContext } from "./TrinoSqlParser.js";
import { ShowGrantsContext } from "./TrinoSqlParser.js";
import { ExplainContext } from "./TrinoSqlParser.js";
import { ShowCreateTableContext } from "./TrinoSqlParser.js";
import { ShowCreateSchemaContext } from "./TrinoSqlParser.js";
import { ShowCreateViewContext } from "./TrinoSqlParser.js";
import { ShowCreateMaterializedViewContext } from "./TrinoSqlParser.js";
import { ShowTablesContext } from "./TrinoSqlParser.js";
import { ShowSchemasContext } from "./TrinoSqlParser.js";
import { ShowCatalogsContext } from "./TrinoSqlParser.js";
import { ShowColumnsContext } from "./TrinoSqlParser.js";
import { ShowStatsContext } from "./TrinoSqlParser.js";
import { ShowStatsForQueryContext } from "./TrinoSqlParser.js";
import { ShowRolesContext } from "./TrinoSqlParser.js";
import { ShowRoleGrantsContext } from "./TrinoSqlParser.js";
import { ShowFunctionsContext } from "./TrinoSqlParser.js";
import { ShowSessionContext } from "./TrinoSqlParser.js";
import { SetSessionContext } from "./TrinoSqlParser.js";
import { ResetSessionContext } from "./TrinoSqlParser.js";
import { StartTransactionContext } from "./TrinoSqlParser.js";
import { CommitContext } from "./TrinoSqlParser.js";
import { RollbackContext } from "./TrinoSqlParser.js";
import { PrepareContext } from "./TrinoSqlParser.js";
import { DeallocateContext } from "./TrinoSqlParser.js";
import { ExecuteContext } from "./TrinoSqlParser.js";
import { DescribeInputContext } from "./TrinoSqlParser.js";
import { DescribeOutputContext } from "./TrinoSqlParser.js";
import { SetPathContext } from "./TrinoSqlParser.js";
import { SetTimeZoneContext } from "./TrinoSqlParser.js";
import { UpdateContext } from "./TrinoSqlParser.js";
import { MergeContext } from "./TrinoSqlParser.js";
import { ShowTableCommentContext } from "./TrinoSqlParser.js";
import { ShowColumnCommentContext } from "./TrinoSqlParser.js";
import { QueryStatementContext } from "./TrinoSqlParser.js";
import { WithContext } from "./TrinoSqlParser.js";
import { TableElementContext } from "./TrinoSqlParser.js";
import { ColumnDefinitionContext } from "./TrinoSqlParser.js";
import { LikeClauseContext } from "./TrinoSqlParser.js";
import { PropertiesContext } from "./TrinoSqlParser.js";
import { PropertyAssignmentsContext } from "./TrinoSqlParser.js";
import { PropertyContext } from "./TrinoSqlParser.js";
import { DefaultPropertyValueContext } from "./TrinoSqlParser.js";
import { NonDefaultPropertyValueContext } from "./TrinoSqlParser.js";
import { QueryNoWithContext } from "./TrinoSqlParser.js";
import { LimitRowCountContext } from "./TrinoSqlParser.js";
import { RowCountContext } from "./TrinoSqlParser.js";
import { QueryTermDefaultContext } from "./TrinoSqlParser.js";
import { SetOperationContext } from "./TrinoSqlParser.js";
import { QueryPrimaryDefaultContext } from "./TrinoSqlParser.js";
import { TableContext } from "./TrinoSqlParser.js";
import { InlineTableContext } from "./TrinoSqlParser.js";
import { SubqueryContext } from "./TrinoSqlParser.js";
import { SortItemContext } from "./TrinoSqlParser.js";
import { QuerySpecificationContext } from "./TrinoSqlParser.js";
import { GroupByContext } from "./TrinoSqlParser.js";
import { SingleGroupingSetContext } from "./TrinoSqlParser.js";
import { RollupContext } from "./TrinoSqlParser.js";
import { CubeContext } from "./TrinoSqlParser.js";
import { MultipleGroupingSetsContext } from "./TrinoSqlParser.js";
import { GroupingSetContext } from "./TrinoSqlParser.js";
import { GroupingTermContext } from "./TrinoSqlParser.js";
import { WindowDefinitionContext } from "./TrinoSqlParser.js";
import { WindowSpecificationContext } from "./TrinoSqlParser.js";
import { NamedQueryContext } from "./TrinoSqlParser.js";
import { SetQuantifierContext } from "./TrinoSqlParser.js";
import { SelectSingleContext } from "./TrinoSqlParser.js";
import { SelectAllContext } from "./TrinoSqlParser.js";
import { RelationDefaultContext } from "./TrinoSqlParser.js";
import { JoinRelationContext } from "./TrinoSqlParser.js";
import { JoinTypeContext } from "./TrinoSqlParser.js";
import { JoinCriteriaContext } from "./TrinoSqlParser.js";
import { SampledRelationContext } from "./TrinoSqlParser.js";
import { SampleTypeContext } from "./TrinoSqlParser.js";
import { PatternRecognitionContext } from "./TrinoSqlParser.js";
import { MeasureDefinitionContext } from "./TrinoSqlParser.js";
import { RowsPerMatchContext } from "./TrinoSqlParser.js";
import { EmptyMatchHandlingContext } from "./TrinoSqlParser.js";
import { SkipToContext } from "./TrinoSqlParser.js";
import { SubsetDefinitionContext } from "./TrinoSqlParser.js";
import { VariableDefinitionContext } from "./TrinoSqlParser.js";
import { AliasedRelationContext } from "./TrinoSqlParser.js";
import { ColumnListCreateContext } from "./TrinoSqlParser.js";
import { ColumnListContext } from "./TrinoSqlParser.js";
import { ColumnAliasesContext } from "./TrinoSqlParser.js";
import { TableOrViewRelationContext } from "./TrinoSqlParser.js";
import { SubqueryRelationContext } from "./TrinoSqlParser.js";
import { UnnestContext } from "./TrinoSqlParser.js";
import { LateralContext } from "./TrinoSqlParser.js";
import { ParenthesizedRelationContext } from "./TrinoSqlParser.js";
import { ExpressionContext } from "./TrinoSqlParser.js";
import { LogicalNotContext } from "./TrinoSqlParser.js";
import { PredicatedContext } from "./TrinoSqlParser.js";
import { LogicalBinaryContext } from "./TrinoSqlParser.js";
import { ComparisonContext } from "./TrinoSqlParser.js";
import { QuantifiedComparisonContext } from "./TrinoSqlParser.js";
import { BetweenContext } from "./TrinoSqlParser.js";
import { InListContext } from "./TrinoSqlParser.js";
import { InSubqueryContext } from "./TrinoSqlParser.js";
import { LikeContext } from "./TrinoSqlParser.js";
import { NullPredicateContext } from "./TrinoSqlParser.js";
import { DistinctFromContext } from "./TrinoSqlParser.js";
import { ValueExpressionDefaultContext } from "./TrinoSqlParser.js";
import { ConcatenationContext } from "./TrinoSqlParser.js";
import { ArithmeticBinaryContext } from "./TrinoSqlParser.js";
import { ArithmeticUnaryContext } from "./TrinoSqlParser.js";
import { AtTimeZoneContext } from "./TrinoSqlParser.js";
import { DereferenceContext } from "./TrinoSqlParser.js";
import { TypeConstructorContext } from "./TrinoSqlParser.js";
import { SpecialDateTimeFunctionContext } from "./TrinoSqlParser.js";
import { SubstringContext } from "./TrinoSqlParser.js";
import { CastContext } from "./TrinoSqlParser.js";
import { LambdaContext } from "./TrinoSqlParser.js";
import { ParenthesizedExpressionContext } from "./TrinoSqlParser.js";
import { ParameterContext } from "./TrinoSqlParser.js";
import { NormalizeContext } from "./TrinoSqlParser.js";
import { IntervalLiteralContext } from "./TrinoSqlParser.js";
import { NumericLiteralContext } from "./TrinoSqlParser.js";
import { BooleanLiteralContext } from "./TrinoSqlParser.js";
import { SimpleCaseContext } from "./TrinoSqlParser.js";
import { ColumnReferenceContext } from "./TrinoSqlParser.js";
import { NullLiteralContext } from "./TrinoSqlParser.js";
import { RowConstructorContext } from "./TrinoSqlParser.js";
import { SubscriptContext } from "./TrinoSqlParser.js";
import { CurrentPathContext } from "./TrinoSqlParser.js";
import { SubqueryExpressionContext } from "./TrinoSqlParser.js";
import { BinaryLiteralContext } from "./TrinoSqlParser.js";
import { CurrentUserContext } from "./TrinoSqlParser.js";
import { MeasureContext } from "./TrinoSqlParser.js";
import { ExtractContext } from "./TrinoSqlParser.js";
import { StringLiteralContext } from "./TrinoSqlParser.js";
import { ArrayConstructorContext } from "./TrinoSqlParser.js";
import { FunctionCallContext } from "./TrinoSqlParser.js";
import { CurrentSchemaContext } from "./TrinoSqlParser.js";
import { ExistsContext } from "./TrinoSqlParser.js";
import { PositionContext } from "./TrinoSqlParser.js";
import { SearchedCaseContext } from "./TrinoSqlParser.js";
import { CurrentCatalogContext } from "./TrinoSqlParser.js";
import { GroupingOperationContext } from "./TrinoSqlParser.js";
import { ProcessingModeContext } from "./TrinoSqlParser.js";
import { NullTreatmentContext } from "./TrinoSqlParser.js";
import { BasicStringLiteralContext } from "./TrinoSqlParser.js";
import { UnicodeStringLiteralContext } from "./TrinoSqlParser.js";
import { TimeZoneIntervalContext } from "./TrinoSqlParser.js";
import { TimeZoneStringContext } from "./TrinoSqlParser.js";
import { ComparisonOperatorContext } from "./TrinoSqlParser.js";
import { ComparisonQuantifierContext } from "./TrinoSqlParser.js";
import { BooleanValueContext } from "./TrinoSqlParser.js";
import { IntervalContext } from "./TrinoSqlParser.js";
import { IntervalFieldContext } from "./TrinoSqlParser.js";
import { NormalFormContext } from "./TrinoSqlParser.js";
import { RowTypeContext } from "./TrinoSqlParser.js";
import { IntervalTypeContext } from "./TrinoSqlParser.js";
import { ArrayTypeContext } from "./TrinoSqlParser.js";
import { DoublePrecisionTypeContext } from "./TrinoSqlParser.js";
import { LegacyArrayTypeContext } from "./TrinoSqlParser.js";
import { GenericTypeContext } from "./TrinoSqlParser.js";
import { DateTimeTypeContext } from "./TrinoSqlParser.js";
import { LegacyMapTypeContext } from "./TrinoSqlParser.js";
import { RowFieldContext } from "./TrinoSqlParser.js";
import { TypeParameterContext } from "./TrinoSqlParser.js";
import { WhenClauseContext } from "./TrinoSqlParser.js";
import { FilterContext } from "./TrinoSqlParser.js";
import { MergeUpdateContext } from "./TrinoSqlParser.js";
import { MergeDeleteContext } from "./TrinoSqlParser.js";
import { MergeInsertContext } from "./TrinoSqlParser.js";
import { OverContext } from "./TrinoSqlParser.js";
import { WindowFrameContext } from "./TrinoSqlParser.js";
import { FrameExtentContext } from "./TrinoSqlParser.js";
import { UnboundedFrameContext } from "./TrinoSqlParser.js";
import { CurrentRowBoundContext } from "./TrinoSqlParser.js";
import { BoundedFrameContext } from "./TrinoSqlParser.js";
import { QuantifiedPrimaryContext } from "./TrinoSqlParser.js";
import { PatternConcatenationContext } from "./TrinoSqlParser.js";
import { PatternAlternationContext } from "./TrinoSqlParser.js";
import { PatternVariableContext } from "./TrinoSqlParser.js";
import { EmptyPatternContext } from "./TrinoSqlParser.js";
import { PatternPermutationContext } from "./TrinoSqlParser.js";
import { GroupedPatternContext } from "./TrinoSqlParser.js";
import { PartitionStartAnchorContext } from "./TrinoSqlParser.js";
import { PartitionEndAnchorContext } from "./TrinoSqlParser.js";
import { ExcludedPatternContext } from "./TrinoSqlParser.js";
import { ZeroOrMoreQuantifierContext } from "./TrinoSqlParser.js";
import { OneOrMoreQuantifierContext } from "./TrinoSqlParser.js";
import { ZeroOrOneQuantifierContext } from "./TrinoSqlParser.js";
import { RangeQuantifierContext } from "./TrinoSqlParser.js";
import { UpdateAssignmentContext } from "./TrinoSqlParser.js";
import { ExplainFormatContext } from "./TrinoSqlParser.js";
import { ExplainTypeContext } from "./TrinoSqlParser.js";
import { IsolationLevelContext } from "./TrinoSqlParser.js";
import { TransactionAccessModeContext } from "./TrinoSqlParser.js";
import { ReadUncommittedContext } from "./TrinoSqlParser.js";
import { ReadCommittedContext } from "./TrinoSqlParser.js";
import { RepeatableReadContext } from "./TrinoSqlParser.js";
import { SerializableContext } from "./TrinoSqlParser.js";
import { PositionalArgumentContext } from "./TrinoSqlParser.js";
import { NamedArgumentContext } from "./TrinoSqlParser.js";
import { QualifiedArgumentContext } from "./TrinoSqlParser.js";
import { UnqualifiedArgumentContext } from "./TrinoSqlParser.js";
import { PathSpecificationContext } from "./TrinoSqlParser.js";
import { PrivilegeContext } from "./TrinoSqlParser.js";
import { TableOrViewNameContext } from "./TrinoSqlParser.js";
import { TableNameContext } from "./TrinoSqlParser.js";
import { TableNameCreateContext } from "./TrinoSqlParser.js";
import { ViewNameContext } from "./TrinoSqlParser.js";
import { ViewNameCreateContext } from "./TrinoSqlParser.js";
import { TablePathContext } from "./TrinoSqlParser.js";
import { ViewPathContext } from "./TrinoSqlParser.js";
import { SchemaNameContext } from "./TrinoSqlParser.js";
import { SchemaNameCreateContext } from "./TrinoSqlParser.js";
import { SchemaPathContext } from "./TrinoSqlParser.js";
import { CatalogNameContext } from "./TrinoSqlParser.js";
import { CatalogNameCreateContext } from "./TrinoSqlParser.js";
import { FunctionNameContext } from "./TrinoSqlParser.js";
import { ColumnNameContext } from "./TrinoSqlParser.js";
import { ColumnNameCreateContext } from "./TrinoSqlParser.js";
import { QualifiedNameContext } from "./TrinoSqlParser.js";
import { SpecifiedPrincipalContext } from "./TrinoSqlParser.js";
import { CurrentUserGrantorContext } from "./TrinoSqlParser.js";
import { CurrentRoleGrantorContext } from "./TrinoSqlParser.js";
import { UnspecifiedPrincipalContext } from "./TrinoSqlParser.js";
import { UserPrincipalContext } from "./TrinoSqlParser.js";
import { RolePrincipalContext } from "./TrinoSqlParser.js";
import { RolesContext } from "./TrinoSqlParser.js";
import { UnquotedIdentifierContext } from "./TrinoSqlParser.js";
import { QuotedIdentifierContext } from "./TrinoSqlParser.js";
import { BackQuotedIdentifierContext } from "./TrinoSqlParser.js";
import { DigitIdentifierContext } from "./TrinoSqlParser.js";
import { DecimalLiteralContext } from "./TrinoSqlParser.js";
import { DoubleLiteralContext } from "./TrinoSqlParser.js";
import { IntegerLiteralContext } from "./TrinoSqlParser.js";
import { NonReservedContext } from "./TrinoSqlParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `TrinoSqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class TrinoSqlVisitor<Result> extends AbstractParseTreeVisitor<Result> {
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
     * Visit a parse tree produced by `TrinoSqlParser.standaloneClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStandaloneClause?: (ctx: StandaloneClauseContext) => Result;
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
     * Visit a parse tree produced by the `queryStatement`
     * labeled alternative in `TrinoSqlParser.query`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryStatement?: (ctx: QueryStatementContext) => Result;
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
     * Visit a parse tree produced by the `relationDefault`
     * labeled alternative in `TrinoSqlParser.relation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelationDefault?: (ctx: RelationDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `joinRelation`
     * labeled alternative in `TrinoSqlParser.relation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinRelation?: (ctx: JoinRelationContext) => Result;
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
     * Visit a parse tree produced by `TrinoSqlParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `logicalNot`
     * labeled alternative in `TrinoSqlParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalNot?: (ctx: LogicalNotContext) => Result;
    /**
     * Visit a parse tree produced by the `predicated`
     * labeled alternative in `TrinoSqlParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicated?: (ctx: PredicatedContext) => Result;
    /**
     * Visit a parse tree produced by the `logicalBinary`
     * labeled alternative in `TrinoSqlParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalBinary?: (ctx: LogicalBinaryContext) => Result;
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
     * Visit a parse tree produced by the `valueExpressionDefault`
     * labeled alternative in `TrinoSqlParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `concatenation`
     * labeled alternative in `TrinoSqlParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConcatenation?: (ctx: ConcatenationContext) => Result;
    /**
     * Visit a parse tree produced by the `arithmeticBinary`
     * labeled alternative in `TrinoSqlParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => Result;
    /**
     * Visit a parse tree produced by the `arithmeticUnary`
     * labeled alternative in `TrinoSqlParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => Result;
    /**
     * Visit a parse tree produced by the `atTimeZone`
     * labeled alternative in `TrinoSqlParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAtTimeZone?: (ctx: AtTimeZoneContext) => Result;
    /**
     * Visit a parse tree produced by the `dereference`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDereference?: (ctx: DereferenceContext) => Result;
    /**
     * Visit a parse tree produced by the `typeConstructor`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeConstructor?: (ctx: TypeConstructorContext) => Result;
    /**
     * Visit a parse tree produced by the `specialDateTimeFunction`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSpecialDateTimeFunction?: (ctx: SpecialDateTimeFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `substring`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubstring?: (ctx: SubstringContext) => Result;
    /**
     * Visit a parse tree produced by the `cast`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCast?: (ctx: CastContext) => Result;
    /**
     * Visit a parse tree produced by the `lambda`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLambda?: (ctx: LambdaContext) => Result;
    /**
     * Visit a parse tree produced by the `parenthesizedExpression`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `parameter`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameter?: (ctx: ParameterContext) => Result;
    /**
     * Visit a parse tree produced by the `normalize`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNormalize?: (ctx: NormalizeContext) => Result;
    /**
     * Visit a parse tree produced by the `intervalLiteral`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntervalLiteral?: (ctx: IntervalLiteralContext) => Result;
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
     * Visit a parse tree produced by the `simpleCase`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleCase?: (ctx: SimpleCaseContext) => Result;
    /**
     * Visit a parse tree produced by the `columnReference`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnReference?: (ctx: ColumnReferenceContext) => Result;
    /**
     * Visit a parse tree produced by the `nullLiteral`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNullLiteral?: (ctx: NullLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `rowConstructor`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowConstructor?: (ctx: RowConstructorContext) => Result;
    /**
     * Visit a parse tree produced by the `subscript`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubscript?: (ctx: SubscriptContext) => Result;
    /**
     * Visit a parse tree produced by the `currentPath`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCurrentPath?: (ctx: CurrentPathContext) => Result;
    /**
     * Visit a parse tree produced by the `subqueryExpression`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubqueryExpression?: (ctx: SubqueryExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `binaryLiteral`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBinaryLiteral?: (ctx: BinaryLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `currentUser`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCurrentUser?: (ctx: CurrentUserContext) => Result;
    /**
     * Visit a parse tree produced by the `measure`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMeasure?: (ctx: MeasureContext) => Result;
    /**
     * Visit a parse tree produced by the `extract`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtract?: (ctx: ExtractContext) => Result;
    /**
     * Visit a parse tree produced by the `stringLiteral`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringLiteral?: (ctx: StringLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `arrayConstructor`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayConstructor?: (ctx: ArrayConstructorContext) => Result;
    /**
     * Visit a parse tree produced by the `functionCall`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionCall?: (ctx: FunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by the `currentSchema`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCurrentSchema?: (ctx: CurrentSchemaContext) => Result;
    /**
     * Visit a parse tree produced by the `exists`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExists?: (ctx: ExistsContext) => Result;
    /**
     * Visit a parse tree produced by the `position`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPosition?: (ctx: PositionContext) => Result;
    /**
     * Visit a parse tree produced by the `searchedCase`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSearchedCase?: (ctx: SearchedCaseContext) => Result;
    /**
     * Visit a parse tree produced by the `currentCatalog`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCurrentCatalog?: (ctx: CurrentCatalogContext) => Result;
    /**
     * Visit a parse tree produced by the `groupingOperation`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingOperation?: (ctx: GroupingOperationContext) => Result;
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
     * Visit a parse tree produced by the `arrayType`
     * labeled alternative in `TrinoSqlParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayType?: (ctx: ArrayTypeContext) => Result;
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
     * Visit a parse tree produced by the `genericType`
     * labeled alternative in `TrinoSqlParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenericType?: (ctx: GenericTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `dateTimeType`
     * labeled alternative in `TrinoSqlParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDateTimeType?: (ctx: DateTimeTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `legacyMapType`
     * labeled alternative in `TrinoSqlParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLegacyMapType?: (ctx: LegacyMapTypeContext) => Result;
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
     * Visit a parse tree produced by `TrinoSqlParser.updateAssignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdateAssignment?: (ctx: UpdateAssignmentContext) => Result;
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
     * Visit a parse tree produced by `TrinoSqlParser.roles`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoles?: (ctx: RolesContext) => Result;
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
     * Visit a parse tree produced by `TrinoSqlParser.nonReserved`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonReserved?: (ctx: NonReservedContext) => Result;
}

