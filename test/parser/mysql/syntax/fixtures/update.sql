-- https://dev.mysql.com/doc/refman/8.0/en/update.html

/* UPDATE [LOW_PRIORITY] [IGNORE] table_reference
    SET assignment_list
    [WHERE where_condition]
    [ORDER BY ...]
    [LIMIT row_count]

value:
    {expr | DEFAULT}

assignment:
    col_name = value

assignment_list:
    assignment [, assignment] ... */


/* UPDATE [LOW_PRIORITY] [IGNORE] table_references
    SET assignment_list
    [WHERE where_condition] */



UPDATE LOW_PRIORITY IGNORE t1 SET col1 = col1 + 1 WHERE age = 12 ORDER BY id DESC LIMIT 10;
UPDATE LOW_PRIORITY t1 SET col1 = col1 + 1 WHERE age = 12 ORDER BY id DESC LIMIT 10;
UPDATE IGNORE t1 SET col1 = col1 + 1 WHERE age = 12 ORDER BY id DESC LIMIT 10;
UPDATE IGNORE t1 SET col1 = col1 + 1 WHERE age = 12 ORDER BY id DESC;
UPDATE IGNORE t1 SET col1 = col1 + 1 ORDER BY id DESC LIMIT 10;
UPDATE LOW_PRIORITY t1 SET col1 = col1 + 1 WHERE age = 12 LIMIT 10;
UPDATE t1 SET col1 = col1 + 1 LIMIT 10;
UPDATE t1 SET col1 = col1 + 1;

UPDATE t1 SET col1 = col1 + 1;
UPDATE t1 SET col1 = col1 + 1, col2 = col1;
UPDATE t SET id = id + 1;
UPDATE t SET id = id + 1 ORDER BY id DESC;
UPDATE items,month SET items.price=month.price WHERE items.id=month.id;
UPDATE items SET retail = retail * 0.9 WHERE id IN (SELECT id FROM items WHERE retail / wholesale >= 1.3 AND quantity > 100);
UPDATE items, (SELECT id FROM items WHERE id IN (SELECT id FROM items WHERE retail / wholesale >= 1.3 AND quantity < 100)) AS discounted SET items.retail = items.retail * 0.9 WHERE items.id = discounted.id;
UPDATE /*+ NO_MERGE(discounted) */ items, (SELECT id FROM items WHERE retail / wholesale >= 1.3 AND quantity < 100) AS discounted SET items.retail = items.retail * 0.9 WHERE items.id = discounted.id;
UPDATE items, (SELECT id, retail / wholesale AS markup, quantity FROM items) AS discounted SET items.retail = items.retail * 0.9 WHERE discounted.markup >= 1.3 AND discounted.quantity < 100 AND items.id = discounted.id;

UPDATE LOW_PRIORITY IGNORE t1 SET col1 = col1 + 1 WHERE age = 12;
UPDATE LOW_PRIORITY t1 SET col1 = col1 + 1 WHERE age = 12;
UPDATE IGNORE t1 SET col1 = col1 + 1 WHERE age = 12;
UPDATE t1 SET col1 = col1 + 1 WHERE age = 12;
