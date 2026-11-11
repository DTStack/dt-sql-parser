import { SparkSQL } from 'src/parser/spark';
import { readSQL } from 'test/helper';

const spark = new SparkSQL();

const features = {
    ddl: readSQL(__dirname, 'icebergDDL.sql'),
    dml: readSQL(__dirname, 'icebergDML.sql'),
};

describe('Spark Iceberg DDL Syntax Tests', () => {
    features.ddl.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
});

describe('Spark Iceberg DML and Query Syntax Tests', () => {
    features.dml.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
});

describe('Spark Iceberg identifier regressions', () => {
    test.each([
        'CREATE TABLE prod.db.analytics.sample (id BIGINT) USING iceberg',
        'ALTER TABLE prod.db.analytics.sample ADD COLUMN value STRING',
        'DROP TABLE prod.db.analytics.sample',
    ])('supports a multi-level namespace in %s', (sql) => {
        expect(spark.validate(sql)).toEqual([]);
    });

    test.each([
        'CREATE TABLE prod.db.sample (point.x DOUBLE) USING iceberg',
        'CREATE VIEW prod.db.v (point.x) AS SELECT 1',
    ])('rejects a dotted column declaration in %s', (sql) => {
        expect(spark.validate(sql).length).toBeGreaterThan(0);
    });

    test.each([
        'DROP TABLE IF EXISTS iceberg_140.mt_test.order_log_v1.x.x.PURGE',
        'DROP TABLE IF EXISTS prod.db.ns1.ns2.table PURGE',
        'INSERT INTO prod.db.ns1.ns2.table VALUES (1)',
        'UPDATE prod.db.ns1.ns2.table SET value = 1',
        'DELETE FROM prod.db.ns1.ns2.table WHERE id = 1',
        'SELECT * FROM prod.db.ns1.ns2.table',
        'SELECT * FROM prod.db.ns1.ns2.table.history',
        'MERGE INTO prod.db.target t USING prod.db.ns1.ns2.source s ON t.id = s.id WHEN MATCHED THEN UPDATE SET *',
    ])('rejects a table identifier beyond 4 segments in %s', (sql) => {
        expect(spark.validate(sql).length).toBeGreaterThan(0);
    });
});
