import PlSqlParserVisitor from '../../../src/lib/plsql/PlSqlParserVisitor';
import PLSQL from '../../../src/parser/plsql';

describe('PLSQL Visitor Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new PLSQL();

    const parserTree = parser.parse(sql);

    test('Visitor visitTable_ref_list', () => {
        let result = '';
        class MyVisitor extends PlSqlParserVisitor<any> {
            // eslint-disable-next-line camelcase
            visitTable_ref_list = (ctx): void => {
                result = ctx.getText().toLowerCase();
                super.visitTable_ref_list?.(ctx);
            }
        }
        const visitor: any = new MyVisitor();
        visitor.visit(parserTree);

        expect(result).toBe(expectTableName);
    });
});
