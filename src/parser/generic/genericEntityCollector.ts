import type { GenericSqlListener } from '../../lib/generic/GenericSqlListener';
import {
    AlterTableContext,
    ColumnDefinitionContext,
    ColumnRefContext,
    AliasedRelationContext,
    ColumnRefCreateContext,
    CreateTableContext,
    CreateTableStatementContext,
    DeleteContext,
    DropTableContext,
    InsertContext,
    NamedQueryContext,
    QuerySpecificationContext,
    QueryStatementContext,
    SelectAllElementContext,
    SelectEmptyElementContext,
    SelectExpressionElementContext,
    SelectStarElementContext,
    SingleStatementContext,
    TableNameContext,
    TableNameCreateContext,
    UpdateContext,
} from '../../lib/generic/GenericSqlParser';
import {
    AttrName,
    ColumnDeclareType,
    CommonEntityContext,
    EntityCollector,
    isCommonEntityContext,
    StmtContextType,
    TableDeclareType,
} from '../common/entityCollector';
import { EntityContextType } from '../common/types';
import { tokenToWord } from '../common/textAndWord';

export class GenericEntityCollector extends EntityCollector implements GenericSqlListener {
    /** Select-list source text for each query result. The result itself keeps the full statement. */
    private readonly selectListText = new Map<CommonEntityContext, string>();

    override enterProgram() {
        this.selectListText.clear();
        super.enterProgram();
    }

    /** ====== Entity Begin */

    exitTableName(ctx: TableNameContext) {
        const entity = this.pushEntity(
            ctx,
            EntityContextType.TABLE,
            [
                {
                    attrName: AttrName.alias,
                    endContextList: [AliasedRelationContext.name],
                },
            ],
            {
                declareType: TableDeclareType.LITERAL,
            }
        );
        // 如果通用属性查找未找到 alias，尝试从 AliasedRelationContext._alias 获取
        if (entity && !entity[AttrName.alias]) {
            let parent = ctx.parent;
            while (parent && !(parent instanceof AliasedRelationContext)) {
                parent = parent.parent;
            }
            const aliasToken = (parent as AliasedRelationContext)?._alias?.start;
            if (aliasToken) {
                entity[AttrName.alias] = tokenToWord(aliasToken, '');
            }
        }
    }

    exitNamedQuery(ctx: NamedQueryContext) {
        this.collectCte(
            ctx,
            ctx.identifier(),
            ctx.queryStatement(),
            ctx.stop?.tokenIndex ?? -1,
            [],
            ctx.cteColumnList()
        );
    }

    exitTableNameCreate(ctx: TableNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.TABLE_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [CreateTableStatementContext.name],
            },
        ]);
    }

    exitColumnRef(ctx: ColumnRefContext) {
        this.pushEntity(ctx, EntityContextType.COLUMN);
    }

    exitColumnRefCreate(ctx: ColumnRefCreateContext) {
        this.pushEntity(ctx, EntityContextType.COLUMN_CREATE, [
            {
                attrName: AttrName.colType,
                endContextList: [ColumnDefinitionContext.name],
            },
            {
                attrName: AttrName.comment,
                endContextList: [ColumnDefinitionContext.name],
            },
        ]);
    }

    exitQuerySpecification(ctx: QuerySpecificationContext) {
        const entity = this.pushEntity(ctx, EntityContextType.QUERY_RESULT);
        const items = ctx.selectItem();
        const first = items[0]?.start;
        const last = items[items.length - 1]?.stop;
        if (entity && isCommonEntityContext(entity) && first && last) {
            this.selectListText.set(entity, this.sourceSlice(first.start, last.stop));
        }
    }

    protected override adaptOutwardQueryResult(entity: CommonEntityContext): CommonEntityContext {
        const text = this.selectListText.get(entity);
        if (text == null) return entity;
        return { ...entity, text };
    }

    exitSelectExpressionElement(ctx: SelectExpressionElementContext) {
        const isSimpleColumn = this.isSimpleColumnReference(ctx);
        const entity = this.pushEntity(ctx, EntityContextType.COLUMN, [], {
            declareType: isSimpleColumn ? ColumnDeclareType.LITERAL : ColumnDeclareType.EXPRESSION,
        });
        const aliasToken = ctx._alias?.start;
        if (entity && aliasToken) {
            entity[AttrName.alias] = tokenToWord(aliasToken, '');
        }
    }

    exitSelectStarElement(ctx: SelectStarElementContext) {
        this.pushEntity(ctx, EntityContextType.COLUMN, [], {
            declareType: ColumnDeclareType.ALL,
        });
    }

    exitSelectAllElement(ctx: SelectAllElementContext) {
        this.pushEntity(ctx, EntityContextType.COLUMN, [], {
            declareType: ColumnDeclareType.ALL,
        });
    }

    exitSelectEmptyElement(ctx: SelectEmptyElementContext) {
        this.pushEntity(ctx, EntityContextType.COLUMN, [], {
            declareType: ColumnDeclareType.LITERAL,
        });
    }

    private isSimpleColumnReference(ctx: SelectExpressionElementContext): boolean {
        const text = ctx.getText();
        // Simple column reference: no parentheses, no operators, no spaces
        return (
            !text.includes('(') &&
            !text.includes(' ') &&
            !text.includes('+') &&
            !text.includes('-') &&
            !text.includes('*') &&
            !text.includes('/')
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

    enterQueryStatement(ctx: QueryStatementContext) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }

    exitQueryStatement(ctx: QueryStatementContext) {
        this.popStmt();
    }

    enterInsert(ctx: InsertContext) {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    }

    exitInsert(ctx: InsertContext) {
        this.popStmt();
    }

    enterUpdate(ctx: UpdateContext) {
        this.pushStmt(ctx, StmtContextType.COMMON_STMT);
    }

    exitUpdate(ctx: UpdateContext) {
        this.popStmt();
    }

    enterDelete(ctx: DeleteContext) {
        this.pushStmt(ctx, StmtContextType.COMMON_STMT);
    }

    exitDelete(ctx: DeleteContext) {
        this.popStmt();
    }

    enterAlterTable(ctx: AlterTableContext) {
        this.pushStmt(ctx, StmtContextType.ALTER_TABLE_STMT);
    }

    exitAlterTable(ctx: AlterTableContext) {
        this.popStmt();
    }

    enterDropTable(ctx: DropTableContext) {
        this.pushStmt(ctx, StmtContextType.COMMON_STMT);
    }

    exitDropTable(ctx: DropTableContext) {
        this.popStmt();
    }
}
