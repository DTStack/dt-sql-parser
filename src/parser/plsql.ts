import { Token } from 'antlr4ts';
import { CandidatesCollection } from 'antlr4-c3';
import { PlSqlLexer } from '../lib/plsql/PlSqlLexer';
import { PlSqlParser, ProgramContext } from '../lib/plsql/PlSqlParser';
import BasicParser from './common/basicParser';
import { Suggestions } from './common/basic-parser-types';

export default class PLSQL extends BasicParser<PlSqlLexer, ProgramContext, PlSqlParser> {
    protected createLexerFormCharStream(charStreams) {
        const lexer = new PlSqlLexer(charStreams);
        return lexer;
    }

    protected createParserFromTokenStream(tokenStream) {
        return new PlSqlParser(tokenStream);
    }

    protected preferredRules: Set<number> = new Set();

    protected get splitListener () {
        return null as any;
    }

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
