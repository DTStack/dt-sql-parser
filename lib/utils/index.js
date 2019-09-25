"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function replaceStrFormIndexArr(str, replaceStr, indexArr) {
    let arr = [];
    let result = "";
    let index = 0;
    if (!indexArr || indexArr.length < 1) {
        return str;
    }
    for (let i = 0; i < indexArr.length; i++) {
        let indexItem = indexArr[i];
        let begin = indexItem.begin;
        result = result + str.substring(index, begin) + replaceStr;
        index = indexItem.end + 1;
        if (i == indexArr.length - 1) {
            result = result + str.substring(index);
        }
    }
    return result;
}
exports.replaceStrFormIndexArr = replaceStrFormIndexArr;
function splitSql(sql) {
    let haveEnd = true;
    if (!sql.endsWith(';')) {
        sql += ';';
        haveEnd = false;
    }
    // 处理引号
    function quoteToken(parser, sql) {
        let queue = parser.queue;
        let endsWith = queue[queue.length - 1];
        if (endsWith == '\'' || endsWith == '"') {
            let nextToken = sql.indexOf(endsWith, parser.index + 1);
            if (nextToken != -1) {
                parser.index = nextToken;
                parser.queue = '';
            }
            else {
                parser.index = sql.length - 1;
            }
        }
        else {
            return null;
        }
    }
    // 处理单行注释
    function singleLineCommentToken(parser, sql) {
        let queue = parser.queue;
        if (queue.endsWith('--')) {
            let nextToken = sql.indexOf('\n', parser.index + 1);
            if (nextToken != -1) {
                parser.index = nextToken;
                queue = '';
            }
            else {
                parser.index = sql.length - 1;
            }
        }
        else {
            return null;
        }
    }
    // 处理多行注释
    function multipleLineCommentToken(parser, sql) {
        let queue = parser.queue;
        if (queue.endsWith('/*')) {
            let nextToken = sql.indexOf('*/', parser.index + 1);
            if (nextToken != -1) {
                parser.index = nextToken + 1;
                parser.queue = '';
            }
            else {
                parser.index = sql.length - 1;
                parser.queue = '';
            }
        }
        else {
            return null;
        }
    }
    function splitToken(parser, sql) {
        let queue = parser.queue;
        if (queue.endsWith(';')) {
            if (!haveEnd && parser.index == sql.length - 1) {
                parser.sqls.push(parser.index - 1);
                queue = '';
            }
            else {
                parser.sqls.push(parser.index);
                queue = '';
            }
        }
        else {
            return null;
        }
    }
    let parser = {
        index: 0,
        queue: '',
        sqls: []
    };
    for (parser.index = 0; parser.index < sql.length; parser.index++) {
        let char = sql[parser.index];
        parser.queue += char;
        let tokenFuncs = [quoteToken, singleLineCommentToken, multipleLineCommentToken, splitToken];
        for (let i = 0; i < tokenFuncs.length; i++) {
            tokenFuncs[i](parser, sql);
        }
    }
    return parser.sqls;
}
exports.splitSql = splitSql;
