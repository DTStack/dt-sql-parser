import HiveSQL from 'src/parser/hive';
import { readSQL } from 'test/helper';

const parser = new HiveSQL();

const features = {
    shows: readSQL(__dirname, 'show.sql'),
};

describe('HiveSQL Show Syntax Tests', () => {
    features.shows.forEach((show) => {
        it(show, () => {
            expect(parser.validate(show).length).toBe(0);
        });
    });
});
