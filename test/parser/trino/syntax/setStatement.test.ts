import { TrinoSQL } from 'src/parser/trino';
import { readSQL } from 'test/helper';

const features = {
    role: readSQL(__dirname, 'set_role.sql'),
    session: readSQL(__dirname, 'set_session.sql'),
    path: readSQL(__dirname, 'set_path.sql'),
    timeZone: readSQL(__dirname, 'set_time_zone.sql'),
};

describe('TrinoSQL Set Statements Syntax Tests', () => {
    const trino = new TrinoSQL();
    // set statements
    features.role.forEach((sql) => {
        it(sql, () => {
            expect(trino.validate(sql).length).toBe(0);
        });
    });
    features.path.forEach((sql) => {
        it(sql, () => {
            expect(trino.validate(sql).length).toBe(0);
        });
    });
    features.session.forEach((sql) => {
        it(sql, () => {
            expect(trino.validate(sql).length).toBe(0);
        });
    });
    features.timeZone.forEach((sql) => {
        it(sql, () => {
            expect(trino.validate(sql).length).toBe(0);
        });
    });
});
