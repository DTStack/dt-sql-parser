## Benchmark

### Language
FlinkSQL

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
|Query Collection|        getAllTokens        |  1015  |       26       | 
|Query Collection|          validate          |  1015  |       29       | 
| Insert Columns |        getAllTokens        |  1001  |       61       | 
| Insert Columns |          validate          |  1001  |       58       | 
|  Create Table  |        getAllTokens        |  1004  |       16       | 
|  Create Table  |          validate          |  1004  |       15       | 
|    Split SQL   |     splitSQLByStatement    |   999  |       22       | 
|Collect Entities|       getAllEntities       |  1056  |       30       | 
|   Suggestion   |getSuggestionAtCaretPosition|  1056  |       28       | 


