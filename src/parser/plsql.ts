import { CharStreams, CommonTokenStream, Lexer } from 'antlr4ts';

import BasicParser from './common/basicParser';
import { PlSqlLexer } from '../lib/plsql/PlSqlLexer';
import { PlSqlParser } from '../lib/plsql/PlSqlParser';

export default class PLSQLParser extends BasicParser {
    public createLexer(input: string): PlSqlLexer {
        const chars = CharStreams.fromString(input.toUpperCase());
        const lexer = new PlSqlLexer(chars);
        return lexer;
    }
    public createParserFromLexer(lexer: Lexer): PlSqlParser {
        const tokenStream = new CommonTokenStream(lexer);
        return new PlSqlParser(tokenStream);
    }
}
