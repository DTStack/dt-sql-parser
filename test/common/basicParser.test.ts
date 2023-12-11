import { CommonTokenStream } from 'antlr4ts';
import { ErrorListener, FlinkSQL } from '../../src';
import { FlinkSqlLexer } from '../../src/lib/flinksql/FlinkSqlLexer';

describe('BasicParser unit tests', () => {
    const flinkParser = new FlinkSQL();
    test('Create lexer', () => {
        const sql = 'SELECT * FROM tb1';
        const lexer = flinkParser.createLexer(sql);

        expect(lexer).not.toBeUndefined();
        expect(lexer).not.toBeNull();
    });

    test('Create lexer with errorListener', () => {
        const sql = '袋鼠云数栈UED团队';
        const errors: any[] = [];
        const errorListener: ErrorListener<any> = (err) => {
            errors.push(err);
        };
        const lexer = flinkParser.createLexer(sql, errorListener);
        const tokenStream = new CommonTokenStream(lexer);
        tokenStream.fill();
        expect(errors.length).not.toBe(0);
    });

    test('Create parser', () => {
        const sql = 'SELECT * FROM tb1';
        const parser = flinkParser.createParser(sql);

        expect(parser).not.toBeUndefined();
        expect(parser).not.toBeNull();
    });

    test('Create parser with errorListener (lexer error)', () => {
        const sql = '袋鼠云数栈UED团队';
        const errors: any[] = [];
        const errorListener: ErrorListener<any> = (err) => {
            errors.push(err);
        };
        const parser = flinkParser.createParser(sql, errorListener);
        parser.program();
        expect(errors.length).not.toBe(0);
    });

    test('Create parser with errorListener (parse error)', () => {
        const sql = 'SHOW TA';
        const errors: any[] = [];
        const errorListener: ErrorListener<any> = (err) => {
            errors.push(err);
        };
        const parser = flinkParser.createParser(sql, errorListener);
        parser.program();
        expect(errors.length).not.toBe(0);
    });

    test('Parse right input', () => {
        const sql = 'SELECT * FROM tb1';
        const errors: any[] = [];
        const errorListener: ErrorListener<any> = (err) => {
            errors.push(err);
        };
        const parseTree = flinkParser.parse(sql, errorListener);

        expect(parseTree).not.toBeUndefined();
        expect(parseTree).not.toBeNull();
        expect(errors.length).toBe(0);
    });

    test('Parse wrong input', () => {
        const sql = '袋鼠云数栈UED团队';
        const errors: any[] = [];
        const errorListener: ErrorListener<any> = (err) => {
            errors.push(err);
        };
        const parseTree = flinkParser.parse(sql, errorListener);

        expect(parseTree).not.toBeUndefined();
        expect(parseTree).not.toBeNull();
        expect(errors.length).not.toBe(0);
    });

    test('Get All tokens', () => {
        const sql = 'SELECT * FROM tbl1;';
        const tokens = flinkParser.getAllTokens(sql);

        expect(tokens.length).toBe(8);
        expect(tokens[0].type).toBe(FlinkSqlLexer.KW_SELECT);
        expect(tokens[1].type).toBe(FlinkSqlLexer.SPACE);
        expect(tokens[2].type).toBe(FlinkSqlLexer.ASTERISK_SIGN);
        expect(tokens[3].type).toBe(FlinkSqlLexer.SPACE);
        expect(tokens[4].type).toBe(FlinkSqlLexer.KW_FROM);
        expect(tokens[5].type).toBe(FlinkSqlLexer.SPACE);
        expect(tokens[6].type).toBe(FlinkSqlLexer.ID_LITERAL);
        expect(tokens[7].type).toBe(FlinkSqlLexer.SEMICOLON);
    });

    test('Get All tokens with error', () => {
        const sql = '袋鼠云数栈UED团队';
        const tokens = flinkParser.getAllTokens(sql);
        expect(tokens.length).toBe(1);
        expect(tokens[0].type).toBe(FlinkSqlLexer.ID_LITERAL);
    });

    test('Split sql', () => {
        const sql = 'SHOW TABLES;\nSELECT * FROM tb;';
        const sqlSlices = flinkParser.splitSQLByStatement(sql);

        expect(sqlSlices.length).toBe(2);

        expect(sqlSlices[0].text).toBe('SHOW TABLES;');
        expect(sql.slice(sqlSlices[0].startIndex, sqlSlices[0].endIndex + 1)).toBe(
            sqlSlices[0].text
        );
        expect(sqlSlices[0].startLine).toBe(1);
        expect(sqlSlices[0].endLine).toBe(1);

        expect(sqlSlices[1].text).toBe('SELECT * FROM tb;');
        expect(sql.slice(sqlSlices[1].startIndex, sqlSlices[1].endIndex + 1)).toBe(
            sqlSlices[1].text
        );
        expect(sqlSlices[1].startLine).toBe(2);
        expect(sqlSlices[1].endLine).toBe(2);
    });

    test('Split sql with errors', () => {
        const sql = 'SHOW TABLES;\nSELECT * FOM tb;';
        const sqlSlices = flinkParser.splitSQLByStatement(sql);

        expect(sqlSlices).toBeNull();
    });
});
