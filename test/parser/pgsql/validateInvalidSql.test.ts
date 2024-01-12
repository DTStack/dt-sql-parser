import { PostgresSQL } from '../../filters';

const randomText = `dhsdansdnkla ndjnsla ndnalks`;
const unCompleteSQL = `CREATE TABLE`;

describe('Postgres SQL validate invalid sql', () => {
    const parser = new PostgresSQL();

    test('validate random text', () => {
        expect(parser.validate(randomText).length).not.toBe(0);
    });

    test('validate unComplete sql', () => {
        expect(parser.validate(unCompleteSQL).length).not.toBe(0);
    });
});
