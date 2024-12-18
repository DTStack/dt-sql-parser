import { PostgreSQL } from 'src/parser/postgresql';

const randomText = `dhsdansdnkla ndjnsla ndnalks`;
const sql1 = `ALTER EVENT`;
const sql2 = `CREATE FUNCTION `;
const sql3 = `SELECT name, altitude FROM ONLY cities WHERE `;
const sql4 = `DROP PROCEDURE name1 a`;
const sql5 = `SELECT * FROM db.tbs GROUP BY sum( `;

describe('PostgreSQL validate invalid sql and test msg', () => {
    const pgSQL = new PostgreSQL();

    test('validate random text', () => {
        const errors = pgSQL.validate(randomText);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe(
            `'dhsdansdnkla' is not valid at this position, expecting a keyword`
        );
    });

    test('validate unComplete sql1', () => {
        const errors = pgSQL.validate(sql1);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe('Statement is incomplete');
    });

    test('validate unComplete sql2', () => {
        const errors = pgSQL.validate(sql2);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe('Statement is incomplete, expecting a new function');
    });

    test('validate unComplete sql3', () => {
        const errors = pgSQL.validate(sql3);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe(
            `Statement is incomplete, expecting an existing function or an existing column or a keyword`
        );
    });

    test('validate unComplete sql4', () => {
        const errors = pgSQL.validate(sql4);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe(
            `'a' is not valid at this position, expecting an existing procedure or a keyword`
        );
    });

    test('validate unComplete sql5', () => {
        const errors = pgSQL.validate(sql5);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe(
            `Statement is incomplete, expecting an existing column or an existing function or a keyword`
        );
    });

    test('validate random text cn', () => {
        pgSQL.locale = 'zh_CN';
        const errors = pgSQL.validate(randomText);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe(`'dhsdansdnkla' 在此位置无效，期望一个关键字`);
    });

    test('validate unComplete sql1 cn', () => {
        const errors = pgSQL.validate(sql1);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe('语句不完整');
    });

    test('validate unComplete sql2 cn', () => {
        const errors = pgSQL.validate(sql2);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toEqual('语句不完整，期望一个新的function');
    });

    test('validate unComplete sql3 cn', () => {
        const errors = pgSQL.validate(sql3);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe(
            `语句不完整，期望一个存在的function或者一个存在的column或者一个关键字`
        );
    });

    test('validate unComplete sql4 cn', () => {
        const errors = pgSQL.validate(sql4);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe(`'a' 在此位置无效，期望一个存在的procedure或者一个关键字`);
    });
});
