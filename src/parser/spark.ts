import { Token } from 'antlr4ts';
import { CandidatesCollection } from 'antlr4-c3';
import { SparkSqlLexer } from '../lib/spark/SparkSqlLexer';
import { SparkSqlParser, ProgramContext } from '../lib/spark/SparkSqlParser';
import BasicParser from './common/basicParser';
import { Suggestions } from './common/basic-parser-types';

export default class SparkSQL extends BasicParser<SparkSqlLexer, ProgramContext, SparkSqlParser> {
    public createLexerFormCharStream(charStreams) {
        const lexer = new SparkSqlLexer(charStreams);
        return lexer;
    }

    public createParserFromTokenStream(tokenStream) {
        return new SparkSqlParser(tokenStream);
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
