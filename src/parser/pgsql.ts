import { Token } from 'antlr4ts';
import { CandidatesCollection } from 'antlr4-c3';
import { PostgreSQLLexer } from '../lib/pgsql/PostgreSQLLexer';
import { PostgreSQLParser, ProgramContext } from '../lib/pgsql/PostgreSQLParser';
import BasicParser from './common/basicParser';
import { Suggestions } from './common/basic-parser-types';

export default class PostgresSQL extends BasicParser<
    PostgreSQLLexer,
    ProgramContext,
    PostgreSQLParser
> {
    protected createLexerFormCharStream(charStreams) {
        const lexer = new PostgreSQLLexer(charStreams);
        return lexer;
    }

    protected createParserFromTokenStream(tokenStream) {
        return new PostgreSQLParser(tokenStream);
    }

    protected preferredRules: Set<number> = new Set();

    protected get splitListener() {
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
