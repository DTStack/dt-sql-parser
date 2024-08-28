## Benchmark

### Language
FlinkSQL

### Report Time
2024/8/28 11:33:36

### Device
macOS 14.4.1
(8) arm64 Apple M1 Pro
16.00 GB

### Version
`nodejs`: v21.6.1
`dt-sql-parser`: 4.0.2
`antlr4-c3`: 3.3.7
`antlr4ng`: 2.0.11

### Report
| Benchmark Name |         Method Name        |SQL Rows|Average Time(ms)| 
|----------------|----------------------------|--------|----------------| 
|Query Collection|        getAllTokens        |  1015  |       225      | 
|Query Collection|          validate          |  1015  |       235      | 
| Insert Columns |        getAllTokens        |  1001  |       67       | 
| Insert Columns |          validate          |  1001  |       78       | 
|  Create Table  |        getAllTokens        |  1004  |       27       | 
|  Create Table  |          validate          |  1004  |       26       | 
|    Split SQL   |     splitSQLByStatement    |   999  |       55       | 
|Collect Entities|       getAllEntities       |  1056  |       140      | 
|   Suggestion   |getSuggestionAtCaretPosition|  1056  |       135      | 


