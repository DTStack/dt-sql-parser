import { GenericSQL } from 'src/parser/generic';

const randomText = `dhsdansdnkla ndjnsla ndnalks`;
const unCompleteSQL = `CREATE TABLE`;

describe('GenericSQL validate invalid sql', () => {
    const parser = new GenericSQL();

    test('validate random text', () => {
        expect(parser.validate(randomText).length).not.toBe(0);
    });

    test('validate unComplete sql', () => {
        expect(parser.validate(unCompleteSQL).length).not.toBe(0);
    });
});
