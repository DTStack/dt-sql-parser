import { HiveSQL } from 'src/parser/hive';

const randomText = `dhsdansdnkla ndjnsla ndnalks`;
const unCompleteSQL = `CREATE TABLE`;

describe('Hive SQL validate invalid sql', () => {
    const hive = new HiveSQL();

    test('validate random text', () => {
        expect(hive.validate(randomText).length).not.toBe(0);
    });

    test('validate unComplete sql', () => {
        expect(hive.validate(unCompleteSQL).length).not.toBe(0);
    });
});
