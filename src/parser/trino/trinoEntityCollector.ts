import type {
    CatalogNameCreateContext,
    CatalogRefContext,
    ColumnNameCreateContext,
    CreateMaterializedViewContext,
    CreateSchemaContext,
    CreateTableAsSelectContext,
    CreateTableContext,
    CreateViewContext,
    InsertIntoContext,
    SchemaNameCreateContext,
    SchemaRefContext,
    SingleStatementContext,
    TableNameCreateContext,
    TableRefContext,
    ViewNameCreateContext,
    ViewRefContext,
    QueryStatementContext,
} from '../../lib/trino/TrinoSqlParser';
import type { TrinoSqlListener } from '../../lib/trino/TrinoSqlListener';
import { EntityContextType } from '../common/types';
import { StmtContextType, EntityCollector } from '../common/entityCollector';

export class TrinoEntityCollector extends EntityCollector implements TrinoSqlListener {
    /** ====== Entity Begin */
    exitCatalogRef(ctx: CatalogRefContext) {
        this.pushEntity(ctx, EntityContextType.CATALOG);
    }

    exitCatalogNameCreate(ctx: CatalogNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.CATALOG_CREATE);
    }

    exitSchemaRef(ctx: SchemaRefContext) {
        this.pushEntity(ctx, EntityContextType.DATABASE);
    }

    exitSchemaNameCreate(ctx: SchemaNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.DATABASE_CREATE);
    }

    exitTableRef(ctx: TableRefContext) {
        this.pushEntity(ctx, EntityContextType.TABLE);
    }

    exitTableNameCreate(ctx: TableNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.TABLE_CREATE);
    }

    exitViewRef(ctx: ViewRefContext) {
        this.pushEntity(ctx, EntityContextType.VIEW);
    }

    exitViewNameCreate(ctx: ViewNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.VIEW_CREATE);
    }

    exitColumnNameCreate(ctx: ColumnNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.COLUMN_CREATE);
    }

    /** ===== Statement begin */

    enterSingleStatement(ctx: SingleStatementContext) {
        this.pushStmt(ctx, StmtContextType.COMMON_STMT);
    }

    exitSingleStatement(ctx: SingleStatementContext) {
        this.popStmt();
    }

    enterCreateSchema(ctx: CreateSchemaContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_DATABASE_STMT);
    }

    exitCreateSchema(ctx: CreateSchemaContext) {
        this.popStmt();
    }

    enterCreateTableAsSelect(ctx: CreateTableAsSelectContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }

    exitCreateTableAsSelect(ctx: CreateTableAsSelectContext) {
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

    enterCreateMaterializedView(ctx: CreateMaterializedViewContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
    }

    exitCreateMaterializedView(ctx: CreateMaterializedViewContext) {
        this.popStmt();
    }

    enterQueryStatement(ctx: QueryStatementContext) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }

    exitQueryStatement(ctx: QueryStatementContext) {
        this.popStmt();
    }

    enterInsertInto(ctx: InsertIntoContext) {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    }

    exitInsertInto(ctx: InsertIntoContext) {
        this.popStmt();
    }
}
