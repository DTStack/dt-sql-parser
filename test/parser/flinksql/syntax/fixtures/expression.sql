SELECT FROM_UNIXTIME(t1.create_time / 1000, 'yyyyMMddHHmmss') AS create_time FROM t1;

SELECT FROM_UNIXTIME(t1.create_time/1000, 'yyyyMMddHHmmss') AS create_time FROM t1;
SELECT FROM_UNIXTIME(t1.create_time/1000 * 1, 'yyyyMMddHHmmss') AS create_time FROM t1;
SELECT FROM_UNIXTIME(t1.create_time/1000 + 1, 'yyyyMMddHHmmss') AS create_time FROM t1;
SELECT FROM_UNIXTIME(t1.create_time/1000 - 1, 'yyyyMMddHHmmss') AS create_time FROM t1;
SELECT FROM_UNIXTIME(t1.create_time/1000 % 2, 'yyyyMMddHHmmss') AS create_time FROM t1;
SELECT FROM_UNIXTIME(t1.create_time/1000 / 1, 'yyyyMMddHHmmss') AS create_time FROM t1;
