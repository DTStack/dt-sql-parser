export enum TokenType {
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
    FunctionArguments = 'FunctionArguments'
}

/**
 * Token object
 */
export interface Token {
    type: TokenType,
    value: string;
    start: number;
    end: number;
    lineNumber: number;
    message?: string;
}

/**
*  Token recognition rules
*/
export const TokenReg = {
    [TokenType.StatementTerminator]: /[;]/,
    [TokenType.SingleQuotation]: /['|\']/,
    [TokenType.DoubleQuotation]: /["]/,
    [TokenType.BackQuotation]: /[`]/,
    [TokenType.LeftSmallBracket]: /[(]/,
    [TokenType.RightSmallBracket]: /[)]/,
    [TokenType.Comma]: /[,]/,
};
