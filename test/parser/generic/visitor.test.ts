import GenericSQL from '../../../src/parser/generic';
import { SqlParserVisitor } from '../../../src/lib/generic/SqlParserVisitor';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree';

describe('Generic SQL Visitor Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new GenericSQL();

    const parserTree = parser.parse(sql, (error) => {
        console.log('Parse error:', error);
    });

    test('Visitor visitTableName', () => {
        let result = '';
        class MyVisitor extends AbstractParseTreeVisitor<any> implements SqlParserVisitor<any> {
            protected defaultResult() {
                return result;
            }
           
            visitTableName = (ctx): void => {
                result = ctx.text.toLowerCase();
            }
        }
        const visitor = new MyVisitor();
        visitor.visit(parserTree);

        expect(result).toBe(expectTableName);
    });
});
