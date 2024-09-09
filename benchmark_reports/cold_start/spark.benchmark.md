## Benchmark

### Language
SparkSQL

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
|Query Collection|        getAllTokens        |  1015  |       268      | 
|Query Collection|          validate          |  1015  |       259      | 
|  Update Table  |        getAllTokens        |  1011  |       232      | 
|  Update Table  |          validate          |  1011  |       226      | 
| Insert Columns |        getAllTokens        |  1001  |       198      | 
| Insert Columns |          validate          |  1001  |       200      | 
|  Create Table  |        getAllTokens        |  1002  |       29       | 
|  Create Table  |          validate          |  1002  |       30       | 
|    Split SQL   |     splitSQLByStatement    |  1001  |       111      | 
|Collect Entities|       getAllEntities       |  1066  |       170      | 
|   Suggestion   |getSuggestionAtCaretPosition|  1066  |       164      | 


