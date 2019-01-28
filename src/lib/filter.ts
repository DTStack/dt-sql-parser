import * as commentFilter from '../core/comment';

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
 * @param {String} sql 
 */
function splitSql(sql) {
    return commentFilter.parse(sql).lines
}

export {
    filterComments,
    cleanSql,
    splitSql
}