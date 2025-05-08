import { CandidatesCollection } from 'antlr4-c3';
import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { processTokenCandidates } from '../common/tokenUtils';
import { SparkSqlLexer } from '../../lib/spark/SparkSqlLexer';
import { ProgramContext, SparkSqlParser } from '../../lib/spark/SparkSqlParser';
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
import { SparkEntityCollector } from './sparkEntityCollector';
import { SparkErrorListener } from './sparkErrorListener';
import { SparkSqlSplitListener } from './sparkSplitListener';
import { SparkSemanticContextCollector } from './sparkSemanticContextCollector';

export { SparkEntityCollector, SparkSqlSplitListener };

export class SparkSQL extends BasicSQL<SparkSqlLexer, ProgramContext, SparkSqlParser> {
    protected createLexerFromCharStream(charStreams: CharStream) {
        return new SparkSqlLexer(charStreams);
    }

    protected createParserFromTokenStream(tokenStream: CommonTokenStream) {
        return new SparkSqlParser(tokenStream);
    }

    protected preferredRules: Set<number> = new Set([
        SparkSqlParser.RULE_namespaceName,
        SparkSqlParser.RULE_namespaceNameCreate,
        SparkSqlParser.RULE_tableName,
        SparkSqlParser.RULE_tableNameCreate,
        SparkSqlParser.RULE_viewName,
        SparkSqlParser.RULE_viewNameCreate,
        SparkSqlParser.RULE_functionName,
        SparkSqlParser.RULE_functionNameCreate,
        SparkSqlParser.RULE_columnName,
        SparkSqlParser.RULE_columnNamePath,
        SparkSqlParser.RULE_columnNameCreate,
    ]);

    protected get splitListener() {
        return new SparkSqlSplitListener();
    }

    protected createErrorListener(_errorListener: ErrorListener): SparkErrorListener {
        const parserContext = this;
        return new SparkErrorListener(_errorListener, parserContext, this.preferredRules);
    }
    protected createEntityCollector(input: string, allTokens?: Token[], caretTokenIndex?: number) {
        return new SparkEntityCollector(input, allTokens, caretTokenIndex);
    }

    protected createSemanticContextCollector(
        input: string,
        caretPosition: CaretPosition,
        allTokens: Token[],
        options?: SemanticCollectOptions
    ) {
        return new SparkSemanticContextCollector(input, caretPosition, allTokens, options);
    }

    protected processCandidates(
        candidates: CandidatesCollection,
        allTokens: Token[],
        caretTokenIndex: number,
        tokenIndexOffset: number
    ): Suggestions<Token> {
        const originalSyntaxSuggestions: SyntaxSuggestion<Token>[] = [];
        const keywords: string[] = [];

        for (const candidate of candidates.rules) {
            const [ruleType, candidateRule] = candidate;
            const startTokenIndex = candidateRule.startTokenIndex + tokenIndexOffset;
            const tokenRanges = allTokens.slice(
                startTokenIndex,
                caretTokenIndex + tokenIndexOffset + 1
            );

            let syntaxContextType: EntityContextType | StmtContextType | undefined = void 0;
            switch (ruleType) {
                case SparkSqlParser.RULE_namespaceName: {
                    syntaxContextType = EntityContextType.DATABASE;
                    break;
                }
                case SparkSqlParser.RULE_namespaceNameCreate: {
                    syntaxContextType = EntityContextType.DATABASE_CREATE;
                    break;
                }
                case SparkSqlParser.RULE_tableName: {
                    syntaxContextType = EntityContextType.TABLE;
                    break;
                }
                case SparkSqlParser.RULE_tableNameCreate: {
                    syntaxContextType = EntityContextType.TABLE_CREATE;
                    break;
                }
                case SparkSqlParser.RULE_viewName: {
                    syntaxContextType = EntityContextType.VIEW;
                    break;
                }
                case SparkSqlParser.RULE_viewNameCreate: {
                    syntaxContextType = EntityContextType.VIEW_CREATE;
                    break;
                }
                case SparkSqlParser.RULE_functionName: {
                    syntaxContextType = EntityContextType.FUNCTION;
                    break;
                }
                case SparkSqlParser.RULE_functionNameCreate: {
                    syntaxContextType = EntityContextType.FUNCTION_CREATE;
                    break;
                }
                case SparkSqlParser.RULE_columnName: {
                    syntaxContextType = EntityContextType.COLUMN;
                    break;
                }
                case SparkSqlParser.RULE_columnNameCreate: {
                    syntaxContextType = EntityContextType.COLUMN_CREATE;
                    break;
                }
                case SparkSqlParser.RULE_columnNamePath: {
                    if (
                        candidateRule.ruleList.includes(SparkSqlParser.RULE_whenClause) ||
                        candidateRule.ruleList.includes(SparkSqlParser.RULE_whereClause) ||
                        candidateRule.ruleList.includes(SparkSqlParser.RULE_joinRelation) ||
                        candidateRule.ruleList.includes(SparkSqlParser.RULE_orderOrSortByClause) ||
                        candidateRule.ruleList.includes(SparkSqlParser.RULE_groupByClause) ||
                        candidateRule.ruleList.includes(SparkSqlParser.RULE_aggregationClause) ||
                        candidateRule.ruleList.includes(SparkSqlParser.RULE_havingClause) ||
                        candidateRule.ruleList.includes(SparkSqlParser.RULE_windowClause) ||
                        candidateRule.ruleList.includes(SparkSqlParser.RULE_selectClause) ||
                        candidateRule.ruleList.includes(SparkSqlParser.RULE_limitClause) ||
                        candidateRule.ruleList.includes(SparkSqlParser.RULE_clusterOrDistributeBy)
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
