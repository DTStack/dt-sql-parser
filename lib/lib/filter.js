"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commentFilter = require("../core/comment");
/**
 * 过滤--注释
 * @param {String} sql
 */
function filterComments(sql) {
    return commentFilter.parse(sql).text;
}
exports.filterComments = filterComments;
/**
 * 清除注释和前后空格
 * @param {String} sql
 */
function cleanSql(sql) {
    return filterComments(sql);
}
exports.cleanSql = cleanSql;
/**
 * 分割sql
 * @param {String} sql
 */
function splitSql(sql) {
    return commentFilter.parse(sql).lines;
}
exports.splitSql = splitSql;
