## Benchmark

### Language
SparkSQL

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
|Query Collection|        getAllTokens        |  1015  |       271      | 
|Query Collection|          validate          |  1015  |       262      | 
|  Update Table  |        getAllTokens        |  1011  |       226      | 
|  Update Table  |          validate          |  1011  |       227      | 
| Insert Columns |        getAllTokens        |  1001  |       202      | 
| Insert Columns |          validate          |  1001  |       200      | 
|  Create Table  |        getAllTokens        |  1002  |       29       | 
|  Create Table  |          validate          |  1002  |       29       | 
|    Split SQL   |     splitSQLByStatement    |  1001  |       111      | 
|Collect Entities|       getAllEntities       |  1066  |       173      | 
|   Suggestion   |getSuggestionAtCaretPosition|  1066  |       158      | 


