import fs from 'fs';
import path from 'path';
import MySQL from 'src/parser/mysql';
import { MySqlEntityCollector, MysqlSplitListener } from 'src/parser/mysql';
import { ParseTreeListener } from 'antlr4ng';
import { MySqlParserListener } from 'src/lib/mysql/MySqlParserListener';
import { EntityContextType } from 'src/parser/common/basic-parser-types';
import { StmtContextType } from 'src/parser/common/entityCollector';

const commonSql = fs.readFileSync(path.join(__dirname, 'fixtures', 'common.sql'), 'utf-8');

describe('MySQL entity collector tests', () => {
    const mysql = new MySQL();
    const parseTree = mysql.parse(commonSql);
    const splitListener = new MysqlSplitListener();
    mysql.listen(splitListener as MySqlParserListener, parseTree);

    test('validate common sql', () => {
        expect(mysql.validate(commonSql).length).toBe(0);
    });

    test('split results', () => {
        expect(splitListener.statementsContext.length).toBe(10);
    });

    test('create table by columns', () => {
        const columnCreateTableContext = splitListener.statementsContext[0];

        const collectListener = new MySqlEntityCollector(commonSql);
        mysql.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const tableCreateEntity = allEntities[0];

        expect(tableCreateEntity.entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(tableCreateEntity.text).toBe('new_tb_with_col');
        expect(tableCreateEntity.position).toEqual({
            startIndex: 13,
            endIndex: 27,
            line: 1,
            startColumn: 14,
            endColumn: 29,
        });

        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_TABLE_STMT
        );
        expect(tableCreateEntity.belongStmt.position).toEqual({
            startIndex: 0,
            endIndex: 45,
            startLine: 1,
            endLine: 1,
            startColumn: 1,
            endColumn: 47,
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
        const createTableBySelectContext = splitListener.statementsContext[1];

        const collectListener = new MySqlEntityCollector(commonSql);
        mysql.listen(collectListener as ParseTreeListener, createTableBySelectContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(3);

        const tableCreateEntity = allEntities[0];

        expect(tableCreateEntity.entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(tableCreateEntity.text).toBe('new_tb_from_old');
        expect(tableCreateEntity.position).toEqual({
            startIndex: 62,
            endIndex: 76,
            line: 3,
            startColumn: 14,
            endColumn: 29,
        });

        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_TABLE_STMT
        );
        expect(tableCreateEntity.belongStmt.position).toEqual({
            startIndex: 49,
            endIndex: 265,
            startLine: 3,
            endLine: 12,
            startColumn: 1,
            endColumn: 34,
        });

        expect(tableCreateEntity.columns).toBeNull();

        expect(tableCreateEntity.relatedEntities.length).toBe(2);
        tableCreateEntity.relatedEntities.forEach((relatedEntity) => {
            expect(relatedEntity.entityContextType).toBe(EntityContextType.TABLE);
            expect(allEntities.some((en) => relatedEntity === en)).toBeTruthy();
        });

        expect(allEntities[1].text).toBe('old_tb1');
        expect(allEntities[1].belongStmt.rootStmt).toBe(allEntities[0].belongStmt);
        expect(allEntities[1].position).toEqual({
            startIndex: 161,
            endIndex: 167,
            line: 8,
            startColumn: 9,
            endColumn: 16,
        });

        expect(allEntities[2].text).toBe('old_tb2');
        expect(allEntities[2].belongStmt.rootStmt).toBe(allEntities[0].belongStmt);
        expect(allEntities[2].position).toEqual({
            startIndex: 187,
            endIndex: 193,
            line: 10,
            startColumn: 9,
            endColumn: 16,
        });
    });

    test('create table like', () => {
        const createTableLikeContext = splitListener.statementsContext[2];

        const collectListener = new MySqlEntityCollector(commonSql);
        mysql.listen(collectListener as ParseTreeListener, createTableLikeContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const tableCreateEntity = allEntities[0];
        const originTableEntity = allEntities[1];

        expect(tableCreateEntity.entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(tableCreateEntity.text).toBe('new_tb_like_old');
        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_TABLE_STMT
        );

        expect(tableCreateEntity.columns).toBeNull();
        expect(tableCreateEntity.relatedEntities.length).toBe(1);
        expect(tableCreateEntity.relatedEntities[0]).toBe(originTableEntity);

        expect(originTableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(originTableEntity.text).toBe('old_tb');
        expect(originTableEntity.belongStmt).toBe(tableCreateEntity.belongStmt);
    });

    test('common select from table', () => {
        const selectTableContext = splitListener.statementsContext[3];
        const collectListener = new MySqlEntityCollector(commonSql);
        mysql.listen(collectListener as ParseTreeListener, selectTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const tableEntity = allEntities[0];

        expect(tableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(tableEntity.text).toBe('select_tb');
        expect(tableEntity.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);

        expect(tableEntity.columns).toBeNull();
        expect(tableEntity.relatedEntities).toBeNull();
    });

    test('select into from table', () => {
        const selectTableContext = splitListener.statementsContext[4];
        const collectListener = new MySqlEntityCollector(commonSql);
        mysql.listen(collectListener as ParseTreeListener, selectTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const tableEntity = allEntities[0];

        expect(tableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(tableEntity.text).toBe('into_select_tb');
        expect(tableEntity.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);

        expect(tableEntity.columns).toBeNull();
        expect(tableEntity.relatedEntities).toBeNull();
    });

    test('select from table join', () => {
        const selectTableContext = splitListener.statementsContext[5];
        const collectListener = new MySqlEntityCollector(commonSql);
        mysql.listen(collectListener as ParseTreeListener, selectTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const tableEntity1 = allEntities[0];
        const tableEntity2 = allEntities[1];

        expect(tableEntity1.entityContextType).toBe(EntityContextType.TABLE);
        expect(tableEntity1.text).toBe('from_tb');
        expect(tableEntity1.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);

        expect(tableEntity1.columns).toBeNull();
        expect(tableEntity1.relatedEntities).toBeNull();

        expect(tableEntity2.entityContextType).toBe(EntityContextType.TABLE);
        expect(tableEntity2.text).toBe('join_tb');
        expect(tableEntity2.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);

        expect(tableEntity2.columns).toBeNull();
        expect(tableEntity2.relatedEntities).toBeNull();

        expect(tableEntity1.belongStmt).toBe(tableEntity2.belongStmt);
    });

    test('insert into table values', () => {
        const insertTableContext = splitListener.statementsContext[6];
        const collectListener = new MySqlEntityCollector(commonSql);
        mysql.listen(collectListener as ParseTreeListener, insertTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const tableEntity = allEntities[0];

        expect(tableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(tableEntity.text).toBe('insert_tb');
        expect(tableEntity.belongStmt.stmtContextType).toBe(StmtContextType.INSERT_STMT);

        expect(tableEntity.columns).toBeNull();
        expect(tableEntity.relatedEntities).toBeNull();
    });

    test('insert into table select', () => {
        const insertTableContext = splitListener.statementsContext[7];
        const collectListener = new MySqlEntityCollector(commonSql);
        mysql.listen(collectListener as ParseTreeListener, insertTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(3);

        const insertTableEntity = allEntities[0];
        const fromTableEntity1 = allEntities[1];
        const fromTableEntity2 = allEntities[2];

        expect(insertTableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(insertTableEntity.text).toBe('insert_from_tb');
        expect(insertTableEntity.belongStmt.stmtContextType).toBe(StmtContextType.INSERT_STMT);

        expect(fromTableEntity1.entityContextType).toBe(EntityContextType.TABLE);
        expect(fromTableEntity1.text).toBe('from_tb1');
        expect(fromTableEntity1.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);

        expect(fromTableEntity2.entityContextType).toBe(EntityContextType.TABLE);
        expect(fromTableEntity2.text).toBe('from_tb2');
        expect(fromTableEntity2.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);

        expect(fromTableEntity1.belongStmt.parentStmt).toBe(insertTableEntity.belongStmt);
        expect(fromTableEntity2.belongStmt.parentStmt).toBe(insertTableEntity.belongStmt);
        expect(fromTableEntity1.belongStmt.rootStmt).toBe(insertTableEntity.belongStmt);
        expect(fromTableEntity2.belongStmt.rootStmt).toBe(insertTableEntity.belongStmt);
    });

    test('create view with col', () => {
        const insertTableContext = splitListener.statementsContext[8];
        const collectListener = new MySqlEntityCollector(commonSql);
        mysql.listen(collectListener as ParseTreeListener, insertTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        expect(allEntities[0].entityContextType).toBe(EntityContextType.VIEW_CREATE);
        expect(allEntities[0].text).toBe('new_view');
        expect(allEntities[0].belongStmt.stmtContextType).toBe(StmtContextType.CREATE_VIEW_STMT);

        expect(allEntities[0].columns.length).toBe(2);
        expect(allEntities[0].columns[0].text).toBe('col1');
        expect(allEntities[0].columns[1].text).toBe('col2');
        expect(allEntities[0].columns[0].entityContextType).toBe(EntityContextType.COLUMN_CREATE);
        expect(allEntities[0].columns[0].belongStmt).toBe(allEntities[0].belongStmt);
    });

    test('create view as select table', () => {
        const insertTableContext = splitListener.statementsContext[9];
        const collectListener = new MySqlEntityCollector(commonSql);
        mysql.listen(collectListener as ParseTreeListener, insertTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        expect(allEntities[0].entityContextType).toBe(EntityContextType.VIEW_CREATE);
        expect(allEntities[0].text).toBe('db.new_view');
        expect(allEntities[0].belongStmt.stmtContextType).toBe(StmtContextType.CREATE_VIEW_STMT);
    });
});
