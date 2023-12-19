import { HiveSQL } from '../../../filters';
import { readSQL } from '../../../helper';

const features = {
    exports: readSQL(__dirname, 'export.sql'),
};

describe('HiveSQL Export Syntax Tests', () => {
    const parser = new HiveSQL();

    features.exports.forEach((exp) => {
        it(exp, () => {
            expect(parser.validate(exp).length).toBe(0);
        });
    });
});
