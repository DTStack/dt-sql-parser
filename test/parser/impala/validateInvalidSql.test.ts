import { ImpalaSQL } from 'src/parser/impala';

const randomText = `dhsdansdnkla ndjnsla ndnalks`;
const unCompleteSQL = `CREATE TABLE`;

describe('Impala SQL validate invalid sql', () => {
    const impala = new ImpalaSQL();

    test('validate random text', () => {
        expect(impala.validate(randomText).length).not.toBe(0);
    });

    test('validate unComplete sql', () => {
        expect(impala.validate(unCompleteSQL).length).not.toBe(0);
    });
});
