-- REVOKE ROLE role_name FROM GROUP group_name
REVOKE ROLE my_role FROM GROUP my_group;

-- REVOKE privilege ON object_type object_name FROM USER user_name
REVOKE ALL ON SERVER my_server FROM USER 'impala';
REVOKE ALTER ON DATABASE my_database FROM USER 'impala';
REVOKE CREATE ON TABLE my_table FROM USER 'impala';
REVOKE DROP ON URI my_uri FROM USER 'impala';
REVOKE INSERT ON URI my_uri FROM USER 'impala';
REVOKE REFRESH ON TABLE my_table FROM USER 'impala';
REVOKE SELECT ON TABLE my_table FROM USER 'impala';
REVOKE SELECT(column_name) ON TABLE my_table FROM USER 'impala';

-- REVOKE privilege ON object_type object_name FROM GROUP group_name
REVOKE ALL ON SERVER my_server FROM GROUP 'impala_group';
REVOKE ALTER ON DATABASE my_database FROM GROUP 'impala_group';
REVOKE CREATE ON TABLE my_table FROM GROUP 'impala_group';
REVOKE DROP ON URI my_uri FROM GROUP 'impala_group';
REVOKE INSERT ON URI my_uri FROM GROUP 'impala_group';
REVOKE REFRESH ON TABLE my_table FROM GROUP 'impala_group';
REVOKE SELECT ON TABLE my_table FROM GROUP 'impala';
REVOKE SELECT(column_name) ON TABLE my_table FROM GROUP 'impala_group';

-- REVOKE [GRANT OPTION FOR] privilege ON object_type object_name FROM [ROLE] role_name
REVOKE ALL ON SERVER my_server FROM 'impala_role';
REVOKE GRANT OPTION FOR ALL ON SERVER my_server FROM ROLE 'impala_role';
REVOKE SELECT ON DATABASE my_table FROM ROLE 'impala_role';
REVOKE GRANT OPTION FOR SELECT(column_name) ON TABLE my_table FROM 'impala_role';

-- example
REVOKE GRANT OPTION FOR ALL ON SERVER FROM ROLE foo_role;
REVOKE ALL ON SERVER FROM ROLE foo_role;