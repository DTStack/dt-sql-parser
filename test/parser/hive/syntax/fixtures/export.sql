EXPORT TABLE tbl TO 'hdfs_exports_location/department';

EXPORT TABLE employee 
PARTITION(emp_country="in", emp_state="ka") 
TO 'hdfs_exports_location/employee'
FOR REPLICATION('eventid');