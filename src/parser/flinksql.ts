import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { FlinkSqlLexer } from '../lib/flinksql/FlinkSqlLexer';
import { FlinkSqlParser } from '../lib/flinksql/FlinkSqlParser';
import BasicParser from './common/basicParser';
export default class FlinkSQL extends BasicParser {
    public createLexer(input: string): FlinkSqlLexer {
        const chars = CharStreams.fromString(input.toUpperCase()); // Some Lexer only support uppercase token, So you need transform
        const lexer = new FlinkSqlLexer(chars);
        return lexer;
    }
    public createParserFromLexer(lexer: FlinkSqlLexer): FlinkSqlParser {
        const tokens = new CommonTokenStream(lexer);
        const parser = new FlinkSqlParser(tokens);
        return parser;
    }
}

