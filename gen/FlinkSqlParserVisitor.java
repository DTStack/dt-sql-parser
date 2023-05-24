// Generated from /Users/zhenglin/Documents/parser/dt-sql-parser/src/grammar/flinksql/FlinkSqlParser.g4 by ANTLR 4.12.0
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link FlinkSqlParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface FlinkSqlParserVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#program}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitProgram(FlinkSqlParser.ProgramContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStatement(FlinkSqlParser.StatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#sqlStatements}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSqlStatements(FlinkSqlParser.SqlStatementsContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#sqlStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSqlStatement(FlinkSqlParser.SqlStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#emptyStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitEmptyStatement(FlinkSqlParser.EmptyStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#ddlStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDdlStatement(FlinkSqlParser.DdlStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#dmlStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDmlStatement(FlinkSqlParser.DmlStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#describeStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDescribeStatement(FlinkSqlParser.DescribeStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#explainStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExplainStatement(FlinkSqlParser.ExplainStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#explainDetails}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExplainDetails(FlinkSqlParser.ExplainDetailsContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#explainDetail}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExplainDetail(FlinkSqlParser.ExplainDetailContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#useStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUseStatement(FlinkSqlParser.UseStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#useModuleStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUseModuleStatement(FlinkSqlParser.UseModuleStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#showStatememt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitShowStatememt(FlinkSqlParser.ShowStatememtContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#loadStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLoadStatement(FlinkSqlParser.LoadStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#unloadStatememt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUnloadStatememt(FlinkSqlParser.UnloadStatememtContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#setStatememt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSetStatememt(FlinkSqlParser.SetStatememtContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#resetStatememt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitResetStatememt(FlinkSqlParser.ResetStatememtContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#jarStatememt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitJarStatememt(FlinkSqlParser.JarStatememtContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#dtAddStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDtAddStatement(FlinkSqlParser.DtAddStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#createTable}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCreateTable(FlinkSqlParser.CreateTableContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#simpleCreateTable}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSimpleCreateTable(FlinkSqlParser.SimpleCreateTableContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#createTableAsSelect}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCreateTableAsSelect(FlinkSqlParser.CreateTableAsSelectContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#columnOptionDefinition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitColumnOptionDefinition(FlinkSqlParser.ColumnOptionDefinitionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#physicalColumnDefinition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPhysicalColumnDefinition(FlinkSqlParser.PhysicalColumnDefinitionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#columnName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitColumnName(FlinkSqlParser.ColumnNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#columnNameList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitColumnNameList(FlinkSqlParser.ColumnNameListContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#columnType}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitColumnType(FlinkSqlParser.ColumnTypeContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#lengthOneDimension}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLengthOneDimension(FlinkSqlParser.LengthOneDimensionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#lengthTwoOptionalDimension}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLengthTwoOptionalDimension(FlinkSqlParser.LengthTwoOptionalDimensionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#lengthTwoStringDimension}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLengthTwoStringDimension(FlinkSqlParser.LengthTwoStringDimensionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#lengthOneTypeDimension}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLengthOneTypeDimension(FlinkSqlParser.LengthOneTypeDimensionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#mapTypeDimension}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMapTypeDimension(FlinkSqlParser.MapTypeDimensionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#rowTypeDimension}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRowTypeDimension(FlinkSqlParser.RowTypeDimensionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#columnConstraint}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitColumnConstraint(FlinkSqlParser.ColumnConstraintContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#commentSpec}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCommentSpec(FlinkSqlParser.CommentSpecContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#metadataColumnDefinition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMetadataColumnDefinition(FlinkSqlParser.MetadataColumnDefinitionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#metadataKey}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMetadataKey(FlinkSqlParser.MetadataKeyContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#computedColumnDefinition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitComputedColumnDefinition(FlinkSqlParser.ComputedColumnDefinitionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#computedColumnExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitComputedColumnExpression(FlinkSqlParser.ComputedColumnExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#watermarkDefinition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWatermarkDefinition(FlinkSqlParser.WatermarkDefinitionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#tableConstraint}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTableConstraint(FlinkSqlParser.TableConstraintContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#constraintName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitConstraintName(FlinkSqlParser.ConstraintNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#selfDefinitionClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSelfDefinitionClause(FlinkSqlParser.SelfDefinitionClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#partitionDefinition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPartitionDefinition(FlinkSqlParser.PartitionDefinitionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#transformList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTransformList(FlinkSqlParser.TransformListContext ctx);
	/**
	 * Visit a parse tree produced by the {@code identityTransform}
	 * labeled alternative in {@link FlinkSqlParser#transform}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIdentityTransform(FlinkSqlParser.IdentityTransformContext ctx);
	/**
	 * Visit a parse tree produced by the {@code applyTransform}
	 * labeled alternative in {@link FlinkSqlParser#transform}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitApplyTransform(FlinkSqlParser.ApplyTransformContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#transformArgument}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTransformArgument(FlinkSqlParser.TransformArgumentContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#likeDefinition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLikeDefinition(FlinkSqlParser.LikeDefinitionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#sourceTable}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSourceTable(FlinkSqlParser.SourceTableContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#likeOption}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLikeOption(FlinkSqlParser.LikeOptionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#createCatalog}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCreateCatalog(FlinkSqlParser.CreateCatalogContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#createDatabase}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCreateDatabase(FlinkSqlParser.CreateDatabaseContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#createView}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCreateView(FlinkSqlParser.CreateViewContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#createFunction}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCreateFunction(FlinkSqlParser.CreateFunctionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#usingClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUsingClause(FlinkSqlParser.UsingClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#jarFileName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitJarFileName(FlinkSqlParser.JarFileNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#alterTable}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlterTable(FlinkSqlParser.AlterTableContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#renameDefinition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRenameDefinition(FlinkSqlParser.RenameDefinitionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#setKeyValueDefinition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSetKeyValueDefinition(FlinkSqlParser.SetKeyValueDefinitionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#addConstraint}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAddConstraint(FlinkSqlParser.AddConstraintContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#dropConstraint}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDropConstraint(FlinkSqlParser.DropConstraintContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#addUnique}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAddUnique(FlinkSqlParser.AddUniqueContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#notForced}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNotForced(FlinkSqlParser.NotForcedContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#alertView}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlertView(FlinkSqlParser.AlertViewContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#alterDatabase}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlterDatabase(FlinkSqlParser.AlterDatabaseContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#alterFunction}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlterFunction(FlinkSqlParser.AlterFunctionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#dropCatalog}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDropCatalog(FlinkSqlParser.DropCatalogContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#dropTable}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDropTable(FlinkSqlParser.DropTableContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#dropDatabase}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDropDatabase(FlinkSqlParser.DropDatabaseContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#dropView}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDropView(FlinkSqlParser.DropViewContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#dropFunction}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDropFunction(FlinkSqlParser.DropFunctionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#insertStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInsertStatement(FlinkSqlParser.InsertStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#insertSimpleStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInsertSimpleStatement(FlinkSqlParser.InsertSimpleStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#insertPartitionDefinition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInsertPartitionDefinition(FlinkSqlParser.InsertPartitionDefinitionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#valuesDefinition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitValuesDefinition(FlinkSqlParser.ValuesDefinitionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#valuesRowDefinition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitValuesRowDefinition(FlinkSqlParser.ValuesRowDefinitionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#insertMulStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInsertMulStatement(FlinkSqlParser.InsertMulStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#queryStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitQueryStatement(FlinkSqlParser.QueryStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#valuesCaluse}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitValuesCaluse(FlinkSqlParser.ValuesCaluseContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#withClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWithClause(FlinkSqlParser.WithClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#withItem}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWithItem(FlinkSqlParser.WithItemContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#withItemName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWithItemName(FlinkSqlParser.WithItemNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#selectStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSelectStatement(FlinkSqlParser.SelectStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#selectClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSelectClause(FlinkSqlParser.SelectClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#projectItemDefinition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitProjectItemDefinition(FlinkSqlParser.ProjectItemDefinitionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#overWindowItem}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOverWindowItem(FlinkSqlParser.OverWindowItemContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#fromClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFromClause(FlinkSqlParser.FromClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#tableExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTableExpression(FlinkSqlParser.TableExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#tableReference}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTableReference(FlinkSqlParser.TableReferenceContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#tablePrimary}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTablePrimary(FlinkSqlParser.TablePrimaryContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#tablePath}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTablePath(FlinkSqlParser.TablePathContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#systemTimePeriod}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSystemTimePeriod(FlinkSqlParser.SystemTimePeriodContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#dateTimeExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDateTimeExpression(FlinkSqlParser.DateTimeExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#inlineDataValueClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInlineDataValueClause(FlinkSqlParser.InlineDataValueClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#windoTVFClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWindoTVFClause(FlinkSqlParser.WindoTVFClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#windowTVFExression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWindowTVFExression(FlinkSqlParser.WindowTVFExressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#windoTVFName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWindoTVFName(FlinkSqlParser.WindoTVFNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#windowTVFParam}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWindowTVFParam(FlinkSqlParser.WindowTVFParamContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#timeIntervalParamName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTimeIntervalParamName(FlinkSqlParser.TimeIntervalParamNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#columnDescriptor}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitColumnDescriptor(FlinkSqlParser.ColumnDescriptorContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#joinCondition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitJoinCondition(FlinkSqlParser.JoinConditionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#whereClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWhereClause(FlinkSqlParser.WhereClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#groupByClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGroupByClause(FlinkSqlParser.GroupByClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#groupItemDefinition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGroupItemDefinition(FlinkSqlParser.GroupItemDefinitionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#groupingSets}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGroupingSets(FlinkSqlParser.GroupingSetsContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#groupingSetsNotaionName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGroupingSetsNotaionName(FlinkSqlParser.GroupingSetsNotaionNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#groupWindowFunction}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGroupWindowFunction(FlinkSqlParser.GroupWindowFunctionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#groupWindowFunctionName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGroupWindowFunctionName(FlinkSqlParser.GroupWindowFunctionNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#timeAttrColumn}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTimeAttrColumn(FlinkSqlParser.TimeAttrColumnContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#havingClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitHavingClause(FlinkSqlParser.HavingClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#windowClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWindowClause(FlinkSqlParser.WindowClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#namedWindow}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNamedWindow(FlinkSqlParser.NamedWindowContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#windowSpec}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWindowSpec(FlinkSqlParser.WindowSpecContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#matchRecognizeClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMatchRecognizeClause(FlinkSqlParser.MatchRecognizeClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#orderByCaluse}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOrderByCaluse(FlinkSqlParser.OrderByCaluseContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#orderItemDefition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOrderItemDefition(FlinkSqlParser.OrderItemDefitionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#limitClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLimitClause(FlinkSqlParser.LimitClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#partitionByClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPartitionByClause(FlinkSqlParser.PartitionByClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#quantifiers}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitQuantifiers(FlinkSqlParser.QuantifiersContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#measuresClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMeasuresClause(FlinkSqlParser.MeasuresClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#patternDefination}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPatternDefination(FlinkSqlParser.PatternDefinationContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#patternVariable}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPatternVariable(FlinkSqlParser.PatternVariableContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#outputMode}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOutputMode(FlinkSqlParser.OutputModeContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#afterMatchStrategy}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAfterMatchStrategy(FlinkSqlParser.AfterMatchStrategyContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#patternVariablesDefination}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPatternVariablesDefination(FlinkSqlParser.PatternVariablesDefinationContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#windowFrame}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWindowFrame(FlinkSqlParser.WindowFrameContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#frameBound}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFrameBound(FlinkSqlParser.FrameBoundContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#withinClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWithinClause(FlinkSqlParser.WithinClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpression(FlinkSqlParser.ExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code logicalNot}
	 * labeled alternative in {@link FlinkSqlParser#booleanExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLogicalNot(FlinkSqlParser.LogicalNotContext ctx);
	/**
	 * Visit a parse tree produced by the {@code predicated}
	 * labeled alternative in {@link FlinkSqlParser#booleanExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPredicated(FlinkSqlParser.PredicatedContext ctx);
	/**
	 * Visit a parse tree produced by the {@code exists}
	 * labeled alternative in {@link FlinkSqlParser#booleanExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExists(FlinkSqlParser.ExistsContext ctx);
	/**
	 * Visit a parse tree produced by the {@code logicalBinary}
	 * labeled alternative in {@link FlinkSqlParser#booleanExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLogicalBinary(FlinkSqlParser.LogicalBinaryContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#predicate}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPredicate(FlinkSqlParser.PredicateContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#likePredicate}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLikePredicate(FlinkSqlParser.LikePredicateContext ctx);
	/**
	 * Visit a parse tree produced by the {@code valueExpressionDefault}
	 * labeled alternative in {@link FlinkSqlParser#valueExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitValueExpressionDefault(FlinkSqlParser.ValueExpressionDefaultContext ctx);
	/**
	 * Visit a parse tree produced by the {@code comparison}
	 * labeled alternative in {@link FlinkSqlParser#valueExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitComparison(FlinkSqlParser.ComparisonContext ctx);
	/**
	 * Visit a parse tree produced by the {@code arithmeticBinary}
	 * labeled alternative in {@link FlinkSqlParser#valueExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArithmeticBinary(FlinkSqlParser.ArithmeticBinaryContext ctx);
	/**
	 * Visit a parse tree produced by the {@code arithmeticUnary}
	 * labeled alternative in {@link FlinkSqlParser#valueExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArithmeticUnary(FlinkSqlParser.ArithmeticUnaryContext ctx);
	/**
	 * Visit a parse tree produced by the {@code dereference}
	 * labeled alternative in {@link FlinkSqlParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDereference(FlinkSqlParser.DereferenceContext ctx);
	/**
	 * Visit a parse tree produced by the {@code simpleCase}
	 * labeled alternative in {@link FlinkSqlParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSimpleCase(FlinkSqlParser.SimpleCaseContext ctx);
	/**
	 * Visit a parse tree produced by the {@code columnReference}
	 * labeled alternative in {@link FlinkSqlParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitColumnReference(FlinkSqlParser.ColumnReferenceContext ctx);
	/**
	 * Visit a parse tree produced by the {@code last}
	 * labeled alternative in {@link FlinkSqlParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLast(FlinkSqlParser.LastContext ctx);
	/**
	 * Visit a parse tree produced by the {@code star}
	 * labeled alternative in {@link FlinkSqlParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStar(FlinkSqlParser.StarContext ctx);
	/**
	 * Visit a parse tree produced by the {@code subscript}
	 * labeled alternative in {@link FlinkSqlParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSubscript(FlinkSqlParser.SubscriptContext ctx);
	/**
	 * Visit a parse tree produced by the {@code subqueryExpression}
	 * labeled alternative in {@link FlinkSqlParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSubqueryExpression(FlinkSqlParser.SubqueryExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code cast}
	 * labeled alternative in {@link FlinkSqlParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCast(FlinkSqlParser.CastContext ctx);
	/**
	 * Visit a parse tree produced by the {@code constantDefault}
	 * labeled alternative in {@link FlinkSqlParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitConstantDefault(FlinkSqlParser.ConstantDefaultContext ctx);
	/**
	 * Visit a parse tree produced by the {@code parenthesizedExpression}
	 * labeled alternative in {@link FlinkSqlParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitParenthesizedExpression(FlinkSqlParser.ParenthesizedExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code functionCall}
	 * labeled alternative in {@link FlinkSqlParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctionCall(FlinkSqlParser.FunctionCallContext ctx);
	/**
	 * Visit a parse tree produced by the {@code searchedCase}
	 * labeled alternative in {@link FlinkSqlParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSearchedCase(FlinkSqlParser.SearchedCaseContext ctx);
	/**
	 * Visit a parse tree produced by the {@code position}
	 * labeled alternative in {@link FlinkSqlParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPosition(FlinkSqlParser.PositionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code first}
	 * labeled alternative in {@link FlinkSqlParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFirst(FlinkSqlParser.FirstContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#functionName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctionName(FlinkSqlParser.FunctionNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#dereferenceDefinition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDereferenceDefinition(FlinkSqlParser.DereferenceDefinitionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#correlationName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCorrelationName(FlinkSqlParser.CorrelationNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#qualifiedName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitQualifiedName(FlinkSqlParser.QualifiedNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#timeIntervalExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTimeIntervalExpression(FlinkSqlParser.TimeIntervalExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#errorCapturingMultiUnitsInterval}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitErrorCapturingMultiUnitsInterval(FlinkSqlParser.ErrorCapturingMultiUnitsIntervalContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#multiUnitsInterval}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMultiUnitsInterval(FlinkSqlParser.MultiUnitsIntervalContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#errorCapturingUnitToUnitInterval}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitErrorCapturingUnitToUnitInterval(FlinkSqlParser.ErrorCapturingUnitToUnitIntervalContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#unitToUnitInterval}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUnitToUnitInterval(FlinkSqlParser.UnitToUnitIntervalContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#intervalValue}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIntervalValue(FlinkSqlParser.IntervalValueContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#intervalTimeUnit}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIntervalTimeUnit(FlinkSqlParser.IntervalTimeUnitContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#columnAlias}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitColumnAlias(FlinkSqlParser.ColumnAliasContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#tableAlias}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTableAlias(FlinkSqlParser.TableAliasContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#errorCapturingIdentifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitErrorCapturingIdentifier(FlinkSqlParser.ErrorCapturingIdentifierContext ctx);
	/**
	 * Visit a parse tree produced by the {@code errorIdent}
	 * labeled alternative in {@link FlinkSqlParser#errorCapturingIdentifierExtra}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitErrorIdent(FlinkSqlParser.ErrorIdentContext ctx);
	/**
	 * Visit a parse tree produced by the {@code realIdent}
	 * labeled alternative in {@link FlinkSqlParser#errorCapturingIdentifierExtra}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRealIdent(FlinkSqlParser.RealIdentContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#identifierList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIdentifierList(FlinkSqlParser.IdentifierListContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#identifierSeq}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIdentifierSeq(FlinkSqlParser.IdentifierSeqContext ctx);
	/**
	 * Visit a parse tree produced by the {@code unquotedIdentifierAlternative}
	 * labeled alternative in {@link FlinkSqlParser#identifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUnquotedIdentifierAlternative(FlinkSqlParser.UnquotedIdentifierAlternativeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code quotedIdentifierAlternative}
	 * labeled alternative in {@link FlinkSqlParser#identifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitQuotedIdentifierAlternative(FlinkSqlParser.QuotedIdentifierAlternativeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code nonReservedKeywordsAlternative}
	 * labeled alternative in {@link FlinkSqlParser#identifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNonReservedKeywordsAlternative(FlinkSqlParser.NonReservedKeywordsAlternativeContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#unquotedIdentifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUnquotedIdentifier(FlinkSqlParser.UnquotedIdentifierContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#quotedIdentifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitQuotedIdentifier(FlinkSqlParser.QuotedIdentifierContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#whenClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWhenClause(FlinkSqlParser.WhenClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#uid}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUid(FlinkSqlParser.UidContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#withOption}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWithOption(FlinkSqlParser.WithOptionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#ifNotExists}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIfNotExists(FlinkSqlParser.IfNotExistsContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#ifExists}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIfExists(FlinkSqlParser.IfExistsContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#tablePropertyList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTablePropertyList(FlinkSqlParser.TablePropertyListContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#tableProperty}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTableProperty(FlinkSqlParser.TablePropertyContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#tablePropertyKey}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTablePropertyKey(FlinkSqlParser.TablePropertyKeyContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#tablePropertyValue}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTablePropertyValue(FlinkSqlParser.TablePropertyValueContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#logicalOperator}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLogicalOperator(FlinkSqlParser.LogicalOperatorContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#comparisonOperator}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitComparisonOperator(FlinkSqlParser.ComparisonOperatorContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#bitOperator}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBitOperator(FlinkSqlParser.BitOperatorContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#mathOperator}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMathOperator(FlinkSqlParser.MathOperatorContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#unaryOperator}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUnaryOperator(FlinkSqlParser.UnaryOperatorContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#constant}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitConstant(FlinkSqlParser.ConstantContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#stringLiteral}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStringLiteral(FlinkSqlParser.StringLiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#decimalLiteral}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDecimalLiteral(FlinkSqlParser.DecimalLiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#booleanLiteral}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBooleanLiteral(FlinkSqlParser.BooleanLiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#setQuantifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSetQuantifier(FlinkSqlParser.SetQuantifierContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#reservedKeywords}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitReservedKeywords(FlinkSqlParser.ReservedKeywordsContext ctx);
	/**
	 * Visit a parse tree produced by {@link FlinkSqlParser#nonReservedKeywords}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNonReservedKeywords(FlinkSqlParser.NonReservedKeywordsContext ctx);
}