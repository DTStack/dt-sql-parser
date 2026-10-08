import type { GenericSqlListener } from '../../lib/generic/GenericSqlListener';
import {
    AlterTableContext,
    ColumnDefinitionContext,
    ColumnRefContext,
    AliasedRelationContext,
    CreateTableContext,
    CreateTableStatementContext,
    DeleteContext,
    DropTableContext,
    InsertContext,
    NamedQueryContext,
    QuerySpecificationContext,
    QueryStatementContext,
    SelectItemContext,
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
    isColumnEntityContext,
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
        this.pushEntity(
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

    exitColumnDefinition(ctx: ColumnDefinitionContext) {
        // The name is only `columnRef`. Pushing the whole definition made the
        // completion label `age int` and inserted the type into the SQL.
        const entity = this.pushEntity(ctx.columnRef(), EntityContextType.COLUMN_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [ColumnDefinitionContext.name],
            },
        ]);
        const dataType = ctx.dataType();
        if (entity && isColumnEntityContext(entity) && dataType?.start && dataType.stop) {
            const startIndex = dataType.start.start;
            const endIndex = dataType.stop.stop;
            const typeText = this.sourceSlice(startIndex, endIndex);
            const startColumn = dataType.start.column + 1;
            entity[AttrName.colType] = {
                text: typeText,
                line: dataType.start.line,
                startIndex,
                endIndex,
                startColumn,
                endColumn:
                    dataType.stop.line === dataType.start.line
                        ? startColumn + typeText.length
                        : dataType.stop.column + 1 + (dataType.stop.text?.length ?? 0),
            };
        }
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

    exitSelectItem(ctx: SelectItemContext) {
        if (ctx.ASTERISK()) {
            this.pushEntity(ctx, EntityContextType.COLUMN, [], {
                declareType: ColumnDeclareType.ALL,
            });
        } else {
            const isSimpleColumn = this.isSimpleColumnReference(ctx);
            const entity = this.pushEntity(ctx, EntityContextType.COLUMN, [], {
                declareType: isSimpleColumn
                    ? ColumnDeclareType.LITERAL
                    : ColumnDeclareType.EXPRESSION,
            });
            // The alias sits on this select item. Searching parents would pick a
            // later item's alias and label every column with that name.
            const aliasToken = ctx._alias?.start;
            if (entity && aliasToken) {
                entity[AttrName.alias] = tokenToWord(aliasToken, '');
            }
        }
    }

    private isSimpleColumnReference(ctx: SelectItemContext): boolean {
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
