import { HiveSQL } from 'src/parser/hive';
import { readSQL } from 'test/helper';

const hive = new HiveSQL();

const features = {
    setConfigProperties: readSQL(__dirname, 'setConfigProperties.sql'),
};

describe('HiveSQL Select Syntax Tests', () => {
    features.setConfigProperties.forEach((configProperty) => {
        it(configProperty, () => {
            expect(hive.validate(configProperty).length).toBe(0);
        });
    });
});
