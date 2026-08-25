# AGENTS.md

## 项目概述

**dt-sql-parser** 是一个基于 [ANTLR4](https://github.com/antlr/antlr4) 构建的 SQL 解析器库，面向 **大数据** 领域。它提供以下功能：

- SQL 语法校验
- AST 遍历（Visitor / Listener 模式）
- 代码补全（基于 [antlr4-c3](https://github.com/mike-lischke/antlr4-c3)）
- 实体提取（表、列等）
- SQL 语句拆分

**支持的 SQL 方言**：MySQL、Flink、Spark、Hive、PostgreSQL、Trino、Impala。

## 技术栈

| 类别           | 说明                                                  |
| -------------- | ----------------------------------------------------- |
| 语言           | TypeScript（目标 ES6，模块 ESNext）                   |
| 运行环境       | Node.js >= 18                                         |
| 包管理器       | pnpm 9.7.0                                            |
| 构建工具       | `tsc`（TypeScript 编译器）                            |
| 测试框架       | Jest（配合 `@swc/jest` 转换器）                       |
| 解析器生成     | ANTLR4，通过 `antlr4ng` + `antlr4ng-cli`              |
| 代码补全       | `antlr4-c3`                                           |
| 代码格式化     | Prettier、`antlr-format-cli`（用于 `.g4` 文件）       |
| Git Hooks      | Husky + lint-staged + commitlint                      |

## 仓库结构

```
dt-sql-parser/
├── src/
│   ├── grammar/          # ANTLR4 .g4 语法文件（每个方言一个子目录）
│   ├── lib/              # 从 .g4 文件生成的 Lexer/Parser/Listener/Visitor
│   ├── parser/           # SQL Parser 类实现
│   │   ├── common/       # 基类（BasicSQL）、工具方法、共享类型
│   │   ├── mysql/        # MySQL 专属解析器、实体收集器等
│   │   ├── flink/
│   │   ├── spark/
│   │   ├── hive/
│   │   ├── postgresql/
│   │   ├── trino/
│   │   └── impala/
│   ├── locale/           # 国际化资源
│   └── index.ts          # 公共 API 导出
├── test/                 # 单元测试（结构与 src/ 对应）
│   ├── parser/           # 按方言组织的测试
│   │   ├── mysql/
│   │   │   ├── syntax/   # 语法规则测试
│   │   │   ├── suggestion/ # 代码补全测试
│   │   │   └── contextCollect/ # 实体收集测试
│   │   └── ...
│   └── common/           # 共享测试工具
├── benchmark/            # 性能基准测试
├── scripts/              # 构建/发布实用脚本
├── gen/                  # 生成产物
├── dist/                 # 编译输出（npm 包）
├── .husky/               # Git Hook 配置
├── package.json
├── tsconfig.json
├── jest.config.js
└── CONTRIBUTING.md       # 贡献指南（新增方言步骤）
```

## 核心开发命令

```bash
pnpm install              # 安装依赖
pnpm antlr4               # 从所有 .g4 文件生成 TS
pnpm antlr4 --lang mysql  # 为指定方言生成
pnpm build                # 编译 TypeScript（rm -rf dist && tsc）
pnpm test                 # 运行 Jest 单元测试
pnpm benchmark            # 运行性能基准测试
pnpm check-types          # 对 src/ 和 test/ 进行类型检查
pnpm format               # 用 Prettier 格式化所有文件
pnpm format-g4            # 格式化 .g4 语法文件
pnpm prettier-check       # 检查格式是否符合要求（不修改）
```

## 架构说明

### Parser 类层级

```
BasicSQL (src/parser/common/)
  ├── MySQL
  ├── FlinkSQL
  ├── SparkSQL
  ├── HiveSQL
  ├── PostgreSQL
  ├── TrinoSQL
  └── ImpalaSQL
```

每个方言的 Parser 类（例如 `src/parser/mysql/index.ts` 中的 `MySQL`）继承自 `BasicSQL`，并实现以下方法：

- `createLexerFromCharStream()` — 创建 ANTLR4 Lexer
- `createParserFromTokenStream()` — 创建 ANTLR4 Parser
- `splitListener` getter — 返回用于语句拆分的 `SQLSplitListener`
- `createEntityCollector()` — 返回用于上下文/实体提取的 `SQLEntityCollector`
- `processCandidates()` / `preferredRules()` — 代码补全逻辑（antlr4-c3）

### 每方言模块结构

每个 `src/parser/<dialect>/` 目录包含：

| 文件                                        | 用途                                          |
| ------------------------------------------- | --------------------------------------------- |
| `index.ts`                                  | 主解析器类，继承 `BasicSQL`                    |
| `<dialect>EntityCollector.ts`               | 从 AST 中提取表、列、函数等实体                |
| `<dialect>SplitListener.ts`                 | 通过分号/AST 拆分多语句 SQL                    |
| `<dialect>ErrorListener.ts`                 | 自定义语法错误处理                             |
| `<dialect>SemanticContextCollector.ts`      | 收集语义上下文（如 `isStatementBeginning`）    |

### 语法文件 → 代码生成流程

1. `.g4` 文件存放在 `src/grammar/<dialect>/` 目录
2. 执行 `pnpm antlr4 [--lang <dialect>]` 生成：
   - `src/lib/<dialect>/<Dialect>Lexer.ts`
   - `src/lib/<dialect>/<Dialect>Parser.ts`
   - `src/lib/<dialect>/<Dialect>ParserListener.ts`
   - `src/lib/<dialect>/<Dialect>ParserVisitor.ts`
3. `src/parser/<dialect>/` 中的 Parser 类消费这些生成的文件

### 语法规则约定

- 根规则必须命名为 `program`
- 支持解析多条 SQL 语句
- 关键字规则前缀为 `KW_`（例如 `KW_SELECT`）
- 不区分大小写的方言启用 case-insensitive 选项

## 公共 API（来自 `src/index.ts`）

**类**：`MySQL`、`FlinkSQL`、`SparkSQL`、`HiveSQL`、`PostgreSQL`、`TrinoSQL`、`ImpalaSQL`

**Listener/Visitor 类型**：`MySqlParserListener`、`MySqlParserVisitor` 等（每个方言一对）

**枚举**：`EntityContextType`、`StmtContextType`

**类型**：`CaretPosition`、`Suggestions`、`SyntaxSuggestion`、`WordRange`、`TextSlice`、`SyntaxError`、`ParseError`、`ErrorListener`、`StmtContext`、`EntityContext`、`CommonEntityContext`、`ColumnEntityContext`、`FuncEntityContext`

## 测试规范

- 测试文件结构与 `src/` 对应，位于 `test/parser/<dialect>/`
- 子目录：`syntax/`（语法）、`suggestion/`（补全）、`contextCollect/`（实体收集）
- 使用 Jest 配合 `@swc/jest` 实现快速编译
- 自定义匹配器定义在 `test/matchers.ts`
- 运行命令：`pnpm test`

## 新增 SQL 方言（步骤概要）

1. 在 `src/grammar/<name>/` 下添加 `.g4` 文件（PascalCase 命名，根规则 = `program`，关键字 = `KW_*`）
2. 执行 `pnpm antlr4 --lang <name>` → 生成 `src/lib/<name>/`
3. 创建 `src/parser/<name>/index.ts` 继承 `BasicSQL`
4. 在 `test/parser/<name>/` 下添加测试（lexer、visitor、listener、validate）
5. 实现 `SQLSplitListener` → 添加 `splitListener` getter
6. 实现代码补全 → `processCandidates` + `preferredRules`，并在 `suggestion/` 下添加测试
7. 实现 `SQLEntityCollector` + `createEntityCollector()`，并在 `contextCollect/` 下添加测试
8. 在 `src/parser/index.ts` 和 `src/index.ts` 中导出新类

## AI Agent 注意事项

- 修改 `.g4` 文件后 **必须** 执行 `pnpm antlr4`，确保 `src/lib/` 中的生成文件保持同步
- **不要** 手动编辑 `src/lib/` 中的文件 —— 它们是由 `.g4` 自动生成的
- 语法文件遵循 ANTLR4 约定；关键字规则必须带有 `KW_` 前缀
- 项目使用 `antlr4ng`（非 Java antlr4 运行时）作为 TypeScript 目标
- 代码补全依赖 `antlr4-c3`；修改补全逻辑前先了解该库
- 实体收集器（`SQLEntityCollector`）是实现丰富代码补全的关键 —— 需理解作用域深度和 `isAccessible` 逻辑
- 位置/范围约定：行号从 1 开始，列号从 1 开始，索引从 0 开始
- Prettier 格式化通过 husky + lint-staged 在提交时强制执行
