## Benchmark

### Language
TrinoSQL

### Report Time
2026/9/23 18:08:08

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
| Query Collection|           getAllTokens          |  1015  |       90       | 
| Query Collection|             validate            |  1015  |       86       | 
|   Update Table  |           getAllTokens          |  1011  |       96       | 
|   Update Table  |             validate            |  1011  |       99       | 
|  Insert Columns |           getAllTokens          |  1001  |       115      | 
|  Insert Columns |             validate            |  1001  |       118      | 
|   Create Table  |           getAllTokens          |  1002  |       16       | 
|   Create Table  |             validate            |  1002  |       17       | 
|    Split SQL    |       splitSQLByStatement       |  1001  |       49       | 
| Collect Entities|          getAllEntities         |  1066  |       110      | 
|    Suggestion   |   getSuggestionAtCaretPosition  |  1066  |       109      | 
|Collect Semantics|getSemanticContextAtCaretPosition|  1015  |       104      | 


