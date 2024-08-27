## Benchmark

### Language
FlinkSQL

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
|Query Collection|        getAllTokens        |  1015  |       308      | 
|Query Collection|          validate          |  1015  |       298      | 
| Insert Columns |        getAllTokens        |  1001  |       84       | 
| Insert Columns |          validate          |  1001  |       83       | 
|  Create Table  |        getAllTokens        |  1004  |       32       | 
|  Create Table  |          validate          |  1004  |       32       | 
|    Split SQL   |     splitSQLByStatement    |   999  |       67       | 
|Collect Entities|       getAllEntities       |  1056  |       181      | 
|   Suggestion   |getSuggestionAtCaretPosition|  1056  |       167      | 


