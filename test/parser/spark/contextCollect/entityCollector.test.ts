import fs from 'fs';
import path from 'path';
import SparkSQL from 'src/parser/spark';
import { SparkSqlSplitListener, SparkEntityCollector } from 'src/parser/spark';
import { ParseTreeListener } from 'antlr4ts/tree';
import { SparkSqlParserListener } from 'src/lib/spark/SparkSqlParserListener';
import { EntityContextType } from 'src/parser/common/basic-parser-types';
import { StmtContextType } from 'src/parser/common/entityCollector';

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
        expect(splitListener.statementsContext.length).toBe(10);
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

        expect(tableCreateEntity.relatedEntities.length).toBe(1);

        const beLikedEntity = allEntities[1];

        expect(tableCreateEntity.relatedEntities[0]).toBe(beLikedEntity);
        expect(beLikedEntity.text).toBe('like_old_tb');
        expect(beLikedEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(beLikedEntity.belongStmt).toBe(tableCreateEntity.belongStmt);
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

        expect(tableCreateEntity.belongStmt.stmtContextType).toBe(
            StmtContextType.CREATE_TABLE_STMT
        );
        expect(tableCreateEntity.belongStmt.position).toEqual({
            startIndex: 54,
            endIndex: 242,
            startLine: 3,
            endLine: 8,
            startColumn: 1,
            endColumn: 22,
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

        expect(tableCreateEntity.columns).toBeNull();
        expect(tableCreateEntity.relatedEntities.length).toBe(1);
        expect(tableCreateEntity.relatedEntities[0]).toBe(originTableEntity);

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
        expect(viewEntity.columns.length).toBe(2);
        viewEntity.columns.forEach((columEntity) => {
            expect(columEntity.entityContextType).toBe(EntityContextType.COLUMN_CREATE);
            expect(columEntity.belongStmt).toBe(viewEntity.belongStmt);
            expect(columEntity.text).toBe(
                commonSql.slice(columEntity.position.startIndex, columEntity.position.endIndex + 1)
            );
        });

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

        expect(tableEntity2.entityContextType).toBe(EntityContextType.TABLE);
        expect(tableEntity2.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        expect(tableEntity2.text).toBe('department');
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
        expect(sourceTableEntity.belongStmt.stmtContextType).toBe(StmtContextType.COMMON_STMT);
        expect(sourceTableEntity.text).toBe('customer_db');
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
});
