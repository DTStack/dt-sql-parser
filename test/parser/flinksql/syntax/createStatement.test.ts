import FlinkSQL from '../../../../src/parser/flinksql';
import fs from 'fs';
import path from 'path';

const parser = new FlinkSQL();

const readSQL = (fileName: string) =>
    fs
        .readFileSync(path.join(__dirname, 'fixtures', fileName), 'utf-8')
        .split(';')
        .filter(Boolean)
        .map((i) => i.trim());

const features = {
    table: readSQL('createTable.sql'),
    catalog: readSQL('createCatalog.sql'),
    database: readSQL('createDatabase.sql'),
    view: readSQL('createView.sql'),
    function: readSQL('createFunction.sql'),
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
