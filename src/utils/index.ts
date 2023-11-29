import { Legacy_TokenType, Legacy_Token, Legacy_TokenReg } from './token';

/**
 * @param {String} sql
 * @deprecated use parser.createLexer() instead.
 */
function legacy_lexer(input: string): Legacy_Token[] {
    let current = 0;
    let line = 1;
    const tokens: Legacy_Token[] = [];

    const extract = (
        currentChar: string,
        validator: RegExp,
        TokenType: Legacy_TokenType
    ): Legacy_Token => {
        let value = '';
        const start = current;
        while (validator.test(currentChar)) {
            value += currentChar;
            currentChar = input[++current];
        }
        return {
            type: TokenType,
            start: start,
            end: current,
            lineNumber: line,
            value: value,
        };
    };

    const matchFunction = () => {
        const bracketNum = [current];
        for (let i = current + 1; i < input.length; i++) {
            const currentChar = input[i];
            if (currentChar === '\n') {
                line++;
            }
            if (Legacy_TokenReg.LeftSmallBracket.test(currentChar)) {
                bracketNum.push(i);
            }
            if (Legacy_TokenReg.RightSmallBracket.test(currentChar)) {
                const start = bracketNum.pop();
                const end = i + 1;
                if (bracketNum.length === 0) {
                    current = end;
                    tokens.push({
                        type: Legacy_TokenType.FunctionArguments,
                        value: input.slice(start, end),
                        start,
                        lineNumber: line,
                        end,
                    });
                    return;
                }
            }
        }
    };

    const matchQuotation = (
        currentChar: string,
        validator: RegExp,
        TokenType: Legacy_TokenType
    ) => {
        do {
            if (currentChar === '\n') {
                line++;
            }
            currentChar = input[++current];
        } while (!validator.test(currentChar));

        ++current;
    };

    while (current < input.length) {
        let char = input[current];

        if (char === '\n') {
            line++;
            current++;
            continue;
        }

        if (Legacy_TokenReg.LeftSmallBracket.test(char)) {
            matchFunction();
            continue;
        }

        if (Legacy_TokenReg.BackQuotation.test(char)) {
            matchQuotation(char, Legacy_TokenReg.BackQuotation, Legacy_TokenType.BackQuotation);
            continue;
        }

        if (Legacy_TokenReg.SingleQuotation.test(char)) {
            matchQuotation(char, Legacy_TokenReg.SingleQuotation, Legacy_TokenType.SingleQuotation);
            continue;
        }

        if (Legacy_TokenReg.DoubleQuotation.test(char)) {
            matchQuotation(char, Legacy_TokenReg.DoubleQuotation, Legacy_TokenType.DoubleQuotation);
            continue;
        }

        if (char === '-' && input[current + 1] === '-') {
            let value = '';
            const start = current;

            while (char !== '\n' && current < input.length) {
                value += char;
                char = input[++current];
            }
            tokens.push({
                type: Legacy_TokenType.Comment,
                value,
                start: start,
                lineNumber: line,
                end: current,
            });
            continue;
        }

        if (char === '/' && input[current + 1] === '*') {
            let value = '';
            const start = current;
            const startLine = line;

            while (!(char === '/' && input[current - 1] === '*')) {
                if (char === '\n') {
                    line++;
                }
                value += char;
                char = input[++current];
            }
            value += char;
            ++current;

            tokens.push({
                type: Legacy_TokenType.Comment,
                value,
                start: start,
                lineNumber: startLine,
                end: current,
            });
            continue;
        }

        if (Legacy_TokenReg.StatementTerminator.test(char)) {
            const newToken = extract(
                char,
                Legacy_TokenReg.StatementTerminator,
                Legacy_TokenType.StatementTerminator
            );
            tokens.push(newToken);
            continue;
        }

        current++;
    }
    return tokens;
}

/**
 * split sql
 * @param {String} sql
 * @deprecated use parser.splitSQLByStatement() instead.
 */
function legacy_splitSql(sql: string) {
    const tokens = legacy_lexer(sql);
    const sqlArr = [];
    let startIndex = 0;
    tokens.forEach((ele: Legacy_Token) => {
        if (ele.type === Legacy_TokenType.StatementTerminator) {
            sqlArr.push(sql.slice(startIndex, ele.end));
            startIndex = ele.end;
        }
    });
    if (startIndex < sql.length) {
        sqlArr.push(sql.slice(startIndex));
    }
    return sqlArr;
}

/**
 * clean comment
 * @param {String} sql
 * @deprecated will be removed in future.
 */
function legacy_cleanSql(sql: string) {
    sql = sql.trim();
    const tokens = legacy_lexer(sql);
    let resultSql = '';
    let startIndex = 0;
    tokens.forEach((ele: Legacy_Token) => {
        if (ele.type === Legacy_TokenType.Comment) {
            resultSql += sql.slice(startIndex, ele.start);
            startIndex = ele.end + 1;
        }
    });
    resultSql += sql.slice(startIndex);
    return resultSql;
}
export { legacy_cleanSql, legacy_splitSql, legacy_lexer };
