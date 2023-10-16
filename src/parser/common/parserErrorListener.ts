import { Token, Recognizer, ParserErrorListener, RecognitionException } from 'antlr4ts';
import { ATNSimulator } from 'antlr4ts/atn/ATNSimulator';

export interface ParserError {
    startLine: number;
    endLine: number;
    startCol: number;
    endCol: number;
    message: string;
}

export interface SyntaxError<T> {
    recognizer: Recognizer<T, ATNSimulator>;
    offendingSymbol: Token;
    line: number;
    charPositionInLine: number;
    msg: string;
    e: RecognitionException;
}

export type ErrorHandler<T> = (err: ParserError, originalError: SyntaxError<T>) => void;

export default class CustomParserErrorListener implements ParserErrorListener {
    private _errorHandler;

    constructor(errorListener: ErrorHandler<Token>) {
        this._errorHandler = errorListener;
    }

    syntaxError(
        recognizer: Recognizer<Token, ATNSimulator>,
        offendingSymbol,
        line: number,
        charPositionInLine: number,
        msg: string,
        e: RecognitionException
    ) {
        let endCol = charPositionInLine + 1;
        if (offendingSymbol && offendingSymbol.text !== null) {
            endCol = charPositionInLine + offendingSymbol.text.length;
        }
        if (this._errorHandler) {
            this._errorHandler(
                {
                    startLine: line,
                    endLine: line,
                    startCol: charPositionInLine,
                    endCol: endCol,
                    message: msg,
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
