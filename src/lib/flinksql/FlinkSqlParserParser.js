// Generated from /Users/erindeng/Desktop/dt-sql-parser/src/grammar/flinksql/FlinkSqlParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FlinkSqlParserListener = require('./FlinkSqlParserListener').FlinkSqlParserListener;
var FlinkSqlParserVisitor = require('./FlinkSqlParserVisitor').FlinkSqlParserVisitor;

var grammarFileName = "FlinkSqlParser.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0133\u0144\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
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
    "\u0018\u0005\u0018\u00d1\n\u0018\u0003\u0018\u0003\u0018\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0005\u0019\u00d8\n\u0019\u0003\u0019\u0003",
    "\u0019\u0005\u0019\u00dc\n\u0019\u0003\u001a\u0003\u001a\u0005\u001a",
    "\u00e0\n\u001a\u0003\u001a\u0003\u001a\u0005\u001a\u00e4\n\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0005",
    "\u001b\u00ec\n\u001b\u0003\u001b\u0003\u001b\u0005\u001b\u00f0\n\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0005\u001d\u00fa\n\u001d\u0003\u001d\u0003",
    "\u001d\u0005\u001d\u00fe\n\u001d\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0007\u001e\u0105\n\u001e\f\u001e\u000e\u001e",
    "\u0108\u000b\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0007\u001f\u0110\n\u001f\f\u001f\u000e\u001f\u0113",
    "\u000b\u001f\u0003 \u0003 \u0007 \u0117\n \f \u000e \u011a\u000b \u0003",
    " \u0003 \u0003!\u0003!\u0003!\u0007!\u0121\n!\f!\u000e!\u0124\u000b",
    "!\u0003\"\u0003\"\u0007\"\u0128\n\"\f\"\u000e\"\u012b\u000b\"\u0003",
    "#\u0003#\u0003#\u0003#\u0003#\u0007#\u0132\n#\f#\u000e#\u0135\u000b",
    "#\u0003#\u0003#\u0003$\u0003$\u0003$\u0003$\u0003%\u0003%\u0003%\u0003",
    "&\u0003&\u0003&\u0003&\u0003&\u0004\u0118\u0129\u0002\'\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e ",
    "\"$&(*,.02468:<>@BDFHJ\u0002\u0005\u0003\u0002\u0108\u011e\u0003\u0002",
    "\u00c0\u00c1\u0004\u0002PP\u0094\u0094\u0002\u0144\u0002L\u0003\u0002",
    "\u0002\u0002\u0004O\u0003\u0002\u0002\u0002\u0006X\u0003\u0002\u0002",
    "\u0002\b]\u0003\u0002\u0002\u0002\n_\u0003\u0002\u0002\u0002\fl\u0003",
    "\u0002\u0002\u0002\u000ep\u0003\u0002\u0002\u0002\u0010r\u0003\u0002",
    "\u0002\u0002\u0012\u0084\u0003\u0002\u0002\u0002\u0014\u0087\u0003\u0002",
    "\u0002\u0002\u0016\u0089\u0003\u0002\u0002\u0002\u0018\u008b\u0003\u0002",
    "\u0002\u0002\u001a\u008f\u0003\u0002\u0002\u0002\u001c\u0097\u0003\u0002",
    "\u0002\u0002\u001e\u0099\u0003\u0002\u0002\u0002 \u00a1\u0003\u0002",
    "\u0002\u0002\"\u00ad\u0003\u0002\u0002\u0002$\u00af\u0003\u0002\u0002",
    "\u0002&\u00b6\u0003\u0002\u0002\u0002(\u00ba\u0003\u0002\u0002\u0002",
    "*\u00c6\u0003\u0002\u0002\u0002,\u00cb\u0003\u0002\u0002\u0002.\u00cd",
    "\u0003\u0002\u0002\u00020\u00d4\u0003\u0002\u0002\u00022\u00dd\u0003",
    "\u0002\u0002\u00024\u00e7\u0003\u0002\u0002\u00026\u00f3\u0003\u0002",
    "\u0002\u00028\u00f5\u0003\u0002\u0002\u0002:\u00ff\u0003\u0002\u0002",
    "\u0002<\u010b\u0003\u0002\u0002\u0002>\u0114\u0003\u0002\u0002\u0002",
    "@\u011d\u0003\u0002\u0002\u0002B\u0125\u0003\u0002\u0002\u0002D\u012c",
    "\u0003\u0002\u0002\u0002F\u0138\u0003\u0002\u0002\u0002H\u013c\u0003",
    "\u0002\u0002\u0002J\u013f\u0003\u0002\u0002\u0002LM\u0005\u0004\u0003",
    "\u0002MN\u0007\u0002\u0002\u0003N\u0003\u0003\u0002\u0002\u0002OP\u0005",
    "\u0006\u0004\u0002PQ\u0007\u0002\u0002\u0003Q\u0005\u0003\u0002\u0002",
    "\u0002RS\u0005\b\u0005\u0002ST\u0007\u012b\u0002\u0002TW\u0003\u0002",
    "\u0002\u0002UW\u0005\n\u0006\u0002VR\u0003\u0002\u0002\u0002VU\u0003",
    "\u0002\u0002\u0002WZ\u0003\u0002\u0002\u0002XV\u0003\u0002\u0002\u0002",
    "XY\u0003\u0002\u0002\u0002Y\u0007\u0003\u0002\u0002\u0002ZX\u0003\u0002",
    "\u0002\u0002[^\u0005\f\u0007\u0002\\^\u0005\u000e\b\u0002][\u0003\u0002",
    "\u0002\u0002]\\\u0003\u0002\u0002\u0002^\t\u0003\u0002\u0002\u0002_",
    "`\u0007\u012b\u0002\u0002`\u000b\u0003\u0002\u0002\u0002am\u0005\u0010",
    "\t\u0002bm\u0005\u001e\u0010\u0002cm\u0005 \u0011\u0002dm\u0005\"\u0012",
    "\u0002em\u0005$\u0013\u0002fm\u0005*\u0016\u0002gm\u0005,\u0017\u0002",
    "hm\u0005.\u0018\u0002im\u00050\u0019\u0002jm\u00052\u001a\u0002km\u0005",
    "4\u001b\u0002la\u0003\u0002\u0002\u0002lb\u0003\u0002\u0002\u0002lc",
    "\u0003\u0002\u0002\u0002ld\u0003\u0002\u0002\u0002le\u0003\u0002\u0002",
    "\u0002lf\u0003\u0002\u0002\u0002lg\u0003\u0002\u0002\u0002lh\u0003\u0002",
    "\u0002\u0002li\u0003\u0002\u0002\u0002lj\u0003\u0002\u0002\u0002lk\u0003",
    "\u0002\u0002\u0002m\r\u0003\u0002\u0002\u0002nq\u00056\u001c\u0002o",
    "q\u00058\u001d\u0002pn\u0003\u0002\u0002\u0002po\u0003\u0002\u0002\u0002",
    "q\u000f\u0003\u0002\u0002\u0002rs\u0007I\u0002\u0002st\u0007J\u0002",
    "\u0002tu\u0005B\"\u0002uv\u0007\u0128\u0002\u0002v{\u0005\u0012\n\u0002",
    "wx\u0007\u012a\u0002\u0002xz\u0005\u0012\n\u0002yw\u0003\u0002\u0002",
    "\u0002z}\u0003\u0002\u0002\u0002{y\u0003\u0002\u0002\u0002{|\u0003\u0002",
    "\u0002\u0002|~\u0003\u0002\u0002\u0002}{\u0003\u0002\u0002\u0002~\u0080",
    "\u0007\u0129\u0002\u0002\u007f\u0081\u0005\u0018\r\u0002\u0080\u007f",
    "\u0003\u0002\u0002\u0002\u0080\u0081\u0003\u0002\u0002\u0002\u0081\u0082",
    "\u0003\u0002\u0002\u0002\u0082\u0083\u0005D#\u0002\u0083\u0011\u0003",
    "\u0002\u0002\u0002\u0084\u0085\u0005\u0014\u000b\u0002\u0085\u0086\u0005",
    "\u0016\f\u0002\u0086\u0013\u0003\u0002\u0002\u0002\u0087\u0088\u0007",
    "\u0106\u0002\u0002\u0088\u0015\u0003\u0002\u0002\u0002\u0089\u008a\t",
    "\u0002\u0002\u0002\u008a\u0017\u0003\u0002\u0002\u0002\u008b\u008c\u0007",
    "\u00cf\u0002\u0002\u008c\u008d\u0007\u0010\u0002\u0002\u008d\u008e\u0005",
    "\u001a\u000e\u0002\u008e\u0019\u0003\u0002\u0002\u0002\u008f\u0094\u0005",
    "\u001c\u000f\u0002\u0090\u0091\u0007\u012a\u0002\u0002\u0091\u0093\u0005",
    "\u001c\u000f\u0002\u0092\u0090\u0003\u0002\u0002\u0002\u0093\u0096\u0003",
    "\u0002\u0002\u0002\u0094\u0092\u0003\u0002\u0002\u0002\u0094\u0095\u0003",
    "\u0002\u0002\u0002\u0095\u001b\u0003\u0002\u0002\u0002\u0096\u0094\u0003",
    "\u0002\u0002\u0002\u0097\u0098\u0007\u0106\u0002\u0002\u0098\u001d\u0003",
    "\u0002\u0002\u0002\u0099\u009a\u0007I\u0002\u0002\u009a\u009c\u0007",
    "\u00c7\u0002\u0002\u009b\u009d\u0005F$\u0002\u009c\u009b\u0003\u0002",
    "\u0002\u0002\u009c\u009d\u0003\u0002\u0002\u0002\u009d\u009e\u0003\u0002",
    "\u0002\u0002\u009e\u009f\u0005B\"\u0002\u009f\u00a0\u0005D#\u0002\u00a0",
    "\u001f\u0003\u0002\u0002\u0002\u00a1\u00a3\u0007I\u0002\u0002\u00a2",
    "\u00a4\u0007\u00ae\u0002\u0002\u00a3\u00a2\u0003\u0002\u0002\u0002\u00a3",
    "\u00a4\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002\u0002\u00a5",
    "\u00a7\u0007L\u0002\u0002\u00a6\u00a8\u0005F$\u0002\u00a7\u00a6\u0003",
    "\u0002\u0002\u0002\u00a7\u00a8\u0003\u0002\u0002\u0002\u00a8\u00a9\u0003",
    "\u0002\u0002\u0002\u00a9\u00aa\u0005B\"\u0002\u00aa\u00ab\u0007\n\u0002",
    "\u0002\u00ab\u00ac\u00056\u001c\u0002\u00ac!\u0003\u0002\u0002\u0002",
    "\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ae#\u0003\u0002\u0002\u0002",
    "\u00af\u00b0\u0007g\u0002\u0002\u00b0\u00b1\u0007J\u0002\u0002\u00b1",
    "\u00b4\u0005B\"\u0002\u00b2\u00b5\u0005&\u0014\u0002\u00b3\u00b5\u0005",
    "(\u0015\u0002\u00b4\u00b2\u0003\u0002\u0002\u0002\u00b4\u00b3\u0003",
    "\u0002\u0002\u0002\u00b5%\u0003\u0002\u0002\u0002\u00b6\u00b7\u0007",
    "h\u0002\u0002\u00b7\u00b8\u0007d\u0002\u0002\u00b8\u00b9\u0005B\"\u0002",
    "\u00b9\'\u0003\u0002\u0002\u0002\u00ba\u00bb\u0007k\u0002\u0002\u00bb",
    "\u00bc\u0007\u0128\u0002\u0002\u00bc\u00c1\u0005J&\u0002\u00bd\u00be",
    "\u0007\u012a\u0002\u0002\u00be\u00c0\u0005J&\u0002\u00bf\u00bd\u0003",
    "\u0002\u0002\u0002\u00c0\u00c3\u0003\u0002\u0002\u0002\u00c1\u00bf\u0003",
    "\u0002\u0002\u0002\u00c1\u00c2\u0003\u0002\u0002\u0002\u00c2\u00c4\u0003",
    "\u0002\u0002\u0002\u00c3\u00c1\u0003\u0002\u0002\u0002\u00c4\u00c5\u0007",
    "\u0129\u0002\u0002\u00c5)\u0003\u0002\u0002\u0002\u00c6\u00c7\u0007",
    "g\u0002\u0002\u00c7\u00c8\u0007\u00c7\u0002\u0002\u00c8\u00c9\u0005",
    "B\"\u0002\u00c9\u00ca\u0005(\u0015\u0002\u00ca+\u0003\u0002\u0002\u0002",
    "\u00cb\u00cc\u0003\u0002\u0002\u0002\u00cc-\u0003\u0002\u0002\u0002",
    "\u00cd\u00ce\u0007_\u0002\u0002\u00ce\u00d0\u0007J\u0002\u0002\u00cf",
    "\u00d1\u0005H%\u0002\u00d0\u00cf\u0003\u0002\u0002\u0002\u00d0\u00d1",
    "\u0003\u0002\u0002\u0002\u00d1\u00d2\u0003\u0002\u0002\u0002\u00d2\u00d3",
    "\u0005B\"\u0002\u00d3/\u0003\u0002\u0002\u0002\u00d4\u00d5\u0007_\u0002",
    "\u0002\u00d5\u00d7\u0007\u00c7\u0002\u0002\u00d6\u00d8\u0005H%\u0002",
    "\u00d7\u00d6\u0003\u0002\u0002\u0002\u00d7\u00d8\u0003\u0002\u0002\u0002",
    "\u00d8\u00d9\u0003\u0002\u0002\u0002\u00d9\u00db\u0005B\"\u0002\u00da",
    "\u00dc\t\u0003\u0002\u0002\u00db\u00da\u0003\u0002\u0002\u0002\u00db",
    "\u00dc\u0003\u0002\u0002\u0002\u00dc1\u0003\u0002\u0002\u0002\u00dd",
    "\u00df\u0007_\u0002\u0002\u00de\u00e0\u0007\u00ae\u0002\u0002\u00df",
    "\u00de\u0003\u0002\u0002\u0002\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0",
    "\u00e1\u0003\u0002\u0002\u0002\u00e1\u00e3\u0007L\u0002\u0002\u00e2",
    "\u00e4\u0005H%\u0002\u00e3\u00e2\u0003\u0002\u0002\u0002\u00e3\u00e4",
    "\u0003\u0002\u0002\u0002\u00e4\u00e5\u0003\u0002\u0002\u0002\u00e5\u00e6",
    "\u0005B\"\u0002\u00e63\u0003\u0002\u0002\u0002\u00e7\u00eb\u0007_\u0002",
    "\u0002\u00e8\u00ec\u0007\u00ae\u0002\u0002\u00e9\u00ea\u0007\u00ae\u0002",
    "\u0002\u00ea\u00ec\u0007\u0107\u0002\u0002\u00eb\u00e8\u0003\u0002\u0002",
    "\u0002\u00eb\u00e9\u0003\u0002\u0002\u0002\u00eb\u00ec\u0003\u0002\u0002",
    "\u0002\u00ec\u00ed\u0003\u0002\u0002\u0002\u00ed\u00ef\u0007\u00a5\u0002",
    "\u0002\u00ee\u00f0\u0005H%\u0002\u00ef\u00ee\u0003\u0002\u0002\u0002",
    "\u00ef\u00f0\u0003\u0002\u0002\u0002\u00f0\u00f1\u0003\u0002\u0002\u0002",
    "\u00f1\u00f2\u0005B\"\u0002\u00f25\u0003\u0002\u0002\u0002\u00f3\u00f4",
    "\u0003\u0002\u0002\u0002\u00f47\u0003\u0002\u0002\u0002\u00f5\u00f6",
    "\u0007N\u0002\u0002\u00f6\u00f7\t\u0004\u0002\u0002\u00f7\u00fd\u0005",
    "B\"\u0002\u00f8\u00fa\u0005:\u001e\u0002\u00f9\u00f8\u0003\u0002\u0002",
    "\u0002\u00f9\u00fa\u0003\u0002\u0002\u0002\u00fa\u00fb\u0003\u0002\u0002",
    "\u0002\u00fb\u00fe\u00056\u001c\u0002\u00fc\u00fe\u0005<\u001f\u0002",
    "\u00fd\u00f9\u0003\u0002\u0002\u0002\u00fd\u00fc\u0003\u0002\u0002\u0002",
    "\u00fe9\u0003\u0002\u0002\u0002\u00ff\u0100\u0007=\u0002\u0002\u0100",
    "\u0101\u0007\u0128\u0002\u0002\u0101\u0106\u0005J&\u0002\u0102\u0103",
    "\u0007\u012a\u0002\u0002\u0103\u0105\u0005J&\u0002\u0104\u0102\u0003",
    "\u0002\u0002\u0002\u0105\u0108\u0003\u0002\u0002\u0002\u0106\u0104\u0003",
    "\u0002\u0002\u0002\u0106\u0107\u0003\u0002\u0002\u0002\u0107\u0109\u0003",
    "\u0002\u0002\u0002\u0108\u0106\u0003\u0002\u0002\u0002\u0109\u010a\u0007",
    "\u0129\u0002\u0002\u010a;\u0003\u0002\u0002\u0002\u010b\u010c\u0007",
    "H\u0002\u0002\u010c\u0111\u0005> \u0002\u010d\u010e\u0007\u012a\u0002",
    "\u0002\u010e\u0110\u0005> \u0002\u010f\u010d\u0003\u0002\u0002\u0002",
    "\u0110\u0113\u0003\u0002\u0002\u0002\u0111\u010f\u0003\u0002\u0002\u0002",
    "\u0111\u0112\u0003\u0002\u0002\u0002\u0112=\u0003\u0002\u0002\u0002",
    "\u0113\u0111\u0003\u0002\u0002\u0002\u0114\u0118\u0007\u0128\u0002\u0002",
    "\u0115\u0117\u000b\u0002\u0002\u0002\u0116\u0115\u0003\u0002\u0002\u0002",
    "\u0117\u011a\u0003\u0002\u0002\u0002\u0118\u0119\u0003\u0002\u0002\u0002",
    "\u0118\u0116\u0003\u0002\u0002\u0002\u0119\u011b\u0003\u0002\u0002\u0002",
    "\u011a\u0118\u0003\u0002\u0002\u0002\u011b\u011c\u0007\u0129\u0002\u0002",
    "\u011c?\u0003\u0002\u0002\u0002\u011d\u0122\u0005B\"\u0002\u011e\u011f",
    "\u0007\u0003\u0002\u0002\u011f\u0121\u0005B\"\u0002\u0120\u011e\u0003",
    "\u0002\u0002\u0002\u0121\u0124\u0003\u0002\u0002\u0002\u0122\u0120\u0003",
    "\u0002\u0002\u0002\u0122\u0123\u0003\u0002\u0002\u0002\u0123A\u0003",
    "\u0002\u0002\u0002\u0124\u0122\u0003\u0002\u0002\u0002\u0125\u0129\u0007",
    "\u0106\u0002\u0002\u0126\u0128\u0007\u0105\u0002\u0002\u0127\u0126\u0003",
    "\u0002\u0002\u0002\u0128\u012b\u0003\u0002\u0002\u0002\u0129\u012a\u0003",
    "\u0002\u0002\u0002\u0129\u0127\u0003\u0002\u0002\u0002\u012aC\u0003",
    "\u0002\u0002\u0002\u012b\u0129\u0003\u0002\u0002\u0002\u012c\u012d\u0007",
    "G\u0002\u0002\u012d\u012e\u0007\u0128\u0002\u0002\u012e\u0133\u0005",
    "J&\u0002\u012f\u0130\u0007\u012a\u0002\u0002\u0130\u0132\u0005J&\u0002",
    "\u0131\u012f\u0003\u0002\u0002\u0002\u0132\u0135\u0003\u0002\u0002\u0002",
    "\u0133\u0131\u0003\u0002\u0002\u0002\u0133\u0134\u0003\u0002\u0002\u0002",
    "\u0134\u0136\u0003\u0002\u0002\u0002\u0135\u0133\u0003\u0002\u0002\u0002",
    "\u0136\u0137\u0007\u0129\u0002\u0002\u0137E\u0003\u0002\u0002\u0002",
    "\u0138\u0139\u0007w\u0002\u0002\u0139\u013a\u0007\u001c\u0002\u0002",
    "\u013a\u013b\u0007\u001e\u0002\u0002\u013bG\u0003\u0002\u0002\u0002",
    "\u013c\u013d\u0007w\u0002\u0002\u013d\u013e\u0007\u001e\u0002\u0002",
    "\u013eI\u0003\u0002\u0002\u0002\u013f\u0140\u0007\u0104\u0002\u0002",
    "\u0140\u0141\u0007\u011f\u0002\u0002\u0141\u0142\u0007\u0104\u0002\u0002",
    "\u0142K\u0003\u0002\u0002\u0002\u001eVX]lp{\u0080\u0094\u009c\u00a3",
    "\u00a7\u00b4\u00c1\u00d0\u00d7\u00db\u00df\u00e3\u00eb\u00ef\u00f9\u00fd",
    "\u0106\u0111\u0118\u0122\u0129\u0133"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "','", null, null, null, "'SELECT'", "'FROM'", 
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
                     "')'", null, "';'", "'@'", "'0'", "'1'", "'2'", "'''", 
                     "'\"'", "'`'", "':'" ];

