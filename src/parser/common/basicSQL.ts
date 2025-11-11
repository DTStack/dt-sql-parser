import {
    Lexer,
    Token,
    CharStreams,
    CommonTokenStream,
    CharStream,
    ParserRuleContext,
    ParseTreeWalker,
    ParseTreeListener,
    PredictionMode,
    ANTLRErrorListener,
    Parser,
} from 'antlr4ng';
import { CandidatesCollection, CodeCompletionCore } from 'antlr4-c3';
import { SQLParserBase } from '../../lib/SQLParserBase';
import { findCaretTokenIndex } from './findCaretTokenIndex';
import { ctxToText, tokenToWord, WordRange, TextSlice } from './textAndWord';
import {
    CaretPosition,
    LOCALE_TYPE,
    SemanticCollectOptions,
    Suggestions,
    SyntaxSuggestion,
} from './types';
import { ParseError, ErrorListener } from './parseErrorListener';
import { ErrorStrategy } from './errorStrategy';
import type { SplitListener } from './splitListener';
import type { EntityCollector } from './entityCollector';
import { EntityContext } from './entityCollector';
import SemanticContextCollector from './semanticContextCollector';

export const SQL_SPLIT_SYMBOL_TEXT = ';';

/**
 * Basic SQL class, every sql needs extends it.
 */
export abstract class BasicSQL<
    L extends Lexer = Lexer,
    PRC extends ParserRuleContext = ParserRuleContext,
    P extends SQLParserBase<PRC> = SQLParserBase<PRC>,
