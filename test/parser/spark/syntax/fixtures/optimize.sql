-- OPTIMIZE view_identifier [ WHERE where_expression ] ZORDER BY col1, col2...

OPTIMIZE students ZORDER BY id, name;

OPTIMIZE userDB.students ZORDER BY id, name;

OPTIMIZE students WHERE id=1 ZORDER BY id, name;