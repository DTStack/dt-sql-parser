-- https://dev.mysql.com/doc/refman/5.7/en/case.html


/* CASE case_value
    WHEN when_value THEN statement_list
    [WHEN when_value THEN statement_list] ...
    [ELSE statement_list]
END CASE

or

CASE
    WHEN search_condition THEN statement_list
    [WHEN search_condition THEN statement_list] ...
    [ELSE statement_list]
END CASE */


SELECT
    id,
    CASE
        WHEN age = 18 THEN '成年'
        WHEN age = 60 THEN '老年'
        ELSE '未知'
    END AS name
FROM people;

SELECT
    id,
    name,
    score,
    CASE
        WHEN score >= 90 THEN 'A'
        WHEN score >= 80 THEN 'B'
        WHEN score >= 70 THEN 'C'
        WHEN score >= 60 THEN 'D'
        ELSE 'F'
    END AS grade
FROM students;

SELECT
    id,
    name,
    salary,
    CASE salary
        WHEN 1000 THEN 'Low'
        WHEN 2000 THEN 'Medium'
        WHEN 3000 THEN 'High'
        ELSE 'Unknown'
    END AS salary_grade
FROM employees;

SELECT
    id,
    name,
    salary,
    CASE
        WHEN salary < 1000 THEN 'Low'
        WHEN salary >= 1000 AND salary < 3000 THEN 'Medium'
        WHEN salary >= 3000 THEN 'High'
        ELSE 'Unknown'
    END AS salary_grade
FROM employees;
