
import { Lexer } from 'antlr4';

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

export default class PostgreSQLLexerBase extends Lexer {

    tags: string[] = [];

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

    UnterminatedBlockCommentDebugAssert() {
        // Debug.Assert(InputStream.LA(1) == -1 /*EOF*/);
    }

    HandleLessLessGreaterGreater() {
        const LESS_LESS = 18;
        const GREATER_GREATER = 19;
        if (this.text === '<<') {
            this._type = LESS_LESS;
        }
        if (this.text === '>>') {
            this._type = GREATER_GREATER;
        }
    }

    HandleNumericFail() {
        this.getInputStream().seek(this.getInputStream().index - 2);
        const Integral = 535;
        this._type = Integral;
    }

    charIsLetter() {
        // eslint-disable-next-line new-cap
        return isLetter(this.getInputStream().LA(-1));
    }

    pushTag() {
        this.tags.push(this.text);
    };
    
    isTag() {
        return this.text === this.tags.pop();
    }
    
    popTag() {
        this.tags.pop();
    }
    
    getInputStream() {
        return this._input;
    }
    
    checkLA(c) {
        // eslint-disable-next-line new-cap
        return this.getInputStream().LA(1) !== c;
    }
    
}