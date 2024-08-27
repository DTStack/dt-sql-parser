## Benchmark

### Language
MySQL

### Report Time
2024/8/27 17:55:13

### Device
macOS 14.4.1
(8) arm64 Apple M1 Pro
16.00 GB

### Version
`nodejs`: v20.15.0
`dt-sql-parser`: 4.0.2
`antlr4-c3`: 3.3.7
`antlr4ng`: 2.0.11

### Report
| Benchmark Name |         Method Name        |SQL Rows|Average Time(ms)| 
|----------------|----------------------------|--------|----------------| 
|Query Collection|        getAllTokens        |  1015  |      1378      | 
|Query Collection|          validate          |  1015  |      1432      | 
|  Update Table  |        getAllTokens        |  1011  |      1014      | 
|  Update Table  |          validate          |  1011  |      1087      | 
| Insert Columns |        getAllTokens        |  1001  |       304      | 
| Insert Columns |          validate          |  1001  |       317      | 
|  Create Table  |        getAllTokens        |  1002  |       62       | 
|  Create Table  |          validate          |  1002  |       61       | 
|    Split SQL   |     splitSQLByStatement    |  1001  |       405      | 
|Collect Entities|       getAllEntities       |  1066  |       643      | 
|   Suggestion   |getSuggestionAtCaretPosition|  1066  |       621      | 


