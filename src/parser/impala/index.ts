import { CandidatesCollection } from 'antlr4-c3';
import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { processTokenCandidates } from '../common/tokenUtils';
import { ImpalaSqlLexer } from '../../lib/impala/ImpalaSqlLexer';
import { ImpalaSqlParser, ProgramContext } from '../../lib/impala/ImpalaSqlParser';
import { BasicSQL } from '../common/basicSQL';
import {
    CaretPosition,
    EntityContextType,
    SemanticCollectOptions,
    Suggestions,
    SyntaxSuggestion,
} from '../common/types';
import { StmtContextType } from '../common/entityCollector';
import { ErrorListener } from '../common/parseErrorListener';
import { ImpalaEntityCollector } from './impalaEntityCollector';
import { ImpalaErrorListener } from './ImpalaErrorListener';
import { ImpalaSqlSplitListener } from './impalaSplitListener';
import { ImpalaSemanticContextCollector } from './impalaSemanticContextCollector';

export { ImpalaEntityCollector, ImpalaSqlSplitListener };

export class ImpalaSQL extends BasicSQL<ImpalaSqlLexer, ProgramContext, ImpalaSqlParser> {
    protected createLexerFromCharStream(charStreams: CharStream) {
        return new ImpalaSqlLexer(charStreams);
    }

    protected createParserFromTokenStream(tokenStream: CommonTokenStream) {
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
        ImpalaSqlParser.RULE_columnName,
    ]);

    protected get splitListener() {
        return new ImpalaSqlSplitListener();
    }

    protected createErrorListener(_errorListener: ErrorListener): ImpalaErrorListener {
        const parserContext = this;
        return new ImpalaErrorListener(_errorListener, parserContext, this.preferredRules);
    }
    protected createEntityCollector(input: string, allTokens?: Token[], caretTokenIndex?: number) {
        return new ImpalaEntityCollector(input, allTokens, caretTokenIndex);
    }

    protected createSemanticContextCollector(
        input: string,
        caretPosition: CaretPosition,
        allTokens: Token[],
        options?: SemanticCollectOptions
    ) {
        return new ImpalaSemanticContextCollector(input, caretPosition, allTokens, options);
    }

    protected processCandidates(
        candidates: CandidatesCollection,
        allTokens: Token[],
        caretTokenIndex: number
    ): Suggestions<Token> {
        const originalSyntaxSuggestions: SyntaxSuggestion<Token>[] = [];
        const keywords: string[] = [];
        for (let candidate of candidates.rules) {
            const [ruleType, candidateRule] = candidate;
            const tokenRanges = allTokens.slice(candidateRule.startTokenIndex, caretTokenIndex + 1);

            let syntaxContextType: EntityContextType | StmtContextType | undefined = void 0;
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
                case ImpalaSqlParser.RULE_columnName: {
                    if (
                        candidateRule.ruleList.includes(ImpalaSqlParser.RULE_columnItem) ||
                        candidateRule.ruleList.includes(ImpalaSqlParser.RULE_havingClause) ||
                        candidateRule.ruleList.includes(ImpalaSqlParser.RULE_whereClause) ||
                        candidateRule.ruleList.includes(ImpalaSqlParser.RULE_whenClause) ||
                        candidateRule.ruleList.includes(ImpalaSqlParser.RULE_partitionByClause) ||
                        candidateRule.ruleList.includes(ImpalaSqlParser.RULE_relation)
                    ) {
                        syntaxContextType = EntityContextType.COLUMN;
                    }
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

        const processedKeywords = processTokenCandidates(this._parser, candidates.tokens);
        keywords.push(...processedKeywords);

        return {
            syntax: originalSyntaxSuggestions,
            keywords,
        };
    }
}
