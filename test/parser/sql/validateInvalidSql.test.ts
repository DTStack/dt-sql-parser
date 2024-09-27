import { SQL } from 'src/parser/sql';

const randomText = `dhsdansdnkla ndjnsla ndnalks`;
const unCompleteSQL = `CREATE TABLE`;

describe('SQL validate invalid sql', () => {
    const sql = new SQL();

    test('validate random text', () => {
        expect(sql.validate(randomText).length).not.toBe(0);
    });

    test('validate unComplete sql', () => {
        expect(sql.validate(unCompleteSQL).length).not.toBe(0);
    });
});
