import { SparkSQL } from 'src/parser/spark';
import { EntityContextType } from 'src/parser/common/types';

const spark = new SparkSQL();

describe('Spark Iceberg entity collector tests', () => {
    test.each([
        'ALTER TABLE prod.db.iceberg_table ADD PARTITION FIELD bucket(16, id)',
        'ALTER TABLE prod.db.iceberg_table WRITE DISTRIBUTED BY PARTITION',
        'ALTER TABLE prod.db.iceberg_table SET IDENTIFIER FIELDS id',
        'ALTER TABLE prod.db.iceberg_table CREATE BRANCH audit_branch',
        'ALTER TABLE prod.db.iceberg_table DROP TAG IF EXISTS historical_tag',
        'SELECT * FROM prod.db.iceberg_table.history',
        'SELECT * FROM prod.db.iceberg_table.branch_audit',
        'INSERT INTO prod.db.iceberg_table.branch_audit VALUES (1)',
        'UPDATE prod.db.iceberg_table.branch_audit SET val = 1',
        'DELETE FROM prod.db.iceberg_table.branch_audit WHERE id = 2',
    ])('collects the target table for %s', (sql) => {
        const entities = spark.getAllEntities(sql) ?? [];
        const tables = entities.filter(
            (entity) => entity.entityContextType === EntityContextType.TABLE
        );

        const expectedTable = sql.includes('branch_audit')
            ? 'prod.db.iceberg_table.branch_audit'
            : sql.endsWith('.history')
              ? 'prod.db.iceberg_table.history'
              : 'prod.db.iceberg_table';
        expect(tables.map((entity) => entity.text)).toEqual([expectedTable]);
    });

    test('collects a nested column added to an Iceberg table', () => {
        const sql = 'ALTER TABLE prod.db.sample ADD COLUMN point.z DOUBLE';
        const entities = spark.getAllEntities(sql) ?? [];
        const columns = entities.filter(
            (entity) => entity.entityContextType === EntityContextType.COLUMN_CREATE
        );

        expect(columns.map((entity) => entity.text)).toEqual(['point.z']);
    });

    test('collects both target and source tables for MERGE', () => {
        const sql = `
            MERGE INTO prod.db.target t
            USING prod.db.source s
            ON t.id = s.id
            WHEN MATCHED THEN UPDATE SET *
        `;
        const entities = spark.getAllEntities(sql) ?? [];
        const tables = entities.filter(
            (entity) => entity.entityContextType === EntityContextType.TABLE
        );

        expect(tables.map((entity) => entity.text).sort()).toEqual([
            'prod.db.source',
            'prod.db.target',
        ]);
    });
});
