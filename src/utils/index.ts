function replaceStrFormIndexArr(str, replaceStr, indexArr) {
    let result = '';
    let index = 0;

    if (!indexArr || indexArr.length < 1) {
        return str;
    }
    for (let i = 0; i < indexArr.length; i++) {
        const indexItem = indexArr[i];
        const begin = indexItem.begin;

        result = result + str.substring(index, begin) + replaceStr;
        index = indexItem.end + 1;

        if (i == indexArr.length - 1) {
            result = result + str.substring(index);
        }
    }

    return result;
}
function splitSql(sql: string) {
    let haveEnd = true;
    if (!sql.endsWith(';')) {
        sql += ';';
        haveEnd = false;
    }
    interface splitParser {
        index: number;
        queue: string;
        sqls: number[];
    }
    function pushSql(parser: splitParser, sql: string) {
        if (!haveEnd && parser.index == sql.length - 1) {
            parser.sqls.push(parser.index - 1);
            parser.queue = '';
        } else {
            parser.sqls.push(parser.index);
            parser.queue = '';
        }
    }
    // 处理引号
    function quoteToken(parser: splitParser, sql: string): string {
        const queue = parser.queue;
        const endsWith = queue[queue.length - 1];
        if (endsWith == '\'' || endsWith == '"') {
            const nextToken = sql.indexOf(endsWith, parser.index + 1);
            if (nextToken != -1) {
                parser.index = nextToken;
                parser.queue = '';
            } else {
                parser.index = sql.length - 1;
            }
        } else {
            return null;
        }
    }
    // 处理单行注释
    function singleLineCommentToken(parser: splitParser, sql: string): string {
        let queue = parser.queue;
        if (queue.endsWith('--')) {
            const nextToken = sql.indexOf('\n', parser.index + 1);
            if (nextToken != -1) {
                parser.index = nextToken;
                queue = '';
            } else {
                parser.index = sql.length - 1;
            }
        } else {
            return null;
        }
    }
    // 处理多行注释
    function multipleLineCommentToken(
        parser: splitParser, sql: string,
    ): string {
        const queue = parser.queue;
        if (queue.endsWith('/*')) {
            const nextToken = sql.indexOf('*/', parser.index + 1);
            if (nextToken != -1) {
                parser.index = nextToken + 1;
                parser.queue = '';
            } else {
                parser.index = sql.length - 1;
                parser.queue = '';
            }
        } else {
            return null;
        }
    }
    function splitToken(parser: splitParser, sql: string): string {
        const queue = parser.queue;
        if (queue.endsWith(';')) {
            pushSql(parser, sql);
        } else {
            return null;
        }
    }
    const parser: splitParser = {
        index: 0,
        queue: '',
        sqls: [],
    };
    for (parser.index = 0; parser.index < sql.length; parser.index++) {
        const char = sql[parser.index];
        parser.queue += char;
        const tokenFuncs = [
            quoteToken,
            singleLineCommentToken,
            multipleLineCommentToken,
            splitToken,
        ];
        for (let i = 0; i < tokenFuncs.length; i++) {
            tokenFuncs[i](parser, sql);
        }
        if (parser.index == sql.length - 1 && parser.queue) {
            pushSql(parser, sql);
        }
    }
    return parser.sqls;
}
export {
    replaceStrFormIndexArr,
    splitSql,
};
