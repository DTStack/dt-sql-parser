# dt-sql-parser

本项目用于处理sql，目前含有功能

1. 解析sql生成语法树(不支持CREATE等语句，具体可以查看`core/astParser`文件)，支持单条sql语句
2. 校验sql，hive sql，impala sql等语法，并给予错误信息与建议提示
3. sql分割,根据`;`将sql分割为数组
4. 去除sql中的的注释(目前支持`--`,`/**/`类型注释)


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

### 校验hive sql语法
``` javascript
const dtSqlParser=require("dt-sql-parser").parser;

console.log(dtSqlParser.parseSyntax("selet  * form",'hive'));

/*
{
  "text": "selet",//错误部分
  "token": "REGULAR_IDENTIFIER",//类型
  "line": 0,
  "loc": {//错误位置信息
    "first_line": 1,
    "last_line": 1,
    "first_column": 0,
    "last_column": 5
  },
  "ruleId": "0",
  "expected": [//建议输入内容
    {
      "text": "select",//建议内容
      "distance": 1//建议优先级
    },
    {
      "text": "delete",
      "distance": 2
    }
  ],
  "recoverable": false,
  "incompleteStatement": true
}
*/
```

## API

### filter

#### function filterComments(sql:string):string
过滤sql注释(支持/*和--)

#### function splitSql(sql:string):Array<string>
自动去除注释，并且提取出各个sql

### parser

#### function parseSyntax(sql:string|Array<string>, type?:string):Object|boolean
校验sql语法，如果没错误，则返回false，否则返回错误详细信息

可以提供一个含有两个字符串的数组，代表被光标分割的两个sql片段

#### function parserSql(sql:string|Array<string>, type?:string):Object
解析sql语法，根据上下文提示补全字段与其它辅助信息

可以提供一个含有两个字符串的数组，代表被光标分割的两个sql片段

----

ast生成代码来自[nquery](https://github.com/alibaba/nquery/)

hive，impala等语法解析文件来自[Hue](https://github.com/cloudera/hue)

----

### ChangeLog

- 1.1.8 添加转义字符支持
- 1.1.9 添加函数的中括号语法支持( split(nameList)[0] )
