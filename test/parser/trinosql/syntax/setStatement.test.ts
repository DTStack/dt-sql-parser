import TrinoSQL from '../../../../src/parser/trinosql';
import { readSQL } from '../../../helper';

const features = {
    role: readSQL(__dirname, 'set_role.sql'),
    session: readSQL(__dirname, 'set_session.sql'),
    path: readSQL(__dirname, 'set_path.sql'),
    timeZone: readSQL(__dirname, 'set_time_zone.sql'),
};

describe('TrinoSQL Set Statements Syntax Tests', () => {
    const parser = new TrinoSQL();
    // set statements
    features.role.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
    features.path.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
    features.session.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
    features.timeZone.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
