import ImpalaSQL from '../../../../src/parser/impala';
import { readSQL } from '../../../helper';

const parser = new ImpalaSQL();

const features = {
    tables: readSQL(__dirname, 'alter_table.sql'),
};

describe('ImpalaSQL Alter Syntax Tests', () => {
    describe('ALTER TABLE', () => {
        features.tables.forEach((db) => {
            it(db, () => {
                expect(parser.validate(db).length).toBe(0);
            });
        });
    });
});
