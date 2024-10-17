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
} from 'antlr4ng';
import { CandidatesCollection, CodeCompletionCore } from 'antlr4-c3';
import { SQLParserBase } from '../../lib/SQLParserBase';
import { findCaretTokenIndex } from './findCaretTokenIndex';
import { ctxToText, tokenToWord, WordRange, TextSlice } from './textAndWord';
import { CaretPosition, LOCALE_TYPE, Suggestions, SyntaxSuggestion } from './types';
import { ParseError, ErrorListener } from './parseErrorListener';
import { ErrorStrategy } from './errorStrategy';
import type { SplitListener } from './splitListener';
import type { EntityCollector } from './entityCollector';
import { EntityContext } from './entityCollector';

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
     * @param allTokens all tokens from input
     * @param caretTokenIndex tokenIndex of caretPosition
     * @param tokenIndexOffset offset of the tokenIndex in the candidates compared to the tokenIndex in allTokens
     */
    protected abstract processCandidates(
        candidates: CandidatesCollection,
        allTokens: Token[],
        caretTokenIndex: number,
        tokenIndexOffset: number
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
        caretTokenIndex?: number
    ): EntityCollector;

    public locale: LOCALE_TYPE = 'en_US';

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
     * Get suggestions of syntax and token at caretPosition
     * @param input source string
     * @param caretPosition caret position, such as cursor position
     * @returns suggestion
     */
    public getSuggestionAtCaretPosition(
        input: string,
        caretPosition: CaretPosition
    ): Suggestions | null {
        const splitListener = this.splitListener;

        this.parseWithCache(input);
        if (!this._parseTree) return null;

        let sqlParserIns = this._parser;
        const allTokens = this.getAllTokens(input);
        let caretTokenIndex = findCaretTokenIndex(caretPosition, allTokens);
        let c3Context: ParserRuleContext = this._parseTree;
        let tokenIndexOffset: number = 0;

        if (!caretTokenIndex && caretTokenIndex !== 0) return null;

        /**
         * Split sql by statement.
         * Try to collect candidates in as small a range as possible.
         */
        this.listen(splitListener, this._parseTree);
        const statementCount = splitListener.statementsContext?.length;
        const statementsContext = splitListener.statementsContext;

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
            const stopIndex = stopStatement?.stop?.stop ?? input.length - 1;

            /**
             * Save offset of the tokenIndex in the range of input
             * compared to the tokenIndex in the whole input
             */
            tokenIndexOffset = startStatement?.start?.tokenIndex ?? 0;
            caretTokenIndex = caretTokenIndex - tokenIndexOffset;

            /**
             * Reparse the input fragment，
             * and c3 will collect candidates in the newly generated parseTree.
             */
            const inputSlice = input.slice(startIndex, stopIndex);

            const lexer = this.createLexer(inputSlice);
            lexer.removeErrorListeners();
            const tokenStream = new CommonTokenStream(lexer);
            tokenStream.fill();

            const parser = this.createParserFromTokenStream(tokenStream);
            parser.interpreter.predictionMode = PredictionMode.SLL;
            parser.removeErrorListeners();
            parser.buildParseTrees = true;
            parser.errorHandler = new ErrorStrategy();

            sqlParserIns = parser;
            c3Context = parser.program();
        }

        const core = new CodeCompletionCore(sqlParserIns);
        core.preferredRules = this.preferredRules;

        const candidates = core.collectCandidates(caretTokenIndex, c3Context);
        const originalSuggestions = this.processCandidates(
            candidates,
            allTokens,
            caretTokenIndex,
            tokenIndexOffset
        );

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
        const allTokens = this.getAllTokens(input);
        const caretTokenIndex = caretPosition
            ? findCaretTokenIndex(caretPosition, allTokens)
            : void 0;

        const collectListener = this.createEntityCollector(input, caretTokenIndex);
        // const parser = this.createParserWithCache(input);

        // parser.entityCollecting = true;
        // if(caretPosition) {
        //     const allTokens = this.getAllTokens(input);
        //     const tokenIndex = findCaretTokenIndex(caretPosition, allTokens);
        //     parser.caretTokenIndex = tokenIndex;
        // }

        // const parseTree = parser.program();

        const parseTree = this.parseWithCache(input);

        this.listen(collectListener, parseTree);

        // parser.caretTokenIndex = -1;
        // parser.entityCollecting = false;

        return collectListener.getEntities();
    }
}
