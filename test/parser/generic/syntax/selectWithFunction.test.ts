import { GenericSQL } from 'src/parser/generic';
import { readSQL } from 'test/helper';

const features = {
    selectWithFunction: readSQL(__dirname, 'select_with_function.sql'),
};

describe('GenericSQL Select with Function Syntax Tests', () => {
    const parser = new GenericSQL();

    features.selectWithFunction.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
