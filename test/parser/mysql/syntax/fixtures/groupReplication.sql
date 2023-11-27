-- https://dev.mysql.com/doc/refman/8.0/en/start-group-replication.html

/* START GROUP_REPLICATION
        [USER='user_name']
        [, PASSWORD='user_pass']
        [, DEFAULT_AUTH='plugin_name'] */

START GROUP_REPLICATION USER='user_name', PASSWORD='user_pass', DEFAULT_AUTH='plugin_name';
START GROUP_REPLICATION USER='user_name', PASSWORD='user_pass';
START GROUP_REPLICATION;



-- https://dev.mysql.com/doc/refman/8.0/en/stop-group-replication.html

STOP GROUP_REPLICATION;
