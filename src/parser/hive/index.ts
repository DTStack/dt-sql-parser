import { Token } from 'antlr4ng';
import { CandidatesCollection } from 'antlr4-c3';
import { HiveSqlLexer } from '../../lib/hive/HiveSqlLexer';
import { HiveSqlParser, ProgramContext } from '../../lib/hive/HiveSqlParser';
import { BasicSQL } from '../common/basicSQL';

import { EntityContextType, Suggestions, SyntaxSuggestion } from '../common/types';
import { StmtContextType } from '../common/entityCollector';
import { HiveSqlSplitListener } from './hiveSplitListener';
import { HiveEntityCollector } from './hiveEntityCollector';

export { HiveEntityCollector, HiveSqlSplitListener };

export class HiveSQL extends BasicSQL<HiveSqlLexer, ProgramContext, HiveSqlParser> {
    protected createLexerFromCharStream(charStreams) {
        return new HiveSqlLexer(charStreams);
    }

    protected createParserFromTokenStream(tokenStream) {
        return new HiveSqlParser(tokenStream);
    }

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
        HiveSqlParser.RULE_columnNameCreate,
    ]);

    protected get splitListener() {
        return new HiveSqlSplitListener();
    }

    protected createEntityCollector(input: string, caretTokenIndex?: number) {
        return new HiveEntityCollector(input, caretTokenIndex);
    }

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
