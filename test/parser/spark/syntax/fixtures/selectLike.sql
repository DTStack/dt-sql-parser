-- [ NOT ] { LIKE search_pattern [ ESCAPE esc_char ] | [ RLIKE | REGEXP ] regex_pattern }

-- [ NOT ] { LIKE quantifiers ( search_pattern [ , ... ]) }

SELECT * FROM person WHERE name LIKE 'M%';

SELECT * FROM person WHERE name LIKE 'M_ry';

SELECT * FROM person WHERE name NOT LIKE 'M_ry';

SELECT * FROM person WHERE name RLIKE 'M+';

SELECT * FROM person WHERE name REGEXP 'M+';

SELECT * FROM person WHERE name LIKE '%\_%';

SELECT * FROM person WHERE name LIKE '%$_%' ESCAPE '$';

SELECT * FROM person WHERE name LIKE ALL ('%an%', '%an');

SELECT * FROM person WHERE name LIKE ANY ('%an%', '%an');

SELECT * FROM person WHERE name LIKE SOME ('%an%', '%an');

SELECT * FROM person WHERE name NOT LIKE ALL ('%an%', '%an');

SELECT * FROM person WHERE name NOT LIKE ANY ('%an%', '%an');

SELECT * FROM person WHERE name NOT LIKE SOME ('%an%', '%an');
