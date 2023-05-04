import { lexer, splitSql, cleanSql } from '../../src/utils';
import { TokenType } from '../../src/utils/token';

describe('utils', () => {
    test('split single sql', () => {
        const sql = 'select id,name from user';
        const result = splitSql(sql);
        expect(result.length).toEqual(1);
    });

    test('split multiple sql', () => {
        const sql = `-- a ;
        select * from a;
        /* 
            xxx
            xxx
        */
        select user from b`;
        const result = splitSql(sql);
        expect(result.length).toEqual(2);
    });

    test('split special quotation sql', () => {
        const sql = `select regexp_replace('a', 'bc', 'xfe'feefe', '233'); 
            select regexp_replace('abc', "fe", '233');`;
        const result = splitSql(sql);
        expect(result.length).toEqual(2);
    });

    // test nested bracket
    test('split nested bracket sql', () => {
        const sql = `WITH cte_sales_amounts (staff, sales, year) 
        AS 
        (
            SELECT    
                first_name + ' ' + last_name, 
                SUM(quantity * list_price * (1 - discount)),
                YEAR(order_date)
            FROM    
                sales.orders o
            INNER JOIN sales.order_items i ON i.order_id = o.order_id
            INNER JOIN sales.staffs s ON s.staff_id = o.staff_id
        )
        SELECT staff, sales
        FROM cte_sales_amounts
        WHERE year = 2018;
        SELECT * FROM table;`;
        const result = splitSql(sql);
        expect(result.length).toEqual(2);
    });

    test('lexer', () => {
        const sql = `-- a ;
        select * from a;
        /* 
            xxx
            xxx
        */
        select user from b;`;
        const result = lexer(sql);
        expect(result.length).toEqual(4);
    });
    test('lexer for comments', () => {
        const sql = `select * from a;--comments`;
        const expected = `--comments`;
        const result = lexer(sql);
        const comments = result.find((token) =>
            token.type === TokenType.Comment,
        );
        expect(comments?.value).toEqual(expected);
    });
    test('cleanSql', () => {
        const sql = `-- a ;
        select * from a;
        /* 
            xxx
            xxx
        */
        select user from b`;
        const result = cleanSql(sql);
        expect(result.indexOf('xxx')).toEqual(-1);
    });

    test('clean SQL white spaces', () => {
        const sql = `   
        select * from a;    `;
        const expected = 'select * from a;';
        const result = cleanSql(sql);
        expect(result).toEqual(expected);
    });
});
