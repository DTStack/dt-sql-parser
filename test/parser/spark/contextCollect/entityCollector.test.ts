import { ParseTreeListener } from 'antlr4ng';
import fs from 'fs';
import path from 'path';
import { SparkSqlParserListener } from 'src/lib/spark/SparkSqlParserListener';
import {
    AttrName,
    isCommonEntityContext,
    isFuncEntityContext,
    StmtContextType,
} from 'src/parser/common/entityCollector';
import { EntityContextType } from 'src/parser/common/types';
import { SparkEntityCollector, SparkSQL, SparkSqlSplitListener } from 'src/parser/spark';

const commonSql = fs.readFileSync(path.join(__dirname, 'fixtures', 'common.sql'), 'utf-8');

describe('SparkSQL entity collector tests', () => {
    const spark = new SparkSQL();
    const parseTree = spark.parse(commonSql);
    const splitListener = new SparkSqlSplitListener();
    spark.listen(splitListener as SparkSqlParserListener, parseTree);

    test('validate common sql', () => {
        expect(spark.validate(commonSql).length).toBe(0);
    });

    test('split results', () => {
        expect(splitListener.statementsContext.length).toBe(12);
    });

    test('create table like', () => {
        const columnCreateTableContext = splitListener.statementsContext[0];

        const collectListener = new SparkEntityCollector(commonSql);
        spark.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const tableCreateEntity = allEntities[0];

        expect(tableCreateEntity.entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(tableCreateEntity.text).toBe('new_tb1');
        expect(tableCreateEntity.position).toEqual({
            startIndex: 27,
            endIndex: 33,
            line: 1,
            startColumn: 28,
            endColumn: 35,
        });

        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_TABLE_STMT
        );
        expect(tableCreateEntity.belongStmt.position).toEqual({
            startIndex: 0,
            endIndex: 50,
            startLine: 1,
            endLine: 1,
            startColumn: 1,
            endColumn: 52,
        });
        if (isCommonEntityContext(tableCreateEntity)) {
            expect(tableCreateEntity.relatedEntities.length).toBe(1);

            const beLikedEntity = allEntities[1];

            expect(tableCreateEntity.relatedEntities[0]).toBe(beLikedEntity);
            expect(beLikedEntity.text).toBe('like_old_tb');
            expect(beLikedEntity.entityContextType).toBe(EntityContextType.TABLE);
            expect(beLikedEntity.belongStmt).toBe(tableCreateEntity.belongStmt);
        }
    });

    test('create hive format table', () => {
        const columnCreateTableContext = splitListener.statementsContext[1];

        const collectListener = new SparkEntityCollector(commonSql);
        spark.listen(collectListener as ParseTreeListener, columnCreateTableContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const tableCreateEntity = allEntities[0];

        expect(tableCreateEntity.entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(tableCreateEntity.text).toBe('new_tb2');
        expect(tableCreateEntity.position).toEqual({
            startIndex: 67,
            endIndex: 73,
            line: 3,
            startColumn: 14,
            endColumn: 21,
        });
        expect(tableCreateEntity[AttrName.comment]).toEqual({
            text: "'this is new_tb2 comment'",
            startIndex: 283,
            endIndex: 307,
            line: 9,
            startColumn: 13,
            endColumn: 38,
        });

        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_TABLE_STMT
        );
        expect(tableCreateEntity.belongStmt.position).toEqual({
            startIndex: 54,
            endIndex: 307,
            startLine: 3,
            endLine: 9,
            startColumn: 1,
            endColumn: 38,
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
            expect(tableCreateEntity.columns[0][AttrName.comment]).toEqual({
                text: "'this is new col1'",
                startIndex: 97,
                endIndex: 114,
                line: 3,
                startColumn: 44,
                endColumn: 62,
            });
            expect(tableCreateEntity.columns[0][AttrName.colType]).toEqual({
                text: 'INT',
                startIndex: 85,
                endIndex: 87,
                line: 3,
                startColumn: 32,
                endColumn: 35,
            });
            expect(tableCreateEntity.columns[1][AttrName.colType]).toEqual({
                text: 'STRING',
                startIndex: 126,
                endIndex: 131,
                line: 3,
                startColumn: 73,
                endColumn: 79,
            });
        }
    });

    test('create data source table', () => {
        const testingContext = splitListener.statementsContext[2];

        const collectListener = new SparkEntityCollector(commonSql);
        spark.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const tableCreateEntity = allEntities[0];
        const originTableEntity = allEntities[1];

        expect(tableCreateEntity.entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(tableCreateEntity.text).toBe('student_copy');
        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_TABLE_STMT
        );
        if (isCommonEntityContext(tableCreateEntity)) {
            expect(tableCreateEntity.columns).toBeUndefined();
            expect(tableCreateEntity.relatedEntities.length).toBe(1);
            expect(tableCreateEntity.relatedEntities[0]).toBe(originTableEntity);
        }
        expect(originTableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(originTableEntity.text).toBe('student');
        expect(originTableEntity.belongStmt.rootStmt).toBe(tableCreateEntity.belongStmt);
    });

    test('create view', () => {
        const testingContext = splitListener.statementsContext[3];

        const collectListener = new SparkEntityCollector(commonSql);
        spark.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const viewEntity = allEntities[0];
        const tableEntity = allEntities[1];

        expect(viewEntity.entityContextType).toBe(EntityContextType.VIEW_CREATE);
        expect(viewEntity.belongStmt.stmtContextType).toBe(StmtContextType.CREATE_VIEW_STMT);
        expect(viewEntity.text).toBe('new_view1');
        expect(viewEntity[AttrName.comment]).toEqual({
            text: "'View for experienced employees'",
            startIndex: 455,
            endIndex: 486,
            line: 14,
            startColumn: 9,
            endColumn: 41,
        });
        if (isCommonEntityContext(viewEntity)) {
            expect(viewEntity.columns.length).toBe(2);
            viewEntity.columns.forEach((columEntity) => {
                expect(columEntity.entityContextType).toBe(EntityContextType.COLUMN_CREATE);
                expect(columEntity.belongStmt).toBe(viewEntity.belongStmt);
                expect(columEntity.text).toBe(
                    commonSql.slice(
                        columEntity.position.startIndex,
                        columEntity.position.endIndex + 1
                    )
                );
            });
            expect(viewEntity.columns[0][AttrName.comment]).toEqual({
                text: "'Unique identification number'",
                startIndex: 408,
                endIndex: 437,
                line: 13,
                startColumn: 35,
                endColumn: 65,
            });
        }
        expect(tableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(tableEntity.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        expect(tableEntity.belongStmt.rootStmt).toBe(viewEntity.belongStmt);
        expect(tableEntity.text).toBe('old_tb_1');
    });

    test('select from table', () => {
        const testingContext = splitListener.statementsContext[4];

        const collectListener = new SparkEntityCollector(commonSql);
        spark.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const tableEntity1 = allEntities[0];
        const tableEntity2 = allEntities[1];

        expect(tableEntity1.entityContextType).toBe(EntityContextType.TABLE);
        expect(tableEntity1.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        expect(tableEntity1.text).toBe('employee');
        expect(tableEntity1[AttrName.alias]).toEqual({
            text: 'em',
            startIndex: 602,
            endIndex: 603,
            line: 17,
            startColumn: 55,
            endColumn: 57,
        });

        expect(tableEntity2.entityContextType).toBe(EntityContextType.TABLE);
        expect(tableEntity2.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        expect(tableEntity2.text).toBe('department');
        expect(tableEntity2[AttrName.alias]).toEqual({
            text: 'dept',
            startIndex: 630,
            endIndex: 633,
            line: 17,
            startColumn: 83,
            endColumn: 87,
        });
    });

    test('insert into table values', () => {
        const testingContext = splitListener.statementsContext[5];

        const collectListener = new SparkEntityCollector(commonSql);
        spark.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const tableEntity = allEntities[0];

        expect(tableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(tableEntity.belongStmt.stmtContextType).toBe(StmtContextType.INSERT_STMT);
        expect(tableEntity.text).toBe('insert_tb');
    });

    test('insert overwrite table', () => {
        const testingContext = splitListener.statementsContext[6];

        const collectListener = new SparkEntityCollector(commonSql);
        spark.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(2);

        const targetTableEntity = allEntities[0];
        const sourceTableEntity = allEntities[1];

        expect(targetTableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(targetTableEntity.belongStmt.stmtContextType).toBe(StmtContextType.INSERT_STMT);
        expect(targetTableEntity.text).toBe('target_tb');

        expect(sourceTableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(sourceTableEntity.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        expect(sourceTableEntity.belongStmt.rootStmt).toBe(targetTableEntity.belongStmt);
        expect(sourceTableEntity.text).toBe('source_tb');
    });

    test('insert overwrite dir', () => {
        const testingContext = splitListener.statementsContext[7];

        const collectListener = new SparkEntityCollector(commonSql);
        spark.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();
        expect(allEntities.length).toBe(1);

        const sourceTableEntity = allEntities[0];

        expect(sourceTableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(sourceTableEntity.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        expect(sourceTableEntity.text).toBe('from_tb');
    });

    test('create database', () => {
        const testingContext = splitListener.statementsContext[8];

        const collectListener = new SparkEntityCollector(commonSql);
        spark.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();
        expect(allEntities.length).toBe(1);

        const sourceTableEntity = allEntities[0];

        expect(sourceTableEntity.entityContextType).toBe(EntityContextType.DATABASE_CREATE);
        expect(sourceTableEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_DATABASE_STMT
        );
        expect(sourceTableEntity.text).toBe('customer_db');
        expect(sourceTableEntity[AttrName.comment]).toEqual({
            text: "'this is database comment'",
            startIndex: 928,
            endIndex: 953,
            line: 25,
            startColumn: 51,
            endColumn: 77,
        });
    });

    test('use namespace', () => {
        const testingContext = splitListener.statementsContext[9];

        const collectListener = new SparkEntityCollector(commonSql);
        spark.listen(collectListener as ParseTreeListener, testingContext);

        const allEntities = collectListener.getEntities();
        expect(allEntities.length).toBe(1);

        const sourceTableEntity = allEntities[0];

        expect(sourceTableEntity.entityContextType).toBe(EntityContextType.DATABASE);
        expect(sourceTableEntity.belongStmt.stmtContextType).toBe(StmtContextType.COMMON_STMT);
        expect(sourceTableEntity.text).toBe('ns1');
    });

    test('create function', () => {
        const functionContext = splitListener.statementsContext[10];

        const collectListener = new SparkEntityCollector(commonSql);
        spark.listen(collectListener as ParseTreeListener, functionContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const functionEntity = allEntities[0];

        expect(functionEntity.entityContextType).toBe(EntityContextType.FUNCTION_CREATE);
        expect(functionEntity.text).toBe('simple_udf');
        expect(functionEntity.position).toEqual({
            endColumn: 38,
            endIndex: 1013,
            line: 29,
            startColumn: 28,
            startIndex: 1004,
        });

        expect(functionEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_FUNCTION_STMT
        );
        expect(functionEntity.belongStmt.position).toEqual({
            endColumn: 54,
            endIndex: 1029,
            endLine: 29,
            startColumn: 1,
            startIndex: 977,
            startLine: 29,
        });

        if (isFuncEntityContext(functionEntity)) {
            expect(functionEntity.arguments).toBeNull();
            expect(functionEntity.relatedEntities).toBeNull();
        }
    });

    test('create xxx function', () => {
        const functionContext = splitListener.statementsContext[11];

        const collectListener = new SparkEntityCollector(commonSql);
        spark.listen(collectListener as ParseTreeListener, functionContext);

        const allEntities = collectListener.getEntities();

        expect(allEntities.length).toBe(1);

        const functionEntity = allEntities[0];

        expect(functionEntity.entityContextType).toBe(EntityContextType.FUNCTION_CREATE);
        expect(functionEntity.text).toBe('simple_udf');
        expect(functionEntity.position).toEqual({
            endColumn: 27,
            endIndex: 1058,
            line: 31,
            startColumn: 17,
            startIndex: 1049,
        });

        expect(functionEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_FUNCTION_STMT
        );
        expect(functionEntity.belongStmt.position).toEqual({
            endColumn: 43,
            endIndex: 1074,
            endLine: 31,
            startColumn: 1,
            startIndex: 1033,
            startLine: 31,
        });
        if (isFuncEntityContext(functionEntity)) {
            expect(functionEntity.arguments).toBeNull();
            expect(functionEntity.relatedEntities).toBeNull();
        }
    });
});
