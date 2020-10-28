// Generated from /Users/erindeng/Desktop/dt-sql-parser/src/grammar/flinksql/FlinkSqlParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FlinkSqlParserListener = require('./FlinkSqlParserListener').FlinkSqlParserListener;
var FlinkSqlParserVisitor = require('./FlinkSqlParserVisitor').FlinkSqlParserVisitor;

var grammarFileName = "FlinkSqlParser.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0133\u013c\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e",
    "\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004",
    "$\t$\u0004%\t%\u0004&\t&\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0007\u0004W\n\u0004\f\u0004\u000e\u0004Z\u000b\u0004\u0003\u0005\u0003",
    "\u0005\u0005\u0005^\n\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007m\n\u0007\u0003",
    "\b\u0003\b\u0005\bq\n\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0007\tz\n\t\f\t\u000e\t}\u000b\t\u0003\t\u0003\t\u0005\t",
    "\u0081\n\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0007\u000e\u0093\n\u000e\f\u000e\u000e\u000e\u0096",
    "\u000b\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0005\u0010\u009d\n\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0005\u0011\u00a4\n\u0011\u0003\u0011\u0003\u0011",
    "\u0005\u0011\u00a8\n\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0005\u0013\u00b5\n\u0013\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0007\u0015\u00c0\n\u0015\f\u0015\u000e\u0015\u00c3\u000b",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0005\u0019\u00d8\n\u0019\u0003\u001a\u0003\u001a",
    "\u0005\u001a\u00dc\n\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0005\u001b\u00e6",
    "\n\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c",
    "\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0005\u001d",
    "\u00f2\n\u001d\u0003\u001d\u0003\u001d\u0005\u001d\u00f6\n\u001d\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0007\u001e\u00fd",
    "\n\u001e\f\u001e\u000e\u001e\u0100\u000b\u001e\u0003\u001e\u0003\u001e",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0007\u001f\u0108\n",
    "\u001f\f\u001f\u000e\u001f\u010b\u000b\u001f\u0003 \u0003 \u0007 \u010f",
    "\n \f \u000e \u0112\u000b \u0003 \u0003 \u0003!\u0003!\u0003!\u0007",
    "!\u0119\n!\f!\u000e!\u011c\u000b!\u0003\"\u0003\"\u0007\"\u0120\n\"",
    "\f\"\u000e\"\u0123\u000b\"\u0003#\u0003#\u0003#\u0003#\u0003#\u0007",
    "#\u012a\n#\f#\u000e#\u012d\u000b#\u0003#\u0003#\u0003$\u0003$\u0003",
    "$\u0003$\u0003%\u0003%\u0003%\u0003&\u0003&\u0003&\u0003&\u0003&\u0004",
    "\u0110\u0121\u0002\'\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJ\u0002\u0005\u0003",
    "\u0002\u0108\u011e\u0003\u0002\u00c0\u00c1\u0004\u0002PP\u0094\u0094",
    "\u0002\u0138\u0002L\u0003\u0002\u0002\u0002\u0004O\u0003\u0002\u0002",
    "\u0002\u0006X\u0003\u0002\u0002\u0002\b]\u0003\u0002\u0002\u0002\n_",
    "\u0003\u0002\u0002\u0002\fl\u0003\u0002\u0002\u0002\u000ep\u0003\u0002",
    "\u0002\u0002\u0010r\u0003\u0002\u0002\u0002\u0012\u0084\u0003\u0002",
    "\u0002\u0002\u0014\u0087\u0003\u0002\u0002\u0002\u0016\u0089\u0003\u0002",
    "\u0002\u0002\u0018\u008b\u0003\u0002\u0002\u0002\u001a\u008f\u0003\u0002",
    "\u0002\u0002\u001c\u0097\u0003\u0002\u0002\u0002\u001e\u0099\u0003\u0002",
    "\u0002\u0002 \u00a1\u0003\u0002\u0002\u0002\"\u00ad\u0003\u0002\u0002",
    "\u0002$\u00af\u0003\u0002\u0002\u0002&\u00b6\u0003\u0002\u0002\u0002",
    "(\u00ba\u0003\u0002\u0002\u0002*\u00c6\u0003\u0002\u0002\u0002,\u00cb",
    "\u0003\u0002\u0002\u0002.\u00cd\u0003\u0002\u0002\u00020\u00d2\u0003",
    "\u0002\u0002\u00022\u00d9\u0003\u0002\u0002\u00024\u00e1\u0003\u0002",
    "\u0002\u00026\u00eb\u0003\u0002\u0002\u00028\u00ed\u0003\u0002\u0002",
    "\u0002:\u00f7\u0003\u0002\u0002\u0002<\u0103\u0003\u0002\u0002\u0002",
    ">\u010c\u0003\u0002\u0002\u0002@\u0115\u0003\u0002\u0002\u0002B\u011d",
    "\u0003\u0002\u0002\u0002D\u0124\u0003\u0002\u0002\u0002F\u0130\u0003",
    "\u0002\u0002\u0002H\u0134\u0003\u0002\u0002\u0002J\u0137\u0003\u0002",
    "\u0002\u0002LM\u0005\u0004\u0003\u0002MN\u0007\u0002\u0002\u0003N\u0003",
    "\u0003\u0002\u0002\u0002OP\u0005\u0006\u0004\u0002PQ\u0007\u0002\u0002",
    "\u0003Q\u0005\u0003\u0002\u0002\u0002RS\u0005\b\u0005\u0002ST\u0007",
    "\u012b\u0002\u0002TW\u0003\u0002\u0002\u0002UW\u0005\n\u0006\u0002V",
    "R\u0003\u0002\u0002\u0002VU\u0003\u0002\u0002\u0002WZ\u0003\u0002\u0002",
    "\u0002XV\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002Y\u0007\u0003",
    "\u0002\u0002\u0002ZX\u0003\u0002\u0002\u0002[^\u0005\f\u0007\u0002\\",
    "^\u0005\u000e\b\u0002][\u0003\u0002\u0002\u0002]\\\u0003\u0002\u0002",
    "\u0002^\t\u0003\u0002\u0002\u0002_`\u0007\u012b\u0002\u0002`\u000b\u0003",
    "\u0002\u0002\u0002am\u0005\u0010\t\u0002bm\u0005\u001e\u0010\u0002c",
    "m\u0005 \u0011\u0002dm\u0005\"\u0012\u0002em\u0005$\u0013\u0002fm\u0005",
    "*\u0016\u0002gm\u0005,\u0017\u0002hm\u0005.\u0018\u0002im\u00050\u0019",
    "\u0002jm\u00052\u001a\u0002km\u00054\u001b\u0002la\u0003\u0002\u0002",
    "\u0002lb\u0003\u0002\u0002\u0002lc\u0003\u0002\u0002\u0002ld\u0003\u0002",
    "\u0002\u0002le\u0003\u0002\u0002\u0002lf\u0003\u0002\u0002\u0002lg\u0003",
    "\u0002\u0002\u0002lh\u0003\u0002\u0002\u0002li\u0003\u0002\u0002\u0002",
    "lj\u0003\u0002\u0002\u0002lk\u0003\u0002\u0002\u0002m\r\u0003\u0002",
    "\u0002\u0002nq\u00056\u001c\u0002oq\u00058\u001d\u0002pn\u0003\u0002",
    "\u0002\u0002po\u0003\u0002\u0002\u0002q\u000f\u0003\u0002\u0002\u0002",
    "rs\u0007I\u0002\u0002st\u0007J\u0002\u0002tu\u0005B\"\u0002uv\u0007",
    "\u0128\u0002\u0002v{\u0005\u0012\n\u0002wx\u0007\u012a\u0002\u0002x",
    "z\u0005\u0012\n\u0002yw\u0003\u0002\u0002\u0002z}\u0003\u0002\u0002",
    "\u0002{y\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002|~\u0003\u0002",
    "\u0002\u0002}{\u0003\u0002\u0002\u0002~\u0080\u0007\u0129\u0002\u0002",
    "\u007f\u0081\u0005\u0018\r\u0002\u0080\u007f\u0003\u0002\u0002\u0002",
    "\u0080\u0081\u0003\u0002\u0002\u0002\u0081\u0082\u0003\u0002\u0002\u0002",
    "\u0082\u0083\u0005D#\u0002\u0083\u0011\u0003\u0002\u0002\u0002\u0084",
    "\u0085\u0005\u0014\u000b\u0002\u0085\u0086\u0005\u0016\f\u0002\u0086",
    "\u0013\u0003\u0002\u0002\u0002\u0087\u0088\u0007\u0106\u0002\u0002\u0088",
    "\u0015\u0003\u0002\u0002\u0002\u0089\u008a\t\u0002\u0002\u0002\u008a",
    "\u0017\u0003\u0002\u0002\u0002\u008b\u008c\u0007\u00cf\u0002\u0002\u008c",
    "\u008d\u0007\u0010\u0002\u0002\u008d\u008e\u0005\u001a\u000e\u0002\u008e",
    "\u0019\u0003\u0002\u0002\u0002\u008f\u0094\u0005\u001c\u000f\u0002\u0090",
    "\u0091\u0007\u012a\u0002\u0002\u0091\u0093\u0005\u001c\u000f\u0002\u0092",
    "\u0090\u0003\u0002\u0002\u0002\u0093\u0096\u0003\u0002\u0002\u0002\u0094",
    "\u0092\u0003\u0002\u0002\u0002\u0094\u0095\u0003\u0002\u0002\u0002\u0095",
    "\u001b\u0003\u0002\u0002\u0002\u0096\u0094\u0003\u0002\u0002\u0002\u0097",
    "\u0098\u0007\u0106\u0002\u0002\u0098\u001d\u0003\u0002\u0002\u0002\u0099",
    "\u009a\u0007I\u0002\u0002\u009a\u009c\u0007\u00c7\u0002\u0002\u009b",
    "\u009d\u0005F$\u0002\u009c\u009b\u0003\u0002\u0002\u0002\u009c\u009d",
    "\u0003\u0002\u0002\u0002\u009d\u009e\u0003\u0002\u0002\u0002\u009e\u009f",
    "\u0005B\"\u0002\u009f\u00a0\u0005D#\u0002\u00a0\u001f\u0003\u0002\u0002",
    "\u0002\u00a1\u00a3\u0007I\u0002\u0002\u00a2\u00a4\u0007\u00ae\u0002",
    "\u0002\u00a3\u00a2\u0003\u0002\u0002\u0002\u00a3\u00a4\u0003\u0002\u0002",
    "\u0002\u00a4\u00a5\u0003\u0002\u0002\u0002\u00a5\u00a7\u0007L\u0002",
    "\u0002\u00a6\u00a8\u0005F$\u0002\u00a7\u00a6\u0003\u0002\u0002\u0002",
    "\u00a7\u00a8\u0003\u0002\u0002\u0002\u00a8\u00a9\u0003\u0002\u0002\u0002",
    "\u00a9\u00aa\u0005B\"\u0002\u00aa\u00ab\u0007\n\u0002\u0002\u00ab\u00ac",
    "\u00056\u001c\u0002\u00ac!\u0003\u0002\u0002\u0002\u00ad\u00ae\u0003",
    "\u0002\u0002\u0002\u00ae#\u0003\u0002\u0002\u0002\u00af\u00b0\u0007",
    "g\u0002\u0002\u00b0\u00b1\u0007J\u0002\u0002\u00b1\u00b4\u0005B\"\u0002",
    "\u00b2\u00b5\u0005&\u0014\u0002\u00b3\u00b5\u0005(\u0015\u0002\u00b4",
    "\u00b2\u0003\u0002\u0002\u0002\u00b4\u00b3\u0003\u0002\u0002\u0002\u00b5",
    "%\u0003\u0002\u0002\u0002\u00b6\u00b7\u0007h\u0002\u0002\u00b7\u00b8",
    "\u0007d\u0002\u0002\u00b8\u00b9\u0005B\"\u0002\u00b9\'\u0003\u0002\u0002",
    "\u0002\u00ba\u00bb\u0007k\u0002\u0002\u00bb\u00bc\u0007\u0128\u0002",
    "\u0002\u00bc\u00c1\u0005J&\u0002\u00bd\u00be\u0007\u012a\u0002\u0002",
    "\u00be\u00c0\u0005J&\u0002\u00bf\u00bd\u0003\u0002\u0002\u0002\u00c0",
    "\u00c3\u0003\u0002\u0002\u0002\u00c1\u00bf\u0003\u0002\u0002\u0002\u00c1",
    "\u00c2\u0003\u0002\u0002\u0002\u00c2\u00c4\u0003\u0002\u0002\u0002\u00c3",
    "\u00c1\u0003\u0002\u0002\u0002\u00c4\u00c5\u0007\u0129\u0002\u0002\u00c5",
    ")\u0003\u0002\u0002\u0002\u00c6\u00c7\u0007g\u0002\u0002\u00c7\u00c8",
    "\u0007\u00c7\u0002\u0002\u00c8\u00c9\u0005B\"\u0002\u00c9\u00ca\u0005",
    "(\u0015\u0002\u00ca+\u0003\u0002\u0002\u0002\u00cb\u00cc\u0003\u0002",
    "\u0002\u0002\u00cc-\u0003\u0002\u0002\u0002\u00cd\u00ce\u0007_\u0002",
    "\u0002\u00ce\u00cf\u0007J\u0002\u0002\u00cf\u00d0\u0005H%\u0002\u00d0",
    "\u00d1\u0005B\"\u0002\u00d1/\u0003\u0002\u0002\u0002\u00d2\u00d3\u0007",
    "_\u0002\u0002\u00d3\u00d4\u0007\u00c7\u0002\u0002\u00d4\u00d5\u0005",
    "H%\u0002\u00d5\u00d7\u0005B\"\u0002\u00d6\u00d8\t\u0003\u0002\u0002",
    "\u00d7\u00d6\u0003\u0002\u0002\u0002\u00d7\u00d8\u0003\u0002\u0002\u0002",
    "\u00d81\u0003\u0002\u0002\u0002\u00d9\u00db\u0007_\u0002\u0002\u00da",
    "\u00dc\u0007\u00ae\u0002\u0002\u00db\u00da\u0003\u0002\u0002\u0002\u00db",
    "\u00dc\u0003\u0002\u0002\u0002\u00dc\u00dd\u0003\u0002\u0002\u0002\u00dd",
    "\u00de\u0007L\u0002\u0002\u00de\u00df\u0005H%\u0002\u00df\u00e0\u0005",
    "B\"\u0002\u00e03\u0003\u0002\u0002\u0002\u00e1\u00e5\u0007_\u0002\u0002",
    "\u00e2\u00e6\u0007\u00ae\u0002\u0002\u00e3\u00e4\u0007\u00ae\u0002\u0002",
    "\u00e4\u00e6\u0007\u0107\u0002\u0002\u00e5\u00e2\u0003\u0002\u0002\u0002",
    "\u00e5\u00e3\u0003\u0002\u0002\u0002\u00e5\u00e6\u0003\u0002\u0002\u0002",
    "\u00e6\u00e7\u0003\u0002\u0002\u0002\u00e7\u00e8\u0007\u00a5\u0002\u0002",
    "\u00e8\u00e9\u0005H%\u0002\u00e9\u00ea\u0005B\"\u0002\u00ea5\u0003\u0002",
    "\u0002\u0002\u00eb\u00ec\u0003\u0002\u0002\u0002\u00ec7\u0003\u0002",
    "\u0002\u0002\u00ed\u00ee\u0007N\u0002\u0002\u00ee\u00ef\t\u0004\u0002",
    "\u0002\u00ef\u00f5\u0005B\"\u0002\u00f0\u00f2\u0005:\u001e\u0002\u00f1",
    "\u00f0\u0003\u0002\u0002\u0002\u00f1\u00f2\u0003\u0002\u0002\u0002\u00f2",
    "\u00f3\u0003\u0002\u0002\u0002\u00f3\u00f6\u00056\u001c\u0002\u00f4",
    "\u00f6\u0005<\u001f\u0002\u00f5\u00f1\u0003\u0002\u0002\u0002\u00f5",
    "\u00f4\u0003\u0002\u0002\u0002\u00f69\u0003\u0002\u0002\u0002\u00f7",
    "\u00f8\u0007=\u0002\u0002\u00f8\u00f9\u0007\u0128\u0002\u0002\u00f9",
    "\u00fe\u0005J&\u0002\u00fa\u00fb\u0007\u012a\u0002\u0002\u00fb\u00fd",
    "\u0005J&\u0002\u00fc\u00fa\u0003\u0002\u0002\u0002\u00fd\u0100\u0003",
    "\u0002\u0002\u0002\u00fe\u00fc\u0003\u0002\u0002\u0002\u00fe\u00ff\u0003",
    "\u0002\u0002\u0002\u00ff\u0101\u0003\u0002\u0002\u0002\u0100\u00fe\u0003",
    "\u0002\u0002\u0002\u0101\u0102\u0007\u0129\u0002\u0002\u0102;\u0003",
    "\u0002\u0002\u0002\u0103\u0104\u0007H\u0002\u0002\u0104\u0109\u0005",
    "> \u0002\u0105\u0106\u0007\u012a\u0002\u0002\u0106\u0108\u0005> \u0002",
    "\u0107\u0105\u0003\u0002\u0002\u0002\u0108\u010b\u0003\u0002\u0002\u0002",
    "\u0109\u0107\u0003\u0002\u0002\u0002\u0109\u010a\u0003\u0002\u0002\u0002",
    "\u010a=\u0003\u0002\u0002\u0002\u010b\u0109\u0003\u0002\u0002\u0002",
    "\u010c\u0110\u0007\u0128\u0002\u0002\u010d\u010f\u000b\u0002\u0002\u0002",
    "\u010e\u010d\u0003\u0002\u0002\u0002\u010f\u0112\u0003\u0002\u0002\u0002",
    "\u0110\u0111\u0003\u0002\u0002\u0002\u0110\u010e\u0003\u0002\u0002\u0002",
    "\u0111\u0113\u0003\u0002\u0002\u0002\u0112\u0110\u0003\u0002\u0002\u0002",
    "\u0113\u0114\u0007\u0129\u0002\u0002\u0114?\u0003\u0002\u0002\u0002",
    "\u0115\u011a\u0005B\"\u0002\u0116\u0117\u0007\u012a\u0002\u0002\u0117",
    "\u0119\u0005B\"\u0002\u0118\u0116\u0003\u0002\u0002\u0002\u0119\u011c",
    "\u0003\u0002\u0002\u0002\u011a\u0118\u0003\u0002\u0002\u0002\u011a\u011b",
    "\u0003\u0002\u0002\u0002\u011bA\u0003\u0002\u0002\u0002\u011c\u011a",
    "\u0003\u0002\u0002\u0002\u011d\u0121\u0007\u0106\u0002\u0002\u011e\u0120",
    "\u0007\u0105\u0002\u0002\u011f\u011e\u0003\u0002\u0002\u0002\u0120\u0123",
    "\u0003\u0002\u0002\u0002\u0121\u0122\u0003\u0002\u0002\u0002\u0121\u011f",
    "\u0003\u0002\u0002\u0002\u0122C\u0003\u0002\u0002\u0002\u0123\u0121",
    "\u0003\u0002\u0002\u0002\u0124\u0125\u0007G\u0002\u0002\u0125\u0126",
    "\u0007\u0128\u0002\u0002\u0126\u012b\u0005J&\u0002\u0127\u0128\u0007",
    "\u012a\u0002\u0002\u0128\u012a\u0005J&\u0002\u0129\u0127\u0003\u0002",
    "\u0002\u0002\u012a\u012d\u0003\u0002\u0002\u0002\u012b\u0129\u0003\u0002",
    "\u0002\u0002\u012b\u012c\u0003\u0002\u0002\u0002\u012c\u012e\u0003\u0002",
    "\u0002\u0002\u012d\u012b\u0003\u0002\u0002\u0002\u012e\u012f\u0007\u0129",
    "\u0002\u0002\u012fE\u0003\u0002\u0002\u0002\u0130\u0131\u0007w\u0002",
    "\u0002\u0131\u0132\u0007\u001c\u0002\u0002\u0132\u0133\u0007\u001e\u0002",
    "\u0002\u0133G\u0003\u0002\u0002\u0002\u0134\u0135\u0007w\u0002\u0002",
    "\u0135\u0136\u0007\u001e\u0002\u0002\u0136I\u0003\u0002\u0002\u0002",
    "\u0137\u0138\u0007\u0104\u0002\u0002\u0138\u0139\u0007\u011f\u0002\u0002",
    "\u0139\u013a\u0007\u0104\u0002\u0002\u013aK\u0003\u0002\u0002\u0002",
    "\u001aVX]lp{\u0080\u0094\u009c\u00a3\u00a7\u00b4\u00c1\u00d7\u00db\u00e5",
    "\u00f1\u00f5\u00fe\u0109\u0110\u011a\u0121\u012b"].join("");


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
                     "'WS'", "'UNRECOGNIZED'", null, null, null, null, "'SYSTEM'", 
                     "'STRING'", "'ARRAY'", "'MAP'", "'CHAR'", "'VARCHAR'", 
                     "'BINARY'", "'VARBINARY'", "'BYTES'", "'DECIMAL'", 
                     "'TINYINT'", "'SMALLINT'", "'INT'", "'BIGINT'", "'FLOAT'", 
                     "'DOUBLE'", "'DATE'", "'TIME'", "'TIMESTAMP'", "'MULTISET'", 
                     "'BOOLEAN'", "'RAW'", "'ROW'", "'NULL'", "'='", "'>'", 
                     "'<'", "'!'", "'~'", "'|'", "'&'", "'^'", "'.'", "'('", 
                     "')'", "','", "';'", "'@'", "'0'", "'1'", "'2'", "'''", 
                     "'\"'", "'`'", "':'" ];

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
                      "WS", "UNRECOGNIZED", "REVERSE_QUOTE_ID", "DOUBLE_QUOTE_ID", 
                      "DOT_ID", "ID", "SYSTEM", "STRING", "ARRAY", "MAP", 
                      "CHAR", "VARCHAR", "BINARY", "VARBINARY", "BYTES", 
                      "DECIMAL", "TINYINT", "SMALLINT", "INT", "BIGINT", 
                      "FLOAT", "DOUBLE", "DATE", "TIME", "TIMESTAMP", "MULTISET", 
                      "BOOLEAN", "RAW", "ROW", "NULL", "EQUAL_SYMBOL", "GREATER_SYMBOL", 
                      "LESS_SYMBOL", "EXCLAMATION_SYMBOL", "BIT_NOT_OP", 
                      "BIT_OR_OP", "BIT_AND_OP", "BIT_XOR_OP", "DOT", "LR_BRACKET", 
                      "RR_BRACKET", "COMMA", "SEMICOLON", "AT_SIGN", "ZERO_DECIMAL", 
                      "ONE_DECIMAL", "TWO_DECIMAL", "SINGLE_QUOTE_SYMB", 
                      "DOUBLE_QUOTE_SYMB", "REVERSE_QUOTE_SYMB", "COLON_SYMB" ];

