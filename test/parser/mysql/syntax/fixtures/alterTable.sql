-- https://dev.mysql.com/doc/refman/8.0/en/alter-table.html


ALTER TABLE t2 DROP COLUMN c, DROP COLUMN d;
ALTER TABLE t1 ENGINE = InnoDB;
ALTER TABLE t1 ROW_FORMAT = COMPRESSED;
ALTER TABLE t1 AUTO_INCREMENT = 13;
ALTER TABLE t1 CHARACTER SET = utf8mb4;
ALTER TABLE t1 COMMENT = 'New table comment';
ALTER TABLE t1 COMMENT = 'NDB_TABLE=READ_BACKUP=0,PARTITION_BALANCE=FOR_RA_BY_NODE';
ALTER TABLE t1 CHANGE COLUMN old_col_name new_col_name BLOB COMMENT 'NDB_COLUMN=BLOB_INLINE_SIZE=4096,MAX_BLOB_PART_SIZE';

ALTER TABLE t1 CHANGE a b BIGINT NOT NULL;
ALTER TABLE t1 CHANGE b b INT NOT NULL;
ALTER TABLE t1 MODIFY b INT NOT NULL;
ALTER TABLE t1 CHANGE b a INT NOT NULL;
ALTER TABLE t1 RENAME COLUMN b TO a;
-- swap a and b
ALTER TABLE t1 RENAME COLUMN a TO b,
               RENAME COLUMN b TO a;
-- "rotate" a, b, c through a cycle
ALTER TABLE t1 RENAME COLUMN a TO b,
               RENAME COLUMN b TO c,
               RENAME COLUMN c TO a;
ALTER TABLE t1 MODIFY col1 BIGINT;
ALTER TABLE t1 MODIFY col1 BIGINT UNSIGNED DEFAULT 1 COMMENT 'my column';

ALTER TABLE tbl_name DROP CHECK symbol;
ALTER TABLE tbl_name DROP CONSTRAINT symbol;
ALTER TABLE t MODIFY latin1_text_col TEXT CHARACTER SET utf8mb4;

ALTER TABLE t MODIFY latin1_varchar_col VARCHAR CHARACTER SET utf8mb4;
ALTER TABLE tbl_name CONVERT TO CHARSET utf8mb4;
ALTER TABLE tbl_name CONVERT TO CHARACTER SET utf8mb4;
ALTER TABLE tbl_name DEFAULT CHARACTER SET utf8mb4;
ALTER TABLE tbl_name DEFAULT CHARACTER SET 'utf8mb4';


-- https://dev.mysql.com/doc/refman/8.0/en/alter-table-examples.html

ALTER TABLE t1 RENAME t2;
ALTER TABLE t2 MODIFY a TINYINT NOT NULL, CHANGE b c CHAR(20);
ALTER TABLE t2 ADD d TIMESTAMP;
ALTER TABLE t2 ADD INDEX (d), ADD UNIQUE (a);
ALTER TABLE t2 DROP COLUMN c;
ALTER TABLE t2 ADD c INT UNSIGNED NOT NULL AUTO_INCREMENT, ADD PRIMARY KEY (c);
ALTER TABLE t1 TABLESPACE ts_1 STORAGE DISK;
ALTER TABLE t2 STORAGE DISK;
ALTER TABLE t2 TABLESPACE ts_1 STORAGE DISK;
ALTER TABLE t3 MODIFY c2 INT STORAGE MEMORY;
ALTER TABLE t2 ADD id INT AUTO_INCREMENT PRIMARY KEY;
ALTER TABLE t2 RENAME t1;


ALTER TABLE t1 ADD PARTITION (PARTITION p3 VALUES LESS THAN (2002));
ALTER TABLE t1 DROP PARTITION p0, p1;
ALTER TABLE t1 DISCARD PARTITION p2, p3 TABLESPACE;
ALTER TABLE t1 IMPORT PARTITION p2, p3 TABLESPACE;
ALTER TABLE t1 TRUNCATE PARTITION p0;
ALTER TABLE t1 TRUNCATE PARTITION p1, p3;
ALTER TABLE t2 COALESCE PARTITION 2;
ALTER TABLE t1 ANALYZE PARTITION p1, ANALYZE PARTITION p2;
ALTER TABLE t1 ANALYZE PARTITION p1, CHECK PARTITION p2;
ALTER TABLE t1 ANALYZE PARTITION p1, p2;
ALTER TABLE t1 ANALYZE PARTITION p1;
ALTER TABLE t1 CHECK PARTITION p2;
ALTER TABLE t1 ADD COLUMN c2 INT GENERATED ALWAYS AS (c1 + 1) STORED;
ALTER TABLE t1 MODIFY COLUMN c2 TINYINT GENERATED ALWAYS AS (c1 + 5) STORED;
ALTER TABLE t1 CHANGE c2 c3 INT GENERATED ALWAYS AS (c1 + 1) STORED;
ALTER TABLE t1 DROP COLUMN c3;
ALTER TABLE t1 MODIFY COLUMN c2 INT GENERATED ALWAYS AS (c1 + 1) STORED;
ALTER TABLE t1 MODIFY COLUMN c2 INT;


