import { FlinkSQL } from 'src/parser/flink';
import { readSQL } from 'test/helper';

// 综合测试的 sql 不做切割
const features = {
    chores: readSQL(__dirname, 'chore.sql'),
};

describe('FlinkSQL Chore Syntax Tests', () => {
    const flink = new FlinkSQL();

    features.chores.forEach((sql) => {
        it(sql, () => {
            expect(flink.validate(sql).length).toBe(0);
        });
    });
});
