import { ImpalaSqlParserListener } from '../../lib';
import { SelectItemContext } from '../../lib/hive/HiveSqlParser';
import {
    AtomSubQueryTableSourceContext,
    ColumnDefinitionContext,
    ColumnNamePathCreateContext,
    CreateAggregateFunctionContext,
    CreateFunctionContext,
    CreateKuduTableAsSelectContext,
    CreateSchemaContext,
    CreateTableLikeContext,
    CreateTableSelectContext,
    CreateViewContext,
    DatabaseNameCreateContext,
    DatabaseNamePathContext,
    FunctionNameCreateContext,
    InsertStatementContext,
    KuduTableElementContext,
    QueryStatementContext,
    SelectExpressionColumnNameContext,
    SelectListContext,
    SelectLiteralColumnNameContext,
    SingleStatementContext,
    TableAllColumnsContext,
    TableNameCreateContext,
    TableNamePathContext,
    UnnestContext,
    ViewColumnItemContext,
    ViewNameCreateContext,
    ViewNamePathContext,
} from '../../lib/impala/ImpalaSqlParser';
import { AliasedRelationContext } from '../../lib/trino/TrinoSqlParser';
import {
    AttrName,
    ColumnDeclareType,
    EntityCollector,
    StmtContextType,
    TableDeclareType,
} from '../common/entityCollector';
import { EntityContextType } from '../common/types';

export class ImpalaEntityCollector extends EntityCollector implements ImpalaSqlParserListener {
    /** ===== Entity begin */
    exitTableNameCreate(ctx: TableNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.TABLE_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [
                    CreateTableSelectContext.name,
                    CreateKuduTableAsSelectContext.name,
                ],
            },
        ]);
    }

    exitTableNamePath(ctx: TableNamePathContext) {
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
                declareType: TableDeclareType.COMMON,
            }
        );
    }

    exitAtomSubQueryTableSource(ctx: AtomSubQueryTableSourceContext) {
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

    exitUnnest(ctx: UnnestContext) {
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

    exitColumnNamePathCreate(ctx: ColumnNamePathCreateContext) {
        this.pushEntity(ctx, EntityContextType.COLUMN_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [
                    ColumnDefinitionContext.name,
                    KuduTableElementContext.name,
                    ViewColumnItemContext.name,
                ],
            },
            {
                attrName: AttrName.colType,
                endContextList: [
                    ColumnDefinitionContext.name,
                    KuduTableElementContext.name,
                    ViewColumnItemContext.name,
                ],
            },
        ]);
    }

    exitViewNameCreate(ctx: ViewNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.VIEW_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [CreateViewContext.name],
            },
        ]);
    }

    exitViewNamePath(ctx: ViewNamePathContext) {
        this.pushEntity(ctx, EntityContextType.VIEW);
    }

    exitDatabaseNamePath(ctx: DatabaseNamePathContext) {
        this.pushEntity(ctx, EntityContextType.DATABASE);
    }

    exitDatabaseNameCreate(ctx: DatabaseNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.DATABASE_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [CreateSchemaContext.name],
            },
        ]);
    }

    exitFunctionNameCreate(ctx: FunctionNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.FUNCTION_CREATE);
    }

    exitSelectList(ctx: SelectListContext) {
        this.pushEntity(ctx, EntityContextType.QUERY_RESULT);
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
                    endContextList: [SelectItemContext.name],
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
                    endContextList: [SelectItemContext.name],
                },
            ],
            {
                declareType: ColumnDeclareType.ALL,
            }
        );
    }

    /** ===== Statement begin */
    enterSingleStatement(ctx: SingleStatementContext) {
        this.pushStmt(ctx, StmtContextType.COMMON_STMT);
    }

    exitSingleStatement(ctx: SingleStatementContext) {
        this.popStmt();
    }

    enterCreateTableLike(ctx: CreateTableLikeContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }

    exitCreateTableLike(ctx: CreateTableLikeContext) {
        this.popStmt();
    }

    enterCreateTableSelect(ctx: CreateTableSelectContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }

    exitCreateTableSelect(ctx: CreateTableSelectContext) {
        this.popStmt();
    }

    enterCreateKuduTableAsSelect(ctx: CreateKuduTableAsSelectContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }

    exitCreateKuduTableAsSelect(ctx: CreateKuduTableAsSelectContext) {
        this.popStmt();
    }

    enterQueryStatement(ctx: QueryStatementContext) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }

    exitQueryStatement(ctx: QueryStatementContext) {
        this.popStmt();
    }

    enterCreateView(ctx: CreateViewContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
    }

    exitCreateView(ctx: CreateViewContext) {
        this.popStmt();
    }

    enterInsertStatement(ctx: InsertStatementContext) {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    }

    exitInsertStatement(ctx: InsertStatementContext) {
        this.popStmt();
    }

    enterCreateSchema(ctx: CreateSchemaContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_DATABASE_STMT);
    }

    exitCreateSchema(ctx: CreateSchemaContext) {
        this.popStmt();
    }

    enterCreateAggregateFunction(ctx: CreateAggregateFunctionContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_FUNCTION_STMT);
    }

    exitCreateAggregateFunction(ctx: CreateAggregateFunctionContext) {
        this.popStmt();
    }

    enterCreateFunction(ctx: CreateFunctionContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_FUNCTION_STMT);
    }

    exitCreateFunction(ctx: CreateFunctionContext) {
        this.popStmt();
    }
}
