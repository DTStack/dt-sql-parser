-- Creating tables and databases
CREATE TABLE IF NOT EXISTS copy_table_1 LIKE origin_table_1;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_1 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_1 AS SELECT id, name, runtime FROM task_tbl_1 WHERE type='day';

CREATE VIEW mydb.task_view_1 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_1 WHERE type='day';

CREATE DATABASE mydb_1;

CREATE TABLE IF NOT EXISTS copy_table_2 LIKE origin_table_2;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_2 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_2 AS SELECT id, name, runtime FROM task_tbl_2 WHERE type='day';

CREATE VIEW mydb.task_view_2 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_2 WHERE type='day';

CREATE DATABASE mydb_2;

CREATE TABLE IF NOT EXISTS copy_table_3 LIKE origin_table_3;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_3 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_3 AS SELECT id, name, runtime FROM task_tbl_3 WHERE type='day';

CREATE VIEW mydb.task_view_3 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_3 WHERE type='day';

CREATE DATABASE mydb_3;

CREATE TABLE IF NOT EXISTS copy_table_4 LIKE origin_table_4;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_4 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_4 AS SELECT id, name, runtime FROM task_tbl_4 WHERE type='day';

CREATE VIEW mydb.task_view_4 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_4 WHERE type='day';

CREATE DATABASE mydb_4;

CREATE TABLE IF NOT EXISTS copy_table_5 LIKE origin_table_5;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_5 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_5 AS SELECT id, name, runtime FROM task_tbl_5 WHERE type='day';

CREATE VIEW mydb.task_view_5 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_5 WHERE type='day';

CREATE DATABASE mydb_5;

CREATE TABLE IF NOT EXISTS copy_table_6 LIKE origin_table_6;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_6 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_6 AS SELECT id, name, runtime FROM task_tbl_6 WHERE type='day';

CREATE VIEW mydb.task_view_6 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_6 WHERE type='day';

CREATE DATABASE mydb_6;

CREATE TABLE IF NOT EXISTS copy_table_7 LIKE origin_table_7;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_7 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_7 AS SELECT id, name, runtime FROM task_tbl_7 WHERE type='day';

CREATE VIEW mydb.task_view_7 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_7 WHERE type='day';

CREATE DATABASE mydb_7;

CREATE TABLE IF NOT EXISTS copy_table_8 LIKE origin_table_8;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_8 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_8 AS SELECT id, name, runtime FROM task_tbl_8 WHERE type='day';

CREATE VIEW mydb.task_view_8 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_8 WHERE type='day';

CREATE DATABASE mydb_8;

CREATE TABLE IF NOT EXISTS copy_table_9 LIKE origin_table_9;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_9 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_9 AS SELECT id, name, runtime FROM task_tbl_9 WHERE type='day';

CREATE VIEW mydb.task_view_9 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_9 WHERE type='day';

CREATE DATABASE mydb_9;

CREATE TABLE IF NOT EXISTS copy_table_10 LIKE origin_table_10;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_10 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_10 AS SELECT id, name, runtime FROM task_tbl_10 WHERE type='day';

CREATE VIEW mydb.task_view_10 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_10 WHERE type='day';

CREATE DATABASE mydb_10;

CREATE TABLE IF NOT EXISTS copy_table_11 LIKE origin_table_11;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_11 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_11 AS SELECT id, name, runtime FROM task_tbl_11 WHERE type='day';

CREATE VIEW mydb.task_view_11 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_11 WHERE type='day';

CREATE DATABASE mydb_11;

CREATE TABLE IF NOT EXISTS copy_table_12 LIKE origin_table_12;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_12 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_12 AS SELECT id, name, runtime FROM task_tbl_12 WHERE type='day';

CREATE VIEW mydb.task_view_12 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_12 WHERE type='day';

CREATE DATABASE mydb_12;

CREATE TABLE IF NOT EXISTS copy_table_13 LIKE origin_table_13;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_13 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_13 AS SELECT id, name, runtime FROM task_tbl_13 WHERE type='day';

CREATE VIEW mydb.task_view_13 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_13 WHERE type='day';

CREATE DATABASE mydb_13;

