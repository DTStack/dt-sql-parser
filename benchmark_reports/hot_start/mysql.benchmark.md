## Benchmark

### Language
MySQL

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
| Query Collection|           getAllTokens          |  1015  |       29       | 
| Query Collection|             validate            |  1015  |       29       | 
|   Update Table  |           getAllTokens          |  1011  |       27       | 
|   Update Table  |             validate            |  1011  |       27       | 
|  Insert Columns |           getAllTokens          |  1001  |       181      | 
|  Insert Columns |             validate            |  1001  |       184      | 
|   Create Table  |           getAllTokens          |  1002  |       19       | 
|   Create Table  |             validate            |  1002  |       20       | 
|    Split SQL    |       splitSQLByStatement       |  1001  |       28       | 
| Collect Entities|          getAllEntities         |  1066  |       106      | 
|    Suggestion   |   getSuggestionAtCaretPosition  |  1066  |       75       | 
|Collect Semantics|getSemanticContextAtCaretPosition|  1015  |       31       | 


