import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { HiveSqlLexer } from '../lib/hive/HiveSqlLexer';
import { HiveSql } from '../lib/hive/HiveSql';
import BasicParser from './common/basicParser';

export default class HiveSQL extends BasicParser {
    public createLexer(input: string): HiveSqlLexer {
        const chars = CharStreams.fromString(input.toUpperCase());
        const lexer = new HiveSqlLexer(chars);
        return lexer;
    }
    public createParserFromLexer(lexer: HiveSqlLexer): HiveSql {
        const tokenStream = new CommonTokenStream(lexer);
        return new HiveSql(tokenStream);
    }
}

