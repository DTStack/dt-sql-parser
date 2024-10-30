import fs from 'fs';
import path from 'path';
import { FlinkSQL } from 'src/parser/flink';
import { readSQLByRange } from 'test/helper';

describe('Flink semantic context collector tests', () => {
    const flinkSql = new FlinkSQL();
    const text = fs.readFileSync(path.join(__dirname, 'fixtures', 'semantic.sql'), 'utf-8');

    test('new statement with uncomplete keyword', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 1, endLine: 1 });
        const { isNewStatement } = flinkSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 1,
            column: 5,
        });
        expect(isNewStatement).toBeTruthy();
    });

    test('new statement with complete keyword', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 3, endLine: 3 });
        const { isNewStatement } = flinkSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 1,
            column: 7,
        });
        expect(isNewStatement).toBeTruthy();
    });

    test('not new statement with uncomplete keyword', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 5, endLine: 19 });
        const { isNewStatement } = flinkSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 1,
            column: 22,
        });
        expect(isNewStatement).toBeFalsy();
    });

    test('not new statement with complete keyword', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 7, endLine: 7 });
        const { isNewStatement } = flinkSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 1,
            column: 22,
        });
        expect(isNewStatement).toBeFalsy();
    });

    test('not new statement when type white space after keyword', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 9, endLine: 9 });
        const { isNewStatement } = flinkSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 1,
            column: 8,
        });
        expect(isNewStatement).toBeFalsy();
    });

    test('not new statement if type white space after keyword', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 9, endLine: 9 });
        const { isNewStatement } = flinkSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 1,
            column: 8,
        });
        expect(isNewStatement).toBeFalsy();
    });

    test('new statement after an exists statement', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 11, endLine: 12 });
        const { isNewStatement } = flinkSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 2,
            column: 4,
        });
        expect(isNewStatement).toBeTruthy();
    });

    test('new statement after an exists statement and typed white space', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 14, endLine: 15 });
        const { isNewStatement } = flinkSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 2,
            column: 2,
        });
        expect(isNewStatement).toBeTruthy();
    });

    test('not new statement if previous statement exists error', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 17, endLine: 18 });
        const { isNewStatement } = flinkSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 2,
            column: 4,
        });
        expect(isNewStatement).toBeFalsy();
    });

    test('new statement if previous token text is semicolon even if has error', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 20, endLine: 20 });
        // typed keyword
        const ctx1 = flinkSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 1,
            column: 13,
        });
        expect(ctx1.isNewStatement).toBeTruthy();

        // typed white space
        const ctx2 = flinkSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 1,
            column: 9,
        });
        expect(ctx2.isNewStatement).toBeTruthy();
    });

    test('new statement between two statement', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 26, endLine: 28 });
        const { isNewStatement } = flinkSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 2,
            column: 4,
        });
        expect(isNewStatement).toBeTruthy();
    });

    test('not new statement between two statement', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 26, endLine: 28 });
        const { isNewStatement } = flinkSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 2,
            column: 12,
        });
        expect(isNewStatement).toBeFalsy();
    });
});
