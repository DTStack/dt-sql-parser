import { HiveSQL } from 'src/parser/hive';
import { readSQL } from 'test/helper';

const hive = new HiveSQL();

const features = {
    loads: readSQL(__dirname, 'load.sql'),
};

describe('HiveSQL Load Syntax Tests', () => {
    features.loads.forEach((load) => {
        it(load, () => {
            expect(hive.validate(load).length).toBe(0);
        });
    });
});
