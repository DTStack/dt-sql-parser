import { CharStream, CommonTokenStream, Lexer } from 'antlr4';
import HiveSqlLexer from '../lib/hive/HiveSqlLexer';
import HiveSql from '../lib/hive/HiveSql';
import BasicParser from './common/basicParser';

export default class HiveSQL extends BasicParser {
    public createLexer(input: string): HiveSqlLexer {
        const chars = new CharStream(input);
        const lexer = new HiveSqlLexer(chars);
        return lexer;
    }
    public createParserFromLexer(lexer: Lexer): HiveSql {
        const tokenStream = new CommonTokenStream(lexer);
        return new HiveSql(tokenStream);
    }
}

