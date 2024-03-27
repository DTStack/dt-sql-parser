import { SparkSQL } from 'src/parser/spark';
import { readSQL } from 'test/helper';

const spark = new SparkSQL();

const features = {
    selectAggregateFn: readSQL(__dirname, 'selectAggregateFn.sql'),
    selectCase: readSQL(__dirname, 'selectCase.sql'),
    selectCET: readSQL(__dirname, 'selectCET.sql'),
    selectWindowFn: readSQL(__dirname, 'selectWindowFn.sql'),
    selectWhere: readSQL(__dirname, 'selectWhere.sql'),
    selectUnPivot: readSQL(__dirname, 'selectUnPivot.sql'),
    selectTVF: readSQL(__dirname, 'selectTVF.sql'),
    selectTransform: readSQL(__dirname, 'selectTransform.sql'),
    selectTableSample: readSQL(__dirname, 'selectTableSample.sql'),
    selectSortBy: readSQL(__dirname, 'selectSortBy.sql'),
    selectPivot: readSQL(__dirname, 'selectPivot.sql'),
    selectOrderBy: readSQL(__dirname, 'selectOrderBy.sql'),
    selectOffset: readSQL(__dirname, 'selectOffset.sql'),
    selectLimit: readSQL(__dirname, 'selectLimit.sql'),
    selectLike: readSQL(__dirname, 'selectLike.sql'),
    selectLateralView: readSQL(__dirname, 'selectLateralView.sql'),
    selectLateralSubQuery: readSQL(__dirname, 'selectLateralSubQuery.sql'),
    selectJoin: readSQL(__dirname, 'selectJoin.sql'),
    selectInlineTable: readSQL(__dirname, 'selectInlineTable.sql'),
    selectHiving: readSQL(__dirname, 'selectHiving.sql'),
    selectHint: readSQL(__dirname, 'selectHint.sql'),
    selectGroupBy: readSQL(__dirname, 'selectGroupBy.sql'),
    selectFile: readSQL(__dirname, 'selectFile.sql'),
    selectExplain: readSQL(__dirname, 'selectExplain.sql'),
    selectDistributeBy: readSQL(__dirname, 'selectDistributeBy.sql'),
    selectClusterBy: readSQL(__dirname, 'selectClusterBy.sql'),
};
describe('Spark Select Syntax Tests', () => {
    features.selectAggregateFn.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
    features.selectCase.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
    features.selectCET.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
    features.selectWindowFn.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
    features.selectWhere.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
    features.selectUnPivot.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
    features.selectTVF.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
    features.selectTransform.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
    features.selectTableSample.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
    features.selectSortBy.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
    features.selectPivot.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
    features.selectOrderBy.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
    features.selectOffset.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
    features.selectLimit.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
    features.selectLike.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
    features.selectLateralView.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
    features.selectLateralSubQuery.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
    features.selectJoin.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
    features.selectInlineTable.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
    features.selectHiving.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
    features.selectHint.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
    features.selectGroupBy.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
    features.selectFile.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
    features.selectExplain.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
    features.selectDistributeBy.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
    features.selectClusterBy.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
});
