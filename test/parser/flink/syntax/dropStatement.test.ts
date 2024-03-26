import { FlinkSQL } from 'src/parser/flink';
import { readSQL } from 'test/helper';

const features = {
    table: readSQL(__dirname, 'dropTable.sql'),
    view: readSQL(__dirname, 'dropView.sql'),
    function: readSQL(__dirname, 'dropFunction.sql'),
    catalog: readSQL(__dirname, 'dropCatalog.sql'),
    database: readSQL(__dirname, 'dropDatabase.sql'),
};

describe('FlinkSQL Drop Statements Tests', () => {
    const flink = new FlinkSQL();
    features.table.forEach((sql) => {
        it(sql, () => {
            expect(flink.validate(sql).length).toBe(0);
        });
    });
    features.view.forEach((sql) => {
        it(sql, () => {
            expect(flink.validate(sql).length).toBe(0);
        });
    });
    features.function.forEach((sql) => {
        it(sql, () => {
            expect(flink.validate(sql).length).toBe(0);
        });
    });
    features.catalog.forEach((sql) => {
        it(sql, () => {
            expect(flink.validate(sql).length).toBe(0);
        });
    });
    features.database.forEach((sql) => {
        it(sql, () => {
            expect(flink.validate(sql).length).toBe(0);
        });
    });
});
