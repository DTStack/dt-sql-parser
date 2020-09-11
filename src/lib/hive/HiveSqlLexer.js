// Generated from /Users/ziv/Workspace/dt-sql-parser/src/grammar/hive/HiveSql.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\f+\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0002",
    "\u0002\f\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b",
    "\u000f\t\u0011\n\u0013\u000b\u0015\f\u0003\u0002\u0002\u0002*\u0002",
    "\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002",
    "\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002",
    "\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002",
    "\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002",
    "\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0003",
    "\u0017\u0003\u0002\u0002\u0002\u0005\u0019\u0003\u0002\u0002\u0002\u0007",
    "\u001b\u0003\u0002\u0002\u0002\t\u001d\u0003\u0002\u0002\u0002\u000b",
    "\u001f\u0003\u0002\u0002\u0002\r!\u0003\u0002\u0002\u0002\u000f#\u0003",
    "\u0002\u0002\u0002\u0011%\u0003\u0002\u0002\u0002\u0013\'\u0003\u0002",
    "\u0002\u0002\u0015)\u0003\u0002\u0002\u0002\u0017\u0018\u0007B\u0002",
    "\u0002\u0018\u0004\u0003\u0002\u0002\u0002\u0019\u001a\u0007%\u0002",
    "\u0002\u001a\u0006\u0003\u0002\u0002\u0002\u001b\u001c\u00071\u0002",
    "\u0002\u001c\b\u0003\u0002\u0002\u0002\u001d\u001e\u0007\'\u0002\u0002",
    "\u001e\n\u0003\u0002\u0002\u0002\u001f \u00070\u0002\u0002 \f\u0003",
    "\u0002\u0002\u0002!\"\u0007,\u0002\u0002\"\u000e\u0003\u0002\u0002\u0002",
    "#$\u0007#\u0002\u0002$\u0010\u0003\u0002\u0002\u0002%&\u0007=\u0002",
    "\u0002&\u0012\u0003\u0002\u0002\u0002\'(\u0007/\u0002\u0002(\u0014\u0003",
    "\u0002\u0002\u0002)*\u0007-\u0002\u0002*\u0016\u0003\u0002\u0002\u0002",
    "\u0003\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function HiveSqlLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

HiveSqlLexer.prototype = Object.create(antlr4.Lexer.prototype);
HiveSqlLexer.prototype.constructor = HiveSqlLexer;

Object.defineProperty(HiveSqlLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

HiveSqlLexer.EOF = antlr4.Token.EOF;
HiveSqlLexer.T__0 = 1;
HiveSqlLexer.T__1 = 2;
HiveSqlLexer.T__2 = 3;
HiveSqlLexer.T__3 = 4;
HiveSqlLexer.T__4 = 5;
HiveSqlLexer.T__5 = 6;
HiveSqlLexer.T__6 = 7;
HiveSqlLexer.T__7 = 8;
HiveSqlLexer.T__8 = 9;
HiveSqlLexer.T__9 = 10;

HiveSqlLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

HiveSqlLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

HiveSqlLexer.prototype.literalNames = [ null, "'@'", "'#'", "'/'", "'%'", 
                                        "'.'", "'*'", "'!'", "';'", "'-'", 
                                        "'+'" ];

HiveSqlLexer.prototype.symbolicNames = [  ];

HiveSqlLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                     "T__5", "T__6", "T__7", "T__8", "T__9" ];

HiveSqlLexer.prototype.grammarFileName = "HiveSql.g4";


exports.HiveSqlLexer = HiveSqlLexer;

