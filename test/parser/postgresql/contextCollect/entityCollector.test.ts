import { ParseTreeListener } from 'antlr4ng';
import fs from 'fs';
import path from 'path';
import { PostgreSqlParserListener } from 'src/lib/postgresql/PostgreSqlParserListener';
import {
    AttrName,
    isCommonEntityContext,
    isFuncEntityContext,
    StmtContextType,
} from 'src/parser/common/entityCollector';
import { EntityContextType } from 'src/parser/common/types';
import {
    PostgreSQL,
    PostgreSqlEntityCollector,
    PostgreSqlSplitListener,
} from 'src/parser/postgresql';

const commonSql = fs.readFileSync(path.join(__dirname, 'fixtures', 'common.sql'), 'utf-8');

describe('PostgreSql entity collector tests', () => {
    const postgreSql = new PostgreSQL();
    const parseTree = postgreSql.parse(commonSql);
    const splitListener = new PostgreSqlSplitListener();
    postgreSql.listen(splitListener as PostgreSqlParserListener, parseTree);

    test('validate common sql', () => {
        expect(postgreSql.validate(commonSql).length).toBe(0);
    });

    test('split results', () => {
        expect(splitListener.statementsContext.length).toBe(11);
    });

    test('create database', () => {
        const testingContext = splitListener.statementsContext[0];

        const collectListener = new PostgreSqlEntityCollector(commonSql);
        postgreSql.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();
        expect(allEntities.length).toBe(1);

        const sourceTableEntity = allEntities[0];

        expect(sourceTableEntity.entityContextType).toBe(EntityContextType.DATABASE_CREATE);
        expect(sourceTableEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_DATABASE_STMT
        );
        expect(sourceTableEntity.text).toBe('music2');
    });

    test('create table by select', () => {
        const testingContext = splitListener.statementsContext[1];

        const collectListener = new PostgreSqlEntityCollector(commonSql);
        postgreSql.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();
        expect(allEntities.length).toBe(3);

        const tableCreateEntity = allEntities[0];

        expect(tableCreateEntity.entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(tableCreateEntity.text).toBe('films_recent');
        expect(tableCreateEntity.position).toEqual({
            startIndex: 110,
            endIndex: 121,
            line: 6,
            startColumn: 14,
            endColumn: 26,
        });

        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_TABLE_STMT
        );
        expect(tableCreateEntity.belongStmt.position).toEqual({
            startIndex: 97,
            endIndex: 246,
            startLine: 6,
            endLine: 7,
            startColumn: 1,
            endColumn: 122,
        });
        if (isCommonEntityContext(tableCreateEntity)) {
            expect(tableCreateEntity.columns).toBeUndefined();

            expect(tableCreateEntity.relatedEntities.length).toBe(2);
            tableCreateEntity.relatedEntities.forEach((relatedEntity) => {
                expect(relatedEntity.entityContextType).toBe(EntityContextType.TABLE);
                expect(allEntities.some((en) => relatedEntity === en)).toBeTruthy();
            });
        }

        expect(allEntities[1].text).toBe('films');
        expect(allEntities[1].belongStmt.rootStmt).toBe(allEntities[0].belongStmt);
        expect(allEntities[1].position).toEqual({
            startIndex: 168,
            endIndex: 172,
            line: 7,
            startColumn: 43,
            endColumn: 48,
        });

        expect(allEntities[2].text).toBe('films2');
        expect(allEntities[2].belongStmt.rootStmt).toBe(allEntities[0].belongStmt);
        expect(allEntities[2].position).toEqual({
            startIndex: 179,
            endIndex: 184,
            line: 7,
            startColumn: 54,
            endColumn: 60,
        });
    });

    test('create table of columns', () => {
        const testingContext = splitListener.statementsContext[2];

        const collectListener = new PostgreSqlEntityCollector(commonSql);
        postgreSql.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();
        expect(allEntities.length).toBe(1);

        const tableCreateEntity = allEntities[0];

        expect(tableCreateEntity.entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(tableCreateEntity.text).toBe('distributors');
        expect(tableCreateEntity.position).toEqual({
            startIndex: 263,
            endIndex: 274,
            line: 9,
            startColumn: 14,
            endColumn: 26,
        });

        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_TABLE_STMT
        );
        expect(tableCreateEntity.belongStmt.position).toEqual({
            startIndex: 250,
            endIndex: 377,
            startLine: 9,
            endLine: 13,
            startColumn: 1,
            endColumn: 2,
        });
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
            expect(tableCreateEntity.columns[0][AttrName.colType]).toEqual({
                text: 'integer',
                startIndex: 290,
                endIndex: 296,
                line: 10,
                startColumn: 13,
                endColumn: 20,
            });
            expect(tableCreateEntity.columns[1][AttrName.colType]).toEqual({
                text: 'varchar(40)',
                startIndex: 311,
                endIndex: 321,
                line: 11,
                startColumn: 13,
                endColumn: 24,
            });
        }
    });

    test('create foreign table by columns', () => {
        const testingContext = splitListener.statementsContext[3];

        const collectListener = new PostgreSqlEntityCollector(commonSql);
        postgreSql.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();
        expect(allEntities.length).toBe(1);

        const tableCreateEntity = allEntities[0];

        expect(tableCreateEntity.entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(tableCreateEntity.text).toBe('films');
        expect(tableCreateEntity.position).toEqual({
            startIndex: 402,
            endIndex: 406,
            line: 15,
            startColumn: 22,
            endColumn: 27,
        });

        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_TABLE_STMT
        );
        expect(tableCreateEntity.belongStmt.position).toEqual({
            startIndex: 381,
            endIndex: 626,
            startLine: 15,
            endLine: 23,
            startColumn: 1,
            endColumn: 19,
        });
        if (isCommonEntityContext(tableCreateEntity)) {
            expect(tableCreateEntity.columns.length).toBe(6);
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
                text: 'char(5)',
                startIndex: 426,
                endIndex: 432,
                line: 16,
                startColumn: 17,
                endColumn: 24,
            });
            expect(tableCreateEntity.columns[1][AttrName.colType]).toEqual({
                text: 'varchar(40)',
                startIndex: 460,
                endIndex: 470,
                line: 17,
                startColumn: 17,
                endColumn: 28,
            });
            expect(tableCreateEntity.columns[3][AttrName.colType]).toEqual({
                text: 'date',
                startIndex: 532,
                endIndex: 535,
                line: 19,
                startColumn: 17,
                endColumn: 21,
            });
        }
    });

    test('create foreign table of partition', () => {
        const testingContext = splitListener.statementsContext[4];

        const collectListener = new PostgreSqlEntityCollector(commonSql);
        postgreSql.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();
        expect(allEntities.length).toBe(2);

        const tableCreateEntity = allEntities[0];

        expect(tableCreateEntity.entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(tableCreateEntity.text).toBe('measurement_y2016m07');
        expect(tableCreateEntity.position).toEqual({
            startIndex: 651,
            endIndex: 670,
            line: 25,
            startColumn: 22,
            endColumn: 42,
        });

        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_TABLE_STMT
        );
        expect(tableCreateEntity.belongStmt.position).toEqual({
            startIndex: 630,
            endIndex: 769,
            startLine: 25,
            endLine: 27,
            startColumn: 1,
            endColumn: 21,
        });
        if (isCommonEntityContext(tableCreateEntity)) {
            expect(tableCreateEntity.columns).toBeUndefined();

            expect(tableCreateEntity.relatedEntities.length).toBe(1);

            const relatedEntity = tableCreateEntity.relatedEntities[0];
            expect(relatedEntity.entityContextType).toBe(EntityContextType.TABLE);
            expect(allEntities.some((en) => relatedEntity === en)).toBeTruthy();
            expect(relatedEntity.text).toBe('measurement');
        }
    });

    test('create view by select', () => {
        const testingContext = splitListener.statementsContext[5];

        const collectListener = new PostgreSqlEntityCollector(commonSql);
        postgreSql.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();
        expect(allEntities.length).toBe(2);

        const tableCreateEntity = allEntities[0];

        expect(tableCreateEntity.entityContextType).toBe(EntityContextType.VIEW_CREATE);
        expect(tableCreateEntity.text).toBe('comedies');
        expect(tableCreateEntity.position).toEqual({
            startIndex: 785,
            endIndex: 792,
            line: 29,
            startColumn: 13,
            endColumn: 21,
        });

        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(StmtContextType.CREATE_VIEW_STMT);
        expect(tableCreateEntity.belongStmt.position).toEqual({
            startIndex: 773,
            endIndex: 849,
            startLine: 29,
            endLine: 32,
            startColumn: 1,
            endColumn: 26,
        });
        if (isCommonEntityContext(tableCreateEntity)) {
            expect(tableCreateEntity.columns).toBeUndefined();

            expect(tableCreateEntity.relatedEntities.length).toBe(1);

            const relatedEntity = tableCreateEntity.relatedEntities[0];
            expect(relatedEntity.entityContextType).toBe(EntityContextType.TABLE);
            expect(allEntities.some((en) => relatedEntity === en)).toBeTruthy();
            expect(relatedEntity.text).toBe('films');
        }
    });

    test('create materialized view by columns', () => {
        const testingContext = splitListener.statementsContext[6];

        const collectListener = new PostgreSqlEntityCollector(commonSql);
        postgreSql.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();
        expect(allEntities.length).toBe(2);

        const tableCreateEntity = allEntities[0];

        expect(tableCreateEntity.entityContextType).toBe(EntityContextType.VIEW_CREATE);
        expect(tableCreateEntity.text).toBe('comedies_mate');
        expect(tableCreateEntity.position).toEqual({
            startIndex: 878,
            endIndex: 890,
            line: 34,
            startColumn: 26,
            endColumn: 39,
        });

        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(StmtContextType.CREATE_VIEW_STMT);
        expect(tableCreateEntity.belongStmt.position).toEqual({
            startIndex: 853,
            endIndex: 1055,
            startLine: 34,
            endLine: 39,
            startColumn: 1,
            endColumn: 17,
        });
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
        }
    });

    test('select with clause', () => {
        const testingContext = splitListener.statementsContext[7];

        const collectListener = new PostgreSqlEntityCollector(commonSql);
        postgreSql.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();
        expect(allEntities.length).toBe(2);

        const tableEntity1 = allEntities[0];
        const tableEntity2 = allEntities[1];
        expect(tableEntity1.entityContextType).toBe(EntityContextType.TABLE);
        expect(tableEntity1.text).toBe('table_expression');
        expect(tableEntity1.position).toEqual({
            startIndex: 1109,
            endIndex: 1124,
            line: 41,
            startColumn: 51,
            endColumn: 67,
        });

        expect(tableEntity1.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        expect(tableEntity1.belongStmt.position).toEqual({
            startIndex: 1094,
            endIndex: 1124,
            startLine: 41,
            endLine: 41,
            startColumn: 36,
            endColumn: 67,
        });
        if (isCommonEntityContext(tableEntity1)) {
            expect(tableEntity1.columns).toBeUndefined();
            expect(tableEntity1.relatedEntities).toBeNull();
        }
        expect(tableEntity2.entityContextType).toBe(EntityContextType.TABLE);
        expect(tableEntity2.text).toBe('table_expression1');
        expect(tableEntity2.position).toEqual({
            startIndex: 1182,
            endIndex: 1198,
            line: 42,
            startColumn: 55,
            endColumn: 72,
        });

        expect(tableEntity2.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        expect(tableEntity2.belongStmt.position).toEqual({
            startIndex: 1059,
            endIndex: 1237,
            startLine: 41,
            endLine: 42,
            startColumn: 1,
            endColumn: 111,
        });
        if (isCommonEntityContext(tableEntity2)) {
            expect(tableEntity2.columns).toBeUndefined();
            expect(tableEntity2.relatedEntities).toBeNull();
        }
    });

    test('insert into table', () => {
        const testingContext = splitListener.statementsContext[8];

        const collectListener = new PostgreSqlEntityCollector(commonSql);
        postgreSql.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();
        expect(allEntities.length).toBe(1);

        const tableInsertEntity = allEntities[0];

        expect(tableInsertEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(tableInsertEntity.text).toBe('insert_films');
        expect(tableInsertEntity.position).toEqual({
            startIndex: 1253,
            endIndex: 1264,
            line: 44,
            startColumn: 13,
            endColumn: 25,
        });

        expect(tableInsertEntity.belongStmt.stmtContextType).toBe(StmtContextType.INSERT_STMT);
        expect(tableInsertEntity.belongStmt.position).toEqual({
            startIndex: 1241,
            endIndex: 1355,
            startLine: 44,
            endLine: 45,
            startColumn: 1,
            endColumn: 55,
        });
        if (isCommonEntityContext(tableInsertEntity)) {
            expect(tableInsertEntity.columns).toBeUndefined();
            expect(tableInsertEntity.relatedEntities).toBeNull();
        }
    });

    test('create function', () => {
        const testingContext = splitListener.statementsContext[9];

        const collectListener = new PostgreSqlEntityCollector(commonSql);
        postgreSql.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();
        expect(allEntities.length).toBe(1);

        const functionEntity = allEntities[0];

        expect(functionEntity.entityContextType).toBe(EntityContextType.FUNCTION_CREATE);
        expect(functionEntity.text).toBe('get_color_note');
        expect(functionEntity.position).toEqual({
            endColumn: 31,
            endIndex: 1388,
            line: 47,
            startColumn: 17,
            startIndex: 1375,
        });

        expect(functionEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_FUNCTION_STMT
        );
        expect(functionEntity.belongStmt.position).toEqual({
            endColumn: 15,
            endIndex: 1477,
            endLine: 49,
            startColumn: 1,
            startIndex: 1359,
            startLine: 47,
        });
        if (isFuncEntityContext(functionEntity)) {
            expect(functionEntity.arguments).toBeNull();
            expect(functionEntity.relatedEntities).toBeNull();
        }
    });

    test('select has table alias with clause', () => {
        const testingContext = splitListener.statementsContext[10];

        const collectListener = new PostgreSqlEntityCollector(commonSql);
        postgreSql.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();
        expect(allEntities.length).toBe(2);

        const tableEntity1 = allEntities[0];
        const tableEntity2 = allEntities[1];
        expect(tableEntity1.entityContextType).toBe(EntityContextType.TABLE);
        expect(tableEntity1.text).toBe('table_expression');
        expect(tableEntity1.position).toEqual({
            startIndex: 1531,
            endIndex: 1546,
            line: 51,
            startColumn: 51,
            endColumn: 67,
        });

        expect(tableEntity1.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        expect(tableEntity1.belongStmt.position).toEqual({
            startIndex: 1516,
            endIndex: 1546,
            startLine: 51,
            endLine: 51,
            startColumn: 36,
            endColumn: 67,
        });
        if (isCommonEntityContext(tableEntity1)) {
            expect(tableEntity1.columns).toBeUndefined();
            expect(tableEntity1.relatedEntities).toBeNull();
        }
        expect(tableEntity2.entityContextType).toBe(EntityContextType.TABLE);
        expect(tableEntity2.text).toBe('table_expression1');
        expect(tableEntity2.position).toEqual({
            startIndex: 1604,
            endIndex: 1620,
            line: 52,
            startColumn: 55,
            endColumn: 72,
        });

        expect(tableEntity2.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        expect(tableEntity2.belongStmt.position).toEqual({
            startIndex: 1481,
            endIndex: 1667,
            startLine: 51,
            endLine: 52,
            startColumn: 1,
            endColumn: 119,
        });
        expect(tableEntity2[AttrName.alias]).toEqual({
            text: 'tb_1',
            startIndex: 1625,
            endIndex: 1628,
            line: 52,
            startColumn: 76,
            endColumn: 80,
        });
        if (isCommonEntityContext(tableEntity2)) {
            expect(tableEntity2.columns).toBeUndefined();
            expect(tableEntity2.relatedEntities).toBeNull();
        }
    });
});
