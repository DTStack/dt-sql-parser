import { HiveSQL } from '../../../filters';
import { readSQL } from '../../../helper';

const features = {
    imports: readSQL(__dirname, 'import.sql'),
};

describe('HiveSQL Import Syntax Tests', () => {
    const parser = new HiveSQL();

    features.imports.forEach((imp) => {
        it(imp, () => {
            expect(parser.validate(imp).length).toBe(0);
        });
    });
});
