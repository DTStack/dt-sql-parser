> 如果你只想单纯的解析(SQL/SparkSQL)，请使用 [cuopyue](https://github.com/HSunboy/cuopyue)

# dt-sql-parser

[![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/dt-sql-parser.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/dt-sql-parser

本项目用于处理SQL，目前含有功能

1. 校验SQL，hive SQL，impala SQL，flinkSQL 等语法，并给予错误信息与建议提示
2. SQL分割,根据`;`将sql分割为数组
3. 去除SQL中的的注释(目前支持`--`,`/**/`类型注释)


## 用法

### 过滤注释 / SQL分割

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
过滤 `sql` 注释(支持`/*`和`--`)

#### function splitSql(sql:string):Array<string>
自动去除注释，并且提取出各个 `sql`

### parser

#### function parseSyntax(sql:string|Array<string>, type?:string):Object|boolean
校验 `sql` 语法，如果没错误，则返回 `false`，否则返回错误详细信息

可以提供一个含有两个字符串的数组，代表被光标分割的两个 `sql片段`

#### function parserSql(sql:string|Array<string>, type?:string):Object
解析 `sql` 语法，根据上下文提示补全字段与其它辅助信息

可以提供一个含有两个字符串的数组，代表被光标分割的两个sql片段

### flinksqlParser

#### function flinksqlParser (sql: sql): SyntaxError
校验 `flinksql` 语法。

>本项目文档不是很详细，也不准确（暂时没精力写），项目功能可以满足 hivesql，sql，impala，flinksql 的语法检查和提示功能。
具体使用方式可以参照代码中的 ts 类型。
----

hive，impala语法解析文件来自[Hue](https://github.com/cloudera/hue)

----

### ChangeLog

- 1.1.8 添加转义字符支持
- 1.1.9 添加函数的中括号语法支持( split(nameList)[0] )
- 1.2.0 添加 ts，添加测试
- 2.0.0 添加flinksql语法检查
- 3.0.0 拆分hive，impala，集成最新 `HUE` 方案
