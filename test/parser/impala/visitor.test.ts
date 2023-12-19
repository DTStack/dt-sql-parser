import { ImpalaSQL, ImpalaSqlParserVisitor, AbstractParseTreeVisitor } from '../../filters';

describe('impala SQL Visitor Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new ImpalaSQL();

    const parseTree = parser.parse(sql, (error) => {
        console.log('Parse error:', error);
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
                result = ctx.text.toLowerCase();
            };
        }
        const visitor: any = new MyVisitor();
        visitor.visit(parseTree);

        expect(result).toBe(expectTableName);
    });
});
