SELECT 
    main_query.*
FROM (
    SELECT
        region_data.region_name,
        category_data.category_name,
        region_data.total_sales_amount,
        region_data.total_sales_quantity,
        region_data.avg_price,
        region_data.max_sale_date,
        product_data.product_name,
        store_data.store_name,
        store_data.store_total_sales
    FROM (
        SELECT 
            r.region_name,
            c.category_name,
            SUM(s.sale_amount) AS total_sales_amount,
            SUM(s.sale_quantity) AS total_sales_quantity,
            AVG(s.sale_amount / s.sale_quantity) AS avg_price,
            MAX(s.sale_date) AS max_sale_date
        FROM 
            sales s
            JOIN products p ON s.product_id = p.product_id
            JOIN categories c ON p.category_id = c.category_id
            JOIN stores st ON s.store_id = st.store_id
            JOIN regions r ON st.region_id = r.region_id
        WHERE 
            s.sale_date BETWEEN '2023-01-01' AND '2023-12-31'
        GROUP BY 
            r.region_name, c.category_name
    ) AS region_data
    JOIN (
        SELECT 
            p.product_id,
            p.product_name,
            c.category_name
        FROM 
            products p
            JOIN categories c ON p.category_id = c.category_id
    ) AS product_data ON region_data.category_name = product_data.category_name
    JOIN (
        SELECT 
            st.store_id,
            st.store_name,
            st.region_id,
            SUM(s.sale_amount) AS store_total_sales
        FROM 
            sales s
            JOIN stores st ON s.store_id = st.store_id
        GROUP BY 
            st.store_id, st.store_name, st.region_id
    ) AS store_data ON region_data.region_name = store_data.region_id
) AS main_query
JOIN (
    SELECT
        region_data.region_name,
        category_data.category_name,
        region_data.total_sales_amount,
        region_data.total_sales_quantity,
        region_data.avg_price,
        region_data.max_sale_date,
        product_data.product_name,
        store_data.store_name,
        store_data.store_total_sales
    FROM (
        SELECT 
            r.region_name,
            c.category_name,
            SUM(s.sale_amount) AS total_sales_amount,
            SUM(s.sale_quantity) AS total_sales_quantity,
            AVG(s.sale_amount / s.sale_quantity) AS avg_price,
            MAX(s.sale_date) AS max_sale_date
        FROM 
            sales s
            JOIN products p ON s.product_id = p.product_id
            JOIN categories c ON p.category_id = c.category_id
            JOIN stores st ON s.store_id = st.store_id
            JOIN regions r ON st.region_id = r.region_id
        WHERE 
            s.sale_date BETWEEN '2023-01-01' AND '2023-12-31'
        GROUP BY 
            r.region_name, c.category_name
    ) AS region_data
    JOIN (
        SELECT 
            p.product_id,
            p.product_name,
            c.category_name
        FROM 
            products p
            JOIN categories c ON p.category_id = c.category_id
    ) AS product_data ON region_data.category_name = product_data.category_name
    JOIN (
        SELECT 
            st.store_id,
            st.store_name,
            st.region_id,
            SUM(s.sale_amount) AS store_total_sales
        FROM 
            sales s
            JOIN stores st ON s.store_id = st.store_id
        GROUP BY 
            st.store_id, st.store_name, st.region_id
    ) AS store_data ON region_data.region_name = store_data.region_id
) AS sub_query1 on main_query.product_id = sub_query1.product_id

