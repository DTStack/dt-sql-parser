import TrinoSQL from 'src/parser/trino';
import { readSQL } from 'test/helper';

const features = {
    comment: readSQL(__dirname, 'comment.sql'),
};

describe('TrinoSQL Comment Statements Syntax Tests', () => {
    const parser = new TrinoSQL();
    // Comment statements
    features.comment.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
