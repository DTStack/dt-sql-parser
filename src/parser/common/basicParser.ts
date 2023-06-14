import { 
    Parser, 
    Lexer, 
    Token,
    CharStreams, 
    CommonTokenStream, 
    CodePointCharStream,
    ParserRuleContext
} from 'antlr4ts';
import { ParseTreeWalker, ParseTreeListener } from 'antlr4ts/tree';
import { CandidatesCollection, CodeCompletionCore } from 'antlr4-c3';
import { findCaretTokenIndex } from '../../utils/findCaretTokenIndex';
import { 
    CaretPosition,
    Suggestions,
    SyntaxSuggestion,
    WordRange,
    TextSlice
} from './basic-parser-types';
import ParserErrorListener, {
    ParserError,
    ErrorHandler,
    ParserErrorCollector,
} from './parserErrorListener';

interface IParser<IParserRuleContext extends ParserRuleContext> extends Parser {
    // Customized in our parser
    program(): IParserRuleContext;
}

interface SplitListener extends ParseTreeListener {
    statementsContext: ParserRuleContext[];
}

/**
 * Custom Parser class, subclass needs extends it.
 */
export default abstract class BasicParser<
    L extends Lexer = Lexer, 
    PRC extends ParserRuleContext = ParserRuleContext,
    P extends IParser<PRC> = IParser<PRC>
