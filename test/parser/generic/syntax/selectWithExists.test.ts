import { GenericSQL } from 'src/parser/generic';
import { readSQL } from 'test/helper';

const features = {
    selectWithExists: readSQL(__dirname, 'select_with_exists.sql'),
};

describe('GenericSQL Select with EXISTS Syntax Tests', () => {
    const parser = new GenericSQL();

    features.selectWithExists.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