CREATE TABLE IF NOT EXISTS copy_table_14 LIKE origin_table_14;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_14 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_14 AS SELECT id, name, runtime FROM task_tbl_14 WHERE type='day';

CREATE VIEW mydb.task_view_14 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_14 WHERE type='day';

CREATE DATABASE mydb_14;

CREATE TABLE IF NOT EXISTS copy_table_15 LIKE origin_table_15;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_15 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_15 AS SELECT id, name, runtime FROM task_tbl_15 WHERE type='day';

CREATE VIEW mydb.task_view_15 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_15 WHERE type='day';

CREATE DATABASE mydb_15;

CREATE TABLE IF NOT EXISTS copy_table_16 LIKE origin_table_16;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_16 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_16 AS SELECT id, name, runtime FROM task_tbl_16 WHERE type='day';

CREATE VIEW mydb.task_view_16 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_16 WHERE type='day';

CREATE DATABASE mydb_16;

CREATE TABLE IF NOT EXISTS copy_table_17 LIKE origin_table_17;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_17 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_17 AS SELECT id, name, runtime FROM task_tbl_17 WHERE type='day';

CREATE VIEW mydb.task_view_17 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_17 WHERE type='day';

CREATE DATABASE mydb_17;

CREATE TABLE IF NOT EXISTS copy_table_18 LIKE origin_table_18;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_18 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_18 AS SELECT id, name, runtime FROM task_tbl_18 WHERE type='day';

CREATE VIEW mydb.task_view_18 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_18 WHERE type='day';

CREATE DATABASE mydb_18;

CREATE TABLE IF NOT EXISTS copy_table_19 LIKE origin_table_19;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_19 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_19 AS SELECT id, name, runtime FROM task_tbl_19 WHERE type='day';

CREATE VIEW mydb.task_view_19 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_19 WHERE type='day';

CREATE DATABASE mydb_19;

CREATE TABLE IF NOT EXISTS copy_table_20 LIKE origin_table_20;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_20 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_20 AS SELECT id, name, runtime FROM task_tbl_20 WHERE type='day';

CREATE VIEW mydb.task_view_20 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_20 WHERE type='day';

CREATE DATABASE mydb_20;

CREATE TABLE IF NOT EXISTS copy_table_21 LIKE origin_table_21;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_21 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_21 AS SELECT id, name, runtime FROM task_tbl_21 WHERE type='day';

CREATE VIEW mydb.task_view_21 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_21 WHERE type='day';

CREATE DATABASE mydb_21;

CREATE TABLE IF NOT EXISTS copy_table_22 LIKE origin_table_22;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_22 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_22 AS SELECT id, name, runtime FROM task_tbl_22 WHERE type='day';

CREATE VIEW mydb.task_view_22 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_22 WHERE type='day';

CREATE DATABASE mydb_22;

CREATE TABLE IF NOT EXISTS copy_table_23 LIKE origin_table_23;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_23 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_23 AS SELECT id, name, runtime FROM task_tbl_23 WHERE type='day';

CREATE VIEW mydb.task_view_23 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_23 WHERE type='day';

CREATE DATABASE mydb_23;

CREATE TABLE IF NOT EXISTS copy_table_24 LIKE origin_table_24;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_24 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_24 AS SELECT id, name, runtime FROM task_tbl_24 WHERE type='day';

CREATE VIEW mydb.task_view_24 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_24 WHERE type='day';

CREATE DATABASE mydb_24;

CREATE TABLE IF NOT EXISTS copy_table_25 LIKE origin_table_25;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_25 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_25 AS SELECT id, name, runtime FROM task_tbl_25 WHERE type='day';

CREATE VIEW mydb.task_view_25 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_25 WHERE type='day';

CREATE DATABASE mydb_25;

CREATE TABLE IF NOT EXISTS copy_table_26 LIKE origin_table_26;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_26 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_26 AS SELECT id, name, runtime FROM task_tbl_26 WHERE type='day';

CREATE VIEW mydb.task_view_26 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_26 WHERE type='day';

CREATE DATABASE mydb_26;

CREATE TABLE IF NOT EXISTS copy_table_27 LIKE origin_table_27;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_27 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_27 AS SELECT id, name, runtime FROM task_tbl_27 WHERE type='day';

CREATE VIEW mydb.task_view_27 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_27 WHERE type='day';

