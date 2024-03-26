import FlinkSQL from 'src/parser/flink';
import { readSQL } from 'test/helper';

const parser = new FlinkSQL();

const features = {
    table: readSQL(__dirname, 'createTable.sql'),
    catalog: readSQL(__dirname, 'createCatalog.sql'),
    database: readSQL(__dirname, 'createDatabase.sql'),
    view: readSQL(__dirname, 'createView.sql'),
    function: readSQL(__dirname, 'createFunction.sql'),
};

describe('FlinkSQL Create Syntax Tests', () => {
    describe('CREATE TABLE', () => {
        features.table.forEach((table) => {
            it(table, () => {
                expect(parser.validate(table).length).toBe(0);
            });
        });
    });
    describe('CREATE CATALOG', () => {
        features.catalog.forEach((catalog) => {
            it(catalog, () => {
                expect(parser.validate(catalog).length).toBe(0);
            });
        });
    });
    describe('CREATE DATABASE', () => {
        features.database.forEach((database) => {
            it(database, () => {
                expect(parser.validate(database).length).toBe(0);
            });
        });
    });
    describe('CREATE VIEW', () => {
        features.view.forEach((view) => {
            it(view, () => {
                expect(parser.validate(view).length).toBe(0);
            });
        });
    });
    describe('CREATE FUNCTION', () => {
        features.function.forEach((func) => {
            it(func, () => {
                expect(parser.validate(func).length).toBe(0);
            });
        });
    });
});
