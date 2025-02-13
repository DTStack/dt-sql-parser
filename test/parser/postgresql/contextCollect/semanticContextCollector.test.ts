import fs from 'fs';
import path from 'path';
import { SqlSplitStrategy } from 'src/parser/common/types';
import { PostgreSQL } from 'src/parser/postgresql';
import { readSQLByRange } from 'test/helper';

describe('PostgreSQL semantic context collector tests', () => {
    const postgreSql = new PostgreSQL();
    const text = fs.readFileSync(path.join(__dirname, 'fixtures', 'semantic.sql'), 'utf-8');

    test('beginning of statement with uncomplete keyword', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 1, endLine: 1 });
        const { isStatementBeginning } = postgreSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 1,
            column: 5,
        });
        expect(isStatementBeginning).toBeTruthy();
    });

    test('beginning of statement with complete keyword', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 3, endLine: 3 });
        const { isStatementBeginning } = postgreSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 1,
            column: 7,
        });
        expect(isStatementBeginning).toBeTruthy();
    });

    test('not beginning of statement with uncomplete keyword', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 5, endLine: 5 });
        const { isStatementBeginning } = postgreSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 1,
            column: 10,
        });
        expect(isStatementBeginning).toBeFalsy();
    });

    test('not beginning of statement with complete keyword', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 7, endLine: 7 });
        const { isStatementBeginning } = postgreSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 1,
            column: 12,
        });
        expect(isStatementBeginning).toBeFalsy();
    });

    test('not beginning of statement if type white space after keyword', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 9, endLine: 9 });
        const { isStatementBeginning } = postgreSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 1,
            column: 8,
        });
        expect(isStatementBeginning).toBeFalsy();
    });

    test('beginning of statement after an exists statement', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 11, endLine: 12 });
        const { isStatementBeginning } = postgreSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 2,
            column: 4,
        });
        expect(isStatementBeginning).toBeTruthy();
    });

    test('beginning of statement after an exists statement and typed white space', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 14, endLine: 15 });
        const { isStatementBeginning } = postgreSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 2,
            column: 2,
        });
        expect(isStatementBeginning).toBeTruthy();
    });

    test('not beginning of statement if previous statement exists error', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 17, endLine: 18 });
        const { isStatementBeginning } = postgreSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 2,
            column: 4,
        });
        expect(isStatementBeginning).toBeFalsy();
    });

    test('beginning of statement if previous token text is semicolon even if has error', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 20, endLine: 20 });
        // typed keyword
        const ctx1 = postgreSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 1,
            column: 13,
        });
        expect(ctx1.isStatementBeginning).toBeTruthy();

        // typed white space
        const ctx2 = postgreSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 1,
            column: 9,
        });
        expect(ctx2.isStatementBeginning).toBeTruthy();
    });

    test('beginning of statement between two statement', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 22, endLine: 24 });
        const { isStatementBeginning } = postgreSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 2,
            column: 4,
        });
        expect(isStatementBeginning).toBeTruthy();
    });

    test('not beginning of statement between two statement', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 26, endLine: 28 });
        const { isStatementBeginning } = postgreSql.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 2,
            column: 12,
        });
        expect(isStatementBeginning).toBeFalsy();
    });

    test('test sqlSplitStrategy', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 30, endLine: 31 });
        const { isStatementBeginning: isStatementBeginning1 } =
            postgreSql.getSemanticContextAtCaretPosition(
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
            postgreSql.getSemanticContextAtCaretPosition(
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
