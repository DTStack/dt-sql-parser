UPDATE t1 SET col1 = col1 + 1;
UPDATE t1 SET col1 = col1 + 1, col2 = col1;
UPDATE t SET id = id + 1;
UPDATE items SET retail = retail * 0.9 WHERE id IN (SELECT id FROM items WHERE retail / wholesale >= 1.3 AND quantity > 100);
UPDATE LOW_PRIORITY t1 SET col1 = col1 + 1 WHERE age = 12;
UPDATE IGNORE t1 SET col1 = col1 + 1 WHERE age = 12;
UPDATE t1 SET col1 = col1 + 1 WHERE age = 12;
