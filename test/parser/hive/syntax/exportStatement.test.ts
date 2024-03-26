import { HiveSQL } from 'src/parser/hive';
import { readSQL } from 'test/helper';

const features = {
    exports: readSQL(__dirname, 'export.sql'),
};

describe('HiveSQL Export Syntax Tests', () => {
    const hive = new HiveSQL();

    features.exports.forEach((exp) => {
        it(exp, () => {
            expect(hive.validate(exp).length).toBe(0);
        });
    });
});
