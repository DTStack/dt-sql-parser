import { BasicSQL } from 'src/parser/basic';

const randomText = `dhsdansdnkla ndjnsla ndnalks`;
const unCompleteSQL = `CREATE TABLE`;

describe('Basic SQL validate invalid sql', () => {
    const basic = new BasicSQL();

    test('validate random text', () => {
        expect(basic.validate(randomText).length).not.toBe(0);
    });

    test('validate unComplete sql', () => {
        expect(basic.validate(unCompleteSQL).length).not.toBe(0);
    });
});
