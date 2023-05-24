// Generated from /Users/zhenglin/Documents/parser/dt-sql-parser/src/grammar/trinosql/trinoSqlParser.g4 by ANTLR 4.12.0

import {ParseTreeVisitor} from 'antlr4';


import { ProgramContext } from "./trinoSqlParserParser";
import { StatementsContext } from "./trinoSqlParserParser";
import { SingleStatementContext } from "./trinoSqlParserParser";
import { StandaloneExpressionContext } from "./trinoSqlParserParser";
import { StandalonePathSpecificationContext } from "./trinoSqlParserParser";
import { StandaloneTypeContext } from "./trinoSqlParserParser";
import { StandaloneRowPatternContext } from "./trinoSqlParserParser";
import { StatementDefaultContext } from "./trinoSqlParserParser";
import { UseContext } from "./trinoSqlParserParser";
import { CreateSchemaContext } from "./trinoSqlParserParser";
import { DropSchemaContext } from "./trinoSqlParserParser";
import { RenameSchemaContext } from "./trinoSqlParserParser";
import { SetSchemaAuthorizationContext } from "./trinoSqlParserParser";
import { CreateTableAsSelectContext } from "./trinoSqlParserParser";
import { CreateTableContext } from "./trinoSqlParserParser";
import { DropTableContext } from "./trinoSqlParserParser";
import { InsertIntoContext } from "./trinoSqlParserParser";
import { DeleteContext } from "./trinoSqlParserParser";
import { TruncateTableContext } from "./trinoSqlParserParser";
import { RenameTableContext } from "./trinoSqlParserParser";
import { CommentTableContext } from "./trinoSqlParserParser";
import { CommentColumnContext } from "./trinoSqlParserParser";
import { RenameColumnContext } from "./trinoSqlParserParser";
import { DropColumnContext } from "./trinoSqlParserParser";
import { AddColumnContext } from "./trinoSqlParserParser";
import { SetTableAuthorizationContext } from "./trinoSqlParserParser";
import { SetTablePropertiesContext } from "./trinoSqlParserParser";
import { TableExecuteContext } from "./trinoSqlParserParser";
import { AnalyzeContext } from "./trinoSqlParserParser";
import { CreateMaterializedViewContext } from "./trinoSqlParserParser";
import { CreateViewContext } from "./trinoSqlParserParser";
import { RefreshMaterializedViewContext } from "./trinoSqlParserParser";
import { DropMaterializedViewContext } from "./trinoSqlParserParser";
import { RenameMaterializedViewContext } from "./trinoSqlParserParser";
import { SetMaterializedViewPropertiesContext } from "./trinoSqlParserParser";
import { DropViewContext } from "./trinoSqlParserParser";
import { RenameViewContext } from "./trinoSqlParserParser";
import { SetViewAuthorizationContext } from "./trinoSqlParserParser";
import { CallContext } from "./trinoSqlParserParser";
import { CreateRoleContext } from "./trinoSqlParserParser";
import { DropRoleContext } from "./trinoSqlParserParser";
import { GrantRolesContext } from "./trinoSqlParserParser";
import { RevokeRolesContext } from "./trinoSqlParserParser";
import { SetRoleContext } from "./trinoSqlParserParser";
import { GrantContext } from "./trinoSqlParserParser";
import { DenyContext } from "./trinoSqlParserParser";
import { RevokeContext } from "./trinoSqlParserParser";
import { ShowGrantsContext } from "./trinoSqlParserParser";
import { ExplainContext } from "./trinoSqlParserParser";
import { ShowCreateTableContext } from "./trinoSqlParserParser";
import { ShowCreateSchemaContext } from "./trinoSqlParserParser";
import { ShowCreateViewContext } from "./trinoSqlParserParser";
import { ShowCreateMaterializedViewContext } from "./trinoSqlParserParser";
import { ShowTablesContext } from "./trinoSqlParserParser";
import { ShowSchemasContext } from "./trinoSqlParserParser";
import { ShowCatalogsContext } from "./trinoSqlParserParser";
import { ShowColumnsContext } from "./trinoSqlParserParser";
import { ShowStatsContext } from "./trinoSqlParserParser";
import { ShowStatsForQueryContext } from "./trinoSqlParserParser";
import { ShowRolesContext } from "./trinoSqlParserParser";
import { ShowRoleGrantsContext } from "./trinoSqlParserParser";
import { ShowFunctionsContext } from "./trinoSqlParserParser";
import { ShowSessionContext } from "./trinoSqlParserParser";
import { SetSessionContext } from "./trinoSqlParserParser";
import { ResetSessionContext } from "./trinoSqlParserParser";
import { StartTransactionContext } from "./trinoSqlParserParser";
import { CommitContext } from "./trinoSqlParserParser";
import { RollbackContext } from "./trinoSqlParserParser";
import { PrepareContext } from "./trinoSqlParserParser";
import { DeallocateContext } from "./trinoSqlParserParser";
import { ExecuteContext } from "./trinoSqlParserParser";
import { DescribeInputContext } from "./trinoSqlParserParser";
import { DescribeOutputContext } from "./trinoSqlParserParser";
import { SetPathContext } from "./trinoSqlParserParser";
import { SetTimeZoneContext } from "./trinoSqlParserParser";
import { UpdateContext } from "./trinoSqlParserParser";
import { MergeContext } from "./trinoSqlParserParser";
import { ShowTableCommentContext } from "./trinoSqlParserParser";
import { ShowColumnCommentContext } from "./trinoSqlParserParser";
import { QueryContext } from "./trinoSqlParserParser";
import { WithContext } from "./trinoSqlParserParser";
import { TableElementContext } from "./trinoSqlParserParser";
import { ColumnDefinitionContext } from "./trinoSqlParserParser";
import { LikeClauseContext } from "./trinoSqlParserParser";
import { PropertiesContext } from "./trinoSqlParserParser";
import { PropertyAssignmentsContext } from "./trinoSqlParserParser";
import { PropertyContext } from "./trinoSqlParserParser";
import { DefaultPropertyValueContext } from "./trinoSqlParserParser";
import { NonDefaultPropertyValueContext } from "./trinoSqlParserParser";
import { QueryNoWithContext } from "./trinoSqlParserParser";
import { LimitRowCountContext } from "./trinoSqlParserParser";
import { RowCountContext } from "./trinoSqlParserParser";
import { QueryTermDefaultContext } from "./trinoSqlParserParser";
import { SetOperationContext } from "./trinoSqlParserParser";
import { QueryPrimaryDefaultContext } from "./trinoSqlParserParser";
import { TableContext } from "./trinoSqlParserParser";
import { InlineTableContext } from "./trinoSqlParserParser";
import { SubqueryContext } from "./trinoSqlParserParser";
import { SortItemContext } from "./trinoSqlParserParser";
import { QuerySpecificationContext } from "./trinoSqlParserParser";
import { GroupByContext } from "./trinoSqlParserParser";
import { SingleGroupingSetContext } from "./trinoSqlParserParser";
import { RollupContext } from "./trinoSqlParserParser";
import { CubeContext } from "./trinoSqlParserParser";
import { MultipleGroupingSetsContext } from "./trinoSqlParserParser";
import { GroupingSetContext } from "./trinoSqlParserParser";
import { WindowDefinitionContext } from "./trinoSqlParserParser";
import { WindowSpecificationContext } from "./trinoSqlParserParser";
import { NamedQueryContext } from "./trinoSqlParserParser";
import { SetQuantifierContext } from "./trinoSqlParserParser";
import { SelectSingleContext } from "./trinoSqlParserParser";
import { SelectAllContext } from "./trinoSqlParserParser";
import { RelationDefaultContext } from "./trinoSqlParserParser";
import { JoinRelationContext } from "./trinoSqlParserParser";
import { JoinTypeContext } from "./trinoSqlParserParser";
import { JoinCriteriaContext } from "./trinoSqlParserParser";
import { SampledRelationContext } from "./trinoSqlParserParser";
import { SampleTypeContext } from "./trinoSqlParserParser";
import { PatternRecognitionContext } from "./trinoSqlParserParser";
import { MeasureDefinitionContext } from "./trinoSqlParserParser";
import { RowsPerMatchContext } from "./trinoSqlParserParser";
import { EmptyMatchHandlingContext } from "./trinoSqlParserParser";
import { SkipToContext } from "./trinoSqlParserParser";
import { SubsetDefinitionContext } from "./trinoSqlParserParser";
import { VariableDefinitionContext } from "./trinoSqlParserParser";
import { AliasedRelationContext } from "./trinoSqlParserParser";
import { ColumnAliasesContext } from "./trinoSqlParserParser";
import { TableNameContext } from "./trinoSqlParserParser";
import { SubqueryRelationContext } from "./trinoSqlParserParser";
import { UnnestContext } from "./trinoSqlParserParser";
import { LateralContext } from "./trinoSqlParserParser";
import { ParenthesizedRelationContext } from "./trinoSqlParserParser";
import { ExpressionContext } from "./trinoSqlParserParser";
import { LogicalNotContext } from "./trinoSqlParserParser";
import { PredicatedContext } from "./trinoSqlParserParser";
import { LogicalBinaryContext } from "./trinoSqlParserParser";
import { ComparisonContext } from "./trinoSqlParserParser";
import { QuantifiedComparisonContext } from "./trinoSqlParserParser";
import { BetweenContext } from "./trinoSqlParserParser";
import { InListContext } from "./trinoSqlParserParser";
import { InSubqueryContext } from "./trinoSqlParserParser";
import { LikeContext } from "./trinoSqlParserParser";
import { NullPredicateContext } from "./trinoSqlParserParser";
import { DistinctFromContext } from "./trinoSqlParserParser";
import { ValueExpressionDefaultContext } from "./trinoSqlParserParser";
import { ConcatenationContext } from "./trinoSqlParserParser";
import { ArithmeticBinaryContext } from "./trinoSqlParserParser";
import { ArithmeticUnaryContext } from "./trinoSqlParserParser";
import { AtTimeZoneContext } from "./trinoSqlParserParser";
import { DereferenceContext } from "./trinoSqlParserParser";
import { TypeConstructorContext } from "./trinoSqlParserParser";
import { SpecialDateTimeFunctionContext } from "./trinoSqlParserParser";
import { SubstringContext } from "./trinoSqlParserParser";
import { CastContext } from "./trinoSqlParserParser";
import { LambdaContext } from "./trinoSqlParserParser";
import { ParenthesizedExpressionContext } from "./trinoSqlParserParser";
import { ParameterContext } from "./trinoSqlParserParser";
import { NormalizeContext } from "./trinoSqlParserParser";
import { IntervalLiteralContext } from "./trinoSqlParserParser";
import { NumericLiteralContext } from "./trinoSqlParserParser";
import { BooleanLiteralContext } from "./trinoSqlParserParser";
import { SimpleCaseContext } from "./trinoSqlParserParser";
import { ColumnReferenceContext } from "./trinoSqlParserParser";
import { NullLiteralContext } from "./trinoSqlParserParser";
import { RowConstructorContext } from "./trinoSqlParserParser";
import { SubscriptContext } from "./trinoSqlParserParser";
import { CurrentPathContext } from "./trinoSqlParserParser";
import { SubqueryExpressionContext } from "./trinoSqlParserParser";
import { BinaryLiteralContext } from "./trinoSqlParserParser";
import { CurrentUserContext } from "./trinoSqlParserParser";
import { MeasureContext } from "./trinoSqlParserParser";
import { ExtractContext } from "./trinoSqlParserParser";
import { StringLiteralContext } from "./trinoSqlParserParser";
import { ArrayConstructorContext } from "./trinoSqlParserParser";
import { FunctionCallContext } from "./trinoSqlParserParser";
import { CurrentSchemaContext } from "./trinoSqlParserParser";
import { ExistsContext } from "./trinoSqlParserParser";
import { PositionContext } from "./trinoSqlParserParser";
import { SearchedCaseContext } from "./trinoSqlParserParser";
import { CurrentCatalogContext } from "./trinoSqlParserParser";
import { GroupingOperationContext } from "./trinoSqlParserParser";
import { ProcessingModeContext } from "./trinoSqlParserParser";
import { NullTreatmentContext } from "./trinoSqlParserParser";
import { BasicStringLiteralContext } from "./trinoSqlParserParser";
import { UnicodeStringLiteralContext } from "./trinoSqlParserParser";
import { TimeZoneIntervalContext } from "./trinoSqlParserParser";
import { TimeZoneStringContext } from "./trinoSqlParserParser";
import { ComparisonOperatorContext } from "./trinoSqlParserParser";
import { ComparisonQuantifierContext } from "./trinoSqlParserParser";
import { BooleanValueContext } from "./trinoSqlParserParser";
import { IntervalContext } from "./trinoSqlParserParser";
import { IntervalFieldContext } from "./trinoSqlParserParser";
import { NormalFormContext } from "./trinoSqlParserParser";
import { RowTypeContext } from "./trinoSqlParserParser";
import { IntervalTypeContext } from "./trinoSqlParserParser";
import { ArrayTypeContext } from "./trinoSqlParserParser";
import { DoublePrecisionTypeContext } from "./trinoSqlParserParser";
import { LegacyArrayTypeContext } from "./trinoSqlParserParser";
import { GenericTypeContext } from "./trinoSqlParserParser";
import { DateTimeTypeContext } from "./trinoSqlParserParser";
import { LegacyMapTypeContext } from "./trinoSqlParserParser";
import { RowFieldContext } from "./trinoSqlParserParser";
import { TypeParameterContext } from "./trinoSqlParserParser";
import { WhenClauseContext } from "./trinoSqlParserParser";
import { FilterContext } from "./trinoSqlParserParser";
import { MergeUpdateContext } from "./trinoSqlParserParser";
import { MergeDeleteContext } from "./trinoSqlParserParser";
import { MergeInsertContext } from "./trinoSqlParserParser";
import { OverContext } from "./trinoSqlParserParser";
import { WindowFrameContext } from "./trinoSqlParserParser";
import { FrameExtentContext } from "./trinoSqlParserParser";
import { UnboundedFrameContext } from "./trinoSqlParserParser";
import { CurrentRowBoundContext } from "./trinoSqlParserParser";
import { BoundedFrameContext } from "./trinoSqlParserParser";
import { QuantifiedPrimaryContext } from "./trinoSqlParserParser";
import { PatternConcatenationContext } from "./trinoSqlParserParser";
import { PatternAlternationContext } from "./trinoSqlParserParser";
import { PatternVariableContext } from "./trinoSqlParserParser";
import { EmptyPatternContext } from "./trinoSqlParserParser";
import { PatternPermutationContext } from "./trinoSqlParserParser";
import { GroupedPatternContext } from "./trinoSqlParserParser";
import { PartitionStartAnchorContext } from "./trinoSqlParserParser";
import { PartitionEndAnchorContext } from "./trinoSqlParserParser";
import { ExcludedPatternContext } from "./trinoSqlParserParser";
import { ZeroOrMoreQuantifierContext } from "./trinoSqlParserParser";
import { OneOrMoreQuantifierContext } from "./trinoSqlParserParser";
import { ZeroOrOneQuantifierContext } from "./trinoSqlParserParser";
import { RangeQuantifierContext } from "./trinoSqlParserParser";
import { UpdateAssignmentContext } from "./trinoSqlParserParser";
import { ExplainFormatContext } from "./trinoSqlParserParser";
import { ExplainTypeContext } from "./trinoSqlParserParser";
import { IsolationLevelContext } from "./trinoSqlParserParser";
import { TransactionAccessModeContext } from "./trinoSqlParserParser";
import { ReadUncommittedContext } from "./trinoSqlParserParser";
import { ReadCommittedContext } from "./trinoSqlParserParser";
import { RepeatableReadContext } from "./trinoSqlParserParser";
import { SerializableContext } from "./trinoSqlParserParser";
import { PositionalArgumentContext } from "./trinoSqlParserParser";
import { NamedArgumentContext } from "./trinoSqlParserParser";
import { QualifiedArgumentContext } from "./trinoSqlParserParser";
import { UnqualifiedArgumentContext } from "./trinoSqlParserParser";
import { PathSpecificationContext } from "./trinoSqlParserParser";
import { PrivilegeContext } from "./trinoSqlParserParser";
import { QualifiedNameContext } from "./trinoSqlParserParser";
import { SpecifiedPrincipalContext } from "./trinoSqlParserParser";
import { CurrentUserGrantorContext } from "./trinoSqlParserParser";
import { CurrentRoleGrantorContext } from "./trinoSqlParserParser";
import { UnspecifiedPrincipalContext } from "./trinoSqlParserParser";
import { UserPrincipalContext } from "./trinoSqlParserParser";
import { RolePrincipalContext } from "./trinoSqlParserParser";
import { RolesContext } from "./trinoSqlParserParser";
import { UnquotedIdentifierContext } from "./trinoSqlParserParser";
import { QuotedIdentifierContext } from "./trinoSqlParserParser";
import { BackQuotedIdentifierContext } from "./trinoSqlParserParser";
import { DigitIdentifierContext } from "./trinoSqlParserParser";
import { DecimalLiteralContext } from "./trinoSqlParserParser";
import { DoubleLiteralContext } from "./trinoSqlParserParser";
import { IntegerLiteralContext } from "./trinoSqlParserParser";
import { NonReservedContext } from "./trinoSqlParserParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `trinoSqlParserParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class trinoSqlParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.statements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatements?: (ctx: StatementsContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.singleStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleStatement?: (ctx: SingleStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.standaloneExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandaloneExpression?: (ctx: StandaloneExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.standalonePathSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandalonePathSpecification?: (ctx: StandalonePathSpecificationContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.standaloneType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandaloneType?: (ctx: StandaloneTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.standaloneRowPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandaloneRowPattern?: (ctx: StandaloneRowPatternContext) => Result;
	/**
	 * Visit a parse tree produced by the `statementDefault`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementDefault?: (ctx: StatementDefaultContext) => Result;
	/**
	 * Visit a parse tree produced by the `use`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUse?: (ctx: UseContext) => Result;
	/**
	 * Visit a parse tree produced by the `createSchema`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateSchema?: (ctx: CreateSchemaContext) => Result;
	/**
	 * Visit a parse tree produced by the `dropSchema`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropSchema?: (ctx: DropSchemaContext) => Result;
	/**
	 * Visit a parse tree produced by the `renameSchema`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameSchema?: (ctx: RenameSchemaContext) => Result;
	/**
	 * Visit a parse tree produced by the `setSchemaAuthorization`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetSchemaAuthorization?: (ctx: SetSchemaAuthorizationContext) => Result;
	/**
	 * Visit a parse tree produced by the `createTableAsSelect`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTableAsSelect?: (ctx: CreateTableAsSelectContext) => Result;
	/**
	 * Visit a parse tree produced by the `createTable`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTable?: (ctx: CreateTableContext) => Result;
	/**
	 * Visit a parse tree produced by the `dropTable`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropTable?: (ctx: DropTableContext) => Result;
	/**
	 * Visit a parse tree produced by the `insertInto`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertInto?: (ctx: InsertIntoContext) => Result;
	/**
	 * Visit a parse tree produced by the `delete`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelete?: (ctx: DeleteContext) => Result;
	/**
	 * Visit a parse tree produced by the `truncateTable`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTruncateTable?: (ctx: TruncateTableContext) => Result;
	/**
	 * Visit a parse tree produced by the `renameTable`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameTable?: (ctx: RenameTableContext) => Result;
	/**
	 * Visit a parse tree produced by the `commentTable`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentTable?: (ctx: CommentTableContext) => Result;
	/**
	 * Visit a parse tree produced by the `commentColumn`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentColumn?: (ctx: CommentColumnContext) => Result;
	/**
	 * Visit a parse tree produced by the `renameColumn`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameColumn?: (ctx: RenameColumnContext) => Result;
	/**
	 * Visit a parse tree produced by the `dropColumn`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropColumn?: (ctx: DropColumnContext) => Result;
	/**
	 * Visit a parse tree produced by the `addColumn`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddColumn?: (ctx: AddColumnContext) => Result;
	/**
	 * Visit a parse tree produced by the `setTableAuthorization`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetTableAuthorization?: (ctx: SetTableAuthorizationContext) => Result;
	/**
	 * Visit a parse tree produced by the `setTableProperties`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetTableProperties?: (ctx: SetTablePropertiesContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableExecute`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableExecute?: (ctx: TableExecuteContext) => Result;
	/**
	 * Visit a parse tree produced by the `analyze`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnalyze?: (ctx: AnalyzeContext) => Result;
	/**
	 * Visit a parse tree produced by the `createMaterializedView`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => Result;
	/**
	 * Visit a parse tree produced by the `createView`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateView?: (ctx: CreateViewContext) => Result;
	/**
	 * Visit a parse tree produced by the `refreshMaterializedView`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefreshMaterializedView?: (ctx: RefreshMaterializedViewContext) => Result;
	/**
	 * Visit a parse tree produced by the `dropMaterializedView`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropMaterializedView?: (ctx: DropMaterializedViewContext) => Result;
	/**
	 * Visit a parse tree produced by the `renameMaterializedView`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameMaterializedView?: (ctx: RenameMaterializedViewContext) => Result;
	/**
	 * Visit a parse tree produced by the `setMaterializedViewProperties`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetMaterializedViewProperties?: (ctx: SetMaterializedViewPropertiesContext) => Result;
	/**
	 * Visit a parse tree produced by the `dropView`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropView?: (ctx: DropViewContext) => Result;
	/**
	 * Visit a parse tree produced by the `renameView`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameView?: (ctx: RenameViewContext) => Result;
	/**
	 * Visit a parse tree produced by the `setViewAuthorization`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetViewAuthorization?: (ctx: SetViewAuthorizationContext) => Result;
	/**
	 * Visit a parse tree produced by the `call`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCall?: (ctx: CallContext) => Result;
	/**
	 * Visit a parse tree produced by the `createRole`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateRole?: (ctx: CreateRoleContext) => Result;
	/**
	 * Visit a parse tree produced by the `dropRole`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropRole?: (ctx: DropRoleContext) => Result;
	/**
	 * Visit a parse tree produced by the `grantRoles`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrantRoles?: (ctx: GrantRolesContext) => Result;
	/**
	 * Visit a parse tree produced by the `revokeRoles`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRevokeRoles?: (ctx: RevokeRolesContext) => Result;
	/**
	 * Visit a parse tree produced by the `setRole`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetRole?: (ctx: SetRoleContext) => Result;
	/**
	 * Visit a parse tree produced by the `grant`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrant?: (ctx: GrantContext) => Result;
	/**
	 * Visit a parse tree produced by the `deny`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeny?: (ctx: DenyContext) => Result;
	/**
	 * Visit a parse tree produced by the `revoke`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRevoke?: (ctx: RevokeContext) => Result;
	/**
	 * Visit a parse tree produced by the `showGrants`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowGrants?: (ctx: ShowGrantsContext) => Result;
	/**
	 * Visit a parse tree produced by the `explain`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplain?: (ctx: ExplainContext) => Result;
	/**
	 * Visit a parse tree produced by the `showCreateTable`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCreateTable?: (ctx: ShowCreateTableContext) => Result;
	/**
	 * Visit a parse tree produced by the `showCreateSchema`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCreateSchema?: (ctx: ShowCreateSchemaContext) => Result;
	/**
	 * Visit a parse tree produced by the `showCreateView`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCreateView?: (ctx: ShowCreateViewContext) => Result;
	/**
	 * Visit a parse tree produced by the `showCreateMaterializedView`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCreateMaterializedView?: (ctx: ShowCreateMaterializedViewContext) => Result;
	/**
	 * Visit a parse tree produced by the `showTables`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowTables?: (ctx: ShowTablesContext) => Result;
	/**
	 * Visit a parse tree produced by the `showSchemas`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowSchemas?: (ctx: ShowSchemasContext) => Result;
	/**
	 * Visit a parse tree produced by the `showCatalogs`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCatalogs?: (ctx: ShowCatalogsContext) => Result;
	/**
	 * Visit a parse tree produced by the `showColumns`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowColumns?: (ctx: ShowColumnsContext) => Result;
	/**
	 * Visit a parse tree produced by the `showStats`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowStats?: (ctx: ShowStatsContext) => Result;
	/**
	 * Visit a parse tree produced by the `showStatsForQuery`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowStatsForQuery?: (ctx: ShowStatsForQueryContext) => Result;
	/**
	 * Visit a parse tree produced by the `showRoles`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowRoles?: (ctx: ShowRolesContext) => Result;
	/**
	 * Visit a parse tree produced by the `showRoleGrants`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowRoleGrants?: (ctx: ShowRoleGrantsContext) => Result;
	/**
	 * Visit a parse tree produced by the `showFunctions`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowFunctions?: (ctx: ShowFunctionsContext) => Result;
	/**
	 * Visit a parse tree produced by the `showSession`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowSession?: (ctx: ShowSessionContext) => Result;
	/**
	 * Visit a parse tree produced by the `setSession`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetSession?: (ctx: SetSessionContext) => Result;
	/**
	 * Visit a parse tree produced by the `resetSession`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResetSession?: (ctx: ResetSessionContext) => Result;
	/**
	 * Visit a parse tree produced by the `startTransaction`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStartTransaction?: (ctx: StartTransactionContext) => Result;
	/**
	 * Visit a parse tree produced by the `commit`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommit?: (ctx: CommitContext) => Result;
	/**
	 * Visit a parse tree produced by the `rollback`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRollback?: (ctx: RollbackContext) => Result;
	/**
	 * Visit a parse tree produced by the `prepare`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrepare?: (ctx: PrepareContext) => Result;
	/**
	 * Visit a parse tree produced by the `deallocate`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeallocate?: (ctx: DeallocateContext) => Result;
	/**
	 * Visit a parse tree produced by the `execute`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecute?: (ctx: ExecuteContext) => Result;
	/**
	 * Visit a parse tree produced by the `describeInput`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescribeInput?: (ctx: DescribeInputContext) => Result;
	/**
	 * Visit a parse tree produced by the `describeOutput`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescribeOutput?: (ctx: DescribeOutputContext) => Result;
	/**
	 * Visit a parse tree produced by the `setPath`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetPath?: (ctx: SetPathContext) => Result;
	/**
	 * Visit a parse tree produced by the `setTimeZone`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetTimeZone?: (ctx: SetTimeZoneContext) => Result;
	/**
	 * Visit a parse tree produced by the `update`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdate?: (ctx: UpdateContext) => Result;
	/**
	 * Visit a parse tree produced by the `merge`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMerge?: (ctx: MergeContext) => Result;
	/**
	 * Visit a parse tree produced by the `showTableComment`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowTableComment?: (ctx: ShowTableCommentContext) => Result;
	/**
	 * Visit a parse tree produced by the `showColumnComment`
	 * labeled alternative in `trinoSqlParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowColumnComment?: (ctx: ShowColumnCommentContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery?: (ctx: QueryContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.with`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWith?: (ctx: WithContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.tableElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableElement?: (ctx: TableElementContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.columnDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnDefinition?: (ctx: ColumnDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.likeClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLikeClause?: (ctx: LikeClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.properties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProperties?: (ctx: PropertiesContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.propertyAssignments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyAssignments?: (ctx: PropertyAssignmentsContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.property`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProperty?: (ctx: PropertyContext) => Result;
	/**
	 * Visit a parse tree produced by the `defaultPropertyValue`
	 * labeled alternative in `trinoSqlParserParser.propertyValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultPropertyValue?: (ctx: DefaultPropertyValueContext) => Result;
	/**
	 * Visit a parse tree produced by the `nonDefaultPropertyValue`
	 * labeled alternative in `trinoSqlParserParser.propertyValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonDefaultPropertyValue?: (ctx: NonDefaultPropertyValueContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.queryNoWith`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryNoWith?: (ctx: QueryNoWithContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.limitRowCount`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLimitRowCount?: (ctx: LimitRowCountContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.rowCount`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowCount?: (ctx: RowCountContext) => Result;
	/**
	 * Visit a parse tree produced by the `queryTermDefault`
	 * labeled alternative in `trinoSqlParserParser.queryTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryTermDefault?: (ctx: QueryTermDefaultContext) => Result;
	/**
	 * Visit a parse tree produced by the `setOperation`
	 * labeled alternative in `trinoSqlParserParser.queryTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetOperation?: (ctx: SetOperationContext) => Result;
	/**
	 * Visit a parse tree produced by the `queryPrimaryDefault`
	 * labeled alternative in `trinoSqlParserParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => Result;
	/**
	 * Visit a parse tree produced by the `table`
	 * labeled alternative in `trinoSqlParserParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable?: (ctx: TableContext) => Result;
	/**
	 * Visit a parse tree produced by the `inlineTable`
	 * labeled alternative in `trinoSqlParserParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineTable?: (ctx: InlineTableContext) => Result;
	/**
	 * Visit a parse tree produced by the `subquery`
	 * labeled alternative in `trinoSqlParserParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubquery?: (ctx: SubqueryContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.sortItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSortItem?: (ctx: SortItemContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.querySpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuerySpecification?: (ctx: QuerySpecificationContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.groupBy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupBy?: (ctx: GroupByContext) => Result;
	/**
	 * Visit a parse tree produced by the `singleGroupingSet`
	 * labeled alternative in `trinoSqlParserParser.groupingElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleGroupingSet?: (ctx: SingleGroupingSetContext) => Result;
	/**
	 * Visit a parse tree produced by the `rollup`
	 * labeled alternative in `trinoSqlParserParser.groupingElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRollup?: (ctx: RollupContext) => Result;
	/**
	 * Visit a parse tree produced by the `cube`
	 * labeled alternative in `trinoSqlParserParser.groupingElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCube?: (ctx: CubeContext) => Result;
	/**
	 * Visit a parse tree produced by the `multipleGroupingSets`
	 * labeled alternative in `trinoSqlParserParser.groupingElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultipleGroupingSets?: (ctx: MultipleGroupingSetsContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.groupingSet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingSet?: (ctx: GroupingSetContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.windowDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowDefinition?: (ctx: WindowDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.windowSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowSpecification?: (ctx: WindowSpecificationContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.namedQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedQuery?: (ctx: NamedQueryContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.setQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetQuantifier?: (ctx: SetQuantifierContext) => Result;
	/**
	 * Visit a parse tree produced by the `selectSingle`
	 * labeled alternative in `trinoSqlParserParser.selectItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectSingle?: (ctx: SelectSingleContext) => Result;
	/**
	 * Visit a parse tree produced by the `selectAll`
	 * labeled alternative in `trinoSqlParserParser.selectItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectAll?: (ctx: SelectAllContext) => Result;
	/**
	 * Visit a parse tree produced by the `relationDefault`
	 * labeled alternative in `trinoSqlParserParser.relation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationDefault?: (ctx: RelationDefaultContext) => Result;
	/**
	 * Visit a parse tree produced by the `joinRelation`
	 * labeled alternative in `trinoSqlParserParser.relation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinRelation?: (ctx: JoinRelationContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.joinType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinType?: (ctx: JoinTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.joinCriteria`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinCriteria?: (ctx: JoinCriteriaContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.sampledRelation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSampledRelation?: (ctx: SampledRelationContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.sampleType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSampleType?: (ctx: SampleTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.patternRecognition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternRecognition?: (ctx: PatternRecognitionContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.measureDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMeasureDefinition?: (ctx: MeasureDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.rowsPerMatch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowsPerMatch?: (ctx: RowsPerMatchContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.emptyMatchHandling`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyMatchHandling?: (ctx: EmptyMatchHandlingContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.skipTo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkipTo?: (ctx: SkipToContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.subsetDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubsetDefinition?: (ctx: SubsetDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.variableDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDefinition?: (ctx: VariableDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.aliasedRelation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAliasedRelation?: (ctx: AliasedRelationContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.columnAliases`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnAliases?: (ctx: ColumnAliasesContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableName`
	 * labeled alternative in `trinoSqlParserParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableName?: (ctx: TableNameContext) => Result;
	/**
	 * Visit a parse tree produced by the `subqueryRelation`
	 * labeled alternative in `trinoSqlParserParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubqueryRelation?: (ctx: SubqueryRelationContext) => Result;
	/**
	 * Visit a parse tree produced by the `unnest`
	 * labeled alternative in `trinoSqlParserParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnnest?: (ctx: UnnestContext) => Result;
	/**
	 * Visit a parse tree produced by the `lateral`
	 * labeled alternative in `trinoSqlParserParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLateral?: (ctx: LateralContext) => Result;
	/**
	 * Visit a parse tree produced by the `parenthesizedRelation`
	 * labeled alternative in `trinoSqlParserParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedRelation?: (ctx: ParenthesizedRelationContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `logicalNot`
	 * labeled alternative in `trinoSqlParserParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalNot?: (ctx: LogicalNotContext) => Result;
	/**
	 * Visit a parse tree produced by the `predicated`
	 * labeled alternative in `trinoSqlParserParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicated?: (ctx: PredicatedContext) => Result;
	/**
	 * Visit a parse tree produced by the `logicalBinary`
	 * labeled alternative in `trinoSqlParserParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalBinary?: (ctx: LogicalBinaryContext) => Result;
	/**
	 * Visit a parse tree produced by the `comparison`
	 * labeled alternative in `trinoSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;
	/**
	 * Visit a parse tree produced by the `quantifiedComparison`
	 * labeled alternative in `trinoSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantifiedComparison?: (ctx: QuantifiedComparisonContext) => Result;
	/**
	 * Visit a parse tree produced by the `between`
	 * labeled alternative in `trinoSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBetween?: (ctx: BetweenContext) => Result;
	/**
	 * Visit a parse tree produced by the `inList`
	 * labeled alternative in `trinoSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInList?: (ctx: InListContext) => Result;
	/**
	 * Visit a parse tree produced by the `inSubquery`
	 * labeled alternative in `trinoSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInSubquery?: (ctx: InSubqueryContext) => Result;
	/**
	 * Visit a parse tree produced by the `like`
	 * labeled alternative in `trinoSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLike?: (ctx: LikeContext) => Result;
	/**
	 * Visit a parse tree produced by the `nullPredicate`
	 * labeled alternative in `trinoSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullPredicate?: (ctx: NullPredicateContext) => Result;
	/**
	 * Visit a parse tree produced by the `distinctFrom`
	 * labeled alternative in `trinoSqlParserParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDistinctFrom?: (ctx: DistinctFromContext) => Result;
	/**
	 * Visit a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `trinoSqlParserParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => Result;
	/**
	 * Visit a parse tree produced by the `concatenation`
	 * labeled alternative in `trinoSqlParserParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConcatenation?: (ctx: ConcatenationContext) => Result;
	/**
	 * Visit a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `trinoSqlParserParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => Result;
	/**
	 * Visit a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `trinoSqlParserParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => Result;
	/**
	 * Visit a parse tree produced by the `atTimeZone`
	 * labeled alternative in `trinoSqlParserParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtTimeZone?: (ctx: AtTimeZoneContext) => Result;
	/**
	 * Visit a parse tree produced by the `dereference`
	 * labeled alternative in `trinoSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDereference?: (ctx: DereferenceContext) => Result;
	/**
	 * Visit a parse tree produced by the `typeConstructor`
	 * labeled alternative in `trinoSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeConstructor?: (ctx: TypeConstructorContext) => Result;
	/**
	 * Visit a parse tree produced by the `specialDateTimeFunction`
	 * labeled alternative in `trinoSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecialDateTimeFunction?: (ctx: SpecialDateTimeFunctionContext) => Result;
	/**
	 * Visit a parse tree produced by the `substring`
	 * labeled alternative in `trinoSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubstring?: (ctx: SubstringContext) => Result;
	/**
	 * Visit a parse tree produced by the `cast`
	 * labeled alternative in `trinoSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCast?: (ctx: CastContext) => Result;
	/**
	 * Visit a parse tree produced by the `lambda`
	 * labeled alternative in `trinoSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambda?: (ctx: LambdaContext) => Result;
	/**
	 * Visit a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `trinoSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `parameter`
	 * labeled alternative in `trinoSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;
	/**
	 * Visit a parse tree produced by the `normalize`
	 * labeled alternative in `trinoSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalize?: (ctx: NormalizeContext) => Result;
	/**
	 * Visit a parse tree produced by the `intervalLiteral`
	 * labeled alternative in `trinoSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalLiteral?: (ctx: IntervalLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `numericLiteral`
	 * labeled alternative in `trinoSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericLiteral?: (ctx: NumericLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `trinoSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `simpleCase`
	 * labeled alternative in `trinoSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleCase?: (ctx: SimpleCaseContext) => Result;
	/**
	 * Visit a parse tree produced by the `columnReference`
	 * labeled alternative in `trinoSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnReference?: (ctx: ColumnReferenceContext) => Result;
	/**
	 * Visit a parse tree produced by the `nullLiteral`
	 * labeled alternative in `trinoSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullLiteral?: (ctx: NullLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `rowConstructor`
	 * labeled alternative in `trinoSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowConstructor?: (ctx: RowConstructorContext) => Result;
	/**
	 * Visit a parse tree produced by the `subscript`
	 * labeled alternative in `trinoSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscript?: (ctx: SubscriptContext) => Result;
	/**
	 * Visit a parse tree produced by the `currentPath`
	 * labeled alternative in `trinoSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentPath?: (ctx: CurrentPathContext) => Result;
	/**
	 * Visit a parse tree produced by the `subqueryExpression`
	 * labeled alternative in `trinoSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubqueryExpression?: (ctx: SubqueryExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `binaryLiteral`
	 * labeled alternative in `trinoSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryLiteral?: (ctx: BinaryLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `currentUser`
	 * labeled alternative in `trinoSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentUser?: (ctx: CurrentUserContext) => Result;
	/**
	 * Visit a parse tree produced by the `measure`
	 * labeled alternative in `trinoSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMeasure?: (ctx: MeasureContext) => Result;
	/**
	 * Visit a parse tree produced by the `extract`
	 * labeled alternative in `trinoSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtract?: (ctx: ExtractContext) => Result;
	/**
	 * Visit a parse tree produced by the `stringLiteral`
	 * labeled alternative in `trinoSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `arrayConstructor`
	 * labeled alternative in `trinoSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayConstructor?: (ctx: ArrayConstructorContext) => Result;
	/**
	 * Visit a parse tree produced by the `functionCall`
	 * labeled alternative in `trinoSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by the `currentSchema`
	 * labeled alternative in `trinoSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentSchema?: (ctx: CurrentSchemaContext) => Result;
	/**
	 * Visit a parse tree produced by the `exists`
	 * labeled alternative in `trinoSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExists?: (ctx: ExistsContext) => Result;
	/**
	 * Visit a parse tree produced by the `position`
	 * labeled alternative in `trinoSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPosition?: (ctx: PositionContext) => Result;
	/**
	 * Visit a parse tree produced by the `searchedCase`
	 * labeled alternative in `trinoSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearchedCase?: (ctx: SearchedCaseContext) => Result;
	/**
	 * Visit a parse tree produced by the `currentCatalog`
	 * labeled alternative in `trinoSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentCatalog?: (ctx: CurrentCatalogContext) => Result;
	/**
	 * Visit a parse tree produced by the `groupingOperation`
	 * labeled alternative in `trinoSqlParserParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingOperation?: (ctx: GroupingOperationContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.processingMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcessingMode?: (ctx: ProcessingModeContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.nullTreatment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullTreatment?: (ctx: NullTreatmentContext) => Result;
	/**
	 * Visit a parse tree produced by the `basicStringLiteral`
	 * labeled alternative in `trinoSqlParserParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasicStringLiteral?: (ctx: BasicStringLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `unicodeStringLiteral`
	 * labeled alternative in `trinoSqlParserParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnicodeStringLiteral?: (ctx: UnicodeStringLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `timeZoneInterval`
	 * labeled alternative in `trinoSqlParserParser.timeZoneSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeZoneInterval?: (ctx: TimeZoneIntervalContext) => Result;
	/**
	 * Visit a parse tree produced by the `timeZoneString`
	 * labeled alternative in `trinoSqlParserParser.timeZoneSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeZoneString?: (ctx: TimeZoneStringContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.comparisonOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.comparisonQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonQuantifier?: (ctx: ComparisonQuantifierContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.booleanValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanValue?: (ctx: BooleanValueContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.interval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterval?: (ctx: IntervalContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.intervalField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalField?: (ctx: IntervalFieldContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.normalForm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalForm?: (ctx: NormalFormContext) => Result;
	/**
	 * Visit a parse tree produced by the `rowType`
	 * labeled alternative in `trinoSqlParserParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowType?: (ctx: RowTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `intervalType`
	 * labeled alternative in `trinoSqlParserParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalType?: (ctx: IntervalTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `arrayType`
	 * labeled alternative in `trinoSqlParserParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayType?: (ctx: ArrayTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `doublePrecisionType`
	 * labeled alternative in `trinoSqlParserParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoublePrecisionType?: (ctx: DoublePrecisionTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `legacyArrayType`
	 * labeled alternative in `trinoSqlParserParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLegacyArrayType?: (ctx: LegacyArrayTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `genericType`
	 * labeled alternative in `trinoSqlParserParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericType?: (ctx: GenericTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `dateTimeType`
	 * labeled alternative in `trinoSqlParserParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateTimeType?: (ctx: DateTimeTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `legacyMapType`
	 * labeled alternative in `trinoSqlParserParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLegacyMapType?: (ctx: LegacyMapTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.rowField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowField?: (ctx: RowFieldContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.typeParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameter?: (ctx: TypeParameterContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.whenClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenClause?: (ctx: WhenClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.filter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilter?: (ctx: FilterContext) => Result;
	/**
	 * Visit a parse tree produced by the `mergeUpdate`
	 * labeled alternative in `trinoSqlParserParser.mergeCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMergeUpdate?: (ctx: MergeUpdateContext) => Result;
	/**
	 * Visit a parse tree produced by the `mergeDelete`
	 * labeled alternative in `trinoSqlParserParser.mergeCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMergeDelete?: (ctx: MergeDeleteContext) => Result;
	/**
	 * Visit a parse tree produced by the `mergeInsert`
	 * labeled alternative in `trinoSqlParserParser.mergeCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMergeInsert?: (ctx: MergeInsertContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.over`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOver?: (ctx: OverContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.windowFrame`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowFrame?: (ctx: WindowFrameContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.frameExtent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrameExtent?: (ctx: FrameExtentContext) => Result;
	/**
	 * Visit a parse tree produced by the `unboundedFrame`
	 * labeled alternative in `trinoSqlParserParser.frameBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnboundedFrame?: (ctx: UnboundedFrameContext) => Result;
	/**
	 * Visit a parse tree produced by the `currentRowBound`
	 * labeled alternative in `trinoSqlParserParser.frameBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentRowBound?: (ctx: CurrentRowBoundContext) => Result;
	/**
	 * Visit a parse tree produced by the `boundedFrame`
	 * labeled alternative in `trinoSqlParserParser.frameBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoundedFrame?: (ctx: BoundedFrameContext) => Result;
	/**
	 * Visit a parse tree produced by the `quantifiedPrimary`
	 * labeled alternative in `trinoSqlParserParser.rowPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantifiedPrimary?: (ctx: QuantifiedPrimaryContext) => Result;
	/**
	 * Visit a parse tree produced by the `patternConcatenation`
	 * labeled alternative in `trinoSqlParserParser.rowPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternConcatenation?: (ctx: PatternConcatenationContext) => Result;
	/**
	 * Visit a parse tree produced by the `patternAlternation`
	 * labeled alternative in `trinoSqlParserParser.rowPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternAlternation?: (ctx: PatternAlternationContext) => Result;
	/**
	 * Visit a parse tree produced by the `patternVariable`
	 * labeled alternative in `trinoSqlParserParser.patternPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternVariable?: (ctx: PatternVariableContext) => Result;
	/**
	 * Visit a parse tree produced by the `emptyPattern`
	 * labeled alternative in `trinoSqlParserParser.patternPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyPattern?: (ctx: EmptyPatternContext) => Result;
	/**
	 * Visit a parse tree produced by the `patternPermutation`
	 * labeled alternative in `trinoSqlParserParser.patternPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternPermutation?: (ctx: PatternPermutationContext) => Result;
	/**
	 * Visit a parse tree produced by the `groupedPattern`
	 * labeled alternative in `trinoSqlParserParser.patternPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupedPattern?: (ctx: GroupedPatternContext) => Result;
	/**
	 * Visit a parse tree produced by the `partitionStartAnchor`
	 * labeled alternative in `trinoSqlParserParser.patternPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionStartAnchor?: (ctx: PartitionStartAnchorContext) => Result;
	/**
	 * Visit a parse tree produced by the `partitionEndAnchor`
	 * labeled alternative in `trinoSqlParserParser.patternPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionEndAnchor?: (ctx: PartitionEndAnchorContext) => Result;
	/**
	 * Visit a parse tree produced by the `excludedPattern`
	 * labeled alternative in `trinoSqlParserParser.patternPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExcludedPattern?: (ctx: ExcludedPatternContext) => Result;
	/**
	 * Visit a parse tree produced by the `zeroOrMoreQuantifier`
	 * labeled alternative in `trinoSqlParserParser.patternQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZeroOrMoreQuantifier?: (ctx: ZeroOrMoreQuantifierContext) => Result;
	/**
	 * Visit a parse tree produced by the `oneOrMoreQuantifier`
	 * labeled alternative in `trinoSqlParserParser.patternQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOneOrMoreQuantifier?: (ctx: OneOrMoreQuantifierContext) => Result;
	/**
	 * Visit a parse tree produced by the `zeroOrOneQuantifier`
	 * labeled alternative in `trinoSqlParserParser.patternQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZeroOrOneQuantifier?: (ctx: ZeroOrOneQuantifierContext) => Result;
	/**
	 * Visit a parse tree produced by the `rangeQuantifier`
	 * labeled alternative in `trinoSqlParserParser.patternQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRangeQuantifier?: (ctx: RangeQuantifierContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.updateAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdateAssignment?: (ctx: UpdateAssignmentContext) => Result;
	/**
	 * Visit a parse tree produced by the `explainFormat`
	 * labeled alternative in `trinoSqlParserParser.explainOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplainFormat?: (ctx: ExplainFormatContext) => Result;
	/**
	 * Visit a parse tree produced by the `explainType`
	 * labeled alternative in `trinoSqlParserParser.explainOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplainType?: (ctx: ExplainTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `isolationLevel`
	 * labeled alternative in `trinoSqlParserParser.transactionMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsolationLevel?: (ctx: IsolationLevelContext) => Result;
	/**
	 * Visit a parse tree produced by the `transactionAccessMode`
	 * labeled alternative in `trinoSqlParserParser.transactionMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransactionAccessMode?: (ctx: TransactionAccessModeContext) => Result;
	/**
	 * Visit a parse tree produced by the `readUncommitted`
	 * labeled alternative in `trinoSqlParserParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReadUncommitted?: (ctx: ReadUncommittedContext) => Result;
	/**
	 * Visit a parse tree produced by the `readCommitted`
	 * labeled alternative in `trinoSqlParserParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReadCommitted?: (ctx: ReadCommittedContext) => Result;
	/**
	 * Visit a parse tree produced by the `repeatableRead`
	 * labeled alternative in `trinoSqlParserParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeatableRead?: (ctx: RepeatableReadContext) => Result;
	/**
	 * Visit a parse tree produced by the `serializable`
	 * labeled alternative in `trinoSqlParserParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSerializable?: (ctx: SerializableContext) => Result;
	/**
	 * Visit a parse tree produced by the `positionalArgument`
	 * labeled alternative in `trinoSqlParserParser.callArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPositionalArgument?: (ctx: PositionalArgumentContext) => Result;
	/**
	 * Visit a parse tree produced by the `namedArgument`
	 * labeled alternative in `trinoSqlParserParser.callArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedArgument?: (ctx: NamedArgumentContext) => Result;
	/**
	 * Visit a parse tree produced by the `qualifiedArgument`
	 * labeled alternative in `trinoSqlParserParser.pathElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedArgument?: (ctx: QualifiedArgumentContext) => Result;
	/**
	 * Visit a parse tree produced by the `unqualifiedArgument`
	 * labeled alternative in `trinoSqlParserParser.pathElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnqualifiedArgument?: (ctx: UnqualifiedArgumentContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.pathSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPathSpecification?: (ctx: PathSpecificationContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.privilege`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivilege?: (ctx: PrivilegeContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;
	/**
	 * Visit a parse tree produced by the `specifiedPrincipal`
	 * labeled alternative in `trinoSqlParserParser.grantor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecifiedPrincipal?: (ctx: SpecifiedPrincipalContext) => Result;
	/**
	 * Visit a parse tree produced by the `currentUserGrantor`
	 * labeled alternative in `trinoSqlParserParser.grantor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentUserGrantor?: (ctx: CurrentUserGrantorContext) => Result;
	/**
	 * Visit a parse tree produced by the `currentRoleGrantor`
	 * labeled alternative in `trinoSqlParserParser.grantor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentRoleGrantor?: (ctx: CurrentRoleGrantorContext) => Result;
	/**
	 * Visit a parse tree produced by the `unspecifiedPrincipal`
	 * labeled alternative in `trinoSqlParserParser.principal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnspecifiedPrincipal?: (ctx: UnspecifiedPrincipalContext) => Result;
	/**
	 * Visit a parse tree produced by the `userPrincipal`
	 * labeled alternative in `trinoSqlParserParser.principal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUserPrincipal?: (ctx: UserPrincipalContext) => Result;
	/**
	 * Visit a parse tree produced by the `rolePrincipal`
	 * labeled alternative in `trinoSqlParserParser.principal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRolePrincipal?: (ctx: RolePrincipalContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.roles`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoles?: (ctx: RolesContext) => Result;
	/**
	 * Visit a parse tree produced by the `unquotedIdentifier`
	 * labeled alternative in `trinoSqlParserParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by the `quotedIdentifier`
	 * labeled alternative in `trinoSqlParserParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by the `backQuotedIdentifier`
	 * labeled alternative in `trinoSqlParserParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by the `digitIdentifier`
	 * labeled alternative in `trinoSqlParserParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDigitIdentifier?: (ctx: DigitIdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by the `decimalLiteral`
	 * labeled alternative in `trinoSqlParserParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimalLiteral?: (ctx: DecimalLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `doubleLiteral`
	 * labeled alternative in `trinoSqlParserParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoubleLiteral?: (ctx: DoubleLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `integerLiteral`
	 * labeled alternative in `trinoSqlParserParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerLiteral?: (ctx: IntegerLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `trinoSqlParserParser.nonReserved`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonReserved?: (ctx: NonReservedContext) => Result;
}

