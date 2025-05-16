import { Sql } from 'src/parser/sql';

const randomText = `dhsdansdnkla ndjnsla ndnalks`;
const unCompleteSQL = `CREATE TABLE`;

describe('Sql validate invalid sql', () => {
    const sql = new Sql();

    test('validate random text', () => {
        expect(sql.validate(randomText).length).not.toBe(0);
    });

    test('validate unComplete sql', () => {
        expect(sql.validate(unCompleteSQL).length).not.toBe(0);
    });
});
