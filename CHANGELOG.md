# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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

### [4.0.1-beta](https://github.com/DTStack/dt-sql-parser/compare/v4.0.0-beta...v4.0.1-beta) (2021-01-05)

### Bug Fixes

* delete mock data ([e5c9690](https://github.com/DTStack/dt-sql-parser/commit/e5c96907190aecf12fe4bd24ee32c3a3802c34e7))

## [4.0.0-beta](https://github.com/DTStack/dt-sql-parser/compare/v3.0.5...v4.0.0-beta) (2020-12-30)

### Features

* **fink:** refactoring selectStatement ([dae7980](https://github.com/DTStack/dt-sql-parser/commit/dae7980f75232a69b9cac89e816fcc1e18b41e30))
* **flin:** add split sql test ([1a7573c](https://github.com/DTStack/dt-sql-parser/commit/1a7573c6901674b0fd135478ec66efefbab00561))
* **flink:** add createTable grammar ([6fd90ce](https://github.com/DTStack/dt-sql-parser/commit/6fd90ced5cc191bea18de79d7f0e4a3a080a9330))
* **flink:** add describe/explain/use/show statement and some test ([3e4318d](https://github.com/DTStack/dt-sql-parser/commit/3e4318db6182f7a1850de25396320688039f050a))
* **flink:** add drop/alter test add add part of queryStatement ([5be0acb](https://github.com/DTStack/dt-sql-parser/commit/5be0acb6922e7673114c0e20c167acf16c41f356))
* **flink:** add grammar rules that pass the test ([0b599c9](https://github.com/DTStack/dt-sql-parser/commit/0b599c99db8f486a8783d3de8b86a9ffbe8a215f))
* **flink:** add inset\drop\alter grammar ([6c60c4b](https://github.com/DTStack/dt-sql-parser/commit/6c60c4be582fc75af98bbeacc3d40f36226bab08))
* **flink:** add performance test ([c8a4aee](https://github.com/DTStack/dt-sql-parser/commit/c8a4aee373395aa865f7c3d04bb5edd0495ed672))
* **flink:** add queryStatement ([22c824b](https://github.com/DTStack/dt-sql-parser/commit/22c824bad6eb009f24ad5a8f8deebefdff6c3671))
* **flink:** adjust lexer position to fix test error ([970e1c0](https://github.com/DTStack/dt-sql-parser/commit/970e1c08352d5f863a662ef42bf3b9d0c9325d0d))
* **flink:** merge parser and lexer in order to java test ([a5dda8e](https://github.com/DTStack/dt-sql-parser/commit/a5dda8e67f92a4555f4a279d20594ecef6195123))
* **flink:** modify grammar to match keywords ([c1b6b56](https://github.com/DTStack/dt-sql-parser/commit/c1b6b56fce21910684604936317ecb28a19e506d))
* **flink:** perfect query statement ([a74eb1b](https://github.com/DTStack/dt-sql-parser/commit/a74eb1be1155c3ee4fa6d67058f1c8c47adb1f7b))
* **flink:** update createTable grammar ([5cf9312](https://github.com/DTStack/dt-sql-parser/commit/5cf9312d6411969683acbf75aa4431bb314f14ea))
* **flink:** update flink SQL grammar ([34fbc37](https://github.com/DTStack/dt-sql-parser/commit/34fbc377e4dea32b9e1f86e276812324e11a097c))
* **flink:** update flinkSql grammar and add some test ([cd344a9](https://github.com/DTStack/dt-sql-parser/commit/cd344a986c043f3da67d4b8aa69cac74e377962f))
* **flink:** update grammar to match special columnName ([25fbdf0](https://github.com/DTStack/dt-sql-parser/commit/25fbdf0df9dbc3690ddc9532bd60a2e47f628264))
* **utils:** add cleanSql、splitSql、lexer func and test ([2400a1c](https://github.com/DTStack/dt-sql-parser/commit/2400a1ce3b54e1336f0940b59846392b36d57eaa))
* add generic and plsql basic parser file ([7ec0001](https://github.com/DTStack/dt-sql-parser/commit/7ec000157c9355cb01b9be80367554c151f1e8e6))
* add some query grammar ([bc06afa](https://github.com/DTStack/dt-sql-parser/commit/bc06afa0c096118be7c8a8f21469d7bc976dac96))
* create hive lexer and hive parser ([81fb236](https://github.com/DTStack/dt-sql-parser/commit/81fb23648e0f3d080331f16f387a857d26f12d60))
* refactoring hive SQL lexer ([c3af5fc](https://github.com/DTStack/dt-sql-parser/commit/c3af5fccc10619f9ea4cb7680e58864bfbbae2c0))
* **flinksql:** add some lexer ([e8822d5](https://github.com/DTStack/dt-sql-parser/commit/e8822d530f79bd873dc259ba6182789397fb68f2))

### Bug Fixes

* jest command ([8a2bc42](https://github.com/DTStack/dt-sql-parser/commit/8a2bc4277fc0b78323437b27e3d7be2450eb6eb4))
* ts problem ([8bc0ce9](https://github.com/DTStack/dt-sql-parser/commit/8bc0ce9fb023a742705f1e6aab69153e89e10ec5))
* **flink:** clear useless comments ([d3008ad](https://github.com/DTStack/dt-sql-parser/commit/d3008add05c45a748acda539fbb4cbc12603d482))
* adjust import path ([cff6192](https://github.com/DTStack/dt-sql-parser/commit/cff6192d0f87c12cdd88159b9d2fa3e68b836ecb))
* restore antlr4 config ([3137fac](https://github.com/DTStack/dt-sql-parser/commit/3137fac4e15444e6fc9845e0d25ba2b0d9c091d6))
