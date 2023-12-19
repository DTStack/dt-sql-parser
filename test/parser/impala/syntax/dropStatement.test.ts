import { ImpalaSQL } from '../../../filters';
import { readSQL } from '../../../helper';

const parser = new ImpalaSQL();

const features = {
    dbs: readSQL(__dirname, 'drop_db.sql'),
    functions: readSQL(__dirname, 'drop_function.sql'),
    roles: readSQL(__dirname, 'drop_role.sql'),
    stats: readSQL(__dirname, 'drop_stats.sql'),
    tables: readSQL(__dirname, 'drop_table.sql'),
    views: readSQL(__dirname, 'drop_view.sql'),
};

describe('ImpalaSQL Drop Syntax Tests', () => {
    describe('DROP DATABASE', () => {
        features.dbs.forEach((db) => {
            it(db, () => {
                expect(parser.validate(db).length).toBe(0);
            });
        });
    });
    describe('DROP FUNCTION', () => {
        features.functions.forEach((db) => {
            it(db, () => {
                expect(parser.validate(db).length).toBe(0);
            });
        });
    });
    describe('DROP ROLE', () => {
        features.roles.forEach((db) => {
            it(db, () => {
                expect(parser.validate(db).length).toBe(0);
            });
        });
    });
    describe('DROP STATS', () => {
        features.stats.forEach((db) => {
            it(db, () => {
                expect(parser.validate(db).length).toBe(0);
            });
        });
    });
    describe('DROP TABLE', () => {
        features.tables.forEach((db) => {
            it(db, () => {
                expect(parser.validate(db).length).toBe(0);
            });
        });
    });
    describe('DROP VIEW', () => {
        features.views.forEach((db) => {
            it(db, () => {
                expect(parser.validate(db).length).toBe(0);
            });
        });
    });
});