var ruleNames =  [ "program", "statement", "sqlStatements", "sqlStatement", 
                   "emptyStatement", "ddlStatement", "dmlStatement", "createTable", 
                   "columnOptionDefinition", "columnName", "columnType", 
                   "partitionDefinition", "partitionColumnDefinition", "partitionColumnName", 
                   "createDatabase", "createView", "createFunction", "alterTable", 
                   "renameDefinition", "setKeyValueDefinition", "alterDatabase", 
                   "alterFunction", "dropTable", "dropDatabase", "dropView", 
                   "dropFunction", "selectStatement", "insertStatement", 
                   "insertPartitionDefinition", "valuesDefinition", "valuesRowDefinition", 
                   "uidList", "uid", "withOption", "ifNotExists", "ifExists", 
                   "keyValueDefinition" ];

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
FlinkSqlParser.DOUBLE_QUOTE_ID = 258;
FlinkSqlParser.DOT_ID = 259;
FlinkSqlParser.ID = 260;
FlinkSqlParser.SYSTEM = 261;
FlinkSqlParser.STRING = 262;
FlinkSqlParser.ARRAY = 263;
FlinkSqlParser.MAP = 264;
FlinkSqlParser.CHAR = 265;
FlinkSqlParser.VARCHAR = 266;
FlinkSqlParser.BINARY = 267;
FlinkSqlParser.VARBINARY = 268;
FlinkSqlParser.BYTES = 269;
FlinkSqlParser.DECIMAL = 270;
FlinkSqlParser.TINYINT = 271;
FlinkSqlParser.SMALLINT = 272;
FlinkSqlParser.INT = 273;
FlinkSqlParser.BIGINT = 274;
FlinkSqlParser.FLOAT = 275;
FlinkSqlParser.DOUBLE = 276;
FlinkSqlParser.DATE = 277;
FlinkSqlParser.TIME = 278;
FlinkSqlParser.TIMESTAMP = 279;
FlinkSqlParser.MULTISET = 280;
FlinkSqlParser.BOOLEAN = 281;
FlinkSqlParser.RAW = 282;
FlinkSqlParser.ROW = 283;
FlinkSqlParser.NULL = 284;
FlinkSqlParser.EQUAL_SYMBOL = 285;
FlinkSqlParser.GREATER_SYMBOL = 286;
FlinkSqlParser.LESS_SYMBOL = 287;
FlinkSqlParser.EXCLAMATION_SYMBOL = 288;
FlinkSqlParser.BIT_NOT_OP = 289;
FlinkSqlParser.BIT_OR_OP = 290;
FlinkSqlParser.BIT_AND_OP = 291;
FlinkSqlParser.BIT_XOR_OP = 292;
FlinkSqlParser.DOT = 293;
FlinkSqlParser.LR_BRACKET = 294;
FlinkSqlParser.RR_BRACKET = 295;
FlinkSqlParser.COMMA = 296;
FlinkSqlParser.SEMICOLON = 297;
FlinkSqlParser.AT_SIGN = 298;
FlinkSqlParser.ZERO_DECIMAL = 299;
FlinkSqlParser.ONE_DECIMAL = 300;
FlinkSqlParser.TWO_DECIMAL = 301;
FlinkSqlParser.SINGLE_QUOTE_SYMB = 302;
FlinkSqlParser.DOUBLE_QUOTE_SYMB = 303;
FlinkSqlParser.REVERSE_QUOTE_SYMB = 304;
FlinkSqlParser.COLON_SYMB = 305;

