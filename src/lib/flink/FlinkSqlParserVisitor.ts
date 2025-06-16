// Generated from dt-sql-parser/src/grammar/flink/FlinkSqlParser.g4 by ANTLR 4.13.1

// @ts-nocheck

import { AbstractParseTreeVisitor } from "antlr4ng";


import { SQLParserBase } from '../SQLParserBase';


import { ProgramContext } from "./FlinkSqlParser.js";
import { SingleStatementContext } from "./FlinkSqlParser.js";
import { SqlStatementContext } from "./FlinkSqlParser.js";
import { EmptyStatementContext } from "./FlinkSqlParser.js";
import { DdlStatementContext } from "./FlinkSqlParser.js";
import { DmlStatementContext } from "./FlinkSqlParser.js";
import { DescribeStatementContext } from "./FlinkSqlParser.js";
import { ExplainStatementContext } from "./FlinkSqlParser.js";
import { ExplainDetailsContext } from "./FlinkSqlParser.js";
import { ExplainDetailContext } from "./FlinkSqlParser.js";
import { UseStatementContext } from "./FlinkSqlParser.js";
import { UseModuleStatementContext } from "./FlinkSqlParser.js";
import { ShowStatementContext } from "./FlinkSqlParser.js";
import { LoadStatementContext } from "./FlinkSqlParser.js";
import { UnloadStatementContext } from "./FlinkSqlParser.js";
import { SetStatementContext } from "./FlinkSqlParser.js";
import { ResetStatementContext } from "./FlinkSqlParser.js";
import { JarStatementContext } from "./FlinkSqlParser.js";
import { DtAddStatementContext } from "./FlinkSqlParser.js";
import { DtFilePathContext } from "./FlinkSqlParser.js";
import { CreateTableContext } from "./FlinkSqlParser.js";
import { SimpleCreateTableContext } from "./FlinkSqlParser.js";
import { CreateTableAsSelectContext } from "./FlinkSqlParser.js";
import { ColumnOptionDefinitionContext } from "./FlinkSqlParser.js";
import { PhysicalColumnDefinitionContext } from "./FlinkSqlParser.js";
import { ColumnNameCreateContext } from "./FlinkSqlParser.js";
import { ColumnNameContext } from "./FlinkSqlParser.js";
import { ColumnNamePathContext } from "./FlinkSqlParser.js";
import { ColumnNameListContext } from "./FlinkSqlParser.js";
import { ColumnTypeContext } from "./FlinkSqlParser.js";
import { LengthOneDimensionContext } from "./FlinkSqlParser.js";
import { LengthTwoOptionalDimensionContext } from "./FlinkSqlParser.js";
import { LengthTwoStringDimensionContext } from "./FlinkSqlParser.js";
import { LengthOneTypeDimensionContext } from "./FlinkSqlParser.js";
import { MapTypeDimensionContext } from "./FlinkSqlParser.js";
import { RowTypeDimensionContext } from "./FlinkSqlParser.js";
import { ColumnConstraintContext } from "./FlinkSqlParser.js";
import { MetadataColumnDefinitionContext } from "./FlinkSqlParser.js";
import { MetadataKeyContext } from "./FlinkSqlParser.js";
import { ComputedColumnDefinitionContext } from "./FlinkSqlParser.js";
import { ComputedColumnExpressionContext } from "./FlinkSqlParser.js";
import { WatermarkDefinitionContext } from "./FlinkSqlParser.js";
import { TableConstraintContext } from "./FlinkSqlParser.js";
import { ConstraintNameContext } from "./FlinkSqlParser.js";
import { SelfDefinitionClauseContext } from "./FlinkSqlParser.js";
import { PartitionDefinitionContext } from "./FlinkSqlParser.js";
import { TransformListContext } from "./FlinkSqlParser.js";
import { IdentityTransformContext } from "./FlinkSqlParser.js";
import { ApplyTransformContext } from "./FlinkSqlParser.js";
import { TransformArgumentContext } from "./FlinkSqlParser.js";
import { LikeDefinitionContext } from "./FlinkSqlParser.js";
import { LikeOptionContext } from "./FlinkSqlParser.js";
import { CreateCatalogContext } from "./FlinkSqlParser.js";
import { CreateDatabaseContext } from "./FlinkSqlParser.js";
import { CreateViewContext } from "./FlinkSqlParser.js";
import { CreateFunctionContext } from "./FlinkSqlParser.js";
import { UsingClauseContext } from "./FlinkSqlParser.js";
import { JarFileNameContext } from "./FlinkSqlParser.js";
import { AlterTableContext } from "./FlinkSqlParser.js";
import { RenameDefinitionContext } from "./FlinkSqlParser.js";
import { SetKeyValueDefinitionContext } from "./FlinkSqlParser.js";
import { AddConstraintContext } from "./FlinkSqlParser.js";
import { DropConstraintContext } from "./FlinkSqlParser.js";
import { AddUniqueContext } from "./FlinkSqlParser.js";
import { NotForcedContext } from "./FlinkSqlParser.js";
import { AlterViewContext } from "./FlinkSqlParser.js";
import { AlterDatabaseContext } from "./FlinkSqlParser.js";
import { AlterFunctionContext } from "./FlinkSqlParser.js";
import { DropCatalogContext } from "./FlinkSqlParser.js";
import { DropTableContext } from "./FlinkSqlParser.js";
import { DropDatabaseContext } from "./FlinkSqlParser.js";
import { DropViewContext } from "./FlinkSqlParser.js";
import { DropFunctionContext } from "./FlinkSqlParser.js";
import { InsertStatementContext } from "./FlinkSqlParser.js";
import { InsertSimpleStatementContext } from "./FlinkSqlParser.js";
import { InsertPartitionDefinitionContext } from "./FlinkSqlParser.js";
import { ValuesDefinitionContext } from "./FlinkSqlParser.js";
import { ValuesRowDefinitionContext } from "./FlinkSqlParser.js";
import { InsertMulStatementCompatibilityContext } from "./FlinkSqlParser.js";
import { InsertMulStatementContext } from "./FlinkSqlParser.js";
import { QueryStatementContext } from "./FlinkSqlParser.js";
import { ValuesClauseContext } from "./FlinkSqlParser.js";
import { WithClauseContext } from "./FlinkSqlParser.js";
import { WithItemContext } from "./FlinkSqlParser.js";
import { WithItemNameContext } from "./FlinkSqlParser.js";
import { SelectStatementContext } from "./FlinkSqlParser.js";
import { SelectClauseContext } from "./FlinkSqlParser.js";
import { SelectListContext } from "./FlinkSqlParser.js";
import { ColumnProjectItemContext } from "./FlinkSqlParser.js";
import { SelectWindowItemColumnNameContext } from "./FlinkSqlParser.js";
import { SelectExpressionColumnNameContext } from "./FlinkSqlParser.js";
import { SelectLiteralColumnNameContext } from "./FlinkSqlParser.js";
import { ColumnAliasContext } from "./FlinkSqlParser.js";
import { ProjectItemDefinitionContext } from "./FlinkSqlParser.js";
import { TableAllColumnsContext } from "./FlinkSqlParser.js";
import { OverWindowItemContext } from "./FlinkSqlParser.js";
import { FromClauseContext } from "./FlinkSqlParser.js";
import { TableExpressionContext } from "./FlinkSqlParser.js";
import { TableReferenceContext } from "./FlinkSqlParser.js";
import { TablePrimaryContext } from "./FlinkSqlParser.js";
import { AtomFunctionTableContext } from "./FlinkSqlParser.js";
import { AtomExpressionTableContext } from "./FlinkSqlParser.js";
import { SystemTimePeriodContext } from "./FlinkSqlParser.js";
import { DateTimeExpressionContext } from "./FlinkSqlParser.js";
import { InlineDataValueClauseContext } from "./FlinkSqlParser.js";
import { WindowTVFClauseContext } from "./FlinkSqlParser.js";
import { WindowTVFExpressionContext } from "./FlinkSqlParser.js";
import { WindowTVFNameContext } from "./FlinkSqlParser.js";
import { WindowTVFParamContext } from "./FlinkSqlParser.js";
import { TimeIntervalParamNameContext } from "./FlinkSqlParser.js";
import { ColumnDescriptorContext } from "./FlinkSqlParser.js";
import { JoinConditionContext } from "./FlinkSqlParser.js";
import { WhereClauseContext } from "./FlinkSqlParser.js";
import { GroupByClauseContext } from "./FlinkSqlParser.js";
import { GroupItemDefinitionContext } from "./FlinkSqlParser.js";
import { GroupingSetsContext } from "./FlinkSqlParser.js";
import { GroupingSetsNotationNameContext } from "./FlinkSqlParser.js";
import { GroupWindowFunctionContext } from "./FlinkSqlParser.js";
import { GroupWindowFunctionNameContext } from "./FlinkSqlParser.js";
import { TimeAttrColumnContext } from "./FlinkSqlParser.js";
import { HavingClauseContext } from "./FlinkSqlParser.js";
import { WindowClauseContext } from "./FlinkSqlParser.js";
import { NamedWindowContext } from "./FlinkSqlParser.js";
import { WindowSpecContext } from "./FlinkSqlParser.js";
import { MatchRecognizeClauseContext } from "./FlinkSqlParser.js";
import { OrderByClauseContext } from "./FlinkSqlParser.js";
import { OrderItemDefinitionContext } from "./FlinkSqlParser.js";
import { LimitClauseContext } from "./FlinkSqlParser.js";
import { PartitionByClauseContext } from "./FlinkSqlParser.js";
import { QuantifiersContext } from "./FlinkSqlParser.js";
import { MeasuresClauseContext } from "./FlinkSqlParser.js";
import { PatternDefinitionContext } from "./FlinkSqlParser.js";
import { PatternVariableContext } from "./FlinkSqlParser.js";
import { OutputModeContext } from "./FlinkSqlParser.js";
import { AfterMatchStrategyContext } from "./FlinkSqlParser.js";
import { PatternVariablesDefinitionContext } from "./FlinkSqlParser.js";
import { WindowFrameContext } from "./FlinkSqlParser.js";
import { FrameBoundContext } from "./FlinkSqlParser.js";
import { WithinClauseContext } from "./FlinkSqlParser.js";
import { ExpressionContext } from "./FlinkSqlParser.js";
import { LogicalNotContext } from "./FlinkSqlParser.js";
import { PredicatedContext } from "./FlinkSqlParser.js";
import { ExistsContext } from "./FlinkSqlParser.js";
import { LogicalNestedContext } from "./FlinkSqlParser.js";
import { LogicalBinaryContext } from "./FlinkSqlParser.js";
import { PredicateContext } from "./FlinkSqlParser.js";
import { LikePredicateContext } from "./FlinkSqlParser.js";
import { ValueExpressionDefaultContext } from "./FlinkSqlParser.js";
import { ComparisonContext } from "./FlinkSqlParser.js";
import { ArithmeticBinaryContext } from "./FlinkSqlParser.js";
import { ArithmeticUnaryContext } from "./FlinkSqlParser.js";
import { FunctionCallExpressionContext } from "./FlinkSqlParser.js";
import { DereferenceContext } from "./FlinkSqlParser.js";
import { SimpleCaseContext } from "./FlinkSqlParser.js";
import { ColumnReferenceContext } from "./FlinkSqlParser.js";
import { LastContext } from "./FlinkSqlParser.js";
import { StarContext } from "./FlinkSqlParser.js";
import { SubscriptContext } from "./FlinkSqlParser.js";
import { SubqueryExpressionContext } from "./FlinkSqlParser.js";
import { CastContext } from "./FlinkSqlParser.js";
import { ConstantDefaultContext } from "./FlinkSqlParser.js";
import { ParenthesizedExpressionContext } from "./FlinkSqlParser.js";
import { FunctionCallContext } from "./FlinkSqlParser.js";
import { SearchedCaseContext } from "./FlinkSqlParser.js";
import { PositionContext } from "./FlinkSqlParser.js";
import { FirstContext } from "./FlinkSqlParser.js";
import { FunctionNameCreateContext } from "./FlinkSqlParser.js";
import { FunctionNameContext } from "./FlinkSqlParser.js";
import { FunctionNameAndParamsContext } from "./FlinkSqlParser.js";
import { FunctionNameWithParamsContext } from "./FlinkSqlParser.js";
import { FunctionParamContext } from "./FlinkSqlParser.js";
import { DereferenceDefinitionContext } from "./FlinkSqlParser.js";
import { CorrelationNameContext } from "./FlinkSqlParser.js";
import { QualifiedNameContext } from "./FlinkSqlParser.js";
import { TimeIntervalExpressionContext } from "./FlinkSqlParser.js";
import { ErrorCapturingMultiUnitsIntervalContext } from "./FlinkSqlParser.js";
import { MultiUnitsIntervalContext } from "./FlinkSqlParser.js";
import { ErrorCapturingUnitToUnitIntervalContext } from "./FlinkSqlParser.js";
import { UnitToUnitIntervalContext } from "./FlinkSqlParser.js";
import { IntervalValueContext } from "./FlinkSqlParser.js";
import { TableAliasContext } from "./FlinkSqlParser.js";
import { ErrorCapturingIdentifierContext } from "./FlinkSqlParser.js";
import { ErrorIdentContext } from "./FlinkSqlParser.js";
import { RealIdentContext } from "./FlinkSqlParser.js";
import { IdentifierListContext } from "./FlinkSqlParser.js";
import { IdentifierSeqContext } from "./FlinkSqlParser.js";
import { UnquotedIdentifierAlternativeContext } from "./FlinkSqlParser.js";
import { QuotedIdentifierAlternativeContext } from "./FlinkSqlParser.js";
import { NonReservedKeywordsAlternativeContext } from "./FlinkSqlParser.js";
import { UnquotedIdentifierContext } from "./FlinkSqlParser.js";
import { QuotedIdentifierContext } from "./FlinkSqlParser.js";
import { WhenClauseContext } from "./FlinkSqlParser.js";
import { CatalogPathContext } from "./FlinkSqlParser.js";
import { CatalogPathCreateContext } from "./FlinkSqlParser.js";
import { DatabasePathContext } from "./FlinkSqlParser.js";
import { DatabasePathCreateContext } from "./FlinkSqlParser.js";
import { TablePathCreateContext } from "./FlinkSqlParser.js";
import { TablePathContext } from "./FlinkSqlParser.js";
import { ViewPathContext } from "./FlinkSqlParser.js";
import { ViewPathCreateContext } from "./FlinkSqlParser.js";
import { UidContext } from "./FlinkSqlParser.js";
import { WithOptionContext } from "./FlinkSqlParser.js";
import { IfNotExistsContext } from "./FlinkSqlParser.js";
import { IfExistsContext } from "./FlinkSqlParser.js";
import { TablePropertyListContext } from "./FlinkSqlParser.js";
import { TablePropertyContext } from "./FlinkSqlParser.js";
import { TablePropertyKeyContext } from "./FlinkSqlParser.js";
import { TablePropertyValueContext } from "./FlinkSqlParser.js";
import { LogicalOperatorContext } from "./FlinkSqlParser.js";
import { ComparisonOperatorContext } from "./FlinkSqlParser.js";
import { BitOperatorContext } from "./FlinkSqlParser.js";
import { MathOperatorContext } from "./FlinkSqlParser.js";
import { UnaryOperatorContext } from "./FlinkSqlParser.js";
import { ConstantContext } from "./FlinkSqlParser.js";
import { TimePointLiteralContext } from "./FlinkSqlParser.js";
import { StringLiteralContext } from "./FlinkSqlParser.js";
import { DecimalLiteralContext } from "./FlinkSqlParser.js";
import { BooleanLiteralContext } from "./FlinkSqlParser.js";
import { SetQuantifierContext } from "./FlinkSqlParser.js";
import { TimePointUnitContext } from "./FlinkSqlParser.js";
import { TimeIntervalUnitContext } from "./FlinkSqlParser.js";
import { ReservedKeywordsUsedAsFuncParamContext } from "./FlinkSqlParser.js";
import { ReservedKeywordsNoParamsUsedAsFuncNameContext } from "./FlinkSqlParser.js";
import { ReservedKeywordsFollowParamsUsedAsFuncNameContext } from "./FlinkSqlParser.js";
import { ReservedKeywordsUsedAsFuncNameContext } from "./FlinkSqlParser.js";
import { NonReservedKeywordsContext } from "./FlinkSqlParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `FlinkSqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class FlinkSqlParserVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `FlinkSqlParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.singleStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingleStatement?: (ctx: SingleStatementContext) => Result;
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
     * Visit a parse tree produced by `FlinkSqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowStatement?: (ctx: ShowStatementContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.loadStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoadStatement?: (ctx: LoadStatementContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.unloadStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnloadStatement?: (ctx: UnloadStatementContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.setStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetStatement?: (ctx: SetStatementContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.resetStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResetStatement?: (ctx: ResetStatementContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.jarStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJarStatement?: (ctx: JarStatementContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.dtAddStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDtAddStatement?: (ctx: DtAddStatementContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.dtFilePath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDtFilePath?: (ctx: DtFilePathContext) => Result;
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
     * Visit a parse tree produced by `FlinkSqlParser.columnNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameCreate?: (ctx: ColumnNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.columnName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnName?: (ctx: ColumnNameContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.columnNamePath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNamePath?: (ctx: ColumnNamePathContext) => Result;
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
     * Visit a parse tree produced by `FlinkSqlParser.alterView`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterView?: (ctx: AlterViewContext) => Result;
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
     * Visit a parse tree produced by `FlinkSqlParser.valuesClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValuesClause?: (ctx: ValuesClauseContext) => Result;
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
     * Visit a parse tree produced by `FlinkSqlParser.selectList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectList?: (ctx: SelectListContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.columnProjectItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnProjectItem?: (ctx: ColumnProjectItemContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.selectWindowItemColumnName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectWindowItemColumnName?: (ctx: SelectWindowItemColumnNameContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.selectExpressionColumnName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectExpressionColumnName?: (ctx: SelectExpressionColumnNameContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.selectLiteralColumnName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectLiteralColumnName?: (ctx: SelectLiteralColumnNameContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.columnAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnAlias?: (ctx: ColumnAliasContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.projectItemDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProjectItemDefinition?: (ctx: ProjectItemDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.tableAllColumns`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableAllColumns?: (ctx: TableAllColumnsContext) => Result;
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
     * Visit a parse tree produced by `FlinkSqlParser.atomFunctionTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAtomFunctionTable?: (ctx: AtomFunctionTableContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.atomExpressionTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAtomExpressionTable?: (ctx: AtomExpressionTableContext) => Result;
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
     * Visit a parse tree produced by `FlinkSqlParser.windowTVFClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowTVFClause?: (ctx: WindowTVFClauseContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.windowTVFExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowTVFExpression?: (ctx: WindowTVFExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.windowTVFName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowTVFName?: (ctx: WindowTVFNameContext) => Result;
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
     * Visit a parse tree produced by `FlinkSqlParser.groupingSetsNotationName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingSetsNotationName?: (ctx: GroupingSetsNotationNameContext) => Result;
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
     * Visit a parse tree produced by `FlinkSqlParser.orderByClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderByClause?: (ctx: OrderByClauseContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.orderItemDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderItemDefinition?: (ctx: OrderItemDefinitionContext) => Result;
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
     * Visit a parse tree produced by `FlinkSqlParser.patternDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPatternDefinition?: (ctx: PatternDefinitionContext) => Result;
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
     * Visit a parse tree produced by `FlinkSqlParser.patternVariablesDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPatternVariablesDefinition?: (ctx: PatternVariablesDefinitionContext) => Result;
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
     * Visit a parse tree produced by `FlinkSqlParser.functionCallExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => Result;
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
     * Visit a parse tree produced by `FlinkSqlParser.functionNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionNameCreate?: (ctx: FunctionNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.functionName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionName?: (ctx: FunctionNameContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.functionNameAndParams`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionNameAndParams?: (ctx: FunctionNameAndParamsContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.functionNameWithParams`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionNameWithParams?: (ctx: FunctionNameWithParamsContext) => Result;
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
     * Visit a parse tree produced by `FlinkSqlParser.catalogPath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCatalogPath?: (ctx: CatalogPathContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.catalogPathCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCatalogPathCreate?: (ctx: CatalogPathCreateContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.databasePath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatabasePath?: (ctx: DatabasePathContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.databasePathCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatabasePathCreate?: (ctx: DatabasePathCreateContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.tablePathCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablePathCreate?: (ctx: TablePathCreateContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.tablePath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablePath?: (ctx: TablePathContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.viewPath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewPath?: (ctx: ViewPathContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.viewPathCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewPathCreate?: (ctx: ViewPathCreateContext) => Result;
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
     * Visit a parse tree produced by `FlinkSqlParser.reservedKeywordsNoParamsUsedAsFuncName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReservedKeywordsNoParamsUsedAsFuncName?: (ctx: ReservedKeywordsNoParamsUsedAsFuncNameContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.reservedKeywordsFollowParamsUsedAsFuncName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReservedKeywordsFollowParamsUsedAsFuncName?: (ctx: ReservedKeywordsFollowParamsUsedAsFuncNameContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.reservedKeywordsUsedAsFuncName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReservedKeywordsUsedAsFuncName?: (ctx: ReservedKeywordsUsedAsFuncNameContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSqlParser.nonReservedKeywords`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonReservedKeywords?: (ctx: NonReservedKeywordsContext) => Result;
}

