// Generated from dt-sql-parser/src/grammar/trinosql/TrinoSql.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


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
 * This interface defines a complete listener for a parse tree produced by
 * `TrinoSqlParser`.
 */
export class TrinoSqlListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `TrinoSqlParser.program`.
     * @param ctx the parse tree
     */
    enterProgram?: (ctx: ProgramContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.program`.
     * @param ctx the parse tree
     */
    exitProgram?: (ctx: ProgramContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.statements`.
     * @param ctx the parse tree
     */
    enterStatements?: (ctx: StatementsContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.statements`.
     * @param ctx the parse tree
     */
    exitStatements?: (ctx: StatementsContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.standaloneClause`.
     * @param ctx the parse tree
     */
    enterStandaloneClause?: (ctx: StandaloneClauseContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.standaloneClause`.
     * @param ctx the parse tree
     */
    exitStandaloneClause?: (ctx: StandaloneClauseContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.singleStatement`.
     * @param ctx the parse tree
     */
    enterSingleStatement?: (ctx: SingleStatementContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.singleStatement`.
     * @param ctx the parse tree
     */
    exitSingleStatement?: (ctx: SingleStatementContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.standaloneExpression`.
     * @param ctx the parse tree
     */
    enterStandaloneExpression?: (ctx: StandaloneExpressionContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.standaloneExpression`.
     * @param ctx the parse tree
     */
    exitStandaloneExpression?: (ctx: StandaloneExpressionContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.standalonePathSpecification`.
     * @param ctx the parse tree
     */
    enterStandalonePathSpecification?: (ctx: StandalonePathSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.standalonePathSpecification`.
     * @param ctx the parse tree
     */
    exitStandalonePathSpecification?: (ctx: StandalonePathSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.standaloneType`.
     * @param ctx the parse tree
     */
    enterStandaloneType?: (ctx: StandaloneTypeContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.standaloneType`.
     * @param ctx the parse tree
     */
    exitStandaloneType?: (ctx: StandaloneTypeContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.standaloneRowPattern`.
     * @param ctx the parse tree
     */
    enterStandaloneRowPattern?: (ctx: StandaloneRowPatternContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.standaloneRowPattern`.
     * @param ctx the parse tree
     */
    exitStandaloneRowPattern?: (ctx: StandaloneRowPatternContext) => void;
    /**
     * Enter a parse tree produced by the `statementDefault`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterStatementDefault?: (ctx: StatementDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `statementDefault`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitStatementDefault?: (ctx: StatementDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `use`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterUse?: (ctx: UseContext) => void;
    /**
     * Exit a parse tree produced by the `use`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitUse?: (ctx: UseContext) => void;
    /**
     * Enter a parse tree produced by the `createSchema`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateSchema?: (ctx: CreateSchemaContext) => void;
    /**
     * Exit a parse tree produced by the `createSchema`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateSchema?: (ctx: CreateSchemaContext) => void;
    /**
     * Enter a parse tree produced by the `dropSchema`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDropSchema?: (ctx: DropSchemaContext) => void;
    /**
     * Exit a parse tree produced by the `dropSchema`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDropSchema?: (ctx: DropSchemaContext) => void;
    /**
     * Enter a parse tree produced by the `renameSchema`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterRenameSchema?: (ctx: RenameSchemaContext) => void;
    /**
     * Exit a parse tree produced by the `renameSchema`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitRenameSchema?: (ctx: RenameSchemaContext) => void;
    /**
     * Enter a parse tree produced by the `setSchemaAuthorization`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterSetSchemaAuthorization?: (ctx: SetSchemaAuthorizationContext) => void;
    /**
     * Exit a parse tree produced by the `setSchemaAuthorization`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitSetSchemaAuthorization?: (ctx: SetSchemaAuthorizationContext) => void;
    /**
     * Enter a parse tree produced by the `createTableAsSelect`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateTableAsSelect?: (ctx: CreateTableAsSelectContext) => void;
    /**
     * Exit a parse tree produced by the `createTableAsSelect`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateTableAsSelect?: (ctx: CreateTableAsSelectContext) => void;
    /**
     * Enter a parse tree produced by the `createTable`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateTable?: (ctx: CreateTableContext) => void;
    /**
     * Exit a parse tree produced by the `createTable`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateTable?: (ctx: CreateTableContext) => void;
    /**
     * Enter a parse tree produced by the `dropTable`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDropTable?: (ctx: DropTableContext) => void;
    /**
     * Exit a parse tree produced by the `dropTable`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDropTable?: (ctx: DropTableContext) => void;
    /**
     * Enter a parse tree produced by the `insertInto`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterInsertInto?: (ctx: InsertIntoContext) => void;
    /**
     * Exit a parse tree produced by the `insertInto`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitInsertInto?: (ctx: InsertIntoContext) => void;
    /**
     * Enter a parse tree produced by the `delete`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDelete?: (ctx: DeleteContext) => void;
    /**
     * Exit a parse tree produced by the `delete`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDelete?: (ctx: DeleteContext) => void;
    /**
     * Enter a parse tree produced by the `truncateTable`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterTruncateTable?: (ctx: TruncateTableContext) => void;
    /**
     * Exit a parse tree produced by the `truncateTable`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitTruncateTable?: (ctx: TruncateTableContext) => void;
    /**
     * Enter a parse tree produced by the `renameTable`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterRenameTable?: (ctx: RenameTableContext) => void;
    /**
     * Exit a parse tree produced by the `renameTable`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitRenameTable?: (ctx: RenameTableContext) => void;
    /**
     * Enter a parse tree produced by the `commentTable`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterCommentTable?: (ctx: CommentTableContext) => void;
    /**
     * Exit a parse tree produced by the `commentTable`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitCommentTable?: (ctx: CommentTableContext) => void;
    /**
     * Enter a parse tree produced by the `commentColumn`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterCommentColumn?: (ctx: CommentColumnContext) => void;
    /**
     * Exit a parse tree produced by the `commentColumn`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitCommentColumn?: (ctx: CommentColumnContext) => void;
    /**
     * Enter a parse tree produced by the `renameColumn`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterRenameColumn?: (ctx: RenameColumnContext) => void;
    /**
     * Exit a parse tree produced by the `renameColumn`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitRenameColumn?: (ctx: RenameColumnContext) => void;
    /**
     * Enter a parse tree produced by the `dropColumn`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDropColumn?: (ctx: DropColumnContext) => void;
    /**
     * Exit a parse tree produced by the `dropColumn`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDropColumn?: (ctx: DropColumnContext) => void;
    /**
     * Enter a parse tree produced by the `addColumn`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterAddColumn?: (ctx: AddColumnContext) => void;
    /**
     * Exit a parse tree produced by the `addColumn`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitAddColumn?: (ctx: AddColumnContext) => void;
    /**
     * Enter a parse tree produced by the `setTableAuthorization`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterSetTableAuthorization?: (ctx: SetTableAuthorizationContext) => void;
    /**
     * Exit a parse tree produced by the `setTableAuthorization`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitSetTableAuthorization?: (ctx: SetTableAuthorizationContext) => void;
    /**
     * Enter a parse tree produced by the `setTableProperties`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterSetTableProperties?: (ctx: SetTablePropertiesContext) => void;
    /**
     * Exit a parse tree produced by the `setTableProperties`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitSetTableProperties?: (ctx: SetTablePropertiesContext) => void;
    /**
     * Enter a parse tree produced by the `tableExecute`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterTableExecute?: (ctx: TableExecuteContext) => void;
    /**
     * Exit a parse tree produced by the `tableExecute`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitTableExecute?: (ctx: TableExecuteContext) => void;
    /**
     * Enter a parse tree produced by the `analyze`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterAnalyze?: (ctx: AnalyzeContext) => void;
    /**
     * Exit a parse tree produced by the `analyze`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitAnalyze?: (ctx: AnalyzeContext) => void;
    /**
     * Enter a parse tree produced by the `createMaterializedView`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => void;
    /**
     * Exit a parse tree produced by the `createMaterializedView`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => void;
    /**
     * Enter a parse tree produced by the `createView`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateView?: (ctx: CreateViewContext) => void;
    /**
     * Exit a parse tree produced by the `createView`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateView?: (ctx: CreateViewContext) => void;
    /**
     * Enter a parse tree produced by the `refreshMaterializedView`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterRefreshMaterializedView?: (ctx: RefreshMaterializedViewContext) => void;
    /**
     * Exit a parse tree produced by the `refreshMaterializedView`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitRefreshMaterializedView?: (ctx: RefreshMaterializedViewContext) => void;
    /**
     * Enter a parse tree produced by the `dropMaterializedView`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDropMaterializedView?: (ctx: DropMaterializedViewContext) => void;
    /**
     * Exit a parse tree produced by the `dropMaterializedView`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDropMaterializedView?: (ctx: DropMaterializedViewContext) => void;
    /**
     * Enter a parse tree produced by the `renameMaterializedView`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterRenameMaterializedView?: (ctx: RenameMaterializedViewContext) => void;
    /**
     * Exit a parse tree produced by the `renameMaterializedView`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitRenameMaterializedView?: (ctx: RenameMaterializedViewContext) => void;
    /**
     * Enter a parse tree produced by the `setMaterializedViewProperties`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterSetMaterializedViewProperties?: (ctx: SetMaterializedViewPropertiesContext) => void;
    /**
     * Exit a parse tree produced by the `setMaterializedViewProperties`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitSetMaterializedViewProperties?: (ctx: SetMaterializedViewPropertiesContext) => void;
    /**
     * Enter a parse tree produced by the `dropView`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDropView?: (ctx: DropViewContext) => void;
    /**
     * Exit a parse tree produced by the `dropView`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDropView?: (ctx: DropViewContext) => void;
    /**
     * Enter a parse tree produced by the `renameView`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterRenameView?: (ctx: RenameViewContext) => void;
    /**
     * Exit a parse tree produced by the `renameView`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitRenameView?: (ctx: RenameViewContext) => void;
    /**
     * Enter a parse tree produced by the `setViewAuthorization`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterSetViewAuthorization?: (ctx: SetViewAuthorizationContext) => void;
    /**
     * Exit a parse tree produced by the `setViewAuthorization`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitSetViewAuthorization?: (ctx: SetViewAuthorizationContext) => void;
    /**
     * Enter a parse tree produced by the `call`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterCall?: (ctx: CallContext) => void;
    /**
     * Exit a parse tree produced by the `call`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitCall?: (ctx: CallContext) => void;
    /**
     * Enter a parse tree produced by the `createRole`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateRole?: (ctx: CreateRoleContext) => void;
    /**
     * Exit a parse tree produced by the `createRole`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateRole?: (ctx: CreateRoleContext) => void;
    /**
     * Enter a parse tree produced by the `dropRole`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDropRole?: (ctx: DropRoleContext) => void;
    /**
     * Exit a parse tree produced by the `dropRole`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDropRole?: (ctx: DropRoleContext) => void;
    /**
     * Enter a parse tree produced by the `grantRoles`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterGrantRoles?: (ctx: GrantRolesContext) => void;
    /**
     * Exit a parse tree produced by the `grantRoles`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitGrantRoles?: (ctx: GrantRolesContext) => void;
    /**
     * Enter a parse tree produced by the `revokeRoles`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterRevokeRoles?: (ctx: RevokeRolesContext) => void;
    /**
     * Exit a parse tree produced by the `revokeRoles`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitRevokeRoles?: (ctx: RevokeRolesContext) => void;
    /**
     * Enter a parse tree produced by the `setRole`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterSetRole?: (ctx: SetRoleContext) => void;
    /**
     * Exit a parse tree produced by the `setRole`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitSetRole?: (ctx: SetRoleContext) => void;
    /**
     * Enter a parse tree produced by the `grant`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterGrant?: (ctx: GrantContext) => void;
    /**
     * Exit a parse tree produced by the `grant`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitGrant?: (ctx: GrantContext) => void;
    /**
     * Enter a parse tree produced by the `deny`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDeny?: (ctx: DenyContext) => void;
    /**
     * Exit a parse tree produced by the `deny`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDeny?: (ctx: DenyContext) => void;
    /**
     * Enter a parse tree produced by the `revoke`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterRevoke?: (ctx: RevokeContext) => void;
    /**
     * Exit a parse tree produced by the `revoke`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitRevoke?: (ctx: RevokeContext) => void;
    /**
     * Enter a parse tree produced by the `showGrants`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterShowGrants?: (ctx: ShowGrantsContext) => void;
    /**
     * Exit a parse tree produced by the `showGrants`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitShowGrants?: (ctx: ShowGrantsContext) => void;
    /**
     * Enter a parse tree produced by the `explain`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterExplain?: (ctx: ExplainContext) => void;
    /**
     * Exit a parse tree produced by the `explain`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitExplain?: (ctx: ExplainContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateTable`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterShowCreateTable?: (ctx: ShowCreateTableContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateTable`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitShowCreateTable?: (ctx: ShowCreateTableContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateSchema`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterShowCreateSchema?: (ctx: ShowCreateSchemaContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateSchema`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitShowCreateSchema?: (ctx: ShowCreateSchemaContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateView`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterShowCreateView?: (ctx: ShowCreateViewContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateView`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitShowCreateView?: (ctx: ShowCreateViewContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateMaterializedView`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterShowCreateMaterializedView?: (ctx: ShowCreateMaterializedViewContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateMaterializedView`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitShowCreateMaterializedView?: (ctx: ShowCreateMaterializedViewContext) => void;
    /**
     * Enter a parse tree produced by the `showTables`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterShowTables?: (ctx: ShowTablesContext) => void;
    /**
     * Exit a parse tree produced by the `showTables`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitShowTables?: (ctx: ShowTablesContext) => void;
    /**
     * Enter a parse tree produced by the `showSchemas`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterShowSchemas?: (ctx: ShowSchemasContext) => void;
    /**
     * Exit a parse tree produced by the `showSchemas`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitShowSchemas?: (ctx: ShowSchemasContext) => void;
    /**
     * Enter a parse tree produced by the `showCatalogs`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterShowCatalogs?: (ctx: ShowCatalogsContext) => void;
    /**
     * Exit a parse tree produced by the `showCatalogs`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitShowCatalogs?: (ctx: ShowCatalogsContext) => void;
    /**
     * Enter a parse tree produced by the `showColumns`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterShowColumns?: (ctx: ShowColumnsContext) => void;
    /**
     * Exit a parse tree produced by the `showColumns`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitShowColumns?: (ctx: ShowColumnsContext) => void;
    /**
     * Enter a parse tree produced by the `showStats`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterShowStats?: (ctx: ShowStatsContext) => void;
    /**
     * Exit a parse tree produced by the `showStats`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitShowStats?: (ctx: ShowStatsContext) => void;
    /**
     * Enter a parse tree produced by the `showStatsForQuery`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterShowStatsForQuery?: (ctx: ShowStatsForQueryContext) => void;
    /**
     * Exit a parse tree produced by the `showStatsForQuery`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitShowStatsForQuery?: (ctx: ShowStatsForQueryContext) => void;
    /**
     * Enter a parse tree produced by the `showRoles`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterShowRoles?: (ctx: ShowRolesContext) => void;
    /**
     * Exit a parse tree produced by the `showRoles`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitShowRoles?: (ctx: ShowRolesContext) => void;
    /**
     * Enter a parse tree produced by the `showRoleGrants`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterShowRoleGrants?: (ctx: ShowRoleGrantsContext) => void;
    /**
     * Exit a parse tree produced by the `showRoleGrants`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitShowRoleGrants?: (ctx: ShowRoleGrantsContext) => void;
    /**
     * Enter a parse tree produced by the `showFunctions`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterShowFunctions?: (ctx: ShowFunctionsContext) => void;
    /**
     * Exit a parse tree produced by the `showFunctions`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitShowFunctions?: (ctx: ShowFunctionsContext) => void;
    /**
     * Enter a parse tree produced by the `showSession`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterShowSession?: (ctx: ShowSessionContext) => void;
    /**
     * Exit a parse tree produced by the `showSession`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitShowSession?: (ctx: ShowSessionContext) => void;
    /**
     * Enter a parse tree produced by the `setSession`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterSetSession?: (ctx: SetSessionContext) => void;
    /**
     * Exit a parse tree produced by the `setSession`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitSetSession?: (ctx: SetSessionContext) => void;
    /**
     * Enter a parse tree produced by the `resetSession`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterResetSession?: (ctx: ResetSessionContext) => void;
    /**
     * Exit a parse tree produced by the `resetSession`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitResetSession?: (ctx: ResetSessionContext) => void;
    /**
     * Enter a parse tree produced by the `startTransaction`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterStartTransaction?: (ctx: StartTransactionContext) => void;
    /**
     * Exit a parse tree produced by the `startTransaction`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitStartTransaction?: (ctx: StartTransactionContext) => void;
    /**
     * Enter a parse tree produced by the `commit`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterCommit?: (ctx: CommitContext) => void;
    /**
     * Exit a parse tree produced by the `commit`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitCommit?: (ctx: CommitContext) => void;
    /**
     * Enter a parse tree produced by the `rollback`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterRollback?: (ctx: RollbackContext) => void;
    /**
     * Exit a parse tree produced by the `rollback`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitRollback?: (ctx: RollbackContext) => void;
    /**
     * Enter a parse tree produced by the `prepare`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterPrepare?: (ctx: PrepareContext) => void;
    /**
     * Exit a parse tree produced by the `prepare`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitPrepare?: (ctx: PrepareContext) => void;
    /**
     * Enter a parse tree produced by the `deallocate`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDeallocate?: (ctx: DeallocateContext) => void;
    /**
     * Exit a parse tree produced by the `deallocate`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDeallocate?: (ctx: DeallocateContext) => void;
    /**
     * Enter a parse tree produced by the `execute`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterExecute?: (ctx: ExecuteContext) => void;
    /**
     * Exit a parse tree produced by the `execute`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitExecute?: (ctx: ExecuteContext) => void;
    /**
     * Enter a parse tree produced by the `describeInput`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDescribeInput?: (ctx: DescribeInputContext) => void;
    /**
     * Exit a parse tree produced by the `describeInput`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDescribeInput?: (ctx: DescribeInputContext) => void;
    /**
     * Enter a parse tree produced by the `describeOutput`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterDescribeOutput?: (ctx: DescribeOutputContext) => void;
    /**
     * Exit a parse tree produced by the `describeOutput`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitDescribeOutput?: (ctx: DescribeOutputContext) => void;
    /**
     * Enter a parse tree produced by the `setPath`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterSetPath?: (ctx: SetPathContext) => void;
    /**
     * Exit a parse tree produced by the `setPath`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitSetPath?: (ctx: SetPathContext) => void;
    /**
     * Enter a parse tree produced by the `setTimeZone`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterSetTimeZone?: (ctx: SetTimeZoneContext) => void;
    /**
     * Exit a parse tree produced by the `setTimeZone`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitSetTimeZone?: (ctx: SetTimeZoneContext) => void;
    /**
     * Enter a parse tree produced by the `update`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterUpdate?: (ctx: UpdateContext) => void;
    /**
     * Exit a parse tree produced by the `update`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitUpdate?: (ctx: UpdateContext) => void;
    /**
     * Enter a parse tree produced by the `merge`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterMerge?: (ctx: MergeContext) => void;
    /**
     * Exit a parse tree produced by the `merge`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitMerge?: (ctx: MergeContext) => void;
    /**
     * Enter a parse tree produced by the `showTableComment`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterShowTableComment?: (ctx: ShowTableCommentContext) => void;
    /**
     * Exit a parse tree produced by the `showTableComment`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitShowTableComment?: (ctx: ShowTableCommentContext) => void;
    /**
     * Enter a parse tree produced by the `showColumnComment`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterShowColumnComment?: (ctx: ShowColumnCommentContext) => void;
    /**
     * Exit a parse tree produced by the `showColumnComment`
     * labeled alternative in `TrinoSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitShowColumnComment?: (ctx: ShowColumnCommentContext) => void;
    /**
     * Enter a parse tree produced by the `queryStatement`
     * labeled alternative in `TrinoSqlParser.query`.
     * @param ctx the parse tree
     */
    enterQueryStatement?: (ctx: QueryStatementContext) => void;
    /**
     * Exit a parse tree produced by the `queryStatement`
     * labeled alternative in `TrinoSqlParser.query`.
     * @param ctx the parse tree
     */
    exitQueryStatement?: (ctx: QueryStatementContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.with`.
     * @param ctx the parse tree
     */
    enterWith?: (ctx: WithContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.with`.
     * @param ctx the parse tree
     */
    exitWith?: (ctx: WithContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.tableElement`.
     * @param ctx the parse tree
     */
    enterTableElement?: (ctx: TableElementContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.tableElement`.
     * @param ctx the parse tree
     */
    exitTableElement?: (ctx: TableElementContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.columnDefinition`.
     * @param ctx the parse tree
     */
    enterColumnDefinition?: (ctx: ColumnDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.columnDefinition`.
     * @param ctx the parse tree
     */
    exitColumnDefinition?: (ctx: ColumnDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.likeClause`.
     * @param ctx the parse tree
     */
    enterLikeClause?: (ctx: LikeClauseContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.likeClause`.
     * @param ctx the parse tree
     */
    exitLikeClause?: (ctx: LikeClauseContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.properties`.
     * @param ctx the parse tree
     */
    enterProperties?: (ctx: PropertiesContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.properties`.
     * @param ctx the parse tree
     */
    exitProperties?: (ctx: PropertiesContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.propertyAssignments`.
     * @param ctx the parse tree
     */
    enterPropertyAssignments?: (ctx: PropertyAssignmentsContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.propertyAssignments`.
     * @param ctx the parse tree
     */
    exitPropertyAssignments?: (ctx: PropertyAssignmentsContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.property`.
     * @param ctx the parse tree
     */
    enterProperty?: (ctx: PropertyContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.property`.
     * @param ctx the parse tree
     */
    exitProperty?: (ctx: PropertyContext) => void;
    /**
     * Enter a parse tree produced by the `defaultPropertyValue`
     * labeled alternative in `TrinoSqlParser.propertyValue`.
     * @param ctx the parse tree
     */
    enterDefaultPropertyValue?: (ctx: DefaultPropertyValueContext) => void;
    /**
     * Exit a parse tree produced by the `defaultPropertyValue`
     * labeled alternative in `TrinoSqlParser.propertyValue`.
     * @param ctx the parse tree
     */
    exitDefaultPropertyValue?: (ctx: DefaultPropertyValueContext) => void;
    /**
     * Enter a parse tree produced by the `nonDefaultPropertyValue`
     * labeled alternative in `TrinoSqlParser.propertyValue`.
     * @param ctx the parse tree
     */
    enterNonDefaultPropertyValue?: (ctx: NonDefaultPropertyValueContext) => void;
    /**
     * Exit a parse tree produced by the `nonDefaultPropertyValue`
     * labeled alternative in `TrinoSqlParser.propertyValue`.
     * @param ctx the parse tree
     */
    exitNonDefaultPropertyValue?: (ctx: NonDefaultPropertyValueContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.queryNoWith`.
     * @param ctx the parse tree
     */
    enterQueryNoWith?: (ctx: QueryNoWithContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.queryNoWith`.
     * @param ctx the parse tree
     */
    exitQueryNoWith?: (ctx: QueryNoWithContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.limitRowCount`.
     * @param ctx the parse tree
     */
    enterLimitRowCount?: (ctx: LimitRowCountContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.limitRowCount`.
     * @param ctx the parse tree
     */
    exitLimitRowCount?: (ctx: LimitRowCountContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.rowCount`.
     * @param ctx the parse tree
     */
    enterRowCount?: (ctx: RowCountContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.rowCount`.
     * @param ctx the parse tree
     */
    exitRowCount?: (ctx: RowCountContext) => void;
    /**
     * Enter a parse tree produced by the `queryTermDefault`
     * labeled alternative in `TrinoSqlParser.queryTerm`.
     * @param ctx the parse tree
     */
    enterQueryTermDefault?: (ctx: QueryTermDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `queryTermDefault`
     * labeled alternative in `TrinoSqlParser.queryTerm`.
     * @param ctx the parse tree
     */
    exitQueryTermDefault?: (ctx: QueryTermDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `setOperation`
     * labeled alternative in `TrinoSqlParser.queryTerm`.
     * @param ctx the parse tree
     */
    enterSetOperation?: (ctx: SetOperationContext) => void;
    /**
     * Exit a parse tree produced by the `setOperation`
     * labeled alternative in `TrinoSqlParser.queryTerm`.
     * @param ctx the parse tree
     */
    exitSetOperation?: (ctx: SetOperationContext) => void;
    /**
     * Enter a parse tree produced by the `queryPrimaryDefault`
     * labeled alternative in `TrinoSqlParser.queryPrimary`.
     * @param ctx the parse tree
     */
    enterQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `queryPrimaryDefault`
     * labeled alternative in `TrinoSqlParser.queryPrimary`.
     * @param ctx the parse tree
     */
    exitQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `table`
     * labeled alternative in `TrinoSqlParser.queryPrimary`.
     * @param ctx the parse tree
     */
    enterTable?: (ctx: TableContext) => void;
    /**
     * Exit a parse tree produced by the `table`
     * labeled alternative in `TrinoSqlParser.queryPrimary`.
     * @param ctx the parse tree
     */
    exitTable?: (ctx: TableContext) => void;
    /**
     * Enter a parse tree produced by the `inlineTable`
     * labeled alternative in `TrinoSqlParser.queryPrimary`.
     * @param ctx the parse tree
     */
    enterInlineTable?: (ctx: InlineTableContext) => void;
    /**
     * Exit a parse tree produced by the `inlineTable`
     * labeled alternative in `TrinoSqlParser.queryPrimary`.
     * @param ctx the parse tree
     */
    exitInlineTable?: (ctx: InlineTableContext) => void;
    /**
     * Enter a parse tree produced by the `subquery`
     * labeled alternative in `TrinoSqlParser.queryPrimary`.
     * @param ctx the parse tree
     */
    enterSubquery?: (ctx: SubqueryContext) => void;
    /**
     * Exit a parse tree produced by the `subquery`
     * labeled alternative in `TrinoSqlParser.queryPrimary`.
     * @param ctx the parse tree
     */
    exitSubquery?: (ctx: SubqueryContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.sortItem`.
     * @param ctx the parse tree
     */
    enterSortItem?: (ctx: SortItemContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.sortItem`.
     * @param ctx the parse tree
     */
    exitSortItem?: (ctx: SortItemContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.querySpecification`.
     * @param ctx the parse tree
     */
    enterQuerySpecification?: (ctx: QuerySpecificationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.querySpecification`.
     * @param ctx the parse tree
     */
    exitQuerySpecification?: (ctx: QuerySpecificationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.groupBy`.
     * @param ctx the parse tree
     */
    enterGroupBy?: (ctx: GroupByContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.groupBy`.
     * @param ctx the parse tree
     */
    exitGroupBy?: (ctx: GroupByContext) => void;
    /**
     * Enter a parse tree produced by the `singleGroupingSet`
     * labeled alternative in `TrinoSqlParser.groupingElement`.
     * @param ctx the parse tree
     */
    enterSingleGroupingSet?: (ctx: SingleGroupingSetContext) => void;
    /**
     * Exit a parse tree produced by the `singleGroupingSet`
     * labeled alternative in `TrinoSqlParser.groupingElement`.
     * @param ctx the parse tree
     */
    exitSingleGroupingSet?: (ctx: SingleGroupingSetContext) => void;
    /**
     * Enter a parse tree produced by the `rollup`
     * labeled alternative in `TrinoSqlParser.groupingElement`.
     * @param ctx the parse tree
     */
    enterRollup?: (ctx: RollupContext) => void;
    /**
     * Exit a parse tree produced by the `rollup`
     * labeled alternative in `TrinoSqlParser.groupingElement`.
     * @param ctx the parse tree
     */
    exitRollup?: (ctx: RollupContext) => void;
    /**
     * Enter a parse tree produced by the `cube`
     * labeled alternative in `TrinoSqlParser.groupingElement`.
     * @param ctx the parse tree
     */
    enterCube?: (ctx: CubeContext) => void;
    /**
     * Exit a parse tree produced by the `cube`
     * labeled alternative in `TrinoSqlParser.groupingElement`.
     * @param ctx the parse tree
     */
    exitCube?: (ctx: CubeContext) => void;
    /**
     * Enter a parse tree produced by the `multipleGroupingSets`
     * labeled alternative in `TrinoSqlParser.groupingElement`.
     * @param ctx the parse tree
     */
    enterMultipleGroupingSets?: (ctx: MultipleGroupingSetsContext) => void;
    /**
     * Exit a parse tree produced by the `multipleGroupingSets`
     * labeled alternative in `TrinoSqlParser.groupingElement`.
     * @param ctx the parse tree
     */
    exitMultipleGroupingSets?: (ctx: MultipleGroupingSetsContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.groupingSet`.
     * @param ctx the parse tree
     */
    enterGroupingSet?: (ctx: GroupingSetContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.groupingSet`.
     * @param ctx the parse tree
     */
    exitGroupingSet?: (ctx: GroupingSetContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.groupingTerm`.
     * @param ctx the parse tree
     */
    enterGroupingTerm?: (ctx: GroupingTermContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.groupingTerm`.
     * @param ctx the parse tree
     */
    exitGroupingTerm?: (ctx: GroupingTermContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.windowDefinition`.
     * @param ctx the parse tree
     */
    enterWindowDefinition?: (ctx: WindowDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.windowDefinition`.
     * @param ctx the parse tree
     */
    exitWindowDefinition?: (ctx: WindowDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.windowSpecification`.
     * @param ctx the parse tree
     */
    enterWindowSpecification?: (ctx: WindowSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.windowSpecification`.
     * @param ctx the parse tree
     */
    exitWindowSpecification?: (ctx: WindowSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.namedQuery`.
     * @param ctx the parse tree
     */
    enterNamedQuery?: (ctx: NamedQueryContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.namedQuery`.
     * @param ctx the parse tree
     */
    exitNamedQuery?: (ctx: NamedQueryContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.setQuantifier`.
     * @param ctx the parse tree
     */
    enterSetQuantifier?: (ctx: SetQuantifierContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.setQuantifier`.
     * @param ctx the parse tree
     */
    exitSetQuantifier?: (ctx: SetQuantifierContext) => void;
    /**
     * Enter a parse tree produced by the `selectSingle`
     * labeled alternative in `TrinoSqlParser.selectItem`.
     * @param ctx the parse tree
     */
    enterSelectSingle?: (ctx: SelectSingleContext) => void;
    /**
     * Exit a parse tree produced by the `selectSingle`
     * labeled alternative in `TrinoSqlParser.selectItem`.
     * @param ctx the parse tree
     */
    exitSelectSingle?: (ctx: SelectSingleContext) => void;
    /**
     * Enter a parse tree produced by the `selectAll`
     * labeled alternative in `TrinoSqlParser.selectItem`.
     * @param ctx the parse tree
     */
    enterSelectAll?: (ctx: SelectAllContext) => void;
    /**
     * Exit a parse tree produced by the `selectAll`
     * labeled alternative in `TrinoSqlParser.selectItem`.
     * @param ctx the parse tree
     */
    exitSelectAll?: (ctx: SelectAllContext) => void;
    /**
     * Enter a parse tree produced by the `relationDefault`
     * labeled alternative in `TrinoSqlParser.relation`.
     * @param ctx the parse tree
     */
    enterRelationDefault?: (ctx: RelationDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `relationDefault`
     * labeled alternative in `TrinoSqlParser.relation`.
     * @param ctx the parse tree
     */
    exitRelationDefault?: (ctx: RelationDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `joinRelation`
     * labeled alternative in `TrinoSqlParser.relation`.
     * @param ctx the parse tree
     */
    enterJoinRelation?: (ctx: JoinRelationContext) => void;
    /**
     * Exit a parse tree produced by the `joinRelation`
     * labeled alternative in `TrinoSqlParser.relation`.
     * @param ctx the parse tree
     */
    exitJoinRelation?: (ctx: JoinRelationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.joinType`.
     * @param ctx the parse tree
     */
    enterJoinType?: (ctx: JoinTypeContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.joinType`.
     * @param ctx the parse tree
     */
    exitJoinType?: (ctx: JoinTypeContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.joinCriteria`.
     * @param ctx the parse tree
     */
    enterJoinCriteria?: (ctx: JoinCriteriaContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.joinCriteria`.
     * @param ctx the parse tree
     */
    exitJoinCriteria?: (ctx: JoinCriteriaContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.sampledRelation`.
     * @param ctx the parse tree
     */
    enterSampledRelation?: (ctx: SampledRelationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.sampledRelation`.
     * @param ctx the parse tree
     */
    exitSampledRelation?: (ctx: SampledRelationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.sampleType`.
     * @param ctx the parse tree
     */
    enterSampleType?: (ctx: SampleTypeContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.sampleType`.
     * @param ctx the parse tree
     */
    exitSampleType?: (ctx: SampleTypeContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.patternRecognition`.
     * @param ctx the parse tree
     */
    enterPatternRecognition?: (ctx: PatternRecognitionContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.patternRecognition`.
     * @param ctx the parse tree
     */
    exitPatternRecognition?: (ctx: PatternRecognitionContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.measureDefinition`.
     * @param ctx the parse tree
     */
    enterMeasureDefinition?: (ctx: MeasureDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.measureDefinition`.
     * @param ctx the parse tree
     */
    exitMeasureDefinition?: (ctx: MeasureDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.rowsPerMatch`.
     * @param ctx the parse tree
     */
    enterRowsPerMatch?: (ctx: RowsPerMatchContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.rowsPerMatch`.
     * @param ctx the parse tree
     */
    exitRowsPerMatch?: (ctx: RowsPerMatchContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.emptyMatchHandling`.
     * @param ctx the parse tree
     */
    enterEmptyMatchHandling?: (ctx: EmptyMatchHandlingContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.emptyMatchHandling`.
     * @param ctx the parse tree
     */
    exitEmptyMatchHandling?: (ctx: EmptyMatchHandlingContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.skipTo`.
     * @param ctx the parse tree
     */
    enterSkipTo?: (ctx: SkipToContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.skipTo`.
     * @param ctx the parse tree
     */
    exitSkipTo?: (ctx: SkipToContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.subsetDefinition`.
     * @param ctx the parse tree
     */
    enterSubsetDefinition?: (ctx: SubsetDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.subsetDefinition`.
     * @param ctx the parse tree
     */
    exitSubsetDefinition?: (ctx: SubsetDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.variableDefinition`.
     * @param ctx the parse tree
     */
    enterVariableDefinition?: (ctx: VariableDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.variableDefinition`.
     * @param ctx the parse tree
     */
    exitVariableDefinition?: (ctx: VariableDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.aliasedRelation`.
     * @param ctx the parse tree
     */
    enterAliasedRelation?: (ctx: AliasedRelationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.aliasedRelation`.
     * @param ctx the parse tree
     */
    exitAliasedRelation?: (ctx: AliasedRelationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.columnListCreate`.
     * @param ctx the parse tree
     */
    enterColumnListCreate?: (ctx: ColumnListCreateContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.columnListCreate`.
     * @param ctx the parse tree
     */
    exitColumnListCreate?: (ctx: ColumnListCreateContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.columnList`.
     * @param ctx the parse tree
     */
    enterColumnList?: (ctx: ColumnListContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.columnList`.
     * @param ctx the parse tree
     */
    exitColumnList?: (ctx: ColumnListContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.columnAliases`.
     * @param ctx the parse tree
     */
    enterColumnAliases?: (ctx: ColumnAliasesContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.columnAliases`.
     * @param ctx the parse tree
     */
    exitColumnAliases?: (ctx: ColumnAliasesContext) => void;
    /**
     * Enter a parse tree produced by the `tableOrViewRelation`
     * labeled alternative in `TrinoSqlParser.relationPrimary`.
     * @param ctx the parse tree
     */
    enterTableOrViewRelation?: (ctx: TableOrViewRelationContext) => void;
    /**
     * Exit a parse tree produced by the `tableOrViewRelation`
     * labeled alternative in `TrinoSqlParser.relationPrimary`.
     * @param ctx the parse tree
     */
    exitTableOrViewRelation?: (ctx: TableOrViewRelationContext) => void;
    /**
     * Enter a parse tree produced by the `subqueryRelation`
     * labeled alternative in `TrinoSqlParser.relationPrimary`.
     * @param ctx the parse tree
     */
    enterSubqueryRelation?: (ctx: SubqueryRelationContext) => void;
    /**
     * Exit a parse tree produced by the `subqueryRelation`
     * labeled alternative in `TrinoSqlParser.relationPrimary`.
     * @param ctx the parse tree
     */
    exitSubqueryRelation?: (ctx: SubqueryRelationContext) => void;
    /**
     * Enter a parse tree produced by the `unnest`
     * labeled alternative in `TrinoSqlParser.relationPrimary`.
     * @param ctx the parse tree
     */
    enterUnnest?: (ctx: UnnestContext) => void;
    /**
     * Exit a parse tree produced by the `unnest`
     * labeled alternative in `TrinoSqlParser.relationPrimary`.
     * @param ctx the parse tree
     */
    exitUnnest?: (ctx: UnnestContext) => void;
    /**
     * Enter a parse tree produced by the `lateral`
     * labeled alternative in `TrinoSqlParser.relationPrimary`.
     * @param ctx the parse tree
     */
    enterLateral?: (ctx: LateralContext) => void;
    /**
     * Exit a parse tree produced by the `lateral`
     * labeled alternative in `TrinoSqlParser.relationPrimary`.
     * @param ctx the parse tree
     */
    exitLateral?: (ctx: LateralContext) => void;
    /**
     * Enter a parse tree produced by the `parenthesizedRelation`
     * labeled alternative in `TrinoSqlParser.relationPrimary`.
     * @param ctx the parse tree
     */
    enterParenthesizedRelation?: (ctx: ParenthesizedRelationContext) => void;
    /**
     * Exit a parse tree produced by the `parenthesizedRelation`
     * labeled alternative in `TrinoSqlParser.relationPrimary`.
     * @param ctx the parse tree
     */
    exitParenthesizedRelation?: (ctx: ParenthesizedRelationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `logicalNot`
     * labeled alternative in `TrinoSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterLogicalNot?: (ctx: LogicalNotContext) => void;
    /**
     * Exit a parse tree produced by the `logicalNot`
     * labeled alternative in `TrinoSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitLogicalNot?: (ctx: LogicalNotContext) => void;
    /**
     * Enter a parse tree produced by the `predicated`
     * labeled alternative in `TrinoSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterPredicated?: (ctx: PredicatedContext) => void;
    /**
     * Exit a parse tree produced by the `predicated`
     * labeled alternative in `TrinoSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitPredicated?: (ctx: PredicatedContext) => void;
    /**
     * Enter a parse tree produced by the `logicalBinary`
     * labeled alternative in `TrinoSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterLogicalBinary?: (ctx: LogicalBinaryContext) => void;
    /**
     * Exit a parse tree produced by the `logicalBinary`
     * labeled alternative in `TrinoSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitLogicalBinary?: (ctx: LogicalBinaryContext) => void;
    /**
     * Enter a parse tree produced by the `comparison`
     * labeled alternative in `TrinoSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterComparison?: (ctx: ComparisonContext) => void;
    /**
     * Exit a parse tree produced by the `comparison`
     * labeled alternative in `TrinoSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitComparison?: (ctx: ComparisonContext) => void;
    /**
     * Enter a parse tree produced by the `quantifiedComparison`
     * labeled alternative in `TrinoSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterQuantifiedComparison?: (ctx: QuantifiedComparisonContext) => void;
    /**
     * Exit a parse tree produced by the `quantifiedComparison`
     * labeled alternative in `TrinoSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitQuantifiedComparison?: (ctx: QuantifiedComparisonContext) => void;
    /**
     * Enter a parse tree produced by the `between`
     * labeled alternative in `TrinoSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterBetween?: (ctx: BetweenContext) => void;
    /**
     * Exit a parse tree produced by the `between`
     * labeled alternative in `TrinoSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitBetween?: (ctx: BetweenContext) => void;
    /**
     * Enter a parse tree produced by the `inList`
     * labeled alternative in `TrinoSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterInList?: (ctx: InListContext) => void;
    /**
     * Exit a parse tree produced by the `inList`
     * labeled alternative in `TrinoSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitInList?: (ctx: InListContext) => void;
    /**
     * Enter a parse tree produced by the `inSubquery`
     * labeled alternative in `TrinoSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterInSubquery?: (ctx: InSubqueryContext) => void;
    /**
     * Exit a parse tree produced by the `inSubquery`
     * labeled alternative in `TrinoSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitInSubquery?: (ctx: InSubqueryContext) => void;
    /**
     * Enter a parse tree produced by the `like`
     * labeled alternative in `TrinoSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterLike?: (ctx: LikeContext) => void;
    /**
     * Exit a parse tree produced by the `like`
     * labeled alternative in `TrinoSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitLike?: (ctx: LikeContext) => void;
    /**
     * Enter a parse tree produced by the `nullPredicate`
     * labeled alternative in `TrinoSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterNullPredicate?: (ctx: NullPredicateContext) => void;
    /**
     * Exit a parse tree produced by the `nullPredicate`
     * labeled alternative in `TrinoSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitNullPredicate?: (ctx: NullPredicateContext) => void;
    /**
     * Enter a parse tree produced by the `distinctFrom`
     * labeled alternative in `TrinoSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterDistinctFrom?: (ctx: DistinctFromContext) => void;
    /**
     * Exit a parse tree produced by the `distinctFrom`
     * labeled alternative in `TrinoSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitDistinctFrom?: (ctx: DistinctFromContext) => void;
    /**
     * Enter a parse tree produced by the `valueExpressionDefault`
     * labeled alternative in `TrinoSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `valueExpressionDefault`
     * labeled alternative in `TrinoSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `concatenation`
     * labeled alternative in `TrinoSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterConcatenation?: (ctx: ConcatenationContext) => void;
    /**
     * Exit a parse tree produced by the `concatenation`
     * labeled alternative in `TrinoSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitConcatenation?: (ctx: ConcatenationContext) => void;
    /**
     * Enter a parse tree produced by the `arithmeticBinary`
     * labeled alternative in `TrinoSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
    /**
     * Exit a parse tree produced by the `arithmeticBinary`
     * labeled alternative in `TrinoSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
    /**
     * Enter a parse tree produced by the `arithmeticUnary`
     * labeled alternative in `TrinoSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
    /**
     * Exit a parse tree produced by the `arithmeticUnary`
     * labeled alternative in `TrinoSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
    /**
     * Enter a parse tree produced by the `atTimeZone`
     * labeled alternative in `TrinoSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterAtTimeZone?: (ctx: AtTimeZoneContext) => void;
    /**
     * Exit a parse tree produced by the `atTimeZone`
     * labeled alternative in `TrinoSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitAtTimeZone?: (ctx: AtTimeZoneContext) => void;
    /**
     * Enter a parse tree produced by the `dereference`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterDereference?: (ctx: DereferenceContext) => void;
    /**
     * Exit a parse tree produced by the `dereference`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitDereference?: (ctx: DereferenceContext) => void;
    /**
     * Enter a parse tree produced by the `typeConstructor`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterTypeConstructor?: (ctx: TypeConstructorContext) => void;
    /**
     * Exit a parse tree produced by the `typeConstructor`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitTypeConstructor?: (ctx: TypeConstructorContext) => void;
    /**
     * Enter a parse tree produced by the `specialDateTimeFunction`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSpecialDateTimeFunction?: (ctx: SpecialDateTimeFunctionContext) => void;
    /**
     * Exit a parse tree produced by the `specialDateTimeFunction`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSpecialDateTimeFunction?: (ctx: SpecialDateTimeFunctionContext) => void;
    /**
     * Enter a parse tree produced by the `substring`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSubstring?: (ctx: SubstringContext) => void;
    /**
     * Exit a parse tree produced by the `substring`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSubstring?: (ctx: SubstringContext) => void;
    /**
     * Enter a parse tree produced by the `cast`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCast?: (ctx: CastContext) => void;
    /**
     * Exit a parse tree produced by the `cast`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCast?: (ctx: CastContext) => void;
    /**
     * Enter a parse tree produced by the `lambda`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterLambda?: (ctx: LambdaContext) => void;
    /**
     * Exit a parse tree produced by the `lambda`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitLambda?: (ctx: LambdaContext) => void;
    /**
     * Enter a parse tree produced by the `parenthesizedExpression`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `parenthesizedExpression`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `parameter`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterParameter?: (ctx: ParameterContext) => void;
    /**
     * Exit a parse tree produced by the `parameter`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitParameter?: (ctx: ParameterContext) => void;
    /**
     * Enter a parse tree produced by the `normalize`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterNormalize?: (ctx: NormalizeContext) => void;
    /**
     * Exit a parse tree produced by the `normalize`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitNormalize?: (ctx: NormalizeContext) => void;
    /**
     * Enter a parse tree produced by the `intervalLiteral`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterIntervalLiteral?: (ctx: IntervalLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `intervalLiteral`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitIntervalLiteral?: (ctx: IntervalLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `numericLiteral`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterNumericLiteral?: (ctx: NumericLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `numericLiteral`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitNumericLiteral?: (ctx: NumericLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `booleanLiteral`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `booleanLiteral`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `simpleCase`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSimpleCase?: (ctx: SimpleCaseContext) => void;
    /**
     * Exit a parse tree produced by the `simpleCase`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSimpleCase?: (ctx: SimpleCaseContext) => void;
    /**
     * Enter a parse tree produced by the `columnReference`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterColumnReference?: (ctx: ColumnReferenceContext) => void;
    /**
     * Exit a parse tree produced by the `columnReference`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitColumnReference?: (ctx: ColumnReferenceContext) => void;
    /**
     * Enter a parse tree produced by the `nullLiteral`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterNullLiteral?: (ctx: NullLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `nullLiteral`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitNullLiteral?: (ctx: NullLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `rowConstructor`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterRowConstructor?: (ctx: RowConstructorContext) => void;
    /**
     * Exit a parse tree produced by the `rowConstructor`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitRowConstructor?: (ctx: RowConstructorContext) => void;
    /**
     * Enter a parse tree produced by the `subscript`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSubscript?: (ctx: SubscriptContext) => void;
    /**
     * Exit a parse tree produced by the `subscript`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSubscript?: (ctx: SubscriptContext) => void;
    /**
     * Enter a parse tree produced by the `currentPath`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCurrentPath?: (ctx: CurrentPathContext) => void;
    /**
     * Exit a parse tree produced by the `currentPath`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCurrentPath?: (ctx: CurrentPathContext) => void;
    /**
     * Enter a parse tree produced by the `subqueryExpression`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `subqueryExpression`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `binaryLiteral`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterBinaryLiteral?: (ctx: BinaryLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `binaryLiteral`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitBinaryLiteral?: (ctx: BinaryLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `currentUser`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCurrentUser?: (ctx: CurrentUserContext) => void;
    /**
     * Exit a parse tree produced by the `currentUser`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCurrentUser?: (ctx: CurrentUserContext) => void;
    /**
     * Enter a parse tree produced by the `measure`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterMeasure?: (ctx: MeasureContext) => void;
    /**
     * Exit a parse tree produced by the `measure`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitMeasure?: (ctx: MeasureContext) => void;
    /**
     * Enter a parse tree produced by the `extract`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterExtract?: (ctx: ExtractContext) => void;
    /**
     * Exit a parse tree produced by the `extract`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitExtract?: (ctx: ExtractContext) => void;
    /**
     * Enter a parse tree produced by the `stringLiteral`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterStringLiteral?: (ctx: StringLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `stringLiteral`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitStringLiteral?: (ctx: StringLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `arrayConstructor`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterArrayConstructor?: (ctx: ArrayConstructorContext) => void;
    /**
     * Exit a parse tree produced by the `arrayConstructor`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitArrayConstructor?: (ctx: ArrayConstructorContext) => void;
    /**
     * Enter a parse tree produced by the `functionCall`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `functionCall`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `currentSchema`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCurrentSchema?: (ctx: CurrentSchemaContext) => void;
    /**
     * Exit a parse tree produced by the `currentSchema`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCurrentSchema?: (ctx: CurrentSchemaContext) => void;
    /**
     * Enter a parse tree produced by the `exists`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterExists?: (ctx: ExistsContext) => void;
    /**
     * Exit a parse tree produced by the `exists`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitExists?: (ctx: ExistsContext) => void;
    /**
     * Enter a parse tree produced by the `position`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterPosition?: (ctx: PositionContext) => void;
    /**
     * Exit a parse tree produced by the `position`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitPosition?: (ctx: PositionContext) => void;
    /**
     * Enter a parse tree produced by the `searchedCase`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSearchedCase?: (ctx: SearchedCaseContext) => void;
    /**
     * Exit a parse tree produced by the `searchedCase`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSearchedCase?: (ctx: SearchedCaseContext) => void;
    /**
     * Enter a parse tree produced by the `currentCatalog`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCurrentCatalog?: (ctx: CurrentCatalogContext) => void;
    /**
     * Exit a parse tree produced by the `currentCatalog`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCurrentCatalog?: (ctx: CurrentCatalogContext) => void;
    /**
     * Enter a parse tree produced by the `groupingOperation`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterGroupingOperation?: (ctx: GroupingOperationContext) => void;
    /**
     * Exit a parse tree produced by the `groupingOperation`
     * labeled alternative in `TrinoSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitGroupingOperation?: (ctx: GroupingOperationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.processingMode`.
     * @param ctx the parse tree
     */
    enterProcessingMode?: (ctx: ProcessingModeContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.processingMode`.
     * @param ctx the parse tree
     */
    exitProcessingMode?: (ctx: ProcessingModeContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.nullTreatment`.
     * @param ctx the parse tree
     */
    enterNullTreatment?: (ctx: NullTreatmentContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.nullTreatment`.
     * @param ctx the parse tree
     */
    exitNullTreatment?: (ctx: NullTreatmentContext) => void;
    /**
     * Enter a parse tree produced by the `basicStringLiteral`
     * labeled alternative in `TrinoSqlParser.string`.
     * @param ctx the parse tree
     */
    enterBasicStringLiteral?: (ctx: BasicStringLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `basicStringLiteral`
     * labeled alternative in `TrinoSqlParser.string`.
     * @param ctx the parse tree
     */
    exitBasicStringLiteral?: (ctx: BasicStringLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `unicodeStringLiteral`
     * labeled alternative in `TrinoSqlParser.string`.
     * @param ctx the parse tree
     */
    enterUnicodeStringLiteral?: (ctx: UnicodeStringLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `unicodeStringLiteral`
     * labeled alternative in `TrinoSqlParser.string`.
     * @param ctx the parse tree
     */
    exitUnicodeStringLiteral?: (ctx: UnicodeStringLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `timeZoneInterval`
     * labeled alternative in `TrinoSqlParser.timeZoneSpecifier`.
     * @param ctx the parse tree
     */
    enterTimeZoneInterval?: (ctx: TimeZoneIntervalContext) => void;
    /**
     * Exit a parse tree produced by the `timeZoneInterval`
     * labeled alternative in `TrinoSqlParser.timeZoneSpecifier`.
     * @param ctx the parse tree
     */
    exitTimeZoneInterval?: (ctx: TimeZoneIntervalContext) => void;
    /**
     * Enter a parse tree produced by the `timeZoneString`
     * labeled alternative in `TrinoSqlParser.timeZoneSpecifier`.
     * @param ctx the parse tree
     */
    enterTimeZoneString?: (ctx: TimeZoneStringContext) => void;
    /**
     * Exit a parse tree produced by the `timeZoneString`
     * labeled alternative in `TrinoSqlParser.timeZoneSpecifier`.
     * @param ctx the parse tree
     */
    exitTimeZoneString?: (ctx: TimeZoneStringContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.comparisonQuantifier`.
     * @param ctx the parse tree
     */
    enterComparisonQuantifier?: (ctx: ComparisonQuantifierContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.comparisonQuantifier`.
     * @param ctx the parse tree
     */
    exitComparisonQuantifier?: (ctx: ComparisonQuantifierContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.booleanValue`.
     * @param ctx the parse tree
     */
    enterBooleanValue?: (ctx: BooleanValueContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.booleanValue`.
     * @param ctx the parse tree
     */
    exitBooleanValue?: (ctx: BooleanValueContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.interval`.
     * @param ctx the parse tree
     */
    enterInterval?: (ctx: IntervalContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.interval`.
     * @param ctx the parse tree
     */
    exitInterval?: (ctx: IntervalContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.intervalField`.
     * @param ctx the parse tree
     */
    enterIntervalField?: (ctx: IntervalFieldContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.intervalField`.
     * @param ctx the parse tree
     */
    exitIntervalField?: (ctx: IntervalFieldContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.normalForm`.
     * @param ctx the parse tree
     */
    enterNormalForm?: (ctx: NormalFormContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.normalForm`.
     * @param ctx the parse tree
     */
    exitNormalForm?: (ctx: NormalFormContext) => void;
    /**
     * Enter a parse tree produced by the `rowType`
     * labeled alternative in `TrinoSqlParser.type`.
     * @param ctx the parse tree
     */
    enterRowType?: (ctx: RowTypeContext) => void;
    /**
     * Exit a parse tree produced by the `rowType`
     * labeled alternative in `TrinoSqlParser.type`.
     * @param ctx the parse tree
     */
    exitRowType?: (ctx: RowTypeContext) => void;
    /**
     * Enter a parse tree produced by the `intervalType`
     * labeled alternative in `TrinoSqlParser.type`.
     * @param ctx the parse tree
     */
    enterIntervalType?: (ctx: IntervalTypeContext) => void;
    /**
     * Exit a parse tree produced by the `intervalType`
     * labeled alternative in `TrinoSqlParser.type`.
     * @param ctx the parse tree
     */
    exitIntervalType?: (ctx: IntervalTypeContext) => void;
    /**
     * Enter a parse tree produced by the `arrayType`
     * labeled alternative in `TrinoSqlParser.type`.
     * @param ctx the parse tree
     */
    enterArrayType?: (ctx: ArrayTypeContext) => void;
    /**
     * Exit a parse tree produced by the `arrayType`
     * labeled alternative in `TrinoSqlParser.type`.
     * @param ctx the parse tree
     */
    exitArrayType?: (ctx: ArrayTypeContext) => void;
    /**
     * Enter a parse tree produced by the `doublePrecisionType`
     * labeled alternative in `TrinoSqlParser.type`.
     * @param ctx the parse tree
     */
    enterDoublePrecisionType?: (ctx: DoublePrecisionTypeContext) => void;
    /**
     * Exit a parse tree produced by the `doublePrecisionType`
     * labeled alternative in `TrinoSqlParser.type`.
     * @param ctx the parse tree
     */
    exitDoublePrecisionType?: (ctx: DoublePrecisionTypeContext) => void;
    /**
     * Enter a parse tree produced by the `legacyArrayType`
     * labeled alternative in `TrinoSqlParser.type`.
     * @param ctx the parse tree
     */
    enterLegacyArrayType?: (ctx: LegacyArrayTypeContext) => void;
    /**
     * Exit a parse tree produced by the `legacyArrayType`
     * labeled alternative in `TrinoSqlParser.type`.
     * @param ctx the parse tree
     */
    exitLegacyArrayType?: (ctx: LegacyArrayTypeContext) => void;
    /**
     * Enter a parse tree produced by the `genericType`
     * labeled alternative in `TrinoSqlParser.type`.
     * @param ctx the parse tree
     */
    enterGenericType?: (ctx: GenericTypeContext) => void;
    /**
     * Exit a parse tree produced by the `genericType`
     * labeled alternative in `TrinoSqlParser.type`.
     * @param ctx the parse tree
     */
    exitGenericType?: (ctx: GenericTypeContext) => void;
    /**
     * Enter a parse tree produced by the `dateTimeType`
     * labeled alternative in `TrinoSqlParser.type`.
     * @param ctx the parse tree
     */
    enterDateTimeType?: (ctx: DateTimeTypeContext) => void;
    /**
     * Exit a parse tree produced by the `dateTimeType`
     * labeled alternative in `TrinoSqlParser.type`.
     * @param ctx the parse tree
     */
    exitDateTimeType?: (ctx: DateTimeTypeContext) => void;
    /**
     * Enter a parse tree produced by the `legacyMapType`
     * labeled alternative in `TrinoSqlParser.type`.
     * @param ctx the parse tree
     */
    enterLegacyMapType?: (ctx: LegacyMapTypeContext) => void;
    /**
     * Exit a parse tree produced by the `legacyMapType`
     * labeled alternative in `TrinoSqlParser.type`.
     * @param ctx the parse tree
     */
    exitLegacyMapType?: (ctx: LegacyMapTypeContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.rowField`.
     * @param ctx the parse tree
     */
    enterRowField?: (ctx: RowFieldContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.rowField`.
     * @param ctx the parse tree
     */
    exitRowField?: (ctx: RowFieldContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.typeParameter`.
     * @param ctx the parse tree
     */
    enterTypeParameter?: (ctx: TypeParameterContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.typeParameter`.
     * @param ctx the parse tree
     */
    exitTypeParameter?: (ctx: TypeParameterContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.whenClause`.
     * @param ctx the parse tree
     */
    enterWhenClause?: (ctx: WhenClauseContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.whenClause`.
     * @param ctx the parse tree
     */
    exitWhenClause?: (ctx: WhenClauseContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.filter`.
     * @param ctx the parse tree
     */
    enterFilter?: (ctx: FilterContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.filter`.
     * @param ctx the parse tree
     */
    exitFilter?: (ctx: FilterContext) => void;
    /**
     * Enter a parse tree produced by the `mergeUpdate`
     * labeled alternative in `TrinoSqlParser.mergeCase`.
     * @param ctx the parse tree
     */
    enterMergeUpdate?: (ctx: MergeUpdateContext) => void;
    /**
     * Exit a parse tree produced by the `mergeUpdate`
     * labeled alternative in `TrinoSqlParser.mergeCase`.
     * @param ctx the parse tree
     */
    exitMergeUpdate?: (ctx: MergeUpdateContext) => void;
    /**
     * Enter a parse tree produced by the `mergeDelete`
     * labeled alternative in `TrinoSqlParser.mergeCase`.
     * @param ctx the parse tree
     */
    enterMergeDelete?: (ctx: MergeDeleteContext) => void;
    /**
     * Exit a parse tree produced by the `mergeDelete`
     * labeled alternative in `TrinoSqlParser.mergeCase`.
     * @param ctx the parse tree
     */
    exitMergeDelete?: (ctx: MergeDeleteContext) => void;
    /**
     * Enter a parse tree produced by the `mergeInsert`
     * labeled alternative in `TrinoSqlParser.mergeCase`.
     * @param ctx the parse tree
     */
    enterMergeInsert?: (ctx: MergeInsertContext) => void;
    /**
     * Exit a parse tree produced by the `mergeInsert`
     * labeled alternative in `TrinoSqlParser.mergeCase`.
     * @param ctx the parse tree
     */
    exitMergeInsert?: (ctx: MergeInsertContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.over`.
     * @param ctx the parse tree
     */
    enterOver?: (ctx: OverContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.over`.
     * @param ctx the parse tree
     */
    exitOver?: (ctx: OverContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.windowFrame`.
     * @param ctx the parse tree
     */
    enterWindowFrame?: (ctx: WindowFrameContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.windowFrame`.
     * @param ctx the parse tree
     */
    exitWindowFrame?: (ctx: WindowFrameContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.frameExtent`.
     * @param ctx the parse tree
     */
    enterFrameExtent?: (ctx: FrameExtentContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.frameExtent`.
     * @param ctx the parse tree
     */
    exitFrameExtent?: (ctx: FrameExtentContext) => void;
    /**
     * Enter a parse tree produced by the `unboundedFrame`
     * labeled alternative in `TrinoSqlParser.frameBound`.
     * @param ctx the parse tree
     */
    enterUnboundedFrame?: (ctx: UnboundedFrameContext) => void;
    /**
     * Exit a parse tree produced by the `unboundedFrame`
     * labeled alternative in `TrinoSqlParser.frameBound`.
     * @param ctx the parse tree
     */
    exitUnboundedFrame?: (ctx: UnboundedFrameContext) => void;
    /**
     * Enter a parse tree produced by the `currentRowBound`
     * labeled alternative in `TrinoSqlParser.frameBound`.
     * @param ctx the parse tree
     */
    enterCurrentRowBound?: (ctx: CurrentRowBoundContext) => void;
    /**
     * Exit a parse tree produced by the `currentRowBound`
     * labeled alternative in `TrinoSqlParser.frameBound`.
     * @param ctx the parse tree
     */
    exitCurrentRowBound?: (ctx: CurrentRowBoundContext) => void;
    /**
     * Enter a parse tree produced by the `boundedFrame`
     * labeled alternative in `TrinoSqlParser.frameBound`.
     * @param ctx the parse tree
     */
    enterBoundedFrame?: (ctx: BoundedFrameContext) => void;
    /**
     * Exit a parse tree produced by the `boundedFrame`
     * labeled alternative in `TrinoSqlParser.frameBound`.
     * @param ctx the parse tree
     */
    exitBoundedFrame?: (ctx: BoundedFrameContext) => void;
    /**
     * Enter a parse tree produced by the `quantifiedPrimary`
     * labeled alternative in `TrinoSqlParser.rowPattern`.
     * @param ctx the parse tree
     */
    enterQuantifiedPrimary?: (ctx: QuantifiedPrimaryContext) => void;
    /**
     * Exit a parse tree produced by the `quantifiedPrimary`
     * labeled alternative in `TrinoSqlParser.rowPattern`.
     * @param ctx the parse tree
     */
    exitQuantifiedPrimary?: (ctx: QuantifiedPrimaryContext) => void;
    /**
     * Enter a parse tree produced by the `patternConcatenation`
     * labeled alternative in `TrinoSqlParser.rowPattern`.
     * @param ctx the parse tree
     */
    enterPatternConcatenation?: (ctx: PatternConcatenationContext) => void;
    /**
     * Exit a parse tree produced by the `patternConcatenation`
     * labeled alternative in `TrinoSqlParser.rowPattern`.
     * @param ctx the parse tree
     */
    exitPatternConcatenation?: (ctx: PatternConcatenationContext) => void;
    /**
     * Enter a parse tree produced by the `patternAlternation`
     * labeled alternative in `TrinoSqlParser.rowPattern`.
     * @param ctx the parse tree
     */
    enterPatternAlternation?: (ctx: PatternAlternationContext) => void;
    /**
     * Exit a parse tree produced by the `patternAlternation`
     * labeled alternative in `TrinoSqlParser.rowPattern`.
     * @param ctx the parse tree
     */
    exitPatternAlternation?: (ctx: PatternAlternationContext) => void;
    /**
     * Enter a parse tree produced by the `patternVariable`
     * labeled alternative in `TrinoSqlParser.patternPrimary`.
     * @param ctx the parse tree
     */
    enterPatternVariable?: (ctx: PatternVariableContext) => void;
    /**
     * Exit a parse tree produced by the `patternVariable`
     * labeled alternative in `TrinoSqlParser.patternPrimary`.
     * @param ctx the parse tree
     */
    exitPatternVariable?: (ctx: PatternVariableContext) => void;
    /**
     * Enter a parse tree produced by the `emptyPattern`
     * labeled alternative in `TrinoSqlParser.patternPrimary`.
     * @param ctx the parse tree
     */
    enterEmptyPattern?: (ctx: EmptyPatternContext) => void;
    /**
     * Exit a parse tree produced by the `emptyPattern`
     * labeled alternative in `TrinoSqlParser.patternPrimary`.
     * @param ctx the parse tree
     */
    exitEmptyPattern?: (ctx: EmptyPatternContext) => void;
    /**
     * Enter a parse tree produced by the `patternPermutation`
     * labeled alternative in `TrinoSqlParser.patternPrimary`.
     * @param ctx the parse tree
     */
    enterPatternPermutation?: (ctx: PatternPermutationContext) => void;
    /**
     * Exit a parse tree produced by the `patternPermutation`
     * labeled alternative in `TrinoSqlParser.patternPrimary`.
     * @param ctx the parse tree
     */
    exitPatternPermutation?: (ctx: PatternPermutationContext) => void;
    /**
     * Enter a parse tree produced by the `groupedPattern`
     * labeled alternative in `TrinoSqlParser.patternPrimary`.
     * @param ctx the parse tree
     */
    enterGroupedPattern?: (ctx: GroupedPatternContext) => void;
    /**
     * Exit a parse tree produced by the `groupedPattern`
     * labeled alternative in `TrinoSqlParser.patternPrimary`.
     * @param ctx the parse tree
     */
    exitGroupedPattern?: (ctx: GroupedPatternContext) => void;
    /**
     * Enter a parse tree produced by the `partitionStartAnchor`
     * labeled alternative in `TrinoSqlParser.patternPrimary`.
     * @param ctx the parse tree
     */
    enterPartitionStartAnchor?: (ctx: PartitionStartAnchorContext) => void;
    /**
     * Exit a parse tree produced by the `partitionStartAnchor`
     * labeled alternative in `TrinoSqlParser.patternPrimary`.
     * @param ctx the parse tree
     */
    exitPartitionStartAnchor?: (ctx: PartitionStartAnchorContext) => void;
    /**
     * Enter a parse tree produced by the `partitionEndAnchor`
     * labeled alternative in `TrinoSqlParser.patternPrimary`.
     * @param ctx the parse tree
     */
    enterPartitionEndAnchor?: (ctx: PartitionEndAnchorContext) => void;
    /**
     * Exit a parse tree produced by the `partitionEndAnchor`
     * labeled alternative in `TrinoSqlParser.patternPrimary`.
     * @param ctx the parse tree
     */
    exitPartitionEndAnchor?: (ctx: PartitionEndAnchorContext) => void;
    /**
     * Enter a parse tree produced by the `excludedPattern`
     * labeled alternative in `TrinoSqlParser.patternPrimary`.
     * @param ctx the parse tree
     */
    enterExcludedPattern?: (ctx: ExcludedPatternContext) => void;
    /**
     * Exit a parse tree produced by the `excludedPattern`
     * labeled alternative in `TrinoSqlParser.patternPrimary`.
     * @param ctx the parse tree
     */
    exitExcludedPattern?: (ctx: ExcludedPatternContext) => void;
    /**
     * Enter a parse tree produced by the `zeroOrMoreQuantifier`
     * labeled alternative in `TrinoSqlParser.patternQuantifier`.
     * @param ctx the parse tree
     */
    enterZeroOrMoreQuantifier?: (ctx: ZeroOrMoreQuantifierContext) => void;
    /**
     * Exit a parse tree produced by the `zeroOrMoreQuantifier`
     * labeled alternative in `TrinoSqlParser.patternQuantifier`.
     * @param ctx the parse tree
     */
    exitZeroOrMoreQuantifier?: (ctx: ZeroOrMoreQuantifierContext) => void;
    /**
     * Enter a parse tree produced by the `oneOrMoreQuantifier`
     * labeled alternative in `TrinoSqlParser.patternQuantifier`.
     * @param ctx the parse tree
     */
    enterOneOrMoreQuantifier?: (ctx: OneOrMoreQuantifierContext) => void;
    /**
     * Exit a parse tree produced by the `oneOrMoreQuantifier`
     * labeled alternative in `TrinoSqlParser.patternQuantifier`.
     * @param ctx the parse tree
     */
    exitOneOrMoreQuantifier?: (ctx: OneOrMoreQuantifierContext) => void;
    /**
     * Enter a parse tree produced by the `zeroOrOneQuantifier`
     * labeled alternative in `TrinoSqlParser.patternQuantifier`.
     * @param ctx the parse tree
     */
    enterZeroOrOneQuantifier?: (ctx: ZeroOrOneQuantifierContext) => void;
    /**
     * Exit a parse tree produced by the `zeroOrOneQuantifier`
     * labeled alternative in `TrinoSqlParser.patternQuantifier`.
     * @param ctx the parse tree
     */
    exitZeroOrOneQuantifier?: (ctx: ZeroOrOneQuantifierContext) => void;
    /**
     * Enter a parse tree produced by the `rangeQuantifier`
     * labeled alternative in `TrinoSqlParser.patternQuantifier`.
     * @param ctx the parse tree
     */
    enterRangeQuantifier?: (ctx: RangeQuantifierContext) => void;
    /**
     * Exit a parse tree produced by the `rangeQuantifier`
     * labeled alternative in `TrinoSqlParser.patternQuantifier`.
     * @param ctx the parse tree
     */
    exitRangeQuantifier?: (ctx: RangeQuantifierContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.updateAssignment`.
     * @param ctx the parse tree
     */
    enterUpdateAssignment?: (ctx: UpdateAssignmentContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.updateAssignment`.
     * @param ctx the parse tree
     */
    exitUpdateAssignment?: (ctx: UpdateAssignmentContext) => void;
    /**
     * Enter a parse tree produced by the `explainFormat`
     * labeled alternative in `TrinoSqlParser.explainOption`.
     * @param ctx the parse tree
     */
    enterExplainFormat?: (ctx: ExplainFormatContext) => void;
    /**
     * Exit a parse tree produced by the `explainFormat`
     * labeled alternative in `TrinoSqlParser.explainOption`.
     * @param ctx the parse tree
     */
    exitExplainFormat?: (ctx: ExplainFormatContext) => void;
    /**
     * Enter a parse tree produced by the `explainType`
     * labeled alternative in `TrinoSqlParser.explainOption`.
     * @param ctx the parse tree
     */
    enterExplainType?: (ctx: ExplainTypeContext) => void;
    /**
     * Exit a parse tree produced by the `explainType`
     * labeled alternative in `TrinoSqlParser.explainOption`.
     * @param ctx the parse tree
     */
    exitExplainType?: (ctx: ExplainTypeContext) => void;
    /**
     * Enter a parse tree produced by the `isolationLevel`
     * labeled alternative in `TrinoSqlParser.transactionMode`.
     * @param ctx the parse tree
     */
    enterIsolationLevel?: (ctx: IsolationLevelContext) => void;
    /**
     * Exit a parse tree produced by the `isolationLevel`
     * labeled alternative in `TrinoSqlParser.transactionMode`.
     * @param ctx the parse tree
     */
    exitIsolationLevel?: (ctx: IsolationLevelContext) => void;
    /**
     * Enter a parse tree produced by the `transactionAccessMode`
     * labeled alternative in `TrinoSqlParser.transactionMode`.
     * @param ctx the parse tree
     */
    enterTransactionAccessMode?: (ctx: TransactionAccessModeContext) => void;
    /**
     * Exit a parse tree produced by the `transactionAccessMode`
     * labeled alternative in `TrinoSqlParser.transactionMode`.
     * @param ctx the parse tree
     */
    exitTransactionAccessMode?: (ctx: TransactionAccessModeContext) => void;
    /**
     * Enter a parse tree produced by the `readUncommitted`
     * labeled alternative in `TrinoSqlParser.levelOfIsolation`.
     * @param ctx the parse tree
     */
    enterReadUncommitted?: (ctx: ReadUncommittedContext) => void;
    /**
     * Exit a parse tree produced by the `readUncommitted`
     * labeled alternative in `TrinoSqlParser.levelOfIsolation`.
     * @param ctx the parse tree
     */
    exitReadUncommitted?: (ctx: ReadUncommittedContext) => void;
    /**
     * Enter a parse tree produced by the `readCommitted`
     * labeled alternative in `TrinoSqlParser.levelOfIsolation`.
     * @param ctx the parse tree
     */
    enterReadCommitted?: (ctx: ReadCommittedContext) => void;
    /**
     * Exit a parse tree produced by the `readCommitted`
     * labeled alternative in `TrinoSqlParser.levelOfIsolation`.
     * @param ctx the parse tree
     */
    exitReadCommitted?: (ctx: ReadCommittedContext) => void;
    /**
     * Enter a parse tree produced by the `repeatableRead`
     * labeled alternative in `TrinoSqlParser.levelOfIsolation`.
     * @param ctx the parse tree
     */
    enterRepeatableRead?: (ctx: RepeatableReadContext) => void;
    /**
     * Exit a parse tree produced by the `repeatableRead`
     * labeled alternative in `TrinoSqlParser.levelOfIsolation`.
     * @param ctx the parse tree
     */
    exitRepeatableRead?: (ctx: RepeatableReadContext) => void;
    /**
     * Enter a parse tree produced by the `serializable`
     * labeled alternative in `TrinoSqlParser.levelOfIsolation`.
     * @param ctx the parse tree
     */
    enterSerializable?: (ctx: SerializableContext) => void;
    /**
     * Exit a parse tree produced by the `serializable`
     * labeled alternative in `TrinoSqlParser.levelOfIsolation`.
     * @param ctx the parse tree
     */
    exitSerializable?: (ctx: SerializableContext) => void;
    /**
     * Enter a parse tree produced by the `positionalArgument`
     * labeled alternative in `TrinoSqlParser.callArgument`.
     * @param ctx the parse tree
     */
    enterPositionalArgument?: (ctx: PositionalArgumentContext) => void;
    /**
     * Exit a parse tree produced by the `positionalArgument`
     * labeled alternative in `TrinoSqlParser.callArgument`.
     * @param ctx the parse tree
     */
    exitPositionalArgument?: (ctx: PositionalArgumentContext) => void;
    /**
     * Enter a parse tree produced by the `namedArgument`
     * labeled alternative in `TrinoSqlParser.callArgument`.
     * @param ctx the parse tree
     */
    enterNamedArgument?: (ctx: NamedArgumentContext) => void;
    /**
     * Exit a parse tree produced by the `namedArgument`
     * labeled alternative in `TrinoSqlParser.callArgument`.
     * @param ctx the parse tree
     */
    exitNamedArgument?: (ctx: NamedArgumentContext) => void;
    /**
     * Enter a parse tree produced by the `qualifiedArgument`
     * labeled alternative in `TrinoSqlParser.pathElement`.
     * @param ctx the parse tree
     */
    enterQualifiedArgument?: (ctx: QualifiedArgumentContext) => void;
    /**
     * Exit a parse tree produced by the `qualifiedArgument`
     * labeled alternative in `TrinoSqlParser.pathElement`.
     * @param ctx the parse tree
     */
    exitQualifiedArgument?: (ctx: QualifiedArgumentContext) => void;
    /**
     * Enter a parse tree produced by the `unqualifiedArgument`
     * labeled alternative in `TrinoSqlParser.pathElement`.
     * @param ctx the parse tree
     */
    enterUnqualifiedArgument?: (ctx: UnqualifiedArgumentContext) => void;
    /**
     * Exit a parse tree produced by the `unqualifiedArgument`
     * labeled alternative in `TrinoSqlParser.pathElement`.
     * @param ctx the parse tree
     */
    exitUnqualifiedArgument?: (ctx: UnqualifiedArgumentContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.pathSpecification`.
     * @param ctx the parse tree
     */
    enterPathSpecification?: (ctx: PathSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.pathSpecification`.
     * @param ctx the parse tree
     */
    exitPathSpecification?: (ctx: PathSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.privilege`.
     * @param ctx the parse tree
     */
    enterPrivilege?: (ctx: PrivilegeContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.privilege`.
     * @param ctx the parse tree
     */
    exitPrivilege?: (ctx: PrivilegeContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.tableOrViewName`.
     * @param ctx the parse tree
     */
    enterTableOrViewName?: (ctx: TableOrViewNameContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.tableOrViewName`.
     * @param ctx the parse tree
     */
    exitTableOrViewName?: (ctx: TableOrViewNameContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.tableName`.
     * @param ctx the parse tree
     */
    enterTableName?: (ctx: TableNameContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.tableName`.
     * @param ctx the parse tree
     */
    exitTableName?: (ctx: TableNameContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.tableNameCreate`.
     * @param ctx the parse tree
     */
    enterTableNameCreate?: (ctx: TableNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.tableNameCreate`.
     * @param ctx the parse tree
     */
    exitTableNameCreate?: (ctx: TableNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.viewName`.
     * @param ctx the parse tree
     */
    enterViewName?: (ctx: ViewNameContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.viewName`.
     * @param ctx the parse tree
     */
    exitViewName?: (ctx: ViewNameContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.viewNameCreate`.
     * @param ctx the parse tree
     */
    enterViewNameCreate?: (ctx: ViewNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.viewNameCreate`.
     * @param ctx the parse tree
     */
    exitViewNameCreate?: (ctx: ViewNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.tablePath`.
     * @param ctx the parse tree
     */
    enterTablePath?: (ctx: TablePathContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.tablePath`.
     * @param ctx the parse tree
     */
    exitTablePath?: (ctx: TablePathContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.viewPath`.
     * @param ctx the parse tree
     */
    enterViewPath?: (ctx: ViewPathContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.viewPath`.
     * @param ctx the parse tree
     */
    exitViewPath?: (ctx: ViewPathContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.schemaName`.
     * @param ctx the parse tree
     */
    enterSchemaName?: (ctx: SchemaNameContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.schemaName`.
     * @param ctx the parse tree
     */
    exitSchemaName?: (ctx: SchemaNameContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.schemaNameCreate`.
     * @param ctx the parse tree
     */
    enterSchemaNameCreate?: (ctx: SchemaNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.schemaNameCreate`.
     * @param ctx the parse tree
     */
    exitSchemaNameCreate?: (ctx: SchemaNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.schemaPath`.
     * @param ctx the parse tree
     */
    enterSchemaPath?: (ctx: SchemaPathContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.schemaPath`.
     * @param ctx the parse tree
     */
    exitSchemaPath?: (ctx: SchemaPathContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.catalogName`.
     * @param ctx the parse tree
     */
    enterCatalogName?: (ctx: CatalogNameContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.catalogName`.
     * @param ctx the parse tree
     */
    exitCatalogName?: (ctx: CatalogNameContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.catalogNameCreate`.
     * @param ctx the parse tree
     */
    enterCatalogNameCreate?: (ctx: CatalogNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.catalogNameCreate`.
     * @param ctx the parse tree
     */
    exitCatalogNameCreate?: (ctx: CatalogNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.functionName`.
     * @param ctx the parse tree
     */
    enterFunctionName?: (ctx: FunctionNameContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.functionName`.
     * @param ctx the parse tree
     */
    exitFunctionName?: (ctx: FunctionNameContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.columnName`.
     * @param ctx the parse tree
     */
    enterColumnName?: (ctx: ColumnNameContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.columnName`.
     * @param ctx the parse tree
     */
    exitColumnName?: (ctx: ColumnNameContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.columnNameCreate`.
     * @param ctx the parse tree
     */
    enterColumnNameCreate?: (ctx: ColumnNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.columnNameCreate`.
     * @param ctx the parse tree
     */
    exitColumnNameCreate?: (ctx: ColumnNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.qualifiedName`.
     * @param ctx the parse tree
     */
    enterQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.qualifiedName`.
     * @param ctx the parse tree
     */
    exitQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Enter a parse tree produced by the `specifiedPrincipal`
     * labeled alternative in `TrinoSqlParser.grantor`.
     * @param ctx the parse tree
     */
    enterSpecifiedPrincipal?: (ctx: SpecifiedPrincipalContext) => void;
    /**
     * Exit a parse tree produced by the `specifiedPrincipal`
     * labeled alternative in `TrinoSqlParser.grantor`.
     * @param ctx the parse tree
     */
    exitSpecifiedPrincipal?: (ctx: SpecifiedPrincipalContext) => void;
    /**
     * Enter a parse tree produced by the `currentUserGrantor`
     * labeled alternative in `TrinoSqlParser.grantor`.
     * @param ctx the parse tree
     */
    enterCurrentUserGrantor?: (ctx: CurrentUserGrantorContext) => void;
    /**
     * Exit a parse tree produced by the `currentUserGrantor`
     * labeled alternative in `TrinoSqlParser.grantor`.
     * @param ctx the parse tree
     */
    exitCurrentUserGrantor?: (ctx: CurrentUserGrantorContext) => void;
    /**
     * Enter a parse tree produced by the `currentRoleGrantor`
     * labeled alternative in `TrinoSqlParser.grantor`.
     * @param ctx the parse tree
     */
    enterCurrentRoleGrantor?: (ctx: CurrentRoleGrantorContext) => void;
    /**
     * Exit a parse tree produced by the `currentRoleGrantor`
     * labeled alternative in `TrinoSqlParser.grantor`.
     * @param ctx the parse tree
     */
    exitCurrentRoleGrantor?: (ctx: CurrentRoleGrantorContext) => void;
    /**
     * Enter a parse tree produced by the `unspecifiedPrincipal`
     * labeled alternative in `TrinoSqlParser.principal`.
     * @param ctx the parse tree
     */
    enterUnspecifiedPrincipal?: (ctx: UnspecifiedPrincipalContext) => void;
    /**
     * Exit a parse tree produced by the `unspecifiedPrincipal`
     * labeled alternative in `TrinoSqlParser.principal`.
     * @param ctx the parse tree
     */
    exitUnspecifiedPrincipal?: (ctx: UnspecifiedPrincipalContext) => void;
    /**
     * Enter a parse tree produced by the `userPrincipal`
     * labeled alternative in `TrinoSqlParser.principal`.
     * @param ctx the parse tree
     */
    enterUserPrincipal?: (ctx: UserPrincipalContext) => void;
    /**
     * Exit a parse tree produced by the `userPrincipal`
     * labeled alternative in `TrinoSqlParser.principal`.
     * @param ctx the parse tree
     */
    exitUserPrincipal?: (ctx: UserPrincipalContext) => void;
    /**
     * Enter a parse tree produced by the `rolePrincipal`
     * labeled alternative in `TrinoSqlParser.principal`.
     * @param ctx the parse tree
     */
    enterRolePrincipal?: (ctx: RolePrincipalContext) => void;
    /**
     * Exit a parse tree produced by the `rolePrincipal`
     * labeled alternative in `TrinoSqlParser.principal`.
     * @param ctx the parse tree
     */
    exitRolePrincipal?: (ctx: RolePrincipalContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.roles`.
     * @param ctx the parse tree
     */
    enterRoles?: (ctx: RolesContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.roles`.
     * @param ctx the parse tree
     */
    exitRoles?: (ctx: RolesContext) => void;
    /**
     * Enter a parse tree produced by the `unquotedIdentifier`
     * labeled alternative in `TrinoSqlParser.identifier`.
     * @param ctx the parse tree
     */
    enterUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;
    /**
     * Exit a parse tree produced by the `unquotedIdentifier`
     * labeled alternative in `TrinoSqlParser.identifier`.
     * @param ctx the parse tree
     */
    exitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;
    /**
     * Enter a parse tree produced by the `quotedIdentifier`
     * labeled alternative in `TrinoSqlParser.identifier`.
     * @param ctx the parse tree
     */
    enterQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;
    /**
     * Exit a parse tree produced by the `quotedIdentifier`
     * labeled alternative in `TrinoSqlParser.identifier`.
     * @param ctx the parse tree
     */
    exitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;
    /**
     * Enter a parse tree produced by the `backQuotedIdentifier`
     * labeled alternative in `TrinoSqlParser.identifier`.
     * @param ctx the parse tree
     */
    enterBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => void;
    /**
     * Exit a parse tree produced by the `backQuotedIdentifier`
     * labeled alternative in `TrinoSqlParser.identifier`.
     * @param ctx the parse tree
     */
    exitBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => void;
    /**
     * Enter a parse tree produced by the `digitIdentifier`
     * labeled alternative in `TrinoSqlParser.identifier`.
     * @param ctx the parse tree
     */
    enterDigitIdentifier?: (ctx: DigitIdentifierContext) => void;
    /**
     * Exit a parse tree produced by the `digitIdentifier`
     * labeled alternative in `TrinoSqlParser.identifier`.
     * @param ctx the parse tree
     */
    exitDigitIdentifier?: (ctx: DigitIdentifierContext) => void;
    /**
     * Enter a parse tree produced by the `decimalLiteral`
     * labeled alternative in `TrinoSqlParser.number`.
     * @param ctx the parse tree
     */
    enterDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `decimalLiteral`
     * labeled alternative in `TrinoSqlParser.number`.
     * @param ctx the parse tree
     */
    exitDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `doubleLiteral`
     * labeled alternative in `TrinoSqlParser.number`.
     * @param ctx the parse tree
     */
    enterDoubleLiteral?: (ctx: DoubleLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `doubleLiteral`
     * labeled alternative in `TrinoSqlParser.number`.
     * @param ctx the parse tree
     */
    exitDoubleLiteral?: (ctx: DoubleLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `integerLiteral`
     * labeled alternative in `TrinoSqlParser.number`.
     * @param ctx the parse tree
     */
    enterIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `integerLiteral`
     * labeled alternative in `TrinoSqlParser.number`.
     * @param ctx the parse tree
     */
    exitIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSqlParser.nonReserved`.
     * @param ctx the parse tree
     */
    enterNonReserved?: (ctx: NonReservedContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSqlParser.nonReserved`.
     * @param ctx the parse tree
     */
    exitNonReserved?: (ctx: NonReservedContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

