import { ParseTreeListener } from 'antlr4ng';
import fs from 'fs';
import path from 'path';
import { TrinoSqlListener } from 'src/lib/trino/TrinoSqlListener';
import {
    AttrName,
    isCommonEntityContext,
    StmtContextType,
} from 'src/parser/common/entityCollector';
import { EntityContextType } from 'src/parser/common/types';
import { TrinoEntityCollector, TrinoSQL, TrinoSqlSplitListener } from 'src/parser/trino';

const commonSql = fs.readFileSync(path.join(__dirname, 'fixtures', 'common.sql'), 'utf-8');

describe('Trino entity collector tests', () => {
    const trino = new TrinoSQL();
    const parseTree = trino.parse(commonSql);
    const splitListener = new TrinoSqlSplitListener();
    trino.listen(splitListener as TrinoSqlListener, parseTree);

    test('validate common sql', () => {
        expect(trino.validate(commonSql).length).toBe(0);
    });

    test('split results', () => {
        expect(splitListener.statementsContext.length).toBe(11);
    });

    test('create table like', () => {
        const testingContext = splitListener.statementsContext[0];

        const collectListener = new TrinoEntityCollector(commonSql);
        trino.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const tableCreateEntity = allEntities[0];

        expect(tableCreateEntity.entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(tableCreateEntity.text).toBe('bar');
        expect(tableCreateEntity.position).toEqual({
            startIndex: 27,
            endIndex: 29,
            line: 1,
            startColumn: 28,
            endColumn: 31,
        });

        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_TABLE_STMT
        );
        expect(tableCreateEntity.belongStmt.position).toEqual({
            startIndex: 0,
            endIndex: 68,
            startLine: 1,
            endLine: 1,
            startColumn: 1,
            endColumn: 70,
        });
        if (isCommonEntityContext(tableCreateEntity)) {
            expect(tableCreateEntity.relatedEntities.length).toBe(1);

            const beLikedEntity = allEntities[1];

            expect(tableCreateEntity.relatedEntities[0]).toBe(beLikedEntity);
            expect(beLikedEntity.text).toBe('like_table');
            expect(beLikedEntity.entityContextType).toBe(EntityContextType.TABLE);
            expect(beLikedEntity.belongStmt).toBe(tableCreateEntity.belongStmt);
        }
    });

    test('create table as select', () => {
        const testingContext = splitListener.statementsContext[1];

        const collectListener = new TrinoEntityCollector(commonSql);
        trino.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const tableCreateEntity = allEntities[0];
        const originTableEntity = allEntities[1];

        expect(tableCreateEntity.entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(tableCreateEntity.text).toBe('foo');
        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_TABLE_STMT
        );
        if (isCommonEntityContext(tableCreateEntity)) {
            expect(tableCreateEntity.columns.length).toBe(2);
            tableCreateEntity.columns.forEach((columEntity) => {
                expect(columEntity.entityContextType).toBe(EntityContextType.COLUMN_CREATE);
                expect(columEntity.belongStmt).toBe(tableCreateEntity.belongStmt);
                expect(columEntity.text).toBe(
                    commonSql.slice(
                        columEntity.position.startIndex,
                        columEntity.position.endIndex + 1
                    )
                );
            });
            expect(tableCreateEntity.relatedEntities.length).toBe(1);
            expect(tableCreateEntity.relatedEntities[0]).toBe(originTableEntity);

            expect(originTableEntity.entityContextType).toBe(EntityContextType.TABLE);
            expect(originTableEntity.text).toBe('t');
            expect(originTableEntity.belongStmt.rootStmt).toBe(tableCreateEntity.belongStmt);
        }
    });

    test('create view as select', () => {
        const testingContext = splitListener.statementsContext[2];

        const collectListener = new TrinoEntityCollector(commonSql);
        trino.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const tableCreateEntity = allEntities[0];
        const originTableEntity = allEntities[1];

        expect(tableCreateEntity.entityContextType).toBe(EntityContextType.VIEW_CREATE);
        expect(tableCreateEntity.text).toBe('a');
        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(StmtContextType.CREATE_VIEW_STMT);
        expect(tableCreateEntity[AttrName.comment]).toEqual({
            text: "'This is a view comment'",
            startIndex: 139,
            endIndex: 162,
            line: 5,
            startColumn: 23,
            endColumn: 47,
        });
        if (isCommonEntityContext(tableCreateEntity)) {
            expect(tableCreateEntity.columns).toBeUndefined();
            expect(tableCreateEntity.relatedEntities.length).toBe(1);
            expect(tableCreateEntity.relatedEntities[0]).toBe(originTableEntity);
        }

        expect(originTableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(originTableEntity.text).toBe('t');
        expect(originTableEntity.belongStmt.rootStmt).toBe(tableCreateEntity.belongStmt);
    });

    test('create materialize view as select', () => {
        const testingContext = splitListener.statementsContext[3];

        const collectListener = new TrinoEntityCollector(commonSql);
        trino.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const tableCreateEntity = allEntities[0];
        const originTableEntity = allEntities[1];

        expect(tableCreateEntity.entityContextType).toBe(EntityContextType.VIEW_CREATE);
        expect(tableCreateEntity.text).toBe('a');
        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(StmtContextType.CREATE_VIEW_STMT);
        expect(tableCreateEntity[AttrName.comment]).toEqual({
            text: "'This is an MATERIALIZED view comment'",
            startIndex: 220,
            endIndex: 257,
            line: 7,
            startColumn: 36,
            endColumn: 74,
        });

        if (isCommonEntityContext(tableCreateEntity)) {
            expect(tableCreateEntity.columns).toBeUndefined();
            expect(tableCreateEntity.relatedEntities.length).toBe(1);
            expect(tableCreateEntity.relatedEntities[0]).toBe(originTableEntity);
        }

        expect(originTableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(originTableEntity.text).toBe('t');
        expect(originTableEntity.belongStmt.rootStmt).toBe(tableCreateEntity.belongStmt);
    });

    test('select from table', () => {
        const testingContext = splitListener.statementsContext[4];

        const collectListener = new TrinoEntityCollector(commonSql);
        trino.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const tableCreateEntity = allEntities[0];

        expect(tableCreateEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(tableCreateEntity.text).toBe('table1');
        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);

        if (isCommonEntityContext(tableCreateEntity)) {
            expect(tableCreateEntity.columns).toBeUndefined();
            expect(tableCreateEntity.relatedEntities).toBeNull();
        }
    });

    test('insert into table as select', () => {
        const testingContext = splitListener.statementsContext[5];

        const collectListener = new TrinoEntityCollector(commonSql);
        trino.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const insertTableEntity = allEntities[0];
        const fromTableEntity = allEntities[1];

        expect(insertTableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(insertTableEntity.belongStmt.stmtContextType).toBe(StmtContextType.INSERT_STMT);
        expect(insertTableEntity.text).toBe('orders');

        expect(fromTableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(fromTableEntity.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        expect(fromTableEntity.text).toBe('new_orders');
        expect(fromTableEntity.belongStmt.parentStmt).toBe(insertTableEntity.belongStmt);
    });

    test('insert into table values', () => {
        const testingContext = splitListener.statementsContext[6];

        const collectListener = new TrinoEntityCollector(commonSql);
        trino.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const tableEntity = allEntities[0];

        expect(tableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(tableEntity.belongStmt.stmtContextType).toBe(StmtContextType.INSERT_STMT);
        expect(tableEntity.text).toBe('cities');
    });

    test('create schema', () => {
        const testingContext = splitListener.statementsContext[7];

        const collectListener = new TrinoEntityCollector(commonSql);
        trino.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const schemaEntity = allEntities[0];

        expect(schemaEntity.entityContextType).toBe(EntityContextType.DATABASE_CREATE);
        expect(schemaEntity.belongStmt.stmtContextType).toBe(StmtContextType.CREATE_DATABASE_STMT);
        expect(schemaEntity.text).toBe('test');
    });

    test('use schema', () => {
        const testingContext = splitListener.statementsContext[8];

        const collectListener = new TrinoEntityCollector(commonSql);
        trino.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const schemaEntity = allEntities[0];

        expect(schemaEntity.entityContextType).toBe(EntityContextType.DATABASE);
        expect(schemaEntity.belongStmt.stmtContextType).toBe(StmtContextType.COMMON_STMT);
        expect(schemaEntity.text).toBe('information_schema');
    });

    test('select using alias', () => {
        const testingContext = splitListener.statementsContext[9];

        const collectListener = new TrinoEntityCollector(commonSql);
        trino.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const tableEntity = allEntities[0];

        expect(tableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(tableEntity.text).toBe('tb');
        expect(tableEntity.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        expect(tableEntity[AttrName.alias]).toEqual({
            text: 'tb_alias',
            startIndex: 512,
            endIndex: 519,
            line: 19,
            startColumn: 44,
            endColumn: 52,
        });

        if (isCommonEntityContext(tableEntity)) {
            expect(tableEntity.columns).toBeUndefined();
            expect(tableEntity.relatedEntities).toBeNull();
        }
    });

    test('create table using alias', () => {
        const testingContext = splitListener.statementsContext[10];

        const collectListener = new TrinoEntityCollector(commonSql);
        trino.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const tableCreateEntity = allEntities[0];

        expect(tableCreateEntity.entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(tableCreateEntity.text).toBe('orders');
        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_TABLE_STMT
        );
        expect(tableCreateEntity[AttrName.comment]).toEqual({
            text: "'This is the orders table'",
            startIndex: 619,
            endIndex: 644,
            line: 25,
            startColumn: 9,
            endColumn: 35,
        });

        if (isCommonEntityContext(tableCreateEntity)) {
            expect(tableCreateEntity.columns?.length).toBe(2);
            expect(tableCreateEntity.relatedEntities).toBeNull();
            expect(tableCreateEntity.columns[0].text).toBe('orderkey');
            expect(tableCreateEntity.columns[1].text).toBe('orderstatus');
            expect(tableCreateEntity.columns[0][AttrName.colType]).toEqual({
                text: 'bigint',
                startIndex: 556,
                endIndex: 561,
                line: 22,
                startColumn: 12,
                endColumn: 18,
            });
            expect(tableCreateEntity.columns[1][AttrName.colType]).toEqual({
                text: 'varchar',
                startIndex: 578,
                endIndex: 584,
                line: 23,
                startColumn: 15,
                endColumn: 22,
            });
            expect(tableCreateEntity.columns[1][AttrName.comment]).toEqual({
                text: "'order status'",
                startIndex: 594,
                endIndex: 607,
                line: 23,
                startColumn: 31,
                endColumn: 45,
            });
        }
    });
});
