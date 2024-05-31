import { HiveSQL } from 'src/parser/hive';

const randomText = `dhsdansdnkla ndjnsla ndnalks`;
const sql1 = `SHOW CREATE TABLE`;
const sql2 = `SELECT * FROM `;
const sql3 = `DROP VIEW IF EXIsST aaa aaa`;
const sql4 = `SELECT * froma aaa`;
const sql5 = `CREATE TABLE `;

describe('HiveSQL validate invalid sql and test msg', () => {
    const hive = new HiveSQL();

    test('validate random text', () => {
        const errors = hive.validate(randomText);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe(
            `'dhsdansdnkla' is not valid at this position, expecting a keyword`
        );
    });

    test('validate unComplete sql1', () => {
        const errors = hive.validate(sql1);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe('statement is incomplete');
    });

    test('validate unComplete sql2', () => {
        const errors = hive.validate(sql2);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe(
            'statement is incomplete, expecting an existing table or an existing view or a keyword'
        );
    });

    test('validate unComplete sql3', () => {
        const errors = hive.validate(sql3);
        expect(errors.length).toBe(2);
        expect(errors[0].message).toBe(`missing 'EXISTS' at 'EXIsST'`);
        expect(errors[1].message).toBe(`'aaa' is not valid at this position`);
    });

    test('validate unComplete sql4', () => {
        const errors = hive.validate(sql4);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe(
            `'froma' is not valid at this position, expecting a keyword`
        );
    });

    test('validate unComplete sql5', () => {
        const errors = hive.validate(sql5);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe(
            `statement is incomplete, expecting a new table or a keyword`
        );
    });

    test('validate random text cn', () => {
        hive.locale = 'zh_CN';
        const errors = hive.validate(randomText);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe(`'dhsdansdnkla' 在此位置无效，期望一个关键字`);
    });

    test('validate unComplete sql1 cn', () => {
        const errors = hive.validate(sql1);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe('语句不完整');
    });

    test('validate unComplete sql2 cn', () => {
        const errors = hive.validate(sql2);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe(
            '语句不完整，期望一个存在的table或者一个存在的view或者一个关键字'
        );
    });

    test('validate unComplete sql3 cn', () => {
        const errors = hive.validate(sql3);
        expect(errors.length).toBe(2);
        expect(errors[0].message).toBe(`缺少'EXISTS'在'EXIsST'`);
        expect(errors[1].message).toBe(`'aaa' 在此位置无效`);
    });

    test('validate unComplete sql4 cn', () => {
        const errors = hive.validate(sql4);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe(`'froma' 在此位置无效，期望一个关键字`);
    });
});
