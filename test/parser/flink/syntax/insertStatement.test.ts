import { FlinkSQL } from 'src/parser/flink';
import { readSQL } from 'test/helper';

const flink = new FlinkSQL();

const features = {
    InsertFromSelectQueries: readSQL(__dirname, 'insertFromSelectQueries.sql'),
    InsertValuesIntoTable: readSQL(__dirname, 'insertValuesIntoTable.sql'),
    InsertMultipleTable: readSQL(__dirname, 'insertMultipleTable.sql'),
};

describe('FlinkSQL Insert Syntax Tests', () => {
    features.InsertFromSelectQueries.forEach((insertFromSelectQueries) => {
        it(insertFromSelectQueries, () => {
            expect(flink.validate(insertFromSelectQueries).length).toBe(0);
        });
    });
    features.InsertValuesIntoTable.forEach((insertValuesIntoTable) => {
        it(insertValuesIntoTable, () => {
            expect(flink.validate(insertValuesIntoTable).length).toBe(0);
        });
    });
    features.InsertMultipleTable.forEach((insertMultipleTable) => {
        it(insertMultipleTable, () => {
            expect(flink.validate(insertMultipleTable).length).toBe(0);
        });
    });
});
