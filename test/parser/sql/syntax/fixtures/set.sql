-- SET
-- SET [ -v ]
-- SET property_key[ = property_value ]

-- Set a property.
SET sql.sql.variable.substitute=false;

-- List all SQLConf properties with value and meaning.
SET -v;

-- List all SQLConf properties with value for current session.
SET;

-- List the value of specified property key.
SET sql.sql.variable.substitute;
