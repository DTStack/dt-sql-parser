import { HiveSqlParserListener } from '../../lib';
import {
    AtomPartitionedTableFunctionContext,
    AtomValuesClauseContext,
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
    HiveSqlParser,
    InsertStmtContext,
    PartitionedTableFunctionContext,
    QueryStatementExpressionContext,
    SelectExpressionColumnNameContext,
    SelectItemContext,
    SelectListContext,
    SelectLiteralColumnNameContext,
    SelectStatementContext,
    StatementContext,
    SubQuerySourceContext,
    TableAllColumnsContext,
    TableNameContext,
    TableNameCreateContext,
    TableSourceContext,
    UniqueJoinSourceContext,
    ViewNameContext,
    ViewNameCreateContext,
    VirtualTableSourceContext,
} from '../../lib/hive/HiveSqlParser';
import {
    AttrName,
    ColumnDeclareType,
    EntityCollector,
    isChildContextOf,
    StmtContextType,
    TableDeclareType,
} from '../common/entityCollector';
import { EntityContextType } from '../common/types';

export class HiveEntityCollector extends EntityCollector implements HiveSqlParserListener {
    /** ====== Entity Begin */
    exitTableNameCreate(ctx: TableNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.TABLE_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [CreateTableStatementContext.name],
            },
        ]);
    }

    /** Table Entity Rules */
    exitTableName(ctx: TableNameContext) {
        this.pushEntity(
            ctx,
            EntityContextType.TABLE,
            [
                {
                    attrName: AttrName.alias,
                    endContextList: [TableSourceContext.name, UniqueJoinSourceContext.name],
                },
            ],
            {
                declareType: TableDeclareType.COMMON,
            }
        );
    }

    /** Virtual Table Entity Rules */
    exitAtomValuesClause(ctx: AtomValuesClauseContext) {
        if (!isChildContextOf(ctx, HiveSqlParser.RULE_fromClause)) return;
        this.pushEntity(
            ctx,
            EntityContextType.TABLE,
            [
                {
                    attrName: AttrName.alias,
                    endContextList: [VirtualTableSourceContext.name],
                },
            ],
            {
                declareType: TableDeclareType.EXPRESSION,
            }
        );
    }

    /** SubQuery Table Entity Rules */
    exitQueryStatementExpression(ctx: QueryStatementExpressionContext) {
        if (!isChildContextOf(ctx, HiveSqlParser.RULE_fromClause)) return;
        this.pushEntity(
            ctx,
            EntityContextType.TABLE,
            [
                {
                    attrName: AttrName.alias,
                    endContextList: [SubQuerySourceContext.name],
                },
            ],
            {
                declareType: TableDeclareType.EXPRESSION,
            }
        );
    }

    /** Partitioned Table Entity Rules */
    exitAtomPartitionedTableFunction(ctx: AtomPartitionedTableFunctionContext) {
        if (!isChildContextOf(ctx, HiveSqlParser.RULE_fromClause)) return;
        this.pushEntity(
            ctx,
            EntityContextType.TABLE,
            [
                {
                    attrName: AttrName.alias,
                    endContextList: [PartitionedTableFunctionContext.name],
                },
            ],
            {
                declareType: TableDeclareType.EXPRESSION,
            }
        );
    }

    /** Column Entity Rules */
    exitColumnNameCreate(ctx: ColumnNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.COLUMN_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [ColumnNameCommentContext.name],
            },
            {
                attrName: AttrName.colType,
                endContextList: [ColumnNameTypeConstraintContext.name],
            },
        ]);
    }

    exitSelectLiteralColumnName(ctx: SelectLiteralColumnNameContext) {
        if (!isChildContextOf(ctx, HiveSqlParser.RULE_selectItem)) return;
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
        if (!isChildContextOf(ctx, HiveSqlParser.RULE_selectItem)) return;
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
        if (!isChildContextOf(ctx, HiveSqlParser.RULE_selectItem)) return;
        this.pushEntity(ctx, EntityContextType.COLUMN, [], {
            declareType: ColumnDeclareType.ALL,
        });
    }

    exitViewNameCreate(ctx: ViewNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.VIEW_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [CreateViewStatementContext.name],
            },
        ]);
    }

    exitSelectList(ctx: SelectListContext) {
        this.pushEntity(ctx, EntityContextType.QUERY_RESULT);
    }

    exitViewName(ctx: ViewNameContext) {
        this.pushEntity(ctx, EntityContextType.VIEW);
    }

    exitDbSchemaNameCreate(ctx: DbSchemaNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.DATABASE_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [CreateDatabaseStatementContext.name],
            },
        ]);
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
