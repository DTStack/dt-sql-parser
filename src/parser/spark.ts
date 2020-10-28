import { InputStream, CommonTokenStream, Lexer } from 'antlr4';
import { SqlBaseLexer } from '../lib/spark/SqlBaseLexer';
import { SqlBaseParser } from '../lib/spark/SqlBaseParser';
export * from '../lib/spark/SqlBaseVisitor';
export * from '../lib/spark/SqlBaseListener';

import BasicParser from './common/BasicParser';

export default class SparkSQL extends BasicParser {
    public createLexer(input: string): Lexer {
        const chars = new InputStream(input.toUpperCase()); // Some Lexer only support uppercase token, So you need transform
        const lexer = <unknown> new SqlBaseLexer(chars) as Lexer;
        return lexer;
    }
    public createParserFromLexer(lexer: Lexer) {
        const tokenStream = new CommonTokenStream(lexer);
        return new SqlBaseParser(tokenStream);
    }
}
