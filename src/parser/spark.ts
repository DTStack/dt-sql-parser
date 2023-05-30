import { CharStreams, CommonTokenStream } from 'antlr4ts';
import BasicParser from './common/basicParser';
import { SparkSqlLexer } from '../lib/spark/SparkSqlLexer';
import { SparkSqlParser } from '../lib/spark/SparkSqlParser';

export default class SparkSQL extends BasicParser {
    public createLexer(input: string): SparkSqlLexer {
        const chars = CharStreams.fromString(input.toUpperCase()); // Some Lexer only support uppercase token, So you need transform
        const lexer = new SparkSqlLexer(chars);
        return lexer;
    }
    public createParserFromLexer(lexer: SparkSqlLexer): SparkSqlParser {
        const tokenStream = new CommonTokenStream(lexer);
        return new SparkSqlParser(tokenStream);
    }
}
