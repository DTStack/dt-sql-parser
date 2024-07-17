import type { TrinoSqlListener } from '../../lib/trino/TrinoSqlListener';
import {
    AliasedRelationContext,
    CatalogNameCreateContext,
    CatalogRefContext,
    ColumnDefinitionContext,
    ColumnNameCreateContext,
    CreateMaterializedViewContext,
    CreateSchemaContext,
    CreateTableAsSelectContext,
    CreateTableContext,
    CreateViewContext,
    InsertIntoContext,
    QueryStatementContext,
    SchemaNameCreateContext,
    SchemaRefContext,
    SingleStatementContext,
    TableNameCreateContext,
    TableRefContext,
    ViewNameCreateContext,
    ViewRefContext,
} from '../../lib/trino/TrinoSqlParser';
import { AttrName, EntityCollector, StmtContextType } from '../common/entityCollector';
import { EntityContextType } from '../common/types';

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
        const needCollectAttr = this.getRootStmt()?.stmtContextType === StmtContextType.SELECT_STMT;
        this.pushEntity(
            ctx,
            EntityContextType.TABLE,
            needCollectAttr
                ? {
                      attrNameList: [AttrName.alias],
                      endContextList: [AliasedRelationContext.name],
                  }
                : undefined
        );
    }

    exitTableNameCreate(ctx: TableNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.TABLE_CREATE, {
            attrNameList: [AttrName.comment],
            endContextList: [CreateTableContext.name, CreateTableAsSelectContext.name],
        });
    }

    exitViewRef(ctx: ViewRefContext) {
        this.pushEntity(ctx, EntityContextType.VIEW);
    }

    exitViewNameCreate(ctx: ViewNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.VIEW_CREATE, {
            attrNameList: [AttrName.comment],
            endContextList: [CreateMaterializedViewContext.name, CreateViewContext.name],
        });
    }

    exitColumnNameCreate(ctx: ColumnNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.COLUMN_CREATE, {
            attrNameList: [AttrName.comment, AttrName.colType],
            endContextList: [ColumnDefinitionContext.name],
        });
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
