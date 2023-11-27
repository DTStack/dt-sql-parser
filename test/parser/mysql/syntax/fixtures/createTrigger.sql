-- https://dev.mysql.com/doc/refman/8.0/en/create-trigger.html

/* CREATE
    [DEFINER = user]
    TRIGGER [IF NOT EXISTS] trigger_name
    { BEFORE | AFTER }
    { INSERT | UPDATE | DELETE }
    ON tbl_name FOR EACH ROW
    [{ FOLLOWS | PRECEDES } other_trigger_name]
    trigger_body
*/


CREATE TRIGGER IF NOT EXISTS my_trigger BEFORE INSERT ON your_table FOR EACH ROW SET NEW.column_name = some_value;
CREATE TRIGGER my_trigger BEFORE INSERT ON your_table FOR EACH ROW SET NEW.column_name = some_value;

CREATE TRIGGER my_trigger AFTER INSERT ON your_table FOR EACH ROW SET NEW.column_name = some_value;
CREATE TRIGGER my_trigger AFTER UPDATE ON your_table FOR EACH ROW SET NEW.column_name = some_value;
CREATE TRIGGER my_trigger AFTER DELETE ON your_table FOR EACH ROW SET NEW.column_name = some_value;

CREATE TRIGGER my_trigger AFTER INSERT ON your_table FOR EACH ROW FOLLOWS other_trigger_name SET NEW.column_name = some_value;
CREATE TRIGGER my_trigger AFTER INSERT ON your_table FOR EACH ROW PRECEDES other_trigger_name SET NEW.column_name = some_value;
