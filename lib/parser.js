const Parser = require('../core/astParser');
const Cache = require("../core/cache");
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


exports.parse=parse;
