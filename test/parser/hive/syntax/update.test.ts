import { HiveSQL } from 'src/parser/hive';
import { readSQL } from 'test/helper';

const hive = new HiveSQL();

const features = {
    updates: readSQL(__dirname, 'update.sql'),
};

describe('HiveSQL Update Syntax Tests', () => {
    features.updates.forEach((update) => {
        it(update, () => {
            expect(hive.validate(update).length).toBe(0);
        });
    });
});
