import { InputStream, CommonTokenStream, Lexer } from 'antlr4';
import { TSqlParser } from '../parser/TSqlParser';
import { TSqlLexer } from '../parser/TSqlLexer';

import BaseParser from './common/baseParser';

export default class TSQLParser extends BaseParser {
    public createLexer(input: string): Lexer {
        const chars = new InputStream(input.toUpperCase());
        const lexer = <unknown> new TSqlLexer(chars) as Lexer;
        return lexer;
    }
    public createParserFromLexer(lexer: Lexer) {
        const tokenStream = new CommonTokenStream(lexer);
        return new TSqlParser(tokenStream);
    }
}
