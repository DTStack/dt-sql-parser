import { Token } from 'antlr4ts';
import { CandidatesCollection } from 'antlr4-c3';
import { SparkSqlLexer } from '../lib/spark/SparkSqlLexer';
import {
    SparkSqlParser,
    ProgramContext,
    SingleStatementContext,
} from '../lib/spark/SparkSqlParser';
import BasicParser from './common/basicParser';
import { Suggestions, SyntaxContextType, SyntaxSuggestion } from './common/basic-parser-types';
import { SparkSqlParserListener } from '../lib/spark/SparkSqlParserListener';

export default class SparkSQL extends BasicParser<SparkSqlLexer, ProgramContext, SparkSqlParser> {
    protected createLexerFromCharStream(charStreams) {
        const lexer = new SparkSqlLexer(charStreams);
        return lexer;
    }

    protected createParserFromTokenStream(tokenStream) {
        const parser = new SparkSqlParser(tokenStream);
        return parser;
    }

    protected preferredRules: Set<number> = new Set([
        SparkSqlParser.RULE_dbSchemaName,
        SparkSqlParser.RULE_dbSchemaNameCreate,
        SparkSqlParser.RULE_tableName,
        SparkSqlParser.RULE_tableNameCreate,
        SparkSqlParser.RULE_viewName,
        SparkSqlParser.RULE_viewNameCreate,
        SparkSqlParser.RULE_functionName,
        SparkSqlParser.RULE_functionNameCreate,
        SparkSqlParser.RULE_columnName,
        SparkSqlParser.RULE_columnNameCreate,
        SparkSqlParser.RULE_materializedViewName,
        SparkSqlParser.RULE_materializedViewNameCreate,
    ]);

    protected get splitListener() {
        return new SparkSqlSplitListener();
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

            let syntaxContextType: SyntaxContextType;
            switch (ruleType) {
                case SparkSqlParser.RULE_dbSchemaName: {
                    syntaxContextType = SyntaxContextType.DATABASE;
                    break;
                }
                case SparkSqlParser.RULE_dbSchemaNameCreate: {
                    syntaxContextType = SyntaxContextType.DATABASE_CREATE;
                    break;
                }
                case SparkSqlParser.RULE_tableName: {
                    syntaxContextType = SyntaxContextType.TABLE;
                    break;
                }
                case SparkSqlParser.RULE_tableNameCreate: {
                    syntaxContextType = SyntaxContextType.TABLE_CREATE;
                    break;
                }
                case SparkSqlParser.RULE_viewName: {
                    syntaxContextType = SyntaxContextType.VIEW;
                    break;
                }
                case SparkSqlParser.RULE_viewNameCreate: {
                    syntaxContextType = SyntaxContextType.VIEW_CREATE;
                    break;
                }
                case SparkSqlParser.RULE_functionName: {
                    syntaxContextType = SyntaxContextType.FUNCTION;
                    break;
                }
                case SparkSqlParser.RULE_functionNameCreate: {
                    syntaxContextType = SyntaxContextType.FUNCTION_CREATE;
                    break;
                }
                case SparkSqlParser.RULE_columnName: {
                    syntaxContextType = SyntaxContextType.COLUMN;
                    break;
                }
                case SparkSqlParser.RULE_columnNameCreate: {
                    syntaxContextType = SyntaxContextType.COLUMN_CREATE;
                    break;
                }
                case SparkSqlParser.RULE_materializedViewName: {
                    syntaxContextType = SyntaxContextType.MATERIALIZED_VIEW;
                    break;
                }
                case SparkSqlParser.RULE_materializedViewNameCreate: {
                    syntaxContextType = SyntaxContextType.MATERIALIZED_VIEW_CREATE;
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

export class SparkSqlSplitListener implements SparkSqlParserListener {
    private _statementsContext: SingleStatementContext[] = [];

    exitSingleStatement = (ctx: SingleStatementContext) => {
        this._statementsContext.push(ctx);
    };

    enterSingleStatement = (ctx: SingleStatementContext) => {};

    get statementsContext() {
        return this._statementsContext;
    }
}
