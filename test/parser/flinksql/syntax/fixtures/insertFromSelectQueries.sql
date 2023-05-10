INSERT INTO country_page_view
SELECT user,
    cnt
FROM page_view_source;

INSERT INTO catalog1.db1.country_page_view
SELECT user,
    cnt
FROM page_view_source;


--- Execute InsertStatement
EXECUTE
INSERT INTO country_page_view PARTITION (date = '2019-8-30', country = 'China')
SELECT user,
    cnt
FROM page_view_source;

--- Partition Clause: Static Partition
INSERT INTO country_page_view PARTITION (date = '2019-8-30', country = 'China')
SELECT user,
    cnt
FROM page_view_source;

--- Partition Clause:  Dynamic Partition
INSERT INTO country_page_view PARTITION (date = '2019-8-30') 
SELECT user,
    cnt,
    country
FROM page_view_source;

--- Column List Statement
INSERT INTO country_page_view PARTITION (date = '2019-8-30', country = 'China') (date, country)
SELECT user,
    cnt
FROM page_view_source;

--- Insert Method: OverWrite
INSERT OVERWRITE country_page_view PARTITION (date = '2019-8-30')
SELECT user,
    cnt,
    country
FROM page_view_source;




