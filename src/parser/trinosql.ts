import { CharStream, CommonTokenStream, Lexer } from 'antlr4';
import trinoSqlLexer from '../lib/trinosql/trinoSqlLexer';
import trinoSqlParser from '../lib/trinosql/trinoSqlParser';
import BasicParser from './common/basicParser';
export default class trinoSQL extends BasicParser {
    public createLexer(input: string): trinoSqlLexer {
        const chars = new CharStream(input.toUpperCase()); // Some Lexer only support uppercase token, So you need transform
        const lexer = new trinoSqlLexer(chars);
        return lexer;
    }
    public createParserFromLexer(lexer: Lexer): trinoSqlParser {
        const tokens = new CommonTokenStream(lexer);
        const parser = new trinoSqlParser(tokens);
        return parser;
    }
}

