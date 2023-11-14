import ImpalaSQL from '../../../../src/parser/impala';
import { readSQL } from '../../../helper';

const parser = new ImpalaSQL();

const features = {
    computeStats: readSQL(__dirname, 'compute_stats.sql'),
    comments: readSQL(__dirname, 'comment.sql'),
    grants: readSQL(__dirname, 'grant.sql'),
    revokes: readSQL(__dirname, 'revoke.sql'),
};

describe('ImpalaSQL Other Syntax Tests', () => {
    describe('COMPUTE STATS', () => {
        features.computeStats.forEach((db) => {
            it(db, () => {
                expect(parser.validate(db).length).toBe(0);
            });
        });
    });
    describe('COMMENT STATEMENT', () => {
        features.comments.forEach((db) => {
            it(db, () => {
                expect(parser.validate(db).length).toBe(0);
            });
        });
    });
    describe('GRANT STATEMENT', () => {
        features.grants.forEach((db) => {
            it(db, () => {
                expect(parser.validate(db).length).toBe(0);
            });
        });
    });
    describe('REVOKE STATEMENT', () => {
        features.revokes.forEach((db) => {
            it(db, () => {
                expect(parser.validate(db).length).toBe(0);
            });
        });
    });
});
