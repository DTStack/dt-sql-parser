import { InputStream, CommonTokenStream, Lexer } from 'antlr4';
import { FlinkSqlLexer } from '../lib/flinksql/FlinkSqlLexer';
import { FlinkSqlParser } from '../lib/flinksql/FlinkSqlParser';
export * from '../lib/flinksql/FlinkSqlParserListener';
export * from '../lib/flinksql/FlinkSqlParserVisitor';

import BasicParser from './common/basicParser';

export default class FlinkSQL extends BasicParser {
    public createLexer(input: string): Lexer {
        const chars = new InputStream(input.toUpperCase()); // Some Lexer only support uppercase token, So you need transform
        const lexer = <unknown> new FlinkSqlLexer(chars) as Lexer;
        return lexer;
    }
    public createParserFromLexer(lexer: Lexer) {
        const tokenStream = new CommonTokenStream(lexer);
        return new FlinkSqlParser(tokenStream);
    }
}

