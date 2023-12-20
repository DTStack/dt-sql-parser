# dt-sql-parser

[![NPM version][npm-image]][npm-url] [![NPM downloads][download-img]][download-url] [![Chat][online-chat-img]][online-chat-url]

[npm-image]: https://img.shields.io/npm/v/dt-sql-parser.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/dt-sql-parser

[download-img]: https://img.shields.io/npm/dm/dt-sql-parser.svg?style=flat
[download-url]: https://www.npmjs.com/package/dt-sql-parser

[online-chat-img]: https://img.shields.io/discord/920616811261743104?logo=Molecule
[online-chat-url]: https://discord.gg/uVvq6mfPfa

English | [简体中文](./README-zh_CN.md)

dt-sql-parser is a **SQL Parser** project built with [ANTLR4](https://github.com/antlr/antlr4), and it's mainly for the **BigData** field. The [ANTLR4](https://github.com/antlr/antlr4) generated the basic Parser, Visitor, and Listener, so it's easy to complete the **syntax validation**, **tokenizer**, **traverse** the AST, and so on features.

Additionally, it provides auxiliary functions such as **SQL splitting** and **code completion**.

**Supported SQL**:

- MySQL
- Flink SQL
- Spark SQL
- Hive SQL
- PostgreSQL
- Trino SQL
- Impala SQL

**Supported auxiliary methods**

| SQL Type    | SQL Spliting | Code Completion |
| ----------- | ------------ | --------------- |
| MySQL       | ✅           | ✅               |
| Flink SQL   | ✅           | ✅               |
| Spark SQL   | ✅           | ✅               |
| Hive SQL    | ✅           | ✅               |
| PostgreSQL  | ✅           | ✅               |
| Trino SQL   | ✅           | ✅               |
| Impala SQL  | ✅           | ✅               |

>Tips: This project is the default for Javascript language, also you can try to compile it to other languages if you need.

<br/>

## Integrating SQL Parser with Monaco Editor

We have provided [monaco-sql-languages](https://github.com/DTStack/monaco-sql-languages), it is easily to integrate with `monaco-editor`.

>Tips: If you want to run `dt-sql-parser` in browser, don't forget to install the `assert` and `util` polyfills, and define the global variable `process.env`.
  None of this is needed in the node environment, because node has them built-in.

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
We recommend learning the Fundamentals usage before continuing. The dt-sql-parser library provides SQL Parser classes for different types of SQL.
```javascript
import { MySQL, FlinkSQL, SparkSQL, HiveSQL, PostgresSQL, TrinoSQL, ImpalaSQL } from 'dt-sql-parser';
```

Before using syntax validation, code completion, and other features, it is necessary to instantiate the Parser of the relevant SQL type.
For instance, one can consider using `MySQL` as an example:
```javascript
const parser = new MySQL();
```

The following usage examples will utilize the `MySQL`, and the Parser for other SQL types will be used in a similar manner as `MySQL`.

### Syntax Validation
```javascript
import { MySQL } from 'dt-sql-parser';

const parser = new MySQL();

const correctSql = 'select id,name from user1;';
const errors = parser.validate(correctSql);
console.log(errors); 
```

*output:*

```javascript
/* 
[]
*/
```

**Validate failed:**

```javascript
const incorrectSql = 'selec id,name from user1;'
const errors = parser.validate(incorrectSql);
console.log(errors); 

```

*output:*

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

### Tokenizer

Get all **tokens** by the Parser:

```javascript
import { MySQL } from 'dt-sql-parser';

const parser = new MySQL()
const sql = 'select id,name,sex from user1;'
const tokens = parser.getAllTokens(sql)
console.log(tokens)
```

*output:*

```javascript
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

### Visitor

Traverse the tree node by the Visitor:

```typescript
import { MySQL, AbstractParseTreeVisitor } from 'dt-sql-parser';
import type { MySqlParserVisitor } from 'dt-sql-parser';

const parser = new MySQL();
const sql = `select id,name from user1;`;
const tree = parser.parse(sql);

type Result = string;

class MyVisitor extends AbstractParseTreeVisitor<Result> implements MySqlParserVisitor<Result> {
    protected defaultResult() {
        return '';
    }
    visitTableName(ctx) {
        let tableName = ctx.text.toLowerCase();
        console.log('TableName:', tableName);
        return '';
    }
    visitSelectElements(ctx) {
        let selectElements = ctx.text.toLowerCase();
        console.log('SelectElements:', selectElements);
        return '';
    }
    visitProgram(ctx) { // program is root rule
        this.visitChildren(ctx);
        return 'Return by program context'
    }
}
const visitor = new MyVisitor();
const result = visitor.visit(tree);

console.log(result);
```

*output:*

```javascript
/*
SelectElements: id,name
TableName: user1
*/
/*
Return by program node
*/
```

> Tips: The node's method name can be found in the Visitor file under the corresponding SQL directory

### Listener

Access the specified node in the AST by the Listener

```typescript
import { MySQL } from 'dt-sql-parser';
import type { MySqlParserListener } from 'dt-sql-parser';

const parser = new MySQL();
const sql = 'select id,name from user1;';
const parseTree = parser.parse(sql);

class MyListener implements MySqlParserListener {
    enterTableName(ctx) {
        let tableName = ctx.text.toLowerCase();
        console.log('TableName:', tableName);
    }
    enterSelectElements(ctx) {
        let selectElements = ctx.text.toLowerCase();
        console.log('SelectElements:', selectElements);
    }
}
const listenTableName = new MyListener();
parser.listen(listenTableName as MySqlParserListener, parseTree);
```

*output:*

```javascript
/*
SelectElements: id,name
TableName: user1
*/
```

> Tips: The node's method name can be found in the Listener file under the corresponding SQL directory

### Splitting SQL statements
Take `FlinkSQL` as an example:
```javascript
import { FlinkSQL } from 'dt-sql-parser';
const parser = new FlinkSQL();
const sql = 'SHOW TABLES;\nSELECT * FROM tb;';
const sqlSlices = parser.splitSQLByStatement(sql);
console.log(sqlSlices)
```

*output:*

```javascript
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

### Code Completion
Obtaining code completion information at a specified position in SQL.
We can refer to the example of using `FlinkSQL`.

Invoke the `getSuggestionAtCaretPosition` method, pass the SQL content and the row and column numbers indicating the position where code completion is desired.
+ **keyword candidates list**

    ```javascript
    import { FlinkSQL } from 'dt-sql-parser';
    const parser = new FlinkSQL();
    const sql = 'CREATE ';
    const pos = { lineNumber: 1, column: 16 }; // the end position
    const keywords = parser.getSuggestionAtCaretPosition(sql, pos)?.keywords;
    console.log(keywords);
    ```
    *output:*
    ```javascript
    /*
    [ 'CATALOG', 'FUNCTION', 'TEMPORARY', 'VIEW', 'DATABASE', 'TABLE' ] 
    */
    ```
+  **Obtaining information related to grammar completion**
    ```javascript
    const parser = new FlinkSQL();
    const sql = 'SELECT * FROM tb';
    const pos = { lineNumber: 1, column: 16 }; // after 'tb'
    const syntaxSuggestions = parser.getSuggestionAtCaretPosition(sql, pos)?.syntax;
    console.log(syntaxSuggestions);
    ```
    *output:*
    ```javascript
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
The grammar-related code completion information returns an array, where each item represents what grammar can be filled in at that position. For example, the output in the above example represents that the position can be filled with either a **table name** or **a view name**. In this case, `syntaxContextType` represents the type of grammar that can be completed, and `wordRanges` represents the content that has already been filled.

### Other API

- `createLexer` Create an instance of Antlr4 Lexer and return it;
- `createParser` Create an instance of Antlr4 parser and return it;
- `parse` Parses the input SQL and returns the parse tree;

<br/>

## License

[MIT](./LICENSE)
