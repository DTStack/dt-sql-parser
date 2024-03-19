-- aggregate_function(input1 [, input2, ...]) FILTER (WHERE boolean_expression)

-- { PERCENTILE_CONT | PERCENTILE_DISC }(percentile) WITHIN GROUP (ORDER BY { order_by_expression [ ASC | DESC ] [ NULLS { FIRST | LAST } ] [ , ... ] }) FILTER (WHERE boolean_expression)

CREATE OR REPLACE TEMPORARY VIEW basic_pays AS SELECT * FROM VALUES
('Diane Murphy','Accounting',8435),
('Mary Patterson','Accounting',9998),
('Jeff Firrelli','Accounting',8992),
('William Patterson','Accounting',8870),
('Gerard Bondur','Accounting',11472),
('Anthony Bow','Accounting',6627),
('Leslie Jennings','IT',8113),
('Leslie Thompson','IT',5186),
('Julie Firrelli','Sales',9181),
('Steve Patterson','Sales',9441),
('Foon Yue Tseng','Sales',6660),
('George Vanauf','Sales',10563),
('Loui Bondur','SCM',10449),
('Gerard Hernandez','SCM',6949),
('Pamela Castillo','SCM',11303),
('Larry Bott','SCM',11798),
('Barry Jones','SCM',10586)
AS basic_pays(employee_name, department, salary);

SELECT * FROM basic_pays;

SELECT
    department,
    percentile_cont(0.25) WITHIN GROUP (ORDER BY salary) AS pc1,
    percentile_cont(0.25) WITHIN GROUP (ORDER BY salary) FILTER (WHERE employee_name LIKE '%Bo%') AS pc2,
    percentile_cont(0.25) WITHIN GROUP (ORDER BY salary DESC) AS pc3,
    percentile_cont(0.25) WITHIN GROUP (ORDER BY salary DESC) FILTER (WHERE employee_name LIKE '%Bo%') AS pc4,
    percentile_disc(0.25) WITHIN GROUP (ORDER BY salary) AS pd1,
    percentile_disc(0.25) WITHIN GROUP (ORDER BY salary) FILTER (WHERE employee_name LIKE '%Bo%') AS pd2,
    percentile_disc(0.25) WITHIN GROUP (ORDER BY salary DESC) AS pd3,
    percentile_disc(0.25) WITHIN GROUP (ORDER BY salary DESC) FILTER (WHERE employee_name LIKE '%Bo%') AS pd4
FROM basic_pays
GROUP BY department
ORDER BY department;


-- aggregate_function(input1 [, input2, ...]) FILTER (WHERE boolean_expression)

-- { PERCENTILE_CONT | PERCENTILE_DISC }(percentile) WITHIN GROUP (ORDER BY { order_by_expression [ ASC | DESC ] [ NULLS { FIRST | LAST } ] [ , ... ] }) FILTER (WHERE boolean_expression)

CREATE OR REPLACE TEMPORARY VIEW basic_pays AS SELECT * FROM VALUES
('Diane Murphy','Accounting',8435),
('Mary Patterson','Accounting',9998),
('Jeff Firrelli','Accounting',8992),
('William Patterson','Accounting',8870),
('Gerard Bondur','Accounting',11472),
('Anthony Bow','Accounting',6627),
('Leslie Jennings','IT',8113),
('Leslie Thompson','IT',5186),
('Julie Firrelli','Sales',9181),
('Steve Patterson','Sales',9441),
('Foon Yue Tseng','Sales',6660),
('George Vanauf','Sales',10563),
('Loui Bondur','SCM',10449),
('Gerard Hernandez','SCM',6949),
('Pamela Castillo','SCM',11303),
('Larry Bott','SCM',11798),
('Barry Jones','SCM',10586)
AS basic_pays(employee_name, department, salary);

SELECT * FROM basic_pays;

SELECT
    department,
    percentile_cont(0.25) WITHIN GROUP (ORDER BY salary) AS pc1,
    percentile_cont(0.25) WITHIN GROUP (ORDER BY salary) FILTER (WHERE employee_name LIKE '%Bo%') AS pc2,
    percentile_cont(0.25) WITHIN GROUP (ORDER BY salary DESC) AS pc3,
    percentile_cont(0.25) WITHIN GROUP (ORDER BY salary DESC) FILTER (WHERE employee_name LIKE '%Bo%') AS pc4,
    percentile_disc(0.25) WITHIN GROUP (ORDER BY salary) AS pd1,
    percentile_disc(0.25) WITHIN GROUP (ORDER BY salary) FILTER (WHERE employee_name LIKE '%Bo%') AS pd2,
    percentile_disc(0.25) WITHIN GROUP (ORDER BY salary DESC) AS pd3,
    percentile_disc(0.25) WITHIN GROUP (ORDER BY salary DESC) FILTER (WHERE employee_name LIKE '%Bo%') AS pd4
