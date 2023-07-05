import { Token } from 'antlr4ts';
import { CandidatesCollection } from 'antlr4-c3';
import { HiveSqlLexer } from '../lib/hive/HiveSqlLexer';
import { HiveSqlParser, ProgramContext } from '../lib/hive/HiveSqlParser';
import BasicParser from './common/basicParser';
import { Suggestions } from './common/basic-parser-types';


export default class HiveSQL extends BasicParser<HiveSqlLexer, ProgramContext, HiveSqlParser> {
    protected createLexerFormCharStream(charStreams) {
        const lexer = new HiveSqlLexer(charStreams);
        return lexer;
    }

    protected createParserFromTokenStream(tokenStream) {
        return new HiveSqlParser(tokenStream);
    }

    protected get splitListener () {
        return null as any;
    }

    protected preferredRules: Set<number> = new Set();

    protected processCandidates(
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

