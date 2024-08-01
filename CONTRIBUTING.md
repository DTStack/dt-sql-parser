# CONTRIBUTING

## 本地开发

-   安装依赖

    ```bash
    yarn
    ```

-   编译 g4 文件

    ```bash
    # 编译全部 g4 文件
    yarn antlr4
    # 指定编译其中一种语言
    yarn antlr4 --lang mysql
    ```

-   单元测试

    ```bash
    yarn test
    ```

-   性能基准测试

    ```bash
    yarn benchmark
    ```

## 主要目录介绍

-   `src/grammar` g4 文件（语法文件）
-   `src/lib` g4 文件生成产物（运行 yarn antlr4 命令生成）
-   `src/parser` SQL Parser 类的实现
-   `src/parser/common` SQL Parser 的基类以及工具方法等
-   `test` 单元测试
-   `benchmark` 性能基准测试

## 如何添加一个新的 SQL 语言？

1. 添加新的语法文件（g4 文件）到 `src/grammar/<SQL name>` ，语法文件命名采用大驼峰。另外语法文件内部的语法规则需要满足以下要求：

    - 根规则统一命名为 `program`；
    - 需要支持匹配多条 SQL 语句；
    - 开启[忽略大小写选项](https://github.com/antlr/antlr4/blob/dev/doc/options.md#caseinsensitive) （如果要添加的 SQL 语言是非大小写敏感的）；
    - 所有关键字词法规则名称需要以 `KW_` 开头，例如 `SELECT` 关键词的词法规则是 `KW_SELECT: 'SELECT';`，这是为了方便在自动补全功能中区分出关键字词法规则与其他词法规则；

2. 尝试从新添加的语法文件中生成，运行 `yarn antlr4 --lang <SQL name>`，`src/lib/<SQL name>/` 文件夹下生成了相应的 Lexer、Parser、Listener、Visitor 文件即完成。

3. 新增 `src/parser/<SQL name>/index.ts` 文件，实现对应的 SQL Parser 类，SQL Parser 类需要继承自 `BasicSQL` 基类。建议先实现 `createLexerFromCharStream` 和 `createParserFromTokenStream` 方法，其他方法可以暂时为空。

4. 在 `test/parser/<SQL name>` 添加对应的SQL的基础的单元测试，包括 lexer、visitor、listener 以及 parser.validate 方法是否正常，这一步可以参考其他 SQL 的单元测试。

5. 在 `test/parser/<SQL name>/syntax` 文件夹下添加 SQL 语法的单元测试，**要求覆盖该SQL的所有语法**。 建议根据相应SQL官网的语法文件逐条添加单元测试。这是为了保证语法文件的准确性。

6. 实现 `SQLSplitListener`，并在 SQL Parser 类中添加 `splitListener` getter, 接着添加 `parser.splitSQLByStatement` 方法相关的单元测试。`parser.splitSQLByStatement` 方法用于将 SQL 按语句切分。

7. 实现 SQL Parser 的 `processCandidates` 和 `preferredRules`。它们都与自动补全功能相关，在开始这一步之前你需要了解并熟悉 [antlr4-c3](https://github.com/mike-lischke/antlr4-c3) 。然后在 `test/parser/<SQL name>/suggestion` 添加自动补全相关的单元测试。

8. 实现 `SQLEntityCollector` 类以及 SQL Parser 类的 `createEntityCollector` 方法。它们用于 SQL 上下文信息收集，这有助于增强自动补全功能，更多详情查看[此处](https://github.com/DTStack/dt-sql-parser/discussions/250#discussioncomment-8215715)。然后在 `test/parser/<SQL name>/contextCollect` 添加实体收集方法相关的单元测试。

## 语法文件来源

一般来说，SQL 的语法文件都相当复杂，如果想要在 dt-sql-parser 中添加一种新的 SQL，不建议从 0 开始编写，有以下途径可能可以获取到 SQL 语法文件，下列途径按推荐度降序排序：

1. SQL 官方仓库；有些 SQL 官方使用 Antlr4 作为 SQL 解析器，你可以在源码中找到对应的语法文件，比如 [TrinoSQL](https://github.com/trinodb/trino/blob/385/core/trino-parser/src/main/antlr4/io/trino/sql/parser/SqlBase.g4) 和 [SparkSQL](https://github.com/apache/spark/blob/v3.5.0/sql/api/src/main/antlr4/org/apache/spark/sql/catalyst/parser/SqlBaseParser.g4)。从官方仓库获取的语法文件最为可靠，稳定性和性能都较优。

2. [grammar-v4](https://github.com/antlr/grammars-v4) 仓库，这个仓库是 Antlr 官方维护的语法文件仓库，内部包含了较多的 SQL 语法文件，这里的语法文件相对可靠。

3. 从社区中获取，这种方式获取到的语法文件相对不可靠，可能需要大量的时间去修复语法规则。
