-- Basic CREATE TABLE
CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(100) NOT NULL, email VARCHAR(255));
-- IF NOT EXISTS
CREATE TABLE IF NOT EXISTS users (id INT PRIMARY KEY, name VARCHAR(100) NOT NULL);
-- All data types
CREATE TABLE t (
    a BOOLEAN,
    b TINYINT,
    c SMALLINT,
    d INT,
    e INTEGER,
    f BIGINT,
    g FLOAT,
    h DOUBLE,
    i DECIMAL(10,2),
    j NUMERIC(10,2),
    k VARCHAR(100),
    l CHAR(10),
    m TEXT,
    n DATE,
    o TIME,
    p TIMESTAMP,
    q BINARY,
    r VARBINARY
);
-- Constraints
CREATE TABLE orders (
    id INT PRIMARY KEY,
    user_id INT,
    amount DECIMAL(10, 2),
    UNIQUE (user_id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
-- Multiple constraints
CREATE TABLE t (
    id INT,
    name VARCHAR(50),
    age INT,
    email VARCHAR(100),
    CONSTRAINT pk PRIMARY KEY (id),
    CONSTRAINT uq_name UNIQUE (name),
    CONSTRAINT chk_age CHECK (age >= 0),
    CONSTRAINT uq_email UNIQUE (email)
);
-- DEFAULT values
CREATE TABLE t (
    id INT DEFAULT 0,
    name VARCHAR(50) DEFAULT 'unknown',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- WITH properties
CREATE TABLE t (id INT, name VARCHAR(50)) WITH (format = 'ORC');
CREATE TABLE t (id INT, name VARCHAR(50)) WITH (replication = '3', format = 'PARQUET');
-- NOT NULL with DEFAULT
CREATE TABLE t (
    id INT NOT NULL DEFAULT 0,
    name VARCHAR(50) NOT NULL DEFAULT 'unknown'
);
-- VARCHAR with length
CREATE TABLE t (name VARCHAR(50), email VARCHAR(255), bio TEXT);
-- DECIMAL with precision and scale
CREATE TABLE t (price DECIMAL(10,2), rate NUMERIC(5,4));
-- Single column
CREATE TABLE t (id INT);
-- Many columns
CREATE TABLE t (
    col1 INT, col2 INT, col3 INT, col4 INT, col5 INT,
    col6 INT, col7 INT, col8 INT, col9 INT, col10 INT
);
-- Composite primary key
CREATE TABLE order_items (
    order_id INT,
    item_id INT,
    quantity INT,
    PRIMARY KEY (order_id, item_id)
);
-- Multiple foreign keys
CREATE TABLE orders (
    id INT PRIMARY KEY,
    user_id INT,
    product_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);
-- CHECK constraint
CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10,2),
    CHECK (price > 0)
);
-- Multiple CHECK constraints
CREATE TABLE t (
    id INT PRIMARY KEY,
    age INT,
    salary DECIMAL(10,2),
    CHECK (age >= 0 AND age <= 150),
    CHECK (salary >= 0)
);
-- DEFAULT with expression
CREATE TABLE t (
    id INT DEFAULT 0,
    status VARCHAR(20) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- NOT NULL with multiple columns
CREATE TABLE t (
    id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20)
);
-- Mixed constraints
CREATE TABLE t (
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255),
    age INT,
    status VARCHAR(20) DEFAULT 'active',
    CONSTRAINT uq_name UNIQUE (name),
    CONSTRAINT uq_email UNIQUE (email),
    CONSTRAINT chk_age CHECK (age >= 0)
);
-- Qualified table name
CREATE TABLE schema.table1 (id INT);
CREATE TABLE catalog.schema.table1 (id INT);
-- All numeric types
CREATE TABLE t (
    a TINYINT,
    b SMALLINT,
    c INT,
    d INTEGER,
    e BIGINT,
    f FLOAT,
    g DOUBLE,
    h DECIMAL(10,2),
    i NUMERIC(10,2)
);
-- All string types
CREATE TABLE t (
    a VARCHAR(100),
    b CHAR(10),
    c TEXT
);
-- All date/time types
CREATE TABLE t (
    a DATE,
    b TIME,
    c TIMESTAMP
);
-- All binary types
CREATE TABLE t (
    a BINARY,
    b VARBINARY
);
-- Complex table with all features
CREATE TABLE IF NOT EXISTS orders (
    id BIGINT NOT NULL PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    price DECIMAL(10,2) NOT NULL,
    discount DECIMAL(5,2) DEFAULT 0,
    status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT fk_product FOREIGN KEY (product_id) REFERENCES products(id),
    CONSTRAINT chk_quantity CHECK (quantity > 0),
    CONSTRAINT chk_price CHECK (price >= 0),
    CONSTRAINT chk_discount CHECK (discount >= 0 AND discount <= 100)
) WITH (format = 'PARQUET', replication = '3');
