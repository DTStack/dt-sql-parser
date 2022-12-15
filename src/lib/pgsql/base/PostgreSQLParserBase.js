/* eslint-disable new-cap */
import { PostgreSQLLexer } from '../PostgreSQLLexer';
import { PostgreSQLParser } from '../PostgreSQLParser';


const antlr4 = require('antlr4/index');
const CharStreams = antlr4.CharStreams;
const CommonTokenStream = antlr4.CommonTokenStream;


// @ts-ignore
export class PostgreSQLParserBase extends antlr4.Parser {
    constructor( input) {
        super(input);
    }

    GetParsedSqlTree( script, line) {
        const ph = this.getPostgreSQLParser(script);
        return ph.root();
    }

    ParseRoutineBody( _localctx) {
        let lang = null;
        for (const coi of _localctx.createfunc_opt_item()) {
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
        if (!lang) return;
        // eslint-disable-next-line camelcase
        let func_as = null;
        for (const a of _localctx.createfunc_opt_item()) {
            if (!a.func_as()) {
                // eslint-disable-next-line camelcase
                func_as = a;
                break;
            }
        }
        // eslint-disable-next-line camelcase
        if (!func_as) {
            const txt = this.GetRoutineBodyString(func_as.func_as().sconst(0));
            const line = func_as.func_as().sconst(0).start.getLine();
            const ph = this.getPostgreSQLParser(txt);
            switch (lang) {
            case 'plpgsql':
                func_as.func_as().Definition = ph.plsqlroot();
                break;
            case 'sql':
                func_as.func_as().Definition = ph.root();
                break;
            }
        }
    }

    TrimQuotes( s) {
        return (!s) ? s : s.substring(1, s.length() - 1);
    }

    unquote( s) {
        const slength = s.length();
        const r = '';
        let i = 0;
        while (i < slength) {
            const c = s.charAt(i);
            r.append(c);
            if (c === '\'' && i < slength - 1 && (s.charAt(i + 1) === '\'')) i++;
            i++;
        }
        return r.toString();
    }

    GetRoutineBodyString( rule) {
        const anysconst = rule.anysconst();
        // eslint-disable-next-line new-cap
        const StringConstant = anysconst.StringConstant();
        if (null !== StringConstant) return this.unquote(this.TrimQuotes(StringConstant.getText()));
        const UnicodeEscapeStringConstant = anysconst.UnicodeEscapeStringConstant();
        if (null !== UnicodeEscapeStringConstant) return this.TrimQuotes(UnicodeEscapeStringConstant.getText());
        const EscapeStringConstant = anysconst.EscapeStringConstant();
        if (null !== EscapeStringConstant) return this.TrimQuotes(EscapeStringConstant.getText());
        let result = '';
        const dollartext = anysconst.DollarText();
        for (const s of dollartext) {
            result += s.getText();
        }
        return result;
    }

    static getPostgreSQLParser( script) {
        const charStream = CharStreams.fromString(script);
        const lexer = new PostgreSQLLexer(charStream);
        const tokens = new CommonTokenStream(lexer);
        const parser = new PostgreSQLParser(tokens);
        lexer.removeErrorListeners();
        parser.removeErrorListeners();
        //  LexerDispatchingErrorListener listener_lexer = new LexerDispatchingErrorListener((Lexer)(((CommonTokenStream)(this.getInputStream())).getTokenSource()));
        //   ParserDispatchingErrorListener listener_parser = new ParserDispatchingErrorListener(this);
        //   lexer.addErrorListener(listener_lexer);
        //  parser.addErrorListener(listener_parser);
        return parser;
    }
}
