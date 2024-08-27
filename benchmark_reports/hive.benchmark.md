## Benchmark

### Language
HiveSQL

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
|Query Collection|        getAllTokens        |  1015  |       187      | 
|Query Collection|          validate          |  1015  |       195      | 
|  Update Table  |        getAllTokens        |  1011  |       127      | 
|  Update Table  |          validate          |  1011  |       118      | 
| Insert Columns |        getAllTokens        |  1001  |       353      | 
| Insert Columns |          validate          |  1001  |       353      | 
|  Create Table  |        getAllTokens        |  1002  |       27       | 
|  Create Table  |          validate          |  1002  |       27       | 
|    Split SQL   |     splitSQLByStatement    |  1001  |       93       | 
|Collect Entities|       getAllEntities       |  1066  |       115      | 
|   Suggestion   |getSuggestionAtCaretPosition|  1066  |       108      | 


