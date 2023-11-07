# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [4.0.0-beta.4.5](https://github.com/DTStack/dt-sql-parser/compare/v4.0.0-beta.4.4...v4.0.0-beta.4.5) (2023-11-02)


### Features

* add sideEffects field to trigger treeShaking ([#198](https://github.com/DTStack/dt-sql-parser/issues/198)) ([fc4fdbf](https://github.com/DTStack/dt-sql-parser/commit/fc4fdbfbf55364eb142402008d5059cdb80c31e0))


### Bug Fixes

* [#197](https://github.com/DTStack/dt-sql-parser/issues/197) keyword rename like value more ([56c410e](https://github.com/DTStack/dt-sql-parser/commit/56c410ebb1ea31752bfbda41b1d651b216d68a5d))

## [4.0.0-beta.4.4](https://github.com/DTStack/dt-sql-parser/compare/v4.0.0-beta.4.3...v4.0.0-beta.4.4) (2023-10-24)


### Bug Fixes

* correct import path of CaretPosition ([9a93be6](https://github.com/DTStack/dt-sql-parser/commit/9a93be64afa3079562e35d9da21267c0d4beddbb))

## [4.0.0-beta.4.3](https://github.com/DTStack/dt-sql-parser/compare/v4.0.0-beta.4.1...v4.0.0-beta.4.3) (2023-10-20)


### Features

* declare copyright ownership ([b8c47d0](https://github.com/DTStack/dt-sql-parser/commit/b8c47d0ac9a45e2936f6c5e41e517db473fae6da))
* export trino sql ([917cb98](https://github.com/DTStack/dt-sql-parser/commit/917cb988f22dd2891cc3d99033c8111ed6a3ae6d))
* format hive grammar files name ([1d890e5](https://github.com/DTStack/dt-sql-parser/commit/1d890e58fe94de7f270bd84ba16b35e8589944cf))
* hive Authorization syntax and unit tests ([#159](https://github.com/DTStack/dt-sql-parser/issues/159)) ([2ec03f1](https://github.com/DTStack/dt-sql-parser/commit/2ec03f1770c0042f8ce7df9abe64ca494518d791))
* hiveSQL support create/drop/alter index grammar ([ebd9a1e](https://github.com/DTStack/dt-sql-parser/commit/ebd9a1ed85c103b8525948a60da2c57b0c80c361))
* improve hive keywords rule ([#154](https://github.com/DTStack/dt-sql-parser/issues/154)) ([ded9f28](https://github.com/DTStack/dt-sql-parser/commit/ded9f28e3672e6edd85a2a2a98c1555179584984))
* recomplie hive sql grammar and fix parser about ([e97e0b2](https://github.com/DTStack/dt-sql-parser/commit/e97e0b2ef60e24f6b7f88afa0b13f839062579e8))
* spark sql DDL test ([#170](https://github.com/DTStack/dt-sql-parser/issues/170)) ([d13a929](https://github.com/DTStack/dt-sql-parser/commit/d13a92914d877409ff896445446503520b072304))
* support DT_ADD_CONFIG_FILE syntax ([13b58b2](https://github.com/DTStack/dt-sql-parser/commit/13b58b2dec049c66e85b55c3c9a5b695d4ef14e6))
* support spark sql auto complete ([#179](https://github.com/DTStack/dt-sql-parser/issues/179)) ([4d1dfa6](https://github.com/DTStack/dt-sql-parser/commit/4d1dfa676fdfa6858271c1e2e0aaa8b379b2091d))


### Bug Fixes

* allow ROW and ROWS as function name ([82d097b](https://github.com/DTStack/dt-sql-parser/commit/82d097b034e69094da8d3e7fa3aa2960a2d3f977))
* flinkSqlParser should not import src ([f413a29](https://github.com/DTStack/dt-sql-parser/commit/f413a29fac6ab4552e33784b2eb803b728d75a92))

## [4.0.0-beta.4.2](https://github.com/DTStack/dt-sql-parser/compare/v4.0.0-beta.4.1...v4.0.0-beta.4.2) (2023-08-31)


### Features

* format hive grammar files name ([1d890e5](https://github.com/DTStack/dt-sql-parser/commit/1d890e58fe94de7f270bd84ba16b35e8589944cf))
* hiveSQL support create/drop/alter index grammar ([ebd9a1e](https://github.com/DTStack/dt-sql-parser/commit/ebd9a1ed85c103b8525948a60da2c57b0c80c361))
* recomplie hive sql grammar and fix parser about ([e97e0b2](https://github.com/DTStack/dt-sql-parser/commit/e97e0b2ef60e24f6b7f88afa0b13f839062579e8))
* support DT_ADD_CONFIG_FILE syntax ([13b58b2](https://github.com/DTStack/dt-sql-parser/commit/13b58b2dec049c66e85b55c3c9a5b695d4ef14e6))


### Bug Fixes

* allow ROW and ROWS as function name ([82d097b](https://github.com/DTStack/dt-sql-parser/commit/82d097b034e69094da8d3e7fa3aa2960a2d3f977))
* flinkSqlParser should not import src ([f413a29](https://github.com/DTStack/dt-sql-parser/commit/f413a29fac6ab4552e33784b2eb803b728d75a92))

## [4.0.0-beta.4.1](https://github.com/DTStack/dt-sql-parser/compare/v4.0.0-beta.4...v4.0.0-beta.4.1) (2023-06-16)

## [4.0.0-beta.4](https://github.com/DTStack/dt-sql-parser/compare/v4.0.0-beta.3.1...v4.0.0-beta.4) (2023-06-14)


### Features

* complete Query statements of FlinkSQL   ([#93](https://github.com/DTStack/dt-sql-parser/issues/93)) ([a026ae0](https://github.com/DTStack/dt-sql-parser/commit/a026ae059297d732dd5af7af4a851c5fe55a3229))
* extracting the common readSQL function ([4af913c](https://github.com/DTStack/dt-sql-parser/commit/4af913cf301d61e7ce9652cf47669bfa87a6b84b))
* FlinkSQL supports auto complete ([#115](https://github.com/DTStack/dt-sql-parser/issues/115)) ([1b02ff5](https://github.com/DTStack/dt-sql-parser/commit/1b02ff5d7582bf626f9bef5ea1c1f0e65732d23e))
* **flink:** support insert multipe tables statement for FlinkSQL 1.15([#104](https://github.com/DTStack/dt-sql-parser/issues/104)) ([c409b80](https://github.com/DTStack/dt-sql-parser/commit/c409b80ee1a3b1df92fab522442f3425d984d8c7))
* **flink:** support NOT NULL syntax ([#103](https://github.com/DTStack/dt-sql-parser/issues/103)) ([4b824fb](https://github.com/DTStack/dt-sql-parser/commit/4b824fb50004c0938171d887a21e761fdb62df89))
* improve flinksql createStatement ([#91](https://github.com/DTStack/dt-sql-parser/issues/91)) ([370cccf](https://github.com/DTStack/dt-sql-parser/commit/370cccf8d9328aabccba1c9140a2adea395783f7))
* improve flinksql insertStatement ([dc417e1](https://github.com/DTStack/dt-sql-parser/commit/dc417e1381ca52525037b215a153df28ddc81272))
* replace fliePath with slashText to resolve conflict between filePath and arithmetic ([#112](https://github.com/DTStack/dt-sql-parser/issues/112)) ([793ff6e](https://github.com/DTStack/dt-sql-parser/commit/793ff6ef0e10e502eeb61ad8e40ccfe05ae50929))
* support trino(presto) sql language ([#105](https://github.com/DTStack/dt-sql-parser/issues/105)) ([9c82a5d](https://github.com/DTStack/dt-sql-parser/commit/9c82a5d248e9d94479045ad7b248e4a785e62e92))
* update alter and drop statements ([#94](https://github.com/DTStack/dt-sql-parser/issues/94)) ([fbee70c](https://github.com/DTStack/dt-sql-parser/commit/fbee70cde54fcec773cf35f858016c1a23459cc0))
* update the builtin funcs of flinksql ([#102](https://github.com/DTStack/dt-sql-parser/issues/102)) ([0924acf](https://github.com/DTStack/dt-sql-parser/commit/0924acf730df41866be18f82172a58854f3bb0a3))
* upgrade antlr4 to 4.12.0 ([#88](https://github.com/DTStack/dt-sql-parser/issues/88)) ([c1c72de](https://github.com/DTStack/dt-sql-parser/commit/c1c72def30a2df90182290fb2e5bc64265dfa3c3))


### Bug Fixes

* correct the grammar usage, especially in the parts targeting javascript ([#109](https://github.com/DTStack/dt-sql-parser/issues/109)) ([eeb111b](https://github.com/DTStack/dt-sql-parser/commit/eeb111b5c5e06eb144d7679d4b813082537945d4))
* ingore the unused errors of libs ([b39825e](https://github.com/DTStack/dt-sql-parser/commit/b39825e31a4d25dc4ab2a0c6fb12d84d55944b12))
* rename to TrinoSqlParser ([46a8a7a](https://github.com/DTStack/dt-sql-parser/commit/46a8a7ab125638b5e2dd6067d8b74b0f90ff543d))
* rename TrinoSqlParser to TrinoSql ([8084c79](https://github.com/DTStack/dt-sql-parser/commit/8084c7919a5e1d982556d4684abfad6afa58c124))
* rename TrinoSqlVisitor ([76d7ee5](https://github.com/DTStack/dt-sql-parser/commit/76d7ee5e7074b5549e791e529dc925ab32b51f4a))
* update the exports path of trino ([1442ad6](https://github.com/DTStack/dt-sql-parser/commit/1442ad66d73144b4f4d29ed899f4dc7406cbff1f))

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
