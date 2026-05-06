import type { GenericSqlListener } from '../../lib/generic/GenericSqlListener';
import {
    AlterTableContext,
    ColumnDefinitionContext,
    ColumnRefContext,
    CreateTableContext,
    CreateTableStatementContext,
    DeleteContext,
    DropTableContext,
    InsertContext,
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
    EntityCollector,
    StmtContextType,
    TableDeclareType,
} from '../common/entityCollector';
import { EntityContextType } from '../common/types';

export class GenericEntityCollector extends EntityCollector implements GenericSqlListener {
    /** ====== Entity Begin */

    exitTableName(ctx: TableNameContext) {
        this.pushEntity(ctx, EntityContextType.TABLE, [], {
            declareType: TableDeclareType.LITERAL,
        });
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
        this.pushEntity(ctx, EntityContextType.QUERY_RESULT);
    }

    exitSelectItem(ctx: SelectItemContext) {
        if (ctx.ASTERISK()) {
            this.pushEntity(ctx, EntityContextType.COLUMN, [], {
                declareType: ColumnDeclareType.ALL,
            });
        } else {
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
