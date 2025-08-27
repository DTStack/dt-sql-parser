SELECT * FROM Orders;

SELECT order_id, price + tax FROM Orders;

SELECT order_id, price FROM (VALUES (1, 2.0), (2, 3.1)) AS t (order_id, price);

SELECT price + tax FROM Orders WHERE id = 10;

SELECT * FROM person WHERE id = 200 OR id = 300;

SELECT id, sum(quantity) FROM dealer GROUP BY id;

SELECT PRETTY_PRINT(order_id) FROM Orders;

SELECT * FROM Orders ORDER BY order_time, order_id;

SELECT * FROM Orders ORDER BY orderTime LIMIT 3;

SELECT * FROM catalog1.db1.table1;

SELECT DATE_FORMAT(LOCALTIMESTAMP, "yyyy"), DATE_FORMAT(LOCALTIME, 'yyyy'), DATE_FORMAT(CURRENT_DATE, 'yyyy'), DATE_FORMAT(CURRENT_TIME, 'yyyy'), DATE_FORMAT(CURRENT_TIMESTAMP, 'yyyy') FROM Orders;

select
      request_id,
      click_time,
      date_format (click_time, 'yyyy-MM-dd') as click_date,
      cast(wid as bigint) as wid,
      query,
      row_number() over (
        partition by
          wid,
          date_format (click_time, 'yyyy-MM-dd')
        order by
          click_time
      ) as ranks
    from
      search_product
    where
      wid is not null
      and wid <> 'None'
      and date_format (click_time, 'yyyy-MM-dd') >= to_date ('2024-12-04', 'yyyy-MM-dd');

SELECT
  LOCALTIMESTAMP,
  CURRENT_TIME,
  CURRENT_DATE,
  CURRENT_TIMESTAMP,
  LOCALTIME,
  DATE '2019-12-23' as time1,
  TIMESTAMP '2019-12-23 09:00:00' as time2,
  INTERVAL '10 00:00:00.004' DAY TO SECOND as time3
from
  MyTable;


SELECT COALESCE(SUM(c.amount), 0) AS total_amount FROM cust c;
SELECT SUM(c.amount) AS total_amount FROM cust c;
INSERT INTO SR_CATALOG.DEMOS.DETAIL_DEMO VALUES(2, 'YY', 2, CURRENT_DATE, NOW(),func1(),func2(1),func3('a',2));

INSERT INTO SR_CATALOG.DEMOS.DETAIL_DEMO SELECT 2, 'YY', 2, CURRENT_DATE,NOW(),func1(),func2(1),func3('a',2);