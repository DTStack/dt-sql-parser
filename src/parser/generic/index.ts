import { CandidatesCollection } from 'antlr4-c3';
import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { processTokenCandidates } from '../common/tokenUtils';
import { GenericSqlLexer } from '../../lib/generic/GenericSqlLexer';
import { GenericSqlParser, ProgramContext } from '../../lib/generic/GenericSqlParser';
import { BasicSQL } from '../common/basicSQL';
import {
    Suggestions,
    EntityContextType,
    SyntaxSuggestion,
    CaretPosition,
    SemanticCollectOptions,
} from '../common/types';
import { StmtContextType } from '../common/entityCollector';
import { ErrorListener, ParseError } from '../common/parseErrorListener';
import { GenericEntityCollector } from './genericEntityCollector';
import { GenericErrorListener } from './genericErrorListener';
import { GenericSplitListener } from './genericSplitListener';
import { GenericSemanticContextCollector } from './genericSemanticContextCollector';

export { GenericEntityCollector, GenericSplitListener };

export interface GenericSQLOptions {
    /** Enable or disable diagnostics (parse error collection). Defaults to true. */
    diagnostics?: boolean;
}

export class GenericSQL extends BasicSQL<GenericSqlLexer, ProgramContext, GenericSqlParser> {
    private _diagnostics: boolean;

    constructor(options?: GenericSQLOptions) {
        super();
        this._diagnostics = options?.diagnostics !== false;
    }
    protected createLexerFromCharStream(charStreams: CharStream): GenericSqlLexer {
        return new GenericSqlLexer(charStreams);
    }

    public override validate(input: string): ParseError[] {
        if (!this._diagnostics) {
            return [];
        }
        return super.validate(input);
    }

    protected createParserFromTokenStream(tokenStream: CommonTokenStream): GenericSqlParser {
        return new GenericSqlParser(tokenStream);
    }

    /**
     * The rules that keywords you don't want to be suggested.
     */
    protected excludeKeywordRules = new Set([GenericSqlParser.RULE_nonReserved]);

    protected preferredRules: Set<number> = new Set([
        GenericSqlParser.RULE_tableName,
        GenericSqlParser.RULE_tableNameCreate,
        GenericSqlParser.RULE_columnRef,
        GenericSqlParser.RULE_columnRefCreate,
        GenericSqlParser.RULE_columnName,
        GenericSqlParser.RULE_functionName,
        ...this.excludeKeywordRules,
    ]);

    protected get splitListener() {
        return new GenericSplitListener();
    }

    protected createErrorListener(_errorListener: ErrorListener): GenericErrorListener {
        const parserContext = this;
        return new GenericErrorListener(_errorListener, parserContext, this.preferredRules);
    }

    protected createEntityCollector(input: string, allTokens?: Token[], caretTokenIndex?: number) {
        return new GenericEntityCollector(input, allTokens, caretTokenIndex);
    }

    protected createSemanticContextCollector(
        input: string,
        caretPosition: CaretPosition,
        allTokens: Token[],
        options?: SemanticCollectOptions
    ) {
        return new GenericSemanticContextCollector(input, caretPosition, allTokens, options);
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
                case GenericSqlParser.RULE_tableName: {
                    syntaxContextType = EntityContextType.TABLE;
                    break;
                }
                case GenericSqlParser.RULE_tableNameCreate: {
                    syntaxContextType = EntityContextType.TABLE_CREATE;
                    break;
                }
                case GenericSqlParser.RULE_columnRef: {
                    syntaxContextType = EntityContextType.COLUMN;
                    break;
                }
                case GenericSqlParser.RULE_columnRefCreate: {
                    syntaxContextType = EntityContextType.COLUMN_CREATE;
                    break;
                }
                case GenericSqlParser.RULE_columnName: {
                    syntaxContextType = EntityContextType.COLUMN;
                    break;
                }
                case GenericSqlParser.RULE_functionName: {
                    syntaxContextType = EntityContextType.FUNCTION;
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
