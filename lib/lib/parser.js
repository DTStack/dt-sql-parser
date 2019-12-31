"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as sqlSyntaxParser from '../core/sqlSyntaxParser';
const hiveSyntaxParser_1 = require("../core/parse/hive/hiveSyntaxParser");
const hiveAutocompleteParser_1 = require("../core/parse/hive/hiveAutocompleteParser");
const impalaSyntaxParser_1 = require("../core/parse/impala/impalaSyntaxParser");
const impalaAutocompleteParser_1 = require("../core/parse/impala/impalaAutocompleteParser");
const genericSyntaxParser_1 = require("../core/parse/generic/genericSyntaxParser");
const genericAutocompleteParser_1 = require("../core/parse/generic/genericAutocompleteParser");
function getSyntaxParser(type) {
    switch (type) {
        case sqlType.Hive: {
            return hiveSyntaxParser_1.default;
        }
        case sqlType.Impala: {
            return impalaSyntaxParser_1.default;
        }
        case sqlType.None: {
            return genericSyntaxParser_1.default;
        }
        default: {
            return hiveSyntaxParser_1.default;
        }
    }
}
function getAutoCompleteParser(type) {
    switch (type) {
        case sqlType.Hive: {
            return hiveAutocompleteParser_1.default;
        }
        case sqlType.Impala: {
            return impalaAutocompleteParser_1.default;
        }
        case sqlType.None: {
            return genericAutocompleteParser_1.default;
        }
        default: {
            return hiveAutocompleteParser_1.default;
        }
    }
}
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
    console.log(getSyntaxParser(type));
    return getSyntaxParser(type).parseSyntax(parserArgs[0], parserArgs[1], type, false);
}
exports.parseSyntax = parseSyntax;
/**
 * 自动补全提示
 */
function parserSql(sql, type = sqlType.Hive) {
    const parserArgs = sqlToParserArgs(sql);
    return getAutoCompleteParser(type).parseSql(parserArgs[0], parserArgs[1], type, false);
}
exports.parserSql = parserSql;
