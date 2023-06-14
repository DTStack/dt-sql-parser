import { Token } from 'antlr4ts';
import { CandidatesCollection } from 'antlr4-c3';
import { TrinoSqlLexer } from '../lib/trinosql/TrinoSqlLexer';
import { TrinoSqlParser, ProgramContext } from '../lib/trinosql/TrinoSqlParser';
import BasicParser from './common/basicParser';
import { Suggestions } from './common/basic-parser-types';

export default class TrinoSQL extends BasicParser<TrinoSqlLexer, ProgramContext, TrinoSqlParser> {
    protected createLexerFormCharStream(charStreams) {
        const lexer = new TrinoSqlLexer(charStreams);
        return lexer;
    }

    protected createParserFromTokenStream(tokenStream) {
        const parser = new TrinoSqlParser(tokenStream);
        return parser;
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

