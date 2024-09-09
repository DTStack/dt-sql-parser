## Benchmark

### Language
TrinoSQL

### Report Time
2024/9/9 19:47:32

### Device
macOS 14.4.1
(8) arm64 Apple M1 Pro
16.00 GB

### Version
`nodejs`: v21.6.1
`dt-sql-parser`: v4.0.2
`antlr4-c3`: v3.3.7
`antlr4ng`: v2.0.11

### Running Mode
Hot Start

### Report
| Benchmark Name |         Method Name        |SQL Rows|Average Time(ms)| 
|----------------|----------------------------|--------|----------------| 
|Query Collection|        getAllTokens        |  1015  |       24       | 
|Query Collection|          validate          |  1015  |       24       | 
|  Update Table  |        getAllTokens        |  1011  |       23       | 
|  Update Table  |          validate          |  1011  |       25       | 
| Insert Columns |        getAllTokens        |  1001  |       181      | 
| Insert Columns |          validate          |  1001  |       182      | 
|  Create Table  |        getAllTokens        |  1002  |       17       | 
|  Create Table  |          validate          |  1002  |       16       | 
|    Split SQL   |     splitSQLByStatement    |  1001  |       24       | 
|Collect Entities|       getAllEntities       |  1066  |       21       | 
|   Suggestion   |getSuggestionAtCaretPosition|  1066  |       19       | 


