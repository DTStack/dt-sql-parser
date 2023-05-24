import trinoSQL from '../../../src/parser/trinosql';
import trinoSqlParserVisitor from '../../../src/lib/trinosql/trinoSqlParserVisitor';

describe('trino SQL Visitor Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new trinoSQL();

    const parserTree = parser.parse(sql, (error) => {
        console.log('Parse error:', error);
    });

    test('Visitor visitTableName', () => {
        let result = '';
        class MyVisitor extends trinoSqlParserVisitor<any>{ 
            visitTableExpression = (ctx): void => {
                result = ctx.getText().toLowerCase();
            }
        }
        const visitor: any = new MyVisitor();
        visitor.visit(parserTree);

        expect(result).toBe(expectTableName);
    });
});
