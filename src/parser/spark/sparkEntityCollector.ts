import {
    ColumnNameCreateContext,
    CreateFunctionContext,
    CreateNamespaceContext,
    CreateOrReplaceTableColTypeContext,
    CreateTableContext,
    CreateTableLikeContext,
    CreateTempViewUsingContext,
    CreateViewContext,
    FunctionNameCreateContext,
    IdentifierCommentContext,
    InsertFromQueryContext,
    MultipleInsertContext,
    NamespaceNameContext,
    NamespaceNameCreateContext,
    QueryStatementContext,
    RelationPrimaryContext,
    ReplaceTableContext,
    SingleStatementContext,
    TableNameContext,
    TableNameCreateContext,
    ViewNameContext,
    ViewNameCreateContext,
} from '../../lib/spark/SparkSqlParser';
import type { SparkSqlParserListener } from '../../lib/spark/SparkSqlParserListener';
import { AttrName, EntityCollector, StmtContextType } from '../common/entityCollector';
import { EntityContextType } from '../common/types';

export class SparkEntityCollector extends EntityCollector implements SparkSqlParserListener {
    /** ====== Entity Begin */
    exitNamespaceName(ctx: NamespaceNameContext) {
        this.pushEntity(ctx, EntityContextType.DATABASE);
    }

    exitNamespaceNameCreate(ctx: NamespaceNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.DATABASE_CREATE, {
            attrNameList: [AttrName.comment],
            endContextList: [CreateNamespaceContext.name],
        });
    }

    exitTableName(ctx: TableNameContext) {
        const needCollectAttr = this.getRootStmt()?.stmtContextType === StmtContextType.SELECT_STMT;
        this.pushEntity(
            ctx,
            EntityContextType.TABLE,
            needCollectAttr
                ? {
                      attrNameList: [AttrName.alias],
                      endContextList: [RelationPrimaryContext.name],
                  }
                : undefined
        );
    }

    exitTableNameCreate(ctx: TableNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.TABLE_CREATE, {
            attrNameList: [AttrName.comment],
            endContextList: [CreateTableContext.name],
        });
    }

    exitViewName(ctx: ViewNameContext) {
        this.pushEntity(ctx, EntityContextType.VIEW);
    }

    exitViewNameCreate(ctx: ViewNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.VIEW_CREATE, {
            attrNameList: [AttrName.comment],
            endContextList: [CreateViewContext.name],
        });
    }

    exitFunctionNameCreate(ctx: FunctionNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.FUNCTION_CREATE);
    }

    exitColumnNameCreate(ctx: ColumnNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.COLUMN_CREATE, {
            attrNameList: [AttrName.comment, AttrName.colType],
            endContextList: [
                CreateOrReplaceTableColTypeContext.name,
                IdentifierCommentContext.name,
            ],
        });
    }

    /** ===== Statement begin */
    enterSingleStatement(ctx: SingleStatementContext) {
        this.pushStmt(ctx, StmtContextType.COMMON_STMT);
    }

    exitSingleStatement(ctx: SingleStatementContext) {
        this.popStmt();
    }

    enterCreateTable(ctx: CreateTableContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }

    exitCreateTable(ctx: CreateTableContext) {
        this.popStmt();
    }

    enterCreateTableLike(ctx: CreateTableLikeContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }

    exitCreateTableLike(ctx: CreateTableLikeContext) {
        this.popStmt();
    }

    enterReplaceTable(ctx: ReplaceTableContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }

    exitReplaceTable(ctx: ReplaceTableContext) {
        this.popStmt();
    }

    enterCreateView(ctx: CreateViewContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
    }

    exitCreateView(ctx: CreateViewContext) {
        this.popStmt();
    }

    enterCreateTempViewUsing(ctx: CreateTempViewUsingContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
    }

    exitCreateTempViewUsing(ctx: CreateTempViewUsingContext) {
        this.popStmt();
    }

    enterQueryStatement(ctx: QueryStatementContext) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }

    exitQueryStatement(ctx: QueryStatementContext) {
        this.popStmt();
    }

    enterInsertFromQuery(ctx: InsertFromQueryContext) {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    }

    exitInsertFromQuery(ctx: InsertFromQueryContext) {
        this.popStmt();
    }

    enterMultipleInsert(ctx: MultipleInsertContext) {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    }

    exitMultipleInsert(ctx: MultipleInsertContext) {
        this.popStmt();
    }

    enterCreateNamespace(ctx: CreateNamespaceContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_DATABASE_STMT);
    }

    exitCreateNamespace(ctx: CreateNamespaceContext) {
        this.popStmt();
    }

    enterCreateFunction(ctx: CreateFunctionContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_FUNCTION_STMT);
    }

    exitCreateFunction(ctx: CreateFunctionContext) {
        this.popStmt();
    }
}
