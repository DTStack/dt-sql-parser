-- https://dev.mysql.com/doc/refman/8.0/en/sql-prepared-statements.html


-- https://dev.mysql.com/doc/refman/8.0/en/prepare.html

/* PREPARE stmt_name FROM preparable_stmt */
PREPARE stmt1 FROM 'SELECT SQRT(POW(?,2) + POW(?,2)) AS hypotenuse';
PREPARE stmt2 FROM @s;




-- https://dev.mysql.com/doc/refman/8.0/en/execute.html

/* EXECUTE stmt_name
    [USING @var_name [, @var_name] ...] */


EXECUTE stmt1 USING @a, @b;
EXECUTE stmt3;




-- https://dev.mysql.com/doc/refman/8.0/en/deallocate-prepare.html

/* {DEALLOCATE | DROP} PREPARE stmt_name */

DEALLOCATE PREPARE stmt1;
DROP PREPARE stmt1;
