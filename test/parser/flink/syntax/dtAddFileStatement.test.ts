import { FlinkSQL } from 'src/parser/flink';
import { readSQL } from 'test/helper';

const features = {
    dtAddFiles: readSQL(__dirname, 'dtAddFile.sql'),
};

describe('FlinkSQL DT Add File Syntax Tests', () => {
    const flink = new FlinkSQL();

    features.dtAddFiles.forEach((sql) => {
        it(sql, () => {
            expect(flink.validate(sql).length).toBe(0);
        });
    });
});
