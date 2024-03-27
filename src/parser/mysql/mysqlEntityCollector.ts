import type {
    ColumnCreateTableContext,
    ColumnNameCreateContext,
    CopyCreateTableContext,
    CreateDatabaseContext,
    CreateFunctionContext,
    CreateViewContext,
    DatabaseNameContext,
    DatabaseNameCreateContext,
    FunctionNameCreateContext,
    InsertStatementContext,
    QueryCreateTableContext,
    SelectExpressionContext,
    SelectStatementContext,
    SingleStatementContext,
    TableNameContext,
    TableNameCreateContext,
    ViewNameContext,
    ViewNameCreateContext,
} from '../../lib/mysql/MySqlParser';
import type { MySqlParserListener } from '../../lib/mysql/MySqlParserListener';
import { EntityContextType } from '../common/types';
import { StmtContextType, EntityCollector } from '../common/entityCollector';

export class MySqlEntityCollector extends EntityCollector implements MySqlParserListener {
    /** ====== Entity Begin */
    exitDatabaseName(ctx: DatabaseNameContext) {
        this.pushEntity(ctx, EntityContextType.DATABASE);
    }

    exitDatabaseNameCreate(ctx: DatabaseNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.DATABASE_CREATE);
    }

    exitTableName(ctx: TableNameContext) {
        this.pushEntity(ctx, EntityContextType.TABLE);
    }

    exitTableNameCreate(ctx: TableNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.TABLE_CREATE);
    }

    exitViewName(ctx: ViewNameContext) {
        this.pushEntity(ctx, EntityContextType.VIEW);
    }

    exitViewNameCreate(ctx: ViewNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.VIEW_CREATE);
    }

    exitFunctionNameCreate(ctx: FunctionNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.FUNCTION_CREATE);
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

    enterCopyCreateTable(ctx: CopyCreateTableContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }

    exitCopyCreateTable(ctx: CopyCreateTableContext) {
        this.popStmt();
    }

    enterCreateView(ctx: CreateViewContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
    }

    exitCreateView(ctx: CreateViewContext) {
        this.popStmt();
    }

    enterSimpleSelect(ctx: SelectStatementContext) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }

    exitSimpleSelect(ctx: SelectStatementContext) {
        this.popStmt();
    }

    enterUnionAndLateralSelect(ctx: SelectStatementContext) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }

    exitUnionAndLateralSelect(ctx: SelectStatementContext) {
        this.popStmt();
    }

    enterSelectExpression(ctx: SelectStatementContext) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }

    exitSelectExpression(ctx: SelectStatementContext) {
        this.popStmt();
    }

    enterInsertStatement(ctx: InsertStatementContext) {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    }

    exitInsertStatement(ctx: InsertStatementContext) {
        this.popStmt();
    }

    enterCreateDatabase(ctx: CreateDatabaseContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_DATABASE_STMT);
    }

    exitCreateDatabase(ctx: CreateDatabaseContext) {
        this.popStmt();
    }

    enterCreateFunction(ctx: CreateFunctionContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_FUNCTION_STMT);
    }

    exitCreateFunction(ctx: CreateFunctionContext) {
        this.popStmt();
    }
}
