-- https://dev.mysql.com/doc/refman/8.0/en/start-replica.html
-- https://dev.mysql.com/doc/refman/8.0/en/start-slave.html

/* START {SLAVE | REPLICA} [thread_types] [until_option] [connection_options] [channel_option]

thread_types:
    [thread_type [, thread_type] ... ]

thread_type:
    IO_THREAD | SQL_THREAD

until_option:
    UNTIL {   {SQL_BEFORE_GTIDS | SQL_AFTER_GTIDS} = gtid_set
          |   MASTER_LOG_FILE = 'log_name', MASTER_LOG_POS = log_pos
          |   SOURCE_LOG_FILE = 'log_name', SOURCE_LOG_POS = log_pos
          |   RELAY_LOG_FILE = 'log_name', RELAY_LOG_POS = log_pos
          |   SQL_AFTER_MTS_GAPS  }

connection_options:
    [USER='user_name'] [PASSWORD='user_pass'] [DEFAULT_AUTH='plugin_name'] [PLUGIN_DIR='plugin_dir']


channel_option:
    FOR CHANNEL channel

gtid_set:
    uuid_set [, uuid_set] ...
    | ''

uuid_set:
    uuid:interval[:interval]...

uuid:
    hhhhhhhh-hhhh-hhhh-hhhh-hhhhhhhhhhhh

h:
    [0-9,A-F]

interval:
    n[-n]

    (n >= 1) */


START SLAVE IO_THREAD UNTIL SQL_BEFORE_GTIDS = '839fa172-9f8d-4bf2-9a13-88dbc6e3814c' USER='user_name' PASSWORD='user_pass' DEFAULT_AUTH='plugin_name' PLUGIN_DIR='plugin_dir' FOR CHANNEL 'channel';
START SLAVE IO_THREAD, SQL_THREAD UNTIL SQL_AFTER_GTIDS = '839fa172-9f8d-4bf2-9a13-88dbc6e3814c' USER='user_name' PASSWORD='user_pass' FOR CHANNEL 'channel';
START SLAVE SQL_THREAD UNTIL SQL_AFTER_GTIDS = '839fa172-9f8d-4bf2-9a13-88dbc6e3814c' USER='user_name' PASSWORD='user_pass';

START SLAVE SQL_THREAD UNTIL MASTER_LOG_FILE = 'log_name', MASTER_LOG_POS = 9000 USER='user_name' PASSWORD='user_pass' DEFAULT_AUTH='plugin_name' PLUGIN_DIR='plugin_dir' FOR CHANNEL 'channel';
START SLAVE SQL_THREAD UNTIL SOURCE_LOG_FILE = 'log_name', SOURCE_LOG_POS = 9000 USER='user_name' PASSWORD='user_pass' DEFAULT_AUTH='plugin_name' PLUGIN_DIR='plugin_dir' FOR CHANNEL 'channel';
START SLAVE IO_THREAD, SQL_THREAD UNTIL RELAY_LOG_FILE = 'log_name', RELAY_LOG_POS = 9000 USER='user_name' PASSWORD='user_pass' DEFAULT_AUTH='plugin_name' PLUGIN_DIR='plugin_dir' FOR CHANNEL 'channel';
START SLAVE SQL_THREAD UNTIL SQL_AFTER_MTS_GAPS USER='user_name' PASSWORD='user_pass' DEFAULT_AUTH='plugin_name' PLUGIN_DIR='plugin_dir' FOR CHANNEL 'channel';

START SLAVE UNTIL SQL_AFTER_MTS_GAPS;
START SLAVE SQL_THREAD;
START SLAVE;


START REPLICA IO_THREAD UNTIL SQL_BEFORE_GTIDS = '839fa172-9f8d-4bf2-9a13-88dbc6e3814c' USER='user_name' PASSWORD='user_pass' DEFAULT_AUTH='plugin_name' PLUGIN_DIR='plugin_dir' FOR CHANNEL 'channel';
START REPLICA SQL_THREAD UNTIL SQL_AFTER_GTIDS = '839fa172-9f8d-4bf2-9a13-88dbc6e3814c' USER='user_name' PASSWORD='user_pass' FOR CHANNEL 'channel';
START REPLICA SQL_THREAD UNTIL SQL_AFTER_GTIDS = '839fa172-9f8d-4bf2-9a13-88dbc6e3814c' USER='user_name' PASSWORD='user_pass';

START REPLICA SQL_THREAD UNTIL MASTER_LOG_FILE = 'log_name', MASTER_LOG_POS = 9000 USER='user_name' PASSWORD='user_pass' DEFAULT_AUTH='plugin_name' PLUGIN_DIR='plugin_dir' FOR CHANNEL 'channel';
START REPLICA SQL_THREAD UNTIL SOURCE_LOG_FILE = 'log_name', SOURCE_LOG_POS = 9000 USER='user_name' PASSWORD='user_pass' DEFAULT_AUTH='plugin_name' PLUGIN_DIR='plugin_dir' FOR CHANNEL 'channel';
START REPLICA IO_THREAD UNTIL RELAY_LOG_FILE = 'log_name', RELAY_LOG_POS = 9000 USER='user_name' PASSWORD='user_pass' DEFAULT_AUTH='plugin_name' PLUGIN_DIR='plugin_dir' FOR CHANNEL 'channel';
START REPLICA SQL_THREAD UNTIL SQL_AFTER_MTS_GAPS USER='user_name' PASSWORD='user_pass' DEFAULT_AUTH='plugin_name' PLUGIN_DIR='plugin_dir' FOR CHANNEL 'channel';

START REPLICA UNTIL SQL_AFTER_MTS_GAPS;
START REPLICA SQL_THREAD;
START REPLICA;
