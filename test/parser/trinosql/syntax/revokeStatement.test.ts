import TrinoSQL from 'src/parser/trinosql';
import { readSQL } from 'test/helper';

const features = {
    revoke: readSQL(__dirname, 'revoke.sql'),
    revokeRoles: readSQL(__dirname, 'revoke_roles.sql'),
};

describe('TrinoSQL Revoke Statements Syntax Tests', () => {
    const parser = new TrinoSQL();
    // revoke statements
    features.revoke.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
    features.revokeRoles.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