CREATE DATABASE mydb_27;

CREATE TABLE IF NOT EXISTS copy_table_28 LIKE origin_table_28;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_28 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_28 AS SELECT id, name, runtime FROM task_tbl_28 WHERE type='day';

CREATE VIEW mydb.task_view_28 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_28 WHERE type='day';

CREATE DATABASE mydb_28;

CREATE TABLE IF NOT EXISTS copy_table_29 LIKE origin_table_29;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_29 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_29 AS SELECT id, name, runtime FROM task_tbl_29 WHERE type='day';

CREATE VIEW mydb.task_view_29 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_29 WHERE type='day';

CREATE DATABASE mydb_29;

CREATE TABLE IF NOT EXISTS copy_table_30 LIKE origin_table_30;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_30 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_30 AS SELECT id, name, runtime FROM task_tbl_30 WHERE type='day';

CREATE VIEW mydb.task_view_30 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_30 WHERE type='day';

CREATE DATABASE mydb_30;

CREATE TABLE IF NOT EXISTS copy_table_31 LIKE origin_table_31;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_31 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_31 AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE VIEW mydb.task_view_31 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_31;

CREATE TABLE IF NOT EXISTS copy_table_32 LIKE origin_table_32;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_32 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_32 AS SELECT id, name, runtime FROM task_tbl_32 WHERE type='day';

CREATE VIEW mydb.task_view_32 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_32;

CREATE TABLE IF NOT EXISTS copy_table_33 LIKE origin_table_33;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_33 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_33 AS SELECT id, name, runtime FROM task_tbl_33 WHERE type='day';

CREATE VIEW mydb.task_view_33 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_33;

CREATE TABLE IF NOT EXISTS copy_table_34 LIKE origin_table_34;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_34 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_34 AS SELECT id, name, runtime FROM task_tbl_34 WHERE type='day';

CREATE VIEW mydb.task_view_34 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_34;

CREATE TABLE IF NOT EXISTS copy_table_35 LIKE origin_table_35;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_35 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_35 AS SELECT id, name, runtime FROM task_tbl_35 WHERE type='day';

CREATE VIEW mydb.task_view_35 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_35;

CREATE TABLE IF NOT EXISTS copy_table_36 LIKE origin_table_36;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_36 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_36 AS SELECT id, name, runtime FROM task_tbl_36 WHERE type='day';

CREATE VIEW mydb.task_view_36 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_36;

CREATE TABLE IF NOT EXISTS copy_table_37 LIKE origin_table_37;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_37 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_37 AS SELECT id, name, runtime FROM task_tbl_37 WHERE type='day';

CREATE VIEW mydb.task_view_37 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_37;

CREATE TABLE IF NOT EXISTS copy_table_38 LIKE origin_table_38;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_38 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_38 AS SELECT id, name, runtime FROM task_tbl_38 WHERE type='day';

CREATE VIEW mydb.task_view_38 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_38;

CREATE TABLE IF NOT EXISTS copy_table_39 LIKE origin_table_39;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_39 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_39 AS SELECT id, name, runtime FROM task_tbl_39 WHERE type='day';

CREATE VIEW mydb.task_view_39 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_39;

CREATE TABLE IF NOT EXISTS copy_table_40 LIKE origin_table_40;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_40 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_40 AS SELECT id, name, runtime FROM task_tbl_40 WHERE type='day';

CREATE VIEW mydb.task_view_40 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_40;

CREATE TABLE IF NOT EXISTS copy_table_41 LIKE origin_table_41;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_41 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_41 AS SELECT id, name, runtime FROM task_tbl_41 WHERE type='day';

CREATE VIEW mydb.task_view_41 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_41;

CREATE TABLE IF NOT EXISTS copy_table_42 LIKE origin_table_42;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_42 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_42 AS SELECT id, name, runtime FROM task_tbl_42 WHERE type='day';

CREATE VIEW mydb.task_view_42 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_42;

CREATE TABLE IF NOT EXISTS copy_table_43 LIKE origin_table_43;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_43 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_43 AS SELECT id, name, runtime FROM task_tbl_43 WHERE type='day';

CREATE VIEW mydb.task_view_43 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_43;

