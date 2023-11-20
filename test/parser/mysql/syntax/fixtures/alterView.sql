-- https://dev.mysql.com/doc/refman/8.0/en/alter-view.html

/* ALTER
    [ALGORITHM = {UNDEFINED | MERGE | TEMPTABLE}]
    [DEFINER = user]
    [SQL SECURITY { DEFINER | INVOKER }]
    VIEW view_name [(column_list)]
    AS select_statement
    [WITH [CASCADED | LOCAL] CHECK OPTION] */



ALTER ALGORITHM = UNDEFINED DEFINER = 'user' SQL SECURITY DEFINER VIEW view_name AS SELECT column1, column2, new_column FROM my_table WHERE condition WITH CASCADED CHECK OPTION;
ALTER ALGORITHM = MERGE DEFINER = 'user' SQL SECURITY DEFINER VIEW view_name AS SELECT column1, column2, new_column FROM my_table WHERE condition WITH CASCADED CHECK OPTION;
ALTER ALGORITHM = TEMPTABLE DEFINER = 'user' SQL SECURITY DEFINER VIEW view_name AS SELECT column1, column2, new_column FROM my_table WHERE condition WITH CASCADED CHECK OPTION;
ALTER ALGORITHM = UNDEFINED DEFINER = 'user' SQL SECURITY INVOKER VIEW view_name AS SELECT column1, column2, new_column FROM my_table WHERE condition WITH CASCADED CHECK OPTION;
ALTER ALGORITHM = MERGE DEFINER = 'user' SQL SECURITY INVOKER VIEW view_name AS SELECT column1, column2, new_column FROM my_table WHERE condition WITH CASCADED CHECK OPTION;
ALTER ALGORITHM = TEMPTABLE DEFINER = 'user' SQL SECURITY INVOKER VIEW view_name AS SELECT column1, column2, new_column FROM my_table WHERE condition WITH CASCADED CHECK OPTION;

ALTER VIEW my_view AS SELECT column1, column2, new_column FROM my_table WHERE condition;
ALTER VIEW my_view AS SELECT column1, column2, new_column FROM my_table;
ALTER VIEW my_view AS SELECT column1, column2 AS new_column FROM my_table;
