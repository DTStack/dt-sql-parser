import { Token } from 'antlr4ts';
import { CandidatesCollection } from 'antlr4-c3';
import { FlinkSqlLexer } from '../lib/flinksql/FlinkSqlLexer';
import {
    FlinkSqlParser,
    ProgramContext,
    SqlStatementContext,
    SqlStatementsContext
} from '../lib/flinksql/FlinkSqlParser';
import { FlinkSqlParserListener } from 'src/lib/flinksql/FlinkSqlParserListener';
import { SyntaxContextType, Suggestions, SyntaxSuggestion } from './common/basic-parser-types';
import BasicParser from './common/basicParser';

export default class FlinkSQL extends BasicParser<FlinkSqlLexer, ProgramContext, FlinkSqlParser> {
    protected createLexerFormCharStream(charStreams) {
        const lexer = new FlinkSqlLexer(charStreams);
        return lexer;
    }

    protected createParserFromTokenStream(tokenStream) {
        const parser = new FlinkSqlParser(tokenStream);
        return parser;
    }

    protected preferredRules = new Set([
        FlinkSqlParser.RULE_tablePath, // table name >> select / insert ...
        FlinkSqlParser.RULE_tablePathCreate, // table name >> create 
        FlinkSqlParser.RULE_databasePath, // database name >> show
        FlinkSqlParser.RULE_databasePathCreate, // database name >> create 
        FlinkSqlParser.RULE_catalogPath, // catalog name
    ]);

    protected get splitListener () {
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
            const tokenRanges = allTokens.slice(startTokenIndex, caretTokenIndex + tokenIndexOffset + 1);

            let syntaxContextType: SyntaxContextType;
            switch (ruleType) {
                case FlinkSqlParser.RULE_tablePath: {
                    syntaxContextType = SyntaxContextType.TABLE;
                    break;
                }
                case FlinkSqlParser.RULE_tablePathCreate: {
                    syntaxContextType = SyntaxContextType.TABLE_CREATE;
                    break;
                }
                case FlinkSqlParser.RULE_databasePath: {
                    syntaxContextType = SyntaxContextType.DATABASE;
                    break;
                }
                case FlinkSqlParser.RULE_databasePathCreate: {
                    syntaxContextType = SyntaxContextType.DATABASE;
                    break;
                }
                case FlinkSqlParser.RULE_catalogPath: {
                    syntaxContextType = SyntaxContextType.CATALOG;
                    break;
                }
                default:
                    break;
            }

            if (syntaxContextType) {
                originalSyntaxSuggestions.push({
                    syntaxContextType,
                    wordRanges: tokenRanges
                })
            }
        }

        for (let candidate of candidates.tokens) {
            const symbolicName = this._parser.vocabulary.getSymbolicName(candidate[0]);
            const displayName = this._parser.vocabulary.getDisplayName(candidate[0]);
            if(symbolicName && symbolicName.startsWith('KW_')) {
                const keyword = displayName.startsWith("'") && displayName.endsWith("'")
                    ? displayName.slice(1, -1)
                    : displayName
                keywords.push(keyword);
            }
        }
        return {
            syntax: originalSyntaxSuggestions,
            keywords,
        }
    }
}

export class FlinkSqlSplitListener implements FlinkSqlParserListener {
    private _statementsContext: SqlStatementContext[] = [];

    exitSqlStatement = (ctx: SqlStatementContext) => {
        this._statementsContext.push(ctx);
    }

    enterSqlStatements = (ctx: SqlStatementsContext) => {
    };
    
    get statementsContext () {
        return this._statementsContext;
    }
}
