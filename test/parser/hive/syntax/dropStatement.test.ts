import { HiveSQL } from 'src/parser/hive';
import { readSQL } from 'test/helper';

const hive = new HiveSQL();

const features = {
    drops: readSQL(__dirname, 'drop.sql'),
    reloads: readSQL(__dirname, 'reload.sql'),
};

describe('HiveSQL Drop Syntax Tests', () => {
    features.drops.forEach((drop) => {
        it(drop, () => {
            expect(hive.validate(drop).length).toBe(0);
        });
    });

    features.reloads.forEach((reload) => {
        it(reload, () => {
            expect(hive.validate(reload).length).toBe(0);
        });
    });
});
