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
        HiveSqlParser.RULE_tableName, // table name
        HiveSqlParser.RULE_viewName, // view name
        HiveSqlParser.RULE_functionIdentifier, // function name
        HiveSqlParser.RULE_principalIdentifier, // USER/ROLE/GROUP name
        HiveSqlParser.RULE_hintArgName, // hint name
    ]);

    protected get splitListener() {
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
                case HiveSqlParser.RULE_tableName: {
                    syntaxContextType = SyntaxContextType.TABLE;
                    break;
                }
                case HiveSqlParser.RULE_viewName: {
                    syntaxContextType = SyntaxContextType.VIEW;
                    break;
                }
                case HiveSqlParser.RULE_functionIdentifier: {
                    syntaxContextType = SyntaxContextType.FUNCTION;
                    break;
                }
                case HiveSqlParser.RULE_principalIdentifier: {
                    syntaxContextType = SyntaxContextType.PRINCIPAL;
                    break;
                }
                case HiveSqlParser.RULE_hintArgName: {
                    syntaxContextType = SyntaxContextType.HTNTARG;
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
            syntax: [],
            keywords: [],
        };
    }
}

export class HiveSqlSplitListener implements HiveSqlParserListener {
    private _statementContext: ProgramContext[] = [];

    exitSqlStatement = (ctx: ExplainStatementContext | ExecStatementContext) => {
        this._statementContext.push(ctx);
    }

    enterSqlStatements = (ctx: StatementContext) => {
    };
    
    get statementsContext() {
        return this._statementContext;
    }
}

