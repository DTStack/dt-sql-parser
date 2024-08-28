## Benchmark

### Language
ImpalaSQL

### Report Time
2024/8/28 11:33:36

### Device
macOS 14.4.1
(8) arm64 Apple M1 Pro
16.00 GB

### Version
`nodejs`: v21.6.1
`dt-sql-parser`: 4.0.2
`antlr4-c3`: 3.3.7
`antlr4ng`: 2.0.11

### Report
| Benchmark Name |         Method Name        |SQL Rows|Average Time(ms)| 
|----------------|----------------------------|--------|----------------| 
|Query Collection|        getAllTokens        |  1015  |       75       | 
|Query Collection|          validate          |  1015  |       74       | 
|  Update Table  |        getAllTokens        |  1011  |       115      | 
|  Update Table  |          validate          |  1011  |       116      | 
| Insert Columns |        getAllTokens        |  1001  |       213      | 
| Insert Columns |          validate          |  1001  |       215      | 
|  Create Table  |        getAllTokens        |  1002  |       23       | 
|  Create Table  |          validate          |  1002  |       23       | 
|    Split SQL   |     splitSQLByStatement    |  1001  |       68       | 
|Collect Entities|       getAllEntities       |  1066  |       81       | 
|   Suggestion   |getSuggestionAtCaretPosition|  1066  |       75       | 


