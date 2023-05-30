import { CharStreams, CommonTokenStream, Lexer } from 'antlr4ts';

import BasicParser from './common/basicParser';
import { PostgreSQLLexer } from '../lib/pgsql/PostgreSQLLexer';
import { PostgreSQLParser } from '../lib/pgsql/PostgreSQLParser';

export default class PostgresSQL extends BasicParser {
    public createLexer(input: string): PostgreSQLLexer {
        const chars = CharStreams.fromString(input.toUpperCase());
        const lexer = new PostgreSQLLexer(chars);
        return lexer;
    }
    public createParserFromLexer(lexer: Lexer): PostgreSQLParser {
        const tokenStream = new CommonTokenStream(lexer);
        return new PostgreSQLParser(tokenStream);
    }
}
