import FlinkSQL from "../../../../src/parser/flinksql";

describe('FlinkSQL Create Table Syntax Tests', () => {
    const parser = new FlinkSQL();
    // Alter statements
    test('Test simple alter table Statement', () => {
        const sql = `
            ALTER TABLE Orders RENAME TO NewOrders;
            ALTER TABLE sample_table SET ('key1'='value2');
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Test simple alter view Statement', () => {
        const sql = `
            ALTER VIEW v1 RENAME TO v2;
            ALTER VIEW v1 AS SELECT c1, c2 FROM tbl;
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Test simple alter database Statement', () => {
        const sql = `ALTER DATABASE tempDB SET ("key1"="value1");`;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Test simple alter function Statement', () => {
        const sql = `
            ALTER FUNCTION tempFunction AS 'SimpleUdf';
            ALTER TEMPORARY FUNCTION IF EXISTS tempFunction AS 'SimpleUdf';
            ALTER TEMPORARY SYSTEM FUNCTION IF EXISTS tempFunction AS 'SimpleUdf';
            ALTER FUNCTION myudf AS 'com.example.MyUdf' LANGUAGE PYTHON;
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
});

