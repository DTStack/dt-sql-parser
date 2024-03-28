import {
    Token,
    Recognizer,
    ANTLRErrorListener,
    RecognitionException,
    ATNSimulator,
    LexerNoViableAltException,
    Lexer,
    Parser,
    InputMismatchException,
    NoViableAltException,
} from 'antlr4ng';

/**
 * Converted from {@link SyntaxError}.
 */
export interface ParseError {
    /** start at 1 */
    readonly startLine: number;
    /** end at ..n */
    readonly endLine: number;
    /** start at 1 */
    readonly startColumn: number;
    /** end at ..n + 1 */
    readonly endColumn: number;
    readonly message: string;
}

/**
 * The type of error resulting from lexical parsing and parsing.
 */
export interface SyntaxError {
    readonly recognizer: Recognizer<ATNSimulator>;
    readonly offendingSymbol: Token | null;
    readonly line: number;
    readonly charPositionInLine: number;
    readonly msg: string;
    readonly e: RecognitionException;
}

/**
 * ErrorListener will be invoked when it encounters a parsing error.
 * Includes lexical errors and parsing errors.
 */
export type ErrorListener = (parseError: ParseError, originalError: SyntaxError) => void;

export abstract class ParseErrorListener implements ANTLRErrorListener {
    private _errorListener: ErrorListener;

    constructor(errorListener: ErrorListener) {
        this._errorListener = errorListener;
    }

    reportAmbiguity() {}

    reportAttemptingFullContext() {}

    reportContextSensitivity() {}

    protected abstract getExpectedText(parser: Parser, token: Token): string;

    syntaxError(
        recognizer: Recognizer<ATNSimulator>,
        offendingSymbol: Token | null,
        line: number,
        charPositionInLine: number,
        msg: string,
        e: RecognitionException
    ) {
        let message = '';
        // If not undefined then offendingSymbol is of type Token.
        if (offendingSymbol) {
            let token = offendingSymbol as Token;
            const parser = recognizer as Parser;

            // judge token is EOF
            const isEof = token.type === Token.EOF;
            if (isEof) {
                token = parser.tokenStream.get(token.tokenIndex - 1);
            }
            const wrongText = token.text ?? '';

            const isInComplete = isEof && wrongText !== ' ';

            const expectedText = isInComplete ? '' : this.getExpectedText(parser, token);

            if (!e) {
                // handle missing or unwanted tokens.
                message = msg;
                if (msg.includes('extraneous')) {
                    message = `'${wrongText}' is not valid at this position${
                        expectedText.length ? `, expecting ${expectedText}` : ''
                    }`;
                }
            } else {
                // handle mismatch exception or no viable alt exception
                if (e instanceof InputMismatchException || e instanceof NoViableAltException) {
                    if (isEof) {
                        message = `statement is incomplete`;
                    } else {
                        message = `'${wrongText}' is not valid at this position`;
                    }
                    if (expectedText.length > 0) {
                        message += `, expecting ${expectedText}`;
                    }
                } else {
                    message = msg;
                }
            }
        } else {
            // No offending symbol, which indicates this is a lexer error.
            if (e instanceof LexerNoViableAltException) {
                const lexer = recognizer as Lexer;
                const input = lexer.inputStream;
                let text = lexer.getErrorDisplay(
                    input.getText(lexer._tokenStartCharIndex, input.index)
                );
                switch (text[0]) {
                    case '/':
                        message = 'Unfinished multiline comment';
                        break;
                    case '"':
                        message = 'Unfinished double quoted string literal';
                        break;
                    case "'":
                        message = 'Unfinished single quoted string literal';
                        break;
                    case '`':
                        message = 'Unfinished back tick quoted string literal';
                        break;

                    default:
                        message = '"' + text + '" is no valid input at all';
                        break;
                }
            }
        }
        let endCol = charPositionInLine + 1;
        if (offendingSymbol && offendingSymbol.text !== null) {
            endCol = charPositionInLine + offendingSymbol.text.length;
        }
        if (this._errorListener) {
            this._errorListener(
                {
                    startLine: line,
                    endLine: line,
                    startColumn: charPositionInLine + 1,
                    endColumn: endCol + 1,
                    message: message,
                },
                {
                    e,
                    line,
                    msg,
                    recognizer,
                    offendingSymbol,
                    charPositionInLine,
                }
            );
        }
    }
}
