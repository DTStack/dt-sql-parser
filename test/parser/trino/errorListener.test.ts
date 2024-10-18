import { TrinoSQL } from 'src/parser/trino';

const randomText = `dhsdansdnkla ndjnsla ndnalks`;
const sql1 = `SHOW CREATE TABLE`;
const sql2 = `CREATE VIEW `;
const sql3 = `SHOW CREATE TABLE aaa aaa`;
const sql4 = `SELECT count(*) FROM customer order BY sum(a`;

describe('TrinoSQL validate invalid sql and test msg', () => {
    const trinoSQL = new TrinoSQL();

    test('validate random text', () => {
        const errors = trinoSQL.validate(randomText);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe(
            `'dhsdansdnkla' is not valid at this position, expecting a keyword`
        );
    });

    test('validate unComplete sql1', () => {
        const errors = trinoSQL.validate(sql1);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe('Statement is incomplete');
    });

    test('validate unComplete sql2', () => {
        const errors = trinoSQL.validate(sql2);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe('Statement is incomplete, expecting a new view');
    });

    test('validate unComplete sql3', () => {
        const errors = trinoSQL.validate(sql3);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe(
            `'aaa' is not valid at this position, expecting an existing table or a keyword`
        );
    });

    test('validate unComplete sql4', () => {
        const errors = trinoSQL.validate(sql4);
        expect(errors.length).toBe(2);
        expect(errors[0].message).toBe(`Statement is incomplete`);
        expect(errors[1].message).toBe(
            `'a' is not valid at this position, expecting an existing function or an existing column or a keyword`
        );
    });

    test('validate random text cn', () => {
        trinoSQL.locale = 'zh_CN';
        const errors = trinoSQL.validate(randomText);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe(`'dhsdansdnkla' 在此位置无效，期望一个关键字`);
    });

    test('validate unComplete sql1 cn', () => {
        const errors = trinoSQL.validate(sql1);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe('语句不完整');
    });

    test('validate unComplete sql2 cn', () => {
        const errors = trinoSQL.validate(sql2);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toEqual('语句不完整，期望一个新的view');
    });

    test('validate unComplete sql3 cn', () => {
        const errors = trinoSQL.validate(sql3);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe(`'aaa' 在此位置无效，期望一个存在的table或者一个关键字`);
    });

    test('validate unComplete sql4', () => {
        const errors = trinoSQL.validate(sql4);
        expect(errors.length).toBe(2);
        expect(errors[0].message).toBe(`语句不完整`);
        expect(errors[1].message).toBe(
            `'a' 在此位置无效，期望一个存在的function或者一个存在的column或者一个关键字`
        );
    });
});
