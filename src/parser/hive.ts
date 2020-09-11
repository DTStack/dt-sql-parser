import { InputStream, CommonTokenStream, Lexer } from 'antlr4';
import { HiveSqlLexer } from '../lib/hive/HiveSqlLexer';
import { HiveSqlParser } from '../lib/hive/HiveSqlParser';
export * from '../lib/hive/HiveSqlListener';
export * from '../lib/hive/HiveSqlVisitor';

import BasicParser from './common/BasicParser';

export default class HiveSQL extends BasicParser {
    public createLexer(input: string): Lexer {
        const chars = new InputStream(input);
        const lexer = <unknown> new HiveSqlLexer(chars) as Lexer;
        return lexer;
    }
    public createParserFromLexer(lexer: Lexer) {
        const tokenStream = new CommonTokenStream(lexer);
        return new HiveSqlParser(tokenStream);
    }
}