ALTER TABLE t1 ALTER COLUMN c1 DROP DEFAULT, ADD CONSTRAINT c2_positive CHECK (c2 > 0) NOT ENFORCED;
ALTER TABLE t1 ALTER COLUMN c1 DROP DEFAULT, ADD CHECK (c2 > 0) ENFORCED;
ALTER TABLE t1 ALTER COLUMN c1 DROP DEFAULT, ADD CHECK (c2 > 0);
ALTER TABLE t1 ALTER COLUMN c1 DROP DEFAULT, ALTER c2 SET VISIBLE;
ALTER TABLE t1 ALTER COLUMN c1 DROP DEFAULT, DROP DEFAULT;
ALTER TABLE t1 ALTER COLUMN c1 DROP DEFAULT, ALGORITHM = INSTANT;
ALTER TABLE t1 ALTER COLUMN c1 DROP DEFAULT, DROP CHECK c2_positive;
ALTER TABLE t1 ALTER COLUMN c1 DROP DEFAULT, DROP CONSTRAINT c2_positive;
ALTER TABLE t1 ALTER COLUMN c1 DROP DEFAULT, ALTER CHECK c2_positive NOT ENFORCED;
ALTER TABLE t1 ALTER COLUMN c1 DROP DEFAULT, ALTER CONSTRAINT c2_positive NOT ENFORCED;
ALTER TABLE t1 ALTER COLUMN c1 DROP DEFAULT, ALTER CONSTRAINT c2_positive ENFORCED;

ALTER TABLE t1 ALTER COLUMN c1 DROP DEFAULT, ALTER CONSTRAINT c2_positive ENFORCED, ALTER CONSTRAINT c2_positive NOT ENFORCED;
ALTER TABLE t1 ALTER COLUMN c1 DROP DEFAULT, DROP CONSTRAINT c2_positive, ALTER CHECK c2_positive NOT ENFORCED;

ALTER TABLE your_partitioned_table ADD PARTITION (PARTITION p5 VALUES LESS THAN (2030));
ALTER TABLE t1 ALTER COLUMN c1 DROP DEFAULT, DROP CONSTRAINT c2_positive, ALTER CHECK c2_positive NOT ENFORCED ADD PARTITION (PARTITION p5 VALUES LESS THAN (2030)) DROP PARTITION p0;
ALTER TABLE t1 ALTER COLUMN c1 DROP DEFAULT, DROP CONSTRAINT c2_positive, ALTER CHECK c2_positive NOT ENFORCED DISCARD PARTITION p0 TABLESPACE DISCARD PARTITION ALL TABLESPACE;
ALTER TABLE t1 ALTER COLUMN c1 DROP DEFAULT, DROP CONSTRAINT c2_positive, ALTER CHECK c2_positive NOT ENFORCED IMPORT PARTITION p0 TABLESPACE IMPORT PARTITION ALL TABLESPACE;
ALTER TABLE t1 ALTER COLUMN c1 DROP DEFAULT, DROP CONSTRAINT c2_positive, ALTER CHECK c2_positive NOT ENFORCED TRUNCATE PARTITION p0 TRUNCATE PARTITION ALL;
ALTER TABLE t1 ALTER COLUMN c1 DROP DEFAULT, DROP CONSTRAINT c2_positive, ALTER CHECK c2_positive NOT ENFORCED COALESCE PARTITION 10 COALESCE PARTITION 100;
ALTER TABLE t1 ALTER COLUMN c1 DROP DEFAULT, DROP CONSTRAINT c2_positive, ALTER CHECK c2_positive NOT ENFORCED REORGANIZE PARTITION p0 INTO (PARTITION p5 VALUES LESS THAN (2030), PARTITION p6 VALUES LESS THAN (2030));
ALTER TABLE t1 ALTER COLUMN c1 SET VISIBLE, DROP CONSTRAINT c2_positive, ALTER CHECK c2_positive NOT ENFORCED EXCHANGE PARTITION p0 WITH TABLE t1 WITH VALIDATION;
ALTER TABLE t1 ALTER COLUMN c1 SET VISIBLE, DROP CONSTRAINT c2_positive, ALTER CHECK c2_positive NOT ENFORCED EXCHANGE PARTITION p0 WITH TABLE t1 WITHOUT VALIDATION;
ALTER TABLE t1 ALTER COLUMN c1 DROP DEFAULT, DROP CONSTRAINT c2_positive, ALTER CHECK c2_positive NOT ENFORCED ANALYZE PARTITION p0 ANALYZE PARTITION ALL;
ALTER TABLE t1 ALTER COLUMN c1 DROP DEFAULT, DROP CONSTRAINT c2_positive, ALTER CHECK c2_positive NOT ENFORCED CHECK PARTITION p0 CHECK PARTITION ALL;
ALTER TABLE t1 ALTER COLUMN c1 DROP DEFAULT, DROP CONSTRAINT c2_positive, ALTER CHECK c2_positive NOT ENFORCED OPTIMIZE PARTITION p0 OPTIMIZE PARTITION ALL;
ALTER TABLE t1 ALTER COLUMN c1 DROP DEFAULT, DROP CONSTRAINT c2_positive, ALTER CHECK c2_positive NOT ENFORCED REBUILD PARTITION p0 REBUILD PARTITION ALL;
ALTER TABLE t1 ALTER COLUMN c1 DROP DEFAULT, DROP CONSTRAINT c2_positive, ALTER CHECK c2_positive NOT ENFORCED REPAIR PARTITION p0 REPAIR PARTITION ALL;
ALTER TABLE t1 ALTER COLUMN c1 SET VISIBLE, DROP CONSTRAINT c2_positive, ALTER CHECK c2_positive NOT ENFORCED REMOVE PARTITIONING UPGRADE PARTITIONING;


ALTER TABLE `order` ADD cancelled TINYINT(1) DEFAULT 0 NOT NULL, ADD delivered TINYINT(1) DEFAULT 0 NOT NULL, ADD returning TINYINT(1) DEFAULT 0 NOT NULL;
