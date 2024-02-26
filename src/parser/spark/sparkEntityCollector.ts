import type {
    NamespaceNameContext,
    NamespaceNameCreateContext,
    SingleStatementContext,
    TableNameContext,
    TableNameCreateContext,
    ViewNameContext,
    ViewNameCreateContext,
    FunctionNameCreateContext,
    ColumnNameCreateContext,
    CreateTableContext,
    CreateTableLikeContext,
    ReplaceTableContext,
    QueryStatementContext,
    InsertFromQueryContext,
    MultipleInsertContext,
    CreateViewContext,
    CreateTempViewUsingContext,
} from '../../lib/spark/SparkSqlParser';
import type { SparkSqlParserListener } from '../../lib/spark/SparkSqlParserListener';
import { EntityContextType } from '../common/basic-parser-types';
import EntityCollector, {
    EntityContext,
    StmtContext,
    StmtContextType,
} from '../common/entityCollector';

export default class SparkEntityCollector
    extends EntityCollector
    implements SparkSqlParserListener
{
    visitTerminal() {}
    visitErrorNode() {}
    enterEveryRule() {}
    exitEveryRule() {}
    combineRootStmtEntities(
        stmtContext: StmtContext,
        entitiesInsideStmt: EntityContext[]
    ): EntityContext[] {
        if (
            stmtContext.stmtContextType === StmtContextType.CREATE_TABLE_STMT ||
            stmtContext.stmtContextType === StmtContextType.CREATE_VIEW_STMT
        ) {
            return this.combineCreateTableOrViewStmtEntities(stmtContext, entitiesInsideStmt);
        }
        return entitiesInsideStmt;
    }

    combineCreateTableOrViewStmtEntities(
        stmtContext: StmtContext,
        entitiesInsideStmt: EntityContext[]
    ): EntityContext[] {
        const columns: EntityContext[] = [];
        const relatedEntities: EntityContext[] = [];
        let mainEntity: EntityContext = null;
        const finalEntities = entitiesInsideStmt.reduce((result, entity) => {
            if (entity.belongStmt !== stmtContext) {
                if (
                    entity.entityContextType !== EntityContextType.COLUMN &&
                    entity.entityContextType !== EntityContextType.COLUMN_CREATE
                ) {
                    relatedEntities.push(entity);
                    result.push(entity);
                }
                return result;
            }

            if (entity.entityContextType === EntityContextType.COLUMN_CREATE) {
                columns.push(entity);
            } else if (
                entity.entityContextType === EntityContextType.TABLE_CREATE ||
                entity.entityContextType === EntityContextType.VIEW_CREATE
            ) {
                mainEntity = entity;
                result.push(entity);
                return result;
            } else if (entity.entityContextType !== EntityContextType.COLUMN) {
                relatedEntities.push(entity);
                result.push(entity);
            }
            return result;
        }, []);

        if (columns.length) {
            mainEntity.columns = columns;
        }

        if (relatedEntities.length) {
            mainEntity.relatedEntities = relatedEntities;
        }

        return finalEntities;
    }

    /** ====== Entity Begin */
    exitNamespaceName(ctx: NamespaceNameContext) {
        this.pushEntity(ctx, EntityContextType.DATABASE);
    }

    exitNamespaceNameCreate(ctx: NamespaceNameCreateContext) {
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
}
