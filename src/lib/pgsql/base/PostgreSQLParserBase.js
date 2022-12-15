"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgreSQLParserBase = void 0;
/* eslint-disable new-cap */
var PostgreSQLLexer_1 = require("../PostgreSQLLexer");
var PostgreSQLParser_1 = require("../PostgreSQLParser");
var antlr4 = require('antlr4/index');
var CharStreams = antlr4.CharStreams;
var CommonTokenStream = antlr4.CommonTokenStream;
// @ts-ignore
var PostgreSQLParserBase = /** @class */ (function (_super) {
    __extends(PostgreSQLParserBase, _super);
    function PostgreSQLParserBase(input) {
        return _super.call(this, input) || this;
    }
    PostgreSQLParserBase.prototype.GetParsedSqlTree = function (script, line) {
        var ph = this.getPostgreSQLParser(script);
        return ph.program();
    };
    PostgreSQLParserBase.prototype.ParseRoutineBody = function (_localctx) {
        var lang = null;
        for (var _i = 0, _a = _localctx.createfunc_opt_item(); _i < _a.length; _i++) {
            var coi = _a[_i];
            // eslint-disable-next-line new-cap
            if (!coi.LANGUAGE()) {
                if (!coi.nonreservedword_or_sconst()) {
                    if (!coi.nonreservedword_or_sconst().nonreservedword()) {
                        if (!coi.nonreservedword_or_sconst().nonreservedword().identifier()) {
                            // eslint-disable-next-line new-cap
                            if (!coi.nonreservedword_or_sconst().nonreservedword().identifier().Identifier()) {
                                // eslint-disable-next-line new-cap
                                lang = coi.nonreservedword_or_sconst().nonreservedword().identifier().Identifier().getText();
                                break;
                            }
                        }
                    }
                }
            }
        }
        if (!lang)
            return;
        // eslint-disable-next-line camelcase
        var func_as = null;
        for (var _b = 0, _c = _localctx.createfunc_opt_item(); _b < _c.length; _b++) {
            var a = _c[_b];
            if (!a.func_as()) {
                // eslint-disable-next-line camelcase
                func_as = a;
                break;
            }
        }
        // eslint-disable-next-line camelcase
        if (!func_as) {
            var txt = this.GetRoutineBodyString(func_as.func_as().sconst(0));
            var line = func_as.func_as().sconst(0).start.getLine();
            var ph = this.getPostgreSQLParser(txt);
            switch (lang) {
                case 'plpgsql':
                    func_as.func_as().Definition = ph.plsqlroot();
                    break;
                case 'sql':
                    func_as.func_as().Definition = ph.program();
                    break;
            }
        }
    };
    PostgreSQLParserBase.prototype.TrimQuotes = function (s) {
        return (!s) ? s : s.substring(1, s.length() - 1);
    };
    PostgreSQLParserBase.prototype.unquote = function (s) {
        var slength = s.length();
        var r = '';
        var i = 0;
        while (i < slength) {
            var c = s.charAt(i);
            r.append(c);
            if (c === '\'' && i < slength - 1 && (s.charAt(i + 1) === '\''))
                i++;
            i++;
        }
        return r.toString();
    };
    PostgreSQLParserBase.prototype.GetRoutineBodyString = function (rule) {
        var anysconst = rule.anysconst();
        // eslint-disable-next-line new-cap
        var StringConstant = anysconst.StringConstant();
        if (null !== StringConstant)
            return this.unquote(this.TrimQuotes(StringConstant.getText()));
        var UnicodeEscapeStringConstant = anysconst.UnicodeEscapeStringConstant();
        if (null !== UnicodeEscapeStringConstant)
            return this.TrimQuotes(UnicodeEscapeStringConstant.getText());
        var EscapeStringConstant = anysconst.EscapeStringConstant();
        if (null !== EscapeStringConstant)
            return this.TrimQuotes(EscapeStringConstant.getText());
        var result = '';
        var dollartext = anysconst.DollarText();
        for (var _i = 0, dollartext_1 = dollartext; _i < dollartext_1.length; _i++) {
            var s = dollartext_1[_i];
            result += s.getText();
        }
        return result;
    };
    PostgreSQLParserBase.getPostgreSQLParser = function (script) {
        var charStream = CharStreams.fromString(script);
        var lexer = new PostgreSQLLexer_1.PostgreSQLLexer(charStream);
        var tokens = new CommonTokenStream(lexer);
        var parser = new PostgreSQLParser_1.PostgreSQLParser(tokens);
        lexer.removeErrorListeners();
        parser.removeErrorListeners();
        //  LexerDispatchingErrorListener listener_lexer = new LexerDispatchingErrorListener((Lexer)(((CommonTokenStream)(this.getInputStream())).getTokenSource()));
        //   ParserDispatchingErrorListener listener_parser = new ParserDispatchingErrorListener(this);
        //   lexer.addErrorListener(listener_lexer);
        //  parser.addErrorListener(listener_parser);
        return parser;
    };
    return PostgreSQLParserBase;
}(antlr4.Parser));
exports.PostgreSQLParserBase = PostgreSQLParserBase;