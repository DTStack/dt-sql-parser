import { FlinkSQL } from '../../../filters';
import { readSQL } from '../../../helper';

const features = {
    shows: readSQL(__dirname, 'show.sql'),
};

describe('FlinkSQL Show Syntax Tests', () => {
    const parser = new FlinkSQL();

    features.shows.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
