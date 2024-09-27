import {
    type AltertablestmtContext,
    Column_defContext,
    type ColumnCreateTableContext,
    type ColumnNameCreateContext,
    type CreateDatabaseContext,
    type CreateForeignTableContext,
    type CreatefunctionstmtContext,
    type CreateMaterializedViewContext,
    type CreatePartitionForeignTableContext,
    type CreateViewContext,
    type DatabaseNameContext,
    type DatabaseNameCreateContext,
    type FunctionNameCreateContext,
    type InsertStatementContext,
    type ProcedureNameContext,
    type ProcedureNameCreateContext,
    type QueryCreateTableContext,
    type SelectStatementContext,
    type SingleStmtContext,
    Table_refContext,
    type TableNameContext,
    type TableNameCreateContext,
    type ViewNameContext,
    type ViewNameCreateContext,
} from '../../lib/postgresql/PostgreSqlParser';
import type { PostgreSqlParserListener } from '../../lib/postgresql/PostgreSqlParserListener';
import { AttrName, EntityCollector, StmtContextType } from '../common/entityCollector';
import { EntityContextType } from '../common/types';

export class PostgreSqlEntityCollector extends EntityCollector implements PostgreSqlParserListener {
    /** ====== Entity Begin */
    exitDatabaseName(ctx: DatabaseNameContext) {
        this.pushEntity(ctx, EntityContextType.DATABASE);
    }

    exitDatabaseNameCreate(ctx: DatabaseNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.DATABASE_CREATE);
    }

    exitTableName(ctx: TableNameContext) {
        const needCollectAttr = this.getRootStmt()?.stmtContextType === StmtContextType.SELECT_STMT;
        this.pushEntity(
            ctx,
            EntityContextType.TABLE,
            needCollectAttr
                ? [
                      {
                          attrName: AttrName.alias,
                          endContextList: [Table_refContext.name],
                      },
                  ]
                : undefined
        );
    }

    exitTableNameCreate(ctx: TableNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.TABLE_CREATE);
    }

    exitViewName(ctx: ViewNameContext) {
        const needCollectAttr = this.getRootStmt()?.stmtContextType === StmtContextType.SELECT_STMT;
        this.pushEntity(
            ctx,
            EntityContextType.VIEW,
            needCollectAttr
                ? [
                      {
                          attrName: AttrName.alias,
                          endContextList: [Table_refContext.name],
                      },
                  ]
                : undefined
        );
    }

    exitViewNameCreate(ctx: ViewNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.VIEW_CREATE);
    }

    exitFunctionNameCreate(ctx: FunctionNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.FUNCTION_CREATE);
    }

    exitColumnNameCreate(ctx: ColumnNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.COLUMN_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [Column_defContext.name],
            },
            {
                attrName: AttrName.colType,
                endContextList: [Column_defContext.name],
            },
        ]);
    }

    exitProcedureName(ctx: ProcedureNameContext) {
        this.pushEntity(ctx, EntityContextType.PROCEDURE);
    }

    exitProcedureNameCreate(ctx: ProcedureNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.PROCEDURE_CREATE);
    }

    /** ===== Statement begin */
    enterSingleStatement(ctx: SingleStmtContext) {
        this.pushStmt(ctx, StmtContextType.COMMON_STMT);
    }

    exitSingleStatement(ctx: SingleStmtContext) {
        this.popStmt();
    }

    enterCreateDatabase(ctx: CreateDatabaseContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_DATABASE_STMT);
    }

    exitCreateDatabase(ctx: CreateDatabaseContext) {
        this.popStmt();
    }

    enterQueryCreateTable(ctx: QueryCreateTableContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }

    exitQueryCreateTable(ctx: QueryCreateTableContext) {
        this.popStmt();
    }

    enterColumnCreateTable(ctx: ColumnCreateTableContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }

    exitColumnCreateTable(ctx: ColumnCreateTableContext) {
        this.popStmt();
    }

    enterCreateForeignTable(ctx: CreateForeignTableContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }

    exitCreateForeignTable(ctx: CreateForeignTableContext) {
        this.popStmt();
    }

    enterCreatePartitionForeignTable(ctx: CreatePartitionForeignTableContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }

    exitCreatePartitionForeignTable(ctx: CreatePartitionForeignTableContext) {
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

    enterSelectStatement(ctx: SelectStatementContext) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }

    exitSelectStatement(ctx: SelectStatementContext) {
        this.popStmt();
    }

    enterInsertStatement(ctx: InsertStatementContext) {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    }

    exitInsertStatement(ctx: InsertStatementContext) {
        this.popStmt();
    }

    enterCreatefunctionstmt(ctx: CreatefunctionstmtContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_FUNCTION_STMT);
    }

    exitCreatefunctionstmt(ctx: CreatefunctionstmtContext) {
        this.popStmt();
    }
    enterAltertablestmt(ctx: AltertablestmtContext) {
        this.pushStmt(ctx, StmtContextType.ALTER_TABLE_STMT);
    }
    exitAltertablestmt(ctx: AltertablestmtContext) {
        this.popStmt();
    }
}
