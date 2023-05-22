// Generated from /Users/zhenglin/Documents/parser/dt-sql-parser/src/grammar/trinosql/trinoSqlParser.g4 by ANTLR 4.12.0

import {ParseTreeVisitor} from 'antlr4';


import { ProgramContext } from "./trinoSqlParser";
import { StatementsContext } from "./trinoSqlParser";
import { SingleStatementContext } from "./trinoSqlParser";
import { StandaloneExpressionContext } from "./trinoSqlParser";
import { StandalonePathSpecificationContext } from "./trinoSqlParser";
import { StandaloneTypeContext } from "./trinoSqlParser";
import { StandaloneRowPatternContext } from "./trinoSqlParser";
import { StatementDefaultContext } from "./trinoSqlParser";
import { UseContext } from "./trinoSqlParser";
import { CreateSchemaContext } from "./trinoSqlParser";
import { DropSchemaContext } from "./trinoSqlParser";
import { RenameSchemaContext } from "./trinoSqlParser";
import { SetSchemaAuthorizationContext } from "./trinoSqlParser";
import { CreateTableAsSelectContext } from "./trinoSqlParser";
import { CreateTableContext } from "./trinoSqlParser";
import { DropTableContext } from "./trinoSqlParser";
import { InsertIntoContext } from "./trinoSqlParser";
import { DeleteContext } from "./trinoSqlParser";
import { TruncateTableContext } from "./trinoSqlParser";
import { CommentTableContext } from "./trinoSqlParser";
import { CommentViewContext } from "./trinoSqlParser";
import { CommentColumnContext } from "./trinoSqlParser";
import { RenameTableContext } from "./trinoSqlParser";
import { AddColumnContext } from "./trinoSqlParser";
import { RenameColumnContext } from "./trinoSqlParser";
import { DropColumnContext } from "./trinoSqlParser";
import { SetColumnTypeContext } from "./trinoSqlParser";
import { SetTableAuthorizationContext } from "./trinoSqlParser";
import { SetTablePropertiesContext } from "./trinoSqlParser";
import { TableExecuteContext } from "./trinoSqlParser";
import { AnalyzeContext } from "./trinoSqlParser";
import { CreateMaterializedViewContext } from "./trinoSqlParser";
import { CreateViewContext } from "./trinoSqlParser";
import { RefreshMaterializedViewContext } from "./trinoSqlParser";
import { DropMaterializedViewContext } from "./trinoSqlParser";
import { RenameMaterializedViewContext } from "./trinoSqlParser";
import { SetMaterializedViewPropertiesContext } from "./trinoSqlParser";
import { DropViewContext } from "./trinoSqlParser";
import { RenameViewContext } from "./trinoSqlParser";
import { SetViewAuthorizationContext } from "./trinoSqlParser";
import { CallContext } from "./trinoSqlParser";
import { CreateRoleContext } from "./trinoSqlParser";
import { DropRoleContext } from "./trinoSqlParser";
import { GrantRolesContext } from "./trinoSqlParser";
import { RevokeRolesContext } from "./trinoSqlParser";
import { SetRoleContext } from "./trinoSqlParser";
import { GrantContext } from "./trinoSqlParser";
import { DenyContext } from "./trinoSqlParser";
import { RevokeContext } from "./trinoSqlParser";
import { ShowGrantsContext } from "./trinoSqlParser";
import { ExplainContext } from "./trinoSqlParser";
import { ExplainAnalyzeContext } from "./trinoSqlParser";
import { ShowCreateTableContext } from "./trinoSqlParser";
import { ShowCreateSchemaContext } from "./trinoSqlParser";
import { ShowCreateViewContext } from "./trinoSqlParser";
import { ShowCreateMaterializedViewContext } from "./trinoSqlParser";
import { ShowTablesContext } from "./trinoSqlParser";
import { ShowSchemasContext } from "./trinoSqlParser";
import { ShowCatalogsContext } from "./trinoSqlParser";
import { ShowColumnsContext } from "./trinoSqlParser";
import { ShowStatsContext } from "./trinoSqlParser";
import { ShowStatsForQueryContext } from "./trinoSqlParser";
import { ShowRolesContext } from "./trinoSqlParser";
import { ShowRoleGrantsContext } from "./trinoSqlParser";
import { ShowFunctionsContext } from "./trinoSqlParser";
import { ShowSessionContext } from "./trinoSqlParser";
import { SetSessionContext } from "./trinoSqlParser";
import { ResetSessionContext } from "./trinoSqlParser";
import { StartTransactionContext } from "./trinoSqlParser";
import { CommitContext } from "./trinoSqlParser";
import { RollbackContext } from "./trinoSqlParser";
import { PrepareContext } from "./trinoSqlParser";
import { DeallocateContext } from "./trinoSqlParser";
import { ExecuteContext } from "./trinoSqlParser";
import { DescribeInputContext } from "./trinoSqlParser";
import { DescribeOutputContext } from "./trinoSqlParser";
import { SetPathContext } from "./trinoSqlParser";
import { SetTimeZoneContext } from "./trinoSqlParser";
import { UpdateContext } from "./trinoSqlParser";
import { MergeContext } from "./trinoSqlParser";
import { QueryContext } from "./trinoSqlParser";
import { WithContext } from "./trinoSqlParser";
import { TableElementContext } from "./trinoSqlParser";
import { ColumnDefinitionContext } from "./trinoSqlParser";
import { LikeClauseContext } from "./trinoSqlParser";
import { PropertiesContext } from "./trinoSqlParser";
import { PropertyAssignmentsContext } from "./trinoSqlParser";
import { PropertyContext } from "./trinoSqlParser";
import { DefaultPropertyValueContext } from "./trinoSqlParser";
import { NonDefaultPropertyValueContext } from "./trinoSqlParser";
import { QueryNoWithContext } from "./trinoSqlParser";
import { LimitRowCountContext } from "./trinoSqlParser";
import { RowCountContext } from "./trinoSqlParser";
import { QueryTermDefaultContext } from "./trinoSqlParser";
import { SetOperationContext } from "./trinoSqlParser";
import { QueryPrimaryDefaultContext } from "./trinoSqlParser";
import { TableContext } from "./trinoSqlParser";
import { InlineTableContext } from "./trinoSqlParser";
import { SubqueryContext } from "./trinoSqlParser";
import { SortItemContext } from "./trinoSqlParser";
import { QuerySpecificationContext } from "./trinoSqlParser";
import { GroupByContext } from "./trinoSqlParser";
import { SingleGroupingSetContext } from "./trinoSqlParser";
import { RollupContext } from "./trinoSqlParser";
import { CubeContext } from "./trinoSqlParser";
import { MultipleGroupingSetsContext } from "./trinoSqlParser";
import { GroupingSetContext } from "./trinoSqlParser";
import { WindowDefinitionContext } from "./trinoSqlParser";
import { WindowSpecificationContext } from "./trinoSqlParser";
import { NamedQueryContext } from "./trinoSqlParser";
import { SetQuantifierContext } from "./trinoSqlParser";
import { SelectSingleContext } from "./trinoSqlParser";
import { SelectAllContext } from "./trinoSqlParser";
import { RelationDefaultContext } from "./trinoSqlParser";
import { JoinRelationContext } from "./trinoSqlParser";
import { JoinTypeContext } from "./trinoSqlParser";
import { JoinCriteriaContext } from "./trinoSqlParser";
import { SampledRelationContext } from "./trinoSqlParser";
import { SampleTypeContext } from "./trinoSqlParser";
import { TrimsSpecificationContext } from "./trinoSqlParser";
import { ListAggOverflowBehaviorContext } from "./trinoSqlParser";
import { ListaggCountIndicationContext } from "./trinoSqlParser";
import { PatternRecognitionContext } from "./trinoSqlParser";
import { MeasureDefinitionContext } from "./trinoSqlParser";
import { RowsPerMatchContext } from "./trinoSqlParser";
import { EmptyMatchHandlingContext } from "./trinoSqlParser";
import { SkipToContext } from "./trinoSqlParser";
import { SubsetDefinitionContext } from "./trinoSqlParser";
import { VariableDefinitionContext } from "./trinoSqlParser";
import { AliasedRelationContext } from "./trinoSqlParser";
import { ColumnAliasesContext } from "./trinoSqlParser";
import { TableNameContext } from "./trinoSqlParser";
import { SubqueryRelationContext } from "./trinoSqlParser";
import { UnnestContext } from "./trinoSqlParser";
import { LateralContext } from "./trinoSqlParser";
import { TableFunctionInvocationContext } from "./trinoSqlParser";
import { ParenthesizedRelationContext } from "./trinoSqlParser";
import { TableFunctionCallContext } from "./trinoSqlParser";
import { TableFunctionArgumentContext } from "./trinoSqlParser";
import { TableArgumentContext } from "./trinoSqlParser";
import { TableArgumentTableContext } from "./trinoSqlParser";
import { TableArgumentQueryContext } from "./trinoSqlParser";
import { DescriptorArgumentContext } from "./trinoSqlParser";
import { DescriptorFieldContext } from "./trinoSqlParser";
import { CopartitionTablesContext } from "./trinoSqlParser";
import { ExpressionContext } from "./trinoSqlParser";
import { LogicalNotContext } from "./trinoSqlParser";
import { PredicatedContext } from "./trinoSqlParser";
import { OrContext } from "./trinoSqlParser";
import { AndContext } from "./trinoSqlParser";
import { ComparisonContext } from "./trinoSqlParser";
import { QuantifiedComparisonContext } from "./trinoSqlParser";
import { BetweenContext } from "./trinoSqlParser";
import { InListContext } from "./trinoSqlParser";
import { InSubqueryContext } from "./trinoSqlParser";
import { LikeContext } from "./trinoSqlParser";
import { NullPredicateContext } from "./trinoSqlParser";
import { DistinctFromContext } from "./trinoSqlParser";
import { ValueExpressionDefaultContext } from "./trinoSqlParser";
import { ConcatenationContext } from "./trinoSqlParser";
import { ArithmeticBinaryContext } from "./trinoSqlParser";
import { ArithmeticUnaryContext } from "./trinoSqlParser";
import { AtTimeZoneContext } from "./trinoSqlParser";
import { DereferenceContext } from "./trinoSqlParser";
import { TypeConstructorContext } from "./trinoSqlParser";
import { JsonValueContext } from "./trinoSqlParser";
import { SpecialDateTimeFunctionContext } from "./trinoSqlParser";
import { SubstringContext } from "./trinoSqlParser";
import { CastContext } from "./trinoSqlParser";
import { LambdaContext } from "./trinoSqlParser";
import { ParenthesizedExpressionContext } from "./trinoSqlParser";
import { TrimContext } from "./trinoSqlParser";
import { ParameterContext } from "./trinoSqlParser";
import { NormalizeContext } from "./trinoSqlParser";
import { JsonObjectContext } from "./trinoSqlParser";
import { IntervalLiteralContext } from "./trinoSqlParser";
import { NumericLiteralContext } from "./trinoSqlParser";
import { BooleanLiteralContext } from "./trinoSqlParser";
import { JsonArrayContext } from "./trinoSqlParser";
import { SimpleCaseContext } from "./trinoSqlParser";
import { ColumnReferenceContext } from "./trinoSqlParser";
import { NullLiteralContext } from "./trinoSqlParser";
import { RowConstructorContext } from "./trinoSqlParser";
import { SubscriptContext } from "./trinoSqlParser";
import { JsonExistsContext } from "./trinoSqlParser";
import { CurrentPathContext } from "./trinoSqlParser";
import { SubqueryExpressionContext } from "./trinoSqlParser";
import { BinaryLiteralContext } from "./trinoSqlParser";
import { CurrentUserContext } from "./trinoSqlParser";
import { JsonQueryContext } from "./trinoSqlParser";
import { MeasureContext } from "./trinoSqlParser";
import { ExtractContext } from "./trinoSqlParser";
import { StringLiteralContext } from "./trinoSqlParser";
import { ArrayConstructorContext } from "./trinoSqlParser";
import { FunctionCallContext } from "./trinoSqlParser";
import { CurrentSchemaContext } from "./trinoSqlParser";
import { ExistsContext } from "./trinoSqlParser";
import { PositionContext } from "./trinoSqlParser";
import { ListaggContext } from "./trinoSqlParser";
import { SearchedCaseContext } from "./trinoSqlParser";
import { CurrentCatalogContext } from "./trinoSqlParser";
import { GroupingOperationContext } from "./trinoSqlParser";
import { JsonPathInvocationContext } from "./trinoSqlParser";
import { JsonValueExpressionContext } from "./trinoSqlParser";
import { JsonRepresentationContext } from "./trinoSqlParser";
import { JsonArgumentContext } from "./trinoSqlParser";
import { JsonExistsErrorBehaviorContext } from "./trinoSqlParser";
import { JsonValueBehaviorContext } from "./trinoSqlParser";
import { JsonQueryWrapperBehaviorContext } from "./trinoSqlParser";
import { JsonQueryBehaviorContext } from "./trinoSqlParser";
import { JsonObjectMemberContext } from "./trinoSqlParser";
import { ProcessingModeContext } from "./trinoSqlParser";
import { NullTreatmentContext } from "./trinoSqlParser";
import { BasicStringLiteralContext } from "./trinoSqlParser";
import { UnicodeStringLiteralContext } from "./trinoSqlParser";
import { TimeZoneIntervalContext } from "./trinoSqlParser";
import { TimeZoneStringContext } from "./trinoSqlParser";
import { ComparisonOperatorContext } from "./trinoSqlParser";
import { ComparisonQuantifierContext } from "./trinoSqlParser";
import { BooleanValueContext } from "./trinoSqlParser";
import { IntervalContext } from "./trinoSqlParser";
import { IntervalFieldContext } from "./trinoSqlParser";
import { NormalFormContext } from "./trinoSqlParser";
import { RowTypeContext } from "./trinoSqlParser";
import { IntervalTypeContext } from "./trinoSqlParser";
import { ArrayTypeContext } from "./trinoSqlParser";
import { DoublePrecisionTypeContext } from "./trinoSqlParser";
import { LegacyArrayTypeContext } from "./trinoSqlParser";
import { GenericTypeContext } from "./trinoSqlParser";
import { DateTimeTypeContext } from "./trinoSqlParser";
import { LegacyMapTypeContext } from "./trinoSqlParser";
import { RowFieldContext } from "./trinoSqlParser";
import { TypeParameterContext } from "./trinoSqlParser";
import { WhenClauseContext } from "./trinoSqlParser";
import { FilterContext } from "./trinoSqlParser";
import { MergeUpdateContext } from "./trinoSqlParser";
import { MergeDeleteContext } from "./trinoSqlParser";
import { MergeInsertContext } from "./trinoSqlParser";
import { OverContext } from "./trinoSqlParser";
import { WindowFrameContext } from "./trinoSqlParser";
import { FrameExtentContext } from "./trinoSqlParser";
import { UnboundedFrameContext } from "./trinoSqlParser";
import { CurrentRowBoundContext } from "./trinoSqlParser";
import { BoundedFrameContext } from "./trinoSqlParser";
import { QuantifiedPrimaryContext } from "./trinoSqlParser";
import { PatternConcatenationContext } from "./trinoSqlParser";
import { PatternAlternationContext } from "./trinoSqlParser";
import { PatternVariableContext } from "./trinoSqlParser";
import { EmptyPatternContext } from "./trinoSqlParser";
import { PatternPermutationContext } from "./trinoSqlParser";
import { GroupedPatternContext } from "./trinoSqlParser";
import { PartitionStartAnchorContext } from "./trinoSqlParser";
import { PartitionEndAnchorContext } from "./trinoSqlParser";
import { ExcludedPatternContext } from "./trinoSqlParser";
import { ZeroOrMoreQuantifierContext } from "./trinoSqlParser";
import { OneOrMoreQuantifierContext } from "./trinoSqlParser";
import { ZeroOrOneQuantifierContext } from "./trinoSqlParser";
import { RangeQuantifierContext } from "./trinoSqlParser";
import { UpdateAssignmentContext } from "./trinoSqlParser";
import { ExplainFormatContext } from "./trinoSqlParser";
import { ExplainTypeContext } from "./trinoSqlParser";
import { IsolationLevelContext } from "./trinoSqlParser";
import { TransactionAccessModeContext } from "./trinoSqlParser";
import { ReadUncommittedContext } from "./trinoSqlParser";
import { ReadCommittedContext } from "./trinoSqlParser";
import { RepeatableReadContext } from "./trinoSqlParser";
import { SerializableContext } from "./trinoSqlParser";
import { PositionalArgumentContext } from "./trinoSqlParser";
import { NamedArgumentContext } from "./trinoSqlParser";
import { QualifiedArgumentContext } from "./trinoSqlParser";
import { UnqualifiedArgumentContext } from "./trinoSqlParser";
import { PathSpecificationContext } from "./trinoSqlParser";
import { PrivilegeContext } from "./trinoSqlParser";
import { QualifiedNameContext } from "./trinoSqlParser";
import { QueryPeriodContext } from "./trinoSqlParser";
import { RangeTypeContext } from "./trinoSqlParser";
import { SpecifiedPrincipalContext } from "./trinoSqlParser";
import { CurrentUserGrantorContext } from "./trinoSqlParser";
import { CurrentRoleGrantorContext } from "./trinoSqlParser";
import { UnspecifiedPrincipalContext } from "./trinoSqlParser";
import { UserPrincipalContext } from "./trinoSqlParser";
import { RolePrincipalContext } from "./trinoSqlParser";
import { RolesContext } from "./trinoSqlParser";
import { UnquotedIdentifierContext } from "./trinoSqlParser";
import { QuotedIdentifierContext } from "./trinoSqlParser";
import { BackQuotedIdentifierContext } from "./trinoSqlParser";
import { DigitIdentifierContext } from "./trinoSqlParser";
import { DecimalLiteralContext } from "./trinoSqlParser";
import { DoubleLiteralContext } from "./trinoSqlParser";
import { IntegerLiteralContext } from "./trinoSqlParser";
import { NonReservedContext } from "./trinoSqlParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `trinoSqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class trinoSqlParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `trinoSqlParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.statements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatements?: (ctx: StatementsContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.singleStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleStatement?: (ctx: SingleStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.standaloneExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandaloneExpression?: (ctx: StandaloneExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.standalonePathSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandalonePathSpecification?: (ctx: StandalonePathSpecificationContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.standaloneType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandaloneType?: (ctx: StandaloneTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.standaloneRowPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandaloneRowPattern?: (ctx: StandaloneRowPatternContext) => Result;
	/**
	 * Visit a parse tree produced by the `statementDefault`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementDefault?: (ctx: StatementDefaultContext) => Result;
	/**
	 * Visit a parse tree produced by the `use`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUse?: (ctx: UseContext) => Result;
	/**
	 * Visit a parse tree produced by the `createSchema`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateSchema?: (ctx: CreateSchemaContext) => Result;
	/**
	 * Visit a parse tree produced by the `dropSchema`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropSchema?: (ctx: DropSchemaContext) => Result;
	/**
	 * Visit a parse tree produced by the `renameSchema`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameSchema?: (ctx: RenameSchemaContext) => Result;
	/**
	 * Visit a parse tree produced by the `setSchemaAuthorization`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetSchemaAuthorization?: (ctx: SetSchemaAuthorizationContext) => Result;
	/**
	 * Visit a parse tree produced by the `createTableAsSelect`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTableAsSelect?: (ctx: CreateTableAsSelectContext) => Result;
	/**
	 * Visit a parse tree produced by the `createTable`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTable?: (ctx: CreateTableContext) => Result;
	/**
	 * Visit a parse tree produced by the `dropTable`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropTable?: (ctx: DropTableContext) => Result;
	/**
	 * Visit a parse tree produced by the `insertInto`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertInto?: (ctx: InsertIntoContext) => Result;
	/**
	 * Visit a parse tree produced by the `delete`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelete?: (ctx: DeleteContext) => Result;
	/**
	 * Visit a parse tree produced by the `truncateTable`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTruncateTable?: (ctx: TruncateTableContext) => Result;
	/**
	 * Visit a parse tree produced by the `commentTable`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentTable?: (ctx: CommentTableContext) => Result;
	/**
	 * Visit a parse tree produced by the `commentView`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentView?: (ctx: CommentViewContext) => Result;
	/**
	 * Visit a parse tree produced by the `commentColumn`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentColumn?: (ctx: CommentColumnContext) => Result;
	/**
	 * Visit a parse tree produced by the `renameTable`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameTable?: (ctx: RenameTableContext) => Result;
	/**
	 * Visit a parse tree produced by the `addColumn`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddColumn?: (ctx: AddColumnContext) => Result;
	/**
	 * Visit a parse tree produced by the `renameColumn`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameColumn?: (ctx: RenameColumnContext) => Result;
	/**
	 * Visit a parse tree produced by the `dropColumn`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropColumn?: (ctx: DropColumnContext) => Result;
	/**
	 * Visit a parse tree produced by the `setColumnType`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetColumnType?: (ctx: SetColumnTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `setTableAuthorization`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetTableAuthorization?: (ctx: SetTableAuthorizationContext) => Result;
	/**
	 * Visit a parse tree produced by the `setTableProperties`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetTableProperties?: (ctx: SetTablePropertiesContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableExecute`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableExecute?: (ctx: TableExecuteContext) => Result;
	/**
	 * Visit a parse tree produced by the `analyze`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnalyze?: (ctx: AnalyzeContext) => Result;
	/**
	 * Visit a parse tree produced by the `createMaterializedView`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => Result;
	/**
	 * Visit a parse tree produced by the `createView`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateView?: (ctx: CreateViewContext) => Result;
	/**
	 * Visit a parse tree produced by the `refreshMaterializedView`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefreshMaterializedView?: (ctx: RefreshMaterializedViewContext) => Result;
	/**
	 * Visit a parse tree produced by the `dropMaterializedView`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropMaterializedView?: (ctx: DropMaterializedViewContext) => Result;
	/**
	 * Visit a parse tree produced by the `renameMaterializedView`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameMaterializedView?: (ctx: RenameMaterializedViewContext) => Result;
	/**
	 * Visit a parse tree produced by the `setMaterializedViewProperties`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetMaterializedViewProperties?: (ctx: SetMaterializedViewPropertiesContext) => Result;
	/**
	 * Visit a parse tree produced by the `dropView`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropView?: (ctx: DropViewContext) => Result;
	/**
	 * Visit a parse tree produced by the `renameView`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameView?: (ctx: RenameViewContext) => Result;
	/**
	 * Visit a parse tree produced by the `setViewAuthorization`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetViewAuthorization?: (ctx: SetViewAuthorizationContext) => Result;
	/**
	 * Visit a parse tree produced by the `call`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCall?: (ctx: CallContext) => Result;
	/**
	 * Visit a parse tree produced by the `createRole`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateRole?: (ctx: CreateRoleContext) => Result;
	/**
	 * Visit a parse tree produced by the `dropRole`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropRole?: (ctx: DropRoleContext) => Result;
	/**
	 * Visit a parse tree produced by the `grantRoles`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrantRoles?: (ctx: GrantRolesContext) => Result;
	/**
	 * Visit a parse tree produced by the `revokeRoles`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRevokeRoles?: (ctx: RevokeRolesContext) => Result;
	/**
	 * Visit a parse tree produced by the `setRole`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetRole?: (ctx: SetRoleContext) => Result;
	/**
	 * Visit a parse tree produced by the `grant`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrant?: (ctx: GrantContext) => Result;
	/**
	 * Visit a parse tree produced by the `deny`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeny?: (ctx: DenyContext) => Result;
	/**
	 * Visit a parse tree produced by the `revoke`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRevoke?: (ctx: RevokeContext) => Result;
	/**
	 * Visit a parse tree produced by the `showGrants`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowGrants?: (ctx: ShowGrantsContext) => Result;
	/**
	 * Visit a parse tree produced by the `explain`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplain?: (ctx: ExplainContext) => Result;
	/**
	 * Visit a parse tree produced by the `explainAnalyze`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplainAnalyze?: (ctx: ExplainAnalyzeContext) => Result;
	/**
	 * Visit a parse tree produced by the `showCreateTable`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCreateTable?: (ctx: ShowCreateTableContext) => Result;
	/**
	 * Visit a parse tree produced by the `showCreateSchema`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCreateSchema?: (ctx: ShowCreateSchemaContext) => Result;
	/**
	 * Visit a parse tree produced by the `showCreateView`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCreateView?: (ctx: ShowCreateViewContext) => Result;
	/**
	 * Visit a parse tree produced by the `showCreateMaterializedView`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCreateMaterializedView?: (ctx: ShowCreateMaterializedViewContext) => Result;
	/**
	 * Visit a parse tree produced by the `showTables`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowTables?: (ctx: ShowTablesContext) => Result;
	/**
	 * Visit a parse tree produced by the `showSchemas`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowSchemas?: (ctx: ShowSchemasContext) => Result;
	/**
	 * Visit a parse tree produced by the `showCatalogs`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCatalogs?: (ctx: ShowCatalogsContext) => Result;
	/**
	 * Visit a parse tree produced by the `showColumns`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowColumns?: (ctx: ShowColumnsContext) => Result;
	/**
	 * Visit a parse tree produced by the `showStats`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowStats?: (ctx: ShowStatsContext) => Result;
	/**
	 * Visit a parse tree produced by the `showStatsForQuery`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowStatsForQuery?: (ctx: ShowStatsForQueryContext) => Result;
	/**
	 * Visit a parse tree produced by the `showRoles`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowRoles?: (ctx: ShowRolesContext) => Result;
	/**
	 * Visit a parse tree produced by the `showRoleGrants`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowRoleGrants?: (ctx: ShowRoleGrantsContext) => Result;
	/**
	 * Visit a parse tree produced by the `showFunctions`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowFunctions?: (ctx: ShowFunctionsContext) => Result;
	/**
	 * Visit a parse tree produced by the `showSession`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowSession?: (ctx: ShowSessionContext) => Result;
	/**
	 * Visit a parse tree produced by the `setSession`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetSession?: (ctx: SetSessionContext) => Result;
	/**
	 * Visit a parse tree produced by the `resetSession`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResetSession?: (ctx: ResetSessionContext) => Result;
	/**
	 * Visit a parse tree produced by the `startTransaction`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStartTransaction?: (ctx: StartTransactionContext) => Result;
	/**
	 * Visit a parse tree produced by the `commit`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommit?: (ctx: CommitContext) => Result;
	/**
	 * Visit a parse tree produced by the `rollback`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRollback?: (ctx: RollbackContext) => Result;
	/**
	 * Visit a parse tree produced by the `prepare`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrepare?: (ctx: PrepareContext) => Result;
	/**
	 * Visit a parse tree produced by the `deallocate`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeallocate?: (ctx: DeallocateContext) => Result;
	/**
	 * Visit a parse tree produced by the `execute`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecute?: (ctx: ExecuteContext) => Result;
	/**
	 * Visit a parse tree produced by the `describeInput`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescribeInput?: (ctx: DescribeInputContext) => Result;
	/**
	 * Visit a parse tree produced by the `describeOutput`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescribeOutput?: (ctx: DescribeOutputContext) => Result;
	/**
	 * Visit a parse tree produced by the `setPath`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetPath?: (ctx: SetPathContext) => Result;
	/**
	 * Visit a parse tree produced by the `setTimeZone`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetTimeZone?: (ctx: SetTimeZoneContext) => Result;
	/**
	 * Visit a parse tree produced by the `update`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdate?: (ctx: UpdateContext) => Result;
	/**
	 * Visit a parse tree produced by the `merge`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMerge?: (ctx: MergeContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery?: (ctx: QueryContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.with`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWith?: (ctx: WithContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.tableElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableElement?: (ctx: TableElementContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.columnDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnDefinition?: (ctx: ColumnDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.likeClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLikeClause?: (ctx: LikeClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.properties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProperties?: (ctx: PropertiesContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.propertyAssignments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyAssignments?: (ctx: PropertyAssignmentsContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.property`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProperty?: (ctx: PropertyContext) => Result;
	/**
	 * Visit a parse tree produced by the `defaultPropertyValue`
	 * labeled alternative in `trinoSqlParser.propertyValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultPropertyValue?: (ctx: DefaultPropertyValueContext) => Result;
	/**
	 * Visit a parse tree produced by the `nonDefaultPropertyValue`
	 * labeled alternative in `trinoSqlParser.propertyValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonDefaultPropertyValue?: (ctx: NonDefaultPropertyValueContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.queryNoWith`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryNoWith?: (ctx: QueryNoWithContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.limitRowCount`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLimitRowCount?: (ctx: LimitRowCountContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.rowCount`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowCount?: (ctx: RowCountContext) => Result;
	/**
	 * Visit a parse tree produced by the `queryTermDefault`
	 * labeled alternative in `trinoSqlParser.queryTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryTermDefault?: (ctx: QueryTermDefaultContext) => Result;
	/**
	 * Visit a parse tree produced by the `setOperation`
	 * labeled alternative in `trinoSqlParser.queryTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetOperation?: (ctx: SetOperationContext) => Result;
	/**
	 * Visit a parse tree produced by the `queryPrimaryDefault`
	 * labeled alternative in `trinoSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => Result;
	/**
	 * Visit a parse tree produced by the `table`
	 * labeled alternative in `trinoSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable?: (ctx: TableContext) => Result;
	/**
	 * Visit a parse tree produced by the `inlineTable`
	 * labeled alternative in `trinoSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineTable?: (ctx: InlineTableContext) => Result;
	/**
	 * Visit a parse tree produced by the `subquery`
	 * labeled alternative in `trinoSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubquery?: (ctx: SubqueryContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.sortItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSortItem?: (ctx: SortItemContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.querySpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuerySpecification?: (ctx: QuerySpecificationContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.groupBy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupBy?: (ctx: GroupByContext) => Result;
	/**
	 * Visit a parse tree produced by the `singleGroupingSet`
	 * labeled alternative in `trinoSqlParser.groupingElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleGroupingSet?: (ctx: SingleGroupingSetContext) => Result;
	/**
	 * Visit a parse tree produced by the `rollup`
	 * labeled alternative in `trinoSqlParser.groupingElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRollup?: (ctx: RollupContext) => Result;
	/**
	 * Visit a parse tree produced by the `cube`
	 * labeled alternative in `trinoSqlParser.groupingElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCube?: (ctx: CubeContext) => Result;
	/**
	 * Visit a parse tree produced by the `multipleGroupingSets`
	 * labeled alternative in `trinoSqlParser.groupingElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultipleGroupingSets?: (ctx: MultipleGroupingSetsContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.groupingSet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingSet?: (ctx: GroupingSetContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.windowDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowDefinition?: (ctx: WindowDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.windowSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowSpecification?: (ctx: WindowSpecificationContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.namedQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedQuery?: (ctx: NamedQueryContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.setQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetQuantifier?: (ctx: SetQuantifierContext) => Result;
	/**
	 * Visit a parse tree produced by the `selectSingle`
	 * labeled alternative in `trinoSqlParser.selectItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectSingle?: (ctx: SelectSingleContext) => Result;
	/**
	 * Visit a parse tree produced by the `selectAll`
	 * labeled alternative in `trinoSqlParser.selectItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectAll?: (ctx: SelectAllContext) => Result;
	/**
	 * Visit a parse tree produced by the `relationDefault`
	 * labeled alternative in `trinoSqlParser.relation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationDefault?: (ctx: RelationDefaultContext) => Result;
	/**
	 * Visit a parse tree produced by the `joinRelation`
	 * labeled alternative in `trinoSqlParser.relation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinRelation?: (ctx: JoinRelationContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.joinType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinType?: (ctx: JoinTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.joinCriteria`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinCriteria?: (ctx: JoinCriteriaContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.sampledRelation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSampledRelation?: (ctx: SampledRelationContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.sampleType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSampleType?: (ctx: SampleTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.trimsSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrimsSpecification?: (ctx: TrimsSpecificationContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.listAggOverflowBehavior`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListAggOverflowBehavior?: (ctx: ListAggOverflowBehaviorContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.listaggCountIndication`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListaggCountIndication?: (ctx: ListaggCountIndicationContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.patternRecognition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternRecognition?: (ctx: PatternRecognitionContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.measureDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMeasureDefinition?: (ctx: MeasureDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.rowsPerMatch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowsPerMatch?: (ctx: RowsPerMatchContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.emptyMatchHandling`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyMatchHandling?: (ctx: EmptyMatchHandlingContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.skipTo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkipTo?: (ctx: SkipToContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.subsetDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubsetDefinition?: (ctx: SubsetDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.variableDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDefinition?: (ctx: VariableDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.aliasedRelation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAliasedRelation?: (ctx: AliasedRelationContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.columnAliases`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnAliases?: (ctx: ColumnAliasesContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableName`
	 * labeled alternative in `trinoSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableName?: (ctx: TableNameContext) => Result;
	/**
	 * Visit a parse tree produced by the `subqueryRelation`
	 * labeled alternative in `trinoSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubqueryRelation?: (ctx: SubqueryRelationContext) => Result;
	/**
	 * Visit a parse tree produced by the `unnest`
	 * labeled alternative in `trinoSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnnest?: (ctx: UnnestContext) => Result;
	/**
	 * Visit a parse tree produced by the `lateral`
	 * labeled alternative in `trinoSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLateral?: (ctx: LateralContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableFunctionInvocation`
	 * labeled alternative in `trinoSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableFunctionInvocation?: (ctx: TableFunctionInvocationContext) => Result;
	/**
	 * Visit a parse tree produced by the `parenthesizedRelation`
	 * labeled alternative in `trinoSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedRelation?: (ctx: ParenthesizedRelationContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.tableFunctionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableFunctionCall?: (ctx: TableFunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.tableFunctionArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableFunctionArgument?: (ctx: TableFunctionArgumentContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.tableArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableArgument?: (ctx: TableArgumentContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableArgumentTable`
	 * labeled alternative in `trinoSqlParser.tableArgumentRelation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableArgumentTable?: (ctx: TableArgumentTableContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableArgumentQuery`
	 * labeled alternative in `trinoSqlParser.tableArgumentRelation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableArgumentQuery?: (ctx: TableArgumentQueryContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.descriptorArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescriptorArgument?: (ctx: DescriptorArgumentContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.descriptorField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescriptorField?: (ctx: DescriptorFieldContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.copartitionTables`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCopartitionTables?: (ctx: CopartitionTablesContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `logicalNot`
	 * labeled alternative in `trinoSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalNot?: (ctx: LogicalNotContext) => Result;
	/**
	 * Visit a parse tree produced by the `predicated`
	 * labeled alternative in `trinoSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicated?: (ctx: PredicatedContext) => Result;
	/**
	 * Visit a parse tree produced by the `or`
	 * labeled alternative in `trinoSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOr?: (ctx: OrContext) => Result;
	/**
	 * Visit a parse tree produced by the `and`
	 * labeled alternative in `trinoSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnd?: (ctx: AndContext) => Result;
	/**
	 * Visit a parse tree produced by the `comparison`
	 * labeled alternative in `trinoSqlParser.predicate_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;
	/**
	 * Visit a parse tree produced by the `quantifiedComparison`
	 * labeled alternative in `trinoSqlParser.predicate_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantifiedComparison?: (ctx: QuantifiedComparisonContext) => Result;
	/**
	 * Visit a parse tree produced by the `between`
	 * labeled alternative in `trinoSqlParser.predicate_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBetween?: (ctx: BetweenContext) => Result;
	/**
	 * Visit a parse tree produced by the `inList`
	 * labeled alternative in `trinoSqlParser.predicate_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInList?: (ctx: InListContext) => Result;
	/**
	 * Visit a parse tree produced by the `inSubquery`
	 * labeled alternative in `trinoSqlParser.predicate_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInSubquery?: (ctx: InSubqueryContext) => Result;
	/**
	 * Visit a parse tree produced by the `like`
	 * labeled alternative in `trinoSqlParser.predicate_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLike?: (ctx: LikeContext) => Result;
	/**
	 * Visit a parse tree produced by the `nullPredicate`
	 * labeled alternative in `trinoSqlParser.predicate_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullPredicate?: (ctx: NullPredicateContext) => Result;
	/**
	 * Visit a parse tree produced by the `distinctFrom`
	 * labeled alternative in `trinoSqlParser.predicate_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDistinctFrom?: (ctx: DistinctFromContext) => Result;
	/**
	 * Visit a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `trinoSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => Result;
	/**
	 * Visit a parse tree produced by the `concatenation`
	 * labeled alternative in `trinoSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConcatenation?: (ctx: ConcatenationContext) => Result;
	/**
	 * Visit a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `trinoSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => Result;
	/**
	 * Visit a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `trinoSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => Result;
	/**
	 * Visit a parse tree produced by the `atTimeZone`
	 * labeled alternative in `trinoSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtTimeZone?: (ctx: AtTimeZoneContext) => Result;
	/**
	 * Visit a parse tree produced by the `dereference`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDereference?: (ctx: DereferenceContext) => Result;
	/**
	 * Visit a parse tree produced by the `typeConstructor`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeConstructor?: (ctx: TypeConstructorContext) => Result;
	/**
	 * Visit a parse tree produced by the `jsonValue`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonValue?: (ctx: JsonValueContext) => Result;
	/**
	 * Visit a parse tree produced by the `specialDateTimeFunction`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecialDateTimeFunction?: (ctx: SpecialDateTimeFunctionContext) => Result;
	/**
	 * Visit a parse tree produced by the `substring`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubstring?: (ctx: SubstringContext) => Result;
	/**
	 * Visit a parse tree produced by the `cast`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCast?: (ctx: CastContext) => Result;
	/**
	 * Visit a parse tree produced by the `lambda`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambda?: (ctx: LambdaContext) => Result;
	/**
	 * Visit a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `trim`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrim?: (ctx: TrimContext) => Result;
	/**
	 * Visit a parse tree produced by the `parameter`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;
	/**
	 * Visit a parse tree produced by the `normalize`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalize?: (ctx: NormalizeContext) => Result;
	/**
	 * Visit a parse tree produced by the `jsonObject`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonObject?: (ctx: JsonObjectContext) => Result;
	/**
	 * Visit a parse tree produced by the `intervalLiteral`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalLiteral?: (ctx: IntervalLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `numericLiteral`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericLiteral?: (ctx: NumericLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `jsonArray`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonArray?: (ctx: JsonArrayContext) => Result;
	/**
	 * Visit a parse tree produced by the `simpleCase`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleCase?: (ctx: SimpleCaseContext) => Result;
	/**
	 * Visit a parse tree produced by the `columnReference`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnReference?: (ctx: ColumnReferenceContext) => Result;
	/**
	 * Visit a parse tree produced by the `nullLiteral`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullLiteral?: (ctx: NullLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `rowConstructor`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowConstructor?: (ctx: RowConstructorContext) => Result;
	/**
	 * Visit a parse tree produced by the `subscript`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscript?: (ctx: SubscriptContext) => Result;
	/**
	 * Visit a parse tree produced by the `jsonExists`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonExists?: (ctx: JsonExistsContext) => Result;
	/**
	 * Visit a parse tree produced by the `currentPath`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentPath?: (ctx: CurrentPathContext) => Result;
	/**
	 * Visit a parse tree produced by the `subqueryExpression`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubqueryExpression?: (ctx: SubqueryExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `binaryLiteral`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryLiteral?: (ctx: BinaryLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `currentUser`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentUser?: (ctx: CurrentUserContext) => Result;
	/**
	 * Visit a parse tree produced by the `jsonQuery`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonQuery?: (ctx: JsonQueryContext) => Result;
	/**
	 * Visit a parse tree produced by the `measure`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMeasure?: (ctx: MeasureContext) => Result;
	/**
	 * Visit a parse tree produced by the `extract`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtract?: (ctx: ExtractContext) => Result;
	/**
	 * Visit a parse tree produced by the `stringLiteral`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `arrayConstructor`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayConstructor?: (ctx: ArrayConstructorContext) => Result;
	/**
	 * Visit a parse tree produced by the `functionCall`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by the `currentSchema`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentSchema?: (ctx: CurrentSchemaContext) => Result;
	/**
	 * Visit a parse tree produced by the `exists`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExists?: (ctx: ExistsContext) => Result;
	/**
	 * Visit a parse tree produced by the `position`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPosition?: (ctx: PositionContext) => Result;
	/**
	 * Visit a parse tree produced by the `listagg`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListagg?: (ctx: ListaggContext) => Result;
	/**
	 * Visit a parse tree produced by the `searchedCase`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearchedCase?: (ctx: SearchedCaseContext) => Result;
	/**
	 * Visit a parse tree produced by the `currentCatalog`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentCatalog?: (ctx: CurrentCatalogContext) => Result;
	/**
	 * Visit a parse tree produced by the `groupingOperation`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingOperation?: (ctx: GroupingOperationContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.jsonPathInvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonPathInvocation?: (ctx: JsonPathInvocationContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.jsonValueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonValueExpression?: (ctx: JsonValueExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.jsonRepresentation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonRepresentation?: (ctx: JsonRepresentationContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.jsonArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonArgument?: (ctx: JsonArgumentContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.jsonExistsErrorBehavior`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonExistsErrorBehavior?: (ctx: JsonExistsErrorBehaviorContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.jsonValueBehavior`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonValueBehavior?: (ctx: JsonValueBehaviorContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.jsonQueryWrapperBehavior`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonQueryWrapperBehavior?: (ctx: JsonQueryWrapperBehaviorContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.jsonQueryBehavior`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonQueryBehavior?: (ctx: JsonQueryBehaviorContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.jsonObjectMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonObjectMember?: (ctx: JsonObjectMemberContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.processingMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcessingMode?: (ctx: ProcessingModeContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.nullTreatment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullTreatment?: (ctx: NullTreatmentContext) => Result;
	/**
	 * Visit a parse tree produced by the `basicStringLiteral`
	 * labeled alternative in `trinoSqlParser.string_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasicStringLiteral?: (ctx: BasicStringLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `unicodeStringLiteral`
	 * labeled alternative in `trinoSqlParser.string_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnicodeStringLiteral?: (ctx: UnicodeStringLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `timeZoneInterval`
	 * labeled alternative in `trinoSqlParser.timeZoneSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeZoneInterval?: (ctx: TimeZoneIntervalContext) => Result;
	/**
	 * Visit a parse tree produced by the `timeZoneString`
	 * labeled alternative in `trinoSqlParser.timeZoneSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeZoneString?: (ctx: TimeZoneStringContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.comparisonOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.comparisonQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonQuantifier?: (ctx: ComparisonQuantifierContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.booleanValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanValue?: (ctx: BooleanValueContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.interval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterval?: (ctx: IntervalContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.intervalField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalField?: (ctx: IntervalFieldContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.normalForm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalForm?: (ctx: NormalFormContext) => Result;
	/**
	 * Visit a parse tree produced by the `rowType`
	 * labeled alternative in `trinoSqlParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowType?: (ctx: RowTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `intervalType`
	 * labeled alternative in `trinoSqlParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalType?: (ctx: IntervalTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `arrayType`
	 * labeled alternative in `trinoSqlParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayType?: (ctx: ArrayTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `doublePrecisionType`
	 * labeled alternative in `trinoSqlParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoublePrecisionType?: (ctx: DoublePrecisionTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `legacyArrayType`
	 * labeled alternative in `trinoSqlParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLegacyArrayType?: (ctx: LegacyArrayTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `genericType`
	 * labeled alternative in `trinoSqlParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericType?: (ctx: GenericTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `dateTimeType`
	 * labeled alternative in `trinoSqlParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateTimeType?: (ctx: DateTimeTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `legacyMapType`
	 * labeled alternative in `trinoSqlParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLegacyMapType?: (ctx: LegacyMapTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.rowField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowField?: (ctx: RowFieldContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.typeParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameter?: (ctx: TypeParameterContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.whenClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenClause?: (ctx: WhenClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.filter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilter?: (ctx: FilterContext) => Result;
	/**
	 * Visit a parse tree produced by the `mergeUpdate`
	 * labeled alternative in `trinoSqlParser.mergeCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMergeUpdate?: (ctx: MergeUpdateContext) => Result;
	/**
	 * Visit a parse tree produced by the `mergeDelete`
	 * labeled alternative in `trinoSqlParser.mergeCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMergeDelete?: (ctx: MergeDeleteContext) => Result;
	/**
	 * Visit a parse tree produced by the `mergeInsert`
	 * labeled alternative in `trinoSqlParser.mergeCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMergeInsert?: (ctx: MergeInsertContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.over`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOver?: (ctx: OverContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.windowFrame`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowFrame?: (ctx: WindowFrameContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.frameExtent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrameExtent?: (ctx: FrameExtentContext) => Result;
	/**
	 * Visit a parse tree produced by the `unboundedFrame`
	 * labeled alternative in `trinoSqlParser.frameBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnboundedFrame?: (ctx: UnboundedFrameContext) => Result;
	/**
	 * Visit a parse tree produced by the `currentRowBound`
	 * labeled alternative in `trinoSqlParser.frameBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentRowBound?: (ctx: CurrentRowBoundContext) => Result;
	/**
	 * Visit a parse tree produced by the `boundedFrame`
	 * labeled alternative in `trinoSqlParser.frameBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoundedFrame?: (ctx: BoundedFrameContext) => Result;
	/**
	 * Visit a parse tree produced by the `quantifiedPrimary`
	 * labeled alternative in `trinoSqlParser.rowPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantifiedPrimary?: (ctx: QuantifiedPrimaryContext) => Result;
	/**
	 * Visit a parse tree produced by the `patternConcatenation`
	 * labeled alternative in `trinoSqlParser.rowPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternConcatenation?: (ctx: PatternConcatenationContext) => Result;
	/**
	 * Visit a parse tree produced by the `patternAlternation`
	 * labeled alternative in `trinoSqlParser.rowPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternAlternation?: (ctx: PatternAlternationContext) => Result;
	/**
	 * Visit a parse tree produced by the `patternVariable`
	 * labeled alternative in `trinoSqlParser.patternPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternVariable?: (ctx: PatternVariableContext) => Result;
	/**
	 * Visit a parse tree produced by the `emptyPattern`
	 * labeled alternative in `trinoSqlParser.patternPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyPattern?: (ctx: EmptyPatternContext) => Result;
	/**
	 * Visit a parse tree produced by the `patternPermutation`
	 * labeled alternative in `trinoSqlParser.patternPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternPermutation?: (ctx: PatternPermutationContext) => Result;
	/**
	 * Visit a parse tree produced by the `groupedPattern`
	 * labeled alternative in `trinoSqlParser.patternPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupedPattern?: (ctx: GroupedPatternContext) => Result;
	/**
	 * Visit a parse tree produced by the `partitionStartAnchor`
	 * labeled alternative in `trinoSqlParser.patternPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionStartAnchor?: (ctx: PartitionStartAnchorContext) => Result;
	/**
	 * Visit a parse tree produced by the `partitionEndAnchor`
	 * labeled alternative in `trinoSqlParser.patternPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionEndAnchor?: (ctx: PartitionEndAnchorContext) => Result;
	/**
	 * Visit a parse tree produced by the `excludedPattern`
	 * labeled alternative in `trinoSqlParser.patternPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExcludedPattern?: (ctx: ExcludedPatternContext) => Result;
	/**
	 * Visit a parse tree produced by the `zeroOrMoreQuantifier`
	 * labeled alternative in `trinoSqlParser.patternQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZeroOrMoreQuantifier?: (ctx: ZeroOrMoreQuantifierContext) => Result;
	/**
	 * Visit a parse tree produced by the `oneOrMoreQuantifier`
	 * labeled alternative in `trinoSqlParser.patternQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOneOrMoreQuantifier?: (ctx: OneOrMoreQuantifierContext) => Result;
	/**
	 * Visit a parse tree produced by the `zeroOrOneQuantifier`
	 * labeled alternative in `trinoSqlParser.patternQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZeroOrOneQuantifier?: (ctx: ZeroOrOneQuantifierContext) => Result;
	/**
	 * Visit a parse tree produced by the `rangeQuantifier`
	 * labeled alternative in `trinoSqlParser.patternQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRangeQuantifier?: (ctx: RangeQuantifierContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.updateAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdateAssignment?: (ctx: UpdateAssignmentContext) => Result;
	/**
	 * Visit a parse tree produced by the `explainFormat`
	 * labeled alternative in `trinoSqlParser.explainOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplainFormat?: (ctx: ExplainFormatContext) => Result;
	/**
	 * Visit a parse tree produced by the `explainType`
	 * labeled alternative in `trinoSqlParser.explainOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplainType?: (ctx: ExplainTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `isolationLevel`
	 * labeled alternative in `trinoSqlParser.transactionMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsolationLevel?: (ctx: IsolationLevelContext) => Result;
	/**
	 * Visit a parse tree produced by the `transactionAccessMode`
	 * labeled alternative in `trinoSqlParser.transactionMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransactionAccessMode?: (ctx: TransactionAccessModeContext) => Result;
	/**
	 * Visit a parse tree produced by the `readUncommitted`
	 * labeled alternative in `trinoSqlParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReadUncommitted?: (ctx: ReadUncommittedContext) => Result;
	/**
	 * Visit a parse tree produced by the `readCommitted`
	 * labeled alternative in `trinoSqlParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReadCommitted?: (ctx: ReadCommittedContext) => Result;
	/**
	 * Visit a parse tree produced by the `repeatableRead`
	 * labeled alternative in `trinoSqlParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeatableRead?: (ctx: RepeatableReadContext) => Result;
	/**
	 * Visit a parse tree produced by the `serializable`
	 * labeled alternative in `trinoSqlParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSerializable?: (ctx: SerializableContext) => Result;
	/**
	 * Visit a parse tree produced by the `positionalArgument`
	 * labeled alternative in `trinoSqlParser.callArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPositionalArgument?: (ctx: PositionalArgumentContext) => Result;
	/**
	 * Visit a parse tree produced by the `namedArgument`
	 * labeled alternative in `trinoSqlParser.callArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedArgument?: (ctx: NamedArgumentContext) => Result;
	/**
	 * Visit a parse tree produced by the `qualifiedArgument`
	 * labeled alternative in `trinoSqlParser.pathElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedArgument?: (ctx: QualifiedArgumentContext) => Result;
	/**
	 * Visit a parse tree produced by the `unqualifiedArgument`
	 * labeled alternative in `trinoSqlParser.pathElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnqualifiedArgument?: (ctx: UnqualifiedArgumentContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.pathSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPathSpecification?: (ctx: PathSpecificationContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.privilege`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivilege?: (ctx: PrivilegeContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.queryPeriod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryPeriod?: (ctx: QueryPeriodContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.rangeType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRangeType?: (ctx: RangeTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `specifiedPrincipal`
	 * labeled alternative in `trinoSqlParser.grantor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecifiedPrincipal?: (ctx: SpecifiedPrincipalContext) => Result;
	/**
	 * Visit a parse tree produced by the `currentUserGrantor`
	 * labeled alternative in `trinoSqlParser.grantor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentUserGrantor?: (ctx: CurrentUserGrantorContext) => Result;
	/**
	 * Visit a parse tree produced by the `currentRoleGrantor`
	 * labeled alternative in `trinoSqlParser.grantor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentRoleGrantor?: (ctx: CurrentRoleGrantorContext) => Result;
	/**
	 * Visit a parse tree produced by the `unspecifiedPrincipal`
	 * labeled alternative in `trinoSqlParser.principal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnspecifiedPrincipal?: (ctx: UnspecifiedPrincipalContext) => Result;
	/**
	 * Visit a parse tree produced by the `userPrincipal`
	 * labeled alternative in `trinoSqlParser.principal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUserPrincipal?: (ctx: UserPrincipalContext) => Result;
	/**
	 * Visit a parse tree produced by the `rolePrincipal`
	 * labeled alternative in `trinoSqlParser.principal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRolePrincipal?: (ctx: RolePrincipalContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.roles`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoles?: (ctx: RolesContext) => Result;
	/**
	 * Visit a parse tree produced by the `unquotedIdentifier`
	 * labeled alternative in `trinoSqlParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by the `quotedIdentifier`
	 * labeled alternative in `trinoSqlParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by the `backQuotedIdentifier`
	 * labeled alternative in `trinoSqlParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by the `digitIdentifier`
	 * labeled alternative in `trinoSqlParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDigitIdentifier?: (ctx: DigitIdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by the `decimalLiteral`
	 * labeled alternative in `trinoSqlParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimalLiteral?: (ctx: DecimalLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `doubleLiteral`
	 * labeled alternative in `trinoSqlParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoubleLiteral?: (ctx: DoubleLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `integerLiteral`
	 * labeled alternative in `trinoSqlParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerLiteral?: (ctx: IntegerLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParser.nonReserved`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonReserved?: (ctx: NonReservedContext) => Result;
}

