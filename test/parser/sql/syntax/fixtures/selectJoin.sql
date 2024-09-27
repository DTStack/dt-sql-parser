-- relation { [ join_type ] JOIN [ LATERAL ] relation [ join_criteria ] | NATURAL join_type JOIN [ LATERAL ] relation }

-- Use employee and department tables to demonstrate different type of joins.
SELECT * FROM employee;

SELECT * FROM department;

-- Use employee and department tables to demonstrate inner join.
SELECT id, name, employee.deptno, deptname FROM employee INNER JOIN department ON employee.deptno = department.deptno;

-- Use employee and department tables to demonstrate left join.
SELECT id, name, employee.deptno, deptname FROM employee LEFT JOIN department ON employee.deptno = department.deptno;

-- Use employee and department tables to demonstrate right join.
SELECT id, name, employee.deptno, deptname FROM employee RIGHT JOIN department ON employee.deptno = department.deptno;

-- Use employee and department tables to demonstrate full join.
SELECT id, name, employee.deptno, deptname FROM employee FULL JOIN department ON employee.deptno = department.deptno;

-- Use employee and department tables to demonstrate cross join.
SELECT id, name, employee.deptno, deptname FROM employee CROSS JOIN department;

-- Use employee and department tables to demonstrate semi join.
SELECT * FROM employee SEMI JOIN department ON employee.deptno = department.deptno;

-- Use employee and department tables to demonstrate anti join.
SELECT * FROM employee ANTI JOIN department ON employee.deptno = department.deptno;
