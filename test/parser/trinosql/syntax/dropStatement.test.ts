import { TrinoSQL } from '../../../filters';
import { readSQL } from '../../../helper';

const features = {
    table: readSQL(__dirname, 'drop_table.sql'),
    view: readSQL(__dirname, 'drop_view.sql'),
    schema: readSQL(__dirname, 'drop_schema.sql'),
    role: readSQL(__dirname, 'drop_role.sql'),
    column: readSQL(__dirname, 'drop_column.sql'),
    materializedView: readSQL(__dirname, 'drop_materialized_view.sql'),
};

describe('TrinoSQL Drop Statements Syntax Tests', () => {
    const parser = new TrinoSQL();
    features.table.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
    features.view.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
    features.schema.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });

    features.column.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
    features.role.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
    features.materializedView.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
