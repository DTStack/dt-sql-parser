import HiveSQL from '../../../../src/parser/hive';
import { readSQL } from '../../../helper';

const parser = new HiveSQL();

const features = {
    indexes: readSQL(__dirname, 'dropIndex.sql'),
};

describe('Hive Drop Syntax Tests', () => {
    describe('DROP INDEX', () => {
        features.indexes.forEach((index) => {
            it(index, () => {
                expect(parser.validate(index).length).toBe(0);
            });
        });
    });
});
