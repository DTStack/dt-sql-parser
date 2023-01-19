import { FlinkSQL } from '../../../../src';

describe('FlinkSQL Create Table Syntax Tests', () => {
    const parser = new FlinkSQL();
    // Drop statements
    test('Test Simple Drop Catalog Statement', () => {
        const sql = `
            DROP CATALOG catalog1;
            DROP CATALOG IF EXISTS catalog2;
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Test Simple Drop Table Statement', () => {
        const sql = `
            DROP TABLE Orders;
            DROP TABLE IF EXISTS Orders;
            DROP TEMPORARY TABLE IF EXISTS Orders;
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Test Simple Drop Database Statement', () => {
        const sql = `
            DROP DATABASE Orders;
            DROP DATABASE IF EXISTS Orders RESTRICT;
            DROP DATABASE IF EXISTS Orders CASCADE;
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Test Simple Drop View Statement', () => {
        const sql = `
            DROP VIEW Orders;
            DROP TEMPORARY VIEW IF EXISTS Orders;
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Test Simple Drop Function Statement', () => {
        const sql = `
            DROP FUNCTION Orders;
            DROP TEMPORARY FUNCTION IF EXISTS Orders;
            DROP TEMPORARY SYSTEM FUNCTION IF EXISTS Orders;
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
});
