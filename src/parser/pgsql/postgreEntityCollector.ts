import type {
    ColumnCreateTableContext,
    ColumnNameCreateContext,
    CreateDatabaseContext,
    CreateForeignTableContext,
    CreateMaterializedViewContext,
    CreatePartitionForeignTableContext,
    CreateViewContext,
    CreatefunctionstmtContext,
    DatabaseNameContext,
    DatabaseNameCreateContext,
    FunctionNameCreateContext,
    InsertStatementContext,
    QueryCreateTableContext,
    SelectStatementContext,
    SingleStmtContext,
    TableNameContext,
    TableNameCreateContext,
    ViewNameContext,
    ViewNameCreateContext,
} from '../../lib/pgsql/PostgreSQLParser';
import type { PostgreSQLParserListener } from '../../lib/pgsql/PostgreSQLParserListener';
import { EntityContextType } from '../common/basic-parser-types';
import EntityCollector, {
    EntityContext,
    StmtContext,
    StmtContextType,
} from '../common/entityCollector';

export default class PostgreSQLEntityCollector
    extends EntityCollector
    implements PostgreSQLParserListener
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
    exitDatabaseName(ctx: DatabaseNameContext) {
        this.pushEntity(ctx, EntityContextType.DATABASE);
    }

    exitDatabaseNameCreate(ctx: DatabaseNameCreateContext) {
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

    enterInsertStatement(ctx: InsertStatementContext) {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    }

    exitInsertStatement(ctx: InsertStatementContext) {
        this.popStmt();
    }

    enterCreatefunctionstmt(ctx: CreatefunctionstmtContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_FUNCTION_STMT);
    }

    exitCreatefunctionstmt(ctx: CreatefunctionstmtContext) {
        this.popStmt();
    }
}
