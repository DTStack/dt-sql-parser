# dt-sql-parser

本项目用于处理sql，目前含有功能

1. 解析sql生成语法树(不支持CREATE等语句，具体可以查看`core/astParser`文件)，支持单条sql语句
2. 去除sql中的的注释(目前支持`--`,`/**/`类型注释)
3. sql分割,根据`;`将sql分割为数组


## 用法

### 过滤注释 / sql分割

``` javascript
const dtFilter=require("dt-sql-parser").filter;
const sql=`
/*sttttttttart*/create table /*hhhhhhhh
hhhhhh
aaaaaa*/ sql_task_comment_test(id int comment 'id') comment 'sql test';
    --eeeeeeeend
`
console.log(dtFilter.filterComments(sql))//过滤注释
console.log(dtFilter.splitSql(sql));//分割sql
```

### 生成ast树
``` javascript
const dtFilter=require("dt-sql-parser").parser;
const sql=`
/*sttttttttart*/select userId as id,name /*hhhhhhhh
hhhhhh
aaaaaa*/ from user where isDeleted=0
    --eeeeeeeend
`
console.log(dtFilter.parse(sql))//注意，目前只支持单条sql语句，所以需要自己调用sql分割一条一条处理！
```

语法解析模块代码来自[nquery](http://github.com/alibaba/nquery/)