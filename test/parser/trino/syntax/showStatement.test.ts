import TrinoSQL from 'src/parser/trino';
import { readSQL } from 'test/helper';

const features = {
    tables: readSQL(__dirname, 'show_tables.sql'),
    catalogs: readSQL(__dirname, 'show_catalogs.sql'),
    columns: readSQL(__dirname, 'show_columns.sql'),
    functions: readSQL(__dirname, 'show_functions.sql'),
    grants: readSQL(__dirname, 'show_grants.sql'),
    roleGrants: readSQL(__dirname, 'show_role_grants.sql'),
    roles: readSQL(__dirname, 'show_roles.sql'),
    schemas: readSQL(__dirname, 'show_schemas.sql'),
    session: readSQL(__dirname, 'show_session.sql'),
    statsForQuery: readSQL(__dirname, 'show_stats_for_query.sql'),
    stats: readSQL(__dirname, 'show_stats.sql'),
    create: readSQL(__dirname, 'show_create.sql'),
};

describe('TrinoSQL Show Statements Syntax Tests', () => {
    const parser = new TrinoSQL();
    // show statements
    features.tables.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
    features.catalogs.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
    features.columns.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
    features.functions.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
    features.grants.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
    features.roleGrants.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
    features.roles.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
    features.schemas.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
    features.session.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
    features.statsForQuery.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
    features.stats.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
