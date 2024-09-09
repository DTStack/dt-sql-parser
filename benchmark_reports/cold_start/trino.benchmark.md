## Benchmark

### Language
TrinoSQL

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
|Query Collection|        getAllTokens        |  1015  |       89       | 
|Query Collection|          validate          |  1015  |       90       | 
|  Update Table  |        getAllTokens        |  1011  |       109      | 
|  Update Table  |          validate          |  1011  |       104      | 
| Insert Columns |        getAllTokens        |  1001  |       202      | 
| Insert Columns |          validate          |  1001  |       202      | 
|  Create Table  |        getAllTokens        |  1002  |       27       | 
|  Create Table  |          validate          |  1002  |       26       | 
|    Split SQL   |     splitSQLByStatement    |  1001  |       71       | 
|Collect Entities|       getAllEntities       |  1066  |       101      | 
|   Suggestion   |getSuggestionAtCaretPosition|  1066  |       94       | 


