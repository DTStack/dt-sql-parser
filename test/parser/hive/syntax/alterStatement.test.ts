import HiveSQL from 'src/parser/hive';
import { readSQL } from 'test/helper';

const parser = new HiveSQL();

const features = {
    databases: readSQL(__dirname, 'alterDatabase.sql'),
    connectors: readSQL(__dirname, 'alterConnector.sql'),
    tables: readSQL(__dirname, 'alterTable.sql'),
    indexes: readSQL(__dirname, 'alterIndex.sql'),
    views: readSQL(__dirname, 'alterView.sql'),
    scheduleQueries: readSQL(__dirname, 'alterScheduleQuery.sql'),
};

describe('HiveSQL Alter Syntax Tests', () => {
    describe('ALTER DATABASE', () => {
        features.databases.forEach((db) => {
            it(db, () => {
                expect(parser.validate(db).length).toBe(0);
            });
        });
    });

    describe('ALTER CONNECTOR', () => {
        features.connectors.forEach((ctors) => {
            it(ctors, () => {
                expect(parser.validate(ctors).length).toBe(0);
            });
        });
    });

    describe('ALTER TABLE', () => {
        features.tables.forEach((tb) => {
            it(tb, () => {
                expect(parser.validate(tb).length).toBe(0);
            });
        });
    });

    describe('ALTER INDEX', () => {
        features.indexes.forEach((index) => {
            it(index, () => {
                expect(parser.validate(index).length).toBe(0);
            });
        });
    });

    describe('ALTER VIEW', () => {
        features.views.forEach((view) => {
            it(view, () => {
                expect(parser.validate(view).length).toBe(0);
            });
        });
    });

    describe('ALTER SCHEDULE QUERY', () => {
        features.scheduleQueries.forEach((sq) => {
            it(sq, () => {
                expect(parser.validate(sq).length).toBe(0);
            });
        });
    });
});
