import { Token, Lexer } from 'antlr4';

import ParserErrorListener, { ParserError } from './parserErrorListener';

/**
 * Custom Parser class, subclass needs extends it.
 */
export default abstract class BaseParser {
    /**
     * Create antrl4 Lexer object
     * @param input source string
     */
    public abstract createLexer(input: string): Lexer;

    /**
     * Create Parser by lexer
     * @param lexer Lexer
     */
    public abstract createParserFromLexer(lexer: Lexer);

    public getAllTokens(input: string): Token[] {
        return this.createLexer(input).getAllTokens();
    };

    public createParser(input: string) {
        const lexer = this.createLexer(input);
        return this.createParserFromLexer(lexer);
    }

    public parserTree(input: string) {
        const lexer = this.createLexer(input);
        const parser: any = this.createParserFromLexer(lexer);
        parser.buildParseTrees = true;
        return parser;
    }

    /**
     * It convert tree to string, it's convenient to use in unit test.
     * @param string input
     */
    public parserTreeToString(input: string): string {
        const parser = this.parserTree(input);
        const tree = parser.statement();
        return tree.toStringTree(parser.ruleNames);
    }

    public validate(input: string): ParserError[] {
        const lexerError = []; const syntaxErrors = [];
        const lexer = this.createLexer(input);
        lexer.removeErrorListeners();
        lexer.addErrorListener(new ParserErrorListener(lexerError));

        const parser: any = this.createParserFromLexer(lexer);
        parser.buildParseTrees = true;

        parser.removeErrorListeners();
        parser.addErrorListener(new ParserErrorListener(syntaxErrors));

        parser.statement();

        return lexerError.concat(syntaxErrors);
    }
}
