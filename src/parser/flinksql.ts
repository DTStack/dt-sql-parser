import { Token } from 'antlr4ts';
import { CandidatesCollection } from 'antlr4-c3';
import { FlinkSqlLexer } from '../lib/flinksql/FlinkSqlLexer';
import {
    FlinkSqlParser,
    ProgramContext,
    SingleStatementContext,
} from '../lib/flinksql/FlinkSqlParser';
import { FlinkSqlParserListener } from '../lib/flinksql/FlinkSqlParserListener';
import { EntityContextType, Suggestions, SyntaxSuggestion } from './common/basic-parser-types';
import BasicParser from './common/basicParser';
import { StmtContextType } from './common/entityCollector';

export default class FlinkSQL extends BasicParser<FlinkSqlLexer, ProgramContext, FlinkSqlParser> {
    protected createLexerFromCharStream(charStreams) {
        const lexer = new FlinkSqlLexer(charStreams);
        return lexer;
    }

    protected createParserFromTokenStream(tokenStream) {
        const parser = new FlinkSqlParser(tokenStream);
        return parser;
    }

    protected preferredRules = new Set([
        FlinkSqlParser.RULE_catalogPath, // catalog name
        FlinkSqlParser.RULE_databasePath, // database name
        FlinkSqlParser.RULE_databasePathCreate, // database name that will be created
        FlinkSqlParser.RULE_tablePath, // table name
        FlinkSqlParser.RULE_tablePathCreate, // table name that will be created
        FlinkSqlParser.RULE_viewPath, // view name path
        FlinkSqlParser.RULE_viewPathCreate, // viewName that will be created
        FlinkSqlParser.RULE_functionName, // functionName
        FlinkSqlParser.RULE_functionNameCreate, // functionName that will be created
        FlinkSqlParser.RULE_columnName,
        FlinkSqlParser.RULE_columnNameCreate,
    ]);

    protected get splitListener() {
        return new FlinkSqlSplitListener();
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
                case FlinkSqlParser.RULE_catalogPath: {
                    syntaxContextType = EntityContextType.CATALOG;
                    break;
                }
                case FlinkSqlParser.RULE_databasePath: {
                    syntaxContextType = EntityContextType.DATABASE;
                    break;
                }
                case FlinkSqlParser.RULE_databasePathCreate: {
                    syntaxContextType = EntityContextType.DATABASE_CREATE;
                    break;
                }
                case FlinkSqlParser.RULE_tablePath: {
                    syntaxContextType = EntityContextType.TABLE;
                    break;
                }
                case FlinkSqlParser.RULE_tablePathCreate: {
                    syntaxContextType = EntityContextType.TABLE_CREATE;
                    break;
                }
                case FlinkSqlParser.RULE_viewPath: {
                    syntaxContextType = EntityContextType.VIEW;
                    break;
                }
                case FlinkSqlParser.RULE_viewPathCreate: {
                    syntaxContextType = EntityContextType.VIEW_CREATE;
                    break;
                }
                case FlinkSqlParser.RULE_functionName: {
                    syntaxContextType = EntityContextType.FUNCTION;
                    break;
                }
                case FlinkSqlParser.RULE_functionNameCreate: {
                    syntaxContextType = EntityContextType.FUNCTION_CREATE;
                    break;
                }
                case FlinkSqlParser.RULE_columnName: {
                    syntaxContextType = EntityContextType.COLUMN;
                    break;
                }
                case FlinkSqlParser.RULE_columnNameCreate: {
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

export class FlinkSqlSplitListener implements FlinkSqlParserListener {
    private _statementsContext: SingleStatementContext[] = [];

    exitSingleStatement = (ctx: SingleStatementContext) => {
        this._statementsContext.push(ctx);
    };

    enterSingleStatement = (ctx: SingleStatementContext) => {};

    get statementsContext() {
        return this._statementsContext;
    }
}
