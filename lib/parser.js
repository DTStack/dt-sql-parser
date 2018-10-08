const Parser = require('../core/astParser');
const Cache = require("../core/cache");
const sqlSyntaxParser = require("../core/sqlSyntaxParser");
const sqlAutoCompleteParser = require("../core/sqlAutoCompleteParser");
const filter = require("./filter");


const astCache = new Cache();

/**
 * 生成ast
 */
function parse(sql) {
    const cleanSql = filter.cleanSql(sql);
    let ast = astCache.get(cleanSql);

    if (ast) {
        return ast
    } else {
        ast = Parser.parse(cleanSql).ast;
        astCache.set(cleanSql, ast);
        return ast;
    }
}

/**
 * 自动补全提示
 * @param {(string | Array<string>)} sql
 * @param {string} [type="hive"]
 */
function parseSyntax(sql, type) {
    if (typeof type == "undefined") {
        type = "hive"
    }
    let sql1=sql;
    let sql2='';
    if(sql instanceof Array){
        sql1=sql[0];
        sql2=sql[1];
    }
    return sqlSyntaxParser.parser.parseSyntax(sql1, sql2, type, false)
}

/**
 * 自动补全提示
 * @param {(string | Array<string>)} sql
 * @param {string} [type="hive"]
 */
function parserSql(sql, type) {
    if (typeof type == "undefined") {
        type = "hive"
    }
    let sql1=sql;
    let sql2='';
    if(sql instanceof Array){
        sql1=sql[0];
        sql2=sql[1];
    }
    return sqlAutoCompleteParser.parser.parseSql(sql1, sql2, type, false)
}

exports.parse = parse;
exports.parseSyntax = parseSyntax;
exports.parserSql = parserSql;
