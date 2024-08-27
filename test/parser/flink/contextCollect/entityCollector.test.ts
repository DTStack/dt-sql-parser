import { ParseTreeListener } from 'antlr4ng';
import fs from 'fs';
import path from 'path';
import { FlinkSqlParserListener } from 'src/lib/flink/FlinkSqlParserListener';
import {
    AttrName,
    isCommonEntityContext,
    isFuncEntityContext,
    StmtContextType,
} from 'src/parser/common/entityCollector';
import { EntityContextType } from 'src/parser/common/types';
import { FlinkEntityCollector, FlinkSQL, FlinkSqlSplitListener } from 'src/parser/flink';

const commonSql = fs.readFileSync(path.join(__dirname, 'fixtures', 'common.sql'), 'utf-8');

describe('Flink entity collector tests', () => {
    const flink = new FlinkSQL();
    const parseTree = flink.parse(commonSql);
    const splitListener = new FlinkSqlSplitListener();
    flink.listen(splitListener as FlinkSqlParserListener, parseTree);

    test('validate common sql', () => {
        expect(flink.validate(commonSql).length).toBe(0);
    });

    test('split results', () => {
        expect(splitListener.statementsContext.length).toBe(12);
    });

    test('create table by columns', () => {
        const columnCreateTableContext = splitListener.statementsContext[0];

        const collectListener = new FlinkEntityCollector(commonSql);
        flink.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const tableCreateEntity = allEntities[0];

        expect(tableCreateEntity.entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(tableCreateEntity.text).toBe('MyTable');
        expect(tableCreateEntity.position).toEqual({
            startIndex: 13,
            endIndex: 19,
            line: 1,
            startColumn: 14,
            endColumn: 21,
        });

        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_TABLE_STMT
        );
        expect(tableCreateEntity.belongStmt.position).toEqual({
            startIndex: 0,
            endIndex: 180,
            startLine: 1,
            endLine: 1,
            startColumn: 1,
            endColumn: 182,
        });

        expect(tableCreateEntity[AttrName.comment]).toEqual({
            text: "'test table comment ABC.'",
            startIndex: 78,
            endIndex: 102,
            line: 1,
            startColumn: 79,
            endColumn: 104,
        });
        if (isCommonEntityContext(tableCreateEntity)) {
            expect(tableCreateEntity.relatedEntities).toBeNull();

            expect(tableCreateEntity.columns?.length).toBe(2);
            tableCreateEntity.columns?.forEach((columEntity) => {
                expect(columEntity.entityContextType).toBe(EntityContextType.COLUMN_CREATE);
                expect(columEntity.belongStmt).toBe(tableCreateEntity.belongStmt);
                expect(columEntity.text).toBe(
                    commonSql.slice(
                        columEntity.position.startIndex,
                        columEntity.position.endIndex + 1
                    )
                );
            });
            expect(tableCreateEntity.columns[0][AttrName.comment]).toEqual({
                text: "'col1'",
                startIndex: 47,
                endIndex: 52,
                line: 1,
                startColumn: 48,
                endColumn: 54,
            });
            expect(tableCreateEntity.columns[0][AttrName.colType]).toEqual({
                text: 'BIGINT',
                startIndex: 32,
                endIndex: 37,
                line: 1,
                startColumn: 33,
                endColumn: 39,
            });
            expect(tableCreateEntity.columns[1][AttrName.colType]).toEqual({
                text: 'STRING',
                startIndex: 62,
                endIndex: 67,
                line: 1,
                startColumn: 63,
                endColumn: 69,
            });
        }
    });

    test('create table as select', () => {
        const createTableBySelectContext = splitListener.statementsContext[1];

        const collectListener = new FlinkEntityCollector(commonSql);
        flink.listen(collectListener as ParseTreeListener, createTableBySelectContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const tableCreateEntity = allEntities[0];

        expect(tableCreateEntity.entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(tableCreateEntity.text).toBe('my_ctas_table');
        expect(tableCreateEntity.position).toEqual({
            startIndex: 197,
            endIndex: 209,
            line: 3,
            startColumn: 14,
            endColumn: 27,
        });

        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_TABLE_STMT
        );
        expect(tableCreateEntity.belongStmt.position).toEqual({
            startIndex: 184,
            endIndex: 323,
            startLine: 3,
            endLine: 11,
            startColumn: 1,
            endColumn: 20,
        });
        if (isCommonEntityContext(tableCreateEntity)) {
            expect(tableCreateEntity.relatedEntities.length).toBe(1);
            tableCreateEntity.relatedEntities.forEach((relatedEntity) => {
                expect(relatedEntity.entityContextType).toBe(EntityContextType.TABLE);
                expect(allEntities.some((en) => relatedEntity === en)).toBeTruthy();
            });
        }

        expect(allEntities[1].text).toBe('source_table');
        expect(allEntities[1].belongStmt.rootStmt).toBe(allEntities[0].belongStmt);
        expect(allEntities[1].position).toEqual({
            startIndex: 286,
            endIndex: 297,
            line: 9,
            startColumn: 5,
            endColumn: 17,
        });
    });

    test('create table like', () => {
        const createTableLikeContext = splitListener.statementsContext[2];

        const collectListener = new FlinkEntityCollector(commonSql);
        flink.listen(collectListener as ParseTreeListener, createTableLikeContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const tableCreateEntity = allEntities[0];
        const originTableEntity = allEntities[1];

        expect(tableCreateEntity.entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(tableCreateEntity.text).toBe('Orders_with_watermark');
        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_TABLE_STMT
        );

        if (isCommonEntityContext(tableCreateEntity)) {
            expect(tableCreateEntity.columns.length).toBe(1);
            expect(tableCreateEntity.columns[0].text).toBe('id');
            expect(tableCreateEntity.columns[0].entityContextType).toBe(
                EntityContextType.COLUMN_CREATE
            );
            expect(tableCreateEntity.relatedEntities.length).toBe(1);
            expect(tableCreateEntity.relatedEntities[0]).toBe(originTableEntity);
        }
        expect(originTableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(originTableEntity.text).toBe('Orders_in_file');
        expect(originTableEntity.belongStmt).toBe(tableCreateEntity.belongStmt);
    });

    test('common select from table', () => {
        const selectTableContext = splitListener.statementsContext[3];
        const collectListener = new FlinkEntityCollector(commonSql);
        flink.listen(collectListener as ParseTreeListener, selectTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const tableEntity = allEntities[0];
        const tableEntity1 = allEntities[1];
        expect(tableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(tableEntity.text).toBe('Order1');
        expect(tableEntity[AttrName.alias]).toEqual({
            text: 'o1',
            startIndex: 616,
            endIndex: 617,
            line: 23,
            startColumn: 54,
            endColumn: 56,
        });

        expect(tableEntity1.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        if (isCommonEntityContext(tableEntity1)) {
            expect(tableEntity1.columns).toBeUndefined();
            expect(tableEntity1.relatedEntities).toBeNull();
        }
        expect(tableEntity1.entityContextType).toBe(EntityContextType.TABLE);
        expect(tableEntity1.text).toBe('Order2');
        expect(tableEntity1[AttrName.alias]).toEqual({
            text: 't2',
            startIndex: 634,
            endIndex: 635,
            line: 23,
            startColumn: 72,
            endColumn: 74,
        });
        expect(tableEntity1.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        if (isCommonEntityContext(tableEntity1)) {
            expect(tableEntity1.columns).toBeUndefined();
            expect(tableEntity1.relatedEntities).toBeNull();
        }
    });

    test('select from table join', () => {
        const selectTableContext = splitListener.statementsContext[4];
        const collectListener = new FlinkEntityCollector(commonSql);
        flink.listen(collectListener as ParseTreeListener, selectTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const tableEntity1 = allEntities[0];
        const tableEntity2 = allEntities[1];

        expect(tableEntity1.entityContextType).toBe(EntityContextType.TABLE);
        expect(tableEntity1.text).toBe('Orders');
        expect(tableEntity1.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        if (isCommonEntityContext(tableEntity1)) {
            expect(tableEntity1.columns).toBeUndefined();
            expect(tableEntity1.relatedEntities).toBeNull();
        }

        expect(tableEntity2.entityContextType).toBe(EntityContextType.TABLE);
        expect(tableEntity2.text).toBe('Product');
        expect(tableEntity2.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        if (isCommonEntityContext(tableEntity2)) {
            expect(tableEntity2.columns).toBeUndefined();
            expect(tableEntity2.relatedEntities).toBeNull();
        }

        expect(tableEntity1.belongStmt).toBe(tableEntity2.belongStmt);
    });

    test('union select', () => {
        const selectTableContext = splitListener.statementsContext[5];
        const collectListener = new FlinkEntityCollector(commonSql);
        flink.listen(collectListener as ParseTreeListener, selectTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const tableEntity1 = allEntities[0];
        const tableEntity2 = allEntities[1];

        expect(tableEntity1.entityContextType).toBe(EntityContextType.TABLE);
        expect(tableEntity1.text).toBe('t1');
        expect(tableEntity1.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        if (isCommonEntityContext(tableEntity1)) {
            expect(tableEntity1.columns).toBeUndefined();
            expect(tableEntity1.relatedEntities).toBeNull();
        }
        expect(tableEntity2.entityContextType).toBe(EntityContextType.TABLE);
        expect(tableEntity2.text).toBe('t2');
        expect(tableEntity2.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        if (isCommonEntityContext(tableEntity2)) {
            expect(tableEntity2.columns).toBeUndefined();
            expect(tableEntity2.relatedEntities).toBeNull();
        }

        expect(tableEntity1.belongStmt.rootStmt).toBe(tableEntity2.belongStmt.rootStmt);
    });

    test('insert into table values', () => {
        const insertTableContext = splitListener.statementsContext[6];
        const collectListener = new FlinkEntityCollector(commonSql);
        flink.listen(collectListener as ParseTreeListener, insertTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const tableEntity = allEntities[0];

        expect(tableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(tableEntity.text).toBe('country_page_view');
        expect(tableEntity.belongStmt.stmtContextType).toBe(StmtContextType.INSERT_STMT);
        if (isCommonEntityContext(tableEntity)) {
            expect(tableEntity.columns).toBeUndefined();
            expect(tableEntity.relatedEntities).toBeNull();
        }
    });

    test('insert into table select', () => {
        const insertTableContext = splitListener.statementsContext[7];
        const collectListener = new FlinkEntityCollector(commonSql);
        flink.listen(collectListener as ParseTreeListener, insertTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const insertTableEntity = allEntities[0];
        const fromTableEntity1 = allEntities[1];

        expect(insertTableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(insertTableEntity.text).toBe('catalog1.db1.country_page_view');
        expect(insertTableEntity.belongStmt.stmtContextType).toBe(StmtContextType.INSERT_STMT);

        expect(fromTableEntity1.entityContextType).toBe(EntityContextType.TABLE);
        expect(fromTableEntity1.text).toBe('page_view_source');
        expect(fromTableEntity1.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);

        expect(fromTableEntity1.belongStmt.parentStmt).toBe(insertTableEntity.belongStmt);
        expect(fromTableEntity1.belongStmt.rootStmt).toBe(insertTableEntity.belongStmt);
    });

    test('multiple insert', () => {
        const insertTableContext = splitListener.statementsContext[8];
        const collectListener = new FlinkEntityCollector(commonSql);
        flink.listen(collectListener as ParseTreeListener, insertTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const insertTableEntity1 = allEntities[0];
        const insertTableEntity2 = allEntities[1];

        expect(insertTableEntity1.entityContextType).toBe(EntityContextType.TABLE);
        expect(insertTableEntity1.text).toBe('country_page_view1');
        expect(insertTableEntity1.belongStmt.stmtContextType).toBe(StmtContextType.INSERT_STMT);

        expect(insertTableEntity2.entityContextType).toBe(EntityContextType.TABLE);
        expect(insertTableEntity2.text).toBe('country_page_view2');
        expect(insertTableEntity2.belongStmt.stmtContextType).toBe(StmtContextType.INSERT_STMT);

        expect(insertTableEntity2.belongStmt.parentStmt).toBe(
            insertTableEntity1.belongStmt.parentStmt
        );
        expect(insertTableEntity2.belongStmt.rootStmt).toBe(
            insertTableEntity1.belongStmt.parentStmt
        );
    });

    test('create view as select table', () => {
        const insertTableContext = splitListener.statementsContext[9];
        const collectListener = new FlinkEntityCollector(commonSql);
        flink.listen(collectListener as ParseTreeListener, insertTableContext);

        const allEntities = collectListener.getEntities();
        expect(allEntities.length).toBe(2);

        expect(allEntities[0].entityContextType).toBe(EntityContextType.VIEW_CREATE);
        expect(allEntities[0].text).toBe('view1');
        expect(allEntities[0][AttrName.comment]).toEqual({
            text: "'this is a view'",
            startIndex: 1254,
            endIndex: 1269,
            line: 42,
            startColumn: 39,
            endColumn: 55,
        });
        expect(allEntities[0].belongStmt.stmtContextType).toBe(StmtContextType.CREATE_VIEW_STMT);

        expect(allEntities[1].entityContextType).toBe(EntityContextType.TABLE);
        expect(allEntities[1].text).toBe('tbl');
        expect(allEntities[1].belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
    });

    test('create database', () => {
        const dbCreateContext = splitListener.statementsContext[10];

        const collectListener = new FlinkEntityCollector(commonSql);
        flink.listen(collectListener as ParseTreeListener, dbCreateContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const dbEntity = allEntities[0];

        expect(dbEntity.entityContextType).toBe(EntityContextType.DATABASE_CREATE);
        expect(dbEntity.text).toBe('db1');
        expect(dbEntity[AttrName.comment]).toEqual({
            text: "'this is a created database'",
            startIndex: 1345,
            endIndex: 1372,
            line: 44,
            startColumn: 43,
            endColumn: 71,
        });
        expect(dbEntity.position).toEqual({
            endColumn: 34,
            endIndex: 1335,
            line: 44,
            startColumn: 31,
            startIndex: 1333,
        });

        expect(dbEntity.belongStmt.stmtContextType).toBe(StmtContextType.CREATE_DATABASE_STMT);
        expect(dbEntity.belongStmt.position).toEqual({
            endColumn: 119,
            endIndex: 1420,
            endLine: 44,
            startColumn: 1,
            startIndex: 1303,
            startLine: 44,
        });
        if (isCommonEntityContext(dbEntity)) {
            expect(dbEntity.columns).toBeUndefined();
            expect(dbEntity.relatedEntities).toBeNull();
        }
    });

    test('create function', () => {
        const functionCreateContext = splitListener.statementsContext[11];

        const collectListener = new FlinkEntityCollector(commonSql);
        flink.listen(collectListener as ParseTreeListener, functionCreateContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const functionEntity = allEntities[0];

        expect(functionEntity.entityContextType).toBe(EntityContextType.FUNCTION_CREATE);
        expect(functionEntity.text).toBe('tempFunction');
        expect(functionEntity.position).toEqual({
            endColumn: 43,
            endIndex: 1465,
            line: 46,
            startColumn: 31,
            startIndex: 1454,
        });

        expect(functionEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_FUNCTION_STMT
        );
        expect(functionEntity.belongStmt.position).toEqual({
            endColumn: 58,
            endIndex: 1480,
            endLine: 46,
            startColumn: 1,
            startIndex: 1424,
            startLine: 46,
        });
        if (isFuncEntityContext(functionEntity)) {
            expect(functionEntity?.arguments)?.toBeNull();
            expect(functionEntity.relatedEntities).toBeNull();
        }
    });
});