JOIN (
    SELECT
        region_data.region_name,
        category_data.category_name,
        region_data.total_sales_amount,
        region_data.total_sales_quantity,
        region_data.avg_price,
        region_data.max_sale_date,
        product_data.product_name,
        store_data.store_name,
        store_data.store_total_sales
    FROM (
        SELECT 
            r.region_name,
            c.category_name,
            SUM(s.sale_amount) AS total_sales_amount,
            SUM(s.sale_quantity) AS total_sales_quantity,
            AVG(s.sale_amount / s.sale_quantity) AS avg_price,
            MAX(s.sale_date) AS max_sale_date
        FROM 
            sales s
            JOIN products p ON s.product_id = p.product_id
            JOIN categories c ON p.category_id = c.category_id
            JOIN stores st ON s.store_id = st.store_id
            JOIN regions r ON st.region_id = r.region_id
        WHERE 
            s.sale_date BETWEEN '2023-01-01' AND '2023-12-31'
        GROUP BY 
            r.region_name, c.category_name
    ) AS region_data
    JOIN (
        SELECT 
            p.product_id,
            p.product_name,
            c.category_name
        FROM 
            products p
            JOIN categories c ON p.category_id = c.category_id
    ) AS product_data ON region_data.category_name = product_data.category_name
    JOIN (
        SELECT 
            st.store_id,
            st.store_name,
            st.region_id,
            SUM(s.sale_amount) AS store_total_sales
        FROM 
            sales s
            JOIN stores st ON s.store_id = st.store_id
        GROUP BY 
            st.store_id, st.store_name, st.region_id
    ) AS store_data ON region_data.region_name = store_data.region_id
) AS sub_query2 on main_query.product_id = sub_query2.product_id

JOIN (
    SELECT
        region_data.region_name,
        category_data.category_name,
        region_data.total_sales_amount,
        region_data.total_sales_quantity,
        region_data.avg_price,
        region_data.max_sale_date,
        product_data.product_name,
        store_data.store_name,
        store_data.store_total_sales
    FROM (
        SELECT 
            r.region_name,
            c.category_name,
            SUM(s.sale_amount) AS total_sales_amount,
            SUM(s.sale_quantity) AS total_sales_quantity,
            AVG(s.sale_amount / s.sale_quantity) AS avg_price,
            MAX(s.sale_date) AS max_sale_date
        FROM 
            sales s
            JOIN products p ON s.product_id = p.product_id
            JOIN categories c ON p.category_id = c.category_id
            JOIN stores st ON s.store_id = st.store_id
            JOIN regions r ON st.region_id = r.region_id
        WHERE 
            s.sale_date BETWEEN '2023-01-01' AND '2023-12-31'
        GROUP BY 
            r.region_name, c.category_name
    ) AS region_data
    JOIN (
        SELECT 
            p.product_id,
            p.product_name,
            c.category_name
        FROM 
            products p
            JOIN categories c ON p.category_id = c.category_id
    ) AS product_data ON region_data.category_name = product_data.category_name
    JOIN (
        SELECT 
            st.store_id,
            st.store_name,
            st.region_id,
            SUM(s.sale_amount) AS store_total_sales
        FROM 
            sales s
            JOIN stores st ON s.store_id = st.store_id
        GROUP BY 
            st.store_id, st.store_name, st.region_id
    ) AS store_data ON region_data.region_name = store_data.region_id
) AS sub_query3 on main_query.product_id = sub_query3.product_id

JOIN (
    SELECT
        region_data.region_name,
        category_data.category_name,
        region_data.total_sales_amount,
        region_data.total_sales_quantity,
        region_data.avg_price,
        region_data.max_sale_date,
        product_data.product_name,
        store_data.store_name,
        store_data.store_total_sales
    FROM (
        SELECT 
            r.region_name,
            c.category_name,
            SUM(s.sale_amount) AS total_sales_amount,
            SUM(s.sale_quantity) AS total_sales_quantity,
            AVG(s.sale_amount / s.sale_quantity) AS avg_price,
            MAX(s.sale_date) AS max_sale_date
        FROM 
            sales s
            JOIN products p ON s.product_id = p.product_id
            JOIN categories c ON p.category_id = c.category_id
            JOIN stores st ON s.store_id = st.store_id
            JOIN regions r ON st.region_id = r.region_id
        WHERE 
            s.sale_date BETWEEN '2023-01-01' AND '2023-12-31'
        GROUP BY 
            r.region_name, c.category_name
    ) AS region_data
    JOIN (
        SELECT 
            p.product_id,
            p.product_name,
            c.category_name
        FROM 
            products p
            JOIN categories c ON p.category_id = c.category_id
    ) AS product_data ON region_data.category_name = product_data.category_name
    JOIN (
        SELECT 
            st.store_id,
            st.store_name,
            st.region_id,
            SUM(s.sale_amount) AS store_total_sales
        FROM 
            sales s
            JOIN stores st ON s.store_id = st.store_id
        GROUP BY 
            st.store_id, st.store_name, st.region_id
    ) AS store_data ON region_data.region_name = store_data.region_id
) AS sub_query4 on main_query.product_id = sub_query4.product_id

