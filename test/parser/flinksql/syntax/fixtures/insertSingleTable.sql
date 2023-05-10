INSERT INTO country_page_view
SELECT user,
    cnt
FROM page_view_source;

INSERT OVERWRITE country_page_view PARTITION (date = '2019-8-30', country = 'China')
SELECT user,
    cnt
FROM page_view_source;

EXECUTE
INSERT INTO country_page_view PARTITION (date = '2019-8-30', country = 'China')
SELECT user,
    cnt
FROM page_view_source;

INSERT INTO country_page_view PARTITION (date = '2019-8-30', country = 'China')
SELECT user,
    cnt
FROM page_view_source;

INSERT INTO emps PARTITION (x = 'ab', y = 'bc') (x, y)
SELECT *
FROM emps;

INSERT INTO students
VALUES ('fred flintstone', 35, 1.28),
    ('barney rubble', 32, 2.32);