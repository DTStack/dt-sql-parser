## Benchmark

### Language
MySQL

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
|Query Collection|        getAllTokens        |  1015  |      1281      | 
|Query Collection|          validate          |  1015  |      1254      | 
|  Update Table  |        getAllTokens        |  1011  |       876      | 
|  Update Table  |          validate          |  1011  |       842      | 
| Insert Columns |        getAllTokens        |  1001  |       261      | 
| Insert Columns |          validate          |  1001  |       266      | 
|  Create Table  |        getAllTokens        |  1002  |       48       | 
|  Create Table  |          validate          |  1002  |       45       | 
|    Split SQL   |     splitSQLByStatement    |  1001  |       287      | 
|Collect Entities|       getAllEntities       |  1066  |       474      | 
|   Suggestion   |getSuggestionAtCaretPosition|  1066  |       462      | 