FlinkSqlParser.RULE_program = 0;
FlinkSqlParser.RULE_statement = 1;
FlinkSqlParser.RULE_sqlStatements = 2;
FlinkSqlParser.RULE_sqlStatement = 3;
FlinkSqlParser.RULE_emptyStatement = 4;
FlinkSqlParser.RULE_ddlStatement = 5;
FlinkSqlParser.RULE_dmlStatement = 6;
FlinkSqlParser.RULE_createTable = 7;
FlinkSqlParser.RULE_columnOptionDefinition = 8;
FlinkSqlParser.RULE_columnName = 9;
FlinkSqlParser.RULE_columnType = 10;
FlinkSqlParser.RULE_partitionDefinition = 11;
FlinkSqlParser.RULE_partitionColumnDefinition = 12;
FlinkSqlParser.RULE_partitionColumnName = 13;
FlinkSqlParser.RULE_createDatabase = 14;
FlinkSqlParser.RULE_createView = 15;
FlinkSqlParser.RULE_createFunction = 16;
FlinkSqlParser.RULE_alterTable = 17;
FlinkSqlParser.RULE_renameDefinition = 18;
FlinkSqlParser.RULE_setKeyValueDefinition = 19;
FlinkSqlParser.RULE_alterDatabase = 20;
FlinkSqlParser.RULE_alterFunction = 21;
FlinkSqlParser.RULE_dropTable = 22;
FlinkSqlParser.RULE_dropDatabase = 23;
FlinkSqlParser.RULE_dropView = 24;
FlinkSqlParser.RULE_dropFunction = 25;
FlinkSqlParser.RULE_selectStatement = 26;
FlinkSqlParser.RULE_insertStatement = 27;
FlinkSqlParser.RULE_insertPartitionDefinition = 28;
FlinkSqlParser.RULE_valuesDefinition = 29;
FlinkSqlParser.RULE_valuesRowDefinition = 30;
FlinkSqlParser.RULE_uidList = 31;
FlinkSqlParser.RULE_uid = 32;
FlinkSqlParser.RULE_withOption = 33;
FlinkSqlParser.RULE_ifNotExists = 34;
FlinkSqlParser.RULE_ifExists = 35;
FlinkSqlParser.RULE_keyValueDefinition = 36;


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
        this.state = 74;
        this.statement();
        this.state = 75;
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
        this.state = 77;
        this.sqlStatements();
        this.state = 78;
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
        this.state = 86;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 71)) & ~0x1f) == 0 && ((1 << (_la - 71)) & ((1 << (FlinkSqlParser.CREATE - 71)) | (1 << (FlinkSqlParser.INSERT - 71)) | (1 << (FlinkSqlParser.DROP - 71)) | (1 << (FlinkSqlParser.ALTER - 71)))) !== 0) || _la===FlinkSqlParser.SEMICOLON) {
            this.state = 84;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
            switch(la_) {
            case 1:
                this.state = 80;
                this.sqlStatement();
                this.state = 81;
                this.match(FlinkSqlParser.SEMICOLON);
                break;

            case 2:
                this.state = 83;
                this.emptyStatement();
                break;

            }
            this.state = 88;
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
        this.state = 91;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 89;
            this.ddlStatement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 90;
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
        this.state = 93;
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
        this.state = 106;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 95;
            this.createTable();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 96;
            this.createDatabase();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 97;
            this.createView();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 98;
            this.createFunction();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 99;
            this.alterTable();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 100;
            this.alterDatabase();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 101;
            this.alterFunction();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 102;
            this.dropTable();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 103;
            this.dropDatabase();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 104;
            this.dropView();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 105;
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
        this.state = 110;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FlinkSqlParser.SEMICOLON:
            this.enterOuterAlt(localctx, 1);
            this.state = 108;
            this.selectStatement();
            break;
        case FlinkSqlParser.INSERT:
            this.enterOuterAlt(localctx, 2);
            this.state = 109;
            this.insertStatement();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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

CreateTableContext.prototype.uid = function() {
    return this.getTypedRuleContext(UidContext,0);
};

CreateTableContext.prototype.LR_BRACKET = function() {
    return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
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

CreateTableContext.prototype.RR_BRACKET = function() {
    return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
};

CreateTableContext.prototype.withOption = function() {
    return this.getTypedRuleContext(WithOptionContext,0);
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
        this.state = 112;
        this.match(FlinkSqlParser.CREATE);
        this.state = 113;
        this.match(FlinkSqlParser.TABLE);
        this.state = 114;
        this.uid();
        this.state = 115;
        this.match(FlinkSqlParser.LR_BRACKET);
        this.state = 116;
        this.columnOptionDefinition();
        this.state = 121;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FlinkSqlParser.COMMA) {
            this.state = 117;
            this.match(FlinkSqlParser.COMMA);
            this.state = 118;
            this.columnOptionDefinition();
            this.state = 123;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 124;
        this.match(FlinkSqlParser.RR_BRACKET);
        this.state = 126;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FlinkSqlParser.PARTITIONED) {
            this.state = 125;
            this.partitionDefinition();
        }

        this.state = 128;
        this.withOption();
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
    this.enterRule(localctx, 16, FlinkSqlParser.RULE_columnOptionDefinition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 130;
        this.columnName();
        this.state = 131;
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
    this.enterRule(localctx, 18, FlinkSqlParser.RULE_columnName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 133;
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
    this.enterRule(localctx, 20, FlinkSqlParser.RULE_columnType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 135;
        _la = this._input.LA(1);
        if(!(((((_la - 262)) & ~0x1f) == 0 && ((1 << (_la - 262)) & ((1 << (FlinkSqlParser.STRING - 262)) | (1 << (FlinkSqlParser.ARRAY - 262)) | (1 << (FlinkSqlParser.MAP - 262)) | (1 << (FlinkSqlParser.CHAR - 262)) | (1 << (FlinkSqlParser.VARCHAR - 262)) | (1 << (FlinkSqlParser.BINARY - 262)) | (1 << (FlinkSqlParser.VARBINARY - 262)) | (1 << (FlinkSqlParser.BYTES - 262)) | (1 << (FlinkSqlParser.DECIMAL - 262)) | (1 << (FlinkSqlParser.TINYINT - 262)) | (1 << (FlinkSqlParser.SMALLINT - 262)) | (1 << (FlinkSqlParser.INT - 262)) | (1 << (FlinkSqlParser.BIGINT - 262)) | (1 << (FlinkSqlParser.FLOAT - 262)) | (1 << (FlinkSqlParser.DOUBLE - 262)) | (1 << (FlinkSqlParser.DATE - 262)) | (1 << (FlinkSqlParser.TIME - 262)) | (1 << (FlinkSqlParser.TIMESTAMP - 262)) | (1 << (FlinkSqlParser.MULTISET - 262)) | (1 << (FlinkSqlParser.BOOLEAN - 262)) | (1 << (FlinkSqlParser.RAW - 262)) | (1 << (FlinkSqlParser.ROW - 262)) | (1 << (FlinkSqlParser.NULL - 262)))) !== 0))) {
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
    this.enterRule(localctx, 22, FlinkSqlParser.RULE_partitionDefinition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 137;
        this.match(FlinkSqlParser.PARTITIONED);
        this.state = 138;
        this.match(FlinkSqlParser.BY);
        this.state = 139;
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
    this.enterRule(localctx, 24, FlinkSqlParser.RULE_partitionColumnDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 141;
        this.partitionColumnName();
        this.state = 146;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FlinkSqlParser.COMMA) {
            this.state = 142;
            this.match(FlinkSqlParser.COMMA);
            this.state = 143;
            this.partitionColumnName();
            this.state = 148;
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
    this.enterRule(localctx, 26, FlinkSqlParser.RULE_partitionColumnName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 149;
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

CreateDatabaseContext.prototype.CREATE = function() {
    return this.getToken(FlinkSqlParser.CREATE, 0);
};

CreateDatabaseContext.prototype.DATABASE = function() {
    return this.getToken(FlinkSqlParser.DATABASE, 0);
};

CreateDatabaseContext.prototype.uid = function() {
    return this.getTypedRuleContext(UidContext,0);
};

CreateDatabaseContext.prototype.withOption = function() {
    return this.getTypedRuleContext(WithOptionContext,0);
};

CreateDatabaseContext.prototype.ifNotExists = function() {
    return this.getTypedRuleContext(IfNotExistsContext,0);
};

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
    this.enterRule(localctx, 28, FlinkSqlParser.RULE_createDatabase);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 151;
        this.match(FlinkSqlParser.CREATE);
        this.state = 152;
        this.match(FlinkSqlParser.DATABASE);
        this.state = 154;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FlinkSqlParser.IF) {
            this.state = 153;
            this.ifNotExists();
        }

        this.state = 156;
        this.uid();
        this.state = 157;
        this.withOption();
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

CreateViewContext.prototype.CREATE = function() {
    return this.getToken(FlinkSqlParser.CREATE, 0);
};

CreateViewContext.prototype.VIEW = function() {
    return this.getToken(FlinkSqlParser.VIEW, 0);
};

CreateViewContext.prototype.uid = function() {
    return this.getTypedRuleContext(UidContext,0);
};

CreateViewContext.prototype.AS = function() {
    return this.getToken(FlinkSqlParser.AS, 0);
};

CreateViewContext.prototype.selectStatement = function() {
    return this.getTypedRuleContext(SelectStatementContext,0);
};

CreateViewContext.prototype.TEMPORARY = function() {
    return this.getToken(FlinkSqlParser.TEMPORARY, 0);
};

CreateViewContext.prototype.ifNotExists = function() {
    return this.getTypedRuleContext(IfNotExistsContext,0);
};

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
    this.enterRule(localctx, 30, FlinkSqlParser.RULE_createView);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 159;
        this.match(FlinkSqlParser.CREATE);
        this.state = 161;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FlinkSqlParser.TEMPORARY) {
            this.state = 160;
            this.match(FlinkSqlParser.TEMPORARY);
        }

        this.state = 163;
        this.match(FlinkSqlParser.VIEW);
        this.state = 165;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FlinkSqlParser.IF) {
            this.state = 164;
            this.ifNotExists();
        }

        this.state = 167;
        this.uid();
        this.state = 168;
        this.match(FlinkSqlParser.AS);
        this.state = 169;
        this.selectStatement();
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
    this.enterRule(localctx, 32, FlinkSqlParser.RULE_createFunction);
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

AlterTableContext.prototype.ALTER = function() {
    return this.getToken(FlinkSqlParser.ALTER, 0);
};

AlterTableContext.prototype.TABLE = function() {
    return this.getToken(FlinkSqlParser.TABLE, 0);
};

AlterTableContext.prototype.uid = function() {
    return this.getTypedRuleContext(UidContext,0);
};

AlterTableContext.prototype.renameDefinition = function() {
    return this.getTypedRuleContext(RenameDefinitionContext,0);
};

AlterTableContext.prototype.setKeyValueDefinition = function() {
    return this.getTypedRuleContext(SetKeyValueDefinitionContext,0);
};

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
    this.enterRule(localctx, 34, FlinkSqlParser.RULE_alterTable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 173;
        this.match(FlinkSqlParser.ALTER);
        this.state = 174;
        this.match(FlinkSqlParser.TABLE);
        this.state = 175;
        this.uid();
        this.state = 178;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FlinkSqlParser.RENAME:
            this.state = 176;
            this.renameDefinition();
            break;
        case FlinkSqlParser.SET:
            this.state = 177;
            this.setKeyValueDefinition();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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


function RenameDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_renameDefinition;
    return this;
}

RenameDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RenameDefinitionContext.prototype.constructor = RenameDefinitionContext;

RenameDefinitionContext.prototype.RENAME = function() {
    return this.getToken(FlinkSqlParser.RENAME, 0);
};

RenameDefinitionContext.prototype.TO = function() {
    return this.getToken(FlinkSqlParser.TO, 0);
};

RenameDefinitionContext.prototype.uid = function() {
    return this.getTypedRuleContext(UidContext,0);
};

RenameDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterRenameDefinition(this);
	}
};

RenameDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitRenameDefinition(this);
	}
};

RenameDefinitionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitRenameDefinition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.RenameDefinitionContext = RenameDefinitionContext;

FlinkSqlParser.prototype.renameDefinition = function() {

    var localctx = new RenameDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, FlinkSqlParser.RULE_renameDefinition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 180;
        this.match(FlinkSqlParser.RENAME);
        this.state = 181;
        this.match(FlinkSqlParser.TO);
        this.state = 182;
        this.uid();
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


function SetKeyValueDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_setKeyValueDefinition;
    return this;
}

SetKeyValueDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetKeyValueDefinitionContext.prototype.constructor = SetKeyValueDefinitionContext;

SetKeyValueDefinitionContext.prototype.SET = function() {
    return this.getToken(FlinkSqlParser.SET, 0);
};

SetKeyValueDefinitionContext.prototype.LR_BRACKET = function() {
    return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
};

SetKeyValueDefinitionContext.prototype.keyValueDefinition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(KeyValueDefinitionContext);
    } else {
        return this.getTypedRuleContext(KeyValueDefinitionContext,i);
    }
};

