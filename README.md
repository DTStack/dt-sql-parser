# dt-sql-parser

[![NPM version][npm-image]][npm-url] [![NPM downloads][download-img]][download-url] [![Chat][online-chat-img]][online-chat-url]

English | [简体中文](./README-zh_CN.md)

[npm-image]: https://img.shields.io/npm/v/dt-sql-parser.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/dt-sql-parser

[download-img]: https://img.shields.io/npm/dm/dt-sql-parser.svg?style=flat
[download-url]: https://www.npmjs.com/package/dt-sql-parser

[online-chat-img]: https://img.shields.io/discord/920616811261743104?logo=Molecule
[online-chat-url]: https://discord.gg/uVvq6mfPfa

dt-sql-parser is a **SQL Parser** project built with [ANTLR4](https://github.com/antlr/antlr4), and it's mainly for the **BigData** domain. The [ANTLR4](https://github.com/antlr/antlr4) generated the basic Parser, Visitor, and Listener, so it's easy to complete the **syntax validation**, **tokenizer**, **traverse** the AST, and so on features.

Besides, it provides some helper methods, like **split** SQL, and **Auto-Complete**.

**Supported SQL**:

- Generic SQL (MySQL)
- Flink SQL
- Spark SQL
- Hive SQL
- PL/SQL
- PostgreSQL
- Trino SQL

**Supported helper methods**

| SQL Type    | SQL Split | Auto-Complete |
| ----------- | -------- | -------- |
| Generic SQL | WIP      | WIP      |
| Flink SQL   | ✅        | ✅        |
| Spark SQL   | ✅        | ✅        |
| Hive SQL    | ✅        | ✅        |
| PL/SQL      | WIP      | WIP      |
| Postgre SQL | WIP      | WIP      |
| Trino SQL   | WIP      | WIP      |

>Tips: This project is the default for Javascript language, also you can try to compile it to other languages if you need.

<br/>

## Integrating SQL Parser with Monaco Editor

We have provided a [monaco-sql-languages](https://github.com/DTStack/monaco-sql-languages) package, you can integrate with `monaco-editor`
easily.

<br/>

## Installation

```bash
# use npm
npm i dt-sql-parser --save

# use yarn
yarn add dt-sql-parser
```

<br/>

## Usage
Before you get started, you need to understand the basics of how to use it. `dt-sql-parser` provides SQL parser classes for different types of supported SQL:
```javascript
import { GenericSQL, FlinkSQL, SparkSQL, HiveSQL, PLSQL, PostgresSQL, TrinoSQL } from 'dt-sql-parser';
```

Before using syntax validation, autocompletion, and other method, you need to instantiate the Parser of the corresponding SQL type, taking `GenericSQL` as an example:
```javascript
const parser = new GenericSQL();
```

The usage examples below will use `GenericSQL`, and Parser for other SQL types will be used in the same way as `GenericSQL`.

<br/>

### Syntax Validation
```javascript
import GenericSQL from 'dt-sql-parser/dist/parser/generic';

const parser = new GenericSQL();

const correctSql = 'select id,name from user1;';
const errors = parser.validate(correctSql);
console.log(errors); 
```

Output:

```javascript
/*
[]
*/
```

Validate failed:

```javascript
const incorrectSql = 'selec id,name from user1;'
const errors = parser.validate(incorrectSql);
console.log(errors); 
```

Output:

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

We instanced a Parser object, and use the **validate** method to check the SQL syntax, if failed
returns an array object includes **error** message.

<br/>

### Tokenizer

Get all **tokens** by the Parser:

```javascript
import GenericSQL from 'dt-sql-parser/dist/parser/generic';

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
    },
    ...
]
*/
```

<br/>

### Visitor

Traverse the tree node by the Visitor:

```javascript
import GenericSQL from 'dt-sql-parser/dist/parser/generic';
import { SqlParserVisitor } from 'dt-sql-parser/dist/parser/generic/SqlParserVisitor';

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

<br/>

### Listener

Access the specified node in the AST by the Listener

```javascript
import GenericSQL from 'dt-sql-parser/dist/parser/generic';
import { SqlParserListener } from 'dt-sql-parser/dist/parser/generic/SqlParserListener';

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
        console.log('SelectElements', selectElements)
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

<br/>

### Split sql by statement
Take `FlinkSQL` as an example:
```javascript
import { FlinkSQL } from 'dt-sql-parser';
const parser = new FlinkSQL();
const sql = 'SHOW TABLES;\nSELECT * FROM tb;';
const sqlSlices = parser.splitSQLByStatement(sql);
console.log(sqlSlices)

/*
[
    {
    startIndex: 0,
    endIndex: 11,
    startLine: 1,
    endLine: 1,
    startColumn: 1,
    endColumn: 12,
    text: 'SHOW TABLES;'
    },
    {
    startIndex: 13,
    endIndex: 29,
    startLine: 2,
    endLine: 2,
    startColumn: 1,
    endColumn: 17,
    text: 'SELECT * FROM tb;'
    }
]
*/

```

<br/>

### Auto Complete
Get the autocomplete information in the specified position of sql, using `FlinkSQL` as an example:

Call the `getSuggestionAtCaretPosition` method, passing in the SQL content and the row and column numbers of the position that need to be autocompleted.
+ Get a list of keyword candidates

    ```javascript
    import { FlinkSQL } from 'dt-sql-parser';
    const parser = new FlinkSQL();
    const sql = 'CREATE ';
    const pos = { lineNumber: 1, column: 16 }; // the end position
    const keywords = parser.getSuggestionAtCaretPosition(sql, pos)?.keywords;
    console.log(keywords);

    /*
    [ 'CATALOG', 'FUNCTION', 'TEMPORARY', 'VIEW', 'DATABASE', 'TABLE' ] 
    */ 
    ```
+  Gets syntax-related autocompletion information
    ```javascript
    const parser = new FlinkSQL();
    const sql = 'SELECT * FROM tb';
    const pos = { lineNumber: 1, column: 16 }; // after 'tb'
    const syntaxSuggestions = parser.getSuggestionAtCaretPosition(sql, pos)?.syntax;
    console.log(syntaxSuggestions);

    /*
    [
      {
        syntaxContextType: 'table',
        wordRanges: [
          {
            text: 'tb',
            startIndex: 14,
            stopIndex: 15,
            line: 1,
            startColumn: 15,
            stopColumn: 16
          }
        ]
      },
      {
        syntaxContextType: 'view',
        wordRanges: [
          {
            text: 'tb',
            startIndex: 14,
            stopIndex: 15,
            line: 1,
            startColumn: 15,
            stopColumn: 16
          }
        ]
      }
    ]
    */
    ```
Syntax-related autocomplete information returns an array, and each item in the array represents what syntax can be filled in at that position, such as the output result in the above example represents that the position can be filled in **table name** or **view name**. The `syntaxContextType` is a syntax type that can be completed, and `wordRanges` is what has been filled in.

<br/>

### Other API

- `createLexer` Create an instance of Antlr4 Lexer and return;
- `createParser` Create an instance of Antlr4 parser and return;
- `parse` Parses the input SQL and returns the parse tree;

<br/>

## License

[MIT](./LICENSE)
