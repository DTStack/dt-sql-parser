// Generated from /Users/erindeng/Desktop/dt-sql-parser/src/grammar/flinksql/FlinkSqlParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FlinkSqlParserListener = require('./FlinkSqlParserListener').FlinkSqlParserListener;
var FlinkSqlParserVisitor = require('./FlinkSqlParserVisitor').FlinkSqlParserVisitor;

var grammarFileName = "FlinkSqlParser.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0131\u00b5\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0007\u0004E\n\u0004\f\u0004\u000e\u0004H\u000b",
    "\u0004\u0003\u0005\u0003\u0005\u0005\u0005L\n\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005",
    "\u0007[\n\u0007\u0003\b\u0003\b\u0005\b_\n\b\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0007\th\n\t\f\t\u000e\tk\u000b\t\u0003",
    "\t\u0003\t\u0005\to\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007",
    "\tv\n\t\f\t\u000e\ty\u000b\t\u0003\t\u0003\t\u0003\n\u0003\n\u0007\n",
    "\u007f\n\n\f\n\u000e\n\u0082\u000b\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u0092\n",
    "\u000f\f\u000f\u000e\u000f\u0095\u000b\u000f\u0003\u0010\u0003\u0010",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015",
    "\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018",
    "\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b",
    "\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u0080",
    "\u0002\u001e\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \"$&(*,.02468\u0002\u0003\u0003\u0002\u0106\u011c",
    "\u0002\u00ab\u0002:\u0003\u0002\u0002\u0002\u0004=\u0003\u0002\u0002",
    "\u0002\u0006F\u0003\u0002\u0002\u0002\bK\u0003\u0002\u0002\u0002\nM",
    "\u0003\u0002\u0002\u0002\fZ\u0003\u0002\u0002\u0002\u000e^\u0003\u0002",
    "\u0002\u0002\u0010`\u0003\u0002\u0002\u0002\u0012|\u0003\u0002\u0002",
    "\u0002\u0014\u0083\u0003\u0002\u0002\u0002\u0016\u0086\u0003\u0002\u0002",
    "\u0002\u0018\u0088\u0003\u0002\u0002\u0002\u001a\u008a\u0003\u0002\u0002",
    "\u0002\u001c\u008e\u0003\u0002\u0002\u0002\u001e\u0096\u0003\u0002\u0002",
    "\u0002 \u0098\u0003\u0002\u0002\u0002\"\u009c\u0003\u0002\u0002\u0002",
    "$\u009e\u0003\u0002\u0002\u0002&\u00a0\u0003\u0002\u0002\u0002(\u00a2",
    "\u0003\u0002\u0002\u0002*\u00a4\u0003\u0002\u0002\u0002,\u00a6\u0003",
    "\u0002\u0002\u0002.\u00a8\u0003\u0002\u0002\u00020\u00aa\u0003\u0002",
    "\u0002\u00022\u00ac\u0003\u0002\u0002\u00024\u00ae\u0003\u0002\u0002",
    "\u00026\u00b0\u0003\u0002\u0002\u00028\u00b2\u0003\u0002\u0002\u0002",
    ":;\u0005\u0004\u0003\u0002;<\u0007\u0002\u0002\u0003<\u0003\u0003\u0002",
    "\u0002\u0002=>\u0005\u0006\u0004\u0002>?\u0007\u0002\u0002\u0003?\u0005",
    "\u0003\u0002\u0002\u0002@A\u0005\b\u0005\u0002AB\u0007\u0129\u0002\u0002",
    "BE\u0003\u0002\u0002\u0002CE\u0005\n\u0006\u0002D@\u0003\u0002\u0002",
    "\u0002DC\u0003\u0002\u0002\u0002EH\u0003\u0002\u0002\u0002FD\u0003\u0002",
    "\u0002\u0002FG\u0003\u0002\u0002\u0002G\u0007\u0003\u0002\u0002\u0002",
    "HF\u0003\u0002\u0002\u0002IL\u0005\f\u0007\u0002JL\u0005\u000e\b\u0002",
    "KI\u0003\u0002\u0002\u0002KJ\u0003\u0002\u0002\u0002L\t\u0003\u0002",
    "\u0002\u0002MN\u0007\u0129\u0002\u0002N\u000b\u0003\u0002\u0002\u0002",
    "O[\u0005\u0010\t\u0002P[\u0005\"\u0012\u0002Q[\u0005$\u0013\u0002R[",
    "\u0005&\u0014\u0002S[\u0005(\u0015\u0002T[\u0005*\u0016\u0002U[\u0005",
    ",\u0017\u0002V[\u0005.\u0018\u0002W[\u00050\u0019\u0002X[\u00052\u001a",
    "\u0002Y[\u00054\u001b\u0002ZO\u0003\u0002\u0002\u0002ZP\u0003\u0002",
    "\u0002\u0002ZQ\u0003\u0002\u0002\u0002ZR\u0003\u0002\u0002\u0002ZS\u0003",
    "\u0002\u0002\u0002ZT\u0003\u0002\u0002\u0002ZU\u0003\u0002\u0002\u0002",
    "ZV\u0003\u0002\u0002\u0002ZW\u0003\u0002\u0002\u0002ZX\u0003\u0002\u0002",
    "\u0002ZY\u0003\u0002\u0002\u0002[\r\u0003\u0002\u0002\u0002\\_\u0005",
    "6\u001c\u0002]_\u00058\u001d\u0002^\\\u0003\u0002\u0002\u0002^]\u0003",
    "\u0002\u0002\u0002_\u000f\u0003\u0002\u0002\u0002`a\u0007I\u0002\u0002",
    "ab\u0007J\u0002\u0002bc\u0005\u0012\n\u0002cd\u0007\u0126\u0002\u0002",
    "di\u0005\u0014\u000b\u0002ef\u0007\u0128\u0002\u0002fh\u0005\u0014\u000b",
    "\u0002ge\u0003\u0002\u0002\u0002hk\u0003\u0002\u0002\u0002ig\u0003\u0002",
    "\u0002\u0002ij\u0003\u0002\u0002\u0002jl\u0003\u0002\u0002\u0002ki\u0003",
    "\u0002\u0002\u0002ln\u0007\u0127\u0002\u0002mo\u0005\u001a\u000e\u0002",
    "nm\u0003\u0002\u0002\u0002no\u0003\u0002\u0002\u0002op\u0003\u0002\u0002",
    "\u0002pq\u0007G\u0002\u0002qr\u0007\u0126\u0002\u0002rw\u0005 \u0011",
    "\u0002st\u0007\u0128\u0002\u0002tv\u0005 \u0011\u0002us\u0003\u0002",
    "\u0002\u0002vy\u0003\u0002\u0002\u0002wu\u0003\u0002\u0002\u0002wx\u0003",
    "\u0002\u0002\u0002xz\u0003\u0002\u0002\u0002yw\u0003\u0002\u0002\u0002",
    "z{\u0007\u0127\u0002\u0002{\u0011\u0003\u0002\u0002\u0002|\u0080\u0007",
    "\u0105\u0002\u0002}\u007f\u0007\u0104\u0002\u0002~}\u0003\u0002\u0002",
    "\u0002\u007f\u0082\u0003\u0002\u0002\u0002\u0080\u0081\u0003\u0002\u0002",
    "\u0002\u0080~\u0003\u0002\u0002\u0002\u0081\u0013\u0003\u0002\u0002",
    "\u0002\u0082\u0080\u0003\u0002\u0002\u0002\u0083\u0084\u0005\u0016\f",
    "\u0002\u0084\u0085\u0005\u0018\r\u0002\u0085\u0015\u0003\u0002\u0002",
    "\u0002\u0086\u0087\u0007\u0105\u0002\u0002\u0087\u0017\u0003\u0002\u0002",
    "\u0002\u0088\u0089\t\u0002\u0002\u0002\u0089\u0019\u0003\u0002\u0002",
    "\u0002\u008a\u008b\u0007\u00cf\u0002\u0002\u008b\u008c\u0007\u0010\u0002",
    "\u0002\u008c\u008d\u0005\u001c\u000f\u0002\u008d\u001b\u0003\u0002\u0002",
    "\u0002\u008e\u0093\u0005\u001e\u0010\u0002\u008f\u0090\u0007\u0128\u0002",
    "\u0002\u0090\u0092\u0005\u001e\u0010\u0002\u0091\u008f\u0003\u0002\u0002",
    "\u0002\u0092\u0095\u0003\u0002\u0002\u0002\u0093\u0091\u0003\u0002\u0002",
    "\u0002\u0093\u0094\u0003\u0002\u0002\u0002\u0094\u001d\u0003\u0002\u0002",
    "\u0002\u0095\u0093\u0003\u0002\u0002\u0002\u0096\u0097\u0007\u0105\u0002",
    "\u0002\u0097\u001f\u0003\u0002\u0002\u0002\u0098\u0099\u0007\u0103\u0002",
    "\u0002\u0099\u009a\u0007\u011d\u0002\u0002\u009a\u009b\u0007\u0103\u0002",
    "\u0002\u009b!\u0003\u0002\u0002\u0002\u009c\u009d\u0003\u0002\u0002",
    "\u0002\u009d#\u0003\u0002\u0002\u0002\u009e\u009f\u0003\u0002\u0002",
    "\u0002\u009f%\u0003\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002\u0002",
    "\u0002\u00a1\'\u0003\u0002\u0002\u0002\u00a2\u00a3\u0003\u0002\u0002",
    "\u0002\u00a3)\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002",
    "\u0002\u00a5+\u0003\u0002\u0002\u0002\u00a6\u00a7\u0003\u0002\u0002",
    "\u0002\u00a7-\u0003\u0002\u0002\u0002\u00a8\u00a9\u0003\u0002\u0002",
    "\u0002\u00a9/\u0003\u0002\u0002\u0002\u00aa\u00ab\u0003\u0002\u0002",
    "\u0002\u00ab1\u0003\u0002\u0002\u0002\u00ac\u00ad\u0003\u0002\u0002",
    "\u0002\u00ad3\u0003\u0002\u0002\u0002\u00ae\u00af\u0003\u0002\u0002",
    "\u0002\u00af5\u0003\u0002\u0002\u0002\u00b0\u00b1\u0003\u0002\u0002",
    "\u0002\u00b17\u0003\u0002\u0002\u0002\u00b2\u00b3\u0003\u0002\u0002",
    "\u0002\u00b39\u0003\u0002\u0002\u0002\fDFKZ^inw\u0080\u0093"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, "'SELECT'", "'FROM'", 
                     "'ADD'", "'AS'", "'ALL'", "'ANY'", "'DISTINCT'", "'WHERE'", 
                     "'GROUP'", "'BY'", "'GROUPING'", "'SETS'", "'CUBE'", 
                     "'ROLLUP'", "'ORDER'", "'HAVING'", "'LIMIT'", "'AT'", 
                     "'OR'", "'AND'", "'IN'", "'NOT'", "'NO'", "'EXISTS'", 
                     "'BETWEEN'", "'LIKE'", "'RLIKE'", "'IS'", "'TRUE'", 
                     "'FALSE'", "'NULLS'", "'ASC'", "'DESC'", "'FOR'", "'INTERVAL'", 
                     "'CASE'", "'WHEN'", "'THEN'", "'ELSE'", "'END'", "'JOIN'", 
                     "'CROSS'", "'OUTER'", "'INNER'", "'LEFT'", "'SEMI'", 
                     "'RIGHT'", "'FULL'", "'NATURAL'", "'ON'", "'PIVOT'", 
                     "'LATERAL'", "'WINDOW'", "'OVER'", "'PARTITION'", "'RANGE'", 
                     "'ROWS'", "'UNBOUNDED'", "'PRECEDING'", "'FOLLOWING'", 
                     "'CURRENT'", "'FIRST'", "'AFTER'", "'LAST'", "'WITH'", 
                     "'VALUES'", "'CREATE'", "'TABLE'", "'DIRECTORY'", "'VIEW'", 
                     "'REPLACE'", "'INSERT'", "'DELETE'", "'INTO'", "'DESCRIBE'", 
                     "'EXPLAIN'", "'FORMAT'", "'LOGICAL'", "'CODEGEN'", 
                     "'COST'", "'CAST'", "'SHOW'", "'TABLES'", "'COLUMNS'", 
                     "'COLUMN'", "'USE'", "'PARTITIONS'", "'FUNCTIONS'", 
                     "'DROP'", "'UNION'", "'EXCEPT'", "'SETMINUS'", "'INTERSECT'", 
                     "'TO'", "'TABLESAMPLE'", "'STRATIFY'", "'ALTER'", "'RENAME'", 
                     "'STRUCT'", "'COMMENT'", "'SET'", "'RESET'", "'DATA'", 
                     "'START'", "'TRANSACTION'", "'COMMIT'", "'ROLLBACK'", 
                     "'MACRO'", "'IGNORE'", "'BOTH'", "'LEADING'", "'TRAILING'", 
                     "'IF'", "'POSITION'", "'EXTRACT'", "'EQ'", "'NSEQ'", 
                     "'NEQ'", "'NEQJ'", "'LT'", "'LTE'", "'GT'", "'GTE'", 
                     "'PLUS'", "'MINUS'", "'ASTERISK'", "'SLASH'", "'PERCENT'", 
                     "'DIV'", "'TILDE'", "'AMPERSAND'", "'PIPE'", "'CONCAT_PIPE'", 
                     "'HAT'", "'PERCENTLIT'", "'BUCKET'", "'OUT'", "'OF'", 
                     "'SORT'", "'CLUSTER'", "'DISTRIBUTE'", "'OVERWRITE'", 
                     "'TRANSFORM'", "'REDUCE'", "'USING'", "'SERDE'", "'SERDEPROPERTIES'", 
                     "'RECORDREADER'", "'RECORDWRITER'", "'DELIMITED'", 
                     "'FIELDS'", "'TERMINATED'", "'COLLECTION'", "'ITEMS'", 
                     "'KEYS'", "'ESCAPED'", "'LINES'", "'SEPARATED'", "'FUNCTION'", 
                     "'EXTENDED'", "'REFRESH'", "'CLEAR'", "'CACHE'", "'UNCACHE'", 
                     "'LAZY'", "'FORMATTED'", "'GLOBAL'", "'TEMPORARY'", 
                     "'OPTIONS'", "'UNSET'", "'TBLPROPERTIES'", "'DBPROPERTIES'", 
                     "'BUCKETS'", "'SKEWED'", "'STORED'", "'DIRECTORIES'", 
                     "'LOCATION'", "'EXCHANGE'", "'ARCHIVE'", "'UNARCHIVE'", 
                     "'FILEFORMAT'", "'TOUCH'", "'COMPACT'", "'CONCATENATE'", 
                     "'CHANGE'", "'CASCADE'", "'RESTRICT'", "'CLUSTERED'", 
                     "'SORTED'", "'PURGE'", "'INPUTFORMAT'", "'OUTPUTFORMAT'", 
                     "'DATABASE'", "'DATABASES'", "'DFS'", "'TRUNCATE'", 
                     "'ANALYZE'", "'COMPUTE'", "'LIST'", "'STATISTICS'", 
                     "'PARTITIONED'", "'EXTERNAL'", "'DEFINED'", "'REVOKE'", 
                     "'GRANT'", "'LOCK'", "'UNLOCK'", "'MSCK'", "'REPAIR'", 
                     "'RECOVER'", "'EXPORT'", "'IMPORT'", "'LOAD'", "'ROLE'", 
                     "'ROLES'", "'COMPACTIONS'", "'PRINCIPALS'", "'TRANSACTIONS'", 
                     "'INDEX'", "'INDEXES'", "'LOCKS'", "'OPTION'", "'ANTI'", 
                     "'LOCAL'", "'INPATH'", "'WATERMARK'", "'UNNEST'", "'MATCH_RECOGNIZE'", 
                     "'MEASURES'", "'ONE'", "'PER'", "'MATCH'", "'SKIP1'", 
                     "'NEXT'", "'PAST'", "'PATTERN'", "'WITHIN'", "'DEFINE'", 
                     "'BIGINT_LITERAL'", "'SMALLINT_LITERAL'", "'TINYINT_LITERAL'", 
                     "'INTEGER_VALUE'", "'DECIMAL_VALUE'", "'DOUBLE_LITERAL'", 
                     "'BIGDECIMAL_LITERAL'", "'IDENTIFIER'", "'BACKQUOTED_IDENTIFIER'", 
                     "'SIMPLE_COMMENT'", "'BRACKETED_EMPTY_COMMENT'", "'BRACKETED_COMMENT'", 
                     "'WS'", "'UNRECOGNIZED'", null, null, null, "'STRING'", 
                     "'ARRAY'", "'MAP'", "'CHAR'", "'VARCHAR'", "'BINARY'", 
                     "'VARBINARY'", "'BYTES'", "'DECIMAL'", "'TINYINT'", 
                     "'SMALLINT'", "'INT'", "'BIGINT'", "'FLOAT'", "'DOUBLE'", 
                     "'DATE'", "'TIME'", "'TIMESTAMP'", "'MULTISET'", "'BOOLEAN'", 
                     "'RAW'", "'ROW'", "'NULL'", "'='", "'>'", "'<'", "'!'", 
                     "'~'", "'|'", "'&'", "'^'", "'.'", "'('", "')'", "','", 
                     "';'", "'@'", "'0'", "'1'", "'2'", "'''", "'\"'", "'`'", 
                     "':'" ];

