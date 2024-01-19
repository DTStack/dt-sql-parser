import TrinoSQL from 'src/parser/trinosql';
import { TrinoSqlVisitor } from 'src/lib/trinosql/TrinoSqlVisitor';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

describe('trino SQL Visitor Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new TrinoSQL();

    const parseTree = parser.parse(sql, (error) => {
        console.log('Parse error:', error);
    });

    test('Visitor visitTableName', () => {
        let result = '';
        class MyVisitor extends AbstractParseTreeVisitor<any> implements TrinoSqlVisitor<any> {
            protected defaultResult() {
                return result;
            }
            visitTableName = (ctx): void => {
                result = ctx.text.toLowerCase();
            };
        }
        const visitor: any = new MyVisitor();
        visitor.visit(parseTree);

        expect(result).toBe(expectTableName);
    });
});
