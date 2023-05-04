import { Lexer } from "antlr4";

export default class SparkSqlBaseLexer extends Lexer {

    isValidDecimal() {
        let nextChar = this.fromCodePoint(this._input.LA(1));
        return !(nextChar >= 'A' && nextChar <= 'Z' || nextChar >= '0' && nextChar <= '9' || nextChar == '_')
    }

    /**
    * This method will be called when we see '/*' and try to match it as a bracketed comment.
    * If the next character is '+', it should be parsed as hint later, and we cannot match
    * it as a bracketed comment.
    *
    * Returns true if the next character is '+'.
    */
    isHint() {
        let nextChar = this.fromCodePoint(this._input.LA(1));
        return nextChar == '+'
    }

    fromCodePoint(codePoint) {
        return String.fromCodePoint(codePoint);
    }
}