FROM basic_pays
GROUP BY department
ORDER BY department;


-- aggregate_function(input1 [, input2, ...]) FILTER (WHERE boolean_expression)

-- { PERCENTILE_CONT | PERCENTILE_DISC }(percentile) WITHIN GROUP (ORDER BY { order_by_expression [ ASC | DESC ] [ NULLS { FIRST | LAST } ] [ , ... ] }) FILTER (WHERE boolean_expression)

CREATE OR REPLACE TEMPORARY VIEW basic_pays AS SELECT * FROM VALUES
('Diane Murphy','Accounting',8435),
('Mary Patterson','Accounting',9998),
('Jeff Firrelli','Accounting',8992),
('William Patterson','Accounting',8870),
('Gerard Bondur','Accounting',11472),
('Anthony Bow','Accounting',6627),
('Leslie Jennings','IT',8113),
('Leslie Thompson','IT',5186),
('Julie Firrelli','Sales',9181),
('Steve Patterson','Sales',9441),
('Foon Yue Tseng','Sales',6660),
('George Vanauf','Sales',10563),
('Loui Bondur','SCM',10449),
('Gerard Hernandez','SCM',6949),
('Pamela Castillo','SCM',11303),
('Larry Bott','SCM',11798),
('Barry Jones','SCM',10586)
AS basic_pays(employee_name, department, salary);

SELECT * FROM basic_pays;

SELECT
    department,
    percentile_cont(0.25) WITHIN GROUP (ORDER BY salary) AS pc1,
    percentile_cont(0.25) WITHIN GROUP (ORDER BY salary) FILTER (WHERE employee_name LIKE '%Bo%') AS pc2,
    percentile_cont(0.25) WITHIN GROUP (ORDER BY salary DESC) AS pc3,
    percentile_cont(0.25) WITHIN GROUP (ORDER BY salary DESC) FILTER (WHERE employee_name LIKE '%Bo%') AS pc4,
    percentile_disc(0.25) WITHIN GROUP (ORDER BY salary) AS pd1,
    percentile_disc(0.25) WITHIN GROUP (ORDER BY salary) FILTER (WHERE employee_name LIKE '%Bo%') AS pd2,
    percentile_disc(0.25) WITHIN GROUP (ORDER BY salary DESC) AS pd3,
    percentile_disc(0.25) WITHIN GROUP (ORDER BY salary DESC) FILTER (WHERE employee_name LIKE '%Bo%') AS pd4
FROM basic_pays
GROUP BY department
ORDER BY department;


-- aggregate_function(input1 [, input2, ...]) FILTER (WHERE boolean_expression)

-- { PERCENTILE_CONT | PERCENTILE_DISC }(percentile) WITHIN GROUP (ORDER BY { order_by_expression [ ASC | DESC ] [ NULLS { FIRST | LAST } ] [ , ... ] }) FILTER (WHERE boolean_expression)

CREATE OR REPLACE TEMPORARY VIEW basic_pays AS SELECT * FROM VALUES
('Diane Murphy','Accounting',8435),
('Mary Patterson','Accounting',9998),
('Jeff Firrelli','Accounting',8992),
('William Patterson','Accounting',8870),
('Gerard Bondur','Accounting',11472),
('Anthony Bow','Accounting',6627),
('Leslie Jennings','IT',8113),
('Leslie Thompson','IT',5186),
('Julie Firrelli','Sales',9181),
('Steve Patterson','Sales',9441),
('Foon Yue Tseng','Sales',6660),
('George Vanauf','Sales',10563),
('Loui Bondur','SCM',10449),
('Gerard Hernandez','SCM',6949),
('Pamela Castillo','SCM',11303),
('Larry Bott','SCM',11798),
('Barry Jones','SCM',10586)
AS basic_pays(employee_name, department, salary);

SELECT * FROM basic_pays;

SELECT
    department,
    percentile_cont(0.25) WITHIN GROUP (ORDER BY salary) AS pc1,
    percentile_cont(0.25) WITHIN GROUP (ORDER BY salary) FILTER (WHERE employee_name LIKE '%Bo%') AS pc2,
    percentile_cont(0.25) WITHIN GROUP (ORDER BY salary DESC) AS pc3,
    percentile_cont(0.25) WITHIN GROUP (ORDER BY salary DESC) FILTER (WHERE employee_name LIKE '%Bo%') AS pc4,
    percentile_disc(0.25) WITHIN GROUP (ORDER BY salary) AS pd1,
    percentile_disc(0.25) WITHIN GROUP (ORDER BY salary) FILTER (WHERE employee_name LIKE '%Bo%') AS pd2,
    percentile_disc(0.25) WITHIN GROUP (ORDER BY salary DESC) AS pd3,
    percentile_disc(0.25) WITHIN GROUP (ORDER BY salary DESC) FILTER (WHERE employee_name LIKE '%Bo%') AS pd4
FROM basic_pays
GROUP BY department
ORDER BY department;
