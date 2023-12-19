import { TrinoSQL } from '../../../filters';
import { readSQL } from '../../../helper';

const features = {
    resetSession: readSQL(__dirname, 'reset_session.sql'),
};

describe('TrinoSQL Reset Session Statements Syntax Tests', () => {
    const parser = new TrinoSQL();
    // reset session statements
    features.resetSession.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
