import { CandidatesCollection } from 'antlr4-c3';
import { Token } from 'antlr4ng';

import { PostgreSQLLexer } from '../../lib/pgsql/PostgreSQLLexer';
import { PostgreSQLParser, ProgramContext } from '../../lib/pgsql/PostgreSQLParser';
import { EntityContextType, Suggestions, SyntaxSuggestion } from '../common/basic-parser-types';
import BasicParser from '../common/basicParser';
import { StmtContextType } from '../common/entityCollector';
import PostgreSQLEntityCollector from './postgreEntityCollector';
import PostgreSqlSplitListener from './postgreSplitListener';

export { PostgreSQLEntityCollector, PostgreSqlSplitListener };

export default class PostgresSQL extends BasicParser<
    PostgreSQLLexer,
    ProgramContext,
    PostgreSQLParser
> {
    protected createLexerFromCharStream(charStreams) {
        const lexer = new PostgreSQLLexer(charStreams);
        return lexer;
    }

    protected createParserFromTokenStream(tokenStream) {
        return new PostgreSQLParser(tokenStream);
    }

    protected preferredRules: Set<number> = new Set([
        PostgreSQLParser.RULE_table_name_create, // table name
        PostgreSQLParser.RULE_table_name, // table name that will be created
        PostgreSQLParser.RULE_function_name, // function name
        PostgreSQLParser.RULE_function_name_create, // function name that will be created
        PostgreSQLParser.RULE_schema_name_create, // schema name that will be created
        PostgreSQLParser.RULE_schema_name, // schema name
        PostgreSQLParser.RULE_view_name_create, // view name that will be created
        PostgreSQLParser.RULE_view_name, // view name
        PostgreSQLParser.RULE_database_name_create, // database name that will be created
        PostgreSQLParser.RULE_database_name, // database name
        PostgreSQLParser.RULE_procedure_name_create, // procedure name that will be created
        PostgreSQLParser.RULE_procedure_name, // procedure name
        PostgreSQLParser.RULE_column_name_create, // column name that will be created
        PostgreSQLParser.RULE_column_name, // column name
    ]);

    protected get splitListener() {
        return new PostgreSqlSplitListener();
    }

    protected createEntityCollector(input: string, caretTokenIndex?: number) {
        return new PostgreSQLEntityCollector(input, caretTokenIndex);
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
                case PostgreSQLParser.RULE_table_name_create: {
                    syntaxContextType = EntityContextType.TABLE_CREATE;
                    break;
                }
                case PostgreSQLParser.RULE_table_name: {
                    syntaxContextType = EntityContextType.TABLE;
                    break;
                }
                case PostgreSQLParser.RULE_function_name_create: {
                    syntaxContextType = EntityContextType.FUNCTION_CREATE;
                    break;
                }
                case PostgreSQLParser.RULE_function_name: {
                    syntaxContextType = EntityContextType.FUNCTION;
                    break;
                }
                case PostgreSQLParser.RULE_schema_name_create: {
                    syntaxContextType = EntityContextType.DATABASE_CREATE;
                    break;
                }
                case PostgreSQLParser.RULE_schema_name: {
                    syntaxContextType = EntityContextType.DATABASE;
                    break;
                }
                case PostgreSQLParser.RULE_view_name_create: {
                    syntaxContextType = EntityContextType.VIEW_CREATE;
                    break;
                }
                case PostgreSQLParser.RULE_view_name: {
                    syntaxContextType = EntityContextType.VIEW;
                    break;
                }
                case PostgreSQLParser.RULE_database_name_create: {
                    syntaxContextType = EntityContextType.DATABASE_CREATE;
                    break;
                }
                case PostgreSQLParser.RULE_database_name: {
                    syntaxContextType = EntityContextType.DATABASE;
                    break;
                }
                case PostgreSQLParser.RULE_procedure_name_create: {
                    syntaxContextType = EntityContextType.PROCEDURE_CREATE;
                    break;
                }
                case PostgreSQLParser.RULE_procedure_name: {
                    syntaxContextType = EntityContextType.PROCEDURE;
                    break;
                }
                case PostgreSQLParser.RULE_column_name_create: {
                    syntaxContextType = EntityContextType.COLUMN_CREATE;
                    break;
                }
                case PostgreSQLParser.RULE_column_name: {
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
