import { FlinkSQL } from '../../../src';

describe('FlinkSQL Syntax Tests', () => {
    const parser = new FlinkSQL();

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
