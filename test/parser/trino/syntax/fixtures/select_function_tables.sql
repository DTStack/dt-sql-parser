SELECT * FROM TABLE(my_function(1, 100));

SELECT *
FROM TABLE(exclude_columns(
                        input => TABLE(orders),
                        columns => DESCRIPTOR(clerk, comment)));

SELECT *
FROM TABLE(sequence(
                start => 1000000,
                stop => -2000000,
                step => -3));

SELECT * FROM TABLE(schema_name.my_function(1, 100));

SELECT * FROM TABLE(catalog_name.schema_name.my_function(1, 100));