import { GenericSQL } from 'src/parser/generic';

describe('GenericSQL Lexer Tests', () => {
    const parser = new GenericSQL();

    describe('Keywords', () => {
        it('should recognize SELECT keyword', () => {
            const sql = 'SELECT';
            const tokens = parser.getAllTokens(sql);
            expect(tokens.length).toBeGreaterThan(0);
            expect(tokens[0].text).toBe('SELECT');
        });

        it('should recognize INSERT keyword', () => {
            const sql = 'INSERT';
            const tokens = parser.getAllTokens(sql);
            expect(tokens.length).toBeGreaterThan(0);
            expect(tokens[0].text).toBe('INSERT');
        });

        it('should recognize UPDATE keyword', () => {
            const sql = 'UPDATE';
            const tokens = parser.getAllTokens(sql);
            expect(tokens.length).toBeGreaterThan(0);
            expect(tokens[0].text).toBe('UPDATE');
        });

        it('should recognize DELETE keyword', () => {
            const sql = 'DELETE';
            const tokens = parser.getAllTokens(sql);
            expect(tokens.length).toBeGreaterThan(0);
            expect(tokens[0].text).toBe('DELETE');
        });
    });

    describe('Identifiers', () => {
        it('should recognize regular identifiers', () => {
            const sql = 'users';
            const tokens = parser.getAllTokens(sql);
            expect(tokens.length).toBeGreaterThan(0);
            expect(tokens[0].text).toBe('users');
        });

        it('should recognize quoted identifiers', () => {
            const sql = '"users"';
            const tokens = parser.getAllTokens(sql);
            expect(tokens.length).toBeGreaterThan(0);
            expect(tokens[0].text).toBe('"users"');
        });

        it('should recognize backtick identifiers', () => {
            const sql = '`users`';
            const tokens = parser.getAllTokens(sql);
            expect(tokens.length).toBeGreaterThan(0);
            expect(tokens[0].text).toBe('`users`');
        });
    });

    describe('Literals', () => {
        it('should recognize string literals', () => {
            const sql = "'hello'";
            const tokens = parser.getAllTokens(sql);
            expect(tokens.length).toBeGreaterThan(0);
            expect(tokens[0].text).toBe("'hello'");
        });

        it('should recognize integer literals', () => {
            const sql = '42';
            const tokens = parser.getAllTokens(sql);
            expect(tokens.length).toBeGreaterThan(0);
            expect(tokens[0].text).toBe('42');
        });

        it('should recognize decimal literals', () => {
            const sql = '3.14';
            const tokens = parser.getAllTokens(sql);
            expect(tokens.length).toBeGreaterThan(0);
            expect(tokens[0].text).toBe('3.14');
        });
    });

    describe('Operators', () => {
        it('should recognize comparison operators', () => {
            const sql = '= <> != < <= > >=';
            const tokens = parser.getAllTokens(sql);
            const nonWhitespace = tokens.filter((t) => t.text?.trim() !== '');
            expect(nonWhitespace.length).toBe(7);
        });

        it('should recognize arithmetic operators', () => {
            const sql = '+ - * / %';
            const tokens = parser.getAllTokens(sql);
            const nonWhitespace = tokens.filter((t) => t.text?.trim() !== '');
            expect(nonWhitespace.length).toBe(5);
        });
    });

    describe('Comments', () => {
        it('should recognize line comments', () => {
            const sql = '-- This is a comment\nSELECT';
            const tokens = parser.getAllTokens(sql);
            const nonWhitespace = tokens.filter((t) => t.text?.trim() !== '');
            expect(nonWhitespace.some((t) => t.text === 'SELECT')).toBe(true);
        });

        it('should recognize block comments', () => {
            const sql = '/* This is a block comment */ SELECT';
            const tokens = parser.getAllTokens(sql);
            const nonWhitespace = tokens.filter((t) => t.text?.trim() !== '');
            expect(nonWhitespace.some((t) => t.text === 'SELECT')).toBe(true);
        });
    });

    describe('Full SQL Tokenization', () => {
        it('should tokenize a simple SELECT statement', () => {
            const sql = 'SELECT * FROM table1';
            const tokens = parser.getAllTokens(sql);
            expect(tokens.length).toBe(7);
        });
    });
});
