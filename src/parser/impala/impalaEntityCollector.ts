import { ImpalaSqlParserListener } from '../../lib';
import {
    ColumnNamePathCreateContext,
    CreateAggregateFunctionContext,
    CreateFunctionContext,
    CreateKuduTableAsSelectContext,
    CreateSchemaContext,
    CreateTableLikeContext,
    CreateTableSelectContext,
    CreateViewContext,
    DatabaseNameCreateContext,
    DatabaseNamePathContext,
    FunctionNameCreateContext,
    FunctionNamePathContext,
    InsertStatementContext,
    QueryStatementContext,
    SingleStatementContext,
    TableNameCreateContext,
    TableNamePathContext,
    ViewNameCreateContext,
    ViewNamePathContext,
} from '../../lib/impala/ImpalaSqlParser';
import { EntityContextType } from '../common/basic-parser-types';
import EntityCollector, {
    EntityContext,
    StmtContext,
    StmtContextType,
} from '../common/entityCollector';

export default class ImpalaEntityCollector
    extends EntityCollector
    implements ImpalaSqlParserListener
{
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
    ) {
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

    /** ===== Entity begin */
    exitTableNameCreate(ctx: TableNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.TABLE_CREATE);
    }

    exitTableNamePath(ctx: TableNamePathContext) {
        this.pushEntity(ctx, EntityContextType.TABLE);
    }

    exitColumnNamePathCreate(ctx: ColumnNamePathCreateContext) {
        this.pushEntity(ctx, EntityContextType.COLUMN_CREATE);
    }

    exitViewNameCreate(ctx: ViewNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.VIEW_CREATE);
    }

    exitViewNamePath(ctx: ViewNamePathContext) {
        this.pushEntity(ctx, EntityContextType.VIEW);
    }

    exitDatabaseNamePath(ctx: DatabaseNamePathContext) {
        this.pushEntity(ctx, EntityContextType.DATABASE);
    }

    exitDatabaseNameCreate(ctx: DatabaseNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.DATABASE_CREATE);
    }

    exitFunctionNameCreate(ctx: FunctionNameCreateContext) {
        this.pushEntity(ctx, EntityContextType.FUNCTION_CREATE);
    }

    /** ===== Statement begin */
    enterSingleStatement(ctx: SingleStatementContext) {
        this.pushStmt(ctx, StmtContextType.COMMON_STMT);
    }

    exitSingleStatement(ctx: SingleStatementContext) {
        this.popStmt();
    }

    enterCreateTableLike(ctx: CreateTableLikeContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }

    exitCreateTableLike(ctx: CreateTableLikeContext) {
        this.popStmt();
    }

    enterCreateTableSelect(ctx: CreateTableSelectContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }

    exitCreateTableSelect(ctx: CreateTableSelectContext) {
        this.popStmt();
    }

    enterCreateKuduTableAsSelect(ctx: CreateKuduTableAsSelectContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }

    exitCreateKuduTableAsSelect(ctx: CreateKuduTableAsSelectContext) {
        this.popStmt();
    }

    enterQueryStatement(ctx: QueryStatementContext) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }

    exitQueryStatement(ctx: QueryStatementContext) {
        this.popStmt();
    }

    enterCreateView(ctx: CreateViewContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
    }

    exitCreateView(ctx: CreateViewContext) {
        this.popStmt();
    }

    enterInsertStatement(ctx: InsertStatementContext) {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    }

    exitInsertStatement(ctx: InsertStatementContext) {
        this.popStmt();
    }

    enterCreateSchema(ctx: CreateSchemaContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_DATABASE_STMT);
    }

    exitCreateSchema(ctx: CreateSchemaContext) {
        this.popStmt();
    }

    enterCreateAggregateFunction(ctx: CreateAggregateFunctionContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_FUNCTION_STMT);
    }

    exitCreateAggregateFunction(ctx: CreateAggregateFunctionContext) {
        this.popStmt();
    }

    enterCreateFunction(ctx: CreateFunctionContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_FUNCTION_STMT);
    }

    exitCreateFunction(ctx: CreateFunctionContext) {
        this.popStmt();
    }
}
