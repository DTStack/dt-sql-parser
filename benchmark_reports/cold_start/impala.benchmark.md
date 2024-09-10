## Benchmark

### Language
ImpalaSQL

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
|Query Collection|        getAllTokens        |  1015  |       71       | 
|Query Collection|          validate          |  1015  |       71       | 
|  Update Table  |        getAllTokens        |  1011  |       113      | 
|  Update Table  |          validate          |  1011  |       108      | 
| Insert Columns |        getAllTokens        |  1001  |       208      | 
| Insert Columns |          validate          |  1001  |       213      | 
|  Create Table  |        getAllTokens        |  1002  |       23       | 
|  Create Table  |          validate          |  1002  |       23       | 
|    Split SQL   |     splitSQLByStatement    |  1001  |       65       | 
|Collect Entities|       getAllEntities       |  1066  |       82       | 
|   Suggestion   |getSuggestionAtCaretPosition|  1066  |       83       | 


