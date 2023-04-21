// https://github.com/antlr/grammars-v4/blob/master/sql/postgresql/Java/PostgreSQLLexerBase.java

// eslint-disable-next-line no-invalid-this
const __extends = (this && this.__extends) || (function() {
    let extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function(d, b) {
                d.__proto__ = b;
            }) ||
            function(d, b) {
                for (const p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== 'function' && b !== null) {
            throw new TypeError('Class extends value ' + String(b) + ' is not a constructor or null');
        }
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

const Lexer = require('antlr4').Lexer;

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

function PostgreSQLLexerBase(input) {
    const _this = Lexer.call(this, input) || this;
    _this.tags = [];
    return _this;
}

__extends(PostgreSQLLexerBase, Lexer);

PostgreSQLLexerBase.prototype.pushTag = function() {
    this.tags.push(getText());
};

PostgreSQLLexerBase.prototype.isTag = function() {
    return this.getText().equals(this.tags.peek());
};

PostgreSQLLexerBase.prototype.popTag = function() {
    this.tags.pop();
};

PostgreSQLLexerBase.prototype.getInputStream = function() {
    return this._input;
};

PostgreSQLLexerBase.prototype.checkLA = function(c) {
    // eslint-disable-next-line new-cap
    return this.getInputStream().LA(1) !== c;
};

PostgreSQLLexerBase.prototype.charIsLetter = function() {
    // eslint-disable-next-line new-cap
    return isLetter(this.getInputStream().LA(-1));
};

PostgreSQLLexerBase.prototype.HandleNumericFail = function() {
    this.getInputStream().seek(this.getInputStream().index() - 2);
    const Integral = 535;
    this.setType(Integral);
};

PostgreSQLLexerBase.prototype.HandleLessLessGreaterGreater = function() {
    const LESS_LESS = 18;
    const GREATER_GREATER = 19;
    if (this.getText() === '<<') {
        this.setType(LESS_LESS);
    }
    if (this.getText() === '>>') {
        this.setType(GREATER_GREATER);
    }
};

PostgreSQLLexerBase.prototype.UnterminatedBlockCommentDebugAssert = function() {
    // Debug.Assert(InputStream.LA(1) == -1 /*EOF*/);
};

PostgreSQLLexerBase.prototype.CheckIfUtf32Letter = function() {
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
};

exports.PostgreSQLLexerBase = PostgreSQLLexerBase;
