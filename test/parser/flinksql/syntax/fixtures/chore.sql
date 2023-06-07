-- LOAD/UNLOAD
LOAD MODULE CORE;

LOAD MODULE dummy WITH ('k1' = 'v1', 'k2' = 'v2');

UNLOAD MODULE CORE;

--SET/RESET
SET;

SET 'test-key' = 'test-value';

RESET;

RESET 'test-key';

-- ADD/REMOVE JAR
ADD JAR '<path_to_filename>.jar'

REMOVE JAR '<path_to_filename>.jar'

-- Complex Arithmetic Expression
INSERT INTO avg_request_size_5m SELECT
    window_start,
    window_end,
    (server_logs_window_5m.a/server_logs_window_5m.b+c)/d*e%f-g AS avg_size
FROM server_logs_window_5m;