/**
 * @deprecated will be removed in future.
 */
export enum Legacy_TokenType {
    /**
     * Enclosed in single/double/back quotation, `` Symbol
     * 'abc', "abc", `abc`
     */
    SingleQuotation = 'SingleQuotation',
    DoubleQuotation = 'DoubleQuotation',
    BackQuotation = 'BackQuotation',
    /**
     * Language element type
     */
    Comment = 'Comment',

    /**
     * Statement
     */
    StatementTerminator = 'StatementTerminator',
    /**
     * Others
     */
    Error = 'Error',
    /**
     * Left small Bracket
     */
    LeftSmallBracket = 'LeftSmallBracket',
    /**
     * Left small Bracket
     */
    RightSmallBracket = 'RightSmallBracket',
    Comma = 'Comma',
    FunctionArguments = 'FunctionArguments',
}

/**
 * @deprecated will be removed in future.
 * Token object
 */
export interface Legacy_Token {
    type: Legacy_TokenType;
    value: string;
    start?: number;
    end: number;
    lineNumber: number;
    message?: string;
}

/**
 * @deprecated will be removed in future.
 * Token recognition rules
 */
export const Legacy_TokenReg = {
    [Legacy_TokenType.StatementTerminator]: /[;]/,
    [Legacy_TokenType.SingleQuotation]: /['|\']/,
    [Legacy_TokenType.DoubleQuotation]: /["]/,
    [Legacy_TokenType.BackQuotation]: /[`]/,
    [Legacy_TokenType.LeftSmallBracket]: /[(]/,
    [Legacy_TokenType.RightSmallBracket]: /[)]/,
    [Legacy_TokenType.Comma]: /[,]/,
};
