const pegjs=require("pegjs");
const path=require("path");
const fs=require("fs");

const ENCODING="utf8"

const files=[{
    source:path.resolve(process.cwd(),"./peg/comment.pegjs") ,
    target:path.resolve(process.cwd(),"./core/comment.js") ,
},{
    source:path.resolve(process.cwd(),"./peg/nquery.pegjs") ,
    target:path.resolve(process.cwd(),"./core/astParser.js") ,
}];


function writeIn(file,data){
    fs.writeFileSync(file,data,{encoding:ENCODING})
}
function build(content){
    return pegjs.generate(content,{
        output:"source",
        format:"umd"
    });
}
files.forEach(
    (file)=>{
        let fileContent=fs.readFileSync(file.source,{encoding:ENCODING})
        writeIn(file.target,build(fileContent))
    }
)
