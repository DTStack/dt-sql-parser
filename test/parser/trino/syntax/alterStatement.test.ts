import { TrinoSQL } from 'src/parser/trino';
import { readSQL } from 'test/helper';

const features = {
    table: readSQL(__dirname, 'alter_table.sql'),
    view: readSQL(__dirname, 'alter_view.sql'),
    schema: readSQL(__dirname, 'alter_schema.sql'),
    materializedView: readSQL(__dirname, 'alter_materialized_view.sql'),
};

describe('TrinoSQL Alter Statements Syntax Tests', () => {
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
    features.materializedView.forEach((sql) => {
        it(sql, () => {
            expect(trino.validate(sql).length).toBe(0);
        });
    });
});