SetKeyValueDefinitionContext.prototype.RR_BRACKET = function() {
    return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
};

SetKeyValueDefinitionContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FlinkSqlParser.COMMA);
    } else {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
};


SetKeyValueDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterSetKeyValueDefinition(this);
	}
};

SetKeyValueDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitSetKeyValueDefinition(this);
	}
};

SetKeyValueDefinitionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitSetKeyValueDefinition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.SetKeyValueDefinitionContext = SetKeyValueDefinitionContext;

FlinkSqlParser.prototype.setKeyValueDefinition = function() {

    var localctx = new SetKeyValueDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, FlinkSqlParser.RULE_setKeyValueDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 184;
        this.match(FlinkSqlParser.SET);
        this.state = 185;
        this.match(FlinkSqlParser.LR_BRACKET);
        this.state = 186;
        this.keyValueDefinition();
        this.state = 191;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FlinkSqlParser.COMMA) {
            this.state = 187;
            this.match(FlinkSqlParser.COMMA);
            this.state = 188;
            this.keyValueDefinition();
            this.state = 193;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 194;
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

AlterDatabaseContext.prototype.ALTER = function() {
    return this.getToken(FlinkSqlParser.ALTER, 0);
};

AlterDatabaseContext.prototype.DATABASE = function() {
    return this.getToken(FlinkSqlParser.DATABASE, 0);
};

AlterDatabaseContext.prototype.uid = function() {
    return this.getTypedRuleContext(UidContext,0);
};

AlterDatabaseContext.prototype.setKeyValueDefinition = function() {
    return this.getTypedRuleContext(SetKeyValueDefinitionContext,0);
};

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
        this.state = 196;
        this.match(FlinkSqlParser.ALTER);
        this.state = 197;
        this.match(FlinkSqlParser.DATABASE);
        this.state = 198;
        this.uid();
        this.state = 199;
        this.setKeyValueDefinition();
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

DropTableContext.prototype.DROP = function() {
    return this.getToken(FlinkSqlParser.DROP, 0);
};

DropTableContext.prototype.TABLE = function() {
    return this.getToken(FlinkSqlParser.TABLE, 0);
};

DropTableContext.prototype.ifExists = function() {
    return this.getTypedRuleContext(IfExistsContext,0);
};

DropTableContext.prototype.uid = function() {
    return this.getTypedRuleContext(UidContext,0);
};

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
        this.state = 203;
        this.match(FlinkSqlParser.DROP);
        this.state = 204;
        this.match(FlinkSqlParser.TABLE);
        this.state = 205;
        this.ifExists();
        this.state = 206;
        this.uid();
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
    this.dropType = null; // Token
    return this;
}

DropDatabaseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DropDatabaseContext.prototype.constructor = DropDatabaseContext;

DropDatabaseContext.prototype.DROP = function() {
    return this.getToken(FlinkSqlParser.DROP, 0);
};

DropDatabaseContext.prototype.DATABASE = function() {
    return this.getToken(FlinkSqlParser.DATABASE, 0);
};

DropDatabaseContext.prototype.ifExists = function() {
    return this.getTypedRuleContext(IfExistsContext,0);
};

DropDatabaseContext.prototype.uid = function() {
    return this.getTypedRuleContext(UidContext,0);
};

DropDatabaseContext.prototype.RESTRICT = function() {
    return this.getToken(FlinkSqlParser.RESTRICT, 0);
};

DropDatabaseContext.prototype.CASCADE = function() {
    return this.getToken(FlinkSqlParser.CASCADE, 0);
};

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
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 208;
        this.match(FlinkSqlParser.DROP);
        this.state = 209;
        this.match(FlinkSqlParser.DATABASE);
        this.state = 210;
        this.ifExists();
        this.state = 211;
        this.uid();
        this.state = 213;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FlinkSqlParser.CASCADE || _la===FlinkSqlParser.RESTRICT) {
            this.state = 212;
            localctx.dropType = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===FlinkSqlParser.CASCADE || _la===FlinkSqlParser.RESTRICT)) {
                localctx.dropType = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
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

DropViewContext.prototype.DROP = function() {
    return this.getToken(FlinkSqlParser.DROP, 0);
};

DropViewContext.prototype.VIEW = function() {
    return this.getToken(FlinkSqlParser.VIEW, 0);
};

DropViewContext.prototype.ifExists = function() {
    return this.getTypedRuleContext(IfExistsContext,0);
};

DropViewContext.prototype.uid = function() {
    return this.getTypedRuleContext(UidContext,0);
};

DropViewContext.prototype.TEMPORARY = function() {
    return this.getToken(FlinkSqlParser.TEMPORARY, 0);
};

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
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 215;
        this.match(FlinkSqlParser.DROP);
        this.state = 217;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FlinkSqlParser.TEMPORARY) {
            this.state = 216;
            this.match(FlinkSqlParser.TEMPORARY);
        }

        this.state = 219;
        this.match(FlinkSqlParser.VIEW);
        this.state = 220;
        this.ifExists();
        this.state = 221;
        this.uid();
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

