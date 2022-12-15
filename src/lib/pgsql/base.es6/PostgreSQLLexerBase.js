const antlr4 = require('antlr4/index');
const Lexer = antlr4.Lexer;
function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}
export class PostgreSQLLexerBase extends Lexer {
    tags = [];

    constructor(input) {
        super(input);
    }

    pushTag() {
        this.tags.push(getText());
    }

    isTag() {
        return this.getText().equals(this.tags.peek());
    }

    popTag() {
        tags.pop();
    }

    getInputStream() {
        return this._input;
    }
    checkLA( c) {
        // eslint-disable-next-line new-cap
        return this.getInputStream().LA(1) !== c;
    }

    charIsLetter() {
        // eslint-disable-next-line new-cap
        return isLetter(this.getInputStream().LA(-1));
    }

    HandleNumericFail() {
        this.getInputStream().seek(this.getInputStream().index() - 2);
        const Integral = 535;
        this.setType(Integral);
    }

    HandleLessLessGreaterGreater() {
        const LESS_LESS = 18;
        const GREATER_GREATER = 19;
        if (this.getText() === '<<') this.setType(LESS_LESS);
        if (this.getText() === '>>') this.setType(GREATER_GREATER);
    }

    UnterminatedBlockCommentDebugAssert() {
        // Debug.Assert(InputStream.LA(1) == -1 /*EOF*/);
    }

    CheckIfUtf32Letter() {
        // eslint-disable-next-line new-cap
        let codePoint = this.getInputStream().LA(-2) << 8 + this.getInputStream().LA(-1);
        let c;
        if (codePoint < 0x10000) {
            c = String.fromCharCode(codePoint);
        } else {
            codePoint -= 0x10000;
            c = String.fromCharCode(codePoint / 0x400 + 0xd800, codePoint % 0x400 + 0xdc00);
        }
        return isLetter(c[0]);
    }
}
