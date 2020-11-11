import SQLParser from '../../../src/parser/flinksql';

describe('FlinkSQL Syntax Tests', () => {
    const parser = new SQLParser();

    // Create statements
    test('Test simple CreateTable Statement', () => {
        const sql = `
            CREATE TABLE Orders (
                user BIGINT
            ) WITH ( 
                "connector" = "kafka",
                "scan.startup.mode" = "earliest-offset"
            );
        `;
        const result = parser.validate(sql);
        // TODO find parser error
        expect(result.length).toBe(1);
    });
    test('Test simple CreateDatabase Statement', () => {
        const sql = `
            CREATE DATABASE IF NOT EXISTS dataApi
            WITH ( 
                "owner" = "admin"
            );
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    // test('Test simple CreateView Statement', () => {
    //     const sql = `
    //         CREATE TEMPORARY VIEW IF NOT EXISTS tempView
    //         AS ;
    //     `;
    //     const result = parser.validate(sql);
    //     expect(result.length).toBe(0);
    // });

    // Alter statements
    test('Test simple AlterTable Statement', () => {
        const sql = `ALTER TABLE Orders RENAME TO NewOrders;`;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Test simple AlterDatabase Statement', () => {
        const sql = `ALTER DATABASE DataBase SET ("key1"="value1");`;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });

    // Drop statements
    test('Test simple DropTable Statement', () => {
        const sql = `DROP TABLE IF EXISTS Orders;`;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Test simple DropDatabase Statement', () => {
        const sql = `DROP DATABASE IF EXISTS Orders RESTRICT;`;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Test simple DropView Statement', () => {
        const sql = `DROP TEMPORARY VIEW IF EXISTS Orders;`;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Test simple DropFunction Statement', () => {
        const sql = `DROP TEMPORARY FUNCTION IF EXISTS Orders;`;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Test simple Select Statement', () => {
        const sql = ` SELECT product, amount FROM Orders;`;
        const result = parser.validate(sql);
        console.log(result);
        expect(result.length).toBe(0);
    });
});
