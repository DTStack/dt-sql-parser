import SparkSQL from 'src/parser/spark';
import { SparkSqlParserVisitor } from 'src/lib/spark/SparkSqlParserVisitor';
import { AbstractParseTreeVisitor } from 'antlr4ng';

describe('Spark SQL Visitor Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new SparkSQL();

    const parseTree = parser.parse(sql, (error) => {
        console.error('Parse error:', error);
    });

    test('Visitor visitRelationPrimary', () => {
        class MyVisitor
            extends AbstractParseTreeVisitor<any>
            implements SparkSqlParserVisitor<any>
        {
            result: string = '';
            protected defaultResult() {
                return this.result;
            }
            visitRelationPrimary = (ctx): void => {
                this.result = ctx.getText().toLowerCase();
            };
        }
        const visitor = new MyVisitor();
        visitor.visit(parseTree);

        expect(visitor.result).toBe(expectTableName);
    });
});