CREATE TABLE IF NOT EXISTS copy_table_44 LIKE origin_table_44;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_44 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_44 AS SELECT id, name, runtime FROM task_tbl_44 WHERE type='day';

CREATE VIEW mydb.task_view_44 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_44;

CREATE TABLE IF NOT EXISTS copy_table_45 LIKE origin_table_45;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_45 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_45 AS SELECT id, name, runtime FROM task_tbl_45 WHERE type='day';

CREATE VIEW mydb.task_view_45 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_45;

CREATE TABLE IF NOT EXISTS copy_table_46 LIKE origin_table_46;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_46 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_46 AS SELECT id, name, runtime FROM task_tbl_46 WHERE type='day';

CREATE VIEW mydb.task_view_46 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_46;

CREATE TABLE IF NOT EXISTS copy_table_47 LIKE origin_table_47;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_47 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_47 AS SELECT id, name, runtime FROM task_tbl_47 WHERE type='day';

CREATE VIEW mydb.task_view_47 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_47;

CREATE TABLE IF NOT EXISTS copy_table_48 LIKE origin_table_48;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_48 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_48 AS SELECT id, name, runtime FROM task_tbl_48 WHERE type='day';

CREATE VIEW mydb.task_view_48 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_48;

CREATE TABLE IF NOT EXISTS copy_table_49 LIKE origin_table_49;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_49 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_49 AS SELECT id, name, runtime FROM task_tbl_49 WHERE type='day';

CREATE VIEW mydb.task_view_49 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_49;

CREATE TABLE IF NOT EXISTS copy_table_50 LIKE origin_table_50;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_50 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_50 AS SELECT id, name, runtime FROM task_tbl_50 WHERE type='day';

CREATE VIEW mydb.task_view_50 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_50;

CREATE TABLE IF NOT EXISTS copy_table_51 LIKE origin_table_51;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_51 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_51 AS SELECT id, name, runtime FROM task_tbl_51 WHERE type='day';

CREATE VIEW mydb.task_view_51 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_51;

CREATE TABLE IF NOT EXISTS copy_table_52 LIKE origin_table_52;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_52 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_52 AS SELECT id, name, runtime FROM task_tbl_52 WHERE type='day';

CREATE VIEW mydb.task_view_52 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_52;

CREATE TABLE IF NOT EXISTS copy_table_53 LIKE origin_table_53;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_53 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_53 AS SELECT id, name, runtime FROM task_tbl_53 WHERE type='day';

CREATE VIEW mydb.task_view_53 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_53;

CREATE TABLE IF NOT EXISTS copy_table_54 LIKE origin_table_54;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_54 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_54 AS SELECT id, name, runtime FROM task_tbl_54 WHERE type='day';

CREATE VIEW mydb.task_view_54 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_54;

CREATE TABLE IF NOT EXISTS copy_table_55 LIKE origin_table_55;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_55 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_55 AS SELECT id, name, runtime FROM task_tbl_55 WHERE type='day';

CREATE VIEW mydb.task_view_55 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_55;

CREATE TABLE IF NOT EXISTS copy_table_56 LIKE origin_table_56;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_56 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_56 AS SELECT id, name, runtime FROM task_tbl_56 WHERE type='day';

CREATE VIEW mydb.task_view_56 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_56;

CREATE TABLE IF NOT EXISTS copy_table_57 LIKE origin_table_57;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_57 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_57 AS SELECT id, name, runtime FROM task_tbl_57 WHERE type='day';

CREATE VIEW mydb.task_view_57 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_57;

CREATE TABLE IF NOT EXISTS copy_table_58 LIKE origin_table_58;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_58 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_58 AS SELECT id, name, runtime FROM task_tbl_58 WHERE type='day';

CREATE VIEW mydb.task_view_58 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_58;

CREATE TABLE IF NOT EXISTS copy_table_59 LIKE origin_table_59;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_59 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_59 AS SELECT id, name, runtime FROM task_tbl_59 WHERE type='day';

CREATE VIEW mydb.task_view_59 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_59;

CREATE TABLE IF NOT EXISTS copy_table_60 LIKE origin_table_60;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_60 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_60 AS SELECT id, name, runtime FROM task_tbl_60 WHERE type='day';

