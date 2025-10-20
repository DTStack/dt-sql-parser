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
    ExpressionSourceTableContext,
    InsertIntoContext,
    QueryStatementContext,
    SchemaNameCreateContext,
    SchemaRefContext,
    SelectAllWithoutTableContext,
    SelectExpressionColumnNameContext,
    SelectItemContext,
    SelectListContext,
    SelectLiteralColumnNameContext,
    SingleStatementContext,
    TableAllColumnsContext,
    TableNameCreateContext,
    TableRefContext,
    ViewNameCreateContext,
    ViewRefContext,
} from '../../lib/trino/TrinoSqlParser';
import {
    AttrName,
    ColumnDeclareType,
    EntityCollector,
    StmtContextType,
    TableDeclareType,
} from '../common/entityCollector';
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
        this.pushEntity(
            ctx,
            EntityContextType.TABLE,
            [
                {
                    attrName: AttrName.alias,
                    endContextList: [AliasedRelationContext.name],
                },
            ],
            {
                declareType: TableDeclareType.LITERAL,
            }
        );
    }

    exitExpressionSourceTable(ctx: ExpressionSourceTableContext) {
        this.pushEntity(
            ctx,
            EntityContextType.TABLE,
            [
                {
                    attrName: AttrName.alias,
                    endContextList: [AliasedRelationContext.name],
                },
            ],
            {
                declareType: TableDeclareType.EXPRESSION,
            }
        );
    }

    exitTableNameCreate(ctx: TableNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.TABLE_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [CreateTableContext.name, CreateTableAsSelectContext.name],
            },
        ]);
    }

    exitViewRef(ctx: ViewRefContext) {
        this.pushEntity(ctx, EntityContextType.VIEW);
    }

    exitViewNameCreate(ctx: ViewNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.VIEW_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [CreateMaterializedViewContext.name, CreateViewContext.name],
            },
        ]);
    }

    exitSelectList(ctx: SelectListContext) {
        this.pushEntity(ctx, EntityContextType.QUERY_RESULT);
    }

    exitColumnNameCreate(ctx: ColumnNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.COLUMN_CREATE, [
            {
                attrName: AttrName.colType,
                endContextList: [ColumnDefinitionContext.name],
            },
            {
                attrName: AttrName.comment,
                endContextList: [ColumnDefinitionContext.name],
            },
        ]);
    }

    exitSelectLiteralColumnName(ctx: SelectLiteralColumnNameContext) {
        this.pushEntity(
            ctx,
            EntityContextType.COLUMN,
            [
                {
                    attrName: AttrName.alias,
                    endContextList: [SelectItemContext.name],
                },
            ],
            {
                declareType: ColumnDeclareType.LITERAL,
            }
        );
    }

    exitSelectExpressionColumnName(ctx: SelectExpressionColumnNameContext) {
        this.pushEntity(
            ctx,
            EntityContextType.COLUMN,
            [
                {
                    attrName: AttrName.alias,
                    endContextList: [SelectItemContext.name],
                },
            ],
            {
                declareType: ColumnDeclareType.EXPRESSION,
            }
        );
    }

    exitTableAllColumns(ctx: TableAllColumnsContext) {
        this.pushEntity(ctx, EntityContextType.COLUMN, [], {
            declareType: ColumnDeclareType.ALL,
        });
    }

    exitSelectAllWithoutTable(ctx: SelectAllWithoutTableContext) {
        this.pushEntity(ctx, EntityContextType.COLUMN, [], {
            declareType: ColumnDeclareType.ALL,
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
