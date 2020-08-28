import { Token, Recognizer } from 'antlr4';
import { ErrorListener } from 'antlr4/error';

export interface ParserError {
    startLine: number;
    endLine: number;
    startCol: number;
    endCol: number;
    message: string;
}

export default class ParserErrorListener extends ErrorListener {
    private _errors: ParserError[] = [];

    constructor(errors: ParserError[]) {
        super();
        this._errors = errors;
    }

    syntaxError(
        recognizer: Recognizer, offendingSymbol: Token, line: number,
        charPositionInLine: number, msg: string, e: any,
    ) {
        let endCol = charPositionInLine + 1;
        if (offendingSymbol.text !== null) {
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
