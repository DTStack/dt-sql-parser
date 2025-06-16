import {
    AtomExpressionTableContext,
    AtomFunctionTableContext,
    CatalogPathContext,
    CatalogPathCreateContext,
    ColumnNameCreateContext,
    ColumnProjectItemContext,
    CreateCatalogContext,
    CreateDatabaseContext,
    CreateFunctionContext,
    CreateTableContext,
    CreateViewContext,
    DatabasePathContext,
    DatabasePathCreateContext,
    FunctionNameCreateContext,
    InsertStatementContext,
    OverWindowItemContext,
    PhysicalColumnDefinitionContext,
    QueryStatementContext,
    SelectExpressionColumnNameContext,
    SelectListContext,
    SelectLiteralColumnNameContext,
    SelectWindowItemColumnNameContext,
    SqlStatementContext,
    TableAllColumnsContext,
    TablePathContext,
    TablePathCreateContext,
    TableReferenceContext,
    ViewPathContext,
    ViewPathCreateContext,
} from '../../lib/flink/FlinkSqlParser';
import { FlinkSqlParserListener } from '../../lib/flink/FlinkSqlParserListener';
import {
    AttrName,
    ColumnDeclareType,
    EntityCollector,
    StmtContextType,
    TableDeclareType,
} from '../common/entityCollector';
import { EntityContextType } from '../common/types';

export class FlinkEntityCollector extends EntityCollector implements FlinkSqlParserListener {
    /** ====== Entity Begin */
    exitCatalogPathCreate(ctx: CatalogPathCreateContext) {
        this.pushEntity(ctx, EntityContextType.CATALOG_CREATE);
    }

    exitCatalogPath(ctx: CatalogPathContext) {
        this.pushEntity(ctx, EntityContextType.CATALOG);
    }

    exitDatabasePathCreate(ctx: DatabasePathCreateContext) {
        this.pushEntity(ctx, EntityContextType.DATABASE_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [CreateDatabaseContext.name],
            },
        ]);
    }

    exitDatabasePath(ctx: DatabasePathContext) {
        this.pushEntity(ctx, EntityContextType.DATABASE);
    }

    exitTablePath(ctx: TablePathContext) {
        this.pushEntity(
            ctx,
            EntityContextType.TABLE,
            [
                {
                    attrName: AttrName.alias,
                    endContextList: [TableReferenceContext.name],
                },
            ],
            {
                declareType: TableDeclareType.COMMON,
            }
        );
    }

    exitAtomFunctionTable(ctx: AtomFunctionTableContext) {
        this.pushEntity(
            ctx,
            EntityContextType.TABLE,
            [
                {
                    attrName: AttrName.alias,
                    endContextList: [TableReferenceContext.name],
                },
            ],
            {
                declareType: TableDeclareType.EXPRESSION,
            }
        );
    }

    exitAtomExpressionTable(ctx: AtomExpressionTableContext) {
        this.pushEntity(
            ctx,
            EntityContextType.TABLE,
            [
                {
                    attrName: AttrName.alias,
                    endContextList: [TableReferenceContext.name],
                },
            ],
            {
                declareType: TableDeclareType.EXPRESSION,
            }
        );
    }

    exitTablePathCreate(ctx: TablePathCreateContext) {
        this.pushEntity(ctx, EntityContextType.TABLE_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [CreateTableContext.name],
            },
        ]);
    }

    exitViewPath(ctx: ViewPathContext) {
        this.pushEntity(ctx, EntityContextType.VIEW);
    }

    exitViewPathCreate(ctx: ViewPathCreateContext) {
        this.pushEntity(ctx, EntityContextType.VIEW_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [CreateViewContext.name],
            },
        ]);
    }

    exitFunctionNameCreate(ctx: FunctionNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.FUNCTION_CREATE);
    }

    exitSelectList(ctx: SelectListContext) {
        this.pushEntity(ctx, EntityContextType.QUERY_RESULT);
    }

    /** Column entity rules */
    exitColumnNameCreate(ctx: ColumnNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.COLUMN_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [PhysicalColumnDefinitionContext.name],
            },
            {
                attrName: AttrName.colType,
                endContextList: [PhysicalColumnDefinitionContext.name],
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
                    endContextList: [ColumnProjectItemContext.name],
                },
            ],
            {
                declareType: ColumnDeclareType.COMMON,
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
                    endContextList: [ColumnProjectItemContext.name],
                },
            ],
            {
                declareType: ColumnDeclareType.EXPRESSION,
            }
        );
    }

    exitSelectWindowItemColumnName(ctx: SelectWindowItemColumnNameContext) {
        this.pushEntity(
            ctx,
            EntityContextType.COLUMN,
            [
                {
                    attrName: AttrName.alias,
                    endContextList: [ColumnProjectItemContext.name, OverWindowItemContext.name],
                },
            ],
            {
                declareType: ColumnDeclareType.EXPRESSION,
            }
        );
    }

    exitTableAllColumns(ctx: TableAllColumnsContext) {
        this.pushEntity(
            ctx,
            EntityContextType.COLUMN,
            [
                {
                    attrName: AttrName.alias,
                    endContextList: [ColumnProjectItemContext.name],
                },
            ],
            {
                declareType: ColumnDeclareType.ALL,
            }
        );
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
