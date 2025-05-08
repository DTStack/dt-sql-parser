import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { CandidatesCollection } from 'antlr4-c3';
import { SqlLexer } from '../../lib/sql/SqlLexer';
import { SqlParser, ProgramContext } from '../../lib/sql/SqlParser';
import { BasicSQL } from '../common/basicSQL';
import { Suggestions, EntityContextType, SyntaxSuggestion } from '../common/types';
import { StmtContextType } from '../common/entityCollector';
import { SqlSplitListener } from './sqlSplitListener';
import { SqlEntityCollector } from './sqlEntityCollector';
import { SqlErrorListener } from './sqlErrorListener';
import { ErrorListener } from '../common/parseErrorListener';

export { SqlSplitListener, SqlEntityCollector };

export class Sql extends BasicSQL<SqlLexer, ProgramContext, SqlParser> {
    protected createLexerFromCharStream(charStreams: CharStream) {
        return new SqlLexer(charStreams);
    }

    protected createParserFromTokenStream(tokenStream: CommonTokenStream) {
        return new SqlParser(tokenStream);
    }

    protected preferredRules: Set<number> = new Set([
        SqlParser.RULE_namespaceName,
        SqlParser.RULE_namespaceNameCreate,
        SqlParser.RULE_tableName,
        SqlParser.RULE_tableNameCreate,
        SqlParser.RULE_viewName,
        SqlParser.RULE_viewNameCreate,
        SqlParser.RULE_functionName,
        SqlParser.RULE_functionNameCreate,
        SqlParser.RULE_columnName,
        SqlParser.RULE_columnNameCreate,
    ]);

    protected get splitListener() {
        return new SqlSplitListener();
    }

    protected createErrorListener(_errorListener: ErrorListener) {
        return new SqlErrorListener(_errorListener, this.preferredRules, this.locale);
    }

    protected createEntityCollector(input: string, caretTokenIndex?: number) {
        return new SqlEntityCollector(input, caretTokenIndex);
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
                case SqlParser.RULE_namespaceName: {
                    syntaxContextType = EntityContextType.DATABASE;
                    break;
                }
                case SqlParser.RULE_namespaceNameCreate: {
                    syntaxContextType = EntityContextType.DATABASE_CREATE;
                    break;
                }
                case SqlParser.RULE_tableName: {
                    syntaxContextType = EntityContextType.TABLE;
                    break;
                }
                case SqlParser.RULE_tableNameCreate: {
                    syntaxContextType = EntityContextType.TABLE_CREATE;
                    break;
                }
                case SqlParser.RULE_viewName: {
                    syntaxContextType = EntityContextType.VIEW;
                    break;
                }
                case SqlParser.RULE_viewNameCreate: {
                    syntaxContextType = EntityContextType.VIEW_CREATE;
                    break;
                }
                case SqlParser.RULE_functionName: {
                    syntaxContextType = EntityContextType.FUNCTION;
                    break;
                }
                case SqlParser.RULE_functionNameCreate: {
                    syntaxContextType = EntityContextType.FUNCTION_CREATE;
                    break;
                }
                case SqlParser.RULE_columnName: {
                    syntaxContextType = EntityContextType.COLUMN;
                    break;
                }
                case SqlParser.RULE_columnNameCreate: {
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
