"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as sqlSyntaxParser from '../core/sqlSyntaxParser';
const sqlSyntaxParser = require("../core/sqlSyntaxParser");
const sqlAutoCompleteParser = require("../core/sqlAutoCompleteParser");
var sqlType;
(function (sqlType) {
    sqlType["Hive"] = "hive";
    sqlType["None"] = "sql";
    sqlType["Impala"] = "impala";
})(sqlType || (sqlType = {}));
exports.sqlType = sqlType;
function sqlToParserArgs(sql) {
    let preSql = '', sufSql = '';
    if (Object.prototype.toString.call(sql) == '[object Array]') {
        preSql = sql[0];
        sufSql = sql[1];
    }
    else {
        preSql = sql;
    }
    return [preSql, sufSql];
}
/**
 * 校验语法
 */
function parseSyntax(sql, type = sqlType.Hive) {
    const parserArgs = sqlToParserArgs(sql);
    return sqlSyntaxParser.parser.parseSyntax(parserArgs[0], parserArgs[1], type, false);
}
exports.parseSyntax = parseSyntax;
/**
 * 自动补全提示
 */
function parserSql(sql, type = sqlType.Hive) {
    const parserArgs = sqlToParserArgs(sql);
    return sqlAutoCompleteParser.parser.parseSql(parserArgs[0], parserArgs[1], type, false);
}
exports.parserSql = parserSql;
