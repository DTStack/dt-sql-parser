import { SparkSQL } from '../../../src';

const error = console.log.bind(console, '***** error\n');

const validateTest = (sqls) => {
    const parser = new SparkSQL();
    sqls.forEach((sql, i) => {
        const result = parser.validate(sql);
        if (result.length !== 0) {
            error(i, sql);
            error(result);
        }
        expect(result.length).toBe(0);
    });
};

describe('Spark SQL Syntax Tests', () => {
    test('ALTER Statement', () => {
        const sqls = [
            `ALTER DATABASE inventory SET DBPROPERTIES ('Edited-by' = 'John', 'Edit-date' = '01/01/2001');`,
            `ALTER TABLE Student RENAME TO StudentInfo;`,
            `ALTER VIEW tempdb1.v1 RENAME TO tempdb1.v2;`,
        ];
        validateTest(sqls);
    });

    test('CREATE Statement', () => {
        const sqls = [
            `CREATE DATABASE IF NOT EXISTS customer_db;`,
            `CREATE FUNCTION simple_udf AS 'SimpleUdf'
    USING JAR '/tmp/SimpleUdf.jar';`,
            `CREATE OR REPLACE FUNCTION simple_udf AS 'SimpleUdfR'
    USING JAR '/tmp/SimpleUdfR.jar';`,
            `CREATE TABLE student (id INT, name STRING, age INT) USING CSV;`,
            `CREATE TABLE student (id INT, name STRING, age INT)
    USING CSV
    PARTITIONED BY (age)
    CLUSTERED BY (Id) INTO 4 buckets;`,
            `CREATE OR REPLACE VIEW experienced_employee
    (ID COMMENT 'Unique identification number', Name) 
    COMMENT 'View for experienced employees'
    AS SELECT id, name FROM all_employee
        WHERE working_years > 5;`,
            `CREATE GLOBAL TEMPORARY VIEW IF NOT EXISTS subscribed_movies 
    AS SELECT mo.member_id, mb.full_name, mo.movie_title
        FROM movies AS mo INNER JOIN members AS mb 
        ON mo.member_id = mb.id;`,
        ];
        validateTest(sqls);
    });

    test('DROP Statement', () => {
        const sqls = [
            `DROP DATABASE inventory_db CASCADE;`,
            `DROP DATABASE IF EXISTS inventory_db CASCADE;`,
            `DROP FUNCTION test_avg;`,
            `DROP TEMPORARY FUNCTION IF EXISTS test_avg;`,
            `DROP TABLE userdb.employeetable;`,
            `DROP TABLE IF EXISTS employeetable;`,
            `DROP VIEW userdb.employeeView;`,
            `DROP VIEW IF EXISTS employeeView;`,
        ];
        validateTest(sqls);
    });

    test('TRUNCATE Statement', () => {
        const sqls = [
            `TRUNCATE TABLE Student partition(age=10);`,
        ];
        validateTest(sqls);
    });

    test('REPAIR TABLE Statement', () => {
        const sqls = [
            `MSCK REPAIR TABLE t1;`,
        ];
        validateTest(sqls);
    });

    test('USE Database Statement', () => {
        const sqls = [
            `USE userdb;`,
        ];
        validateTest(sqls);
    });

    test('INSERT Statement', () => {
        const sqls = [
            `INSERT INTO students VALUES
    ('Amy Smith', '123 Park Ave, San Jose', 111111);`,
            `INSERT INTO students TABLE visiting_students;`,
            `INSERT OVERWRITE students VALUES
    ('Ashua Hill', '456 Erica Ct, Cupertino', 111111),
    ('Brian Reed', '723 Kern Ave, Palo Alto', 222222);`,
            `INSERT OVERWRITE students TABLE visiting_students;`,
            `INSERT OVERWRITE students
    FROM applicants SELECT name, address, id applicants WHERE qualified = true;`,
            `INSERT OVERWRITE DIRECTORY '/tmp/destination'
    USING parquet
    OPTIONS (col1 1, col2 2, col3 'test')
    SELECT * FROM test_table;`,
            `INSERT OVERWRITE DIRECTORY
    USING parquet
    OPTIONS ('path' '/tmp/destination', col1 1, col2 2, col3 'test')
    SELECT * FROM test_table;`,
            `INSERT OVERWRITE LOCAL DIRECTORY '/tmp/destination'
    STORED AS orc
    SELECT * FROM test_table;`,
            `INSERT OVERWRITE LOCAL DIRECTORY '/tmp/destination'
    ROW FORMAT DELIMITED FIELDS TERMINATED BY ','
    SELECT * FROM test_table;`,
        ];
        validateTest(sqls);
    });

    test('LOAD Statement', () => {
        const sqls = [
            `LOAD DATA LOCAL INPATH '/user/hive/warehouse/students' OVERWRITE INTO TABLE test_load;`,
            `LOAD DATA LOCAL INPATH '/user/hive/warehouse/test_partition/c2=2/c3=3'
    OVERWRITE INTO TABLE test_load_partition PARTITION (c2=2, c3=3);`,
        ];
        validateTest(sqls);
    });

    test('SELECT WHERE, GROUP BY, HAVING, ORDER BY Statement', () => {
        const sqls = [
            `SELECT * FROM person WHERE id > 200 ORDER BY id;`,
            `SELECT * FROM person AS parent
    WHERE EXISTS (
        SELECT 1 FROM person AS child
        WHERE parent.id = child.id AND child.age IS NULL
    );`,
            `SELECT id, sum(quantity) FROM dealer GROUP BY id ORDER BY id;`,
            `SELECT city, car_model, sum(quantity) AS sum FROM dealer
    GROUP BY city, car_model WITH CUBE
    ORDER BY city, car_model;`,
            `SELECT city, sum(quantity) AS sum FROM dealer GROUP BY city HAVING city = 'Fremont';`,
            `SELECT sum(quantity) AS sum FROM dealer HAVING sum(quantity) > 10;`,
            `SELECT name, age FROM person ORDER BY age;`,
            `SELECT * FROM person ORDER BY name ASC, age DESC;`,
        ];
        validateTest(sqls);
    });

    test('SELECT SORT BY, CLUSTER BY, DISTRIBUTE BY, LIMIT Statement', () => {
        const sqls = [
            `SELECT /*+ REPARTITION(zip_code) */ age, name, zip_code FROM person SORT BY age DESC NULLS FIRST;`,
            `SELECT /*+ REPARTITION(zip_code) */ name, age, zip_code FROM person
    SORT BY name ASC, age DESC;`,
            `SELECT age, name FROM person CLUSTER BY age;`,
            `SELECT age, name FROM person DISTRIBUTE BY age;`,
            `SELECT name, age FROM person ORDER BY name LIMIT length('SPARK');`,
            `SELECT name, age FROM person ORDER BY name LIMIT length('SPARK');`,
        ];
        validateTest(sqls);
    });

    test('SELECT Common Table Expression Statement', () => {
        const sqls = [
            `SELECT * FROM t WHERE x = 1 AND y = 2;`,
            `SELECT max(c) FROM (
    WITH t(c) AS (SELECT 1)
    SELECT * FROM t
);`,
            `CREATE VIEW v AS
    WITH t(a, b, c, d) AS (SELECT 1, 2, 3, 4)
    SELECT * FROM t;`,
            `SET spark.sql.legacy.ctePrecedencePolicy = CORRECTED;
WITH
    t AS (SELECT 1),
    t2 AS (
        WITH t AS (SELECT 2)
        SELECT * FROM t
    )
SELECT * FROM t2;`,
        ];
        validateTest(sqls);
    });

    test('SELECT HINTS, INLINE TABLE, JOIN, LIKE Predicate, Set Operators, Sampling Queries Statement', () => {
        const sqls = [
            `SELECT /*+ REPARTITION_BY_RANGE(3, c) */ * FROM t;`,
            `SELECT /*+ BROADCAST(t1), MERGE(t1, t2) */ * FROM t1 INNER JOIN t2 ON t1.key = t2.key;`,
            `SELECT * FROM VALUES ("one", array(0, 1)), ("two", array(2, 3)) AS data(a, b);`,
            `SELECT * FROM employee ANTI JOIN department ON employee.deptno = department.deptno;`,
            `SELECT * FROM person WHERE name LIKE '%\\_%';`,
            `SELECT * FROM person WHERE name LIKE '%$_%' ESCAPE '$';`,
            `SELECT c FROM number1 EXCEPT ALL (SELECT c FROM number2);`,
            `(SELECT c FROM number1) INTERSECT ALL (SELECT c FROM number2);`,
            `SELECT c FROM number1 UNION ALL (SELECT c FROM number2);`,
            `SELECT * FROM test TABLESAMPLE (5 ROWS);`,
            `SELECT * FROM test TABLESAMPLE (BUCKET 4 OUT OF 10);`,
        ];
        validateTest(sqls);
    });

    test('SELECT Table-valued Functions, Window Functions, CASE, LATERAL VIEW, PIVOT Statement', () => {
        const sqls = [
            `SELECT * FROM range(6 + cos(3));`,
            `SELECT inline(array(struct(1, 'a'), struct(2, 'b')));`,
            `SELECT * FROM test LATERAL VIEW explode (ARRAY(3,4)) AS c2;`,
            `SELECT name, dept, RANK() OVER (PARTITION BY dept ORDER BY salary) AS rank FROM employees;`,
            `SELECT name, dept, salary, MIN(salary) OVER (PARTITION BY dept ORDER BY salary) AS min
    FROM employees;`,
            `SELECT id, CASE id WHEN 100 then 'bigger' WHEN  id > 300 THEN '300' ELSE 'small' END FROM person;`,
            `SELECT * FROM person
    WHERE 
        CASE 1 = 1 
            WHEN 100 THEN 'big' 
            WHEN 200 THEN 'bigger'
            WHEN 300 THEN 'biggest' 
            ELSE 'small'
        END = 'small';`,
            `SELECT * FROM person
    LATERAL VIEW EXPLODE(ARRAY(30, 60)) tabelName AS c_age
    LATERAL VIEW EXPLODE(ARRAY(40, 80)) AS d_age;`,
            `SELECT * FROM person
    LATERAL VIEW OUTER EXPLODE(ARRAY()) tabelName AS c_age;`,
            `SELECT * FROM person
    PIVOT (
        SUM(age) AS a, AVG(class) AS c
        FOR name IN ('John' AS john, 'Mike' AS mike)
    );`,
        ];
        validateTest(sqls);
    });

    test('EXPLAIN Statement', () => {
        const sqls = [
            `EXPLAIN select k, sum(v) from values (1, 2), (1, 3) t(k, v) group by k;`,
            `EXPLAIN EXTENDED select k, sum(v) from values (1, 2), (1, 3) t(k, v) group by k;`,
        ];
        validateTest(sqls);
    });

    test('ANALYZE Statement', () => {
        const sqls = [
            `ANALYZE TABLE students COMPUTE STATISTICS NOSCAN;`,
            `ANALYZE TABLE students COMPUTE STATISTICS FOR COLUMNS name;`,
        ];
        validateTest(sqls);
    });

    test('CACHE TABLE, UNCACHE TABLE, CLEAR CACHE, REFRESH TABLE, REFRESH Statement', () => {
        const sqls = [
            `CACHE TABLE testCache OPTIONS ('storageLevel' 'DISK_ONLY') SELECT * FROM testData;`,
            `UNCACHE TABLE t1;`,
            `CLEAR CACHE;`,
            `REFRESH TABLE tbl1;`,
            `REFRESH "hdfs://path/to/table";`,
        ];
        validateTest(sqls);
    });

    test('DESCRIBE DATABASE, TABLE, FUNCTION, QUERY Statement', () => {
        const sqls = [
            `DESCRIBE DATABASE employees;`,
            `DESCRIBE DATABASE EXTENDED employees;`,
            `DESCRIBE TABLE customer;`,
            `DESCRIBE TABLE EXTENDED customer PARTITION (state = 'AR');`,
            `DESC FUNCTION abs;`,
            `DESC FUNCTION max;`,
            `DESC FUNCTION EXTENDED explode;`,
            `DESCRIBE QUERY SELECT age, sum(age) FROM person GROUP BY age;`,
            `DESCRIBE QUERY WITH all_names_cte
    AS (SELECT name from person) SELECT * FROM all_names_cte;`,
            `DESC QUERY VALUES(100, 'John', 10000.20D) AS employee(id, name, salary);`,
        ];
        validateTest(sqls);
    });

    test('SHOW COLUMNS, CREATE TABLE, DATABASES, FUNCTIONS, PARTITIONS, TABLE EXTENDED, TABLES, TBLPROPERTIES, VIEWS Statement', () => {
        const sqls = [
            `SHOW COLUMNS IN customer;`,
            `SHOW CREATE TABLE test;`,
            `SHOW DATABASES LIKE 'pay*';`,
            `SHOW SCHEMAS;`,
            `SHOW FUNCTIONS trim;`,
            `SHOW SYSTEM FUNCTIONS salesdb.max;`,
            `SHOW FUNCTIONS LIKE 't[a-z][a-z][a-z]';`,
            `SHOW PARTITIONS customer;`,
            `SHOW PARTITIONS customer PARTITION (city =  'San Jose');`,
            `SHOW TABLE EXTENDED LIKE 'employee';`,
            `SHOW TABLES;`,
            `SHOW TABLES FROM userdb;`,
            `SHOW TABLES LIKE 'sam*|suj';`,
            `SHOW TBLPROPERTIES customer ('created.date');`,
            `SHOW VIEWS;`,
            `SHOW VIEWS LIKE 'sam|suj|temp*';`,
        ];
        validateTest(sqls);
    });

    test('SET, RESET Statement', () => {
        const sqls = [
            `SET spark.sql.variable.substitute=false;`,
            `RESET`,
        ];
        validateTest(sqls);
    });

    test('ADD, LIST Statement', () => {
        const sqls = [
            `ADD FILE /tmp/test;`,
            `ADD FILE "/path/to/some/directory";`,
            `ADD JAR /tmp/test.jar;`,
            `ADD JAR '/some/other.jar';`,
            `LIST FILE;`,
            `LIST FILE /tmp/test /some/random/file /another/random/file;`,
            `LIST JAR;`,
            `LIST JAR /tmp/test.jar /some/random.jar /another/random.jar;`,
        ];
        validateTest(sqls);
    });
});
