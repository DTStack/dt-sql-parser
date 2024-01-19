import ImpalaSQL from 'src/parser/impala';
import { readSQL } from 'test/helper';

const parser = new ImpalaSQL();

const features = {
    tables: readSQL(__dirname, 'alter_table.sql'),
    dbs: readSQL(__dirname, 'alter_db.sql'),
    views: readSQL(__dirname, 'alter_view.sql'),
};

describe('ImpalaSQL Alter Syntax Tests', () => {
    describe('ALTER TABLE', () => {
        features.tables.forEach((db) => {
            it(db, () => {
                expect(parser.validate(db).length).toBe(0);
            });
        });
    });
    describe('ALTER DATABASE', () => {
        features.dbs.forEach((db) => {
            it(db, () => {
                expect(parser.validate(db).length).toBe(0);
            });
        });
    });
    describe('ALTER VIEW', () => {
        features.views.forEach((db) => {
            it(db, () => {
                expect(parser.validate(db).length).toBe(0);
            });
        });
    });
});
