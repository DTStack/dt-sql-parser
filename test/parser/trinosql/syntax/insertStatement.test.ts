import TrinoSQL from '../../../../src/parser/trinosql';
import { readSQL } from '../../../helper';

const features = {
    insertIntoTable: readSQL(__dirname, 'insert_into.sql'),
};

describe('TrinoSQL Insert Statements Syntax Tests', () => {
    const parser = new TrinoSQL();
    features.insertIntoTable.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