JOIN (
    SELECT
        region_data.region_name,
        category_data.category_name,
        region_data.total_sales_amount,
        region_data.total_sales_quantity,
        region_data.avg_price,
        region_data.max_sale_date,
        product_data.product_name,
        store_data.store_name,
        store_data.store_total_sales
    FROM (
        SELECT 
            r.region_name,
            c.category_name,
            SUM(s.sale_amount) AS total_sales_amount,
            SUM(s.sale_quantity) AS total_sales_quantity,
            AVG(s.sale_amount / s.sale_quantity) AS avg_price,
            MAX(s.sale_date) AS max_sale_date
        FROM 
            sales s
            JOIN products p ON s.product_id = p.product_id
            JOIN categories c ON p.category_id = c.category_id
            JOIN stores st ON s.store_id = st.store_id
            JOIN regions r ON st.region_id = r.region_id
        WHERE 
            s.sale_date BETWEEN '2023-01-01' AND '2023-12-31'
        GROUP BY 
            r.region_name, c.category_name
    ) AS region_data
    JOIN (
        SELECT 
            p.product_id,
            p.product_name,
            c.category_name
        FROM 
            products p
            JOIN categories c ON p.category_id = c.category_id
    ) AS product_data ON region_data.category_name = product_data.category_name
    JOIN (
        SELECT 
            st.store_id,
            st.store_name,
            st.region_id,
            SUM(s.sale_amount) AS store_total_sales
        FROM 
            sales s
            JOIN stores st ON s.store_id = st.store_id
        GROUP BY 
            st.store_id, st.store_name, st.region_id
    ) AS store_data ON region_data.region_name = store_data.region_id
) AS sub_query5 on main_query.product_id = sub_query5.product_id

JOIN (
    SELECT
        region_data.region_name,
        category_data.category_name,
        region_data.total_sales_amount,
        region_data.total_sales_quantity,
        region_data.avg_price,
        region_data.max_sale_date,
        product_data.product_name,
        store_data.store_name,
        store_data.store_total_sales
    FROM (
        SELECT 
            r.region_name,
            c.category_name,
            SUM(s.sale_amount) AS total_sales_amount,
            SUM(s.sale_quantity) AS total_sales_quantity,
            AVG(s.sale_amount / s.sale_quantity) AS avg_price,
            MAX(s.sale_date) AS max_sale_date
        FROM 
            sales s
            JOIN products p ON s.product_id = p.product_id
            JOIN categories c ON p.category_id = c.category_id
            JOIN stores st ON s.store_id = st.store_id
            JOIN regions r ON st.region_id = r.region_id
        WHERE 
            s.sale_date BETWEEN '2023-01-01' AND '2023-12-31'
        GROUP BY 
            r.region_name, c.category_name
    ) AS region_data
    JOIN (
        SELECT 
            p.product_id,
            p.product_name,
            c.category_name
        FROM 
            products p
            JOIN categories c ON p.category_id = c.category_id
    ) AS product_data ON region_data.category_name = product_data.category_name
    JOIN (
        SELECT 
            st.store_id,
            st.store_name,
            st.region_id,
            SUM(s.sale_amount) AS store_total_sales
        FROM 
            sales s
            JOIN stores st ON s.store_id = st.store_id
        GROUP BY 
            st.store_id, st.store_name, st.region_id
    ) AS store_data ON region_data.region_name = store_data.region_id
) AS sub_query6 on main_query.product_id = sub_query6.product_id

