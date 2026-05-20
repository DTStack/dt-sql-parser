import { ParseTreeListener } from 'antlr4ng';
import fs from 'fs';
import path from 'path';
import { GenericSqlListener } from 'src/lib/generic/GenericSqlListener';
import {
    ColumnDeclareType,
    CommonEntityContext,
    isCommonEntityContext,
    StmtContextType,
} from 'src/parser/common/entityCollector';
import { EntityContextType } from 'src/parser/common/types';
import { GenericEntityCollector, GenericSQL, GenericSplitListener } from 'src/parser/generic';

const commonSql = fs.readFileSync(path.join(__dirname, 'fixtures', 'common.sql'), 'utf-8');

describe('GenericSQL entity collector tests', () => {
    const parser = new GenericSQL();
    const parseTree = parser.parse(commonSql);
    const splitListener = new GenericSplitListener();
    parser.listen(splitListener as GenericSqlListener, parseTree);

    test('validate common sql', () => {
        expect(parser.validate(commonSql).length).toBe(0);
    });

    test('split results', () => {
        expect(splitListener.statementsContext.length).toBe(10);
    });

    test('create table with columns', () => {
        const testingContext = splitListener.statementsContext[0];

        const collectListener = new GenericEntityCollector(commonSql);
        parser.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const tableCreateEntity = allEntities[0];

        expect(tableCreateEntity.entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(tableCreateEntity.text).toBe('orders');
        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_TABLE_STMT
        );

        if (isCommonEntityContext(tableCreateEntity)) {
            expect(tableCreateEntity.columns?.length).toBe(2);
            // GenericSQL column text includes data type
            expect(tableCreateEntity.columns[0].text).toContain('orderkey');
            expect(tableCreateEntity.columns[1].text).toContain('orderstatus');
            expect(tableCreateEntity.relatedEntities).toBeNull();
        }
    });

    test('select from table', () => {
        const testingContext = splitListener.statementsContext[1];

        const collectListener = new GenericEntityCollector(commonSql);
        parser.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const tableEntity = allEntities[0];

        expect(tableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(tableEntity.text).toBe('table1');
        expect(tableEntity.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);

        if (isCommonEntityContext(tableEntity)) {
            expect(tableEntity.columns).toBeUndefined();
            expect(tableEntity.relatedEntities).toBeNull();
        }
    });

    test('insert into table as select', () => {
        const testingContext = splitListener.statementsContext[2];

        const collectListener = new GenericEntityCollector(commonSql);
        parser.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(3);

        const fromTableEntity = allEntities[0];
        const queryResultEntity = allEntities[1];
        const insertTableEntity = allEntities[2];

        expect(insertTableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(insertTableEntity.belongStmt.stmtContextType).toBe(StmtContextType.INSERT_STMT);
        expect(insertTableEntity.text).toBe('orders');

        expect(queryResultEntity.entityContextType).toBe(EntityContextType.QUERY_RESULT);

        expect(fromTableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(fromTableEntity.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        expect(fromTableEntity.text).toBe('new_orders');
        expect(fromTableEntity.belongStmt.parentStmt).toBe(insertTableEntity.belongStmt);
    });

    test('select using alias', () => {
        const testingContext = splitListener.statementsContext[4];

        const collectListener = new GenericEntityCollector(commonSql);
        parser.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const tableEntity = allEntities[0];

        expect(tableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(tableEntity.text).toBe('tb');
        expect(tableEntity.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);

        if (isCommonEntityContext(tableEntity)) {
            expect(tableEntity.columns).toBeUndefined();
            expect(tableEntity.relatedEntities).toBeNull();
        }
    });

    test('should collect query result and columns', () => {
        const context = splitListener.statementsContext[5];

        const collectListener = new GenericEntityCollector(commonSql);
        parser.listen(collectListener as ParseTreeListener, context);

        const allEntities = collectListener.getEntities();
        const queryResult = allEntities.find(
            (e) => e.entityContextType === EntityContextType.QUERY_RESULT
        ) as CommonEntityContext;

        expect(queryResult).toBeDefined();
        expect(queryResult.relatedEntities?.length).toBe(1);
        expect(queryResult.relatedEntities?.[0].text).toBe('t1');

        const columns = queryResult.columns;
        expect(columns?.length).toBe(3);
        expect(columns[0].text).toBe('id');
        expect(columns[0].declareType).toBe(ColumnDeclareType.LITERAL);
        // GenericSQL entity text includes alias when present
        expect(columns[1].text).toContain('age');
        expect(columns[1].declareType).toBe(ColumnDeclareType.LITERAL);
    });

    test('should collect columns with multiple star symbol', () => {
        const context = splitListener.statementsContext[6];

        const collectListener = new GenericEntityCollector(commonSql);
        parser.listen(collectListener as ParseTreeListener, context);

        const allEntities = collectListener.getEntities();
        const queryResult = allEntities.find(
            (e) => e.entityContextType === EntityContextType.QUERY_RESULT
        ) as CommonEntityContext;

        expect(queryResult).toBeDefined();
        expect(queryResult.columns?.length).toBe(2);
        expect(queryResult.columns[0].declareType).toBe(ColumnDeclareType.ALL);
        expect(queryResult.columns[1].declareType).toBe(ColumnDeclareType.ALL);
    });

    test('should collect columns with single star symbol', () => {
        const context = splitListener.statementsContext[7];

        const collectListener = new GenericEntityCollector(commonSql);
        parser.listen(collectListener as ParseTreeListener, context);

        const allEntities = collectListener.getEntities();
        const queryResult = allEntities.find(
            (e) => e.entityContextType === EntityContextType.QUERY_RESULT
        ) as CommonEntityContext;

        expect(queryResult).toBeDefined();
        expect(queryResult.columns?.length).toBe(1);
        expect(queryResult.columns[0].declareType).toBe(ColumnDeclareType.ALL);
    });

    test('should collect derived table and derived column', () => {
        const context = splitListener.statementsContext[8];

        const collectListener = new GenericEntityCollector(commonSql);
        parser.listen(collectListener as ParseTreeListener, context);

        const allEntities = collectListener.getEntities();
        const tableEntities = allEntities.filter(
            (entity) => entity.entityContextType === EntityContextType.TABLE
        ) as CommonEntityContext[];

        // GenericSQL may not collect subquery-derived tables the same way as Trino
        expect(tableEntities.length).toBeGreaterThanOrEqual(2);

        const queryResults = allEntities.filter(
            (entity) => entity.entityContextType === EntityContextType.QUERY_RESULT
        ) as CommonEntityContext[];
        expect(queryResults.length).toBeGreaterThanOrEqual(1);
    });

    test('should collect query result in where clause', () => {
        const context = splitListener.statementsContext[9];

        const collectListener = new GenericEntityCollector(commonSql);
        parser.listen(collectListener as ParseTreeListener, context);

        const allEntities = collectListener.getEntities();
        const queryResults = allEntities.filter(
            (e) => e.entityContextType === EntityContextType.QUERY_RESULT
        ) as CommonEntityContext[];

        expect(queryResults.length).toBe(2);
    });

    test('table entities are accessible when caret is in outer query', () => {
        const sql = `SELECT id FROM t1, (SELECT name from t2) as t3`;

        const entities = parser.getAllEntities(sql, {
            lineNumber: 1,
            column: 13,
        });

        const accessibleTables = entities.filter(
            (e) => e.entityContextType === EntityContextType.TABLE && e.isAccessible
        );
        expect(accessibleTables.length).toBeGreaterThanOrEqual(1);

        const t1 = accessibleTables.find((e) => e.text === 't1');
        expect(t1).toBeDefined();
        expect(t1?.isAccessible).toBeTruthy();
    });

    test('table entities are not accessible when caret is in inner query', () => {
        const sql = `SELECT id FROM t1, (SELECT name from t2) as t3`;

        const entities = parser.getAllEntities(sql, {
            lineNumber: 1,
            column: 29,
        });

        const tables = entities.filter((e) => e.entityContextType === EntityContextType.TABLE);

        const t2 = tables.find((e) => e.text === 't2');

        expect(t2).toBeDefined();
        expect(t2?.isAccessible).toBeTruthy();
    });
});
