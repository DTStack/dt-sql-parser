import { FlinkSQL } from '../../../../src';

describe('FlinkSQL Create Table Syntax Tests', () => {
    const parser = new FlinkSQL();
    // Create statements
    test('Test Create Catalog Statement', () => {
        const sql = `
            CREATE CATALOG c1
            WITH (
                'key1'='value1',
                'key2'='value2'
            )
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Test simple Create Database Statement', () => {
        const sql = `
            CREATE DATABASE IF NOT EXISTS dataApi
            WITH ( 
                "owner" = "admin"
            );
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Test simple Create View Statement', () => {
        const sql = `
            CREATE TEMPORARY VIEW IF NOT EXISTS tempView
            AS SELECT product, amount FROM Orders;
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Test simple Create Function Statement', () => {
        const sql = `
            CREATE FUNCTION IF NOT EXISTS tempFunction AS 'SimpleUdf';
            CREATE TEMPORARY FUNCTION function1 AS 'org.apache.fink.function.function1' LANGUAGE JAVA USING JAR 'file:///path/to/test.jar', JAR 'hdfs:///path/to/test2.jar';
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
});
