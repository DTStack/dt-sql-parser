## Benchmark

### Language
TrinoSQL

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
|Query Collection|        getAllTokens        |  1015  |       93       | 
|Query Collection|          validate          |  1015  |       88       | 
|  Update Table  |        getAllTokens        |  1011  |       109      | 
|  Update Table  |          validate          |  1011  |       109      | 
| Insert Columns |        getAllTokens        |  1001  |       208      | 
| Insert Columns |          validate          |  1001  |       210      | 
|  Create Table  |        getAllTokens        |  1002  |       28       | 
|  Create Table  |          validate          |  1002  |       27       | 
|    Split SQL   |     splitSQLByStatement    |  1001  |       73       | 
|Collect Entities|       getAllEntities       |  1066  |       102      | 
|   Suggestion   |getSuggestionAtCaretPosition|  1066  |       97       | 


