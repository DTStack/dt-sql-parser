import {
    type AlterTableStmtContext,
    Column_defContext,
    type ColumnCreateTableContext,
    type ColumnNameCreateContext,
    type CreateDatabaseContext,
    type CreateForeignTableContext,
    type CreateFunctionStmtContext,
    type CreateMaterializedViewContext,
    type CreatePartitionForeignTableContext,
    type CreateViewContext,
    type DatabaseNameContext,
    type DatabaseNameCreateContext,
    ExpressionTableContext,
    FuncTableContext,
    type FunctionNameCreateContext,
    type InsertStatementContext,
    PostgreSqlParser,
    type ProcedureNameContext,
    type ProcedureNameCreateContext,
    type QueryCreateTableContext,
    SelectExpressionColumnNameContext,
    SelectLiteralColumnNameContext,
    SelectNoParensContext,
    type SelectStatementContext,
    SelectWithParensContext,
    type SingleStmtContext,
    TableAllColumnsContext,
    type TableNameContext,
    type TableNameCreateContext,
    TableRefContext,
    Target_dot_emptyContext,
    Target_emptyContext,
    Target_labelContext,
    TargetListContext,
    type ViewNameContext,
    type ViewNameCreateContext,
    XmlTableContext,
} from '../../lib/postgresql/PostgreSqlParser';
import type { PostgreSqlParserListener } from '../../lib/postgresql/PostgreSqlParserListener';
import {
    AttrName,
    ColumnDeclareType,
    EntityCollector,
    isChildContextOf,
    StmtContextType,
    TableDeclareType,
} from '../common/entityCollector';
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
        this.pushEntity(
            ctx,
            EntityContextType.TABLE,
            [
                {
                    attrName: AttrName.alias,
                    endContextList: [TableRefContext.name],
                },
            ],
            {
                declareType: TableDeclareType.LITERAL,
            }
        );
    }

    exitXmlTable(ctx: XmlTableContext) {
        this.pushEntity(
            ctx,
            EntityContextType.TABLE,
            [
                {
                    attrName: AttrName.alias,
                    endContextList: [ExpressionTableContext.name],
                },
            ],
            {
                declareType: TableDeclareType.EXPRESSION,
            }
        );
    }

    exitFuncTable(ctx: FuncTableContext) {
        this.pushEntity(
            ctx,
            EntityContextType.TABLE,
            [
                {
                    attrName: AttrName.alias,
                    endContextList: [ExpressionTableContext.name],
                },
            ],
            {
                declareType: TableDeclareType.EXPRESSION,
            }
        );
    }

    exitSelectWithParens(ctx: SelectWithParensContext) {
        if (!isChildContextOf(ctx, PostgreSqlParser.RULE_expressionTable)) return;
        this.pushEntity(
            ctx,
            EntityContextType.TABLE,
            [
                {
                    attrName: AttrName.alias,
                    endContextList: [ExpressionTableContext.name],
                },
            ],
            {
                declareType: TableDeclareType.EXPRESSION,
            }
        );
    }

    exitTableNameCreate(ctx: TableNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.TABLE_CREATE);
    }

    exitViewName(ctx: ViewNameContext) {
        this.pushEntity(ctx, EntityContextType.VIEW, [
            {
                attrName: AttrName.alias,
                endContextList: [TableRefContext.name],
            },
        ]);
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

    exitTargetList(ctx: TargetListContext) {
        // Only create QUERY_RESULT for targetList that is direct child of simpleSelect
        if (!isChildContextOf(ctx, PostgreSqlParser.RULE_simpleSelect)) return;

        this.pushEntity(ctx, EntityContextType.QUERY_RESULT);
    }

    exitTableAllColumns(ctx: TableAllColumnsContext) {
        if (!isChildContextOf(ctx, PostgreSqlParser.RULE_targetList)) return;
        this.pushEntity(ctx, EntityContextType.COLUMN, [], {
            declareType: ColumnDeclareType.ALL,
        });
    }

    exitTarget_empty(ctx: Target_emptyContext) {
        // Don't create entity for empty column here
        // The targetList will create QUERY_RESULT entity
        // Empty targetEl means the QUERY_RESULT has no columns
    }

    exitTarget_dot_empty(ctx: Target_dot_emptyContext) {
        // Create COLUMN entity for incomplete column reference (e.g., "tb.|")
        // This allows completion to suggest columns from table "tb"
        this.pushEntity(ctx, EntityContextType.COLUMN, [], {
            declareType: ColumnDeclareType.LITERAL,
        });
    }

    exitSelectExpressionColumnName(ctx: SelectExpressionColumnNameContext) {
        this.pushEntity(
            ctx,
            EntityContextType.COLUMN,
            [
                {
                    attrName: AttrName.alias,
                    endContextList: [Target_labelContext.name],
                },
            ],
            {
                declareType: ColumnDeclareType.EXPRESSION,
            }
        );
    }

    exitSelectLiteralColumnName(ctx: SelectLiteralColumnNameContext) {
        this.pushEntity(
            ctx,
            EntityContextType.COLUMN,
            [
                {
                    attrName: AttrName.alias,
                    endContextList: [Target_labelContext.name],
                },
            ],
            {
                declareType: ColumnDeclareType.LITERAL,
            }
        );
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

    enterSelectNoParens(ctx: SelectNoParensContext) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }

    exitSelectNoParens(ctx: SelectNoParensContext) {
        this.popStmt();
    }

    enterInsertStatement(ctx: InsertStatementContext) {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    }

    exitInsertStatement(ctx: InsertStatementContext) {
        this.popStmt();
    }

    enterCreateFunctionStmt(ctx: CreateFunctionStmtContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_FUNCTION_STMT);
    }

    exitCreateFunctionStmt(ctx: CreateFunctionStmtContext) {
        this.popStmt();
    }
    enterAlterTableStmt(ctx: AlterTableStmtContext) {
        this.pushStmt(ctx, StmtContextType.ALTER_TABLE_STMT);
    }
    exitAlterTableStmt(ctx: AlterTableStmtContext) {
        this.popStmt();
    }
}