var symbolicNames = [ null, "SPACE", "SPEC_MYSQL_COMMENT", "COMMENT_INPUT", 
                      "LINE_COMMENT", "SELECT", "FROM", "ADD", "AS", "ALL", 
                      "ANY", "DISTINCT", "WHERE", "GROUP", "BY", "GROUPING", 
                      "SETS", "CUBE", "ROLLUP", "ORDER", "HAVING", "LIMIT", 
                      "AT", "OR", "AND", "IN", "NOT", "NO", "EXISTS", "BETWEEN", 
                      "LIKE", "RLIKE", "IS", "TRUE", "FALSE", "NULLS", "ASC", 
                      "DESC", "FOR", "INTERVAL", "CASE", "WHEN", "THEN", 
                      "ELSE", "END", "JOIN", "CROSS", "OUTER", "INNER", 
                      "LEFT", "SEMI", "RIGHT", "FULL", "NATURAL", "ON", 
                      "PIVOT", "LATERAL", "WINDOW", "OVER", "PARTITION", 
                      "RANGE", "ROWS", "UNBOUNDED", "PRECEDING", "FOLLOWING", 
                      "CURRENT", "FIRST", "AFTER", "LAST", "WITH", "VALUES", 
                      "CREATE", "TABLE", "DIRECTORY", "VIEW", "REPLACE", 
                      "INSERT", "DELETE", "INTO", "DESCRIBE", "EXPLAIN", 
                      "FORMAT", "LOGICAL", "CODEGEN", "COST", "CAST", "SHOW", 
                      "TABLES", "COLUMNS", "COLUMN", "USE", "PARTITIONS", 
                      "FUNCTIONS", "DROP", "UNION", "EXCEPT", "SETMINUS", 
                      "INTERSECT", "TO", "TABLESAMPLE", "STRATIFY", "ALTER", 
                      "RENAME", "STRUCT", "COMMENT", "SET", "RESET", "DATA", 
                      "START", "TRANSACTION", "COMMIT", "ROLLBACK", "MACRO", 
                      "IGNORE", "BOTH", "LEADING", "TRAILING", "IF", "POSITION", 
                      "EXTRACT", "EQ", "NSEQ", "NEQ", "NEQJ", "LT", "LTE", 
                      "GT", "GTE", "PLUS", "MINUS", "ASTERISK", "SLASH", 
                      "PERCENT", "DIV", "TILDE", "AMPERSAND", "PIPE", "CONCAT_PIPE", 
                      "HAT", "PERCENTLIT", "BUCKET", "OUT", "OF", "SORT", 
                      "CLUSTER", "DISTRIBUTE", "OVERWRITE", "TRANSFORM", 
                      "REDUCE", "USING", "SERDE", "SERDEPROPERTIES", "RECORDREADER", 
                      "RECORDWRITER", "DELIMITED", "FIELDS", "TERMINATED", 
                      "COLLECTION", "ITEMS", "KEYS", "ESCAPED", "LINES", 
                      "SEPARATED", "FUNCTION", "EXTENDED", "REFRESH", "CLEAR", 
                      "CACHE", "UNCACHE", "LAZY", "FORMATTED", "GLOBAL", 
                      "TEMPORARY", "OPTIONS", "UNSET", "TBLPROPERTIES", 
                      "DBPROPERTIES", "BUCKETS", "SKEWED", "STORED", "DIRECTORIES", 
                      "LOCATION", "EXCHANGE", "ARCHIVE", "UNARCHIVE", "FILEFORMAT", 
                      "TOUCH", "COMPACT", "CONCATENATE", "CHANGE", "CASCADE", 
                      "RESTRICT", "CLUSTERED", "SORTED", "PURGE", "INPUTFORMAT", 
                      "OUTPUTFORMAT", "DATABASE", "DATABASES", "DFS", "TRUNCATE", 
                      "ANALYZE", "COMPUTE", "LIST", "STATISTICS", "PARTITIONED", 
                      "EXTERNAL", "DEFINED", "REVOKE", "GRANT", "LOCK", 
                      "UNLOCK", "MSCK", "REPAIR", "RECOVER", "EXPORT", "IMPORT", 
                      "LOAD", "ROLE", "ROLES", "COMPACTIONS", "PRINCIPALS", 
                      "TRANSACTIONS", "INDEX", "INDEXES", "LOCKS", "OPTION", 
                      "ANTI", "LOCAL", "INPATH", "WATERMARK", "UNNEST", 
                      "MATCH_RECOGNIZE", "MEASURES", "ONE", "PER", "MATCH", 
                      "SKIP1", "NEXT", "PAST", "PATTERN", "WITHIN", "DEFINE", 
                      "BIGINT_LITERAL", "SMALLINT_LITERAL", "TINYINT_LITERAL", 
                      "INTEGER_VALUE", "DECIMAL_VALUE", "DOUBLE_LITERAL", 
                      "BIGDECIMAL_LITERAL", "IDENTIFIER", "BACKQUOTED_IDENTIFIER", 
                      "SIMPLE_COMMENT", "BRACKETED_EMPTY_COMMENT", "BRACKETED_COMMENT", 
                      "WS", "UNRECOGNIZED", "REVERSE_QUOTE_ID", "DOT_ID", 
                      "ID", "STRING", "ARRAY", "MAP", "CHAR", "VARCHAR", 
                      "BINARY", "VARBINARY", "BYTES", "DECIMAL", "TINYINT", 
                      "SMALLINT", "INT", "BIGINT", "FLOAT", "DOUBLE", "DATE", 
                      "TIME", "TIMESTAMP", "MULTISET", "BOOLEAN", "RAW", 
                      "ROW", "NULL", "EQUAL_SYMBOL", "GREATER_SYMBOL", "LESS_SYMBOL", 
                      "EXCLAMATION_SYMBOL", "BIT_NOT_OP", "BIT_OR_OP", "BIT_AND_OP", 
                      "BIT_XOR_OP", "DOT", "LR_BRACKET", "RR_BRACKET", "COMMA", 
                      "SEMICOLON", "AT_SIGN", "ZERO_DECIMAL", "ONE_DECIMAL", 
                      "TWO_DECIMAL", "SINGLE_QUOTE_SYMB", "DOUBLE_QUOTE_SYMB", 
                      "REVERSE_QUOTE_SYMB", "COLON_SYMB" ];

