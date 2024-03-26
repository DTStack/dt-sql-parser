-- basic pattern recognition
SELECT T.aid, T.bid, T.cid
FROM MyTable
    MATCH_RECOGNIZE (
        PARTITION BY userid
        ORDER BY proctime
        MEASURES
            A.id AS aid,
            B.id AS bid,
            C.id AS cid
        PATTERN (A B C)
        DEFINE
            A AS name = 'a',
            B AS name = 'b',
            C AS name = 'c'
    ) AS T;

SELECT *
FROM Ticker
    MATCH_RECOGNIZE (
        PARTITION BY symbol
        ORDER BY rowtime
        MEASURES
            START_ROW.rowtime AS start_tstamp,
            _LAST(PRICE_DOWN.rowtime) AS bottom_tstamp,
            _LAST(PRICE_UP.rowtime) AS end_tstamp
        ONE ROW PER MATCH
        AFTER MATCH SKIP TO LAST PRICE_UP
        PATTERN (START_ROW PRICE_DOWN+ PRICE_UP)
        DEFINE
            PRICE_DOWN AS
                (_LAST(PRICE_DOWN.price, 1) IS NULL AND PRICE_DOWN.price < START_ROW.price) OR
                    PRICE_DOWN.price < _LAST(PRICE_DOWN.price, 1),
            PRICE_UP AS
                PRICE_UP.price > _LAST(PRICE_DOWN.price, 1)
    ) MR;

-- Measures Aggregations
SELECT *
FROM Ticker
    MATCH_RECOGNIZE (
        PARTITION BY symbol
        ORDER BY rowtime
        MEASURES
            FIRST(A.rowtime) AS start_tstamp,
            _LAST(A.rowtime) AS end_tstamp,
            AVG(A.price) AS avgPrice
        ONE ROW PER MATCH
        AFTER MATCH SKIP PAST LAST ROW
        PATTERN (A+ B)
        DEFINE
            A AS AVG(A.price) < 15
    ) MR;

-- Define a Pattern
SELECT *
FROM Ticker
    MATCH_RECOGNIZE(
        PARTITION BY symbol
        ORDER BY rowtime
        MEASURES
            C.price AS lastPrice
        ONE ROW PER MATCH
        AFTER MATCH SKIP PAST LAST ROW
        PATTERN (A+ B* C? D{1,} E{,5} F{1,5})
        DEFINE
            A AS A.price > 10,
            B AS B.price < 15,
            C AS C.price > 12
    );

-- Time constraint
SELECT *
FROM Ticker
    MATCH_RECOGNIZE(
        PARTITION BY symbol
        ORDER BY rowtime
        MEASURES
            C.rowtime AS dropTime,
            A.price - C.price AS dropDiff
        ONE ROW PER MATCH
        AFTER MATCH SKIP PAST LAST ROW
        PATTERN (A B* C) WITHIN INTERVAL '1' HOUR
        DEFINE
            B AS B.price > A.price - 10,
            C AS C.price < A.price - 10
    );

-- Output Mode
SELECT *
FROM Ticker
    MATCH_RECOGNIZE(
        PARTITION BY symbol
        ORDER BY rowtime
        MEASURES
            FIRST(A.price) AS startPrice,
            _LAST(A.price) AS topPrice,
            B.price AS lastPrice
        ONE ROW PER MATCH
        PATTERN (A+ B)
        DEFINE
            A AS _LAST(A.price, 1) IS NULL OR A.price > _LAST(A.price, 1),
            B AS B.price < _LAST(A.price)
    );

SELECT *
FROM Ticker
    MATCH_RECOGNIZE(
        PARTITION BY symbol
        ORDER BY rowtime
        MEASURES
            FIRST(A.price) AS startPrice,
            _LAST(A.price) AS topPrice,
            B.price AS lastPrice
        ALL ROWS PER MATCH
        PATTERN (A+ B)
        DEFINE
            A AS _LAST(A.price, 1) IS NULL OR A.price > _LAST(A.price, 1),
            B AS B.price < _LAST(A.price)
    );

-- After Match Strategy
SELECT *
FROM Ticker
    MATCH_RECOGNIZE (
        PARTITION BY symbol
        ORDER BY rowtime
        MEASURES
            FIRST(A.rowtime) AS start_tstamp
        ONE ROW PER MATCH
        AFTER MATCH SKIP TO NEXT ROW
        PATTERN (A+ B)
        DEFINE
            A AS AVG(A.price) < 15
    ) MR;

SELECT *
FROM Ticker
    MATCH_RECOGNIZE (
        PARTITION BY symbol
        ORDER BY rowtime
        MEASURES
            FIRST(A.rowtime) AS start_tstamp
        ONE ROW PER MATCH
        AFTER MATCH SKIP TO LAST A
        PATTERN (A+ B)
        DEFINE
            A AS AVG(A.price) < 15
    ) MR;

SELECT *
FROM Ticker
    MATCH_RECOGNIZE (
        PARTITION BY symbol
        ORDER BY rowtime
        MEASURES
            FIRST(A.rowtime) AS start_tstamp
        ONE ROW PER MATCH
        AFTER MATCH SKIP TO FIRST A
        PATTERN (A+ B)
        DEFINE
            A AS AVG(A.price) < 15
    ) MR;

    