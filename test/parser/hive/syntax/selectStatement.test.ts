import HiveSQL from 'src/parser/hive';
import { readSQL } from 'test/helper';

const parser = new HiveSQL();

const features = {
    selects: readSQL(__dirname, 'select.sql'),
};

describe('HiveSQL Select Syntax Tests', () => {
    features.selects.forEach((select) => {
        it(select, () => {
            expect(parser.validate(select).length).toBe(0);
        });
    });
});
