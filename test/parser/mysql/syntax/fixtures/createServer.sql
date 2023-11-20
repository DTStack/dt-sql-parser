-- https://dev.mysql.com/doc/refman/8.0/en/create-server.html

/* CREATE SERVER server_name
    FOREIGN DATA WRAPPER wrapper_name
    OPTIONS (option [, option] ...)

option: {
    HOST character-literal
  | DATABASE character-literal
  | USER character-literal
  | PASSWORD character-literal
  | SOCKET character-literal
  | OWNER character-literal
  | PORT numeric-literal
} */

CREATE SERVER server_name FOREIGN DATA WRAPPER mysql OPTIONS (USER 'Remote', HOST '198.51.100.106', DATABASE 'test');
