# 贡献指南

[English](./CONTRIBUTING.md) | 简体中文

## 开发

> [!Tips]
> 在开始之前，你需要先确保你本地的 java 环境已经设置好了，否则你将无法从语法文件中生成。你可以运行 `java --version` 来检查。

-   **安装依赖**

    ```bash
    pnpm install
    ```

-   **编译 g4 文件**

    ```bash
    # 编译全部 g4 文件
    pnpm antlr4
    # 指定编译某种语言
    pnpm antlr4 --lang mysql
    ```

-   **运行单元测试**

    ```bash
    pnpm test
    ```

-   **运行性能基准测试**

    ```bash
    pnpm benchmark
    ```

## 源码目录

-   `src/grammar`: 存放 g4 文件（语法文件）
-   `src/lib`: 从 g4 语法文件生成的产物（通过运行 `pnpm antlr4` 命令生成）
-   `src/parser`: SQL 解析器类的实现
-   `src/parser/common`: SQL 解析器的基类和工具方法
-   `test`: 单元测试
-   `benchmark`: 性能基准测试

## 如何添加一种新的 SQL 语言

1. **添加新的语法文件**
   
   将新的 g4 语法文件添加到 `src/grammar/<SQL name>`，语法文件命名采用大驼峰格式，语法文件内的语法规则需要符合以下要求：
   
    - 根规则统一命名为 `program`；
    - 支持解析多条 SQL 语句；
    - 开启[忽略大小写选项](https://github.com/antlr/antlr4/blob/dev/doc/options.md#caseinsensitive)（如果该 SQL 语言不区分大小写）；
    - 所有关键字的词法规则需以 `KW_` 开头（例如 `KW_SELECT: 'SELECT';`），这有助于在自动补全功能中区分关键字词法规则；

2. **从语法文件生成文件**

   运行以下命令从新的语法文件生成相应的文件：
   
    ```bash
    pnpm antlr4 --lang <SQL name>
    ```

   确认在 `src/lib/<SQL name>/` 目录下生成了相应的 Lexer、Parser、Listener 和 Visitor 文件。

3. **实现 SQL 解析器类**

   创建文件 `src/parser/<SQL name>/index.ts` 并实现相应的 SQL 解析器类，该类应继承自 `BasicSQL` 基类，首先实现 `createLexerFromCharStream` 和 `createParserFromTokenStream` 方法，其他方法可以暂时为空。

4. **添加基础单元测试**

   在 `test/parser/<SQL name>` 下添加基础单元测试，包括：
   
    - 词法分析器
    - 访问者
    - 监听器
    - `parser.validate` 方法

   你可以参考其他 SQL 解析器的单元测试。

5. **SQL 语法单元测试**

   在 `test/parser/<SQL name>/syntax` 目录下添加 SQL 语法的单元测试，确保**覆盖所有 SQL 语法规则**，建议根据官方语法文档逐条添加测试，以确保语法文件的准确性。

6. **实现 SQLSplitListener**

   实现 `SQLSplitListener` 并在 SQL 解析器类中添加 `splitListener` getter，同时添加 `parser.splitSQLByStatement` 方法的单元测试，用于将 SQL 按语句切分。

7. **自动补全功能**

   实现自动补全功能所需的 `processCandidates` 和 `preferredRules` 方法，在开始这一步之前，需要熟悉 [antlr4-c3](https://github.com/mike-lischke/antlr4-c3)，然后在 `test/parser/<SQL name>/suggestion` 目录下添加与自动补全相关的单元测试。

8. **上下文信息收集**

   实现 `SQLEntityCollector` 类和 `createEntityCollector` 方法，用于收集 SQL 上下文信息，从而增强自动补全功能，详情请参考[这里](https://github.com/DTStack/dt-sql-parser/discussions/250#discussioncomment-8215715)，然后在 `test/parser/<SQL name>/contextCollect` 目录下添加实体收集方法的单元测试。

## 语法文件来源

SQL 语法文件通常较为复杂，如果你想在 dt-sql-parser 中添加一种新的 SQL，不建议从头开始编写，可以考虑以下来源，按推荐顺序排列：

1. **SQL 官方仓库**：
   
   有些 SQL 官方仓库使用 Antlr4 作为 SQL 解析器，可以在其源码中找到对应的语法文件，例如：
    - [TrinoSQL](https://github.com/trinodb/trino/blob/385/core/trino-parser/src/main/antlr4/io/trino/sql/parser/SqlBase.g4)
    - [SparkSQL](https://github.com/apache/spark/blob/v3.5.0/sql/api/src/main/antlr4/org/apache/spark/sql/catalyst/parser/SqlBaseParser.g4)

   来自官方仓库的语法文件通常最为可靠、稳定且性能较好。

2. **grammar-v4 仓库**：
   
   这是 Antlr 官方维护的语法文件仓库，包含多种 SQL 语法文件，这里的文件相对可靠。

3. **社区/其他开源仓库**：
   
   从社区或其他开源仓库获取的语法文件可能不太可靠，可能需要大量时间来修复语法规则。
