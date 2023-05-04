import { CharStream, CommonTokenStream, Lexer } from 'antlr4';
import FlinkSqlLexer from '../lib/flinksql/FlinkSqlLexer';
import FlinkSqlParser from '../lib/flinksql/FlinkSqlParser';
import BasicParser from './common/basicParser';
export default class FlinkSQL extends BasicParser {
    public createLexer(input: string): FlinkSqlLexer {
        const chars = new CharStream(input.toUpperCase()); // Some Lexer only support uppercase token, So you need transform
        const lexer = new FlinkSqlLexer(chars);
        return lexer;
    }
    public createParserFromLexer(lexer: Lexer): FlinkSqlParser {
        const tokens = new CommonTokenStream(lexer);
        const parser = new FlinkSqlParser(tokens);
        return parser;
    }
}

