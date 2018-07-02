const replaceStrFormIndexArr=require("../utils").replaceStrFormIndexArr;

function filterComments(sql) {
    let tmpArr = [];
    const comments = [];

    for (let i = 0; i < sql.length; i++) {
        let char = sql[i];

        //读取字符
        if (char == "'" || char == "\"" || char == "-" || char == "\n") {
            //推入数组
            tmpArr.push({
                index: i,
                char: char
            });
        }
        //校验数组是否有匹配语法
        if (tmpArr.length < 2) {
            if (tmpArr[0] && tmpArr[0].char == "\n") {
                tmpArr = [];
            }
            continue;
        }

        let firstChar = tmpArr[0];
        let lastChar = tmpArr[tmpArr.length - 1];

        if (firstChar.char == "'" || firstChar.char == "\"") {
            //引号匹配，则清空
            if (lastChar.char == firstChar.char) {
                tmpArr = [];
                continue;
            }
        } else if (firstChar.char == "-") {
            //假如第一个是横线，则开始校验注释规则

            //判断是否为两个注释符号，不是，则清空
            if (tmpArr[1].char != "-") {
                tmpArr = [];
                continue;
            }
            //为注释作用域，遇到换行符，则结束注释
            else if (lastChar.char == "\n") {
                comments.push({
                    begin: firstChar.index,
                    end: lastChar.index
                })
                tmpArr = [];
                continue;
            }
            //解析结束
            else if (i == sql.length - 1) {
                comments.push({
                    begin: firstChar.index,
                    end: i
                })
                continue;
            }
        } else {
            tmpArr = [];
        }
    }

    sql = replaceStrFormIndexArr(sql, '', comments)

    return sql;
}

function cleanSql(sql){
    return filterComments(sql).trim();
}

exports.filterComments=filterComments;
exports.cleanSql=cleanSql;