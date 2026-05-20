import { GenericSQL } from 'src/parser/generic';
import { readSQL } from 'test/helper';

const features = {
    select: readSQL(__dirname, 'select.sql'),
    selectWithClause: readSQL(__dirname, 'select_with_clause.sql'),
    selectWithSetOperations: readSQL(__dirname, 'select_with_set_operations.sql'),
    selectWithSubQueries: readSQL(__dirname, 'select_with_sub_queries.sql'),
    selectWithJoin: readSQL(__dirname, 'select_with_join.sql'),
    selectWithExpression: readSQL(__dirname, 'select_with_expression.sql'),
};

describe('GenericSQL Select Statements Syntax Tests', () => {
    const parser = new GenericSQL();

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

    features.selectWithJoin.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });

    features.selectWithExpression.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
