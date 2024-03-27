import { MySQL } from 'src/parser/mysql';

const randomText = `dhsdansdnkla ndjnsla ndnalks`;
const unCompleteSQL = `CREATE TABLE`;

describe('MySQL validate invalid sql', () => {
    const mysql = new MySQL();

    test('validate random text', () => {
        expect(mysql.validate(randomText).length).not.toBe(0);
    });

    test('validate unComplete sql', () => {
        expect(mysql.validate(unCompleteSQL).length).not.toBe(0);
    });
});
