
import { TokenType, Token, TokenReg } from './token';

/**
 * 获取 注释 以及 分隔符 等词法信息
 * @param {String} sql
 */
function lexer(input: string): Token[] {
    // 记录当前字符的位置
    let current = 0;
    let line = 1;
    // 最终的 TokenTypes 结果
    const tokens: Token[] = [];

    /**
     * 提取 TokenType
     */
    // eslint-disable-next-line
    const extract = (currentChar: string, validator: RegExp, TokenType: TokenType): Token => {
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

    /**
     * 过滤函数内容
     */
    const matchFunction = (currentChar: string, validator: RegExp) => {
        let value = currentChar;
        const start = current;
        do {
            if (currentChar === '\n') {
                line++;
            }

            currentChar = input[++current];
            value += currentChar;
        } while (!validator.test(currentChar)); // 处理转义字符
        tokens.push({
            type: TokenType.FunctionArguments,
            value,
            start: start,
            lineNumber: line,
            end: current,
        });
        ++current;
    };

    /**
     * 过滤（提取） 引号中的内容
     */
    const matchQuotation = (currentChar: string, validator: RegExp, TokenType: TokenType) => {
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

        // 按顺序处理 括号函数 换行符 反引号 单引号 双引号 注释 分号
        // 引号内 可能包含注释包含的符号以及分号 所以优先处理引号里面的内容 去除干扰信息

        if (char === '\n') {
            line++;
            current++;
            continue;
        }

        if (TokenReg.LeftSmallBracket.test(char)) {
            matchFunction(char, TokenReg.RightSmallBracket);
            continue;
        }

        if (TokenReg.BackQuotation.test(char)) {
            // eslint-disable-next-line
            matchQuotation(char, TokenReg.BackQuotation, TokenType.BackQuotation);
            continue;
        }

        if (TokenReg.SingleQuotation.test(char)) {
            // eslint-disable-next-line
            matchQuotation(char, TokenReg.SingleQuotation, TokenType.SingleQuotation);
            continue;
        }

        if (TokenReg.DoubleQuotation.test(char)) {
            // eslint-disable-next-line
            matchQuotation(char, TokenReg.DoubleQuotation, TokenType.DoubleQuotation);
            continue;
        }

        // 处理单行注释，以--开始，\n 结束
        if (char === '-' && input[current + 1] === '-') {
            let value = '';
            const start = current;

            while (char !== '\n' && current < input.length) {
                value += char;
                char = input[++current];
            }
            tokens.push({
                type: TokenType.Comment,
                value,
                start: start,
                lineNumber: line,
                end: current,
            });
            continue;
        }

        // 处理多行注释，以 /* 开始， */结束
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
                type: TokenType.Comment,
                value,
                start: start,
                lineNumber: startLine,
                end: current,
            });
            continue;
        }

        // 处理结束符 ;
        if (TokenReg.StatementTerminator.test(char)) {
            const newToken = extract(
                char,
                TokenReg.StatementTerminator,
                TokenType.StatementTerminator,
            );
            tokens.push(newToken);
            continue;
        }

        current++;
    }
    return tokens;
}

/**
 * 分割sql
 * @param {String} sql
 */
function splitSql(sql: string) {
    const tokens = lexer(sql);
    const sqlArr = [];
    let startIndex = 0;
    tokens.forEach((ele: Token) => {
        if (ele.type === TokenType.StatementTerminator) {
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
 * 清除注释和前后空格
 * @param {String} sql
 */
function cleanSql(sql: string) {
    sql = sql.trim(); // 删除前后空格
    const tokens = lexer(sql);
    let resultSql = '';
    let startIndex = 0;
    tokens.forEach((ele: Token) => {
        if (ele.type === TokenType.Comment) {
            resultSql += sql.slice(startIndex, ele.start);
            startIndex = ele.end + 1;
        }
    });
    resultSql += sql.slice(startIndex);
    return resultSql;
}
export {
    cleanSql,
    splitSql,
    lexer,
};
