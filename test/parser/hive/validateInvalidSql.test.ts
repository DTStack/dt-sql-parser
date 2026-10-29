import { HiveSQL } from 'src/parser/hive';

const randomText = `dhsdansdnkla ndjnsla ndnalks`;
const unCompleteSQL = `CREATE TABLE`;

describe('Hive SQL validate invalid sql', () => {
    const hive = new HiveSQL();

    test('validate random text', () => {
        expect(hive.validate(randomText).length).not.toBe(0);
    });

    test('validate unComplete sql', () => {
        expect(hive.validate(unCompleteSQL).length).not.toBe(0);
    });

    test.each([
        'LOCK TABLE tbl1;',
        'UNLOCK TABLE tbl1 SHARED;',
        'LOCK DATABASE db1;',
        'UNLOCK DATABASE db1 EXCLUSIVE;',
        'CREATE EXTERNAL MANAGED TABLE t (id INT);',
        'CREATE TEMPORARY MANAGED TABLE t (id INT);',
        'CREATE TRANSACTIONAL MANAGED TABLE t (id INT);',
    ])('reject grammar optimization overmatch: %s', (sql) => {
        expect(hive.validate(sql).length).not.toBe(0);
    });
});
