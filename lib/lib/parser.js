"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as sqlSyntaxParser from '../core/sqlSyntaxParser';
const sqlSyntaxParser = require("../core/sqlSyntaxParser");
const sqlAutoCompleteParser = require("../core/sqlAutoCompleteParser");
/**
 * 自动补全提示
 * @param {(string | Array<string>)} sql
 * @param {string} [type="hive"]
 */
function parseSyntax(sql, type) {
    if (typeof type == "undefined") {
        type = "hive";
    }
    let sql1 = sql;
    let sql2 = '';
    if (sql instanceof Array) {
        sql1 = sql[0];
        sql2 = sql[1];
    }
    // @ts-nocheck
    return sqlSyntaxParser.parser.parseSyntax(sql1, sql2, type, false);
}
exports.parseSyntax = parseSyntax;
/**
 * 自动补全提示
 * @param {(string | Array<string>)} sql
 * @param {string} [type="hive"]
 */
function parserSql(sql, type) {
    if (typeof type == "undefined") {
        type = "hive";
    }
    let sql1 = sql;
    let sql2 = '';
    if (sql instanceof Array) {
        sql1 = sql[0];
        sql2 = sql[1];
    }
    return sqlAutoCompleteParser.parser.parseSql(sql1, sql2, type, false);
}
exports.parserSql = parserSql;
