import { GenericSQL } from 'src/parser/generic';

describe('GenericSQL Error Listener Tests', () => {
    const genericSQL = new GenericSQL();

    describe('Syntax Errors', () => {
        it('should detect random text', () => {
            const sql = 'dhsdansdnkla ndjnsla ndnalks';
            const errors = genericSQL.validate(sql);
            expect(errors.length).toBeGreaterThan(0);
        });

        it('should detect invalid syntax', () => {
            const sql = 'SELECT FROM';
            const errors = genericSQL.validate(sql);
            expect(errors.length).toBeGreaterThan(0);
        });

        it('should detect incomplete statement', () => {
            const sql = 'SELECT * FROM';
            const errors = genericSQL.validate(sql);
            expect(errors.length).toBeGreaterThan(0);
        });
    });

    describe('Error Recovery', () => {
        it('should recover from errors and continue parsing', () => {
            const sql = 'SELECT * FROM users; INVALID SYNTAX; SELECT 1';
            const errors = genericSQL.validate(sql);
            expect(errors.length).toBeGreaterThan(0);
        });
    });

    describe('Error Message Format', () => {
        it('should have proper error structure', () => {
            const sql = 'INVALID_TOKEN_xyz FROM';
            const errors = genericSQL.validate(sql);
            expect(errors.length).toBeGreaterThan(0);
            const error = errors[0];
            expect(error).toHaveProperty('startLine');
            expect(error).toHaveProperty('endLine');
            expect(error).toHaveProperty('startColumn');
            expect(error).toHaveProperty('endColumn');
            expect(error).toHaveProperty('message');
            expect(typeof error.message).toBe('string');
            expect(error.message.length).toBeGreaterThan(0);
        });
    });

    describe('Locale Support', () => {
        it('should return error messages in English by default', () => {
            const sql = 'xyzabc123 invalid';
            const errors = genericSQL.validate(sql);
            expect(errors.length).toBeGreaterThan(0);
            expect(errors[0].message).toContain('is not valid at this position');
        });

        it('should return error messages in Chinese when locale is zh_CN', () => {
            genericSQL.locale = 'zh_CN';
            const sql = 'unique_test_token invalid';
            const errors = genericSQL.validate(sql);
            expect(errors.length).toBeGreaterThan(0);
            expect(errors[0].message).toContain('在此位置无效');
            genericSQL.locale = 'en_US';
        });
    });
});
