import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { CandidatesCollection } from 'antlr4-c3';
import { PlSqlLexer } from '../lib/plsql/PlSqlLexer';
import { PlSqlParser, ProgramContext } from '../lib/plsql/PlSqlParser';
import { BasicSQL } from './common/basicSQL';
import { Suggestions } from './common/types';

export class PLSQL extends BasicSQL<PlSqlLexer, ProgramContext, PlSqlParser> {
    protected createLexerFromCharStream(charStreams: CharStream) {
        return new PlSqlLexer(charStreams);
    }

    protected createParserFromTokenStream(tokenStream: CommonTokenStream) {
        return new PlSqlParser(tokenStream);
    }

    protected preferredRules: Set<number> = new Set();

    protected get splitListener() {
        return null as any;
    }

    protected createEntityCollector(input: string, caretTokenIndex?: number) {
        return null as any;
    }

    protected processCandidates(
        candidates: CandidatesCollection,
        allTokens: Token[],
        caretTokenIndex: number
    ): Suggestions<Token> {
        return {
            syntax: [],
            keywords: [],
        };
    }
}
