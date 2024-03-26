import { ImpalaSQL } from 'src/parser/impala';
import { AbstractParseTreeVisitor } from 'antlr4ng';
import { ImpalaSqlParserVisitor } from 'src/lib/impala/ImpalaSqlParserVisitor';

describe('impala SQL Visitor Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const impala = new ImpalaSQL();

    const parseTree = impala.parse(sql, (error) => {
        console.error('Parse error:', error);
    });

    test('Visitor visitTableNamePath', () => {
        let result = '';
        class MyVisitor
            extends AbstractParseTreeVisitor<any>
            implements ImpalaSqlParserVisitor<any>
        {
            protected defaultResult() {
                return result;
            }
            visitTableNamePath = (ctx): void => {
                result = ctx.getText().toLowerCase();
            };
        }
        const visitor: any = new MyVisitor();
        visitor.visit(parseTree);

        expect(result).toBe(expectTableName);
    });
});
