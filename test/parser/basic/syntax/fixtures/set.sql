-- SET
-- SET [ -v ]
-- SET property_key[ = property_value ]

-- Set a property.
SET spark.sql.variable.substitute=false;

-- List all SQLConf properties with value and meaning.
SET -v;

-- List all SQLConf properties with value for current session.
SET;

-- List the value of specified property key.
SET spark.sql.variable.substitute;
