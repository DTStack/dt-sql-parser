"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4 = require("antlr4");
const error_1 = require("antlr4/error");
const sqlLexer_1 = require("../antlr4/flinksql/sqlLexer");
const sqlParser_1 = require("../antlr4/flinksql/sqlParser");
const utils_1 = require("../utils");
class SqlErrorListener extends error_1.ErrorListener {
    constructor() {
        super(...arguments);
        this.error = null;
    }
    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        this.error = {
            line,
            column: charPositionInLine,
            token: offendingSymbol,
            errorMsg: msg
        };
    }
}
function parserSingle(sql) {
    if (!sql || !sql.trim()) {
        return null;
    }
    const inputStream = new antlr4.InputStream(sql.toUpperCase());
    const lexer = new sqlLexer_1.sqlLexer(inputStream);
    const tokenStream = new antlr4.CommonTokenStream(lexer);
    const parser = new sqlParser_1.sqlParser(tokenStream);
    parser.buildParseTrees = true;
    let listener = new SqlErrorListener();
    parser.addErrorListener(listener);
    parser.singleStatement();
    return listener.error;
}
function parserSyntax(sql) {
    let runSql = typeof sql == 'string' ? sql : sql.join('');
    const sqls = utils_1.splitSql(runSql);
    for (let i = 0, index = 0; i < sqls.length; i++) {
        /**
         * 这边不取分号
         */
        let sql = new Array(index).fill(' ').join('') + runSql.substring(index, sqls[i]);
        let err = parserSingle(sql);
        if (err) {
            return err;
        }
        index = sqls[i] + 1;
    }
    return null;
}
exports.default = parserSyntax;
