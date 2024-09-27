import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { CandidatesCollection } from 'antlr4-c3';
import { SparkSqlLexer } from '../../lib/spark/SparkSqlLexer';
import { SparkSqlParser, ProgramContext } from '../../lib/spark/SparkSqlParser';
import { BasicSQL } from '../common/basicSQL';
import { Suggestions, EntityContextType, SyntaxSuggestion } from '../common/types';
import { StmtContextType } from '../common/entityCollector';
import { SparkSqlSplitListener } from './sparkSplitListener';
import { SparkEntityCollector } from './sparkEntityCollector';
import { SparkErrorListener } from './sparkErrorListener';
import { ErrorListener } from '../common/parseErrorListener';

export { SparkSqlSplitListener, SparkEntityCollector };

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
        SparkSqlParser.RULE_columnNameCreate,
    ]);

    protected get splitListener() {
        return new SparkSqlSplitListener();
    }

    protected createErrorListener(_errorListener: ErrorListener) {
        return new SparkErrorListener(_errorListener, this.preferredRules, this.locale);
    }

    protected createEntityCollector(input: string, caretTokenIndex?: number) {
        return new SparkEntityCollector(input, caretTokenIndex);
    }

    protected processCandidates(
        candidates: CandidatesCollection,
        allTokens: Token[],
        caretTokenIndex: number
    ): Suggestions<Token> {
        const originalSyntaxSuggestions: SyntaxSuggestion<Token>[] = [];
        const keywords: string[] = [];

        for (const candidate of candidates.rules) {
            const [ruleType, candidateRule] = candidate;
            const startTokenIndex = candidateRule.startTokenIndex;
            const tokenRanges = allTokens.slice(startTokenIndex, caretTokenIndex + 1);

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

        for (const candidate of candidates.tokens) {
            const symbolicName = this._parser.vocabulary.getSymbolicName(candidate[0]);
            const displayName = this._parser.vocabulary.getDisplayName(candidate[0]);
            if (displayName && symbolicName && symbolicName.startsWith('KW_')) {
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
