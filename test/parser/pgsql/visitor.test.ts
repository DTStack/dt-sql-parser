import PostgresSQL from 'src/parser/pgsql';
import { AbstractParseTreeVisitor } from 'antlr4ng';
import { PostgreSQLParserVisitor } from 'src/lib/pgsql/PostgreSQLParserVisitor';

describe('MySQL Visitor Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new PostgresSQL();

    const parseTree = parser.parse(sql, (error) => {
        console.error('Parse error:', error);
    });

    test('Visitor visitTableName', () => {
        let result = '';
        class MyVisitor
            extends AbstractParseTreeVisitor<any>
            implements PostgreSQLParserVisitor<any>
        {
            protected defaultResult() {
                return result;
            }

            visitTable_ref(ctx) {
                result = ctx.getText().toLowerCase();
            }
        }
        const visitor: any = new MyVisitor();
        visitor.visit(parseTree);

        expect(result).toBe(expectTableName);
    });
});
