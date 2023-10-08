-- Syntax
-- CREATE [ OR REPLACE ] [ [ GLOBAL ] TEMPORARY ] VIEW [ IF NOT EXISTS ] view_identifier create_view_clauses AS query

CREATE OR REPLACE VIEW experienced_employee (ID COMMENT 'Unique identification number', Name) COMMENT 'View for experienced employees' AS SELECT id, name FROM all_employee WHERE working_years > 5;
CREATE VIEW experienced_employee (ID COMMENT 'Unique identification number', Name) COMMENT 'View for experienced employees' AS SELECT id, name FROM all_employee WHERE working_years > 5;

CREATE OR REPLACE GLOBAL TEMPORARY VIEW IF NOT EXISTS subscribed_movies AS SELECT mo.member_id, mb.full_name, mo.movie_title FROM movies AS mo INNER JOIN members AS mb ON mo.member_id = mb.id;
CREATE OR REPLACE GLOBAL TEMPORARY VIEW subscribed_movies AS SELECT mo.member_id, mb.full_name, mo.movie_title FROM movies AS mo INNER JOIN members AS mb ON mo.member_id = mb.id;
CREATE GLOBAL TEMPORARY VIEW IF NOT EXISTS subscribed_movies AS SELECT mo.member_id, mb.full_name, mo.movie_title FROM movies AS mo INNER JOIN members AS mb ON mo.member_id = mb.id;
CREATE GLOBAL TEMPORARY VIEW subscribed_movies AS SELECT mo.member_id, mb.full_name, mo.movie_title FROM movies AS mo INNER JOIN members AS mb ON mo.member_id = mb.id;
