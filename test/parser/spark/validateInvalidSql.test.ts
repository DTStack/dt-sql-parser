import { SparkSQL } from 'src/parser/spark';

const randomText = `dhsdansdnkla ndjnsla ndnalks`;
const unCompleteSQL = `CREATE TABLE`;

describe('Spark SQL validate invalid sql', () => {
    const spark = new SparkSQL();

    test('validate random text', () => {
        expect(spark.validate(randomText).length).not.toBe(0);
    });

    test('validate unComplete sql', () => {
        expect(spark.validate(unCompleteSQL).length).not.toBe(0);
    });
});
