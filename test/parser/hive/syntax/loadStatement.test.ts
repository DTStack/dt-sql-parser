import { HiveSQL } from '../../../filters';
import { readSQL } from '../../../helper';

const parser = new HiveSQL();

const features = {
    loads: readSQL(__dirname, 'load.sql'),
};

describe('HiveSQL Load Syntax Tests', () => {
    features.loads.forEach((load) => {
        it(load, () => {
            expect(parser.validate(load).length).toBe(0);
        });
    });
});
