import { Token, Recognizer, ErrorListener, RecognitionException } from 'antlr4';
export interface ParserError {
    startLine: number;
    endLine: number;
    startCol: number;
    endCol: number;
    message: string;
}

export interface SyntaxError<T> {
    recognizer: Recognizer<T>;
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

export class ParserErrorCollector extends ErrorListener<ErrorOffendingSymbol> {
    private _errors: ParserError[];

    constructor(error: ParserError[]) {
        super();
        this._errors = error;
    }

    syntaxError(
        recognizer: Recognizer<ErrorOffendingSymbol>, offendingSymbol: ErrorOffendingSymbol, line: number,
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


export default class ParserErrorListener extends ErrorListener<ErrorOffendingSymbol> {
    private _errorHandler;

    constructor(errorListener: ErrorHandler<ErrorOffendingSymbol>) {
        super();
        this._errorHandler = errorListener;
    }

    syntaxError(
        recognizer: Recognizer<ErrorOffendingSymbol>, offendingSymbol: ErrorOffendingSymbol, line: number,
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

