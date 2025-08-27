// Generated from dt-sql-parser/src/grammar/flink/FlinkSqlParser.g4 by ANTLR 4.13.1

// @ts-nocheck

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


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
import { ValueDefinitionContext } from "./FlinkSqlParser.js";
import { InsertMulStatementCompatibilityContext } from "./FlinkSqlParser.js";
import { InsertMulStatementContext } from "./FlinkSqlParser.js";
import { QueryStatementContext } from "./FlinkSqlParser.js";
import { ValuesClauseContext } from "./FlinkSqlParser.js";
import { WithClauseContext } from "./FlinkSqlParser.js";
import { WithItemContext } from "./FlinkSqlParser.js";
import { WithItemNameContext } from "./FlinkSqlParser.js";
import { SelectStatementContext } from "./FlinkSqlParser.js";
import { SelectClauseContext } from "./FlinkSqlParser.js";
import { ProjectItemDefinitionContext } from "./FlinkSqlParser.js";
import { OverWindowItemContext } from "./FlinkSqlParser.js";
import { FromClauseContext } from "./FlinkSqlParser.js";
import { TableExpressionContext } from "./FlinkSqlParser.js";
import { TableReferenceContext } from "./FlinkSqlParser.js";
import { TablePrimaryContext } from "./FlinkSqlParser.js";
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
 * This interface defines a complete listener for a parse tree produced by
 * `FlinkSqlParser`.
 */
