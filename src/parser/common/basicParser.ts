import { Token, Parser, Lexer, ParseTreeWalker, CommonTokenStream } from 'antlr4';

import ParserErrorListener, {
    ParserError,
    ErrorHandler,
    ParserErrorCollector,
} from './parserErrorListener';

/**
 * Custom Parser class, subclass needs extends it.
 */
export default abstract class BasicParser<P extends Parser, L extends Lexer> {
    private _parser: P;

    public parse(
        input: string,
        errorListener?: ErrorHandler<any>,
    ) {
        const parser = this.createParser(input);
        this._parser = parser;

        parser.removeErrorListeners();
        parser.addErrorListener(new ParserErrorListener(errorListener));

        const parserTree = parser.program();

        return parserTree;
    }

    public validate(input: string): ParserError[] {
        const lexerError = []; const syntaxErrors = [];

        const parser = this.createParser(input);
        this._parser = parser;

        parser.removeErrorListeners();
        parser.addErrorListener(new ParserErrorCollector(syntaxErrors));

        parser.program();

        return lexerError.concat(syntaxErrors);
    }

    /**
     * Create antrl4 Lexer object
     * @param input source string
     */
    public abstract createLexer(input: string): L;

    /**
     * Create Parser by lexer
     * @param lexer Lexer
     */
    public abstract createParserFromLexer(lexer: L);

    /**
     * Get all Tokens of input string
     * @param input string
     * @returns Token[]
     */
    public getAllTokens(input: string): Token[] {
        const lexer = this.createLexer(input);
        const tokensStream = new CommonTokenStream(lexer);
        tokensStream.fill();
        return tokensStream.tokens;
    };

    /**
     * Get Parser instance by input string
     * @param input
     */
    public createParser(input: string): P {
        const lexer = this.createLexer(input);
        const parser: any = this.createParserFromLexer(lexer);
        parser.buildParseTrees = true;
        this._parser = parser;

        return parser;
    }

    /**
     * It convert tree to string, it's convenient to use in unit test.
     * @param string input
     */
    public parserTreeToString(input: string): string {
        const parser = this.createParser(input);
        this._parser = parser;

        const tree = parser.program();
        return tree.toStringTree(parser.ruleNames);
    }

    /**
     * Get List-like style tree string
     * @param parserTree
     */
    public toString(parserTree: any): string {
        return parserTree.toStringTree(this._parser.ruleNames);
    }

    /**
     * @param listener Listener instance extends ParserListener
     * @param parserTree parser Tree
     */
    public listen(listener: any, parserTree: any) {
        ParseTreeWalker.DEFAULT.walk(listener, parserTree);
    }
}
