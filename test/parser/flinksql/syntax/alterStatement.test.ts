import FlinkSQL from 'src/parser/flinksql';
import { readSQL } from 'test/helper';

const features = {
    table: readSQL(__dirname, 'alterTable.sql'),
    view: readSQL(__dirname, 'alterView.sql'),
    function: readSQL(__dirname, 'alterFunction.sql'),
    database: readSQL(__dirname, 'alterDatabase.sql'),
};

describe('FlinkSQL Alter Statements Syntax Tests', () => {
    const parser = new FlinkSQL();
    // Alter statements
    features.table.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
    features.view.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
    features.database.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });

    features.function.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
