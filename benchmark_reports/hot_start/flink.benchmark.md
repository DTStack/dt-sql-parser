## Benchmark

### Language
FlinkSQL

### Report Time
2024/12/18 14:59:09

### Device
macOS 15.0.1
(8) arm64 Apple M1 Pro
16.00 GB

### Version
`nodejs`: v21.6.1
`dt-sql-parser`: v4.1.0-beta.0
`antlr4-c3`: v3.3.7
`antlr4ng`: v2.0.11

### Running Mode
Hot Start

### Report
|  Benchmark Name |           Method Name           |SQL Rows|Average Time(ms)| 
|-----------------|---------------------------------|--------|----------------| 
| Query Collection|           getAllTokens          |  1015  |       25       | 
| Query Collection|             validate            |  1015  |       25       | 
|  Insert Columns |           getAllTokens          |  1001  |       60       | 
|  Insert Columns |             validate            |  1001  |       61       | 
|   Create Table  |           getAllTokens          |  1004  |       18       | 
|   Create Table  |             validate            |  1004  |       17       | 
|    Split SQL    |       splitSQLByStatement       |   999  |       22       | 
| Collect Entities|          getAllEntities         |  1056  |       70       | 
|    Suggestion   |   getSuggestionAtCaretPosition  |  1056  |       70       | 
|Collect Semantics|getSemanticContextAtCaretPosition|  1015  |       26       | 


