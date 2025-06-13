import { TableSourceContext } from '../../lib/mysql/MySqlParser';
import {
    AtomSubQueryTableSourceContext,
    ColumnNameCreateContext,
    CreateFunctionContext,
    CreateNamespaceContext,
    CreateOrReplaceTableColTypeContext,
    CreateTableContext,
    CreateTableLikeContext,
    CreateTempViewUsingContext,
    CreateViewContext,
    FunctionNameCreateContext,
    FunctionTableSourceContext,
    IdentifierCommentContext,
    InlineTableSourceContext,
    InsertFromQueryContext,
    MultipleInsertContext,
    NamedExpressionContext,
    NamespaceNameContext,
    NamespaceNameCreateContext,
    QueryStatementContext,
    RelationContext,
    RelationPrimaryContext,
    ReplaceTableContext,
    SelectExpressionColumnNameContext,
    SelectListContext,
    SelectLiteralColumnNameContext,
    SingleStatementContext,
    SparkSqlParser,
    SubQueryTableSourceContext,
    TableAllColumnsContext,
    TableNameContext,
    TableNameCreateContext,
    ViewNameContext,
    ViewNameCreateContext,
} from '../../lib/spark/SparkSqlParser';
import type { SparkSqlParserListener } from '../../lib/spark/SparkSqlParserListener';
import {
    AttrName,
    ColumnDeclareType,
    EntityCollector,
    isChildContextOf,
    StmtContextType,
    TableDeclareType,
} from '../common/entityCollector';
import { EntityContextType } from '../common/types';

export class SparkEntityCollector extends EntityCollector implements SparkSqlParserListener {
    /** ====== Entity Begin */
    exitNamespaceName(ctx: NamespaceNameContext) {
        this.pushEntity(ctx, EntityContextType.DATABASE);
    }

    exitNamespaceNameCreate(ctx: NamespaceNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.DATABASE_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [CreateNamespaceContext.name],
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
                    endContextList: [
                        RelationPrimaryContext.name,
                        RelationContext.name,
                        TableSourceContext.name,
                    ],
                },
            ],
            {
                declareType: TableDeclareType.COMMON,
            }
        );
    }

    /** Inline Table Entity Rules */
    exitInlineTableSource(ctx: InlineTableSourceContext) {
        this.pushEntity(
            ctx,
            EntityContextType.TABLE,
            [
                {
                    attrName: AttrName.alias,
                    endContextList: [InlineTableSourceContext.name],
                },
            ],
            {
                declareType: TableDeclareType.EXPRESSION,
            }
        );
    }

    /** Function Table Entity Rules */
    exitFunctionTableSource(ctx: FunctionTableSourceContext) {
        this.pushEntity(
            ctx,
            EntityContextType.TABLE,
            [
                {
                    attrName: AttrName.alias,
                    endContextList: [FunctionTableSourceContext.name],
                },
            ],
            {
                declareType: TableDeclareType.EXPRESSION,
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
                    endContextList: [SubQueryTableSourceContext.name],
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
                endContextList: [CreateTableContext.name],
            },
        ]);
    }

    exitViewName(ctx: ViewNameContext) {
        this.pushEntity(ctx, EntityContextType.VIEW);
    }

    exitSelectList(ctx: SelectListContext) {
        this.pushEntity(ctx, EntityContextType.QUERY_RESULT);
    }

    exitViewNameCreate(ctx: ViewNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.VIEW_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [CreateViewContext.name],
            },
        ]);
    }

    exitFunctionNameCreate(ctx: FunctionNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.FUNCTION_CREATE);
    }

    /** Column Entity Rules */
    exitColumnNameCreate(ctx: ColumnNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.COLUMN_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [
                    CreateOrReplaceTableColTypeContext.name,
                    IdentifierCommentContext.name,
                ],
            },
            {
                attrName: AttrName.colType,
                endContextList: [CreateOrReplaceTableColTypeContext.name],
            },
        ]);
    }

    exitSelectLiteralColumnName(ctx: SelectLiteralColumnNameContext) {
        if (!isChildContextOf(ctx, SparkSqlParser.RULE_namedExpression)) return;
        this.pushEntity(
            ctx,
            EntityContextType.COLUMN,
            [
                {
                    attrName: AttrName.alias,
                    endContextList: [NamedExpressionContext.name],
                },
            ],
            {
                declareType: ColumnDeclareType.COMMON,
            }
        );
    }

    exitSelectExpressionColumnName(ctx: SelectExpressionColumnNameContext) {
        if (!isChildContextOf(ctx, SparkSqlParser.RULE_namedExpression)) return;
        this.pushEntity(
            ctx,
            EntityContextType.COLUMN,
            [
                {
                    attrName: AttrName.alias,
                    endContextList: [NamedExpressionContext.name],
                },
            ],
            {
                declareType: ColumnDeclareType.EXPRESSION,
            }
        );
    }

    exitTableAllColumns(ctx: TableAllColumnsContext) {
        if (!isChildContextOf(ctx, SparkSqlParser.RULE_namedExpression)) return;
        this.pushEntity(
            ctx,
            EntityContextType.COLUMN,
            [
                {
                    attrName: AttrName.alias,
                    endContextList: [NamedExpressionContext.name],
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
