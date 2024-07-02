PREPARE my_select1 FROM
SELECT name FROM nation;

EXECUTE my_select1;


-- execute with using
PREPARE my_select2 FROM
SELECT name FROM nation WHERE regionkey = ? and nationkey < ?;

EXECUTE my_select2 USING 1, 3;

EXECUTE IMMEDIATE
'SELECT name FROM nation';


EXECUTE IMMEDIATE
'SELECT name FROM nation WHERE regionkey = ? and nationkey < ?'
USING 1, 3;
