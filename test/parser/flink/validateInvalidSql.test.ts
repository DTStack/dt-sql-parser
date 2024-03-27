import { FlinkSQL } from 'src/parser/flink';

const randomText = `dhsdansdnkla ndjnsla ndnalks`;
const unCompleteSQL = `CREATE TABLE`;

describe('Flink SQL validate invalid sql', () => {
    const flink = new FlinkSQL();

    test('validate random text', () => {
        expect(flink.validate(randomText).length).not.toBe(0);
    });

    test('validate unComplete sql', () => {
        expect(flink.validate(unCompleteSQL).length).not.toBe(0);
    });
});
