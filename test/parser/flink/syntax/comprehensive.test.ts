import fs from 'fs';
import path from 'path';
import { FlinkSQL } from 'src/parser/flink';

// 综合测试的 sql 不做切割
const features = {
    templates: fs.readFileSync(path.join(__dirname, 'fixtures', 'templates.sql'), 'utf-8'),
};

describe('FlinkSQL Comprehensive Tests', () => {
    const flink = new FlinkSQL();
    test('Stream SQL templates', () => {
        expect(flink.validate(features.templates).length).toBe(0);
    });
});
