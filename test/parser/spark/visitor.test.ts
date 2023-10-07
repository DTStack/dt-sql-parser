import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SparkSqlParserVisitor } from '../../../src/lib/spark/SparkSqlParserVisitor';
import SparkSQL from '../../../src/parser/spark';

describe('Spark SQL Visitor Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new SparkSQL();

    const parserTree = parser.parse(sql, (error) => {
        console.log('Parse error:', error);
    });

    test('Visitor visitRelationPrimary', () => {
        let result = '';
        class MyVisitor extends AbstractParseTreeVisitor<any> implements SparkSqlParserVisitor<any> {
            protected defaultResult() {
                return result;
            }
            visitRelationPrimary = (ctx): void => {
                result = ctx.text.toLowerCase();
            }
        }
        const visitor: any = new MyVisitor();
        visitor.visit(parserTree);

        expect(result).toBe(expectTableName);
    });
});
