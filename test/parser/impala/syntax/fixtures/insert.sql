/* [with_clause]
INSERT [hint_clause] { INTO | OVERWRITE } [TABLE] table_name
[(column_list)]
[ PARTITION (partition_clause)]
{
[hint_clause] select_statement
| VALUES (value [, value ...]) [, (value [, value ...]) ...]
} */
-- INSERT [hint_clause] { INTO | OVERWRITE } table_name [hint_clause] select_statement
INSERT INTO my_table
SELECT
    *
from
    my_table1;

INSERT OVERWRITE my_table
SELECT
    *
from
    my_table1;

INSERT
INTO target_table
SELECT
    val1,
    val2,
    val3
FROM
    dual
WHERE
    NOT EXISTS (
        SELECT
            1
        FROM
            target_table
        WHERE
            col1 = val1
    );

-- INSERT { INTO | OVERWRITE } table_name [(column_list)] [ PARTITION (partition_clause)] select_statement
INSERT INTO
    target_table (col1, col2, col3) PARTITION (year = 2016, month IN (10, 11, 12))
SELECT
    *
FROM
    dual;

INSERT OVERWRITE target_table (col1, col2, col3) PARTITION (year BETWEEN 2016 AND 2030, month IN (10, 11, 12))
SELECT
    *
FROM
    dual;

-- INSERT [hint_clause] { INTO | OVERWRITE } table_name [hint_clause] VALUES (value [, value ...]) [, (value [, value ...]) ...]
INSERT
OVERWRITE target_table (col1, col2, col3) PARTITION (year BETWEEN 2016 AND 2030, month IN (10, 11, 12))
VALUES
    (col1, 'a'),
    (col2, 'b'),
    (col3, 'xyzzy');

WITH
    cte AS (
        SELECT
            col1,
            col2
        FROM
            source_table
        WHERE
            condition
    )
INSERT INTO
    target_table (col1, col2)
SELECT
    col1,
    col2
FROM
    cte;

-- example
insert into
    table text_table
select
    *
from
    default.tab1;

insert overwrite table parquet_table
select
    *
from
    default.tab1
limit
    3;

insert into
    val_test_1
values
    (100, 99.9 / 10, 'abc', true, now ());

insert overwrite val_test_2
values
    (1, 'a'),
    (2, 'b'),
    (-1, 'xyzzy');

insert into
    t2
select
    *
from
    t1;

insert into
    t2
select
    c1,
    c2
from
    t1;

insert into
    t2 (c1)
select
    c1
from
    t1;

insert into
    t2 (c2, c1)
select
    c1,
    c2
from
    t1;

insert into
    t2 (y)
select
    c1
from
    t1;

INSERT INTO
    t1 PARTITION (x = 10, y = 'a')
SELECT
    c1
FROM
    some_other_table;

INSERT INTO
    t1 PARTITION (x, y)
VALUES
    (1, 2, ' c ');

INSERT INTO
    t1 (w) PARTITION (x, y)
VALUES
    (1, 2, ' c ');

INSERT INTO
    t1 PARTITION (x, y = 'c')
VALUES
    (1, 2);

INSERT INTO
    t1 PARTITION (x = 20, y)
SELECT
    *
FROM
    source;

with
    t1 as (
        select
            1
    ),
    t2 as (
        select
            2
    )
insert into
    tab
select
    *
from
    t1
union all
select
    *
from
    t2;

insert into
    sample_demo_partitions partition (n = 3)
select
    *
from
    sample_demo;