const dtSqlParser=require("../index");
const example=require("./example");
const testMap=Object.entries(example);
const filterSql=dtSqlParser.filter.filterComments;
const splitSql=dtSqlParser.filter.splitSql;

for(let [key,value] of testMap){
    console.log(`******${key}********`)
    console.log(value)
    console.log(`******result********`)
    // console.log(dtSqlParser.parser.parseSyntax(value));
    console.log(splitSql(filterSql(value)))
    console.log(`********************`)
}

