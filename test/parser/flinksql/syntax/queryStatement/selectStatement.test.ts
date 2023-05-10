import FlinkSQL from '../../../../../src/parser/flinksql';
import fs from 'fs';
import path from 'path';

const parser = new FlinkSQL();

describe('FlinkSQL Query Statement Tests', () => {
    test('Select Clause', () => {
        const content = fs
            .readFileSync(path.join(__dirname, 'fixtures', 'selectStatement.sql'), 'utf-8')
        const errors = parser.validate(content);
        expect(errors.length).toBe(0);
    })
})