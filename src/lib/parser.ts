// import * as sqlSyntaxParser from '../core/sqlSyntaxParser';
import * as sqlSyntaxParser from '../core/sqlSyntaxParser';
import * as sqlAutoCompleteParser from '../core/sqlAutoCompleteParser';

type sql = string | string [];
enum sqlType {
    Hive = 'hive',
    None = 'sql',
    Impala = 'impala'
}
function sqlToParserArgs (sql: sql) {
    let preSql = '', sufSql = '';
    if(Object.prototype.toString.call(sql) == '[object Array]'){
        preSql=sql[0];
        sufSql=sql[1];
    } else {
        preSql = sql as string;
    }
    return [preSql, sufSql];
}
/**
 * 校验语法
 */
function parseSyntax(sql: sql, type:sqlType = sqlType.Hive): sqlSyntaxParser.SyntaxResult | false {
    const parserArgs = sqlToParserArgs(sql);
    return sqlSyntaxParser.parser.parseSyntax(parserArgs[0], parserArgs[1], type, false)
}

/**
 * 自动补全提示
 */
function parserSql(sql: sql, type:sqlType = sqlType.Hive): sqlAutoCompleteParser.CompleteResult {
    const parserArgs = sqlToParserArgs(sql);
    return sqlAutoCompleteParser.parser.parseSql(parserArgs[0], parserArgs[1], type, false)
}

export {
    parseSyntax,
    parserSql
}
