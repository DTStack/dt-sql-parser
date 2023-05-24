// Generated from /Users/zhenglin/Documents/parser/dt-sql-parser/src/grammar/trinosql/trinoSqlParser.g4 by ANTLR 4.12.0
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link trinoSqlParserParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface trinoSqlParserVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#program}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitProgram(trinoSqlParserParser.ProgramContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#statements}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStatements(trinoSqlParserParser.StatementsContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#singleStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSingleStatement(trinoSqlParserParser.SingleStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#standaloneExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStandaloneExpression(trinoSqlParserParser.StandaloneExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#standalonePathSpecification}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStandalonePathSpecification(trinoSqlParserParser.StandalonePathSpecificationContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#standaloneType}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStandaloneType(trinoSqlParserParser.StandaloneTypeContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#standaloneRowPattern}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStandaloneRowPattern(trinoSqlParserParser.StandaloneRowPatternContext ctx);
	/**
	 * Visit a parse tree produced by the {@code statementDefault}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStatementDefault(trinoSqlParserParser.StatementDefaultContext ctx);
	/**
	 * Visit a parse tree produced by the {@code use}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUse(trinoSqlParserParser.UseContext ctx);
	/**
	 * Visit a parse tree produced by the {@code createSchema}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCreateSchema(trinoSqlParserParser.CreateSchemaContext ctx);
	/**
	 * Visit a parse tree produced by the {@code dropSchema}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDropSchema(trinoSqlParserParser.DropSchemaContext ctx);
	/**
	 * Visit a parse tree produced by the {@code renameSchema}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRenameSchema(trinoSqlParserParser.RenameSchemaContext ctx);
	/**
	 * Visit a parse tree produced by the {@code setSchemaAuthorization}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSetSchemaAuthorization(trinoSqlParserParser.SetSchemaAuthorizationContext ctx);
	/**
	 * Visit a parse tree produced by the {@code createTableAsSelect}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCreateTableAsSelect(trinoSqlParserParser.CreateTableAsSelectContext ctx);
	/**
	 * Visit a parse tree produced by the {@code createTable}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCreateTable(trinoSqlParserParser.CreateTableContext ctx);
	/**
	 * Visit a parse tree produced by the {@code dropTable}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDropTable(trinoSqlParserParser.DropTableContext ctx);
	/**
	 * Visit a parse tree produced by the {@code insertInto}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInsertInto(trinoSqlParserParser.InsertIntoContext ctx);
	/**
	 * Visit a parse tree produced by the {@code delete}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDelete(trinoSqlParserParser.DeleteContext ctx);
	/**
	 * Visit a parse tree produced by the {@code truncateTable}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTruncateTable(trinoSqlParserParser.TruncateTableContext ctx);
	/**
	 * Visit a parse tree produced by the {@code renameTable}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRenameTable(trinoSqlParserParser.RenameTableContext ctx);
	/**
	 * Visit a parse tree produced by the {@code commentTable}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCommentTable(trinoSqlParserParser.CommentTableContext ctx);
	/**
	 * Visit a parse tree produced by the {@code commentColumn}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCommentColumn(trinoSqlParserParser.CommentColumnContext ctx);
	/**
	 * Visit a parse tree produced by the {@code renameColumn}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRenameColumn(trinoSqlParserParser.RenameColumnContext ctx);
	/**
	 * Visit a parse tree produced by the {@code dropColumn}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDropColumn(trinoSqlParserParser.DropColumnContext ctx);
	/**
	 * Visit a parse tree produced by the {@code addColumn}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAddColumn(trinoSqlParserParser.AddColumnContext ctx);
	/**
	 * Visit a parse tree produced by the {@code setTableAuthorization}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSetTableAuthorization(trinoSqlParserParser.SetTableAuthorizationContext ctx);
	/**
	 * Visit a parse tree produced by the {@code setTableProperties}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSetTableProperties(trinoSqlParserParser.SetTablePropertiesContext ctx);
	/**
	 * Visit a parse tree produced by the {@code tableExecute}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTableExecute(trinoSqlParserParser.TableExecuteContext ctx);
	/**
	 * Visit a parse tree produced by the {@code analyze}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAnalyze(trinoSqlParserParser.AnalyzeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code createMaterializedView}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCreateMaterializedView(trinoSqlParserParser.CreateMaterializedViewContext ctx);
	/**
	 * Visit a parse tree produced by the {@code createView}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCreateView(trinoSqlParserParser.CreateViewContext ctx);
	/**
	 * Visit a parse tree produced by the {@code refreshMaterializedView}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRefreshMaterializedView(trinoSqlParserParser.RefreshMaterializedViewContext ctx);
	/**
	 * Visit a parse tree produced by the {@code dropMaterializedView}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDropMaterializedView(trinoSqlParserParser.DropMaterializedViewContext ctx);
	/**
	 * Visit a parse tree produced by the {@code renameMaterializedView}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRenameMaterializedView(trinoSqlParserParser.RenameMaterializedViewContext ctx);
	/**
	 * Visit a parse tree produced by the {@code setMaterializedViewProperties}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSetMaterializedViewProperties(trinoSqlParserParser.SetMaterializedViewPropertiesContext ctx);
	/**
	 * Visit a parse tree produced by the {@code dropView}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDropView(trinoSqlParserParser.DropViewContext ctx);
	/**
	 * Visit a parse tree produced by the {@code renameView}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRenameView(trinoSqlParserParser.RenameViewContext ctx);
	/**
	 * Visit a parse tree produced by the {@code setViewAuthorization}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSetViewAuthorization(trinoSqlParserParser.SetViewAuthorizationContext ctx);
	/**
	 * Visit a parse tree produced by the {@code call}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCall(trinoSqlParserParser.CallContext ctx);
	/**
	 * Visit a parse tree produced by the {@code createRole}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCreateRole(trinoSqlParserParser.CreateRoleContext ctx);
	/**
	 * Visit a parse tree produced by the {@code dropRole}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDropRole(trinoSqlParserParser.DropRoleContext ctx);
	/**
	 * Visit a parse tree produced by the {@code grantRoles}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGrantRoles(trinoSqlParserParser.GrantRolesContext ctx);
	/**
	 * Visit a parse tree produced by the {@code revokeRoles}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRevokeRoles(trinoSqlParserParser.RevokeRolesContext ctx);
	/**
	 * Visit a parse tree produced by the {@code setRole}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSetRole(trinoSqlParserParser.SetRoleContext ctx);
	/**
	 * Visit a parse tree produced by the {@code grant}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGrant(trinoSqlParserParser.GrantContext ctx);
	/**
	 * Visit a parse tree produced by the {@code deny}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDeny(trinoSqlParserParser.DenyContext ctx);
	/**
	 * Visit a parse tree produced by the {@code revoke}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRevoke(trinoSqlParserParser.RevokeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code showGrants}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitShowGrants(trinoSqlParserParser.ShowGrantsContext ctx);
	/**
	 * Visit a parse tree produced by the {@code explain}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExplain(trinoSqlParserParser.ExplainContext ctx);
	/**
	 * Visit a parse tree produced by the {@code showCreateTable}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitShowCreateTable(trinoSqlParserParser.ShowCreateTableContext ctx);
	/**
	 * Visit a parse tree produced by the {@code showCreateSchema}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitShowCreateSchema(trinoSqlParserParser.ShowCreateSchemaContext ctx);
	/**
	 * Visit a parse tree produced by the {@code showCreateView}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitShowCreateView(trinoSqlParserParser.ShowCreateViewContext ctx);
	/**
	 * Visit a parse tree produced by the {@code showCreateMaterializedView}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitShowCreateMaterializedView(trinoSqlParserParser.ShowCreateMaterializedViewContext ctx);
	/**
	 * Visit a parse tree produced by the {@code showTables}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitShowTables(trinoSqlParserParser.ShowTablesContext ctx);
	/**
	 * Visit a parse tree produced by the {@code showSchemas}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitShowSchemas(trinoSqlParserParser.ShowSchemasContext ctx);
	/**
	 * Visit a parse tree produced by the {@code showCatalogs}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitShowCatalogs(trinoSqlParserParser.ShowCatalogsContext ctx);
	/**
	 * Visit a parse tree produced by the {@code showColumns}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitShowColumns(trinoSqlParserParser.ShowColumnsContext ctx);
	/**
	 * Visit a parse tree produced by the {@code showStats}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitShowStats(trinoSqlParserParser.ShowStatsContext ctx);
	/**
	 * Visit a parse tree produced by the {@code showStatsForQuery}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitShowStatsForQuery(trinoSqlParserParser.ShowStatsForQueryContext ctx);
	/**
	 * Visit a parse tree produced by the {@code showRoles}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitShowRoles(trinoSqlParserParser.ShowRolesContext ctx);
	/**
	 * Visit a parse tree produced by the {@code showRoleGrants}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitShowRoleGrants(trinoSqlParserParser.ShowRoleGrantsContext ctx);
	/**
	 * Visit a parse tree produced by the {@code showFunctions}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitShowFunctions(trinoSqlParserParser.ShowFunctionsContext ctx);
	/**
	 * Visit a parse tree produced by the {@code showSession}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitShowSession(trinoSqlParserParser.ShowSessionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code setSession}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSetSession(trinoSqlParserParser.SetSessionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code resetSession}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitResetSession(trinoSqlParserParser.ResetSessionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code startTransaction}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStartTransaction(trinoSqlParserParser.StartTransactionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code commit}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCommit(trinoSqlParserParser.CommitContext ctx);
	/**
	 * Visit a parse tree produced by the {@code rollback}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRollback(trinoSqlParserParser.RollbackContext ctx);
	/**
	 * Visit a parse tree produced by the {@code prepare}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPrepare(trinoSqlParserParser.PrepareContext ctx);
	/**
	 * Visit a parse tree produced by the {@code deallocate}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDeallocate(trinoSqlParserParser.DeallocateContext ctx);
	/**
	 * Visit a parse tree produced by the {@code execute}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExecute(trinoSqlParserParser.ExecuteContext ctx);
	/**
	 * Visit a parse tree produced by the {@code describeInput}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDescribeInput(trinoSqlParserParser.DescribeInputContext ctx);
	/**
	 * Visit a parse tree produced by the {@code describeOutput}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDescribeOutput(trinoSqlParserParser.DescribeOutputContext ctx);
	/**
	 * Visit a parse tree produced by the {@code setPath}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSetPath(trinoSqlParserParser.SetPathContext ctx);
	/**
	 * Visit a parse tree produced by the {@code setTimeZone}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSetTimeZone(trinoSqlParserParser.SetTimeZoneContext ctx);
	/**
	 * Visit a parse tree produced by the {@code update}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUpdate(trinoSqlParserParser.UpdateContext ctx);
	/**
	 * Visit a parse tree produced by the {@code merge}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMerge(trinoSqlParserParser.MergeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code showTableComment}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitShowTableComment(trinoSqlParserParser.ShowTableCommentContext ctx);
	/**
	 * Visit a parse tree produced by the {@code showColumnComment}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitShowColumnComment(trinoSqlParserParser.ShowColumnCommentContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#query}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitQuery(trinoSqlParserParser.QueryContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#with}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWith(trinoSqlParserParser.WithContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#tableElement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTableElement(trinoSqlParserParser.TableElementContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#columnDefinition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitColumnDefinition(trinoSqlParserParser.ColumnDefinitionContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#likeClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLikeClause(trinoSqlParserParser.LikeClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#properties}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitProperties(trinoSqlParserParser.PropertiesContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#propertyAssignments}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPropertyAssignments(trinoSqlParserParser.PropertyAssignmentsContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#property}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitProperty(trinoSqlParserParser.PropertyContext ctx);
	/**
	 * Visit a parse tree produced by the {@code defaultPropertyValue}
	 * labeled alternative in {@link trinoSqlParserParser#propertyValue}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDefaultPropertyValue(trinoSqlParserParser.DefaultPropertyValueContext ctx);
	/**
	 * Visit a parse tree produced by the {@code nonDefaultPropertyValue}
	 * labeled alternative in {@link trinoSqlParserParser#propertyValue}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNonDefaultPropertyValue(trinoSqlParserParser.NonDefaultPropertyValueContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#queryNoWith}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitQueryNoWith(trinoSqlParserParser.QueryNoWithContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#limitRowCount}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLimitRowCount(trinoSqlParserParser.LimitRowCountContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#rowCount}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRowCount(trinoSqlParserParser.RowCountContext ctx);
	/**
	 * Visit a parse tree produced by the {@code queryTermDefault}
	 * labeled alternative in {@link trinoSqlParserParser#queryTerm}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitQueryTermDefault(trinoSqlParserParser.QueryTermDefaultContext ctx);
	/**
	 * Visit a parse tree produced by the {@code setOperation}
	 * labeled alternative in {@link trinoSqlParserParser#queryTerm}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSetOperation(trinoSqlParserParser.SetOperationContext ctx);
	/**
	 * Visit a parse tree produced by the {@code queryPrimaryDefault}
	 * labeled alternative in {@link trinoSqlParserParser#queryPrimary}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitQueryPrimaryDefault(trinoSqlParserParser.QueryPrimaryDefaultContext ctx);
	/**
	 * Visit a parse tree produced by the {@code table}
	 * labeled alternative in {@link trinoSqlParserParser#queryPrimary}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTable(trinoSqlParserParser.TableContext ctx);
	/**
	 * Visit a parse tree produced by the {@code inlineTable}
	 * labeled alternative in {@link trinoSqlParserParser#queryPrimary}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInlineTable(trinoSqlParserParser.InlineTableContext ctx);
	/**
	 * Visit a parse tree produced by the {@code subquery}
	 * labeled alternative in {@link trinoSqlParserParser#queryPrimary}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSubquery(trinoSqlParserParser.SubqueryContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#sortItem}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSortItem(trinoSqlParserParser.SortItemContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#querySpecification}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitQuerySpecification(trinoSqlParserParser.QuerySpecificationContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#groupBy}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGroupBy(trinoSqlParserParser.GroupByContext ctx);
	/**
	 * Visit a parse tree produced by the {@code singleGroupingSet}
	 * labeled alternative in {@link trinoSqlParserParser#groupingElement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSingleGroupingSet(trinoSqlParserParser.SingleGroupingSetContext ctx);
	/**
	 * Visit a parse tree produced by the {@code rollup}
	 * labeled alternative in {@link trinoSqlParserParser#groupingElement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRollup(trinoSqlParserParser.RollupContext ctx);
	/**
	 * Visit a parse tree produced by the {@code cube}
	 * labeled alternative in {@link trinoSqlParserParser#groupingElement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCube(trinoSqlParserParser.CubeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code multipleGroupingSets}
	 * labeled alternative in {@link trinoSqlParserParser#groupingElement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMultipleGroupingSets(trinoSqlParserParser.MultipleGroupingSetsContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#groupingSet}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGroupingSet(trinoSqlParserParser.GroupingSetContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#windowDefinition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWindowDefinition(trinoSqlParserParser.WindowDefinitionContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#windowSpecification}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWindowSpecification(trinoSqlParserParser.WindowSpecificationContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#namedQuery}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNamedQuery(trinoSqlParserParser.NamedQueryContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#setQuantifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSetQuantifier(trinoSqlParserParser.SetQuantifierContext ctx);
	/**
	 * Visit a parse tree produced by the {@code selectSingle}
	 * labeled alternative in {@link trinoSqlParserParser#selectItem}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSelectSingle(trinoSqlParserParser.SelectSingleContext ctx);
	/**
	 * Visit a parse tree produced by the {@code selectAll}
	 * labeled alternative in {@link trinoSqlParserParser#selectItem}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSelectAll(trinoSqlParserParser.SelectAllContext ctx);
	/**
	 * Visit a parse tree produced by the {@code relationDefault}
	 * labeled alternative in {@link trinoSqlParserParser#relation}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRelationDefault(trinoSqlParserParser.RelationDefaultContext ctx);
	/**
	 * Visit a parse tree produced by the {@code joinRelation}
	 * labeled alternative in {@link trinoSqlParserParser#relation}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitJoinRelation(trinoSqlParserParser.JoinRelationContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#joinType}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitJoinType(trinoSqlParserParser.JoinTypeContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#joinCriteria}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitJoinCriteria(trinoSqlParserParser.JoinCriteriaContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#sampledRelation}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSampledRelation(trinoSqlParserParser.SampledRelationContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#sampleType}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSampleType(trinoSqlParserParser.SampleTypeContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#patternRecognition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPatternRecognition(trinoSqlParserParser.PatternRecognitionContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#measureDefinition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMeasureDefinition(trinoSqlParserParser.MeasureDefinitionContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#rowsPerMatch}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRowsPerMatch(trinoSqlParserParser.RowsPerMatchContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#emptyMatchHandling}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitEmptyMatchHandling(trinoSqlParserParser.EmptyMatchHandlingContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#skipTo}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSkipTo(trinoSqlParserParser.SkipToContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#subsetDefinition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSubsetDefinition(trinoSqlParserParser.SubsetDefinitionContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#variableDefinition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVariableDefinition(trinoSqlParserParser.VariableDefinitionContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#aliasedRelation}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAliasedRelation(trinoSqlParserParser.AliasedRelationContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#columnAliases}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitColumnAliases(trinoSqlParserParser.ColumnAliasesContext ctx);
	/**
	 * Visit a parse tree produced by the {@code tableName}
	 * labeled alternative in {@link trinoSqlParserParser#relationPrimary}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTableName(trinoSqlParserParser.TableNameContext ctx);
	/**
	 * Visit a parse tree produced by the {@code subqueryRelation}
	 * labeled alternative in {@link trinoSqlParserParser#relationPrimary}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSubqueryRelation(trinoSqlParserParser.SubqueryRelationContext ctx);
	/**
	 * Visit a parse tree produced by the {@code unnest}
	 * labeled alternative in {@link trinoSqlParserParser#relationPrimary}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUnnest(trinoSqlParserParser.UnnestContext ctx);
	/**
	 * Visit a parse tree produced by the {@code lateral}
	 * labeled alternative in {@link trinoSqlParserParser#relationPrimary}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLateral(trinoSqlParserParser.LateralContext ctx);
	/**
	 * Visit a parse tree produced by the {@code parenthesizedRelation}
	 * labeled alternative in {@link trinoSqlParserParser#relationPrimary}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitParenthesizedRelation(trinoSqlParserParser.ParenthesizedRelationContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpression(trinoSqlParserParser.ExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code logicalNot}
	 * labeled alternative in {@link trinoSqlParserParser#booleanExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLogicalNot(trinoSqlParserParser.LogicalNotContext ctx);
	/**
	 * Visit a parse tree produced by the {@code predicated}
	 * labeled alternative in {@link trinoSqlParserParser#booleanExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPredicated(trinoSqlParserParser.PredicatedContext ctx);
	/**
	 * Visit a parse tree produced by the {@code logicalBinary}
	 * labeled alternative in {@link trinoSqlParserParser#booleanExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLogicalBinary(trinoSqlParserParser.LogicalBinaryContext ctx);
	/**
	 * Visit a parse tree produced by the {@code comparison}
	 * labeled alternative in {@link trinoSqlParserParser#predicate}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitComparison(trinoSqlParserParser.ComparisonContext ctx);
	/**
	 * Visit a parse tree produced by the {@code quantifiedComparison}
	 * labeled alternative in {@link trinoSqlParserParser#predicate}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitQuantifiedComparison(trinoSqlParserParser.QuantifiedComparisonContext ctx);
	/**
	 * Visit a parse tree produced by the {@code between}
	 * labeled alternative in {@link trinoSqlParserParser#predicate}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBetween(trinoSqlParserParser.BetweenContext ctx);
	/**
	 * Visit a parse tree produced by the {@code inList}
	 * labeled alternative in {@link trinoSqlParserParser#predicate}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInList(trinoSqlParserParser.InListContext ctx);
	/**
	 * Visit a parse tree produced by the {@code inSubquery}
	 * labeled alternative in {@link trinoSqlParserParser#predicate}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInSubquery(trinoSqlParserParser.InSubqueryContext ctx);
	/**
	 * Visit a parse tree produced by the {@code like}
	 * labeled alternative in {@link trinoSqlParserParser#predicate}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLike(trinoSqlParserParser.LikeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code nullPredicate}
	 * labeled alternative in {@link trinoSqlParserParser#predicate}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNullPredicate(trinoSqlParserParser.NullPredicateContext ctx);
	/**
	 * Visit a parse tree produced by the {@code distinctFrom}
	 * labeled alternative in {@link trinoSqlParserParser#predicate}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDistinctFrom(trinoSqlParserParser.DistinctFromContext ctx);
	/**
	 * Visit a parse tree produced by the {@code valueExpressionDefault}
	 * labeled alternative in {@link trinoSqlParserParser#valueExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitValueExpressionDefault(trinoSqlParserParser.ValueExpressionDefaultContext ctx);
	/**
	 * Visit a parse tree produced by the {@code concatenation}
	 * labeled alternative in {@link trinoSqlParserParser#valueExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitConcatenation(trinoSqlParserParser.ConcatenationContext ctx);
	/**
	 * Visit a parse tree produced by the {@code arithmeticBinary}
	 * labeled alternative in {@link trinoSqlParserParser#valueExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArithmeticBinary(trinoSqlParserParser.ArithmeticBinaryContext ctx);
	/**
	 * Visit a parse tree produced by the {@code arithmeticUnary}
	 * labeled alternative in {@link trinoSqlParserParser#valueExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArithmeticUnary(trinoSqlParserParser.ArithmeticUnaryContext ctx);
	/**
	 * Visit a parse tree produced by the {@code atTimeZone}
	 * labeled alternative in {@link trinoSqlParserParser#valueExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAtTimeZone(trinoSqlParserParser.AtTimeZoneContext ctx);
	/**
	 * Visit a parse tree produced by the {@code dereference}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDereference(trinoSqlParserParser.DereferenceContext ctx);
	/**
	 * Visit a parse tree produced by the {@code typeConstructor}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTypeConstructor(trinoSqlParserParser.TypeConstructorContext ctx);
	/**
	 * Visit a parse tree produced by the {@code specialDateTimeFunction}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSpecialDateTimeFunction(trinoSqlParserParser.SpecialDateTimeFunctionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code substring}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSubstring(trinoSqlParserParser.SubstringContext ctx);
	/**
	 * Visit a parse tree produced by the {@code cast}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCast(trinoSqlParserParser.CastContext ctx);
	/**
	 * Visit a parse tree produced by the {@code lambda}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLambda(trinoSqlParserParser.LambdaContext ctx);
	/**
	 * Visit a parse tree produced by the {@code parenthesizedExpression}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitParenthesizedExpression(trinoSqlParserParser.ParenthesizedExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code parameter}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitParameter(trinoSqlParserParser.ParameterContext ctx);
	/**
	 * Visit a parse tree produced by the {@code normalize}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNormalize(trinoSqlParserParser.NormalizeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code intervalLiteral}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIntervalLiteral(trinoSqlParserParser.IntervalLiteralContext ctx);
	/**
	 * Visit a parse tree produced by the {@code numericLiteral}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNumericLiteral(trinoSqlParserParser.NumericLiteralContext ctx);
	/**
	 * Visit a parse tree produced by the {@code booleanLiteral}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBooleanLiteral(trinoSqlParserParser.BooleanLiteralContext ctx);
	/**
	 * Visit a parse tree produced by the {@code simpleCase}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSimpleCase(trinoSqlParserParser.SimpleCaseContext ctx);
	/**
	 * Visit a parse tree produced by the {@code columnReference}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitColumnReference(trinoSqlParserParser.ColumnReferenceContext ctx);
	/**
	 * Visit a parse tree produced by the {@code nullLiteral}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNullLiteral(trinoSqlParserParser.NullLiteralContext ctx);
	/**
	 * Visit a parse tree produced by the {@code rowConstructor}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRowConstructor(trinoSqlParserParser.RowConstructorContext ctx);
	/**
	 * Visit a parse tree produced by the {@code subscript}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSubscript(trinoSqlParserParser.SubscriptContext ctx);
	/**
	 * Visit a parse tree produced by the {@code currentPath}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCurrentPath(trinoSqlParserParser.CurrentPathContext ctx);
	/**
	 * Visit a parse tree produced by the {@code subqueryExpression}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSubqueryExpression(trinoSqlParserParser.SubqueryExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code binaryLiteral}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBinaryLiteral(trinoSqlParserParser.BinaryLiteralContext ctx);
	/**
	 * Visit a parse tree produced by the {@code currentUser}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCurrentUser(trinoSqlParserParser.CurrentUserContext ctx);
	/**
	 * Visit a parse tree produced by the {@code measure}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMeasure(trinoSqlParserParser.MeasureContext ctx);
	/**
	 * Visit a parse tree produced by the {@code extract}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExtract(trinoSqlParserParser.ExtractContext ctx);
	/**
	 * Visit a parse tree produced by the {@code stringLiteral}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStringLiteral(trinoSqlParserParser.StringLiteralContext ctx);
	/**
	 * Visit a parse tree produced by the {@code arrayConstructor}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArrayConstructor(trinoSqlParserParser.ArrayConstructorContext ctx);
	/**
	 * Visit a parse tree produced by the {@code functionCall}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctionCall(trinoSqlParserParser.FunctionCallContext ctx);
	/**
	 * Visit a parse tree produced by the {@code currentSchema}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCurrentSchema(trinoSqlParserParser.CurrentSchemaContext ctx);
	/**
	 * Visit a parse tree produced by the {@code exists}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExists(trinoSqlParserParser.ExistsContext ctx);
	/**
	 * Visit a parse tree produced by the {@code position}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPosition(trinoSqlParserParser.PositionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code searchedCase}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSearchedCase(trinoSqlParserParser.SearchedCaseContext ctx);
	/**
	 * Visit a parse tree produced by the {@code currentCatalog}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCurrentCatalog(trinoSqlParserParser.CurrentCatalogContext ctx);
	/**
	 * Visit a parse tree produced by the {@code groupingOperation}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGroupingOperation(trinoSqlParserParser.GroupingOperationContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#processingMode}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitProcessingMode(trinoSqlParserParser.ProcessingModeContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#nullTreatment}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNullTreatment(trinoSqlParserParser.NullTreatmentContext ctx);
	/**
	 * Visit a parse tree produced by the {@code basicStringLiteral}
	 * labeled alternative in {@link trinoSqlParserParser#string}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBasicStringLiteral(trinoSqlParserParser.BasicStringLiteralContext ctx);
	/**
	 * Visit a parse tree produced by the {@code unicodeStringLiteral}
	 * labeled alternative in {@link trinoSqlParserParser#string}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUnicodeStringLiteral(trinoSqlParserParser.UnicodeStringLiteralContext ctx);
	/**
	 * Visit a parse tree produced by the {@code timeZoneInterval}
	 * labeled alternative in {@link trinoSqlParserParser#timeZoneSpecifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTimeZoneInterval(trinoSqlParserParser.TimeZoneIntervalContext ctx);
	/**
	 * Visit a parse tree produced by the {@code timeZoneString}
	 * labeled alternative in {@link trinoSqlParserParser#timeZoneSpecifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTimeZoneString(trinoSqlParserParser.TimeZoneStringContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#comparisonOperator}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitComparisonOperator(trinoSqlParserParser.ComparisonOperatorContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#comparisonQuantifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitComparisonQuantifier(trinoSqlParserParser.ComparisonQuantifierContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#booleanValue}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBooleanValue(trinoSqlParserParser.BooleanValueContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#interval}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInterval(trinoSqlParserParser.IntervalContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#intervalField}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIntervalField(trinoSqlParserParser.IntervalFieldContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#normalForm}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNormalForm(trinoSqlParserParser.NormalFormContext ctx);
	/**
	 * Visit a parse tree produced by the {@code rowType}
	 * labeled alternative in {@link trinoSqlParserParser#type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRowType(trinoSqlParserParser.RowTypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code intervalType}
	 * labeled alternative in {@link trinoSqlParserParser#type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIntervalType(trinoSqlParserParser.IntervalTypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code arrayType}
	 * labeled alternative in {@link trinoSqlParserParser#type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArrayType(trinoSqlParserParser.ArrayTypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code doublePrecisionType}
	 * labeled alternative in {@link trinoSqlParserParser#type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDoublePrecisionType(trinoSqlParserParser.DoublePrecisionTypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code legacyArrayType}
	 * labeled alternative in {@link trinoSqlParserParser#type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLegacyArrayType(trinoSqlParserParser.LegacyArrayTypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code genericType}
	 * labeled alternative in {@link trinoSqlParserParser#type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGenericType(trinoSqlParserParser.GenericTypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code dateTimeType}
	 * labeled alternative in {@link trinoSqlParserParser#type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDateTimeType(trinoSqlParserParser.DateTimeTypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code legacyMapType}
	 * labeled alternative in {@link trinoSqlParserParser#type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLegacyMapType(trinoSqlParserParser.LegacyMapTypeContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#rowField}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRowField(trinoSqlParserParser.RowFieldContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#typeParameter}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTypeParameter(trinoSqlParserParser.TypeParameterContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#whenClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWhenClause(trinoSqlParserParser.WhenClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#filter}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFilter(trinoSqlParserParser.FilterContext ctx);
	/**
	 * Visit a parse tree produced by the {@code mergeUpdate}
	 * labeled alternative in {@link trinoSqlParserParser#mergeCase}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMergeUpdate(trinoSqlParserParser.MergeUpdateContext ctx);
	/**
	 * Visit a parse tree produced by the {@code mergeDelete}
	 * labeled alternative in {@link trinoSqlParserParser#mergeCase}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMergeDelete(trinoSqlParserParser.MergeDeleteContext ctx);
	/**
	 * Visit a parse tree produced by the {@code mergeInsert}
	 * labeled alternative in {@link trinoSqlParserParser#mergeCase}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMergeInsert(trinoSqlParserParser.MergeInsertContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#over}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOver(trinoSqlParserParser.OverContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#windowFrame}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWindowFrame(trinoSqlParserParser.WindowFrameContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#frameExtent}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFrameExtent(trinoSqlParserParser.FrameExtentContext ctx);
	/**
	 * Visit a parse tree produced by the {@code unboundedFrame}
	 * labeled alternative in {@link trinoSqlParserParser#frameBound}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUnboundedFrame(trinoSqlParserParser.UnboundedFrameContext ctx);
	/**
	 * Visit a parse tree produced by the {@code currentRowBound}
	 * labeled alternative in {@link trinoSqlParserParser#frameBound}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCurrentRowBound(trinoSqlParserParser.CurrentRowBoundContext ctx);
	/**
	 * Visit a parse tree produced by the {@code boundedFrame}
	 * labeled alternative in {@link trinoSqlParserParser#frameBound}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBoundedFrame(trinoSqlParserParser.BoundedFrameContext ctx);
	/**
	 * Visit a parse tree produced by the {@code quantifiedPrimary}
	 * labeled alternative in {@link trinoSqlParserParser#rowPattern}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitQuantifiedPrimary(trinoSqlParserParser.QuantifiedPrimaryContext ctx);
	/**
	 * Visit a parse tree produced by the {@code patternConcatenation}
	 * labeled alternative in {@link trinoSqlParserParser#rowPattern}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPatternConcatenation(trinoSqlParserParser.PatternConcatenationContext ctx);
	/**
	 * Visit a parse tree produced by the {@code patternAlternation}
	 * labeled alternative in {@link trinoSqlParserParser#rowPattern}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPatternAlternation(trinoSqlParserParser.PatternAlternationContext ctx);
	/**
	 * Visit a parse tree produced by the {@code patternVariable}
	 * labeled alternative in {@link trinoSqlParserParser#patternPrimary}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPatternVariable(trinoSqlParserParser.PatternVariableContext ctx);
	/**
	 * Visit a parse tree produced by the {@code emptyPattern}
	 * labeled alternative in {@link trinoSqlParserParser#patternPrimary}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitEmptyPattern(trinoSqlParserParser.EmptyPatternContext ctx);
	/**
	 * Visit a parse tree produced by the {@code patternPermutation}
	 * labeled alternative in {@link trinoSqlParserParser#patternPrimary}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPatternPermutation(trinoSqlParserParser.PatternPermutationContext ctx);
	/**
	 * Visit a parse tree produced by the {@code groupedPattern}
	 * labeled alternative in {@link trinoSqlParserParser#patternPrimary}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGroupedPattern(trinoSqlParserParser.GroupedPatternContext ctx);
	/**
	 * Visit a parse tree produced by the {@code partitionStartAnchor}
	 * labeled alternative in {@link trinoSqlParserParser#patternPrimary}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPartitionStartAnchor(trinoSqlParserParser.PartitionStartAnchorContext ctx);
	/**
	 * Visit a parse tree produced by the {@code partitionEndAnchor}
	 * labeled alternative in {@link trinoSqlParserParser#patternPrimary}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPartitionEndAnchor(trinoSqlParserParser.PartitionEndAnchorContext ctx);
	/**
	 * Visit a parse tree produced by the {@code excludedPattern}
	 * labeled alternative in {@link trinoSqlParserParser#patternPrimary}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExcludedPattern(trinoSqlParserParser.ExcludedPatternContext ctx);
	/**
	 * Visit a parse tree produced by the {@code zeroOrMoreQuantifier}
	 * labeled alternative in {@link trinoSqlParserParser#patternQuantifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitZeroOrMoreQuantifier(trinoSqlParserParser.ZeroOrMoreQuantifierContext ctx);
	/**
	 * Visit a parse tree produced by the {@code oneOrMoreQuantifier}
	 * labeled alternative in {@link trinoSqlParserParser#patternQuantifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOneOrMoreQuantifier(trinoSqlParserParser.OneOrMoreQuantifierContext ctx);
	/**
	 * Visit a parse tree produced by the {@code zeroOrOneQuantifier}
	 * labeled alternative in {@link trinoSqlParserParser#patternQuantifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitZeroOrOneQuantifier(trinoSqlParserParser.ZeroOrOneQuantifierContext ctx);
	/**
	 * Visit a parse tree produced by the {@code rangeQuantifier}
	 * labeled alternative in {@link trinoSqlParserParser#patternQuantifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRangeQuantifier(trinoSqlParserParser.RangeQuantifierContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#updateAssignment}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUpdateAssignment(trinoSqlParserParser.UpdateAssignmentContext ctx);
	/**
	 * Visit a parse tree produced by the {@code explainFormat}
	 * labeled alternative in {@link trinoSqlParserParser#explainOption}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExplainFormat(trinoSqlParserParser.ExplainFormatContext ctx);
	/**
	 * Visit a parse tree produced by the {@code explainType}
	 * labeled alternative in {@link trinoSqlParserParser#explainOption}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExplainType(trinoSqlParserParser.ExplainTypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code isolationLevel}
	 * labeled alternative in {@link trinoSqlParserParser#transactionMode}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIsolationLevel(trinoSqlParserParser.IsolationLevelContext ctx);
	/**
	 * Visit a parse tree produced by the {@code transactionAccessMode}
	 * labeled alternative in {@link trinoSqlParserParser#transactionMode}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTransactionAccessMode(trinoSqlParserParser.TransactionAccessModeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code readUncommitted}
	 * labeled alternative in {@link trinoSqlParserParser#levelOfIsolation}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitReadUncommitted(trinoSqlParserParser.ReadUncommittedContext ctx);
	/**
	 * Visit a parse tree produced by the {@code readCommitted}
	 * labeled alternative in {@link trinoSqlParserParser#levelOfIsolation}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitReadCommitted(trinoSqlParserParser.ReadCommittedContext ctx);
	/**
	 * Visit a parse tree produced by the {@code repeatableRead}
	 * labeled alternative in {@link trinoSqlParserParser#levelOfIsolation}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRepeatableRead(trinoSqlParserParser.RepeatableReadContext ctx);
	/**
	 * Visit a parse tree produced by the {@code serializable}
	 * labeled alternative in {@link trinoSqlParserParser#levelOfIsolation}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSerializable(trinoSqlParserParser.SerializableContext ctx);
	/**
	 * Visit a parse tree produced by the {@code positionalArgument}
	 * labeled alternative in {@link trinoSqlParserParser#callArgument}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPositionalArgument(trinoSqlParserParser.PositionalArgumentContext ctx);
	/**
	 * Visit a parse tree produced by the {@code namedArgument}
	 * labeled alternative in {@link trinoSqlParserParser#callArgument}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNamedArgument(trinoSqlParserParser.NamedArgumentContext ctx);
	/**
	 * Visit a parse tree produced by the {@code qualifiedArgument}
	 * labeled alternative in {@link trinoSqlParserParser#pathElement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitQualifiedArgument(trinoSqlParserParser.QualifiedArgumentContext ctx);
	/**
	 * Visit a parse tree produced by the {@code unqualifiedArgument}
	 * labeled alternative in {@link trinoSqlParserParser#pathElement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUnqualifiedArgument(trinoSqlParserParser.UnqualifiedArgumentContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#pathSpecification}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPathSpecification(trinoSqlParserParser.PathSpecificationContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#privilege}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPrivilege(trinoSqlParserParser.PrivilegeContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#qualifiedName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitQualifiedName(trinoSqlParserParser.QualifiedNameContext ctx);
	/**
	 * Visit a parse tree produced by the {@code specifiedPrincipal}
	 * labeled alternative in {@link trinoSqlParserParser#grantor}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSpecifiedPrincipal(trinoSqlParserParser.SpecifiedPrincipalContext ctx);
	/**
	 * Visit a parse tree produced by the {@code currentUserGrantor}
	 * labeled alternative in {@link trinoSqlParserParser#grantor}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCurrentUserGrantor(trinoSqlParserParser.CurrentUserGrantorContext ctx);
	/**
	 * Visit a parse tree produced by the {@code currentRoleGrantor}
	 * labeled alternative in {@link trinoSqlParserParser#grantor}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCurrentRoleGrantor(trinoSqlParserParser.CurrentRoleGrantorContext ctx);
	/**
	 * Visit a parse tree produced by the {@code unspecifiedPrincipal}
	 * labeled alternative in {@link trinoSqlParserParser#principal}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUnspecifiedPrincipal(trinoSqlParserParser.UnspecifiedPrincipalContext ctx);
	/**
	 * Visit a parse tree produced by the {@code userPrincipal}
	 * labeled alternative in {@link trinoSqlParserParser#principal}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUserPrincipal(trinoSqlParserParser.UserPrincipalContext ctx);
	/**
	 * Visit a parse tree produced by the {@code rolePrincipal}
	 * labeled alternative in {@link trinoSqlParserParser#principal}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRolePrincipal(trinoSqlParserParser.RolePrincipalContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#roles}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRoles(trinoSqlParserParser.RolesContext ctx);
	/**
	 * Visit a parse tree produced by the {@code unquotedIdentifier}
	 * labeled alternative in {@link trinoSqlParserParser#identifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUnquotedIdentifier(trinoSqlParserParser.UnquotedIdentifierContext ctx);
	/**
	 * Visit a parse tree produced by the {@code quotedIdentifier}
	 * labeled alternative in {@link trinoSqlParserParser#identifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitQuotedIdentifier(trinoSqlParserParser.QuotedIdentifierContext ctx);
	/**
	 * Visit a parse tree produced by the {@code backQuotedIdentifier}
	 * labeled alternative in {@link trinoSqlParserParser#identifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBackQuotedIdentifier(trinoSqlParserParser.BackQuotedIdentifierContext ctx);
	/**
	 * Visit a parse tree produced by the {@code digitIdentifier}
	 * labeled alternative in {@link trinoSqlParserParser#identifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDigitIdentifier(trinoSqlParserParser.DigitIdentifierContext ctx);
	/**
	 * Visit a parse tree produced by the {@code decimalLiteral}
	 * labeled alternative in {@link trinoSqlParserParser#number}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDecimalLiteral(trinoSqlParserParser.DecimalLiteralContext ctx);
	/**
	 * Visit a parse tree produced by the {@code doubleLiteral}
	 * labeled alternative in {@link trinoSqlParserParser#number}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDoubleLiteral(trinoSqlParserParser.DoubleLiteralContext ctx);
	/**
	 * Visit a parse tree produced by the {@code integerLiteral}
	 * labeled alternative in {@link trinoSqlParserParser#number}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIntegerLiteral(trinoSqlParserParser.IntegerLiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link trinoSqlParserParser#nonReserved}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNonReserved(trinoSqlParserParser.NonReservedContext ctx);
}