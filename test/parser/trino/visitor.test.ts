import TrinoSQL from 'src/parser/trino';
import { TrinoSqlVisitor } from 'src/lib/trino/TrinoSqlVisitor';
import { AbstractParseTreeVisitor } from 'antlr4ng';

describe('trino SQL Visitor Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new TrinoSQL();

    const parseTree = parser.parse(sql, (error) => {
        console.error('Parse error:', error);
    });

    test('Visitor visitTableName', () => {
        let result = '';
        class MyVisitor extends AbstractParseTreeVisitor<any> implements TrinoSqlVisitor<any> {
            protected defaultResult() {
                return result;
            }
            visitTableName = (ctx): void => {
                result = ctx.getText().toLowerCase();
            };
        }
        const visitor: any = new MyVisitor();
        visitor.visit(parseTree);

        expect(result).toBe(expectTableName);
    });
});
