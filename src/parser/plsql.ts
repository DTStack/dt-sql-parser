import { Token } from 'antlr4ts';
import { CandidatesCollection } from 'antlr4-c3';
import { PlSqlLexer } from '../lib/plsql/PlSqlLexer';
import { PlSqlParser, ProgramContext } from '../lib/plsql/PlSqlParser';
import BasicParser from './common/basicParser';
import { Suggestions } from './common/basic-parser-types';

export default class PLSQL extends BasicParser<PlSqlLexer, ProgramContext, PlSqlParser> {
    public createLexerFormCharStream(charStreams) {
        const lexer = new PlSqlLexer(charStreams);
        return lexer;
    }

    public createParserFromTokenStream(tokenStream) {
        return new PlSqlParser(tokenStream);
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
