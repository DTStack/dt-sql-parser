import { MySQL } from '../../filters';

describe('MySQL Syntax Tests', () => {
    const parser = new MySQL();

    test('Select Statement', () => {
        const sql = 'select id,name from user1;';
        const result = parser.validate(sql);

        expect(result.length).toBe(0);
    });

    test('Select 1+1', () => {
        const sql = 'SELECT 1+1;';
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });

    test('Test invalid Double Line Comment statement', () => {
        let sql = `-test comment\n`;
        let result = parser.validate(sql);
        expect(result.length).toBe(1);
    });

    test('Test valid Double Line Comment statement', () => {
        const sql = `----test comment\n`;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });

    test('Test valid Hash Sign Line Comment statement', () => {
        const sql = `#test comment\n`;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
});
