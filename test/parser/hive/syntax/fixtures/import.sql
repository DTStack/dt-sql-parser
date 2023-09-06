IMPORT FROM 'hdfs_exports_location/department';

IMPORT TABLE employee PARTITION (emp_country="us", emp_state="tn") FROM 'hdfs_exports_location/employee';

IMPORT EXTERNAL TABLE employee 
PARTITION (emp_country="us", emp_state="tn") 
FROM 'hdfs_exports_location/employee'
LOCATION 'import_target_path';