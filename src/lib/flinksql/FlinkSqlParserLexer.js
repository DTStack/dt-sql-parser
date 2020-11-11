// Generated from /Users/erindeng/Desktop/dt-sql-parser/src/grammar/flinksql/FlinkSqlParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0014L\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b",
    "\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0002\u0002\u0014\u0003",
    "\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011",
    "\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f",
    "\u0011!\u0012#\u0013%\u0014\u0003\u0002\u0002\u0002K\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003",
    "\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003",
    "\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003",
    "\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003",
    "\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003",
    "\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003",
    "\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003",
    "\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002",
    "\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0003\'\u0003\u0002\u0002",
    "\u0002\u0005)\u0003\u0002\u0002\u0002\u0007+\u0003\u0002\u0002\u0002",
    "\t-\u0003\u0002\u0002\u0002\u000b/\u0003\u0002\u0002\u0002\r1\u0003",
    "\u0002\u0002\u0002\u000f3\u0003\u0002\u0002\u0002\u00115\u0003\u0002",
    "\u0002\u0002\u00137\u0003\u0002\u0002\u0002\u00159\u0003\u0002\u0002",
    "\u0002\u0017;\u0003\u0002\u0002\u0002\u0019=\u0003\u0002\u0002\u0002",
    "\u001b?\u0003\u0002\u0002\u0002\u001dA\u0003\u0002\u0002\u0002\u001f",
    "C\u0003\u0002\u0002\u0002!E\u0003\u0002\u0002\u0002#G\u0003\u0002\u0002",
    "\u0002%J\u0003\u0002\u0002\u0002\'(\u00070\u0002\u0002(\u0004\u0003",
    "\u0002\u0002\u0002)*\u0007,\u0002\u0002*\u0006\u0003\u0002\u0002\u0002",
    "+,\u0007.\u0002\u0002,\b\u0003\u0002\u0002\u0002-.\u0007#\u0002\u0002",
    ".\n\u0003\u0002\u0002\u0002/0\u0007*\u0002\u00020\f\u0003\u0002\u0002",
    "\u000212\u0007+\u0002\u00022\u000e\u0003\u0002\u0002\u000234\u0007(",
    "\u0002\u00024\u0010\u0003\u0002\u0002\u000256\u0007~\u0002\u00026\u0012",
    "\u0003\u0002\u0002\u000278\u0007?\u0002\u00028\u0014\u0003\u0002\u0002",
    "\u00029:\u0007@\u0002\u0002:\u0016\u0003\u0002\u0002\u0002;<\u0007>",
    "\u0002\u0002<\u0018\u0003\u0002\u0002\u0002=>\u0007`\u0002\u0002>\u001a",
    "\u0003\u0002\u0002\u0002?@\u00071\u0002\u0002@\u001c\u0003\u0002\u0002",
    "\u0002AB\u0007\'\u0002\u0002B\u001e\u0003\u0002\u0002\u0002CD\u0007",
    "-\u0002\u0002D \u0003\u0002\u0002\u0002EF\u0007/\u0002\u0002F\"\u0003",
    "\u0002\u0002\u0002GH\u0007/\u0002\u0002HI\u0007/\u0002\u0002I$\u0003",
    "\u0002\u0002\u0002JK\u0007\u0080\u0002\u0002K&\u0003\u0002\u0002\u0002",
    "\u0003\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function FlinkSqlParserLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

FlinkSqlParserLexer.prototype = Object.create(antlr4.Lexer.prototype);
FlinkSqlParserLexer.prototype.constructor = FlinkSqlParserLexer;

Object.defineProperty(FlinkSqlParserLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

FlinkSqlParserLexer.EOF = antlr4.Token.EOF;
FlinkSqlParserLexer.T__0 = 1;
FlinkSqlParserLexer.T__1 = 2;
FlinkSqlParserLexer.T__2 = 3;
FlinkSqlParserLexer.T__3 = 4;
FlinkSqlParserLexer.T__4 = 5;
FlinkSqlParserLexer.T__5 = 6;
FlinkSqlParserLexer.T__6 = 7;
FlinkSqlParserLexer.T__7 = 8;
FlinkSqlParserLexer.T__8 = 9;
FlinkSqlParserLexer.T__9 = 10;
FlinkSqlParserLexer.T__10 = 11;
FlinkSqlParserLexer.T__11 = 12;
FlinkSqlParserLexer.T__12 = 13;
FlinkSqlParserLexer.T__13 = 14;
FlinkSqlParserLexer.T__14 = 15;
FlinkSqlParserLexer.T__15 = 16;
FlinkSqlParserLexer.T__16 = 17;
FlinkSqlParserLexer.T__17 = 18;

FlinkSqlParserLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

FlinkSqlParserLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

FlinkSqlParserLexer.prototype.literalNames = [ null, "'.'", "'*'", "','", 
                                               "'!'", "'('", "')'", "'&'", 
                                               "'|'", "'='", "'>'", "'<'", 
                                               "'^'", "'/'", "'%'", "'+'", 
                                               "'-'", "'--'", "'~'" ];

FlinkSqlParserLexer.prototype.symbolicNames = [  ];

FlinkSqlParserLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", 
                                            "T__4", "T__5", "T__6", "T__7", 
                                            "T__8", "T__9", "T__10", "T__11", 
                                            "T__12", "T__13", "T__14", "T__15", 
                                            "T__16", "T__17" ];

FlinkSqlParserLexer.prototype.grammarFileName = "FlinkSqlParser.g4";


exports.FlinkSqlParserLexer = FlinkSqlParserLexer;

