import { PLSQL, AbstractParseTreeVisitor, PlSqlParserVisitor } from '../../filters';

describe('PLSQL Visitor Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new PLSQL();

    const parseTree = parser.parse(sql);

    test('Visitor visitTable_ref_list', () => {
        let result = '';
        class MyVisitor extends AbstractParseTreeVisitor<any> implements PlSqlParserVisitor<any> {
            protected defaultResult() {
                return result;
            }
            visitTable_ref_list = (ctx): void => {
                result = ctx.text.toLowerCase();
            };
        }
        const visitor: any = new MyVisitor();
        visitor.visit(parseTree);

        expect(result).toBe(expectTableName);
    });
});
