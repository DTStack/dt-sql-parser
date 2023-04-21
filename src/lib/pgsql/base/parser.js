/* eslint-disable new-cap,camelcase */

// https://github.com/antlr/grammars-v4/blob/master/sql/postgresql/Java/PostgreSQLParserBase.java
// eslint-disable-next-line no-invalid-this
const __extends = (this && this.__extends) || (function() {
    let extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function(d, b) {
                d.__proto__ = b;
            }) ||
            function(d, b) {
                for (const p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== 'function' && b !== null) {
            throw new TypeError('Class extends value ' + String(b) + ' is not a constructor or null');
        }
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

const PostgreSQLLexer_1 = require('../PostgreSQLLexer');
const PostgreSQLParser_1 = require('../PostgreSQLParser');

const antlr4 = require('antlr4');
const CharStreams = antlr4.CharStreams;
const CommonTokenStream = antlr4.CommonTokenStream;
const Parser = antlr4.Parser;

__extends(PostgreSQLParserBase, Parser);

function PostgreSQLParserBase(input) {
    return Parser.call(this, input) || this;
}

PostgreSQLParserBase.prototype.GetParsedSqlTree = function(script, line) {
    const ph = this.getPostgreSQLParser(script);
    return ph.program();
};

PostgreSQLParserBase.prototype.ParseRoutineBody = function(_localctx) {
    let lang = null;
    for (let _i = 0, _a = _localctx.createfunc_opt_item(); _i < _a.length; _i++) {
        const coi = _a[_i];
        if (!!coi.LANGUAGE()) {
            if (!!coi.nonreservedword_or_sconst()) {
                if (!!coi.nonreservedword_or_sconst().nonreservedword()) {
                    if (!!coi.nonreservedword_or_sconst().nonreservedword().identifier()) {
                        if (!!coi.nonreservedword_or_sconst().nonreservedword().identifier().Identifier()) {
                            lang = coi.nonreservedword_or_sconst().nonreservedword().identifier().Identifier().getText();
                            break;
                        }
                    }
                }
            }
        }
    }
    if (!lang) {
        return;
    }
    // eslint-disable-next-line camelcase
    let func_as = null;
    for (let _b = 0, _c = _localctx.createfunc_opt_item(); _b < _c.length; _b++) {
        const a = _c[_b];
        if (!a.func_as()) {
            // eslint-disable-next-line camelcase
            func_as = a;
            break;
        }
    }
    // eslint-disable-next-line camelcase
    if (!!func_as) {
        const txt = this.GetRoutineBodyString(func_as.func_as().sconst(0));
        const line = func_as.func_as().sconst(0).start.getLine();
        const ph = this.getPostgreSQLParser(txt);
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

PostgreSQLParserBase.prototype.TrimQuotes = function(s) {
    return (!s) ? s : s.substring(1, s.length() - 1);
};

PostgreSQLParserBase.prototype.unquote = function(s) {
    const slength = s.length();
    const r = '';
    let i = 0;
    while (i < slength) {
        const c = s.charAt(i);
        r.append(c);
        if (c === '\'' && i < slength - 1 && (s.charAt(i + 1) === '\'')) {
            i++;
        }
        i++;
    }
    return r.toString();
};

PostgreSQLParserBase.prototype.GetRoutineBodyString = function(rule) {
    const anysconst = rule.anysconst();
    const StringConstant = anysconst.StringConstant();
    if (!!StringConstant) {
        return this.unquote(this.TrimQuotes(StringConstant.getText()));
    }
    const UnicodeEscapeStringConstant = anysconst.UnicodeEscapeStringConstant();
    if (!!UnicodeEscapeStringConstant) {
        return this.TrimQuotes(UnicodeEscapeStringConstant.getText());
    }
    const EscapeStringConstant = anysconst.EscapeStringConstant();
    if (!!EscapeStringConstant) {
        return this.TrimQuotes(EscapeStringConstant.getText());
    }
    let result = '';
    const dollartext = anysconst.DollarText();
    for (let _i = 0, dollartext_1 = dollartext; _i < dollartext_1.length; _i++) {
        const s = dollartext_1[_i];
        result += s.getText();
    }
    return result;
};

PostgreSQLParserBase.getPostgreSQLParser = function(script) {
    const charStream = CharStreams.fromString(script);
    const lexer = new PostgreSQLLexer_1.PostgreSQLLexer(charStream);
    const tokens = new CommonTokenStream(lexer);
    const parser = new PostgreSQLParser_1.PostgreSQLParser(tokens);
    lexer.removeErrorListeners();
    parser.removeErrorListeners();
    //  LexerDispatchingErrorListener listener_lexer = new LexerDispatchingErrorListener((Lexer)(((CommonTokenStream)(this.getInputStream())).getTokenSource()));
    //   ParserDispatchingErrorListener listener_parser = new ParserDispatchingErrorListener(this);
    //   lexer.addErrorListener(listener_lexer);
    //  parser.addErrorListener(listener_parser);
    return parser;
};

exports.PostgreSQLParserBase = PostgreSQLParserBase;
