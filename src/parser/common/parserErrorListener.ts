import { Token, Recognizer, ParserErrorListener, RecognitionException } from 'antlr4ts';
export interface ParserError {
    startLine: number;
    endLine: number;
    startCol: number;
    endCol: number;
    message: string;
}

export interface SyntaxError<T> {
    recognizer: Recognizer<T, any>;
    offendingSymbol: Token;
    line: number;
    charPositionInLine: number;
    msg: string;
    e: any;
}

type ErrorOffendingSymbol = {
    text: string;
};

export type ErrorHandler<T> = (err: ParserError, errOption: SyntaxError<T>) => void;

export class ParserErrorCollector implements ParserErrorListener {
    private _errors: ParserError[];

    constructor(error: ParserError[]) {
        this._errors = error;
    }

    syntaxError(
        recognizer: Recognizer<ErrorOffendingSymbol, any>, offendingSymbol: ErrorOffendingSymbol, line: number,
        charPositionInLine: number, msg: string, e: RecognitionException,
    ) {
        let endCol = charPositionInLine + 1;
        if (offendingSymbol && offendingSymbol.text !== null) {
            endCol = charPositionInLine + offendingSymbol.text.length;
        }
        this._errors.push({
            startLine: line,
            endLine: line,
            startCol: charPositionInLine,
            endCol: endCol,
            message: msg,
        });
    }
}


export default class CustomParserErrorListener implements ParserErrorListener  {
    private _errorHandler;

    constructor(errorListener: ErrorHandler<ErrorOffendingSymbol>) {
        this._errorHandler = errorListener;
    }

    syntaxError(
        recognizer: Recognizer<ErrorOffendingSymbol, any>, offendingSymbol: ErrorOffendingSymbol, line: number,
        charPositionInLine: number, msg: string, e: any,
    ) {
        let endCol = charPositionInLine + 1;
        if (offendingSymbol && offendingSymbol.text !== null) {
            endCol = charPositionInLine + offendingSymbol.text.length;
        }
        if (this._errorHandler) {
            this._errorHandler({
                startLine: line,
                endLine: line,
                startCol: charPositionInLine,
                endCol: endCol,
                message: msg,
            }, {
                e,
                line,
                msg,
                recognizer,
                offendingSymbol,
                charPositionInLine,
            });
        }
    }
}

