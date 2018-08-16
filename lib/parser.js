const Parser = require('../core/astParser');
const Cache = require("../core/cache");
const dtSqlParser=require("../core/sqlSyntaxParser");
const filter = require("./filter");


const astCache=new Cache();

function parse(sql){
    const cleanSql=filter.cleanSql(sql);
    console.log(cleanSql)
    let ast=astCache.get(cleanSql);
    if(ast){
        return ast
    }else{
        ast=Parser.parse(cleanSql).ast;
        astCache.set(cleanSql,ast);
        return ast;
    }
}

/**
 * sql sql
 * type 语法类型。默认hive
 * return 返回解析对象
 */
function parseSyntax(sql,type){
    if(typeof type=="undefined"){
        type="hive"
    }
    return dtSqlParser.parser.parseSyntax(sql,'',type,false)
}

exports.parse=parse;
exports.parseSyntax=parseSyntax;
