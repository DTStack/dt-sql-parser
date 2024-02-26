import fs from 'fs';
import path from 'path';
import { ImpalaSqlSplitListener } from 'src/parser/impala';
import { EntityContextType } from 'src/parser/common/basic-parser-types';
import { StmtContextType } from 'src/parser/common/entityCollector';
import ImpalaSQL from 'src/parser/impala';
import { ImpalaSqlParserListener } from 'src/lib/impala/ImpalaSqlParserListener';
import ImpalaEntityCollector from 'src/parser/impala/impalaEntityCollector';
import { ParseTreeListener } from 'antlr4ng';

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
        expect(splitListener.statementsContext.length).toBe(9);
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

        expect(tableCreateEntity.relatedEntities.length).toBe(1);
        expect(tableCreateEntity.columns).toBeNull();
        expect(tableCreateEntity.relatedEntities[0]).toBe(likeTableEntity);

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
            endColumn: 77,
            endIndex: 115,
            endLine: 3,
            startColumn: 1,
            startIndex: 40,
            startLine: 3,
        });

        expect(tableCreateEntity.relatedEntities).toBeNull();
        expect(tableCreateEntity.columns.length).toBe(2);
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
            endIndex: 149,
            line: 5,
            startColumn: 14,
            startIndex: 132,
        });

        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_TABLE_STMT
        );
        expect(tableCreateEntity.belongStmt.position).toEqual({
            endColumn: 30,
            endIndex: 278,
            endLine: 9,
            startColumn: 1,
            startIndex: 119,
            startLine: 5,
        });

        expect(tableCreateEntity.relatedEntities.length).toBe(1);
        expect(tableCreateEntity.columns).toBeNull();

        expect(fromCreateEntity.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        expect(fromCreateEntity.text).toBe('unsorted_census_data');
        expect(tableCreateEntity.relatedEntities[0]).toBe(fromCreateEntity);
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
            endIndex: 301,
            line: 11,
            startColumn: 14,
            startIndex: 295,
        });

        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_TABLE_STMT
        );
        expect(tableCreateEntity.belongStmt.position).toEqual({
            endColumn: 31,
            endIndex: 405,
            endLine: 14,
            startColumn: 1,
            startIndex: 282,
            startLine: 11,
        });

        expect(tableCreateEntity.relatedEntities.length).toBe(1);
        expect(tableCreateEntity.columns).toBeNull();

        expect(fromCreateEntity.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        expect(fromCreateEntity.text).toBe('kudu_t1');
        expect(tableCreateEntity.relatedEntities[0]).toBe(fromCreateEntity);
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
            endIndex: 428,
            line: 16,
            startColumn: 14,
            startIndex: 422,
        });

        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_TABLE_STMT
        );
        expect(tableCreateEntity.belongStmt.position).toEqual({
            endColumn: 17,
            endIndex: 705,
            endLine: 23,
            startColumn: 1,
            startIndex: 409,
            startLine: 16,
        });

        expect(tableCreateEntity.relatedEntities).toBeNull();
        expect(tableCreateEntity.columns.length).toBe(4);
        tableCreateEntity.columns.forEach((columEntity) => {
            expect(columEntity.entityContextType).toBe(EntityContextType.COLUMN_CREATE);
            expect(columEntity.belongStmt).toBe(tableCreateEntity.belongStmt);
            expect(columEntity.text).toBe(
                commonSql.slice(columEntity.position.startIndex, columEntity.position.endIndex + 1)
            );
        });
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
            endIndex: 727,
            line: 25,
            startColumn: 13,
            startIndex: 721,
        });

        expect(viewCreateEntity.belongStmt.stmtContextType).toBe(StmtContextType.CREATE_VIEW_STMT);
        expect(viewCreateEntity.belongStmt.position).toEqual({
            endColumn: 146,
            endIndex: 853,
            endLine: 25,
            startColumn: 1,
            startIndex: 709,
            startLine: 25,
        });

        expect(viewCreateEntity.relatedEntities[0]).toBe(fromCreateEntity);
        expect(viewCreateEntity.columns.length).toBe(2);
        viewCreateEntity.columns.forEach((columEntity) => {
            expect(columEntity.entityContextType).toBe(EntityContextType.COLUMN_CREATE);
            expect(columEntity.belongStmt).toBe(viewCreateEntity.belongStmt);
            expect(columEntity.text).toBe(
                commonSql.slice(columEntity.position.startIndex, columEntity.position.endIndex + 1)
            );
        });

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
            endIndex: 870,
            line: 27,
            startColumn: 13,
            startIndex: 869,
        });

        expect(tableInsertEntity.belongStmt.stmtContextType).toBe(StmtContextType.INSERT_STMT);
        expect(tableInsertEntity.belongStmt.position).toEqual({
            endColumn: 40,
            endIndex: 895,
            endLine: 27,
            startColumn: 1,
            startIndex: 857,
            startLine: 27,
        });

        expect(tableInsertEntity.columns).toBeNull();

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
            endIndex: 913,
            line: 29,
            startColumn: 15,
            startIndex: 913,
        });

        expect(tableEntity1.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        expect(tableEntity1.belongStmt.position).toEqual({
            endColumn: 16,
            endIndex: 913,
            endLine: 29,
            startColumn: 1,
            startIndex: 899,
            startLine: 29,
        });

        expect(tableEntity1.columns).toBeNull();
        expect(tableEntity1.relatedEntities).toBeNull();
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
        expect(tableEntity1.text).toBe('t1');
        expect(tableEntity1.position).toEqual({
            endColumn: 28,
            endIndex: 943,
            line: 31,
            startColumn: 26,
            startIndex: 942,
        });

        expect(tableEntity1.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        expect(tableEntity1.belongStmt.position).toEqual({
            endColumn: 20,
            endIndex: 1022,
            endLine: 33,
            startColumn: 1,
            startIndex: 917,
            startLine: 31,
        });

        expect(tableEntity1.columns).toBeNull();
        expect(tableEntity1.relatedEntities).toBeNull();

        expect(tableEntity2.entityContextType).toBe(EntityContextType.TABLE);
        expect(tableEntity2.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        expect(tableEntity2.text).toBe('t2');
        expect(tableEntity2.columns).toBeNull();
        expect(tableEntity2.relatedEntities).toBeNull();
        expect(tableEntity2.belongStmt).toBe(tableEntity1.belongStmt);
    });
});
