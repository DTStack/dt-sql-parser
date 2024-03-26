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
});
