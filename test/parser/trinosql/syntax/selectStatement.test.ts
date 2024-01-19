import TrinoSQL from 'src/parser/trinosql';
import { readSQL } from 'test/helper';

const features = {
    select: readSQL(__dirname, 'select.sql'),
    selectWithClause: readSQL(__dirname, 'select_with_clause.sql'),
    selectWithSetOperations: readSQL(__dirname, 'select_with_set_operations.sql'),
    selectWithSubQueries: readSQL(__dirname, 'select_with_sub_queries.sql'),
    selectWithTableSample: readSQL(__dirname, 'select_with_table_sample.sql'),
    selectWithRowType: readSQL(__dirname, 'select_with_row_type.sql'),
    selectWithOffset: readSQL(__dirname, 'select_with_offset.sql'),
    selectWithJoin: readSQL(__dirname, 'select_with_join.sql'),
    selectWithFetch: readSQL(__dirname, 'select_with_fetch.sql'),
    selectWithUNNEST: readSQL(__dirname, 'select_with_ unnest.sql'),
    selectWithExists: readSQL(__dirname, 'select_with_exists.sql'),
    selectWithUnion: readSQL(__dirname, 'select_with_union.sql'),
};

describe('TrinoSQL Select Statements Syntax Tests', () => {
    const parser = new TrinoSQL();
    features.select.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
    features.selectWithClause.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
    features.selectWithSetOperations.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });

    features.selectWithSubQueries.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
    features.selectWithTableSample.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
    features.selectWithRowType.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
    features.selectWithOffset.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
    features.selectWithJoin.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
    features.selectWithFetch.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
    features.selectWithUNNEST.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
    features.selectWithExists.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
    features.selectWithUnion.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
