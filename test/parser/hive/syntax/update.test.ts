import HiveSQL from '../../../../src/parser/hive';
import { readSQL } from '../../../helper';

const parser = new HiveSQL();

const features = {
    updates: readSQL(__dirname, 'update.sql'),
};

describe('HiveSQL Update Syntax Tests', () => {
    features.updates.forEach((update) => {
        it(update, () => {
            expect(parser.validate(update).length).toBe(0);
        });
    });
});
