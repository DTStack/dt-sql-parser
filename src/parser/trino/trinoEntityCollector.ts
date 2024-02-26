import type {
    ColumnNameCreateContext,
    CreateMaterializedViewContext,
    CreateSchemaContext,
    CreateTableAsSelectContext,
    CreateTableContext,
    CreateViewContext,
    InsertIntoContext,
    QueryStatementContext,
    SchemaNameContext,
    SchemaNameCreateContext,
    SingleStatementContext,
    TableNameContext,
    TableNameCreateContext,
    ViewNameContext,
    ViewNameCreateContext,
} from '../../lib/trinosql/TrinoSqlParser';
import type { TrinoSqlListener } from '../../lib/trinosql/TrinoSqlListener';
import { EntityContextType } from '../common/basic-parser-types';
import EntityCollector, {
    EntityContext,
    StmtContext,
    StmtContextType,
} from '../common/entityCollector';

export default class TrinoEntityCollector extends EntityCollector implements TrinoSqlListener {
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
    exitSchemaName(ctx: SchemaNameContext) {
        this.pushEntity(ctx, EntityContextType.DATABASE);
    }

    exitSchemaNameCreate(ctx: SchemaNameCreateContext) {
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

    enterCreateSchema(ctx: CreateSchemaContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_DATABASE_STMT);
    }

    exitCreateSchema(ctx: CreateSchemaContext) {
        this.popStmt();
    }

    enterCreateTableAsSelect(ctx: CreateTableAsSelectContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }

    exitCreateTableAsSelect(ctx: CreateTableAsSelectContext) {
        this.popStmt();
    }

    enterCreateTable(ctx: CreateTableContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }

    exitCreateTable(ctx: CreateTableContext) {
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

    enterQueryStatement(ctx: QueryStatementContext) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }

    exitQueryStatement(ctx: QueryStatementContext) {
        this.popStmt();
    }

    enterInsertInto(ctx: InsertIntoContext) {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    }

    exitInsertInto(ctx: InsertIntoContext) {
        this.popStmt();
    }
}
