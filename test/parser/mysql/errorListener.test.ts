import { MySQL } from 'src/parser/mysql';

const randomText = `dhsdansdnkla ndjnsla ndnalks`;
const sql1 = `SHOW CREATE TABLE`;
const sql2 = `SHOW CREATE DATABASE `;
const sql3 = `SHOW CREATE DATABASE IF NOT EXIsST aaa aaa`;
const sql4 = `SELECT * froma aaa`;

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
        expect(errors[0].message).toBe('statement is incomplete');
    });

    test('validate unComplete sql2', () => {
        const errors = mysql.validate(sql2);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe(
            'statement is incomplete, expecting a new database name or a keyword'
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
            `'froma' is not valid at this position, expecting a keyword`
        );
    });
});
