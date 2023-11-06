-- ABORT
ABORT WORK;
ABORT TRANSACTION;

-- ANALYZE
ANALYZE VERBOSE table_name ( column_name, column_name2);
ANALYZE;

-- BEGIN
BEGIN WORK ISOLATION LEVEL READ UNCOMMITTED
    READ WRITE
    NOT DEFERRABLE;
-- CHECKPOINT
CHECKPOINT;

-- CLUSTER
CLUSTER VERBOSE table_name USING index_name;
CLUSTER VERBOSE;

-- CLOSE
CLOSE ALL;
CLOSE name_2;

-- COMMENT
COMMENT ON
AGGREGATE agg_name (agg_type, agg_type2) IS 'text';
COMMENT ON CAST (source_type AS target_type) IS 'text';
COMMENT ON COLLATION object_name IS 'text';
COMMENT ON COLUMN relation_name.column_name IS 'text'
COMMENT ON CONVERSION object_name IS 'text';
COMMENT ON CONSTRAINT constraint_name ON table_name IS 'text';
COMMENT ON DATABASE object_name IS 'text';
COMMENT ON DOMAIN object_name IS 'text';
COMMENT ON EXTENSION object_name IS 'text';
COMMENT ON EVENT TRIGGER object_name IS 'text';
COMMENT ON FOREIGN DATA WRAPPER object_name IS 'text';
COMMENT ON FOREIGN TABLE object_name IS 'text';
COMMENT ON FUNCTION function_name ( INOUT argname timestamp) IS 'text';
COMMENT ON INDEX object_name IS 'text';
COMMENT ON LARGE OBJECT 346344 IS 'text';
COMMENT ON MATERIALIZED VIEW object_name IS 'text';
COMMENT ON OPERATOR -(int, NONE) IS 'text';
COMMENT ON OPERATOR CLASS object_name USING index_method IS 'text';
COMMENT ON OPERATOR FAMILY object_name USING index_method IS 'text';
COMMENT ON PROCEDURAL LANGUAGE object_name IS 'text';
COMMENT ON ROLE object_name IS 'text';
COMMENT ON RULE rule_name ON table_name IS 'text';
COMMENT ON SCHEMA object_name IS 'text';
COMMENT ON SEQUENCE object_name IS 'text';
COMMENT ON SERVER object_name IS 'text';
COMMENT ON TABLE object_name IS 'text';
COMMENT ON TABLESPACE object_name IS 'text';
COMMENT ON TEXT SEARCH CONFIGURATION object_name IS 'text';
COMMENT ON TEXT SEARCH DICTIONARY object_name IS 'text';
COMMENT ON TEXT SEARCH PARSER object_name IS 'text';
COMMENT ON TEXT SEARCH TEMPLATE object_name IS 'text';
COMMENT ON TRIGGER trigger_name ON table_name IS 'text';
COMMENT ON TYPE object_name IS 'text';
COMMENT ON VIEW object_name IS 'text';

-- COMMIT
COMMIT TRANSACTION;
COMMIT WORK;

-- COMMIT PREPARED
COMMIT PREPARED 'foobar';

-- COPY
COPY table_name ( column_name, column_name2) 
FROM PROGRAM 'command'
WITH ( FORMAT format_name);
COPY (SELECT * FROM td)
    TO STDOUT
    WITH (DELIMITER 'delimiter_character');


-- DEALLOCATE
DEALLOCATE PREPARE name;
DEALLOCATE PREPARE ALL;

-- DECLARE
DECLARE name BINARY INSENSITIVE NO SCROLL CURSOR WITH HOLD FOR
SELECT
    *
FROM
    tb;

DECLARE name CURSOR FOR
SELECT
    *
FROM
    abs;

-- DISCARD
DISCARD TEMPORARY;
DISCARD PLANS;
DISCARD ALL;
DISCARD TEMP;

-- DO
DO LANGUAGE lang_name '$$DECLARE' r record;
DO '$$DECLARE' r record;

-- END
END TRANSACTION;
END WORK;

-- EXECUTE
EXECUTE name ( parameter, parameter2);

