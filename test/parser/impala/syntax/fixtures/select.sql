-- example
-- JOINS
SELECT * from a;
SELECT t1.c1, t2.c2 FROM t1 JOIN t2
  ON t1.id = t2.id and t1.type_flag = t2.type_flag
  WHERE t1.c1 > 100;

SELECT t1.c1, t2.c2 FROM t1 JOIN t2
  USING (id, type_flag)
  WHERE t1.c1 > 100;

SELECT t1.c1, t2.c2 FROM t1, t2
  WHERE
  t1.id = t2.id AND t1.type_flag = t2.type_flag
  AND t1.c1 > 100;

SELECT lhs.id, rhs.parent, lhs.c1, rhs.c2 FROM tree_data lhs, tree_data rhs WHERE lhs.id = rhs.parent;

SELECT t1.id, c1, c2 FROM t1, t2 WHERE t1.id = t2.id;

SELECT t1.id, c1, c2 FROM t1 JOIN t2 ON t1.id = t2.id;

SELECT t1.id, c1, c2 FROM t1 INNER JOIN t2 ON t1.id = t2.id;

SELECT * FROM t1 LEFT OUTER JOIN t2 ON t1.id = t2.id;

SELECT * FROM t1 RIGHT OUTER JOIN t2 ON t1.id = t2.id;

SELECT * FROM t1 FULL OUTER JOIN t2 ON t1.id = t2.id;

SELECT * FROM t1 CROSS JOIN t2 WHERE t1.total > t2.maximum_price;

SELECT * FROM t1 LEFT OUTER JOIN t2 ON t1.int_col < t2.int_col;

SELECT t1.c1, t1.c2, t1.c2 FROM t1 LEFT SEMI JOIN t2 ON t1.id = t2.id;

select t1.c1 as first_id, t2.c2 as second_id from
  t1 join t2 on first_id = second_id;

select fact.custno, dimension.custno from
  customer_data as fact join customer_address as dimension
  using (custno);

-- ORDER BY
SELECT id FROM games ORDER BY score DESC;

SELECT id, item FROM games, games.score
  WHERE item > 1000000
ORDER BY id, item desc;

SELECT id, info.key1 AS k, info.value1 AS v from games3, games3.play AS plays, games3.play.item AS info
  WHERE info.KEY1 = 'score' AND info.VALUE1 > 1000000
ORDER BY id, info.value1 desc;

SELECT user_id AS "Top 10 Visitors", SUM(page_views) FROM web_stats
  GROUP BY page_views, user_id
  ORDER BY SUM(page_views) DESC LIMIT 10;

SELECT page_title AS "Page 3 of search results", page_url FROM search_content
  WHERE LOWER(page_title) LIKE '%game%'
  ORDER BY page_title LIMIT 10 OFFSET 20;

select x from numbers order by x desc nulls last;

-- GROUP BY
select
  ss_item_sk as Item,
  count(ss_item_sk) as Times_Purchased,
  sum(ss_quantity) as Total_Quantity_Purchased
from store_sales
  group by ss_item_sk
  order by sum(ss_quantity) desc
  limit 5;

select
  ss_item_sk as Item,
  count(ss_item_sk) as Times_Purchased,
  sum(ss_quantity) as Total_Quantity_Purchased
from store_sales
  group by ss_item_sk
  having times_purchased >= 100
  order by sum(ss_quantity)
  limit 5;

select ss_wholesale_cost, avg(ss_quantity * ss_sales_price) as avg_revenue_per_sale
  from sales
  group by ss_wholesale_cost
  order by avg_revenue_per_sale desc
  limit 5;

select x as "Top 3" from numbers order by x desc limit 3;

SELECT X FROM T1 LIMIT LENGTH('HELLO WORLD');
SELECT x FROM t1 LIMIT cast(truncate(9.9) AS INT);

-- UNION
select * from (select x from few_ints union all select x from few_ints) as t1 order by x;

-- Subqueries
SELECT employee_name, employee_id FROM employees one WHERE
  salary > (SELECT avg(salary) FROM employees two WHERE one.dept_id = two.dept_id);

SELECT avg(t1.x), max(t2.y) FROM
  (SELECT id, cast(a AS DECIMAL(10,5)) AS x FROM raw_data WHERE a BETWEEN 0 AND 100) AS t1
  JOIN
  (SELECT id, length(s) AS y FROM raw_data WHERE s LIKE 'A%') AS t2
  USING (id);

SELECT count(x) FROM t1 WHERE EXISTS(SELECT 1 FROM t2 WHERE t1.x = t2.y * 10);

SELECT x FROM t1 WHERE x IN (SELECT y FROM t2 WHERE state = 'CA');

SELECT x FROM t1 WHERE y = (SELECT max(z) FROM t2);

SELECT x FROM t1 WHERE y > (SELECT count(z) FROM t2);

SELECT * FROM t1 one WHERE id IN (SELECT parent FROM t1 two WHERE t1.parent = t2.id);

-- TABLESAMPLE
select distinct x from sample_demo tablesample system(50);

select distinct x from sample_demo
  tablesample system(50) repeatable (12345);

select count(*) from sample_demo_partitions
  tablesample system(50) where n = 1;

-- WITH
with t1 as (select 1), t2 as (select 2) insert into tab select * from t1 union all select * from t2;

-- DISTINCT
SELECT COUNT(DISTINCT c_salutation, c_last_name) FROM customer;

SELECT DISTINCT c_salutation, c_last_name FROM customer;

-- OTHERS
select
  r_name,
  count(r_nations.item.n_nationkey) as count,
  sum(r_nations.item.n_nationkey) as sum,
  avg(r_nations.item.n_nationkey) as avg,
  min(r_nations.item.n_name) as minimum,
  max(r_nations.item.n_name) as maximum,
  ndv(r_nations.item.n_nationkey) as distinct_vals
from
  region, region.r_nations as r_nations
group by r_name
order by r_name;

select "contains an even number" as assertion from t3 where exists (select z from t3 where z % 2 = 0) limit 1;

select null is distinct from null, null != null;

select
  'x' is distinct from 'x ' as string_with_trailing_spaces,
  cast('x' as char(5)) is distinct from cast('x ' as char(5)) as char_with_trailing_spaces;

select c_first_name, c_last_name from customer where c_first_name regexp '^J.*';

SELECT
    t1.transaction_id as transaction_id1,
    t1.customer_id,
    t1.transaction_date,
    t1.transaction_amount,
    t2.transaction_id as subsequent_transaction_id
FROM
    transactions t1
    LEFT JOIN (
        SELECT
            transaction_id,
            customer_id,
            transaction_date,
            transaction_amount,
            LEAD (transaction_id) OVER (
                PARTITION BY
                    customer_id
                ORDER BY
                    transaction_date
            ) AS transaction_id
        FROM
            transactions
    ) t2 ON t1.transaction_id = t2.transaction_id
    AND t1.customer_id = t2.customer_id
    AND t1.transaction_date = t2.transaction_date
    AND t1.transaction_amount = t2.transaction_amount;

select appx_median(x) from million_numbers;

select count(x) as higher from million_numbers where x > (select appx_median(x) from million_numbers);

select avg(length(s)) from t1;