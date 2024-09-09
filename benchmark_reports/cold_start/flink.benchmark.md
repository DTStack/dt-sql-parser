## Benchmark

### Language
FlinkSQL

### Report Time
2024/9/9 19:55:03

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
Cold Start

### Report
| Benchmark Name |         Method Name        |SQL Rows|Average Time(ms)| 
|----------------|----------------------------|--------|----------------| 
|Query Collection|        getAllTokens        |  1015  |       227      | 
|Query Collection|          validate          |  1015  |       221      | 
| Insert Columns |        getAllTokens        |  1001  |       65       | 
| Insert Columns |          validate          |  1001  |       65       | 
|  Create Table  |        getAllTokens        |  1004  |       27       | 
|  Create Table  |          validate          |  1004  |       26       | 
|    Split SQL   |     splitSQLByStatement    |   999  |       52       | 
|Collect Entities|       getAllEntities       |  1056  |       141      | 
|   Suggestion   |getSuggestionAtCaretPosition|  1056  |       131      | 


