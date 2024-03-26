import { Token } from 'antlr4ng';
import { CandidatesCollection } from 'antlr4-c3';
import { TrinoSqlLexer } from '../../lib/trino/TrinoSqlLexer';
import { TrinoSqlParser, ProgramContext } from '../../lib/trino/TrinoSqlParser';
import { BasicParser } from '../common/basicParser';
import { Suggestions, EntityContextType, SyntaxSuggestion } from '../common/basic-parser-types';
import { StmtContextType } from '../common/entityCollector';
import { TrinoSqlSplitListener } from './trinoSplitListener';
import { TrinoEntityCollector } from './trinoEntityCollector';

export { TrinoSqlSplitListener, TrinoEntityCollector };

export class TrinoSQL extends BasicParser<TrinoSqlLexer, ProgramContext, TrinoSqlParser> {
    protected createLexerFromCharStream(charStreams) {
        return new TrinoSqlLexer(charStreams);
    }

    protected createParserFromTokenStream(tokenStream) {
        return new TrinoSqlParser(tokenStream);
    }

    protected get splitListener() {
        return new TrinoSqlSplitListener();
    }

    protected createEntityCollector(input: string, caretTokenIndex?: number) {
        return new TrinoEntityCollector(input, caretTokenIndex);
    }

    protected preferredRules: Set<number> = new Set([
        TrinoSqlParser.RULE_catalogName,
        TrinoSqlParser.RULE_catalogNameCreate,
        TrinoSqlParser.RULE_schemaName,
        TrinoSqlParser.RULE_schemaNameCreate,
        TrinoSqlParser.RULE_tableName,
        TrinoSqlParser.RULE_tableNameCreate,
        TrinoSqlParser.RULE_viewName,
        TrinoSqlParser.RULE_viewNameCreate,
        TrinoSqlParser.RULE_functionName,
        TrinoSqlParser.RULE_columnName,
        TrinoSqlParser.RULE_columnNameCreate,
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

            let syntaxContextType: EntityContextType | StmtContextType;
            switch (ruleType) {
                case TrinoSqlParser.RULE_catalogName: {
                    syntaxContextType = EntityContextType.CATALOG;
                    break;
                }
                case TrinoSqlParser.RULE_schemaName: {
                    syntaxContextType = EntityContextType.DATABASE;
                    break;
                }
                case TrinoSqlParser.RULE_schemaNameCreate: {
                    syntaxContextType = EntityContextType.DATABASE_CREATE;
                    break;
                }
                case TrinoSqlParser.RULE_tableName: {
                    syntaxContextType = EntityContextType.TABLE;
                    break;
                }
                case TrinoSqlParser.RULE_tableNameCreate: {
                    syntaxContextType = EntityContextType.TABLE_CREATE;
                    break;
                }
                case TrinoSqlParser.RULE_viewName: {
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
                case TrinoSqlParser.RULE_columnNameCreate: {
                    syntaxContextType = EntityContextType.COLUMN_CREATE;
                    break;
                }
                case TrinoSqlParser.RULE_columnName: {
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
            if (symbolicName && symbolicName.startsWith('KW_')) {
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