JOIN (
    SELECT
        region_data.region_name,
        category_data.category_name,
        region_data.total_sales_amount,
        region_data.total_sales_quantity,
        region_data.avg_price,
        region_data.max_sale_date,
        product_data.product_name,
        store_data.store_name,
        store_data.store_total_sales
    FROM (
        SELECT 
            r.region_name,
            c.category_name,
            SUM(s.sale_amount) AS total_sales_amount,
            SUM(s.sale_quantity) AS total_sales_quantity,
            AVG(s.sale_amount / s.sale_quantity) AS avg_price,
            MAX(s.sale_date) AS max_sale_date
        FROM 
            sales s
            JOIN products p ON s.product_id = p.product_id
            JOIN categories c ON p.category_id = c.category_id
            JOIN stores st ON s.store_id = st.store_id
            JOIN regions r ON st.region_id = r.region_id
        WHERE 
            s.sale_date BETWEEN '2023-01-01' AND '2023-12-31'
        GROUP BY 
            r.region_name, c.category_name
    ) AS region_data
    JOIN (
        SELECT 
            p.product_id,
            p.product_name,
            c.category_name
        FROM 
            products p
            JOIN categories c ON p.category_id = c.category_id
    ) AS product_data ON region_data.category_name = product_data.category_name
    JOIN (
        SELECT 
            st.store_id,
            st.store_name,
            st.region_id,
            SUM(s.sale_amount) AS store_total_sales
        FROM 
            sales s
            JOIN stores st ON s.store_id = st.store_id
        GROUP BY 
            st.store_id, st.store_name, st.region_id
    ) AS store_data ON region_data.region_name = store_data.region_id
) AS sub_query7 on main_query.product_id = sub_query7.product_id

JOIN (
    SELECT
        region_data.region_name,
        category_data.category_name,
        region_data.total_sales_amount,
        region_data.total_sales_quantity,
        region_data.avg_price,
        region_data.max_sale_date,
        product_data.product_name,
        store_data.store_name,
        store_data.store_total_sales
    FROM (
        SELECT 
            r.region_name,
            c.category_name,
            SUM(s.sale_amount) AS total_sales_amount,
            SUM(s.sale_quantity) AS total_sales_quantity,
            AVG(s.sale_amount / s.sale_quantity) AS avg_price,
            MAX(s.sale_date) AS max_sale_date
        FROM 
            sales s
            JOIN products p ON s.product_id = p.product_id
            JOIN categories c ON p.category_id = c.category_id
            JOIN stores st ON s.store_id = st.store_id
            JOIN regions r ON st.region_id = r.region_id
        WHERE 
            s.sale_date BETWEEN '2023-01-01' AND '2023-12-31'
        GROUP BY 
            r.region_name, c.category_name
    ) AS region_data
    JOIN (
        SELECT 
            p.product_id,
            p.product_name,
            c.category_name
        FROM 
            products p
            JOIN categories c ON p.category_id = c.category_id
    ) AS product_data ON region_data.category_name = product_data.category_name
    JOIN (
        SELECT 
            st.store_id,
            st.store_name,
            st.region_id,
            SUM(s.sale_amount) AS store_total_sales
        FROM 
            sales s
            JOIN stores st ON s.store_id = st.store_id
        GROUP BY 
            st.store_id, st.store_name, st.region_id
    ) AS store_data ON region_data.region_name = store_data.region_id
) AS sub_query8 on main_query.product_id = sub_query8.product_id

JOIN (
    SELECT
        region_data.region_name,
        category_data.category_name,
        region_data.total_sales_amount,
        region_data.total_sales_quantity,
        region_data.avg_price,
        region_data.max_sale_date,
        product_data.product_name,
        store_data.store_name,
        store_data.store_total_sales
    FROM (
        SELECT 
            r.region_name,
            c.category_name,
            SUM(s.sale_amount) AS total_sales_amount,
            SUM(s.sale_quantity) AS total_sales_quantity,
            AVG(s.sale_amount / s.sale_quantity) AS avg_price,
            MAX(s.sale_date) AS max_sale_date
        FROM 
            sales s
            JOIN products p ON s.product_id = p.product_id
            JOIN categories c ON p.category_id = c.category_id
            JOIN stores st ON s.store_id = st.store_id
            JOIN regions r ON st.region_id = r.region_id
        WHERE 
            s.sale_date BETWEEN '2023-01-01' AND '2023-12-31'
        GROUP BY 
            r.region_name, c.category_name
    ) AS region_data
    JOIN (
        SELECT 
            p.product_id,
            p.product_name,
            c.category_name
        FROM 
            products p
            JOIN categories c ON p.category_id = c.category_id
    ) AS product_data ON region_data.category_name = product_data.category_name
    JOIN (
        SELECT 
            st.store_id,
            st.store_name,
            st.region_id,
            SUM(s.sale_amount) AS store_total_sales
        FROM 
            sales s
            JOIN stores st ON s.store_id = st.store_id
        GROUP BY 
            st.store_id, st.store_name, st.region_id
    ) AS store_data ON region_data.region_name = store_data.region_id
) AS sub_query9 on main_query.product_id = sub_query9.product_id

