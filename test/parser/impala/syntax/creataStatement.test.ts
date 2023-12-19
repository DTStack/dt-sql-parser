import { ImpalaSQL } from '../../../filters';
import { readSQL } from '../../../helper';

const parser = new ImpalaSQL();

const features = {
    dbs: readSQL(__dirname, 'create_db.sql'),
    functions: readSQL(__dirname, 'create_function.sql'),
    roles: readSQL(__dirname, 'create_role.sql'),
    tables: readSQL(__dirname, 'create_table.sql'),
    views: readSQL(__dirname, 'create_view.sql'),
};

describe('ImpalaSQL Create Syntax Tests', () => {
    describe('CREATE DB', () => {
        features.dbs.forEach((db) => {
            it(db, () => {
                expect(parser.validate(db).length).toBe(0);
            });
        });
    });
    describe('CREATE FUNCTION', () => {
        features.functions.forEach((db) => {
            it(db, () => {
                expect(parser.validate(db).length).toBe(0);
            });
        });
    });
    describe('CREATE ROLE', () => {
        features.roles.forEach((db) => {
            it(db, () => {
                expect(parser.validate(db).length).toBe(0);
            });
        });
    });
    describe('CREATE TABLE', () => {
        features.tables.forEach((db) => {
            it(db, () => {
                expect(parser.validate(db).length).toBe(0);
            });
        });
    });
    describe('CREATE VIEW', () => {
        features.views.forEach((db) => {
            it(db, () => {
                expect(parser.validate(db).length).toBe(0);
            });
        });
    });
});
