## Benchmark

### Language
ImpalaSQL

### Report Time
2024/8/27 17:55:13

### Device
macOS 14.4.1
(8) arm64 Apple M1 Pro
16.00 GB

### Version
`nodejs`: v20.15.0
`dt-sql-parser`: 4.0.2
`antlr4-c3`: 3.3.7
`antlr4ng`: 2.0.11

### Report
| Benchmark Name |         Method Name        |SQL Rows|Average Time(ms)| 
|----------------|----------------------------|--------|----------------| 
|Query Collection|        getAllTokens        |  1015  |       85       | 
|Query Collection|          validate          |  1015  |       86       | 
|  Update Table  |        getAllTokens        |  1011  |       129      | 
|  Update Table  |          validate          |  1011  |       127      | 
| Insert Columns |        getAllTokens        |  1001  |       247      | 
| Insert Columns |          validate          |  1001  |       250      | 
|  Create Table  |        getAllTokens        |  1002  |       28       | 
|  Create Table  |          validate          |  1002  |       29       | 
|    Split SQL   |     splitSQLByStatement    |  1001  |       79       | 
|Collect Entities|       getAllEntities       |  1066  |       97       | 
|   Suggestion   |getSuggestionAtCaretPosition|  1066  |       92       | 


