CREATE TABLE MyTable ('user_id' BIGINT, 'name' STRING) WITH ('connector' = 'oracle-x');

CREATE TABLE my_ctas_table WITH ('connector' = 'kafka') 
AS SELECT
    id,
    name,
    age
FROM
    source_table
WHERE
    mod(id, 10) = 0;

CREATE TABLE Orders_with_watermark (
    id INT,
    WATERMARK FOR order_time AS order_time - INTERVAL '5' SECOND
) WITH (
    'scan.startup.mode' = 'latest-offset'
) LIKE Orders_in_file (
    EXCLUDING ALL 
    INCLUDING GENERATED
);

SELECT order_id, price + tax FROM Orders;

SELECT * FROM Orders LEFT JOIN Product ON Orders.product_id = Product.id;

(SELECT s FROM t1) UNION (SELECT s FROM t2);

INSERT INTO country_page_view VALUES ('Chinese', 'mumiao', 18), ('Amercian', 'georage', 22);

INSERT INTO catalog1.db1.country_page_view SELECT `user`, cnt FROM page_view_source;

EXECUTE STATEMENT SET BEGIN
    INSERT INTO country_page_view1
    VALUES ('Chinese', 'mumiao', 18),
        ('Amercian', 'georage', 22);
    INSERT INTO country_page_view2
    VALUES ('Chinese', 'mumiao', 18),
        ('Amercian', 'georage', 22);
END;

CREATE VIEW view1(col1, col2) AS SELECT col3, col4 FROM tbl;

CREATE DATABASE IF NOT EXISTS db1 WITH ('key1' = 'value1', 'key2.a' = 'value2.a');

CREATE FUNCTION IF NOT EXISTS tempFunction AS 'SimpleUdf';