-- https://dev.mysql.com/doc/refman/8.0/en/call.html

/* CALL sp_name([parameter[,...]])
CALL sp_name[()] */


CALL p(@version, @increment);
CALL p;
