import { Lexer } from "antlr4ts/Lexer";


function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

export default abstract class PostgreSQLLexerBase extends Lexer {
  
    tags: string[] = [];
    _interp: any;

    constructor(input) {
        super(input);
    }

    pushTag() {
        this.tags.push(this.text);
    }

    isTag() {
        return this.text === this.tags[this.tags.length - 1];
    }

    popTag() {
        this.tags.pop();
    }

    getInputStream() {
        return this._input;
    }
    checkLA( c) {
        return this.getInputStream().LA(1) !== c;
    }

    charIsLetter() {
        return isLetter(this.getInputStream().LA(-1));
    }

    HandleNumericFail() {
        this.getInputStream().seek(this.getInputStream().index - 2);
        const Integral = 535;
        this.type = Integral;
    }

    HandleLessLessGreaterGreater() {
        const LESS_LESS = 18;
        const GREATER_GREATER = 19;
        if (this.text === '<<') this.type = LESS_LESS;
        if (this.text === '>>') this.type = GREATER_GREATER;
    }

    UnterminatedBlockCommentDebugAssert() {
    }

    CheckIfUtf32Letter() {
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