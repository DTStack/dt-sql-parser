-- https://dev.mysql.com/doc/refman/8.0/en/change-replication-filter.html

/* CHANGE REPLICATION FILTER filter[, filter]
	[, ...] [FOR CHANNEL channel]

filter: {
    REPLICATE_DO_DB = (db_list)
  | REPLICATE_IGNORE_DB = (db_list)
  | REPLICATE_DO_TABLE = (tbl_list)
  | REPLICATE_IGNORE_TABLE = (tbl_list)
  | REPLICATE_WILD_DO_TABLE = (wild_tbl_list)
  | REPLICATE_WILD_IGNORE_TABLE = (wild_tbl_list)
  | REPLICATE_REWRITE_DB = (db_pair_list)
}

db_list:
    db_name[, db_name][, ...]

tbl_list:
    db_name.table_name[, db_name.table_name][, ...]
wild_tbl_list:
    'db_pattern.table_pattern'[, 'db_pattern.table_pattern'][, ...]

db_pair_list:
    (db_pair)[, (db_pair)][, ...]

db_pair:
    from_db, to_db */


CHANGE REPLICATION FILTER REPLICATE_DO_DB = (d1), REPLICATE_IGNORE_DB = (d2);
CHANGE REPLICATION FILTER REPLICATE_DO_TABLE = (t1), REPLICATE_IGNORE_TABLE = (t2);

CHANGE REPLICATION FILTER REPLICATE_DO_DB = (d1) FOR CHANNEL 'channel_1';
CHANGE REPLICATION FILTER REPLICATE_DO_DB = (db1, db2), REPLICATE_DO_DB = (db3, db4);
CHANGE REPLICATION FILTER REPLICATE_DO_DB = (db3, db4);
CHANGE REPLICATION FILTER REPLICATE_WILD_DO_TABLE = ('db1.old%');
CHANGE REPLICATION FILTER REPLICATE_WILD_IGNORE_TABLE = ('db1.new%', 'db2.new%');
CHANGE REPLICATION FILTER REPLICATE_WILD_DO_TABLE = ('db1.old%'), REPLICATE_WILD_IGNORE_TABLE = ('db1.new%', 'db2.new%');
CHANGE REPLICATION FILTER REPLICATE_REWRITE_DB = ((db1, db2));
CHANGE REPLICATION FILTER REPLICATE_REWRITE_DB = ((dbA, dbB), (dbC, dbD));
