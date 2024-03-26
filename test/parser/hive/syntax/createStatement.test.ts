import { HiveSQL } from 'src/parser/hive';
import { readSQL } from 'test/helper';

const hive = new HiveSQL();

const features = {
    databases: readSQL(__dirname, 'createDatabase.sql'),
    tables: readSQL(__dirname, 'createTable.sql'),
    views: readSQL(__dirname, 'createView.sql'),
    functions: readSQL(__dirname, 'createFunction.sql'),
    roles: readSQL(__dirname, 'createRole.sql'),
    indexes: readSQL(__dirname, 'createIndex.sql'),
    macros: readSQL(__dirname, 'createMacro.sql'),
    connectors: readSQL(__dirname, 'createConnector.sql'),
    scheduledQueries: readSQL(__dirname, 'createScheduledQuery.sql'),
};

describe('HiveSQL Create Syntax Tests', () => {
    describe('CREATE DATABASE', () => {
        features.databases.forEach((database) => {
            it(database, () => {
                expect(hive.validate(database).length).toBe(0);
            });
        });
    });

    describe('CREATE TABLE', () => {
        features.tables.forEach((table) => {
            it(table, () => {
                expect(hive.validate(table).length).toBe(0);
            });
        });
    });

    describe('CREATE VIEW', () => {
        features.views.forEach((view) => {
            it(view, () => {
                expect(hive.validate(view).length).toBe(0);
            });
        });
    });

    describe('CREATE FUNCTION', () => {
        features.functions.forEach((func) => {
            it(func, () => {
                expect(hive.validate(func).length).toBe(0);
            });
        });
    });

    describe('CREATE ROLE', () => {
        features.roles.forEach((role) => {
            it(role, () => {
                expect(hive.validate(role).length).toBe(0);
            });
        });
    });

    describe('CREATE INDEX', () => {
        features.indexes.forEach((index) => {
            it(index, () => {
                expect(hive.validate(index).length).toBe(0);
            });
        });
    });

    describe('CREATE MACRO', () => {
        features.macros.forEach((macro) => {
            it(macro, () => {
                expect(hive.validate(macro).length).toBe(0);
            });
        });
    });

    describe('CREATE CONNECTOR', () => {
        features.connectors.forEach((cnctor) => {
            it(cnctor, () => {
                expect(hive.validate(cnctor).length).toBe(0);
            });
        });
    });

    describe('CREATE SCHEDULE QUERY', () => {
        features.scheduledQueries.forEach((sq) => {
            it(sq, () => {
                expect(hive.validate(sq).length).toBe(0);
            });
        });
    });
});
