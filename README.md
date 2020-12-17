# dt-sql-parser

[![NPM version][npm-image]][npm-url]

English | [简体中文](./README-zh_CN.md)

[npm-image]: https://img.shields.io/npm/v/dt-sql-parser.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/dt-sql-parser

dt-sql-parser is a `SQL Parser` project built with [ANTLR4](https://github.com/antlr/antlr4), and it's mainly for the `BigData` domain. The [ANTLR4](https://github.com/antlr/antlr4) generated the basic Parser, Visitor, and Listener, so it's easy to complete `validate`, `tokenize`, `traverse` the AST, and so on features.

Besides, it' provides some helper methods, like `split` SQL, and filter the `--` and `/**/` types of comments in SQL.

> Tips: This project is the default for Javascript language, also you can try to compile it to other languages if you need.

Supported SQL:

- MySQL
- Flink SQL
- Spark SQL
- Hive SQL
- PL/SQL

## Installation

```bash
// use npm
npm i dt-sql-parser --save

// use yarn
yarn add dt-sql-parser
```

## Usage

### Syntax Validation

First, we need to import the `Parser` object from `dt-sql-parser`, the different language needs
different Parser, so if you need to handle the `Flink SQL`, you can import the `FlinkSQL Parser`.

The below is a `GenericSQL Parser` example:

```javascript
import { GenericSQL } from 'dt-sql-parser';

const parser = new GenericSQL();

const correctSql = 'select id,name from user1;';
const errors = parser.validate(correctSql);
console.log(errors); 
```

output:

```javascript
/*
[]
*/
```

validate failed:

```javascript
const incorrectSql = 'selec id,name from user1;'
const errors = parser.validate(incorrectSql);
console.log(errors); 
```

output:

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

We instanced a Parser object, and use the `validate` method to check the SQL syntax, if failed
returns an array object includes `error` message.

### Tokenizer

You can also the all `tokens` by the Parser:

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

### Visitor

Traverse the tree node by the Visitor:

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

> Tips: The node's method name can be found in the Visitor file under the corresponding SQL directory

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

> Tips: The node's method name can be found in the Listener file under the corresponding SQL directory

### Clean

Clear the `comments` and `spaces` before and after

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

### Split SQL

When the SQL text is very big, you can think about to split it by `;` , and handle each line.

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

### Other API

- parserTreeToString(input: string)

Parse the input and convert the AST to a `List-like` tree string.

## Roadmap

- Auto-complete
- Format code

## License

[MIT](./LICENSE)
