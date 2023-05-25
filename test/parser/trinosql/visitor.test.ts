import trinoSQL from '../../../src/parser/trinosql';
import TrinoSqlParserVisitor from '../../../src/lib/trinosql/TrinoSqlVisitor';

describe('trino SQL Visitor Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new trinoSQL();

    const parserTree = parser.parse(sql, (error) => {
        console.log('Parse error:', error);
    });

    test('Visitor visitTableName', () => {
        let result = '';
        class MyVisitor extends TrinoSqlParserVisitor<any>{ 
            visitTableName = (ctx): void => {
                result = ctx.getText().toLowerCase();
            }
        }
        const visitor: any = new MyVisitor();
        visitor.visit(parserTree);

        expect(result).toBe(expectTableName);
    });
});
