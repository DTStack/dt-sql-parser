import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { CandidatesCollection } from 'antlr4-c3';
import { BasicSqlLexer } from '../../lib/basic/BasicSqlLexer';
import { BasicSqlParser, ProgramContext } from '../../lib/basic/BasicSqlParser';
import { BasicSQL as CommonBasicSQL } from '../common/basicSQL';
import { Suggestions, EntityContextType, SyntaxSuggestion } from '../common/types';
import { StmtContextType } from '../common/entityCollector';
import { BasicSqlSplitListener } from './basicSplitListener';
import { BasicEntityCollector } from './basicEntityCollector';

export { BasicSqlSplitListener, BasicEntityCollector };

export class BasicSQL extends CommonBasicSQL<BasicSqlLexer, ProgramContext, BasicSqlParser> {
    protected createLexerFromCharStream(charStreams: CharStream) {
        return new BasicSqlLexer(charStreams);
    }

    protected createParserFromTokenStream(tokenStream: CommonTokenStream) {
        return new BasicSqlParser(tokenStream);
    }

    protected preferredRules: Set<number> = new Set([
        BasicSqlParser.RULE_namespaceName,
        BasicSqlParser.RULE_namespaceNameCreate,
        BasicSqlParser.RULE_tableName,
        BasicSqlParser.RULE_tableNameCreate,
        BasicSqlParser.RULE_viewName,
        BasicSqlParser.RULE_viewNameCreate,
        BasicSqlParser.RULE_functionName,
        BasicSqlParser.RULE_functionNameCreate,
        BasicSqlParser.RULE_columnName,
        BasicSqlParser.RULE_columnNameCreate,
    ]);

    protected get splitListener() {
        return new BasicSqlSplitListener();
    }

    protected createEntityCollector(input: string, caretTokenIndex?: number) {
        return new BasicEntityCollector(input, caretTokenIndex);
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
                case BasicSqlParser.RULE_namespaceName: {
                    syntaxContextType = EntityContextType.DATABASE;
                    break;
                }
                case BasicSqlParser.RULE_namespaceNameCreate: {
                    syntaxContextType = EntityContextType.DATABASE_CREATE;
                    break;
                }
                case BasicSqlParser.RULE_tableName: {
                    syntaxContextType = EntityContextType.TABLE;
                    break;
                }
                case BasicSqlParser.RULE_tableNameCreate: {
                    syntaxContextType = EntityContextType.TABLE_CREATE;
                    break;
                }
                case BasicSqlParser.RULE_viewName: {
                    syntaxContextType = EntityContextType.VIEW;
                    break;
                }
                case BasicSqlParser.RULE_viewNameCreate: {
                    syntaxContextType = EntityContextType.VIEW_CREATE;
                    break;
                }
                case BasicSqlParser.RULE_functionName: {
                    syntaxContextType = EntityContextType.FUNCTION;
                    break;
                }
                case BasicSqlParser.RULE_functionNameCreate: {
                    syntaxContextType = EntityContextType.FUNCTION_CREATE;
                    break;
                }
                case BasicSqlParser.RULE_columnName: {
                    syntaxContextType = EntityContextType.COLUMN;
                    break;
                }
                case BasicSqlParser.RULE_columnNameCreate: {
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
