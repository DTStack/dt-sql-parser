import { MySQL } from 'src/parser/mysql';

const randomText = `dhsdansdnkla ndjnsla ndnalks`;
const sql1 = `SHOW CREATE TABLE`;
const sql2 = `CREATE DATABASE `;
const sql3 = `SHOW CREATE DATABASE IF NOT EXIsST aaa aaa`;
const sql4 = `SELECT * froma aaa`;
const sql5 = `SELECT user, MAX(salary) FROM users where `;

describe('MySQL validate invalid sql and test msg', () => {
    const mysql = new MySQL();

    test('validate random text', () => {
        const errors = mysql.validate(randomText);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe(
            `'dhsdansdnkla' is not valid at this position, expecting a keyword`
        );
    });

    test('validate unComplete sql1', () => {
        const errors = mysql.validate(sql1);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe('Statement is incomplete');
    });

    test('validate unComplete sql2', () => {
        const errors = mysql.validate(sql2);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe(
            'Statement is incomplete, expecting a new database or a keyword'
        );
    });

    test('validate unComplete sql3', () => {
        const errors = mysql.validate(sql3);
        expect(errors.length).toBe(2);
        expect(errors[0].message).toBe(`missing 'EXISTS' at 'EXIsST'`);
        expect(errors[1].message).toBe(`'aaa' is not valid at this position`);
    });

    test('validate unComplete sql4', () => {
        const errors = mysql.validate(sql4);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe(
            `'froma' is not valid at this position, expecting an existing column or a keyword`
        );
    });

    test('validate unComplete sql5', () => {
        const errors = mysql.validate(sql5);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe(
            `Statement is incomplete, expecting an existing function or an existing column or a keyword`
        );
    });

    test('validate random text cn', () => {
        mysql.locale = 'zh_CN';
        const errors = mysql.validate(randomText);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe(`'dhsdansdnkla' 在此位置无效，期望一个关键字`);
    });

    test('validate unComplete sql1 cn', () => {
        const errors = mysql.validate(sql1);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe('语句不完整');
    });

    test('validate unComplete sql2 cn', () => {
        const errors = mysql.validate(sql2);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toEqual('语句不完整，期望一个新的database或者一个关键字');
    });

    test('validate unComplete sql3 cn', () => {
        const errors = mysql.validate(sql3);
        expect(errors.length).toBe(2);
        expect(errors[0].message).toBe(`缺少'EXISTS'在'EXIsST'`);
        expect(errors[1].message).toBe(`'aaa' 在此位置无效`);
    });

    test('validate unComplete sql4 cn', () => {
        const errors = mysql.validate(sql4);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe(`'froma' 在此位置无效，期望一个存在的column或者一个关键字`);
    });

    test('validate unComplete sql5 cn', () => {
        const errors = mysql.validate(sql5);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe(
            `语句不完整，期望一个存在的function或者一个存在的column或者一个关键字`
        );
    });
});
