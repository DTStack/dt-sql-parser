import { HiveSQL } from '../../../filters';
import { readSQL } from '../../../helper';

const parser = new HiveSQL();

const features = {
    desc: readSQL(__dirname, 'describe.sql'),
};

describe('HiveSQL Describe Syntax Tests', () => {
    features.desc.forEach((des) => {
        it(des, () => {
            expect(parser.validate(des).length).toBe(0);
        });
    });
});
