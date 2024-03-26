ADD JAR WITH /home/test.jar;

ADD JAR WITH /home/test.jar AS test.jar;

ADD FILE WITH /home/admin/sftp/dttest_cn/DsCenter_1687/krb5.conf;

ADD FILE WITH /home/admin/sftp/dttest_cn/DsCenter_1687/krb5.conf AS krb5.conf;

ADD FILE WITH /home/admin/sftp/dttest_cn/DsCenter_1687/krb5.conf RENAME test.conf;

ADD PYTHON_FILES WITH /test.py RENAME test.py;

ADD PYTHON_REQUIREMENTS WITH /requirements.txt RENAME requirements.txt;

ADD PYTHON_DEPENDENCIES WITH /dependencies.txt RENAME dependencies.txt;

ADD PYTHON_JAR WITH /python_jar.jar RENAME py_jar.jar;

ADD PYTHON_PARAMETER my_parameter.py;

ADD PYTHON_ARCHIVES WITH /archives.py RENAME archive.tx;

ADD ENGINE FILE WITH /filePath RENAME theName KEY theKey;

ADD CONFIG FILE WITH /config.ini FOR hiveConf as hadoop.cong.dir;