JOIN (
    SELECT
        region_data.region_name,
        category_data.category_name,
        region_data.total_sales_amount,
        region_data.total_sales_quantity,
        region_data.avg_price,
        region_data.max_sale_date,
        product_data.product_name,
        store_data.store_name,
        store_data.store_total_sales
    FROM (
        SELECT 
            r.region_name,
            c.category_name,
            SUM(s.sale_amount) AS total_sales_amount,
            SUM(s.sale_quantity) AS total_sales_quantity,
            AVG(s.sale_amount / s.sale_quantity) AS avg_price,
            MAX(s.sale_date) AS max_sale_date
        FROM 
            sales s
            JOIN products p ON s.product_id = p.product_id
            JOIN categories c ON p.category_id = c.category_id
            JOIN stores st ON s.store_id = st.store_id
            JOIN regions r ON st.region_id = r.region_id
        WHERE 
            s.sale_date BETWEEN '2023-01-01' AND '2023-12-31'
        GROUP BY 
            r.region_name, c.category_name
    ) AS region_data
    JOIN (
        SELECT 
            p.product_id,
            p.product_name,
            c.category_name
        FROM 
            products p
            JOIN categories c ON p.category_id = c.category_id
    ) AS product_data ON region_data.category_name = product_data.category_name
    JOIN (
        SELECT 
            st.store_id,
            st.store_name,
            st.region_id,
            SUM(s.sale_amount) AS store_total_sales
        FROM 
            sales s
            JOIN stores st ON s.store_id = st.store_id
        GROUP BY 
            st.store_id, st.store_name, st.region_id
    ) AS store_data ON region_data.region_name = store_data.region_id
) AS sub_query10 on main_query.product_id = sub_query10.product_id

JOIN (
    SELECT
        region_data.region_name,
        category_data.category_name,
        region_data.total_sales_amount,
        region_data.total_sales_quantity,
        region_data.avg_price,
        region_data.max_sale_date,
        product_data.product_name,
        store_data.store_name,
        store_data.store_total_sales
    FROM (
        SELECT 
            r.region_name,
            c.category_name,
            SUM(s.sale_amount) AS total_sales_amount,
            SUM(s.sale_quantity) AS total_sales_quantity,
            AVG(s.sale_amount / s.sale_quantity) AS avg_price,
            MAX(s.sale_date) AS max_sale_date
        FROM 
            sales s
            JOIN products p ON s.product_id = p.product_id
            JOIN categories c ON p.category_id = c.category_id
            JOIN stores st ON s.store_id = st.store_id
            JOIN regions r ON st.region_id = r.region_id
        WHERE 
            s.sale_date BETWEEN '2023-01-01' AND '2023-12-31'
        GROUP BY 
            r.region_name, c.category_name
    ) AS region_data
    JOIN (
        SELECT 
            p.product_id,
            p.product_name,
            c.category_name
        FROM 
            products p
            JOIN categories c ON p.category_id = c.category_id
    ) AS product_data ON region_data.category_name = product_data.category_name
    JOIN (
        SELECT 
            st.store_id,
            st.store_name,
            st.region_id,
            SUM(s.sale_amount) AS store_total_sales
        FROM 
            sales s
            JOIN stores st ON s.store_id = st.store_id
        GROUP BY 
            st.store_id, st.store_name, st.region_id
    ) AS store_data ON region_data.region_name = store_data.region_id
) AS sub_query11 on main_query.product_id = sub_query11.product_id