DropFunctionContext.prototype.DROP = function() {
    return this.getToken(FlinkSqlParser.DROP, 0);
};

DropFunctionContext.prototype.FUNCTION = function() {
    return this.getToken(FlinkSqlParser.FUNCTION, 0);
};

DropFunctionContext.prototype.ifExists = function() {
    return this.getTypedRuleContext(IfExistsContext,0);
};

DropFunctionContext.prototype.uid = function() {
    return this.getTypedRuleContext(UidContext,0);
};

DropFunctionContext.prototype.TEMPORARY = function() {
    return this.getToken(FlinkSqlParser.TEMPORARY, 0);
};

DropFunctionContext.prototype.SYSTEM = function() {
    return this.getToken(FlinkSqlParser.SYSTEM, 0);
};

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
        this.state = 223;
        this.match(FlinkSqlParser.DROP);
        this.state = 227;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        if(la_===1) {
            this.state = 224;
            this.match(FlinkSqlParser.TEMPORARY);

        } else if(la_===2) {
            this.state = 225;
            this.match(FlinkSqlParser.TEMPORARY);
            this.state = 226;
            this.match(FlinkSqlParser.SYSTEM);

        }
        this.state = 229;
        this.match(FlinkSqlParser.FUNCTION);
        this.state = 230;
        this.ifExists();
        this.state = 231;
        this.uid();
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

