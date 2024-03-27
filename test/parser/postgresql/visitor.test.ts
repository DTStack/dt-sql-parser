import { PostgreSQL } from 'src/parser/postgresql';
import { AbstractParseTreeVisitor } from 'antlr4ng';
import { PostgreSqlParserVisitor } from 'src/lib/postgresql/PostgreSqlParserVisitor';

describe('MySQL Visitor Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const postgresql = new PostgreSQL();

    const parseTree = postgresql.parse(sql, (error) => {
        console.error('Parse error:', error);
    });

    test('Visitor visitTableName', () => {
        let result = '';
        class MyVisitor
            extends AbstractParseTreeVisitor<any>
            implements PostgreSqlParserVisitor<any>
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
