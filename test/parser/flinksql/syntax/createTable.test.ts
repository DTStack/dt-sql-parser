import { FlinkSQL } from '../../../../src';

describe('FlinkSQL Create Table Syntax Tests', () => {
    const parser = new FlinkSQL();

    // simple create table statement
    test('Test simple CreateTable Statement', () => {
        const sql = `
            CREATE TABLE MyTable (
                'user_id' BIGINT,
                'name' STRING
            ) WITH (
                'connector'='oracle-x'
            );
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    // Metadata Columns statement
    test('Test Metadata Columns Statement', () => {
        const sql = `
            CREATE TABLE MyTable (
                'user_id' BIGINT,
                'name' STRING,
                'timestamp' BIGINT METADATA,       -- part of the query-to-sink schema
                'offset' BIGINT METADATA VIRTUAL,  -- not part of the query-to-sink schema
                'record_time' TIMESTAMP_LTZ(3) METADATA FROM 'timestamp'    -- reads and writes a Kafka record's timestamp
            ) WITH (
                'connector' = 'kafka'
            );
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    // Computed Columns statement
    test('Test Computed Columns Statement', () => {
        const sql = `
            CREATE TABLE MyTable (
                'user_id' BIGINT,
                'price' DOUBLE,
                'quantity' DOUBLE,
                'cost' AS price * quanitity  -- evaluate expression and supply the result to queries
            ) WITH (
                'connector' = 'kafka'
            );
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    // WATERMARK statement
    test('Test WATERMARK Statement', () => {
        const sql = `
            CREATE TABLE MyTable (
                'user' BIGINT,
                product STRING,
                order_time TIMESTAMP(3),
                WATERMARK FOR order_time AS order_time - INTERVAL '5' SECOND
            ) WITH (
                'connector' = 'kafka'
            );
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    // primary key statement
    test('Test Primary Key Statement', () => {
        const sql = `
            CREATE TABLE MyTable (
                id int,
                PRIMARY KEY (id) NOT ENFORCED
            ) WITH (
                'connector' = 'kafka'
            );
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    // PARTITIONED BY statement
    test('Test PARTITIONED BY Statement', () => {
        const sql = `
            CREATE TABLE Orders_in_file (
                'user' BIGINT,
                product STRING,
                order_time_string STRING,
                order_time AS to_timestamp(order_time)
            )
            PARTITIONED BY ('user') 
            WITH ( 
                'connector' = 'filesystem',
                'path' = '...'
            );
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    // like statement
    test('Test Like Statement', () => {
        const sql = `
            CREATE TABLE Orders_with_watermark (
                id int,
                -- Add watermark definition
                WATERMARK FOR order_time AS order_time - INTERVAL '5' SECOND 
            ) WITH (
                -- Overwrite the startup-mode
                'scan.startup.mode' = 'latest-offset'
            )
            LIKE Orders_in_file (
                -- Exclude everything besides the computed columns which we need to generate the watermark for.
                -- We do not want to have the partitions or filesystem options as those do not apply to kafka. 
                EXCLUDING ALL
                INCLUDING GENERATED
            );
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    // create catalog table
    test('Test Create Catalog Table Statement', () => {
        const sql = `
            CREATE TABLE catalog1.db1.table1 (
                id int
            ) WITH (
                'connector' = 'kafka'
            );
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    // data type
    test('Test Data Type Statement', () => {
        const sql = `
            CREATE TABLE catalog1.db1.table1 (
                attr0 string,
                attr1 boolean,
                attr3 decimal(38,18),
                attr4 TINYINT,
                attr5 smallint,
                attr6 int,
                attr7 bigint,
                attr8 float,
                attr9 double,
                attr10 date,
                attr11 time,
                attr12 timestamp(3),
                attr13 array<string>,
                attr14 row<attr15 float, attr16 timestamp(3)>,
                attr17 map<int, bigint>,
                name1 VARCHAR(64),
                message ROW<data ROW<UPO_TIMESTAMP VARCHAR(20)>>,
                raw RAW('class', 'snapshot')
            ) WITH (
                'connector' = 'kafka'
            );
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
});
