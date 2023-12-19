import { PostgresSQL } from '../../../filters';
import { readSQL } from '../../../helper';

const parser = new PostgresSQL();

const features = {
    drops: readSQL(__dirname, 'drop.sql'),
};

describe('PgSQL Delete Syntax Tests', () => {
    features.drops.forEach((drop) => {
        it(drop, () => {
            expect(parser.validate(drop).length).toBe(0);
        });
    });
});
