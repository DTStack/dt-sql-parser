import { InputStream, CommonTokenStream, Lexer } from 'antlr4';
import { SparkSqlLexer } from '../lib/spark/SparkSqlLexer';
import { SparkSqlParser } from '../lib/spark/SparkSqlParser';
import BasicParser from './common/basicParser';

export default class SparkSQL extends BasicParser {
    public createLexer(input: string): Lexer {
        const chars = new InputStream(input.toUpperCase()); // Some Lexer only support uppercase token, So you need transform
        const lexer = <unknown> new SparkSqlLexer(chars) as Lexer;
        return lexer;
    }
    public createParserFromLexer(lexer: Lexer): any {
        const tokenStream = new CommonTokenStream(lexer);
        return new SparkSqlParser(tokenStream);
    }
}
