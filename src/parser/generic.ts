import { Token } from 'antlr4ts';
import { CandidatesCollection } from 'antlr4-c3';
import { SqlLexer } from '../lib/generic/SqlLexer';
import { SqlParser, ProgramContext } from '../lib/generic/SqlParser';
import BasicParser from './common/basicParser';
import { Suggestions } from './common/basic-parser-types';

export default class GenericSQL extends BasicParser<SqlLexer, ProgramContext, SqlParser> {
    public createLexerFormCharStream(charStreams): SqlLexer {
        const lexer = new SqlLexer(charStreams);
        return lexer;
    }

    public createParserFromTokenStream(tokenStream): SqlParser {
        return new SqlParser(tokenStream);
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

