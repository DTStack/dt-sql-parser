import * as antlr4 from 'antlr4'
import { ErrorListener } from 'antlr4/error';
import { sqlLexer } from '../antlr4/flinksql/sqlLexer';
import { sqlParser } from '../antlr4/flinksql/sqlParser';
import { sqlVisitor } from '../antlr4/flinksql/sqlVisitor';

import { splitSql } from '../utils'

interface SyntaxError {
    line: number;
    column: number;
    token: antlr4.Token;
    errorMsg: string;
}

class SqlErrorListener extends ErrorListener {
    error: SyntaxError = null;
    syntaxError (recognizer: antlr4.Recognizer, offendingSymbol: antlr4.Token, line: number, charPositionInLine: number, msg: string, e: any) {
        this.error = {
            line,
            column: charPositionInLine,
            token: offendingSymbol,
            errorMsg: msg
        };
    }
}
function parserSingle (sql: string,) {
    if (!sql || !sql.trim()) {
        return null;
    }
    const inputStream = new antlr4.InputStream(sql.toUpperCase());
    const lexer = <unknown>new sqlLexer(inputStream) as antlr4.Lexer;
    const tokenStream = new antlr4.CommonTokenStream(lexer);
    const parser: any = new sqlParser(tokenStream);
    parser.buildParseTrees = true;
    let listener = new SqlErrorListener();
    parser.addErrorListener(listener)
    parser.singleStatement();
    return listener.error;
}
function parserSyntax (sql: sql): SyntaxError {
    let runSql = typeof sql == 'string' ? sql : sql.join('');
    const sqls = splitSql(runSql);
    for (let i = 0, index = 0; i < sqls.length; i++) {
        let end = runSql[sqls[i]] == ';' ? sqls[i] : sqls[i] + 1
        /**
         * 这边不取分号
         */
        let sql =  new Array(index).fill(' ').join('') + runSql.substring(index, end);
        let err = parserSingle(sql);
        if (err) {
            return err;
        }
        index = sqls[i] + 1;
    }
    return null;
}
export default parserSyntax;