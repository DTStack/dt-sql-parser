-- https://dev.mysql.com/doc/refman/8.0/en/create-index.html

/* CREATE [UNIQUE | FULLTEXT | SPATIAL] INDEX index_name
    [index_type]
    ON tbl_name (key_part,...)
    [index_option]
    [algorithm_option | lock_option] ...

key_part: {col_name [(length)] | (expr)} [ASC | DESC]

index_option: {
    KEY_BLOCK_SIZE [=] value
  | index_type
  | WITH PARSER parser_name
  | COMMENT 'string'
  | {VISIBLE | INVISIBLE}
  | ENGINE_ATTRIBUTE [=] 'string'
  | SECONDARY_ENGINE_ATTRIBUTE [=] 'string'
}

index_type:
    USING {BTREE | HASH}

algorithm_option:
    ALGORITHM [=] {DEFAULT | INPLACE | COPY}

lock_option:
    LOCK [=] {DEFAULT | NONE | SHARED | EXCLUSIVE}
 */


CREATE UNIQUE INDEX index_name ON table_name (name(10));
CREATE FULLTEXT INDEX index_name ON table_name (name(10));
CREATE SPATIAL INDEX index_name ON table_name (name(10));

CREATE INDEX part_of_name ON customer (name(10));

CREATE INDEX idx1 ON t1 ((col1 + col2));
CREATE INDEX idx2 ON t1 ((col1 + col2), (col1 - col2), col1);

CREATE INDEX id_index ON lookup (id) USING BTREE;
CREATE INDEX id_index ON t1 (id) COMMENT 'MERGE_THRESHOLD=40';
CREATE INDEX i1 ON t1 (c1) ENGINE_ATTRIBUTE='{"key":"value"}';
