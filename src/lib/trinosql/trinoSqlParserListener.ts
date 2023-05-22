// Generated from /Users/zhenglin/Documents/parser/dt-sql-parser/src/grammar/trinosql/trinoSqlParser.g4 by ANTLR 4.12.0

import {ParseTreeListener} from "antlr4";


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
 * This interface defines a complete listener for a parse tree produced by
 * `trinoSqlParser`.
 */
export default class trinoSqlParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `trinoSqlParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.statements`.
	 * @param ctx the parse tree
	 */
	enterStatements?: (ctx: StatementsContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.statements`.
	 * @param ctx the parse tree
	 */
	exitStatements?: (ctx: StatementsContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.singleStatement`.
	 * @param ctx the parse tree
	 */
	enterSingleStatement?: (ctx: SingleStatementContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.singleStatement`.
	 * @param ctx the parse tree
	 */
	exitSingleStatement?: (ctx: SingleStatementContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.standaloneExpression`.
	 * @param ctx the parse tree
	 */
	enterStandaloneExpression?: (ctx: StandaloneExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.standaloneExpression`.
	 * @param ctx the parse tree
	 */
	exitStandaloneExpression?: (ctx: StandaloneExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.standalonePathSpecification`.
	 * @param ctx the parse tree
	 */
	enterStandalonePathSpecification?: (ctx: StandalonePathSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.standalonePathSpecification`.
	 * @param ctx the parse tree
	 */
	exitStandalonePathSpecification?: (ctx: StandalonePathSpecificationContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.standaloneType`.
	 * @param ctx the parse tree
	 */
	enterStandaloneType?: (ctx: StandaloneTypeContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.standaloneType`.
	 * @param ctx the parse tree
	 */
	exitStandaloneType?: (ctx: StandaloneTypeContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.standaloneRowPattern`.
	 * @param ctx the parse tree
	 */
	enterStandaloneRowPattern?: (ctx: StandaloneRowPatternContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.standaloneRowPattern`.
	 * @param ctx the parse tree
	 */
	exitStandaloneRowPattern?: (ctx: StandaloneRowPatternContext) => void;
	/**
	 * Enter a parse tree produced by the `statementDefault`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatementDefault?: (ctx: StatementDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `statementDefault`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatementDefault?: (ctx: StatementDefaultContext) => void;
	/**
	 * Enter a parse tree produced by the `use`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterUse?: (ctx: UseContext) => void;
	/**
	 * Exit a parse tree produced by the `use`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitUse?: (ctx: UseContext) => void;
	/**
	 * Enter a parse tree produced by the `createSchema`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateSchema?: (ctx: CreateSchemaContext) => void;
	/**
	 * Exit a parse tree produced by the `createSchema`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateSchema?: (ctx: CreateSchemaContext) => void;
	/**
	 * Enter a parse tree produced by the `dropSchema`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDropSchema?: (ctx: DropSchemaContext) => void;
	/**
	 * Exit a parse tree produced by the `dropSchema`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDropSchema?: (ctx: DropSchemaContext) => void;
	/**
	 * Enter a parse tree produced by the `renameSchema`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRenameSchema?: (ctx: RenameSchemaContext) => void;
	/**
	 * Exit a parse tree produced by the `renameSchema`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRenameSchema?: (ctx: RenameSchemaContext) => void;
	/**
	 * Enter a parse tree produced by the `setSchemaAuthorization`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSetSchemaAuthorization?: (ctx: SetSchemaAuthorizationContext) => void;
	/**
	 * Exit a parse tree produced by the `setSchemaAuthorization`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSetSchemaAuthorization?: (ctx: SetSchemaAuthorizationContext) => void;
	/**
	 * Enter a parse tree produced by the `createTableAsSelect`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateTableAsSelect?: (ctx: CreateTableAsSelectContext) => void;
	/**
	 * Exit a parse tree produced by the `createTableAsSelect`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateTableAsSelect?: (ctx: CreateTableAsSelectContext) => void;
	/**
	 * Enter a parse tree produced by the `createTable`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateTable?: (ctx: CreateTableContext) => void;
	/**
	 * Exit a parse tree produced by the `createTable`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateTable?: (ctx: CreateTableContext) => void;
	/**
	 * Enter a parse tree produced by the `dropTable`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDropTable?: (ctx: DropTableContext) => void;
	/**
	 * Exit a parse tree produced by the `dropTable`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDropTable?: (ctx: DropTableContext) => void;
	/**
	 * Enter a parse tree produced by the `insertInto`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterInsertInto?: (ctx: InsertIntoContext) => void;
	/**
	 * Exit a parse tree produced by the `insertInto`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitInsertInto?: (ctx: InsertIntoContext) => void;
	/**
	 * Enter a parse tree produced by the `delete`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDelete?: (ctx: DeleteContext) => void;
	/**
	 * Exit a parse tree produced by the `delete`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDelete?: (ctx: DeleteContext) => void;
	/**
	 * Enter a parse tree produced by the `truncateTable`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterTruncateTable?: (ctx: TruncateTableContext) => void;
	/**
	 * Exit a parse tree produced by the `truncateTable`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitTruncateTable?: (ctx: TruncateTableContext) => void;
	/**
	 * Enter a parse tree produced by the `commentTable`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCommentTable?: (ctx: CommentTableContext) => void;
	/**
	 * Exit a parse tree produced by the `commentTable`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCommentTable?: (ctx: CommentTableContext) => void;
	/**
	 * Enter a parse tree produced by the `commentView`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCommentView?: (ctx: CommentViewContext) => void;
	/**
	 * Exit a parse tree produced by the `commentView`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCommentView?: (ctx: CommentViewContext) => void;
	/**
	 * Enter a parse tree produced by the `commentColumn`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCommentColumn?: (ctx: CommentColumnContext) => void;
	/**
	 * Exit a parse tree produced by the `commentColumn`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCommentColumn?: (ctx: CommentColumnContext) => void;
	/**
	 * Enter a parse tree produced by the `renameTable`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRenameTable?: (ctx: RenameTableContext) => void;
	/**
	 * Exit a parse tree produced by the `renameTable`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRenameTable?: (ctx: RenameTableContext) => void;
	/**
	 * Enter a parse tree produced by the `addColumn`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterAddColumn?: (ctx: AddColumnContext) => void;
	/**
	 * Exit a parse tree produced by the `addColumn`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitAddColumn?: (ctx: AddColumnContext) => void;
	/**
	 * Enter a parse tree produced by the `renameColumn`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRenameColumn?: (ctx: RenameColumnContext) => void;
	/**
	 * Exit a parse tree produced by the `renameColumn`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRenameColumn?: (ctx: RenameColumnContext) => void;
	/**
	 * Enter a parse tree produced by the `dropColumn`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDropColumn?: (ctx: DropColumnContext) => void;
	/**
	 * Exit a parse tree produced by the `dropColumn`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDropColumn?: (ctx: DropColumnContext) => void;
	/**
	 * Enter a parse tree produced by the `setColumnType`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSetColumnType?: (ctx: SetColumnTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `setColumnType`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSetColumnType?: (ctx: SetColumnTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `setTableAuthorization`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSetTableAuthorization?: (ctx: SetTableAuthorizationContext) => void;
	/**
	 * Exit a parse tree produced by the `setTableAuthorization`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSetTableAuthorization?: (ctx: SetTableAuthorizationContext) => void;
	/**
	 * Enter a parse tree produced by the `setTableProperties`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSetTableProperties?: (ctx: SetTablePropertiesContext) => void;
	/**
	 * Exit a parse tree produced by the `setTableProperties`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSetTableProperties?: (ctx: SetTablePropertiesContext) => void;
	/**
	 * Enter a parse tree produced by the `tableExecute`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterTableExecute?: (ctx: TableExecuteContext) => void;
	/**
	 * Exit a parse tree produced by the `tableExecute`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitTableExecute?: (ctx: TableExecuteContext) => void;
	/**
	 * Enter a parse tree produced by the `analyze`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterAnalyze?: (ctx: AnalyzeContext) => void;
	/**
	 * Exit a parse tree produced by the `analyze`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitAnalyze?: (ctx: AnalyzeContext) => void;
	/**
	 * Enter a parse tree produced by the `createMaterializedView`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => void;
	/**
	 * Exit a parse tree produced by the `createMaterializedView`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => void;
	/**
	 * Enter a parse tree produced by the `createView`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateView?: (ctx: CreateViewContext) => void;
	/**
	 * Exit a parse tree produced by the `createView`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateView?: (ctx: CreateViewContext) => void;
	/**
	 * Enter a parse tree produced by the `refreshMaterializedView`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRefreshMaterializedView?: (ctx: RefreshMaterializedViewContext) => void;
	/**
	 * Exit a parse tree produced by the `refreshMaterializedView`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRefreshMaterializedView?: (ctx: RefreshMaterializedViewContext) => void;
	/**
	 * Enter a parse tree produced by the `dropMaterializedView`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDropMaterializedView?: (ctx: DropMaterializedViewContext) => void;
	/**
	 * Exit a parse tree produced by the `dropMaterializedView`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDropMaterializedView?: (ctx: DropMaterializedViewContext) => void;
	/**
	 * Enter a parse tree produced by the `renameMaterializedView`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRenameMaterializedView?: (ctx: RenameMaterializedViewContext) => void;
	/**
	 * Exit a parse tree produced by the `renameMaterializedView`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRenameMaterializedView?: (ctx: RenameMaterializedViewContext) => void;
	/**
	 * Enter a parse tree produced by the `setMaterializedViewProperties`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSetMaterializedViewProperties?: (ctx: SetMaterializedViewPropertiesContext) => void;
	/**
	 * Exit a parse tree produced by the `setMaterializedViewProperties`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSetMaterializedViewProperties?: (ctx: SetMaterializedViewPropertiesContext) => void;
	/**
	 * Enter a parse tree produced by the `dropView`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDropView?: (ctx: DropViewContext) => void;
	/**
	 * Exit a parse tree produced by the `dropView`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDropView?: (ctx: DropViewContext) => void;
	/**
	 * Enter a parse tree produced by the `renameView`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRenameView?: (ctx: RenameViewContext) => void;
	/**
	 * Exit a parse tree produced by the `renameView`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRenameView?: (ctx: RenameViewContext) => void;
	/**
	 * Enter a parse tree produced by the `setViewAuthorization`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSetViewAuthorization?: (ctx: SetViewAuthorizationContext) => void;
	/**
	 * Exit a parse tree produced by the `setViewAuthorization`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSetViewAuthorization?: (ctx: SetViewAuthorizationContext) => void;
	/**
	 * Enter a parse tree produced by the `call`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCall?: (ctx: CallContext) => void;
	/**
	 * Exit a parse tree produced by the `call`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCall?: (ctx: CallContext) => void;
	/**
	 * Enter a parse tree produced by the `createRole`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateRole?: (ctx: CreateRoleContext) => void;
	/**
	 * Exit a parse tree produced by the `createRole`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateRole?: (ctx: CreateRoleContext) => void;
	/**
	 * Enter a parse tree produced by the `dropRole`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDropRole?: (ctx: DropRoleContext) => void;
	/**
	 * Exit a parse tree produced by the `dropRole`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDropRole?: (ctx: DropRoleContext) => void;
	/**
	 * Enter a parse tree produced by the `grantRoles`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterGrantRoles?: (ctx: GrantRolesContext) => void;
	/**
	 * Exit a parse tree produced by the `grantRoles`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitGrantRoles?: (ctx: GrantRolesContext) => void;
	/**
	 * Enter a parse tree produced by the `revokeRoles`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRevokeRoles?: (ctx: RevokeRolesContext) => void;
	/**
	 * Exit a parse tree produced by the `revokeRoles`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRevokeRoles?: (ctx: RevokeRolesContext) => void;
	/**
	 * Enter a parse tree produced by the `setRole`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSetRole?: (ctx: SetRoleContext) => void;
	/**
	 * Exit a parse tree produced by the `setRole`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSetRole?: (ctx: SetRoleContext) => void;
	/**
	 * Enter a parse tree produced by the `grant`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterGrant?: (ctx: GrantContext) => void;
	/**
	 * Exit a parse tree produced by the `grant`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitGrant?: (ctx: GrantContext) => void;
	/**
	 * Enter a parse tree produced by the `deny`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDeny?: (ctx: DenyContext) => void;
	/**
	 * Exit a parse tree produced by the `deny`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDeny?: (ctx: DenyContext) => void;
	/**
	 * Enter a parse tree produced by the `revoke`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRevoke?: (ctx: RevokeContext) => void;
	/**
	 * Exit a parse tree produced by the `revoke`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRevoke?: (ctx: RevokeContext) => void;
	/**
	 * Enter a parse tree produced by the `showGrants`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowGrants?: (ctx: ShowGrantsContext) => void;
	/**
	 * Exit a parse tree produced by the `showGrants`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowGrants?: (ctx: ShowGrantsContext) => void;
	/**
	 * Enter a parse tree produced by the `explain`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterExplain?: (ctx: ExplainContext) => void;
	/**
	 * Exit a parse tree produced by the `explain`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitExplain?: (ctx: ExplainContext) => void;
	/**
	 * Enter a parse tree produced by the `explainAnalyze`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterExplainAnalyze?: (ctx: ExplainAnalyzeContext) => void;
	/**
	 * Exit a parse tree produced by the `explainAnalyze`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitExplainAnalyze?: (ctx: ExplainAnalyzeContext) => void;
	/**
	 * Enter a parse tree produced by the `showCreateTable`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowCreateTable?: (ctx: ShowCreateTableContext) => void;
	/**
	 * Exit a parse tree produced by the `showCreateTable`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowCreateTable?: (ctx: ShowCreateTableContext) => void;
	/**
	 * Enter a parse tree produced by the `showCreateSchema`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowCreateSchema?: (ctx: ShowCreateSchemaContext) => void;
	/**
	 * Exit a parse tree produced by the `showCreateSchema`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowCreateSchema?: (ctx: ShowCreateSchemaContext) => void;
	/**
	 * Enter a parse tree produced by the `showCreateView`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowCreateView?: (ctx: ShowCreateViewContext) => void;
	/**
	 * Exit a parse tree produced by the `showCreateView`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowCreateView?: (ctx: ShowCreateViewContext) => void;
	/**
	 * Enter a parse tree produced by the `showCreateMaterializedView`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowCreateMaterializedView?: (ctx: ShowCreateMaterializedViewContext) => void;
	/**
	 * Exit a parse tree produced by the `showCreateMaterializedView`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowCreateMaterializedView?: (ctx: ShowCreateMaterializedViewContext) => void;
	/**
	 * Enter a parse tree produced by the `showTables`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowTables?: (ctx: ShowTablesContext) => void;
	/**
	 * Exit a parse tree produced by the `showTables`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowTables?: (ctx: ShowTablesContext) => void;
	/**
	 * Enter a parse tree produced by the `showSchemas`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowSchemas?: (ctx: ShowSchemasContext) => void;
	/**
	 * Exit a parse tree produced by the `showSchemas`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowSchemas?: (ctx: ShowSchemasContext) => void;
	/**
	 * Enter a parse tree produced by the `showCatalogs`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowCatalogs?: (ctx: ShowCatalogsContext) => void;
	/**
	 * Exit a parse tree produced by the `showCatalogs`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowCatalogs?: (ctx: ShowCatalogsContext) => void;
	/**
	 * Enter a parse tree produced by the `showColumns`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowColumns?: (ctx: ShowColumnsContext) => void;
	/**
	 * Exit a parse tree produced by the `showColumns`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowColumns?: (ctx: ShowColumnsContext) => void;
	/**
	 * Enter a parse tree produced by the `showStats`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowStats?: (ctx: ShowStatsContext) => void;
	/**
	 * Exit a parse tree produced by the `showStats`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowStats?: (ctx: ShowStatsContext) => void;
	/**
	 * Enter a parse tree produced by the `showStatsForQuery`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowStatsForQuery?: (ctx: ShowStatsForQueryContext) => void;
	/**
	 * Exit a parse tree produced by the `showStatsForQuery`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowStatsForQuery?: (ctx: ShowStatsForQueryContext) => void;
	/**
	 * Enter a parse tree produced by the `showRoles`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowRoles?: (ctx: ShowRolesContext) => void;
	/**
	 * Exit a parse tree produced by the `showRoles`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowRoles?: (ctx: ShowRolesContext) => void;
	/**
	 * Enter a parse tree produced by the `showRoleGrants`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowRoleGrants?: (ctx: ShowRoleGrantsContext) => void;
	/**
	 * Exit a parse tree produced by the `showRoleGrants`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowRoleGrants?: (ctx: ShowRoleGrantsContext) => void;
	/**
	 * Enter a parse tree produced by the `showFunctions`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowFunctions?: (ctx: ShowFunctionsContext) => void;
	/**
	 * Exit a parse tree produced by the `showFunctions`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowFunctions?: (ctx: ShowFunctionsContext) => void;
	/**
	 * Enter a parse tree produced by the `showSession`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowSession?: (ctx: ShowSessionContext) => void;
	/**
	 * Exit a parse tree produced by the `showSession`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowSession?: (ctx: ShowSessionContext) => void;
	/**
	 * Enter a parse tree produced by the `setSession`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSetSession?: (ctx: SetSessionContext) => void;
	/**
	 * Exit a parse tree produced by the `setSession`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSetSession?: (ctx: SetSessionContext) => void;
	/**
	 * Enter a parse tree produced by the `resetSession`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterResetSession?: (ctx: ResetSessionContext) => void;
	/**
	 * Exit a parse tree produced by the `resetSession`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitResetSession?: (ctx: ResetSessionContext) => void;
	/**
	 * Enter a parse tree produced by the `startTransaction`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStartTransaction?: (ctx: StartTransactionContext) => void;
	/**
	 * Exit a parse tree produced by the `startTransaction`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStartTransaction?: (ctx: StartTransactionContext) => void;
	/**
	 * Enter a parse tree produced by the `commit`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCommit?: (ctx: CommitContext) => void;
	/**
	 * Exit a parse tree produced by the `commit`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCommit?: (ctx: CommitContext) => void;
	/**
	 * Enter a parse tree produced by the `rollback`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRollback?: (ctx: RollbackContext) => void;
	/**
	 * Exit a parse tree produced by the `rollback`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRollback?: (ctx: RollbackContext) => void;
	/**
	 * Enter a parse tree produced by the `prepare`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterPrepare?: (ctx: PrepareContext) => void;
	/**
	 * Exit a parse tree produced by the `prepare`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitPrepare?: (ctx: PrepareContext) => void;
	/**
	 * Enter a parse tree produced by the `deallocate`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDeallocate?: (ctx: DeallocateContext) => void;
	/**
	 * Exit a parse tree produced by the `deallocate`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDeallocate?: (ctx: DeallocateContext) => void;
	/**
	 * Enter a parse tree produced by the `execute`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterExecute?: (ctx: ExecuteContext) => void;
	/**
	 * Exit a parse tree produced by the `execute`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitExecute?: (ctx: ExecuteContext) => void;
	/**
	 * Enter a parse tree produced by the `describeInput`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDescribeInput?: (ctx: DescribeInputContext) => void;
	/**
	 * Exit a parse tree produced by the `describeInput`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDescribeInput?: (ctx: DescribeInputContext) => void;
	/**
	 * Enter a parse tree produced by the `describeOutput`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDescribeOutput?: (ctx: DescribeOutputContext) => void;
	/**
	 * Exit a parse tree produced by the `describeOutput`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDescribeOutput?: (ctx: DescribeOutputContext) => void;
	/**
	 * Enter a parse tree produced by the `setPath`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSetPath?: (ctx: SetPathContext) => void;
	/**
	 * Exit a parse tree produced by the `setPath`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSetPath?: (ctx: SetPathContext) => void;
	/**
	 * Enter a parse tree produced by the `setTimeZone`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSetTimeZone?: (ctx: SetTimeZoneContext) => void;
	/**
	 * Exit a parse tree produced by the `setTimeZone`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSetTimeZone?: (ctx: SetTimeZoneContext) => void;
	/**
	 * Enter a parse tree produced by the `update`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterUpdate?: (ctx: UpdateContext) => void;
	/**
	 * Exit a parse tree produced by the `update`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitUpdate?: (ctx: UpdateContext) => void;
	/**
	 * Enter a parse tree produced by the `merge`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterMerge?: (ctx: MergeContext) => void;
	/**
	 * Exit a parse tree produced by the `merge`
	 * labeled alternative in `trinoSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitMerge?: (ctx: MergeContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.query`.
	 * @param ctx the parse tree
	 */
	enterQuery?: (ctx: QueryContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.query`.
	 * @param ctx the parse tree
	 */
	exitQuery?: (ctx: QueryContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.with`.
	 * @param ctx the parse tree
	 */
	enterWith?: (ctx: WithContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.with`.
	 * @param ctx the parse tree
	 */
	exitWith?: (ctx: WithContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.tableElement`.
	 * @param ctx the parse tree
	 */
	enterTableElement?: (ctx: TableElementContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.tableElement`.
	 * @param ctx the parse tree
	 */
	exitTableElement?: (ctx: TableElementContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.columnDefinition`.
	 * @param ctx the parse tree
	 */
	enterColumnDefinition?: (ctx: ColumnDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.columnDefinition`.
	 * @param ctx the parse tree
	 */
	exitColumnDefinition?: (ctx: ColumnDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.likeClause`.
	 * @param ctx the parse tree
	 */
	enterLikeClause?: (ctx: LikeClauseContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.likeClause`.
	 * @param ctx the parse tree
	 */
	exitLikeClause?: (ctx: LikeClauseContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.properties`.
	 * @param ctx the parse tree
	 */
	enterProperties?: (ctx: PropertiesContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.properties`.
	 * @param ctx the parse tree
	 */
	exitProperties?: (ctx: PropertiesContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.propertyAssignments`.
	 * @param ctx the parse tree
	 */
	enterPropertyAssignments?: (ctx: PropertyAssignmentsContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.propertyAssignments`.
	 * @param ctx the parse tree
	 */
	exitPropertyAssignments?: (ctx: PropertyAssignmentsContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.property`.
	 * @param ctx the parse tree
	 */
	enterProperty?: (ctx: PropertyContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.property`.
	 * @param ctx the parse tree
	 */
	exitProperty?: (ctx: PropertyContext) => void;
	/**
	 * Enter a parse tree produced by the `defaultPropertyValue`
	 * labeled alternative in `trinoSqlParser.propertyValue`.
	 * @param ctx the parse tree
	 */
	enterDefaultPropertyValue?: (ctx: DefaultPropertyValueContext) => void;
	/**
	 * Exit a parse tree produced by the `defaultPropertyValue`
	 * labeled alternative in `trinoSqlParser.propertyValue`.
	 * @param ctx the parse tree
	 */
	exitDefaultPropertyValue?: (ctx: DefaultPropertyValueContext) => void;
	/**
	 * Enter a parse tree produced by the `nonDefaultPropertyValue`
	 * labeled alternative in `trinoSqlParser.propertyValue`.
	 * @param ctx the parse tree
	 */
	enterNonDefaultPropertyValue?: (ctx: NonDefaultPropertyValueContext) => void;
	/**
	 * Exit a parse tree produced by the `nonDefaultPropertyValue`
	 * labeled alternative in `trinoSqlParser.propertyValue`.
	 * @param ctx the parse tree
	 */
	exitNonDefaultPropertyValue?: (ctx: NonDefaultPropertyValueContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.queryNoWith`.
	 * @param ctx the parse tree
	 */
	enterQueryNoWith?: (ctx: QueryNoWithContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.queryNoWith`.
	 * @param ctx the parse tree
	 */
	exitQueryNoWith?: (ctx: QueryNoWithContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.limitRowCount`.
	 * @param ctx the parse tree
	 */
	enterLimitRowCount?: (ctx: LimitRowCountContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.limitRowCount`.
	 * @param ctx the parse tree
	 */
	exitLimitRowCount?: (ctx: LimitRowCountContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.rowCount`.
	 * @param ctx the parse tree
	 */
	enterRowCount?: (ctx: RowCountContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.rowCount`.
	 * @param ctx the parse tree
	 */
	exitRowCount?: (ctx: RowCountContext) => void;
	/**
	 * Enter a parse tree produced by the `queryTermDefault`
	 * labeled alternative in `trinoSqlParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	enterQueryTermDefault?: (ctx: QueryTermDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `queryTermDefault`
	 * labeled alternative in `trinoSqlParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	exitQueryTermDefault?: (ctx: QueryTermDefaultContext) => void;
	/**
	 * Enter a parse tree produced by the `setOperation`
	 * labeled alternative in `trinoSqlParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	enterSetOperation?: (ctx: SetOperationContext) => void;
	/**
	 * Exit a parse tree produced by the `setOperation`
	 * labeled alternative in `trinoSqlParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	exitSetOperation?: (ctx: SetOperationContext) => void;
	/**
	 * Enter a parse tree produced by the `queryPrimaryDefault`
	 * labeled alternative in `trinoSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	enterQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `queryPrimaryDefault`
	 * labeled alternative in `trinoSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	exitQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => void;
	/**
	 * Enter a parse tree produced by the `table`
	 * labeled alternative in `trinoSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	enterTable?: (ctx: TableContext) => void;
	/**
	 * Exit a parse tree produced by the `table`
	 * labeled alternative in `trinoSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	exitTable?: (ctx: TableContext) => void;
	/**
	 * Enter a parse tree produced by the `inlineTable`
	 * labeled alternative in `trinoSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	enterInlineTable?: (ctx: InlineTableContext) => void;
	/**
	 * Exit a parse tree produced by the `inlineTable`
	 * labeled alternative in `trinoSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	exitInlineTable?: (ctx: InlineTableContext) => void;
	/**
	 * Enter a parse tree produced by the `subquery`
	 * labeled alternative in `trinoSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	enterSubquery?: (ctx: SubqueryContext) => void;
	/**
	 * Exit a parse tree produced by the `subquery`
	 * labeled alternative in `trinoSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	exitSubquery?: (ctx: SubqueryContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.sortItem`.
	 * @param ctx the parse tree
	 */
	enterSortItem?: (ctx: SortItemContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.sortItem`.
	 * @param ctx the parse tree
	 */
	exitSortItem?: (ctx: SortItemContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.querySpecification`.
	 * @param ctx the parse tree
	 */
	enterQuerySpecification?: (ctx: QuerySpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.querySpecification`.
	 * @param ctx the parse tree
	 */
	exitQuerySpecification?: (ctx: QuerySpecificationContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.groupBy`.
	 * @param ctx the parse tree
	 */
	enterGroupBy?: (ctx: GroupByContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.groupBy`.
	 * @param ctx the parse tree
	 */
	exitGroupBy?: (ctx: GroupByContext) => void;
	/**
	 * Enter a parse tree produced by the `singleGroupingSet`
	 * labeled alternative in `trinoSqlParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	enterSingleGroupingSet?: (ctx: SingleGroupingSetContext) => void;
	/**
	 * Exit a parse tree produced by the `singleGroupingSet`
	 * labeled alternative in `trinoSqlParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	exitSingleGroupingSet?: (ctx: SingleGroupingSetContext) => void;
	/**
	 * Enter a parse tree produced by the `rollup`
	 * labeled alternative in `trinoSqlParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	enterRollup?: (ctx: RollupContext) => void;
	/**
	 * Exit a parse tree produced by the `rollup`
	 * labeled alternative in `trinoSqlParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	exitRollup?: (ctx: RollupContext) => void;
	/**
	 * Enter a parse tree produced by the `cube`
	 * labeled alternative in `trinoSqlParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	enterCube?: (ctx: CubeContext) => void;
	/**
	 * Exit a parse tree produced by the `cube`
	 * labeled alternative in `trinoSqlParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	exitCube?: (ctx: CubeContext) => void;
	/**
	 * Enter a parse tree produced by the `multipleGroupingSets`
	 * labeled alternative in `trinoSqlParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	enterMultipleGroupingSets?: (ctx: MultipleGroupingSetsContext) => void;
	/**
	 * Exit a parse tree produced by the `multipleGroupingSets`
	 * labeled alternative in `trinoSqlParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	exitMultipleGroupingSets?: (ctx: MultipleGroupingSetsContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.groupingSet`.
	 * @param ctx the parse tree
	 */
	enterGroupingSet?: (ctx: GroupingSetContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.groupingSet`.
	 * @param ctx the parse tree
	 */
	exitGroupingSet?: (ctx: GroupingSetContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.windowDefinition`.
	 * @param ctx the parse tree
	 */
	enterWindowDefinition?: (ctx: WindowDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.windowDefinition`.
	 * @param ctx the parse tree
	 */
	exitWindowDefinition?: (ctx: WindowDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.windowSpecification`.
	 * @param ctx the parse tree
	 */
	enterWindowSpecification?: (ctx: WindowSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.windowSpecification`.
	 * @param ctx the parse tree
	 */
	exitWindowSpecification?: (ctx: WindowSpecificationContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.namedQuery`.
	 * @param ctx the parse tree
	 */
	enterNamedQuery?: (ctx: NamedQueryContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.namedQuery`.
	 * @param ctx the parse tree
	 */
	exitNamedQuery?: (ctx: NamedQueryContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.setQuantifier`.
	 * @param ctx the parse tree
	 */
	enterSetQuantifier?: (ctx: SetQuantifierContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.setQuantifier`.
	 * @param ctx the parse tree
	 */
	exitSetQuantifier?: (ctx: SetQuantifierContext) => void;
	/**
	 * Enter a parse tree produced by the `selectSingle`
	 * labeled alternative in `trinoSqlParser.selectItem`.
	 * @param ctx the parse tree
	 */
	enterSelectSingle?: (ctx: SelectSingleContext) => void;
	/**
	 * Exit a parse tree produced by the `selectSingle`
	 * labeled alternative in `trinoSqlParser.selectItem`.
	 * @param ctx the parse tree
	 */
	exitSelectSingle?: (ctx: SelectSingleContext) => void;
	/**
	 * Enter a parse tree produced by the `selectAll`
	 * labeled alternative in `trinoSqlParser.selectItem`.
	 * @param ctx the parse tree
	 */
	enterSelectAll?: (ctx: SelectAllContext) => void;
	/**
	 * Exit a parse tree produced by the `selectAll`
	 * labeled alternative in `trinoSqlParser.selectItem`.
	 * @param ctx the parse tree
	 */
	exitSelectAll?: (ctx: SelectAllContext) => void;
	/**
	 * Enter a parse tree produced by the `relationDefault`
	 * labeled alternative in `trinoSqlParser.relation`.
	 * @param ctx the parse tree
	 */
	enterRelationDefault?: (ctx: RelationDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `relationDefault`
	 * labeled alternative in `trinoSqlParser.relation`.
	 * @param ctx the parse tree
	 */
	exitRelationDefault?: (ctx: RelationDefaultContext) => void;
	/**
	 * Enter a parse tree produced by the `joinRelation`
	 * labeled alternative in `trinoSqlParser.relation`.
	 * @param ctx the parse tree
	 */
	enterJoinRelation?: (ctx: JoinRelationContext) => void;
	/**
	 * Exit a parse tree produced by the `joinRelation`
	 * labeled alternative in `trinoSqlParser.relation`.
	 * @param ctx the parse tree
	 */
	exitJoinRelation?: (ctx: JoinRelationContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.joinType`.
	 * @param ctx the parse tree
	 */
	enterJoinType?: (ctx: JoinTypeContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.joinType`.
	 * @param ctx the parse tree
	 */
	exitJoinType?: (ctx: JoinTypeContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.joinCriteria`.
	 * @param ctx the parse tree
	 */
	enterJoinCriteria?: (ctx: JoinCriteriaContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.joinCriteria`.
	 * @param ctx the parse tree
	 */
	exitJoinCriteria?: (ctx: JoinCriteriaContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.sampledRelation`.
	 * @param ctx the parse tree
	 */
	enterSampledRelation?: (ctx: SampledRelationContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.sampledRelation`.
	 * @param ctx the parse tree
	 */
	exitSampledRelation?: (ctx: SampledRelationContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.sampleType`.
	 * @param ctx the parse tree
	 */
	enterSampleType?: (ctx: SampleTypeContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.sampleType`.
	 * @param ctx the parse tree
	 */
	exitSampleType?: (ctx: SampleTypeContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.trimsSpecification`.
	 * @param ctx the parse tree
	 */
	enterTrimsSpecification?: (ctx: TrimsSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.trimsSpecification`.
	 * @param ctx the parse tree
	 */
	exitTrimsSpecification?: (ctx: TrimsSpecificationContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.listAggOverflowBehavior`.
	 * @param ctx the parse tree
	 */
	enterListAggOverflowBehavior?: (ctx: ListAggOverflowBehaviorContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.listAggOverflowBehavior`.
	 * @param ctx the parse tree
	 */
	exitListAggOverflowBehavior?: (ctx: ListAggOverflowBehaviorContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.listaggCountIndication`.
	 * @param ctx the parse tree
	 */
	enterListaggCountIndication?: (ctx: ListaggCountIndicationContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.listaggCountIndication`.
	 * @param ctx the parse tree
	 */
	exitListaggCountIndication?: (ctx: ListaggCountIndicationContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.patternRecognition`.
	 * @param ctx the parse tree
	 */
	enterPatternRecognition?: (ctx: PatternRecognitionContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.patternRecognition`.
	 * @param ctx the parse tree
	 */
	exitPatternRecognition?: (ctx: PatternRecognitionContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.measureDefinition`.
	 * @param ctx the parse tree
	 */
	enterMeasureDefinition?: (ctx: MeasureDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.measureDefinition`.
	 * @param ctx the parse tree
	 */
	exitMeasureDefinition?: (ctx: MeasureDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.rowsPerMatch`.
	 * @param ctx the parse tree
	 */
	enterRowsPerMatch?: (ctx: RowsPerMatchContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.rowsPerMatch`.
	 * @param ctx the parse tree
	 */
	exitRowsPerMatch?: (ctx: RowsPerMatchContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.emptyMatchHandling`.
	 * @param ctx the parse tree
	 */
	enterEmptyMatchHandling?: (ctx: EmptyMatchHandlingContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.emptyMatchHandling`.
	 * @param ctx the parse tree
	 */
	exitEmptyMatchHandling?: (ctx: EmptyMatchHandlingContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.skipTo`.
	 * @param ctx the parse tree
	 */
	enterSkipTo?: (ctx: SkipToContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.skipTo`.
	 * @param ctx the parse tree
	 */
	exitSkipTo?: (ctx: SkipToContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.subsetDefinition`.
	 * @param ctx the parse tree
	 */
	enterSubsetDefinition?: (ctx: SubsetDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.subsetDefinition`.
	 * @param ctx the parse tree
	 */
	exitSubsetDefinition?: (ctx: SubsetDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.variableDefinition`.
	 * @param ctx the parse tree
	 */
	enterVariableDefinition?: (ctx: VariableDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.variableDefinition`.
	 * @param ctx the parse tree
	 */
	exitVariableDefinition?: (ctx: VariableDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.aliasedRelation`.
	 * @param ctx the parse tree
	 */
	enterAliasedRelation?: (ctx: AliasedRelationContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.aliasedRelation`.
	 * @param ctx the parse tree
	 */
	exitAliasedRelation?: (ctx: AliasedRelationContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.columnAliases`.
	 * @param ctx the parse tree
	 */
	enterColumnAliases?: (ctx: ColumnAliasesContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.columnAliases`.
	 * @param ctx the parse tree
	 */
	exitColumnAliases?: (ctx: ColumnAliasesContext) => void;
	/**
	 * Enter a parse tree produced by the `tableName`
	 * labeled alternative in `trinoSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterTableName?: (ctx: TableNameContext) => void;
	/**
	 * Exit a parse tree produced by the `tableName`
	 * labeled alternative in `trinoSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitTableName?: (ctx: TableNameContext) => void;
	/**
	 * Enter a parse tree produced by the `subqueryRelation`
	 * labeled alternative in `trinoSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterSubqueryRelation?: (ctx: SubqueryRelationContext) => void;
	/**
	 * Exit a parse tree produced by the `subqueryRelation`
	 * labeled alternative in `trinoSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitSubqueryRelation?: (ctx: SubqueryRelationContext) => void;
	/**
	 * Enter a parse tree produced by the `unnest`
	 * labeled alternative in `trinoSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterUnnest?: (ctx: UnnestContext) => void;
	/**
	 * Exit a parse tree produced by the `unnest`
	 * labeled alternative in `trinoSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitUnnest?: (ctx: UnnestContext) => void;
	/**
	 * Enter a parse tree produced by the `lateral`
	 * labeled alternative in `trinoSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterLateral?: (ctx: LateralContext) => void;
	/**
	 * Exit a parse tree produced by the `lateral`
	 * labeled alternative in `trinoSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitLateral?: (ctx: LateralContext) => void;
	/**
	 * Enter a parse tree produced by the `tableFunctionInvocation`
	 * labeled alternative in `trinoSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterTableFunctionInvocation?: (ctx: TableFunctionInvocationContext) => void;
	/**
	 * Exit a parse tree produced by the `tableFunctionInvocation`
	 * labeled alternative in `trinoSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitTableFunctionInvocation?: (ctx: TableFunctionInvocationContext) => void;
	/**
	 * Enter a parse tree produced by the `parenthesizedRelation`
	 * labeled alternative in `trinoSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedRelation?: (ctx: ParenthesizedRelationContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesizedRelation`
	 * labeled alternative in `trinoSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedRelation?: (ctx: ParenthesizedRelationContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.tableFunctionCall`.
	 * @param ctx the parse tree
	 */
	enterTableFunctionCall?: (ctx: TableFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.tableFunctionCall`.
	 * @param ctx the parse tree
	 */
	exitTableFunctionCall?: (ctx: TableFunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.tableFunctionArgument`.
	 * @param ctx the parse tree
	 */
	enterTableFunctionArgument?: (ctx: TableFunctionArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.tableFunctionArgument`.
	 * @param ctx the parse tree
	 */
	exitTableFunctionArgument?: (ctx: TableFunctionArgumentContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.tableArgument`.
	 * @param ctx the parse tree
	 */
	enterTableArgument?: (ctx: TableArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.tableArgument`.
	 * @param ctx the parse tree
	 */
	exitTableArgument?: (ctx: TableArgumentContext) => void;
	/**
	 * Enter a parse tree produced by the `tableArgumentTable`
	 * labeled alternative in `trinoSqlParser.tableArgumentRelation`.
	 * @param ctx the parse tree
	 */
	enterTableArgumentTable?: (ctx: TableArgumentTableContext) => void;
	/**
	 * Exit a parse tree produced by the `tableArgumentTable`
	 * labeled alternative in `trinoSqlParser.tableArgumentRelation`.
	 * @param ctx the parse tree
	 */
	exitTableArgumentTable?: (ctx: TableArgumentTableContext) => void;
	/**
	 * Enter a parse tree produced by the `tableArgumentQuery`
	 * labeled alternative in `trinoSqlParser.tableArgumentRelation`.
	 * @param ctx the parse tree
	 */
	enterTableArgumentQuery?: (ctx: TableArgumentQueryContext) => void;
	/**
	 * Exit a parse tree produced by the `tableArgumentQuery`
	 * labeled alternative in `trinoSqlParser.tableArgumentRelation`.
	 * @param ctx the parse tree
	 */
	exitTableArgumentQuery?: (ctx: TableArgumentQueryContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.descriptorArgument`.
	 * @param ctx the parse tree
	 */
	enterDescriptorArgument?: (ctx: DescriptorArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.descriptorArgument`.
	 * @param ctx the parse tree
	 */
	exitDescriptorArgument?: (ctx: DescriptorArgumentContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.descriptorField`.
	 * @param ctx the parse tree
	 */
	enterDescriptorField?: (ctx: DescriptorFieldContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.descriptorField`.
	 * @param ctx the parse tree
	 */
	exitDescriptorField?: (ctx: DescriptorFieldContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.copartitionTables`.
	 * @param ctx the parse tree
	 */
	enterCopartitionTables?: (ctx: CopartitionTablesContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.copartitionTables`.
	 * @param ctx the parse tree
	 */
	exitCopartitionTables?: (ctx: CopartitionTablesContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `logicalNot`
	 * labeled alternative in `trinoSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalNot?: (ctx: LogicalNotContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalNot`
	 * labeled alternative in `trinoSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalNot?: (ctx: LogicalNotContext) => void;
	/**
	 * Enter a parse tree produced by the `predicated`
	 * labeled alternative in `trinoSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterPredicated?: (ctx: PredicatedContext) => void;
	/**
	 * Exit a parse tree produced by the `predicated`
	 * labeled alternative in `trinoSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitPredicated?: (ctx: PredicatedContext) => void;
	/**
	 * Enter a parse tree produced by the `or`
	 * labeled alternative in `trinoSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterOr?: (ctx: OrContext) => void;
	/**
	 * Exit a parse tree produced by the `or`
	 * labeled alternative in `trinoSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitOr?: (ctx: OrContext) => void;
	/**
	 * Enter a parse tree produced by the `and`
	 * labeled alternative in `trinoSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterAnd?: (ctx: AndContext) => void;
	/**
	 * Exit a parse tree produced by the `and`
	 * labeled alternative in `trinoSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitAnd?: (ctx: AndContext) => void;
	/**
	 * Enter a parse tree produced by the `comparison`
	 * labeled alternative in `trinoSqlParser.predicate_`.
	 * @param ctx the parse tree
	 */
	enterComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Exit a parse tree produced by the `comparison`
	 * labeled alternative in `trinoSqlParser.predicate_`.
	 * @param ctx the parse tree
	 */
	exitComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Enter a parse tree produced by the `quantifiedComparison`
	 * labeled alternative in `trinoSqlParser.predicate_`.
	 * @param ctx the parse tree
	 */
	enterQuantifiedComparison?: (ctx: QuantifiedComparisonContext) => void;
	/**
	 * Exit a parse tree produced by the `quantifiedComparison`
	 * labeled alternative in `trinoSqlParser.predicate_`.
	 * @param ctx the parse tree
	 */
	exitQuantifiedComparison?: (ctx: QuantifiedComparisonContext) => void;
	/**
	 * Enter a parse tree produced by the `between`
	 * labeled alternative in `trinoSqlParser.predicate_`.
	 * @param ctx the parse tree
	 */
	enterBetween?: (ctx: BetweenContext) => void;
	/**
	 * Exit a parse tree produced by the `between`
	 * labeled alternative in `trinoSqlParser.predicate_`.
	 * @param ctx the parse tree
	 */
	exitBetween?: (ctx: BetweenContext) => void;
	/**
	 * Enter a parse tree produced by the `inList`
	 * labeled alternative in `trinoSqlParser.predicate_`.
	 * @param ctx the parse tree
	 */
	enterInList?: (ctx: InListContext) => void;
	/**
	 * Exit a parse tree produced by the `inList`
	 * labeled alternative in `trinoSqlParser.predicate_`.
	 * @param ctx the parse tree
	 */
	exitInList?: (ctx: InListContext) => void;
	/**
	 * Enter a parse tree produced by the `inSubquery`
	 * labeled alternative in `trinoSqlParser.predicate_`.
	 * @param ctx the parse tree
	 */
	enterInSubquery?: (ctx: InSubqueryContext) => void;
	/**
	 * Exit a parse tree produced by the `inSubquery`
	 * labeled alternative in `trinoSqlParser.predicate_`.
	 * @param ctx the parse tree
	 */
	exitInSubquery?: (ctx: InSubqueryContext) => void;
	/**
	 * Enter a parse tree produced by the `like`
	 * labeled alternative in `trinoSqlParser.predicate_`.
	 * @param ctx the parse tree
	 */
	enterLike?: (ctx: LikeContext) => void;
	/**
	 * Exit a parse tree produced by the `like`
	 * labeled alternative in `trinoSqlParser.predicate_`.
	 * @param ctx the parse tree
	 */
	exitLike?: (ctx: LikeContext) => void;
	/**
	 * Enter a parse tree produced by the `nullPredicate`
	 * labeled alternative in `trinoSqlParser.predicate_`.
	 * @param ctx the parse tree
	 */
	enterNullPredicate?: (ctx: NullPredicateContext) => void;
	/**
	 * Exit a parse tree produced by the `nullPredicate`
	 * labeled alternative in `trinoSqlParser.predicate_`.
	 * @param ctx the parse tree
	 */
	exitNullPredicate?: (ctx: NullPredicateContext) => void;
	/**
	 * Enter a parse tree produced by the `distinctFrom`
	 * labeled alternative in `trinoSqlParser.predicate_`.
	 * @param ctx the parse tree
	 */
	enterDistinctFrom?: (ctx: DistinctFromContext) => void;
	/**
	 * Exit a parse tree produced by the `distinctFrom`
	 * labeled alternative in `trinoSqlParser.predicate_`.
	 * @param ctx the parse tree
	 */
	exitDistinctFrom?: (ctx: DistinctFromContext) => void;
	/**
	 * Enter a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `trinoSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `trinoSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
	/**
	 * Enter a parse tree produced by the `concatenation`
	 * labeled alternative in `trinoSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterConcatenation?: (ctx: ConcatenationContext) => void;
	/**
	 * Exit a parse tree produced by the `concatenation`
	 * labeled alternative in `trinoSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitConcatenation?: (ctx: ConcatenationContext) => void;
	/**
	 * Enter a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `trinoSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `trinoSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
	/**
	 * Enter a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `trinoSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `trinoSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
	/**
	 * Enter a parse tree produced by the `atTimeZone`
	 * labeled alternative in `trinoSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterAtTimeZone?: (ctx: AtTimeZoneContext) => void;
	/**
	 * Exit a parse tree produced by the `atTimeZone`
	 * labeled alternative in `trinoSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitAtTimeZone?: (ctx: AtTimeZoneContext) => void;
	/**
	 * Enter a parse tree produced by the `dereference`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterDereference?: (ctx: DereferenceContext) => void;
	/**
	 * Exit a parse tree produced by the `dereference`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitDereference?: (ctx: DereferenceContext) => void;
	/**
	 * Enter a parse tree produced by the `typeConstructor`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterTypeConstructor?: (ctx: TypeConstructorContext) => void;
	/**
	 * Exit a parse tree produced by the `typeConstructor`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitTypeConstructor?: (ctx: TypeConstructorContext) => void;
	/**
	 * Enter a parse tree produced by the `jsonValue`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterJsonValue?: (ctx: JsonValueContext) => void;
	/**
	 * Exit a parse tree produced by the `jsonValue`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitJsonValue?: (ctx: JsonValueContext) => void;
	/**
	 * Enter a parse tree produced by the `specialDateTimeFunction`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSpecialDateTimeFunction?: (ctx: SpecialDateTimeFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `specialDateTimeFunction`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSpecialDateTimeFunction?: (ctx: SpecialDateTimeFunctionContext) => void;
	/**
	 * Enter a parse tree produced by the `substring`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSubstring?: (ctx: SubstringContext) => void;
	/**
	 * Exit a parse tree produced by the `substring`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSubstring?: (ctx: SubstringContext) => void;
	/**
	 * Enter a parse tree produced by the `cast`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterCast?: (ctx: CastContext) => void;
	/**
	 * Exit a parse tree produced by the `cast`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitCast?: (ctx: CastContext) => void;
	/**
	 * Enter a parse tree produced by the `lambda`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterLambda?: (ctx: LambdaContext) => void;
	/**
	 * Exit a parse tree produced by the `lambda`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitLambda?: (ctx: LambdaContext) => void;
	/**
	 * Enter a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `trim`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterTrim?: (ctx: TrimContext) => void;
	/**
	 * Exit a parse tree produced by the `trim`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitTrim?: (ctx: TrimContext) => void;
	/**
	 * Enter a parse tree produced by the `parameter`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by the `parameter`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;
	/**
	 * Enter a parse tree produced by the `normalize`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterNormalize?: (ctx: NormalizeContext) => void;
	/**
	 * Exit a parse tree produced by the `normalize`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitNormalize?: (ctx: NormalizeContext) => void;
	/**
	 * Enter a parse tree produced by the `jsonObject`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterJsonObject?: (ctx: JsonObjectContext) => void;
	/**
	 * Exit a parse tree produced by the `jsonObject`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitJsonObject?: (ctx: JsonObjectContext) => void;
	/**
	 * Enter a parse tree produced by the `intervalLiteral`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterIntervalLiteral?: (ctx: IntervalLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `intervalLiteral`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitIntervalLiteral?: (ctx: IntervalLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `numericLiteral`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterNumericLiteral?: (ctx: NumericLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `numericLiteral`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitNumericLiteral?: (ctx: NumericLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `jsonArray`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterJsonArray?: (ctx: JsonArrayContext) => void;
	/**
	 * Exit a parse tree produced by the `jsonArray`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitJsonArray?: (ctx: JsonArrayContext) => void;
	/**
	 * Enter a parse tree produced by the `simpleCase`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSimpleCase?: (ctx: SimpleCaseContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleCase`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSimpleCase?: (ctx: SimpleCaseContext) => void;
	/**
	 * Enter a parse tree produced by the `columnReference`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterColumnReference?: (ctx: ColumnReferenceContext) => void;
	/**
	 * Exit a parse tree produced by the `columnReference`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitColumnReference?: (ctx: ColumnReferenceContext) => void;
	/**
	 * Enter a parse tree produced by the `nullLiteral`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterNullLiteral?: (ctx: NullLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `nullLiteral`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitNullLiteral?: (ctx: NullLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `rowConstructor`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterRowConstructor?: (ctx: RowConstructorContext) => void;
	/**
	 * Exit a parse tree produced by the `rowConstructor`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitRowConstructor?: (ctx: RowConstructorContext) => void;
	/**
	 * Enter a parse tree produced by the `subscript`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSubscript?: (ctx: SubscriptContext) => void;
	/**
	 * Exit a parse tree produced by the `subscript`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSubscript?: (ctx: SubscriptContext) => void;
	/**
	 * Enter a parse tree produced by the `jsonExists`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterJsonExists?: (ctx: JsonExistsContext) => void;
	/**
	 * Exit a parse tree produced by the `jsonExists`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitJsonExists?: (ctx: JsonExistsContext) => void;
	/**
	 * Enter a parse tree produced by the `currentPath`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterCurrentPath?: (ctx: CurrentPathContext) => void;
	/**
	 * Exit a parse tree produced by the `currentPath`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitCurrentPath?: (ctx: CurrentPathContext) => void;
	/**
	 * Enter a parse tree produced by the `subqueryExpression`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `subqueryExpression`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `binaryLiteral`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterBinaryLiteral?: (ctx: BinaryLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `binaryLiteral`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitBinaryLiteral?: (ctx: BinaryLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `currentUser`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterCurrentUser?: (ctx: CurrentUserContext) => void;
	/**
	 * Exit a parse tree produced by the `currentUser`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitCurrentUser?: (ctx: CurrentUserContext) => void;
	/**
	 * Enter a parse tree produced by the `jsonQuery`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterJsonQuery?: (ctx: JsonQueryContext) => void;
	/**
	 * Exit a parse tree produced by the `jsonQuery`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitJsonQuery?: (ctx: JsonQueryContext) => void;
	/**
	 * Enter a parse tree produced by the `measure`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterMeasure?: (ctx: MeasureContext) => void;
	/**
	 * Exit a parse tree produced by the `measure`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitMeasure?: (ctx: MeasureContext) => void;
	/**
	 * Enter a parse tree produced by the `extract`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterExtract?: (ctx: ExtractContext) => void;
	/**
	 * Exit a parse tree produced by the `extract`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitExtract?: (ctx: ExtractContext) => void;
	/**
	 * Enter a parse tree produced by the `stringLiteral`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `stringLiteral`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `arrayConstructor`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterArrayConstructor?: (ctx: ArrayConstructorContext) => void;
	/**
	 * Exit a parse tree produced by the `arrayConstructor`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitArrayConstructor?: (ctx: ArrayConstructorContext) => void;
	/**
	 * Enter a parse tree produced by the `functionCall`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `functionCall`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by the `currentSchema`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterCurrentSchema?: (ctx: CurrentSchemaContext) => void;
	/**
	 * Exit a parse tree produced by the `currentSchema`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitCurrentSchema?: (ctx: CurrentSchemaContext) => void;
	/**
	 * Enter a parse tree produced by the `exists`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterExists?: (ctx: ExistsContext) => void;
	/**
	 * Exit a parse tree produced by the `exists`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitExists?: (ctx: ExistsContext) => void;
	/**
	 * Enter a parse tree produced by the `position`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPosition?: (ctx: PositionContext) => void;
	/**
	 * Exit a parse tree produced by the `position`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPosition?: (ctx: PositionContext) => void;
	/**
	 * Enter a parse tree produced by the `listagg`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterListagg?: (ctx: ListaggContext) => void;
	/**
	 * Exit a parse tree produced by the `listagg`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitListagg?: (ctx: ListaggContext) => void;
	/**
	 * Enter a parse tree produced by the `searchedCase`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSearchedCase?: (ctx: SearchedCaseContext) => void;
	/**
	 * Exit a parse tree produced by the `searchedCase`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSearchedCase?: (ctx: SearchedCaseContext) => void;
	/**
	 * Enter a parse tree produced by the `currentCatalog`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterCurrentCatalog?: (ctx: CurrentCatalogContext) => void;
	/**
	 * Exit a parse tree produced by the `currentCatalog`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitCurrentCatalog?: (ctx: CurrentCatalogContext) => void;
	/**
	 * Enter a parse tree produced by the `groupingOperation`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterGroupingOperation?: (ctx: GroupingOperationContext) => void;
	/**
	 * Exit a parse tree produced by the `groupingOperation`
	 * labeled alternative in `trinoSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitGroupingOperation?: (ctx: GroupingOperationContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.jsonPathInvocation`.
	 * @param ctx the parse tree
	 */
	enterJsonPathInvocation?: (ctx: JsonPathInvocationContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.jsonPathInvocation`.
	 * @param ctx the parse tree
	 */
	exitJsonPathInvocation?: (ctx: JsonPathInvocationContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.jsonValueExpression`.
	 * @param ctx the parse tree
	 */
	enterJsonValueExpression?: (ctx: JsonValueExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.jsonValueExpression`.
	 * @param ctx the parse tree
	 */
	exitJsonValueExpression?: (ctx: JsonValueExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.jsonRepresentation`.
	 * @param ctx the parse tree
	 */
	enterJsonRepresentation?: (ctx: JsonRepresentationContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.jsonRepresentation`.
	 * @param ctx the parse tree
	 */
	exitJsonRepresentation?: (ctx: JsonRepresentationContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.jsonArgument`.
	 * @param ctx the parse tree
	 */
	enterJsonArgument?: (ctx: JsonArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.jsonArgument`.
	 * @param ctx the parse tree
	 */
	exitJsonArgument?: (ctx: JsonArgumentContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.jsonExistsErrorBehavior`.
	 * @param ctx the parse tree
	 */
	enterJsonExistsErrorBehavior?: (ctx: JsonExistsErrorBehaviorContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.jsonExistsErrorBehavior`.
	 * @param ctx the parse tree
	 */
	exitJsonExistsErrorBehavior?: (ctx: JsonExistsErrorBehaviorContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.jsonValueBehavior`.
	 * @param ctx the parse tree
	 */
	enterJsonValueBehavior?: (ctx: JsonValueBehaviorContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.jsonValueBehavior`.
	 * @param ctx the parse tree
	 */
	exitJsonValueBehavior?: (ctx: JsonValueBehaviorContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.jsonQueryWrapperBehavior`.
	 * @param ctx the parse tree
	 */
	enterJsonQueryWrapperBehavior?: (ctx: JsonQueryWrapperBehaviorContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.jsonQueryWrapperBehavior`.
	 * @param ctx the parse tree
	 */
	exitJsonQueryWrapperBehavior?: (ctx: JsonQueryWrapperBehaviorContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.jsonQueryBehavior`.
	 * @param ctx the parse tree
	 */
	enterJsonQueryBehavior?: (ctx: JsonQueryBehaviorContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.jsonQueryBehavior`.
	 * @param ctx the parse tree
	 */
	exitJsonQueryBehavior?: (ctx: JsonQueryBehaviorContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.jsonObjectMember`.
	 * @param ctx the parse tree
	 */
	enterJsonObjectMember?: (ctx: JsonObjectMemberContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.jsonObjectMember`.
	 * @param ctx the parse tree
	 */
	exitJsonObjectMember?: (ctx: JsonObjectMemberContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.processingMode`.
	 * @param ctx the parse tree
	 */
	enterProcessingMode?: (ctx: ProcessingModeContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.processingMode`.
	 * @param ctx the parse tree
	 */
	exitProcessingMode?: (ctx: ProcessingModeContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.nullTreatment`.
	 * @param ctx the parse tree
	 */
	enterNullTreatment?: (ctx: NullTreatmentContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.nullTreatment`.
	 * @param ctx the parse tree
	 */
	exitNullTreatment?: (ctx: NullTreatmentContext) => void;
	/**
	 * Enter a parse tree produced by the `basicStringLiteral`
	 * labeled alternative in `trinoSqlParser.string_`.
	 * @param ctx the parse tree
	 */
	enterBasicStringLiteral?: (ctx: BasicStringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `basicStringLiteral`
	 * labeled alternative in `trinoSqlParser.string_`.
	 * @param ctx the parse tree
	 */
	exitBasicStringLiteral?: (ctx: BasicStringLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `unicodeStringLiteral`
	 * labeled alternative in `trinoSqlParser.string_`.
	 * @param ctx the parse tree
	 */
	enterUnicodeStringLiteral?: (ctx: UnicodeStringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `unicodeStringLiteral`
	 * labeled alternative in `trinoSqlParser.string_`.
	 * @param ctx the parse tree
	 */
	exitUnicodeStringLiteral?: (ctx: UnicodeStringLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `timeZoneInterval`
	 * labeled alternative in `trinoSqlParser.timeZoneSpecifier`.
	 * @param ctx the parse tree
	 */
	enterTimeZoneInterval?: (ctx: TimeZoneIntervalContext) => void;
	/**
	 * Exit a parse tree produced by the `timeZoneInterval`
	 * labeled alternative in `trinoSqlParser.timeZoneSpecifier`.
	 * @param ctx the parse tree
	 */
	exitTimeZoneInterval?: (ctx: TimeZoneIntervalContext) => void;
	/**
	 * Enter a parse tree produced by the `timeZoneString`
	 * labeled alternative in `trinoSqlParser.timeZoneSpecifier`.
	 * @param ctx the parse tree
	 */
	enterTimeZoneString?: (ctx: TimeZoneStringContext) => void;
	/**
	 * Exit a parse tree produced by the `timeZoneString`
	 * labeled alternative in `trinoSqlParser.timeZoneSpecifier`.
	 * @param ctx the parse tree
	 */
	exitTimeZoneString?: (ctx: TimeZoneStringContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.comparisonQuantifier`.
	 * @param ctx the parse tree
	 */
	enterComparisonQuantifier?: (ctx: ComparisonQuantifierContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.comparisonQuantifier`.
	 * @param ctx the parse tree
	 */
	exitComparisonQuantifier?: (ctx: ComparisonQuantifierContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.booleanValue`.
	 * @param ctx the parse tree
	 */
	enterBooleanValue?: (ctx: BooleanValueContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.booleanValue`.
	 * @param ctx the parse tree
	 */
	exitBooleanValue?: (ctx: BooleanValueContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.interval`.
	 * @param ctx the parse tree
	 */
	enterInterval?: (ctx: IntervalContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.interval`.
	 * @param ctx the parse tree
	 */
	exitInterval?: (ctx: IntervalContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.intervalField`.
	 * @param ctx the parse tree
	 */
	enterIntervalField?: (ctx: IntervalFieldContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.intervalField`.
	 * @param ctx the parse tree
	 */
	exitIntervalField?: (ctx: IntervalFieldContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.normalForm`.
	 * @param ctx the parse tree
	 */
	enterNormalForm?: (ctx: NormalFormContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.normalForm`.
	 * @param ctx the parse tree
	 */
	exitNormalForm?: (ctx: NormalFormContext) => void;
	/**
	 * Enter a parse tree produced by the `rowType`
	 * labeled alternative in `trinoSqlParser.type`.
	 * @param ctx the parse tree
	 */
	enterRowType?: (ctx: RowTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `rowType`
	 * labeled alternative in `trinoSqlParser.type`.
	 * @param ctx the parse tree
	 */
	exitRowType?: (ctx: RowTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `intervalType`
	 * labeled alternative in `trinoSqlParser.type`.
	 * @param ctx the parse tree
	 */
	enterIntervalType?: (ctx: IntervalTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `intervalType`
	 * labeled alternative in `trinoSqlParser.type`.
	 * @param ctx the parse tree
	 */
	exitIntervalType?: (ctx: IntervalTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `arrayType`
	 * labeled alternative in `trinoSqlParser.type`.
	 * @param ctx the parse tree
	 */
	enterArrayType?: (ctx: ArrayTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `arrayType`
	 * labeled alternative in `trinoSqlParser.type`.
	 * @param ctx the parse tree
	 */
	exitArrayType?: (ctx: ArrayTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `doublePrecisionType`
	 * labeled alternative in `trinoSqlParser.type`.
	 * @param ctx the parse tree
	 */
	enterDoublePrecisionType?: (ctx: DoublePrecisionTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `doublePrecisionType`
	 * labeled alternative in `trinoSqlParser.type`.
	 * @param ctx the parse tree
	 */
	exitDoublePrecisionType?: (ctx: DoublePrecisionTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `legacyArrayType`
	 * labeled alternative in `trinoSqlParser.type`.
	 * @param ctx the parse tree
	 */
	enterLegacyArrayType?: (ctx: LegacyArrayTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `legacyArrayType`
	 * labeled alternative in `trinoSqlParser.type`.
	 * @param ctx the parse tree
	 */
	exitLegacyArrayType?: (ctx: LegacyArrayTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `genericType`
	 * labeled alternative in `trinoSqlParser.type`.
	 * @param ctx the parse tree
	 */
	enterGenericType?: (ctx: GenericTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `genericType`
	 * labeled alternative in `trinoSqlParser.type`.
	 * @param ctx the parse tree
	 */
	exitGenericType?: (ctx: GenericTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `dateTimeType`
	 * labeled alternative in `trinoSqlParser.type`.
	 * @param ctx the parse tree
	 */
	enterDateTimeType?: (ctx: DateTimeTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `dateTimeType`
	 * labeled alternative in `trinoSqlParser.type`.
	 * @param ctx the parse tree
	 */
	exitDateTimeType?: (ctx: DateTimeTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `legacyMapType`
	 * labeled alternative in `trinoSqlParser.type`.
	 * @param ctx the parse tree
	 */
	enterLegacyMapType?: (ctx: LegacyMapTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `legacyMapType`
	 * labeled alternative in `trinoSqlParser.type`.
	 * @param ctx the parse tree
	 */
	exitLegacyMapType?: (ctx: LegacyMapTypeContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.rowField`.
	 * @param ctx the parse tree
	 */
	enterRowField?: (ctx: RowFieldContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.rowField`.
	 * @param ctx the parse tree
	 */
	exitRowField?: (ctx: RowFieldContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	enterTypeParameter?: (ctx: TypeParameterContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	exitTypeParameter?: (ctx: TypeParameterContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.whenClause`.
	 * @param ctx the parse tree
	 */
	enterWhenClause?: (ctx: WhenClauseContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.whenClause`.
	 * @param ctx the parse tree
	 */
	exitWhenClause?: (ctx: WhenClauseContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.filter`.
	 * @param ctx the parse tree
	 */
	enterFilter?: (ctx: FilterContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.filter`.
	 * @param ctx the parse tree
	 */
	exitFilter?: (ctx: FilterContext) => void;
	/**
	 * Enter a parse tree produced by the `mergeUpdate`
	 * labeled alternative in `trinoSqlParser.mergeCase`.
	 * @param ctx the parse tree
	 */
	enterMergeUpdate?: (ctx: MergeUpdateContext) => void;
	/**
	 * Exit a parse tree produced by the `mergeUpdate`
	 * labeled alternative in `trinoSqlParser.mergeCase`.
	 * @param ctx the parse tree
	 */
	exitMergeUpdate?: (ctx: MergeUpdateContext) => void;
	/**
	 * Enter a parse tree produced by the `mergeDelete`
	 * labeled alternative in `trinoSqlParser.mergeCase`.
	 * @param ctx the parse tree
	 */
	enterMergeDelete?: (ctx: MergeDeleteContext) => void;
	/**
	 * Exit a parse tree produced by the `mergeDelete`
	 * labeled alternative in `trinoSqlParser.mergeCase`.
	 * @param ctx the parse tree
	 */
	exitMergeDelete?: (ctx: MergeDeleteContext) => void;
	/**
	 * Enter a parse tree produced by the `mergeInsert`
	 * labeled alternative in `trinoSqlParser.mergeCase`.
	 * @param ctx the parse tree
	 */
	enterMergeInsert?: (ctx: MergeInsertContext) => void;
	/**
	 * Exit a parse tree produced by the `mergeInsert`
	 * labeled alternative in `trinoSqlParser.mergeCase`.
	 * @param ctx the parse tree
	 */
	exitMergeInsert?: (ctx: MergeInsertContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.over`.
	 * @param ctx the parse tree
	 */
	enterOver?: (ctx: OverContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.over`.
	 * @param ctx the parse tree
	 */
	exitOver?: (ctx: OverContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.windowFrame`.
	 * @param ctx the parse tree
	 */
	enterWindowFrame?: (ctx: WindowFrameContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.windowFrame`.
	 * @param ctx the parse tree
	 */
	exitWindowFrame?: (ctx: WindowFrameContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.frameExtent`.
	 * @param ctx the parse tree
	 */
	enterFrameExtent?: (ctx: FrameExtentContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.frameExtent`.
	 * @param ctx the parse tree
	 */
	exitFrameExtent?: (ctx: FrameExtentContext) => void;
	/**
	 * Enter a parse tree produced by the `unboundedFrame`
	 * labeled alternative in `trinoSqlParser.frameBound`.
	 * @param ctx the parse tree
	 */
	enterUnboundedFrame?: (ctx: UnboundedFrameContext) => void;
	/**
	 * Exit a parse tree produced by the `unboundedFrame`
	 * labeled alternative in `trinoSqlParser.frameBound`.
	 * @param ctx the parse tree
	 */
	exitUnboundedFrame?: (ctx: UnboundedFrameContext) => void;
	/**
	 * Enter a parse tree produced by the `currentRowBound`
	 * labeled alternative in `trinoSqlParser.frameBound`.
	 * @param ctx the parse tree
	 */
	enterCurrentRowBound?: (ctx: CurrentRowBoundContext) => void;
	/**
	 * Exit a parse tree produced by the `currentRowBound`
	 * labeled alternative in `trinoSqlParser.frameBound`.
	 * @param ctx the parse tree
	 */
	exitCurrentRowBound?: (ctx: CurrentRowBoundContext) => void;
	/**
	 * Enter a parse tree produced by the `boundedFrame`
	 * labeled alternative in `trinoSqlParser.frameBound`.
	 * @param ctx the parse tree
	 */
	enterBoundedFrame?: (ctx: BoundedFrameContext) => void;
	/**
	 * Exit a parse tree produced by the `boundedFrame`
	 * labeled alternative in `trinoSqlParser.frameBound`.
	 * @param ctx the parse tree
	 */
	exitBoundedFrame?: (ctx: BoundedFrameContext) => void;
	/**
	 * Enter a parse tree produced by the `quantifiedPrimary`
	 * labeled alternative in `trinoSqlParser.rowPattern`.
	 * @param ctx the parse tree
	 */
	enterQuantifiedPrimary?: (ctx: QuantifiedPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by the `quantifiedPrimary`
	 * labeled alternative in `trinoSqlParser.rowPattern`.
	 * @param ctx the parse tree
	 */
	exitQuantifiedPrimary?: (ctx: QuantifiedPrimaryContext) => void;
	/**
	 * Enter a parse tree produced by the `patternConcatenation`
	 * labeled alternative in `trinoSqlParser.rowPattern`.
	 * @param ctx the parse tree
	 */
	enterPatternConcatenation?: (ctx: PatternConcatenationContext) => void;
	/**
	 * Exit a parse tree produced by the `patternConcatenation`
	 * labeled alternative in `trinoSqlParser.rowPattern`.
	 * @param ctx the parse tree
	 */
	exitPatternConcatenation?: (ctx: PatternConcatenationContext) => void;
	/**
	 * Enter a parse tree produced by the `patternAlternation`
	 * labeled alternative in `trinoSqlParser.rowPattern`.
	 * @param ctx the parse tree
	 */
	enterPatternAlternation?: (ctx: PatternAlternationContext) => void;
	/**
	 * Exit a parse tree produced by the `patternAlternation`
	 * labeled alternative in `trinoSqlParser.rowPattern`.
	 * @param ctx the parse tree
	 */
	exitPatternAlternation?: (ctx: PatternAlternationContext) => void;
	/**
	 * Enter a parse tree produced by the `patternVariable`
	 * labeled alternative in `trinoSqlParser.patternPrimary`.
	 * @param ctx the parse tree
	 */
	enterPatternVariable?: (ctx: PatternVariableContext) => void;
	/**
	 * Exit a parse tree produced by the `patternVariable`
	 * labeled alternative in `trinoSqlParser.patternPrimary`.
	 * @param ctx the parse tree
	 */
	exitPatternVariable?: (ctx: PatternVariableContext) => void;
	/**
	 * Enter a parse tree produced by the `emptyPattern`
	 * labeled alternative in `trinoSqlParser.patternPrimary`.
	 * @param ctx the parse tree
	 */
	enterEmptyPattern?: (ctx: EmptyPatternContext) => void;
	/**
	 * Exit a parse tree produced by the `emptyPattern`
	 * labeled alternative in `trinoSqlParser.patternPrimary`.
	 * @param ctx the parse tree
	 */
	exitEmptyPattern?: (ctx: EmptyPatternContext) => void;
	/**
	 * Enter a parse tree produced by the `patternPermutation`
	 * labeled alternative in `trinoSqlParser.patternPrimary`.
	 * @param ctx the parse tree
	 */
	enterPatternPermutation?: (ctx: PatternPermutationContext) => void;
	/**
	 * Exit a parse tree produced by the `patternPermutation`
	 * labeled alternative in `trinoSqlParser.patternPrimary`.
	 * @param ctx the parse tree
	 */
	exitPatternPermutation?: (ctx: PatternPermutationContext) => void;
	/**
	 * Enter a parse tree produced by the `groupedPattern`
	 * labeled alternative in `trinoSqlParser.patternPrimary`.
	 * @param ctx the parse tree
	 */
	enterGroupedPattern?: (ctx: GroupedPatternContext) => void;
	/**
	 * Exit a parse tree produced by the `groupedPattern`
	 * labeled alternative in `trinoSqlParser.patternPrimary`.
	 * @param ctx the parse tree
	 */
	exitGroupedPattern?: (ctx: GroupedPatternContext) => void;
	/**
	 * Enter a parse tree produced by the `partitionStartAnchor`
	 * labeled alternative in `trinoSqlParser.patternPrimary`.
	 * @param ctx the parse tree
	 */
	enterPartitionStartAnchor?: (ctx: PartitionStartAnchorContext) => void;
	/**
	 * Exit a parse tree produced by the `partitionStartAnchor`
	 * labeled alternative in `trinoSqlParser.patternPrimary`.
	 * @param ctx the parse tree
	 */
	exitPartitionStartAnchor?: (ctx: PartitionStartAnchorContext) => void;
	/**
	 * Enter a parse tree produced by the `partitionEndAnchor`
	 * labeled alternative in `trinoSqlParser.patternPrimary`.
	 * @param ctx the parse tree
	 */
	enterPartitionEndAnchor?: (ctx: PartitionEndAnchorContext) => void;
	/**
	 * Exit a parse tree produced by the `partitionEndAnchor`
	 * labeled alternative in `trinoSqlParser.patternPrimary`.
	 * @param ctx the parse tree
	 */
	exitPartitionEndAnchor?: (ctx: PartitionEndAnchorContext) => void;
	/**
	 * Enter a parse tree produced by the `excludedPattern`
	 * labeled alternative in `trinoSqlParser.patternPrimary`.
	 * @param ctx the parse tree
	 */
	enterExcludedPattern?: (ctx: ExcludedPatternContext) => void;
	/**
	 * Exit a parse tree produced by the `excludedPattern`
	 * labeled alternative in `trinoSqlParser.patternPrimary`.
	 * @param ctx the parse tree
	 */
	exitExcludedPattern?: (ctx: ExcludedPatternContext) => void;
	/**
	 * Enter a parse tree produced by the `zeroOrMoreQuantifier`
	 * labeled alternative in `trinoSqlParser.patternQuantifier`.
	 * @param ctx the parse tree
	 */
	enterZeroOrMoreQuantifier?: (ctx: ZeroOrMoreQuantifierContext) => void;
	/**
	 * Exit a parse tree produced by the `zeroOrMoreQuantifier`
	 * labeled alternative in `trinoSqlParser.patternQuantifier`.
	 * @param ctx the parse tree
	 */
	exitZeroOrMoreQuantifier?: (ctx: ZeroOrMoreQuantifierContext) => void;
	/**
	 * Enter a parse tree produced by the `oneOrMoreQuantifier`
	 * labeled alternative in `trinoSqlParser.patternQuantifier`.
	 * @param ctx the parse tree
	 */
	enterOneOrMoreQuantifier?: (ctx: OneOrMoreQuantifierContext) => void;
	/**
	 * Exit a parse tree produced by the `oneOrMoreQuantifier`
	 * labeled alternative in `trinoSqlParser.patternQuantifier`.
	 * @param ctx the parse tree
	 */
	exitOneOrMoreQuantifier?: (ctx: OneOrMoreQuantifierContext) => void;
	/**
	 * Enter a parse tree produced by the `zeroOrOneQuantifier`
	 * labeled alternative in `trinoSqlParser.patternQuantifier`.
	 * @param ctx the parse tree
	 */
	enterZeroOrOneQuantifier?: (ctx: ZeroOrOneQuantifierContext) => void;
	/**
	 * Exit a parse tree produced by the `zeroOrOneQuantifier`
	 * labeled alternative in `trinoSqlParser.patternQuantifier`.
	 * @param ctx the parse tree
	 */
	exitZeroOrOneQuantifier?: (ctx: ZeroOrOneQuantifierContext) => void;
	/**
	 * Enter a parse tree produced by the `rangeQuantifier`
	 * labeled alternative in `trinoSqlParser.patternQuantifier`.
	 * @param ctx the parse tree
	 */
	enterRangeQuantifier?: (ctx: RangeQuantifierContext) => void;
	/**
	 * Exit a parse tree produced by the `rangeQuantifier`
	 * labeled alternative in `trinoSqlParser.patternQuantifier`.
	 * @param ctx the parse tree
	 */
	exitRangeQuantifier?: (ctx: RangeQuantifierContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.updateAssignment`.
	 * @param ctx the parse tree
	 */
	enterUpdateAssignment?: (ctx: UpdateAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.updateAssignment`.
	 * @param ctx the parse tree
	 */
	exitUpdateAssignment?: (ctx: UpdateAssignmentContext) => void;
	/**
	 * Enter a parse tree produced by the `explainFormat`
	 * labeled alternative in `trinoSqlParser.explainOption`.
	 * @param ctx the parse tree
	 */
	enterExplainFormat?: (ctx: ExplainFormatContext) => void;
	/**
	 * Exit a parse tree produced by the `explainFormat`
	 * labeled alternative in `trinoSqlParser.explainOption`.
	 * @param ctx the parse tree
	 */
	exitExplainFormat?: (ctx: ExplainFormatContext) => void;
	/**
	 * Enter a parse tree produced by the `explainType`
	 * labeled alternative in `trinoSqlParser.explainOption`.
	 * @param ctx the parse tree
	 */
	enterExplainType?: (ctx: ExplainTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `explainType`
	 * labeled alternative in `trinoSqlParser.explainOption`.
	 * @param ctx the parse tree
	 */
	exitExplainType?: (ctx: ExplainTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `isolationLevel`
	 * labeled alternative in `trinoSqlParser.transactionMode`.
	 * @param ctx the parse tree
	 */
	enterIsolationLevel?: (ctx: IsolationLevelContext) => void;
	/**
	 * Exit a parse tree produced by the `isolationLevel`
	 * labeled alternative in `trinoSqlParser.transactionMode`.
	 * @param ctx the parse tree
	 */
	exitIsolationLevel?: (ctx: IsolationLevelContext) => void;
	/**
	 * Enter a parse tree produced by the `transactionAccessMode`
	 * labeled alternative in `trinoSqlParser.transactionMode`.
	 * @param ctx the parse tree
	 */
	enterTransactionAccessMode?: (ctx: TransactionAccessModeContext) => void;
	/**
	 * Exit a parse tree produced by the `transactionAccessMode`
	 * labeled alternative in `trinoSqlParser.transactionMode`.
	 * @param ctx the parse tree
	 */
	exitTransactionAccessMode?: (ctx: TransactionAccessModeContext) => void;
	/**
	 * Enter a parse tree produced by the `readUncommitted`
	 * labeled alternative in `trinoSqlParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 */
	enterReadUncommitted?: (ctx: ReadUncommittedContext) => void;
	/**
	 * Exit a parse tree produced by the `readUncommitted`
	 * labeled alternative in `trinoSqlParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 */
	exitReadUncommitted?: (ctx: ReadUncommittedContext) => void;
	/**
	 * Enter a parse tree produced by the `readCommitted`
	 * labeled alternative in `trinoSqlParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 */
	enterReadCommitted?: (ctx: ReadCommittedContext) => void;
	/**
	 * Exit a parse tree produced by the `readCommitted`
	 * labeled alternative in `trinoSqlParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 */
	exitReadCommitted?: (ctx: ReadCommittedContext) => void;
	/**
	 * Enter a parse tree produced by the `repeatableRead`
	 * labeled alternative in `trinoSqlParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 */
	enterRepeatableRead?: (ctx: RepeatableReadContext) => void;
	/**
	 * Exit a parse tree produced by the `repeatableRead`
	 * labeled alternative in `trinoSqlParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 */
	exitRepeatableRead?: (ctx: RepeatableReadContext) => void;
	/**
	 * Enter a parse tree produced by the `serializable`
	 * labeled alternative in `trinoSqlParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 */
	enterSerializable?: (ctx: SerializableContext) => void;
	/**
	 * Exit a parse tree produced by the `serializable`
	 * labeled alternative in `trinoSqlParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 */
	exitSerializable?: (ctx: SerializableContext) => void;
	/**
	 * Enter a parse tree produced by the `positionalArgument`
	 * labeled alternative in `trinoSqlParser.callArgument`.
	 * @param ctx the parse tree
	 */
	enterPositionalArgument?: (ctx: PositionalArgumentContext) => void;
	/**
	 * Exit a parse tree produced by the `positionalArgument`
	 * labeled alternative in `trinoSqlParser.callArgument`.
	 * @param ctx the parse tree
	 */
	exitPositionalArgument?: (ctx: PositionalArgumentContext) => void;
	/**
	 * Enter a parse tree produced by the `namedArgument`
	 * labeled alternative in `trinoSqlParser.callArgument`.
	 * @param ctx the parse tree
	 */
	enterNamedArgument?: (ctx: NamedArgumentContext) => void;
	/**
	 * Exit a parse tree produced by the `namedArgument`
	 * labeled alternative in `trinoSqlParser.callArgument`.
	 * @param ctx the parse tree
	 */
	exitNamedArgument?: (ctx: NamedArgumentContext) => void;
	/**
	 * Enter a parse tree produced by the `qualifiedArgument`
	 * labeled alternative in `trinoSqlParser.pathElement`.
	 * @param ctx the parse tree
	 */
	enterQualifiedArgument?: (ctx: QualifiedArgumentContext) => void;
	/**
	 * Exit a parse tree produced by the `qualifiedArgument`
	 * labeled alternative in `trinoSqlParser.pathElement`.
	 * @param ctx the parse tree
	 */
	exitQualifiedArgument?: (ctx: QualifiedArgumentContext) => void;
	/**
	 * Enter a parse tree produced by the `unqualifiedArgument`
	 * labeled alternative in `trinoSqlParser.pathElement`.
	 * @param ctx the parse tree
	 */
	enterUnqualifiedArgument?: (ctx: UnqualifiedArgumentContext) => void;
	/**
	 * Exit a parse tree produced by the `unqualifiedArgument`
	 * labeled alternative in `trinoSqlParser.pathElement`.
	 * @param ctx the parse tree
	 */
	exitUnqualifiedArgument?: (ctx: UnqualifiedArgumentContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.pathSpecification`.
	 * @param ctx the parse tree
	 */
	enterPathSpecification?: (ctx: PathSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.pathSpecification`.
	 * @param ctx the parse tree
	 */
	exitPathSpecification?: (ctx: PathSpecificationContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.privilege`.
	 * @param ctx the parse tree
	 */
	enterPrivilege?: (ctx: PrivilegeContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.privilege`.
	 * @param ctx the parse tree
	 */
	exitPrivilege?: (ctx: PrivilegeContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.queryPeriod`.
	 * @param ctx the parse tree
	 */
	enterQueryPeriod?: (ctx: QueryPeriodContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.queryPeriod`.
	 * @param ctx the parse tree
	 */
	exitQueryPeriod?: (ctx: QueryPeriodContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.rangeType`.
	 * @param ctx the parse tree
	 */
	enterRangeType?: (ctx: RangeTypeContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.rangeType`.
	 * @param ctx the parse tree
	 */
	exitRangeType?: (ctx: RangeTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `specifiedPrincipal`
	 * labeled alternative in `trinoSqlParser.grantor`.
	 * @param ctx the parse tree
	 */
	enterSpecifiedPrincipal?: (ctx: SpecifiedPrincipalContext) => void;
	/**
	 * Exit a parse tree produced by the `specifiedPrincipal`
	 * labeled alternative in `trinoSqlParser.grantor`.
	 * @param ctx the parse tree
	 */
	exitSpecifiedPrincipal?: (ctx: SpecifiedPrincipalContext) => void;
	/**
	 * Enter a parse tree produced by the `currentUserGrantor`
	 * labeled alternative in `trinoSqlParser.grantor`.
	 * @param ctx the parse tree
	 */
	enterCurrentUserGrantor?: (ctx: CurrentUserGrantorContext) => void;
	/**
	 * Exit a parse tree produced by the `currentUserGrantor`
	 * labeled alternative in `trinoSqlParser.grantor`.
	 * @param ctx the parse tree
	 */
	exitCurrentUserGrantor?: (ctx: CurrentUserGrantorContext) => void;
	/**
	 * Enter a parse tree produced by the `currentRoleGrantor`
	 * labeled alternative in `trinoSqlParser.grantor`.
	 * @param ctx the parse tree
	 */
	enterCurrentRoleGrantor?: (ctx: CurrentRoleGrantorContext) => void;
	/**
	 * Exit a parse tree produced by the `currentRoleGrantor`
	 * labeled alternative in `trinoSqlParser.grantor`.
	 * @param ctx the parse tree
	 */
	exitCurrentRoleGrantor?: (ctx: CurrentRoleGrantorContext) => void;
	/**
	 * Enter a parse tree produced by the `unspecifiedPrincipal`
	 * labeled alternative in `trinoSqlParser.principal`.
	 * @param ctx the parse tree
	 */
	enterUnspecifiedPrincipal?: (ctx: UnspecifiedPrincipalContext) => void;
	/**
	 * Exit a parse tree produced by the `unspecifiedPrincipal`
	 * labeled alternative in `trinoSqlParser.principal`.
	 * @param ctx the parse tree
	 */
	exitUnspecifiedPrincipal?: (ctx: UnspecifiedPrincipalContext) => void;
	/**
	 * Enter a parse tree produced by the `userPrincipal`
	 * labeled alternative in `trinoSqlParser.principal`.
	 * @param ctx the parse tree
	 */
	enterUserPrincipal?: (ctx: UserPrincipalContext) => void;
	/**
	 * Exit a parse tree produced by the `userPrincipal`
	 * labeled alternative in `trinoSqlParser.principal`.
	 * @param ctx the parse tree
	 */
	exitUserPrincipal?: (ctx: UserPrincipalContext) => void;
	/**
	 * Enter a parse tree produced by the `rolePrincipal`
	 * labeled alternative in `trinoSqlParser.principal`.
	 * @param ctx the parse tree
	 */
	enterRolePrincipal?: (ctx: RolePrincipalContext) => void;
	/**
	 * Exit a parse tree produced by the `rolePrincipal`
	 * labeled alternative in `trinoSqlParser.principal`.
	 * @param ctx the parse tree
	 */
	exitRolePrincipal?: (ctx: RolePrincipalContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.roles`.
	 * @param ctx the parse tree
	 */
	enterRoles?: (ctx: RolesContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.roles`.
	 * @param ctx the parse tree
	 */
	exitRoles?: (ctx: RolesContext) => void;
	/**
	 * Enter a parse tree produced by the `unquotedIdentifier`
	 * labeled alternative in `trinoSqlParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `unquotedIdentifier`
	 * labeled alternative in `trinoSqlParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;
	/**
	 * Enter a parse tree produced by the `quotedIdentifier`
	 * labeled alternative in `trinoSqlParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `quotedIdentifier`
	 * labeled alternative in `trinoSqlParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;
	/**
	 * Enter a parse tree produced by the `backQuotedIdentifier`
	 * labeled alternative in `trinoSqlParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `backQuotedIdentifier`
	 * labeled alternative in `trinoSqlParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => void;
	/**
	 * Enter a parse tree produced by the `digitIdentifier`
	 * labeled alternative in `trinoSqlParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterDigitIdentifier?: (ctx: DigitIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `digitIdentifier`
	 * labeled alternative in `trinoSqlParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitDigitIdentifier?: (ctx: DigitIdentifierContext) => void;
	/**
	 * Enter a parse tree produced by the `decimalLiteral`
	 * labeled alternative in `trinoSqlParser.number`.
	 * @param ctx the parse tree
	 */
	enterDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `decimalLiteral`
	 * labeled alternative in `trinoSqlParser.number`.
	 * @param ctx the parse tree
	 */
	exitDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `doubleLiteral`
	 * labeled alternative in `trinoSqlParser.number`.
	 * @param ctx the parse tree
	 */
	enterDoubleLiteral?: (ctx: DoubleLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `doubleLiteral`
	 * labeled alternative in `trinoSqlParser.number`.
	 * @param ctx the parse tree
	 */
	exitDoubleLiteral?: (ctx: DoubleLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `integerLiteral`
	 * labeled alternative in `trinoSqlParser.number`.
	 * @param ctx the parse tree
	 */
	enterIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `integerLiteral`
	 * labeled alternative in `trinoSqlParser.number`.
	 * @param ctx the parse tree
	 */
	exitIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `trinoSqlParser.nonReserved`.
	 * @param ctx the parse tree
	 */
	enterNonReserved?: (ctx: NonReservedContext) => void;
	/**
	 * Exit a parse tree produced by `trinoSqlParser.nonReserved`.
	 * @param ctx the parse tree
	 */
	exitNonReserved?: (ctx: NonReservedContext) => void;
}

