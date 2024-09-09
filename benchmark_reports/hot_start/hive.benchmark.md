## Benchmark

### Language
HiveSQL

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
|Query Collection|        getAllTokens        |  1015  |       21       | 
|Query Collection|          validate          |  1015  |       20       | 
|  Update Table  |        getAllTokens        |  1011  |       22       | 
|  Update Table  |          validate          |  1011  |       22       | 
| Insert Columns |        getAllTokens        |  1001  |       293      | 
| Insert Columns |          validate          |  1001  |       287      | 
|  Create Table  |        getAllTokens        |  1002  |       12       | 
|  Create Table  |          validate          |  1002  |       12       | 
|    Split SQL   |     splitSQLByStatement    |  1001  |       23       | 
|Collect Entities|       getAllEntities       |  1066  |       20       | 
|   Suggestion   |getSuggestionAtCaretPosition|  1066  |       17       | 


