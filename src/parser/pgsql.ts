import { Token } from 'antlr4ts';
import { CandidatesCollection } from 'antlr4-c3';
import { PostgreSQLLexer } from '../lib/pgsql/PostgreSQLLexer';
import { PostgreSQLParser, ProgramContext, StmtContext } from '../lib/pgsql/PostgreSQLParser';
import BasicParser from './common/basicParser';
import { PostgreSQLParserListener } from '../lib/pgsql/PostgreSQLParserListener';
import { SyntaxContextType, Suggestions, SyntaxSuggestion } from './common/basic-parser-types';

export default class PostgresSQL extends BasicParser<
    PostgreSQLLexer,
    ProgramContext,
    PostgreSQLParser
> {
    protected createLexerFormCharStream(charStreams) {
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
        return new PgSqlSplitListener();
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

            let syntaxContextType: SyntaxContextType;
            switch (ruleType) {
                case PostgreSQLParser.RULE_table_name_create: {
                    syntaxContextType = SyntaxContextType.TABLE_CREATE;
                    break;
                }
                case PostgreSQLParser.RULE_table_name: {
                    syntaxContextType = SyntaxContextType.TABLE;
                    break;
                }
                case PostgreSQLParser.RULE_function_name_create: {
                    syntaxContextType = SyntaxContextType.FUNCTION_CREATE;
                    break;
                }
                case PostgreSQLParser.RULE_function_name: {
                    syntaxContextType = SyntaxContextType.FUNCTION;
                    break;
                }
                case PostgreSQLParser.RULE_schema_name_create: {
                    syntaxContextType = SyntaxContextType.DATABASE_CREATE;
                    break;
                }
                case PostgreSQLParser.RULE_schema_name: {
                    syntaxContextType = SyntaxContextType.DATABASE;
                    break;
                }
                case PostgreSQLParser.RULE_view_name_create: {
                    syntaxContextType = SyntaxContextType.VIEW_CREATE;
                    break;
                }
                case PostgreSQLParser.RULE_view_name: {
                    syntaxContextType = SyntaxContextType.VIEW;
                    break;
                }
                case PostgreSQLParser.RULE_database_name_create: {
                    syntaxContextType = SyntaxContextType.DATABASE_CREATE;
                    break;
                }
                case PostgreSQLParser.RULE_database_name: {
                    syntaxContextType = SyntaxContextType.DATABASE;
                    break;
                }
                case PostgreSQLParser.RULE_procedure_name_create: {
                    syntaxContextType = SyntaxContextType.PROCEDURE_CREATE;
                    break;
                }
                case PostgreSQLParser.RULE_procedure_name: {
                    syntaxContextType = SyntaxContextType.PROCEDURE;
                    break;
                }
                case PostgreSQLParser.RULE_column_name_create: {
                    syntaxContextType = SyntaxContextType.COLUMN_CREATE;
                    break;
                }
                case PostgreSQLParser.RULE_column_name: {
                    syntaxContextType = SyntaxContextType.COLUMN;
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

export class PgSqlSplitListener implements PostgreSQLParserListener {
    private _statementContext: ProgramContext[] = [];

    enterProgram = (ctx: ProgramContext) => {
        this._statementContext.push(ctx);
    };

    exitProgram = (ctx: ProgramContext) => {};

    get statementsContext() {
        return this._statementContext;
    }
}
