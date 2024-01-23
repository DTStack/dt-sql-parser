import { Token } from 'antlr4ts';
import { CandidatesCollection } from 'antlr4-c3';
import { ImpalaSqlLexer } from '../lib/impala/ImpalaSqlLexer';
import {
    ImpalaSqlParser,
    ProgramContext,
    SingleStatementContext,
} from '../lib/impala/ImpalaSqlParser';
import BasicParser from './common/basicParser';
import { ImpalaSqlParserListener } from '../lib/impala/ImpalaSqlParserListener';
import { EntityContextType, Suggestions, SyntaxSuggestion } from './common/basic-parser-types';
import { StmtContextType } from './common/entityCollector';

export default class ImpalaSQL extends BasicParser<
    ImpalaSqlLexer,
    ProgramContext,
    ImpalaSqlParser
> {
    protected createLexerFromCharStream(charStreams) {
        const lexer = new ImpalaSqlLexer(charStreams);
        return lexer;
    }

    protected createParserFromTokenStream(tokenStream) {
        return new ImpalaSqlParser(tokenStream);
    }

    protected preferredRules: Set<number> = new Set([
        ImpalaSqlParser.RULE_functionNameCreate,
        ImpalaSqlParser.RULE_tableNameCreate,
        ImpalaSqlParser.RULE_viewNameCreate,
        ImpalaSqlParser.RULE_databaseNameCreate,
        ImpalaSqlParser.RULE_columnNamePathCreate,
        ImpalaSqlParser.RULE_tableNamePath,
        ImpalaSqlParser.RULE_functionNamePath,
        ImpalaSqlParser.RULE_viewNamePath,
        ImpalaSqlParser.RULE_databaseNamePath,
        ImpalaSqlParser.RULE_columnNamePath,
    ]);

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

            let syntaxContextType: EntityContextType | StmtContextType;
            switch (ruleType) {
                case ImpalaSqlParser.RULE_functionNameCreate: {
                    syntaxContextType = EntityContextType.FUNCTION_CREATE;
                    break;
                }
                case ImpalaSqlParser.RULE_tableNameCreate: {
                    syntaxContextType = EntityContextType.TABLE_CREATE;
                    break;
                }
                case ImpalaSqlParser.RULE_databaseNameCreate: {
                    syntaxContextType = EntityContextType.DATABASE_CREATE;
                    break;
                }
                case ImpalaSqlParser.RULE_viewNameCreate: {
                    syntaxContextType = EntityContextType.VIEW_CREATE;
                    break;
                }
                case ImpalaSqlParser.RULE_columnNamePathCreate: {
                    syntaxContextType = EntityContextType.COLUMN_CREATE;
                    break;
                }
                case ImpalaSqlParser.RULE_databaseNamePath: {
                    syntaxContextType = EntityContextType.DATABASE;
                    break;
                }
                case ImpalaSqlParser.RULE_tableNamePath: {
                    syntaxContextType = EntityContextType.TABLE;
                    break;
                }
                case ImpalaSqlParser.RULE_viewNamePath: {
                    syntaxContextType = EntityContextType.VIEW;
                    break;
                }
                case ImpalaSqlParser.RULE_functionNamePath: {
                    syntaxContextType = EntityContextType.FUNCTION;
                    break;
                }
                case ImpalaSqlParser.RULE_columnNamePath: {
                    syntaxContextType = EntityContextType.COLUMN;
                }
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
    private _statementContext: SingleStatementContext[] = [];

    exitSingleStatement = (ctx: SingleStatementContext) => {
        this._statementContext.push(ctx);
    };

    enterSingleStatement = (ctx: SingleStatementContext) => {};

    get statementsContext() {
        return this._statementContext;
    }
}
