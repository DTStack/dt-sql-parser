// import * as sqlSyntaxParser from '../core/sqlSyntaxParser';
import hiveSyntaxParser from '../core/parse/hive/hiveSyntaxParser';
import hiveAutoCompleteParser from '../core/parse/hive/hiveAutocompleteParser';
import impalaSyntaxParser from '../core/parse/impala/impalaSyntaxParser';
import impalaAutoCompleteParser from '../core/parse/impala/impalaAutocompleteParser';
import genericSyntaxParser from '../core/parse/generic/genericSyntaxParser';
import genericAutocompleteParser from '../core/parse/generic/genericAutocompleteParser';
import { SyntaxParser, SyntaxResult } from '../core/sqlSyntaxParser';
import { CompleteParser, CompleteResult } from '../core/sqlAutoCompleteParser';

function getSyntaxParser (type: sqlType): any {
    switch (type) {
        case sqlType.Hive: {
            return hiveSyntaxParser;
        }
        case sqlType.Impala: {
            return impalaSyntaxParser;
        }
        case sqlType.None: {
            return genericSyntaxParser;
        }
        default: {
            return hiveSyntaxParser; 
        }
    }
}
function getAutoCompleteParser (type: sqlType): any {
    switch (type) {
        case sqlType.Hive: {
            return hiveAutoCompleteParser;
        }
        case sqlType.Impala: {
            return impalaAutoCompleteParser;
        }
        case sqlType.None: {
            return genericAutocompleteParser;
        }
        default: {
            return hiveAutoCompleteParser; 
        }
    }
}
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
function parseSyntax(sql: sql, type:sqlType = sqlType.Hive): SyntaxResult | false {
    const parserArgs = sqlToParserArgs(sql);
    console.log(
        getSyntaxParser(type)
    )
    return (getSyntaxParser(type) as SyntaxParser).parseSyntax(parserArgs[0], parserArgs[1], type, false)
}

/**
 * 自动补全提示
 */
function parserSql(sql: sql, type: sqlType = sqlType.Hive): CompleteResult {
    const parserArgs = sqlToParserArgs(sql);
    return (getAutoCompleteParser(type) as CompleteParser).parseSql(parserArgs[0], parserArgs[1], type, false)
}

export {
    parseSyntax,
    parserSql,
    sqlType
}
