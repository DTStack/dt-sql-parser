import { CharStream, CommonTokenStream } from 'antlr4';

import BasicParser from './common/basicParser';
import PlSqlLexer from '../lib/plsql/PlSqlLexer';
import PlSqlParser from '../lib/plsql/PlSqlParser';

export default class PLSQLParser extends BasicParser {
    public createLexer(input: string): PlSqlLexer {
        const chars = new CharStream(input.toUpperCase());
        const lexer = new PlSqlLexer(chars);
        return lexer;
    }
    public createParserFromLexer(lexer: PlSqlLexer): PlSqlParser {
        const tokenStream = new CommonTokenStream(lexer);
        return new PlSqlParser(tokenStream);
    }
}
