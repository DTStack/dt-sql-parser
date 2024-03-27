import fs from 'fs';
import path from 'path';
import { FlinkSQL } from 'src/parser/flink';

// 注释 sql 不做切割
const features = {
    comments: fs.readFileSync(path.join(__dirname, 'fixtures', 'comment.sql'), 'utf-8'),
};

describe('FlinkSQL Comment Syntax Tests', () => {
    const flink = new FlinkSQL();

    test('Comment SQL Statement', () => {
        expect(flink.validate(features.comments).length).toBe(0);
    });
});
