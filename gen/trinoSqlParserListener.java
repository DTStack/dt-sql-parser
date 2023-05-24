// Generated from /Users/zhenglin/Documents/parser/dt-sql-parser/src/grammar/trinosql/trinoSqlParser.g4 by ANTLR 4.12.0
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link trinoSqlParserParser}.
 */
public interface trinoSqlParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(trinoSqlParserParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(trinoSqlParserParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#statements}.
	 * @param ctx the parse tree
	 */
	void enterStatements(trinoSqlParserParser.StatementsContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#statements}.
	 * @param ctx the parse tree
	 */
	void exitStatements(trinoSqlParserParser.StatementsContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#singleStatement}.
	 * @param ctx the parse tree
	 */
	void enterSingleStatement(trinoSqlParserParser.SingleStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#singleStatement}.
	 * @param ctx the parse tree
	 */
	void exitSingleStatement(trinoSqlParserParser.SingleStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#standaloneExpression}.
	 * @param ctx the parse tree
	 */
	void enterStandaloneExpression(trinoSqlParserParser.StandaloneExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#standaloneExpression}.
	 * @param ctx the parse tree
	 */
	void exitStandaloneExpression(trinoSqlParserParser.StandaloneExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#standalonePathSpecification}.
	 * @param ctx the parse tree
	 */
	void enterStandalonePathSpecification(trinoSqlParserParser.StandalonePathSpecificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#standalonePathSpecification}.
	 * @param ctx the parse tree
	 */
	void exitStandalonePathSpecification(trinoSqlParserParser.StandalonePathSpecificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#standaloneType}.
	 * @param ctx the parse tree
	 */
	void enterStandaloneType(trinoSqlParserParser.StandaloneTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#standaloneType}.
	 * @param ctx the parse tree
	 */
	void exitStandaloneType(trinoSqlParserParser.StandaloneTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#standaloneRowPattern}.
	 * @param ctx the parse tree
	 */
	void enterStandaloneRowPattern(trinoSqlParserParser.StandaloneRowPatternContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#standaloneRowPattern}.
	 * @param ctx the parse tree
	 */
	void exitStandaloneRowPattern(trinoSqlParserParser.StandaloneRowPatternContext ctx);
	/**
	 * Enter a parse tree produced by the {@code statementDefault}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatementDefault(trinoSqlParserParser.StatementDefaultContext ctx);
	/**
	 * Exit a parse tree produced by the {@code statementDefault}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatementDefault(trinoSqlParserParser.StatementDefaultContext ctx);
	/**
	 * Enter a parse tree produced by the {@code use}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterUse(trinoSqlParserParser.UseContext ctx);
	/**
	 * Exit a parse tree produced by the {@code use}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitUse(trinoSqlParserParser.UseContext ctx);
	/**
	 * Enter a parse tree produced by the {@code createSchema}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterCreateSchema(trinoSqlParserParser.CreateSchemaContext ctx);
	/**
	 * Exit a parse tree produced by the {@code createSchema}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitCreateSchema(trinoSqlParserParser.CreateSchemaContext ctx);
	/**
	 * Enter a parse tree produced by the {@code dropSchema}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterDropSchema(trinoSqlParserParser.DropSchemaContext ctx);
	/**
	 * Exit a parse tree produced by the {@code dropSchema}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitDropSchema(trinoSqlParserParser.DropSchemaContext ctx);
	/**
	 * Enter a parse tree produced by the {@code renameSchema}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterRenameSchema(trinoSqlParserParser.RenameSchemaContext ctx);
	/**
	 * Exit a parse tree produced by the {@code renameSchema}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitRenameSchema(trinoSqlParserParser.RenameSchemaContext ctx);
	/**
	 * Enter a parse tree produced by the {@code setSchemaAuthorization}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterSetSchemaAuthorization(trinoSqlParserParser.SetSchemaAuthorizationContext ctx);
	/**
	 * Exit a parse tree produced by the {@code setSchemaAuthorization}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitSetSchemaAuthorization(trinoSqlParserParser.SetSchemaAuthorizationContext ctx);
	/**
	 * Enter a parse tree produced by the {@code createTableAsSelect}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterCreateTableAsSelect(trinoSqlParserParser.CreateTableAsSelectContext ctx);
	/**
	 * Exit a parse tree produced by the {@code createTableAsSelect}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitCreateTableAsSelect(trinoSqlParserParser.CreateTableAsSelectContext ctx);
	/**
	 * Enter a parse tree produced by the {@code createTable}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterCreateTable(trinoSqlParserParser.CreateTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code createTable}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitCreateTable(trinoSqlParserParser.CreateTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code dropTable}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterDropTable(trinoSqlParserParser.DropTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code dropTable}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitDropTable(trinoSqlParserParser.DropTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code insertInto}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterInsertInto(trinoSqlParserParser.InsertIntoContext ctx);
	/**
	 * Exit a parse tree produced by the {@code insertInto}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitInsertInto(trinoSqlParserParser.InsertIntoContext ctx);
	/**
	 * Enter a parse tree produced by the {@code delete}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterDelete(trinoSqlParserParser.DeleteContext ctx);
	/**
	 * Exit a parse tree produced by the {@code delete}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitDelete(trinoSqlParserParser.DeleteContext ctx);
	/**
	 * Enter a parse tree produced by the {@code truncateTable}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterTruncateTable(trinoSqlParserParser.TruncateTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code truncateTable}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitTruncateTable(trinoSqlParserParser.TruncateTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code renameTable}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterRenameTable(trinoSqlParserParser.RenameTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code renameTable}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitRenameTable(trinoSqlParserParser.RenameTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code commentTable}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterCommentTable(trinoSqlParserParser.CommentTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code commentTable}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitCommentTable(trinoSqlParserParser.CommentTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code commentColumn}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterCommentColumn(trinoSqlParserParser.CommentColumnContext ctx);
	/**
	 * Exit a parse tree produced by the {@code commentColumn}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitCommentColumn(trinoSqlParserParser.CommentColumnContext ctx);
	/**
	 * Enter a parse tree produced by the {@code renameColumn}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterRenameColumn(trinoSqlParserParser.RenameColumnContext ctx);
	/**
	 * Exit a parse tree produced by the {@code renameColumn}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitRenameColumn(trinoSqlParserParser.RenameColumnContext ctx);
	/**
	 * Enter a parse tree produced by the {@code dropColumn}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterDropColumn(trinoSqlParserParser.DropColumnContext ctx);
	/**
	 * Exit a parse tree produced by the {@code dropColumn}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitDropColumn(trinoSqlParserParser.DropColumnContext ctx);
	/**
	 * Enter a parse tree produced by the {@code addColumn}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterAddColumn(trinoSqlParserParser.AddColumnContext ctx);
	/**
	 * Exit a parse tree produced by the {@code addColumn}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitAddColumn(trinoSqlParserParser.AddColumnContext ctx);
	/**
	 * Enter a parse tree produced by the {@code setTableAuthorization}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterSetTableAuthorization(trinoSqlParserParser.SetTableAuthorizationContext ctx);
	/**
	 * Exit a parse tree produced by the {@code setTableAuthorization}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitSetTableAuthorization(trinoSqlParserParser.SetTableAuthorizationContext ctx);
	/**
	 * Enter a parse tree produced by the {@code setTableProperties}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterSetTableProperties(trinoSqlParserParser.SetTablePropertiesContext ctx);
	/**
	 * Exit a parse tree produced by the {@code setTableProperties}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitSetTableProperties(trinoSqlParserParser.SetTablePropertiesContext ctx);
	/**
	 * Enter a parse tree produced by the {@code tableExecute}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterTableExecute(trinoSqlParserParser.TableExecuteContext ctx);
	/**
	 * Exit a parse tree produced by the {@code tableExecute}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitTableExecute(trinoSqlParserParser.TableExecuteContext ctx);
	/**
	 * Enter a parse tree produced by the {@code analyze}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterAnalyze(trinoSqlParserParser.AnalyzeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code analyze}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitAnalyze(trinoSqlParserParser.AnalyzeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code createMaterializedView}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterCreateMaterializedView(trinoSqlParserParser.CreateMaterializedViewContext ctx);
	/**
	 * Exit a parse tree produced by the {@code createMaterializedView}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitCreateMaterializedView(trinoSqlParserParser.CreateMaterializedViewContext ctx);
	/**
	 * Enter a parse tree produced by the {@code createView}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterCreateView(trinoSqlParserParser.CreateViewContext ctx);
	/**
	 * Exit a parse tree produced by the {@code createView}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitCreateView(trinoSqlParserParser.CreateViewContext ctx);
	/**
	 * Enter a parse tree produced by the {@code refreshMaterializedView}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterRefreshMaterializedView(trinoSqlParserParser.RefreshMaterializedViewContext ctx);
	/**
	 * Exit a parse tree produced by the {@code refreshMaterializedView}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitRefreshMaterializedView(trinoSqlParserParser.RefreshMaterializedViewContext ctx);
	/**
	 * Enter a parse tree produced by the {@code dropMaterializedView}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterDropMaterializedView(trinoSqlParserParser.DropMaterializedViewContext ctx);
	/**
	 * Exit a parse tree produced by the {@code dropMaterializedView}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitDropMaterializedView(trinoSqlParserParser.DropMaterializedViewContext ctx);
	/**
	 * Enter a parse tree produced by the {@code renameMaterializedView}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterRenameMaterializedView(trinoSqlParserParser.RenameMaterializedViewContext ctx);
	/**
	 * Exit a parse tree produced by the {@code renameMaterializedView}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitRenameMaterializedView(trinoSqlParserParser.RenameMaterializedViewContext ctx);
	/**
	 * Enter a parse tree produced by the {@code setMaterializedViewProperties}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterSetMaterializedViewProperties(trinoSqlParserParser.SetMaterializedViewPropertiesContext ctx);
	/**
	 * Exit a parse tree produced by the {@code setMaterializedViewProperties}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitSetMaterializedViewProperties(trinoSqlParserParser.SetMaterializedViewPropertiesContext ctx);
	/**
	 * Enter a parse tree produced by the {@code dropView}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterDropView(trinoSqlParserParser.DropViewContext ctx);
	/**
	 * Exit a parse tree produced by the {@code dropView}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitDropView(trinoSqlParserParser.DropViewContext ctx);
	/**
	 * Enter a parse tree produced by the {@code renameView}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterRenameView(trinoSqlParserParser.RenameViewContext ctx);
	/**
	 * Exit a parse tree produced by the {@code renameView}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitRenameView(trinoSqlParserParser.RenameViewContext ctx);
	/**
	 * Enter a parse tree produced by the {@code setViewAuthorization}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterSetViewAuthorization(trinoSqlParserParser.SetViewAuthorizationContext ctx);
	/**
	 * Exit a parse tree produced by the {@code setViewAuthorization}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitSetViewAuthorization(trinoSqlParserParser.SetViewAuthorizationContext ctx);
	/**
	 * Enter a parse tree produced by the {@code call}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterCall(trinoSqlParserParser.CallContext ctx);
	/**
	 * Exit a parse tree produced by the {@code call}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitCall(trinoSqlParserParser.CallContext ctx);
	/**
	 * Enter a parse tree produced by the {@code createRole}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterCreateRole(trinoSqlParserParser.CreateRoleContext ctx);
	/**
	 * Exit a parse tree produced by the {@code createRole}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitCreateRole(trinoSqlParserParser.CreateRoleContext ctx);
	/**
	 * Enter a parse tree produced by the {@code dropRole}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterDropRole(trinoSqlParserParser.DropRoleContext ctx);
	/**
	 * Exit a parse tree produced by the {@code dropRole}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitDropRole(trinoSqlParserParser.DropRoleContext ctx);
	/**
	 * Enter a parse tree produced by the {@code grantRoles}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterGrantRoles(trinoSqlParserParser.GrantRolesContext ctx);
	/**
	 * Exit a parse tree produced by the {@code grantRoles}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitGrantRoles(trinoSqlParserParser.GrantRolesContext ctx);
	/**
	 * Enter a parse tree produced by the {@code revokeRoles}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterRevokeRoles(trinoSqlParserParser.RevokeRolesContext ctx);
	/**
	 * Exit a parse tree produced by the {@code revokeRoles}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitRevokeRoles(trinoSqlParserParser.RevokeRolesContext ctx);
	/**
	 * Enter a parse tree produced by the {@code setRole}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterSetRole(trinoSqlParserParser.SetRoleContext ctx);
	/**
	 * Exit a parse tree produced by the {@code setRole}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitSetRole(trinoSqlParserParser.SetRoleContext ctx);
	/**
	 * Enter a parse tree produced by the {@code grant}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterGrant(trinoSqlParserParser.GrantContext ctx);
	/**
	 * Exit a parse tree produced by the {@code grant}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitGrant(trinoSqlParserParser.GrantContext ctx);
	/**
	 * Enter a parse tree produced by the {@code deny}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterDeny(trinoSqlParserParser.DenyContext ctx);
	/**
	 * Exit a parse tree produced by the {@code deny}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitDeny(trinoSqlParserParser.DenyContext ctx);
	/**
	 * Enter a parse tree produced by the {@code revoke}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterRevoke(trinoSqlParserParser.RevokeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code revoke}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitRevoke(trinoSqlParserParser.RevokeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showGrants}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterShowGrants(trinoSqlParserParser.ShowGrantsContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showGrants}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitShowGrants(trinoSqlParserParser.ShowGrantsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code explain}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterExplain(trinoSqlParserParser.ExplainContext ctx);
	/**
	 * Exit a parse tree produced by the {@code explain}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitExplain(trinoSqlParserParser.ExplainContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showCreateTable}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterShowCreateTable(trinoSqlParserParser.ShowCreateTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showCreateTable}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitShowCreateTable(trinoSqlParserParser.ShowCreateTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showCreateSchema}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterShowCreateSchema(trinoSqlParserParser.ShowCreateSchemaContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showCreateSchema}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitShowCreateSchema(trinoSqlParserParser.ShowCreateSchemaContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showCreateView}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterShowCreateView(trinoSqlParserParser.ShowCreateViewContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showCreateView}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitShowCreateView(trinoSqlParserParser.ShowCreateViewContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showCreateMaterializedView}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterShowCreateMaterializedView(trinoSqlParserParser.ShowCreateMaterializedViewContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showCreateMaterializedView}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitShowCreateMaterializedView(trinoSqlParserParser.ShowCreateMaterializedViewContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showTables}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterShowTables(trinoSqlParserParser.ShowTablesContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showTables}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitShowTables(trinoSqlParserParser.ShowTablesContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showSchemas}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterShowSchemas(trinoSqlParserParser.ShowSchemasContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showSchemas}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitShowSchemas(trinoSqlParserParser.ShowSchemasContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showCatalogs}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterShowCatalogs(trinoSqlParserParser.ShowCatalogsContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showCatalogs}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitShowCatalogs(trinoSqlParserParser.ShowCatalogsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showColumns}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterShowColumns(trinoSqlParserParser.ShowColumnsContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showColumns}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitShowColumns(trinoSqlParserParser.ShowColumnsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showStats}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterShowStats(trinoSqlParserParser.ShowStatsContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showStats}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitShowStats(trinoSqlParserParser.ShowStatsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showStatsForQuery}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterShowStatsForQuery(trinoSqlParserParser.ShowStatsForQueryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showStatsForQuery}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitShowStatsForQuery(trinoSqlParserParser.ShowStatsForQueryContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showRoles}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterShowRoles(trinoSqlParserParser.ShowRolesContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showRoles}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitShowRoles(trinoSqlParserParser.ShowRolesContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showRoleGrants}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterShowRoleGrants(trinoSqlParserParser.ShowRoleGrantsContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showRoleGrants}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitShowRoleGrants(trinoSqlParserParser.ShowRoleGrantsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showFunctions}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterShowFunctions(trinoSqlParserParser.ShowFunctionsContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showFunctions}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitShowFunctions(trinoSqlParserParser.ShowFunctionsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showSession}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterShowSession(trinoSqlParserParser.ShowSessionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showSession}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitShowSession(trinoSqlParserParser.ShowSessionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code setSession}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterSetSession(trinoSqlParserParser.SetSessionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code setSession}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitSetSession(trinoSqlParserParser.SetSessionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code resetSession}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterResetSession(trinoSqlParserParser.ResetSessionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code resetSession}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitResetSession(trinoSqlParserParser.ResetSessionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code startTransaction}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStartTransaction(trinoSqlParserParser.StartTransactionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code startTransaction}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStartTransaction(trinoSqlParserParser.StartTransactionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code commit}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterCommit(trinoSqlParserParser.CommitContext ctx);
	/**
	 * Exit a parse tree produced by the {@code commit}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitCommit(trinoSqlParserParser.CommitContext ctx);
	/**
	 * Enter a parse tree produced by the {@code rollback}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterRollback(trinoSqlParserParser.RollbackContext ctx);
	/**
	 * Exit a parse tree produced by the {@code rollback}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitRollback(trinoSqlParserParser.RollbackContext ctx);
	/**
	 * Enter a parse tree produced by the {@code prepare}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterPrepare(trinoSqlParserParser.PrepareContext ctx);
	/**
	 * Exit a parse tree produced by the {@code prepare}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitPrepare(trinoSqlParserParser.PrepareContext ctx);
	/**
	 * Enter a parse tree produced by the {@code deallocate}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterDeallocate(trinoSqlParserParser.DeallocateContext ctx);
	/**
	 * Exit a parse tree produced by the {@code deallocate}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitDeallocate(trinoSqlParserParser.DeallocateContext ctx);
	/**
	 * Enter a parse tree produced by the {@code execute}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterExecute(trinoSqlParserParser.ExecuteContext ctx);
	/**
	 * Exit a parse tree produced by the {@code execute}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitExecute(trinoSqlParserParser.ExecuteContext ctx);
	/**
	 * Enter a parse tree produced by the {@code describeInput}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterDescribeInput(trinoSqlParserParser.DescribeInputContext ctx);
	/**
	 * Exit a parse tree produced by the {@code describeInput}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitDescribeInput(trinoSqlParserParser.DescribeInputContext ctx);
	/**
	 * Enter a parse tree produced by the {@code describeOutput}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterDescribeOutput(trinoSqlParserParser.DescribeOutputContext ctx);
	/**
	 * Exit a parse tree produced by the {@code describeOutput}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitDescribeOutput(trinoSqlParserParser.DescribeOutputContext ctx);
	/**
	 * Enter a parse tree produced by the {@code setPath}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterSetPath(trinoSqlParserParser.SetPathContext ctx);
	/**
	 * Exit a parse tree produced by the {@code setPath}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitSetPath(trinoSqlParserParser.SetPathContext ctx);
	/**
	 * Enter a parse tree produced by the {@code setTimeZone}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterSetTimeZone(trinoSqlParserParser.SetTimeZoneContext ctx);
	/**
	 * Exit a parse tree produced by the {@code setTimeZone}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitSetTimeZone(trinoSqlParserParser.SetTimeZoneContext ctx);
	/**
	 * Enter a parse tree produced by the {@code update}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterUpdate(trinoSqlParserParser.UpdateContext ctx);
	/**
	 * Exit a parse tree produced by the {@code update}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitUpdate(trinoSqlParserParser.UpdateContext ctx);
	/**
	 * Enter a parse tree produced by the {@code merge}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterMerge(trinoSqlParserParser.MergeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code merge}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitMerge(trinoSqlParserParser.MergeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showTableComment}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterShowTableComment(trinoSqlParserParser.ShowTableCommentContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showTableComment}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitShowTableComment(trinoSqlParserParser.ShowTableCommentContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showColumnComment}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterShowColumnComment(trinoSqlParserParser.ShowColumnCommentContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showColumnComment}
	 * labeled alternative in {@link trinoSqlParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitShowColumnComment(trinoSqlParserParser.ShowColumnCommentContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#query}.
	 * @param ctx the parse tree
	 */
	void enterQuery(trinoSqlParserParser.QueryContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#query}.
	 * @param ctx the parse tree
	 */
	void exitQuery(trinoSqlParserParser.QueryContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#with}.
	 * @param ctx the parse tree
	 */
	void enterWith(trinoSqlParserParser.WithContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#with}.
	 * @param ctx the parse tree
	 */
	void exitWith(trinoSqlParserParser.WithContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#tableElement}.
	 * @param ctx the parse tree
	 */
	void enterTableElement(trinoSqlParserParser.TableElementContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#tableElement}.
	 * @param ctx the parse tree
	 */
	void exitTableElement(trinoSqlParserParser.TableElementContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#columnDefinition}.
	 * @param ctx the parse tree
	 */
	void enterColumnDefinition(trinoSqlParserParser.ColumnDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#columnDefinition}.
	 * @param ctx the parse tree
	 */
	void exitColumnDefinition(trinoSqlParserParser.ColumnDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#likeClause}.
	 * @param ctx the parse tree
	 */
	void enterLikeClause(trinoSqlParserParser.LikeClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#likeClause}.
	 * @param ctx the parse tree
	 */
	void exitLikeClause(trinoSqlParserParser.LikeClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#properties}.
	 * @param ctx the parse tree
	 */
	void enterProperties(trinoSqlParserParser.PropertiesContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#properties}.
	 * @param ctx the parse tree
	 */
	void exitProperties(trinoSqlParserParser.PropertiesContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#propertyAssignments}.
	 * @param ctx the parse tree
	 */
	void enterPropertyAssignments(trinoSqlParserParser.PropertyAssignmentsContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#propertyAssignments}.
	 * @param ctx the parse tree
	 */
	void exitPropertyAssignments(trinoSqlParserParser.PropertyAssignmentsContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#property}.
	 * @param ctx the parse tree
	 */
	void enterProperty(trinoSqlParserParser.PropertyContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#property}.
	 * @param ctx the parse tree
	 */
	void exitProperty(trinoSqlParserParser.PropertyContext ctx);
	/**
	 * Enter a parse tree produced by the {@code defaultPropertyValue}
	 * labeled alternative in {@link trinoSqlParserParser#propertyValue}.
	 * @param ctx the parse tree
	 */
	void enterDefaultPropertyValue(trinoSqlParserParser.DefaultPropertyValueContext ctx);
	/**
	 * Exit a parse tree produced by the {@code defaultPropertyValue}
	 * labeled alternative in {@link trinoSqlParserParser#propertyValue}.
	 * @param ctx the parse tree
	 */
	void exitDefaultPropertyValue(trinoSqlParserParser.DefaultPropertyValueContext ctx);
	/**
	 * Enter a parse tree produced by the {@code nonDefaultPropertyValue}
	 * labeled alternative in {@link trinoSqlParserParser#propertyValue}.
	 * @param ctx the parse tree
	 */
	void enterNonDefaultPropertyValue(trinoSqlParserParser.NonDefaultPropertyValueContext ctx);
	/**
	 * Exit a parse tree produced by the {@code nonDefaultPropertyValue}
	 * labeled alternative in {@link trinoSqlParserParser#propertyValue}.
	 * @param ctx the parse tree
	 */
	void exitNonDefaultPropertyValue(trinoSqlParserParser.NonDefaultPropertyValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#queryNoWith}.
	 * @param ctx the parse tree
	 */
	void enterQueryNoWith(trinoSqlParserParser.QueryNoWithContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#queryNoWith}.
	 * @param ctx the parse tree
	 */
	void exitQueryNoWith(trinoSqlParserParser.QueryNoWithContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#limitRowCount}.
	 * @param ctx the parse tree
	 */
	void enterLimitRowCount(trinoSqlParserParser.LimitRowCountContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#limitRowCount}.
	 * @param ctx the parse tree
	 */
	void exitLimitRowCount(trinoSqlParserParser.LimitRowCountContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#rowCount}.
	 * @param ctx the parse tree
	 */
	void enterRowCount(trinoSqlParserParser.RowCountContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#rowCount}.
	 * @param ctx the parse tree
	 */
	void exitRowCount(trinoSqlParserParser.RowCountContext ctx);
	/**
	 * Enter a parse tree produced by the {@code queryTermDefault}
	 * labeled alternative in {@link trinoSqlParserParser#queryTerm}.
	 * @param ctx the parse tree
	 */
	void enterQueryTermDefault(trinoSqlParserParser.QueryTermDefaultContext ctx);
	/**
	 * Exit a parse tree produced by the {@code queryTermDefault}
	 * labeled alternative in {@link trinoSqlParserParser#queryTerm}.
	 * @param ctx the parse tree
	 */
	void exitQueryTermDefault(trinoSqlParserParser.QueryTermDefaultContext ctx);
	/**
	 * Enter a parse tree produced by the {@code setOperation}
	 * labeled alternative in {@link trinoSqlParserParser#queryTerm}.
	 * @param ctx the parse tree
	 */
	void enterSetOperation(trinoSqlParserParser.SetOperationContext ctx);
	/**
	 * Exit a parse tree produced by the {@code setOperation}
	 * labeled alternative in {@link trinoSqlParserParser#queryTerm}.
	 * @param ctx the parse tree
	 */
	void exitSetOperation(trinoSqlParserParser.SetOperationContext ctx);
	/**
	 * Enter a parse tree produced by the {@code queryPrimaryDefault}
	 * labeled alternative in {@link trinoSqlParserParser#queryPrimary}.
	 * @param ctx the parse tree
	 */
	void enterQueryPrimaryDefault(trinoSqlParserParser.QueryPrimaryDefaultContext ctx);
	/**
	 * Exit a parse tree produced by the {@code queryPrimaryDefault}
	 * labeled alternative in {@link trinoSqlParserParser#queryPrimary}.
	 * @param ctx the parse tree
	 */
	void exitQueryPrimaryDefault(trinoSqlParserParser.QueryPrimaryDefaultContext ctx);
	/**
	 * Enter a parse tree produced by the {@code table}
	 * labeled alternative in {@link trinoSqlParserParser#queryPrimary}.
	 * @param ctx the parse tree
	 */
	void enterTable(trinoSqlParserParser.TableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code table}
	 * labeled alternative in {@link trinoSqlParserParser#queryPrimary}.
	 * @param ctx the parse tree
	 */
	void exitTable(trinoSqlParserParser.TableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code inlineTable}
	 * labeled alternative in {@link trinoSqlParserParser#queryPrimary}.
	 * @param ctx the parse tree
	 */
	void enterInlineTable(trinoSqlParserParser.InlineTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code inlineTable}
	 * labeled alternative in {@link trinoSqlParserParser#queryPrimary}.
	 * @param ctx the parse tree
	 */
	void exitInlineTable(trinoSqlParserParser.InlineTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code subquery}
	 * labeled alternative in {@link trinoSqlParserParser#queryPrimary}.
	 * @param ctx the parse tree
	 */
	void enterSubquery(trinoSqlParserParser.SubqueryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code subquery}
	 * labeled alternative in {@link trinoSqlParserParser#queryPrimary}.
	 * @param ctx the parse tree
	 */
	void exitSubquery(trinoSqlParserParser.SubqueryContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#sortItem}.
	 * @param ctx the parse tree
	 */
	void enterSortItem(trinoSqlParserParser.SortItemContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#sortItem}.
	 * @param ctx the parse tree
	 */
	void exitSortItem(trinoSqlParserParser.SortItemContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#querySpecification}.
	 * @param ctx the parse tree
	 */
	void enterQuerySpecification(trinoSqlParserParser.QuerySpecificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#querySpecification}.
	 * @param ctx the parse tree
	 */
	void exitQuerySpecification(trinoSqlParserParser.QuerySpecificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#groupBy}.
	 * @param ctx the parse tree
	 */
	void enterGroupBy(trinoSqlParserParser.GroupByContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#groupBy}.
	 * @param ctx the parse tree
	 */
	void exitGroupBy(trinoSqlParserParser.GroupByContext ctx);
	/**
	 * Enter a parse tree produced by the {@code singleGroupingSet}
	 * labeled alternative in {@link trinoSqlParserParser#groupingElement}.
	 * @param ctx the parse tree
	 */
	void enterSingleGroupingSet(trinoSqlParserParser.SingleGroupingSetContext ctx);
	/**
	 * Exit a parse tree produced by the {@code singleGroupingSet}
	 * labeled alternative in {@link trinoSqlParserParser#groupingElement}.
	 * @param ctx the parse tree
	 */
	void exitSingleGroupingSet(trinoSqlParserParser.SingleGroupingSetContext ctx);
	/**
	 * Enter a parse tree produced by the {@code rollup}
	 * labeled alternative in {@link trinoSqlParserParser#groupingElement}.
	 * @param ctx the parse tree
	 */
	void enterRollup(trinoSqlParserParser.RollupContext ctx);
	/**
	 * Exit a parse tree produced by the {@code rollup}
	 * labeled alternative in {@link trinoSqlParserParser#groupingElement}.
	 * @param ctx the parse tree
	 */
	void exitRollup(trinoSqlParserParser.RollupContext ctx);
	/**
	 * Enter a parse tree produced by the {@code cube}
	 * labeled alternative in {@link trinoSqlParserParser#groupingElement}.
	 * @param ctx the parse tree
	 */
	void enterCube(trinoSqlParserParser.CubeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code cube}
	 * labeled alternative in {@link trinoSqlParserParser#groupingElement}.
	 * @param ctx the parse tree
	 */
	void exitCube(trinoSqlParserParser.CubeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code multipleGroupingSets}
	 * labeled alternative in {@link trinoSqlParserParser#groupingElement}.
	 * @param ctx the parse tree
	 */
	void enterMultipleGroupingSets(trinoSqlParserParser.MultipleGroupingSetsContext ctx);
	/**
	 * Exit a parse tree produced by the {@code multipleGroupingSets}
	 * labeled alternative in {@link trinoSqlParserParser#groupingElement}.
	 * @param ctx the parse tree
	 */
	void exitMultipleGroupingSets(trinoSqlParserParser.MultipleGroupingSetsContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#groupingSet}.
	 * @param ctx the parse tree
	 */
	void enterGroupingSet(trinoSqlParserParser.GroupingSetContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#groupingSet}.
	 * @param ctx the parse tree
	 */
	void exitGroupingSet(trinoSqlParserParser.GroupingSetContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#windowDefinition}.
	 * @param ctx the parse tree
	 */
	void enterWindowDefinition(trinoSqlParserParser.WindowDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#windowDefinition}.
	 * @param ctx the parse tree
	 */
	void exitWindowDefinition(trinoSqlParserParser.WindowDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#windowSpecification}.
	 * @param ctx the parse tree
	 */
	void enterWindowSpecification(trinoSqlParserParser.WindowSpecificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#windowSpecification}.
	 * @param ctx the parse tree
	 */
	void exitWindowSpecification(trinoSqlParserParser.WindowSpecificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#namedQuery}.
	 * @param ctx the parse tree
	 */
	void enterNamedQuery(trinoSqlParserParser.NamedQueryContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#namedQuery}.
	 * @param ctx the parse tree
	 */
	void exitNamedQuery(trinoSqlParserParser.NamedQueryContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#setQuantifier}.
	 * @param ctx the parse tree
	 */
	void enterSetQuantifier(trinoSqlParserParser.SetQuantifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#setQuantifier}.
	 * @param ctx the parse tree
	 */
	void exitSetQuantifier(trinoSqlParserParser.SetQuantifierContext ctx);
	/**
	 * Enter a parse tree produced by the {@code selectSingle}
	 * labeled alternative in {@link trinoSqlParserParser#selectItem}.
	 * @param ctx the parse tree
	 */
	void enterSelectSingle(trinoSqlParserParser.SelectSingleContext ctx);
	/**
	 * Exit a parse tree produced by the {@code selectSingle}
	 * labeled alternative in {@link trinoSqlParserParser#selectItem}.
	 * @param ctx the parse tree
	 */
	void exitSelectSingle(trinoSqlParserParser.SelectSingleContext ctx);
	/**
	 * Enter a parse tree produced by the {@code selectAll}
	 * labeled alternative in {@link trinoSqlParserParser#selectItem}.
	 * @param ctx the parse tree
	 */
	void enterSelectAll(trinoSqlParserParser.SelectAllContext ctx);
	/**
	 * Exit a parse tree produced by the {@code selectAll}
	 * labeled alternative in {@link trinoSqlParserParser#selectItem}.
	 * @param ctx the parse tree
	 */
	void exitSelectAll(trinoSqlParserParser.SelectAllContext ctx);
	/**
	 * Enter a parse tree produced by the {@code relationDefault}
	 * labeled alternative in {@link trinoSqlParserParser#relation}.
	 * @param ctx the parse tree
	 */
	void enterRelationDefault(trinoSqlParserParser.RelationDefaultContext ctx);
	/**
	 * Exit a parse tree produced by the {@code relationDefault}
	 * labeled alternative in {@link trinoSqlParserParser#relation}.
	 * @param ctx the parse tree
	 */
	void exitRelationDefault(trinoSqlParserParser.RelationDefaultContext ctx);
	/**
	 * Enter a parse tree produced by the {@code joinRelation}
	 * labeled alternative in {@link trinoSqlParserParser#relation}.
	 * @param ctx the parse tree
	 */
	void enterJoinRelation(trinoSqlParserParser.JoinRelationContext ctx);
	/**
	 * Exit a parse tree produced by the {@code joinRelation}
	 * labeled alternative in {@link trinoSqlParserParser#relation}.
	 * @param ctx the parse tree
	 */
	void exitJoinRelation(trinoSqlParserParser.JoinRelationContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#joinType}.
	 * @param ctx the parse tree
	 */
	void enterJoinType(trinoSqlParserParser.JoinTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#joinType}.
	 * @param ctx the parse tree
	 */
	void exitJoinType(trinoSqlParserParser.JoinTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#joinCriteria}.
	 * @param ctx the parse tree
	 */
	void enterJoinCriteria(trinoSqlParserParser.JoinCriteriaContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#joinCriteria}.
	 * @param ctx the parse tree
	 */
	void exitJoinCriteria(trinoSqlParserParser.JoinCriteriaContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#sampledRelation}.
	 * @param ctx the parse tree
	 */
	void enterSampledRelation(trinoSqlParserParser.SampledRelationContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#sampledRelation}.
	 * @param ctx the parse tree
	 */
	void exitSampledRelation(trinoSqlParserParser.SampledRelationContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#sampleType}.
	 * @param ctx the parse tree
	 */
	void enterSampleType(trinoSqlParserParser.SampleTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#sampleType}.
	 * @param ctx the parse tree
	 */
	void exitSampleType(trinoSqlParserParser.SampleTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#patternRecognition}.
	 * @param ctx the parse tree
	 */
	void enterPatternRecognition(trinoSqlParserParser.PatternRecognitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#patternRecognition}.
	 * @param ctx the parse tree
	 */
	void exitPatternRecognition(trinoSqlParserParser.PatternRecognitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#measureDefinition}.
	 * @param ctx the parse tree
	 */
	void enterMeasureDefinition(trinoSqlParserParser.MeasureDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#measureDefinition}.
	 * @param ctx the parse tree
	 */
	void exitMeasureDefinition(trinoSqlParserParser.MeasureDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#rowsPerMatch}.
	 * @param ctx the parse tree
	 */
	void enterRowsPerMatch(trinoSqlParserParser.RowsPerMatchContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#rowsPerMatch}.
	 * @param ctx the parse tree
	 */
	void exitRowsPerMatch(trinoSqlParserParser.RowsPerMatchContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#emptyMatchHandling}.
	 * @param ctx the parse tree
	 */
	void enterEmptyMatchHandling(trinoSqlParserParser.EmptyMatchHandlingContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#emptyMatchHandling}.
	 * @param ctx the parse tree
	 */
	void exitEmptyMatchHandling(trinoSqlParserParser.EmptyMatchHandlingContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#skipTo}.
	 * @param ctx the parse tree
	 */
	void enterSkipTo(trinoSqlParserParser.SkipToContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#skipTo}.
	 * @param ctx the parse tree
	 */
	void exitSkipTo(trinoSqlParserParser.SkipToContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#subsetDefinition}.
	 * @param ctx the parse tree
	 */
	void enterSubsetDefinition(trinoSqlParserParser.SubsetDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#subsetDefinition}.
	 * @param ctx the parse tree
	 */
	void exitSubsetDefinition(trinoSqlParserParser.SubsetDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#variableDefinition}.
	 * @param ctx the parse tree
	 */
	void enterVariableDefinition(trinoSqlParserParser.VariableDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#variableDefinition}.
	 * @param ctx the parse tree
	 */
	void exitVariableDefinition(trinoSqlParserParser.VariableDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#aliasedRelation}.
	 * @param ctx the parse tree
	 */
	void enterAliasedRelation(trinoSqlParserParser.AliasedRelationContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#aliasedRelation}.
	 * @param ctx the parse tree
	 */
	void exitAliasedRelation(trinoSqlParserParser.AliasedRelationContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#columnAliases}.
	 * @param ctx the parse tree
	 */
	void enterColumnAliases(trinoSqlParserParser.ColumnAliasesContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#columnAliases}.
	 * @param ctx the parse tree
	 */
	void exitColumnAliases(trinoSqlParserParser.ColumnAliasesContext ctx);
	/**
	 * Enter a parse tree produced by the {@code tableName}
	 * labeled alternative in {@link trinoSqlParserParser#relationPrimary}.
	 * @param ctx the parse tree
	 */
	void enterTableName(trinoSqlParserParser.TableNameContext ctx);
	/**
	 * Exit a parse tree produced by the {@code tableName}
	 * labeled alternative in {@link trinoSqlParserParser#relationPrimary}.
	 * @param ctx the parse tree
	 */
	void exitTableName(trinoSqlParserParser.TableNameContext ctx);
	/**
	 * Enter a parse tree produced by the {@code subqueryRelation}
	 * labeled alternative in {@link trinoSqlParserParser#relationPrimary}.
	 * @param ctx the parse tree
	 */
	void enterSubqueryRelation(trinoSqlParserParser.SubqueryRelationContext ctx);
	/**
	 * Exit a parse tree produced by the {@code subqueryRelation}
	 * labeled alternative in {@link trinoSqlParserParser#relationPrimary}.
	 * @param ctx the parse tree
	 */
	void exitSubqueryRelation(trinoSqlParserParser.SubqueryRelationContext ctx);
	/**
	 * Enter a parse tree produced by the {@code unnest}
	 * labeled alternative in {@link trinoSqlParserParser#relationPrimary}.
	 * @param ctx the parse tree
	 */
	void enterUnnest(trinoSqlParserParser.UnnestContext ctx);
	/**
	 * Exit a parse tree produced by the {@code unnest}
	 * labeled alternative in {@link trinoSqlParserParser#relationPrimary}.
	 * @param ctx the parse tree
	 */
	void exitUnnest(trinoSqlParserParser.UnnestContext ctx);
	/**
	 * Enter a parse tree produced by the {@code lateral}
	 * labeled alternative in {@link trinoSqlParserParser#relationPrimary}.
	 * @param ctx the parse tree
	 */
	void enterLateral(trinoSqlParserParser.LateralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code lateral}
	 * labeled alternative in {@link trinoSqlParserParser#relationPrimary}.
	 * @param ctx the parse tree
	 */
	void exitLateral(trinoSqlParserParser.LateralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code parenthesizedRelation}
	 * labeled alternative in {@link trinoSqlParserParser#relationPrimary}.
	 * @param ctx the parse tree
	 */
	void enterParenthesizedRelation(trinoSqlParserParser.ParenthesizedRelationContext ctx);
	/**
	 * Exit a parse tree produced by the {@code parenthesizedRelation}
	 * labeled alternative in {@link trinoSqlParserParser#relationPrimary}.
	 * @param ctx the parse tree
	 */
	void exitParenthesizedRelation(trinoSqlParserParser.ParenthesizedRelationContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(trinoSqlParserParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(trinoSqlParserParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code logicalNot}
	 * labeled alternative in {@link trinoSqlParserParser#booleanExpression}.
	 * @param ctx the parse tree
	 */
	void enterLogicalNot(trinoSqlParserParser.LogicalNotContext ctx);
	/**
	 * Exit a parse tree produced by the {@code logicalNot}
	 * labeled alternative in {@link trinoSqlParserParser#booleanExpression}.
	 * @param ctx the parse tree
	 */
	void exitLogicalNot(trinoSqlParserParser.LogicalNotContext ctx);
	/**
	 * Enter a parse tree produced by the {@code predicated}
	 * labeled alternative in {@link trinoSqlParserParser#booleanExpression}.
	 * @param ctx the parse tree
	 */
	void enterPredicated(trinoSqlParserParser.PredicatedContext ctx);
	/**
	 * Exit a parse tree produced by the {@code predicated}
	 * labeled alternative in {@link trinoSqlParserParser#booleanExpression}.
	 * @param ctx the parse tree
	 */
	void exitPredicated(trinoSqlParserParser.PredicatedContext ctx);
	/**
	 * Enter a parse tree produced by the {@code logicalBinary}
	 * labeled alternative in {@link trinoSqlParserParser#booleanExpression}.
	 * @param ctx the parse tree
	 */
	void enterLogicalBinary(trinoSqlParserParser.LogicalBinaryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code logicalBinary}
	 * labeled alternative in {@link trinoSqlParserParser#booleanExpression}.
	 * @param ctx the parse tree
	 */
	void exitLogicalBinary(trinoSqlParserParser.LogicalBinaryContext ctx);
	/**
	 * Enter a parse tree produced by the {@code comparison}
	 * labeled alternative in {@link trinoSqlParserParser#predicate}.
	 * @param ctx the parse tree
	 */
	void enterComparison(trinoSqlParserParser.ComparisonContext ctx);
	/**
	 * Exit a parse tree produced by the {@code comparison}
	 * labeled alternative in {@link trinoSqlParserParser#predicate}.
	 * @param ctx the parse tree
	 */
	void exitComparison(trinoSqlParserParser.ComparisonContext ctx);
	/**
	 * Enter a parse tree produced by the {@code quantifiedComparison}
	 * labeled alternative in {@link trinoSqlParserParser#predicate}.
	 * @param ctx the parse tree
	 */
	void enterQuantifiedComparison(trinoSqlParserParser.QuantifiedComparisonContext ctx);
	/**
	 * Exit a parse tree produced by the {@code quantifiedComparison}
	 * labeled alternative in {@link trinoSqlParserParser#predicate}.
	 * @param ctx the parse tree
	 */
	void exitQuantifiedComparison(trinoSqlParserParser.QuantifiedComparisonContext ctx);
	/**
	 * Enter a parse tree produced by the {@code between}
	 * labeled alternative in {@link trinoSqlParserParser#predicate}.
	 * @param ctx the parse tree
	 */
	void enterBetween(trinoSqlParserParser.BetweenContext ctx);
	/**
	 * Exit a parse tree produced by the {@code between}
	 * labeled alternative in {@link trinoSqlParserParser#predicate}.
	 * @param ctx the parse tree
	 */
	void exitBetween(trinoSqlParserParser.BetweenContext ctx);
	/**
	 * Enter a parse tree produced by the {@code inList}
	 * labeled alternative in {@link trinoSqlParserParser#predicate}.
	 * @param ctx the parse tree
	 */
	void enterInList(trinoSqlParserParser.InListContext ctx);
	/**
	 * Exit a parse tree produced by the {@code inList}
	 * labeled alternative in {@link trinoSqlParserParser#predicate}.
	 * @param ctx the parse tree
	 */
	void exitInList(trinoSqlParserParser.InListContext ctx);
	/**
	 * Enter a parse tree produced by the {@code inSubquery}
	 * labeled alternative in {@link trinoSqlParserParser#predicate}.
	 * @param ctx the parse tree
	 */
	void enterInSubquery(trinoSqlParserParser.InSubqueryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code inSubquery}
	 * labeled alternative in {@link trinoSqlParserParser#predicate}.
	 * @param ctx the parse tree
	 */
	void exitInSubquery(trinoSqlParserParser.InSubqueryContext ctx);
	/**
	 * Enter a parse tree produced by the {@code like}
	 * labeled alternative in {@link trinoSqlParserParser#predicate}.
	 * @param ctx the parse tree
	 */
	void enterLike(trinoSqlParserParser.LikeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code like}
	 * labeled alternative in {@link trinoSqlParserParser#predicate}.
	 * @param ctx the parse tree
	 */
	void exitLike(trinoSqlParserParser.LikeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code nullPredicate}
	 * labeled alternative in {@link trinoSqlParserParser#predicate}.
	 * @param ctx the parse tree
	 */
	void enterNullPredicate(trinoSqlParserParser.NullPredicateContext ctx);
	/**
	 * Exit a parse tree produced by the {@code nullPredicate}
	 * labeled alternative in {@link trinoSqlParserParser#predicate}.
	 * @param ctx the parse tree
	 */
	void exitNullPredicate(trinoSqlParserParser.NullPredicateContext ctx);
	/**
	 * Enter a parse tree produced by the {@code distinctFrom}
	 * labeled alternative in {@link trinoSqlParserParser#predicate}.
	 * @param ctx the parse tree
	 */
	void enterDistinctFrom(trinoSqlParserParser.DistinctFromContext ctx);
	/**
	 * Exit a parse tree produced by the {@code distinctFrom}
	 * labeled alternative in {@link trinoSqlParserParser#predicate}.
	 * @param ctx the parse tree
	 */
	void exitDistinctFrom(trinoSqlParserParser.DistinctFromContext ctx);
	/**
	 * Enter a parse tree produced by the {@code valueExpressionDefault}
	 * labeled alternative in {@link trinoSqlParserParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void enterValueExpressionDefault(trinoSqlParserParser.ValueExpressionDefaultContext ctx);
	/**
	 * Exit a parse tree produced by the {@code valueExpressionDefault}
	 * labeled alternative in {@link trinoSqlParserParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void exitValueExpressionDefault(trinoSqlParserParser.ValueExpressionDefaultContext ctx);
	/**
	 * Enter a parse tree produced by the {@code concatenation}
	 * labeled alternative in {@link trinoSqlParserParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void enterConcatenation(trinoSqlParserParser.ConcatenationContext ctx);
	/**
	 * Exit a parse tree produced by the {@code concatenation}
	 * labeled alternative in {@link trinoSqlParserParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void exitConcatenation(trinoSqlParserParser.ConcatenationContext ctx);
	/**
	 * Enter a parse tree produced by the {@code arithmeticBinary}
	 * labeled alternative in {@link trinoSqlParserParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void enterArithmeticBinary(trinoSqlParserParser.ArithmeticBinaryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code arithmeticBinary}
	 * labeled alternative in {@link trinoSqlParserParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void exitArithmeticBinary(trinoSqlParserParser.ArithmeticBinaryContext ctx);
	/**
	 * Enter a parse tree produced by the {@code arithmeticUnary}
	 * labeled alternative in {@link trinoSqlParserParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void enterArithmeticUnary(trinoSqlParserParser.ArithmeticUnaryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code arithmeticUnary}
	 * labeled alternative in {@link trinoSqlParserParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void exitArithmeticUnary(trinoSqlParserParser.ArithmeticUnaryContext ctx);
	/**
	 * Enter a parse tree produced by the {@code atTimeZone}
	 * labeled alternative in {@link trinoSqlParserParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void enterAtTimeZone(trinoSqlParserParser.AtTimeZoneContext ctx);
	/**
	 * Exit a parse tree produced by the {@code atTimeZone}
	 * labeled alternative in {@link trinoSqlParserParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void exitAtTimeZone(trinoSqlParserParser.AtTimeZoneContext ctx);
	/**
	 * Enter a parse tree produced by the {@code dereference}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterDereference(trinoSqlParserParser.DereferenceContext ctx);
	/**
	 * Exit a parse tree produced by the {@code dereference}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitDereference(trinoSqlParserParser.DereferenceContext ctx);
	/**
	 * Enter a parse tree produced by the {@code typeConstructor}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterTypeConstructor(trinoSqlParserParser.TypeConstructorContext ctx);
	/**
	 * Exit a parse tree produced by the {@code typeConstructor}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitTypeConstructor(trinoSqlParserParser.TypeConstructorContext ctx);
	/**
	 * Enter a parse tree produced by the {@code specialDateTimeFunction}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterSpecialDateTimeFunction(trinoSqlParserParser.SpecialDateTimeFunctionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code specialDateTimeFunction}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitSpecialDateTimeFunction(trinoSqlParserParser.SpecialDateTimeFunctionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code substring}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterSubstring(trinoSqlParserParser.SubstringContext ctx);
	/**
	 * Exit a parse tree produced by the {@code substring}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitSubstring(trinoSqlParserParser.SubstringContext ctx);
	/**
	 * Enter a parse tree produced by the {@code cast}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterCast(trinoSqlParserParser.CastContext ctx);
	/**
	 * Exit a parse tree produced by the {@code cast}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitCast(trinoSqlParserParser.CastContext ctx);
	/**
	 * Enter a parse tree produced by the {@code lambda}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterLambda(trinoSqlParserParser.LambdaContext ctx);
	/**
	 * Exit a parse tree produced by the {@code lambda}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitLambda(trinoSqlParserParser.LambdaContext ctx);
	/**
	 * Enter a parse tree produced by the {@code parenthesizedExpression}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterParenthesizedExpression(trinoSqlParserParser.ParenthesizedExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code parenthesizedExpression}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitParenthesizedExpression(trinoSqlParserParser.ParenthesizedExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code parameter}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterParameter(trinoSqlParserParser.ParameterContext ctx);
	/**
	 * Exit a parse tree produced by the {@code parameter}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitParameter(trinoSqlParserParser.ParameterContext ctx);
	/**
	 * Enter a parse tree produced by the {@code normalize}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterNormalize(trinoSqlParserParser.NormalizeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code normalize}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitNormalize(trinoSqlParserParser.NormalizeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code intervalLiteral}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterIntervalLiteral(trinoSqlParserParser.IntervalLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code intervalLiteral}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitIntervalLiteral(trinoSqlParserParser.IntervalLiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code numericLiteral}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterNumericLiteral(trinoSqlParserParser.NumericLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code numericLiteral}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitNumericLiteral(trinoSqlParserParser.NumericLiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code booleanLiteral}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterBooleanLiteral(trinoSqlParserParser.BooleanLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code booleanLiteral}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitBooleanLiteral(trinoSqlParserParser.BooleanLiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code simpleCase}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterSimpleCase(trinoSqlParserParser.SimpleCaseContext ctx);
	/**
	 * Exit a parse tree produced by the {@code simpleCase}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitSimpleCase(trinoSqlParserParser.SimpleCaseContext ctx);
	/**
	 * Enter a parse tree produced by the {@code columnReference}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterColumnReference(trinoSqlParserParser.ColumnReferenceContext ctx);
	/**
	 * Exit a parse tree produced by the {@code columnReference}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitColumnReference(trinoSqlParserParser.ColumnReferenceContext ctx);
	/**
	 * Enter a parse tree produced by the {@code nullLiteral}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterNullLiteral(trinoSqlParserParser.NullLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code nullLiteral}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitNullLiteral(trinoSqlParserParser.NullLiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code rowConstructor}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterRowConstructor(trinoSqlParserParser.RowConstructorContext ctx);
	/**
	 * Exit a parse tree produced by the {@code rowConstructor}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitRowConstructor(trinoSqlParserParser.RowConstructorContext ctx);
	/**
	 * Enter a parse tree produced by the {@code subscript}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterSubscript(trinoSqlParserParser.SubscriptContext ctx);
	/**
	 * Exit a parse tree produced by the {@code subscript}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitSubscript(trinoSqlParserParser.SubscriptContext ctx);
	/**
	 * Enter a parse tree produced by the {@code currentPath}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterCurrentPath(trinoSqlParserParser.CurrentPathContext ctx);
	/**
	 * Exit a parse tree produced by the {@code currentPath}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitCurrentPath(trinoSqlParserParser.CurrentPathContext ctx);
	/**
	 * Enter a parse tree produced by the {@code subqueryExpression}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterSubqueryExpression(trinoSqlParserParser.SubqueryExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code subqueryExpression}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitSubqueryExpression(trinoSqlParserParser.SubqueryExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code binaryLiteral}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterBinaryLiteral(trinoSqlParserParser.BinaryLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code binaryLiteral}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitBinaryLiteral(trinoSqlParserParser.BinaryLiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code currentUser}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterCurrentUser(trinoSqlParserParser.CurrentUserContext ctx);
	/**
	 * Exit a parse tree produced by the {@code currentUser}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitCurrentUser(trinoSqlParserParser.CurrentUserContext ctx);
	/**
	 * Enter a parse tree produced by the {@code measure}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterMeasure(trinoSqlParserParser.MeasureContext ctx);
	/**
	 * Exit a parse tree produced by the {@code measure}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitMeasure(trinoSqlParserParser.MeasureContext ctx);
	/**
	 * Enter a parse tree produced by the {@code extract}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterExtract(trinoSqlParserParser.ExtractContext ctx);
	/**
	 * Exit a parse tree produced by the {@code extract}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitExtract(trinoSqlParserParser.ExtractContext ctx);
	/**
	 * Enter a parse tree produced by the {@code stringLiteral}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterStringLiteral(trinoSqlParserParser.StringLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code stringLiteral}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitStringLiteral(trinoSqlParserParser.StringLiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code arrayConstructor}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterArrayConstructor(trinoSqlParserParser.ArrayConstructorContext ctx);
	/**
	 * Exit a parse tree produced by the {@code arrayConstructor}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitArrayConstructor(trinoSqlParserParser.ArrayConstructorContext ctx);
	/**
	 * Enter a parse tree produced by the {@code functionCall}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterFunctionCall(trinoSqlParserParser.FunctionCallContext ctx);
	/**
	 * Exit a parse tree produced by the {@code functionCall}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitFunctionCall(trinoSqlParserParser.FunctionCallContext ctx);
	/**
	 * Enter a parse tree produced by the {@code currentSchema}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterCurrentSchema(trinoSqlParserParser.CurrentSchemaContext ctx);
	/**
	 * Exit a parse tree produced by the {@code currentSchema}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitCurrentSchema(trinoSqlParserParser.CurrentSchemaContext ctx);
	/**
	 * Enter a parse tree produced by the {@code exists}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterExists(trinoSqlParserParser.ExistsContext ctx);
	/**
	 * Exit a parse tree produced by the {@code exists}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitExists(trinoSqlParserParser.ExistsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code position}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterPosition(trinoSqlParserParser.PositionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code position}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitPosition(trinoSqlParserParser.PositionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code searchedCase}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterSearchedCase(trinoSqlParserParser.SearchedCaseContext ctx);
	/**
	 * Exit a parse tree produced by the {@code searchedCase}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitSearchedCase(trinoSqlParserParser.SearchedCaseContext ctx);
	/**
	 * Enter a parse tree produced by the {@code currentCatalog}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterCurrentCatalog(trinoSqlParserParser.CurrentCatalogContext ctx);
	/**
	 * Exit a parse tree produced by the {@code currentCatalog}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitCurrentCatalog(trinoSqlParserParser.CurrentCatalogContext ctx);
	/**
	 * Enter a parse tree produced by the {@code groupingOperation}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterGroupingOperation(trinoSqlParserParser.GroupingOperationContext ctx);
	/**
	 * Exit a parse tree produced by the {@code groupingOperation}
	 * labeled alternative in {@link trinoSqlParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitGroupingOperation(trinoSqlParserParser.GroupingOperationContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#processingMode}.
	 * @param ctx the parse tree
	 */
	void enterProcessingMode(trinoSqlParserParser.ProcessingModeContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#processingMode}.
	 * @param ctx the parse tree
	 */
	void exitProcessingMode(trinoSqlParserParser.ProcessingModeContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#nullTreatment}.
	 * @param ctx the parse tree
	 */
	void enterNullTreatment(trinoSqlParserParser.NullTreatmentContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#nullTreatment}.
	 * @param ctx the parse tree
	 */
	void exitNullTreatment(trinoSqlParserParser.NullTreatmentContext ctx);
	/**
	 * Enter a parse tree produced by the {@code basicStringLiteral}
	 * labeled alternative in {@link trinoSqlParserParser#string}.
	 * @param ctx the parse tree
	 */
	void enterBasicStringLiteral(trinoSqlParserParser.BasicStringLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code basicStringLiteral}
	 * labeled alternative in {@link trinoSqlParserParser#string}.
	 * @param ctx the parse tree
	 */
	void exitBasicStringLiteral(trinoSqlParserParser.BasicStringLiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code unicodeStringLiteral}
	 * labeled alternative in {@link trinoSqlParserParser#string}.
	 * @param ctx the parse tree
	 */
	void enterUnicodeStringLiteral(trinoSqlParserParser.UnicodeStringLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code unicodeStringLiteral}
	 * labeled alternative in {@link trinoSqlParserParser#string}.
	 * @param ctx the parse tree
	 */
	void exitUnicodeStringLiteral(trinoSqlParserParser.UnicodeStringLiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code timeZoneInterval}
	 * labeled alternative in {@link trinoSqlParserParser#timeZoneSpecifier}.
	 * @param ctx the parse tree
	 */
	void enterTimeZoneInterval(trinoSqlParserParser.TimeZoneIntervalContext ctx);
	/**
	 * Exit a parse tree produced by the {@code timeZoneInterval}
	 * labeled alternative in {@link trinoSqlParserParser#timeZoneSpecifier}.
	 * @param ctx the parse tree
	 */
	void exitTimeZoneInterval(trinoSqlParserParser.TimeZoneIntervalContext ctx);
	/**
	 * Enter a parse tree produced by the {@code timeZoneString}
	 * labeled alternative in {@link trinoSqlParserParser#timeZoneSpecifier}.
	 * @param ctx the parse tree
	 */
	void enterTimeZoneString(trinoSqlParserParser.TimeZoneStringContext ctx);
	/**
	 * Exit a parse tree produced by the {@code timeZoneString}
	 * labeled alternative in {@link trinoSqlParserParser#timeZoneSpecifier}.
	 * @param ctx the parse tree
	 */
	void exitTimeZoneString(trinoSqlParserParser.TimeZoneStringContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#comparisonOperator}.
	 * @param ctx the parse tree
	 */
	void enterComparisonOperator(trinoSqlParserParser.ComparisonOperatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#comparisonOperator}.
	 * @param ctx the parse tree
	 */
	void exitComparisonOperator(trinoSqlParserParser.ComparisonOperatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#comparisonQuantifier}.
	 * @param ctx the parse tree
	 */
	void enterComparisonQuantifier(trinoSqlParserParser.ComparisonQuantifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#comparisonQuantifier}.
	 * @param ctx the parse tree
	 */
	void exitComparisonQuantifier(trinoSqlParserParser.ComparisonQuantifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#booleanValue}.
	 * @param ctx the parse tree
	 */
	void enterBooleanValue(trinoSqlParserParser.BooleanValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#booleanValue}.
	 * @param ctx the parse tree
	 */
	void exitBooleanValue(trinoSqlParserParser.BooleanValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#interval}.
	 * @param ctx the parse tree
	 */
	void enterInterval(trinoSqlParserParser.IntervalContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#interval}.
	 * @param ctx the parse tree
	 */
	void exitInterval(trinoSqlParserParser.IntervalContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#intervalField}.
	 * @param ctx the parse tree
	 */
	void enterIntervalField(trinoSqlParserParser.IntervalFieldContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#intervalField}.
	 * @param ctx the parse tree
	 */
	void exitIntervalField(trinoSqlParserParser.IntervalFieldContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#normalForm}.
	 * @param ctx the parse tree
	 */
	void enterNormalForm(trinoSqlParserParser.NormalFormContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#normalForm}.
	 * @param ctx the parse tree
	 */
	void exitNormalForm(trinoSqlParserParser.NormalFormContext ctx);
	/**
	 * Enter a parse tree produced by the {@code rowType}
	 * labeled alternative in {@link trinoSqlParserParser#type}.
	 * @param ctx the parse tree
	 */
	void enterRowType(trinoSqlParserParser.RowTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code rowType}
	 * labeled alternative in {@link trinoSqlParserParser#type}.
	 * @param ctx the parse tree
	 */
	void exitRowType(trinoSqlParserParser.RowTypeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code intervalType}
	 * labeled alternative in {@link trinoSqlParserParser#type}.
	 * @param ctx the parse tree
	 */
	void enterIntervalType(trinoSqlParserParser.IntervalTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code intervalType}
	 * labeled alternative in {@link trinoSqlParserParser#type}.
	 * @param ctx the parse tree
	 */
	void exitIntervalType(trinoSqlParserParser.IntervalTypeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code arrayType}
	 * labeled alternative in {@link trinoSqlParserParser#type}.
	 * @param ctx the parse tree
	 */
	void enterArrayType(trinoSqlParserParser.ArrayTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code arrayType}
	 * labeled alternative in {@link trinoSqlParserParser#type}.
	 * @param ctx the parse tree
	 */
	void exitArrayType(trinoSqlParserParser.ArrayTypeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code doublePrecisionType}
	 * labeled alternative in {@link trinoSqlParserParser#type}.
	 * @param ctx the parse tree
	 */
	void enterDoublePrecisionType(trinoSqlParserParser.DoublePrecisionTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code doublePrecisionType}
	 * labeled alternative in {@link trinoSqlParserParser#type}.
	 * @param ctx the parse tree
	 */
	void exitDoublePrecisionType(trinoSqlParserParser.DoublePrecisionTypeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code legacyArrayType}
	 * labeled alternative in {@link trinoSqlParserParser#type}.
	 * @param ctx the parse tree
	 */
	void enterLegacyArrayType(trinoSqlParserParser.LegacyArrayTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code legacyArrayType}
	 * labeled alternative in {@link trinoSqlParserParser#type}.
	 * @param ctx the parse tree
	 */
	void exitLegacyArrayType(trinoSqlParserParser.LegacyArrayTypeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code genericType}
	 * labeled alternative in {@link trinoSqlParserParser#type}.
	 * @param ctx the parse tree
	 */
	void enterGenericType(trinoSqlParserParser.GenericTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code genericType}
	 * labeled alternative in {@link trinoSqlParserParser#type}.
	 * @param ctx the parse tree
	 */
	void exitGenericType(trinoSqlParserParser.GenericTypeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code dateTimeType}
	 * labeled alternative in {@link trinoSqlParserParser#type}.
	 * @param ctx the parse tree
	 */
	void enterDateTimeType(trinoSqlParserParser.DateTimeTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code dateTimeType}
	 * labeled alternative in {@link trinoSqlParserParser#type}.
	 * @param ctx the parse tree
	 */
	void exitDateTimeType(trinoSqlParserParser.DateTimeTypeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code legacyMapType}
	 * labeled alternative in {@link trinoSqlParserParser#type}.
	 * @param ctx the parse tree
	 */
	void enterLegacyMapType(trinoSqlParserParser.LegacyMapTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code legacyMapType}
	 * labeled alternative in {@link trinoSqlParserParser#type}.
	 * @param ctx the parse tree
	 */
	void exitLegacyMapType(trinoSqlParserParser.LegacyMapTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#rowField}.
	 * @param ctx the parse tree
	 */
	void enterRowField(trinoSqlParserParser.RowFieldContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#rowField}.
	 * @param ctx the parse tree
	 */
	void exitRowField(trinoSqlParserParser.RowFieldContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#typeParameter}.
	 * @param ctx the parse tree
	 */
	void enterTypeParameter(trinoSqlParserParser.TypeParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#typeParameter}.
	 * @param ctx the parse tree
	 */
	void exitTypeParameter(trinoSqlParserParser.TypeParameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#whenClause}.
	 * @param ctx the parse tree
	 */
	void enterWhenClause(trinoSqlParserParser.WhenClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#whenClause}.
	 * @param ctx the parse tree
	 */
	void exitWhenClause(trinoSqlParserParser.WhenClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#filter}.
	 * @param ctx the parse tree
	 */
	void enterFilter(trinoSqlParserParser.FilterContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#filter}.
	 * @param ctx the parse tree
	 */
	void exitFilter(trinoSqlParserParser.FilterContext ctx);
	/**
	 * Enter a parse tree produced by the {@code mergeUpdate}
	 * labeled alternative in {@link trinoSqlParserParser#mergeCase}.
	 * @param ctx the parse tree
	 */
	void enterMergeUpdate(trinoSqlParserParser.MergeUpdateContext ctx);
	/**
	 * Exit a parse tree produced by the {@code mergeUpdate}
	 * labeled alternative in {@link trinoSqlParserParser#mergeCase}.
	 * @param ctx the parse tree
	 */
	void exitMergeUpdate(trinoSqlParserParser.MergeUpdateContext ctx);
	/**
	 * Enter a parse tree produced by the {@code mergeDelete}
	 * labeled alternative in {@link trinoSqlParserParser#mergeCase}.
	 * @param ctx the parse tree
	 */
	void enterMergeDelete(trinoSqlParserParser.MergeDeleteContext ctx);
	/**
	 * Exit a parse tree produced by the {@code mergeDelete}
	 * labeled alternative in {@link trinoSqlParserParser#mergeCase}.
	 * @param ctx the parse tree
	 */
	void exitMergeDelete(trinoSqlParserParser.MergeDeleteContext ctx);
	/**
	 * Enter a parse tree produced by the {@code mergeInsert}
	 * labeled alternative in {@link trinoSqlParserParser#mergeCase}.
	 * @param ctx the parse tree
	 */
	void enterMergeInsert(trinoSqlParserParser.MergeInsertContext ctx);
	/**
	 * Exit a parse tree produced by the {@code mergeInsert}
	 * labeled alternative in {@link trinoSqlParserParser#mergeCase}.
	 * @param ctx the parse tree
	 */
	void exitMergeInsert(trinoSqlParserParser.MergeInsertContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#over}.
	 * @param ctx the parse tree
	 */
	void enterOver(trinoSqlParserParser.OverContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#over}.
	 * @param ctx the parse tree
	 */
	void exitOver(trinoSqlParserParser.OverContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#windowFrame}.
	 * @param ctx the parse tree
	 */
	void enterWindowFrame(trinoSqlParserParser.WindowFrameContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#windowFrame}.
	 * @param ctx the parse tree
	 */
	void exitWindowFrame(trinoSqlParserParser.WindowFrameContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#frameExtent}.
	 * @param ctx the parse tree
	 */
	void enterFrameExtent(trinoSqlParserParser.FrameExtentContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#frameExtent}.
	 * @param ctx the parse tree
	 */
	void exitFrameExtent(trinoSqlParserParser.FrameExtentContext ctx);
	/**
	 * Enter a parse tree produced by the {@code unboundedFrame}
	 * labeled alternative in {@link trinoSqlParserParser#frameBound}.
	 * @param ctx the parse tree
	 */
	void enterUnboundedFrame(trinoSqlParserParser.UnboundedFrameContext ctx);
	/**
	 * Exit a parse tree produced by the {@code unboundedFrame}
	 * labeled alternative in {@link trinoSqlParserParser#frameBound}.
	 * @param ctx the parse tree
	 */
	void exitUnboundedFrame(trinoSqlParserParser.UnboundedFrameContext ctx);
	/**
	 * Enter a parse tree produced by the {@code currentRowBound}
	 * labeled alternative in {@link trinoSqlParserParser#frameBound}.
	 * @param ctx the parse tree
	 */
	void enterCurrentRowBound(trinoSqlParserParser.CurrentRowBoundContext ctx);
	/**
	 * Exit a parse tree produced by the {@code currentRowBound}
	 * labeled alternative in {@link trinoSqlParserParser#frameBound}.
	 * @param ctx the parse tree
	 */
	void exitCurrentRowBound(trinoSqlParserParser.CurrentRowBoundContext ctx);
	/**
	 * Enter a parse tree produced by the {@code boundedFrame}
	 * labeled alternative in {@link trinoSqlParserParser#frameBound}.
	 * @param ctx the parse tree
	 */
	void enterBoundedFrame(trinoSqlParserParser.BoundedFrameContext ctx);
	/**
	 * Exit a parse tree produced by the {@code boundedFrame}
	 * labeled alternative in {@link trinoSqlParserParser#frameBound}.
	 * @param ctx the parse tree
	 */
	void exitBoundedFrame(trinoSqlParserParser.BoundedFrameContext ctx);
	/**
	 * Enter a parse tree produced by the {@code quantifiedPrimary}
	 * labeled alternative in {@link trinoSqlParserParser#rowPattern}.
	 * @param ctx the parse tree
	 */
	void enterQuantifiedPrimary(trinoSqlParserParser.QuantifiedPrimaryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code quantifiedPrimary}
	 * labeled alternative in {@link trinoSqlParserParser#rowPattern}.
	 * @param ctx the parse tree
	 */
	void exitQuantifiedPrimary(trinoSqlParserParser.QuantifiedPrimaryContext ctx);
	/**
	 * Enter a parse tree produced by the {@code patternConcatenation}
	 * labeled alternative in {@link trinoSqlParserParser#rowPattern}.
	 * @param ctx the parse tree
	 */
	void enterPatternConcatenation(trinoSqlParserParser.PatternConcatenationContext ctx);
	/**
	 * Exit a parse tree produced by the {@code patternConcatenation}
	 * labeled alternative in {@link trinoSqlParserParser#rowPattern}.
	 * @param ctx the parse tree
	 */
	void exitPatternConcatenation(trinoSqlParserParser.PatternConcatenationContext ctx);
	/**
	 * Enter a parse tree produced by the {@code patternAlternation}
	 * labeled alternative in {@link trinoSqlParserParser#rowPattern}.
	 * @param ctx the parse tree
	 */
	void enterPatternAlternation(trinoSqlParserParser.PatternAlternationContext ctx);
	/**
	 * Exit a parse tree produced by the {@code patternAlternation}
	 * labeled alternative in {@link trinoSqlParserParser#rowPattern}.
	 * @param ctx the parse tree
	 */
	void exitPatternAlternation(trinoSqlParserParser.PatternAlternationContext ctx);
	/**
	 * Enter a parse tree produced by the {@code patternVariable}
	 * labeled alternative in {@link trinoSqlParserParser#patternPrimary}.
	 * @param ctx the parse tree
	 */
	void enterPatternVariable(trinoSqlParserParser.PatternVariableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code patternVariable}
	 * labeled alternative in {@link trinoSqlParserParser#patternPrimary}.
	 * @param ctx the parse tree
	 */
	void exitPatternVariable(trinoSqlParserParser.PatternVariableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code emptyPattern}
	 * labeled alternative in {@link trinoSqlParserParser#patternPrimary}.
	 * @param ctx the parse tree
	 */
	void enterEmptyPattern(trinoSqlParserParser.EmptyPatternContext ctx);
	/**
	 * Exit a parse tree produced by the {@code emptyPattern}
	 * labeled alternative in {@link trinoSqlParserParser#patternPrimary}.
	 * @param ctx the parse tree
	 */
	void exitEmptyPattern(trinoSqlParserParser.EmptyPatternContext ctx);
	/**
	 * Enter a parse tree produced by the {@code patternPermutation}
	 * labeled alternative in {@link trinoSqlParserParser#patternPrimary}.
	 * @param ctx the parse tree
	 */
	void enterPatternPermutation(trinoSqlParserParser.PatternPermutationContext ctx);
	/**
	 * Exit a parse tree produced by the {@code patternPermutation}
	 * labeled alternative in {@link trinoSqlParserParser#patternPrimary}.
	 * @param ctx the parse tree
	 */
	void exitPatternPermutation(trinoSqlParserParser.PatternPermutationContext ctx);
	/**
	 * Enter a parse tree produced by the {@code groupedPattern}
	 * labeled alternative in {@link trinoSqlParserParser#patternPrimary}.
	 * @param ctx the parse tree
	 */
	void enterGroupedPattern(trinoSqlParserParser.GroupedPatternContext ctx);
	/**
	 * Exit a parse tree produced by the {@code groupedPattern}
	 * labeled alternative in {@link trinoSqlParserParser#patternPrimary}.
	 * @param ctx the parse tree
	 */
	void exitGroupedPattern(trinoSqlParserParser.GroupedPatternContext ctx);
	/**
	 * Enter a parse tree produced by the {@code partitionStartAnchor}
	 * labeled alternative in {@link trinoSqlParserParser#patternPrimary}.
	 * @param ctx the parse tree
	 */
	void enterPartitionStartAnchor(trinoSqlParserParser.PartitionStartAnchorContext ctx);
	/**
	 * Exit a parse tree produced by the {@code partitionStartAnchor}
	 * labeled alternative in {@link trinoSqlParserParser#patternPrimary}.
	 * @param ctx the parse tree
	 */
	void exitPartitionStartAnchor(trinoSqlParserParser.PartitionStartAnchorContext ctx);
	/**
	 * Enter a parse tree produced by the {@code partitionEndAnchor}
	 * labeled alternative in {@link trinoSqlParserParser#patternPrimary}.
	 * @param ctx the parse tree
	 */
	void enterPartitionEndAnchor(trinoSqlParserParser.PartitionEndAnchorContext ctx);
	/**
	 * Exit a parse tree produced by the {@code partitionEndAnchor}
	 * labeled alternative in {@link trinoSqlParserParser#patternPrimary}.
	 * @param ctx the parse tree
	 */
	void exitPartitionEndAnchor(trinoSqlParserParser.PartitionEndAnchorContext ctx);
	/**
	 * Enter a parse tree produced by the {@code excludedPattern}
	 * labeled alternative in {@link trinoSqlParserParser#patternPrimary}.
	 * @param ctx the parse tree
	 */
	void enterExcludedPattern(trinoSqlParserParser.ExcludedPatternContext ctx);
	/**
	 * Exit a parse tree produced by the {@code excludedPattern}
	 * labeled alternative in {@link trinoSqlParserParser#patternPrimary}.
	 * @param ctx the parse tree
	 */
	void exitExcludedPattern(trinoSqlParserParser.ExcludedPatternContext ctx);
	/**
	 * Enter a parse tree produced by the {@code zeroOrMoreQuantifier}
	 * labeled alternative in {@link trinoSqlParserParser#patternQuantifier}.
	 * @param ctx the parse tree
	 */
	void enterZeroOrMoreQuantifier(trinoSqlParserParser.ZeroOrMoreQuantifierContext ctx);
	/**
	 * Exit a parse tree produced by the {@code zeroOrMoreQuantifier}
	 * labeled alternative in {@link trinoSqlParserParser#patternQuantifier}.
	 * @param ctx the parse tree
	 */
	void exitZeroOrMoreQuantifier(trinoSqlParserParser.ZeroOrMoreQuantifierContext ctx);
	/**
	 * Enter a parse tree produced by the {@code oneOrMoreQuantifier}
	 * labeled alternative in {@link trinoSqlParserParser#patternQuantifier}.
	 * @param ctx the parse tree
	 */
	void enterOneOrMoreQuantifier(trinoSqlParserParser.OneOrMoreQuantifierContext ctx);
	/**
	 * Exit a parse tree produced by the {@code oneOrMoreQuantifier}
	 * labeled alternative in {@link trinoSqlParserParser#patternQuantifier}.
	 * @param ctx the parse tree
	 */
	void exitOneOrMoreQuantifier(trinoSqlParserParser.OneOrMoreQuantifierContext ctx);
	/**
	 * Enter a parse tree produced by the {@code zeroOrOneQuantifier}
	 * labeled alternative in {@link trinoSqlParserParser#patternQuantifier}.
	 * @param ctx the parse tree
	 */
	void enterZeroOrOneQuantifier(trinoSqlParserParser.ZeroOrOneQuantifierContext ctx);
	/**
	 * Exit a parse tree produced by the {@code zeroOrOneQuantifier}
	 * labeled alternative in {@link trinoSqlParserParser#patternQuantifier}.
	 * @param ctx the parse tree
	 */
	void exitZeroOrOneQuantifier(trinoSqlParserParser.ZeroOrOneQuantifierContext ctx);
	/**
	 * Enter a parse tree produced by the {@code rangeQuantifier}
	 * labeled alternative in {@link trinoSqlParserParser#patternQuantifier}.
	 * @param ctx the parse tree
	 */
	void enterRangeQuantifier(trinoSqlParserParser.RangeQuantifierContext ctx);
	/**
	 * Exit a parse tree produced by the {@code rangeQuantifier}
	 * labeled alternative in {@link trinoSqlParserParser#patternQuantifier}.
	 * @param ctx the parse tree
	 */
	void exitRangeQuantifier(trinoSqlParserParser.RangeQuantifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#updateAssignment}.
	 * @param ctx the parse tree
	 */
	void enterUpdateAssignment(trinoSqlParserParser.UpdateAssignmentContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#updateAssignment}.
	 * @param ctx the parse tree
	 */
	void exitUpdateAssignment(trinoSqlParserParser.UpdateAssignmentContext ctx);
	/**
	 * Enter a parse tree produced by the {@code explainFormat}
	 * labeled alternative in {@link trinoSqlParserParser#explainOption}.
	 * @param ctx the parse tree
	 */
	void enterExplainFormat(trinoSqlParserParser.ExplainFormatContext ctx);
	/**
	 * Exit a parse tree produced by the {@code explainFormat}
	 * labeled alternative in {@link trinoSqlParserParser#explainOption}.
	 * @param ctx the parse tree
	 */
	void exitExplainFormat(trinoSqlParserParser.ExplainFormatContext ctx);
	/**
	 * Enter a parse tree produced by the {@code explainType}
	 * labeled alternative in {@link trinoSqlParserParser#explainOption}.
	 * @param ctx the parse tree
	 */
	void enterExplainType(trinoSqlParserParser.ExplainTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code explainType}
	 * labeled alternative in {@link trinoSqlParserParser#explainOption}.
	 * @param ctx the parse tree
	 */
	void exitExplainType(trinoSqlParserParser.ExplainTypeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code isolationLevel}
	 * labeled alternative in {@link trinoSqlParserParser#transactionMode}.
	 * @param ctx the parse tree
	 */
	void enterIsolationLevel(trinoSqlParserParser.IsolationLevelContext ctx);
	/**
	 * Exit a parse tree produced by the {@code isolationLevel}
	 * labeled alternative in {@link trinoSqlParserParser#transactionMode}.
	 * @param ctx the parse tree
	 */
	void exitIsolationLevel(trinoSqlParserParser.IsolationLevelContext ctx);
	/**
	 * Enter a parse tree produced by the {@code transactionAccessMode}
	 * labeled alternative in {@link trinoSqlParserParser#transactionMode}.
	 * @param ctx the parse tree
	 */
	void enterTransactionAccessMode(trinoSqlParserParser.TransactionAccessModeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code transactionAccessMode}
	 * labeled alternative in {@link trinoSqlParserParser#transactionMode}.
	 * @param ctx the parse tree
	 */
	void exitTransactionAccessMode(trinoSqlParserParser.TransactionAccessModeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code readUncommitted}
	 * labeled alternative in {@link trinoSqlParserParser#levelOfIsolation}.
	 * @param ctx the parse tree
	 */
	void enterReadUncommitted(trinoSqlParserParser.ReadUncommittedContext ctx);
	/**
	 * Exit a parse tree produced by the {@code readUncommitted}
	 * labeled alternative in {@link trinoSqlParserParser#levelOfIsolation}.
	 * @param ctx the parse tree
	 */
	void exitReadUncommitted(trinoSqlParserParser.ReadUncommittedContext ctx);
	/**
	 * Enter a parse tree produced by the {@code readCommitted}
	 * labeled alternative in {@link trinoSqlParserParser#levelOfIsolation}.
	 * @param ctx the parse tree
	 */
	void enterReadCommitted(trinoSqlParserParser.ReadCommittedContext ctx);
	/**
	 * Exit a parse tree produced by the {@code readCommitted}
	 * labeled alternative in {@link trinoSqlParserParser#levelOfIsolation}.
	 * @param ctx the parse tree
	 */
	void exitReadCommitted(trinoSqlParserParser.ReadCommittedContext ctx);
	/**
	 * Enter a parse tree produced by the {@code repeatableRead}
	 * labeled alternative in {@link trinoSqlParserParser#levelOfIsolation}.
	 * @param ctx the parse tree
	 */
	void enterRepeatableRead(trinoSqlParserParser.RepeatableReadContext ctx);
	/**
	 * Exit a parse tree produced by the {@code repeatableRead}
	 * labeled alternative in {@link trinoSqlParserParser#levelOfIsolation}.
	 * @param ctx the parse tree
	 */
	void exitRepeatableRead(trinoSqlParserParser.RepeatableReadContext ctx);
	/**
	 * Enter a parse tree produced by the {@code serializable}
	 * labeled alternative in {@link trinoSqlParserParser#levelOfIsolation}.
	 * @param ctx the parse tree
	 */
	void enterSerializable(trinoSqlParserParser.SerializableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code serializable}
	 * labeled alternative in {@link trinoSqlParserParser#levelOfIsolation}.
	 * @param ctx the parse tree
	 */
	void exitSerializable(trinoSqlParserParser.SerializableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code positionalArgument}
	 * labeled alternative in {@link trinoSqlParserParser#callArgument}.
	 * @param ctx the parse tree
	 */
	void enterPositionalArgument(trinoSqlParserParser.PositionalArgumentContext ctx);
	/**
	 * Exit a parse tree produced by the {@code positionalArgument}
	 * labeled alternative in {@link trinoSqlParserParser#callArgument}.
	 * @param ctx the parse tree
	 */
	void exitPositionalArgument(trinoSqlParserParser.PositionalArgumentContext ctx);
	/**
	 * Enter a parse tree produced by the {@code namedArgument}
	 * labeled alternative in {@link trinoSqlParserParser#callArgument}.
	 * @param ctx the parse tree
	 */
	void enterNamedArgument(trinoSqlParserParser.NamedArgumentContext ctx);
	/**
	 * Exit a parse tree produced by the {@code namedArgument}
	 * labeled alternative in {@link trinoSqlParserParser#callArgument}.
	 * @param ctx the parse tree
	 */
	void exitNamedArgument(trinoSqlParserParser.NamedArgumentContext ctx);
	/**
	 * Enter a parse tree produced by the {@code qualifiedArgument}
	 * labeled alternative in {@link trinoSqlParserParser#pathElement}.
	 * @param ctx the parse tree
	 */
	void enterQualifiedArgument(trinoSqlParserParser.QualifiedArgumentContext ctx);
	/**
	 * Exit a parse tree produced by the {@code qualifiedArgument}
	 * labeled alternative in {@link trinoSqlParserParser#pathElement}.
	 * @param ctx the parse tree
	 */
	void exitQualifiedArgument(trinoSqlParserParser.QualifiedArgumentContext ctx);
	/**
	 * Enter a parse tree produced by the {@code unqualifiedArgument}
	 * labeled alternative in {@link trinoSqlParserParser#pathElement}.
	 * @param ctx the parse tree
	 */
	void enterUnqualifiedArgument(trinoSqlParserParser.UnqualifiedArgumentContext ctx);
	/**
	 * Exit a parse tree produced by the {@code unqualifiedArgument}
	 * labeled alternative in {@link trinoSqlParserParser#pathElement}.
	 * @param ctx the parse tree
	 */
	void exitUnqualifiedArgument(trinoSqlParserParser.UnqualifiedArgumentContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#pathSpecification}.
	 * @param ctx the parse tree
	 */
	void enterPathSpecification(trinoSqlParserParser.PathSpecificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#pathSpecification}.
	 * @param ctx the parse tree
	 */
	void exitPathSpecification(trinoSqlParserParser.PathSpecificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#privilege}.
	 * @param ctx the parse tree
	 */
	void enterPrivilege(trinoSqlParserParser.PrivilegeContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#privilege}.
	 * @param ctx the parse tree
	 */
	void exitPrivilege(trinoSqlParserParser.PrivilegeContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#qualifiedName}.
	 * @param ctx the parse tree
	 */
	void enterQualifiedName(trinoSqlParserParser.QualifiedNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#qualifiedName}.
	 * @param ctx the parse tree
	 */
	void exitQualifiedName(trinoSqlParserParser.QualifiedNameContext ctx);
	/**
	 * Enter a parse tree produced by the {@code specifiedPrincipal}
	 * labeled alternative in {@link trinoSqlParserParser#grantor}.
	 * @param ctx the parse tree
	 */
	void enterSpecifiedPrincipal(trinoSqlParserParser.SpecifiedPrincipalContext ctx);
	/**
	 * Exit a parse tree produced by the {@code specifiedPrincipal}
	 * labeled alternative in {@link trinoSqlParserParser#grantor}.
	 * @param ctx the parse tree
	 */
	void exitSpecifiedPrincipal(trinoSqlParserParser.SpecifiedPrincipalContext ctx);
	/**
	 * Enter a parse tree produced by the {@code currentUserGrantor}
	 * labeled alternative in {@link trinoSqlParserParser#grantor}.
	 * @param ctx the parse tree
	 */
	void enterCurrentUserGrantor(trinoSqlParserParser.CurrentUserGrantorContext ctx);
	/**
	 * Exit a parse tree produced by the {@code currentUserGrantor}
	 * labeled alternative in {@link trinoSqlParserParser#grantor}.
	 * @param ctx the parse tree
	 */
	void exitCurrentUserGrantor(trinoSqlParserParser.CurrentUserGrantorContext ctx);
	/**
	 * Enter a parse tree produced by the {@code currentRoleGrantor}
	 * labeled alternative in {@link trinoSqlParserParser#grantor}.
	 * @param ctx the parse tree
	 */
	void enterCurrentRoleGrantor(trinoSqlParserParser.CurrentRoleGrantorContext ctx);
	/**
	 * Exit a parse tree produced by the {@code currentRoleGrantor}
	 * labeled alternative in {@link trinoSqlParserParser#grantor}.
	 * @param ctx the parse tree
	 */
	void exitCurrentRoleGrantor(trinoSqlParserParser.CurrentRoleGrantorContext ctx);
	/**
	 * Enter a parse tree produced by the {@code unspecifiedPrincipal}
	 * labeled alternative in {@link trinoSqlParserParser#principal}.
	 * @param ctx the parse tree
	 */
	void enterUnspecifiedPrincipal(trinoSqlParserParser.UnspecifiedPrincipalContext ctx);
	/**
	 * Exit a parse tree produced by the {@code unspecifiedPrincipal}
	 * labeled alternative in {@link trinoSqlParserParser#principal}.
	 * @param ctx the parse tree
	 */
	void exitUnspecifiedPrincipal(trinoSqlParserParser.UnspecifiedPrincipalContext ctx);
	/**
	 * Enter a parse tree produced by the {@code userPrincipal}
	 * labeled alternative in {@link trinoSqlParserParser#principal}.
	 * @param ctx the parse tree
	 */
	void enterUserPrincipal(trinoSqlParserParser.UserPrincipalContext ctx);
	/**
	 * Exit a parse tree produced by the {@code userPrincipal}
	 * labeled alternative in {@link trinoSqlParserParser#principal}.
	 * @param ctx the parse tree
	 */
	void exitUserPrincipal(trinoSqlParserParser.UserPrincipalContext ctx);
	/**
	 * Enter a parse tree produced by the {@code rolePrincipal}
	 * labeled alternative in {@link trinoSqlParserParser#principal}.
	 * @param ctx the parse tree
	 */
	void enterRolePrincipal(trinoSqlParserParser.RolePrincipalContext ctx);
	/**
	 * Exit a parse tree produced by the {@code rolePrincipal}
	 * labeled alternative in {@link trinoSqlParserParser#principal}.
	 * @param ctx the parse tree
	 */
	void exitRolePrincipal(trinoSqlParserParser.RolePrincipalContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#roles}.
	 * @param ctx the parse tree
	 */
	void enterRoles(trinoSqlParserParser.RolesContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#roles}.
	 * @param ctx the parse tree
	 */
	void exitRoles(trinoSqlParserParser.RolesContext ctx);
	/**
	 * Enter a parse tree produced by the {@code unquotedIdentifier}
	 * labeled alternative in {@link trinoSqlParserParser#identifier}.
	 * @param ctx the parse tree
	 */
	void enterUnquotedIdentifier(trinoSqlParserParser.UnquotedIdentifierContext ctx);
	/**
	 * Exit a parse tree produced by the {@code unquotedIdentifier}
	 * labeled alternative in {@link trinoSqlParserParser#identifier}.
	 * @param ctx the parse tree
	 */
	void exitUnquotedIdentifier(trinoSqlParserParser.UnquotedIdentifierContext ctx);
	/**
	 * Enter a parse tree produced by the {@code quotedIdentifier}
	 * labeled alternative in {@link trinoSqlParserParser#identifier}.
	 * @param ctx the parse tree
	 */
	void enterQuotedIdentifier(trinoSqlParserParser.QuotedIdentifierContext ctx);
	/**
	 * Exit a parse tree produced by the {@code quotedIdentifier}
	 * labeled alternative in {@link trinoSqlParserParser#identifier}.
	 * @param ctx the parse tree
	 */
	void exitQuotedIdentifier(trinoSqlParserParser.QuotedIdentifierContext ctx);
	/**
	 * Enter a parse tree produced by the {@code backQuotedIdentifier}
	 * labeled alternative in {@link trinoSqlParserParser#identifier}.
	 * @param ctx the parse tree
	 */
	void enterBackQuotedIdentifier(trinoSqlParserParser.BackQuotedIdentifierContext ctx);
	/**
	 * Exit a parse tree produced by the {@code backQuotedIdentifier}
	 * labeled alternative in {@link trinoSqlParserParser#identifier}.
	 * @param ctx the parse tree
	 */
	void exitBackQuotedIdentifier(trinoSqlParserParser.BackQuotedIdentifierContext ctx);
	/**
	 * Enter a parse tree produced by the {@code digitIdentifier}
	 * labeled alternative in {@link trinoSqlParserParser#identifier}.
	 * @param ctx the parse tree
	 */
	void enterDigitIdentifier(trinoSqlParserParser.DigitIdentifierContext ctx);
	/**
	 * Exit a parse tree produced by the {@code digitIdentifier}
	 * labeled alternative in {@link trinoSqlParserParser#identifier}.
	 * @param ctx the parse tree
	 */
	void exitDigitIdentifier(trinoSqlParserParser.DigitIdentifierContext ctx);
	/**
	 * Enter a parse tree produced by the {@code decimalLiteral}
	 * labeled alternative in {@link trinoSqlParserParser#number}.
	 * @param ctx the parse tree
	 */
	void enterDecimalLiteral(trinoSqlParserParser.DecimalLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code decimalLiteral}
	 * labeled alternative in {@link trinoSqlParserParser#number}.
	 * @param ctx the parse tree
	 */
	void exitDecimalLiteral(trinoSqlParserParser.DecimalLiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code doubleLiteral}
	 * labeled alternative in {@link trinoSqlParserParser#number}.
	 * @param ctx the parse tree
	 */
	void enterDoubleLiteral(trinoSqlParserParser.DoubleLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code doubleLiteral}
	 * labeled alternative in {@link trinoSqlParserParser#number}.
	 * @param ctx the parse tree
	 */
	void exitDoubleLiteral(trinoSqlParserParser.DoubleLiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code integerLiteral}
	 * labeled alternative in {@link trinoSqlParserParser#number}.
	 * @param ctx the parse tree
	 */
	void enterIntegerLiteral(trinoSqlParserParser.IntegerLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code integerLiteral}
	 * labeled alternative in {@link trinoSqlParserParser#number}.
	 * @param ctx the parse tree
	 */
	void exitIntegerLiteral(trinoSqlParserParser.IntegerLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link trinoSqlParserParser#nonReserved}.
	 * @param ctx the parse tree
	 */
	void enterNonReserved(trinoSqlParserParser.NonReservedContext ctx);
	/**
	 * Exit a parse tree produced by {@link trinoSqlParserParser#nonReserved}.
	 * @param ctx the parse tree
	 */
	void exitNonReserved(trinoSqlParserParser.NonReservedContext ctx);
}