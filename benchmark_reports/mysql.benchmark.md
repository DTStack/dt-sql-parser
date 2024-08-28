## Benchmark

### Language
MySQL

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
|Query Collection|        getAllTokens        |  1015  |      1299      | 
|Query Collection|          validate          |  1015  |      1290      | 
|  Update Table  |        getAllTokens        |  1011  |       831      | 
|  Update Table  |          validate          |  1011  |       817      | 
| Insert Columns |        getAllTokens        |  1001  |       256      | 
| Insert Columns |          validate          |  1001  |       261      | 
|  Create Table  |        getAllTokens        |  1002  |       45       | 
|  Create Table  |          validate          |  1002  |       44       | 
|    Split SQL   |     splitSQLByStatement    |  1001  |       286      | 
|Collect Entities|       getAllEntities       |  1066  |       517      | 
|   Suggestion   |getSuggestionAtCaretPosition|  1066  |       486      | 


