/* eslint-disable new-cap,camelcase */
import { CharStreams, CommonTokenStream, Parser } from 'antlr4ts';
import { PostgreSQLLexer } from './PostgreSQLLexer';
import { PostgreSQLParser } from './PostgreSQLParser';

// @ts-ignore
export default abstract class PostgreSQLParserBase extends Parser {
    constructor( input) {
        super(input);
    }

    GetParsedSqlTree( script, line) {
        const ph = this.getPostgreSQLParser(script);
        return ph.program();
    }

    ParseRoutineBody( _localctx) {
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
                func_as.func_as().Definition = ph.program();
                break;
            }
        }
    }

    TrimQuotes( s) {
        return (!s) ? s : s.substring(1, s.length() - 1);
    }

    unquote( s) {
        const slength = s.length();
        let r = '';
        let i = 0;
        while (i < slength) {
            const c = s.charAt(i);
            r = r.concat(c);
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

    getPostgreSQLParser( script) {
        const charStream = CharStreams.fromString(script);
        const lexer = new PostgreSQLLexer(charStream);
        const tokens = new CommonTokenStream(lexer);
        const parser = new PostgreSQLParser(tokens);
        // lexer.removeErrorListeners();
        // parser.removeErrorListeners();
        return parser;
    }
}