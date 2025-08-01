import { CandidatesCollection } from 'antlr4-c3';
import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { processTokenCandidates } from '../common/tokenUtils';
import { MySqlLexer } from '../../lib/mysql/MySqlLexer';
import { MySqlParser, ProgramContext } from '../../lib/mysql/MySqlParser';
import { BasicSQL } from '../common/basicSQL';
import {
    Suggestions,
    EntityContextType,
    SyntaxSuggestion,
    CaretPosition,
    SemanticCollectOptions,
} from '../common/types';
import { StmtContextType } from '../common/entityCollector';
import { ErrorListener } from '../common/parseErrorListener';
import { MySqlEntityCollector } from './mysqlEntityCollector';
import { MysqlErrorListener } from './mysqlErrorListener';
import { MysqlSplitListener } from './mysqlSplitListener';
import { MySqlSemanticContextCollector } from '../mysql/mysqlSemanticContextCollector';

export { MySqlEntityCollector, MysqlSplitListener };

export class MySQL extends BasicSQL<MySqlLexer, ProgramContext, MySqlParser> {
    protected createLexerFromCharStream(charStreams: CharStream): MySqlLexer {
        return new MySqlLexer(charStreams);
    }

    protected createParserFromTokenStream(tokenStream: CommonTokenStream): MySqlParser {
        return new MySqlParser(tokenStream);
    }

    protected preferredRules: Set<number> = new Set([
        MySqlParser.RULE_databaseName,
        MySqlParser.RULE_databaseNameCreate,
        MySqlParser.RULE_tableName,
        MySqlParser.RULE_tableNameCreate,
        MySqlParser.RULE_viewName,
        MySqlParser.RULE_viewNameCreate,
        MySqlParser.RULE_functionName,
        MySqlParser.RULE_functionNameCreate,
        MySqlParser.RULE_columnName,
        MySqlParser.RULE_columnNameCreate,
    ]);

    protected get splitListener() {
        return new MysqlSplitListener();
    }

    protected createErrorListener(_errorListener: ErrorListener): MysqlErrorListener {
        const parserContext = this;
        return new MysqlErrorListener(_errorListener, parserContext, this.preferredRules);
    }
    protected createEntityCollector(input: string, allTokens?: Token[], caretTokenIndex?: number) {
        return new MySqlEntityCollector(input, allTokens, caretTokenIndex);
    }

    protected createSemanticContextCollector(
        input: string,
        caretPosition: CaretPosition,
        allTokens: Token[],
        options?: SemanticCollectOptions
    ) {
        return new MySqlSemanticContextCollector(input, caretPosition, allTokens, options);
    }

    protected processCandidates(
        candidates: CandidatesCollection,
        allTokens: Token[],
        caretTokenIndex: number
    ): Suggestions<Token> {
        const originalSyntaxSuggestions: SyntaxSuggestion<Token>[] = [];
        const keywords: string[] = [];

        for (const candidate of candidates.rules) {
            const [ruleType, candidateRule] = candidate;
            const tokenRanges = allTokens.slice(candidateRule.startTokenIndex, caretTokenIndex + 1);

            let syntaxContextType: EntityContextType | StmtContextType | undefined = void 0;
            switch (ruleType) {
                case MySqlParser.RULE_databaseName: {
                    syntaxContextType = EntityContextType.DATABASE;
                    break;
                }
                case MySqlParser.RULE_databaseNameCreate: {
                    syntaxContextType = EntityContextType.DATABASE_CREATE;
                    break;
                }
                case MySqlParser.RULE_tableName: {
                    syntaxContextType = EntityContextType.TABLE;
                    break;
                }
                case MySqlParser.RULE_tableNameCreate: {
                    syntaxContextType = EntityContextType.TABLE_CREATE;
                    break;
                }
                case MySqlParser.RULE_viewName: {
                    syntaxContextType = EntityContextType.VIEW;
                    break;
                }
                case MySqlParser.RULE_viewNameCreate: {
                    syntaxContextType = EntityContextType.VIEW_CREATE;
                    break;
                }
                case MySqlParser.RULE_functionName: {
                    syntaxContextType = EntityContextType.FUNCTION;
                    break;
                }
                case MySqlParser.RULE_functionNameCreate: {
                    syntaxContextType = EntityContextType.FUNCTION_CREATE;
                    break;
                }
                case MySqlParser.RULE_columnName: {
                    syntaxContextType = EntityContextType.COLUMN;
                    break;
                }
                case MySqlParser.RULE_columnNameCreate: {
                    syntaxContextType = EntityContextType.COLUMN_CREATE;
                    break;
                }
                default:
                    break;
            }

            if (
                syntaxContextType &&
                !originalSyntaxSuggestions.some(
                    (syn) =>
                        syn.syntaxContextType === syntaxContextType &&
                        syn.wordRanges.map((wordRange: Token) => wordRange.text)?.join(',') ===
                            tokenRanges.map((tokenRange: Token) => tokenRange.text)?.join(',')
                )
            ) {
                originalSyntaxSuggestions.push({
                    syntaxContextType,
                    wordRanges: tokenRanges,
                });
            }
        }

        const processedKeywords = processTokenCandidates(this._parser, candidates.tokens);
        keywords.push(...processedKeywords);

        return {
            syntax: originalSyntaxSuggestions,
            keywords,
        };
    }
}
