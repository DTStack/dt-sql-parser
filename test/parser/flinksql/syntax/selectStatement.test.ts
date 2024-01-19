import FlinkSQL from 'src/parser/flinksql';
import { readSQL } from 'test/helper';

const parser = new FlinkSQL();

const features = {
    base: readSQL(__dirname, 'select.sql'),
    withClause: readSQL(__dirname, 'selectWithClause.sql'),
    distinct: readSQL(__dirname, 'selectDistinct.sql'),
    windowTVF: readSQL(__dirname, 'selectWindowTVF.sql'),
    aggregation: readSQL(__dirname, 'selectAggregation.sql'),
    join: readSQL(__dirname, 'selectJoin.sql'),
    setOperation: readSQL(__dirname, 'selectSetOperations.sql'),
    pattern: readSQL(__dirname, 'selectPatternRecognition.sql'),
    where: readSQL(__dirname, 'selectWhere.sql'),
};

describe('FlinkSQL Query Statement Tests', () => {
    describe('Base Select', () => {
        features.base.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });
    });

    describe('With Clause Select', () => {
        features.withClause.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });
    });

    describe('Select DISTINCT', () => {
        features.distinct.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });
    });

    describe('Select Window TVF', () => {
        features.windowTVF.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });
    });

    describe('Select Aggregation', () => {
        features.aggregation.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });
    });

    describe('Select Join', () => {
        features.join.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });
    });

    describe('Select Set Operations', () => {
        features.setOperation.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });
    });

    describe('Select Pattern Recognition', () => {
        features.pattern.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });
    });

    describe('Select Where', () => {
        features.where.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });
    });
});
