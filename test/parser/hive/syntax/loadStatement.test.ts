import HiveSQL from '../../../../src/parser/hive';
import { readSQL } from '../../../helper';

const parser = new HiveSQL();

const features = {
    loads: readSQL(__dirname, 'load.sql'),
};

describe('Hive Load Syntax Tests', () => {
    features.loads.forEach((load) => {
        it(load, () => {
            expect(parser.validate(load).length).toBe(0);
        });
    });
});
