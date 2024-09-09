## Benchmark

### Language
MySQL

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
|Query Collection|        getAllTokens        |  1015  |       28       | 
|Query Collection|          validate          |  1015  |       29       | 
|  Update Table  |        getAllTokens        |  1011  |       26       | 
|  Update Table  |          validate          |  1011  |       26       | 
| Insert Columns |        getAllTokens        |  1001  |       184      | 
| Insert Columns |          validate          |  1001  |       188      | 
|  Create Table  |        getAllTokens        |  1002  |       23       | 
|  Create Table  |          validate          |  1002  |       19       | 
|    Split SQL   |     splitSQLByStatement    |  1001  |       27       | 
|Collect Entities|       getAllEntities       |  1066  |       29       | 
|   Suggestion   |getSuggestionAtCaretPosition|  1066  |       23       | 