InsertStatementContext.prototype.INSERT = function() {
    return this.getToken(FlinkSqlParser.INSERT, 0);
};

InsertStatementContext.prototype.uid = function() {
    return this.getTypedRuleContext(UidContext,0);
};

InsertStatementContext.prototype.INTO = function() {
    return this.getToken(FlinkSqlParser.INTO, 0);
};

InsertStatementContext.prototype.OVERWRITE = function() {
    return this.getToken(FlinkSqlParser.OVERWRITE, 0);
};

InsertStatementContext.prototype.selectStatement = function() {
    return this.getTypedRuleContext(SelectStatementContext,0);
};

InsertStatementContext.prototype.valuesDefinition = function() {
    return this.getTypedRuleContext(ValuesDefinitionContext,0);
};

InsertStatementContext.prototype.insertPartitionDefinition = function() {
    return this.getTypedRuleContext(InsertPartitionDefinitionContext,0);
};

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
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 235;
        this.match(FlinkSqlParser.INSERT);
        this.state = 236;
        _la = this._input.LA(1);
        if(!(_la===FlinkSqlParser.INTO || _la===FlinkSqlParser.OVERWRITE)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 237;
        this.uid();
        this.state = 243;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FlinkSqlParser.PARTITION:
        case FlinkSqlParser.SEMICOLON:
            this.state = 239;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===FlinkSqlParser.PARTITION) {
                this.state = 238;
                this.insertPartitionDefinition();
            }

            this.state = 241;
            this.selectStatement();
            break;
        case FlinkSqlParser.VALUES:
            this.state = 242;
            this.valuesDefinition();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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


function InsertPartitionDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_insertPartitionDefinition;
    return this;
}

InsertPartitionDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InsertPartitionDefinitionContext.prototype.constructor = InsertPartitionDefinitionContext;

InsertPartitionDefinitionContext.prototype.PARTITION = function() {
    return this.getToken(FlinkSqlParser.PARTITION, 0);
};

InsertPartitionDefinitionContext.prototype.LR_BRACKET = function() {
    return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
};

InsertPartitionDefinitionContext.prototype.keyValueDefinition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(KeyValueDefinitionContext);
    } else {
        return this.getTypedRuleContext(KeyValueDefinitionContext,i);
    }
};

InsertPartitionDefinitionContext.prototype.RR_BRACKET = function() {
    return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
};

InsertPartitionDefinitionContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FlinkSqlParser.COMMA);
    } else {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
};


InsertPartitionDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterInsertPartitionDefinition(this);
	}
};

InsertPartitionDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitInsertPartitionDefinition(this);
	}
};

InsertPartitionDefinitionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitInsertPartitionDefinition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.InsertPartitionDefinitionContext = InsertPartitionDefinitionContext;

FlinkSqlParser.prototype.insertPartitionDefinition = function() {

    var localctx = new InsertPartitionDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, FlinkSqlParser.RULE_insertPartitionDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 245;
        this.match(FlinkSqlParser.PARTITION);
        this.state = 246;
        this.match(FlinkSqlParser.LR_BRACKET);
        this.state = 247;
        this.keyValueDefinition();
        this.state = 252;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FlinkSqlParser.COMMA) {
            this.state = 248;
            this.match(FlinkSqlParser.COMMA);
            this.state = 249;
            this.keyValueDefinition();
            this.state = 254;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 255;
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


function ValuesDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_valuesDefinition;
    return this;
}

ValuesDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesDefinitionContext.prototype.constructor = ValuesDefinitionContext;

ValuesDefinitionContext.prototype.VALUES = function() {
    return this.getToken(FlinkSqlParser.VALUES, 0);
};

ValuesDefinitionContext.prototype.valuesRowDefinition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValuesRowDefinitionContext);
    } else {
        return this.getTypedRuleContext(ValuesRowDefinitionContext,i);
    }
};

ValuesDefinitionContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FlinkSqlParser.COMMA);
    } else {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
};


ValuesDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterValuesDefinition(this);
	}
};

ValuesDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitValuesDefinition(this);
	}
};

ValuesDefinitionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitValuesDefinition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.ValuesDefinitionContext = ValuesDefinitionContext;

FlinkSqlParser.prototype.valuesDefinition = function() {

    var localctx = new ValuesDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, FlinkSqlParser.RULE_valuesDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 257;
        this.match(FlinkSqlParser.VALUES);
        this.state = 258;
        this.valuesRowDefinition();
        this.state = 263;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FlinkSqlParser.COMMA) {
            this.state = 259;
            this.match(FlinkSqlParser.COMMA);
            this.state = 260;
            this.valuesRowDefinition();
            this.state = 265;
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


function ValuesRowDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_valuesRowDefinition;
    return this;
}

ValuesRowDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesRowDefinitionContext.prototype.constructor = ValuesRowDefinitionContext;

