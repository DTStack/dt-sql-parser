import { CharStream, CommonTokenStream, Lexer } from 'antlr4';

import BasicParser from './common/basicParser';
import PostgreSQLLexer from '../lib/pgsql/PostgreSQLLexer';
import PostgreSQLParser from '../lib/pgsql/PostgreSQLParser';

export default class PostgresSQL extends BasicParser {
    public createLexer(input: string): Lexer {
        const chars = new CharStream(input.toUpperCase());
        const lexer = new PostgreSQLLexer(chars);
        return lexer;
    }
    public createParserFromLexer(lexer: Lexer): any {
        const tokenStream = new CommonTokenStream(lexer);
        return new PostgreSQLParser(tokenStream);
    }
}
