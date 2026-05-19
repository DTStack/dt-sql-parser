import fs from 'fs';
import path from 'path';
import { GenericSQL } from 'src/parser/generic';
import { readSQLByRange } from 'test/helper';

describe('GenericSQL semantic context collector tests', () => {
    const parser = new GenericSQL();
    const text = fs.readFileSync(path.join(__dirname, 'fixtures', 'semantic.sql'), 'utf-8');

    test('beginning of statement with uncomplete keyword', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 1, endLine: 1 });
        const { isStatementBeginning } = parser.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 1,
            column: 5,
        });
        expect(isStatementBeginning).toBeTruthy();
    });

    test('beginning of statement with complete keyword', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 3, endLine: 3 });
        const { isStatementBeginning } = parser.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 1,
            column: 7,
        });
        expect(isStatementBeginning).toBeTruthy();
    });

    test('not beginning of statement with uncomplete keyword', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 5, endLine: 5 });
        const { isStatementBeginning } = parser.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 1,
            column: 22,
        });
        expect(isStatementBeginning).toBeFalsy();
    });

    test('not beginning of statement with complete keyword', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 7, endLine: 7 });
        const { isStatementBeginning } = parser.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 1,
            column: 18,
        });
        expect(isStatementBeginning).toBeFalsy();
    });

    test('not beginning of statement if type white space after keyword', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 9, endLine: 9 });
        const { isStatementBeginning } = parser.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 1,
            column: 8,
        });
        expect(isStatementBeginning).toBeFalsy();
    });

    test('beginning of statement after an exists statement', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 11, endLine: 12 });
        const { isStatementBeginning } = parser.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 2,
            column: 4,
        });
        expect(isStatementBeginning).toBeTruthy();
    });

    test('beginning of statement after an exists statement and typed white space', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 14, endLine: 15 });
        const { isStatementBeginning } = parser.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 2,
            column: 2,
        });
        expect(isStatementBeginning).toBeTruthy();
    });

    test('not beginning of statement if previous statement exists error', () => {
        const sql = readSQLByRange({ sql: text }, { startLine: 17, endLine: 18 });
        const { isStatementBeginning } = parser.getSemanticContextAtCaretPosition(sql, {
            lineNumber: 2,
            column: 4,
        });
        expect(isStatementBeginning).toBeFalsy();
    });
});
