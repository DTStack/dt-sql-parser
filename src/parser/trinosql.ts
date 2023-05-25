import { CharStream, CommonTokenStream, Lexer } from 'antlr4';
import TrinoSqlLexer from '../lib/trinosql/TrinoSqlLexer';
import TrinoSqlParser from '../lib/trinosql/TrinoSqlParser';
import BasicParser from './common/basicParser';
export default class trinoSQL extends BasicParser {
    public createLexer(input: string): TrinoSqlLexer {
        const chars = new CharStream(input.toUpperCase()); // Some Lexer only support uppercase token, So you need transform
        const lexer = new TrinoSqlLexer(chars);
        return lexer;
    }
    public createParserFromLexer(lexer: Lexer): TrinoSqlParser {
        const tokens = new CommonTokenStream(lexer);
        const parser = new TrinoSqlParser(tokens);
        return parser;
    }
}

