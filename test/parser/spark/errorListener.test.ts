import { SparkSQL } from 'src/parser/spark';

const randomText = `dhsdansdnkla ndjnsla ndnalks`;
const sql1 = `ALTER VIEW`;
const sql2 = `SELECT * FROM `;
const sql3 = `DROP SCHEMA aaa aaa`;

describe('SparkSQL validate invalid sql and test msg', () => {
    const spark = new SparkSQL();

    test('validate random text', () => {
        const errors = spark.validate(randomText);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe(
            `'dhsdansdnkla' is not valid at this position, expecting a keyword`
        );
    });

    test('validate unComplete sql1', () => {
        const errors = spark.validate(sql1);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe('statement is incomplete');
    });

    test('validate unComplete sql2', () => {
        const errors = spark.validate(sql2);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe(
            'statement is incomplete, expecting an existing table or an existing view or an existing function or a keyword'
        );
    });

    test('validate unComplete sql3', () => {
        const errors = spark.validate(sql3);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe(
            `'aaa' is not valid at this position, expecting an existing namespace or a keyword`
        );
    });

    test('validate random text cn', () => {
        spark.locale = 'zh_CN';
        const errors = spark.validate(randomText);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe(`'dhsdansdnkla' 在此位置无效，期望一个关键字`);
    });

    test('validate unComplete sql1 cn', () => {
        const errors = spark.validate(sql1);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe('语句不完整');
    });

    test('validate unComplete sql2 cn', () => {
        const errors = spark.validate(sql2);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe(
            '语句不完整，期望一个存在的table或者一个存在的view或者一个存在的function或者一个关键字'
        );
    });

    test('validate unComplete sql3 cn', () => {
        const errors = spark.validate(sql3);
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe(`'aaa' 在此位置无效，期望一个存在的namespace或者一个关键字`);
    });
});
