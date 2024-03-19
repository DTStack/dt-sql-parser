CREATE EXTERNAL TABLE external_parquet (c1 INT, c2 STRING, c3 TIMESTAMP)
  STORED AS PARQUET LOCATION '/user/etl/destination';

create table census (name string, census_year int) partitioned by (year int);

CREATE TABLE census_data (last_name STRING, first_name STRING, state STRING, address STRING)
  SORT BY (last_name, state)
  STORED AS PARQUET
  TBLPROPERTIES ('transactional'='true', 'transactional_properties'='insert_only');

CREATE TABLE sorted_census_data
  SORT BY (last_name, state)
  STORED AS PARQUET
  AS SELECT last_name, first_name, state, address
    FROM unsorted_census_data;

CREATE TABLE yy2 (s STRING, year INT);

CREATE TABLE kudu_no_partition_by_clause
  (
    id bigint PRIMARY KEY, s STRING, b BOOLEAN
  )
  STORED AS KUDU;

CREATE TABLE kudu_t1 (id BIGINT PRIMARY key, s STRING, b BOOLEAN)
  PARTITION BY HASH (id) PARTITIONS 20 STORED AS KUDU;

CREATE TABLE kudu_t2 (id BIGINT, s STRING, b BOOLEAN, PRIMARY KEY (id,s))
  PARTITION BY HASH (s) PARTITIONS 30 STORED AS KUDU;

CREATE TABLE kudu_t3 (id BIGINT, year INT, s STRING,
    b BOOLEAN, PRIMARY KEY (id,year))
  PARTITION BY HASH (id) PARTITIONS 20,
  RANGE (year) (PARTITION 1980 <= VALUES < 1990,
    PARTITION 1990 <= VALUES < 2000,
    PARTITION VALUE = 2001,
    PARTITION 2001 < VALUES < 2003)
  STORED AS KUDU;

CREATE EXTERNAL TABLE external_t1 STORED AS KUDU
  TBLPROPERTIES ('kudu.table_name'='kudu_tbl_created_via_api');

CREATE EXTERNAL TABLE myextkudutbl (
  id int PRIMARY KEY,
  name string)
  PARTITION BY HASH PARTITIONS 8
  STORED AS KUDU
  TBLPROPERTIES ('external.table.purge'='true');

CREATE TABLE ctas_t1
  PRIMARY KEY (id) PARTITION BY HASH (id) PARTITIONS 10
  STORED AS KUDU
  AS SELECT id, s FROM kudu_t1;

CREATE TABLE pk_multiple_columns
(
  col1 BIGINT,
  col2 STRING,
  col3 BOOLEAN,
  PRIMARY KEY (col1, col2)
) PARTITION BY HASH(col2) PARTITIONS 2 STORED AS KUDU;

CREATE TABLE user.inline_pk_rewritten (
  id BIGINT NOT NULL ENCODING AUTO_ENCODING COMPRESSION DEFAULT_COMPRESSION,
  s STRING NULL ENCODING AUTO_ENCODING COMPRESSION DEFAULT_COMPRESSION,
  PRIMARY KEY (id)
)
PARTITION BY HASH (id) PARTITIONS 2
STORED AS KUDU
TBLPROPERTIES ('kudu.master_addresses'='host.example.com');

CREATE TABLE default_vals
(
  id BIGINT PRIMARY KEY,
  name STRING NOT NULL DEFAULT 'unknown',
  address STRING DEFAULT upper('no fixed address'),
  age INT DEFAULT -1,
  earthling BOOLEAN DEFAULT TRUE,
  planet_of_origin STRING DEFAULT 'Earth',
  optional_col STRING DEFAULT NULL
) PARTITION BY HASH(id) PARTITIONS 2 STORED AS KUDU;

CREATE TABLE various_encodings
(
  id BIGINT PRIMARY KEY,
  c1 BIGINT ENCODING PLAIN_ENCODING,
  c2 BIGINT ENCODING AUTO_ENCODING,
  c3 TINYINT ENCODING BIT_SHUFFLE,
  c4 DOUBLE ENCODING BIT_SHUFFLE,
  c5 BOOLEAN ENCODING RLE,
  c6 STRING ENCODING DICT_ENCODING,
  c7 STRING ENCODING PREFIX_ENCODING
) PARTITION BY HASH(id) PARTITIONS 2 STORED AS KUDU;


CREATE TABLE blog_posts
(
  user_id STRING ENCODING DICT_ENCODING,
  post_id BIGINT ENCODING BIT_SHUFFLE,
  subject STRING ENCODING PLAIN_ENCODING,
  body STRING COMPRESSION LZ4,
  spanish_translation STRING COMPRESSION SNAPPY,
  esperanto_translation STRING COMPRESSION ZLIB,
  PRIMARY KEY (user_id, post_id)
) PARTITION BY HASH(user_id, post_id) PARTITIONS 2 STORED AS KUDU;
