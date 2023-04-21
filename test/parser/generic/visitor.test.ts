import GenericSQL from '../../../src/parser/generic';
import SqlParserVisitor from '../../../src/lib/generic/SqlParserVisitor';

describe('Generic SQL Visitor Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new GenericSQL();

    const parserTree = parser.parse(sql, (error) => {
        console.log('Parse error:', error);
    });

    test('Visitor visitTableName', () => {
        let result = '';
        class MyVisitor extends SqlParserVisitor<any> {
            constructor() {
                super();
            }

            visitTableName = (ctx): void => {
                result = ctx.getText().toLowerCase();
                super.visitTableName?.(ctx);
            }
        }
        const visitor = new MyVisitor();
        visitor.visit(parserTree);

        expect(result).toBe(expectTableName);
    });
});