CREATE VIEW mydb.task_view_60 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_60;

CREATE TABLE IF NOT EXISTS copy_table_61 LIKE origin_table_61;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_61 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_61 AS SELECT id, name, runtime FROM task_tbl_61 WHERE type='day';

CREATE VIEW mydb.task_view_61 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_61;

CREATE TABLE IF NOT EXISTS copy_table_62 LIKE origin_table_62;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_62 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_62 AS SELECT id, name, runtime FROM task_tbl_62 WHERE type='day';

CREATE VIEW mydb.task_view_62 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_62;

CREATE TABLE IF NOT EXISTS copy_table_63 LIKE origin_table_63;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_63 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_63 AS SELECT id, name, runtime FROM task_tbl_63 WHERE type='day';

CREATE VIEW mydb.task_view_63 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_63;

CREATE TABLE IF NOT EXISTS copy_table_64 LIKE origin_table_64;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_64 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_64 AS SELECT id, name, runtime FROM task_tbl_64 WHERE type='day';

CREATE VIEW mydb.task_view_64 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_64;

CREATE TABLE IF NOT EXISTS copy_table_65 LIKE origin_table_65;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_65 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_65 AS SELECT id, name, runtime FROM task_tbl_65 WHERE type='day';

CREATE VIEW mydb.task_view_65 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_65;

CREATE TABLE IF NOT EXISTS copy_table_66 LIKE origin_table_66;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_66 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_66 AS SELECT id, name, runtime FROM task_tbl_66 WHERE type='day';

CREATE VIEW mydb.task_view_66 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_66;

CREATE TABLE IF NOT EXISTS copy_table_67 LIKE origin_table_67;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_67 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_67 AS SELECT id, name, runtime FROM task_tbl_67 WHERE type='day';

CREATE VIEW mydb.task_view_67 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_67;

CREATE TABLE IF NOT EXISTS copy_table_68 LIKE origin_table_68;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_68 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_68 AS SELECT id, name, runtime FROM task_tbl_68 WHERE type='day';

CREATE VIEW mydb.task_view_68 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_68;

CREATE TABLE IF NOT EXISTS copy_table_69 LIKE origin_table_69;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_69 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_69 AS SELECT id, name, runtime FROM task_tbl_69 WHERE type='day';

CREATE VIEW mydb.task_view_69 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_69;

CREATE TABLE IF NOT EXISTS copy_table_70 LIKE origin_table_70;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_70 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_70 AS SELECT id, name, runtime FROM task_tbl_70 WHERE type='day';

CREATE VIEW mydb.task_view_70 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_70;

CREATE TABLE IF NOT EXISTS copy_table_71 LIKE origin_table_71;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_71 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_71 AS SELECT id, name, runtime FROM task_tbl_71 WHERE type='day';

CREATE VIEW mydb.task_view_71 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_71;

CREATE TABLE IF NOT EXISTS copy_table_72 LIKE origin_table_72;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_72 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_72 AS SELECT id, name, runtime FROM task_tbl_72 WHERE type='day';

CREATE VIEW mydb.task_view_72 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_72;
CREATE TABLE IF NOT EXISTS copy_table_73 LIKE origin_table_73;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_73 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_73 AS SELECT id, name, runtime FROM task_tbl_73 WHERE type='day';

CREATE VIEW mydb.task_view_73 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_73;
CREATE TABLE IF NOT EXISTS copy_table_74 LIKE origin_table_74;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_74 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_74 AS SELECT id, name, runtime FROM task_tbl_74 WHERE type='day';

CREATE VIEW mydb.task_view_74 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_74;
CREATE TABLE IF NOT EXISTS copy_table_75 LIKE origin_table_75;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_75 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_75 AS SELECT id, name, runtime FROM task_tbl_75 WHERE type='day';

CREATE VIEW mydb.task_view_75 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_75;
CREATE TABLE IF NOT EXISTS copy_table_76 LIKE origin_table_76;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_76 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_76 AS SELECT id, name, runtime FROM task_tbl_76 WHERE type='day';

CREATE VIEW mydb.task_view_76 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_76;
CREATE TABLE IF NOT EXISTS copy_table_77 LIKE origin_table_77;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_77 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_77 AS SELECT id, name, runtime FROM task_tbl_77 WHERE type='day';

