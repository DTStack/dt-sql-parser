import { ParseTreeListener } from 'antlr4ng';
import fs from 'fs';
import path from 'path';
import { HiveSqlParserListener } from 'src/lib/hive/HiveSqlParserListener';
import {
    AttrName,
    isCommonEntityContext,
    isFuncEntityContext,
    StmtContextType,
} from 'src/parser/common/entityCollector';
import { EntityContextType } from 'src/parser/common/types';
import { HiveEntityCollector, HiveSQL } from 'src/parser/hive';
import { HiveSqlSplitListener } from 'src/parser/hive/hiveSplitListener';

const commonSql = fs.readFileSync(path.join(__dirname, 'fixtures', 'common.sql'), 'utf-8');

describe('Hive entity collector tests', () => {
    const hiveSql = new HiveSQL();
    const parseTree = hiveSql.parse(commonSql);
    const splitListener = new HiveSqlSplitListener();
    hiveSql.listen(splitListener as HiveSqlParserListener, parseTree);

    test('validate common sql', () => {
        expect(hiveSql.validate(commonSql).length).toBe(0);
    });

    test('split results', () => {
        expect(splitListener.statementsContext.length).toBe(21);
    });

    test('create table by like', () => {
        const columnCreateTableContext = splitListener.statementsContext[0];

        const collectListener = new HiveEntityCollector(commonSql);
        hiveSql.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const tableCreateEntity = allEntities[0];
        const tableLikeEntity = allEntities[1];

        expect(tableCreateEntity.entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(tableCreateEntity.text).toBe('copy_table');
        expect(tableCreateEntity.position).toEqual({
            endColumn: 48,
            endIndex: 46,
            line: 1,
            startColumn: 38,
            startIndex: 37,
        });

        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_TABLE_STMT
        );
        expect(tableCreateEntity.belongStmt.position).toEqual({
            endColumn: 66,
            endIndex: 64,
            startLine: 1,
            endLine: 1,
            startIndex: 0,
            startColumn: 1,
        });

        if (isCommonEntityContext(tableCreateEntity)) {
            expect(tableCreateEntity.relatedEntities).not.toBeNull();
            expect(tableCreateEntity.relatedEntities[0]).toEqual(tableLikeEntity);
            expect(tableCreateEntity.columns).toBeUndefined();
        }

        expect(tableLikeEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(tableLikeEntity.text).toBe('origin_table');
        expect(tableLikeEntity.belongStmt).toBe(tableCreateEntity.belongStmt);
    });

    test('create table by columns', () => {
        const columnCreateTableContext = splitListener.statementsContext[1];

        const collectListener = new HiveEntityCollector(commonSql);
        hiveSql.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const tableCreateEntity = allEntities[0];

        expect(tableCreateEntity.entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(tableCreateEntity.text).toBe('list_bucket_multiple');
        expect(tableCreateEntity.position).toEqual({
            endColumn: 67,
            endIndex: 133,
            line: 3,
            startColumn: 47,
            startIndex: 114,
        });

        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_TABLE_STMT
        );
        expect(tableCreateEntity.belongStmt.position).toEqual({
            endColumn: 132,
            endIndex: 198,
            endLine: 3,
            startColumn: 1,
            startIndex: 68,
            startLine: 3,
        });
        if (isCommonEntityContext(tableCreateEntity)) {
            expect(tableCreateEntity.relatedEntities).toBeNull();
            expect(tableCreateEntity.columns).not.toBeNull();
            expect(tableCreateEntity.columns.length).toBe(3);
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
        }
    });

    test('create table by select', () => {
        const columnCreateTableContext = splitListener.statementsContext[2];

        const collectListener = new HiveEntityCollector(commonSql);
        hiveSql.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const tableCreateEntity = allEntities[0];
        const tableFromEntity = allEntities[1];

        expect(tableCreateEntity.entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(tableCreateEntity.text).toBe('derived_table');
        expect(tableCreateEntity.position).toEqual({
            endColumn: 41,
            endIndex: 241,
            line: 5,
            startColumn: 28,
            startIndex: 229,
        });

        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_TABLE_STMT
        );
        expect(tableCreateEntity.belongStmt.position).toEqual({
            endColumn: 17,
            endIndex: 279,
            endLine: 9,
            startColumn: 1,
            startIndex: 202,
            startLine: 5,
        });
        if (isCommonEntityContext(tableCreateEntity)) {
            expect(tableCreateEntity.relatedEntities).not.toBeNull();
            expect(tableCreateEntity.relatedEntities[0]).toBe(tableFromEntity);
            expect(tableCreateEntity.columns).toBeUndefined();
        }
        expect(tableFromEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(tableFromEntity.text).toBe('origin_table');
        expect(tableFromEntity.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
    });

    test('create view by select', () => {
        const columnCreateTableContext = splitListener.statementsContext[3];

        const collectListener = new HiveEntityCollector(commonSql);
        hiveSql.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const viewCreateEntity = allEntities[0];
        const viewSelectEntity = allEntities[1];

        expect(viewCreateEntity.entityContextType).toBe(EntityContextType.VIEW_CREATE);
        expect(viewCreateEntity.text).toBe('mydb.bro_view');
        expect(viewCreateEntity.position).toEqual({
            endColumn: 26,
            endIndex: 307,
            line: 11,
            startColumn: 13,
            startIndex: 295,
        });

        expect(viewCreateEntity.belongStmt.stmtContextType).toBe(StmtContextType.CREATE_VIEW_STMT);
        expect(viewCreateEntity.belongStmt.position).toEqual({
            endColumn: 31,
            endIndex: 338,
            endLine: 12,
            startColumn: 1,
            startIndex: 283,
            startLine: 11,
        });
        if (isCommonEntityContext(viewCreateEntity)) {
            expect(viewCreateEntity.relatedEntities).not.toBeNull();
            expect(viewCreateEntity.relatedEntities[0]).toBe(viewSelectEntity);
            expect(viewCreateEntity.columns).toBeUndefined();
        }
        expect(viewSelectEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(viewSelectEntity.text).toBe('mydb.sale_tbl');
        expect(viewSelectEntity.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
    });

    test('create view columns by select', () => {
        const columnCreateTableContext = splitListener.statementsContext[4];

        const collectListener = new HiveEntityCollector(commonSql);
        hiveSql.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const viewCreateEntity = allEntities[0];
        const viewSelectEntity = allEntities[1];

        expect(viewCreateEntity.entityContextType).toBe(EntityContextType.VIEW_CREATE);
        expect(viewCreateEntity.text).toBe('mydb.task_view');
        expect(viewCreateEntity.position).toEqual({
            endColumn: 27,
            endIndex: 367,
            line: 14,
            startColumn: 13,
            startIndex: 354,
        });

        expect(viewCreateEntity.belongStmt.stmtContextType).toBe(StmtContextType.CREATE_VIEW_STMT);
        expect(viewCreateEntity.belongStmt.position).toEqual({
            endColumn: 21,
            endIndex: 596,
            endLine: 25,
            startColumn: 1,
            startIndex: 342,
            startLine: 14,
        });

        expect(viewCreateEntity[AttrName.comment]).toEqual({
            text: "'一个任务信息视图'",
            endColumn: 19,
            line: 19,
            startColumn: 9,
            startIndex: 470,
            endIndex: 479,
        });
        if (isCommonEntityContext(viewCreateEntity)) {
            expect(viewCreateEntity.relatedEntities).not.toBeNull();
            expect(viewCreateEntity.relatedEntities[0]).toBe(viewSelectEntity);
            expect(viewCreateEntity.columns).not.toBeNull();
            expect(viewCreateEntity.columns.length).toBe(3);
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
                text: "'任务id'",
                endColumn: 26,
                line: 15,
                startColumn: 20,
                startIndex: 390,
                endIndex: 395,
            });
            expect(viewCreateEntity.columns[1][AttrName.comment]).toEqual({
                text: "'任务名称'",
                endColumn: 28,
                line: 16,
                startColumn: 22,
                startIndex: 419,
                endIndex: 424,
            });
            expect(viewCreateEntity.columns[2][AttrName.comment]).toEqual({
                text: "'任务运行时长'",
                endColumn: 33,
                line: 17,
                startColumn: 25,
                startIndex: 451,
                endIndex: 458,
            });
        }

        expect(viewSelectEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(viewSelectEntity.text).toBe('task_tbl');
        expect(viewSelectEntity.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
    });

    test('create materialized view by select', () => {
        const columnCreateTableContext = splitListener.statementsContext[5];

        const collectListener = new HiveEntityCollector(commonSql);
        hiveSql.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const viewCreateEntity = allEntities[0];
        const viewSelectEntity = allEntities[1];

        expect(viewCreateEntity.entityContextType).toBe(EntityContextType.VIEW_CREATE);
        expect(viewCreateEntity.text).toBe('mydb.bro_view');
        expect(viewCreateEntity.position).toEqual({
            endColumn: 53,
            endIndex: 651,
            line: 27,
            startColumn: 40,
            startIndex: 639,
        });

        expect(viewCreateEntity.belongStmt.stmtContextType).toBe(StmtContextType.CREATE_VIEW_STMT);
        expect(viewCreateEntity.belongStmt.position).toEqual({
            endColumn: 31,
            endIndex: 715,
            endLine: 30,
            startColumn: 1,
            startIndex: 600,
            startLine: 27,
        });
        expect(viewCreateEntity[AttrName.comment]).toEqual({
            text: "'一个测试视图'",
            endColumn: 17,
            line: 29,
            startColumn: 9,
            startIndex: 677,
            endIndex: 684,
        });
        if (isCommonEntityContext(viewCreateEntity)) {
            expect(viewCreateEntity.relatedEntities).not.toBeNull();
            expect(viewCreateEntity.relatedEntities[0]).toBe(viewSelectEntity);
            expect(viewCreateEntity.columns).toBeUndefined();
        }
        expect(viewSelectEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(viewSelectEntity.text).toBe('mydb.sale_tbl');
        expect(viewSelectEntity.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
    });

    test('select table default', () => {
        const columnCreateTableContext = splitListener.statementsContext[6];

        const collectListener = new HiveEntityCollector(commonSql);
        hiveSql.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const selectTableEntity = allEntities[0];

        expect(selectTableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(selectTableEntity.text).toBe('table_name_1');
        expect(selectTableEntity.position).toEqual({
            endColumn: 36,
            endIndex: 753,
            line: 32,
            startColumn: 24,
            startIndex: 742,
        });

        expect(selectTableEntity.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        expect(selectTableEntity.belongStmt.position).toEqual({
            endColumn: 36,
            endIndex: 753,
            endLine: 32,
            startColumn: 1,
            startIndex: 719,
            startLine: 32,
        });
        if (isCommonEntityContext(selectTableEntity)) {
            expect(selectTableEntity.columns).toBeUndefined();
            expect(selectTableEntity.relatedEntities).toBeNull();
        }
    });

    test('select table with join', () => {
        const columnCreateTableContext = splitListener.statementsContext[7];

        const collectListener = new HiveEntityCollector(commonSql);
        hiveSql.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const selectTableEntity = allEntities[0];
        const joinTableEntity = allEntities[1];

        expect(selectTableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(selectTableEntity.text).toBe('a');
        expect(selectTableEntity.position).toEqual({
            endColumn: 18,
            endIndex: 773,
            line: 34,
            startColumn: 17,
            startIndex: 773,
        });

        expect(selectTableEntity.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        expect(selectTableEntity.belongStmt.position).toEqual({
            endColumn: 74,
            endIndex: 829,
            endLine: 34,
            startColumn: 1,
            startIndex: 757,
            startLine: 34,
        });
        if (isCommonEntityContext(selectTableEntity)) {
            expect(selectTableEntity.columns).toBeUndefined();
            expect(selectTableEntity.relatedEntities).toBeNull();
        }

        expect(selectTableEntity.belongStmt).toEqual(joinTableEntity.belongStmt);
        expect(joinTableEntity.text).toBe('b');
        if (isCommonEntityContext(joinTableEntity)) {
            expect(joinTableEntity.columns).toBeUndefined();
            expect(joinTableEntity.relatedEntities).toBeNull();
        }
    });

    test('from select table', () => {
        const columnCreateTableContext = splitListener.statementsContext[8];

        const collectListener = new HiveEntityCollector(commonSql);
        hiveSql.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const selectTableEntity = allEntities[0];

        expect(selectTableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(selectTableEntity.text).toBe('table_name_1');
        expect(selectTableEntity.position).toEqual({
            endColumn: 18,
            endIndex: 849,
            line: 36,
            startColumn: 6,
            startIndex: 838,
        });

        expect(selectTableEntity.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        expect(selectTableEntity.belongStmt.position).toEqual({
            endColumn: 36,
            endIndex: 867,
            endLine: 36,
            startColumn: 1,
            startIndex: 833,
            startLine: 36,
        });
        if (isCommonEntityContext(selectTableEntity)) {
            expect(selectTableEntity?.columns)?.toBeUndefined();
            expect(selectTableEntity.relatedEntities).toBeNull();
        }
    });

    test('from select table with join', () => {
        const columnCreateTableContext = splitListener.statementsContext[9];

        const collectListener = new HiveEntityCollector(commonSql);
        hiveSql.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const selectTableEntity = allEntities[0];
        const joinTableEntity = allEntities[1];

        expect(selectTableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(selectTableEntity.text).toBe('a');
        expect(selectTableEntity.position).toEqual({
            endColumn: 7,
            endIndex: 876,
            line: 38,
            startColumn: 6,
            startIndex: 876,
        });

        expect(selectTableEntity.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        expect(selectTableEntity.belongStmt.position).toEqual({
            endColumn: 74,
            endIndex: 943,
            endLine: 38,
            startColumn: 1,
            startIndex: 871,
            startLine: 38,
        });
        if (isCommonEntityContext(selectTableEntity)) {
            expect(selectTableEntity.columns).toBeUndefined();
            expect(selectTableEntity.relatedEntities).toBeNull();
        }
        expect(selectTableEntity.belongStmt).toEqual(joinTableEntity.belongStmt);
        expect(joinTableEntity.text).toBe('b');
        if (isCommonEntityContext(joinTableEntity)) {
            expect(joinTableEntity.columns).toBeUndefined();
            expect(joinTableEntity.relatedEntities).toBeNull();
        }
    });

    test('insert table with values', () => {
        const columnCreateTableContext = splitListener.statementsContext[10];

        const collectListener = new HiveEntityCollector(commonSql);
        hiveSql.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const insertTableEntity = allEntities[0];

        expect(insertTableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(insertTableEntity.text).toBe('students');
        expect(insertTableEntity.position).toEqual({
            endColumn: 27,
            endIndex: 972,
            line: 40,
            startColumn: 19,
            startIndex: 965,
        });

        expect(insertTableEntity.belongStmt.stmtContextType).toBe(StmtContextType.INSERT_STMT);
        expect(insertTableEntity.belongStmt.position).toEqual({
            endColumn: 66,
            endIndex: 1045,
            endLine: 41,
            startColumn: 1,
            startIndex: 947,
            startLine: 40,
        });
        if (isCommonEntityContext(insertTableEntity)) {
            expect(insertTableEntity.columns).toBeUndefined();
            expect(insertTableEntity.relatedEntities).toBeNull();
        }
    });

    test('insert table use select', () => {
        const columnCreateTableContext = splitListener.statementsContext[11];

        const collectListener = new HiveEntityCollector(commonSql);
        hiveSql.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const insertTableEntity = allEntities[0];
        const fromTableEntity = allEntities[1];

        expect(insertTableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(insertTableEntity.text).toBe('table_name');
        expect(insertTableEntity.position).toEqual({
            endColumn: 23,
            endIndex: 1070,
            line: 43,
            startColumn: 13,
            startIndex: 1061,
        });

        expect(insertTableEntity.belongStmt.stmtContextType).toBe(StmtContextType.INSERT_STMT);
        expect(insertTableEntity.belongStmt.position).toEqual({
            endColumn: 18,
            endIndex: 1183,
            endLine: 46,
            startColumn: 1,
            startIndex: 1049,
            startLine: 43,
        });
        if (isCommonEntityContext(insertTableEntity)) {
            expect(insertTableEntity.columns).toBeUndefined();
            expect(insertTableEntity.relatedEntities).toBeNull();
        }

        expect(fromTableEntity.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        expect(fromTableEntity.text).toBe('source_table');
        expect(fromTableEntity.belongStmt.parentStmt).toEqual(insertTableEntity.belongStmt);
        expect(fromTableEntity.belongStmt.rootStmt).toBe(insertTableEntity.belongStmt);
    });

    test('from insert table use select', () => {
        const columnCreateTableContext = splitListener.statementsContext[12];

        const collectListener = new HiveEntityCollector(commonSql);
        hiveSql.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const fromTableEntity = allEntities[0];
        const insertTableEntity = allEntities[1];

        expect(insertTableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(insertTableEntity.text).toBe('page_view');
        expect(insertTableEntity.position).toEqual({
            endColumn: 33,
            endIndex: 1241,
            line: 49,
            startColumn: 24,
            startIndex: 1233,
        });

        expect(insertTableEntity.belongStmt.stmtContextType).toBe(StmtContextType.INSERT_STMT);
        expect(insertTableEntity.belongStmt.position).toEqual({
            endColumn: 93,
            endIndex: 1370,
            endLine: 50,
            startColumn: 1,
            startIndex: 1187,
            startLine: 48,
        });
        if (isCommonEntityContext(insertTableEntity)) {
            expect(insertTableEntity.columns).toBeUndefined();
            expect(insertTableEntity.relatedEntities).toBeNull();
        }

        expect(fromTableEntity.belongStmt.stmtContextType).toBe(StmtContextType.INSERT_STMT);
        expect(fromTableEntity.text).toBe('page_view_stg');
        expect(fromTableEntity.belongStmt).toEqual(insertTableEntity.belongStmt);
    });

    test('create db', () => {
        const columnCreateTableContext = splitListener.statementsContext[13];

        const collectListener = new HiveEntityCollector(commonSql);
        hiveSql.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const dbEntity = allEntities[0];

        expect(dbEntity.entityContextType).toBe(EntityContextType.DATABASE_CREATE);
        expect(dbEntity.text).toBe('mydb');
        expect(dbEntity.position).toEqual({
            endColumn: 21,
            endIndex: 1393,
            line: 52,
            startColumn: 17,
            startIndex: 1390,
        });

        expect(dbEntity.belongStmt.stmtContextType).toBe(StmtContextType.CREATE_DATABASE_STMT);
        expect(dbEntity.belongStmt.position).toEqual({
            endColumn: 21,
            endIndex: 1393,
            endLine: 52,
            startColumn: 1,
            startIndex: 1374,
            startLine: 52,
        });
        if (isCommonEntityContext(dbEntity)) {
            expect(dbEntity.columns).toBeUndefined();
            expect(dbEntity.relatedEntities).toBeNull();
        }
    });

    test('create remote db', () => {
        const columnCreateTableContext = splitListener.statementsContext[14];

        const collectListener = new HiveEntityCollector(commonSql);
        hiveSql.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const dbEntity = allEntities[0];

        expect(dbEntity.entityContextType).toBe(EntityContextType.DATABASE_CREATE);
        expect(dbEntity.text).toBe('mydb');
        expect(dbEntity.position).toEqual({
            endColumn: 28,
            endIndex: 1423,
            line: 54,
            startColumn: 24,
            startIndex: 1420,
        });

        expect(dbEntity.belongStmt.stmtContextType).toBe(StmtContextType.CREATE_DATABASE_STMT);
        expect(dbEntity.belongStmt.position).toEqual({
            endColumn: 28,
            endIndex: 1423,
            endLine: 54,
            startColumn: 1,
            startIndex: 1397,
            startLine: 54,
        });

        if (isCommonEntityContext(dbEntity)) {
            expect(dbEntity.columns).toBeUndefined();
            expect(dbEntity.relatedEntities).toBeNull();
        }
    });

    test('show locks db', () => {
        const dbContext = splitListener.statementsContext[15];

        const collectListener = new HiveEntityCollector(commonSql);
        hiveSql.listen(collectListener as ParseTreeListener, dbContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const dbEntity = allEntities[0];

        expect(dbEntity.entityContextType).toBe(EntityContextType.DATABASE);
        expect(dbEntity.text).toBe('db1');
        expect(dbEntity.position).toEqual({
            endColumn: 24,
            endIndex: 1449,
            line: 56,
            startColumn: 21,
            startIndex: 1447,
        });

        expect(dbEntity.belongStmt.stmtContextType).toBe(StmtContextType.COMMON_STMT);
        expect(dbEntity.belongStmt.position).toEqual({
            endColumn: 25,
            endIndex: 1450,
            endLine: 56,
            startColumn: 1,
            startIndex: 1427,
            startLine: 56,
        });

        if (isCommonEntityContext(dbEntity)) {
            expect(dbEntity.columns).toBeUndefined();
            expect(dbEntity.relatedEntities).toBeNull();
        }
    });

    test('create function', () => {
        const functionCreateContext = splitListener.statementsContext[16];

        const collectListener = new HiveEntityCollector(commonSql);
        hiveSql.listen(collectListener as ParseTreeListener, functionCreateContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const functionEntity = allEntities[0];

        expect(functionEntity.entityContextType).toBe(EntityContextType.FUNCTION_CREATE);
        expect(functionEntity.text).toBe('base_analizer');
        expect(functionEntity.position).toEqual({
            endColumn: 30,
            endIndex: 1481,
            line: 58,
            startColumn: 17,
            startIndex: 1469,
        });

        expect(functionEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_FUNCTION_STMT
        );
        expect(functionEntity.belongStmt.position).toEqual({
            endColumn: 30,
            endIndex: 1481,
            endLine: 58,
            startColumn: 17,
            startIndex: 1469,
            startLine: 58,
        });

        if (isFuncEntityContext(functionEntity)) {
            expect(functionEntity.arguments).toBeNull();
            expect(functionEntity.relatedEntities).toBeNull();
        }
    });

    test('create temporary function', () => {
        const functionCreateContext = splitListener.statementsContext[17];

        const collectListener = new HiveEntityCollector(commonSql);
        hiveSql.listen(collectListener as ParseTreeListener, functionCreateContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const functionEntity = allEntities[0];

        expect(functionEntity.entityContextType).toBe(EntityContextType.FUNCTION_CREATE);
        expect(functionEntity.text).toBe('flat_analizer');
        expect(functionEntity.position).toEqual({
            endColumn: 40,
            endIndex: 1549,
            line: 60,
            startColumn: 27,
            startIndex: 1537,
        });

        expect(functionEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_FUNCTION_STMT
        );
        expect(functionEntity.belongStmt.position).toEqual({
            endColumn: 40,
            endIndex: 1549,
            endLine: 60,
            startColumn: 27,
            startIndex: 1537,
            startLine: 60,
        });
        if (isFuncEntityContext(functionEntity)) {
            expect(functionEntity.arguments).toBeNull();
            expect(functionEntity.relatedEntities).toBeNull();
        }
    });
    test('create table by columns with attributes', () => {
        const columnCreateTableContext = splitListener.statementsContext[18];

        const collectListener = new HiveEntityCollector(commonSql);
        hiveSql.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const tableCreateEntity = allEntities[0];

        expect(tableCreateEntity.entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(tableCreateEntity.text).toBe('test_change');
        expect(tableCreateEntity.position).toEqual({
            endColumn: 25,
            endIndex: 1604,
            line: 62,
            startColumn: 14,
            startIndex: 1594,
        });

        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_TABLE_STMT
        );
        expect(tableCreateEntity.belongStmt.position).toEqual({
            endColumn: 104,
            endIndex: 1683,
            endLine: 62,
            startColumn: 1,
            startIndex: 1581,
            startLine: 62,
        });
        expect(tableCreateEntity[AttrName.comment]).toEqual({
            text: "'table test comment'",
            endColumn: 104,
            line: 62,
            startColumn: 84,
            startIndex: 1664,
            endIndex: 1683,
        });
        if (isCommonEntityContext(tableCreateEntity)) {
            expect(tableCreateEntity.relatedEntities).toBeNull();
            expect(tableCreateEntity.columns).not.toBeNull();
            expect(tableCreateEntity.columns.length).toBe(3);
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
            expect(tableCreateEntity.columns[0].text).toBe('a');
            expect(tableCreateEntity.columns[0][AttrName.colType]).toEqual({
                text: 'int',
                startIndex: 1609,
                endIndex: 1611,
                line: 62,
                startColumn: 29,
                endColumn: 32,
            });
            expect(tableCreateEntity.columns[1].text).toBe('b');
            expect(tableCreateEntity.columns[1][AttrName.colType]).toEqual({
                text: 'varchar(255)',
                startIndex: 1616,
                endIndex: 1627,
                line: 62,
                startColumn: 36,
                endColumn: 48,
            });
            expect(tableCreateEntity.columns[1][AttrName.comment]).toEqual({
                text: "'column 2'",
                startIndex: 1637,
                endIndex: 1646,
                line: 62,
                startColumn: 57,
                endColumn: 67,
            });
            expect(tableCreateEntity.columns[2].text).toBe('c');
            expect(tableCreateEntity.columns[2][AttrName.colType]).toEqual({
                text: 'int',
                startIndex: 1651,
                endIndex: 1653,
                line: 62,
                startColumn: 71,
                endColumn: 74,
            });
        }
    });
    test('create db with comment', () => {
        const columnCreateTableContext = splitListener.statementsContext[19];

        const collectListener = new HiveEntityCollector(commonSql);
        hiveSql.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const dbEntity = allEntities[0];

        expect(dbEntity.entityContextType).toBe(EntityContextType.DATABASE_CREATE);
        expect(dbEntity.text).toBe('testdb');
        expect(dbEntity.position).toEqual({
            endColumn: 23,
            endIndex: 1708,
            line: 64,
            startColumn: 17,
            startIndex: 1703,
        });

        expect(dbEntity.belongStmt.stmtContextType).toBe(StmtContextType.CREATE_DATABASE_STMT);
        expect(dbEntity.belongStmt.position).toEqual({
            endColumn: 69,
            endIndex: 1754,
            endLine: 64,
            startColumn: 1,
            startIndex: 1687,
            startLine: 64,
        });
        expect(dbEntity[AttrName.comment]).toEqual({
            text: "'test database'",
            endColumn: 47,
            endIndex: 1732,
            line: 64,
            startColumn: 32,
            startIndex: 1718,
        });
        if (isCommonEntityContext(dbEntity)) {
            expect(dbEntity.columns).toBeUndefined();
            expect(dbEntity.relatedEntities).toBeNull();
        }
    });
    test('select table with join with alias', () => {
        const columnCreateTableContext = splitListener.statementsContext[20];

        const collectListener = new HiveEntityCollector(commonSql);
        hiveSql.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const selectTableEntity = allEntities[0];
        const joinTableEntity = allEntities[1];

        expect(selectTableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(selectTableEntity.text).toBe('table_busi');
        expect(selectTableEntity.position).toEqual({
            endColumn: 27,
            endIndex: 1783,
            line: 66,
            startColumn: 17,
            startIndex: 1774,
        });

        expect(selectTableEntity.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        expect(selectTableEntity.belongStmt.position).toEqual({
            endColumn: 97,
            endIndex: 1853,
            endLine: 66,
            startColumn: 1,
            startIndex: 1758,
            startLine: 66,
        });
        expect(selectTableEntity[AttrName.alias]).toEqual({
            text: 'a',
            endColumn: 29,
            endIndex: 1785,
            line: 66,
            startColumn: 28,
            startIndex: 1785,
        });
        if (isCommonEntityContext(selectTableEntity)) {
            expect(selectTableEntity.columns).toBeUndefined();
            expect(selectTableEntity.relatedEntities).toBeNull();
        }

        expect(selectTableEntity.belongStmt).toEqual(joinTableEntity.belongStmt);
        expect(joinTableEntity.text).toBe('table_issue');
        expect(joinTableEntity[AttrName.alias]).toEqual({
            text: 'b',
            endColumn: 48,
            endIndex: 1804,
            line: 66,
            startColumn: 47,
            startIndex: 1804,
        });
        if (isCommonEntityContext(joinTableEntity)) {
            expect(joinTableEntity.columns).toBeUndefined();
            expect(joinTableEntity.relatedEntities).toBeNull();
        }
    });

    test('table entities are accessible when caret is in outer query', () => {
        const hiveSql = new HiveSQL();
        const sql = `SELECT id FROM t1, (SELECT name from t2) as t3`;

        // 光标在外层查询的FROM关键字位置
        const entities = hiveSql.getAllEntities(sql, {
            lineNumber: 1,
            column: 13, // 光标在FROM位置
        });

        // 验证可以访问外层查询中的所有表
        const accessibleTables = entities.filter(
            (e) => e.entityContextType === EntityContextType.TABLE && e.isAccessible
        );
        expect(accessibleTables.length).toBe(2); // 应该至少包含t1和t3

        // 验证t1和t3是可访问的
        const t1 = accessibleTables.find((e) => e.text === 't1');
        const t3 = accessibleTables.find((e) => e._alias?.text === 't3');
        expect(t1).toBeDefined();
        expect(t1?.isAccessible).toBeTruthy();
        expect(t3).toBeDefined();
        expect(t3?.isAccessible).toBeTruthy();
    });

    test('table entities are not accessible when caret is in inner query', () => {
        const hiveSql = new HiveSQL();
        const sql = `SELECT id FROM t1, (SELECT name from t2) as t3`;

        // 光标在内层查询的name位置
        const entities = hiveSql.getAllEntities(sql, {
            lineNumber: 1,
            column: 29, // 光标在name位置
        });

        // 验证实体访问规则
        const tables = entities.filter((e) => e.entityContextType === EntityContextType.TABLE);

        // 找到t1、t2和t3
        const t1 = tables.find((e) => e.text === 't1');
        const t2 = tables.find((e) => e.text === 't2');
        const t3 = tables.find((e) => e._alias?.text === 't3');

        // t1和t3应该不可访问，因为它们在外层查询
        expect(t1).toBeDefined();
        expect(t1?.isAccessible).toBeFalsy();
        expect(t3).toBeDefined();
        expect(t3?.isAccessible).toBeFalsy();

        // t2应该可以访问，因为它在内层查询中
        expect(t2).toBeDefined();
        expect(t2?.isAccessible).toBeTruthy();
    });
});
