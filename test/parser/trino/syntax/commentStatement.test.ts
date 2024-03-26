import { TrinoSQL } from 'src/parser/trino';
import { readSQL } from 'test/helper';

const features = {
    comment: readSQL(__dirname, 'comment.sql'),
};

describe('TrinoSQL Comment Statements Syntax Tests', () => {
    const trino = new TrinoSQL();
    // Comment statements
    features.comment.forEach((sql) => {
        it(sql, () => {
            expect(trino.validate(sql).length).toBe(0);
        });
    });
});
