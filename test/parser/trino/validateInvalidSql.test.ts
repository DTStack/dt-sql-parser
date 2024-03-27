import { TrinoSQL } from 'src/parser/trino';

const randomText = `dhsdansdnkla ndjnsla ndnalks`;
const unCompleteSQL = `CREATE TABLE`;

describe('Trino SQL validate invalid sql', () => {
    const trino = new TrinoSQL();

    test('validate random text', () => {
        expect(trino.validate(randomText).length).not.toBe(0);
    });

    test('validate unComplete sql', () => {
        expect(trino.validate(unCompleteSQL).length).not.toBe(0);
    });
});
