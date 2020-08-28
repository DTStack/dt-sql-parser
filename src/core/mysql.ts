import { InputStream, CommonTokenStream, Lexer } from 'antlr4';
import { MySQLLexer } from '../parser/MySQLLexer';
import { MySQLParser } from '../parser/MySQLParser';

import BaseParser from './common/baseParser';

export default class MySQL extends BaseParser {
    public createLexer(input: string): Lexer {
        const chars = new InputStream(input.toUpperCase());
        const lexer = <unknown> new MySQLLexer(chars) as Lexer;
        return lexer;
    }
    public createParserFromLexer(lexer: Lexer) {
        const tokenStream = new CommonTokenStream(lexer);
        return new MySQLParser(tokenStream);
    }
}
