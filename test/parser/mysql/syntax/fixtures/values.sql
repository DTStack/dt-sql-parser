-- https://dev.mysql.com/doc/refman/8.0/en/values.html

/* VALUES row_constructor_list [ORDER BY column_designator] [LIMIT number]

row_constructor_list:
    ROW(value_list)[, ROW(value_list)][, ...]

value_list:
    value[, value][, ...]

column_designator:
    column_index */

VALUES ROW(1,-2,3), ROW(5,7,9), ROW(4,6,8);
VALUES ROW(1,-2,3), ROW(5,7,9), ROW(4,6,8) ORDER BY column_1;
VALUES ROW("q", 42, '2019-12-18'), ROW(23, "abc", 98.6), ROW(27.0002, "Mary Smith", '{"a": 10, "b": 25}');
VALUES ROW(1,2), ROW(3,4), ROW(5,6), ROW(10,15), ROW(20,25);
VALUES ROW(1,2) UNION VALUES ROW(10,15);
VALUES ROW(1,2), ROW(3,4), ROW(5,6) UNION VALUES ROW(10,15),ROW(20,25);
VALUES ROW(1,2), ROW(3,4), ROW(5,6) INTERSECT VALUES ROW(10,15), ROW(20,25), ROW(3,4);
VALUES ROW(1,2), ROW(3,4), ROW(5,6) EXCEPT VALUES ROW(10,15), ROW(20,25), ROW(3,4);
