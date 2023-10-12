// Generated from /Users/liuyi/Desktop/Projects/dtstack/dt-sql-parser/src/grammar/spark/SparkSqlParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./SparkSqlParser";
import { SingleStatementContext } from "./SparkSqlParser";
import { StatementContext } from "./SparkSqlParser";
import { TimezoneContext } from "./SparkSqlParser";
import { ConfigKeyContext } from "./SparkSqlParser";
import { ConfigValueContext } from "./SparkSqlParser";
import { UnsupportedHiveNativeCommandsContext } from "./SparkSqlParser";
import { CreateTableHeaderContext } from "./SparkSqlParser";
import { ReplaceTableHeaderContext } from "./SparkSqlParser";
import { BucketSpecContext } from "./SparkSqlParser";
import { SkewSpecContext } from "./SparkSqlParser";
import { LocationSpecContext } from "./SparkSqlParser";
import { CommentSpecContext } from "./SparkSqlParser";
import { QueryContext } from "./SparkSqlParser";
import { InsertIntoContext } from "./SparkSqlParser";
import { PartitionSpecLocationContext } from "./SparkSqlParser";
import { PartitionSpecContext } from "./SparkSqlParser";
import { PartitionValContext } from "./SparkSqlParser";
import { DbSchemaContext } from "./SparkSqlParser";
import { DbSchemasContext } from "./SparkSqlParser";
import { DescribeFuncNameContext } from "./SparkSqlParser";
import { DescribeColNameContext } from "./SparkSqlParser";
import { CtesContext } from "./SparkSqlParser";
import { NamedQueryContext } from "./SparkSqlParser";
import { TableProviderContext } from "./SparkSqlParser";
import { CreateTableClausesContext } from "./SparkSqlParser";
import { PropertyListContext } from "./SparkSqlParser";
import { PropertyContext } from "./SparkSqlParser";
import { PropertyKeyContext } from "./SparkSqlParser";
import { PropertyValueContext } from "./SparkSqlParser";
import { ExpressionPropertyListContext } from "./SparkSqlParser";
import { ExpressionPropertyContext } from "./SparkSqlParser";
import { ConstantListContext } from "./SparkSqlParser";
import { NestedConstantListContext } from "./SparkSqlParser";
import { CreateFileFormatContext } from "./SparkSqlParser";
import { FileFormatContext } from "./SparkSqlParser";
import { StorageHandlerContext } from "./SparkSqlParser";
import { ResourceContext } from "./SparkSqlParser";
import { DmlStatementNoWithContext } from "./SparkSqlParser";
import { DbSchemaNameContext } from "./SparkSqlParser";
import { DbSchemaNameCreateContext } from "./SparkSqlParser";
import { TableNameCreateContext } from "./SparkSqlParser";
import { TableNameContext } from "./SparkSqlParser";
import { ViewNameCreateContext } from "./SparkSqlParser";
import { ViewNameContext } from "./SparkSqlParser";
import { IdentifierReferenceContext } from "./SparkSqlParser";
import { QueryOrganizationContext } from "./SparkSqlParser";
import { MultiInsertQueryBodyContext } from "./SparkSqlParser";
import { QueryTermContext } from "./SparkSqlParser";
import { QueryPrimaryContext } from "./SparkSqlParser";
import { SortItemContext } from "./SparkSqlParser";
import { FromStatementContext } from "./SparkSqlParser";
import { FromStatementBodyContext } from "./SparkSqlParser";
import { QuerySpecificationContext } from "./SparkSqlParser";
import { TransformClauseContext } from "./SparkSqlParser";
import { SelectClauseContext } from "./SparkSqlParser";
import { SetClauseContext } from "./SparkSqlParser";
import { MatchedClauseContext } from "./SparkSqlParser";
import { NotMatchedClauseContext } from "./SparkSqlParser";
import { NotMatchedBySourceClauseContext } from "./SparkSqlParser";
import { MatchedActionContext } from "./SparkSqlParser";
import { NotMatchedActionContext } from "./SparkSqlParser";
import { NotMatchedBySourceActionContext } from "./SparkSqlParser";
import { AssignmentListContext } from "./SparkSqlParser";
import { AssignmentContext } from "./SparkSqlParser";
import { WhereClauseContext } from "./SparkSqlParser";
import { HavingClauseContext } from "./SparkSqlParser";
import { HintContext } from "./SparkSqlParser";
import { HintStatementContext } from "./SparkSqlParser";
import { FromClauseContext } from "./SparkSqlParser";
import { FunctionKindContext } from "./SparkSqlParser";
import { TemporalClauseContext } from "./SparkSqlParser";
import { AggregationClauseContext } from "./SparkSqlParser";
import { GroupByClauseContext } from "./SparkSqlParser";
import { GroupingAnalyticsContext } from "./SparkSqlParser";
import { GroupingElementContext } from "./SparkSqlParser";
import { GroupingSetContext } from "./SparkSqlParser";
import { PivotClauseContext } from "./SparkSqlParser";
import { PivotColumnContext } from "./SparkSqlParser";
import { PivotValueContext } from "./SparkSqlParser";
import { UnpivotClauseContext } from "./SparkSqlParser";
import { UnpivotNullClauseContext } from "./SparkSqlParser";
import { UnpivotOperatorContext } from "./SparkSqlParser";
import { UnpivotSingleValueColumnClauseContext } from "./SparkSqlParser";
import { UnpivotMultiValueColumnClauseContext } from "./SparkSqlParser";
import { UnpivotColumnSetContext } from "./SparkSqlParser";
import { UnpivotValueColumnContext } from "./SparkSqlParser";
import { UnpivotNameColumnContext } from "./SparkSqlParser";
import { UnpivotColumnAndAliasContext } from "./SparkSqlParser";
import { UnpivotColumnContext } from "./SparkSqlParser";
import { UnpivotAliasContext } from "./SparkSqlParser";
import { IfNotExistsContext } from "./SparkSqlParser";
import { IfExistsContext } from "./SparkSqlParser";
import { LateralViewContext } from "./SparkSqlParser";
import { SetQuantifierContext } from "./SparkSqlParser";
import { RelationContext } from "./SparkSqlParser";
import { RelationExtensionContext } from "./SparkSqlParser";
import { JoinRelationContext } from "./SparkSqlParser";
import { JoinTypeContext } from "./SparkSqlParser";
import { JoinCriteriaContext } from "./SparkSqlParser";
import { SampleContext } from "./SparkSqlParser";
import { SampleMethodContext } from "./SparkSqlParser";
import { IdentifierListContext } from "./SparkSqlParser";
import { IdentifierSeqContext } from "./SparkSqlParser";
import { OrderedIdentifierListContext } from "./SparkSqlParser";
import { OrderedIdentifierContext } from "./SparkSqlParser";
import { IdentifierCommentListContext } from "./SparkSqlParser";
import { IdentifierCommentContext } from "./SparkSqlParser";
import { RelationPrimaryContext } from "./SparkSqlParser";
import { InlineTableContext } from "./SparkSqlParser";
import { FunctionTableSubqueryArgumentContext } from "./SparkSqlParser";
import { TableArgumentPartitioningContext } from "./SparkSqlParser";
import { FunctionTableNamedArgumentExpressionContext } from "./SparkSqlParser";
import { FunctionTableReferenceArgumentContext } from "./SparkSqlParser";
import { FunctionTableArgumentContext } from "./SparkSqlParser";
import { FunctionTableContext } from "./SparkSqlParser";
import { TableAliasContext } from "./SparkSqlParser";
import { RowFormatContext } from "./SparkSqlParser";
import { MultipartIdentifierListContext } from "./SparkSqlParser";
import { MultipartIdentifierContext } from "./SparkSqlParser";
import { MultipartIdentifierPropertyListContext } from "./SparkSqlParser";
import { MultipartIdentifierPropertyContext } from "./SparkSqlParser";
import { TableIdentifierContext } from "./SparkSqlParser";
import { ViewIdentifierContext } from "./SparkSqlParser";
import { NamedExpressionContext } from "./SparkSqlParser";
import { NamedExpressionSeqContext } from "./SparkSqlParser";
import { PartitionFieldListContext } from "./SparkSqlParser";
import { PartitionFieldContext } from "./SparkSqlParser";
import { TransformContext } from "./SparkSqlParser";
import { TransformArgumentContext } from "./SparkSqlParser";
import { ExpressionContext } from "./SparkSqlParser";
import { NamedArgumentExpressionContext } from "./SparkSqlParser";
import { FunctionArgumentContext } from "./SparkSqlParser";
import { ExpressionSeqContext } from "./SparkSqlParser";
import { BooleanExpressionContext } from "./SparkSqlParser";
import { PredicateContext } from "./SparkSqlParser";
import { ValueExpressionContext } from "./SparkSqlParser";
import { DatetimeUnitContext } from "./SparkSqlParser";
import { PrimaryExpressionContext } from "./SparkSqlParser";
import { LiteralTypeContext } from "./SparkSqlParser";
import { ConstantContext } from "./SparkSqlParser";
import { ComparisonOperatorContext } from "./SparkSqlParser";
import { ArithmeticOperatorContext } from "./SparkSqlParser";
import { PredicateOperatorContext } from "./SparkSqlParser";
import { BooleanValueContext } from "./SparkSqlParser";
import { IntervalContext } from "./SparkSqlParser";
import { ErrorCapturingMultiUnitsIntervalContext } from "./SparkSqlParser";
import { MultiUnitsIntervalContext } from "./SparkSqlParser";
import { ErrorCapturingUnitToUnitIntervalContext } from "./SparkSqlParser";
import { UnitToUnitIntervalContext } from "./SparkSqlParser";
import { IntervalValueContext } from "./SparkSqlParser";
import { UnitInMultiUnitsContext } from "./SparkSqlParser";
import { UnitInUnitToUnitContext } from "./SparkSqlParser";
import { ColPositionContext } from "./SparkSqlParser";
import { TypeContext } from "./SparkSqlParser";
import { DataTypeContext } from "./SparkSqlParser";
import { QualifiedColTypeWithPositionListContext } from "./SparkSqlParser";
import { QualifiedColTypeWithPositionContext } from "./SparkSqlParser";
import { ColDefinitionDescriptorWithPositionContext } from "./SparkSqlParser";
import { DefaultExpressionContext } from "./SparkSqlParser";
import { VariableDefaultExpressionContext } from "./SparkSqlParser";
import { ColTypeListContext } from "./SparkSqlParser";
import { ColTypeContext } from "./SparkSqlParser";
import { CreateOrReplaceTableColTypeListContext } from "./SparkSqlParser";
import { CreateOrReplaceTableColTypeContext } from "./SparkSqlParser";
import { ColDefinitionOptionContext } from "./SparkSqlParser";
import { GenerationExpressionContext } from "./SparkSqlParser";
import { ComplexColTypeListContext } from "./SparkSqlParser";
import { ComplexColTypeContext } from "./SparkSqlParser";
import { WhenClauseContext } from "./SparkSqlParser";
import { WindowClauseContext } from "./SparkSqlParser";
import { NamedWindowContext } from "./SparkSqlParser";
import { WindowSpecContext } from "./SparkSqlParser";
import { WindowFrameContext } from "./SparkSqlParser";
import { FrameBoundContext } from "./SparkSqlParser";
import { QualifiedNameListContext } from "./SparkSqlParser";
import { FunctionNameContext } from "./SparkSqlParser";
import { FunctionNameCreateContext } from "./SparkSqlParser";
import { QualifiedNameContext } from "./SparkSqlParser";
import { ErrorCapturingIdentifierContext } from "./SparkSqlParser";
import { ErrorCapturingIdentifierExtraContext } from "./SparkSqlParser";
import { IdentifierContext } from "./SparkSqlParser";
import { StrictIdentifierContext } from "./SparkSqlParser";
import { QuotedIdentifierContext } from "./SparkSqlParser";
import { BackQuotedIdentifierContext } from "./SparkSqlParser";
import { NumberContext } from "./SparkSqlParser";
import { AlterColumnActionContext } from "./SparkSqlParser";
import { StringLitContext } from "./SparkSqlParser";
import { CommentContext } from "./SparkSqlParser";
import { VersionContext } from "./SparkSqlParser";
import { AnsiNonReservedContext } from "./SparkSqlParser";
import { StrictNonReservedContext } from "./SparkSqlParser";
import { NonReservedContext } from "./SparkSqlParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SparkSqlParser`.
 */
