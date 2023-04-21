import HiveSQL from '../../../src/parser/hive';

describe('Hive SQL Syntax Tests', () => {
    const parser = new HiveSQL();
    test('Create Table Statement', () => {
        const sql = 'CREATE TABLE person(name STRING,age INT);';
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Create Table Statement', () => {
        const sql = `alter table dm_gis.table_name add if not exists partition (inc_day = '20190601');`;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Wrong Select Statement', () => {
        const sql = 'SELECT add ABC from Where ;';
        const result = parser.validate(sql);
        expect(result.length).toBe(2);
        expect(result[0].message).toBe(`no viable alternative at input 'SELECTaddABCfromWhere'`);
        expect(result[1].message).toBe(`mismatched input 'Where' expecting <EOF>`);
    });
});
