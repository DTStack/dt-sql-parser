import { Token } from 'antlr4ts';
import { CandidatesCollection } from 'antlr4-c3';
import { HiveSqlLexer } from '../lib/hive/HiveSqlLexer';
import { HiveSql, ProgramContext } from '../lib/hive/HiveSql';
import BasicParser from './common/basicParser';
import { Suggestions } from './common/basic-parser-types';


export default class HiveSQL extends BasicParser<HiveSqlLexer, ProgramContext, HiveSql> {
    public createLexerFormCharStream(charStreams) {
        const lexer = new HiveSqlLexer(charStreams);
        return lexer;
    }

    public createParserFromTokenStream(tokenStream) {
        return new HiveSql(tokenStream);
    }

    public preferredRules: Set<number> = new Set();

    public processCandidates(
        candidates: CandidatesCollection, 
        allTokens: Token[], 
        caretTokenIndex: number
    ): Suggestions<Token> {
        return {
            syntax: [],
            keywords: []
        }
    }
}

