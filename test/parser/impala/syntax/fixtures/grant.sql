-- GRANT ROLE role_name TO GROUP group_name
GRANT ROLE role_name TO GROUP group_name

-- GRANT privilege ON object_type object_name TO USER user_name
GRANT ALL ON SERVER my_server TO USER 'impala';
GRANT ALTER ON DATABASE my_database TO USER 'impala';
GRANT CREATE ON TABLE my_table TO USER 'impala';
GRANT DROP ON URI my_uri TO USER 'impala';
GRANT INSERT ON URI my_uri TO USER 'impala';
GRANT REFRESH ON TABLE my_table TO USER 'impala';
GRANT SELECT ON TABLE my_table TO USER 'impala';
GRANT SELECT(column_name) ON TABLE my_table TO USER 'impala';

-- GRANT privilege ON object_type object_name TO GROUP group_name
GRANT ALL ON SERVER my_server TO GROUP 'impala_group';
GRANT ALTER ON DATABASE my_database TO GROUP 'impala_group';
GRANT CREATE ON TABLE my_table TO GROUP 'impala_group';
GRANT DROP ON URI my_uri TO GROUP 'impala_group';
GRANT INSERT ON URI my_uri TO GROUP 'impala_group';
GRANT REFRESH ON TABLE my_table TO GROUP 'impala_group';
GRANT SELECT ON TABLE my_table TO GROUP 'impala_group';
GRANT SELECT(column_name) ON TABLE my_table TO GROUP 'impala_group';

-- GRANT privilege ON object_type object_name TO ROLE group_name
GRANT ALL ON SERVER my_server TO ROLE 'impala_role';
GRANT ALTER ON DATABASE my_database TO ROLE 'impala_role';
GRANT CREATE ON TABLE my_table TO ROLE 'impala_role';
GRANT DROP ON URI my_uri TO ROLE 'impala_role';
GRANT INSERT ON URI my_uri TO ROLE 'impala_role';
GRANT REFRESH ON TABLE my_table TO ROLE 'impala_role';
GRANT SELECT ON TABLE my_table TO ROLE 'impala_role';
GRANT SELECT(column_name) ON TABLE my_table TO ROLE 'impala_role';

-- example
GRANT ALL ON SERVER TO ROLE foo_role;