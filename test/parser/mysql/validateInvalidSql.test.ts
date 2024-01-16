import { MySQL } from '../../filters';

const randomText = `dhsdansdnkla ndjnsla ndnalks`;
const unCompleteSQL = `CREATE TABLE`;

describe('MySQL validate invalid sql', () => {
    const parser = new MySQL();

    test('validate random text', () => {
        expect(parser.validate(randomText).length).not.toBe(0);
    });

    test('validate unComplete sql', () => {
        expect(parser.validate(unCompleteSQL).length).not.toBe(0);
    });
});
