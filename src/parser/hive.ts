import { Token } from 'antlr4ts';
import { CandidatesCollection } from 'antlr4-c3';
import { HiveSqlLexer } from '../lib/hive/HiveSqlLexer';
import { HiveSqlParser, ProgramContext, StatementContext, ExplainStatementContext, ExecStatementContext } from '../lib/hive/HiveSqlParser';
import BasicParser from './common/basicParser';
import { HiveSqlParserListener } from '../lib/hive/HiveSqlParserListener';
import { SyntaxContextType, Suggestions, SyntaxSuggestion } from './common/basic-parser-types';


export default class HiveSQL extends BasicParser<HiveSqlLexer, ProgramContext, HiveSqlParser> {
    protected createLexerFormCharStream(charStreams) {
        const lexer = new HiveSqlLexer(charStreams);
        return lexer;
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

    ]);

    protected get splitListener () {
        return new HiveSqlSplitListener();
    }

    protected processCandidates(
        candidates: CandidatesCollection,
        allTokens: Token[],
        caretTokenIndex: number,
        tokenIndexOffset: number,
    ): Suggestions<Token> {
        const originalSyntaxSuggestions: SyntaxSuggestion<Token>[] = [];
        const keywords: string[] = [];
        for (let candidate of candidates.rules) {
            const [ruleType, candidateRule] = candidate;
            const startTokenIndex = candidateRule.startTokenIndex + tokenIndexOffset;
            const tokenRanges = allTokens.slice(startTokenIndex, caretTokenIndex + tokenIndexOffset + 1);

            let syntaxContextType: SyntaxContextType;
            switch (ruleType) {
                case HiveSqlParser.RULE_dbSchemaName: {
                    syntaxContextType = SyntaxContextType.DATABASE;
                    break;
                }
                case HiveSqlParser.RULE_dbSchemaNameCreate: {
                    syntaxContextType = SyntaxContextType.DATABASE_CREATE;
                    break;
                }
                case HiveSqlParser.RULE_tableName: {
                    syntaxContextType = SyntaxContextType.TABLE;
                    break;
                }
                case HiveSqlParser.RULE_tableNameCreate: {
                    syntaxContextType = SyntaxContextType.TABLE_CREATE
                    break;
                }
                case HiveSqlParser.RULE_viewName: {
                    syntaxContextType = SyntaxContextType.VIEW;
                    break;
                }
                case HiveSqlParser.RULE_viewNameCreate: {
                    syntaxContextType = SyntaxContextType.VIEW_CREATE;
                    break;
                }
                case HiveSqlParser.RULE_functionNameForDDL: 
                case HiveSqlParser.RULE_functionNameForInvoke: {
                    syntaxContextType = SyntaxContextType.FUNCTION;
                    break;
                }
                case HiveSqlParser.RULE_functionNameCreate: {
                    syntaxContextType = SyntaxContextType.FUNCTION_CREATE;
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
                const keyword = displayName.startsWith("'") && displayName.endsWith("'") ? displayName.slice(1, -1) : displayName;
                keywords.push(keyword);
            }
        }
        return {
            syntax: originalSyntaxSuggestions,
            keywords,
        };
    }
}

export class HiveSqlSplitListener implements HiveSqlParserListener {
    private _statementContext: StatementContext[] = [];
    
    exitStatement = (ctx: StatementContext) => {
        this._statementContext.push(ctx);
    }

    enterStatement = (ctx: StatementContext) => {
    };

    get statementsContext() {
        return this._statementContext;
    }
}

