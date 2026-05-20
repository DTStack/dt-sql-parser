import { GenericSQL } from 'src/parser/generic';
import { readSQL } from 'test/helper';

const features = {
    delete: readSQL(__dirname, 'delete.sql'),
};

describe('GenericSQL Delete Statements Syntax Tests', () => {
    const parser = new GenericSQL();

    features.delete.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