>  {
    protected _charStreams: CodePointCharStream;
    protected _lexer: L;
    protected _tokenStream: CommonTokenStream;
    protected _parser: P;
    protected _parserTree: PRC;
    protected _errorCollector: ParserErrorCollector = new ParserErrorCollector();
    protected _parsedInput: string = null;

    /**
     * PreferredRules for antlr4-c3
     */
    protected abstract preferredRules: Set<number>;
 
    /**
     * Create a antrl4 Lexer instance
     * @param input source string
     */
    protected abstract createLexerFormCharStream(charStreams: CodePointCharStream): L;

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
     * @param tokenIndexOffset offset of the tokenIndex in the candidates 
     * compared to the tokenIndex in allTokens
     */
    protected abstract processCandidates(
        candidates: CandidatesCollection, 
        allTokens: Token[], 
        caretTokenIndex: number,
        tokenIndexOffset: number,
    ): Suggestions<Token>;

    /**
     * Get splitListener instance.
     */
    protected abstract get splitListener (): SplitListener; 

    /**
     * Create an anltr4 lexer from input.
     * @param input string
     */
    public createLexer(input: string) {
        const charStreams = CharStreams.fromString(input.toUpperCase());
        const lexer = this.createLexerFormCharStream(charStreams);
        return lexer;
   
    }

    /**
     * Create an anltr4 parser from input.
     * @param input string
     */
    public createParser(input: string) {
        const lexer = this.createLexer(input);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = this.createParserFromTokenStream(tokenStream);
        return parser;        
    }

    /**
     * Create an anltr4 parser from input.
     * And the instances will be cache.
     * @param input string
     */
    protected createParserWithCache(input: string): P {
        this._parserTree = null;
        this._charStreams = CharStreams.fromString(input.toUpperCase());
        this._lexer = this.createLexerFormCharStream(this._charStreams);

        this._tokenStream = new CommonTokenStream(this._lexer);
        this._tokenStream.fill();
        
        this._parser = this.createParserFromTokenStream(this._tokenStream);
        this._parser.buildParseTree = true;

        return this._parser
    }

    /**
     * If it is invoked multiple times in a row and the input parameters is the same,
     * this method returns the parsing result directly for the first time
     * unless the errorListener parameter is passed.
     * @param input source string
     * @param errorListener listen errors
     * @returns parserTree
     */
    public parse(
        input: string,
        errorListener?: ErrorHandler<any>
    ) {
        // Avoid parsing the same input repeatedly.
        if(this._parsedInput === input && !errorListener) {
            return;
        }

        const parser = this.createParserWithCache(input);
        this._parsedInput = input;

        parser.removeErrorListeners();
        this._errorCollector.clear();

        parser.addErrorListener(this._errorCollector);
        if(errorListener) {
            parser.addErrorListener(new ParserErrorListener(errorListener));
        }

        this._parserTree = parser.program();
        
        return this._parserTree;
    }

    /**
     * Validate input string and return syntax errors if exists.
     * @param input source string
     * @returns syntax errors
     */
    public validate(input: string): ParserError[] {
        this.parse(input);
        const lexerError = [];
        return lexerError.concat(this._errorCollector.parserErrors);
    }

    /**
     * Get all Tokens of input string，'<EOF>' is not included
     * @param input source string
     * @returns Token[]
     */
    public getAllTokens(input: string): Token[] {
        this.parse(input);
        let allTokens = this._tokenStream.getTokens();
        if(allTokens[allTokens.length - 1].text === '<EOF>') {
            allTokens = allTokens.slice(0, -1)
        }
        return allTokens
    };
    /**
     * It convert tree to string, it's convenient to use in unit test.
     * @param string input
     */
    public parserTreeToString(input: string): string {
        this.parse(input);
        return this._parserTree.toStringTree(this._parser.ruleNames);
    }

    /**
     * Get List-like style tree string
     * @param parserTree ProgramRuleContext
     */
    public toString(parserTree: PRC): string {
        return parserTree.toStringTree(this._parser.ruleNames);
    }

    /**
     * @param listener Listener instance extends ParserListener
     * @param parserTree parser Tree
     */
    public listen<PTL extends ParseTreeListener = ParseTreeListener>(listener: PTL, parserTree: PRC) {
        ParseTreeWalker.DEFAULT.walk(listener, parserTree);
    }

    /**
     * Split input into statements.
     * If exist syntax error it will return null.
     * @param input source string
     */
    public splitSQLByStatement(input): TextSlice[] {
        this.parse(input);
        const splitListener = this.splitListener;
        this.listen(splitListener, this._parserTree);
        
        const res = splitListener.statementsContext.map(context => {
            const { start, stop } = context;
            return {
                startIndex: start.startIndex,
                endIndex: stop.stopIndex,
                startLine: start.line,
                endLine: stop.line,
                startColumn: start.charPositionInLine + 1,
                endColumn: stop.charPositionInLine + stop.text.length,
                text: this._parsedInput.slice(start.startIndex, stop.stopIndex + 1),
            }
        })

        return res;
    }

    /**
     * Get suggestions of syntax and token at caretPosition
     * @param input source string
     * @param caretPosition caret position, such as cursor position
     * @returns suggestion
     */
    public getSuggestionAtCaretPosition(input: string, caretPosition: CaretPosition): Suggestions | null {
        const splitListener = this.splitListener;
        // TODO: add splitListener to all sqlParser implements add remove following if
        if(!splitListener) return null;

        this.parse(input);
        let sqlParserIns = this._parser;
        const allTokens = this.getAllTokens(input);
        let caretTokenIndex = findCaretTokenIndex(caretPosition, allTokens);
        let c3Context: ParserRuleContext = this._parserTree;
        let tokenIndexOffset: number = 0;

        if(!caretTokenIndex && caretTokenIndex !== 0) return null;
        
        /**
         * Split sql by statement.
         * Try to collect candidates from the caret statement only.
         */
        this.listen(splitListener, this._parserTree);

        // If there are multiple statements.
        if (splitListener.statementsContext.length > 1) {
            // find statement rule context where caretPosition is located.
            const caretStatementContext = splitListener?.statementsContext.find(ctx => {
                return caretTokenIndex <= ctx.stop?.tokenIndex && caretTokenIndex >= ctx.start.tokenIndex;
            });

            if(caretStatementContext) {
                c3Context = caretStatementContext
            } else {
                const lastStatementToken= splitListener
                    .statementsContext[splitListener?.statementsContext.length - 1]
                    .start;
                /**
                 * If caretStatementContext is not found and it follows all statements.
                 * Reparses part of the input following the penultimate statement.
                 * And c3 will collect candidates in the new parserTreeContext.
                 */
                if (caretTokenIndex > lastStatementToken?.tokenIndex) {
                    /**
                     * Save offset of the tokenIndex in the partInput
                     * compared to the tokenIndex in the whole input 
                     */  
                    tokenIndexOffset = lastStatementToken?.tokenIndex;
                    // Correct caretTokenIndex
                    caretTokenIndex = caretTokenIndex - tokenIndexOffset;

                    const inputSlice = input.slice(lastStatementToken.startIndex);
                    const lexer = this.createLexer(inputSlice);
                    const tokenStream = new CommonTokenStream(lexer);
                    tokenStream.fill();
                    const parser = this.createParserFromTokenStream(tokenStream);
                    parser.buildParseTree = true;
                    sqlParserIns = parser;
                    c3Context = parser.program();
                }
            }
        }

        const core = new CodeCompletionCore(sqlParserIns);
        core.preferredRules = this.preferredRules;

        const candidates = core.collectCandidates(caretTokenIndex, c3Context);
        const originalSuggestions = this.processCandidates(candidates, allTokens, caretTokenIndex, tokenIndexOffset);

        const syntaxSuggestions: SyntaxSuggestion<WordRange>[] = originalSuggestions.syntax
            .map(syntaxCtx => {
                const wordRanges: WordRange[] = syntaxCtx.wordRanges.map(token => {
                    return {
                        text: this._parsedInput.slice(token.startIndex, token.stopIndex + 1),
                        startIndex: token.startIndex,
                        stopIndex: token.stopIndex,
                        line: token.line,
                        startColumn: token.charPositionInLine + 1,
                        stopColumn: token.charPositionInLine + token.text.length
                    }
                })
                return {
                    syntaxContextType: syntaxCtx.syntaxContextType,
                    wordRanges,
                }
            })
        return {
            syntax: syntaxSuggestions,
            keywords: originalSuggestions.keywords
        }
    }
}
