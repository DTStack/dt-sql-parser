# dt-sql-parser

[![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/dt-sql-parser.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/dt-sql-parser

[English](./README.md) | 简体中文

dt-sql-parser 是一个基于 [ANTLR4](https://github.com/antlr/antlr4) 开发的 SQL 解析器集合。主要用于大数据开发中，对各类 SQL 的解析。

每种 SQL 都提供了对应基础类、Visitor 类和 Listener 类，包含了生成 token、生成 AST、语法校验、visitor 和 listener 模式遍历 AST 指定节点等功能。

此外，为了方便解析，还提供了几个辅助方法可以在解析前对 SQL 进行格式处理。主要作用是清除 SQL 语句中的 '--' 和 '/**/' 两种类型的注释，以及拆分大段 SQL。

提示：项目中的 grammar 文件也可以通过 [ANTLR4](https://github.com/antlr/antlr4) 编译成其他语言

目前支持的 SQL：

- MySQL
- Flink SQL
- Spark SQL
- Hive SQL
- PL/SQL

## 安装

```
// use npm
npm i dt-sql-parser --save

// use yarn
yarn add dt-sql-parser
```

## 示例

### Clean

清除注释和前后空格

```javascript
import { cleanSql } from 'dt-sql-parser';

const sql = `-- comment comment
select id,name from user1; `
const cleanedSql = cleanSql(sql)
console.log(cleanedSql)

/*
select id,name from user1;
*/
```

### Split

分割 sql

```javascript
import { splitSql } from 'dt-sql-parser';

const sql = `select id,name from user1;
select id,name from user2;`
const sqlList = splitSql(sql)
console.log(sqlList)

/*
["select id,name from user1;", "\nselect id,name from user2;"]
*/
```

### Tokens

对 sql 语句进行词法分析，生成 token

```javascript
import { GenericSQL } from 'dt-sql-parser';

const parser = new GenericSQL()
const sql = 'select id,name,sex from user1;'
const tokens = parser.getAllTokens(sql)
console.log(tokens)
/*
[
    {
        channel: 0
        column: 0
        line: 1
        source: [SqlLexer, InputStream]
        start: 0
        stop: 5
        tokenIndex: -1
        type: 137
        _text: null
        text: "SELECT"
    },
    ...
]
*/
```

### Syntax validation

validate 方法对 sql 语句的语法正确性进行校验，返回一个由 error 组成的数组

```javascript
import { GenericSQL } from 'dt-sql-parser';

const validate = (sql) => {
    const parser = new GenericSQL()
    const errors = parser.validate(sql)
    console.log(errors)
}
```
语法正确的 sql:
```javascript
const correctSql = 'select id,name from user1;'
validate(correctSql)
/*
[]
*/
```
包含错误语法的 sql:
```javascript
const incorrectSql = 'selec id,name from user1;'
validate(incorrectSql)
/*
[
    {
        endCol: 5,
        endLine: 1,
        startCol: 0,
        startLine: 1,
        message: "mismatched input 'SELEC' expecting {<EOF>, 'ALTER', 'ANALYZE', 'CALL', 'CHANGE', 'CHECK', 'CREATE', 'DELETE', 'DESC', 'DESCRIBE', 'DROP', 'EXPLAIN', 'GET', 'GRANT', 'INSERT', 'KILL', 'LOAD', 'LOCK', 'OPTIMIZE', 'PURGE', 'RELEASE', 'RENAME', 'REPLACE', 'RESIGNAL', 'REVOKE', 'SELECT', 'SET', 'SHOW', 'SIGNAL', 'UNLOCK', 'UPDATE', 'USE', 'BEGIN', 'BINLOG', 'CACHE', 'CHECKSUM', 'COMMIT', 'DEALLOCATE', 'DO', 'FLUSH', 'HANDLER', 'HELP', 'INSTALL', 'PREPARE', 'REPAIR', 'RESET', 'ROLLBACK', 'SAVEPOINT', 'START', 'STOP', 'TRUNCATE', 'UNINSTALL', 'XA', 'EXECUTE', 'SHUTDOWN', '--', '(', ';'}"
    }
]
*/
```

### Visitor

使用 visitor 模式访问 AST 中的指定节点

```javascript
import { GenericSQL, SqlParserVisitor } from 'dt-sql-parser';

const parser = new GenericSQL()
const sql = `select id,name from user1;`
// parseTree
const tree = parser.parse(sql)
class MyVisitor extends SqlParserVisitor {
    // 重写 visitTableName 方法
    visitTableName(ctx) {
        let tableName = ctx.getText().toLowerCase()
        console.log('TableName', tableName)
    }
    // 重写 visitSelectElements 方法
    visitSelectElements(ctx) {
        let selectElements = ctx.getText().toLowerCase()
        console.log('SelectElements', selectElements)
    }
}
const visitor = new MyVisitor()
visitor.visit(tree)

/*
SelectElements id,name
TableName user1
*/

```
提示：使用 Visitor 模式时，节点的方法名称可以在对应 SQL 目录下的 Visitor 文件中查找

### Listener

listener 模式，利用 [ANTLR4](https://github.com/antlr/antlr4) 提供的 ParseTreeWalker 对象遍历 AST，进入各个节点时调用对应的方法。

```javascript
import { GenericSQL, SqlParserListener } from 'dt-sql-parser';

const parser = new GenericSQL();
const sql = 'select id,name from user1;'
// parseTree
const tree = parser.parse(sql)
class MyListener extends SqlParserListener {
    enterTableName(ctx) {
        let tableName = ctx.getText().toLowerCase()
        console.log('TableName', tableName)
    }
    enterSelectElements(ctx) {
        let selectElements = ctx.getText().toLowerCase()
        log('SelectElements', selectElements)
    }
}
const listenTableName = new MyListener();
parser.listen(listenTableName, tree);

/*
SelectElements id,name
TableName user1
*/

```

提示：使用 Listener 模式时，节点的方法名称可以在对应 SQL 目录下的 Listener 文件中查找

### 其他

- parserTreeToString (将 SQL 解析成 AST，再转成 string 形式)

## 路线图

- Auto-complete
- Format code

## 许可证

[MIT](./LICENSE)