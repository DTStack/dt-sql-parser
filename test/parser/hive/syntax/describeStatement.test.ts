import HiveSQL from '../../../../src/parser/hive';
import { readSQL } from '../../../helper';

const parser = new HiveSQL();

const features = {
    desc: readSQL(__dirname, 'describe.sql'),
};

describe('Hive Describe Syntax Tests', () => {
    features.desc.forEach((des) => {
        it(des, () => {
            expect(parser.validate(des).length).toBe(0);
        });
    });
});
