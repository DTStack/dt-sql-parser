import HiveSQL from '../../../../src/parser/hive';
import { readSQL } from '../../../helper';

const features = {
    exports: readSQL(__dirname, 'export.sql')
};

describe('Hive Export Syntax Tests', () => {
    const parser = new HiveSQL();

    features.exports.forEach((exp) => {
        it(exp, () => {
            expect(parser.validate(exp).length).toBe(0);
        });
    });
});

