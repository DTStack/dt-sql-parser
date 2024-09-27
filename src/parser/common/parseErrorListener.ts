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
import { LOCALE_TYPE } from './types';
import { transform } from './transform';

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
    private locale: LOCALE_TYPE;

    constructor(errorListener: ErrorListener, locale: LOCALE_TYPE = 'en_US') {
        this.locale = locale;
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
                    message = `'${wrongText}' {noValidPosition}${
                        expectedText.length ? `{expecting}${expectedText}` : ''
                    }`;
                }
                if (msg.includes('missing')) {
                    const regex = /missing\s+'([^']+)'/;
                    const match = msg.match(regex);
                    message = `{missing}`;
                    if (match) {
                        const missKeyword = match[1];
                        message += `'${missKeyword}'`;
                    } else {
                        message += `{keyword}`;
                    }
                    message += `{at}'${wrongText}'`;
                }
            } else {
                // handle mismatch exception or no viable alt exception
                if (e instanceof InputMismatchException || e instanceof NoViableAltException) {
                    if (isEof) {
                        message = `{stmtInComplete}`;
                    } else {
                        message = `'${wrongText}' {noValidPosition}`;
                    }
                    if (expectedText.length > 0) {
                        message += `{expecting}${expectedText}`;
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
                        message = '{unfinishedMultilineComment}';
                        break;
                    case '"':
                        message = '{unfinishedDoubleQuoted}';
                        break;
                    case "'":
                        message = '{unfinishedSingleQuoted}';
                        break;
                    case '`':
                        message = '{unfinishedTickQuoted}';
                        break;

                    default:
                        message = '"' + text + '" {noValidInput}';
                        break;
                }
            }
        }
        message = transform(message, this.locale);
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
                    message,
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
