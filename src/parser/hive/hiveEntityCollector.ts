import { EntityContextType } from '../..';
import { HiveSqlParserListener } from '../../lib';
import {
    ColumnNameCreateContext,
    CreateMaterializedViewStatementContext,
    CreateTableStatementContext,
    CreateViewStatementContext,
    FromInsertStmtContext,
    FromSelectStmtContext,
    FromStatementContext,
    InsertStmtContext,
    SelectStatementContext,
    StatementContext,
    TableNameContext,
    TableNameCreateContext,
    ViewNameContext,
    ViewNameCreateContext,
} from '../../lib/hive/HiveSqlParser';
import EntityCollector, {
    EntityContext,
    StmtContext,
    StmtContextType,
} from '../common/entityCollector';

export default class HiveEntityCollector extends EntityCollector implements HiveSqlParserListener {
    combineRootStmtEntities(
        stmtContext: StmtContext,
        entitiesInsideStmt: EntityContext[]
    ): EntityContext[] {
        if (
            stmtContext.stmtContextType === StmtContextType.CREATE_VIEW_STMT ||
            stmtContext.stmtContextType === StmtContextType.CREATE_TABLE_STMT
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
    exitTableNameCreate = (ctx: TableNameCreateContext) => {
        this.pushEntity(ctx, EntityContextType.TABLE_CREATE);
    };

    exitTableName = (ctx: TableNameContext) => {
        this.pushEntity(ctx, EntityContextType.TABLE);
    };

    exitColumnNameCreate = (ctx: ColumnNameCreateContext) => {
        this.pushEntity(ctx, EntityContextType.COLUMN_CREATE);
    };

    exitViewNameCreate = (ctx: ViewNameCreateContext) => {
        this.pushEntity(ctx, EntityContextType.VIEW_CREATE);
    };

    exitViewName = (ctx: ViewNameContext) => {
        this.pushEntity(ctx, EntityContextType.VIEW);
    };

    /** ===== Statement begin */
    enterStatement = (ctx: StatementContext) => {
        this.pushStmt(ctx, StmtContextType.COMMON_STMT);
    };

    exitStatement = () => {
        this.popStmt();
    };

    enterCreateTableStatement = (ctx: CreateTableStatementContext) => {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    };

    exitCreateTableStatement = () => {
        this.popStmt();
    };

    enterSelectStatement = (ctx: SelectStatementContext) => {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    };

    exitSelectStatement = (ctx: SelectStatementContext) => {
        this.popStmt();
    };

    enterFromSelectStmt = (ctx: FromSelectStmtContext) => {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    };

    exitFromSelectStmt = (ctx: FromSelectStmtContext) => {
        this.popStmt();
    };

    enterCreateViewStatement = (ctx: CreateViewStatementContext) => {
        this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
    };

    exitCreateViewStatement = (ctx: CreateViewStatementContext) => {
        this.popStmt();
    };

    enterCreateMaterializedViewStatement = (ctx: CreateMaterializedViewStatementContext) => {
        this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
    };

    exitCreateMaterializedViewStatement = (ctx: CreateMaterializedViewStatementContext) => {
        this.popStmt();
    };

    enterInsertStmt = (ctx: InsertStmtContext) => {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    };

    exitInsertStmt = (ctx: InsertStmtContext) => {
        this.popStmt();
    };

    enterFromInsertStmt = (ctx: FromInsertStmtContext) => {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    };

    exitFromInsertStmt = (ctx: FromInsertStmtContext) => {
        this.popStmt();
    };
}
