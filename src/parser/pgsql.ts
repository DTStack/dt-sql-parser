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
        PostgreSQLParser.RULE_createTableName, // table name
        PostgreSQLParser.RULE_tableName, // table name that will be created
        PostgreSQLParser.RULE_funcName, // function name
        PostgreSQLParser.RULE_createFuncName, // function name that will be created
        PostgreSQLParser.RULE_createSchemaName, // schema name that will be created
        PostgreSQLParser.RULE_schemaName, // schema name
        PostgreSQLParser.RULE_createViewName, // view name that will be created
        PostgreSQLParser.RULE_viewName, // view name
        PostgreSQLParser.RULE_createDatabaseName, // database name that will be created
        PostgreSQLParser.RULE_databaseName, // database name
        PostgreSQLParser.RULE_createProcedureName, // procedure name that will be created
        PostgreSQLParser.RULE_procedureName, // procedure name
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
                case PostgreSQLParser.RULE_createTableName: {
                    syntaxContextType = SyntaxContextType.TABLE_CREATE;
                    break;
                }
                case PostgreSQLParser.RULE_tableName: {
                    syntaxContextType = SyntaxContextType.TABLE;
                    break;
                }
                case PostgreSQLParser.RULE_createFuncName: {
                    syntaxContextType = SyntaxContextType.FUNCTION_CREATE;
                    break;
                }
                case PostgreSQLParser.RULE_funcName: {
                    syntaxContextType = SyntaxContextType.FUNCTION;
                    break;
                }
                case PostgreSQLParser.RULE_createSchemaName: {
                    syntaxContextType = SyntaxContextType.DATABASE_CREATE;
                    break;
                }
                case PostgreSQLParser.RULE_schemaName: {
                    syntaxContextType = SyntaxContextType.DATABASE;
                    break;
                }
                case PostgreSQLParser.RULE_createViewName: {
                    syntaxContextType = SyntaxContextType.VIEW_CREATE;
                    break;
                }
                case PostgreSQLParser.RULE_viewName: {
                    syntaxContextType = SyntaxContextType.VIEW;
                    break;
                }
                case PostgreSQLParser.RULE_createDatabaseName: {
                    syntaxContextType = SyntaxContextType.DATABASE_CREATE;
                    break;
                }
                case PostgreSQLParser.RULE_databaseName: {
                    syntaxContextType = SyntaxContextType.DATABASE;
                    break;
                }
                case PostgreSQLParser.RULE_createProcedureName: {
                    syntaxContextType = SyntaxContextType.PROCEDURE_CREATE;
                    break;
                }
                case PostgreSQLParser.RULE_procedureName: {
                    syntaxContextType = SyntaxContextType.PROCEDURE;
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
