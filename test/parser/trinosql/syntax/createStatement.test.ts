import TrinoSQL from '../../../../src/parser/trinosql';
import { readSQL } from '../../../helper';

const features = {
    table: readSQL(__dirname, 'create_table.sql'),
    view: readSQL(__dirname, 'create_view.sql'),
    schema: readSQL(__dirname, 'create_schema.sql'),
    role: readSQL(__dirname, 'create_role.sql'),
    tableAsSelect: readSQL(__dirname, 'create_table_as_select.sql'),
    materializedView: readSQL(__dirname, 'create_materialized_view.sql'),
};

describe('TrinoSQL Create Statements Syntax Tests', () => {
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

    features.tableAsSelect.forEach((sql) => {
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
