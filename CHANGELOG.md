# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [4.0.0-beta.3.2](https://github.com/DTStack/dt-sql-parser/compare/v4.0.0-beta.3.1...v4.0.0-beta.3.2) (2023-01-09)

## [4.0.0-beta.3.1](https://github.com/DTStack/dt-sql-parser/compare/v4.0.0-beta.3...v4.0.0-beta.3.1) (2022-12-30)

### Bug Fixes

* fix bracket match ([e446fc0](https://github.com/DTStack/dt-sql-parser/commit/e446fc0435eb21c4a931db161c9c3a25dc8edb2b))
* fix flinksql create table grammar, add test ([#65](https://github.com/DTStack/dt-sql-parser/issues/65)) ([0c9a831](https://github.com/DTStack/dt-sql-parser/commit/0c9a831585a3609cca5d9c8003f53f4cc4149632))

## [4.0.0-beta.3](https://github.com/DTStack/dt-sql-parser/compare/v4.0.0-beta.2.2...v4.0.0-beta.3) (2022-12-16)

## [4.0.0-beta.2.2](https://github.com/DTStack/dt-sql-parser/compare/v4.0.0-beta.2.1...v4.0.0-beta.2.2) (2021-09-10)

### Features

* add Bracket, Comma, and FunctionArguments tokens ([b1ae454](https://github.com/DTStack/dt-sql-parser/commit/b1ae454ae4f8cc78071a5708486bd0f6dc96d29c))
* remove the impala ([dd38dda](https://github.com/DTStack/dt-sql-parser/commit/dd38dda19a8d714c0024b65cf51da078da835692))
* remove the impala ([f9cf65d](https://github.com/DTStack/dt-sql-parser/commit/f9cf65d95142f17e0055e00997304a7d3888aa44))
* support custom variables ${} ([df18e6c](https://github.com/DTStack/dt-sql-parser/commit/df18e6cb21c025266716ffff3be5ce17390bec1f))
* tokenizer for the function arugments ([bb6e8ac](https://github.com/DTStack/dt-sql-parser/commit/bb6e8ac025a2b71594c75705ffd0df753cdb5e55))

## [4.0.0-beta.2.1](https://github.com/DTStack/dt-sql-parser/compare/v4.0.0-beta.2...v4.0.0-beta.2.1) (2021-07-16)

## [4.0.0-beta.2](https://github.com/DTStack/dt-sql-parser/compare/v3.0.5...v4.0.0-beta.2) (2021-05-11)

### Bug Fixes

* adjust import path ([e7e0c15](https://github.com/DTStack/dt-sql-parser/commit/e7e0c15b0d60095fbe85a37e7a60836d7fa34396))
* clea sql white spaces \n fix [#21](https://github.com/DTStack/dt-sql-parser/issues/21) ([#26](https://github.com/DTStack/dt-sql-parser/issues/26)) ([b632f62](https://github.com/DTStack/dt-sql-parser/commit/b632f62678a140d094c9a956d29fb50951a28e33))
* clean sql white spaces  [#21](https://github.com/DTStack/dt-sql-parser/issues/21) ([dc49697](https://github.com/DTStack/dt-sql-parser/commit/dc496973022a93825549a003daa4d8da977a1970))
* delete mock data ([da25815](https://github.com/DTStack/dt-sql-parser/commit/da2581533fa7a8196710c6046a03f57d476fd090))
* jest command ([76675e8](https://github.com/DTStack/dt-sql-parser/commit/76675e8251d272f43421e362d200ea7df4caca8e))
* lexer for comment ([5f5af0a](https://github.com/DTStack/dt-sql-parser/commit/5f5af0a4aba52f988bafcf25b066a6b0d2310f9b))
* restore antlr4 config ([504f6df](https://github.com/DTStack/dt-sql-parser/commit/504f6df2ec8415a7c4a5fce1478d87f9ed5f4dd1))
* ts problem ([6b16f75](https://github.com/DTStack/dt-sql-parser/commit/6b16f752e40e4170b6a92c37a67ed330fe9ab100))
* **flink:** clear useless comments ([771b562](https://github.com/DTStack/dt-sql-parser/commit/771b562c7893d89002b29cfeae9d2fbe0e8ee8d6))

## 4.0.0-beta.1 (2021-01-05)

### Features

* **fink:** refactoring selectStatement ([d7d32a3](https://github.com/DTStack/dt-sql-parser/commit/d7d32a382404df8917282d835134f50b1f3a6eff))
* **flin:** add split sql test ([3054e90](https://github.com/DTStack/dt-sql-parser/commit/3054e909176ee09333e9686e53f767c07c52693e))
* **flink:** add createTable grammar ([b7df08f](https://github.com/DTStack/dt-sql-parser/commit/b7df08f01287e7ded40581e85d79cc13a5ad794f))
* **flink:** add describe/explain/use/show statement and some test ([0ef8069](https://github.com/DTStack/dt-sql-parser/commit/0ef80696f49d26423d98642b82a60cc038c3d8ed))
* **flink:** add drop/alter test add add part of queryStatement ([9fc91a5](https://github.com/DTStack/dt-sql-parser/commit/9fc91a572af11843c801ca7749818a04d67039d2))
* **flink:** add grammar rules that pass the test ([afef8e6](https://github.com/DTStack/dt-sql-parser/commit/afef8e6d72533df170e5e862fd2a31708a55a52d))
* **flink:** add inset\drop\alter grammar ([158e235](https://github.com/DTStack/dt-sql-parser/commit/158e235b012d7ef263b92f8726b4235596b0c5b2))
* **flink:** add performance test ([cc1d5ab](https://github.com/DTStack/dt-sql-parser/commit/cc1d5abcdd2e1ccc9d0a383d933b9296b6f64333))
* **flink:** add queryStatement ([ba29949](https://github.com/DTStack/dt-sql-parser/commit/ba29949359325ca2b329d0e70a6ebfb431810fa8))
* **flink:** adjust lexer position to fix test error ([da9660c](https://github.com/DTStack/dt-sql-parser/commit/da9660c6fe7c9a8654bec89edf718cd38c160898))
* **flink:** merge parser and lexer in order to java test ([0735269](https://github.com/DTStack/dt-sql-parser/commit/0735269f4e641235188af461bd5df5cb416c9828))
* **flink:** modify grammar to match keywords ([e67f991](https://github.com/DTStack/dt-sql-parser/commit/e67f991ede461b847e6a3daa2bf71a00dc739d88))
* **flink:** perfect query statement ([1b9efdc](https://github.com/DTStack/dt-sql-parser/commit/1b9efdccd54ecf863bafb4192d8c294e86a5d8e1))
* **flink:** update createTable grammar ([d1259b4](https://github.com/DTStack/dt-sql-parser/commit/d1259b46a065d4b30fca2612b1146dbd040b03bb))
* **flink:** update flink SQL grammar ([04c4c40](https://github.com/DTStack/dt-sql-parser/commit/04c4c4039770bf351f067f6193d7f6ab0720a524))
* **flink:** update flinkSql grammar and add some test ([c9d88d0](https://github.com/DTStack/dt-sql-parser/commit/c9d88d00a606c7130415ab3db35f088ec0cecac1))
* **flink:** update grammar to match special columnName ([a9b1e90](https://github.com/DTStack/dt-sql-parser/commit/a9b1e90d73a733e47ea108f47790fe148fb6fa20))
* **utils:** add cleanSql、splitSql、lexer func and test ([7d6c753](https://github.com/DTStack/dt-sql-parser/commit/7d6c753d824cfb8e3808132356a2c78bda81795c))
* add generic and plsql basic parser file ([f851638](https://github.com/DTStack/dt-sql-parser/commit/f85163892a1b5249bbe73162cfc515100765fa22))
* add some query grammar ([a5ea7be](https://github.com/DTStack/dt-sql-parser/commit/a5ea7be6069e239ac20f69ffa1cc9f0c043b8dc3))
* create hive lexer and hive parser ([ec41432](https://github.com/DTStack/dt-sql-parser/commit/ec41432ee300f9b00306aaf1cecc95d02afe0302))
* refactoring hive SQL lexer ([557e9a3](https://github.com/DTStack/dt-sql-parser/commit/557e9a32466f6f899e809bd37927e091052033d9))
* **flinksql:** add some lexer ([6082c2b](https://github.com/DTStack/dt-sql-parser/commit/6082c2b151960189f3ff27a8b76e033b22b53561))

### Bug Fixes

* adjust import path ([e7e0c15](https://github.com/DTStack/dt-sql-parser/commit/e7e0c15b0d60095fbe85a37e7a60836d7fa34396))
* delete mock data ([da25815](https://github.com/DTStack/dt-sql-parser/commit/da2581533fa7a8196710c6046a03f57d476fd090))
* jest command ([76675e8](https://github.com/DTStack/dt-sql-parser/commit/76675e8251d272f43421e362d200ea7df4caca8e))
* lock antlr version ([d9c0928](https://github.com/DTStack/dt-sql-parser/commit/d9c0928f7a3a7367944523767fdc758dbdeb1268))
* ts problem ([6b16f75](https://github.com/DTStack/dt-sql-parser/commit/6b16f752e40e4170b6a92c37a67ed330fe9ab100))
* **flink:** clear useless comments ([771b562](https://github.com/DTStack/dt-sql-parser/commit/771b562c7893d89002b29cfeae9d2fbe0e8ee8d6))
* restore antlr4 config ([504f6df](https://github.com/DTStack/dt-sql-parser/commit/504f6df2ec8415a7c4a5fce1478d87f9ed5f4dd1))