> {
    /** members for cache start */
    protected _charStreams: CharStream;
    protected _lexer: L;
    protected _tokenStream: CommonTokenStream;
    protected _parser: P;
    protected _parseTree: PRC | null;
    protected _parsedInput: string;
    protected _parseErrors: ParseError[] = [];
    /** members for cache end */

    private _errorListener: ErrorListener = (error) => {
        this._parseErrors.push(error);
    };

    /**
     * PreferredRules for antlr4-c3
     */
    protected abstract preferredRules: Set<number>;

    /**
     * Create a antlr4 Lexer instance.
     * @param input source string
     */
    protected abstract createLexerFromCharStream(charStreams: CharStream): L;

    /**
     * Create Parser by CommonTokenStream
     * @param tokenStream CommonTokenStream
     */
    protected abstract createParserFromTokenStream(tokenStream: CommonTokenStream): P;

    /**
     * Convert candidates to suggestions
     * @param candidates candidate list
     * @param allTokens slice all tokens from input by tokenIndexOffset
     * @param caretTokenIndex tokenIndex of caretPosition
     */
    protected abstract processCandidates(
        candidates: CandidatesCollection,
        allTokens: Token[],
        caretTokenIndex: number
    ): Suggestions<Token>;

    /**
     * Get a new splitListener instance.
     */
    protected abstract get splitListener(): SplitListener<ParserRuleContext>;

    /**
     * Get a new errorListener instance.
     */
    protected abstract createErrorListener(errorListener: ErrorListener): ANTLRErrorListener;

    /**
     * Get a new entityCollector instance.
     */
    protected abstract createEntityCollector(
        input: string,
        allTokens?: Token[],
        caretTokenIndex?: number
    ): EntityCollector;

    public locale: LOCALE_TYPE = 'en_US';

    /**
     * Get a new semanticContextCollector instance.
     */
    protected abstract createSemanticContextCollector(
        input: string,
        caretPosition: CaretPosition,
        allTokens: Token[],
        options?: SemanticCollectOptions
    ): SemanticContextCollector;

    /**
     * Create an antlr4 lexer from input.
     * @param input string
     */
    public createLexer(input: string, errorListener?: ErrorListener) {
        const charStreams = CharStreams.fromString(input);
        const lexer = this.createLexerFromCharStream(charStreams);
        if (errorListener) {
            lexer.removeErrorListeners();
            lexer.addErrorListener(this.createErrorListener(errorListener));
        }
        return lexer;
    }

    /**
     * Create an antlr4 parser from input.
     * @param input string
     */
    public createParser(input: string, errorListener?: ErrorListener) {
        const lexer = this.createLexer(input, errorListener);
        const tokenStream = new CommonTokenStream(lexer);
        tokenStream.fill();
        const parser = this.createParserFromTokenStream(tokenStream);
        parser.interpreter.predictionMode = PredictionMode.SLL;
        if (errorListener) {
            parser.removeErrorListeners();
            parser.addErrorListener(this.createErrorListener(errorListener));
        }

        return parser;
    }

    /**
     * Parse input string and return parseTree.
     * @param input string
     * @param errorListener listen parse errors and lexer errors.
     * @returns parseTree
     */
    public parse(input: string, errorListener?: ErrorListener) {
        const parser = this.createParser(input, errorListener);
        parser.buildParseTrees = true;
        parser.errorHandler = new ErrorStrategy();

        return parser.program();
    }

    /**
     * Create an antlr4 parser from input.
     * And the instances will be cache.
     * @param input string
     */
    private createParserWithCache(input: string): P {
        this._parseTree = null;
        this._charStreams = CharStreams.fromString(input);
        this._lexer = this.createLexerFromCharStream(this._charStreams);

        this._lexer.removeErrorListeners();
        this._lexer.addErrorListener(this.createErrorListener(this._errorListener));

        this._tokenStream = new CommonTokenStream(this._lexer);
        /**
         * All tokens are generated in advance.
         * This can cause performance degradation, but it seems necessary for now.
         * Because the tokens will be used multiple times.
         */
        this._tokenStream.fill();

        this._parser = this.createParserFromTokenStream(this._tokenStream);
        this._parser.interpreter.predictionMode = PredictionMode.SLL;
        this._parser.buildParseTrees = true;
        this._parser.errorHandler = new ErrorStrategy();

        return this._parser;
    }

    /**
     * If it is invoked multiple times in a row and the input parameters is the same,
     * this method returns the parsing result directly for the first time
     * unless the errorListener parameter is passed.
     * @param input source string
     * @param errorListener listen errors
     * @returns parseTree
     */
    private parseWithCache(input: string, errorListener?: ErrorListener): PRC {
        // Avoid parsing the same input repeatedly.
        if (this._parsedInput === input && !errorListener && this._parseTree) {
            return this._parseTree;
        }
        this._parseErrors = [];
        const parser = this.createParserWithCache(input);
        this._parsedInput = input;

        parser.removeErrorListeners();
        parser.addErrorListener(this.createErrorListener(this._errorListener));

        this._parseTree = parser.program();

        return this._parseTree;
    }

    /**
     * Validate input string and return syntax errors if exists.
     * @param input source string
     * @returns syntax errors
     */
    public validate(input: string): ParseError[] {
        this.parseWithCache(input);
        return this._parseErrors;
    }

    /**
     * Get the input string that has been parsed.
     */
    public getParsedInput(): string {
        return this._parsedInput;
    }

    /**
     * Get all Tokens of input string，'<EOF>' is not included.
     * @param input source string
     * @returns Token[]
     */
    public getAllTokens(input: string): Token[] {
        this.parseWithCache(input);
        let allTokens = this._tokenStream.getTokens();
        if (allTokens[allTokens.length - 1].text === '<EOF>') {
            allTokens = allTokens.slice(0, -1);
        }
        return allTokens;
    }

    /**
     * @param listener Listener instance extends ParserListener
     * @param parseTree parser Tree
     */
    public listen<PTL extends ParseTreeListener = ParseTreeListener>(
        listener: PTL,
        parseTree: ParserRuleContext
    ) {
        ParseTreeWalker.DEFAULT.walk(listener, parseTree);
    }

    /**
     * Split input into statements.
     * If exist syntax error it will return null.
     * @param input source string
     */
    public splitSQLByStatement(input: string): TextSlice[] | null {
        const errors = this.validate(input);
        if (errors.length || !this._parseTree) {
            return null;
        }
        const splitListener = this.splitListener;
        this.listen(splitListener, this._parseTree);

        const res = splitListener.statementsContext
            .map((context) => {
                return ctxToText(context, this._parsedInput);
            })
            .filter(Boolean) as TextSlice[];

        return res;
    }

    /**
     * Get the smaller range of input
     * @param input string
     * @param allTokens all tokens from input
     * @param tokenIndexOffset offset of the tokenIndex in the range of input
     * @param caretTokenIndex tokenIndex of caretPosition
     * @returns inputSlice: string, caretTokenIndex: number
     */
    private splitInputBySymbolText(
        input: string,
        allTokens: Token[],
        tokenIndexOffset: number,
        caretTokenIndex: number
    ): { inputSlice: string; allTokens: Token[]; caretTokenIndex: number } {
        const tokens = allTokens.slice(tokenIndexOffset);
        /**
         * Set startToken
         */
        let startToken: Token | null = null;
        for (let tokenIndex = caretTokenIndex - tokenIndexOffset; tokenIndex >= 0; tokenIndex--) {
            const token = tokens[tokenIndex];
            if (token?.text === SQL_SPLIT_SYMBOL_TEXT) {
                startToken = tokens[tokenIndex + 1];
                break;
            }
        }
        if (startToken === null) {
            startToken = tokens[0];
        }

        /**
         * Set stopToken
         */
        let stopToken: Token | null = null;
        for (
            let tokenIndex = caretTokenIndex - tokenIndexOffset;
            tokenIndex < tokens.length;
            tokenIndex++
        ) {
            const token = tokens[tokenIndex];
            if (token?.text === SQL_SPLIT_SYMBOL_TEXT) {
                stopToken = token;
                break;
            }
        }
        if (stopToken === null) {
            stopToken = tokens[tokens.length - 1];
        }

        const indexOffset = tokens[0].start;
        let startIndex = startToken.start - indexOffset;
        let stopIndex = stopToken.stop + 1 - indexOffset;

        /**
         * Save offset of the tokenIndex in the range of input
         * compared to the tokenIndex in the whole input
         */
        const _tokenIndexOffset = startToken.tokenIndex;
        const _caretTokenIndex = caretTokenIndex - _tokenIndexOffset;

        /**
         * Get the smaller range of _input
         */
        const _input = input.slice(startIndex, stopIndex);

        return {
            inputSlice: _input,
            allTokens: allTokens.slice(_tokenIndexOffset),
            caretTokenIndex: _caretTokenIndex,
        };
    }

    /**
     * Get the minimum input string that can be parsed successfully by c3.
     * @param input source string
     * @param caretTokenIndex tokenIndex of caretPosition
     * @param originParseTree origin parseTree
     * @returns MinimumInputInfo
     */
    public getMinimumInputInfo(
        input: string,
        caretTokenIndex: number,
        originParseTree: ParserRuleContext | undefined
    ): { input: string; tokenIndexOffset: number; statementCount: number } | null {
        if (!originParseTree || !input?.length) return null;
        let inputSlice = input;

        /**
         * Split sql by statement.
         * Try to collect candidates in as small a range as possible.
         */
        const splitListener = this.splitListener;
        this.listen(splitListener, originParseTree);

        const statementCount = splitListener.statementsContext?.length;
        const statementsContext = splitListener.statementsContext;
        let tokenIndexOffset = 0;

        // If there are multiple statements.
        if (statementCount > 1) {
            /**
             * Find a minimum valid range, reparse the fragment, and provide a new parse tree to C3.
             * The boundaries of this range must be statements with no syntax errors.
             * This can ensure the stable performance of the C3.
             */
            let startStatement: ParserRuleContext | null = null;
            let stopStatement: ParserRuleContext | null = null;

            for (let index = 0; index < statementCount; index++) {
                const ctx = statementsContext[index];
                const isCurrentCtxValid = !ctx.exception;
                if (!isCurrentCtxValid) continue;

                /**
                 * Ensure that the statementContext before the left boundary
                 * and the last statementContext on the right boundary are qualified SQL statements.
                 */
                const isPrevCtxValid = index === 0 || !statementsContext[index - 1]?.exception;
                const isNextCtxValid =
                    index === statementCount - 1 || !statementsContext[index + 1]?.exception;

                if (ctx.stop && ctx.stop.tokenIndex < caretTokenIndex && isPrevCtxValid) {
                    startStatement = ctx;
                }

                if (
                    ctx.start &&
                    !stopStatement &&
                    ctx.start.tokenIndex > caretTokenIndex &&
                    isNextCtxValid
                ) {
                    stopStatement = ctx;
                    break;
                }
            }

            // A boundary consisting of the index of the input.
            const startIndex = startStatement?.start?.start ?? 0;
            const stopIndex = stopStatement?.stop?.stop ?? inputSlice.length - 1;

            /**
             * Save offset of the tokenIndex in the range of input
             * compared to the tokenIndex in the whole input
             */
            tokenIndexOffset = startStatement?.start?.tokenIndex ?? 0;
            inputSlice = inputSlice.slice(startIndex, stopIndex);
        }

        return {
            input: inputSlice,
            tokenIndexOffset,
            statementCount,
        };
    }

    /**
     * Get a minimum boundary parser near caretTokenIndex.
     * @param input source string.
     * @param caretTokenIndex start from which index to minimize the boundary.
     * @param originParseTree the parse tree need to be minimized, default value is the result of parsing `input`.
     * @returns minimum parser info
     */
    public getMinimumParserInfo(
        input: string,
        caretTokenIndex: number,
        originParseTree: ParserRuleContext | undefined
    ): {
        parser: Parser;
        parseTree: ParserRuleContext;
        tokenIndexOffset: number;
        newTokenIndex: number;
    } | null {
        if (!originParseTree || !input?.length) return null;

        const inputInfo = this.getMinimumInputInfo(input, caretTokenIndex, originParseTree);
        if (!inputInfo) return null;
        const { input: inputSlice, tokenIndexOffset } = inputInfo;
        caretTokenIndex = caretTokenIndex - tokenIndexOffset;

        let sqlParserIns = this._parser;
        let parseTree = originParseTree;

        /**
         * Reparse the input fragment,
         * and c3 will collect candidates in the newly generated parseTree when input changed.
         */
        if (inputSlice !== input) {
            sqlParserIns = this.createParser(inputSlice);
            parseTree = sqlParserIns.program();
        }

        return {
            parser: sqlParserIns,
            parseTree,
            tokenIndexOffset,
            newTokenIndex: caretTokenIndex,
        };
    }

    /**
     * Get suggestions of syntax and token at caretPosition
     * @param input source string
     * @param caretPosition caret position, such as cursor position
     * @returns suggestion
     */
    public getSuggestionAtCaretPosition(
        input: string,
        caretPosition: CaretPosition
    ): Suggestions | null {
        this.parseWithCache(input);
        if (!this._parseTree) return null;

        let allTokens = this.getAllTokens(input);
        let caretTokenIndex = findCaretTokenIndex(caretPosition, allTokens);
        if (!caretTokenIndex && caretTokenIndex !== 0) return null;

        const inputInfo = this.getMinimumInputInfo(input, caretTokenIndex, this._parseTree);
        if (!inputInfo) return null;
        const { input: _input, tokenIndexOffset, statementCount } = inputInfo;
        let inputSlice = _input;

        /**
         * Split the inputSlice by separator to get the smaller range of inputSlice.
         */
        if (inputSlice.includes(SQL_SPLIT_SYMBOL_TEXT)) {
            const {
                inputSlice: _inputSlice,
                allTokens: _allTokens,
                caretTokenIndex: _caretTokenIndex,
            } = this.splitInputBySymbolText(
                inputSlice,
                allTokens,
                tokenIndexOffset,
                caretTokenIndex
            );

            allTokens = _allTokens;
            caretTokenIndex = _caretTokenIndex;
            inputSlice = _inputSlice;
        } else {
            if (statementCount > 1) {
                caretTokenIndex = caretTokenIndex - tokenIndexOffset;
            }
        }

        let sqlParserIns = this._parser;
        let parseTree = this._parseTree;

        /**
         * Reparse the input fragment,
         * and c3 will collect candidates in the newly generated parseTree when input changed.
         */
        if (inputSlice !== input) {
            sqlParserIns = this.createParser(inputSlice);
            parseTree = sqlParserIns.program();
        }

        const core = new CodeCompletionCore(sqlParserIns);
        core.preferredRules = this.preferredRules;

        const candidates = core.collectCandidates(caretTokenIndex, parseTree);
        const originalSuggestions = this.processCandidates(candidates, allTokens, caretTokenIndex);

        const syntaxSuggestions: SyntaxSuggestion<WordRange>[] = originalSuggestions.syntax.map(
            (syntaxCtx) => {
                const wordRanges: WordRange[] = syntaxCtx.wordRanges.map((token) => {
                    return tokenToWord(token, this._parsedInput);
                });
                return {
                    syntaxContextType: syntaxCtx.syntaxContextType,
                    wordRanges,
                };
            }
        );
        return {
            syntax: syntaxSuggestions,
            keywords: originalSuggestions.keywords,
        };
    }

    public getAllEntities(input: string, caretPosition?: CaretPosition): EntityContext[] | null {
        /**
         * Create a new parser to generate brand new parse tree.
         * And the new parse tree should not effect cached parse tree which is used by validate and getSuggestionAtCaretPosition method.
         */
        const parser = this.createParser(input);
        const allTokens = (parser.tokenStream as CommonTokenStream).getTokens();

        const caretTokenIndex = caretPosition
            ? findCaretTokenIndex(caretPosition, allTokens)
            : void 0;
        const collectListener = this.createEntityCollector(input, allTokens, caretTokenIndex);

        parser.entityCollecting = true;
        if (caretPosition && caretTokenIndex !== undefined) {
            parser.caretTokenIndex = caretTokenIndex;
        }

        const parseTree = parser.program();
        this.listen(collectListener, parseTree);

        parser.caretTokenIndex = -1;
        parser.entityCollecting = false;

        return collectListener.getEntities();
    }

    /**
     * Get semantic context infos
     * @param input source string
     * @param caretPosition caret position, such as cursor position
     * @param options semantic context options
     * @returns analyzed semantic context
     */
    public getSemanticContextAtCaretPosition(
        input: string,
        caretPosition: CaretPosition,
        options?: SemanticCollectOptions
    ) {
        const allTokens = this.getAllTokens(input);
        const parseTree = this.parseWithCache(input);
        const statementContextListener = this.createSemanticContextCollector(
            input,
            caretPosition,
            allTokens,
            options
        );
        this.listen(statementContextListener, parseTree);

        return statementContextListener.semanticContext;
    }
}
