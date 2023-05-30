import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { PlSqlParserVisitor } from '../../../src/lib/plsql/PlSqlParserVisitor';
import PLSQL from '../../../src/parser/plsql';

describe('PLSQL Visitor Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new PLSQL();

    const parserTree = parser.parse(sql);

    test('Visitor visitTable_ref_list', () => {
        let result = '';
        class MyVisitor extends AbstractParseTreeVisitor<any> implements PlSqlParserVisitor<any> {
            protected defaultResult() {
                return result;
            }
            // eslint-disable-next-line camelcase
            visitTable_ref_list = (ctx): void => {
                result = ctx.text.toLowerCase();
            }
        }
        const visitor: any = new MyVisitor();
        visitor.visit(parserTree);

        expect(result).toBe(expectTableName);
    });
});
