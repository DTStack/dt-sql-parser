import { InputStream, CommonTokenStream, Lexer } from 'antlr4';

import BasicParser from './common/basicParser';
import PlSqlLexer from '../lib/plsql/PlSqlLexer';
import PlSqlParser from '../lib/plsql/PlSqlParser';

export default class PLSQLParser extends BasicParser {
    public createLexer(input: string): Lexer {
        const chars = new InputStream(input.toUpperCase());
        const lexer = new PlSqlLexer(chars);
        return lexer;
    }
    public createParserFromLexer(lexer: Lexer): any {
        const tokenStream = new CommonTokenStream(lexer);
        return new PlSqlParser(tokenStream);
    }
}
