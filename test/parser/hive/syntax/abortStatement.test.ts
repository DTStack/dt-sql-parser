import HiveSQL from '../../../../src/parser/hive';
import { readSQL } from '../../../helper';

const parser = new HiveSQL();

const features = {
    aborts: readSQL(__dirname, 'abort.sql'),
};

describe('HiveSQL Abort Syntax Tests', () => {
    features.aborts.forEach((ab) => {
        it(ab, () => {
            expect(parser.validate(ab).length).toBe(0);
        });
    });
});
