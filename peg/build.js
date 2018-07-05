const pegjs=require("pegjs");
const path=require("path");
const fs=require("fs");

const files=[{
    source:path.resolve(process.cwd(),"./peg/comment.pegjs") ,
    target:path.resolve(process.cwd(),"./core/comment.js") ,
},{
    source:path.resolve(process.cwd(),"./peg/nquery.pegjs") ,
    target:path.resolve(process.cwd(),"./core/astParser.js") ,
}];

const file=fs.readFileSync(files[0].source,{encoding:"utf8"})
pegjs.buildParser(file);