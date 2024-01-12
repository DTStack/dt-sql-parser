import { HiveSQL } from '../../filters';

const randomText = `dhsdansdnkla ndjnsla ndnalks`;
const unCompleteSQL = `CREATE TABLE`;

describe('Hive SQL validate invalid sql', () => {
    const parser = new HiveSQL();

    test('validate random text', () => {
        expect(parser.validate(randomText).length).not.toBe(0);
    });

    test('validate unComplete sql', () => {
        expect(parser.validate(unCompleteSQL).length).not.toBe(0);
    });
});
