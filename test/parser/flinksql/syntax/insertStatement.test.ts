import FlinkSQL from '../../../../src/parser/flinksql';
import { readSQL } from '../../../helper';


const parser = new FlinkSQL();

const features = {
    InsertFromSelectQueries: readSQL(__dirname, 'insertFromSelectQueries.sql'),
    InsertValuesIntoTable: readSQL(__dirname, 'insertValuesIntoTable.sql'),
    InsertMultipleTable: readSQL(__dirname, 'insertMultipleTable.sql')
};

describe('FlinkSQL Insert Syntax Tests', () => {
    features.InsertFromSelectQueries.forEach((insertFromSelectQueries) => {
        it(insertFromSelectQueries, () => {
            expect(parser.validate(insertFromSelectQueries).length).toBe(0);
        });
    });
    features.InsertValuesIntoTable.forEach((insertValuesIntoTable) => {
        it(insertValuesIntoTable, () => {
            expect(parser.validate(insertValuesIntoTable).length).toBe(0);
        });
    });
    features.InsertMultipleTable.forEach((insertMultipleTable) => {
        it(insertMultipleTable, () => {
            expect(parser.validate(insertMultipleTable).length).toBe(0);
        });
    });
});
