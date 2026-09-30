import { PostgreSQL } from 'src/parser/postgresql';

const randomText = `dhsdansdnkla ndjnsla ndnalks`;
const unCompleteSQL = `CREATE TABLE`;

describe('Postgres SQL validate invalid sql', () => {
    const postgresql = new PostgreSQL();

    test('validate random text', () => {
        expect(postgresql.validate(randomText).length).not.toBe(0);
    });

    test('validate unComplete sql', () => {
        expect(postgresql.validate(unCompleteSQL).length).not.toBe(0);
    });

    test('plain JOIN without ON or USING is invalid', () => {
        expect(postgresql.validate('SELECT * FROM a JOIN b').length).not.toBe(0);
        expect(postgresql.validate('SELECT * FROM a JOIN b ON a.id = b.id').length).toBe(0);
    });
});
