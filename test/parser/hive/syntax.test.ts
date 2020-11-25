import SQLParser from '../../../src/parser/hive';

describe('Hive SQL Syntax Tests', () => {
    const parser = new SQLParser();
    test('Create Table Statement', () => {
        const sql = 'CREATE TABLE person(name STRING,age INT);';
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Wrong Select Statement', () => {
        const sql = 'SELECT add ABC from Where ;'
        const result = parser.validate(sql);
        console.log(result)
        expect(result.length).toBe(2);
        expect(result[0].message).toBe(`no viable alternative at input 'SELECTaddABCfromWhere'`)
        expect(result[1].message).toBe(`mismatched input 'Where' expecting <EOF>`)
    });
});