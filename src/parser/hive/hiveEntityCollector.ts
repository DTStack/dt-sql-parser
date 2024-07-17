import { HiveSqlParserListener } from '../../lib';
import {
    ColumnNameCommentContext,
    ColumnNameCreateContext,
    ColumnNameTypeConstraintContext,
    CreateDatabaseStatementContext,
    CreateFunctionStatementContext,
    CreateMaterializedViewStatementContext,
    CreateTableStatementContext,
    CreateViewStatementContext,
    DbSchemaNameContext,
    DbSchemaNameCreateContext,
    FromInsertStmtContext,
    FromSelectStmtContext,
    FunctionNameCreateContext,
    InsertStmtContext,
    SelectStatementContext,
    StatementContext,
    TableNameContext,
    TableNameCreateContext,
    TableSourceContext,
    UniqueJoinSourceContext,
    ViewNameContext,
    ViewNameCreateContext,
} from '../../lib/hive/HiveSqlParser';
import { AttrName, EntityCollector, StmtContextType } from '../common/entityCollector';
import { EntityContextType } from '../common/types';

export class HiveEntityCollector extends EntityCollector implements HiveSqlParserListener {
    /** ====== Entity Begin */
    exitTableNameCreate(ctx: TableNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.TABLE_CREATE, {
            attrNameList: [AttrName.comment],
            endContextList: [CreateTableStatementContext.name],
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
                      endContextList: [TableSourceContext.name, UniqueJoinSourceContext.name],
                  }
                : undefined
        );
    }

    exitColumnNameCreate(ctx: ColumnNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.COLUMN_CREATE, {
            attrNameList: [AttrName.comment, AttrName.colType],
            endContextList: [ColumnNameTypeConstraintContext.name, ColumnNameCommentContext.name],
        });
    }

    exitViewNameCreate(ctx: ViewNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.VIEW_CREATE, {
            attrNameList: [AttrName.comment],
            endContextList: [CreateViewStatementContext.name],
        });
    }

    exitViewName(ctx: ViewNameContext) {
        this.pushEntity(ctx, EntityContextType.VIEW);
    }

    exitDbSchemaNameCreate(ctx: DbSchemaNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.DATABASE_CREATE, {
            attrNameList: [AttrName.comment],
            endContextList: [CreateDatabaseStatementContext.name],
        });
    }

    exitDbSchemaName(ctx: DbSchemaNameContext) {
        this.pushEntity(ctx, EntityContextType.DATABASE);
    }

    exitFunctionNameCreate(ctx: FunctionNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.FUNCTION_CREATE);
    }

    /** ==== Statement begin */
    enterStatement(ctx: StatementContext) {
        this.pushStmt(ctx, StmtContextType.COMMON_STMT);
    }

    exitStatement() {
        this.popStmt();
    }

    enterCreateTableStatement(ctx: CreateTableStatementContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }

    exitCreateTableStatement() {
        this.popStmt();
    }

    enterSelectStatement(ctx: SelectStatementContext) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }

    exitSelectStatement(ctx: SelectStatementContext) {
        this.popStmt();
    }

    enterFromSelectStmt(ctx: FromSelectStmtContext) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }

    exitFromSelectStmt(ctx: FromSelectStmtContext) {
        this.popStmt();
    }

    enterCreateViewStatement(ctx: CreateViewStatementContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
    }

    exitCreateViewStatement(ctx: CreateViewStatementContext) {
        this.popStmt();
    }

    enterCreateMaterializedViewStatement(ctx: CreateMaterializedViewStatementContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
    }

    exitCreateMaterializedViewStatement(ctx: CreateMaterializedViewStatementContext) {
        this.popStmt();
    }

    enterInsertStmt(ctx: InsertStmtContext) {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    }

    exitInsertStmt(ctx: InsertStmtContext) {
        this.popStmt();
    }

    enterFromInsertStmt(ctx: FromInsertStmtContext) {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    }

    exitFromInsertStmt(ctx: FromInsertStmtContext) {
        this.popStmt();
    }

    enterCreateDatabaseStatement(ctx: CreateDatabaseStatementContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_DATABASE_STMT);
    }

    exitCreateDatabaseStatement(ctx: CreateDatabaseStatementContext) {
        this.popStmt();
    }

    enterFunctionNameCreate(ctx: FunctionNameCreateContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_FUNCTION_STMT);
    }

    exitCreateFunctionStatement(ctx: CreateFunctionStatementContext) {
        this.popStmt();
    }
}
