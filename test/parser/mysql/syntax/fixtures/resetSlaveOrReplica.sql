-- https://dev.mysql.com/doc/refman/8.0/en/reset-replica.html

/* RESET REPLICA [ALL] [channel_option]

channel_option:
    FOR CHANNEL channel */


RESET REPLICA ALL FOR CHANNEL 'channel';
RESET REPLICA FOR CHANNEL 'channel';
RESET REPLICA;



-- https://dev.mysql.com/doc/refman/8.0/en/reset-slave.html

/* RESET {SLAVE | REPLICA} [ALL] [channel_option]

channel_option:
    FOR CHANNEL channel */


RESET SLAVE ALL FOR CHANNEL 'channel';
RESET REPLICA ALL FOR CHANNEL 'channel';
RESET SLAVE FOR CHANNEL 'channel';
RESET REPLICA FOR CHANNEL 'channel';
RESET SLAVE;
RESET REPLICA;
