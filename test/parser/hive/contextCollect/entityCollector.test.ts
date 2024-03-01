import { ParseTreeListener } from 'antlr4ng';
import fs from 'fs';
import path from 'path';
import { HiveSqlParserListener } from 'src/lib/hive/HiveSqlParserListener';
import { EntityContextType } from 'src/parser/common/basic-parser-types';
import HiveSQL, { HiveEntityCollector } from 'src/parser/hive';
import { HiveSqlSplitListener } from 'src/parser/hive/hiveSplitListener';
import { StmtContextType } from 'src/parser/common/entityCollector';

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
        expect(splitListener.statementsContext.length).toBe(18);
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

        expect(tableCreateEntity.relatedEntities).not.toBeNull();
        expect(tableCreateEntity.relatedEntities[0]).toEqual(tableLikeEntity);
        expect(tableCreateEntity.columns).toBeNull();

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

        expect(tableCreateEntity.relatedEntities).toBeNull();
        expect(tableCreateEntity.columns).not.toBeNull();
        expect(tableCreateEntity.columns.length).toBe(3);
        tableCreateEntity.columns.forEach((columEntity) => {
            expect(columEntity.entityContextType).toBe(EntityContextType.COLUMN_CREATE);
            expect(columEntity.belongStmt).toBe(tableCreateEntity.belongStmt);
            expect(columEntity.text).toBe(
                commonSql.slice(columEntity.position.startIndex, columEntity.position.endIndex + 1)
            );
        });
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

        expect(tableCreateEntity.relatedEntities).not.toBeNull();
        expect(tableCreateEntity.relatedEntities[0]).toBe(tableFromEntity);
        expect(tableCreateEntity.columns).toBeNull();

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

        expect(viewCreateEntity.relatedEntities).not.toBeNull();
        expect(viewCreateEntity.relatedEntities[0]).toBe(viewSelectEntity);
        expect(viewCreateEntity.columns).toBeNull();

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

        expect(viewCreateEntity.relatedEntities).not.toBeNull();
        expect(viewCreateEntity.relatedEntities[0]).toBe(viewSelectEntity);
        expect(viewCreateEntity.columns).not.toBeNull();
        expect(viewCreateEntity.columns.length).toBe(3);
        viewCreateEntity.columns.forEach((columEntity) => {
            expect(columEntity.entityContextType).toBe(EntityContextType.COLUMN_CREATE);
            expect(columEntity.belongStmt).toBe(viewCreateEntity.belongStmt);
            expect(columEntity.text).toBe(
                commonSql.slice(columEntity.position.startIndex, columEntity.position.endIndex + 1)
            );
        });

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

        expect(viewCreateEntity.relatedEntities).not.toBeNull();
        expect(viewCreateEntity.relatedEntities[0]).toBe(viewSelectEntity);
        expect(viewCreateEntity.columns).toBeNull();

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

        expect(selectTableEntity.columns).toBeNull();
        expect(selectTableEntity.relatedEntities).toBeNull();
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

        expect(selectTableEntity.columns).toBeNull();
        expect(selectTableEntity.relatedEntities).toBeNull();

        expect(selectTableEntity.belongStmt).toEqual(joinTableEntity.belongStmt);
        expect(joinTableEntity.text).toBe('b');
        expect(joinTableEntity.columns).toBeNull();
        expect(joinTableEntity.relatedEntities).toBeNull();
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

        expect(selectTableEntity.columns).toBeNull();
        expect(selectTableEntity.relatedEntities).toBeNull();
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

        expect(selectTableEntity.columns).toBeNull();
        expect(selectTableEntity.relatedEntities).toBeNull();

        expect(selectTableEntity.belongStmt).toEqual(joinTableEntity.belongStmt);
        expect(joinTableEntity.text).toBe('b');
        expect(joinTableEntity.columns).toBeNull();
        expect(joinTableEntity.relatedEntities).toBeNull();
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

        expect(insertTableEntity.columns).toBeNull();
        expect(insertTableEntity.relatedEntities).toBeNull();
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

        expect(insertTableEntity.columns).toBeNull();
        expect(insertTableEntity.relatedEntities).toBeNull();

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

        expect(insertTableEntity.columns).toBeNull();
        expect(insertTableEntity.relatedEntities).toBeNull();

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

        expect(dbEntity.columns).toBeNull();
        expect(dbEntity.relatedEntities).toBeNull();
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

        expect(dbEntity.columns).toBeNull();
        expect(dbEntity.relatedEntities).toBeNull();
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

        expect(dbEntity.columns).toBeNull();
        expect(dbEntity.relatedEntities).toBeNull();
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

        expect(functionEntity.columns).toBeNull();
        expect(functionEntity.relatedEntities).toBeNull();
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

        expect(functionEntity.columns).toBeNull();
        expect(functionEntity.relatedEntities).toBeNull();
    });
});
