CREATE TEMPORARY MACRO fixed_number() 42;

CREATE TEMPORARY MACRO string_len_plus_two(x STRING) length(x) + 2;

CREATE TEMPORARY MACRO simple_add (x INT, y INT) x + y;

CREATE TEMPORARY MACRO get_degree(degree_type STRING)
    IF (degree_type IS NOT NULL,
        CASE degree_type 
            WHEN 1 THEN '小学'
            WHEN 2 THEN '初中'
            WHEN 3 THEN '职业高中'
            WHEN 4 THEN '中专'
            WHEN 5 THEN '高中'
            WHEN 6 THEN '大专'
            WHEN 7 THEN '本科'
            WHEN 8 THEN '硕士'
            WHEN 9 THEN '博士'
            ELSE NULL
         END,
    NULL);