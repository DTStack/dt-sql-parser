import { ImpalaSqlParserListener } from '../../lib';
import {
    ColumnDefinitionContext,
    ColumnNamePathCreateContext,
    CommentClauseContext,
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
    SampledRelationContext,
    SingleStatementContext,
    TableNameCreateContext,
    TableNamePathContext,
    ViewColumnItemContext,
    ViewNameCreateContext,
    ViewNamePathContext,
} from '../../lib/impala/ImpalaSqlParser';
import { AttrName, EntityCollector, StmtContextType } from '../common/entityCollector';
import { EntityContextType } from '../common/types';

export class ImpalaEntityCollector extends EntityCollector implements ImpalaSqlParserListener {
    /** ===== Entity begin */
    exitTableNameCreate(ctx: TableNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.TABLE_CREATE, {
            attrNameList: [AttrName.comment],
            endContextList: [CommentClauseContext.name],
        });
    }

    exitTableNamePath(ctx: TableNamePathContext) {
        const needCollectAttr = this.getRootStmt()?.stmtContextType === StmtContextType.SELECT_STMT;
        this.pushEntity(
            ctx,
            EntityContextType.TABLE,
            needCollectAttr
                ? {
                      attrNameList: [AttrName.alias],
                      endContextList: [SampledRelationContext.name],
                  }
                : undefined
        );
    }

    exitColumnNamePathCreate(ctx: ColumnNamePathCreateContext) {
        this.pushEntity(ctx, EntityContextType.COLUMN_CREATE, {
            attrNameList: [AttrName.comment, AttrName.colType],
            endContextList: [
                ColumnDefinitionContext.name,
                KuduTableElementContext.name,
                ViewColumnItemContext.name,
            ],
        });
    }

    exitViewNameCreate(ctx: ViewNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.VIEW_CREATE, {
            attrNameList: [AttrName.comment],
            endContextList: [CreateViewContext.name],
        });
    }

    exitViewNamePath(ctx: ViewNamePathContext) {
        this.pushEntity(ctx, EntityContextType.VIEW);
    }

    exitDatabaseNamePath(ctx: DatabaseNamePathContext) {
        this.pushEntity(ctx, EntityContextType.DATABASE);
    }

    exitDatabaseNameCreate(ctx: DatabaseNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.DATABASE_CREATE, {
            attrNameList: [AttrName.comment],
            endContextList: [CreateSchemaContext.name],
        });
    }

    exitFunctionNameCreate(ctx: FunctionNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.FUNCTION_CREATE);
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
