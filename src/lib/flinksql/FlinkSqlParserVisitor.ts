// Generated from /Users/ziv/github.com/dt-sql-parser/src/grammar/flinksql/FlinkSqlParser.g4 by ANTLR 4.12.0

import {ParseTreeVisitor} from 'antlr4';


import { ProgramContext } from "./FlinkSqlParser";
import { StatementContext } from "./FlinkSqlParser";
import { SqlStatementsContext } from "./FlinkSqlParser";
import { SqlStatementContext } from "./FlinkSqlParser";
import { EmptyStatementContext } from "./FlinkSqlParser";
import { DdlStatementContext } from "./FlinkSqlParser";
import { DmlStatementContext } from "./FlinkSqlParser";
import { DescribeStatementContext } from "./FlinkSqlParser";
import { ExplainStatementContext } from "./FlinkSqlParser";
import { ExplainDetailsContext } from "./FlinkSqlParser";
import { ExplainDetailContext } from "./FlinkSqlParser";
import { UseStatementContext } from "./FlinkSqlParser";
import { UseModuleStatementContext } from "./FlinkSqlParser";
import { ShowStatememtContext } from "./FlinkSqlParser";
import { LoadStatementContext } from "./FlinkSqlParser";
import { UnloadStatememtContext } from "./FlinkSqlParser";
import { SetStatememtContext } from "./FlinkSqlParser";
import { ResetStatememtContext } from "./FlinkSqlParser";
import { JarStatememtContext } from "./FlinkSqlParser";
import { DtAddStatementContext } from "./FlinkSqlParser";
import { CreateTableContext } from "./FlinkSqlParser";
import { SimpleCreateTableContext } from "./FlinkSqlParser";
import { CreateTableAsSelectContext } from "./FlinkSqlParser";
import { ColumnOptionDefinitionContext } from "./FlinkSqlParser";
import { PhysicalColumnDefinitionContext } from "./FlinkSqlParser";
import { ColumnNameContext } from "./FlinkSqlParser";
import { ColumnNameListContext } from "./FlinkSqlParser";
import { ColumnTypeContext } from "./FlinkSqlParser";
import { LengthOneDimensionContext } from "./FlinkSqlParser";
import { LengthTwoOptionalDimensionContext } from "./FlinkSqlParser";
import { LengthTwoStringDimensionContext } from "./FlinkSqlParser";
import { LengthOneTypeDimensionContext } from "./FlinkSqlParser";
import { MapTypeDimensionContext } from "./FlinkSqlParser";
import { RowTypeDimensionContext } from "./FlinkSqlParser";
import { ColumnConstraintContext } from "./FlinkSqlParser";
import { CommentSpecContext } from "./FlinkSqlParser";
import { MetadataColumnDefinitionContext } from "./FlinkSqlParser";
import { MetadataKeyContext } from "./FlinkSqlParser";
import { ComputedColumnDefinitionContext } from "./FlinkSqlParser";
import { ComputedColumnExpressionContext } from "./FlinkSqlParser";
import { WatermarkDefinitionContext } from "./FlinkSqlParser";
import { TableConstraintContext } from "./FlinkSqlParser";
import { ConstraintNameContext } from "./FlinkSqlParser";
import { SelfDefinitionClauseContext } from "./FlinkSqlParser";
import { PartitionDefinitionContext } from "./FlinkSqlParser";
import { TransformListContext } from "./FlinkSqlParser";
import { IdentityTransformContext } from "./FlinkSqlParser";
import { ApplyTransformContext } from "./FlinkSqlParser";
import { TransformArgumentContext } from "./FlinkSqlParser";
import { LikeDefinitionContext } from "./FlinkSqlParser";
import { SourceTableContext } from "./FlinkSqlParser";
import { LikeOptionContext } from "./FlinkSqlParser";
import { CreateCatalogContext } from "./FlinkSqlParser";
import { CreateDatabaseContext } from "./FlinkSqlParser";
import { CreateViewContext } from "./FlinkSqlParser";
import { CreateFunctionContext } from "./FlinkSqlParser";
import { UsingClauseContext } from "./FlinkSqlParser";
import { JarFileNameContext } from "./FlinkSqlParser";
import { AlterTableContext } from "./FlinkSqlParser";
import { RenameDefinitionContext } from "./FlinkSqlParser";
import { SetKeyValueDefinitionContext } from "./FlinkSqlParser";
import { AddConstraintContext } from "./FlinkSqlParser";
import { DropConstraintContext } from "./FlinkSqlParser";
import { AddUniqueContext } from "./FlinkSqlParser";
import { NotForcedContext } from "./FlinkSqlParser";
import { AlertViewContext } from "./FlinkSqlParser";
import { AlterDatabaseContext } from "./FlinkSqlParser";
import { AlterFunctionContext } from "./FlinkSqlParser";
import { DropCatalogContext } from "./FlinkSqlParser";
import { DropTableContext } from "./FlinkSqlParser";
import { DropDatabaseContext } from "./FlinkSqlParser";
import { DropViewContext } from "./FlinkSqlParser";
import { DropFunctionContext } from "./FlinkSqlParser";
import { InsertStatementContext } from "./FlinkSqlParser";
import { InsertSimpleStatementContext } from "./FlinkSqlParser";
import { InsertPartitionDefinitionContext } from "./FlinkSqlParser";
import { ValuesDefinitionContext } from "./FlinkSqlParser";
import { ValuesRowDefinitionContext } from "./FlinkSqlParser";
import { InsertMulStatementCompatibilityContext } from "./FlinkSqlParser";
import { InsertMulStatementContext } from "./FlinkSqlParser";
import { QueryStatementContext } from "./FlinkSqlParser";
import { ValuesCaluseContext } from "./FlinkSqlParser";
import { WithClauseContext } from "./FlinkSqlParser";
import { WithItemContext } from "./FlinkSqlParser";
import { WithItemNameContext } from "./FlinkSqlParser";
import { SelectStatementContext } from "./FlinkSqlParser";
import { SelectClauseContext } from "./FlinkSqlParser";
import { ProjectItemDefinitionContext } from "./FlinkSqlParser";
import { OverWindowItemContext } from "./FlinkSqlParser";
import { FromClauseContext } from "./FlinkSqlParser";
import { TableExpressionContext } from "./FlinkSqlParser";
import { TableReferenceContext } from "./FlinkSqlParser";
import { TablePrimaryContext } from "./FlinkSqlParser";
import { TablePathContext } from "./FlinkSqlParser";
import { SystemTimePeriodContext } from "./FlinkSqlParser";
import { DateTimeExpressionContext } from "./FlinkSqlParser";
import { InlineDataValueClauseContext } from "./FlinkSqlParser";
import { WindoTVFClauseContext } from "./FlinkSqlParser";
import { WindowTVFExressionContext } from "./FlinkSqlParser";
import { WindoTVFNameContext } from "./FlinkSqlParser";
import { WindowTVFParamContext } from "./FlinkSqlParser";
import { TimeIntervalParamNameContext } from "./FlinkSqlParser";
import { ColumnDescriptorContext } from "./FlinkSqlParser";
import { JoinConditionContext } from "./FlinkSqlParser";
import { WhereClauseContext } from "./FlinkSqlParser";
import { GroupByClauseContext } from "./FlinkSqlParser";
import { GroupItemDefinitionContext } from "./FlinkSqlParser";
import { GroupingSetsContext } from "./FlinkSqlParser";
import { GroupingSetsNotaionNameContext } from "./FlinkSqlParser";
import { GroupWindowFunctionContext } from "./FlinkSqlParser";
import { GroupWindowFunctionNameContext } from "./FlinkSqlParser";
import { TimeAttrColumnContext } from "./FlinkSqlParser";
import { HavingClauseContext } from "./FlinkSqlParser";
import { WindowClauseContext } from "./FlinkSqlParser";
import { NamedWindowContext } from "./FlinkSqlParser";
import { WindowSpecContext } from "./FlinkSqlParser";
import { MatchRecognizeClauseContext } from "./FlinkSqlParser";
import { OrderByCaluseContext } from "./FlinkSqlParser";
import { OrderItemDefitionContext } from "./FlinkSqlParser";
import { LimitClauseContext } from "./FlinkSqlParser";
import { PartitionByClauseContext } from "./FlinkSqlParser";
import { QuantifiersContext } from "./FlinkSqlParser";
import { MeasuresClauseContext } from "./FlinkSqlParser";
import { PatternDefinationContext } from "./FlinkSqlParser";
import { PatternVariableContext } from "./FlinkSqlParser";
import { OutputModeContext } from "./FlinkSqlParser";
import { AfterMatchStrategyContext } from "./FlinkSqlParser";
import { PatternVariablesDefinationContext } from "./FlinkSqlParser";
import { WindowFrameContext } from "./FlinkSqlParser";
import { FrameBoundContext } from "./FlinkSqlParser";
import { WithinClauseContext } from "./FlinkSqlParser";
import { ExpressionContext } from "./FlinkSqlParser";
import { LogicalNotContext } from "./FlinkSqlParser";
import { PredicatedContext } from "./FlinkSqlParser";
import { ExistsContext } from "./FlinkSqlParser";
import { LogicalNestedContext } from "./FlinkSqlParser";
import { LogicalBinaryContext } from "./FlinkSqlParser";
import { PredicateContext } from "./FlinkSqlParser";
import { LikePredicateContext } from "./FlinkSqlParser";
import { ValueExpressionDefaultContext } from "./FlinkSqlParser";
import { ComparisonContext } from "./FlinkSqlParser";
import { ArithmeticBinaryContext } from "./FlinkSqlParser";
import { ArithmeticUnaryContext } from "./FlinkSqlParser";
import { DereferenceContext } from "./FlinkSqlParser";
import { SimpleCaseContext } from "./FlinkSqlParser";
import { ColumnReferenceContext } from "./FlinkSqlParser";
import { LastContext } from "./FlinkSqlParser";
import { StarContext } from "./FlinkSqlParser";
import { SubscriptContext } from "./FlinkSqlParser";
import { SubqueryExpressionContext } from "./FlinkSqlParser";
import { CastContext } from "./FlinkSqlParser";
import { ConstantDefaultContext } from "./FlinkSqlParser";
import { ParenthesizedExpressionContext } from "./FlinkSqlParser";
import { FunctionCallContext } from "./FlinkSqlParser";
import { SearchedCaseContext } from "./FlinkSqlParser";
import { PositionContext } from "./FlinkSqlParser";
import { FirstContext } from "./FlinkSqlParser";
import { FunctionNameContext } from "./FlinkSqlParser";
import { FunctionParamContext } from "./FlinkSqlParser";
import { DereferenceDefinitionContext } from "./FlinkSqlParser";
import { CorrelationNameContext } from "./FlinkSqlParser";
import { QualifiedNameContext } from "./FlinkSqlParser";
import { TimeIntervalExpressionContext } from "./FlinkSqlParser";
import { ErrorCapturingMultiUnitsIntervalContext } from "./FlinkSqlParser";
import { MultiUnitsIntervalContext } from "./FlinkSqlParser";
import { ErrorCapturingUnitToUnitIntervalContext } from "./FlinkSqlParser";
import { UnitToUnitIntervalContext } from "./FlinkSqlParser";
import { IntervalValueContext } from "./FlinkSqlParser";
import { ColumnAliasContext } from "./FlinkSqlParser";
import { TableAliasContext } from "./FlinkSqlParser";
import { ErrorCapturingIdentifierContext } from "./FlinkSqlParser";
import { ErrorIdentContext } from "./FlinkSqlParser";
import { RealIdentContext } from "./FlinkSqlParser";
import { IdentifierListContext } from "./FlinkSqlParser";
import { IdentifierSeqContext } from "./FlinkSqlParser";
import { UnquotedIdentifierAlternativeContext } from "./FlinkSqlParser";
import { QuotedIdentifierAlternativeContext } from "./FlinkSqlParser";
import { NonReservedKeywordsAlternativeContext } from "./FlinkSqlParser";
import { UnquotedIdentifierContext } from "./FlinkSqlParser";
import { QuotedIdentifierContext } from "./FlinkSqlParser";
import { WhenClauseContext } from "./FlinkSqlParser";
import { UidContext } from "./FlinkSqlParser";
import { WithOptionContext } from "./FlinkSqlParser";
import { IfNotExistsContext } from "./FlinkSqlParser";
import { IfExistsContext } from "./FlinkSqlParser";
import { TablePropertyListContext } from "./FlinkSqlParser";
import { TablePropertyContext } from "./FlinkSqlParser";
import { TablePropertyKeyContext } from "./FlinkSqlParser";
import { TablePropertyValueContext } from "./FlinkSqlParser";
import { LogicalOperatorContext } from "./FlinkSqlParser";
import { ComparisonOperatorContext } from "./FlinkSqlParser";
import { BitOperatorContext } from "./FlinkSqlParser";
import { MathOperatorContext } from "./FlinkSqlParser";
import { UnaryOperatorContext } from "./FlinkSqlParser";
import { ConstantContext } from "./FlinkSqlParser";
import { TimePointLiteralContext } from "./FlinkSqlParser";
import { StringLiteralContext } from "./FlinkSqlParser";
import { DecimalLiteralContext } from "./FlinkSqlParser";
import { BooleanLiteralContext } from "./FlinkSqlParser";
import { SetQuantifierContext } from "./FlinkSqlParser";
import { TimePointUnitContext } from "./FlinkSqlParser";
import { TimeIntervalUnitContext } from "./FlinkSqlParser";
import { ReservedKeywordsUsedAsFuncParamContext } from "./FlinkSqlParser";
import { ReservedKeywordsUsedAsFuncNameContext } from "./FlinkSqlParser";
import { ReservedKeywordsContext } from "./FlinkSqlParser";
import { NonReservedKeywordsContext } from "./FlinkSqlParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `FlinkSqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class FlinkSqlParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.sqlStatements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlStatements?: (ctx: SqlStatementsContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.sqlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlStatement?: (ctx: SqlStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.emptyStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyStatement?: (ctx: EmptyStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.ddlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDdlStatement?: (ctx: DdlStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.dmlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDmlStatement?: (ctx: DmlStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.describeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescribeStatement?: (ctx: DescribeStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.explainStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplainStatement?: (ctx: ExplainStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.explainDetails`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplainDetails?: (ctx: ExplainDetailsContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.explainDetail`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplainDetail?: (ctx: ExplainDetailContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.useStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUseStatement?: (ctx: UseStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.useModuleStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUseModuleStatement?: (ctx: UseModuleStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.showStatememt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowStatememt?: (ctx: ShowStatememtContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.loadStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoadStatement?: (ctx: LoadStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.unloadStatememt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnloadStatememt?: (ctx: UnloadStatememtContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.setStatememt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetStatememt?: (ctx: SetStatememtContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.resetStatememt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResetStatememt?: (ctx: ResetStatememtContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.jarStatememt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJarStatememt?: (ctx: JarStatememtContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.dtAddStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDtAddStatement?: (ctx: DtAddStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.createTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTable?: (ctx: CreateTableContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.simpleCreateTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleCreateTable?: (ctx: SimpleCreateTableContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.createTableAsSelect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTableAsSelect?: (ctx: CreateTableAsSelectContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.columnOptionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnOptionDefinition?: (ctx: ColumnOptionDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.physicalColumnDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPhysicalColumnDefinition?: (ctx: PhysicalColumnDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.columnName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnName?: (ctx: ColumnNameContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.columnNameList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameList?: (ctx: ColumnNameListContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.columnType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnType?: (ctx: ColumnTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.lengthOneDimension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLengthOneDimension?: (ctx: LengthOneDimensionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.lengthTwoOptionalDimension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLengthTwoOptionalDimension?: (ctx: LengthTwoOptionalDimensionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.lengthTwoStringDimension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLengthTwoStringDimension?: (ctx: LengthTwoStringDimensionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.lengthOneTypeDimension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLengthOneTypeDimension?: (ctx: LengthOneTypeDimensionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.mapTypeDimension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapTypeDimension?: (ctx: MapTypeDimensionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.rowTypeDimension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowTypeDimension?: (ctx: RowTypeDimensionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnConstraint?: (ctx: ColumnConstraintContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.commentSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentSpec?: (ctx: CommentSpecContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.metadataColumnDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMetadataColumnDefinition?: (ctx: MetadataColumnDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.metadataKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMetadataKey?: (ctx: MetadataKeyContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.computedColumnDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComputedColumnDefinition?: (ctx: ComputedColumnDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.computedColumnExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComputedColumnExpression?: (ctx: ComputedColumnExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.watermarkDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWatermarkDefinition?: (ctx: WatermarkDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.tableConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableConstraint?: (ctx: TableConstraintContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.constraintName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraintName?: (ctx: ConstraintNameContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.selfDefinitionClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelfDefinitionClause?: (ctx: SelfDefinitionClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.partitionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionDefinition?: (ctx: PartitionDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.transformList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransformList?: (ctx: TransformListContext) => Result;
	/**
	 * Visit a parse tree produced by the `identityTransform`
	 * labeled alternative in `FlinkSqlParser.transform`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentityTransform?: (ctx: IdentityTransformContext) => Result;
	/**
	 * Visit a parse tree produced by the `applyTransform`
	 * labeled alternative in `FlinkSqlParser.transform`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitApplyTransform?: (ctx: ApplyTransformContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.transformArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransformArgument?: (ctx: TransformArgumentContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.likeDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLikeDefinition?: (ctx: LikeDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.sourceTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSourceTable?: (ctx: SourceTableContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.likeOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLikeOption?: (ctx: LikeOptionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.createCatalog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateCatalog?: (ctx: CreateCatalogContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.createDatabase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateDatabase?: (ctx: CreateDatabaseContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.createView`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateView?: (ctx: CreateViewContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.createFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateFunction?: (ctx: CreateFunctionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.usingClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsingClause?: (ctx: UsingClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.jarFileName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJarFileName?: (ctx: JarFileNameContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.alterTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTable?: (ctx: AlterTableContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.renameDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameDefinition?: (ctx: RenameDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.setKeyValueDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetKeyValueDefinition?: (ctx: SetKeyValueDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.addConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddConstraint?: (ctx: AddConstraintContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.dropConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropConstraint?: (ctx: DropConstraintContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.addUnique`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddUnique?: (ctx: AddUniqueContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.notForced`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotForced?: (ctx: NotForcedContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.alertView`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlertView?: (ctx: AlertViewContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.alterDatabase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterDatabase?: (ctx: AlterDatabaseContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.alterFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterFunction?: (ctx: AlterFunctionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.dropCatalog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropCatalog?: (ctx: DropCatalogContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.dropTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropTable?: (ctx: DropTableContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.dropDatabase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropDatabase?: (ctx: DropDatabaseContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.dropView`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropView?: (ctx: DropViewContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.dropFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropFunction?: (ctx: DropFunctionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.insertStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertStatement?: (ctx: InsertStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.insertSimpleStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertSimpleStatement?: (ctx: InsertSimpleStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.insertPartitionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertPartitionDefinition?: (ctx: InsertPartitionDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.valuesDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValuesDefinition?: (ctx: ValuesDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.valuesRowDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValuesRowDefinition?: (ctx: ValuesRowDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.insertMulStatementCompatibility`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertMulStatementCompatibility?: (ctx: InsertMulStatementCompatibilityContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.insertMulStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertMulStatement?: (ctx: InsertMulStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.queryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryStatement?: (ctx: QueryStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.valuesCaluse`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValuesCaluse?: (ctx: ValuesCaluseContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.withClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithClause?: (ctx: WithClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.withItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithItem?: (ctx: WithItemContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.withItemName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithItemName?: (ctx: WithItemNameContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.selectStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectStatement?: (ctx: SelectStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.selectClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectClause?: (ctx: SelectClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.projectItemDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProjectItemDefinition?: (ctx: ProjectItemDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.overWindowItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOverWindowItem?: (ctx: OverWindowItemContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.fromClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromClause?: (ctx: FromClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.tableExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableExpression?: (ctx: TableExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.tableReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableReference?: (ctx: TableReferenceContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.tablePrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePrimary?: (ctx: TablePrimaryContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.tablePath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePath?: (ctx: TablePathContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.systemTimePeriod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSystemTimePeriod?: (ctx: SystemTimePeriodContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.dateTimeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateTimeExpression?: (ctx: DateTimeExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.inlineDataValueClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineDataValueClause?: (ctx: InlineDataValueClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.windoTVFClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindoTVFClause?: (ctx: WindoTVFClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.windowTVFExression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowTVFExression?: (ctx: WindowTVFExressionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.windoTVFName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindoTVFName?: (ctx: WindoTVFNameContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.windowTVFParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowTVFParam?: (ctx: WindowTVFParamContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.timeIntervalParamName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeIntervalParamName?: (ctx: TimeIntervalParamNameContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.columnDescriptor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnDescriptor?: (ctx: ColumnDescriptorContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.joinCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinCondition?: (ctx: JoinConditionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.whereClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhereClause?: (ctx: WhereClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.groupByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupByClause?: (ctx: GroupByClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.groupItemDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupItemDefinition?: (ctx: GroupItemDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.groupingSets`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingSets?: (ctx: GroupingSetsContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.groupingSetsNotaionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingSetsNotaionName?: (ctx: GroupingSetsNotaionNameContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.groupWindowFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupWindowFunction?: (ctx: GroupWindowFunctionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.groupWindowFunctionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupWindowFunctionName?: (ctx: GroupWindowFunctionNameContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.timeAttrColumn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeAttrColumn?: (ctx: TimeAttrColumnContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.havingClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHavingClause?: (ctx: HavingClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.windowClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowClause?: (ctx: WindowClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.namedWindow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedWindow?: (ctx: NamedWindowContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.windowSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowSpec?: (ctx: WindowSpecContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.matchRecognizeClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatchRecognizeClause?: (ctx: MatchRecognizeClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.orderByCaluse`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderByCaluse?: (ctx: OrderByCaluseContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.orderItemDefition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderItemDefition?: (ctx: OrderItemDefitionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.limitClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLimitClause?: (ctx: LimitClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.partitionByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionByClause?: (ctx: PartitionByClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.quantifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantifiers?: (ctx: QuantifiersContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.measuresClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMeasuresClause?: (ctx: MeasuresClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.patternDefination`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternDefination?: (ctx: PatternDefinationContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.patternVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternVariable?: (ctx: PatternVariableContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.outputMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputMode?: (ctx: OutputModeContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.afterMatchStrategy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAfterMatchStrategy?: (ctx: AfterMatchStrategyContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.patternVariablesDefination`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternVariablesDefination?: (ctx: PatternVariablesDefinationContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.windowFrame`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowFrame?: (ctx: WindowFrameContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.frameBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrameBound?: (ctx: FrameBoundContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.withinClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithinClause?: (ctx: WithinClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `logicalNot`
	 * labeled alternative in `FlinkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalNot?: (ctx: LogicalNotContext) => Result;
	/**
	 * Visit a parse tree produced by the `predicated`
	 * labeled alternative in `FlinkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicated?: (ctx: PredicatedContext) => Result;
	/**
	 * Visit a parse tree produced by the `exists`
	 * labeled alternative in `FlinkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExists?: (ctx: ExistsContext) => Result;
	/**
	 * Visit a parse tree produced by the `logicalNested`
	 * labeled alternative in `FlinkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalNested?: (ctx: LogicalNestedContext) => Result;
	/**
	 * Visit a parse tree produced by the `logicalBinary`
	 * labeled alternative in `FlinkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalBinary?: (ctx: LogicalBinaryContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicate?: (ctx: PredicateContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.likePredicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLikePredicate?: (ctx: LikePredicateContext) => Result;
	/**
	 * Visit a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `FlinkSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => Result;
	/**
	 * Visit a parse tree produced by the `comparison`
	 * labeled alternative in `FlinkSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;
	/**
	 * Visit a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `FlinkSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => Result;
	/**
	 * Visit a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `FlinkSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => Result;
	/**
	 * Visit a parse tree produced by the `dereference`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDereference?: (ctx: DereferenceContext) => Result;
	/**
	 * Visit a parse tree produced by the `simpleCase`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleCase?: (ctx: SimpleCaseContext) => Result;
	/**
	 * Visit a parse tree produced by the `columnReference`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnReference?: (ctx: ColumnReferenceContext) => Result;
	/**
	 * Visit a parse tree produced by the `last`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLast?: (ctx: LastContext) => Result;
	/**
	 * Visit a parse tree produced by the `star`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStar?: (ctx: StarContext) => Result;
	/**
	 * Visit a parse tree produced by the `subscript`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscript?: (ctx: SubscriptContext) => Result;
	/**
	 * Visit a parse tree produced by the `subqueryExpression`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubqueryExpression?: (ctx: SubqueryExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `cast`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCast?: (ctx: CastContext) => Result;
	/**
	 * Visit a parse tree produced by the `constantDefault`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantDefault?: (ctx: ConstantDefaultContext) => Result;
	/**
	 * Visit a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `functionCall`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by the `searchedCase`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearchedCase?: (ctx: SearchedCaseContext) => Result;
	/**
	 * Visit a parse tree produced by the `position`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPosition?: (ctx: PositionContext) => Result;
	/**
	 * Visit a parse tree produced by the `first`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFirst?: (ctx: FirstContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.functionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionName?: (ctx: FunctionNameContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.functionParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionParam?: (ctx: FunctionParamContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.dereferenceDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDereferenceDefinition?: (ctx: DereferenceDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.correlationName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCorrelationName?: (ctx: CorrelationNameContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.timeIntervalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeIntervalExpression?: (ctx: TimeIntervalExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.errorCapturingMultiUnitsInterval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErrorCapturingMultiUnitsInterval?: (ctx: ErrorCapturingMultiUnitsIntervalContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.multiUnitsInterval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiUnitsInterval?: (ctx: MultiUnitsIntervalContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.errorCapturingUnitToUnitInterval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErrorCapturingUnitToUnitInterval?: (ctx: ErrorCapturingUnitToUnitIntervalContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.unitToUnitInterval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnitToUnitInterval?: (ctx: UnitToUnitIntervalContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.intervalValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalValue?: (ctx: IntervalValueContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.columnAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnAlias?: (ctx: ColumnAliasContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.tableAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableAlias?: (ctx: TableAliasContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.errorCapturingIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErrorCapturingIdentifier?: (ctx: ErrorCapturingIdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by the `errorIdent`
	 * labeled alternative in `FlinkSqlParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErrorIdent?: (ctx: ErrorIdentContext) => Result;
	/**
	 * Visit a parse tree produced by the `realIdent`
	 * labeled alternative in `FlinkSqlParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRealIdent?: (ctx: RealIdentContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.identifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierList?: (ctx: IdentifierListContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.identifierSeq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierSeq?: (ctx: IdentifierSeqContext) => Result;
	/**
	 * Visit a parse tree produced by the `unquotedIdentifierAlternative`
	 * labeled alternative in `FlinkSqlParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnquotedIdentifierAlternative?: (ctx: UnquotedIdentifierAlternativeContext) => Result;
	/**
	 * Visit a parse tree produced by the `quotedIdentifierAlternative`
	 * labeled alternative in `FlinkSqlParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuotedIdentifierAlternative?: (ctx: QuotedIdentifierAlternativeContext) => Result;
	/**
	 * Visit a parse tree produced by the `nonReservedKeywordsAlternative`
	 * labeled alternative in `FlinkSqlParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonReservedKeywordsAlternative?: (ctx: NonReservedKeywordsAlternativeContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.unquotedIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.quotedIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.whenClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenClause?: (ctx: WhenClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.uid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUid?: (ctx: UidContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.withOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithOption?: (ctx: WithOptionContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.ifNotExists`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfNotExists?: (ctx: IfNotExistsContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.ifExists`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfExists?: (ctx: IfExistsContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.tablePropertyList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePropertyList?: (ctx: TablePropertyListContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.tableProperty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableProperty?: (ctx: TablePropertyContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.tablePropertyKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePropertyKey?: (ctx: TablePropertyKeyContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.tablePropertyValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePropertyValue?: (ctx: TablePropertyValueContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.logicalOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOperator?: (ctx: LogicalOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.comparisonOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.bitOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitOperator?: (ctx: BitOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.mathOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMathOperator?: (ctx: MathOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.unaryOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryOperator?: (ctx: UnaryOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.timePointLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimePointLiteral?: (ctx: TimePointLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.stringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.decimalLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimalLiteral?: (ctx: DecimalLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.booleanLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.setQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetQuantifier?: (ctx: SetQuantifierContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.timePointUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimePointUnit?: (ctx: TimePointUnitContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.timeIntervalUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeIntervalUnit?: (ctx: TimeIntervalUnitContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.reservedKeywordsUsedAsFuncParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReservedKeywordsUsedAsFuncParam?: (ctx: ReservedKeywordsUsedAsFuncParamContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.reservedKeywordsUsedAsFuncName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReservedKeywordsUsedAsFuncName?: (ctx: ReservedKeywordsUsedAsFuncNameContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.reservedKeywords`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReservedKeywords?: (ctx: ReservedKeywordsContext) => Result;
	/**
	 * Visit a parse tree produced by `FlinkSqlParser.nonReservedKeywords`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonReservedKeywords?: (ctx: NonReservedKeywordsContext) => Result;
}

