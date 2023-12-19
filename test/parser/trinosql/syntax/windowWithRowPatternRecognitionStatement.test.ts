import { TrinoSQL } from '../../../filters';
import { readSQL } from '../../../helper';

const features = {
    windowWithRowPatternRecognition: readSQL(__dirname, 'window_with_row_pattern_recognition.sql'),
};

describe('TrinoSQL Window With Row Pattern Recognition Statements Syntax Tests', () => {
    const parser = new TrinoSQL();
    // window with row pattern recognition statements
    features.windowWithRowPatternRecognition.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
