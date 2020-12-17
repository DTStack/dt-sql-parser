# dt-sql-parser

[![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/dt-sql-parser.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/dt-sql-parser

[English](./README.md) | 简体中文

dt-sql-parser 是一个基于 [ANTLR4](https://github.com/antlr/antlr4) 开发的， 针对大数据领域的 `SQL Parser` 项目。通过[ANTLR4](https://github.com/antlr/antlr4) 默认生成的 Parser、Visitor 和 Listener 对象，我们可以轻松的做到对 SQL 语句的`语法检查`（Syntax Validation）、`词法分析`（Tokenizer)、 `遍历 AST` 节点等功能。此外，还提供了几个辅助方法, 例如 SQL 切分（Split）、过滤 SQL 语句中的 `--` 和 `/**/` 等类型的注释。

已支持的 SQL 类型：

- MySQL
- Flink SQL
- Spark SQL
- Hive SQL
- PL/SQL

> 提示：当前的 Parser 是 `Javascript` 语言版本，如果有必要，可以尝试编译 Grammar 文件到其他目标语言

## 安装

```bash
// use npm
npm i dt-sql-parser --save

// use yarn
yarn add dt-sql-parser
```

## 使用

### 语法校验（Syntax Validation）

首先需要声明相应的 Parser 对象，不同的 SQL 类型需要引入不同的 Parser 对象处理，例如如果是
针对 `Flink SQL`，则需要单独引入 `FlinkSQL` Parser，这里我们使用 `GenericSQL` 作为示例：

```javascript
import { GenericSQL } from 'dt-sql-parser';

const parser = new GenericSQL();

const correctSql = 'select id,name from user1;';
const errors = parser.validate(correctSql);
console.log(errors); 
```

输出：

```javascript
/*
[]
*/
```

校验失败示例：

```javascript
const incorrectSql = 'selec id,name from user1;'
const errors = parser.validate(incorrectSql);
console.log(errors); 
```

输出：

```javascript
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

先实例化 Parser 对象，然后使用 `validate` 方法对 SQL 语句进行校验，如果校验失败，则返回一个包含 `Error` 信息的数组。

### 词法分析（Tokenizer）

必要场景下，可单独对 SQL 语句进行词法分析，获取所有的 Tokens 对象：

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

### 访问者模式（Visitor）

使用 Visitor 模式访问 AST 中的指定节点

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

> 提示：使用 Visitor 模式时，节点的方法名称可以在对应 SQL 目录下的 Visitor 文件中查找

### 监听器（Listener）

Listener 模式，利用 [ANTLR4](https://github.com/antlr/antlr4) 提供的 ParseTreeWalker 对象遍历 AST，进入各个节点时调用对应的方法。

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

> 提示：使用 Listener 模式时，节点的方法名称可以在对应 SQL 目录下的 Listener 文件中查找

### 清理注释内容

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

### 切割 SQL （Split）

SQL 太大的情况下，我们可以先将SQL语句按 `;` 切割，然后逐句处理。

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

### 其他 API

- parserTreeToString (input: string)

将 SQL 解析成 `List-like` 风格的树形字符串， 一般用于测试

## 路线图

- Auto-complete
- Format code

## 许可证

[MIT](./LICENSE)