ValuesRowDefinitionContext.prototype.LR_BRACKET = function() {
    return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
};

ValuesRowDefinitionContext.prototype.RR_BRACKET = function() {
    return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
};

ValuesRowDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterValuesRowDefinition(this);
	}
};

ValuesRowDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitValuesRowDefinition(this);
	}
};

ValuesRowDefinitionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitValuesRowDefinition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.ValuesRowDefinitionContext = ValuesRowDefinitionContext;

FlinkSqlParser.prototype.valuesRowDefinition = function() {

    var localctx = new ValuesRowDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, FlinkSqlParser.RULE_valuesRowDefinition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 266;
        this.match(FlinkSqlParser.LR_BRACKET);
        this.state = 270;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 267;
                this.matchWildcard(); 
            }
            this.state = 272;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
        }

        this.state = 273;
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


function UidListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_uidList;
    return this;
}

UidListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UidListContext.prototype.constructor = UidListContext;

UidListContext.prototype.uid = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(UidContext);
    } else {
        return this.getTypedRuleContext(UidContext,i);
    }
};

UidListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FlinkSqlParser.COMMA);
    } else {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
};


UidListContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterUidList(this);
	}
};

UidListContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitUidList(this);
	}
};

UidListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitUidList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.UidListContext = UidListContext;

FlinkSqlParser.prototype.uidList = function() {

    var localctx = new UidListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, FlinkSqlParser.RULE_uidList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 275;
        this.uid();
        this.state = 280;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FlinkSqlParser.COMMA) {
            this.state = 276;
            this.match(FlinkSqlParser.COMMA);
            this.state = 277;
            this.uid();
            this.state = 282;
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


function UidContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_uid;
    return this;
}

UidContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UidContext.prototype.constructor = UidContext;

UidContext.prototype.ID = function() {
    return this.getToken(FlinkSqlParser.ID, 0);
};

UidContext.prototype.DOT_ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FlinkSqlParser.DOT_ID);
    } else {
        return this.getToken(FlinkSqlParser.DOT_ID, i);
    }
};


UidContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterUid(this);
	}
};

UidContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitUid(this);
	}
};

UidContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitUid(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.UidContext = UidContext;

FlinkSqlParser.prototype.uid = function() {

    var localctx = new UidContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, FlinkSqlParser.RULE_uid);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 283;
        this.match(FlinkSqlParser.ID);
        this.state = 287;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 284;
                this.match(FlinkSqlParser.DOT_ID); 
            }
            this.state = 289;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
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


function WithOptionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_withOption;
    return this;
}

WithOptionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WithOptionContext.prototype.constructor = WithOptionContext;

WithOptionContext.prototype.WITH = function() {
    return this.getToken(FlinkSqlParser.WITH, 0);
};

WithOptionContext.prototype.LR_BRACKET = function() {
    return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
};

WithOptionContext.prototype.keyValueDefinition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(KeyValueDefinitionContext);
    } else {
        return this.getTypedRuleContext(KeyValueDefinitionContext,i);
    }
};

WithOptionContext.prototype.RR_BRACKET = function() {
    return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
};

WithOptionContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FlinkSqlParser.COMMA);
    } else {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
};


WithOptionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterWithOption(this);
	}
};

WithOptionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitWithOption(this);
	}
};

WithOptionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitWithOption(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.WithOptionContext = WithOptionContext;

FlinkSqlParser.prototype.withOption = function() {

    var localctx = new WithOptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, FlinkSqlParser.RULE_withOption);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 290;
        this.match(FlinkSqlParser.WITH);
        this.state = 291;
        this.match(FlinkSqlParser.LR_BRACKET);
        this.state = 292;
        this.keyValueDefinition();
        this.state = 297;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FlinkSqlParser.COMMA) {
            this.state = 293;
            this.match(FlinkSqlParser.COMMA);
            this.state = 294;
            this.keyValueDefinition();
            this.state = 299;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 300;
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


function IfNotExistsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_ifNotExists;
    return this;
}

IfNotExistsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfNotExistsContext.prototype.constructor = IfNotExistsContext;

IfNotExistsContext.prototype.IF = function() {
    return this.getToken(FlinkSqlParser.IF, 0);
};

IfNotExistsContext.prototype.NOT = function() {
    return this.getToken(FlinkSqlParser.NOT, 0);
};

IfNotExistsContext.prototype.EXISTS = function() {
    return this.getToken(FlinkSqlParser.EXISTS, 0);
};

IfNotExistsContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterIfNotExists(this);
	}
};

IfNotExistsContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitIfNotExists(this);
	}
};

IfNotExistsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitIfNotExists(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.IfNotExistsContext = IfNotExistsContext;

FlinkSqlParser.prototype.ifNotExists = function() {

    var localctx = new IfNotExistsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, FlinkSqlParser.RULE_ifNotExists);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 302;
        this.match(FlinkSqlParser.IF);
        this.state = 303;
        this.match(FlinkSqlParser.NOT);
        this.state = 304;
        this.match(FlinkSqlParser.EXISTS);
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


function IfExistsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_ifExists;
    return this;
}

IfExistsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfExistsContext.prototype.constructor = IfExistsContext;

IfExistsContext.prototype.IF = function() {
    return this.getToken(FlinkSqlParser.IF, 0);
};

IfExistsContext.prototype.EXISTS = function() {
    return this.getToken(FlinkSqlParser.EXISTS, 0);
};

IfExistsContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterIfExists(this);
	}
};

IfExistsContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitIfExists(this);
	}
};

IfExistsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitIfExists(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.IfExistsContext = IfExistsContext;

FlinkSqlParser.prototype.ifExists = function() {

    var localctx = new IfExistsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, FlinkSqlParser.RULE_ifExists);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 306;
        this.match(FlinkSqlParser.IF);
        this.state = 307;
        this.match(FlinkSqlParser.EXISTS);
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


function KeyValueDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParser.RULE_keyValueDefinition;
    return this;
}

KeyValueDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeyValueDefinitionContext.prototype.constructor = KeyValueDefinitionContext;

KeyValueDefinitionContext.prototype.DOUBLE_QUOTE_ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FlinkSqlParser.DOUBLE_QUOTE_ID);
    } else {
        return this.getToken(FlinkSqlParser.DOUBLE_QUOTE_ID, i);
    }
};


KeyValueDefinitionContext.prototype.EQUAL_SYMBOL = function() {
    return this.getToken(FlinkSqlParser.EQUAL_SYMBOL, 0);
};

KeyValueDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.enterKeyValueDefinition(this);
	}
};

KeyValueDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlinkSqlParserListener ) {
        listener.exitKeyValueDefinition(this);
	}
};

KeyValueDefinitionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FlinkSqlParserVisitor ) {
        return visitor.visitKeyValueDefinition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FlinkSqlParser.KeyValueDefinitionContext = KeyValueDefinitionContext;

FlinkSqlParser.prototype.keyValueDefinition = function() {

    var localctx = new KeyValueDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, FlinkSqlParser.RULE_keyValueDefinition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 309;
        this.match(FlinkSqlParser.DOUBLE_QUOTE_ID);
        this.state = 310;
        this.match(FlinkSqlParser.EQUAL_SYMBOL);
        this.state = 311;
        this.match(FlinkSqlParser.DOUBLE_QUOTE_ID);
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
