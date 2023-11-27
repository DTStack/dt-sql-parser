-- https://dev.mysql.com/doc/refman/8.0/en/create-procedure.html

/* CREATE
    [DEFINER = user]
    PROCEDURE [IF NOT EXISTS] sp_name ([proc_parameter[,...]])
    [characteristic ...] routine_body

    proc_parameter:
        [ IN | OUT | INOUT ] param_name type

    characteristic: {
        COMMENT 'string'
        | LANGUAGE SQL
        | [NOT] DETERMINISTIC
        | { CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA }
        | SQL SECURITY { DEFINER | INVOKER }
    } */


CREATE DEFINER = 'admin'@'localhost' PROCEDURE account_count() SQL SECURITY INVOKER SELECT 'Number of accounts:', COUNT(*) FROM mysql.user;

CREATE PROCEDURE AddTwoNumbers(IN a INT, IN b INT) SELECT a + b AS Sum;
CREATE PROCEDURE IF NOT EXISTS AddTwoNumbers(IN a INT, IN b INT) SELECT a + b AS Sum;
