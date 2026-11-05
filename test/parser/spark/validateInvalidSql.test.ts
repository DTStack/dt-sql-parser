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

    test('validate unquoted hyphenated identifiers', () => {
        expect(spark.validate('CREATE DATABASE test-db;').length).not.toBe(0);
        expect(spark.validate('CREATE TABLE test-tbl (id-col INT);').length).not.toBe(0);
        expect(spark.validate('SELECT * FROM test-tbl;').length).not.toBe(0);
    });
});
