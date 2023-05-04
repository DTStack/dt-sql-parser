import { CharStream, CommonTokenStream, Lexer } from 'antlr4';
import SqlLexer from '../lib/generic/SqlLexer';
import SqlParser from '../lib/generic/SqlParser';
import BasicParser from './common/basicParser';

export default class GenericSQL extends BasicParser {
    public createLexer(input: string): SqlLexer {
        const chars = new CharStream(input.toUpperCase()); // Some Lexer only support uppercase token, So you need transform
        const lexer = new SqlLexer(chars);
        return lexer;
    }
    public createParserFromLexer(lexer: Lexer): SqlParser {
        const tokenStream = new CommonTokenStream(lexer);
        return new SqlParser(tokenStream);
    }
}

