import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { CandidatesCollection } from 'antlr4-c3';
import { TrinoSqlLexer } from '../../lib/trino/TrinoSqlLexer';
import { TrinoSqlParser, ProgramContext } from '../../lib/trino/TrinoSqlParser';
import { BasicSQL } from '../common/basicSQL';
import { Suggestions, EntityContextType, SyntaxSuggestion } from '../common/types';
import { StmtContextType } from '../common/entityCollector';
import { TrinoSqlSplitListener } from './trinoSplitListener';
import { TrinoEntityCollector } from './trinoEntityCollector';
import { ErrorListener } from '../common/parseErrorListener';
import { TrinoErrorListener } from './trinoErrorListener';

export { TrinoSqlSplitListener, TrinoEntityCollector };

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

    protected createErrorListener(_errorListener: ErrorListener) {
        return new TrinoErrorListener(_errorListener, this.preferredRules, this.locale);
    }

    protected createEntityCollector(input: string, caretTokenIndex?: number) {
        return new TrinoEntityCollector(input, caretTokenIndex);
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
        TrinoSqlParser.RULE_columnNameCreate,
        TrinoSqlParser.RULE_expressionWithCol,
    ]);

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
                case TrinoSqlParser.RULE_columnRef:
                case TrinoSqlParser.RULE_expressionWithCol: {
                    syntaxContextType = EntityContextType.COLUMN;
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

        for (let candidate of candidates.tokens) {
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
