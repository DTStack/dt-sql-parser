import FlinkSQL from '../../../src/parser/flinksql';

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
    test('Test simple Error Select Statement', () => {
        const sql = `SELECT product, amount FROM;`;
        const result = parser.validate(sql);
        expect(result.length).toBe(1);
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
            SELECT city, sum(quantity) AS _sum 
            FROM dealer GROUP BY city HAVING city = 'Fremont';
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Test Select Statement with order by clause', () => {
        const sql = `SELECT name, age FROM person ORDER BY age;`;
        const result = parser.validate(sql);
        expect(result).toBe(0);
    });
    test('Test Select Statement with limit clause', () => {
        const sql = `SELECT name, age FROM person ORDER BY name LIMIT 2;`;
        const result = parser.validate(sql);
        expect(result).toBe(0);
    });
    test('Test Select Statement with join', () => {
        const sql = `
            SELECT id, name, employee.deptno, deptname FROM employee
            FULL JOIN department ON employee.deptno = department.deptno;
        `;
        const result = parser.validate(sql);
        expect(result).toBe(0);
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
        expect(result).toBe(0);
    });
    // test cross join
    test('Test Select Statement with cross join', () => {
        const sql = `
            SELECT order_id, tag
            FROM Orders CROSS JOIN UNNEST(tags) AS t (tag)
        `;
        const result = parser.validate(sql);
        expect(result).toBe(0);
    });
    // test for time temporal join
    test('Test Select Statement with time temporal join', () => {
        const sql = `SELECT o.order_id, o.total, c.country, c.zip
            FROM Orders AS o
            JOIN Customers FOR SYSTEM_TIME AS OF o.proc_time AS c
            ON o.customer_id = c.id;
        `;
        const result = parser.validate(sql);
        expect(result).toBe(0);
    });
    // test for catalog table
    test('Test Select Statement with catalog table', () => {
        const sql = `SELECT * FROM catalog1.db1.table1;`;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });

    // describe statements
    test('Test simple Describe Statement', () => {
        const sql = `
            DESCRIBE Orders;
            DESC Orders;
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });

    // explain statements
    test('Test simple Explain Statement', () => {
        const sql = `
            EXPLAIN SELECT * FROM emps;
            EXPLAIN PLAN FOR SELECT * FROM emps;
            EXPLAIN PLAN FOR insert into emps1 SELECT * FROM emps2;
            EXPLAIN CHANGELOG_MODE SELECT * FROM emps;
            EXPLAIN ESTIMATED_COST SELECT * FROM emps;
            EXPLAIN JSON_EXECUTION_PLAN SELECT * FROM emps;
            EXPLAIN CHANGELOG_MODE, JSON_EXECUTION_PLAN, ESTIMATED_COST SELECT * FROM emps;
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });

    // explain insert_statement
    test('Test Explain Insert Statement', () => {
        const sql = `EXPLAIN INSERT INTO EMPS1 SELECT * FROM EMPS2;`;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });

    test('Test simple Explain statement_set', () => {
        // 按官网上写的，那应该是 explain execute statement set - begin，但实际执行时，携带 execute 会报错
        // 个人理解，explain 是解析该语法如何执行，而不能在解析的过程中，去执行语句
        const sql = `
            EXPLAIN STATEMENT SET
            BEGIN
            INSERT INTO t1 SELECT * FROM t2;
            INSERT INTO t2 SELECT * FROM t3;
            END;
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });

    // use statements
    test('Test simple Use Statement', () => {
        const sql = `
            USE CATALOG cat1;
            USE db1;
            USE MODULES hive;
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });

    // show statements
    test('Test simple Show Statement', () => {
        const sql = `
            SHOW CATALOGS;
            SHOW CURRENT CATALOG;
            SHOW DATABASES;
            SHOW CURRENT DATABASE;
            SHOW TABLES;
            SHOW TABLES FROM catalog1.db1 NOT LIKE '%';
            SHOW CREATE TABLE my_table;
            SHOW COLUMNS FROM my_table LIKE '%f%';
            SHOW VIEWS;
            SHOW CREATE VIEW my_view;
            SHOW FUNCTIONS;
            SHOW USER FUNCTIONS;
            SHOW MODULES;
            SHOW FULL MODULES;
            SHOW JARS;
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });

    // other statement
    test('Test other Statement', () => {
        const sql = `
        LOAD MODULE CORE;
        LOAD MODULE dummy WITH ('k1' = 'v1', 'k2' = 'v2');
        UNLOAD MODULE CORE;
        SET;
        SET 'test-key' = 'test-value';
        RESET;
        RESET 'test-key';
        ADD JAR '<path_to_filename>.jar'
        REMOVE JAR '<path_to_filename>.jar'
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });

    test('DT Add Statement', () => {
        const sql = `
            ADD JAR WITH /home/test.jar;
            ADD JAR WITH /home/test.jar AS test.jar;
            ADD FILE WITH /home/admin/sftp/dttest_cn/DsCenter_1687/krb5.conf AS krb5.conf;
            ADD FILE WITH /home/admin/sftp/dttest_cn/DsCenter_1687/krb5.conf RENAME test.conf;
            ADD PYTHON_FILES WITH /test.py RENAME test.py;
            ADD PYTHON_REQUIREMENTS WITH /requirements.txt RENAME requirements.txt;
            ADD PYTHON_JAR WITH /python_jar.jar RENAME py_jar.jar;
            ADD PYTHON_PARAMETER /parameter.py;
            ADD ENGINE FILE WITH /filePath RENAME theName KEY theKey;
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });

    test('Test invalid Double Line Comment statement', () => {
        const sql = `-test comment\n`;
        const result = parser.validate(sql);
        expect(result.length).toBe(1);
    });

    test('Test valid Double Line Comment statement', () => {
        const sql = `----test comment\n`;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });

    test('Test valid Hash Sign Line Comment statement', () => {
        const sql = `#test comment\n`;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
});
