import SQLParser, { PlSqlParserVisitor } from '../../../src/parser/plsql';
// todo 校验关键字提取
describe('PLSQL Visitor Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new SQLParser();

    const parserTree = parser.parse(sql);

    test('Visitor visitTable_ref_list', () => {
        let result = '';
        class MyVisitor extends PlSqlParserVisitor {
            visitTable_ref_list(ctx): void {
                result = ctx.getText().toLowerCase();
                super.visitTable_ref_list(ctx);
            }
        }
        const visitor: any = new MyVisitor();
        visitor.visit(parserTree);

        expect(result).toBe(expectTableName);
    });
});
