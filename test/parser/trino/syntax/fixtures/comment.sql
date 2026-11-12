COMMENT ON TABLE users IS 'master table';

COMMENT ON VIEW users IS 'master view';

COMMENT ON MATERIALIZED VIEW users IS 'master view';

COMMENT ON MATERIALIZED VIEW catalog.schema.users IS NULL;

comment on materialized view "my schema"."my view" is 'owner''s view';

COMMENT ON COLUMN users.name IS 'full name';

SHOW COMMENT ON COLUMN column1;

SHOW COMMENT ON TABLE table1;
