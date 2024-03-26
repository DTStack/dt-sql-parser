import { PLSQL } from 'src/parser/plsql';
import { AbstractParseTreeVisitor } from 'antlr4ng';
import { PlSqlParserVisitor } from 'src/lib/plsql/PlSqlParserVisitor';

describe('PLSQL Visitor Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const plsql = new PLSQL();

    const parseTree = plsql.parse(sql);

    test('Visitor visitTable_ref_list', () => {
        let result = '';
        class MyVisitor extends AbstractParseTreeVisitor<any> implements PlSqlParserVisitor<any> {
            protected defaultResult() {
                return result;
            }
            visitTable_ref_list = (ctx): void => {
                result = ctx.getText().toLowerCase();
            };
        }
        const visitor: any = new MyVisitor();
        visitor.visit(parseTree);

        expect(result).toBe(expectTableName);
    });
});
