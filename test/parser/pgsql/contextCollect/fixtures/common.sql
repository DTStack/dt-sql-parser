CREATE DATABASE music2
    LOCALE 'sv_SE.iso885915'
    ENCODING LATIN9
    TEMPLATE template0;

CREATE TABLE films_recent AS
  SELECT films.name, films.startTime FROM films JOIN films2 ON films2.id = films.id WHERE films.startTime >= '2002-01-01';

CREATE TABLE distributors (
    did     integer,
    name    varchar(40),
    CONSTRAINT con1 CHECK (did > 100 AND name <> '')
);

CREATE FOREIGN TABLE films (
    code        char(5) NOT NULL,
    title       varchar(40) NOT NULL,
    did         integer NOT NULL,
    date_prod   date,
    kind        varchar(10),
    len         interval hour to minute
)
SERVER film_server;

CREATE FOREIGN TABLE measurement_y2016m07
    PARTITION OF measurement FOR VALUES FROM ('2016-07-01') TO ('2016-08-01')
    SERVER server_07;

CREATE VIEW comedies AS
    SELECT *
    FROM films
    WHERE kind = 'Comedy';

CREATE MATERIALIZED VIEW comedies_mate
    (column_name1, column_name2) 
    WITH ( storage_parameter=3, storage_parameter1=4)
    TABLESPACE tablespace_name
    AS SELECT * FROM product
    WITH NO DATA;

WITH RECURSIVE query_name (id) AS (SELECT id FROM table_expression) 
SELECT DISTINCT ON (col1,col2) random() AS name1 FROM table_expression1 WHERE name1=name1 GROUP BY DISTINCT id;

INSERT INTO insert_films (code, title, did, date_prod, kind)
    VALUES ('T_601', 'Yojimbo', 106, DEFAULT, 'Drama');

CREATE FUNCTION get_color_note (rainbow) RETURNS text AS
  'SELECT note FROM my_colors WHERE color = $1'
  LANGUAGE SQL;