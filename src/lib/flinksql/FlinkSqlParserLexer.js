// Generated from /Users/erindeng/Desktop/dt-sql-parser/src/grammar/flinksql/FlinkSqlParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0003\u0007\b\u0001\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002",
    "\u0002\u0002\u0003\u0003\u0003\u0003\u0002\u0002\u0002\u0006\u0002\u0003",
    "\u0003\u0002\u0002\u0002\u0003\u0005\u0003\u0002\u0002\u0002\u0005\u0006",
    "\u0007.\u0002\u0002\u0006\u0004\u0003\u0002\u0002\u0002\u0003\u0002",
    "\u0002"].join("");


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

FlinkSqlParserLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

FlinkSqlParserLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

FlinkSqlParserLexer.prototype.literalNames = [ null, "','" ];

FlinkSqlParserLexer.prototype.symbolicNames = [  ];

FlinkSqlParserLexer.prototype.ruleNames = [ "T__0" ];

FlinkSqlParserLexer.prototype.grammarFileName = "FlinkSqlParser.g4";


exports.FlinkSqlParserLexer = FlinkSqlParserLexer;

