import { TrinoSQL } from 'src/parser/trino';
import { readSQL } from 'test/helper';

const features = {
    resetSession: readSQL(__dirname, 'reset_session.sql'),
};

describe('TrinoSQL Reset Session Statements Syntax Tests', () => {
    const trino = new TrinoSQL();
    // reset session statements
    features.resetSession.forEach((sql) => {
        it(sql, () => {
            expect(trino.validate(sql).length).toBe(0);
        });
    });
});
