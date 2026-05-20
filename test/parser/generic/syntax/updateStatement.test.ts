import { GenericSQL } from 'src/parser/generic';
import { readSQL } from 'test/helper';

const features = {
    update: readSQL(__dirname, 'update.sql'),
};

describe('GenericSQL Update Statements Syntax Tests', () => {
    const parser = new GenericSQL();

    features.update.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
