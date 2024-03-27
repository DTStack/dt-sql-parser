import { TrinoSQL } from 'src/parser/trino';
import { readSQL } from 'test/helper';

const features = {
    windowWithRowPatternRecognition: readSQL(__dirname, 'window_with_row_pattern_recognition.sql'),
};

describe('TrinoSQL Window With Row Pattern Recognition Statements Syntax Tests', () => {
    const trino = new TrinoSQL();
    // window with row pattern recognition statements
    features.windowWithRowPatternRecognition.forEach((sql) => {
        it(sql, () => {
            expect(trino.validate(sql).length).toBe(0);
        });
    });
});
