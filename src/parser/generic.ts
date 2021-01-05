import { InputStream, CommonTokenStream, Lexer } from 'antlr4';
import { SqlLexer } from '../lib/generic/SqlLexer';
import { SqlParser } from '../lib/generic/SqlParser';
export * from '../lib/generic/SqlParserVisitor';
export * from '../lib/generic/SqlParserListener';

import BasicParser from './common/basicParser';

export default class GenericSQL extends BasicParser {
    public createLexer(input: string): Lexer {
        const chars = new InputStream(input.toUpperCase()); // Some Lexer only support uppercase token, So you need transform
        const lexer = <unknown> new SqlLexer(chars) as Lexer;
        return lexer;
    }
    public createParserFromLexer(lexer: Lexer) {
        const tokenStream = new CommonTokenStream(lexer);
        return new SqlParser(tokenStream);
    }
}

