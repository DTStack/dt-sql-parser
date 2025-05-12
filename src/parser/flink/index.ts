import { CandidatesCollection } from 'antlr4-c3';
import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { processTokenCandidates } from '../common/tokenUtils';
import { FlinkSqlLexer } from '../../lib/flink/FlinkSqlLexer';
import { FlinkSqlParser, ProgramContext } from '../../lib/flink/FlinkSqlParser';
import {
    CaretPosition,
    EntityContextType,
    SemanticCollectOptions,
    Suggestions,
    SyntaxSuggestion,
} from '../common/types';
import { BasicSQL } from '../common/basicSQL';
import { StmtContextType } from '../common/entityCollector';
import { ErrorListener } from '../common/parseErrorListener';
import { FlinkEntityCollector } from './flinkEntityCollector';
import { FlinkErrorListener } from './flinkErrorListener';
import { FlinkSqlSplitListener } from './flinkSplitListener';
import { FlinkSemanticContextCollector } from './flinkSemanticContextCollector';

export { FlinkEntityCollector, FlinkSqlSplitListener };

export class FlinkSQL extends BasicSQL<FlinkSqlLexer, ProgramContext, FlinkSqlParser> {
    protected createLexerFromCharStream(charStreams: CharStream) {
        return new FlinkSqlLexer(charStreams);
    }

    protected createParserFromTokenStream(tokenStream: CommonTokenStream) {
        return new FlinkSqlParser(tokenStream);
    }

    protected preferredRules = new Set([
        FlinkSqlParser.RULE_catalogPath, // catalog name
        FlinkSqlParser.RULE_databasePath, // database name
        FlinkSqlParser.RULE_databasePathCreate, // database name that will be created
        FlinkSqlParser.RULE_tablePath, // table name
        FlinkSqlParser.RULE_tablePathCreate, // table name that will be created
        FlinkSqlParser.RULE_viewPath, // view name path
        FlinkSqlParser.RULE_viewPathCreate, // viewName that will be created
        FlinkSqlParser.RULE_functionName, // functionName
        FlinkSqlParser.RULE_functionNameWithParams, // functionName
        FlinkSqlParser.RULE_reservedKeywordsFollowParamsUsedAsFuncName, // functionName
        FlinkSqlParser.RULE_reservedKeywordsNoParamsUsedAsFuncName, // functionName
        FlinkSqlParser.RULE_functionNameCreate, // functionName that will be created
        FlinkSqlParser.RULE_columnName,
        FlinkSqlParser.RULE_columnNamePath,
        FlinkSqlParser.RULE_columnNameCreate,
        FlinkSqlParser.RULE_tablePropertyKey,
        FlinkSqlParser.RULE_tablePropertyValue,
    ]);

    protected get splitListener() {
        return new FlinkSqlSplitListener();
    }

    protected createErrorListener(_errorListener: ErrorListener): FlinkErrorListener {
        const parserContext = this;
        return new FlinkErrorListener(_errorListener, parserContext, this.preferredRules);
    }
    protected createEntityCollector(input: string, allTokens?: Token[], caretTokenIndex?: number) {
        return new FlinkEntityCollector(input, allTokens, caretTokenIndex);
    }

    protected createSemanticContextCollector(
        input: string,
        caretPosition: CaretPosition,
        allTokens: Token[],
        options?: SemanticCollectOptions
    ) {
        return new FlinkSemanticContextCollector(input, caretPosition, allTokens, options);
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
                case FlinkSqlParser.RULE_catalogPath: {
                    syntaxContextType = EntityContextType.CATALOG;
                    break;
                }
                case FlinkSqlParser.RULE_databasePath: {
                    syntaxContextType = EntityContextType.DATABASE;
                    break;
                }
                case FlinkSqlParser.RULE_databasePathCreate: {
                    syntaxContextType = EntityContextType.DATABASE_CREATE;
                    break;
                }
                case FlinkSqlParser.RULE_tablePath: {
                    syntaxContextType = EntityContextType.TABLE;
                    break;
                }
                case FlinkSqlParser.RULE_tablePathCreate: {
                    syntaxContextType = EntityContextType.TABLE_CREATE;
                    break;
                }
                case FlinkSqlParser.RULE_viewPath: {
                    syntaxContextType = EntityContextType.VIEW;
                    break;
                }
                case FlinkSqlParser.RULE_viewPathCreate: {
                    syntaxContextType = EntityContextType.VIEW_CREATE;
                    break;
                }
                case FlinkSqlParser.RULE_functionName:
                case FlinkSqlParser.RULE_functionNameWithParams:
                case FlinkSqlParser.RULE_reservedKeywordsFollowParamsUsedAsFuncName:
                case FlinkSqlParser.RULE_reservedKeywordsNoParamsUsedAsFuncName: {
                    syntaxContextType = EntityContextType.FUNCTION;
                    break;
                }
                case FlinkSqlParser.RULE_functionNameCreate: {
                    syntaxContextType = EntityContextType.FUNCTION_CREATE;
                    break;
                }
                case FlinkSqlParser.RULE_columnName: {
                    syntaxContextType = EntityContextType.COLUMN;
                    break;
                }
                case FlinkSqlParser.RULE_columnNameCreate: {
                    syntaxContextType = EntityContextType.COLUMN_CREATE;
                    break;
                }
                case FlinkSqlParser.RULE_columnNamePath: {
                    if (
                        candidateRule.ruleList.includes(FlinkSqlParser.RULE_selectClause) ||
                        candidateRule.ruleList.includes(FlinkSqlParser.RULE_whereClause) ||
                        candidateRule.ruleList.includes(FlinkSqlParser.RULE_groupByClause) ||
                        candidateRule.ruleList.includes(FlinkSqlParser.RULE_limitClause) ||
                        candidateRule.ruleList.includes(FlinkSqlParser.RULE_whenClause) ||
                        candidateRule.ruleList.includes(FlinkSqlParser.RULE_havingClause)
                    ) {
                        syntaxContextType = EntityContextType.COLUMN;
                    }
                    break;
                }
                case FlinkSqlParser.RULE_tablePropertyKey: {
                    syntaxContextType = EntityContextType.TABLE_PROPERTY_KEY;
                    break;
                }
                case FlinkSqlParser.RULE_tablePropertyValue: {
                    syntaxContextType = EntityContextType.TABLE_PROPERTY_VALUE;
                    break;
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
