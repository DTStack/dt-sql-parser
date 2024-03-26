import { EntityContextType } from '../../parser/common/basic-parser-types';
import {
    CatalogPathContext,
    CatalogPathCreateContext,
    ColumnNameCreateContext,
    CreateCatalogContext,
    CreateDatabaseContext,
    CreateFunctionContext,
    CreateTableContext,
    CreateViewContext,
    DatabasePathContext,
    DatabasePathCreateContext,
    FunctionNameCreateContext,
    InsertStatementContext,
    QueryStatementContext,
    SqlStatementContext,
    TablePathContext,
    TablePathCreateContext,
    ViewPathContext,
    ViewPathCreateContext,
} from '../../lib/flinksql/FlinkSqlParser';
import { FlinkSqlParserListener } from '../../lib/flinksql/FlinkSqlParserListener';
import EntityCollector, { StmtContextType } from '../common/entityCollector';

export default class FlinkEntityCollector
    extends EntityCollector
    implements FlinkSqlParserListener
{
    /** ====== Entity Begin */
    exitCatalogPathCreate(ctx: CatalogPathCreateContext) {
        this.pushEntity(ctx, EntityContextType.CATALOG_CREATE);
    }

    exitCatalogPath(ctx: CatalogPathContext) {
        this.pushEntity(ctx, EntityContextType.CATALOG);
    }

    exitDatabasePathCreate(ctx: DatabasePathCreateContext) {
        this.pushEntity(ctx, EntityContextType.DATABASE_CREATE);
    }

    exitDatabasePath(ctx: DatabasePathContext) {
        this.pushEntity(ctx, EntityContextType.DATABASE);
    }

    exitTablePath(ctx: TablePathContext) {
        this.pushEntity(ctx, EntityContextType.TABLE);
    }

    exitTablePathCreate(ctx: TablePathCreateContext) {
        this.pushEntity(ctx, EntityContextType.TABLE_CREATE);
    }

    exitViewPath(ctx: ViewPathContext) {
        this.pushEntity(ctx, EntityContextType.VIEW);
    }

    exitViewPathCreate(ctx: ViewPathCreateContext) {
        this.pushEntity(ctx, EntityContextType.VIEW_CREATE);
    }

    exitColumnNameCreate(ctx: ColumnNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.COLUMN_CREATE);
    }

    exitFunctionNameCreate(ctx: FunctionNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.FUNCTION_CREATE);
    }

    /** ===== Statement begin */
    enterSqlStatement(ctx: SqlStatementContext) {
        this.pushStmt(ctx, StmtContextType.COMMON_STMT);
    }

    exitSqlStatement(ctx: SqlStatementContext) {
        this.popStmt();
    }

    enterCreateCatalog(ctx: CreateCatalogContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_CATALOG_STMT);
    }

    exitCreateCatalog(ctx: CreateCatalogContext) {
        this.popStmt();
    }

    enterCreateDatabase(ctx: CreateDatabaseContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_DATABASE_STMT);
    }

    exitCreateDatabase(ctx: CreateDatabaseContext) {
        this.popStmt();
    }

    enterCreateTable(ctx: CreateTableContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }

    exitCreateTable(ctx: CreateTableContext) {
        this.popStmt();
    }

    enterCreateView(ctx: CreateViewContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
    }

    exitCreateView(ctx: CreateViewContext) {
        this.popStmt();
    }

    enterQueryStatement(ctx: QueryStatementContext) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }

    exitQueryStatement(ctx: QueryStatementContext) {
        this.popStmt();
    }

    enterCreateFunction(ctx: CreateFunctionContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_FUNCTION_STMT);
    }

    exitCreateFunction(ctx: CreateFunctionContext) {
        this.popStmt();
    }

    enterInsertStatement(ctx: InsertStatementContext) {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    }

    exitInsertStatement(ctx: InsertStatementContext) {
        this.popStmt();
    }
}
