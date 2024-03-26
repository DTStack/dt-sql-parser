INSERT INTO country_page_view
VALUES ('Chinese', 'mumiao', 18),
    ('Amercian', 'georage', 22);

EXECUTE 
INSERT INTO country_page_view
VALUES ('Chinese', 'mumiao', 18),
    ('Amercian', 'georage', 22);

EXECUTE
INSERT OVERWRITE country_page_view
VALUES ('Chinese', 'mumiao', 18),
    ('Amercian', 'georage', 22);

EXECUTE
INSERT INTO country_page_view
VALUES ('Chinese', 'mumiao', 18),
   ('Amercian', 'georage', 22);

INSERT INTO catalog1.db1.country_page_view
VALUES ('Chinese', 'mumiao', 18),
    ('Amercian', 'georage', 22);