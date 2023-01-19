import { FlinkSQL } from '../../../../src';

describe('FlinkSQL Create Table Syntax Tests', () => {
    const parser = new FlinkSQL();
    // insert statements
    test('Test one simple Insert Statement', () => {
        const sql = `
            INSERT INTO country_page_view
            SELECT user, cnt FROM page_view_source;
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Test Insert Overwrite Statement', () => {
        const sql = `
            INSERT OVERWRITE country_page_view PARTITION (date='2019-8-30', country='China')
            SELECT user, cnt FROM page_view_source;
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Test execute Statement', () => {
        const sql = `
            EXECUTE INSERT INTO country_page_view PARTITION (date='2019-8-30', country='China')
            SELECT user, cnt FROM page_view_source;
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Test Partition Clause Statement', () => {
        const sql = `
            INSERT INTO country_page_view PARTITION (date='2019-8-30', country='China')
            SELECT user, cnt FROM page_view_source;
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Test Column List Statement', () => {
        const sql = `
            INSERT INTO emps PARTITION (x='ab', y='bc') (x, y) SELECT * FROM emps;
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Test Insert Values Statement', () => {
        const sql = `
            INSERT INTO students
            VALUES ('fred flintstone', 35, 1.28), ('barney rubble', 32, 2.32);
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
    test('Test insert into multiple tables Statement for 1.14', () => {
        const sql = `
            BEGIN STATEMENT SET;

            INSERT INTO pageviews
            SELECT page_id, count(1)
            FROM pageviews
            GROUP BY page_id;
            
            INSERT INTO uniqueview
            SELECT page_id, count(distinct user_id)
            FROM pageviews
            GROUP BY page_id;
            
            END;
        `;
        const result = parser.validate(sql);
        console.log(result);
        expect(result.length).toBe(0);
    });
    test('Test insert into multiple tables Statement for 1.16', () => {
        const sql = `
            EXECUTE STATEMENT SET
            BEGIN
            INSERT INTO students VALUES ('fred flintstone', 35, 1.28), ('barney rubble', 32, 2.32);
            INSERT INTO students VALUES ('fred flintstone', 35, 1.28), ('barney rubble', 32, 2.32);
            END;
        `;
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
});
