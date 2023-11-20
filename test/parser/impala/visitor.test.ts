import impalaSQL from '../../../src/parser/impala';
import { ImpalaSqlParserVisitor } from '../../../src/lib/impala/ImpalaSqlParserVisitor';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree';

describe('impala SQL Visitor Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new impalaSQL();

    const parseTree = parser.parse(sql, (error) => {
        console.log('Parse error:', error);
    });

    test('Visitor visitTableName', () => {
        let result = '';
        class MyVisitor
            extends AbstractParseTreeVisitor<any>
            implements ImpalaSqlParserVisitor<any>
        {
            protected defaultResult() {
                return result;
            }
            visitTableName = (ctx): void => {
                result = ctx.text.toLowerCase();
            };
        }
        const visitor: any = new MyVisitor();
        visitor.visit(parseTree);

        expect(result).toBe(expectTableName);
    });
});
