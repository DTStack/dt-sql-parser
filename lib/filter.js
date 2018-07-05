const replaceStrFormIndexArr = require("../utils").replaceStrFormIndexArr;
const commentFilter = require('../core/comment');

/**
 * 过滤--注释
 * @param {String} sql 
 */
function filterComments(sql) {
    return commentFilter.parse(sql)
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
    sqlText=cleanSql(sqlText);
    if (!sqlText) {
        return sqlText;
    }
    sqlText = sqlText.trim();
    if (!endsWith(sqlText, ';')) {
        sqlText += ';';
    }

    let results = [];
    let index = 0;
    let tmpChar = null;
    for (let i = 0; i < sqlText.length; i++) {
        let char = sqlText[i];

        if (char == "'" || char == '"') {
            if (tmpChar == char) {
                tmpChar = null;
            } else {
                tmpChar = char;
            }
        } else if (char == ';') {
            if (tmpChar == null) {
                results.push(sqlText.substring(index, i));
                index = i + 1;
            }
        }
    }

    return results;
}

exports.filterComments = filterComments;
exports.cleanSql = cleanSql;
exports.splitSql = splitSql;