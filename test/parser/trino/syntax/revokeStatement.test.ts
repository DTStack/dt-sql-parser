import { TrinoSQL } from 'src/parser/trino';
import { readSQL } from 'test/helper';

const features = {
    revoke: readSQL(__dirname, 'revoke.sql'),
    revokeRoles: readSQL(__dirname, 'revoke_roles.sql'),
};

describe('TrinoSQL Revoke Statements Syntax Tests', () => {
    const trino = new TrinoSQL();
    // revoke statements
    features.revoke.forEach((sql) => {
        it(sql, () => {
            expect(trino.validate(sql).length).toBe(0);
        });
    });
    features.revokeRoles.forEach((sql) => {
        it(sql, () => {
            expect(trino.validate(sql).length).toBe(0);
        });
    });
});
