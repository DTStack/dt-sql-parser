import { Token } from 'antlr4ts';
import { CandidatesCollection } from 'antlr4-c3';
import { ImpalaSqlLexer } from '../lib/impala/ImpalaSqlLexer';
import { ImpalaSqlParser, ProgramContext, StatementContext } from '../lib/impala/ImpalaSqlParser';
import BasicParser from './common/basicParser';
import { ImpalaSqlParserListener } from '../lib/impala/ImpalaSqlParserListener';
import { SyntaxContextType, Suggestions, SyntaxSuggestion } from './common/basic-parser-types';

export default class ImpalaSQL extends BasicParser<
    ImpalaSqlLexer,
    ProgramContext,
    ImpalaSqlParser
> {
    protected createLexerFormCharStream(charStreams) {
        const lexer = new ImpalaSqlLexer(charStreams);
        return lexer;
    }

    protected createParserFromTokenStream(tokenStream) {
        return new ImpalaSqlParser(tokenStream);
    }

    protected preferredRules: Set<number> = new Set([]);

    protected get splitListener() {
        return new ImpalaSqlSplitListener();
    }

    protected processCandidates(
        candidates: CandidatesCollection,
        allTokens: Token[],
        caretTokenIndex: number,
        tokenIndexOffset: number
    ): Suggestions<Token> {
        const originalSyntaxSuggestions: SyntaxSuggestion<Token>[] = [];
        const keywords: string[] = [];
        for (let candidate of candidates.rules) {
            const [ruleType, candidateRule] = candidate;
            const startTokenIndex = candidateRule.startTokenIndex + tokenIndexOffset;
            const tokenRanges = allTokens.slice(
                startTokenIndex,
                caretTokenIndex + tokenIndexOffset + 1
            );

            let syntaxContextType: SyntaxContextType;
            switch (ruleType) {
                default:
                    break;
            }

            if (syntaxContextType) {
                originalSyntaxSuggestions.push({
                    syntaxContextType,
                    wordRanges: tokenRanges,
                });
            }
        }

        for (let candidate of candidates.tokens) {
            const symbolicName = this._parser.vocabulary.getSymbolicName(candidate[0]);
            const displayName = this._parser.vocabulary.getDisplayName(candidate[0]);
            if (symbolicName && symbolicName.startsWith('KW_')) {
                const keyword =
                    displayName.startsWith("'") && displayName.endsWith("'")
                        ? displayName.slice(1, -1)
                        : displayName;
                keywords.push(keyword);
            }
        }
        return {
            syntax: originalSyntaxSuggestions,
            keywords,
        };
    }
}

export class ImpalaSqlSplitListener implements ImpalaSqlParserListener {
    private _statementContext: StatementContext[] = [];

    exitStatement = (ctx: StatementContext) => {
        this._statementContext.push(ctx);
    };

    enterStatement = (ctx: StatementContext) => {};

    get statementsContext() {
        return this._statementContext;
    }
}
