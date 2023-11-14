import ImpalaSQL from '../../../../src/parser/impala';
import { readSQL } from '../../../helper';

const parser = new ImpalaSQL();

const features = {
    computeStats: readSQL(__dirname, 'compute_stats.sql'),
    comments: readSQL(__dirname, 'comment.sql'),
};

describe('ImpalaSQL OTHER Syntax Tests', () => {
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
});
