import { TrinoSQL } from 'src/parser/trino';
import { readSQL } from 'test/helper';

const features = {
    update: readSQL(__dirname, 'update.sql'),
};

describe('TrinoSQL Update Statements Syntax Tests', () => {
    const trino = new TrinoSQL();
    // update statements
    features.update.forEach((sql) => {
        it(sql, () => {
            expect(trino.validate(sql).length).toBe(0);
        });
    });
});
