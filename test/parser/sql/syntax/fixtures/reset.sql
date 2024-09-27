-- RESET;

-- RESET configuration_key;

-- Reset any runtime configurations specific to the current session which were set via the SET command to their default values.
RESET;

-- If you start your application with --conf sql.foo=bar and set sql.foo=foobar in runtime, the example below will restore it to 'bar'. If sql.foo is not specified during starting, the example below will remove this config from the SQLConf. It will ignore nonexistent keys.
RESET sql.abc;
