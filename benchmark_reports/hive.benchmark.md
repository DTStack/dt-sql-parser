## Benchmark

### Language
HiveSQL

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
|Query Collection|        getAllTokens        |  1015  |       180      | 
|Query Collection|          validate          |  1015  |       179      | 
|  Update Table  |        getAllTokens        |  1011  |       117      | 
|  Update Table  |          validate          |  1011  |       117      | 
| Insert Columns |        getAllTokens        |  1001  |       330      | 
| Insert Columns |          validate          |  1001  |       323      | 
|  Create Table  |        getAllTokens        |  1002  |       20       | 
|  Create Table  |          validate          |  1002  |       20       | 
|    Split SQL   |     splitSQLByStatement    |  1001  |       71       | 
|Collect Entities|       getAllEntities       |  1066  |       105      | 
|   Suggestion   |getSuggestionAtCaretPosition|  1066  |       98       | 


