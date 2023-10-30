import { Token } from 'antlr4ts';
import { CandidatesCollection } from 'antlr4-c3';
import { MySqlLexer } from '../lib/mysql/MySqlLexer';
import { MySqlParser, ProgramContext } from '../lib/mysql/MySqlParser';
import BasicParser from './common/basicParser';
import { Suggestions } from './common/basic-parser-types';

export default class MySQL extends BasicParser<MySqlLexer, ProgramContext, MySqlParser> {
    protected createLexerFormCharStream(charStreams): MySqlLexer {
        const lexer = new MySqlLexer(charStreams);
        return lexer;
    }

    protected createParserFromTokenStream(tokenStream): MySqlParser {
        return new MySqlParser(tokenStream);
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
