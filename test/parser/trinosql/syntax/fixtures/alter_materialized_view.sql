ALTER MATERIALIZED VIEW people RENAME TO users;
ALTER MATERIALIZED VIEW IF EXISTS people RENAME TO users;
ALTER MATERIALIZED VIEW people SET PROPERTIES x = 'y';
ALTER MATERALIZED VIEW people SET PROPERTIES foo = 123, bar = 456;
ALTER MATERALIZED VIEW people SET PROPERTIES x = DEFAULT;

