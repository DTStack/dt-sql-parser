import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SparkSqlVisitor } from '../../../src/lib/spark/SparkSqlVisitor';
import SparkSQL from '../../../src/parser/spark';

describe('Spark SQL Visitor Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new SparkSQL();

    const parserTree = parser.parse(sql, (error) => {
        console.log('Parse error:', error);
    });

    test('Visitor visitTableName', () => {
        let result = '';
        class MyVisitor extends AbstractParseTreeVisitor<any> implements SparkSqlVisitor<any> {
            protected defaultResult() {
                return result;
            }
            visitTableName = (ctx): void => {
                result = ctx.text.toLowerCase();
            }
        }
        const visitor: any = new MyVisitor();
        visitor.visit(parserTree);

        expect(result).toBe(expectTableName);
    });
});
