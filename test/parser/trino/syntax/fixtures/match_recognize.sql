SELECT * FROM orders MATCH_RECOGNIZE(
     PARTITION BY custkey
     ORDER BY orderdate
     MEASURES
              A.totalprice AS starting_price,
              LAST(B.totalprice) AS bottom_price,
              LAST(U.totalprice) AS top_price
     ONE ROW PER MATCH
     AFTER MATCH SKIP PAST LAST ROW
     PATTERN (A B+ C+ D+)
     SUBSET U = (C, D)
     DEFINE
              B AS totalprice < PREV(totalprice),
              C AS totalprice > PREV(totalprice) AND totalprice <= A.totalprice,
              D AS totalprice > PREV(totalprice)
     );

-- ALL ROWS PER MATCH with empty match handling (emptyMatchHandling inlined)
SELECT * FROM orders MATCH_RECOGNIZE(
     PARTITION BY custkey
     ORDER BY orderdate
     MEASURES
              A.totalprice AS starting_price
     ALL ROWS PER MATCH SHOW EMPTY MATCHES
     AFTER MATCH SKIP PAST LAST ROW
     PATTERN (A B*)
     DEFINE
              B AS totalprice < PREV(totalprice)
     );

SELECT * FROM orders MATCH_RECOGNIZE(
     PARTITION BY custkey
     ORDER BY orderdate
     MEASURES
              A.totalprice AS starting_price
     ALL ROWS PER MATCH OMIT EMPTY MATCHES
     AFTER MATCH SKIP PAST LAST ROW
     PATTERN (A B*)
     DEFINE
              B AS totalprice < PREV(totalprice)
     );

SELECT * FROM orders MATCH_RECOGNIZE(
     PARTITION BY custkey
     ORDER BY orderdate
     MEASURES
              A.totalprice AS starting_price
     ALL ROWS PER MATCH WITH UNMATCHED ROWS
     AFTER MATCH SKIP PAST LAST ROW
     PATTERN (A B*)
     DEFINE
              B AS totalprice < PREV(totalprice)
     );
