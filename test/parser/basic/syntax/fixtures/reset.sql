-- RESET;

-- RESET configuration_key;

-- Reset any runtime configurations specific to the current session which were set via the SET command to their default values.
RESET;

-- If you start your application with --conf spark.foo=bar and set spark.foo=foobar in runtime, the example below will restore it to 'bar'. If spark.foo is not specified during starting, the example below will remove this config from the SQLConf. It will ignore nonexistent keys.
RESET spark.abc;
