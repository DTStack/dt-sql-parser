### dt-sql-parser

本项目用于处理sql，目前含有功能

1. 解析sql生成语法树(不支持CREATE等语句，具体可以查看`core/astParser`文件)，支持单条sql语句
2. 去除sql中的的注释(目前支持--类型注释)

语法解析模块代码来自nquery <http://github.com/alibaba/nquery/>