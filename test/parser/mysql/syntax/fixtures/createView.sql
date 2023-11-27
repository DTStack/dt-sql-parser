-- https://dev.mysql.com/doc/refman/8.0/en/create-view.html

/* CREATE
    [OR REPLACE]
    [ALGORITHM = {UNDEFINED | MERGE | TEMPTABLE}]
    [DEFINER = user]
    [SQL SECURITY { DEFINER | INVOKER }]
    VIEW view_name [(column_list)]
    AS select_statement
    [WITH [CASCADED | LOCAL] CHECK OPTION] */


CREATE VIEW test.v AS SELECT * FROM t;
CREATE VIEW v_today (today) AS SELECT CURRENT_DATE;
CREATE VIEW v AS SELECT qty, price, qty*price AS value FROM t;
CREATE VIEW v (mycol) AS SELECT 'abc';

CREATE VIEW v AS SELECT * FROM t WHERE t.id = f(t.name);
