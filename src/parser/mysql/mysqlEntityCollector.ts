import {
    ColumnCreateTableContext,
    ColumnNameCreateContext,
    CopyCreateTableContext,
    CreateDatabaseContext,
    CreateDefinitionContext,
    CreateFunctionContext,
    CreateFunctionLoadableContext,
    CreateViewContext,
    DatabaseNameContext,
    DatabaseNameCreateContext,
    FunctionNameCreateContext,
    InsertStatementContext,
    QueryCreateTableContext,
    SelectElementContext,
    SelectExpressionElementContext,
    SelectStatementContext,
    SingleStatementContext,
    TableNameContext,
    TableNameCreateContext,
    TableSourceItemContext,
    ViewNameContext,
    ViewNameCreateContext,
    TableAllColumnsContext,
    SelectLiteralColumnNameContext,
    AtomSubQueryTableSourceContext,
    SelectElementsContext,
    AtomTableItemContext,
    SubqueryTableItemContext,
    PureAllColumnsContext,
} from '../../lib/mysql/MySqlParser';
import type { MySqlParserListener } from '../../lib/mysql/MySqlParserListener';
import {
    AttrName,
    ColumnDeclareType,
    EntityCollector,
    StmtContextType,
    TableDeclareType,
} from '../common/entityCollector';
import { EntityContextType } from '../common/types';

export class MySqlEntityCollector extends EntityCollector implements MySqlParserListener {
    /** ====== Entity Begin */
    exitDatabaseName(ctx: DatabaseNameContext) {
        this.pushEntity(ctx, EntityContextType.DATABASE);
    }

    exitDatabaseNameCreate(ctx: DatabaseNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.DATABASE_CREATE);
    }

    /** Table Entity Rules */
    exitTableName(ctx: TableNameContext) {
        this.pushEntity(
            ctx,
            EntityContextType.TABLE,
            [
                {
                    attrName: AttrName.alias,
                    endContextList: [TableSourceItemContext.name, AtomTableItemContext.name],
                },
            ],
            {
                declareType: TableDeclareType.LITERAL,
            }
        );
    }

    /** SubQuery Table Entity Rules */
    exitAtomSubQueryTableSource(ctx: AtomSubQueryTableSourceContext) {
        this.pushEntity(
            ctx,
            EntityContextType.TABLE,
            [
                {
                    attrName: AttrName.alias,
                    endContextList: [TableSourceItemContext.name, SubqueryTableItemContext.name],
                },
            ],
            {
                declareType: TableDeclareType.EXPRESSION,
            }
        );
    }

    exitTableNameCreate(ctx: TableNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.TABLE_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [ColumnCreateTableContext.name],
            },
        ]);
    }

    exitViewName(ctx: ViewNameContext) {
        this.pushEntity(ctx, EntityContextType.VIEW);
    }

    exitViewNameCreate(ctx: ViewNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.VIEW_CREATE);
    }

    exitFunctionNameCreate(ctx: FunctionNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.FUNCTION_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [CreateFunctionContext.name],
            },
        ]);
    }

    exitSelectElements(ctx: SelectElementsContext) {
        this.pushEntity(ctx, EntityContextType.QUERY_RESULT);
    }

    exitColumnNameCreate(ctx: ColumnNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.COLUMN_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [CreateDefinitionContext.name],
            },
            {
                attrName: AttrName.colType,
                endContextList: [CreateDefinitionContext.name],
            },
        ]);
    }

    exitTableAllColumns(ctx: TableAllColumnsContext) {
        this.pushEntity(ctx, EntityContextType.COLUMN, [], {
            declareType: ColumnDeclareType.ALL,
        });
    }

    exitPureAllColumns(ctx: PureAllColumnsContext) {
        this.pushEntity(ctx, EntityContextType.COLUMN, [], {
            declareType: ColumnDeclareType.ALL,
        });
    }

    exitSelectLiteralColumnName(ctx: SelectLiteralColumnNameContext) {
        this.pushEntity(
            ctx,
            EntityContextType.COLUMN,
            [
                {
                    attrName: AttrName.alias,
                    endContextList: [SelectElementContext.name],
                },
            ],
            {
                declareType: ColumnDeclareType.LITERAL,
            }
        );
    }

    exitSelectExpressionElement(ctx: SelectExpressionElementContext) {
        this.pushEntity(
            ctx,
            EntityContextType.COLUMN,
            [
                {
                    attrName: AttrName.alias,
                    endContextList: [SelectElementContext.name],
                },
            ],
            {
                declareType: ColumnDeclareType.EXPRESSION,
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

    enterCreateFunctionLoadable(ctx: CreateFunctionLoadableContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_FUNCTION_STMT);
    }

    exitCreateFunctionLoadable(ctx: CreateFunctionLoadableContext) {
        this.popStmt();
    }
}