var symbolicNames = [ null, null, "SPEC_MYSQL_COMMENT", "COMMENT_INPUT", 
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

function FlinkSqlParserParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

FlinkSqlParserParser.prototype = Object.create(antlr4.Parser.prototype);
FlinkSqlParserParser.prototype.constructor = FlinkSqlParserParser;

Object.defineProperty(FlinkSqlParserParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

FlinkSqlParserParser.EOF = antlr4.Token.EOF;
FlinkSqlParserParser.T__0 = 1;
FlinkSqlParserParser.SPACE = 1;
FlinkSqlParserParser.SPEC_MYSQL_COMMENT = 2;
FlinkSqlParserParser.COMMENT_INPUT = 3;
FlinkSqlParserParser.LINE_COMMENT = 4;
FlinkSqlParserParser.SELECT = 5;
FlinkSqlParserParser.FROM = 6;
FlinkSqlParserParser.ADD = 7;
FlinkSqlParserParser.AS = 8;
FlinkSqlParserParser.ALL = 9;
FlinkSqlParserParser.ANY = 10;
FlinkSqlParserParser.DISTINCT = 11;
FlinkSqlParserParser.WHERE = 12;
FlinkSqlParserParser.GROUP = 13;
FlinkSqlParserParser.BY = 14;
FlinkSqlParserParser.GROUPING = 15;
FlinkSqlParserParser.SETS = 16;
FlinkSqlParserParser.CUBE = 17;
FlinkSqlParserParser.ROLLUP = 18;
FlinkSqlParserParser.ORDER = 19;
FlinkSqlParserParser.HAVING = 20;
FlinkSqlParserParser.LIMIT = 21;
FlinkSqlParserParser.AT = 22;
FlinkSqlParserParser.OR = 23;
FlinkSqlParserParser.AND = 24;
FlinkSqlParserParser.IN = 25;
FlinkSqlParserParser.NOT = 26;
FlinkSqlParserParser.NO = 27;
FlinkSqlParserParser.EXISTS = 28;
FlinkSqlParserParser.BETWEEN = 29;
FlinkSqlParserParser.LIKE = 30;
FlinkSqlParserParser.RLIKE = 31;
FlinkSqlParserParser.IS = 32;
FlinkSqlParserParser.TRUE = 33;
FlinkSqlParserParser.FALSE = 34;
FlinkSqlParserParser.NULLS = 35;
FlinkSqlParserParser.ASC = 36;
FlinkSqlParserParser.DESC = 37;
FlinkSqlParserParser.FOR = 38;
FlinkSqlParserParser.INTERVAL = 39;
FlinkSqlParserParser.CASE = 40;
FlinkSqlParserParser.WHEN = 41;
FlinkSqlParserParser.THEN = 42;
FlinkSqlParserParser.ELSE = 43;
FlinkSqlParserParser.END = 44;
FlinkSqlParserParser.JOIN = 45;
FlinkSqlParserParser.CROSS = 46;
FlinkSqlParserParser.OUTER = 47;
FlinkSqlParserParser.INNER = 48;
FlinkSqlParserParser.LEFT = 49;
FlinkSqlParserParser.SEMI = 50;
FlinkSqlParserParser.RIGHT = 51;
FlinkSqlParserParser.FULL = 52;
FlinkSqlParserParser.NATURAL = 53;
FlinkSqlParserParser.ON = 54;
FlinkSqlParserParser.PIVOT = 55;
FlinkSqlParserParser.LATERAL = 56;
FlinkSqlParserParser.WINDOW = 57;
FlinkSqlParserParser.OVER = 58;
FlinkSqlParserParser.PARTITION = 59;
FlinkSqlParserParser.RANGE = 60;
FlinkSqlParserParser.ROWS = 61;
FlinkSqlParserParser.UNBOUNDED = 62;
FlinkSqlParserParser.PRECEDING = 63;
FlinkSqlParserParser.FOLLOWING = 64;
FlinkSqlParserParser.CURRENT = 65;
FlinkSqlParserParser.FIRST = 66;
FlinkSqlParserParser.AFTER = 67;
FlinkSqlParserParser.LAST = 68;
FlinkSqlParserParser.WITH = 69;
FlinkSqlParserParser.VALUES = 70;
FlinkSqlParserParser.CREATE = 71;
FlinkSqlParserParser.TABLE = 72;
FlinkSqlParserParser.DIRECTORY = 73;
FlinkSqlParserParser.VIEW = 74;
FlinkSqlParserParser.REPLACE = 75;
FlinkSqlParserParser.INSERT = 76;
FlinkSqlParserParser.DELETE = 77;
FlinkSqlParserParser.INTO = 78;
FlinkSqlParserParser.DESCRIBE = 79;
FlinkSqlParserParser.EXPLAIN = 80;
FlinkSqlParserParser.FORMAT = 81;
FlinkSqlParserParser.LOGICAL = 82;
FlinkSqlParserParser.CODEGEN = 83;
FlinkSqlParserParser.COST = 84;
FlinkSqlParserParser.CAST = 85;
FlinkSqlParserParser.SHOW = 86;
FlinkSqlParserParser.TABLES = 87;
FlinkSqlParserParser.COLUMNS = 88;
FlinkSqlParserParser.COLUMN = 89;
FlinkSqlParserParser.USE = 90;
FlinkSqlParserParser.PARTITIONS = 91;
FlinkSqlParserParser.FUNCTIONS = 92;
FlinkSqlParserParser.DROP = 93;
FlinkSqlParserParser.UNION = 94;
FlinkSqlParserParser.EXCEPT = 95;
FlinkSqlParserParser.SETMINUS = 96;
FlinkSqlParserParser.INTERSECT = 97;
FlinkSqlParserParser.TO = 98;
FlinkSqlParserParser.TABLESAMPLE = 99;
FlinkSqlParserParser.STRATIFY = 100;
FlinkSqlParserParser.ALTER = 101;
FlinkSqlParserParser.RENAME = 102;
FlinkSqlParserParser.STRUCT = 103;
FlinkSqlParserParser.COMMENT = 104;
FlinkSqlParserParser.SET = 105;
FlinkSqlParserParser.RESET = 106;
FlinkSqlParserParser.DATA = 107;
FlinkSqlParserParser.START = 108;
FlinkSqlParserParser.TRANSACTION = 109;
FlinkSqlParserParser.COMMIT = 110;
FlinkSqlParserParser.ROLLBACK = 111;
FlinkSqlParserParser.MACRO = 112;
FlinkSqlParserParser.IGNORE = 113;
FlinkSqlParserParser.BOTH = 114;
FlinkSqlParserParser.LEADING = 115;
FlinkSqlParserParser.TRAILING = 116;
FlinkSqlParserParser.IF = 117;
FlinkSqlParserParser.POSITION = 118;
FlinkSqlParserParser.EXTRACT = 119;
FlinkSqlParserParser.EQ = 120;
FlinkSqlParserParser.NSEQ = 121;
FlinkSqlParserParser.NEQ = 122;
FlinkSqlParserParser.NEQJ = 123;
FlinkSqlParserParser.LT = 124;
FlinkSqlParserParser.LTE = 125;
FlinkSqlParserParser.GT = 126;
FlinkSqlParserParser.GTE = 127;
FlinkSqlParserParser.PLUS = 128;
FlinkSqlParserParser.MINUS = 129;
FlinkSqlParserParser.ASTERISK = 130;
FlinkSqlParserParser.SLASH = 131;
FlinkSqlParserParser.PERCENT = 132;
FlinkSqlParserParser.DIV = 133;
FlinkSqlParserParser.TILDE = 134;
FlinkSqlParserParser.AMPERSAND = 135;
FlinkSqlParserParser.PIPE = 136;
FlinkSqlParserParser.CONCAT_PIPE = 137;
FlinkSqlParserParser.HAT = 138;
FlinkSqlParserParser.PERCENTLIT = 139;
FlinkSqlParserParser.BUCKET = 140;
FlinkSqlParserParser.OUT = 141;
FlinkSqlParserParser.OF = 142;
FlinkSqlParserParser.SORT = 143;
FlinkSqlParserParser.CLUSTER = 144;
FlinkSqlParserParser.DISTRIBUTE = 145;
FlinkSqlParserParser.OVERWRITE = 146;
FlinkSqlParserParser.TRANSFORM = 147;
FlinkSqlParserParser.REDUCE = 148;
FlinkSqlParserParser.USING = 149;
FlinkSqlParserParser.SERDE = 150;
FlinkSqlParserParser.SERDEPROPERTIES = 151;
FlinkSqlParserParser.RECORDREADER = 152;
FlinkSqlParserParser.RECORDWRITER = 153;
FlinkSqlParserParser.DELIMITED = 154;
FlinkSqlParserParser.FIELDS = 155;
FlinkSqlParserParser.TERMINATED = 156;
FlinkSqlParserParser.COLLECTION = 157;
FlinkSqlParserParser.ITEMS = 158;
FlinkSqlParserParser.KEYS = 159;
FlinkSqlParserParser.ESCAPED = 160;
FlinkSqlParserParser.LINES = 161;
FlinkSqlParserParser.SEPARATED = 162;
FlinkSqlParserParser.FUNCTION = 163;
FlinkSqlParserParser.EXTENDED = 164;
FlinkSqlParserParser.REFRESH = 165;
FlinkSqlParserParser.CLEAR = 166;
FlinkSqlParserParser.CACHE = 167;
FlinkSqlParserParser.UNCACHE = 168;
FlinkSqlParserParser.LAZY = 169;
FlinkSqlParserParser.FORMATTED = 170;
FlinkSqlParserParser.GLOBAL = 171;
FlinkSqlParserParser.TEMPORARY = 172;
FlinkSqlParserParser.OPTIONS = 173;
FlinkSqlParserParser.UNSET = 174;
FlinkSqlParserParser.TBLPROPERTIES = 175;
FlinkSqlParserParser.DBPROPERTIES = 176;
FlinkSqlParserParser.BUCKETS = 177;
FlinkSqlParserParser.SKEWED = 178;
FlinkSqlParserParser.STORED = 179;
FlinkSqlParserParser.DIRECTORIES = 180;
FlinkSqlParserParser.LOCATION = 181;
FlinkSqlParserParser.EXCHANGE = 182;
FlinkSqlParserParser.ARCHIVE = 183;
FlinkSqlParserParser.UNARCHIVE = 184;
FlinkSqlParserParser.FILEFORMAT = 185;
FlinkSqlParserParser.TOUCH = 186;
FlinkSqlParserParser.COMPACT = 187;
FlinkSqlParserParser.CONCATENATE = 188;
FlinkSqlParserParser.CHANGE = 189;
FlinkSqlParserParser.CASCADE = 190;
FlinkSqlParserParser.RESTRICT = 191;
FlinkSqlParserParser.CLUSTERED = 192;
FlinkSqlParserParser.SORTED = 193;
FlinkSqlParserParser.PURGE = 194;
FlinkSqlParserParser.INPUTFORMAT = 195;
FlinkSqlParserParser.OUTPUTFORMAT = 196;
FlinkSqlParserParser.DATABASE = 197;
FlinkSqlParserParser.DATABASES = 198;
FlinkSqlParserParser.DFS = 199;
FlinkSqlParserParser.TRUNCATE = 200;
FlinkSqlParserParser.ANALYZE = 201;
FlinkSqlParserParser.COMPUTE = 202;
FlinkSqlParserParser.LIST = 203;
FlinkSqlParserParser.STATISTICS = 204;
FlinkSqlParserParser.PARTITIONED = 205;
FlinkSqlParserParser.EXTERNAL = 206;
FlinkSqlParserParser.DEFINED = 207;
FlinkSqlParserParser.REVOKE = 208;
FlinkSqlParserParser.GRANT = 209;
FlinkSqlParserParser.LOCK = 210;
FlinkSqlParserParser.UNLOCK = 211;
FlinkSqlParserParser.MSCK = 212;
FlinkSqlParserParser.REPAIR = 213;
FlinkSqlParserParser.RECOVER = 214;
FlinkSqlParserParser.EXPORT = 215;
FlinkSqlParserParser.IMPORT = 216;
FlinkSqlParserParser.LOAD = 217;
FlinkSqlParserParser.ROLE = 218;
FlinkSqlParserParser.ROLES = 219;
FlinkSqlParserParser.COMPACTIONS = 220;
FlinkSqlParserParser.PRINCIPALS = 221;
FlinkSqlParserParser.TRANSACTIONS = 222;
FlinkSqlParserParser.INDEX = 223;
FlinkSqlParserParser.INDEXES = 224;
FlinkSqlParserParser.LOCKS = 225;
FlinkSqlParserParser.OPTION = 226;
FlinkSqlParserParser.ANTI = 227;
FlinkSqlParserParser.LOCAL = 228;
FlinkSqlParserParser.INPATH = 229;
FlinkSqlParserParser.WATERMARK = 230;
FlinkSqlParserParser.UNNEST = 231;
FlinkSqlParserParser.MATCH_RECOGNIZE = 232;
FlinkSqlParserParser.MEASURES = 233;
FlinkSqlParserParser.ONE = 234;
FlinkSqlParserParser.PER = 235;
FlinkSqlParserParser.MATCH = 236;
FlinkSqlParserParser.SKIP1 = 237;
FlinkSqlParserParser.NEXT = 238;
FlinkSqlParserParser.PAST = 239;
FlinkSqlParserParser.PATTERN = 240;
FlinkSqlParserParser.WITHIN = 241;
FlinkSqlParserParser.DEFINE = 242;
FlinkSqlParserParser.BIGINT_LITERAL = 243;
FlinkSqlParserParser.SMALLINT_LITERAL = 244;
FlinkSqlParserParser.TINYINT_LITERAL = 245;
FlinkSqlParserParser.INTEGER_VALUE = 246;
FlinkSqlParserParser.DECIMAL_VALUE = 247;
FlinkSqlParserParser.DOUBLE_LITERAL = 248;
FlinkSqlParserParser.BIGDECIMAL_LITERAL = 249;
FlinkSqlParserParser.IDENTIFIER = 250;
FlinkSqlParserParser.BACKQUOTED_IDENTIFIER = 251;
FlinkSqlParserParser.SIMPLE_COMMENT = 252;
FlinkSqlParserParser.BRACKETED_EMPTY_COMMENT = 253;
FlinkSqlParserParser.BRACKETED_COMMENT = 254;
FlinkSqlParserParser.WS = 255;
FlinkSqlParserParser.UNRECOGNIZED = 256;
FlinkSqlParserParser.REVERSE_QUOTE_ID = 257;
FlinkSqlParserParser.DOUBLE_QUOTE_ID = 258;
FlinkSqlParserParser.DOT_ID = 259;
FlinkSqlParserParser.ID = 260;
FlinkSqlParserParser.SYSTEM = 261;
FlinkSqlParserParser.STRING = 262;
FlinkSqlParserParser.ARRAY = 263;
FlinkSqlParserParser.MAP = 264;
FlinkSqlParserParser.CHAR = 265;
FlinkSqlParserParser.VARCHAR = 266;
FlinkSqlParserParser.BINARY = 267;
FlinkSqlParserParser.VARBINARY = 268;
FlinkSqlParserParser.BYTES = 269;
FlinkSqlParserParser.DECIMAL = 270;
FlinkSqlParserParser.TINYINT = 271;
FlinkSqlParserParser.SMALLINT = 272;
FlinkSqlParserParser.INT = 273;
FlinkSqlParserParser.BIGINT = 274;
FlinkSqlParserParser.FLOAT = 275;
FlinkSqlParserParser.DOUBLE = 276;
FlinkSqlParserParser.DATE = 277;
FlinkSqlParserParser.TIME = 278;
FlinkSqlParserParser.TIMESTAMP = 279;
FlinkSqlParserParser.MULTISET = 280;
FlinkSqlParserParser.BOOLEAN = 281;
FlinkSqlParserParser.RAW = 282;
FlinkSqlParserParser.ROW = 283;
FlinkSqlParserParser.NULL = 284;
FlinkSqlParserParser.EQUAL_SYMBOL = 285;
FlinkSqlParserParser.GREATER_SYMBOL = 286;
FlinkSqlParserParser.LESS_SYMBOL = 287;
FlinkSqlParserParser.EXCLAMATION_SYMBOL = 288;
FlinkSqlParserParser.BIT_NOT_OP = 289;
FlinkSqlParserParser.BIT_OR_OP = 290;
FlinkSqlParserParser.BIT_AND_OP = 291;
FlinkSqlParserParser.BIT_XOR_OP = 292;
FlinkSqlParserParser.DOT = 293;
FlinkSqlParserParser.LR_BRACKET = 294;
FlinkSqlParserParser.RR_BRACKET = 295;
FlinkSqlParserParser.COMMA = 296;
FlinkSqlParserParser.SEMICOLON = 297;
FlinkSqlParserParser.AT_SIGN = 298;
FlinkSqlParserParser.ZERO_DECIMAL = 299;
FlinkSqlParserParser.ONE_DECIMAL = 300;
FlinkSqlParserParser.TWO_DECIMAL = 301;
FlinkSqlParserParser.SINGLE_QUOTE_SYMB = 302;
FlinkSqlParserParser.DOUBLE_QUOTE_SYMB = 303;
FlinkSqlParserParser.REVERSE_QUOTE_SYMB = 304;
FlinkSqlParserParser.COLON_SYMB = 305;

FlinkSqlParserParser.RULE_program = 0;
FlinkSqlParserParser.RULE_statement = 1;
FlinkSqlParserParser.RULE_sqlStatements = 2;
FlinkSqlParserParser.RULE_sqlStatement = 3;
FlinkSqlParserParser.RULE_emptyStatement = 4;
FlinkSqlParserParser.RULE_ddlStatement = 5;
FlinkSqlParserParser.RULE_dmlStatement = 6;
FlinkSqlParserParser.RULE_createTable = 7;
FlinkSqlParserParser.RULE_columnOptionDefinition = 8;
FlinkSqlParserParser.RULE_columnName = 9;
FlinkSqlParserParser.RULE_columnType = 10;
FlinkSqlParserParser.RULE_partitionDefinition = 11;
FlinkSqlParserParser.RULE_partitionColumnDefinition = 12;
FlinkSqlParserParser.RULE_partitionColumnName = 13;
FlinkSqlParserParser.RULE_createDatabase = 14;
FlinkSqlParserParser.RULE_createView = 15;
FlinkSqlParserParser.RULE_createFunction = 16;
FlinkSqlParserParser.RULE_alterTable = 17;
FlinkSqlParserParser.RULE_renameDefinition = 18;
FlinkSqlParserParser.RULE_setKeyValueDefinition = 19;
FlinkSqlParserParser.RULE_alterDatabase = 20;
FlinkSqlParserParser.RULE_alterFunction = 21;
FlinkSqlParserParser.RULE_dropTable = 22;
FlinkSqlParserParser.RULE_dropDatabase = 23;
FlinkSqlParserParser.RULE_dropView = 24;
FlinkSqlParserParser.RULE_dropFunction = 25;
FlinkSqlParserParser.RULE_selectStatement = 26;
FlinkSqlParserParser.RULE_insertStatement = 27;
FlinkSqlParserParser.RULE_insertPartitionDefinition = 28;
FlinkSqlParserParser.RULE_valuesDefinition = 29;
FlinkSqlParserParser.RULE_valuesRowDefinition = 30;
FlinkSqlParserParser.RULE_uidList = 31;
FlinkSqlParserParser.RULE_uid = 32;
FlinkSqlParserParser.RULE_withOption = 33;
FlinkSqlParserParser.RULE_ifNotExists = 34;
FlinkSqlParserParser.RULE_ifExists = 35;
FlinkSqlParserParser.RULE_keyValueDefinition = 36;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlinkSqlParserParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

ProgramContext.prototype.EOF = function() {
    return this.getToken(FlinkSqlParserParser.EOF, 0);
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




FlinkSqlParserParser.ProgramContext = ProgramContext;

FlinkSqlParserParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, FlinkSqlParserParser.RULE_program);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        this.statement();
        this.state = 75;
        this.match(FlinkSqlParserParser.EOF);
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
    this.ruleIndex = FlinkSqlParserParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.sqlStatements = function() {
    return this.getTypedRuleContext(SqlStatementsContext,0);
};

StatementContext.prototype.EOF = function() {
    return this.getToken(FlinkSqlParserParser.EOF, 0);
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




FlinkSqlParserParser.StatementContext = StatementContext;

FlinkSqlParserParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, FlinkSqlParserParser.RULE_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 77;
        this.sqlStatements();
        this.state = 78;
        this.match(FlinkSqlParserParser.EOF);
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
    this.ruleIndex = FlinkSqlParserParser.RULE_sqlStatements;
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
        return this.getTokens(FlinkSqlParserParser.SEMICOLON);
    } else {
        return this.getToken(FlinkSqlParserParser.SEMICOLON, i);
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




FlinkSqlParserParser.SqlStatementsContext = SqlStatementsContext;

FlinkSqlParserParser.prototype.sqlStatements = function() {

    var localctx = new SqlStatementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, FlinkSqlParserParser.RULE_sqlStatements);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 86;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 71)) & ~0x1f) == 0 && ((1 << (_la - 71)) & ((1 << (FlinkSqlParserParser.CREATE - 71)) | (1 << (FlinkSqlParserParser.INSERT - 71)) | (1 << (FlinkSqlParserParser.DROP - 71)) | (1 << (FlinkSqlParserParser.ALTER - 71)))) !== 0) || _la===FlinkSqlParserParser.SEMICOLON) {
            this.state = 84;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
            switch(la_) {
            case 1:
                this.state = 80;
                this.sqlStatement();
                this.state = 81;
                this.match(FlinkSqlParserParser.SEMICOLON);
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
    this.ruleIndex = FlinkSqlParserParser.RULE_sqlStatement;
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




FlinkSqlParserParser.SqlStatementContext = SqlStatementContext;

FlinkSqlParserParser.prototype.sqlStatement = function() {

    var localctx = new SqlStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, FlinkSqlParserParser.RULE_sqlStatement);
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
    this.ruleIndex = FlinkSqlParserParser.RULE_emptyStatement;
    return this;
}

EmptyStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EmptyStatementContext.prototype.constructor = EmptyStatementContext;

EmptyStatementContext.prototype.SEMICOLON = function() {
    return this.getToken(FlinkSqlParserParser.SEMICOLON, 0);
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




FlinkSqlParserParser.EmptyStatementContext = EmptyStatementContext;

FlinkSqlParserParser.prototype.emptyStatement = function() {

    var localctx = new EmptyStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, FlinkSqlParserParser.RULE_emptyStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        this.match(FlinkSqlParserParser.SEMICOLON);
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
    this.ruleIndex = FlinkSqlParserParser.RULE_ddlStatement;
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




FlinkSqlParserParser.DdlStatementContext = DdlStatementContext;

FlinkSqlParserParser.prototype.ddlStatement = function() {

    var localctx = new DdlStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, FlinkSqlParserParser.RULE_ddlStatement);
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
    this.ruleIndex = FlinkSqlParserParser.RULE_dmlStatement;
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




FlinkSqlParserParser.DmlStatementContext = DmlStatementContext;

FlinkSqlParserParser.prototype.dmlStatement = function() {

    var localctx = new DmlStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, FlinkSqlParserParser.RULE_dmlStatement);
    try {
        this.state = 110;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FlinkSqlParserParser.SEMICOLON:
            this.enterOuterAlt(localctx, 1);
            this.state = 108;
            this.selectStatement();
            break;
        case FlinkSqlParserParser.INSERT:
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
    this.ruleIndex = FlinkSqlParserParser.RULE_createTable;
    return this;
}

CreateTableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CreateTableContext.prototype.constructor = CreateTableContext;

CreateTableContext.prototype.CREATE = function() {
    return this.getToken(FlinkSqlParserParser.CREATE, 0);
};

CreateTableContext.prototype.TABLE = function() {
    return this.getToken(FlinkSqlParserParser.TABLE, 0);
};

CreateTableContext.prototype.uid = function() {
    return this.getTypedRuleContext(UidContext,0);
};

CreateTableContext.prototype.LR_BRACKET = function() {
    return this.getToken(FlinkSqlParserParser.LR_BRACKET, 0);
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
    return this.getToken(FlinkSqlParserParser.RR_BRACKET, 0);
};

CreateTableContext.prototype.withOption = function() {
    return this.getTypedRuleContext(WithOptionContext,0);
};

CreateTableContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FlinkSqlParserParser.COMMA);
    } else {
        return this.getToken(FlinkSqlParserParser.COMMA, i);
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




FlinkSqlParserParser.CreateTableContext = CreateTableContext;

FlinkSqlParserParser.prototype.createTable = function() {

    var localctx = new CreateTableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, FlinkSqlParserParser.RULE_createTable);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 112;
        this.match(FlinkSqlParserParser.CREATE);
        this.state = 113;
        this.match(FlinkSqlParserParser.TABLE);
        this.state = 114;
        this.uid();
        this.state = 115;
        this.match(FlinkSqlParserParser.LR_BRACKET);
        this.state = 116;
        this.columnOptionDefinition();
        this.state = 121;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FlinkSqlParserParser.COMMA) {
            this.state = 117;
            this.match(FlinkSqlParserParser.COMMA);
            this.state = 118;
            this.columnOptionDefinition();
            this.state = 123;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 124;
        this.match(FlinkSqlParserParser.RR_BRACKET);
        this.state = 126;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FlinkSqlParserParser.PARTITIONED) {
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
    this.ruleIndex = FlinkSqlParserParser.RULE_columnOptionDefinition;
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




FlinkSqlParserParser.ColumnOptionDefinitionContext = ColumnOptionDefinitionContext;

FlinkSqlParserParser.prototype.columnOptionDefinition = function() {

    var localctx = new ColumnOptionDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, FlinkSqlParserParser.RULE_columnOptionDefinition);
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
    this.ruleIndex = FlinkSqlParserParser.RULE_columnName;
    return this;
}

ColumnNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColumnNameContext.prototype.constructor = ColumnNameContext;

ColumnNameContext.prototype.ID = function() {
    return this.getToken(FlinkSqlParserParser.ID, 0);
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




FlinkSqlParserParser.ColumnNameContext = ColumnNameContext;

FlinkSqlParserParser.prototype.columnName = function() {

    var localctx = new ColumnNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, FlinkSqlParserParser.RULE_columnName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 133;
        this.match(FlinkSqlParserParser.ID);
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
    this.ruleIndex = FlinkSqlParserParser.RULE_columnType;
    return this;
}

ColumnTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColumnTypeContext.prototype.constructor = ColumnTypeContext;

ColumnTypeContext.prototype.CHAR = function() {
    return this.getToken(FlinkSqlParserParser.CHAR, 0);
};

ColumnTypeContext.prototype.VARCHAR = function() {
    return this.getToken(FlinkSqlParserParser.VARCHAR, 0);
};

ColumnTypeContext.prototype.STRING = function() {
    return this.getToken(FlinkSqlParserParser.STRING, 0);
};

ColumnTypeContext.prototype.BINARY = function() {
    return this.getToken(FlinkSqlParserParser.BINARY, 0);
};

ColumnTypeContext.prototype.VARBINARY = function() {
    return this.getToken(FlinkSqlParserParser.VARBINARY, 0);
};

ColumnTypeContext.prototype.BYTES = function() {
    return this.getToken(FlinkSqlParserParser.BYTES, 0);
};

ColumnTypeContext.prototype.DECIMAL = function() {
    return this.getToken(FlinkSqlParserParser.DECIMAL, 0);
};

ColumnTypeContext.prototype.TINYINT = function() {
    return this.getToken(FlinkSqlParserParser.TINYINT, 0);
};

ColumnTypeContext.prototype.SMALLINT = function() {
    return this.getToken(FlinkSqlParserParser.SMALLINT, 0);
};

ColumnTypeContext.prototype.INT = function() {
    return this.getToken(FlinkSqlParserParser.INT, 0);
};

ColumnTypeContext.prototype.BIGINT = function() {
    return this.getToken(FlinkSqlParserParser.BIGINT, 0);
};

ColumnTypeContext.prototype.FLOAT = function() {
    return this.getToken(FlinkSqlParserParser.FLOAT, 0);
};

ColumnTypeContext.prototype.DOUBLE = function() {
    return this.getToken(FlinkSqlParserParser.DOUBLE, 0);
};

ColumnTypeContext.prototype.DATE = function() {
    return this.getToken(FlinkSqlParserParser.DATE, 0);
};

ColumnTypeContext.prototype.TIME = function() {
    return this.getToken(FlinkSqlParserParser.TIME, 0);
};

ColumnTypeContext.prototype.TIMESTAMP = function() {
    return this.getToken(FlinkSqlParserParser.TIMESTAMP, 0);
};

ColumnTypeContext.prototype.ARRAY = function() {
    return this.getToken(FlinkSqlParserParser.ARRAY, 0);
};

ColumnTypeContext.prototype.MAP = function() {
    return this.getToken(FlinkSqlParserParser.MAP, 0);
};

ColumnTypeContext.prototype.MULTISET = function() {
    return this.getToken(FlinkSqlParserParser.MULTISET, 0);
};

ColumnTypeContext.prototype.ROW = function() {
    return this.getToken(FlinkSqlParserParser.ROW, 0);
};

ColumnTypeContext.prototype.BOOLEAN = function() {
    return this.getToken(FlinkSqlParserParser.BOOLEAN, 0);
};

ColumnTypeContext.prototype.RAW = function() {
    return this.getToken(FlinkSqlParserParser.RAW, 0);
};

ColumnTypeContext.prototype.NULL = function() {
    return this.getToken(FlinkSqlParserParser.NULL, 0);
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




FlinkSqlParserParser.ColumnTypeContext = ColumnTypeContext;

FlinkSqlParserParser.prototype.columnType = function() {

    var localctx = new ColumnTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, FlinkSqlParserParser.RULE_columnType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 135;
        _la = this._input.LA(1);
        if(!(((((_la - 262)) & ~0x1f) == 0 && ((1 << (_la - 262)) & ((1 << (FlinkSqlParserParser.STRING - 262)) | (1 << (FlinkSqlParserParser.ARRAY - 262)) | (1 << (FlinkSqlParserParser.MAP - 262)) | (1 << (FlinkSqlParserParser.CHAR - 262)) | (1 << (FlinkSqlParserParser.VARCHAR - 262)) | (1 << (FlinkSqlParserParser.BINARY - 262)) | (1 << (FlinkSqlParserParser.VARBINARY - 262)) | (1 << (FlinkSqlParserParser.BYTES - 262)) | (1 << (FlinkSqlParserParser.DECIMAL - 262)) | (1 << (FlinkSqlParserParser.TINYINT - 262)) | (1 << (FlinkSqlParserParser.SMALLINT - 262)) | (1 << (FlinkSqlParserParser.INT - 262)) | (1 << (FlinkSqlParserParser.BIGINT - 262)) | (1 << (FlinkSqlParserParser.FLOAT - 262)) | (1 << (FlinkSqlParserParser.DOUBLE - 262)) | (1 << (FlinkSqlParserParser.DATE - 262)) | (1 << (FlinkSqlParserParser.TIME - 262)) | (1 << (FlinkSqlParserParser.TIMESTAMP - 262)) | (1 << (FlinkSqlParserParser.MULTISET - 262)) | (1 << (FlinkSqlParserParser.BOOLEAN - 262)) | (1 << (FlinkSqlParserParser.RAW - 262)) | (1 << (FlinkSqlParserParser.ROW - 262)) | (1 << (FlinkSqlParserParser.NULL - 262)))) !== 0))) {
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
    this.ruleIndex = FlinkSqlParserParser.RULE_partitionDefinition;
    return this;
}

PartitionDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PartitionDefinitionContext.prototype.constructor = PartitionDefinitionContext;

PartitionDefinitionContext.prototype.PARTITIONED = function() {
    return this.getToken(FlinkSqlParserParser.PARTITIONED, 0);
};

PartitionDefinitionContext.prototype.BY = function() {
    return this.getToken(FlinkSqlParserParser.BY, 0);
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




FlinkSqlParserParser.PartitionDefinitionContext = PartitionDefinitionContext;

FlinkSqlParserParser.prototype.partitionDefinition = function() {

    var localctx = new PartitionDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, FlinkSqlParserParser.RULE_partitionDefinition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 137;
        this.match(FlinkSqlParserParser.PARTITIONED);
        this.state = 138;
        this.match(FlinkSqlParserParser.BY);
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
    this.ruleIndex = FlinkSqlParserParser.RULE_partitionColumnDefinition;
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
        return this.getTokens(FlinkSqlParserParser.COMMA);
    } else {
        return this.getToken(FlinkSqlParserParser.COMMA, i);
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




FlinkSqlParserParser.PartitionColumnDefinitionContext = PartitionColumnDefinitionContext;

FlinkSqlParserParser.prototype.partitionColumnDefinition = function() {

    var localctx = new PartitionColumnDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, FlinkSqlParserParser.RULE_partitionColumnDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 141;
        this.partitionColumnName();
        this.state = 146;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FlinkSqlParserParser.COMMA) {
            this.state = 142;
            this.match(FlinkSqlParserParser.COMMA);
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
    this.ruleIndex = FlinkSqlParserParser.RULE_partitionColumnName;
    return this;
}

PartitionColumnNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PartitionColumnNameContext.prototype.constructor = PartitionColumnNameContext;

PartitionColumnNameContext.prototype.ID = function() {
    return this.getToken(FlinkSqlParserParser.ID, 0);
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




FlinkSqlParserParser.PartitionColumnNameContext = PartitionColumnNameContext;

FlinkSqlParserParser.prototype.partitionColumnName = function() {

    var localctx = new PartitionColumnNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, FlinkSqlParserParser.RULE_partitionColumnName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 149;
        this.match(FlinkSqlParserParser.ID);
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
    this.ruleIndex = FlinkSqlParserParser.RULE_createDatabase;
    return this;
}

CreateDatabaseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CreateDatabaseContext.prototype.constructor = CreateDatabaseContext;

CreateDatabaseContext.prototype.CREATE = function() {
    return this.getToken(FlinkSqlParserParser.CREATE, 0);
};

CreateDatabaseContext.prototype.DATABASE = function() {
    return this.getToken(FlinkSqlParserParser.DATABASE, 0);
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




FlinkSqlParserParser.CreateDatabaseContext = CreateDatabaseContext;

FlinkSqlParserParser.prototype.createDatabase = function() {

    var localctx = new CreateDatabaseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, FlinkSqlParserParser.RULE_createDatabase);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 151;
        this.match(FlinkSqlParserParser.CREATE);
        this.state = 152;
        this.match(FlinkSqlParserParser.DATABASE);
        this.state = 154;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FlinkSqlParserParser.IF) {
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
    this.ruleIndex = FlinkSqlParserParser.RULE_createView;
    return this;
}

CreateViewContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CreateViewContext.prototype.constructor = CreateViewContext;

CreateViewContext.prototype.CREATE = function() {
    return this.getToken(FlinkSqlParserParser.CREATE, 0);
};

CreateViewContext.prototype.VIEW = function() {
    return this.getToken(FlinkSqlParserParser.VIEW, 0);
};

CreateViewContext.prototype.uid = function() {
    return this.getTypedRuleContext(UidContext,0);
};

CreateViewContext.prototype.AS = function() {
    return this.getToken(FlinkSqlParserParser.AS, 0);
};

CreateViewContext.prototype.selectStatement = function() {
    return this.getTypedRuleContext(SelectStatementContext,0);
};

CreateViewContext.prototype.TEMPORARY = function() {
    return this.getToken(FlinkSqlParserParser.TEMPORARY, 0);
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




FlinkSqlParserParser.CreateViewContext = CreateViewContext;

FlinkSqlParserParser.prototype.createView = function() {

    var localctx = new CreateViewContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, FlinkSqlParserParser.RULE_createView);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 159;
        this.match(FlinkSqlParserParser.CREATE);
        this.state = 161;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FlinkSqlParserParser.TEMPORARY) {
            this.state = 160;
            this.match(FlinkSqlParserParser.TEMPORARY);
        }

        this.state = 163;
        this.match(FlinkSqlParserParser.VIEW);
        this.state = 165;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FlinkSqlParserParser.IF) {
            this.state = 164;
            this.ifNotExists();
        }

        this.state = 167;
        this.uid();
        this.state = 168;
        this.match(FlinkSqlParserParser.AS);
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
    this.ruleIndex = FlinkSqlParserParser.RULE_createFunction;
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




FlinkSqlParserParser.CreateFunctionContext = CreateFunctionContext;

FlinkSqlParserParser.prototype.createFunction = function() {

    var localctx = new CreateFunctionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, FlinkSqlParserParser.RULE_createFunction);
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
    this.ruleIndex = FlinkSqlParserParser.RULE_alterTable;
    return this;
}

AlterTableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AlterTableContext.prototype.constructor = AlterTableContext;

AlterTableContext.prototype.ALTER = function() {
    return this.getToken(FlinkSqlParserParser.ALTER, 0);
};

AlterTableContext.prototype.TABLE = function() {
    return this.getToken(FlinkSqlParserParser.TABLE, 0);
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




FlinkSqlParserParser.AlterTableContext = AlterTableContext;

FlinkSqlParserParser.prototype.alterTable = function() {

    var localctx = new AlterTableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, FlinkSqlParserParser.RULE_alterTable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 173;
        this.match(FlinkSqlParserParser.ALTER);
        this.state = 174;
        this.match(FlinkSqlParserParser.TABLE);
        this.state = 175;
        this.uid();
        this.state = 178;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FlinkSqlParserParser.RENAME:
            this.state = 176;
            this.renameDefinition();
            break;
        case FlinkSqlParserParser.SET:
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
    this.ruleIndex = FlinkSqlParserParser.RULE_renameDefinition;
    return this;
}

RenameDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RenameDefinitionContext.prototype.constructor = RenameDefinitionContext;

RenameDefinitionContext.prototype.RENAME = function() {
    return this.getToken(FlinkSqlParserParser.RENAME, 0);
};

RenameDefinitionContext.prototype.TO = function() {
    return this.getToken(FlinkSqlParserParser.TO, 0);
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




FlinkSqlParserParser.RenameDefinitionContext = RenameDefinitionContext;

FlinkSqlParserParser.prototype.renameDefinition = function() {

    var localctx = new RenameDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, FlinkSqlParserParser.RULE_renameDefinition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 180;
        this.match(FlinkSqlParserParser.RENAME);
        this.state = 181;
        this.match(FlinkSqlParserParser.TO);
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
    this.ruleIndex = FlinkSqlParserParser.RULE_setKeyValueDefinition;
    return this;
}

SetKeyValueDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetKeyValueDefinitionContext.prototype.constructor = SetKeyValueDefinitionContext;

SetKeyValueDefinitionContext.prototype.SET = function() {
    return this.getToken(FlinkSqlParserParser.SET, 0);
};

SetKeyValueDefinitionContext.prototype.LR_BRACKET = function() {
    return this.getToken(FlinkSqlParserParser.LR_BRACKET, 0);
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
    return this.getToken(FlinkSqlParserParser.RR_BRACKET, 0);
};

SetKeyValueDefinitionContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FlinkSqlParserParser.COMMA);
    } else {
        return this.getToken(FlinkSqlParserParser.COMMA, i);
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




FlinkSqlParserParser.SetKeyValueDefinitionContext = SetKeyValueDefinitionContext;

FlinkSqlParserParser.prototype.setKeyValueDefinition = function() {

    var localctx = new SetKeyValueDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, FlinkSqlParserParser.RULE_setKeyValueDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 184;
        this.match(FlinkSqlParserParser.SET);
        this.state = 185;
        this.match(FlinkSqlParserParser.LR_BRACKET);
        this.state = 186;
        this.keyValueDefinition();
        this.state = 191;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FlinkSqlParserParser.COMMA) {
            this.state = 187;
            this.match(FlinkSqlParserParser.COMMA);
            this.state = 188;
            this.keyValueDefinition();
            this.state = 193;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 194;
        this.match(FlinkSqlParserParser.RR_BRACKET);
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
    this.ruleIndex = FlinkSqlParserParser.RULE_alterDatabase;
    return this;
}

AlterDatabaseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AlterDatabaseContext.prototype.constructor = AlterDatabaseContext;

AlterDatabaseContext.prototype.ALTER = function() {
    return this.getToken(FlinkSqlParserParser.ALTER, 0);
};

AlterDatabaseContext.prototype.DATABASE = function() {
    return this.getToken(FlinkSqlParserParser.DATABASE, 0);
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




FlinkSqlParserParser.AlterDatabaseContext = AlterDatabaseContext;

FlinkSqlParserParser.prototype.alterDatabase = function() {

    var localctx = new AlterDatabaseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, FlinkSqlParserParser.RULE_alterDatabase);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 196;
        this.match(FlinkSqlParserParser.ALTER);
        this.state = 197;
        this.match(FlinkSqlParserParser.DATABASE);
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
    this.ruleIndex = FlinkSqlParserParser.RULE_alterFunction;
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




FlinkSqlParserParser.AlterFunctionContext = AlterFunctionContext;

FlinkSqlParserParser.prototype.alterFunction = function() {

    var localctx = new AlterFunctionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, FlinkSqlParserParser.RULE_alterFunction);
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
    this.ruleIndex = FlinkSqlParserParser.RULE_dropTable;
    return this;
}

DropTableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DropTableContext.prototype.constructor = DropTableContext;

DropTableContext.prototype.DROP = function() {
    return this.getToken(FlinkSqlParserParser.DROP, 0);
};

DropTableContext.prototype.TABLE = function() {
    return this.getToken(FlinkSqlParserParser.TABLE, 0);
};

DropTableContext.prototype.uid = function() {
    return this.getTypedRuleContext(UidContext,0);
};

DropTableContext.prototype.ifExists = function() {
    return this.getTypedRuleContext(IfExistsContext,0);
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




FlinkSqlParserParser.DropTableContext = DropTableContext;

FlinkSqlParserParser.prototype.dropTable = function() {

    var localctx = new DropTableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, FlinkSqlParserParser.RULE_dropTable);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 203;
        this.match(FlinkSqlParserParser.DROP);
        this.state = 204;
        this.match(FlinkSqlParserParser.TABLE);
        this.state = 206;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FlinkSqlParserParser.IF) {
            this.state = 205;
            this.ifExists();
        }

        this.state = 208;
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
    this.ruleIndex = FlinkSqlParserParser.RULE_dropDatabase;
    this.dropType = null; // Token
    return this;
}

DropDatabaseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DropDatabaseContext.prototype.constructor = DropDatabaseContext;

DropDatabaseContext.prototype.DROP = function() {
    return this.getToken(FlinkSqlParserParser.DROP, 0);
};

DropDatabaseContext.prototype.DATABASE = function() {
    return this.getToken(FlinkSqlParserParser.DATABASE, 0);
};

DropDatabaseContext.prototype.uid = function() {
    return this.getTypedRuleContext(UidContext,0);
};

DropDatabaseContext.prototype.ifExists = function() {
    return this.getTypedRuleContext(IfExistsContext,0);
};

DropDatabaseContext.prototype.RESTRICT = function() {
    return this.getToken(FlinkSqlParserParser.RESTRICT, 0);
};

DropDatabaseContext.prototype.CASCADE = function() {
    return this.getToken(FlinkSqlParserParser.CASCADE, 0);
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




FlinkSqlParserParser.DropDatabaseContext = DropDatabaseContext;

FlinkSqlParserParser.prototype.dropDatabase = function() {

    var localctx = new DropDatabaseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, FlinkSqlParserParser.RULE_dropDatabase);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 210;
        this.match(FlinkSqlParserParser.DROP);
        this.state = 211;
        this.match(FlinkSqlParserParser.DATABASE);
        this.state = 213;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FlinkSqlParserParser.IF) {
            this.state = 212;
            this.ifExists();
        }

        this.state = 215;
        this.uid();
        this.state = 217;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FlinkSqlParserParser.CASCADE || _la===FlinkSqlParserParser.RESTRICT) {
            this.state = 216;
            localctx.dropType = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===FlinkSqlParserParser.CASCADE || _la===FlinkSqlParserParser.RESTRICT)) {
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
    this.ruleIndex = FlinkSqlParserParser.RULE_dropView;
    return this;
}

DropViewContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DropViewContext.prototype.constructor = DropViewContext;

DropViewContext.prototype.DROP = function() {
    return this.getToken(FlinkSqlParserParser.DROP, 0);
};

DropViewContext.prototype.VIEW = function() {
    return this.getToken(FlinkSqlParserParser.VIEW, 0);
};

DropViewContext.prototype.uid = function() {
    return this.getTypedRuleContext(UidContext,0);
};

DropViewContext.prototype.TEMPORARY = function() {
    return this.getToken(FlinkSqlParserParser.TEMPORARY, 0);
};

DropViewContext.prototype.ifExists = function() {
    return this.getTypedRuleContext(IfExistsContext,0);
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




FlinkSqlParserParser.DropViewContext = DropViewContext;

FlinkSqlParserParser.prototype.dropView = function() {

    var localctx = new DropViewContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, FlinkSqlParserParser.RULE_dropView);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 219;
        this.match(FlinkSqlParserParser.DROP);
        this.state = 221;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FlinkSqlParserParser.TEMPORARY) {
            this.state = 220;
            this.match(FlinkSqlParserParser.TEMPORARY);
        }

        this.state = 223;
        this.match(FlinkSqlParserParser.VIEW);
        this.state = 225;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FlinkSqlParserParser.IF) {
            this.state = 224;
            this.ifExists();
        }

        this.state = 227;
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
    this.ruleIndex = FlinkSqlParserParser.RULE_dropFunction;
    return this;
}

DropFunctionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DropFunctionContext.prototype.constructor = DropFunctionContext;

DropFunctionContext.prototype.DROP = function() {
    return this.getToken(FlinkSqlParserParser.DROP, 0);
};

DropFunctionContext.prototype.FUNCTION = function() {
    return this.getToken(FlinkSqlParserParser.FUNCTION, 0);
};

DropFunctionContext.prototype.uid = function() {
    return this.getTypedRuleContext(UidContext,0);
};

DropFunctionContext.prototype.TEMPORARY = function() {
    return this.getToken(FlinkSqlParserParser.TEMPORARY, 0);
};

DropFunctionContext.prototype.SYSTEM = function() {
    return this.getToken(FlinkSqlParserParser.SYSTEM, 0);
};

DropFunctionContext.prototype.ifExists = function() {
    return this.getTypedRuleContext(IfExistsContext,0);
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




FlinkSqlParserParser.DropFunctionContext = DropFunctionContext;

FlinkSqlParserParser.prototype.dropFunction = function() {

    var localctx = new DropFunctionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, FlinkSqlParserParser.RULE_dropFunction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 229;
        this.match(FlinkSqlParserParser.DROP);
        this.state = 233;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
        if(la_===1) {
            this.state = 230;
            this.match(FlinkSqlParserParser.TEMPORARY);

        } else if(la_===2) {
            this.state = 231;
            this.match(FlinkSqlParserParser.TEMPORARY);
            this.state = 232;
            this.match(FlinkSqlParserParser.SYSTEM);

        }
        this.state = 235;
        this.match(FlinkSqlParserParser.FUNCTION);
        this.state = 237;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FlinkSqlParserParser.IF) {
            this.state = 236;
            this.ifExists();
        }

        this.state = 239;
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
    this.ruleIndex = FlinkSqlParserParser.RULE_selectStatement;
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




FlinkSqlParserParser.SelectStatementContext = SelectStatementContext;

FlinkSqlParserParser.prototype.selectStatement = function() {

    var localctx = new SelectStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, FlinkSqlParserParser.RULE_selectStatement);
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
    this.ruleIndex = FlinkSqlParserParser.RULE_insertStatement;
    return this;
}

InsertStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InsertStatementContext.prototype.constructor = InsertStatementContext;

InsertStatementContext.prototype.INSERT = function() {
    return this.getToken(FlinkSqlParserParser.INSERT, 0);
};

InsertStatementContext.prototype.uid = function() {
    return this.getTypedRuleContext(UidContext,0);
};

InsertStatementContext.prototype.INTO = function() {
    return this.getToken(FlinkSqlParserParser.INTO, 0);
};

InsertStatementContext.prototype.OVERWRITE = function() {
    return this.getToken(FlinkSqlParserParser.OVERWRITE, 0);
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




FlinkSqlParserParser.InsertStatementContext = InsertStatementContext;

FlinkSqlParserParser.prototype.insertStatement = function() {

    var localctx = new InsertStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, FlinkSqlParserParser.RULE_insertStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 243;
        this.match(FlinkSqlParserParser.INSERT);
        this.state = 244;
        _la = this._input.LA(1);
        if(!(_la===FlinkSqlParserParser.INTO || _la===FlinkSqlParserParser.OVERWRITE)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 245;
        this.uid();
        this.state = 251;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FlinkSqlParserParser.PARTITION:
        case FlinkSqlParserParser.SEMICOLON:
            this.state = 247;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===FlinkSqlParserParser.PARTITION) {
                this.state = 246;
                this.insertPartitionDefinition();
            }

            this.state = 249;
            this.selectStatement();
            break;
        case FlinkSqlParserParser.VALUES:
            this.state = 250;
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
    this.ruleIndex = FlinkSqlParserParser.RULE_insertPartitionDefinition;
    return this;
}

InsertPartitionDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InsertPartitionDefinitionContext.prototype.constructor = InsertPartitionDefinitionContext;

InsertPartitionDefinitionContext.prototype.PARTITION = function() {
    return this.getToken(FlinkSqlParserParser.PARTITION, 0);
};

InsertPartitionDefinitionContext.prototype.LR_BRACKET = function() {
    return this.getToken(FlinkSqlParserParser.LR_BRACKET, 0);
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
    return this.getToken(FlinkSqlParserParser.RR_BRACKET, 0);
};

InsertPartitionDefinitionContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FlinkSqlParserParser.COMMA);
    } else {
        return this.getToken(FlinkSqlParserParser.COMMA, i);
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




FlinkSqlParserParser.InsertPartitionDefinitionContext = InsertPartitionDefinitionContext;

FlinkSqlParserParser.prototype.insertPartitionDefinition = function() {

    var localctx = new InsertPartitionDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, FlinkSqlParserParser.RULE_insertPartitionDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 253;
        this.match(FlinkSqlParserParser.PARTITION);
        this.state = 254;
        this.match(FlinkSqlParserParser.LR_BRACKET);
        this.state = 255;
        this.keyValueDefinition();
        this.state = 260;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FlinkSqlParserParser.COMMA) {
            this.state = 256;
            this.match(FlinkSqlParserParser.COMMA);
            this.state = 257;
            this.keyValueDefinition();
            this.state = 262;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 263;
        this.match(FlinkSqlParserParser.RR_BRACKET);
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
    this.ruleIndex = FlinkSqlParserParser.RULE_valuesDefinition;
    return this;
}

ValuesDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesDefinitionContext.prototype.constructor = ValuesDefinitionContext;

ValuesDefinitionContext.prototype.VALUES = function() {
    return this.getToken(FlinkSqlParserParser.VALUES, 0);
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
        return this.getTokens(FlinkSqlParserParser.COMMA);
    } else {
        return this.getToken(FlinkSqlParserParser.COMMA, i);
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




FlinkSqlParserParser.ValuesDefinitionContext = ValuesDefinitionContext;

FlinkSqlParserParser.prototype.valuesDefinition = function() {

    var localctx = new ValuesDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, FlinkSqlParserParser.RULE_valuesDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 265;
        this.match(FlinkSqlParserParser.VALUES);
        this.state = 266;
        this.valuesRowDefinition();
        this.state = 271;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FlinkSqlParserParser.COMMA) {
            this.state = 267;
            this.match(FlinkSqlParserParser.COMMA);
            this.state = 268;
            this.valuesRowDefinition();
            this.state = 273;
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
    this.ruleIndex = FlinkSqlParserParser.RULE_valuesRowDefinition;
    return this;
}

ValuesRowDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesRowDefinitionContext.prototype.constructor = ValuesRowDefinitionContext;

ValuesRowDefinitionContext.prototype.LR_BRACKET = function() {
    return this.getToken(FlinkSqlParserParser.LR_BRACKET, 0);
};

ValuesRowDefinitionContext.prototype.RR_BRACKET = function() {
    return this.getToken(FlinkSqlParserParser.RR_BRACKET, 0);
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




FlinkSqlParserParser.ValuesRowDefinitionContext = ValuesRowDefinitionContext;

FlinkSqlParserParser.prototype.valuesRowDefinition = function() {

    var localctx = new ValuesRowDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, FlinkSqlParserParser.RULE_valuesRowDefinition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 274;
        this.match(FlinkSqlParserParser.LR_BRACKET);
        this.state = 278;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 275;
                this.matchWildcard(); 
            }
            this.state = 280;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
        }

        this.state = 281;
        this.match(FlinkSqlParserParser.RR_BRACKET);
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
    this.ruleIndex = FlinkSqlParserParser.RULE_uidList;
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




FlinkSqlParserParser.UidListContext = UidListContext;

FlinkSqlParserParser.prototype.uidList = function() {

    var localctx = new UidListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, FlinkSqlParserParser.RULE_uidList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 283;
        this.uid();
        this.state = 288;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FlinkSqlParserParser.T__0) {
            this.state = 284;
            this.match(FlinkSqlParserParser.T__0);
            this.state = 285;
            this.uid();
            this.state = 290;
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
    this.ruleIndex = FlinkSqlParserParser.RULE_uid;
    return this;
}

UidContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UidContext.prototype.constructor = UidContext;

UidContext.prototype.ID = function() {
    return this.getToken(FlinkSqlParserParser.ID, 0);
};

UidContext.prototype.DOT_ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FlinkSqlParserParser.DOT_ID);
    } else {
        return this.getToken(FlinkSqlParserParser.DOT_ID, i);
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




FlinkSqlParserParser.UidContext = UidContext;

FlinkSqlParserParser.prototype.uid = function() {

    var localctx = new UidContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, FlinkSqlParserParser.RULE_uid);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 291;
        this.match(FlinkSqlParserParser.ID);
        this.state = 295;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 292;
                this.match(FlinkSqlParserParser.DOT_ID); 
            }
            this.state = 297;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
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
    this.ruleIndex = FlinkSqlParserParser.RULE_withOption;
    return this;
}

WithOptionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WithOptionContext.prototype.constructor = WithOptionContext;

WithOptionContext.prototype.WITH = function() {
    return this.getToken(FlinkSqlParserParser.WITH, 0);
};

WithOptionContext.prototype.LR_BRACKET = function() {
    return this.getToken(FlinkSqlParserParser.LR_BRACKET, 0);
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
    return this.getToken(FlinkSqlParserParser.RR_BRACKET, 0);
};

WithOptionContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FlinkSqlParserParser.COMMA);
    } else {
        return this.getToken(FlinkSqlParserParser.COMMA, i);
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




FlinkSqlParserParser.WithOptionContext = WithOptionContext;

FlinkSqlParserParser.prototype.withOption = function() {

    var localctx = new WithOptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, FlinkSqlParserParser.RULE_withOption);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 298;
        this.match(FlinkSqlParserParser.WITH);
        this.state = 299;
        this.match(FlinkSqlParserParser.LR_BRACKET);
        this.state = 300;
        this.keyValueDefinition();
        this.state = 305;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FlinkSqlParserParser.COMMA) {
            this.state = 301;
            this.match(FlinkSqlParserParser.COMMA);
            this.state = 302;
            this.keyValueDefinition();
            this.state = 307;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 308;
        this.match(FlinkSqlParserParser.RR_BRACKET);
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
    this.ruleIndex = FlinkSqlParserParser.RULE_ifNotExists;
    return this;
}

IfNotExistsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfNotExistsContext.prototype.constructor = IfNotExistsContext;

IfNotExistsContext.prototype.IF = function() {
    return this.getToken(FlinkSqlParserParser.IF, 0);
};

IfNotExistsContext.prototype.NOT = function() {
    return this.getToken(FlinkSqlParserParser.NOT, 0);
};

IfNotExistsContext.prototype.EXISTS = function() {
    return this.getToken(FlinkSqlParserParser.EXISTS, 0);
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




FlinkSqlParserParser.IfNotExistsContext = IfNotExistsContext;

FlinkSqlParserParser.prototype.ifNotExists = function() {

    var localctx = new IfNotExistsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, FlinkSqlParserParser.RULE_ifNotExists);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 310;
        this.match(FlinkSqlParserParser.IF);
        this.state = 311;
        this.match(FlinkSqlParserParser.NOT);
        this.state = 312;
        this.match(FlinkSqlParserParser.EXISTS);
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
    this.ruleIndex = FlinkSqlParserParser.RULE_ifExists;
    return this;
}

IfExistsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfExistsContext.prototype.constructor = IfExistsContext;

IfExistsContext.prototype.IF = function() {
    return this.getToken(FlinkSqlParserParser.IF, 0);
};

IfExistsContext.prototype.EXISTS = function() {
    return this.getToken(FlinkSqlParserParser.EXISTS, 0);
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




FlinkSqlParserParser.IfExistsContext = IfExistsContext;

FlinkSqlParserParser.prototype.ifExists = function() {

    var localctx = new IfExistsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, FlinkSqlParserParser.RULE_ifExists);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 314;
        this.match(FlinkSqlParserParser.IF);
        this.state = 315;
        this.match(FlinkSqlParserParser.EXISTS);
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
    this.ruleIndex = FlinkSqlParserParser.RULE_keyValueDefinition;
    return this;
}

KeyValueDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeyValueDefinitionContext.prototype.constructor = KeyValueDefinitionContext;

KeyValueDefinitionContext.prototype.DOUBLE_QUOTE_ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FlinkSqlParserParser.DOUBLE_QUOTE_ID);
    } else {
        return this.getToken(FlinkSqlParserParser.DOUBLE_QUOTE_ID, i);
    }
};


KeyValueDefinitionContext.prototype.EQUAL_SYMBOL = function() {
    return this.getToken(FlinkSqlParserParser.EQUAL_SYMBOL, 0);
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




FlinkSqlParserParser.KeyValueDefinitionContext = KeyValueDefinitionContext;

FlinkSqlParserParser.prototype.keyValueDefinition = function() {

    var localctx = new KeyValueDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, FlinkSqlParserParser.RULE_keyValueDefinition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 317;
        this.match(FlinkSqlParserParser.DOUBLE_QUOTE_ID);
        this.state = 318;
        this.match(FlinkSqlParserParser.EQUAL_SYMBOL);
        this.state = 319;
        this.match(FlinkSqlParserParser.DOUBLE_QUOTE_ID);
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


exports.FlinkSqlParserParser = FlinkSqlParserParser;
