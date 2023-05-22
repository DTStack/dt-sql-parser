-- FlinkSQL 1.16：insert multipe table statement 

EXECUTE STATEMENT SET 
BEGIN
INSERT INTO country_page_view
VALUES ('Chinese', 'mumiao', 18),
    ('Amercian', 'georage', 22);
INSERT INTO country_page_view
VALUES ('Chinese', 'mumiao', 18),
    ('Amercian', 'georage', 22);
END;

-- FlinkSQL 1.15：insert multipe table statement 

BEGIN STATEMENT SET;
INSERT INTO country_page_view
VALUES ('Chinese', 'mumiao', 18),
    ('Amercian', 'georage', 22);
INSERT INTO country_page_view
VALUES ('Chinese', 'mumiao', 18),
    ('Amercian', 'georage', 22);
END; 