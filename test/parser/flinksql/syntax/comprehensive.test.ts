import fs from 'fs';
import path from 'path';
import FlinkSQL from '../../../../src/parser/flinksql';

// 综合测试的 sql 不做切割
const features = {
    templates: fs.readFileSync(path.join(__dirname, 'fixtures', 'templates.sql'), 'utf-8'),
};

describe('FlinkSQL Comprehensive Tests', () => {
    const parser = new FlinkSQL();
    test('Stream SQL templates', () => {
        expect(parser.validate(features.templates).length).toBe(0);
    });
});
