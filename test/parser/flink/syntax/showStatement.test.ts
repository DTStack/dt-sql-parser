import { FlinkSQL } from 'src/parser/flink';
import { readSQL } from 'test/helper';

const features = {
    shows: readSQL(__dirname, 'show.sql'),
};

describe('FlinkSQL Show Syntax Tests', () => {
    const flink = new FlinkSQL();

    features.shows.forEach((sql) => {
        it(sql, () => {
            expect(flink.validate(sql).length).toBe(0);
        });
    });
});
