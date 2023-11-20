-- https://dev.mysql.com/doc/refman/8.0/en/savepoint.html

/* SAVEPOINT identifier
ROLLBACK [WORK] TO [SAVEPOINT] identifier
RELEASE SAVEPOINT identifier */


SAVEPOINT identifier;

ROLLBACK WORK TO SAVEPOINT identifier;
ROLLBACK TO SAVEPOINT identifier;
ROLLBACK WORK TO identifier;
ROLLBACK TO identifier;

RELEASE SAVEPOINT identifier;