var ruleNames =  [ "program", "statement", "sqlStatements", "sqlStatement", 
                   "emptyStatement", "ddlStatement", "dmlStatement", "createTable", 
                   "tableName", "columnOptionDefinition", "columnName", 
                   "columnType", "partitionDefinition", "partitionColumnDefinition", 
                   "partitionColumnName", "withOptionDefinition", "createDatabase", 
                   "createView", "createFunction", "alterTable", "alterDatabase", 
                   "alterFunction", "dropTable", "dropDatabase", "dropView", 
                   "dropFunction", "selectStatement", "insertStatement" ];

function FlinkSqlParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

FlinkSqlParser.prototype = Object.create(antlr4.Parser.prototype);
FlinkSqlParser.prototype.constructor = FlinkSqlParser;

Object.defineProperty(FlinkSqlParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

FlinkSqlParser.EOF = antlr4.Token.EOF;
FlinkSqlParser.SPACE = 1;
FlinkSqlParser.SPEC_MYSQL_COMMENT = 2;
FlinkSqlParser.COMMENT_INPUT = 3;
FlinkSqlParser.LINE_COMMENT = 4;
FlinkSqlParser.SELECT = 5;
FlinkSqlParser.FROM = 6;
FlinkSqlParser.ADD = 7;
FlinkSqlParser.AS = 8;
FlinkSqlParser.ALL = 9;
FlinkSqlParser.ANY = 10;
FlinkSqlParser.DISTINCT = 11;
FlinkSqlParser.WHERE = 12;
FlinkSqlParser.GROUP = 13;
FlinkSqlParser.BY = 14;
FlinkSqlParser.GROUPING = 15;
FlinkSqlParser.SETS = 16;
FlinkSqlParser.CUBE = 17;
FlinkSqlParser.ROLLUP = 18;
FlinkSqlParser.ORDER = 19;
FlinkSqlParser.HAVING = 20;
FlinkSqlParser.LIMIT = 21;
FlinkSqlParser.AT = 22;
FlinkSqlParser.OR = 23;
FlinkSqlParser.AND = 24;
FlinkSqlParser.IN = 25;
FlinkSqlParser.NOT = 26;
FlinkSqlParser.NO = 27;
FlinkSqlParser.EXISTS = 28;
FlinkSqlParser.BETWEEN = 29;
FlinkSqlParser.LIKE = 30;
FlinkSqlParser.RLIKE = 31;
FlinkSqlParser.IS = 32;
FlinkSqlParser.TRUE = 33;
FlinkSqlParser.FALSE = 34;
FlinkSqlParser.NULLS = 35;
FlinkSqlParser.ASC = 36;
FlinkSqlParser.DESC = 37;
FlinkSqlParser.FOR = 38;
FlinkSqlParser.INTERVAL = 39;
FlinkSqlParser.CASE = 40;
FlinkSqlParser.WHEN = 41;
FlinkSqlParser.THEN = 42;
FlinkSqlParser.ELSE = 43;
FlinkSqlParser.END = 44;
FlinkSqlParser.JOIN = 45;
FlinkSqlParser.CROSS = 46;
FlinkSqlParser.OUTER = 47;
FlinkSqlParser.INNER = 48;
FlinkSqlParser.LEFT = 49;
FlinkSqlParser.SEMI = 50;
FlinkSqlParser.RIGHT = 51;
FlinkSqlParser.FULL = 52;
FlinkSqlParser.NATURAL = 53;
FlinkSqlParser.ON = 54;
FlinkSqlParser.PIVOT = 55;
FlinkSqlParser.LATERAL = 56;
FlinkSqlParser.WINDOW = 57;
FlinkSqlParser.OVER = 58;
FlinkSqlParser.PARTITION = 59;
FlinkSqlParser.RANGE = 60;
FlinkSqlParser.ROWS = 61;
FlinkSqlParser.UNBOUNDED = 62;
FlinkSqlParser.PRECEDING = 63;
FlinkSqlParser.FOLLOWING = 64;
FlinkSqlParser.CURRENT = 65;
FlinkSqlParser.FIRST = 66;
FlinkSqlParser.AFTER = 67;
FlinkSqlParser.LAST = 68;
FlinkSqlParser.WITH = 69;
FlinkSqlParser.VALUES = 70;
FlinkSqlParser.CREATE = 71;
FlinkSqlParser.TABLE = 72;
FlinkSqlParser.DIRECTORY = 73;
FlinkSqlParser.VIEW = 74;
FlinkSqlParser.REPLACE = 75;
FlinkSqlParser.INSERT = 76;
FlinkSqlParser.DELETE = 77;
FlinkSqlParser.INTO = 78;
FlinkSqlParser.DESCRIBE = 79;
FlinkSqlParser.EXPLAIN = 80;
FlinkSqlParser.FORMAT = 81;
FlinkSqlParser.LOGICAL = 82;
FlinkSqlParser.CODEGEN = 83;
FlinkSqlParser.COST = 84;
FlinkSqlParser.CAST = 85;
FlinkSqlParser.SHOW = 86;
FlinkSqlParser.TABLES = 87;
FlinkSqlParser.COLUMNS = 88;
FlinkSqlParser.COLUMN = 89;
FlinkSqlParser.USE = 90;
FlinkSqlParser.PARTITIONS = 91;
FlinkSqlParser.FUNCTIONS = 92;
FlinkSqlParser.DROP = 93;
FlinkSqlParser.UNION = 94;
FlinkSqlParser.EXCEPT = 95;
FlinkSqlParser.SETMINUS = 96;
FlinkSqlParser.INTERSECT = 97;
FlinkSqlParser.TO = 98;
FlinkSqlParser.TABLESAMPLE = 99;
FlinkSqlParser.STRATIFY = 100;
FlinkSqlParser.ALTER = 101;
FlinkSqlParser.RENAME = 102;
FlinkSqlParser.STRUCT = 103;
FlinkSqlParser.COMMENT = 104;
FlinkSqlParser.SET = 105;
FlinkSqlParser.RESET = 106;
FlinkSqlParser.DATA = 107;
FlinkSqlParser.START = 108;
FlinkSqlParser.TRANSACTION = 109;
FlinkSqlParser.COMMIT = 110;
FlinkSqlParser.ROLLBACK = 111;
FlinkSqlParser.MACRO = 112;
FlinkSqlParser.IGNORE = 113;
FlinkSqlParser.BOTH = 114;
FlinkSqlParser.LEADING = 115;
FlinkSqlParser.TRAILING = 116;
FlinkSqlParser.IF = 117;
FlinkSqlParser.POSITION = 118;
FlinkSqlParser.EXTRACT = 119;
FlinkSqlParser.EQ = 120;
FlinkSqlParser.NSEQ = 121;
FlinkSqlParser.NEQ = 122;
FlinkSqlParser.NEQJ = 123;
FlinkSqlParser.LT = 124;
FlinkSqlParser.LTE = 125;
FlinkSqlParser.GT = 126;
FlinkSqlParser.GTE = 127;
FlinkSqlParser.PLUS = 128;
FlinkSqlParser.MINUS = 129;
FlinkSqlParser.ASTERISK = 130;
FlinkSqlParser.SLASH = 131;
FlinkSqlParser.PERCENT = 132;
FlinkSqlParser.DIV = 133;
FlinkSqlParser.TILDE = 134;
FlinkSqlParser.AMPERSAND = 135;
FlinkSqlParser.PIPE = 136;
FlinkSqlParser.CONCAT_PIPE = 137;
FlinkSqlParser.HAT = 138;
FlinkSqlParser.PERCENTLIT = 139;
FlinkSqlParser.BUCKET = 140;
FlinkSqlParser.OUT = 141;
FlinkSqlParser.OF = 142;
FlinkSqlParser.SORT = 143;
FlinkSqlParser.CLUSTER = 144;
FlinkSqlParser.DISTRIBUTE = 145;
FlinkSqlParser.OVERWRITE = 146;
FlinkSqlParser.TRANSFORM = 147;
FlinkSqlParser.REDUCE = 148;
FlinkSqlParser.USING = 149;
FlinkSqlParser.SERDE = 150;
FlinkSqlParser.SERDEPROPERTIES = 151;
FlinkSqlParser.RECORDREADER = 152;
FlinkSqlParser.RECORDWRITER = 153;
FlinkSqlParser.DELIMITED = 154;
FlinkSqlParser.FIELDS = 155;
FlinkSqlParser.TERMINATED = 156;
FlinkSqlParser.COLLECTION = 157;
FlinkSqlParser.ITEMS = 158;
FlinkSqlParser.KEYS = 159;
FlinkSqlParser.ESCAPED = 160;
FlinkSqlParser.LINES = 161;
FlinkSqlParser.SEPARATED = 162;
FlinkSqlParser.FUNCTION = 163;
FlinkSqlParser.EXTENDED = 164;
FlinkSqlParser.REFRESH = 165;
FlinkSqlParser.CLEAR = 166;
FlinkSqlParser.CACHE = 167;
FlinkSqlParser.UNCACHE = 168;
FlinkSqlParser.LAZY = 169;
FlinkSqlParser.FORMATTED = 170;
FlinkSqlParser.GLOBAL = 171;
FlinkSqlParser.TEMPORARY = 172;
FlinkSqlParser.OPTIONS = 173;
FlinkSqlParser.UNSET = 174;
FlinkSqlParser.TBLPROPERTIES = 175;
FlinkSqlParser.DBPROPERTIES = 176;
FlinkSqlParser.BUCKETS = 177;
FlinkSqlParser.SKEWED = 178;
FlinkSqlParser.STORED = 179;
FlinkSqlParser.DIRECTORIES = 180;
FlinkSqlParser.LOCATION = 181;
FlinkSqlParser.EXCHANGE = 182;
FlinkSqlParser.ARCHIVE = 183;
FlinkSqlParser.UNARCHIVE = 184;
FlinkSqlParser.FILEFORMAT = 185;
FlinkSqlParser.TOUCH = 186;
FlinkSqlParser.COMPACT = 187;
FlinkSqlParser.CONCATENATE = 188;
FlinkSqlParser.CHANGE = 189;
FlinkSqlParser.CASCADE = 190;
FlinkSqlParser.RESTRICT = 191;
FlinkSqlParser.CLUSTERED = 192;
FlinkSqlParser.SORTED = 193;
FlinkSqlParser.PURGE = 194;
FlinkSqlParser.INPUTFORMAT = 195;
FlinkSqlParser.OUTPUTFORMAT = 196;
FlinkSqlParser.DATABASE = 197;
FlinkSqlParser.DATABASES = 198;
FlinkSqlParser.DFS = 199;
FlinkSqlParser.TRUNCATE = 200;
FlinkSqlParser.ANALYZE = 201;
FlinkSqlParser.COMPUTE = 202;
FlinkSqlParser.LIST = 203;
FlinkSqlParser.STATISTICS = 204;
FlinkSqlParser.PARTITIONED = 205;
FlinkSqlParser.EXTERNAL = 206;
FlinkSqlParser.DEFINED = 207;
FlinkSqlParser.REVOKE = 208;
FlinkSqlParser.GRANT = 209;
FlinkSqlParser.LOCK = 210;
FlinkSqlParser.UNLOCK = 211;
FlinkSqlParser.MSCK = 212;
FlinkSqlParser.REPAIR = 213;
FlinkSqlParser.RECOVER = 214;
FlinkSqlParser.EXPORT = 215;
FlinkSqlParser.IMPORT = 216;
FlinkSqlParser.LOAD = 217;
FlinkSqlParser.ROLE = 218;
FlinkSqlParser.ROLES = 219;
FlinkSqlParser.COMPACTIONS = 220;
FlinkSqlParser.PRINCIPALS = 221;
FlinkSqlParser.TRANSACTIONS = 222;
FlinkSqlParser.INDEX = 223;
FlinkSqlParser.INDEXES = 224;
FlinkSqlParser.LOCKS = 225;
FlinkSqlParser.OPTION = 226;
FlinkSqlParser.ANTI = 227;
FlinkSqlParser.LOCAL = 228;
FlinkSqlParser.INPATH = 229;
FlinkSqlParser.WATERMARK = 230;
FlinkSqlParser.UNNEST = 231;
FlinkSqlParser.MATCH_RECOGNIZE = 232;
FlinkSqlParser.MEASURES = 233;
FlinkSqlParser.ONE = 234;
FlinkSqlParser.PER = 235;
FlinkSqlParser.MATCH = 236;
FlinkSqlParser.SKIP1 = 237;
FlinkSqlParser.NEXT = 238;
FlinkSqlParser.PAST = 239;
FlinkSqlParser.PATTERN = 240;
FlinkSqlParser.WITHIN = 241;
FlinkSqlParser.DEFINE = 242;
FlinkSqlParser.BIGINT_LITERAL = 243;
FlinkSqlParser.SMALLINT_LITERAL = 244;
FlinkSqlParser.TINYINT_LITERAL = 245;
FlinkSqlParser.INTEGER_VALUE = 246;
FlinkSqlParser.DECIMAL_VALUE = 247;
FlinkSqlParser.DOUBLE_LITERAL = 248;
FlinkSqlParser.BIGDECIMAL_LITERAL = 249;
FlinkSqlParser.IDENTIFIER = 250;
FlinkSqlParser.BACKQUOTED_IDENTIFIER = 251;
FlinkSqlParser.SIMPLE_COMMENT = 252;
FlinkSqlParser.BRACKETED_EMPTY_COMMENT = 253;
FlinkSqlParser.BRACKETED_COMMENT = 254;
FlinkSqlParser.WS = 255;
FlinkSqlParser.UNRECOGNIZED = 256;
FlinkSqlParser.REVERSE_QUOTE_ID = 257;
FlinkSqlParser.DOT_ID = 258;
FlinkSqlParser.ID = 259;
FlinkSqlParser.STRING = 260;
FlinkSqlParser.ARRAY = 261;
FlinkSqlParser.MAP = 262;
FlinkSqlParser.CHAR = 263;
FlinkSqlParser.VARCHAR = 264;
FlinkSqlParser.BINARY = 265;
FlinkSqlParser.VARBINARY = 266;
FlinkSqlParser.BYTES = 267;
FlinkSqlParser.DECIMAL = 268;
FlinkSqlParser.TINYINT = 269;
FlinkSqlParser.SMALLINT = 270;
FlinkSqlParser.INT = 271;
FlinkSqlParser.BIGINT = 272;
FlinkSqlParser.FLOAT = 273;
FlinkSqlParser.DOUBLE = 274;
FlinkSqlParser.DATE = 275;
FlinkSqlParser.TIME = 276;
FlinkSqlParser.TIMESTAMP = 277;
FlinkSqlParser.MULTISET = 278;
FlinkSqlParser.BOOLEAN = 279;
FlinkSqlParser.RAW = 280;
FlinkSqlParser.ROW = 281;
FlinkSqlParser.NULL = 282;
FlinkSqlParser.EQUAL_SYMBOL = 283;
FlinkSqlParser.GREATER_SYMBOL = 284;
FlinkSqlParser.LESS_SYMBOL = 285;
FlinkSqlParser.EXCLAMATION_SYMBOL = 286;
FlinkSqlParser.BIT_NOT_OP = 287;
FlinkSqlParser.BIT_OR_OP = 288;
FlinkSqlParser.BIT_AND_OP = 289;
FlinkSqlParser.BIT_XOR_OP = 290;
FlinkSqlParser.DOT = 291;
FlinkSqlParser.LR_BRACKET = 292;
FlinkSqlParser.RR_BRACKET = 293;
FlinkSqlParser.COMMA = 294;
FlinkSqlParser.SEMICOLON = 295;
FlinkSqlParser.AT_SIGN = 296;
FlinkSqlParser.ZERO_DECIMAL = 297;
FlinkSqlParser.ONE_DECIMAL = 298;
FlinkSqlParser.TWO_DECIMAL = 299;
FlinkSqlParser.SINGLE_QUOTE_SYMB = 300;
FlinkSqlParser.DOUBLE_QUOTE_SYMB = 301;
FlinkSqlParser.REVERSE_QUOTE_SYMB = 302;
FlinkSqlParser.COLON_SYMB = 303;

FlinkSqlParser.RULE_program = 0;
FlinkSqlParser.RULE_statement = 1;
FlinkSqlParser.RULE_sqlStatements = 2;
FlinkSqlParser.RULE_sqlStatement = 3;
FlinkSqlParser.RULE_emptyStatement = 4;
FlinkSqlParser.RULE_ddlStatement = 5;
FlinkSqlParser.RULE_dmlStatement = 6;
FlinkSqlParser.RULE_createTable = 7;
FlinkSqlParser.RULE_tableName = 8;
FlinkSqlParser.RULE_columnOptionDefinition = 9;
FlinkSqlParser.RULE_columnName = 10;
FlinkSqlParser.RULE_columnType = 11;
FlinkSqlParser.RULE_partitionDefinition = 12;
FlinkSqlParser.RULE_partitionColumnDefinition = 13;
FlinkSqlParser.RULE_partitionColumnName = 14;
FlinkSqlParser.RULE_withOptionDefinition = 15;
FlinkSqlParser.RULE_createDatabase = 16;
FlinkSqlParser.RULE_createView = 17;
FlinkSqlParser.RULE_createFunction = 18;
FlinkSqlParser.RULE_alterTable = 19;
FlinkSqlParser.RULE_alterDatabase = 20;
FlinkSqlParser.RULE_alterFunction = 21;
FlinkSqlParser.RULE_dropTable = 22;
FlinkSqlParser.RULE_dropDatabase = 23;
FlinkSqlParser.RULE_dropView = 24;
FlinkSqlParser.RULE_dropFunction = 25;
FlinkSqlParser.RULE_selectStatement = 26;
FlinkSqlParser.RULE_insertStatement = 27;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

ProgramContext.prototype.EOF = function() {
    return this.getToken(FlinkSqlParser.EOF, 0);
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitProgram(this);
	}
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.ProgramContext = ProgramContext;

FlinkSqlParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, FlinkSqlParser.RULE_program);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 56;
        this.statement();
        this.state = 57;
        this.match(FlinkSqlParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.sqlStatements = function() {
    return this.getTypedRuleContext(SqlStatementsContext,0);
};

StatementContext.prototype.EOF = function() {
    return this.getToken(FlinkSqlParser.EOF, 0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitStatement(this);
	}
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.StatementContext = StatementContext;

FlinkSqlParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, FlinkSqlParser.RULE_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 59;
        this.sqlStatements();
        this.state = 60;
        this.match(FlinkSqlParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SqlStatementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_sqlStatements;
    return this;
}

SqlStatementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SqlStatementsContext.prototype.constructor = SqlStatementsContext;

SqlStatementsContext.prototype.sqlStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SqlStatementContext);
    } else {
        return this.getTypedRuleContext(SqlStatementContext,i);
    }
};