CREATE VIEW mydb.task_view_77 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_77;
CREATE TABLE IF NOT EXISTS copy_table_78 LIKE origin_table_78;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_78 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_78 AS SELECT id, name, runtime FROM task_tbl_78 WHERE type='day';

CREATE VIEW mydb.task_view_78 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_78;
CREATE TABLE IF NOT EXISTS copy_table_79 LIKE origin_table_79;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_79 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_79 AS SELECT id, name, runtime FROM task_tbl_79 WHERE type='day';

CREATE VIEW mydb.task_view_79 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_79;
CREATE TABLE IF NOT EXISTS copy_table_80 LIKE origin_table_80;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_80 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_80 AS SELECT id, name, runtime FROM task_tbl_80 WHERE type='day';

CREATE VIEW mydb.task_view_80 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_80;
CREATE TABLE IF NOT EXISTS copy_table_81 LIKE origin_table_81;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_81 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_81 AS SELECT id, name, runtime FROM task_tbl_81 WHERE type='day';

CREATE VIEW mydb.task_view_81 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_81;
CREATE TABLE IF NOT EXISTS copy_table_82 LIKE origin_table_82;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_82 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_82 AS SELECT id, name, runtime FROM task_tbl_82 WHERE type='day';

CREATE VIEW mydb.task_view_82 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_82;
CREATE TABLE IF NOT EXISTS copy_table_83 LIKE origin_table_83;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_83 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_83 AS SELECT id, name, runtime FROM task_tbl_83 WHERE type='day';

CREATE VIEW mydb.task_view_83 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_83;
CREATE TABLE IF NOT EXISTS copy_table_84 LIKE origin_table_84;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_84 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_84 AS SELECT id, name, runtime FROM task_tbl_84 WHERE type='day';

CREATE VIEW mydb.task_view_84 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_84;
CREATE TABLE IF NOT EXISTS copy_table_85 LIKE origin_table_85;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_85 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_85 AS SELECT id, name, runtime FROM task_tbl_85 WHERE type='day';

CREATE VIEW mydb.task_view_85 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_85;
CREATE TABLE IF NOT EXISTS copy_table_86 LIKE origin_table_86;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_86 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_86 AS SELECT id, name, runtime FROM task_tbl_86 WHERE type='day';

CREATE VIEW mydb.task_view_86 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_86;
CREATE TABLE IF NOT EXISTS copy_table_87 LIKE origin_table_87;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_87 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_87 AS SELECT id, name, runtime FROM task_tbl_87 WHERE type='day';

CREATE VIEW mydb.task_view_87 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_87;
CREATE TABLE IF NOT EXISTS copy_table_88 LIKE origin_table_88;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_88 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_88 AS SELECT id, name, runtime FROM task_tbl_88 WHERE type='day';

CREATE VIEW mydb.task_view_88 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_88;
CREATE TABLE IF NOT EXISTS copy_table_89 LIKE origin_table_89;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_89 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_89 AS SELECT id, name, runtime FROM task_tbl_89 WHERE type='day';

CREATE VIEW mydb.task_view_89 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_89;
CREATE TABLE IF NOT EXISTS copy_table_90 LIKE origin_table_90;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_90 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_90 AS SELECT id, name, runtime FROM task_tbl_90 WHERE type='day';

CREATE VIEW mydb.task_view_90 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_90;
CREATE TABLE IF NOT EXISTS copy_table_91 LIKE origin_table_91;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_91 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_91 AS SELECT id, name, runtime FROM task_tbl_91 WHERE type='day';

CREATE VIEW mydb.task_view_91 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_91;
CREATE TABLE IF NOT EXISTS copy_table_92 LIKE origin_table_92;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_92 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_92 AS SELECT id, name, runtime FROM task_tbl_92 WHERE type='day';

CREATE VIEW mydb.task_view_92 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_92;
CREATE TABLE IF NOT EXISTS copy_table_93 LIKE origin_table_93;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_93 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_93 AS SELECT id, name, runtime FROM task_tbl_93 WHERE type='day';

CREATE VIEW mydb.task_view_93 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_93;
CREATE TABLE IF NOT EXISTS copy_table_94 LIKE origin_table_94;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_94 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_94 AS SELECT id, name, runtime FROM task_tbl_94 WHERE type='day';

