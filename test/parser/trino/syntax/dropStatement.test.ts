import { TrinoSQL } from 'src/parser/trino';
import { readSQL } from 'test/helper';

const features = {
    table: readSQL(__dirname, 'drop_table.sql'),
    view: readSQL(__dirname, 'drop_view.sql'),
    schema: readSQL(__dirname, 'drop_schema.sql'),
    role: readSQL(__dirname, 'drop_role.sql'),
    column: readSQL(__dirname, 'drop_column.sql'),
    materializedView: readSQL(__dirname, 'drop_materialized_view.sql'),
    catalog: readSQL(__dirname, 'drop_catalog.sql'),
    function: readSQL(__dirname, 'drop_function.sql'),
};

describe('TrinoSQL Drop Statements Syntax Tests', () => {
    const trino = new TrinoSQL();
    features.table.forEach((sql) => {
        it(sql, () => {
            expect(trino.validate(sql).length).toBe(0);
        });
    });
    features.view.forEach((sql) => {
        it(sql, () => {
            expect(trino.validate(sql).length).toBe(0);
        });
    });
    features.schema.forEach((sql) => {
        it(sql, () => {
            expect(trino.validate(sql).length).toBe(0);
        });
    });

    features.column.forEach((sql) => {
        it(sql, () => {
            expect(trino.validate(sql).length).toBe(0);
        });
    });
    features.role.forEach((sql) => {
        it(sql, () => {
            expect(trino.validate(sql).length).toBe(0);
        });
    });
    features.materializedView.forEach((sql) => {
        it(sql, () => {
            expect(trino.validate(sql).length).toBe(0);
        });
    });
    features.catalog.forEach((sql) => {
        it(sql, () => {
            expect(trino.validate(sql).length).toBe(0);
        });
    });
    features.function.forEach((sql) => {
        it(sql, () => {
            expect(trino.validate(sql).length).toBe(0);
        });
    });
});
