import FlinkSQL from '../../../src/parser/flinksql';
import FlinkSqlParserVisitor from '../../../src/lib/flinksql/FlinkSqlParserVisitor';

describe('Flink SQL Visitor Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new FlinkSQL();

    const parserTree = parser.parse(sql, (error) => {
        console.log('Parse error:', error);
    });

    test('Visitor visitTableName', () => {
        let result = '';
        class MyVisitor extends FlinkSqlParserVisitor<any>{ 
            visitTableExpression = (ctx): void => {
                result = ctx.getText().toLowerCase();
            }
        }
        const visitor: any = new MyVisitor();
        visitor.visit(parserTree);

        expect(result).toBe(expectTableName);
    });
});
