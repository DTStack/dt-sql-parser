import HiveSQL from 'src/parser/hive';
import { readSQL } from 'test/helper';

const parser = new HiveSQL();

const features = {
    merges: readSQL(__dirname, 'merge.sql'),
};

describe('HiveSQL Merge Syntax Tests', () => {
    features.merges.forEach((merge) => {
        it(merge, () => {
            expect(parser.validate(merge).length).toBe(0);
        });
    });
});
