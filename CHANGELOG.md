# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [4.1.0](https://github.com/DTStack/dt-sql-parser/compare/v4.0.1...v4.1.0) (2025-02-13)


### Features

* add alter table stmt ([#312](https://github.com/DTStack/dt-sql-parser/issues/312)) ([5aade9e](https://github.com/DTStack/dt-sql-parser/commit/5aade9e6daafc2c6e70c5202d7ef06572ec37f6e))
* add benchmark test suite ([#273](https://github.com/DTStack/dt-sql-parser/issues/273)) ([de1bd9d](https://github.com/DTStack/dt-sql-parser/commit/de1bd9de4cb7c3b42d51bedd79635eb91afba9ed))
* **basicSql:** remove judge splitListener/collectListener, all sqlParser implements it ([#316](https://github.com/DTStack/dt-sql-parser/issues/316)) ([eb2e920](https://github.com/DTStack/dt-sql-parser/commit/eb2e920e345aef98285ba261c2060db61d1d56b8))
* sync some useful syntax from antlr/grammars-v4 ([95a1087](https://github.com/DTStack/dt-sql-parser/commit/95a108744bb40e418056faaf86bd97b85dd191f8))
* upgrade trino to 450 ([#323](https://github.com/DTStack/dt-sql-parser/issues/323)) ([2b0de6a](https://github.com/DTStack/dt-sql-parser/commit/2b0de6a3da16561ec52b0c69d4e052226d54a553))
* use common sql to run benchmark ([#326](https://github.com/DTStack/dt-sql-parser/issues/326)) ([76d0900](https://github.com/DTStack/dt-sql-parser/commit/76d090040e7af26227727673a82f77cda08b3f9e))


### Bug Fixes

* [#351](https://github.com/DTStack/dt-sql-parser/issues/351) antlr4 command optimize ([74d6435](https://github.com/DTStack/dt-sql-parser/commit/74d643599eb5603279a180262c49eccb04779a30))
* [#381](https://github.com/DTStack/dt-sql-parser/issues/381) antlr4 flink grammar ([74be81c](https://github.com/DTStack/dt-sql-parser/commit/74be81cc695cb26f9b7e90c866e8183f34020a42))
* add hash partition table keywords MODULUS and REMAINDER ([#384](https://github.com/DTStack/dt-sql-parser/issues/384)) ([f2e6b60](https://github.com/DTStack/dt-sql-parser/commit/f2e6b605eca5f8221588d2ca9b85ac2b824aae8d))
* alert to alterView ([#346](https://github.com/DTStack/dt-sql-parser/issues/346)) ([9ba5100](https://github.com/DTStack/dt-sql-parser/commit/9ba51007e2f21ab8bc42623596ee281801904cfa))
* **benchmark:** add reports dir judge and remove plsql and include pgsql ([9c534c2](https://github.com/DTStack/dt-sql-parser/commit/9c534c25cacba3cfba6bd234c68e8f27bd90b2e2))
* build mysql ([5d6ff46](https://github.com/DTStack/dt-sql-parser/commit/5d6ff4662a11acf9f16b1f18c41c204922890df9))
* **ci:** add antlr4 all sql in ci ([2b30e78](https://github.com/DTStack/dt-sql-parser/commit/2b30e781a24f9d7685e46ebc90b1cc153f7e267e))
* **ci:** change ci and add hash judge ([276cc34](https://github.com/DTStack/dt-sql-parser/commit/276cc34c55bacd34cda4e8eeb7eef5f0955f9b82))
* **ci:** change crypto to devDependencies ([b788e1c](https://github.com/DTStack/dt-sql-parser/commit/b788e1ca788308cc56601bcbf7ae24f3156e3af9))
* createFunction and createFunctionLoadable ([e83449a](https://github.com/DTStack/dt-sql-parser/commit/e83449a0cc0a50be510c7b4a3337597b1890fc92))
* flinksql function params add more time functions ([#347](https://github.com/DTStack/dt-sql-parser/issues/347)) ([b835c4b](https://github.com/DTStack/dt-sql-parser/commit/b835c4b5b506c8e4bf0bd9c99fe66c15e53a179b))
* **hive:** add select into configPropertiesItem ([#365](https://github.com/DTStack/dt-sql-parser/issues/365)) ([bdb4b96](https://github.com/DTStack/dt-sql-parser/commit/bdb4b962f2e170c4e703359a9cd6a451f7b8fd60))
* **impala:** fix alter table change statement ([#332](https://github.com/DTStack/dt-sql-parser/issues/332)) ([4a9681e](https://github.com/DTStack/dt-sql-parser/commit/4a9681ed3bd188e41c30a6d7be39d6e77df7f61b))
* mysql case when ([#317](https://github.com/DTStack/dt-sql-parser/issues/317)) ([fea1ad1](https://github.com/DTStack/dt-sql-parser/commit/fea1ad1a357b70291a240eca6d2058bab9b49469))
* **postgresql:** change func_application to add column_name and paren ([#359](https://github.com/DTStack/dt-sql-parser/issues/359)) ([9a5eda8](https://github.com/DTStack/dt-sql-parser/commit/9a5eda8d80789e37f2904a1ceb3f8c646237a207))
* **postgresql:** combine plsql_unreserved_keyword to unreserved_keyword and remove unused rules ([7884cbe](https://github.com/DTStack/dt-sql-parser/commit/7884cbe37844c057fa41fde4d0716af43c4023af))
* **trino:** update timezone grammar to avoid ambiguity ([#394](https://github.com/DTStack/dt-sql-parser/issues/394)) ([05134bc](https://github.com/DTStack/dt-sql-parser/commit/05134bc569996d108f961a7228c2e34cea0fd98b))
* update isContainCaret judgment when caret position token is whit… ([#390](https://github.com/DTStack/dt-sql-parser/issues/390)) ([20f065d](https://github.com/DTStack/dt-sql-parser/commit/20f065d6f099ee6e021d9b0499e4c4aa7de92e6b))

## [4.1.0-beta.0](https://github.com/DTStack/dt-sql-parser/compare/v4.0.1...v4.1.0-beta.0) (2024-08-27)


### Features

* add alter table stmt ([#312](https://github.com/DTStack/dt-sql-parser/issues/312)) ([5aade9e](https://github.com/DTStack/dt-sql-parser/commit/5aade9e6daafc2c6e70c5202d7ef06572ec37f6e))
* add benchmark test suite ([#273](https://github.com/DTStack/dt-sql-parser/issues/273)) ([de1bd9d](https://github.com/DTStack/dt-sql-parser/commit/de1bd9de4cb7c3b42d51bedd79635eb91afba9ed))
* **basicSql:** remove judge splitListener/collectListener, all sqlParser implements it ([#316](https://github.com/DTStack/dt-sql-parser/issues/316)) ([eb2e920](https://github.com/DTStack/dt-sql-parser/commit/eb2e920e345aef98285ba261c2060db61d1d56b8))
* collect entity's attribute([#333](https://github.com/DTStack/dt-sql-parser/issues/333)) ([a3b6b7e](https://github.com/DTStack/dt-sql-parser/commit/a3b6b7eb8bad2444b16481985278461c35360570))
* **flinksql:** collect comment, type attribute for entity ([#319](https://github.com/DTStack/dt-sql-parser/issues/319)) ([ae52ebd](https://github.com/DTStack/dt-sql-parser/commit/ae52ebdd6b6d1511cf92eb09521b06bdec66ba0d)), closes [#305](https://github.com/DTStack/dt-sql-parser/issues/305)
* improve errorListener msg ([#281](https://github.com/DTStack/dt-sql-parser/issues/281)) ([deef123](https://github.com/DTStack/dt-sql-parser/commit/deef1238bb25d5bfee80ddaf1fea5ad48178d17b))
* sync some useful syntax from antlr/grammars-v4 ([95a1087](https://github.com/DTStack/dt-sql-parser/commit/95a108744bb40e418056faaf86bd97b85dd191f8))
* upgrade trino to 450 ([#323](https://github.com/DTStack/dt-sql-parser/issues/323)) ([2b0de6a](https://github.com/DTStack/dt-sql-parser/commit/2b0de6a3da16561ec52b0c69d4e052226d54a553))
* use common sql to run benchmark ([#326](https://github.com/DTStack/dt-sql-parser/issues/326)) ([76d0900](https://github.com/DTStack/dt-sql-parser/commit/76d090040e7af26227727673a82f77cda08b3f9e))


### Bug Fixes

* alert to alterView ([#346](https://github.com/DTStack/dt-sql-parser/issues/346)) ([9ba5100](https://github.com/DTStack/dt-sql-parser/commit/9ba51007e2f21ab8bc42623596ee281801904cfa))
* **benchmark:** add reports dir judge and remove plsql and include pgsql ([9c534c2](https://github.com/DTStack/dt-sql-parser/commit/9c534c25cacba3cfba6bd234c68e8f27bd90b2e2))
* build mysql ([5d6ff46](https://github.com/DTStack/dt-sql-parser/commit/5d6ff4662a11acf9f16b1f18c41c204922890df9))
* createFunction and createFunctionLoadable ([e83449a](https://github.com/DTStack/dt-sql-parser/commit/e83449a0cc0a50be510c7b4a3337597b1890fc92))
* flinksql function params add more time functions ([#347](https://github.com/DTStack/dt-sql-parser/issues/347)) ([b835c4b](https://github.com/DTStack/dt-sql-parser/commit/b835c4b5b506c8e4bf0bd9c99fe66c15e53a179b))
* **impala:** fix alter table change statement ([#332](https://github.com/DTStack/dt-sql-parser/issues/332)) ([4a9681e](https://github.com/DTStack/dt-sql-parser/commit/4a9681ed3bd188e41c30a6d7be39d6e77df7f61b))
* mysql case when ([#317](https://github.com/DTStack/dt-sql-parser/issues/317)) ([fea1ad1](https://github.com/DTStack/dt-sql-parser/commit/fea1ad1a357b70291a240eca6d2058bab9b49469))
* **postgresql:** combine plsql_unreserved_keyword to unreserved_keyword and remove unused rules ([7884cbe](https://github.com/DTStack/dt-sql-parser/commit/7884cbe37844c057fa41fde4d0716af43c4023af))
* spell check ([#337](https://github.com/DTStack/dt-sql-parser/issues/337)) ([694b0cd](https://github.com/DTStack/dt-sql-parser/commit/694b0cdf15943d02a9402a748155a1b06508af95))

### [4.0.2](https://github.com/DTStack/dt-sql-parser/compare/v4.0.1...v4.0.2) (2024-06-19)


### Features

* add benchmark test suite ([#273](https://github.com/DTStack/dt-sql-parser/issues/273)) ([de1bd9d](https://github.com/DTStack/dt-sql-parser/commit/de1bd9de4cb7c3b42d51bedd79635eb91afba9ed))


### Bug Fixes

* **benchmark:** add reports dir judge and remove plsql and include pgsql ([9c534c2](https://github.com/DTStack/dt-sql-parser/commit/9c534c25cacba3cfba6bd234c68e8f27bd90b2e2))
* mysql case when ([#317](https://github.com/DTStack/dt-sql-parser/issues/317)) ([fea1ad1](https://github.com/DTStack/dt-sql-parser/commit/fea1ad1a357b70291a240eca6d2058bab9b49469))

### [4.0.1](https://github.com/DTStack/dt-sql-parser/compare/v4.0.0...v4.0.1) (2024-04-28)


### Features

* deprecate legacy APIs ([#304](https://github.com/DTStack/dt-sql-parser/issues/304)) ([f1c3bbe](https://github.com/DTStack/dt-sql-parser/commit/f1c3bbe17c2f48a55f8ac1664ce635323c88b579))

## [4.0.0](https://github.com/DTStack/dt-sql-parser/compare/v4.0.0-beta.4.15...v4.0.0) (2024-04-28)


### Bug Fixes

* [#301](https://github.com/DTStack/dt-sql-parser/issues/301) pgsql truncate table suggestion ([#302](https://github.com/DTStack/dt-sql-parser/issues/302)) ([25358ec](https://github.com/DTStack/dt-sql-parser/commit/25358ec65353129933c0711212f2f90d854fa242))

## [4.0.0-beta.4.15](https://github.com/DTStack/dt-sql-parser/compare/v4.0.0-beta.4.14...v4.0.0-beta.4.15) (2024-04-21)


### Bug Fixes

* [#295](https://github.com/DTStack/dt-sql-parser/issues/295) [#297](https://github.com/DTStack/dt-sql-parser/issues/297) optimize impala data types suggestion and create table ([#296](https://github.com/DTStack/dt-sql-parser/issues/296)) ([31b57a4](https://github.com/DTStack/dt-sql-parser/commit/31b57a494be5cb5a8145ab48348f797fa6e0c261))
* [#298](https://github.com/DTStack/dt-sql-parser/issues/298) support hive set configuration properties ([#299](https://github.com/DTStack/dt-sql-parser/issues/299)) ([0e752fb](https://github.com/DTStack/dt-sql-parser/commit/0e752fb9a84655322666a1ba26204f7b4be4abb0))

## [4.0.0-beta.4.14](https://github.com/DTStack/dt-sql-parser/compare/v4.0.0-beta.4.13...v4.0.0-beta.4.14) (2024-04-19)


### Bug Fixes

* [#290](https://github.com/DTStack/dt-sql-parser/issues/290) hive lifecycle ([#293](https://github.com/DTStack/dt-sql-parser/issues/293)) ([37974ca](https://github.com/DTStack/dt-sql-parser/commit/37974ca0cb8146b0350740cc8d2fb2e6d2d4ee63))

## [4.0.0-beta.4.13](https://github.com/DTStack/dt-sql-parser/compare/v4.0.0-beta.4.12...v4.0.0-beta.4.13) (2024-04-19)


### Features

* [#290](https://github.com/DTStack/dt-sql-parser/issues/290) support dtstack SparkSQL/HiveSQL lifecycle ([#292](https://github.com/DTStack/dt-sql-parser/issues/292)) ([da77180](https://github.com/DTStack/dt-sql-parser/commit/da77180a50456e3cdc165cd6a7e06be563a31f23))


### Bug Fixes

* [#285](https://github.com/DTStack/dt-sql-parser/issues/285) No longer just export types from libs ([#286](https://github.com/DTStack/dt-sql-parser/issues/286)) ([8bb27ee](https://github.com/DTStack/dt-sql-parser/commit/8bb27ee771b4b1ecf4b6660b5fb87184188ba7e2))

## [4.0.0-beta.4.12](https://github.com/DTStack/dt-sql-parser/compare/v4.0.0-beta.4.11...v4.0.0-beta.4.12) (2024-03-28)


### Features

* add toMatchUnorderedArray matcher and apply it ([#271](https://github.com/DTStack/dt-sql-parser/issues/271)) ([a05f099](https://github.com/DTStack/dt-sql-parser/commit/a05f099aa1ad555c408bc2018240fb4611ec09b8))
* collect entity ([#265](https://github.com/DTStack/dt-sql-parser/issues/265)) ([a997211](https://github.com/DTStack/dt-sql-parser/commit/a99721162be0d463b513f53bb13ada6d10168548)), closes [#256](https://github.com/DTStack/dt-sql-parser/issues/256) [#263](https://github.com/DTStack/dt-sql-parser/issues/263) [#268](https://github.com/DTStack/dt-sql-parser/issues/268)
* migrate to antlr4ng ([#267](https://github.com/DTStack/dt-sql-parser/issues/267)) ([195878d](https://github.com/DTStack/dt-sql-parser/commit/195878da9bb1ff8011b5d60c02389fa66d2bc0b8))
* **spark:** support materialized view for spark sql ([#262](https://github.com/DTStack/dt-sql-parser/issues/262)) ([5ce89cb](https://github.com/DTStack/dt-sql-parser/commit/5ce89cb421de18330d56e23a4ab5b658b2130a0b))
* use SLL mode ([#269](https://github.com/DTStack/dt-sql-parser/issues/269)) ([3f62ad0](https://github.com/DTStack/dt-sql-parser/commit/3f62ad0d3241f574f7caaa8fc52a6e8189484e91))


### Bug Fixes

* **pgsql:** (issue [#255](https://github.com/DTStack/dt-sql-parser/issues/255)) select from support view name ([#257](https://github.com/DTStack/dt-sql-parser/issues/257)) ([337885b](https://github.com/DTStack/dt-sql-parser/commit/337885be8bb011fefff39bb1b5078b74e5168b90))
* trino validation ([#248](https://github.com/DTStack/dt-sql-parser/issues/248)) ([1038a3a](https://github.com/DTStack/dt-sql-parser/commit/1038a3a828a60b4382dcddf8bb08bd0dc8be78da)), closes [#246](https://github.com/DTStack/dt-sql-parser/issues/246)

## [4.0.0-beta.4.11](https://github.com/DTStack/dt-sql-parser/compare/v4.0.0-beta.4.10...v4.0.0-beta.4.11) (2024-01-04)


### Bug Fixes

* rename createLexerFormCharStream to createLexerFromCharStream ([#243](https://github.com/DTStack/dt-sql-parser/issues/243)) ([4d19f05](https://github.com/DTStack/dt-sql-parser/commit/4d19f058900d973155e648816abc3b2c24ee97de))

## [4.0.0-beta.4.10](https://github.com/DTStack/dt-sql-parser/compare/v4.0.0-beta.4.9...v4.0.0-beta.4.10) (2023-12-19)


### Features

* export visitor and listener as type ([d4c97ef](https://github.com/DTStack/dt-sql-parser/commit/d4c97ef833c1c38410930c4094c71359b483332a))

## [4.0.0-beta.4.9](https://github.com/DTStack/dt-sql-parser/compare/v4.0.0-beta.4.8...v4.0.0-beta.4.9) (2023-12-13)


### Features

* add ErrorStrategy([#230](https://github.com/DTStack/dt-sql-parser/issues/230)) ([ee8b468](https://github.com/DTStack/dt-sql-parser/commit/ee8b468778d6c109402ee9f110c34bac2eca17db))
* add readonly modifier ([17eba1f](https://github.com/DTStack/dt-sql-parser/commit/17eba1f2aa6cee44920086ba363ecb9cc26b5efd))
* optimize suggestion ([#231](https://github.com/DTStack/dt-sql-parser/issues/231)) ([3c7c59f](https://github.com/DTStack/dt-sql-parser/commit/3c7c59fb70e47b1052a6a15d120a9220e17fa0c1))


### Bug Fixes

*  add missing expression predicate to impala parser([#225](https://github.com/DTStack/dt-sql-parser/issues/225)) ([484c881](https://github.com/DTStack/dt-sql-parser/commit/484c88158370a2a8017d5988adec3d23dfdcbe3b))
* correct import path ([96b0376](https://github.com/DTStack/dt-sql-parser/commit/96b037651072d4e30d232af0a23aaed28bda4cc8))
* **impala:** update impala nonReserved and keywords use as functionName ([#229](https://github.com/DTStack/dt-sql-parser/issues/229)) ([8c594cf](https://github.com/DTStack/dt-sql-parser/commit/8c594cf0f25f8c852c14350b78395834e85540c7))

## [4.0.0-beta.4.8](https://github.com/DTStack/dt-sql-parser/compare/v4.0.0-beta.4.7...v4.0.0-beta.4.8) (2023-11-29)


### Features

* [#190](https://github.com/DTStack/dt-sql-parser/issues/190) improve mysql grammer ([#196](https://github.com/DTStack/dt-sql-parser/issues/196)) ([428d851](https://github.com/DTStack/dt-sql-parser/commit/428d851913dffff317776928c8cdc1e10d1808e6))
* deprecate legacy util ([#223](https://github.com/DTStack/dt-sql-parser/issues/223)) ([340ccae](https://github.com/DTStack/dt-sql-parser/commit/340ccae7d702c2fd479799e3ddd7b15ae37a6bd7))
* export impala listener and visitor ([329f161](https://github.com/DTStack/dt-sql-parser/commit/329f161d2d5743d1dd576acb99f66fbced9ccdef))
* mysql auto complete ([#219](https://github.com/DTStack/dt-sql-parser/issues/219)) ([3dadc0c](https://github.com/DTStack/dt-sql-parser/commit/3dadc0c4b517f7be80b1349112d2763c00172539))
* pgsql collect column name ([#216](https://github.com/DTStack/dt-sql-parser/issues/216)) ([db05cb3](https://github.com/DTStack/dt-sql-parser/commit/db05cb3e4f3409fbfa188bb3aed2c80023636c44))
* recomplie plsql parser ([a98f7f9](https://github.com/DTStack/dt-sql-parser/commit/a98f7f938a8977b227d0c26db390badb5744f584))
* support impala ([#184](https://github.com/DTStack/dt-sql-parser/issues/184)) ([e203f1a](https://github.com/DTStack/dt-sql-parser/commit/e203f1a48aec65353ba472c15868087569d8358d))


### Bug Fixes

* add partitioned by sql unit test and compile impala ([#221](https://github.com/DTStack/dt-sql-parser/issues/221)) ([4be3640](https://github.com/DTStack/dt-sql-parser/commit/4be3640219cada34781f9f8fe97608b2ab7e0cbc))

## [4.0.0-beta.4.7](https://github.com/DTStack/dt-sql-parser/compare/v4.0.0-beta.4.6...v4.0.0-beta.4.7) (2023-11-24)


### Features

* add column to syntaxContextType ([00b66cc](https://github.com/DTStack/dt-sql-parser/commit/00b66ccf4476a7ead6558677e858449c3c4693ec))


### Bug Fixes

* [#213](https://github.com/DTStack/dt-sql-parser/issues/213) flinksql expression syntax ([#215](https://github.com/DTStack/dt-sql-parser/issues/215)) ([6bbcb3c](https://github.com/DTStack/dt-sql-parser/commit/6bbcb3c8d33d45b26a87f47485dd75b6648da2a6))

## [4.0.0-beta.4.6](https://github.com/DTStack/dt-sql-parser/compare/v4.0.0-beta.4.5...v4.0.0-beta.4.6) (2023-11-20)


### Features

* improve pgsql grammar and add unit tests([#201](https://github.com/DTStack/dt-sql-parser/issues/201)) ([2e6d18e](https://github.com/DTStack/dt-sql-parser/commit/2e6d18e7dce19ec7e4a9a44b208b445ac17e69ae))
* pgsql: optimize drop rule's content ([adeb26b](https://github.com/DTStack/dt-sql-parser/commit/adeb26b7dff98d917d3608834880735bc76f89b1))
* pgsql: update routine's name ([a5757a3](https://github.com/DTStack/dt-sql-parser/commit/a5757a30b6a65118cd5d6e71e46194ef2fe43926))
* **pgsql: upgrade rules' name:** pgsql: upgrade rules' name ([4736a65](https://github.com/DTStack/dt-sql-parser/commit/4736a65e0c3acbb22b1c0490b6f2b60787dae4f7))
* upgrade antlr4-c3 and fix the version ([1711feb](https://github.com/DTStack/dt-sql-parser/commit/1711febca7abdbe19f8ad0220a6fb841d8a54740))

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