export interface SparkSqlParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SparkSqlParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.singleStatement`.
	 * @param ctx the parse tree
	 */
	enterSingleStatement?: (ctx: SingleStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.singleStatement`.
	 * @param ctx the parse tree
	 */
	exitSingleStatement?: (ctx: SingleStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.timezone`.
	 * @param ctx the parse tree
	 */
	enterTimezone?: (ctx: TimezoneContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.timezone`.
	 * @param ctx the parse tree
	 */
	exitTimezone?: (ctx: TimezoneContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.configKey`.
	 * @param ctx the parse tree
	 */
	enterConfigKey?: (ctx: ConfigKeyContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.configKey`.
	 * @param ctx the parse tree
	 */
	exitConfigKey?: (ctx: ConfigKeyContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.configValue`.
	 * @param ctx the parse tree
	 */
	enterConfigValue?: (ctx: ConfigValueContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.configValue`.
	 * @param ctx the parse tree
	 */
	exitConfigValue?: (ctx: ConfigValueContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.unsupportedHiveNativeCommands`.
	 * @param ctx the parse tree
	 */
	enterUnsupportedHiveNativeCommands?: (ctx: UnsupportedHiveNativeCommandsContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.unsupportedHiveNativeCommands`.
	 * @param ctx the parse tree
	 */
	exitUnsupportedHiveNativeCommands?: (ctx: UnsupportedHiveNativeCommandsContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.createTableHeader`.
	 * @param ctx the parse tree
	 */
	enterCreateTableHeader?: (ctx: CreateTableHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.createTableHeader`.
	 * @param ctx the parse tree
	 */
	exitCreateTableHeader?: (ctx: CreateTableHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.replaceTableHeader`.
	 * @param ctx the parse tree
	 */
	enterReplaceTableHeader?: (ctx: ReplaceTableHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.replaceTableHeader`.
	 * @param ctx the parse tree
	 */
	exitReplaceTableHeader?: (ctx: ReplaceTableHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.bucketSpec`.
	 * @param ctx the parse tree
	 */
	enterBucketSpec?: (ctx: BucketSpecContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.bucketSpec`.
	 * @param ctx the parse tree
	 */
	exitBucketSpec?: (ctx: BucketSpecContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.skewSpec`.
	 * @param ctx the parse tree
	 */
	enterSkewSpec?: (ctx: SkewSpecContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.skewSpec`.
	 * @param ctx the parse tree
	 */
	exitSkewSpec?: (ctx: SkewSpecContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.locationSpec`.
	 * @param ctx the parse tree
	 */
	enterLocationSpec?: (ctx: LocationSpecContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.locationSpec`.
	 * @param ctx the parse tree
	 */
	exitLocationSpec?: (ctx: LocationSpecContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.commentSpec`.
	 * @param ctx the parse tree
	 */
	enterCommentSpec?: (ctx: CommentSpecContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.commentSpec`.
	 * @param ctx the parse tree
	 */
	exitCommentSpec?: (ctx: CommentSpecContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.query`.
	 * @param ctx the parse tree
	 */
	enterQuery?: (ctx: QueryContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.query`.
	 * @param ctx the parse tree
	 */
	exitQuery?: (ctx: QueryContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.insertInto`.
	 * @param ctx the parse tree
	 */
	enterInsertInto?: (ctx: InsertIntoContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.insertInto`.
	 * @param ctx the parse tree
	 */
	exitInsertInto?: (ctx: InsertIntoContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.partitionSpecLocation`.
	 * @param ctx the parse tree
	 */
	enterPartitionSpecLocation?: (ctx: PartitionSpecLocationContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.partitionSpecLocation`.
	 * @param ctx the parse tree
	 */
	exitPartitionSpecLocation?: (ctx: PartitionSpecLocationContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.partitionSpec`.
	 * @param ctx the parse tree
	 */
	enterPartitionSpec?: (ctx: PartitionSpecContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.partitionSpec`.
	 * @param ctx the parse tree
	 */
	exitPartitionSpec?: (ctx: PartitionSpecContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.partitionVal`.
	 * @param ctx the parse tree
	 */
	enterPartitionVal?: (ctx: PartitionValContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.partitionVal`.
	 * @param ctx the parse tree
	 */
	exitPartitionVal?: (ctx: PartitionValContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.dbSchema`.
	 * @param ctx the parse tree
	 */
	enterDbSchema?: (ctx: DbSchemaContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.dbSchema`.
	 * @param ctx the parse tree
	 */
	exitDbSchema?: (ctx: DbSchemaContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.dbSchemas`.
	 * @param ctx the parse tree
	 */
	enterDbSchemas?: (ctx: DbSchemasContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.dbSchemas`.
	 * @param ctx the parse tree
	 */
	exitDbSchemas?: (ctx: DbSchemasContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.describeFuncName`.
	 * @param ctx the parse tree
	 */
	enterDescribeFuncName?: (ctx: DescribeFuncNameContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.describeFuncName`.
	 * @param ctx the parse tree
	 */
	exitDescribeFuncName?: (ctx: DescribeFuncNameContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.describeColName`.
	 * @param ctx the parse tree
	 */
	enterDescribeColName?: (ctx: DescribeColNameContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.describeColName`.
	 * @param ctx the parse tree
	 */
	exitDescribeColName?: (ctx: DescribeColNameContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.ctes`.
	 * @param ctx the parse tree
	 */
	enterCtes?: (ctx: CtesContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.ctes`.
	 * @param ctx the parse tree
	 */
	exitCtes?: (ctx: CtesContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.namedQuery`.
	 * @param ctx the parse tree
	 */
	enterNamedQuery?: (ctx: NamedQueryContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.namedQuery`.
	 * @param ctx the parse tree
	 */
	exitNamedQuery?: (ctx: NamedQueryContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.tableProvider`.
	 * @param ctx the parse tree
	 */
	enterTableProvider?: (ctx: TableProviderContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.tableProvider`.
	 * @param ctx the parse tree
	 */
	exitTableProvider?: (ctx: TableProviderContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.createTableClauses`.
	 * @param ctx the parse tree
	 */
	enterCreateTableClauses?: (ctx: CreateTableClausesContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.createTableClauses`.
	 * @param ctx the parse tree
	 */
	exitCreateTableClauses?: (ctx: CreateTableClausesContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.propertyList`.
	 * @param ctx the parse tree
	 */
	enterPropertyList?: (ctx: PropertyListContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.propertyList`.
	 * @param ctx the parse tree
	 */
	exitPropertyList?: (ctx: PropertyListContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.property`.
	 * @param ctx the parse tree
	 */
	enterProperty?: (ctx: PropertyContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.property`.
	 * @param ctx the parse tree
	 */
	exitProperty?: (ctx: PropertyContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.propertyKey`.
	 * @param ctx the parse tree
	 */
	enterPropertyKey?: (ctx: PropertyKeyContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.propertyKey`.
	 * @param ctx the parse tree
	 */
	exitPropertyKey?: (ctx: PropertyKeyContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.propertyValue`.
	 * @param ctx the parse tree
	 */
	enterPropertyValue?: (ctx: PropertyValueContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.propertyValue`.
	 * @param ctx the parse tree
	 */
	exitPropertyValue?: (ctx: PropertyValueContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.expressionPropertyList`.
	 * @param ctx the parse tree
	 */
	enterExpressionPropertyList?: (ctx: ExpressionPropertyListContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.expressionPropertyList`.
	 * @param ctx the parse tree
	 */
	exitExpressionPropertyList?: (ctx: ExpressionPropertyListContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.expressionProperty`.
	 * @param ctx the parse tree
	 */
	enterExpressionProperty?: (ctx: ExpressionPropertyContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.expressionProperty`.
	 * @param ctx the parse tree
	 */
	exitExpressionProperty?: (ctx: ExpressionPropertyContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.constantList`.
	 * @param ctx the parse tree
	 */
	enterConstantList?: (ctx: ConstantListContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.constantList`.
	 * @param ctx the parse tree
	 */
	exitConstantList?: (ctx: ConstantListContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.nestedConstantList`.
	 * @param ctx the parse tree
	 */
	enterNestedConstantList?: (ctx: NestedConstantListContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.nestedConstantList`.
	 * @param ctx the parse tree
	 */
	exitNestedConstantList?: (ctx: NestedConstantListContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.createFileFormat`.
	 * @param ctx the parse tree
	 */
	enterCreateFileFormat?: (ctx: CreateFileFormatContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.createFileFormat`.
	 * @param ctx the parse tree
	 */
	exitCreateFileFormat?: (ctx: CreateFileFormatContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.fileFormat`.
	 * @param ctx the parse tree
	 */
	enterFileFormat?: (ctx: FileFormatContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.fileFormat`.
	 * @param ctx the parse tree
	 */
	exitFileFormat?: (ctx: FileFormatContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.storageHandler`.
	 * @param ctx the parse tree
	 */
	enterStorageHandler?: (ctx: StorageHandlerContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.storageHandler`.
	 * @param ctx the parse tree
	 */
	exitStorageHandler?: (ctx: StorageHandlerContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.resource`.
	 * @param ctx the parse tree
	 */
	enterResource?: (ctx: ResourceContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.resource`.
	 * @param ctx the parse tree
	 */
	exitResource?: (ctx: ResourceContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.dmlStatementNoWith`.
	 * @param ctx the parse tree
	 */
	enterDmlStatementNoWith?: (ctx: DmlStatementNoWithContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.dmlStatementNoWith`.
	 * @param ctx the parse tree
	 */
	exitDmlStatementNoWith?: (ctx: DmlStatementNoWithContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.dbSchemaName`.
	 * @param ctx the parse tree
	 */
	enterDbSchemaName?: (ctx: DbSchemaNameContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.dbSchemaName`.
	 * @param ctx the parse tree
	 */
	exitDbSchemaName?: (ctx: DbSchemaNameContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.dbSchemaNameCreate`.
	 * @param ctx the parse tree
	 */
	enterDbSchemaNameCreate?: (ctx: DbSchemaNameCreateContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.dbSchemaNameCreate`.
	 * @param ctx the parse tree
	 */
	exitDbSchemaNameCreate?: (ctx: DbSchemaNameCreateContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.tableNameCreate`.
	 * @param ctx the parse tree
	 */
	enterTableNameCreate?: (ctx: TableNameCreateContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.tableNameCreate`.
	 * @param ctx the parse tree
	 */
	exitTableNameCreate?: (ctx: TableNameCreateContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.tableName`.
	 * @param ctx the parse tree
	 */
	enterTableName?: (ctx: TableNameContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.tableName`.
	 * @param ctx the parse tree
	 */
	exitTableName?: (ctx: TableNameContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.viewNameCreate`.
	 * @param ctx the parse tree
	 */
	enterViewNameCreate?: (ctx: ViewNameCreateContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.viewNameCreate`.
	 * @param ctx the parse tree
	 */
	exitViewNameCreate?: (ctx: ViewNameCreateContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.viewName`.
	 * @param ctx the parse tree
	 */
	enterViewName?: (ctx: ViewNameContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.viewName`.
	 * @param ctx the parse tree
	 */
	exitViewName?: (ctx: ViewNameContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.identifierReference`.
	 * @param ctx the parse tree
	 */
	enterIdentifierReference?: (ctx: IdentifierReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.identifierReference`.
	 * @param ctx the parse tree
	 */
	exitIdentifierReference?: (ctx: IdentifierReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.queryOrganization`.
	 * @param ctx the parse tree
	 */
	enterQueryOrganization?: (ctx: QueryOrganizationContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.queryOrganization`.
	 * @param ctx the parse tree
	 */
	exitQueryOrganization?: (ctx: QueryOrganizationContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.multiInsertQueryBody`.
	 * @param ctx the parse tree
	 */
	enterMultiInsertQueryBody?: (ctx: MultiInsertQueryBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.multiInsertQueryBody`.
	 * @param ctx the parse tree
	 */
	exitMultiInsertQueryBody?: (ctx: MultiInsertQueryBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	enterQueryTerm?: (ctx: QueryTermContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	exitQueryTerm?: (ctx: QueryTermContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	enterQueryPrimary?: (ctx: QueryPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	exitQueryPrimary?: (ctx: QueryPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.sortItem`.
	 * @param ctx the parse tree
	 */
	enterSortItem?: (ctx: SortItemContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.sortItem`.
	 * @param ctx the parse tree
	 */
	exitSortItem?: (ctx: SortItemContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.fromStatement`.
	 * @param ctx the parse tree
	 */
	enterFromStatement?: (ctx: FromStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.fromStatement`.
	 * @param ctx the parse tree
	 */
	exitFromStatement?: (ctx: FromStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.fromStatementBody`.
	 * @param ctx the parse tree
	 */
	enterFromStatementBody?: (ctx: FromStatementBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.fromStatementBody`.
	 * @param ctx the parse tree
	 */
	exitFromStatementBody?: (ctx: FromStatementBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.querySpecification`.
	 * @param ctx the parse tree
	 */
	enterQuerySpecification?: (ctx: QuerySpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.querySpecification`.
	 * @param ctx the parse tree
	 */
	exitQuerySpecification?: (ctx: QuerySpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.transformClause`.
	 * @param ctx the parse tree
	 */
	enterTransformClause?: (ctx: TransformClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.transformClause`.
	 * @param ctx the parse tree
	 */
	exitTransformClause?: (ctx: TransformClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.selectClause`.
	 * @param ctx the parse tree
	 */
	enterSelectClause?: (ctx: SelectClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.selectClause`.
	 * @param ctx the parse tree
	 */
	exitSelectClause?: (ctx: SelectClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.setClause`.
	 * @param ctx the parse tree
	 */
	enterSetClause?: (ctx: SetClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.setClause`.
	 * @param ctx the parse tree
	 */
	exitSetClause?: (ctx: SetClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.matchedClause`.
	 * @param ctx the parse tree
	 */
	enterMatchedClause?: (ctx: MatchedClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.matchedClause`.
	 * @param ctx the parse tree
	 */
	exitMatchedClause?: (ctx: MatchedClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.notMatchedClause`.
	 * @param ctx the parse tree
	 */
	enterNotMatchedClause?: (ctx: NotMatchedClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.notMatchedClause`.
	 * @param ctx the parse tree
	 */
	exitNotMatchedClause?: (ctx: NotMatchedClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.notMatchedBySourceClause`.
	 * @param ctx the parse tree
	 */
	enterNotMatchedBySourceClause?: (ctx: NotMatchedBySourceClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.notMatchedBySourceClause`.
	 * @param ctx the parse tree
	 */
	exitNotMatchedBySourceClause?: (ctx: NotMatchedBySourceClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.matchedAction`.
	 * @param ctx the parse tree
	 */
	enterMatchedAction?: (ctx: MatchedActionContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.matchedAction`.
	 * @param ctx the parse tree
	 */
	exitMatchedAction?: (ctx: MatchedActionContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.notMatchedAction`.
	 * @param ctx the parse tree
	 */
	enterNotMatchedAction?: (ctx: NotMatchedActionContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.notMatchedAction`.
	 * @param ctx the parse tree
	 */
	exitNotMatchedAction?: (ctx: NotMatchedActionContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.notMatchedBySourceAction`.
	 * @param ctx the parse tree
	 */
	enterNotMatchedBySourceAction?: (ctx: NotMatchedBySourceActionContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.notMatchedBySourceAction`.
	 * @param ctx the parse tree
	 */
	exitNotMatchedBySourceAction?: (ctx: NotMatchedBySourceActionContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.assignmentList`.
	 * @param ctx the parse tree
	 */
	enterAssignmentList?: (ctx: AssignmentListContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.assignmentList`.
	 * @param ctx the parse tree
	 */
	exitAssignmentList?: (ctx: AssignmentListContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.whereClause`.
	 * @param ctx the parse tree
	 */
	enterWhereClause?: (ctx: WhereClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.whereClause`.
	 * @param ctx the parse tree
	 */
	exitWhereClause?: (ctx: WhereClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.havingClause`.
	 * @param ctx the parse tree
	 */
	enterHavingClause?: (ctx: HavingClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.havingClause`.
	 * @param ctx the parse tree
	 */
	exitHavingClause?: (ctx: HavingClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.hint`.
	 * @param ctx the parse tree
	 */
	enterHint?: (ctx: HintContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.hint`.
	 * @param ctx the parse tree
	 */
	exitHint?: (ctx: HintContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.hintStatement`.
	 * @param ctx the parse tree
	 */
	enterHintStatement?: (ctx: HintStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.hintStatement`.
	 * @param ctx the parse tree
	 */
	exitHintStatement?: (ctx: HintStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.fromClause`.
	 * @param ctx the parse tree
	 */
	enterFromClause?: (ctx: FromClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.fromClause`.
	 * @param ctx the parse tree
	 */
	exitFromClause?: (ctx: FromClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.functionKind`.
	 * @param ctx the parse tree
	 */
	enterFunctionKind?: (ctx: FunctionKindContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.functionKind`.
	 * @param ctx the parse tree
	 */
	exitFunctionKind?: (ctx: FunctionKindContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.temporalClause`.
	 * @param ctx the parse tree
	 */
	enterTemporalClause?: (ctx: TemporalClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.temporalClause`.
	 * @param ctx the parse tree
	 */
	exitTemporalClause?: (ctx: TemporalClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.aggregationClause`.
	 * @param ctx the parse tree
	 */
	enterAggregationClause?: (ctx: AggregationClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.aggregationClause`.
	 * @param ctx the parse tree
	 */
	exitAggregationClause?: (ctx: AggregationClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.groupByClause`.
	 * @param ctx the parse tree
	 */
	enterGroupByClause?: (ctx: GroupByClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.groupByClause`.
	 * @param ctx the parse tree
	 */
	exitGroupByClause?: (ctx: GroupByClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.groupingAnalytics`.
	 * @param ctx the parse tree
	 */
	enterGroupingAnalytics?: (ctx: GroupingAnalyticsContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.groupingAnalytics`.
	 * @param ctx the parse tree
	 */
	exitGroupingAnalytics?: (ctx: GroupingAnalyticsContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	enterGroupingElement?: (ctx: GroupingElementContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	exitGroupingElement?: (ctx: GroupingElementContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.groupingSet`.
	 * @param ctx the parse tree
	 */
	enterGroupingSet?: (ctx: GroupingSetContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.groupingSet`.
	 * @param ctx the parse tree
	 */
	exitGroupingSet?: (ctx: GroupingSetContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.pivotClause`.
	 * @param ctx the parse tree
	 */
	enterPivotClause?: (ctx: PivotClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.pivotClause`.
	 * @param ctx the parse tree
	 */
	exitPivotClause?: (ctx: PivotClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.pivotColumn`.
	 * @param ctx the parse tree
	 */
	enterPivotColumn?: (ctx: PivotColumnContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.pivotColumn`.
	 * @param ctx the parse tree
	 */
	exitPivotColumn?: (ctx: PivotColumnContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.pivotValue`.
	 * @param ctx the parse tree
	 */
	enterPivotValue?: (ctx: PivotValueContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.pivotValue`.
	 * @param ctx the parse tree
	 */
	exitPivotValue?: (ctx: PivotValueContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.unpivotClause`.
	 * @param ctx the parse tree
	 */
	enterUnpivotClause?: (ctx: UnpivotClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.unpivotClause`.
	 * @param ctx the parse tree
	 */
	exitUnpivotClause?: (ctx: UnpivotClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.unpivotNullClause`.
	 * @param ctx the parse tree
	 */
	enterUnpivotNullClause?: (ctx: UnpivotNullClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.unpivotNullClause`.
	 * @param ctx the parse tree
	 */
	exitUnpivotNullClause?: (ctx: UnpivotNullClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.unpivotOperator`.
	 * @param ctx the parse tree
	 */
	enterUnpivotOperator?: (ctx: UnpivotOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.unpivotOperator`.
	 * @param ctx the parse tree
	 */
	exitUnpivotOperator?: (ctx: UnpivotOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.unpivotSingleValueColumnClause`.
	 * @param ctx the parse tree
	 */
	enterUnpivotSingleValueColumnClause?: (ctx: UnpivotSingleValueColumnClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.unpivotSingleValueColumnClause`.
	 * @param ctx the parse tree
	 */
	exitUnpivotSingleValueColumnClause?: (ctx: UnpivotSingleValueColumnClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.unpivotMultiValueColumnClause`.
	 * @param ctx the parse tree
	 */
	enterUnpivotMultiValueColumnClause?: (ctx: UnpivotMultiValueColumnClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.unpivotMultiValueColumnClause`.
	 * @param ctx the parse tree
	 */
	exitUnpivotMultiValueColumnClause?: (ctx: UnpivotMultiValueColumnClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.unpivotColumnSet`.
	 * @param ctx the parse tree
	 */
	enterUnpivotColumnSet?: (ctx: UnpivotColumnSetContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.unpivotColumnSet`.
	 * @param ctx the parse tree
	 */
	exitUnpivotColumnSet?: (ctx: UnpivotColumnSetContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.unpivotValueColumn`.
	 * @param ctx the parse tree
	 */
	enterUnpivotValueColumn?: (ctx: UnpivotValueColumnContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.unpivotValueColumn`.
	 * @param ctx the parse tree
	 */
	exitUnpivotValueColumn?: (ctx: UnpivotValueColumnContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.unpivotNameColumn`.
	 * @param ctx the parse tree
	 */
	enterUnpivotNameColumn?: (ctx: UnpivotNameColumnContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.unpivotNameColumn`.
	 * @param ctx the parse tree
	 */
	exitUnpivotNameColumn?: (ctx: UnpivotNameColumnContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.unpivotColumnAndAlias`.
	 * @param ctx the parse tree
	 */
	enterUnpivotColumnAndAlias?: (ctx: UnpivotColumnAndAliasContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.unpivotColumnAndAlias`.
	 * @param ctx the parse tree
	 */
	exitUnpivotColumnAndAlias?: (ctx: UnpivotColumnAndAliasContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.unpivotColumn`.
	 * @param ctx the parse tree
	 */
	enterUnpivotColumn?: (ctx: UnpivotColumnContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.unpivotColumn`.
	 * @param ctx the parse tree
	 */
	exitUnpivotColumn?: (ctx: UnpivotColumnContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.unpivotAlias`.
	 * @param ctx the parse tree
	 */
	enterUnpivotAlias?: (ctx: UnpivotAliasContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.unpivotAlias`.
	 * @param ctx the parse tree
	 */
	exitUnpivotAlias?: (ctx: UnpivotAliasContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.ifNotExists`.
	 * @param ctx the parse tree
	 */
	enterIfNotExists?: (ctx: IfNotExistsContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.ifNotExists`.
	 * @param ctx the parse tree
	 */
	exitIfNotExists?: (ctx: IfNotExistsContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.ifExists`.
	 * @param ctx the parse tree
	 */
	enterIfExists?: (ctx: IfExistsContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.ifExists`.
	 * @param ctx the parse tree
	 */
	exitIfExists?: (ctx: IfExistsContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.lateralView`.
	 * @param ctx the parse tree
	 */
	enterLateralView?: (ctx: LateralViewContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.lateralView`.
	 * @param ctx the parse tree
	 */
	exitLateralView?: (ctx: LateralViewContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.setQuantifier`.
	 * @param ctx the parse tree
	 */
	enterSetQuantifier?: (ctx: SetQuantifierContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.setQuantifier`.
	 * @param ctx the parse tree
	 */
	exitSetQuantifier?: (ctx: SetQuantifierContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.relation`.
	 * @param ctx the parse tree
	 */
	enterRelation?: (ctx: RelationContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.relation`.
	 * @param ctx the parse tree
	 */
	exitRelation?: (ctx: RelationContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.relationExtension`.
	 * @param ctx the parse tree
	 */
	enterRelationExtension?: (ctx: RelationExtensionContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.relationExtension`.
	 * @param ctx the parse tree
	 */
	exitRelationExtension?: (ctx: RelationExtensionContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.joinRelation`.
	 * @param ctx the parse tree
	 */
	enterJoinRelation?: (ctx: JoinRelationContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.joinRelation`.
	 * @param ctx the parse tree
	 */
	exitJoinRelation?: (ctx: JoinRelationContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.joinType`.
	 * @param ctx the parse tree
	 */
	enterJoinType?: (ctx: JoinTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.joinType`.
	 * @param ctx the parse tree
	 */
	exitJoinType?: (ctx: JoinTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.joinCriteria`.
	 * @param ctx the parse tree
	 */
	enterJoinCriteria?: (ctx: JoinCriteriaContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.joinCriteria`.
	 * @param ctx the parse tree
	 */
	exitJoinCriteria?: (ctx: JoinCriteriaContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.sample`.
	 * @param ctx the parse tree
	 */
	enterSample?: (ctx: SampleContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.sample`.
	 * @param ctx the parse tree
	 */
	exitSample?: (ctx: SampleContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.sampleMethod`.
	 * @param ctx the parse tree
	 */
	enterSampleMethod?: (ctx: SampleMethodContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.sampleMethod`.
	 * @param ctx the parse tree
	 */
	exitSampleMethod?: (ctx: SampleMethodContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.identifierList`.
	 * @param ctx the parse tree
	 */
	enterIdentifierList?: (ctx: IdentifierListContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.identifierList`.
	 * @param ctx the parse tree
	 */
	exitIdentifierList?: (ctx: IdentifierListContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.identifierSeq`.
	 * @param ctx the parse tree
	 */
	enterIdentifierSeq?: (ctx: IdentifierSeqContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.identifierSeq`.
	 * @param ctx the parse tree
	 */
	exitIdentifierSeq?: (ctx: IdentifierSeqContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.orderedIdentifierList`.
	 * @param ctx the parse tree
	 */
	enterOrderedIdentifierList?: (ctx: OrderedIdentifierListContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.orderedIdentifierList`.
	 * @param ctx the parse tree
	 */
	exitOrderedIdentifierList?: (ctx: OrderedIdentifierListContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.orderedIdentifier`.
	 * @param ctx the parse tree
	 */
	enterOrderedIdentifier?: (ctx: OrderedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.orderedIdentifier`.
	 * @param ctx the parse tree
	 */
	exitOrderedIdentifier?: (ctx: OrderedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.identifierCommentList`.
	 * @param ctx the parse tree
	 */
	enterIdentifierCommentList?: (ctx: IdentifierCommentListContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.identifierCommentList`.
	 * @param ctx the parse tree
	 */
	exitIdentifierCommentList?: (ctx: IdentifierCommentListContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.identifierComment`.
	 * @param ctx the parse tree
	 */
	enterIdentifierComment?: (ctx: IdentifierCommentContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.identifierComment`.
	 * @param ctx the parse tree
	 */
	exitIdentifierComment?: (ctx: IdentifierCommentContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterRelationPrimary?: (ctx: RelationPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitRelationPrimary?: (ctx: RelationPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.inlineTable`.
	 * @param ctx the parse tree
	 */
	enterInlineTable?: (ctx: InlineTableContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.inlineTable`.
	 * @param ctx the parse tree
	 */
	exitInlineTable?: (ctx: InlineTableContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.functionTableSubqueryArgument`.
	 * @param ctx the parse tree
	 */
	enterFunctionTableSubqueryArgument?: (ctx: FunctionTableSubqueryArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.functionTableSubqueryArgument`.
	 * @param ctx the parse tree
	 */
	exitFunctionTableSubqueryArgument?: (ctx: FunctionTableSubqueryArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.tableArgumentPartitioning`.
	 * @param ctx the parse tree
	 */
	enterTableArgumentPartitioning?: (ctx: TableArgumentPartitioningContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.tableArgumentPartitioning`.
	 * @param ctx the parse tree
	 */
	exitTableArgumentPartitioning?: (ctx: TableArgumentPartitioningContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.functionTableNamedArgumentExpression`.
	 * @param ctx the parse tree
	 */
	enterFunctionTableNamedArgumentExpression?: (ctx: FunctionTableNamedArgumentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.functionTableNamedArgumentExpression`.
	 * @param ctx the parse tree
	 */
	exitFunctionTableNamedArgumentExpression?: (ctx: FunctionTableNamedArgumentExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.functionTableReferenceArgument`.
	 * @param ctx the parse tree
	 */
	enterFunctionTableReferenceArgument?: (ctx: FunctionTableReferenceArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.functionTableReferenceArgument`.
	 * @param ctx the parse tree
	 */
	exitFunctionTableReferenceArgument?: (ctx: FunctionTableReferenceArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.functionTableArgument`.
	 * @param ctx the parse tree
	 */
	enterFunctionTableArgument?: (ctx: FunctionTableArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.functionTableArgument`.
	 * @param ctx the parse tree
	 */
	exitFunctionTableArgument?: (ctx: FunctionTableArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.functionTable`.
	 * @param ctx the parse tree
	 */
	enterFunctionTable?: (ctx: FunctionTableContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.functionTable`.
	 * @param ctx the parse tree
	 */
	exitFunctionTable?: (ctx: FunctionTableContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.tableAlias`.
	 * @param ctx the parse tree
	 */
	enterTableAlias?: (ctx: TableAliasContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.tableAlias`.
	 * @param ctx the parse tree
	 */
	exitTableAlias?: (ctx: TableAliasContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.rowFormat`.
	 * @param ctx the parse tree
	 */
	enterRowFormat?: (ctx: RowFormatContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.rowFormat`.
	 * @param ctx the parse tree
	 */
	exitRowFormat?: (ctx: RowFormatContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.multipartIdentifierList`.
	 * @param ctx the parse tree
	 */
	enterMultipartIdentifierList?: (ctx: MultipartIdentifierListContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.multipartIdentifierList`.
	 * @param ctx the parse tree
	 */
	exitMultipartIdentifierList?: (ctx: MultipartIdentifierListContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.multipartIdentifier`.
	 * @param ctx the parse tree
	 */
	enterMultipartIdentifier?: (ctx: MultipartIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.multipartIdentifier`.
	 * @param ctx the parse tree
	 */
	exitMultipartIdentifier?: (ctx: MultipartIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.multipartIdentifierPropertyList`.
	 * @param ctx the parse tree
	 */
	enterMultipartIdentifierPropertyList?: (ctx: MultipartIdentifierPropertyListContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.multipartIdentifierPropertyList`.
	 * @param ctx the parse tree
	 */
	exitMultipartIdentifierPropertyList?: (ctx: MultipartIdentifierPropertyListContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.multipartIdentifierProperty`.
	 * @param ctx the parse tree
	 */
	enterMultipartIdentifierProperty?: (ctx: MultipartIdentifierPropertyContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.multipartIdentifierProperty`.
	 * @param ctx the parse tree
	 */
	exitMultipartIdentifierProperty?: (ctx: MultipartIdentifierPropertyContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.tableIdentifier`.
	 * @param ctx the parse tree
	 */
	enterTableIdentifier?: (ctx: TableIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.tableIdentifier`.
	 * @param ctx the parse tree
	 */
	exitTableIdentifier?: (ctx: TableIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.viewIdentifier`.
	 * @param ctx the parse tree
	 */
	enterViewIdentifier?: (ctx: ViewIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.viewIdentifier`.
	 * @param ctx the parse tree
	 */
	exitViewIdentifier?: (ctx: ViewIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.namedExpression`.
	 * @param ctx the parse tree
	 */
	enterNamedExpression?: (ctx: NamedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.namedExpression`.
	 * @param ctx the parse tree
	 */
	exitNamedExpression?: (ctx: NamedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.namedExpressionSeq`.
	 * @param ctx the parse tree
	 */
	enterNamedExpressionSeq?: (ctx: NamedExpressionSeqContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.namedExpressionSeq`.
	 * @param ctx the parse tree
	 */
	exitNamedExpressionSeq?: (ctx: NamedExpressionSeqContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.partitionFieldList`.
	 * @param ctx the parse tree
	 */
	enterPartitionFieldList?: (ctx: PartitionFieldListContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.partitionFieldList`.
	 * @param ctx the parse tree
	 */
	exitPartitionFieldList?: (ctx: PartitionFieldListContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.partitionField`.
	 * @param ctx the parse tree
	 */
	enterPartitionField?: (ctx: PartitionFieldContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.partitionField`.
	 * @param ctx the parse tree
	 */
	exitPartitionField?: (ctx: PartitionFieldContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.transform`.
	 * @param ctx the parse tree
	 */
	enterTransform?: (ctx: TransformContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.transform`.
	 * @param ctx the parse tree
	 */
	exitTransform?: (ctx: TransformContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.transformArgument`.
	 * @param ctx the parse tree
	 */
	enterTransformArgument?: (ctx: TransformArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.transformArgument`.
	 * @param ctx the parse tree
	 */
	exitTransformArgument?: (ctx: TransformArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.namedArgumentExpression`.
	 * @param ctx the parse tree
	 */
	enterNamedArgumentExpression?: (ctx: NamedArgumentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.namedArgumentExpression`.
	 * @param ctx the parse tree
	 */
	exitNamedArgumentExpression?: (ctx: NamedArgumentExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.functionArgument`.
	 * @param ctx the parse tree
	 */
	enterFunctionArgument?: (ctx: FunctionArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.functionArgument`.
	 * @param ctx the parse tree
	 */
	exitFunctionArgument?: (ctx: FunctionArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.expressionSeq`.
	 * @param ctx the parse tree
	 */
	enterExpressionSeq?: (ctx: ExpressionSeqContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.expressionSeq`.
	 * @param ctx the parse tree
	 */
	exitExpressionSeq?: (ctx: ExpressionSeqContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanExpression?: (ctx: BooleanExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanExpression?: (ctx: BooleanExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterPredicate?: (ctx: PredicateContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitPredicate?: (ctx: PredicateContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterValueExpression?: (ctx: ValueExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitValueExpression?: (ctx: ValueExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.datetimeUnit`.
	 * @param ctx the parse tree
	 */
	enterDatetimeUnit?: (ctx: DatetimeUnitContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.datetimeUnit`.
	 * @param ctx the parse tree
	 */
	exitDatetimeUnit?: (ctx: DatetimeUnitContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.literalType`.
	 * @param ctx the parse tree
	 */
	enterLiteralType?: (ctx: LiteralTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.literalType`.
	 * @param ctx the parse tree
	 */
	exitLiteralType?: (ctx: LiteralTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.arithmeticOperator`.
	 * @param ctx the parse tree
	 */
	enterArithmeticOperator?: (ctx: ArithmeticOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.arithmeticOperator`.
	 * @param ctx the parse tree
	 */
	exitArithmeticOperator?: (ctx: ArithmeticOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.predicateOperator`.
	 * @param ctx the parse tree
	 */
	enterPredicateOperator?: (ctx: PredicateOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.predicateOperator`.
	 * @param ctx the parse tree
	 */
	exitPredicateOperator?: (ctx: PredicateOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.booleanValue`.
	 * @param ctx the parse tree
	 */
	enterBooleanValue?: (ctx: BooleanValueContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.booleanValue`.
	 * @param ctx the parse tree
	 */
	exitBooleanValue?: (ctx: BooleanValueContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.interval`.
	 * @param ctx the parse tree
	 */
	enterInterval?: (ctx: IntervalContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.interval`.
	 * @param ctx the parse tree
	 */
	exitInterval?: (ctx: IntervalContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.errorCapturingMultiUnitsInterval`.
	 * @param ctx the parse tree
	 */
	enterErrorCapturingMultiUnitsInterval?: (ctx: ErrorCapturingMultiUnitsIntervalContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.errorCapturingMultiUnitsInterval`.
	 * @param ctx the parse tree
	 */
	exitErrorCapturingMultiUnitsInterval?: (ctx: ErrorCapturingMultiUnitsIntervalContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.multiUnitsInterval`.
	 * @param ctx the parse tree
	 */
	enterMultiUnitsInterval?: (ctx: MultiUnitsIntervalContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.multiUnitsInterval`.
	 * @param ctx the parse tree
	 */
	exitMultiUnitsInterval?: (ctx: MultiUnitsIntervalContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.errorCapturingUnitToUnitInterval`.
	 * @param ctx the parse tree
	 */
	enterErrorCapturingUnitToUnitInterval?: (ctx: ErrorCapturingUnitToUnitIntervalContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.errorCapturingUnitToUnitInterval`.
	 * @param ctx the parse tree
	 */
	exitErrorCapturingUnitToUnitInterval?: (ctx: ErrorCapturingUnitToUnitIntervalContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.unitToUnitInterval`.
	 * @param ctx the parse tree
	 */
	enterUnitToUnitInterval?: (ctx: UnitToUnitIntervalContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.unitToUnitInterval`.
	 * @param ctx the parse tree
	 */
	exitUnitToUnitInterval?: (ctx: UnitToUnitIntervalContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.intervalValue`.
	 * @param ctx the parse tree
	 */
	enterIntervalValue?: (ctx: IntervalValueContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.intervalValue`.
	 * @param ctx the parse tree
	 */
	exitIntervalValue?: (ctx: IntervalValueContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.unitInMultiUnits`.
	 * @param ctx the parse tree
	 */
	enterUnitInMultiUnits?: (ctx: UnitInMultiUnitsContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.unitInMultiUnits`.
	 * @param ctx the parse tree
	 */
	exitUnitInMultiUnits?: (ctx: UnitInMultiUnitsContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.unitInUnitToUnit`.
	 * @param ctx the parse tree
	 */
	enterUnitInUnitToUnit?: (ctx: UnitInUnitToUnitContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.unitInUnitToUnit`.
	 * @param ctx the parse tree
	 */
	exitUnitInUnitToUnit?: (ctx: UnitInUnitToUnitContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.colPosition`.
	 * @param ctx the parse tree
	 */
	enterColPosition?: (ctx: ColPositionContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.colPosition`.
	 * @param ctx the parse tree
	 */
	exitColPosition?: (ctx: ColPositionContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.dataType`.
	 * @param ctx the parse tree
	 */
	enterDataType?: (ctx: DataTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.dataType`.
	 * @param ctx the parse tree
	 */
	exitDataType?: (ctx: DataTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.qualifiedColTypeWithPositionList`.
	 * @param ctx the parse tree
	 */
	enterQualifiedColTypeWithPositionList?: (ctx: QualifiedColTypeWithPositionListContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.qualifiedColTypeWithPositionList`.
	 * @param ctx the parse tree
	 */
	exitQualifiedColTypeWithPositionList?: (ctx: QualifiedColTypeWithPositionListContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.qualifiedColTypeWithPosition`.
	 * @param ctx the parse tree
	 */
	enterQualifiedColTypeWithPosition?: (ctx: QualifiedColTypeWithPositionContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.qualifiedColTypeWithPosition`.
	 * @param ctx the parse tree
	 */
	exitQualifiedColTypeWithPosition?: (ctx: QualifiedColTypeWithPositionContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.colDefinitionDescriptorWithPosition`.
	 * @param ctx the parse tree
	 */
	enterColDefinitionDescriptorWithPosition?: (ctx: ColDefinitionDescriptorWithPositionContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.colDefinitionDescriptorWithPosition`.
	 * @param ctx the parse tree
	 */
	exitColDefinitionDescriptorWithPosition?: (ctx: ColDefinitionDescriptorWithPositionContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.defaultExpression`.
	 * @param ctx the parse tree
	 */
	enterDefaultExpression?: (ctx: DefaultExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.defaultExpression`.
	 * @param ctx the parse tree
	 */
	exitDefaultExpression?: (ctx: DefaultExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.variableDefaultExpression`.
	 * @param ctx the parse tree
	 */
	enterVariableDefaultExpression?: (ctx: VariableDefaultExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.variableDefaultExpression`.
	 * @param ctx the parse tree
	 */
	exitVariableDefaultExpression?: (ctx: VariableDefaultExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.colTypeList`.
	 * @param ctx the parse tree
	 */
	enterColTypeList?: (ctx: ColTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.colTypeList`.
	 * @param ctx the parse tree
	 */
	exitColTypeList?: (ctx: ColTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.colType`.
	 * @param ctx the parse tree
	 */
	enterColType?: (ctx: ColTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.colType`.
	 * @param ctx the parse tree
	 */
	exitColType?: (ctx: ColTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.createOrReplaceTableColTypeList`.
	 * @param ctx the parse tree
	 */
	enterCreateOrReplaceTableColTypeList?: (ctx: CreateOrReplaceTableColTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.createOrReplaceTableColTypeList`.
	 * @param ctx the parse tree
	 */
	exitCreateOrReplaceTableColTypeList?: (ctx: CreateOrReplaceTableColTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.createOrReplaceTableColType`.
	 * @param ctx the parse tree
	 */
	enterCreateOrReplaceTableColType?: (ctx: CreateOrReplaceTableColTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.createOrReplaceTableColType`.
	 * @param ctx the parse tree
	 */
	exitCreateOrReplaceTableColType?: (ctx: CreateOrReplaceTableColTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.colDefinitionOption`.
	 * @param ctx the parse tree
	 */
	enterColDefinitionOption?: (ctx: ColDefinitionOptionContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.colDefinitionOption`.
	 * @param ctx the parse tree
	 */
	exitColDefinitionOption?: (ctx: ColDefinitionOptionContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.generationExpression`.
	 * @param ctx the parse tree
	 */
	enterGenerationExpression?: (ctx: GenerationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.generationExpression`.
	 * @param ctx the parse tree
	 */
	exitGenerationExpression?: (ctx: GenerationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.complexColTypeList`.
	 * @param ctx the parse tree
	 */
	enterComplexColTypeList?: (ctx: ComplexColTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.complexColTypeList`.
	 * @param ctx the parse tree
	 */
	exitComplexColTypeList?: (ctx: ComplexColTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.complexColType`.
	 * @param ctx the parse tree
	 */
	enterComplexColType?: (ctx: ComplexColTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.complexColType`.
	 * @param ctx the parse tree
	 */
	exitComplexColType?: (ctx: ComplexColTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.whenClause`.
	 * @param ctx the parse tree
	 */
	enterWhenClause?: (ctx: WhenClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.whenClause`.
	 * @param ctx the parse tree
	 */
	exitWhenClause?: (ctx: WhenClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.windowClause`.
	 * @param ctx the parse tree
	 */
	enterWindowClause?: (ctx: WindowClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.windowClause`.
	 * @param ctx the parse tree
	 */
	exitWindowClause?: (ctx: WindowClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.namedWindow`.
	 * @param ctx the parse tree
	 */
	enterNamedWindow?: (ctx: NamedWindowContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.namedWindow`.
	 * @param ctx the parse tree
	 */
	exitNamedWindow?: (ctx: NamedWindowContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.windowSpec`.
	 * @param ctx the parse tree
	 */
	enterWindowSpec?: (ctx: WindowSpecContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.windowSpec`.
	 * @param ctx the parse tree
	 */
	exitWindowSpec?: (ctx: WindowSpecContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.windowFrame`.
	 * @param ctx the parse tree
	 */
	enterWindowFrame?: (ctx: WindowFrameContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.windowFrame`.
	 * @param ctx the parse tree
	 */
	exitWindowFrame?: (ctx: WindowFrameContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.frameBound`.
	 * @param ctx the parse tree
	 */
	enterFrameBound?: (ctx: FrameBoundContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.frameBound`.
	 * @param ctx the parse tree
	 */
	exitFrameBound?: (ctx: FrameBoundContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.qualifiedNameList`.
	 * @param ctx the parse tree
	 */
	enterQualifiedNameList?: (ctx: QualifiedNameListContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.qualifiedNameList`.
	 * @param ctx the parse tree
	 */
	exitQualifiedNameList?: (ctx: QualifiedNameListContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.functionName`.
	 * @param ctx the parse tree
	 */
	enterFunctionName?: (ctx: FunctionNameContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.functionName`.
	 * @param ctx the parse tree
	 */
	exitFunctionName?: (ctx: FunctionNameContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.functionNameCreate`.
	 * @param ctx the parse tree
	 */
	enterFunctionNameCreate?: (ctx: FunctionNameCreateContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.functionNameCreate`.
	 * @param ctx the parse tree
	 */
	exitFunctionNameCreate?: (ctx: FunctionNameCreateContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedName?: (ctx: QualifiedNameContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.errorCapturingIdentifier`.
	 * @param ctx the parse tree
	 */
	enterErrorCapturingIdentifier?: (ctx: ErrorCapturingIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.errorCapturingIdentifier`.
	 * @param ctx the parse tree
	 */
	exitErrorCapturingIdentifier?: (ctx: ErrorCapturingIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 */
	enterErrorCapturingIdentifierExtra?: (ctx: ErrorCapturingIdentifierExtraContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 */
	exitErrorCapturingIdentifierExtra?: (ctx: ErrorCapturingIdentifierExtraContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.strictIdentifier`.
	 * @param ctx the parse tree
	 */
	enterStrictIdentifier?: (ctx: StrictIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.strictIdentifier`.
	 * @param ctx the parse tree
	 */
	exitStrictIdentifier?: (ctx: StrictIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.quotedIdentifier`.
	 * @param ctx the parse tree
	 */
	enterQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.quotedIdentifier`.
	 * @param ctx the parse tree
	 */
	exitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.backQuotedIdentifier`.
	 * @param ctx the parse tree
	 */
	enterBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.backQuotedIdentifier`.
	 * @param ctx the parse tree
	 */
	exitBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.alterColumnAction`.
	 * @param ctx the parse tree
	 */
	enterAlterColumnAction?: (ctx: AlterColumnActionContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.alterColumnAction`.
	 * @param ctx the parse tree
	 */
	exitAlterColumnAction?: (ctx: AlterColumnActionContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.stringLit`.
	 * @param ctx the parse tree
	 */
	enterStringLit?: (ctx: StringLitContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.stringLit`.
	 * @param ctx the parse tree
	 */
	exitStringLit?: (ctx: StringLitContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.version`.
	 * @param ctx the parse tree
	 */
	enterVersion?: (ctx: VersionContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.version`.
	 * @param ctx the parse tree
	 */
	exitVersion?: (ctx: VersionContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.ansiNonReserved`.
	 * @param ctx the parse tree
	 */
	enterAnsiNonReserved?: (ctx: AnsiNonReservedContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.ansiNonReserved`.
	 * @param ctx the parse tree
	 */
	exitAnsiNonReserved?: (ctx: AnsiNonReservedContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.strictNonReserved`.
	 * @param ctx the parse tree
	 */
	enterStrictNonReserved?: (ctx: StrictNonReservedContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.strictNonReserved`.
	 * @param ctx the parse tree
	 */
	exitStrictNonReserved?: (ctx: StrictNonReservedContext) => void;

	/**
	 * Enter a parse tree produced by `SparkSqlParser.nonReserved`.
	 * @param ctx the parse tree
	 */
	enterNonReserved?: (ctx: NonReservedContext) => void;
	/**
	 * Exit a parse tree produced by `SparkSqlParser.nonReserved`.
	 * @param ctx the parse tree
	 */
	exitNonReserved?: (ctx: NonReservedContext) => void;
}

