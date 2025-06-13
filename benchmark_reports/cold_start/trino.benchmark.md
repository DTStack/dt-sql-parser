## Benchmark

### Language
TrinoSQL

### Report Time
2024/12/18 14:50:08

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
Cold Start

### Report
|  Benchmark Name |           Method Name           |SQL Rows|Average Time(ms)| 
|-----------------|---------------------------------|--------|----------------| 
| Query Collection|           getAllTokens          |  1015  |       91       | 
| Query Collection|             validate            |  1015  |       94       | 
|   Update Table  |           getAllTokens          |  1011  |       114      | 
|   Update Table  |             validate            |  1011  |       127      | 
|  Insert Columns |           getAllTokens          |  1001  |       214      | 
|  Insert Columns |             validate            |  1001  |       204      | 
|   Create Table  |           getAllTokens          |  1002  |       28       | 
|   Create Table  |             validate            |  1002  |       28       | 
|    Split SQL    |       splitSQLByStatement       |  1001  |       72       | 
| Collect Entities|          getAllEntities         |  1066  |       119      | 
|    Suggestion   |   getSuggestionAtCaretPosition  |  1066  |       117      | 
|Collect Semantics|getSemanticContextAtCaretPosition|  1015  |       108      | 


