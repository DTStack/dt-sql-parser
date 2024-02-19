// Generated from dt-sql-parser/src/grammar/spark/SparkSqlParser.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { ProgramContext } from "./SparkSqlParser.js";
import { SingleStatementContext } from "./SparkSqlParser.js";
import { StatementContext } from "./SparkSqlParser.js";
import { TimezoneContext } from "./SparkSqlParser.js";
import { ConfigKeyContext } from "./SparkSqlParser.js";
import { ConfigValueContext } from "./SparkSqlParser.js";
import { UnsupportedHiveNativeCommandsContext } from "./SparkSqlParser.js";
import { CreateTableHeaderContext } from "./SparkSqlParser.js";
import { ReplaceTableHeaderContext } from "./SparkSqlParser.js";
import { BucketSpecContext } from "./SparkSqlParser.js";
import { SkewSpecContext } from "./SparkSqlParser.js";
import { LocationSpecContext } from "./SparkSqlParser.js";
import { CommentSpecContext } from "./SparkSqlParser.js";
import { QueryContext } from "./SparkSqlParser.js";
import { InsertIntoContext } from "./SparkSqlParser.js";
import { PartitionSpecLocationContext } from "./SparkSqlParser.js";
import { PartitionSpecContext } from "./SparkSqlParser.js";
import { PartitionValContext } from "./SparkSqlParser.js";
import { DbSchemaContext } from "./SparkSqlParser.js";
import { DbSchemasContext } from "./SparkSqlParser.js";
import { DescribeFuncNameContext } from "./SparkSqlParser.js";
import { DescribeColNameContext } from "./SparkSqlParser.js";
import { CtesContext } from "./SparkSqlParser.js";
import { NamedQueryContext } from "./SparkSqlParser.js";
import { TableProviderContext } from "./SparkSqlParser.js";
import { CreateTableClausesContext } from "./SparkSqlParser.js";
import { PropertyListContext } from "./SparkSqlParser.js";
import { PropertyContext } from "./SparkSqlParser.js";
import { PropertyKeyContext } from "./SparkSqlParser.js";
import { PropertyValueContext } from "./SparkSqlParser.js";
import { ExpressionPropertyListContext } from "./SparkSqlParser.js";
import { ExpressionPropertyContext } from "./SparkSqlParser.js";
import { ConstantListContext } from "./SparkSqlParser.js";
import { NestedConstantListContext } from "./SparkSqlParser.js";
import { CreateFileFormatContext } from "./SparkSqlParser.js";
import { FileFormatContext } from "./SparkSqlParser.js";
import { StorageHandlerContext } from "./SparkSqlParser.js";
import { ResourceContext } from "./SparkSqlParser.js";
import { DmlStatementNoWithContext } from "./SparkSqlParser.js";
import { DbSchemaNameContext } from "./SparkSqlParser.js";
import { DbSchemaNameCreateContext } from "./SparkSqlParser.js";
import { TableNameCreateContext } from "./SparkSqlParser.js";
import { TableNameContext } from "./SparkSqlParser.js";
import { ViewNameCreateContext } from "./SparkSqlParser.js";
import { ViewNameContext } from "./SparkSqlParser.js";
import { ColumnNameContext } from "./SparkSqlParser.js";
import { ColumnNameSeqContext } from "./SparkSqlParser.js";
import { ColumnNameCreateContext } from "./SparkSqlParser.js";
import { IdentifierReferenceContext } from "./SparkSqlParser.js";
import { QueryOrganizationContext } from "./SparkSqlParser.js";
import { MultiInsertQueryBodyContext } from "./SparkSqlParser.js";
import { QueryTermContext } from "./SparkSqlParser.js";
import { QueryPrimaryContext } from "./SparkSqlParser.js";
import { SortItemContext } from "./SparkSqlParser.js";
import { FromStatementContext } from "./SparkSqlParser.js";
import { FromStatementBodyContext } from "./SparkSqlParser.js";
import { QuerySpecificationContext } from "./SparkSqlParser.js";
import { TransformClauseContext } from "./SparkSqlParser.js";
import { SelectClauseContext } from "./SparkSqlParser.js";
import { SetClauseContext } from "./SparkSqlParser.js";
import { MatchedClauseContext } from "./SparkSqlParser.js";
import { NotMatchedClauseContext } from "./SparkSqlParser.js";
import { NotMatchedBySourceClauseContext } from "./SparkSqlParser.js";
import { MatchedActionContext } from "./SparkSqlParser.js";
import { NotMatchedActionContext } from "./SparkSqlParser.js";
import { NotMatchedBySourceActionContext } from "./SparkSqlParser.js";
import { AssignmentListContext } from "./SparkSqlParser.js";
import { AssignmentContext } from "./SparkSqlParser.js";
import { WhereClauseContext } from "./SparkSqlParser.js";
import { HavingClauseContext } from "./SparkSqlParser.js";
import { HintContext } from "./SparkSqlParser.js";
import { HintStatementContext } from "./SparkSqlParser.js";
import { FromClauseContext } from "./SparkSqlParser.js";
import { FunctionKindContext } from "./SparkSqlParser.js";
import { TemporalClauseContext } from "./SparkSqlParser.js";
import { AggregationClauseContext } from "./SparkSqlParser.js";
import { GroupByClauseContext } from "./SparkSqlParser.js";
import { GroupingAnalyticsContext } from "./SparkSqlParser.js";
import { GroupingElementContext } from "./SparkSqlParser.js";
import { GroupingSetContext } from "./SparkSqlParser.js";
import { PivotClauseContext } from "./SparkSqlParser.js";
import { PivotColumnContext } from "./SparkSqlParser.js";
import { PivotValueContext } from "./SparkSqlParser.js";
import { UnpivotClauseContext } from "./SparkSqlParser.js";
import { UnpivotNullClauseContext } from "./SparkSqlParser.js";
import { UnpivotOperatorContext } from "./SparkSqlParser.js";
import { UnpivotSingleValueColumnClauseContext } from "./SparkSqlParser.js";
import { UnpivotMultiValueColumnClauseContext } from "./SparkSqlParser.js";
import { UnpivotColumnSetContext } from "./SparkSqlParser.js";
import { UnpivotValueColumnContext } from "./SparkSqlParser.js";
import { UnpivotNameColumnContext } from "./SparkSqlParser.js";
import { UnpivotColumnAndAliasContext } from "./SparkSqlParser.js";
import { UnpivotColumnContext } from "./SparkSqlParser.js";
import { UnpivotAliasContext } from "./SparkSqlParser.js";
import { IfNotExistsContext } from "./SparkSqlParser.js";
import { IfExistsContext } from "./SparkSqlParser.js";
import { LateralViewContext } from "./SparkSqlParser.js";
import { SetQuantifierContext } from "./SparkSqlParser.js";
import { RelationContext } from "./SparkSqlParser.js";
import { RelationExtensionContext } from "./SparkSqlParser.js";
import { JoinRelationContext } from "./SparkSqlParser.js";
import { JoinTypeContext } from "./SparkSqlParser.js";
import { JoinCriteriaContext } from "./SparkSqlParser.js";
import { SampleContext } from "./SparkSqlParser.js";
import { SampleMethodContext } from "./SparkSqlParser.js";
import { IdentifierListContext } from "./SparkSqlParser.js";
import { IdentifierSeqContext } from "./SparkSqlParser.js";
import { OrderedIdentifierListContext } from "./SparkSqlParser.js";
import { OrderedIdentifierContext } from "./SparkSqlParser.js";
import { IdentifierCommentListContext } from "./SparkSqlParser.js";
import { IdentifierCommentContext } from "./SparkSqlParser.js";
import { RelationPrimaryContext } from "./SparkSqlParser.js";
import { InlineTableContext } from "./SparkSqlParser.js";
import { FunctionTableSubqueryArgumentContext } from "./SparkSqlParser.js";
import { TableArgumentPartitioningContext } from "./SparkSqlParser.js";
import { FunctionTableNamedArgumentExpressionContext } from "./SparkSqlParser.js";
import { FunctionTableReferenceArgumentContext } from "./SparkSqlParser.js";
import { FunctionTableArgumentContext } from "./SparkSqlParser.js";
import { FunctionTableContext } from "./SparkSqlParser.js";
import { TableAliasContext } from "./SparkSqlParser.js";
import { RowFormatContext } from "./SparkSqlParser.js";
import { MultipartIdentifierListContext } from "./SparkSqlParser.js";
import { MultipartIdentifierContext } from "./SparkSqlParser.js";
import { MultipartIdentifierPropertyListContext } from "./SparkSqlParser.js";
import { MultipartIdentifierPropertyContext } from "./SparkSqlParser.js";
import { TableIdentifierContext } from "./SparkSqlParser.js";
import { ViewIdentifierContext } from "./SparkSqlParser.js";
import { NamedExpressionContext } from "./SparkSqlParser.js";
import { NamedExpressionSeqContext } from "./SparkSqlParser.js";
import { PartitionFieldListContext } from "./SparkSqlParser.js";
import { PartitionFieldContext } from "./SparkSqlParser.js";
import { TransformContext } from "./SparkSqlParser.js";
import { TransformArgumentContext } from "./SparkSqlParser.js";
import { ExpressionContext } from "./SparkSqlParser.js";
import { NamedArgumentExpressionContext } from "./SparkSqlParser.js";
import { FunctionArgumentContext } from "./SparkSqlParser.js";
import { ExpressionSeqContext } from "./SparkSqlParser.js";
import { BooleanExpressionContext } from "./SparkSqlParser.js";
import { PredicateContext } from "./SparkSqlParser.js";
import { ValueExpressionContext } from "./SparkSqlParser.js";
import { DatetimeUnitContext } from "./SparkSqlParser.js";
import { PrimaryExpressionContext } from "./SparkSqlParser.js";
import { LiteralTypeContext } from "./SparkSqlParser.js";
import { ConstantContext } from "./SparkSqlParser.js";
import { ComparisonOperatorContext } from "./SparkSqlParser.js";
import { ArithmeticOperatorContext } from "./SparkSqlParser.js";
import { PredicateOperatorContext } from "./SparkSqlParser.js";
import { BooleanValueContext } from "./SparkSqlParser.js";
import { IntervalContext } from "./SparkSqlParser.js";
import { ErrorCapturingMultiUnitsIntervalContext } from "./SparkSqlParser.js";
import { MultiUnitsIntervalContext } from "./SparkSqlParser.js";
import { ErrorCapturingUnitToUnitIntervalContext } from "./SparkSqlParser.js";
import { UnitToUnitIntervalContext } from "./SparkSqlParser.js";
import { IntervalValueContext } from "./SparkSqlParser.js";
import { UnitInMultiUnitsContext } from "./SparkSqlParser.js";
import { UnitInUnitToUnitContext } from "./SparkSqlParser.js";
import { ColPositionContext } from "./SparkSqlParser.js";
import { TypeContext } from "./SparkSqlParser.js";
import { DataTypeContext } from "./SparkSqlParser.js";
import { QualifiedColTypeWithPositionSeqForAddContext } from "./SparkSqlParser.js";
import { QualifiedColTypeWithPositionForAddContext } from "./SparkSqlParser.js";
import { QualifiedColTypeWithPositionSeqForReplaceContext } from "./SparkSqlParser.js";
import { QualifiedColTypeWithPositionForReplaceContext } from "./SparkSqlParser.js";
import { ColDefinitionDescriptorWithPositionContext } from "./SparkSqlParser.js";
import { DefaultExpressionContext } from "./SparkSqlParser.js";
import { VariableDefaultExpressionContext } from "./SparkSqlParser.js";
import { ColTypeListContext } from "./SparkSqlParser.js";
import { ColTypeContext } from "./SparkSqlParser.js";
import { CreateOrReplaceTableColTypeListContext } from "./SparkSqlParser.js";
import { CreateOrReplaceTableColTypeContext } from "./SparkSqlParser.js";
import { ColDefinitionOptionContext } from "./SparkSqlParser.js";
import { GenerationExpressionContext } from "./SparkSqlParser.js";
import { ComplexColTypeListContext } from "./SparkSqlParser.js";
import { ComplexColTypeContext } from "./SparkSqlParser.js";
import { WhenClauseContext } from "./SparkSqlParser.js";
import { WindowClauseContext } from "./SparkSqlParser.js";
import { NamedWindowContext } from "./SparkSqlParser.js";
import { WindowSpecContext } from "./SparkSqlParser.js";
import { WindowFrameContext } from "./SparkSqlParser.js";
import { FrameBoundContext } from "./SparkSqlParser.js";
import { QualifiedNameListContext } from "./SparkSqlParser.js";
import { FunctionNameContext } from "./SparkSqlParser.js";
import { FunctionNameCreateContext } from "./SparkSqlParser.js";
import { QualifiedNameContext } from "./SparkSqlParser.js";
import { ErrorCapturingIdentifierContext } from "./SparkSqlParser.js";
import { ErrorCapturingIdentifierExtraContext } from "./SparkSqlParser.js";
import { IdentifierContext } from "./SparkSqlParser.js";
import { StrictIdentifierContext } from "./SparkSqlParser.js";
import { QuotedIdentifierContext } from "./SparkSqlParser.js";
import { BackQuotedIdentifierContext } from "./SparkSqlParser.js";
import { NumberContext } from "./SparkSqlParser.js";
import { AlterColumnActionContext } from "./SparkSqlParser.js";
import { StringLitContext } from "./SparkSqlParser.js";
import { CommentContext } from "./SparkSqlParser.js";
import { VersionContext } from "./SparkSqlParser.js";
import { AnsiNonReservedContext } from "./SparkSqlParser.js";
import { StrictNonReservedContext } from "./SparkSqlParser.js";
import { NonReservedContext } from "./SparkSqlParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SparkSqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class SparkSqlParserVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `SparkSqlParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.singleStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingleStatement?: (ctx: SingleStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.timezone`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimezone?: (ctx: TimezoneContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.configKey`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConfigKey?: (ctx: ConfigKeyContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.configValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConfigValue?: (ctx: ConfigValueContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.unsupportedHiveNativeCommands`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnsupportedHiveNativeCommands?: (ctx: UnsupportedHiveNativeCommandsContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.createTableHeader`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTableHeader?: (ctx: CreateTableHeaderContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.replaceTableHeader`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplaceTableHeader?: (ctx: ReplaceTableHeaderContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.bucketSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBucketSpec?: (ctx: BucketSpecContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.skewSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSkewSpec?: (ctx: SkewSpecContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.locationSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocationSpec?: (ctx: LocationSpecContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.commentSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommentSpec?: (ctx: CommentSpecContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.query`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuery?: (ctx: QueryContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.insertInto`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertInto?: (ctx: InsertIntoContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.partitionSpecLocation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionSpecLocation?: (ctx: PartitionSpecLocationContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.partitionSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionSpec?: (ctx: PartitionSpecContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.partitionVal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionVal?: (ctx: PartitionValContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.dbSchema`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDbSchema?: (ctx: DbSchemaContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.dbSchemas`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDbSchemas?: (ctx: DbSchemasContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.describeFuncName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeFuncName?: (ctx: DescribeFuncNameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.describeColName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeColName?: (ctx: DescribeColNameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.ctes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCtes?: (ctx: CtesContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.namedQuery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedQuery?: (ctx: NamedQueryContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.tableProvider`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableProvider?: (ctx: TableProviderContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.createTableClauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTableClauses?: (ctx: CreateTableClausesContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.propertyList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyList?: (ctx: PropertyListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProperty?: (ctx: PropertyContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.propertyKey`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyKey?: (ctx: PropertyKeyContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.propertyValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyValue?: (ctx: PropertyValueContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.expressionPropertyList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionPropertyList?: (ctx: ExpressionPropertyListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.expressionProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionProperty?: (ctx: ExpressionPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.constantList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstantList?: (ctx: ConstantListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.nestedConstantList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNestedConstantList?: (ctx: NestedConstantListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.createFileFormat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateFileFormat?: (ctx: CreateFileFormatContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.fileFormat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFileFormat?: (ctx: FileFormatContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.storageHandler`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStorageHandler?: (ctx: StorageHandlerContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.resource`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResource?: (ctx: ResourceContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDmlStatementNoWith?: (ctx: DmlStatementNoWithContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.dbSchemaName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDbSchemaName?: (ctx: DbSchemaNameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.dbSchemaNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDbSchemaNameCreate?: (ctx: DbSchemaNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.tableNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableNameCreate?: (ctx: TableNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.tableName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableName?: (ctx: TableNameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.viewNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewNameCreate?: (ctx: ViewNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.viewName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewName?: (ctx: ViewNameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.columnName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnName?: (ctx: ColumnNameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.columnNameSeq`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameSeq?: (ctx: ColumnNameSeqContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.columnNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameCreate?: (ctx: ColumnNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.identifierReference`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierReference?: (ctx: IdentifierReferenceContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.queryOrganization`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryOrganization?: (ctx: QueryOrganizationContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.multiInsertQueryBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiInsertQueryBody?: (ctx: MultiInsertQueryBodyContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.queryTerm`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryTerm?: (ctx: QueryTermContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.queryPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryPrimary?: (ctx: QueryPrimaryContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.sortItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSortItem?: (ctx: SortItemContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.fromStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFromStatement?: (ctx: FromStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.fromStatementBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFromStatementBody?: (ctx: FromStatementBodyContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.querySpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuerySpecification?: (ctx: QuerySpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.transformClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransformClause?: (ctx: TransformClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.selectClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectClause?: (ctx: SelectClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.setClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetClause?: (ctx: SetClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.matchedClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMatchedClause?: (ctx: MatchedClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.notMatchedClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotMatchedClause?: (ctx: NotMatchedClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.notMatchedBySourceClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotMatchedBySourceClause?: (ctx: NotMatchedBySourceClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.matchedAction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMatchedAction?: (ctx: MatchedActionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.notMatchedAction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotMatchedAction?: (ctx: NotMatchedActionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.notMatchedBySourceAction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotMatchedBySourceAction?: (ctx: NotMatchedBySourceActionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.assignmentList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignmentList?: (ctx: AssignmentListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.assignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignment?: (ctx: AssignmentContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.whereClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhereClause?: (ctx: WhereClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.havingClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHavingClause?: (ctx: HavingClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.hint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHint?: (ctx: HintContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.hintStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHintStatement?: (ctx: HintStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.fromClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFromClause?: (ctx: FromClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.functionKind`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionKind?: (ctx: FunctionKindContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.temporalClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTemporalClause?: (ctx: TemporalClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.aggregationClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregationClause?: (ctx: AggregationClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.groupByClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupByClause?: (ctx: GroupByClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.groupingAnalytics`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingAnalytics?: (ctx: GroupingAnalyticsContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.groupingElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingElement?: (ctx: GroupingElementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.groupingSet`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingSet?: (ctx: GroupingSetContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.pivotClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPivotClause?: (ctx: PivotClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.pivotColumn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPivotColumn?: (ctx: PivotColumnContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.pivotValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPivotValue?: (ctx: PivotValueContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.unpivotClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotClause?: (ctx: UnpivotClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.unpivotNullClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotNullClause?: (ctx: UnpivotNullClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.unpivotOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotOperator?: (ctx: UnpivotOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.unpivotSingleValueColumnClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotSingleValueColumnClause?: (ctx: UnpivotSingleValueColumnClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.unpivotMultiValueColumnClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotMultiValueColumnClause?: (ctx: UnpivotMultiValueColumnClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.unpivotColumnSet`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotColumnSet?: (ctx: UnpivotColumnSetContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.unpivotValueColumn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotValueColumn?: (ctx: UnpivotValueColumnContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.unpivotNameColumn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotNameColumn?: (ctx: UnpivotNameColumnContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.unpivotColumnAndAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotColumnAndAlias?: (ctx: UnpivotColumnAndAliasContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.unpivotColumn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotColumn?: (ctx: UnpivotColumnContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.unpivotAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotAlias?: (ctx: UnpivotAliasContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.ifNotExists`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfNotExists?: (ctx: IfNotExistsContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.ifExists`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfExists?: (ctx: IfExistsContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.lateralView`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLateralView?: (ctx: LateralViewContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.setQuantifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetQuantifier?: (ctx: SetQuantifierContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.relation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelation?: (ctx: RelationContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.relationExtension`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelationExtension?: (ctx: RelationExtensionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.joinRelation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinRelation?: (ctx: JoinRelationContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.joinType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinType?: (ctx: JoinTypeContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.joinCriteria`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinCriteria?: (ctx: JoinCriteriaContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.sample`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSample?: (ctx: SampleContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.sampleMethod`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSampleMethod?: (ctx: SampleMethodContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.identifierList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierList?: (ctx: IdentifierListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.identifierSeq`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierSeq?: (ctx: IdentifierSeqContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.orderedIdentifierList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderedIdentifierList?: (ctx: OrderedIdentifierListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.orderedIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderedIdentifier?: (ctx: OrderedIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.identifierCommentList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierCommentList?: (ctx: IdentifierCommentListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.identifierComment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierComment?: (ctx: IdentifierCommentContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.relationPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelationPrimary?: (ctx: RelationPrimaryContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.inlineTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInlineTable?: (ctx: InlineTableContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.functionTableSubqueryArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionTableSubqueryArgument?: (ctx: FunctionTableSubqueryArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.tableArgumentPartitioning`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableArgumentPartitioning?: (ctx: TableArgumentPartitioningContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.functionTableNamedArgumentExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionTableNamedArgumentExpression?: (ctx: FunctionTableNamedArgumentExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.functionTableReferenceArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionTableReferenceArgument?: (ctx: FunctionTableReferenceArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.functionTableArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionTableArgument?: (ctx: FunctionTableArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.functionTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionTable?: (ctx: FunctionTableContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.tableAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableAlias?: (ctx: TableAliasContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.rowFormat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowFormat?: (ctx: RowFormatContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.multipartIdentifierList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipartIdentifierList?: (ctx: MultipartIdentifierListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.multipartIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipartIdentifier?: (ctx: MultipartIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.multipartIdentifierPropertyList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipartIdentifierPropertyList?: (ctx: MultipartIdentifierPropertyListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.multipartIdentifierProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipartIdentifierProperty?: (ctx: MultipartIdentifierPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.tableIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableIdentifier?: (ctx: TableIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.viewIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewIdentifier?: (ctx: ViewIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.namedExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedExpression?: (ctx: NamedExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.namedExpressionSeq`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedExpressionSeq?: (ctx: NamedExpressionSeqContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.partitionFieldList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionFieldList?: (ctx: PartitionFieldListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.partitionField`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionField?: (ctx: PartitionFieldContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.transform`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransform?: (ctx: TransformContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.transformArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransformArgument?: (ctx: TransformArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.namedArgumentExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedArgumentExpression?: (ctx: NamedArgumentExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.functionArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionArgument?: (ctx: FunctionArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.expressionSeq`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionSeq?: (ctx: ExpressionSeqContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanExpression?: (ctx: BooleanExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicate?: (ctx: PredicateContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueExpression?: (ctx: ValueExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.datetimeUnit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatetimeUnit?: (ctx: DatetimeUnitContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.literalType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteralType?: (ctx: LiteralTypeContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.constant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstant?: (ctx: ConstantContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.comparisonOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.arithmeticOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArithmeticOperator?: (ctx: ArithmeticOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.predicateOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicateOperator?: (ctx: PredicateOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.booleanValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanValue?: (ctx: BooleanValueContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.interval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterval?: (ctx: IntervalContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.errorCapturingMultiUnitsInterval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorCapturingMultiUnitsInterval?: (ctx: ErrorCapturingMultiUnitsIntervalContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.multiUnitsInterval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiUnitsInterval?: (ctx: MultiUnitsIntervalContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.errorCapturingUnitToUnitInterval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorCapturingUnitToUnitInterval?: (ctx: ErrorCapturingUnitToUnitIntervalContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.unitToUnitInterval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnitToUnitInterval?: (ctx: UnitToUnitIntervalContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.intervalValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntervalValue?: (ctx: IntervalValueContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.unitInMultiUnits`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnitInMultiUnits?: (ctx: UnitInMultiUnitsContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.unitInUnitToUnit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnitInUnitToUnit?: (ctx: UnitInUnitToUnitContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.colPosition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColPosition?: (ctx: ColPositionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType?: (ctx: TypeContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.dataType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDataType?: (ctx: DataTypeContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.qualifiedColTypeWithPositionSeqForAdd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedColTypeWithPositionSeqForAdd?: (ctx: QualifiedColTypeWithPositionSeqForAddContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.qualifiedColTypeWithPositionForAdd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedColTypeWithPositionForAdd?: (ctx: QualifiedColTypeWithPositionForAddContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.qualifiedColTypeWithPositionSeqForReplace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedColTypeWithPositionSeqForReplace?: (ctx: QualifiedColTypeWithPositionSeqForReplaceContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.qualifiedColTypeWithPositionForReplace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedColTypeWithPositionForReplace?: (ctx: QualifiedColTypeWithPositionForReplaceContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.colDefinitionDescriptorWithPosition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColDefinitionDescriptorWithPosition?: (ctx: ColDefinitionDescriptorWithPositionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.defaultExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefaultExpression?: (ctx: DefaultExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.variableDefaultExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableDefaultExpression?: (ctx: VariableDefaultExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.colTypeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColTypeList?: (ctx: ColTypeListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.colType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColType?: (ctx: ColTypeContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.createOrReplaceTableColTypeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateOrReplaceTableColTypeList?: (ctx: CreateOrReplaceTableColTypeListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.createOrReplaceTableColType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateOrReplaceTableColType?: (ctx: CreateOrReplaceTableColTypeContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.colDefinitionOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColDefinitionOption?: (ctx: ColDefinitionOptionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.generationExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenerationExpression?: (ctx: GenerationExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.complexColTypeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComplexColTypeList?: (ctx: ComplexColTypeListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.complexColType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComplexColType?: (ctx: ComplexColTypeContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.whenClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhenClause?: (ctx: WhenClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.windowClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowClause?: (ctx: WindowClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.namedWindow`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedWindow?: (ctx: NamedWindowContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.windowSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowSpec?: (ctx: WindowSpecContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.windowFrame`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowFrame?: (ctx: WindowFrameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.frameBound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrameBound?: (ctx: FrameBoundContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.qualifiedNameList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedNameList?: (ctx: QualifiedNameListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.functionName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionName?: (ctx: FunctionNameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.functionNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionNameCreate?: (ctx: FunctionNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.qualifiedName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedName?: (ctx: QualifiedNameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.errorCapturingIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorCapturingIdentifier?: (ctx: ErrorCapturingIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.errorCapturingIdentifierExtra`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorCapturingIdentifierExtra?: (ctx: ErrorCapturingIdentifierExtraContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifier?: (ctx: IdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.strictIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStrictIdentifier?: (ctx: StrictIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.quotedIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.backQuotedIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.number`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumber?: (ctx: NumberContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.alterColumnAction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterColumnAction?: (ctx: AlterColumnActionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.stringLit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringLit?: (ctx: StringLitContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.comment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComment?: (ctx: CommentContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.version`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVersion?: (ctx: VersionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.ansiNonReserved`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnsiNonReserved?: (ctx: AnsiNonReservedContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.strictNonReserved`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStrictNonReserved?: (ctx: StrictNonReservedContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSqlParser.nonReserved`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonReserved?: (ctx: NonReservedContext) => Result;
}

