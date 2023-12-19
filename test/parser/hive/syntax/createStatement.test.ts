import { HiveSQL } from '../../../filters';
import { readSQL } from '../../../helper';

const parser = new HiveSQL();

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
                expect(parser.validate(database).length).toBe(0);
            });
        });
    });

    describe('CREATE TABLE', () => {
        features.tables.forEach((table) => {
            it(table, () => {
                expect(parser.validate(table).length).toBe(0);
            });
        });
    });

    describe('CREATE VIEW', () => {
        features.views.forEach((view) => {
            it(view, () => {
                expect(parser.validate(view).length).toBe(0);
            });
        });
    });

    describe('CREATE FUNCTION', () => {
        features.functions.forEach((func) => {
            it(func, () => {
                expect(parser.validate(func).length).toBe(0);
            });
        });
    });

    describe('CREATE ROLE', () => {
        features.roles.forEach((role) => {
            it(role, () => {
                expect(parser.validate(role).length).toBe(0);
            });
        });
    });

    describe('CREATE INDEX', () => {
        features.indexes.forEach((index) => {
            it(index, () => {
                expect(parser.validate(index).length).toBe(0);
            });
        });
    });

    describe('CREATE MACRO', () => {
        features.macros.forEach((macro) => {
            it(macro, () => {
                expect(parser.validate(macro).length).toBe(0);
            });
        });
    });

    describe('CREATE CONNECTOR', () => {
        features.connectors.forEach((cnctor) => {
            it(cnctor, () => {
                expect(parser.validate(cnctor).length).toBe(0);
            });
        });
    });

    describe('CREATE SCHEDULE QUERY', () => {
        features.scheduledQueries.forEach((sq) => {
            it(sq, () => {
                expect(parser.validate(sq).length).toBe(0);
            });
        });
    });
});