SqlStatementsContext.prototype.SEMICOLON = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FlinkSqlParser.SEMICOLON);
    } else {
        return this.getToken(FlinkSqlParser.SEMICOLON, i);
    }
};


SqlStatementsContext.prototype.emptyStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EmptyStatementContext);
    } else {
        return this.getTypedRuleContext(EmptyStatementContext,i);
    }
};

SqlStatementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterSqlStatements(this);
	}
};

SqlStatementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitSqlStatements(this);
	}
};

SqlStatementsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitSqlStatements(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.SqlStatementsContext = SqlStatementsContext;

FlinkSqlParser.prototype.sqlStatements = function() {

    var localctx = new SqlStatementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, FlinkSqlParser.RULE_sqlStatements);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 68;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FlinkSqlParser.CREATE || _la===FlinkSqlParser.SEMICOLON) {
            this.state = 66;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
            switch(la_) {
            case 1:
                this.state = 62;
                this.sqlStatement();
                this.state = 63;
                this.match(FlinkSqlParser.SEMICOLON);
                break;

            case 2:
                this.state = 65;
                this.emptyStatement();
                break;

            }
            this.state = 70;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SqlStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_sqlStatement;
    return this;
}

SqlStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SqlStatementContext.prototype.constructor = SqlStatementContext;

