import { EntityContextType } from '../../parser/common/basic-parser-types';
import { HiveSqlParserListener } from '../../lib';
import {
    ColumnNameCreateContext,
    CreateDatabaseStatementContext,
    CreateFunctionStatementContext,
    CreateMaterializedViewStatementContext,
    CreateTableStatementContext,
    CreateViewStatementContext,
    DbSchemaNameContext,
    DbSchemaNameCreateContext,
    FromInsertStmtContext,
    FromSelectStmtContext,
    FromStatementContext,
    FunctionNameCreateContext,
    InsertStmtContext,
    SelectStatementContext,
    StatementContext,
    TableNameContext,
    TableNameCreateContext,
    ViewNameContext,
    ViewNameCreateContext,
} from '../../lib/hive/HiveSqlParser';
import { StmtContextType, EntityCollector } from '../common/entityCollector';

export class HiveEntityCollector extends EntityCollector implements HiveSqlParserListener {
    /** ====== Entity Begin */
    exitTableNameCreate = (ctx: TableNameCreateContext) => {
        this.pushEntity(ctx, EntityContextType.TABLE_CREATE);
    };

    exitTableName = (ctx: TableNameContext) => {
        this.pushEntity(ctx, EntityContextType.TABLE);
    };

    exitColumnNameCreate = (ctx: ColumnNameCreateContext) => {
        this.pushEntity(ctx, EntityContextType.COLUMN_CREATE);
    };

    exitViewNameCreate = (ctx: ViewNameCreateContext) => {
        this.pushEntity(ctx, EntityContextType.VIEW_CREATE);
    };

    exitViewName = (ctx: ViewNameContext) => {
        this.pushEntity(ctx, EntityContextType.VIEW);
    };

    exitDbSchemaNameCreate(ctx: DbSchemaNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.DATABASE_CREATE);
    }

    exitDbSchemaName(ctx: DbSchemaNameContext) {
        this.pushEntity(ctx, EntityContextType.DATABASE);
    }

    exitFunctionNameCreate(ctx: FunctionNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.FUNCTION_CREATE);
    }

    /** ===== Statement begin */
    enterStatement = (ctx: StatementContext) => {
        this.pushStmt(ctx, StmtContextType.COMMON_STMT);
    };

    exitStatement = () => {
        this.popStmt();
    };

    enterCreateTableStatement = (ctx: CreateTableStatementContext) => {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    };

    exitCreateTableStatement = () => {
        this.popStmt();
    };

    enterSelectStatement = (ctx: SelectStatementContext) => {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    };

    exitSelectStatement = (ctx: SelectStatementContext) => {
        this.popStmt();
    };

    enterFromSelectStmt = (ctx: FromSelectStmtContext) => {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    };

    exitFromSelectStmt = (ctx: FromSelectStmtContext) => {
        this.popStmt();
    };

    enterCreateViewStatement = (ctx: CreateViewStatementContext) => {
        this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
    };

    exitCreateViewStatement = (ctx: CreateViewStatementContext) => {
        this.popStmt();
    };

    enterCreateMaterializedViewStatement = (ctx: CreateMaterializedViewStatementContext) => {
        this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
    };

    exitCreateMaterializedViewStatement = (ctx: CreateMaterializedViewStatementContext) => {
        this.popStmt();
    };

    enterInsertStmt = (ctx: InsertStmtContext) => {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    };

    exitInsertStmt = (ctx: InsertStmtContext) => {
        this.popStmt();
    };

    enterFromInsertStmt = (ctx: FromInsertStmtContext) => {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    };

    exitFromInsertStmt = (ctx: FromInsertStmtContext) => {
        this.popStmt();
    };

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
