-- https://dev.mysql.com/doc/refman/8.0/en/clone.html

/* CLONE clone_action

clone_action: {
    LOCAL DATA DIRECTORY [=] 'clone_dir'
  | INSTANCE FROM 'user'@'host':port
    IDENTIFIED BY 'password'
    [DATA DIRECTORY [=] 'clone_dir']
    [REQUIRE [NO] SSL]
} */


CLONE LOCAL DATA DIRECTORY = 'clone_dir';
CLONE LOCAL DATA DIRECTORY 'clone_dir';

CLONE INSTANCE FROM root@127.0.0.1:3306 IDENTIFIED BY 'password' DATA DIRECTORY = 'clone_dir' REQUIRE NO SSL;
CLONE INSTANCE FROM root@127.0.0.1:3306 IDENTIFIED BY 'password' REQUIRE SSL;