SqlStatementContext.prototype.ddlStatement = function() {
    return this.getTypedRuleContext(DdlStatementContext,0);
};

SqlStatementContext.prototype.dmlStatement = function() {
    return this.getTypedRuleContext(DmlStatementContext,0);
};

SqlStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterSqlStatement(this);
	}
};

SqlStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitSqlStatement(this);
	}
};

SqlStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitSqlStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.SqlStatementContext = SqlStatementContext;

FlinkSqlParser.prototype.sqlStatement = function() {

    var localctx = new SqlStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, FlinkSqlParser.RULE_sqlStatement);
    try {
        this.state = 73;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 71;
            this.ddlStatement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 72;
            this.dmlStatement();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EmptyStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_emptyStatement;
    return this;
}

EmptyStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EmptyStatementContext.prototype.constructor = EmptyStatementContext;

EmptyStatementContext.prototype.SEMICOLON = function() {
    return this.getToken(FlinkSqlParser.SEMICOLON, 0);
};

EmptyStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterEmptyStatement(this);
	}
};

EmptyStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitEmptyStatement(this);
	}
};

EmptyStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitEmptyStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.EmptyStatementContext = EmptyStatementContext;

FlinkSqlParser.prototype.emptyStatement = function() {

    var localctx = new EmptyStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, FlinkSqlParser.RULE_emptyStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
        this.match(FlinkSqlParser.SEMICOLON);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DdlStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_ddlStatement;
    return this;
}

DdlStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DdlStatementContext.prototype.constructor = DdlStatementContext;

DdlStatementContext.prototype.createTable = function() {
    return this.getTypedRuleContext(CreateTableContext,0);
};

DdlStatementContext.prototype.createDatabase = function() {
    return this.getTypedRuleContext(CreateDatabaseContext,0);
};

DdlStatementContext.prototype.createView = function() {
    return this.getTypedRuleContext(CreateViewContext,0);
};

DdlStatementContext.prototype.createFunction = function() {
    return this.getTypedRuleContext(CreateFunctionContext,0);
};

DdlStatementContext.prototype.alterTable = function() {
    return this.getTypedRuleContext(AlterTableContext,0);
};

DdlStatementContext.prototype.alterDatabase = function() {
    return this.getTypedRuleContext(AlterDatabaseContext,0);
};

DdlStatementContext.prototype.alterFunction = function() {
    return this.getTypedRuleContext(AlterFunctionContext,0);
};

DdlStatementContext.prototype.dropTable = function() {
    return this.getTypedRuleContext(DropTableContext,0);
};

DdlStatementContext.prototype.dropDatabase = function() {
    return this.getTypedRuleContext(DropDatabaseContext,0);
};

DdlStatementContext.prototype.dropView = function() {
    return this.getTypedRuleContext(DropViewContext,0);
};

DdlStatementContext.prototype.dropFunction = function() {
    return this.getTypedRuleContext(DropFunctionContext,0);
};

DdlStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterDdlStatement(this);
	}
};

DdlStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitDdlStatement(this);
	}
};

DdlStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitDdlStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.DdlStatementContext = DdlStatementContext;

FlinkSqlParser.prototype.ddlStatement = function() {

    var localctx = new DdlStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, FlinkSqlParser.RULE_ddlStatement);
    try {
        this.state = 88;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 77;
            this.createTable();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 78;
            this.createDatabase();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 79;
            this.createView();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 80;
            this.createFunction();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 81;
            this.alterTable();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 82;
            this.alterDatabase();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 83;
            this.alterFunction();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 84;
            this.dropTable();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 85;
            this.dropDatabase();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 86;
            this.dropView();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 87;
            this.dropFunction();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DmlStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_dmlStatement;
    return this;
}

DmlStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DmlStatementContext.prototype.constructor = DmlStatementContext;

DmlStatementContext.prototype.selectStatement = function() {
    return this.getTypedRuleContext(SelectStatementContext,0);
};

DmlStatementContext.prototype.insertStatement = function() {
    return this.getTypedRuleContext(InsertStatementContext,0);
};

DmlStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterDmlStatement(this);
	}
};

DmlStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitDmlStatement(this);
	}
};

DmlStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitDmlStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.DmlStatementContext = DmlStatementContext;

FlinkSqlParser.prototype.dmlStatement = function() {

    var localctx = new DmlStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, FlinkSqlParser.RULE_dmlStatement);
    try {
        this.state = 92;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 90;
            this.selectStatement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 91;
            this.insertStatement();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CreateTableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_createTable;
    return this;
}

CreateTableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CreateTableContext.prototype.constructor = CreateTableContext;

CreateTableContext.prototype.CREATE = function() {
    return this.getToken(FlinkSqlParser.CREATE, 0);
};

CreateTableContext.prototype.TABLE = function() {
    return this.getToken(FlinkSqlParser.TABLE, 0);
};

CreateTableContext.prototype.tableName = function() {
    return this.getTypedRuleContext(TableNameContext,0);
};

CreateTableContext.prototype.LR_BRACKET = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FlinkSqlParser.LR_BRACKET);
    } else {
        return this.getToken(FlinkSqlParser.LR_BRACKET, i);
    }
};


CreateTableContext.prototype.columnOptionDefinition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ColumnOptionDefinitionContext);
    } else {
        return this.getTypedRuleContext(ColumnOptionDefinitionContext,i);
    }
};

CreateTableContext.prototype.RR_BRACKET = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FlinkSqlParser.RR_BRACKET);
    } else {
        return this.getToken(FlinkSqlParser.RR_BRACKET, i);
    }
};


CreateTableContext.prototype.WITH = function() {
    return this.getToken(FlinkSqlParser.WITH, 0);
};

CreateTableContext.prototype.withOptionDefinition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WithOptionDefinitionContext);
    } else {
        return this.getTypedRuleContext(WithOptionDefinitionContext,i);
    }
};

CreateTableContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FlinkSqlParser.COMMA);
    } else {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
};


CreateTableContext.prototype.partitionDefinition = function() {
    return this.getTypedRuleContext(PartitionDefinitionContext,0);
};

CreateTableContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterCreateTable(this);
	}
};

CreateTableContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitCreateTable(this);
	}
};

CreateTableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitCreateTable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.CreateTableContext = CreateTableContext;

FlinkSqlParser.prototype.createTable = function() {

    var localctx = new CreateTableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, FlinkSqlParser.RULE_createTable);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 94;
        this.match(FlinkSqlParser.CREATE);
        this.state = 95;
        this.match(FlinkSqlParser.TABLE);
        this.state = 96;
        this.tableName();
        this.state = 97;
        this.match(FlinkSqlParser.LR_BRACKET);
        this.state = 98;
        this.columnOptionDefinition();
        this.state = 103;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FlinkSqlParser.COMMA) {
            this.state = 99;
            this.match(FlinkSqlParser.COMMA);
            this.state = 100;
            this.columnOptionDefinition();
            this.state = 105;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 106;
        this.match(FlinkSqlParser.RR_BRACKET);
        this.state = 108;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FlinkSqlParser.PARTITIONED) {
            this.state = 107;
            this.partitionDefinition();
        }

        this.state = 110;
        this.match(FlinkSqlParser.WITH);
        this.state = 111;
        this.match(FlinkSqlParser.LR_BRACKET);
        this.state = 112;
        this.withOptionDefinition();
        this.state = 117;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FlinkSqlParser.COMMA) {
            this.state = 113;
            this.match(FlinkSqlParser.COMMA);
            this.state = 114;
            this.withOptionDefinition();
            this.state = 119;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 120;
        this.match(FlinkSqlParser.RR_BRACKET);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TableNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_tableName;
    return this;
}

TableNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TableNameContext.prototype.constructor = TableNameContext;

TableNameContext.prototype.ID = function() {
    return this.getToken(FlinkSqlParser.ID, 0);
};

TableNameContext.prototype.DOT_ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FlinkSqlParser.DOT_ID);
    } else {
        return this.getToken(FlinkSqlParser.DOT_ID, i);
    }
};


TableNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterTableName(this);
	}
};

TableNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitTableName(this);
	}
};

TableNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitTableName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.TableNameContext = TableNameContext;

FlinkSqlParser.prototype.tableName = function() {

    var localctx = new TableNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, FlinkSqlParser.RULE_tableName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 122;
        this.match(FlinkSqlParser.ID);
        this.state = 126;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 123;
                this.match(FlinkSqlParser.DOT_ID); 
            }
            this.state = 128;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ColumnOptionDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_columnOptionDefinition;
    return this;
}

ColumnOptionDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColumnOptionDefinitionContext.prototype.constructor = ColumnOptionDefinitionContext;

ColumnOptionDefinitionContext.prototype.columnName = function() {
    return this.getTypedRuleContext(ColumnNameContext,0);
};

ColumnOptionDefinitionContext.prototype.columnType = function() {
    return this.getTypedRuleContext(ColumnTypeContext,0);
};

ColumnOptionDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterColumnOptionDefinition(this);
	}
};

ColumnOptionDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitColumnOptionDefinition(this);
	}
};

ColumnOptionDefinitionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitColumnOptionDefinition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.ColumnOptionDefinitionContext = ColumnOptionDefinitionContext;

FlinkSqlParser.prototype.columnOptionDefinition = function() {

    var localctx = new ColumnOptionDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, FlinkSqlParser.RULE_columnOptionDefinition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
        this.columnName();
        this.state = 130;
        this.columnType();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ColumnNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_columnName;
    return this;
}

ColumnNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColumnNameContext.prototype.constructor = ColumnNameContext;

ColumnNameContext.prototype.ID = function() {
    return this.getToken(FlinkSqlParser.ID, 0);
};

ColumnNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterColumnName(this);
	}
};

ColumnNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitColumnName(this);
	}
};

ColumnNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitColumnName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.ColumnNameContext = ColumnNameContext;

FlinkSqlParser.prototype.columnName = function() {

    var localctx = new ColumnNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, FlinkSqlParser.RULE_columnName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 132;
        this.match(FlinkSqlParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ColumnTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_columnType;
    return this;
}

ColumnTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColumnTypeContext.prototype.constructor = ColumnTypeContext;

ColumnTypeContext.prototype.CHAR = function() {
    return this.getToken(FlinkSqlParser.CHAR, 0);
};

ColumnTypeContext.prototype.VARCHAR = function() {
    return this.getToken(FlinkSqlParser.VARCHAR, 0);
};

ColumnTypeContext.prototype.STRING = function() {
    return this.getToken(FlinkSqlParser.STRING, 0);
};

ColumnTypeContext.prototype.BINARY = function() {
    return this.getToken(FlinkSqlParser.BINARY, 0);
};

ColumnTypeContext.prototype.VARBINARY = function() {
    return this.getToken(FlinkSqlParser.VARBINARY, 0);
};

ColumnTypeContext.prototype.BYTES = function() {
    return this.getToken(FlinkSqlParser.BYTES, 0);
};

ColumnTypeContext.prototype.DECIMAL = function() {
    return this.getToken(FlinkSqlParser.DECIMAL, 0);
};

ColumnTypeContext.prototype.TINYINT = function() {
    return this.getToken(FlinkSqlParser.TINYINT, 0);
};

ColumnTypeContext.prototype.SMALLINT = function() {
    return this.getToken(FlinkSqlParser.SMALLINT, 0);
};

ColumnTypeContext.prototype.INT = function() {
    return this.getToken(FlinkSqlParser.INT, 0);
};

ColumnTypeContext.prototype.BIGINT = function() {
    return this.getToken(FlinkSqlParser.BIGINT, 0);
};

ColumnTypeContext.prototype.FLOAT = function() {
    return this.getToken(FlinkSqlParser.FLOAT, 0);
};

ColumnTypeContext.prototype.DOUBLE = function() {
    return this.getToken(FlinkSqlParser.DOUBLE, 0);
};

ColumnTypeContext.prototype.DATE = function() {
    return this.getToken(FlinkSqlParser.DATE, 0);
};

ColumnTypeContext.prototype.TIME = function() {
    return this.getToken(FlinkSqlParser.TIME, 0);
};

ColumnTypeContext.prototype.TIMESTAMP = function() {
    return this.getToken(FlinkSqlParser.TIMESTAMP, 0);
};

ColumnTypeContext.prototype.ARRAY = function() {
    return this.getToken(FlinkSqlParser.ARRAY, 0);
};

ColumnTypeContext.prototype.MAP = function() {
    return this.getToken(FlinkSqlParser.MAP, 0);
};

ColumnTypeContext.prototype.MULTISET = function() {
    return this.getToken(FlinkSqlParser.MULTISET, 0);
};

ColumnTypeContext.prototype.ROW = function() {
    return this.getToken(FlinkSqlParser.ROW, 0);
};

ColumnTypeContext.prototype.BOOLEAN = function() {
    return this.getToken(FlinkSqlParser.BOOLEAN, 0);
};

ColumnTypeContext.prototype.RAW = function() {
    return this.getToken(FlinkSqlParser.RAW, 0);
};

ColumnTypeContext.prototype.NULL = function() {
    return this.getToken(FlinkSqlParser.NULL, 0);
};

ColumnTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterColumnType(this);
	}
};

ColumnTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitColumnType(this);
	}
};

ColumnTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitColumnType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.ColumnTypeContext = ColumnTypeContext;

FlinkSqlParser.prototype.columnType = function() {

    var localctx = new ColumnTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, FlinkSqlParser.RULE_columnType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 134;
        _la = this._input.LA(1);
        if(!(((((_la - 260)) & ~0x1f) == 0 && ((1 << (_la - 260)) & ((1 << (FlinkSqlParser.STRING - 260)) | (1 << (FlinkSqlParser.ARRAY - 260)) | (1 << (FlinkSqlParser.MAP - 260)) | (1 << (FlinkSqlParser.CHAR - 260)) | (1 << (FlinkSqlParser.VARCHAR - 260)) | (1 << (FlinkSqlParser.BINARY - 260)) | (1 << (FlinkSqlParser.VARBINARY - 260)) | (1 << (FlinkSqlParser.BYTES - 260)) | (1 << (FlinkSqlParser.DECIMAL - 260)) | (1 << (FlinkSqlParser.TINYINT - 260)) | (1 << (FlinkSqlParser.SMALLINT - 260)) | (1 << (FlinkSqlParser.INT - 260)) | (1 << (FlinkSqlParser.BIGINT - 260)) | (1 << (FlinkSqlParser.FLOAT - 260)) | (1 << (FlinkSqlParser.DOUBLE - 260)) | (1 << (FlinkSqlParser.DATE - 260)) | (1 << (FlinkSqlParser.TIME - 260)) | (1 << (FlinkSqlParser.TIMESTAMP - 260)) | (1 << (FlinkSqlParser.MULTISET - 260)) | (1 << (FlinkSqlParser.BOOLEAN - 260)) | (1 << (FlinkSqlParser.RAW - 260)) | (1 << (FlinkSqlParser.ROW - 260)) | (1 << (FlinkSqlParser.NULL - 260)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PartitionDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_partitionDefinition;
    return this;
}

PartitionDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PartitionDefinitionContext.prototype.constructor = PartitionDefinitionContext;

PartitionDefinitionContext.prototype.PARTITIONED = function() {
    return this.getToken(FlinkSqlParser.PARTITIONED, 0);
};

PartitionDefinitionContext.prototype.BY = function() {
    return this.getToken(FlinkSqlParser.BY, 0);
};

PartitionDefinitionContext.prototype.partitionColumnDefinition = function() {
    return this.getTypedRuleContext(PartitionColumnDefinitionContext,0);
};

PartitionDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterPartitionDefinition(this);
	}
};

PartitionDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitPartitionDefinition(this);
	}
};

PartitionDefinitionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitPartitionDefinition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.PartitionDefinitionContext = PartitionDefinitionContext;

FlinkSqlParser.prototype.partitionDefinition = function() {

    var localctx = new PartitionDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, FlinkSqlParser.RULE_partitionDefinition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 136;
        this.match(FlinkSqlParser.PARTITIONED);
        this.state = 137;
        this.match(FlinkSqlParser.BY);
        this.state = 138;
        this.partitionColumnDefinition();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PartitionColumnDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_partitionColumnDefinition;
    return this;
}

PartitionColumnDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PartitionColumnDefinitionContext.prototype.constructor = PartitionColumnDefinitionContext;

PartitionColumnDefinitionContext.prototype.partitionColumnName = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PartitionColumnNameContext);
    } else {
        return this.getTypedRuleContext(PartitionColumnNameContext,i);
    }
};

PartitionColumnDefinitionContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FlinkSqlParser.COMMA);
    } else {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
};


PartitionColumnDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterPartitionColumnDefinition(this);
	}
};

PartitionColumnDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitPartitionColumnDefinition(this);
	}
};

PartitionColumnDefinitionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitPartitionColumnDefinition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.PartitionColumnDefinitionContext = PartitionColumnDefinitionContext;

FlinkSqlParser.prototype.partitionColumnDefinition = function() {

    var localctx = new PartitionColumnDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, FlinkSqlParser.RULE_partitionColumnDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.partitionColumnName();
        this.state = 145;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FlinkSqlParser.COMMA) {
            this.state = 141;
            this.match(FlinkSqlParser.COMMA);
            this.state = 142;
            this.partitionColumnName();
            this.state = 147;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PartitionColumnNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_partitionColumnName;
    return this;
}

PartitionColumnNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PartitionColumnNameContext.prototype.constructor = PartitionColumnNameContext;

PartitionColumnNameContext.prototype.ID = function() {
    return this.getToken(FlinkSqlParser.ID, 0);
};

PartitionColumnNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterPartitionColumnName(this);
	}
};

PartitionColumnNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitPartitionColumnName(this);
	}
};

PartitionColumnNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitPartitionColumnName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.PartitionColumnNameContext = PartitionColumnNameContext;

FlinkSqlParser.prototype.partitionColumnName = function() {

    var localctx = new PartitionColumnNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, FlinkSqlParser.RULE_partitionColumnName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 148;
        this.match(FlinkSqlParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function WithOptionDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_withOptionDefinition;
    return this;
}

WithOptionDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WithOptionDefinitionContext.prototype.constructor = WithOptionDefinitionContext;

WithOptionDefinitionContext.prototype.REVERSE_QUOTE_ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FlinkSqlParser.REVERSE_QUOTE_ID);
    } else {
        return this.getToken(FlinkSqlParser.REVERSE_QUOTE_ID, i);
    }
};


WithOptionDefinitionContext.prototype.EQUAL_SYMBOL = function() {
    return this.getToken(FlinkSqlParser.EQUAL_SYMBOL, 0);
};

WithOptionDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterWithOptionDefinition(this);
	}
};

WithOptionDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitWithOptionDefinition(this);
	}
};

WithOptionDefinitionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitWithOptionDefinition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.WithOptionDefinitionContext = WithOptionDefinitionContext;

FlinkSqlParser.prototype.withOptionDefinition = function() {

    var localctx = new WithOptionDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, FlinkSqlParser.RULE_withOptionDefinition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 150;
        this.match(FlinkSqlParser.REVERSE_QUOTE_ID);
        this.state = 151;
        this.match(FlinkSqlParser.EQUAL_SYMBOL);
        this.state = 152;
        this.match(FlinkSqlParser.REVERSE_QUOTE_ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CreateDatabaseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_createDatabase;
    return this;
}

CreateDatabaseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CreateDatabaseContext.prototype.constructor = CreateDatabaseContext;


CreateDatabaseContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterCreateDatabase(this);
	}
};

CreateDatabaseContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitCreateDatabase(this);
	}
};

CreateDatabaseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitCreateDatabase(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.CreateDatabaseContext = CreateDatabaseContext;

FlinkSqlParser.prototype.createDatabase = function() {

    var localctx = new CreateDatabaseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, FlinkSqlParser.RULE_createDatabase);
    try {
        this.enterOuterAlt(localctx, 1);

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CreateViewContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_createView;
    return this;
}

CreateViewContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CreateViewContext.prototype.constructor = CreateViewContext;


CreateViewContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterCreateView(this);
	}
};

CreateViewContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitCreateView(this);
	}
};

CreateViewContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitCreateView(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.CreateViewContext = CreateViewContext;

FlinkSqlParser.prototype.createView = function() {

    var localctx = new CreateViewContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, FlinkSqlParser.RULE_createView);
    try {
        this.enterOuterAlt(localctx, 1);

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CreateFunctionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_createFunction;
    return this;
}

CreateFunctionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CreateFunctionContext.prototype.constructor = CreateFunctionContext;


CreateFunctionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterCreateFunction(this);
	}
};

CreateFunctionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitCreateFunction(this);
	}
};

CreateFunctionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitCreateFunction(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.CreateFunctionContext = CreateFunctionContext;

FlinkSqlParser.prototype.createFunction = function() {

    var localctx = new CreateFunctionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, FlinkSqlParser.RULE_createFunction);
    try {
        this.enterOuterAlt(localctx, 1);

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AlterTableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_alterTable;
    return this;
}

AlterTableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AlterTableContext.prototype.constructor = AlterTableContext;


AlterTableContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterAlterTable(this);
	}
};

AlterTableContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitAlterTable(this);
	}
};

AlterTableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitAlterTable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.AlterTableContext = AlterTableContext;

FlinkSqlParser.prototype.alterTable = function() {

    var localctx = new AlterTableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, FlinkSqlParser.RULE_alterTable);
    try {
        this.enterOuterAlt(localctx, 1);

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AlterDatabaseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_alterDatabase;
    return this;
}

AlterDatabaseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AlterDatabaseContext.prototype.constructor = AlterDatabaseContext;


AlterDatabaseContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterAlterDatabase(this);
	}
};

AlterDatabaseContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitAlterDatabase(this);
	}
};

AlterDatabaseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitAlterDatabase(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.AlterDatabaseContext = AlterDatabaseContext;

FlinkSqlParser.prototype.alterDatabase = function() {

    var localctx = new AlterDatabaseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, FlinkSqlParser.RULE_alterDatabase);
    try {
        this.enterOuterAlt(localctx, 1);

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AlterFunctionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_alterFunction;
    return this;
}

AlterFunctionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AlterFunctionContext.prototype.constructor = AlterFunctionContext;


AlterFunctionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterAlterFunction(this);
	}
};

AlterFunctionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitAlterFunction(this);
	}
};

AlterFunctionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitAlterFunction(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.AlterFunctionContext = AlterFunctionContext;

FlinkSqlParser.prototype.alterFunction = function() {

    var localctx = new AlterFunctionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, FlinkSqlParser.RULE_alterFunction);
    try {
        this.enterOuterAlt(localctx, 1);

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DropTableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_dropTable;
    return this;
}

DropTableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DropTableContext.prototype.constructor = DropTableContext;


DropTableContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterDropTable(this);
	}
};

DropTableContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitDropTable(this);
	}
};

DropTableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitDropTable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.DropTableContext = DropTableContext;

FlinkSqlParser.prototype.dropTable = function() {

    var localctx = new DropTableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, FlinkSqlParser.RULE_dropTable);
    try {
        this.enterOuterAlt(localctx, 1);

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DropDatabaseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_dropDatabase;
    return this;
}

DropDatabaseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DropDatabaseContext.prototype.constructor = DropDatabaseContext;


DropDatabaseContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterDropDatabase(this);
	}
};

DropDatabaseContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitDropDatabase(this);
	}
};

DropDatabaseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitDropDatabase(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.DropDatabaseContext = DropDatabaseContext;

FlinkSqlParser.prototype.dropDatabase = function() {

    var localctx = new DropDatabaseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, FlinkSqlParser.RULE_dropDatabase);
    try {
        this.enterOuterAlt(localctx, 1);

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DropViewContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_dropView;
    return this;
}

DropViewContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DropViewContext.prototype.constructor = DropViewContext;


DropViewContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterDropView(this);
	}
};

DropViewContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitDropView(this);
	}
};

DropViewContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitDropView(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.DropViewContext = DropViewContext;

FlinkSqlParser.prototype.dropView = function() {

    var localctx = new DropViewContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, FlinkSqlParser.RULE_dropView);
    try {
        this.enterOuterAlt(localctx, 1);

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DropFunctionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_dropFunction;
    return this;
}

DropFunctionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DropFunctionContext.prototype.constructor = DropFunctionContext;


DropFunctionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterDropFunction(this);
	}
};

DropFunctionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitDropFunction(this);
	}
};

DropFunctionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitDropFunction(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.DropFunctionContext = DropFunctionContext;

FlinkSqlParser.prototype.dropFunction = function() {

    var localctx = new DropFunctionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, FlinkSqlParser.RULE_dropFunction);
    try {
        this.enterOuterAlt(localctx, 1);

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SelectStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_selectStatement;
    return this;
}

SelectStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SelectStatementContext.prototype.constructor = SelectStatementContext;


SelectStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterSelectStatement(this);
	}
};

SelectStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitSelectStatement(this);
	}
};

SelectStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitSelectStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.SelectStatementContext = SelectStatementContext;

FlinkSqlParser.prototype.selectStatement = function() {

    var localctx = new SelectStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, FlinkSqlParser.RULE_selectStatement);
    try {
        this.enterOuterAlt(localctx, 1);

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function InsertStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_insertStatement;
    return this;
}

InsertStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InsertStatementContext.prototype.constructor = InsertStatementContext;


InsertStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterInsertStatement(this);
	}
};

InsertStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitInsertStatement(this);
	}
};

InsertStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitInsertStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.InsertStatementContext = InsertStatementContext;

FlinkSqlParser.prototype.insertStatement = function() {

    var localctx = new InsertStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, FlinkSqlParser.RULE_insertStatement);
    try {
        this.enterOuterAlt(localctx, 1);

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.FlinkSqlParser = FlinkSqlParser;
