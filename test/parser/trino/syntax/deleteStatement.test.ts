import { TrinoSQL } from 'src/parser/trino';
import { readSQL } from 'test/helper';

const features = {
    delete: readSQL(__dirname, 'delete.sql'),
};

describe('TrinoSQL Delete Statements Syntax Tests', () => {
    const trino = new TrinoSQL();
    // delete statements
    features.delete.forEach((sql) => {
        it(sql, () => {
            expect(trino.validate(sql).length).toBe(0);
        });
    });
});
