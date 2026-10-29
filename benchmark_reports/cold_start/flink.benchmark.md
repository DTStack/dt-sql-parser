## Benchmark

### Language
FlinkSQL

### Report Time
2026/9/24 10:22:50

### Device
macOS 15.7.9
(8) arm64 Apple M3
16.00 GB

### Version
`nodejs`: v22.23.1
`dt-sql-parser`: v4.5.1
`antlr4-c3`: v3.3.7
`antlr4ng`: v2.0.11

### Running Mode
Cold Start

### Report
|  Benchmark Name |           Method Name           |SQL Rows|Average Time(ms)| 
|-----------------|---------------------------------|--------|----------------| 
| Query Collection|           getAllTokens          |  1015  |       282      | 
| Query Collection|             validate            |  1015  |       282      | 
|  Insert Columns |           getAllTokens          |  1001  |       53       | 
|  Insert Columns |             validate            |  1001  |       58       | 
|   Create Table  |           getAllTokens          |  1004  |       16       | 
|   Create Table  |             validate            |  1004  |       17       | 
|    Split SQL    |       splitSQLByStatement       |   999  |       40       | 
| Collect Entities|          getAllEntities         |  1056  |       185      | 
|    Suggestion   |   getSuggestionAtCaretPosition  |  1056  |       226      | 
|Collect Semantics|getSemanticContextAtCaretPosition|  1015  |       309      | 


