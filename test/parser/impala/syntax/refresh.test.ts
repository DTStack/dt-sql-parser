import { ImpalaSQL } from 'src/parser/impala';
import { readSQL } from 'test/helper';

const impala = new ImpalaSQL();

const features = {
    refresh: readSQL(__dirname, 'refresh.sql'),
    authorization: readSQL(__dirname, 'refresh_authorization.sql'),
    function: readSQL(__dirname, 'refresh_function.sql'),
};

describe('ImpalaSQL Refresh Syntax Tests', () => {
    describe('REFRESH', () => {
        features.refresh.forEach((db) => {
            it(db, () => {
                expect(impala.validate(db).length).toBe(0);
            });
        });
    });
    describe('REFRESH AUTHORIZATION', () => {
        features.authorization.forEach((db) => {
            it(db, () => {
                expect(impala.validate(db).length).toBe(0);
            });
        });
    });
    describe('REFRESH FUNCTION', () => {
        features.function.forEach((db) => {
            it(db, () => {
                expect(impala.validate(db).length).toBe(0);
            });
        });
    });
});