-- EXPLAIN
EXPLAIN ( ANALYZE 'true',VERBOSE true,  COSTS TRUE, FORMAT TEXT) SELECT * FROM no_nw;
EXPLAIN ANALYZE VERBOSE SELECT * FROM no_nw;

-- FETCH
FETCH NEXT FROM cursor_name;

-- GRANT TODO-->SQL

-- LISTEN
LISTEN channel;

-- LOAD
LOAD 'filename';

-- LOCK  
-- lockmode：ACCESS SHARE | ROW SHARE | ROW EXCLUSIVE | SHARE UPDATE EXCLUSIVE
-- | SHARE | SHARE ROW EXCLUSIVE | EXCLUSIVE | ACCESS EXCLUSIVE
LOCK TABLE ONLY name * IN ACCESS SHARE MODE NOWAIT;

-- MOVE
MOVE NEXT FROM cursor_name;

-- NOTIFY
NOTIFY virtual, 'This is the payload';

-- PREPARE
PREPARE name ( int, numeric) AS INSERT INTO foo VALUES($1, $2, $3, $4);

-- PREPARE TRANSACTION
PREPARE TRANSACTION 'foobar';

-- REASSIGN OWNED
REASSIGN OWNED BY old_role TO new_role;

-- REFRESH MATERIALIZED VIEW
REFRESH MATERIALIZED VIEW name WITH NO DATA;

-- REINDEX
REINDEX DATABASE name FORCE;
REINDEX TABLE name;
REINDEX INDEX name;
REINDEX SYSTEM name;

-- RELEASE SAVEPOINT
RELEASE SAVEPOINT savepoint_name;

-- RESET
RESET configuration_parameter;
RESET ALL;

-- REVOKE
REVOKE GRANT OPTION FOR
REFERENCES, CREATE
    ON TABLE table_name
    FROM GROUP role_name, PUBLIC
    RESTRICT;
REVOKE ALL PRIVILEGES ON accounts FROM PUBLIC;
REVOKE CREATE ON SCHEMA public_name FROM PUBLIC;

-- ROLLBACK
ROLLBACK TRANSACTION;
ROLLBACK WORK;

-- ROLLBACK PREPARED
ROLLBACK PREPARED 'foobar';

-- ROLLBACK TO SAVEPOINT
ROLLBACK TRANSACTION TO SAVEPOINT savepoint_name;
ROLLBACK WORK TO SAVEPOINT savepoint_name;
ROLLBACK TO savepoint_name;

-- SAVEPOINT
SAVEPOINT savepoint_name;

-- SECURITY LABEL
SECURITY LABEL FOR provider ON  TABLE object_name IS 'label';
SECURITY LABEL FOR provider ON  COLUMN table_name.column_name IS 'label';
SECURITY LABEL FOR provider ON  AGGREGATE agg_name (agg_type, agg_type2) IS 'label';
SECURITY LABEL FOR provider ON  DATABASE object_name IS 'label';
SECURITY LABEL FOR provider ON  DOMAIN object_name IS 'label';
SECURITY LABEL FOR provider ON  EVENT TRIGGER object_name IS 'label';
SECURITY LABEL FOR provider ON  FOREIGN TABLE object_name IS 'label';
SECURITY LABEL FOR provider ON FUNCTION function_name ( VARIADIC arg_name timestamp) IS 'label';
SECURITY LABEL FOR provider ON  LARGE OBJECT 2432 IS 'label';
SECURITY LABEL FOR provider ON  MATERIALIZED VIEW object_name IS 'label';
SECURITY LABEL FOR provider ON PROCEDURAL LANGUAGE object_name IS 'label';
SECURITY LABEL FOR provider ON  ROLE object_name IS 'label';
SECURITY LABEL FOR provider ON  SCHEMA object_name IS 'label';
SECURITY LABEL FOR provider ON  SEQUENCE object_name IS 'label';
SECURITY LABEL FOR provider ON  TABLESPACE object_name IS 'label';
SECURITY LABEL FOR provider ON  TYPE object_name IS 'label';
SECURITY LABEL FOR provider ON  VIEW object_name IS 'label';

-- Caveats
ANALYZE measurement;

