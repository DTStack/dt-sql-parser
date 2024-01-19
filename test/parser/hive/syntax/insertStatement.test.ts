import HiveSQL from 'src/parser/hive';
import { readSQL } from 'test/helper';

const parser = new HiveSQL();

const features = {
    insertFromQueries: readSQL(__dirname, 'insertFromQuery.sql'),
    insertFromValues: readSQL(__dirname, 'insertFormValues.sql'),
};

describe('HiveSQL Insert Syntax Tests', () => {
    features.insertFromQueries.forEach((ifq) => {
        it(ifq, () => {
            expect(parser.validate(ifq).length).toBe(0);
        });
    });

    features.insertFromValues.forEach((ifv) => {
        it(ifv, () => {
            expect(parser.validate(ifv).length).toBe(0);
        });
    });
});
