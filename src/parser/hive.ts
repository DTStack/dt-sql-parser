import { CharStream, CommonTokenStream, Lexer } from 'antlr4/src/antlr4/index.web';
import HiveSqlLexer from '../lib/hive/HiveSqlLexer';
import HiveSql from '../lib/hive/HiveSql';
import BasicParser from './common/basicParser';

export default class HiveSQL extends BasicParser {
    public createLexer(input: string): Lexer {
        const chars = new CharStream(input);
        const lexer = <unknown> new HiveSqlLexer(chars) as Lexer;
        return lexer;
    }
    public createParserFromLexer(lexer: Lexer): any {
        const tokenStream = new CommonTokenStream(lexer);
        return new HiveSql(tokenStream);
    }
}

