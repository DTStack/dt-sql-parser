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

SET tez.grouping.max-size = 12800;
SET tez.grouping.max-size;

SET spark.sql.kafka.sasl.mechanism = SCRAM-SHA-512;

SET fs.s3a.server-side-encryption-algorithm = AES-256;

SET fs.s3a.server-side-encryption.key=arn:aws:kms;