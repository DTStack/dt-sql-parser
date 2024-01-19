import FlinkSQL from 'src/parser/flinksql';
import { readSQL } from 'test/helper';

// 综合测试的 sql 不做切割
const features = {
    chores: readSQL(__dirname, 'chore.sql'),
};

describe('FlinkSQL Chore Syntax Tests', () => {
    const parser = new FlinkSQL();

    features.chores.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