CREATE VIEW mydb.task_view_94 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_94;
CREATE TABLE IF NOT EXISTS copy_table_95 LIKE origin_table_95;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_95 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_95 AS SELECT id, name, runtime FROM task_tbl_95 WHERE type='day';

CREATE VIEW mydb.task_view_95 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_95;
CREATE TABLE IF NOT EXISTS copy_table_96 LIKE origin_table_96;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_96 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_96 AS SELECT id, name, runtime FROM task_tbl_96 WHERE type='day';

CREATE VIEW mydb.task_view_96 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_96;
CREATE TABLE IF NOT EXISTS copy_table_97 LIKE origin_table_97;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_97 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_97 AS SELECT id, name, runtime FROM task_tbl_97 WHERE type='day';

CREATE VIEW mydb.task_view_97 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_97;
CREATE TABLE IF NOT EXISTS copy_table_98 LIKE origin_table_98;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_98 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_98 AS SELECT id, name, runtime FROM task_tbl_98 WHERE type='day';

CREATE VIEW mydb.task_view_98 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_98;
CREATE TABLE IF NOT EXISTS copy_table_99 LIKE origin_table_99;

CREATE TABLE IF NOT EXISTS list_bucket_multiple_99 (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table_99 AS SELECT id, name, runtime FROM task_tbl_99 WHERE type='day';

CREATE VIEW mydb.task_view_99 (taskId COMMENT '任务id', taskName COMMENT '任务名称', taskRunTime COMMENT '任务运行时长') AS SELECT id, name, runtime FROM task_tbl_31 WHERE type='day';

CREATE DATABASE mydb_99;

SELECT 
    A.user_id,
    A.user_name,
    B.total_order_amount,
    C.average_product_price,
    D.max_order_date,
    E.min_quantity,
    F.product_category_count
FROM 
    (SELECT user_id, user_name FROM  ) A
JOIN 
    (SELECT user_id, SUM(order_total) AS total_order_amount
     FROM orders
     GROUP BY user_id) B ON A.user_id = B.user_id
JOIN 
    (SELECT O.user_id, AVG(P.price) AS average_product_price
     FROM orders O
     JOIN order_items OI ON O.order_id = OI.order_id
     JOIN products P ON OI.product_id = P.product_id
     GROUP BY O.user_id) C ON A.user_id = C.user_id
JOIN 
    (SELECT user_id, MAX(order_date) AS max_order_date
     FROM orders
     GROUP BY user_id) D ON A.user_id = D.user_id
JOIN 
    (SELECT O.user_id, MIN(OI.quantity) AS min_quantity
     FROM orders O
     JOIN order_items OI ON O.order_id = OI.order_id
     GROUP BY O.user_id) E ON A.user_id = E.user_id
JOIN 
    (SELECT P.category_id, COUNT(DISTINCT P.product_id) AS product_category_count
     FROM products P
     JOIN categories C ON P.category_id = C.category_id
     GROUP BY P.category_id) F ON C.user_id = F.category_id
JOIN 
    (SELECT O.user_id, COUNT(OI.product_id) AS product_count
     FROM orders O
     JOIN order_items OI ON O.order_id = OI.order_id
     GROUP BY O.user_id) G ON A.user_id = G.user_id
JOIN 
    (SELECT P.product_id, MAX(O.order_total) AS max_product_order_total
     FROM products P
     JOIN order_items OI ON P.product_id = OI.product_id
     JOIN orders O ON OI.order_id = O.order_id
     GROUP BY P.product_id) H ON G.product_count = H.product_id
JOIN 
    (SELECT P.product_id, MIN(O.order_total) AS min_product_order_total
     FROM products P
     JOIN order_items OI ON P.product_id = OI.product_id
     JOIN orders O ON OI.order_id = O.order_id
     GROUP BY P.product_id) I ON H.product_id = I.product_id
JOIN 
    (SELECT P.product_id, AVG(OI.quantity) AS avg_quantity_per_product
     FROM products P
     JOIN order_items OI ON P.product_id = OI.product_id
     GROUP BY P.product_id) J ON I.product_id = J.product_id;