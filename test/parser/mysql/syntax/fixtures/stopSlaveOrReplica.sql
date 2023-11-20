-- https://dev.mysql.com/doc/refman/8.0/en/stop-replica.html
-- https://dev.mysql.com/doc/refman/8.0/en/stop-slave.html

/* STOP {SLAVE | REPLICA} [thread_types] [channel_option]

thread_types:
    [thread_type [, thread_type] ... ]

thread_type: IO_THREAD | SQL_THREAD

channel_option:
    FOR CHANNEL channel */


STOP SLAVE IO_THREAD, SQL_THREAD FOR CHANNEL 'channel';
STOP SLAVE SQL_THREAD FOR CHANNEL 'channel';
STOP SLAVE IO_THREAD, SQL_THREAD;
STOP SLAVE SQL_THREAD;
STOP SLAVE FOR CHANNEL 'channel';
STOP SLAVE;

STOP REPLICA IO_THREAD, SQL_THREAD FOR CHANNEL 'channel';
STOP REPLICA SQL_THREAD FOR CHANNEL 'channel';
STOP REPLICA IO_THREAD, SQL_THREAD;
STOP REPLICA SQL_THREAD;
STOP REPLICA FOR CHANNEL 'channel';
STOP REPLICA;
