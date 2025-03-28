import fs from 'fs';
import path from 'path';
import { SqlSplitStrategy } from 'src/parser/common/types';
import { FlinkSQL } from 'src/parser/flink';
import { readSQLByRange } from 'test/helper';

describe('Flink semantic context collector tests', () => {
    const flinkSql = new FlinkSQL();
    const text = fs.readFileSync(path.join(__dirname, 'fixtures', 'semantic.sql'), 'utf-8');

    test('beginning of statement with uncomplete keyword', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 1, endLine: 1 });
        const { isStatementBeginning } = flinkSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 1,
            column: 5,
        });
        expect(isStatementBeginning).toBeTruthy();
    });

    test('beginning of statement with complete keyword', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 3, endLine: 3 });
        const { isStatementBeginning } = flinkSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 1,
            column: 7,
        });
        expect(isStatementBeginning).toBeTruthy();
    });

    test('not beginning of statement with uncomplete keyword', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 5, endLine: 5 });
        const { isStatementBeginning } = flinkSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 1,
            column: 22,
        });
        expect(isStatementBeginning).toBeFalsy();
    });

    test('not beginning of statement with complete keyword', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 7, endLine: 7 });
        const { isStatementBeginning } = flinkSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 1,
            column: 22,
        });
        expect(isStatementBeginning).toBeFalsy();
    });

    test('not beginning of statement if type white space after keyword', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 9, endLine: 9 });
        const { isStatementBeginning } = flinkSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 1,
            column: 8,
        });
        expect(isStatementBeginning).toBeFalsy();
    });

    test('beginning of statement after an exists statement', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 11, endLine: 12 });
        const { isStatementBeginning } = flinkSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 2,
            column: 4,
        });
        expect(isStatementBeginning).toBeTruthy();
    });

    test('beginning of statement after an exists statement and typed white space', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 14, endLine: 15 });
        const { isStatementBeginning } = flinkSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 2,
            column: 2,
        });
        expect(isStatementBeginning).toBeTruthy();
    });

    test('not beginning of statement if previous statement exists error', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 17, endLine: 22 });
        const { isStatementBeginning } = flinkSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 6,
            column: 4,
        });
        expect(isStatementBeginning).toBeFalsy();
    });

    test('beginning of statement if previous token text is semicolon even if has error', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 24, endLine: 24 });
        // typed keyword
        const ctx1 = flinkSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 1,
            column: 13,
        });
        expect(ctx1.isStatementBeginning).toBeTruthy();

        // typed white space
        const ctx2 = flinkSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 1,
            column: 9,
        });
        expect(ctx2.isStatementBeginning).toBeTruthy();
    });

    test('beginning of statement between two statement', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 26, endLine: 28 });
        const { isStatementBeginning } = flinkSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 2,
            column: 4,
        });
        expect(isStatementBeginning).toBeTruthy();
    });

    test('not beginning of statement between two statement', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 30, endLine: 32 });
        const { isStatementBeginning } = flinkSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 2,
            column: 13,
        });
        expect(isStatementBeginning).toBeFalsy();
    });

    test('test sqlSplitStrategy', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 34, endLine: 35 });
        const { isStatementBeginning: isStatementBeginning1 } =
            flinkSql.getSemanticContextAtCaretPosition(
                sql,
                {
                    lineNumber: 2,
                    column: 7,
                },
                {
                    sqlSplitStrategy: SqlSplitStrategy.LOOSE,
                }
            );
        expect(isStatementBeginning1).toBeTruthy();

        const { isStatementBeginning: isStatementBeginning2 } =
            flinkSql.getSemanticContextAtCaretPosition(
                sql,
                {
                    lineNumber: 2,
                    column: 7,
                },
                {
                    sqlSplitStrategy: SqlSplitStrategy.STRICT,
                }
            );
        expect(isStatementBeginning2).toBeFalsy();
    });
});
