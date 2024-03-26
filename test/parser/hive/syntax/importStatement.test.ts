import { HiveSQL } from 'src/parser/hive';
import { readSQL } from 'test/helper';

const features = {
    imports: readSQL(__dirname, 'import.sql'),
};

describe('HiveSQL Import Syntax Tests', () => {
    const hive = new HiveSQL();

    features.imports.forEach((imp) => {
        it(imp, () => {
            expect(hive.validate(imp).length).toBe(0);
        });
    });
});