JOIN (
    SELECT
        region_data.region_name,
        category_data.category_name,
        region_data.total_sales_amount,
        region_data.total_sales_quantity,
        region_data.avg_price,
        region_data.max_sale_date,
        product_data.product_name,
        store_data.store_name,
        store_data.store_total_sales
    FROM (
        SELECT 
            r.region_name,
            c.category_name,
            SUM(s.sale_amount) AS total_sales_amount,
            SUM(s.sale_quantity) AS total_sales_quantity,
            AVG(s.sale_amount / s.sale_quantity) AS avg_price,
            MAX(s.sale_date) AS max_sale_date
        FROM 
            sales s
            JOIN products p ON s.product_id = p.product_id
            JOIN categories c ON p.category_id = c.category_id
            JOIN stores st ON s.store_id = st.store_id
            JOIN regions r ON st.region_id = r.region_id
        WHERE 
            s.sale_date BETWEEN '2023-01-01' AND '2023-12-31'
        GROUP BY 
            r.region_name, c.category_name
    ) AS region_data
    JOIN (
        SELECT 
            p.product_id,
            p.product_name,
            c.category_name
        FROM 
            products p
            JOIN categories c ON p.category_id = c.category_id
    ) AS product_data ON region_data.category_name = product_data.category_name
    JOIN (
        SELECT 
            st.store_id,
            st.store_name,
            st.region_id,
            SUM(s.sale_amount) AS store_total_sales
        FROM 
            sales s
            JOIN stores st ON s.store_id = st.store_id
        GROUP BY 
            st.store_id, st.store_name, st.region_id
    ) AS store_data ON region_data.region_name = store_data.region_id
) AS sub_query12 on main_query.product_id = sub_query12.product_id

JOIN (
    SELECT
        region_data.region_name,
        category_data.category_name,
        region_data.total_sales_amount,
        region_data.total_sales_quantity,
        region_data.avg_price,
        region_data.max_sale_date,
        product_data.product_name,
        store_data.store_name,
        store_data.store_total_sales
    FROM (
        SELECT 
            r.region_name,
            c.category_name,
            SUM(s.sale_amount) AS total_sales_amount,
            SUM(s.sale_quantity) AS total_sales_quantity,
            AVG(s.sale_amount / s.sale_quantity) AS avg_price,
            MAX(s.sale_date) AS max_sale_date
        FROM 
            sales s
            JOIN products p ON s.product_id = p.product_id
            JOIN categories c ON p.category_id = c.category_id
            JOIN stores st ON s.store_id = st.store_id
            JOIN regions r ON st.region_id = r.region_id
        WHERE 
            s.sale_date BETWEEN '2023-01-01' AND '2023-12-31'
        GROUP BY 
            r.region_name, c.category_name
    ) AS region_data
    JOIN (
        SELECT 
            p.product_id,
            p.product_name,
            c.category_name
        FROM 
            products p
            JOIN categories c ON p.category_id = c.category_id
    ) AS product_data ON region_data.category_name = product_data.category_name
    JOIN (
        SELECT 
            st.store_id,
            st.store_name,
            st.region_id,
            SUM(s.sale_amount) AS store_total_sales
        FROM 
            sales s
            JOIN stores st ON s.store_id = st.store_id
        GROUP BY 
            st.store_id, st.store_name, st.region_id
    ) AS store_data ON region_data.region_name = store_data.region_id
) AS sub_query13 on main_query.product_id = sub_query13.product_id

