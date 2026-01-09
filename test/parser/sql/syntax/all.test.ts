import { Sql } from 'src/parser/sql';
import { readSQL } from 'test/helper';

const features = {
    alter: readSQL(__dirname, 'alter.sql'),
    create: readSQL(__dirname, 'create.sql'),
    drop: readSQL(__dirname, 'drop.sql'),
    insert: readSQL(__dirname, 'insert.sql'),
    select: readSQL(__dirname, 'select.sql'),
    show: readSQL(__dirname, 'show.sql'),
    truncate: readSQL(__dirname, 'truncate.sql'),
    update: readSQL(__dirname, 'update.sql'),
    use: readSQL(__dirname, 'use.sql'),
};

describe('Generic sql Syntax Tests', () => {
    const flink = new Sql();

    features.alter.forEach((itemSql) => {
        it(itemSql, () => {
            expect(flink.validate(itemSql).length).toBe(0);
        });
    });

    features.create.forEach((itemSql) => {
        it(itemSql, () => {
            expect(flink.validate(itemSql).length).toBe(0);
        });
    });

    features.drop.forEach((itemSql) => {
        it(itemSql, () => {
            expect(flink.validate(itemSql).length).toBe(0);
        });
    });

    features.insert.forEach((itemSql) => {
        it(itemSql, () => {
            expect(flink.validate(itemSql).length).toBe(0);
        });
    });

    features.select.forEach((itemSql) => {
        it(itemSql, () => {
            expect(flink.validate(itemSql).length).toBe(0);
        });
    });

    features.show.forEach((itemSql) => {
        it(itemSql, () => {
            expect(flink.validate(itemSql).length).toBe(0);
        });
    });

    features.truncate.forEach((itemSql) => {
        it(itemSql, () => {
            expect(flink.validate(itemSql).length).toBe(0);
        });
    });

    features.update.forEach((itemSql) => {
        it(itemSql, () => {
            expect(flink.validate(itemSql).length).toBe(0);
        });
    });

    features.use.forEach((itemSql) => {
        it(itemSql, () => {
            expect(flink.validate(itemSql).length).toBe(0);
        });
    });
});
