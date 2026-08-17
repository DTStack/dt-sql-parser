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

    // https://github.com/DTStack/dt-sql-parser/issues/487
    // A hyphen inside a config property name must be adjacent to the surrounding
    // words (no whitespace), e.g. `max-size`. Spaced-out `a - b` is invalid.
    it('should report error when hyphen in config property is surrounded by whitespace', () => {
        expect(hive.validate('set hive.a - b = 1;').length).toBeGreaterThan(0);
        expect(hive.validate('set hive.a- b = 1;').length).toBeGreaterThan(0);
    });
});
