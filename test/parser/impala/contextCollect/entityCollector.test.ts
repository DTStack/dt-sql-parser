import { ParseTreeListener } from 'antlr4ng';
import fs from 'fs';
import path from 'path';
import { ImpalaSqlParserListener } from 'src/lib/impala/ImpalaSqlParserListener';
import {
    AttrName,
    isCommonEntityContext,
    isFuncEntityContext,
    StmtContextType,
} from 'src/parser/common/entityCollector';
import { EntityContextType } from 'src/parser/common/types';
import { ImpalaEntityCollector, ImpalaSQL, ImpalaSqlSplitListener } from 'src/parser/impala';

const commonSql = fs.readFileSync(path.join(__dirname, 'fixtures', 'common.sql'), 'utf-8');

describe('ImpalaSQL entity collector tests', () => {
    const impalaSql = new ImpalaSQL();
    const parseTree = impalaSql.parse(commonSql);
    const splitListener = new ImpalaSqlSplitListener();
    impalaSql.listen(splitListener as ImpalaSqlParserListener, parseTree);

    test('validate common sql', () => {
        expect(impalaSql.validate(commonSql).length).toBe(0);
    });

    test('split results', () => {
        expect(splitListener.statementsContext.length).toBe(14);
    });

    test('create table by like', () => {
        const columnCreateTableContext = splitListener.statementsContext[0];

        const collectListener = new ImpalaEntityCollector(commonSql);
        impalaSql.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const tableCreateEntity = allEntities[0];
        const likeTableEntity = allEntities[1];

        expect(tableCreateEntity.entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(tableCreateEntity.text).toBe('new_Table');
        expect(tableCreateEntity.position).toEqual({
            endColumn: 23,
            endIndex: 21,
            line: 1,
            startColumn: 14,
            startIndex: 13,
        });

        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_TABLE_STMT
        );
        expect(tableCreateEntity.belongStmt.position).toEqual({
            endColumn: 38,
            endIndex: 36,
            endLine: 1,
            startColumn: 1,
            startIndex: 0,
            startLine: 1,
        });
        if (isCommonEntityContext(tableCreateEntity)) {
            expect(tableCreateEntity.relatedEntities.length).toBe(1);
            expect(tableCreateEntity.columns).toBeUndefined();
            expect(tableCreateEntity.relatedEntities[0]).toBe(likeTableEntity);
        }
        expect(likeTableEntity.text).toBe('old_table');
        expect(likeTableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(likeTableEntity.belongStmt).toBe(tableCreateEntity.belongStmt);
    });

    test('create table by columns', () => {
        const columnCreateTableContext = splitListener.statementsContext[1];

        const collectListener = new ImpalaEntityCollector(commonSql);
        impalaSql.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const tableCreateEntity = allEntities[0];

        expect(tableCreateEntity.entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(tableCreateEntity.text).toBe('census');
        expect(tableCreateEntity.position).toEqual({
            endColumn: 20,
            endIndex: 58,
            line: 3,
            startColumn: 14,
            startIndex: 53,
        });

        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_TABLE_STMT
        );
        expect(tableCreateEntity.belongStmt.position).toEqual({
            endColumn: 138,
            endIndex: 176,
            endLine: 3,
            startColumn: 1,
            startIndex: 40,
            startLine: 3,
        });
        expect(tableCreateEntity[AttrName.comment]).toEqual({
            text: "'common census table comment'",
            endColumn: 138,
            endIndex: 176,
            line: 3,
            startColumn: 109,
            startIndex: 148,
        });

        if (isCommonEntityContext(tableCreateEntity)) {
            expect(tableCreateEntity.relatedEntities).toBeNull();
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
            expect(tableCreateEntity.columns[0][AttrName.colType]).toEqual({
                text: 'string',
                endColumn: 33,
                endIndex: 71,
                line: 3,
                startColumn: 27,
                startIndex: 66,
            });
            expect(tableCreateEntity.columns[1][AttrName.colType]).toEqual({
                text: 'int',
                endColumn: 50,
                endIndex: 88,
                line: 3,
                startColumn: 47,
                startIndex: 86,
            });
            expect(tableCreateEntity.columns[1][AttrName.comment]).toEqual({
                text: "'year comment'",
                endColumn: 73,
                endIndex: 111,
                line: 3,
                startColumn: 59,
                startIndex: 98,
            });
        }
    });

    test('create table by select', () => {
        const columnCreateTableContext = splitListener.statementsContext[2];

        const collectListener = new ImpalaEntityCollector(commonSql);
        impalaSql.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const tableCreateEntity = allEntities[0];
        const fromCreateEntity = allEntities[1];

        expect(tableCreateEntity.entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(tableCreateEntity.text).toBe('sorted_census_data');
        expect(tableCreateEntity.position).toEqual({
            endColumn: 32,
            endIndex: 210,
            line: 5,
            startColumn: 14,
            startIndex: 193,
        });

        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_TABLE_STMT
        );
        expect(tableCreateEntity.belongStmt.position).toEqual({
            endColumn: 30,
            endIndex: 339,
            endLine: 9,
            startColumn: 1,
            startIndex: 180,
            startLine: 5,
        });

        if (isCommonEntityContext(tableCreateEntity)) {
            expect(tableCreateEntity.relatedEntities.length).toBe(1);
            expect(tableCreateEntity.columns).toBeUndefined();

            expect(fromCreateEntity.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
            expect(fromCreateEntity.text).toBe('unsorted_census_data');
            expect(tableCreateEntity.relatedEntities[0]).toBe(fromCreateEntity);
        }
    });

    test('create kudu table by select', () => {
        const columnCreateTableContext = splitListener.statementsContext[3];

        const collectListener = new ImpalaEntityCollector(commonSql);
        impalaSql.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const tableCreateEntity = allEntities[0];
        const fromCreateEntity = allEntities[1];

        expect(tableCreateEntity.entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(tableCreateEntity.text).toBe('ctas_t1');
        expect(tableCreateEntity.position).toEqual({
            endColumn: 21,
            endIndex: 362,
            line: 11,
            startColumn: 14,
            startIndex: 356,
        });

        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_TABLE_STMT
        );
        expect(tableCreateEntity.belongStmt.position).toEqual({
            endColumn: 31,
            endIndex: 466,
            endLine: 14,
            startColumn: 1,
            startIndex: 343,
            startLine: 11,
        });

        if (isCommonEntityContext(tableCreateEntity)) {
            expect(tableCreateEntity.relatedEntities.length).toBe(1);
            expect(tableCreateEntity.columns).toBeUndefined();

            expect(fromCreateEntity.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
            expect(fromCreateEntity.text).toBe('kudu_t1');
            expect(tableCreateEntity.relatedEntities[0]).toBe(fromCreateEntity);
        }
    });

    test('create kudu table by columns', () => {
        const columnCreateTableContext = splitListener.statementsContext[4];

        const collectListener = new ImpalaEntityCollector(commonSql);
        impalaSql.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const tableCreateEntity = allEntities[0];

        expect(tableCreateEntity.entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(tableCreateEntity.text).toBe('kudu_t3');
        expect(tableCreateEntity.position).toEqual({
            endColumn: 21,
            endIndex: 489,
            line: 16,
            startColumn: 14,
            startIndex: 483,
        });
        expect(tableCreateEntity[AttrName.comment]).toEqual({
            text: "'kudu table comment'",
            endColumn: 31,
            endIndex: 840,
            line: 23,
            startColumn: 11,
            startIndex: 821,
        });

        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_TABLE_STMT
        );
        expect(tableCreateEntity.belongStmt.position).toEqual({
            endColumn: 17,
            endIndex: 857,
            endLine: 24,
            startColumn: 1,
            startIndex: 470,
            startLine: 16,
        });

        if (isCommonEntityContext(tableCreateEntity)) {
            expect(tableCreateEntity.relatedEntities).toBeNull();
            expect(tableCreateEntity.columns.length).toBe(4);
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
            expect(tableCreateEntity.columns[0][AttrName.colType]).toEqual({
                text: 'BIGINT',
                endColumn: 32,
                endIndex: 500,
                line: 16,
                startColumn: 26,
                startIndex: 495,
            });
            expect(tableCreateEntity.columns[0][AttrName.comment]).toEqual({
                text: "'id column comment'",
                endColumn: 60,
                endIndex: 528,
                line: 16,
                startColumn: 41,
                startIndex: 510,
            });
            expect(tableCreateEntity.columns[1][AttrName.colType]).toEqual({
                text: 'INT',
                endColumn: 70,
                endIndex: 538,
                line: 16,
                startColumn: 67,
                startIndex: 536,
            });
            expect(tableCreateEntity.columns[2][AttrName.colType]).toEqual({
                text: 'STRING',
                endColumn: 80,
                endIndex: 548,
                line: 16,
                startColumn: 74,
                startIndex: 543,
            });
            expect(tableCreateEntity.columns[2][AttrName.comment]).toEqual({
                text: "'string column comment'",
                endColumn: 112,
                endIndex: 580,
                line: 16,
                startColumn: 89,
                startIndex: 558,
            });
        }
    });

    test('create view', () => {
        const columnCreateTableContext = splitListener.statementsContext[5];

        const collectListener = new ImpalaEntityCollector(commonSql);
        impalaSql.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const viewCreateEntity = allEntities[0];
        const fromCreateEntity = allEntities[1];

        expect(viewCreateEntity.entityContextType).toBe(EntityContextType.VIEW_CREATE);
        expect(viewCreateEntity.text).toBe('my_view');
        expect(viewCreateEntity.position).toEqual({
            endColumn: 20,
            endIndex: 879,
            line: 26,
            startColumn: 13,
            startIndex: 873,
        });

        expect(viewCreateEntity[AttrName.comment]).toEqual({
            text: "'view comment'",
            endColumn: 113,
            endIndex: 972,
            line: 26,
            startColumn: 99,
            startIndex: 959,
        });

        expect(viewCreateEntity.belongStmt.stmtContextType).toBe(StmtContextType.CREATE_VIEW_STMT);
        expect(viewCreateEntity.belongStmt.position).toEqual({
            endColumn: 169,
            endIndex: 1028,
            endLine: 26,
            startColumn: 1,
            startIndex: 861,
            startLine: 26,
        });

        if (isCommonEntityContext(viewCreateEntity)) {
            expect(viewCreateEntity.relatedEntities[0]).toBe(fromCreateEntity);
            expect(viewCreateEntity.columns.length).toBe(2);
            viewCreateEntity.columns.forEach((columEntity) => {
                expect(columEntity.entityContextType).toBe(EntityContextType.COLUMN_CREATE);
                expect(columEntity.belongStmt).toBe(viewCreateEntity.belongStmt);
                expect(columEntity.text).toBe(
                    commonSql.slice(
                        columEntity.position.startIndex,
                        columEntity.position.endIndex + 1
                    )
                );
            });
            expect(viewCreateEntity.columns[0][AttrName.comment]).toEqual({
                text: "'this is number col'",
                endColumn: 54,
                endIndex: 913,
                line: 26,
                startColumn: 34,
                startIndex: 894,
            });
            expect(viewCreateEntity.columns[1][AttrName.comment]).toEqual({
                text: "'this is number age'",
                endColumn: 89,
                endIndex: 948,
                line: 26,
                startColumn: 69,
                startIndex: 929,
            });
        }

        expect(fromCreateEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(fromCreateEntity.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        expect(fromCreateEntity.text).toBe('my_table');
    });

    test('insert table select', () => {
        const columnCreateTableContext = splitListener.statementsContext[6];

        const collectListener = new ImpalaEntityCollector(commonSql);
        impalaSql.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const tableInsertEntity = allEntities[0];
        const fromTableEntity = allEntities[1];

        expect(tableInsertEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(tableInsertEntity.text).toBe('t2');
        expect(tableInsertEntity.position).toEqual({
            endColumn: 15,
            endIndex: 1045,
            line: 28,
            startColumn: 13,
            startIndex: 1044,
        });

        expect(tableInsertEntity.belongStmt.stmtContextType).toBe(StmtContextType.INSERT_STMT);
        expect(tableInsertEntity.belongStmt.position).toEqual({
            endColumn: 40,
            endIndex: 1070,
            endLine: 28,
            startColumn: 1,
            startIndex: 1032,
            startLine: 28,
        });
        if (isCommonEntityContext(tableInsertEntity)) {
            expect(tableInsertEntity.columns).toBeUndefined();
        }

        expect(fromTableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(fromTableEntity.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        expect(fromTableEntity.text).toBe('t1');
        expect(fromTableEntity.belongStmt.parentStmt).toBe(tableInsertEntity.belongStmt);
    });

    test('select table', () => {
        const columnCreateTableContext = splitListener.statementsContext[7];

        const collectListener = new ImpalaEntityCollector(commonSql);
        impalaSql.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const tableEntity1 = allEntities[0];

        expect(tableEntity1.entityContextType).toBe(EntityContextType.TABLE);
        expect(tableEntity1.text).toBe('a');
        expect(tableEntity1.position).toEqual({
            endColumn: 16,
            endIndex: 1088,
            line: 30,
            startColumn: 15,
            startIndex: 1088,
        });

        expect(tableEntity1.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        expect(tableEntity1.belongStmt.position).toEqual({
            endColumn: 16,
            endIndex: 1088,
            endLine: 30,
            startColumn: 1,
            startIndex: 1074,
            startLine: 30,
        });
        if (isCommonEntityContext(tableEntity1)) {
            expect(tableEntity1.columns).toBeUndefined();
            expect(tableEntity1.relatedEntities).toBeNull();
        }
    });

    test('select table join', () => {
        const columnCreateTableContext = splitListener.statementsContext[8];

        const collectListener = new ImpalaEntityCollector(commonSql);
        impalaSql.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const tableEntity1 = allEntities[0];
        const tableEntity2 = allEntities[1];

        expect(tableEntity1.entityContextType).toBe(EntityContextType.TABLE);
        expect(tableEntity1.text).toBe('table1');
        expect(tableEntity1.position).toEqual({
            endColumn: 32,
            endIndex: 1122,
            line: 32,
            startColumn: 26,
            startIndex: 1117,
        });
        expect(tableEntity1[AttrName.alias]).toEqual({
            text: 't1',
            endColumn: 38,
            endIndex: 1128,
            line: 32,
            startColumn: 36,
            startIndex: 1127,
        });

        expect(tableEntity1.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        expect(tableEntity1.belongStmt.position).toEqual({
            endColumn: 20,
            endIndex: 1217,
            endLine: 34,
            startColumn: 1,
            startIndex: 1092,
            startLine: 32,
        });
        if (isCommonEntityContext(tableEntity1)) {
            expect(tableEntity1.columns).toBeUndefined();
            expect(tableEntity1.relatedEntities).toBeNull();

            expect(tableEntity2.entityContextType).toBe(EntityContextType.TABLE);
            expect(tableEntity2.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
            expect(tableEntity2.text).toBe('table2');
            expect(tableEntity2[AttrName.alias]).toEqual({
                text: 't2',
                endColumn: 56,
                endIndex: 1146,
                line: 32,
                startColumn: 54,
                startIndex: 1145,
            });
        }

        if (isCommonEntityContext(tableEntity2)) {
            expect(tableEntity2.columns).toBeUndefined();
            expect(tableEntity2.relatedEntities).toBeNull();
            expect(tableEntity2.belongStmt).toBe(tableEntity1.belongStmt);
        }
    });

    test('create db', () => {
        const columnCreateTableContext = splitListener.statementsContext[9];

        const collectListener = new ImpalaEntityCollector(commonSql);
        impalaSql.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const dbEntity = allEntities[0];

        expect(dbEntity.entityContextType).toBe(EntityContextType.DATABASE_CREATE);
        expect(dbEntity.text).toBe('my_db');
        expect(dbEntity.position).toEqual({
            endColumn: 22,
            endIndex: 1241,
            line: 36,
            startColumn: 17,
            startIndex: 1237,
        });

        expect(dbEntity[AttrName.comment]).toEqual({
            text: "'my first db'",
            endColumn: 44,
            endIndex: 1263,
            line: 36,
            startColumn: 31,
            startIndex: 1251,
        });

        expect(dbEntity.belongStmt.stmtContextType).toBe(StmtContextType.CREATE_DATABASE_STMT);
        expect(dbEntity.belongStmt.position).toEqual({
            endColumn: 74,
            endIndex: 1293,
            endLine: 36,
            startColumn: 1,
            startIndex: 1221,
            startLine: 36,
        });

        if (isCommonEntityContext(dbEntity)) {
            expect(dbEntity.columns).toBeUndefined();
            expect(dbEntity.relatedEntities).toBeNull();
        }
    });

    test('create schema', () => {
        const columnCreateTableContext = splitListener.statementsContext[10];

        const collectListener = new ImpalaEntityCollector(commonSql);
        impalaSql.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const schemaEntity = allEntities[0];

        expect(schemaEntity.entityContextType).toBe(EntityContextType.DATABASE_CREATE);
        expect(schemaEntity.text).toBe('my_schema');
        expect(schemaEntity.position).toEqual({
            endColumn: 38,
            endIndex: 1333,
            line: 38,
            startColumn: 29,
            startIndex: 1325,
        });
        expect(schemaEntity[AttrName.comment]).toEqual({
            text: "'my first schema'",
            endColumn: 64,
            endIndex: 1359,
            line: 38,
            startColumn: 47,
            startIndex: 1343,
        });

        expect(schemaEntity.belongStmt.stmtContextType).toBe(StmtContextType.CREATE_DATABASE_STMT);
        expect(schemaEntity.belongStmt.position).toEqual({
            endColumn: 94,
            endIndex: 1389,
            endLine: 38,
            startColumn: 1,
            startIndex: 1297,
            startLine: 38,
        });
        if (isCommonEntityContext(schemaEntity)) {
            expect(schemaEntity.columns).toBeUndefined();
            expect(schemaEntity.relatedEntities).toBeNull();
        }
    });

    test('comment dbName', () => {
        const columnCreateTableContext = splitListener.statementsContext[11];

        const collectListener = new ImpalaEntityCollector(commonSql);
        impalaSql.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const dbEntity = allEntities[0];

        expect(dbEntity.entityContextType).toBe(EntityContextType.DATABASE);
        expect(dbEntity.text).toBe('my_database');
        expect(dbEntity.position).toEqual({
            endColumn: 32,
            endIndex: 1423,
            line: 40,
            startColumn: 21,
            startIndex: 1413,
        });

        // 由于没有处理 comment 语句，所以当前是处于 COMMON_STMT
        expect(dbEntity.belongStmt.stmtContextType).toBe(StmtContextType.COMMON_STMT);
        expect(dbEntity.belongStmt.position).toEqual({
            endColumn: 59,
            endIndex: 1450,
            endLine: 40,
            startColumn: 1,
            startIndex: 1393,
            startLine: 40,
        });

        if (isCommonEntityContext(dbEntity)) {
            expect(dbEntity.columns).toBeUndefined();
            expect(dbEntity.relatedEntities).toBeNull();
        }
    });

    test('create aggregate function', () => {
        const columnCreateTableContext = splitListener.statementsContext[12];

        const collectListener = new ImpalaEntityCollector(commonSql);
        impalaSql.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const functionEntity = allEntities[0];

        expect(functionEntity.entityContextType).toBe(EntityContextType.FUNCTION_CREATE);
        expect(functionEntity.text).toBe('function_name');
        expect(functionEntity.position).toEqual({
            endColumn: 40,
            endIndex: 1491,
            line: 42,
            startColumn: 27,
            startIndex: 1479,
        });

        expect(functionEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_FUNCTION_STMT
        );
        expect(functionEntity.belongStmt.position).toEqual({
            endColumn: 26,
            endIndex: 1608,
            endLine: 46,
            startColumn: 1,
            startIndex: 1453,
            startLine: 42,
        });

        if (isFuncEntityContext(functionEntity)) {
            expect(functionEntity.arguments).toBeNull();
            expect(functionEntity.relatedEntities).toBeNull();
        }
    });

    test('create function', () => {
        const columnCreateTableContext = splitListener.statementsContext[13];

        const collectListener = new ImpalaEntityCollector(commonSql);
        impalaSql.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const functionEntity = allEntities[0];

        expect(functionEntity.entityContextType).toBe(EntityContextType.FUNCTION_CREATE);
        expect(functionEntity.text).toBe('function_name');
        expect(functionEntity.position).toEqual({
            endColumn: 30,
            endIndex: 1640,
            line: 48,
            startColumn: 17,
            startIndex: 1628,
        });

        expect(functionEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_FUNCTION_STMT
        );
        expect(functionEntity.belongStmt.position).toEqual({
            endColumn: 21,
            endIndex: 1734,
            endLine: 51,
            startColumn: 1,
            startIndex: 1612,
            startLine: 48,
        });
        if (isFuncEntityContext(functionEntity)) {
            expect(functionEntity.arguments).toBeNull();
            expect(functionEntity.relatedEntities).toBeNull();
        }
    });
});
