const dtSqlParser=require("../index");
const example=require("./example");
const testMap=Object.entries(example);

for(let [key,value] of testMap){
    console.log(`******${key}********`)
    console.log(value)
    console.log(`******result********`)
    // console.log(dtSqlParser.parser.parse(value));
    console.log(dtSqlParser.filter.splitSql(value))
    console.log(`********************`)
}

