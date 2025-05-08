import { CandidatesCollection } from 'antlr4-c3';
import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { processTokenCandidates } from '../common/tokenUtils';
import { TrinoSqlLexer } from '../../lib/trino/TrinoSqlLexer';
import { ProgramContext, TrinoSqlParser } from '../../lib/trino/TrinoSqlParser';
import { BasicSQL } from '../common/basicSQL';
import {
    Suggestions,
    EntityContextType,
    SyntaxSuggestion,
    CaretPosition,
    SemanticCollectOptions,
} from '../common/types';
import { StmtContextType } from '../common/entityCollector';
import { ErrorListener } from '../common/parseErrorListener';
import { TrinoEntityCollector } from './trinoEntityCollector';
import { TrinoErrorListener } from './trinoErrorListener';
import { TrinoSqlSplitListener } from './trinoSplitListener';
import { TrinoSemanticContextCollector } from './trinoSemanticContextCollector';

export { TrinoEntityCollector, TrinoSqlSplitListener };

export class TrinoSQL extends BasicSQL<TrinoSqlLexer, ProgramContext, TrinoSqlParser> {
    protected createLexerFromCharStream(charStreams: CharStream) {
        return new TrinoSqlLexer(charStreams);
    }

    protected createParserFromTokenStream(tokenStream: CommonTokenStream) {
        return new TrinoSqlParser(tokenStream);
    }

    protected get splitListener() {
        return new TrinoSqlSplitListener();
    }

    protected createErrorListener(_errorListener: ErrorListener): TrinoErrorListener {
        const parserContext = this;
        return new TrinoErrorListener(_errorListener, parserContext, this.preferredRules);
    }
    protected createEntityCollector(input: string, allTokens?: Token[], caretTokenIndex?: number) {
        return new TrinoEntityCollector(input, allTokens, caretTokenIndex);
    }

    protected createSemanticContextCollector(
        input: string,
        caretPosition: CaretPosition,
        allTokens: Token[],
        options?: SemanticCollectOptions
    ) {
        return new TrinoSemanticContextCollector(input, caretPosition, allTokens, options);
    }

    protected preferredRules: Set<number> = new Set([
        TrinoSqlParser.RULE_catalogRef,
        TrinoSqlParser.RULE_catalogNameCreate,
        TrinoSqlParser.RULE_schemaRef,
        TrinoSqlParser.RULE_schemaNameCreate,
        TrinoSqlParser.RULE_tableRef,
        TrinoSqlParser.RULE_tableNameCreate,
        TrinoSqlParser.RULE_viewRef,
        TrinoSqlParser.RULE_viewNameCreate,
        TrinoSqlParser.RULE_functionName,
        TrinoSqlParser.RULE_functionNameCreate,
        TrinoSqlParser.RULE_columnRef,
        TrinoSqlParser.RULE_columnName,
        TrinoSqlParser.RULE_columnNameCreate,
    ]);

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
                case TrinoSqlParser.RULE_catalogRef: {
                    syntaxContextType = EntityContextType.CATALOG;
                    break;
                }
                case TrinoSqlParser.RULE_catalogNameCreate: {
                    syntaxContextType = EntityContextType.CATALOG_CREATE;
                    break;
                }
                case TrinoSqlParser.RULE_schemaRef: {
                    syntaxContextType = EntityContextType.DATABASE;
                    break;
                }
                case TrinoSqlParser.RULE_schemaNameCreate: {
                    syntaxContextType = EntityContextType.DATABASE_CREATE;
                    break;
                }
                case TrinoSqlParser.RULE_tableRef: {
                    syntaxContextType = EntityContextType.TABLE;
                    break;
                }
                case TrinoSqlParser.RULE_tableNameCreate: {
                    syntaxContextType = EntityContextType.TABLE_CREATE;
                    break;
                }
                case TrinoSqlParser.RULE_viewRef: {
                    syntaxContextType = EntityContextType.VIEW;
                    break;
                }
                case TrinoSqlParser.RULE_viewNameCreate: {
                    syntaxContextType = EntityContextType.VIEW_CREATE;
                    break;
                }
                case TrinoSqlParser.RULE_functionName: {
                    syntaxContextType = EntityContextType.FUNCTION;
                    break;
                }
                case TrinoSqlParser.RULE_functionNameCreate: {
                    syntaxContextType = EntityContextType.FUNCTION_CREATE;
                    break;
                }
                case TrinoSqlParser.RULE_columnNameCreate: {
                    syntaxContextType = EntityContextType.COLUMN_CREATE;
                    break;
                }
                case TrinoSqlParser.RULE_columnRef: {
                    syntaxContextType = EntityContextType.COLUMN;
                    break;
                }
                case TrinoSqlParser.RULE_columnName: {
                    if (
                        candidateRule.ruleList.includes(TrinoSqlParser.RULE_groupBy) ||
                        candidateRule.ruleList.includes(TrinoSqlParser.RULE_sortItem) ||
                        candidateRule.ruleList.includes(TrinoSqlParser.RULE_whereClause) ||
                        candidateRule.ruleList.includes(TrinoSqlParser.RULE_havingClause) ||
                        candidateRule.ruleList.includes(TrinoSqlParser.RULE_partitionBy) ||
                        candidateRule.ruleList.includes(TrinoSqlParser.RULE_whenClause) ||
                        candidateRule.ruleList.includes(TrinoSqlParser.RULE_relation)
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
