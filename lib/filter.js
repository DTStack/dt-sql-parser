const replaceStrFormIndexArr = require("../utils").replaceStrFormIndexArr;
const commentFilter = require('../core/comment');

/**
 * 过滤--注释
 * @param {String} sql 
 */
function filterComments(sql) {
    return commentFilter.parse(sql).text;
}

/**
 * 清除注释和前后空格
 * @param {String} sql 
 */
function cleanSql(sql) {
    return filterComments(sql);
}

/**
 * 分割sql
 * @param {String} sqlText 
 */
function splitSql(sqlText) {
    return commentFilter.parse(sqlText).lines
}

exports.filterComments = filterComments;
exports.cleanSql = cleanSql;
exports.splitSql = splitSql;