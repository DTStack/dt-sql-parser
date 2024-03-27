import { CandidatesCollection } from 'antlr4-c3';
import { Token } from 'antlr4ng';

import { PostgreSqlLexer } from '../../lib/postgresql/PostgreSqlLexer';
import { PostgreSqlParser, ProgramContext } from '../../lib/postgresql/PostgreSqlParser';
import { EntityContextType, Suggestions, SyntaxSuggestion } from '../common/types';
import { BasicSQL } from '../common/basicSQL';
import { StmtContextType } from '../common/entityCollector';
import { PostgreSqlEntityCollector } from './postgreEntityCollector';
import { PostgreSqlSplitListener } from './postgreSplitListener';

export { PostgreSqlEntityCollector, PostgreSqlSplitListener };

export class PostgreSQL extends BasicSQL<PostgreSqlLexer, ProgramContext, PostgreSqlParser> {
    protected createLexerFromCharStream(charStreams) {
        return new PostgreSqlLexer(charStreams);
    }

    protected createParserFromTokenStream(tokenStream) {
        return new PostgreSqlParser(tokenStream);
    }

    protected preferredRules: Set<number> = new Set([
        PostgreSqlParser.RULE_table_name_create, // table name
        PostgreSqlParser.RULE_table_name, // table name that will be created
        PostgreSqlParser.RULE_function_name, // function name
        PostgreSqlParser.RULE_function_name_create, // function name that will be created
        PostgreSqlParser.RULE_schema_name_create, // schema name that will be created
        PostgreSqlParser.RULE_schema_name, // schema name
        PostgreSqlParser.RULE_view_name_create, // view name that will be created
        PostgreSqlParser.RULE_view_name, // view name
        PostgreSqlParser.RULE_database_name_create, // database name that will be created
        PostgreSqlParser.RULE_database_name, // database name
        PostgreSqlParser.RULE_procedure_name_create, // procedure name that will be created
        PostgreSqlParser.RULE_procedure_name, // procedure name
        PostgreSqlParser.RULE_column_name_create, // column name that will be created
        PostgreSqlParser.RULE_column_name, // column name
    ]);

    protected get splitListener() {
        return new PostgreSqlSplitListener();
    }

    protected createEntityCollector(input: string, caretTokenIndex?: number) {
        return new PostgreSqlEntityCollector(input, caretTokenIndex);
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
                case PostgreSqlParser.RULE_table_name_create: {
                    syntaxContextType = EntityContextType.TABLE_CREATE;
                    break;
                }
                case PostgreSqlParser.RULE_table_name: {
                    syntaxContextType = EntityContextType.TABLE;
                    break;
                }
                case PostgreSqlParser.RULE_function_name_create: {
                    syntaxContextType = EntityContextType.FUNCTION_CREATE;
                    break;
                }
                case PostgreSqlParser.RULE_function_name: {
                    syntaxContextType = EntityContextType.FUNCTION;
                    break;
                }
                case PostgreSqlParser.RULE_schema_name_create: {
                    syntaxContextType = EntityContextType.DATABASE_CREATE;
                    break;
                }
                case PostgreSqlParser.RULE_schema_name: {
                    syntaxContextType = EntityContextType.DATABASE;
                    break;
                }
                case PostgreSqlParser.RULE_view_name_create: {
                    syntaxContextType = EntityContextType.VIEW_CREATE;
                    break;
                }
                case PostgreSqlParser.RULE_view_name: {
                    syntaxContextType = EntityContextType.VIEW;
                    break;
                }
                case PostgreSqlParser.RULE_database_name_create: {
                    syntaxContextType = EntityContextType.DATABASE_CREATE;
                    break;
                }
                case PostgreSqlParser.RULE_database_name: {
                    syntaxContextType = EntityContextType.DATABASE;
                    break;
                }
                case PostgreSqlParser.RULE_procedure_name_create: {
                    syntaxContextType = EntityContextType.PROCEDURE_CREATE;
                    break;
                }
                case PostgreSqlParser.RULE_procedure_name: {
                    syntaxContextType = EntityContextType.PROCEDURE;
                    break;
                }
                case PostgreSqlParser.RULE_column_name_create: {
                    syntaxContextType = EntityContextType.COLUMN_CREATE;
                    break;
                }
                case PostgreSqlParser.RULE_column_name: {
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
