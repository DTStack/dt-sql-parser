import fs from 'fs';
import path from 'path';
import TrinoSQL from 'src/parser/trino';
import { TrinoSqlSplitListener, TrinoEntityCollector } from 'src/parser/trino';
import { ParseTreeListener } from 'antlr4ng';
import { TrinoSqlListener } from 'src/lib/trinosql/TrinoSqlListener';
import { EntityContextType } from 'src/parser/common/basic-parser-types';
import { StmtContextType } from 'src/parser/common/entityCollector';

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
        expect(splitListener.statementsContext.length).toBe(9);
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

        expect(tableCreateEntity.relatedEntities.length).toBe(1);

        const beLikedEntity = allEntities[1];

        expect(tableCreateEntity.relatedEntities[0]).toBe(beLikedEntity);
        expect(beLikedEntity.text).toBe('like_table');
        expect(beLikedEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(beLikedEntity.belongStmt).toBe(tableCreateEntity.belongStmt);
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

        expect(tableCreateEntity.columns.length).toBe(2);
        tableCreateEntity.columns.forEach((columEntity) => {
            expect(columEntity.entityContextType).toBe(EntityContextType.COLUMN_CREATE);
            expect(columEntity.belongStmt).toBe(tableCreateEntity.belongStmt);
            expect(columEntity.text).toBe(
                commonSql.slice(columEntity.position.startIndex, columEntity.position.endIndex + 1)
            );
        });
        expect(tableCreateEntity.relatedEntities.length).toBe(1);
        expect(tableCreateEntity.relatedEntities[0]).toBe(originTableEntity);

        expect(originTableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(originTableEntity.text).toBe('t');
        expect(originTableEntity.belongStmt.rootStmt).toBe(tableCreateEntity.belongStmt);
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

        expect(tableCreateEntity.columns).toBeNull();
        expect(tableCreateEntity.relatedEntities.length).toBe(1);
        expect(tableCreateEntity.relatedEntities[0]).toBe(originTableEntity);

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

        expect(tableCreateEntity.columns).toBeNull();
        expect(tableCreateEntity.relatedEntities.length).toBe(1);
        expect(tableCreateEntity.relatedEntities[0]).toBe(originTableEntity);

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

        expect(tableCreateEntity.columns).toBeNull();
        expect(tableCreateEntity.relatedEntities).toBeNull();
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
});
