SELECT * FROM TABLE(
    TUMBLE(
        DATA => TABLE Bid,
        TIMECOL => DESCRIPTOR(bidtime),
        SIZE => INTERVAL '10' MINUTES
    )
);

SELECT window_start,
    window_end,
    SUM(price)
FROM TABLE(
    TUMBLE(
        TABLE Bid, 
        DESCRIPTOR(bidtime), 
        INTERVAL '10' MINUTES
    )
)
GROUP BY window_start, window_end;

SELECT * FROM TABLE(
    HOP(TABLE Bid, DESCRIPTOR(bidtime), INTERVAL '5' MINUTES, INTERVAL '10' MINUTES));

SELECT * FROM TABLE(
    HOP(
      DATA => TABLE Bid,
      TIMECOL => DESCRIPTOR(bidtime),
      SLIDE => INTERVAL '5' MINUTES,
      SIZE => INTERVAL '10' MINUTES));

SELECT * FROM TABLE(
    CUMULATE(
      DATA => TABLE Bid,
      TIMECOL => DESCRIPTOR(bidtime),
      STEP => INTERVAL '2' MINUTES,
      SIZE => INTERVAL '10' MINUTES
    )
);

SELECT window_start,
    window_end,
    SUM(price)
FROM TABLE(
    CUMULATE(
        TABLE Bid,
        DESCRIPTOR(bidtime),
        INTERVAL '2' MINUTES,
        INTERVAL '10' MINUTES
    ))
GROUP BY window_start, window_end;