JOIN (
    SELECT
        region_data.region_name,
        category_data.category_name,
        region_data.total_sales_amount,
        region_data.total_sales_quantity,
        region_data.avg_price,
        region_data.max_sale_date,
        product_data.product_name,
        store_data.store_name,
        store_data.store_total_sales
    FROM (
        SELECT 
            r.region_name,
            c.category_name,
            SUM(s.sale_amount) AS total_sales_amount,
            SUM(s.sale_quantity) AS total_sales_quantity,
            AVG(s.sale_amount / s.sale_quantity) AS avg_price,
            MAX(s.sale_date) AS max_sale_date
        FROM 
            sales s
            JOIN products p ON s.product_id = p.product_id
            JOIN categories c ON p.category_id = c.category_id
            JOIN stores st ON s.store_id = st.store_id
            JOIN regions r ON st.region_id = r.region_id
        WHERE 
            s.sale_date BETWEEN '2023-01-01' AND '2023-12-31'
        GROUP BY 
            r.region_name, c.category_name
    ) AS region_data
    JOIN (
        SELECT 
            p.product_id,
            p.product_name,
            c.category_name
        FROM 
            products p
            JOIN categories c ON p.category_id = c.category_id
    ) AS product_data ON region_data.category_name = product_data.category_name
    JOIN (
        SELECT 
            st.store_id,
            st.store_name,
            st.region_id,
            SUM(s.sale_amount) AS store_total_sales
        FROM 
            sales s
            JOIN stores st ON s.store_id = st.store_id
        GROUP BY 
            st.store_id, st.store_name, st.region_id
    ) AS store_data ON region_data.region_name = store_data.region_id
) AS sub_query14 on main_query.product_id = sub_query14.product_id

JOIN (
    SELECT
        region_data.region_name,
        category_data.category_name,
        region_data.total_sales_amount,
        region_data.total_sales_quantity,
        region_data.avg_price,
        region_data.max_sale_date,
        product_data.product_name,
        store_data.store_name,
        store_data.store_total_sales
    FROM (
        SELECT 
            r.region_name,
            c.category_name,
            SUM(s.sale_amount) AS total_sales_amount,
            SUM(s.sale_quantity) AS total_sales_quantity,
            AVG(s.sale_amount / s.sale_quantity) AS avg_price,
            MAX(s.sale_date) AS max_sale_date
        FROM 
            sales s
            JOIN products p ON s.product_id = p.product_id
            JOIN categories c ON p.category_id = c.category_id
            JOIN stores st ON s.store_id = st.store_id
            JOIN regions r ON st.region_id = r.region_id
        WHERE 
            s.sale_date BETWEEN '2023-01-01' AND '2023-12-31'
        GROUP BY 
            r.region_name, c.category_name
    ) AS region_data
    JOIN (
        SELECT 
            p.product_id,
            p.product_name,
            c.category_name
        FROM 
            products p
            JOIN categories c ON p.category_id = c.category_id
    ) AS product_data ON region_data.category_name = product_data.category_name
    JOIN (
        SELECT 
            st.store_id,
            st.store_name,
            st.region_id,
            SUM(s.sale_amount) AS store_total_sales
        FROM 
            sales s
            JOIN stores st ON s.store_id = st.store_id
        GROUP BY 
            st.store_id, st.store_name, st.region_id
    ) AS store_data ON region_data.region_name = store_data.region_id
) AS sub_query15 on main_query.product_id = sub_query15.product_id

JOIN (
    SELECT
        region_data.region_name,
        category_data.category_name,
        region_data.total_sales_amount,
        region_data.total_sales_quantity,
        region_data.avg_price,
        region_data.max_sale_date,
        product_data.product_name,
        store_data.store_name,
        store_data.store_total_sales
    FROM (
        SELECT 
            r.region_name,
            c.category_name,
            SUM(s.sale_amount) AS total_sales_amount,
            SUM(s.sale_quantity) AS total_sales_quantity,
            AVG(s.sale_amount / s.sale_quantity) AS avg_price,
            MAX(s.sale_date) AS max_sale_date
        FROM 
            sales s
            JOIN products p ON s.product_id = p.product_id
            JOIN categories c ON p.category_id = c.category_id
            JOIN stores st ON s.store_id = st.store_id
            JOIN regions r ON st.region_id = r.region_id
        WHERE 
            s.sale_date BETWEEN '2023-01-01' AND '2023-12-31'
        GROUP BY 
            r.region_name, c.category_name
    ) AS region_data
    JOIN (
        SELECT 
            p.product_id,
            p.product_name,
            c.category_name
        FROM 
            products p
            JOIN categories c ON p.category_id = c.category_id
    ) AS product_data ON region_data.category_name = product_data.category_name
    JOIN (
        SELECT 
            st.store_id,
            st.store_name,
            st.region_id,
            SUM(s.sale_amount) AS store_total_sales
        FROM 
            sales s
            JOIN stores st ON s.store_id = st.store_id
        GROUP BY 
            st.store_id, st.store_name, st.region_id
    ) AS store_data ON region_data.region_name = store_data.region_id
) AS sub_query16 on main_query.product_id = sub_query16.product_id

