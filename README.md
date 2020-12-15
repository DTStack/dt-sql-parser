# dt-sql-parser

[![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/dt-sql-parser.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/dt-sql-parser

dt-sql-parser is a SQL parser built on [ANTLR4](https://github.com/antlr/antlr4) .It's mainly used for analyzing all kinds of SQL in the development of big data. Supported SQL:

- MySQL
- Flink SQL
- Spark SQL
- Hive SQL
- PL/SQL

It provides the basic class, Visitor class, and Listener class. These class including the ability to generate tokens, generate parse tree, syntax validation, and Visitor & Listener patterns to traverse the AST.

In addition, several helper methods are provided to format the SQL before parsing. The main effect is to clear the '--' and '/**/' types of comments in SQL statements, and to split large chunks of SQL

tips: The Grammar file can also be compiled into other languages with [ANTLR4](https://github.com/antlr/antlr4) .

[English](./README.md) | 简体中文

## Installation

```
// use npm
npm i dt-sql-parser --save

// use yarn
yarn add dt-sql-parser
```

## Usage

### Clean

clear comments and Spaces before and after

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

split sql

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

lexical analysis, generate token

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

verifies the syntax correctness of the SQL statement and returns an array of errors

```javascript
import { GenericSQL } from 'dt-sql-parser';

const validate = (sql) => {
    const parser = new GenericSQL()
    const errors = parser.validate(sql)
    console.log(errors)
}
```
correct sql:
```javascript
const correctSql = 'select id,name from user1;'
validate(correctSql)
/*
[]
*/
```
incorrect sql:
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

access the specified node in the AST by Visitor pattern

```javascript
import { GenericSQL, SqlParserVisitor } from 'dt-sql-parser';

const parser = new GenericSQL()
const sql = `select id,name from user1;`
// parseTree
const tree = parser.parse(sql)
class MyVisitor extends SqlParserVisitor {
    // overwrite visitTableName
    visitTableName(ctx) {
        let tableName = ctx.getText().toLowerCase()
        console.log('TableName', tableName)
    }
    // overwrite visitSelectElements
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
tips: The node's method name can be found in the Visitor file under the corresponding SQL directory

### Listener

access the specified node in the AST by Listener pattern

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

tips: The node's method name can be found in the Listener file under the corresponding SQL directory

### Other

- parserTreeToString (parse the SQL into AST and turn it into a String)

## Roadmap

- Auto-complete
- Impala SQL

## License

[MIT](./LICENSE)