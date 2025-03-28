import { CandidatesCollection } from 'antlr4-c3';
import { CharStream, CommonTokenStream, Token } from 'antlr4ng';

import { PostgreSqlLexer } from '../../lib/postgresql/PostgreSqlLexer';
import { PostgreSqlParser, ProgramContext } from '../../lib/postgresql/PostgreSqlParser';
import { BasicSQL } from '../common/basicSQL';
import { StmtContextType } from '../common/entityCollector';
import { ErrorListener } from '../common/parseErrorListener';
import { EntityContextType, Suggestions, SyntaxSuggestion } from '../common/types';
import { PostgreSqlEntityCollector } from './postgreEntityCollector';
import { PostgreSqlErrorListener } from './postgreErrorListener';
import { PostgreSqlSplitListener } from './postgreSplitListener';

export { PostgreSqlEntityCollector, PostgreSqlSplitListener };

export class PostgreSQL extends BasicSQL<PostgreSqlLexer, ProgramContext, PostgreSqlParser> {
    protected createLexerFromCharStream(charStreams: CharStream) {
        return new PostgreSqlLexer(charStreams);
    }

    protected createParserFromTokenStream(tokenStream: CommonTokenStream) {
        return new PostgreSqlParser(tokenStream);
    }

    protected preferredRules: Set<number> = new Set([
        PostgreSqlParser.RULE_tableNameCreate, // table name
        PostgreSqlParser.RULE_tableName, // table name that will be created
        PostgreSqlParser.RULE_functionName, // function name
        PostgreSqlParser.RULE_functionNameCreate, // function name that will be created
        PostgreSqlParser.RULE_schemaNameCreate, // schema name that will be created
        PostgreSqlParser.RULE_schemaName, // schema name
        PostgreSqlParser.RULE_viewNameCreate, // view name that will be created
        PostgreSqlParser.RULE_viewName, // view name
        PostgreSqlParser.RULE_databaseNameCreate, // database name that will be created
        PostgreSqlParser.RULE_databaseName, // database name
        PostgreSqlParser.RULE_procedureNameCreate, // procedure name that will be created
        PostgreSqlParser.RULE_procedureName, // procedure name
        PostgreSqlParser.RULE_columnNameCreate, // column name that will be created
        PostgreSqlParser.RULE_columnName, // column name
    ]);

    protected get splitListener() {
        return new PostgreSqlSplitListener();
    }

    protected createErrorListener(_errorListener: ErrorListener): PostgreSqlErrorListener {
        const parserContext = this;
        return new PostgreSqlErrorListener(_errorListener, parserContext, this.preferredRules);
    }
    protected createEntityCollector(input: string, allTokens?: Token[], caretTokenIndex?: number) {
        return new PostgreSqlEntityCollector(input, allTokens, caretTokenIndex);
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

            let syntaxContextType: EntityContextType | StmtContextType | undefined = void 0;
            switch (ruleType) {
                case PostgreSqlParser.RULE_tableNameCreate: {
                    syntaxContextType = EntityContextType.TABLE_CREATE;
                    break;
                }
                case PostgreSqlParser.RULE_tableName: {
                    syntaxContextType = EntityContextType.TABLE;
                    break;
                }
                case PostgreSqlParser.RULE_functionNameCreate: {
                    syntaxContextType = EntityContextType.FUNCTION_CREATE;
                    break;
                }
                case PostgreSqlParser.RULE_functionName: {
                    syntaxContextType = EntityContextType.FUNCTION;
                    break;
                }
                case PostgreSqlParser.RULE_schemaNameCreate: {
                    syntaxContextType = EntityContextType.DATABASE_CREATE;
                    break;
                }
                case PostgreSqlParser.RULE_schemaName: {
                    syntaxContextType = EntityContextType.DATABASE;
                    break;
                }
                case PostgreSqlParser.RULE_viewNameCreate: {
                    syntaxContextType = EntityContextType.VIEW_CREATE;
                    break;
                }
                case PostgreSqlParser.RULE_viewName: {
                    syntaxContextType = EntityContextType.VIEW;
                    break;
                }
                case PostgreSqlParser.RULE_databaseNameCreate: {
                    syntaxContextType = EntityContextType.DATABASE_CREATE;
                    break;
                }
                case PostgreSqlParser.RULE_databaseName: {
                    syntaxContextType = EntityContextType.DATABASE;
                    break;
                }
                case PostgreSqlParser.RULE_procedureNameCreate: {
                    syntaxContextType = EntityContextType.PROCEDURE_CREATE;
                    break;
                }
                case PostgreSqlParser.RULE_procedureName: {
                    syntaxContextType = EntityContextType.PROCEDURE;
                    break;
                }
                case PostgreSqlParser.RULE_columnNameCreate: {
                    syntaxContextType = EntityContextType.COLUMN_CREATE;
                    break;
                }
                case PostgreSqlParser.RULE_columnName: {
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
