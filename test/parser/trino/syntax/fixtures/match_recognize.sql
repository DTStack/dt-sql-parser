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