export class FlinkSqlParserListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `FlinkSqlParser.program`.
     * @param ctx the parse tree
     */
    enterProgram?: (ctx: ProgramContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.program`.
     * @param ctx the parse tree
     */
    exitProgram?: (ctx: ProgramContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.singleStatement`.
     * @param ctx the parse tree
     */
    enterSingleStatement?: (ctx: SingleStatementContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.singleStatement`.
     * @param ctx the parse tree
     */
    exitSingleStatement?: (ctx: SingleStatementContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.sqlStatement`.
     * @param ctx the parse tree
     */
    enterSqlStatement?: (ctx: SqlStatementContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.sqlStatement`.
     * @param ctx the parse tree
     */
    exitSqlStatement?: (ctx: SqlStatementContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.emptyStatement`.
     * @param ctx the parse tree
     */
    enterEmptyStatement?: (ctx: EmptyStatementContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.emptyStatement`.
     * @param ctx the parse tree
     */
    exitEmptyStatement?: (ctx: EmptyStatementContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.ddlStatement`.
     * @param ctx the parse tree
     */
    enterDdlStatement?: (ctx: DdlStatementContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.ddlStatement`.
     * @param ctx the parse tree
     */
    exitDdlStatement?: (ctx: DdlStatementContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.dmlStatement`.
     * @param ctx the parse tree
     */
    enterDmlStatement?: (ctx: DmlStatementContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.dmlStatement`.
     * @param ctx the parse tree
     */
    exitDmlStatement?: (ctx: DmlStatementContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.describeStatement`.
     * @param ctx the parse tree
     */
    enterDescribeStatement?: (ctx: DescribeStatementContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.describeStatement`.
     * @param ctx the parse tree
     */
    exitDescribeStatement?: (ctx: DescribeStatementContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.explainStatement`.
     * @param ctx the parse tree
     */
    enterExplainStatement?: (ctx: ExplainStatementContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.explainStatement`.
     * @param ctx the parse tree
     */
    exitExplainStatement?: (ctx: ExplainStatementContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.explainDetails`.
     * @param ctx the parse tree
     */
    enterExplainDetails?: (ctx: ExplainDetailsContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.explainDetails`.
     * @param ctx the parse tree
     */
    exitExplainDetails?: (ctx: ExplainDetailsContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.explainDetail`.
     * @param ctx the parse tree
     */
    enterExplainDetail?: (ctx: ExplainDetailContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.explainDetail`.
     * @param ctx the parse tree
     */
    exitExplainDetail?: (ctx: ExplainDetailContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.useStatement`.
     * @param ctx the parse tree
     */
    enterUseStatement?: (ctx: UseStatementContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.useStatement`.
     * @param ctx the parse tree
     */
    exitUseStatement?: (ctx: UseStatementContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.useModuleStatement`.
     * @param ctx the parse tree
     */
    enterUseModuleStatement?: (ctx: UseModuleStatementContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.useModuleStatement`.
     * @param ctx the parse tree
     */
    exitUseModuleStatement?: (ctx: UseModuleStatementContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowStatement?: (ctx: ShowStatementContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowStatement?: (ctx: ShowStatementContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.loadStatement`.
     * @param ctx the parse tree
     */
    enterLoadStatement?: (ctx: LoadStatementContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.loadStatement`.
     * @param ctx the parse tree
     */
    exitLoadStatement?: (ctx: LoadStatementContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.unloadStatement`.
     * @param ctx the parse tree
     */
    enterUnloadStatement?: (ctx: UnloadStatementContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.unloadStatement`.
     * @param ctx the parse tree
     */
    exitUnloadStatement?: (ctx: UnloadStatementContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.setStatement`.
     * @param ctx the parse tree
     */
    enterSetStatement?: (ctx: SetStatementContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.setStatement`.
     * @param ctx the parse tree
     */
    exitSetStatement?: (ctx: SetStatementContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.resetStatement`.
     * @param ctx the parse tree
     */
    enterResetStatement?: (ctx: ResetStatementContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.resetStatement`.
     * @param ctx the parse tree
     */
    exitResetStatement?: (ctx: ResetStatementContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.jarStatement`.
     * @param ctx the parse tree
     */
    enterJarStatement?: (ctx: JarStatementContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.jarStatement`.
     * @param ctx the parse tree
     */
    exitJarStatement?: (ctx: JarStatementContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.dtAddStatement`.
     * @param ctx the parse tree
     */
    enterDtAddStatement?: (ctx: DtAddStatementContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.dtAddStatement`.
     * @param ctx the parse tree
     */
    exitDtAddStatement?: (ctx: DtAddStatementContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.dtFilePath`.
     * @param ctx the parse tree
     */
    enterDtFilePath?: (ctx: DtFilePathContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.dtFilePath`.
     * @param ctx the parse tree
     */
    exitDtFilePath?: (ctx: DtFilePathContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.createTable`.
     * @param ctx the parse tree
     */
    enterCreateTable?: (ctx: CreateTableContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.createTable`.
     * @param ctx the parse tree
     */
    exitCreateTable?: (ctx: CreateTableContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.simpleCreateTable`.
     * @param ctx the parse tree
     */
    enterSimpleCreateTable?: (ctx: SimpleCreateTableContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.simpleCreateTable`.
     * @param ctx the parse tree
     */
    exitSimpleCreateTable?: (ctx: SimpleCreateTableContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.createTableAsSelect`.
     * @param ctx the parse tree
     */
    enterCreateTableAsSelect?: (ctx: CreateTableAsSelectContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.createTableAsSelect`.
     * @param ctx the parse tree
     */
    exitCreateTableAsSelect?: (ctx: CreateTableAsSelectContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.columnOptionDefinition`.
     * @param ctx the parse tree
     */
    enterColumnOptionDefinition?: (ctx: ColumnOptionDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.columnOptionDefinition`.
     * @param ctx the parse tree
     */
    exitColumnOptionDefinition?: (ctx: ColumnOptionDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.physicalColumnDefinition`.
     * @param ctx the parse tree
     */
    enterPhysicalColumnDefinition?: (ctx: PhysicalColumnDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.physicalColumnDefinition`.
     * @param ctx the parse tree
     */
    exitPhysicalColumnDefinition?: (ctx: PhysicalColumnDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.columnNameCreate`.
     * @param ctx the parse tree
     */
    enterColumnNameCreate?: (ctx: ColumnNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.columnNameCreate`.
     * @param ctx the parse tree
     */
    exitColumnNameCreate?: (ctx: ColumnNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.columnName`.
     * @param ctx the parse tree
     */
    enterColumnName?: (ctx: ColumnNameContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.columnName`.
     * @param ctx the parse tree
     */
    exitColumnName?: (ctx: ColumnNameContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.columnNamePath`.
     * @param ctx the parse tree
     */
    enterColumnNamePath?: (ctx: ColumnNamePathContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.columnNamePath`.
     * @param ctx the parse tree
     */
    exitColumnNamePath?: (ctx: ColumnNamePathContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.columnNameList`.
     * @param ctx the parse tree
     */
    enterColumnNameList?: (ctx: ColumnNameListContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.columnNameList`.
     * @param ctx the parse tree
     */
    exitColumnNameList?: (ctx: ColumnNameListContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.columnType`.
     * @param ctx the parse tree
     */
    enterColumnType?: (ctx: ColumnTypeContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.columnType`.
     * @param ctx the parse tree
     */
    exitColumnType?: (ctx: ColumnTypeContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.lengthOneDimension`.
     * @param ctx the parse tree
     */
    enterLengthOneDimension?: (ctx: LengthOneDimensionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.lengthOneDimension`.
     * @param ctx the parse tree
     */
    exitLengthOneDimension?: (ctx: LengthOneDimensionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.lengthTwoOptionalDimension`.
     * @param ctx the parse tree
     */
    enterLengthTwoOptionalDimension?: (ctx: LengthTwoOptionalDimensionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.lengthTwoOptionalDimension`.
     * @param ctx the parse tree
     */
    exitLengthTwoOptionalDimension?: (ctx: LengthTwoOptionalDimensionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.lengthTwoStringDimension`.
     * @param ctx the parse tree
     */
    enterLengthTwoStringDimension?: (ctx: LengthTwoStringDimensionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.lengthTwoStringDimension`.
     * @param ctx the parse tree
     */
    exitLengthTwoStringDimension?: (ctx: LengthTwoStringDimensionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.lengthOneTypeDimension`.
     * @param ctx the parse tree
     */
    enterLengthOneTypeDimension?: (ctx: LengthOneTypeDimensionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.lengthOneTypeDimension`.
     * @param ctx the parse tree
     */
    exitLengthOneTypeDimension?: (ctx: LengthOneTypeDimensionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.mapTypeDimension`.
     * @param ctx the parse tree
     */
    enterMapTypeDimension?: (ctx: MapTypeDimensionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.mapTypeDimension`.
     * @param ctx the parse tree
     */
    exitMapTypeDimension?: (ctx: MapTypeDimensionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.rowTypeDimension`.
     * @param ctx the parse tree
     */
    enterRowTypeDimension?: (ctx: RowTypeDimensionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.rowTypeDimension`.
     * @param ctx the parse tree
     */
    exitRowTypeDimension?: (ctx: RowTypeDimensionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterColumnConstraint?: (ctx: ColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitColumnConstraint?: (ctx: ColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.metadataColumnDefinition`.
     * @param ctx the parse tree
     */
    enterMetadataColumnDefinition?: (ctx: MetadataColumnDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.metadataColumnDefinition`.
     * @param ctx the parse tree
     */
    exitMetadataColumnDefinition?: (ctx: MetadataColumnDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.metadataKey`.
     * @param ctx the parse tree
     */
    enterMetadataKey?: (ctx: MetadataKeyContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.metadataKey`.
     * @param ctx the parse tree
     */
    exitMetadataKey?: (ctx: MetadataKeyContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.computedColumnDefinition`.
     * @param ctx the parse tree
     */
    enterComputedColumnDefinition?: (ctx: ComputedColumnDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.computedColumnDefinition`.
     * @param ctx the parse tree
     */
    exitComputedColumnDefinition?: (ctx: ComputedColumnDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.computedColumnExpression`.
     * @param ctx the parse tree
     */
    enterComputedColumnExpression?: (ctx: ComputedColumnExpressionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.computedColumnExpression`.
     * @param ctx the parse tree
     */
    exitComputedColumnExpression?: (ctx: ComputedColumnExpressionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.watermarkDefinition`.
     * @param ctx the parse tree
     */
    enterWatermarkDefinition?: (ctx: WatermarkDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.watermarkDefinition`.
     * @param ctx the parse tree
     */
    exitWatermarkDefinition?: (ctx: WatermarkDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.tableConstraint`.
     * @param ctx the parse tree
     */
    enterTableConstraint?: (ctx: TableConstraintContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.tableConstraint`.
     * @param ctx the parse tree
     */
    exitTableConstraint?: (ctx: TableConstraintContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.constraintName`.
     * @param ctx the parse tree
     */
    enterConstraintName?: (ctx: ConstraintNameContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.constraintName`.
     * @param ctx the parse tree
     */
    exitConstraintName?: (ctx: ConstraintNameContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.selfDefinitionClause`.
     * @param ctx the parse tree
     */
    enterSelfDefinitionClause?: (ctx: SelfDefinitionClauseContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.selfDefinitionClause`.
     * @param ctx the parse tree
     */
    exitSelfDefinitionClause?: (ctx: SelfDefinitionClauseContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.partitionDefinition`.
     * @param ctx the parse tree
     */
    enterPartitionDefinition?: (ctx: PartitionDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.partitionDefinition`.
     * @param ctx the parse tree
     */
    exitPartitionDefinition?: (ctx: PartitionDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.transformList`.
     * @param ctx the parse tree
     */
    enterTransformList?: (ctx: TransformListContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.transformList`.
     * @param ctx the parse tree
     */
    exitTransformList?: (ctx: TransformListContext) => void;
    /**
     * Enter a parse tree produced by the `identityTransform`
     * labeled alternative in `FlinkSqlParser.transform`.
     * @param ctx the parse tree
     */
    enterIdentityTransform?: (ctx: IdentityTransformContext) => void;
    /**
     * Exit a parse tree produced by the `identityTransform`
     * labeled alternative in `FlinkSqlParser.transform`.
     * @param ctx the parse tree
     */
    exitIdentityTransform?: (ctx: IdentityTransformContext) => void;
    /**
     * Enter a parse tree produced by the `applyTransform`
     * labeled alternative in `FlinkSqlParser.transform`.
     * @param ctx the parse tree
     */
    enterApplyTransform?: (ctx: ApplyTransformContext) => void;
    /**
     * Exit a parse tree produced by the `applyTransform`
     * labeled alternative in `FlinkSqlParser.transform`.
     * @param ctx the parse tree
     */
    exitApplyTransform?: (ctx: ApplyTransformContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.transformArgument`.
     * @param ctx the parse tree
     */
    enterTransformArgument?: (ctx: TransformArgumentContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.transformArgument`.
     * @param ctx the parse tree
     */
    exitTransformArgument?: (ctx: TransformArgumentContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.likeDefinition`.
     * @param ctx the parse tree
     */
    enterLikeDefinition?: (ctx: LikeDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.likeDefinition`.
     * @param ctx the parse tree
     */
    exitLikeDefinition?: (ctx: LikeDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.likeOption`.
     * @param ctx the parse tree
     */
    enterLikeOption?: (ctx: LikeOptionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.likeOption`.
     * @param ctx the parse tree
     */
    exitLikeOption?: (ctx: LikeOptionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.createCatalog`.
     * @param ctx the parse tree
     */
    enterCreateCatalog?: (ctx: CreateCatalogContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.createCatalog`.
     * @param ctx the parse tree
     */
    exitCreateCatalog?: (ctx: CreateCatalogContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.createDatabase`.
     * @param ctx the parse tree
     */
    enterCreateDatabase?: (ctx: CreateDatabaseContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.createDatabase`.
     * @param ctx the parse tree
     */
    exitCreateDatabase?: (ctx: CreateDatabaseContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.createView`.
     * @param ctx the parse tree
     */
    enterCreateView?: (ctx: CreateViewContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.createView`.
     * @param ctx the parse tree
     */
    exitCreateView?: (ctx: CreateViewContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.createFunction`.
     * @param ctx the parse tree
     */
    enterCreateFunction?: (ctx: CreateFunctionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.createFunction`.
     * @param ctx the parse tree
     */
    exitCreateFunction?: (ctx: CreateFunctionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.usingClause`.
     * @param ctx the parse tree
     */
    enterUsingClause?: (ctx: UsingClauseContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.usingClause`.
     * @param ctx the parse tree
     */
    exitUsingClause?: (ctx: UsingClauseContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.jarFileName`.
     * @param ctx the parse tree
     */
    enterJarFileName?: (ctx: JarFileNameContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.jarFileName`.
     * @param ctx the parse tree
     */
    exitJarFileName?: (ctx: JarFileNameContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.alterTable`.
     * @param ctx the parse tree
     */
    enterAlterTable?: (ctx: AlterTableContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.alterTable`.
     * @param ctx the parse tree
     */
    exitAlterTable?: (ctx: AlterTableContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.renameDefinition`.
     * @param ctx the parse tree
     */
    enterRenameDefinition?: (ctx: RenameDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.renameDefinition`.
     * @param ctx the parse tree
     */
    exitRenameDefinition?: (ctx: RenameDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.setKeyValueDefinition`.
     * @param ctx the parse tree
     */
    enterSetKeyValueDefinition?: (ctx: SetKeyValueDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.setKeyValueDefinition`.
     * @param ctx the parse tree
     */
    exitSetKeyValueDefinition?: (ctx: SetKeyValueDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.addConstraint`.
     * @param ctx the parse tree
     */
    enterAddConstraint?: (ctx: AddConstraintContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.addConstraint`.
     * @param ctx the parse tree
     */
    exitAddConstraint?: (ctx: AddConstraintContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.dropConstraint`.
     * @param ctx the parse tree
     */
    enterDropConstraint?: (ctx: DropConstraintContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.dropConstraint`.
     * @param ctx the parse tree
     */
    exitDropConstraint?: (ctx: DropConstraintContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.addUnique`.
     * @param ctx the parse tree
     */
    enterAddUnique?: (ctx: AddUniqueContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.addUnique`.
     * @param ctx the parse tree
     */
    exitAddUnique?: (ctx: AddUniqueContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.notForced`.
     * @param ctx the parse tree
     */
    enterNotForced?: (ctx: NotForcedContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.notForced`.
     * @param ctx the parse tree
     */
    exitNotForced?: (ctx: NotForcedContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.alterView`.
     * @param ctx the parse tree
     */
    enterAlterView?: (ctx: AlterViewContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.alterView`.
     * @param ctx the parse tree
     */
    exitAlterView?: (ctx: AlterViewContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.alterDatabase`.
     * @param ctx the parse tree
     */
    enterAlterDatabase?: (ctx: AlterDatabaseContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.alterDatabase`.
     * @param ctx the parse tree
     */
    exitAlterDatabase?: (ctx: AlterDatabaseContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.alterFunction`.
     * @param ctx the parse tree
     */
    enterAlterFunction?: (ctx: AlterFunctionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.alterFunction`.
     * @param ctx the parse tree
     */
    exitAlterFunction?: (ctx: AlterFunctionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.dropCatalog`.
     * @param ctx the parse tree
     */
    enterDropCatalog?: (ctx: DropCatalogContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.dropCatalog`.
     * @param ctx the parse tree
     */
    exitDropCatalog?: (ctx: DropCatalogContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.dropTable`.
     * @param ctx the parse tree
     */
    enterDropTable?: (ctx: DropTableContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.dropTable`.
     * @param ctx the parse tree
     */
    exitDropTable?: (ctx: DropTableContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.dropDatabase`.
     * @param ctx the parse tree
     */
    enterDropDatabase?: (ctx: DropDatabaseContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.dropDatabase`.
     * @param ctx the parse tree
     */
    exitDropDatabase?: (ctx: DropDatabaseContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.dropView`.
     * @param ctx the parse tree
     */
    enterDropView?: (ctx: DropViewContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.dropView`.
     * @param ctx the parse tree
     */
    exitDropView?: (ctx: DropViewContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.dropFunction`.
     * @param ctx the parse tree
     */
    enterDropFunction?: (ctx: DropFunctionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.dropFunction`.
     * @param ctx the parse tree
     */
    exitDropFunction?: (ctx: DropFunctionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.insertStatement`.
     * @param ctx the parse tree
     */
    enterInsertStatement?: (ctx: InsertStatementContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.insertStatement`.
     * @param ctx the parse tree
     */
    exitInsertStatement?: (ctx: InsertStatementContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.insertSimpleStatement`.
     * @param ctx the parse tree
     */
    enterInsertSimpleStatement?: (ctx: InsertSimpleStatementContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.insertSimpleStatement`.
     * @param ctx the parse tree
     */
    exitInsertSimpleStatement?: (ctx: InsertSimpleStatementContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.insertPartitionDefinition`.
     * @param ctx the parse tree
     */
    enterInsertPartitionDefinition?: (ctx: InsertPartitionDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.insertPartitionDefinition`.
     * @param ctx the parse tree
     */
    exitInsertPartitionDefinition?: (ctx: InsertPartitionDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.valuesDefinition`.
     * @param ctx the parse tree
     */
    enterValuesDefinition?: (ctx: ValuesDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.valuesDefinition`.
     * @param ctx the parse tree
     */
    exitValuesDefinition?: (ctx: ValuesDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.valuesRowDefinition`.
     * @param ctx the parse tree
     */
    enterValuesRowDefinition?: (ctx: ValuesRowDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.valuesRowDefinition`.
     * @param ctx the parse tree
     */
    exitValuesRowDefinition?: (ctx: ValuesRowDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.valueDefinition`.
     * @param ctx the parse tree
     */
    enterValueDefinition?: (ctx: ValueDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.valueDefinition`.
     * @param ctx the parse tree
     */
    exitValueDefinition?: (ctx: ValueDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.insertMulStatementCompatibility`.
     * @param ctx the parse tree
     */
    enterInsertMulStatementCompatibility?: (ctx: InsertMulStatementCompatibilityContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.insertMulStatementCompatibility`.
     * @param ctx the parse tree
     */
    exitInsertMulStatementCompatibility?: (ctx: InsertMulStatementCompatibilityContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.insertMulStatement`.
     * @param ctx the parse tree
     */
    enterInsertMulStatement?: (ctx: InsertMulStatementContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.insertMulStatement`.
     * @param ctx the parse tree
     */
    exitInsertMulStatement?: (ctx: InsertMulStatementContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.queryStatement`.
     * @param ctx the parse tree
     */
    enterQueryStatement?: (ctx: QueryStatementContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.queryStatement`.
     * @param ctx the parse tree
     */
    exitQueryStatement?: (ctx: QueryStatementContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.valuesClause`.
     * @param ctx the parse tree
     */
    enterValuesClause?: (ctx: ValuesClauseContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.valuesClause`.
     * @param ctx the parse tree
     */
    exitValuesClause?: (ctx: ValuesClauseContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.withClause`.
     * @param ctx the parse tree
     */
    enterWithClause?: (ctx: WithClauseContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.withClause`.
     * @param ctx the parse tree
     */
    exitWithClause?: (ctx: WithClauseContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.withItem`.
     * @param ctx the parse tree
     */
    enterWithItem?: (ctx: WithItemContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.withItem`.
     * @param ctx the parse tree
     */
    exitWithItem?: (ctx: WithItemContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.withItemName`.
     * @param ctx the parse tree
     */
    enterWithItemName?: (ctx: WithItemNameContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.withItemName`.
     * @param ctx the parse tree
     */
    exitWithItemName?: (ctx: WithItemNameContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.selectStatement`.
     * @param ctx the parse tree
     */
    enterSelectStatement?: (ctx: SelectStatementContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.selectStatement`.
     * @param ctx the parse tree
     */
    exitSelectStatement?: (ctx: SelectStatementContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.selectClause`.
     * @param ctx the parse tree
     */
    enterSelectClause?: (ctx: SelectClauseContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.selectClause`.
     * @param ctx the parse tree
     */
    exitSelectClause?: (ctx: SelectClauseContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.projectItemDefinition`.
     * @param ctx the parse tree
     */
    enterProjectItemDefinition?: (ctx: ProjectItemDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.projectItemDefinition`.
     * @param ctx the parse tree
     */
    exitProjectItemDefinition?: (ctx: ProjectItemDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.overWindowItem`.
     * @param ctx the parse tree
     */
    enterOverWindowItem?: (ctx: OverWindowItemContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.overWindowItem`.
     * @param ctx the parse tree
     */
    exitOverWindowItem?: (ctx: OverWindowItemContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.fromClause`.
     * @param ctx the parse tree
     */
    enterFromClause?: (ctx: FromClauseContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.fromClause`.
     * @param ctx the parse tree
     */
    exitFromClause?: (ctx: FromClauseContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.tableExpression`.
     * @param ctx the parse tree
     */
    enterTableExpression?: (ctx: TableExpressionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.tableExpression`.
     * @param ctx the parse tree
     */
    exitTableExpression?: (ctx: TableExpressionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.tableReference`.
     * @param ctx the parse tree
     */
    enterTableReference?: (ctx: TableReferenceContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.tableReference`.
     * @param ctx the parse tree
     */
    exitTableReference?: (ctx: TableReferenceContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.tablePrimary`.
     * @param ctx the parse tree
     */
    enterTablePrimary?: (ctx: TablePrimaryContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.tablePrimary`.
     * @param ctx the parse tree
     */
    exitTablePrimary?: (ctx: TablePrimaryContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.systemTimePeriod`.
     * @param ctx the parse tree
     */
    enterSystemTimePeriod?: (ctx: SystemTimePeriodContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.systemTimePeriod`.
     * @param ctx the parse tree
     */
    exitSystemTimePeriod?: (ctx: SystemTimePeriodContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.dateTimeExpression`.
     * @param ctx the parse tree
     */
    enterDateTimeExpression?: (ctx: DateTimeExpressionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.dateTimeExpression`.
     * @param ctx the parse tree
     */
    exitDateTimeExpression?: (ctx: DateTimeExpressionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.inlineDataValueClause`.
     * @param ctx the parse tree
     */
    enterInlineDataValueClause?: (ctx: InlineDataValueClauseContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.inlineDataValueClause`.
     * @param ctx the parse tree
     */
    exitInlineDataValueClause?: (ctx: InlineDataValueClauseContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.windowTVFClause`.
     * @param ctx the parse tree
     */
    enterWindowTVFClause?: (ctx: WindowTVFClauseContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.windowTVFClause`.
     * @param ctx the parse tree
     */
    exitWindowTVFClause?: (ctx: WindowTVFClauseContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.windowTVFExpression`.
     * @param ctx the parse tree
     */
    enterWindowTVFExpression?: (ctx: WindowTVFExpressionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.windowTVFExpression`.
     * @param ctx the parse tree
     */
    exitWindowTVFExpression?: (ctx: WindowTVFExpressionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.windowTVFName`.
     * @param ctx the parse tree
     */
    enterWindowTVFName?: (ctx: WindowTVFNameContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.windowTVFName`.
     * @param ctx the parse tree
     */
    exitWindowTVFName?: (ctx: WindowTVFNameContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.windowTVFParam`.
     * @param ctx the parse tree
     */
    enterWindowTVFParam?: (ctx: WindowTVFParamContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.windowTVFParam`.
     * @param ctx the parse tree
     */
    exitWindowTVFParam?: (ctx: WindowTVFParamContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.timeIntervalParamName`.
     * @param ctx the parse tree
     */
    enterTimeIntervalParamName?: (ctx: TimeIntervalParamNameContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.timeIntervalParamName`.
     * @param ctx the parse tree
     */
    exitTimeIntervalParamName?: (ctx: TimeIntervalParamNameContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.columnDescriptor`.
     * @param ctx the parse tree
     */
    enterColumnDescriptor?: (ctx: ColumnDescriptorContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.columnDescriptor`.
     * @param ctx the parse tree
     */
    exitColumnDescriptor?: (ctx: ColumnDescriptorContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.joinCondition`.
     * @param ctx the parse tree
     */
    enterJoinCondition?: (ctx: JoinConditionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.joinCondition`.
     * @param ctx the parse tree
     */
    exitJoinCondition?: (ctx: JoinConditionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.whereClause`.
     * @param ctx the parse tree
     */
    enterWhereClause?: (ctx: WhereClauseContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.whereClause`.
     * @param ctx the parse tree
     */
    exitWhereClause?: (ctx: WhereClauseContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.groupByClause`.
     * @param ctx the parse tree
     */
    enterGroupByClause?: (ctx: GroupByClauseContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.groupByClause`.
     * @param ctx the parse tree
     */
    exitGroupByClause?: (ctx: GroupByClauseContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.groupItemDefinition`.
     * @param ctx the parse tree
     */
    enterGroupItemDefinition?: (ctx: GroupItemDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.groupItemDefinition`.
     * @param ctx the parse tree
     */
    exitGroupItemDefinition?: (ctx: GroupItemDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.groupingSets`.
     * @param ctx the parse tree
     */
    enterGroupingSets?: (ctx: GroupingSetsContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.groupingSets`.
     * @param ctx the parse tree
     */
    exitGroupingSets?: (ctx: GroupingSetsContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.groupingSetsNotationName`.
     * @param ctx the parse tree
     */
    enterGroupingSetsNotationName?: (ctx: GroupingSetsNotationNameContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.groupingSetsNotationName`.
     * @param ctx the parse tree
     */
    exitGroupingSetsNotationName?: (ctx: GroupingSetsNotationNameContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.groupWindowFunction`.
     * @param ctx the parse tree
     */
    enterGroupWindowFunction?: (ctx: GroupWindowFunctionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.groupWindowFunction`.
     * @param ctx the parse tree
     */
    exitGroupWindowFunction?: (ctx: GroupWindowFunctionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.groupWindowFunctionName`.
     * @param ctx the parse tree
     */
    enterGroupWindowFunctionName?: (ctx: GroupWindowFunctionNameContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.groupWindowFunctionName`.
     * @param ctx the parse tree
     */
    exitGroupWindowFunctionName?: (ctx: GroupWindowFunctionNameContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.timeAttrColumn`.
     * @param ctx the parse tree
     */
    enterTimeAttrColumn?: (ctx: TimeAttrColumnContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.timeAttrColumn`.
     * @param ctx the parse tree
     */
    exitTimeAttrColumn?: (ctx: TimeAttrColumnContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.havingClause`.
     * @param ctx the parse tree
     */
    enterHavingClause?: (ctx: HavingClauseContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.havingClause`.
     * @param ctx the parse tree
     */
    exitHavingClause?: (ctx: HavingClauseContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.windowClause`.
     * @param ctx the parse tree
     */
    enterWindowClause?: (ctx: WindowClauseContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.windowClause`.
     * @param ctx the parse tree
     */
    exitWindowClause?: (ctx: WindowClauseContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.namedWindow`.
     * @param ctx the parse tree
     */
    enterNamedWindow?: (ctx: NamedWindowContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.namedWindow`.
     * @param ctx the parse tree
     */
    exitNamedWindow?: (ctx: NamedWindowContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.windowSpec`.
     * @param ctx the parse tree
     */
    enterWindowSpec?: (ctx: WindowSpecContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.windowSpec`.
     * @param ctx the parse tree
     */
    exitWindowSpec?: (ctx: WindowSpecContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.matchRecognizeClause`.
     * @param ctx the parse tree
     */
    enterMatchRecognizeClause?: (ctx: MatchRecognizeClauseContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.matchRecognizeClause`.
     * @param ctx the parse tree
     */
    exitMatchRecognizeClause?: (ctx: MatchRecognizeClauseContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.orderByClause`.
     * @param ctx the parse tree
     */
    enterOrderByClause?: (ctx: OrderByClauseContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.orderByClause`.
     * @param ctx the parse tree
     */
    exitOrderByClause?: (ctx: OrderByClauseContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.orderItemDefinition`.
     * @param ctx the parse tree
     */
    enterOrderItemDefinition?: (ctx: OrderItemDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.orderItemDefinition`.
     * @param ctx the parse tree
     */
    exitOrderItemDefinition?: (ctx: OrderItemDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.limitClause`.
     * @param ctx the parse tree
     */
    enterLimitClause?: (ctx: LimitClauseContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.limitClause`.
     * @param ctx the parse tree
     */
    exitLimitClause?: (ctx: LimitClauseContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.partitionByClause`.
     * @param ctx the parse tree
     */
    enterPartitionByClause?: (ctx: PartitionByClauseContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.partitionByClause`.
     * @param ctx the parse tree
     */
    exitPartitionByClause?: (ctx: PartitionByClauseContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.quantifiers`.
     * @param ctx the parse tree
     */
    enterQuantifiers?: (ctx: QuantifiersContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.quantifiers`.
     * @param ctx the parse tree
     */
    exitQuantifiers?: (ctx: QuantifiersContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.measuresClause`.
     * @param ctx the parse tree
     */
    enterMeasuresClause?: (ctx: MeasuresClauseContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.measuresClause`.
     * @param ctx the parse tree
     */
    exitMeasuresClause?: (ctx: MeasuresClauseContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.patternDefinition`.
     * @param ctx the parse tree
     */
    enterPatternDefinition?: (ctx: PatternDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.patternDefinition`.
     * @param ctx the parse tree
     */
    exitPatternDefinition?: (ctx: PatternDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.patternVariable`.
     * @param ctx the parse tree
     */
    enterPatternVariable?: (ctx: PatternVariableContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.patternVariable`.
     * @param ctx the parse tree
     */
    exitPatternVariable?: (ctx: PatternVariableContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.outputMode`.
     * @param ctx the parse tree
     */
    enterOutputMode?: (ctx: OutputModeContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.outputMode`.
     * @param ctx the parse tree
     */
    exitOutputMode?: (ctx: OutputModeContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.afterMatchStrategy`.
     * @param ctx the parse tree
     */
    enterAfterMatchStrategy?: (ctx: AfterMatchStrategyContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.afterMatchStrategy`.
     * @param ctx the parse tree
     */
    exitAfterMatchStrategy?: (ctx: AfterMatchStrategyContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.patternVariablesDefinition`.
     * @param ctx the parse tree
     */
    enterPatternVariablesDefinition?: (ctx: PatternVariablesDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.patternVariablesDefinition`.
     * @param ctx the parse tree
     */
    exitPatternVariablesDefinition?: (ctx: PatternVariablesDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.windowFrame`.
     * @param ctx the parse tree
     */
    enterWindowFrame?: (ctx: WindowFrameContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.windowFrame`.
     * @param ctx the parse tree
     */
    exitWindowFrame?: (ctx: WindowFrameContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.frameBound`.
     * @param ctx the parse tree
     */
    enterFrameBound?: (ctx: FrameBoundContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.frameBound`.
     * @param ctx the parse tree
     */
    exitFrameBound?: (ctx: FrameBoundContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.withinClause`.
     * @param ctx the parse tree
     */
    enterWithinClause?: (ctx: WithinClauseContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.withinClause`.
     * @param ctx the parse tree
     */
    exitWithinClause?: (ctx: WithinClauseContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `logicalNot`
     * labeled alternative in `FlinkSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterLogicalNot?: (ctx: LogicalNotContext) => void;
    /**
     * Exit a parse tree produced by the `logicalNot`
     * labeled alternative in `FlinkSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitLogicalNot?: (ctx: LogicalNotContext) => void;
    /**
     * Enter a parse tree produced by the `predicated`
     * labeled alternative in `FlinkSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterPredicated?: (ctx: PredicatedContext) => void;
    /**
     * Exit a parse tree produced by the `predicated`
     * labeled alternative in `FlinkSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitPredicated?: (ctx: PredicatedContext) => void;
    /**
     * Enter a parse tree produced by the `exists`
     * labeled alternative in `FlinkSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterExists?: (ctx: ExistsContext) => void;
    /**
     * Exit a parse tree produced by the `exists`
     * labeled alternative in `FlinkSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitExists?: (ctx: ExistsContext) => void;
    /**
     * Enter a parse tree produced by the `logicalNested`
     * labeled alternative in `FlinkSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterLogicalNested?: (ctx: LogicalNestedContext) => void;
    /**
     * Exit a parse tree produced by the `logicalNested`
     * labeled alternative in `FlinkSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitLogicalNested?: (ctx: LogicalNestedContext) => void;
    /**
     * Enter a parse tree produced by the `logicalBinary`
     * labeled alternative in `FlinkSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterLogicalBinary?: (ctx: LogicalBinaryContext) => void;
    /**
     * Exit a parse tree produced by the `logicalBinary`
     * labeled alternative in `FlinkSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitLogicalBinary?: (ctx: LogicalBinaryContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterPredicate?: (ctx: PredicateContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitPredicate?: (ctx: PredicateContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.likePredicate`.
     * @param ctx the parse tree
     */
    enterLikePredicate?: (ctx: LikePredicateContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.likePredicate`.
     * @param ctx the parse tree
     */
    exitLikePredicate?: (ctx: LikePredicateContext) => void;
    /**
     * Enter a parse tree produced by the `valueExpressionDefault`
     * labeled alternative in `FlinkSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `valueExpressionDefault`
     * labeled alternative in `FlinkSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `comparison`
     * labeled alternative in `FlinkSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterComparison?: (ctx: ComparisonContext) => void;
    /**
     * Exit a parse tree produced by the `comparison`
     * labeled alternative in `FlinkSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitComparison?: (ctx: ComparisonContext) => void;
    /**
     * Enter a parse tree produced by the `arithmeticBinary`
     * labeled alternative in `FlinkSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
    /**
     * Exit a parse tree produced by the `arithmeticBinary`
     * labeled alternative in `FlinkSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
    /**
     * Enter a parse tree produced by the `arithmeticUnary`
     * labeled alternative in `FlinkSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
    /**
     * Exit a parse tree produced by the `arithmeticUnary`
     * labeled alternative in `FlinkSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.functionCallExpression`.
     * @param ctx the parse tree
     */
    enterFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.functionCallExpression`.
     * @param ctx the parse tree
     */
    exitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `dereference`
     * labeled alternative in `FlinkSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterDereference?: (ctx: DereferenceContext) => void;
    /**
     * Exit a parse tree produced by the `dereference`
     * labeled alternative in `FlinkSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitDereference?: (ctx: DereferenceContext) => void;
    /**
     * Enter a parse tree produced by the `simpleCase`
     * labeled alternative in `FlinkSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSimpleCase?: (ctx: SimpleCaseContext) => void;
    /**
     * Exit a parse tree produced by the `simpleCase`
     * labeled alternative in `FlinkSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSimpleCase?: (ctx: SimpleCaseContext) => void;
    /**
     * Enter a parse tree produced by the `columnReference`
     * labeled alternative in `FlinkSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterColumnReference?: (ctx: ColumnReferenceContext) => void;
    /**
     * Exit a parse tree produced by the `columnReference`
     * labeled alternative in `FlinkSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitColumnReference?: (ctx: ColumnReferenceContext) => void;
    /**
     * Enter a parse tree produced by the `last`
     * labeled alternative in `FlinkSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterLast?: (ctx: LastContext) => void;
    /**
     * Exit a parse tree produced by the `last`
     * labeled alternative in `FlinkSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitLast?: (ctx: LastContext) => void;
    /**
     * Enter a parse tree produced by the `star`
     * labeled alternative in `FlinkSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterStar?: (ctx: StarContext) => void;
    /**
     * Exit a parse tree produced by the `star`
     * labeled alternative in `FlinkSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitStar?: (ctx: StarContext) => void;
    /**
     * Enter a parse tree produced by the `subscript`
     * labeled alternative in `FlinkSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSubscript?: (ctx: SubscriptContext) => void;
    /**
     * Exit a parse tree produced by the `subscript`
     * labeled alternative in `FlinkSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSubscript?: (ctx: SubscriptContext) => void;
    /**
     * Enter a parse tree produced by the `subqueryExpression`
     * labeled alternative in `FlinkSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `subqueryExpression`
     * labeled alternative in `FlinkSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `cast`
     * labeled alternative in `FlinkSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCast?: (ctx: CastContext) => void;
    /**
     * Exit a parse tree produced by the `cast`
     * labeled alternative in `FlinkSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCast?: (ctx: CastContext) => void;
    /**
     * Enter a parse tree produced by the `constantDefault`
     * labeled alternative in `FlinkSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterConstantDefault?: (ctx: ConstantDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `constantDefault`
     * labeled alternative in `FlinkSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitConstantDefault?: (ctx: ConstantDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `parenthesizedExpression`
     * labeled alternative in `FlinkSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `parenthesizedExpression`
     * labeled alternative in `FlinkSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `functionCall`
     * labeled alternative in `FlinkSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `functionCall`
     * labeled alternative in `FlinkSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `searchedCase`
     * labeled alternative in `FlinkSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSearchedCase?: (ctx: SearchedCaseContext) => void;
    /**
     * Exit a parse tree produced by the `searchedCase`
     * labeled alternative in `FlinkSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSearchedCase?: (ctx: SearchedCaseContext) => void;
    /**
     * Enter a parse tree produced by the `position`
     * labeled alternative in `FlinkSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterPosition?: (ctx: PositionContext) => void;
    /**
     * Exit a parse tree produced by the `position`
     * labeled alternative in `FlinkSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitPosition?: (ctx: PositionContext) => void;
    /**
     * Enter a parse tree produced by the `first`
     * labeled alternative in `FlinkSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterFirst?: (ctx: FirstContext) => void;
    /**
     * Exit a parse tree produced by the `first`
     * labeled alternative in `FlinkSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitFirst?: (ctx: FirstContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.functionNameCreate`.
     * @param ctx the parse tree
     */
    enterFunctionNameCreate?: (ctx: FunctionNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.functionNameCreate`.
     * @param ctx the parse tree
     */
    exitFunctionNameCreate?: (ctx: FunctionNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.functionName`.
     * @param ctx the parse tree
     */
    enterFunctionName?: (ctx: FunctionNameContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.functionName`.
     * @param ctx the parse tree
     */
    exitFunctionName?: (ctx: FunctionNameContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.functionNameAndParams`.
     * @param ctx the parse tree
     */
    enterFunctionNameAndParams?: (ctx: FunctionNameAndParamsContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.functionNameAndParams`.
     * @param ctx the parse tree
     */
    exitFunctionNameAndParams?: (ctx: FunctionNameAndParamsContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.functionNameWithParams`.
     * @param ctx the parse tree
     */
    enterFunctionNameWithParams?: (ctx: FunctionNameWithParamsContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.functionNameWithParams`.
     * @param ctx the parse tree
     */
    exitFunctionNameWithParams?: (ctx: FunctionNameWithParamsContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.functionParam`.
     * @param ctx the parse tree
     */
    enterFunctionParam?: (ctx: FunctionParamContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.functionParam`.
     * @param ctx the parse tree
     */
    exitFunctionParam?: (ctx: FunctionParamContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.dereferenceDefinition`.
     * @param ctx the parse tree
     */
    enterDereferenceDefinition?: (ctx: DereferenceDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.dereferenceDefinition`.
     * @param ctx the parse tree
     */
    exitDereferenceDefinition?: (ctx: DereferenceDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.correlationName`.
     * @param ctx the parse tree
     */
    enterCorrelationName?: (ctx: CorrelationNameContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.correlationName`.
     * @param ctx the parse tree
     */
    exitCorrelationName?: (ctx: CorrelationNameContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.qualifiedName`.
     * @param ctx the parse tree
     */
    enterQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.qualifiedName`.
     * @param ctx the parse tree
     */
    exitQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.timeIntervalExpression`.
     * @param ctx the parse tree
     */
    enterTimeIntervalExpression?: (ctx: TimeIntervalExpressionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.timeIntervalExpression`.
     * @param ctx the parse tree
     */
    exitTimeIntervalExpression?: (ctx: TimeIntervalExpressionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.errorCapturingMultiUnitsInterval`.
     * @param ctx the parse tree
     */
    enterErrorCapturingMultiUnitsInterval?: (ctx: ErrorCapturingMultiUnitsIntervalContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.errorCapturingMultiUnitsInterval`.
     * @param ctx the parse tree
     */
    exitErrorCapturingMultiUnitsInterval?: (ctx: ErrorCapturingMultiUnitsIntervalContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.multiUnitsInterval`.
     * @param ctx the parse tree
     */
    enterMultiUnitsInterval?: (ctx: MultiUnitsIntervalContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.multiUnitsInterval`.
     * @param ctx the parse tree
     */
    exitMultiUnitsInterval?: (ctx: MultiUnitsIntervalContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.errorCapturingUnitToUnitInterval`.
     * @param ctx the parse tree
     */
    enterErrorCapturingUnitToUnitInterval?: (ctx: ErrorCapturingUnitToUnitIntervalContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.errorCapturingUnitToUnitInterval`.
     * @param ctx the parse tree
     */
    exitErrorCapturingUnitToUnitInterval?: (ctx: ErrorCapturingUnitToUnitIntervalContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.unitToUnitInterval`.
     * @param ctx the parse tree
     */
    enterUnitToUnitInterval?: (ctx: UnitToUnitIntervalContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.unitToUnitInterval`.
     * @param ctx the parse tree
     */
    exitUnitToUnitInterval?: (ctx: UnitToUnitIntervalContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.intervalValue`.
     * @param ctx the parse tree
     */
    enterIntervalValue?: (ctx: IntervalValueContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.intervalValue`.
     * @param ctx the parse tree
     */
    exitIntervalValue?: (ctx: IntervalValueContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.tableAlias`.
     * @param ctx the parse tree
     */
    enterTableAlias?: (ctx: TableAliasContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.tableAlias`.
     * @param ctx the parse tree
     */
    exitTableAlias?: (ctx: TableAliasContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.errorCapturingIdentifier`.
     * @param ctx the parse tree
     */
    enterErrorCapturingIdentifier?: (ctx: ErrorCapturingIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.errorCapturingIdentifier`.
     * @param ctx the parse tree
     */
    exitErrorCapturingIdentifier?: (ctx: ErrorCapturingIdentifierContext) => void;
    /**
     * Enter a parse tree produced by the `errorIdent`
     * labeled alternative in `FlinkSqlParser.errorCapturingIdentifierExtra`.
     * @param ctx the parse tree
     */
    enterErrorIdent?: (ctx: ErrorIdentContext) => void;
    /**
     * Exit a parse tree produced by the `errorIdent`
     * labeled alternative in `FlinkSqlParser.errorCapturingIdentifierExtra`.
     * @param ctx the parse tree
     */
    exitErrorIdent?: (ctx: ErrorIdentContext) => void;
    /**
     * Enter a parse tree produced by the `realIdent`
     * labeled alternative in `FlinkSqlParser.errorCapturingIdentifierExtra`.
     * @param ctx the parse tree
     */
    enterRealIdent?: (ctx: RealIdentContext) => void;
    /**
     * Exit a parse tree produced by the `realIdent`
     * labeled alternative in `FlinkSqlParser.errorCapturingIdentifierExtra`.
     * @param ctx the parse tree
     */
    exitRealIdent?: (ctx: RealIdentContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.identifierList`.
     * @param ctx the parse tree
     */
    enterIdentifierList?: (ctx: IdentifierListContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.identifierList`.
     * @param ctx the parse tree
     */
    exitIdentifierList?: (ctx: IdentifierListContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.identifierSeq`.
     * @param ctx the parse tree
     */
    enterIdentifierSeq?: (ctx: IdentifierSeqContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.identifierSeq`.
     * @param ctx the parse tree
     */
    exitIdentifierSeq?: (ctx: IdentifierSeqContext) => void;
    /**
     * Enter a parse tree produced by the `unquotedIdentifierAlternative`
     * labeled alternative in `FlinkSqlParser.identifier`.
     * @param ctx the parse tree
     */
    enterUnquotedIdentifierAlternative?: (ctx: UnquotedIdentifierAlternativeContext) => void;
    /**
     * Exit a parse tree produced by the `unquotedIdentifierAlternative`
     * labeled alternative in `FlinkSqlParser.identifier`.
     * @param ctx the parse tree
     */
    exitUnquotedIdentifierAlternative?: (ctx: UnquotedIdentifierAlternativeContext) => void;
    /**
     * Enter a parse tree produced by the `quotedIdentifierAlternative`
     * labeled alternative in `FlinkSqlParser.identifier`.
     * @param ctx the parse tree
     */
    enterQuotedIdentifierAlternative?: (ctx: QuotedIdentifierAlternativeContext) => void;
    /**
     * Exit a parse tree produced by the `quotedIdentifierAlternative`
     * labeled alternative in `FlinkSqlParser.identifier`.
     * @param ctx the parse tree
     */
    exitQuotedIdentifierAlternative?: (ctx: QuotedIdentifierAlternativeContext) => void;
    /**
     * Enter a parse tree produced by the `nonReservedKeywordsAlternative`
     * labeled alternative in `FlinkSqlParser.identifier`.
     * @param ctx the parse tree
     */
    enterNonReservedKeywordsAlternative?: (ctx: NonReservedKeywordsAlternativeContext) => void;
    /**
     * Exit a parse tree produced by the `nonReservedKeywordsAlternative`
     * labeled alternative in `FlinkSqlParser.identifier`.
     * @param ctx the parse tree
     */
    exitNonReservedKeywordsAlternative?: (ctx: NonReservedKeywordsAlternativeContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.unquotedIdentifier`.
     * @param ctx the parse tree
     */
    enterUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.unquotedIdentifier`.
     * @param ctx the parse tree
     */
    exitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.quotedIdentifier`.
     * @param ctx the parse tree
     */
    enterQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.quotedIdentifier`.
     * @param ctx the parse tree
     */
    exitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.whenClause`.
     * @param ctx the parse tree
     */
    enterWhenClause?: (ctx: WhenClauseContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.whenClause`.
     * @param ctx the parse tree
     */
    exitWhenClause?: (ctx: WhenClauseContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.catalogPath`.
     * @param ctx the parse tree
     */
    enterCatalogPath?: (ctx: CatalogPathContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.catalogPath`.
     * @param ctx the parse tree
     */
    exitCatalogPath?: (ctx: CatalogPathContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.catalogPathCreate`.
     * @param ctx the parse tree
     */
    enterCatalogPathCreate?: (ctx: CatalogPathCreateContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.catalogPathCreate`.
     * @param ctx the parse tree
     */
    exitCatalogPathCreate?: (ctx: CatalogPathCreateContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.databasePath`.
     * @param ctx the parse tree
     */
    enterDatabasePath?: (ctx: DatabasePathContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.databasePath`.
     * @param ctx the parse tree
     */
    exitDatabasePath?: (ctx: DatabasePathContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.databasePathCreate`.
     * @param ctx the parse tree
     */
    enterDatabasePathCreate?: (ctx: DatabasePathCreateContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.databasePathCreate`.
     * @param ctx the parse tree
     */
    exitDatabasePathCreate?: (ctx: DatabasePathCreateContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.tablePathCreate`.
     * @param ctx the parse tree
     */
    enterTablePathCreate?: (ctx: TablePathCreateContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.tablePathCreate`.
     * @param ctx the parse tree
     */
    exitTablePathCreate?: (ctx: TablePathCreateContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.tablePath`.
     * @param ctx the parse tree
     */
    enterTablePath?: (ctx: TablePathContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.tablePath`.
     * @param ctx the parse tree
     */
    exitTablePath?: (ctx: TablePathContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.viewPath`.
     * @param ctx the parse tree
     */
    enterViewPath?: (ctx: ViewPathContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.viewPath`.
     * @param ctx the parse tree
     */
    exitViewPath?: (ctx: ViewPathContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.viewPathCreate`.
     * @param ctx the parse tree
     */
    enterViewPathCreate?: (ctx: ViewPathCreateContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.viewPathCreate`.
     * @param ctx the parse tree
     */
    exitViewPathCreate?: (ctx: ViewPathCreateContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.uid`.
     * @param ctx the parse tree
     */
    enterUid?: (ctx: UidContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.uid`.
     * @param ctx the parse tree
     */
    exitUid?: (ctx: UidContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.withOption`.
     * @param ctx the parse tree
     */
    enterWithOption?: (ctx: WithOptionContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.withOption`.
     * @param ctx the parse tree
     */
    exitWithOption?: (ctx: WithOptionContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.ifNotExists`.
     * @param ctx the parse tree
     */
    enterIfNotExists?: (ctx: IfNotExistsContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.ifNotExists`.
     * @param ctx the parse tree
     */
    exitIfNotExists?: (ctx: IfNotExistsContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.ifExists`.
     * @param ctx the parse tree
     */
    enterIfExists?: (ctx: IfExistsContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.ifExists`.
     * @param ctx the parse tree
     */
    exitIfExists?: (ctx: IfExistsContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.tablePropertyList`.
     * @param ctx the parse tree
     */
    enterTablePropertyList?: (ctx: TablePropertyListContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.tablePropertyList`.
     * @param ctx the parse tree
     */
    exitTablePropertyList?: (ctx: TablePropertyListContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.tableProperty`.
     * @param ctx the parse tree
     */
    enterTableProperty?: (ctx: TablePropertyContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.tableProperty`.
     * @param ctx the parse tree
     */
    exitTableProperty?: (ctx: TablePropertyContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.tablePropertyKey`.
     * @param ctx the parse tree
     */
    enterTablePropertyKey?: (ctx: TablePropertyKeyContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.tablePropertyKey`.
     * @param ctx the parse tree
     */
    exitTablePropertyKey?: (ctx: TablePropertyKeyContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.tablePropertyValue`.
     * @param ctx the parse tree
     */
    enterTablePropertyValue?: (ctx: TablePropertyValueContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.tablePropertyValue`.
     * @param ctx the parse tree
     */
    exitTablePropertyValue?: (ctx: TablePropertyValueContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.logicalOperator`.
     * @param ctx the parse tree
     */
    enterLogicalOperator?: (ctx: LogicalOperatorContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.logicalOperator`.
     * @param ctx the parse tree
     */
    exitLogicalOperator?: (ctx: LogicalOperatorContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.bitOperator`.
     * @param ctx the parse tree
     */
    enterBitOperator?: (ctx: BitOperatorContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.bitOperator`.
     * @param ctx the parse tree
     */
    exitBitOperator?: (ctx: BitOperatorContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.mathOperator`.
     * @param ctx the parse tree
     */
    enterMathOperator?: (ctx: MathOperatorContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.mathOperator`.
     * @param ctx the parse tree
     */
    exitMathOperator?: (ctx: MathOperatorContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.unaryOperator`.
     * @param ctx the parse tree
     */
    enterUnaryOperator?: (ctx: UnaryOperatorContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.unaryOperator`.
     * @param ctx the parse tree
     */
    exitUnaryOperator?: (ctx: UnaryOperatorContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.constant`.
     * @param ctx the parse tree
     */
    enterConstant?: (ctx: ConstantContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.constant`.
     * @param ctx the parse tree
     */
    exitConstant?: (ctx: ConstantContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.timePointLiteral`.
     * @param ctx the parse tree
     */
    enterTimePointLiteral?: (ctx: TimePointLiteralContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.timePointLiteral`.
     * @param ctx the parse tree
     */
    exitTimePointLiteral?: (ctx: TimePointLiteralContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.stringLiteral`.
     * @param ctx the parse tree
     */
    enterStringLiteral?: (ctx: StringLiteralContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.stringLiteral`.
     * @param ctx the parse tree
     */
    exitStringLiteral?: (ctx: StringLiteralContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.decimalLiteral`.
     * @param ctx the parse tree
     */
    enterDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.decimalLiteral`.
     * @param ctx the parse tree
     */
    exitDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.booleanLiteral`.
     * @param ctx the parse tree
     */
    enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.booleanLiteral`.
     * @param ctx the parse tree
     */
    exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.setQuantifier`.
     * @param ctx the parse tree
     */
    enterSetQuantifier?: (ctx: SetQuantifierContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.setQuantifier`.
     * @param ctx the parse tree
     */
    exitSetQuantifier?: (ctx: SetQuantifierContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.timePointUnit`.
     * @param ctx the parse tree
     */
    enterTimePointUnit?: (ctx: TimePointUnitContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.timePointUnit`.
     * @param ctx the parse tree
     */
    exitTimePointUnit?: (ctx: TimePointUnitContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.timeIntervalUnit`.
     * @param ctx the parse tree
     */
    enterTimeIntervalUnit?: (ctx: TimeIntervalUnitContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.timeIntervalUnit`.
     * @param ctx the parse tree
     */
    exitTimeIntervalUnit?: (ctx: TimeIntervalUnitContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.reservedKeywordsUsedAsFuncParam`.
     * @param ctx the parse tree
     */
    enterReservedKeywordsUsedAsFuncParam?: (ctx: ReservedKeywordsUsedAsFuncParamContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.reservedKeywordsUsedAsFuncParam`.
     * @param ctx the parse tree
     */
    exitReservedKeywordsUsedAsFuncParam?: (ctx: ReservedKeywordsUsedAsFuncParamContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.reservedKeywordsNoParamsUsedAsFuncName`.
     * @param ctx the parse tree
     */
    enterReservedKeywordsNoParamsUsedAsFuncName?: (ctx: ReservedKeywordsNoParamsUsedAsFuncNameContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.reservedKeywordsNoParamsUsedAsFuncName`.
     * @param ctx the parse tree
     */
    exitReservedKeywordsNoParamsUsedAsFuncName?: (ctx: ReservedKeywordsNoParamsUsedAsFuncNameContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.reservedKeywordsFollowParamsUsedAsFuncName`.
     * @param ctx the parse tree
     */
    enterReservedKeywordsFollowParamsUsedAsFuncName?: (ctx: ReservedKeywordsFollowParamsUsedAsFuncNameContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.reservedKeywordsFollowParamsUsedAsFuncName`.
     * @param ctx the parse tree
     */
    exitReservedKeywordsFollowParamsUsedAsFuncName?: (ctx: ReservedKeywordsFollowParamsUsedAsFuncNameContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.reservedKeywordsUsedAsFuncName`.
     * @param ctx the parse tree
     */
    enterReservedKeywordsUsedAsFuncName?: (ctx: ReservedKeywordsUsedAsFuncNameContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.reservedKeywordsUsedAsFuncName`.
     * @param ctx the parse tree
     */
    exitReservedKeywordsUsedAsFuncName?: (ctx: ReservedKeywordsUsedAsFuncNameContext) => void;
    /**
     * Enter a parse tree produced by `FlinkSqlParser.nonReservedKeywords`.
     * @param ctx the parse tree
     */
    enterNonReservedKeywords?: (ctx: NonReservedKeywordsContext) => void;
    /**
     * Exit a parse tree produced by `FlinkSqlParser.nonReservedKeywords`.
     * @param ctx the parse tree
     */
    exitNonReservedKeywords?: (ctx: NonReservedKeywordsContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

