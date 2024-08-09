# CONTRIBUTING

English | [简体中文](./CONTRIBUTING-zh_CN.md)

## Development

> [!Tips]
> Before starting, you need to make sure your local Java environment is set up, otherwise you will not be able to generate from the grammar file. You can check it by running `java --version`.

-   **Install dependencies**

    ```bash
    pnpm install
    ```

-   **Compile g4 Files**

    ```bash
    # Compile all g4 files
    pnpm antlr4
    # Compile for a specific language
    pnpm antlr4 --lang mysql
    ```

-   **Run Unit Tests**

    ```bash
    pnpm test
    ```

-   **Run Benchmark Tests**

    ```bash
    pnpm benchmark
    ```

## Directory Overview

-   `src/grammar`: Contains g4 files (grammar files)
-   `src/lib`: Generated files from g4 grammar (produced by running `pnpm antlr4`)
-   `src/parser`: Implementations of SQL Parser classes
-   `src/parser/common`: Base classes and utility methods for SQL Parsers
-   `test`: Unit tests
-   `benchmark`: Benchmark tests

## How to Add a New SQL Language

1. **Add New Grammar Files**
   
   Add the new g4 grammar file to `src/grammar/<SQL name>`. Name the file in PascalCase. The grammar rules within the file should adhere to the following:
   
    - The root rule should be named `program`.
    - Support parsing multiple SQL statements.
    - Enable [case-insensitive options](https://github.com/antlr/antlr4/blob/dev/doc/options.md#caseinsensitive) (if the SQL language is case-insensitive).
    - Lexical rules for all keywords should prefix with `KW_` (e.g., `KW_SELECT: 'SELECT';`). This aids in differentiating keyword lexical rules for autocomplete functionality.

2. **Generate Files from Grammar**

   Run the following command to generate files from the new grammar:
   
    ```bash
    pnpm antlr4 --lang <SQL name>
    ```

   Check that the corresponding Lexer, Parser, Listener, and Visitor files are generated in the `src/lib/<SQL name>/` directory.

3. **Implement SQL Parser Class**

   Create a file `src/parser/<SQL name>/index.ts` and implement the corresponding SQL Parser class. This class should extend from the `BasicSQL` base class. Initially, implement the `createLexerFromCharStream` and `createParserFromTokenStream` methods; other methods can be left empty for now.

4. **Add Basic Unit Tests**

   Add basic unit tests in `test/parser/<SQL name>` for:
   
    - Lexer
    - Visitor
    - Listener
    - `parser.validate` method
   
   You can reference tests from other SQL parsers.

5. **SQL Syntax Unit Tests**

   Add unit tests for SQL syntax in the `test/parser/<SQL name>/syntax` directory. Ensure coverage of **all** SQL syntax rules. It is recommended to add tests based on the official grammar documentation to ensure accuracy.

6. **Implement SQLSplitListener**

   Implement the `SQLSplitListener` and add the `splitListener` getter in the SQL Parser class. Also, add unit tests for the `parser.splitSQLByStatement` method, which splits SQL into individual statements.

7. **Autocomplete Features**

   Implement methods `processCandidates` and `preferredRules` for autocomplete functionality. Familiarize yourself with [antlr4-c3](https://github.com/mike-lischke/antlr4-c3). Then, add autocomplete-related unit tests in `test/parser/<SQL name>/suggestion`.

8. **Context Information Collection**

   Implement the `SQLEntityCollector` class and the `createEntityCollector` method in the SQL Parser class for SQL context information collection. This enhances the autocomplete functionality. For more details, refer to [here](https://github.com/DTStack/dt-sql-parser/discussions/250#discussioncomment-8215715). 
   
   Then, add tests for entity collection methods in `test/parser/<SQL name>/contextCollect`.

## Sources for Grammar Files

SQL grammar files can be quite complex. If you want to add a new SQL language to dt-sql-parser, it is not recommended to start from scratch. Consider the following sources, listed in order of preference:

1. **Official SQL Repositories**:
   
   Some official SQL repositories use Antlr4 for SQL parsing. You can find the corresponding grammar files in their source code. For example:
    - [TrinoSQL](https://github.com/trinodb/trino/blob/385/core/trino-parser/src/main/antlr4/io/trino/sql/parser/SqlBase.g4)
    - [SparkSQL](https://github.com/apache/spark/blob/v3.5.0/sql/api/src/main/antlr4/org/apache/spark/sql/catalyst/parser/SqlBaseParser.g4)

   Grammar files from official repositories are generally the most reliable, stable, and performant.

2. **Grammar-v4 Repository**:
   
   This is the official grammar file repository maintained by Antlr. It includes a variety of SQL grammar files. The files here are typically reliable.

3. **Community/Other Open Source Repositories**:
   
   Grammar files obtained from the community or other open source repositories may be less reliable and often require significant time to fix grammar issues.
