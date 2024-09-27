import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { CandidatesCollection } from 'antlr4-c3';
import { SQLLexer } from '../../lib/sql/SQLLexer';
import { SQLParser, ProgramContext } from '../../lib/sql/SQLParser';
import { BasicSQL } from '../common/basicSQL';
import { Suggestions, EntityContextType, SyntaxSuggestion } from '../common/types';
import { StmtContextType } from '../common/entityCollector';
import { SQLSplitListener } from './SQLSplitListener';
import { SQLEntityCollector } from './SQLEntityCollector';
import { SQLErrorListener } from './SQLErrorListener';
import { ErrorListener } from '../common/parseErrorListener';

export { SQLSplitListener, SQLEntityCollector };

export class SQL extends BasicSQL<SQLLexer, ProgramContext, SQLParser> {
    protected createLexerFromCharStream(charStreams: CharStream) {
        return new SQLLexer(charStreams);
    }

    protected createParserFromTokenStream(tokenStream: CommonTokenStream) {
        return new SQLParser(tokenStream);
    }

    protected preferredRules: Set<number> = new Set([
        SQLParser.RULE_namespaceName,
        SQLParser.RULE_namespaceNameCreate,
        SQLParser.RULE_tableName,
        SQLParser.RULE_tableNameCreate,
        SQLParser.RULE_viewName,
        SQLParser.RULE_viewNameCreate,
        SQLParser.RULE_functionName,
        SQLParser.RULE_functionNameCreate,
        SQLParser.RULE_columnName,
        SQLParser.RULE_columnNameCreate,
    ]);

    protected get splitListener() {
        return new SQLSplitListener();
    }

    protected createErrorListener(_errorListener: ErrorListener) {
        return new SQLErrorListener(_errorListener, this.preferredRules, this.locale);
    }

    protected createEntityCollector(input: string, caretTokenIndex?: number) {
        return new SQLEntityCollector(input, caretTokenIndex);
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
                case SQLParser.RULE_namespaceName: {
                    syntaxContextType = EntityContextType.DATABASE;
                    break;
                }
                case SQLParser.RULE_namespaceNameCreate: {
                    syntaxContextType = EntityContextType.DATABASE_CREATE;
                    break;
                }
                case SQLParser.RULE_tableName: {
                    syntaxContextType = EntityContextType.TABLE;
                    break;
                }
                case SQLParser.RULE_tableNameCreate: {
                    syntaxContextType = EntityContextType.TABLE_CREATE;
                    break;
                }
                case SQLParser.RULE_viewName: {
                    syntaxContextType = EntityContextType.VIEW;
                    break;
                }
                case SQLParser.RULE_viewNameCreate: {
                    syntaxContextType = EntityContextType.VIEW_CREATE;
                    break;
                }
                case SQLParser.RULE_functionName: {
                    syntaxContextType = EntityContextType.FUNCTION;
                    break;
                }
                case SQLParser.RULE_functionNameCreate: {
                    syntaxContextType = EntityContextType.FUNCTION_CREATE;
                    break;
                }
                case SQLParser.RULE_columnName: {
                    syntaxContextType = EntityContextType.COLUMN;
                    break;
                }
                case SQLParser.RULE_columnNameCreate: {
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
