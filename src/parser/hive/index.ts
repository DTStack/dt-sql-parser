import { CandidatesCollection } from 'antlr4-c3';
import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { processTokenCandidates } from '../common/tokenUtils';
import { HiveSqlLexer } from '../../lib/hive/HiveSqlLexer';
import { HiveSqlParser, ProgramContext } from '../../lib/hive/HiveSqlParser';
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
import { HiveEntityCollector } from './hiveEntityCollector';
import { HiveErrorListener } from './hiveErrorListener';
import { HiveSqlSplitListener } from './hiveSplitListener';
import { HiveSemanticContextCollector } from './hiveSemanticContextCollector';

export { HiveEntityCollector, HiveSqlSplitListener };

export class HiveSQL extends BasicSQL<HiveSqlLexer, ProgramContext, HiveSqlParser> {
    protected createLexerFromCharStream(charStreams: CharStream) {
        return new HiveSqlLexer(charStreams);
    }

    protected createParserFromTokenStream(tokenStream: CommonTokenStream) {
        return new HiveSqlParser(tokenStream);
    }

    /**
     * The rules that keywords you don't want to be suggested.
     */
    protected excludeKeywordRules = new Set([HiveSqlParser.RULE_nonReserved]);

    protected preferredRules: Set<number> = new Set([
        HiveSqlParser.RULE_dbSchemaName, // db or schema name
        HiveSqlParser.RULE_dbSchemaNameCreate, // db or schema name that will be created
        HiveSqlParser.RULE_tableName, // table name
        HiveSqlParser.RULE_tableNameCreate, // table name that will be created
        HiveSqlParser.RULE_viewName, // view name
        HiveSqlParser.RULE_viewNameCreate, // view name that will be created
        HiveSqlParser.RULE_functionNameForDDL, // function name
        HiveSqlParser.RULE_functionNameForInvoke, // function name
        HiveSqlParser.RULE_functionNameCreate, // function name that will be created
        HiveSqlParser.RULE_columnName,
        HiveSqlParser.RULE_columnNamePath,
        HiveSqlParser.RULE_columnNameCreate,
        ...this.excludeKeywordRules,
    ]);

    protected get splitListener() {
        return new HiveSqlSplitListener();
    }

    protected createErrorListener(_errorListener: ErrorListener): HiveErrorListener {
        const parserContext = this;
        return new HiveErrorListener(_errorListener, parserContext, this.preferredRules);
    }
    protected createEntityCollector(input: string, allTokens?: Token[], caretTokenIndex?: number) {
        return new HiveEntityCollector(input, allTokens, caretTokenIndex);
    }

    protected createSemanticContextCollector(
        input: string,
        caretPosition: CaretPosition,
        allTokens: Token[],
        options?: SemanticCollectOptions
    ) {
        return new HiveSemanticContextCollector(input, caretPosition, allTokens, options);
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
                case HiveSqlParser.RULE_dbSchemaName: {
                    syntaxContextType = EntityContextType.DATABASE;
                    break;
                }
                case HiveSqlParser.RULE_dbSchemaNameCreate: {
                    syntaxContextType = EntityContextType.DATABASE_CREATE;
                    break;
                }
                case HiveSqlParser.RULE_tableName: {
                    syntaxContextType = EntityContextType.TABLE;
                    break;
                }
                case HiveSqlParser.RULE_tableNameCreate: {
                    syntaxContextType = EntityContextType.TABLE_CREATE;
                    break;
                }
                case HiveSqlParser.RULE_viewName: {
                    syntaxContextType = EntityContextType.VIEW;
                    break;
                }
                case HiveSqlParser.RULE_viewNameCreate: {
                    syntaxContextType = EntityContextType.VIEW_CREATE;
                    break;
                }
                case HiveSqlParser.RULE_functionNameForDDL:
                case HiveSqlParser.RULE_functionNameForInvoke: {
                    syntaxContextType = EntityContextType.FUNCTION;
                    break;
                }
                case HiveSqlParser.RULE_functionNameCreate: {
                    syntaxContextType = EntityContextType.FUNCTION_CREATE;
                    break;
                }
                case HiveSqlParser.RULE_columnName: {
                    syntaxContextType = EntityContextType.COLUMN;
                    break;
                }
                case HiveSqlParser.RULE_columnNameCreate: {
                    syntaxContextType = EntityContextType.COLUMN_CREATE;
                    break;
                }
                case HiveSqlParser.RULE_columnNamePath: {
                    if (
                        candidateRule.ruleList.includes(HiveSqlParser.RULE_orderByClause) ||
                        candidateRule.ruleList.includes(HiveSqlParser.RULE_havingClause) ||
                        candidateRule.ruleList.includes(HiveSqlParser.RULE_groupByClause) ||
                        candidateRule.ruleList.includes(HiveSqlParser.RULE_sortByClause) ||
                        candidateRule.ruleList.includes(HiveSqlParser.RULE_whereClause) ||
                        candidateRule.ruleList.includes(HiveSqlParser.RULE_qualifyClause) ||
                        candidateRule.ruleList.includes(HiveSqlParser.RULE_clusterByClause) ||
                        candidateRule.ruleList.includes(HiveSqlParser.RULE_distributeByClause) ||
                        candidateRule.ruleList.includes(HiveSqlParser.RULE_selectClause) ||
                        candidateRule.ruleList.includes(HiveSqlParser.RULE_joinSource) ||
                        candidateRule.ruleList.includes(HiveSqlParser.RULE_caseExpression) ||
                        candidateRule.ruleList.includes(HiveSqlParser.RULE_whenExpression) ||
                        candidateRule.ruleList.includes(HiveSqlParser.RULE_castExpression)
                    ) {
                        syntaxContextType = EntityContextType.COLUMN;
                    }
                    break;
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