JOIN (
    SELECT
        region_data.region_name,
        category_data.category_name,
        region_data.total_sales_amount,
        region_data.total_sales_quantity,
        region_data.avg_price,
        region_data.max_sale_date,
        product_data.product_name,
        store_data.store_name,
        store_data.store_total_sales
    FROM (
        SELECT 
            r.region_name,
            c.category_name,
            SUM(s.sale_amount) AS total_sales_amount,
            SUM(s.sale_quantity) AS total_sales_quantity,
            AVG(s.sale_amount / s.sale_quantity) AS avg_price,
            MAX(s.sale_date) AS max_sale_date
        FROM 
            sales s
            JOIN products p ON s.product_id = p.product_id
            JOIN categories c ON p.category_id = c.category_id
            JOIN stores st ON s.store_id = st.store_id
            JOIN regions r ON st.region_id = r.region_id
        WHERE 
            s.sale_date BETWEEN '2023-01-01' AND '2023-12-31'
        GROUP BY 
            r.region_name, c.category_name
    ) AS region_data
    JOIN (
        SELECT 
            p.product_id,
            p.product_name,
            c.category_name
        FROM 
            products p
            JOIN categories c ON p.category_id = c.category_id
    ) AS product_data ON region_data.category_name = product_data.category_name
    JOIN (
        SELECT 
            st.store_id,
            st.store_name,
            st.region_id,
            SUM(s.sale_amount) AS store_total_sales
        FROM 
            sales s
            JOIN stores st ON s.store_id = st.store_id
        GROUP BY 
            st.store_id, st.store_name, st.region_id
    ) AS store_data ON region_data.region_name = store_data.region_id
) AS sub_query17 on main_query.product_id = sub_query17.product_id

JOIN (
    SELECT
        region_data.region_name,
        category_data.category_name,
        region_data.total_sales_amount,
        region_data.total_sales_quantity,
        region_data.avg_price,
        region_data.max_sale_date,
        product_data.product_name,
        store_data.store_name,
        store_data.store_total_sales
    FROM (
        SELECT 
            r.region_name,
            c.category_name,
            SUM(s.sale_amount) AS total_sales_amount,
            SUM(s.sale_quantity) AS total_sales_quantity,
            AVG(s.sale_amount / s.sale_quantity) AS avg_price,
            MAX(s.sale_date) AS max_sale_date
        FROM 
            sales s
            JOIN products p ON s.product_id = p.product_id
            JOIN categories c ON p.category_id = c.category_id
            JOIN stores st ON s.store_id = st.store_id
            JOIN regions r ON st.region_id = r.region_id
        WHERE 
            s.sale_date BETWEEN '2023-01-01' AND '2023-12-31'
        GROUP BY 
            r.region_name, c.category_name
    ) AS region_data
    JOIN (
        SELECT 
            p.product_id,
            p.product_name,
            c.category_name
        FROM 
            products p
            JOIN categories c ON p.category_id = c.category_id
    ) AS product_data ON region_data.category_name = product_data.category_name
    JOIN (
        SELECT 
            st.store_id,
            st.store_name,
            st.region_id,
            SUM(s.sale_amount) AS store_total_sales
        FROM 
            sales s
            JOIN stores st ON s.store_id = st.store_id
        GROUP BY 
            st.store_id, st.store_name, st.region_id
    ) AS store_data ON region_data.region_name = store_data.region_id
) AS sub_query18 on main_query.product_id = sub_query18.product_id

WHERE
    main_query.total_sales_amount > 1000
ORDER BY 
    main_query.region_name,
    main_query.category_name,
    main_query.total_sales_amount DESC;
