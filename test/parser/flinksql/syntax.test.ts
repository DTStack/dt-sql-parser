import { FlinkSQL } from '../../../src';

describe('FlinkSQL Syntax Tests', () => {
    const parser = new FlinkSQL();

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
        expect(result.length).toBe(0);
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
    test('Test simple CreateView Statement', () => {
        const sql = `
            CREATE TEMPORARY VIEW IF NOT EXISTS tempView
            AS SELECT product, amount FROM Orders;
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Test simple CreateFunction Statement', () => {
        const sql = `
            CREATE TEMPORARY FUNCTION IF NOT EXISTS tempFunction AS 'SimpleUdf';
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });

    // Alter statements
    test('Test simple AlterTable Statement', () => {
        const sql = `ALTER TABLE Orders RENAME TO NewOrders;`;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Test simple AlterDatabase Statement', () => {
        const sql = `ALTER DATABASE tempDB SET ("key1"="value1");`;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Test simple AlterFunction Statement', () => {
        const sql = `
            ALTER TEMPORARY FUNCTION IF EXISTS tempFunction AS 'SimpleUdf';
        `;
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

    // insert statements
    test('Test one simple Insert Statement', () => {
        const sql = `
            INSERT INTO students VALUES
            ('Amy Smith', '123 Park Ave, San Jose', 111111);
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Test two simple Insert Statement', () => {
        const sql = `
            INSERT INTO students PARTITION (student_id = 444444)
            SELECT name, address FROM persons WHERE name = "Dora Williams";
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });

    // query statements
    test('Test With clause', () => {
        const sql = `
            WITH orders_with_total AS (
                SELECT order_id, price + tax AS total
                FROM Orders
            )
            SELECT order_id, SUM(total)
            FROM orders_with_total
            GROUP BY order_id;
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Test simple Select Statement', () => {
        const sql = `SELECT product, amount FROM Orders;`;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Test Select Statement with where clause', () => {
        const sql = `SELECT * FROM person WHERE id = 200 OR id = 300;`;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Test Select Statement with group by clause', () => {
        const sql = `SELECT id, sum(quantity) FROM dealer GROUP BY id;`;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Test Select Statement with having clause', () => {
        const sql = `
            SELECT city, sum(quantity) AS sum 
            FROM dealer GROUP BY city HAVING city = 'Fremont';
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Test Select Statement with order by clause', () => {
        const sql = `SELECT name, age FROM person ORDER BY age;`;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Test Select Statement with limit clause', () => {
        const sql = `SELECT name, age FROM person ORDER BY name LIMIT 2;`;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Test Select Statement with join', () => {
        const sql = `
            SELECT id, name, employee.deptno, deptname FROM employee
            FULL JOIN department ON employee.deptno = department.deptno;
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    // test left outer join
    test('Test Select Statement with left outer join', () => {
        const sql = `
            SELECT order_id, res
            FROM Orders
            LEFT OUTER JOIN LATERAL TABLE(table_func(order_id)) t(res)
            ON TRUE
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    // test cross join
    test('Test Select Statement with cross join', () => {
        const sql = `
            SELECT order_id, tag
            FROM Orders CROSS JOIN UNNEST(tags) AS t (tag)
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    // test for time temporal join
    test('Test Select Statement with time temporal join', () => {
        const sql = `SELECT o.order_id, o.total, c.country, c.zip
            FROM Orders AS o
            JOIN Customers FOR SYSTEM_TIME AS OF o.proc_time AS c
            ON o.customer_id = c.id;
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    // test for catalog table
    test('Test Select Statement with catalog table', () => {
        const sql = `SELECT * FROM catalog1.db1.table1;`;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });

    // describe statements
    test('Test simple Describe Statement', () => {
        const sql = `DESCRIBE Orders;`;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });

    // describe statements
    test('Test simple Explain Statement', () => {
        const sql = `EXPLAIN tempTable FOR SELECT k, SUM(v) FROM oneTable;`;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });

    // use statements
    test('Test simple Use Statement', () => {
        const sql = `USE CATALOG orders;`;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });

    // show statements
    test('Test simple Show Statement', () => {
        const sql = `SHOW CATALOGS;`;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
});
