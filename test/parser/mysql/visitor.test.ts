import MySQL from 'src/parser/mysql';
import { MySqlParserVisitor } from 'src/lib/mysql/MySqlParserVisitor';
import { AbstractParseTreeVisitor } from 'antlr4ng';

describe('MySQL Visitor Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new MySQL();

    const parseTree = parser.parse(sql, (error) => {
        console.error('Parse error:', error);
    });

    test('Visitor visitTableName', () => {
        let result = '';
        class MyVisitor extends AbstractParseTreeVisitor<any> implements MySqlParserVisitor<any> {
            protected defaultResult() {
                return result;
            }

            visitTableName = (ctx): void => {
                result = ctx.getText().toLowerCase();
            };
        }
        const visitor = new MyVisitor();
        visitor.visit(parseTree);

        expect(result).toBe(expectTableName);
    });
});
