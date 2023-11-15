import ImpalaSQL from '../../../../src/parser/impala';
import { readSQL } from '../../../helper';

const parser = new ImpalaSQL();

const features = {
    computeStats: readSQL(__dirname, 'compute_stats.sql'),
    comments: readSQL(__dirname, 'comment.sql'),
    grants: readSQL(__dirname, 'grant.sql'),
    revokes: readSQL(__dirname, 'revoke.sql'),
    loadData: readSQL(__dirname, 'load_data.sql'),
    describes: readSQL(__dirname, 'describe.sql'),
    explains: readSQL(__dirname, 'explain.sql'),
    invalidates: readSQL(__dirname, 'invalidate_metadata.sql'),
    set: readSQL(__dirname, 'set.sql'),
    shutdown: readSQL(__dirname, 'shutdown.sql'),
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
    describe('LOAD DATA STATEMENT', () => {
        features.loadData.forEach((db) => {
            it(db, () => {
                expect(parser.validate(db).length).toBe(0);
            });
        });
    });
    describe('DESCRIBE STATEMENT', () => {
        features.describes.forEach((db) => {
            it(db, () => {
                expect(parser.validate(db).length).toBe(0);
            });
        });
    });
    describe('EXPLAIN STATEMENT', () => {
        features.explains.forEach((db) => {
            it(db, () => {
                expect(parser.validate(db).length).toBe(0);
            });
        });
    });
    describe('INVALIDATE METADATA STATEMENT', () => {
        features.invalidates.forEach((db) => {
            it(db, () => {
                expect(parser.validate(db).length).toBe(0);
            });
        });
    });
    describe('SET STATEMENT', () => {
        features.set.forEach((db) => {
            it(db, () => {
                expect(parser.validate(db).length).toBe(0);
            });
        });
    });
    describe('SHUTDOWN STATEMENT', () => {
        features.shutdown.forEach((db) => {
            it(db, () => {
                expect(parser.validate(db).length).toBe(0);
            });
        });
    });
});
