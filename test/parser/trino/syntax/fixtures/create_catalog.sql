CREATE CATALOG tpch USING tpch;

CREATE CATALOG brain USING memory
WITH ("memory.max-data-per-node" = '128MB');


CREATE CATALOG example USING postgresql
WITH (
  "connection-url" = 'jdbc:pg:localhost:5432',
  "connection-user" = '${ENV:POSTGRES_USER}',
  "connection-password" = '${ENV:POSTGRES_PASSWORD}',
  "case-insensitive-name-matching" = 'true'
);