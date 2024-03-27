import { HiveSQL } from 'src/parser/hive';
import { readSQL } from 'test/helper';

const hive = new HiveSQL();

const features = {
    dataTypes: readSQL(__dirname, 'dataTypes.sql'),
};

describe('HiveSQL Check Data Types Tests', () => {
    features.dataTypes.forEach((dataType) => {
        it(dataType, () => {
            expect(hive.validate(dataType).length).toBe(0);
        });
    });
});
