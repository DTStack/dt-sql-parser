import { PLSQL } from 'src/parser/plsql';

describe('PLSQL Syntax Tests', () => {
    const plsql = new PLSQL();

    test('Test simple select Statement', () => {
        const sql = 'select id,name from user1;';
        const result = plsql.validate(sql);

        expect(result.length).toBe(0);
    });

    test(`Test select, where, order by`, () => {
        const sql = `
            select eid, emp_last, mgr_id, reportlevel
            from reports_to_101 r, auto a
            where r.c1 = a.c2
            order by reportlevel, eid
        `;
        const result = plsql.validate(sql);
        expect(result.length).toBe(0);
    });
});
