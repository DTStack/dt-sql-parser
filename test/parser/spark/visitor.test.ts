import { SparkSQL } from 'src/parser/spark';
import { SparkSqlParserVisitor } from 'src/lib/spark/SparkSqlParserVisitor';

describe('Spark SQL Visitor Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const spark = new SparkSQL();

    const parseTree = spark.parse(sql, (error) => {
        console.error('Parse error:', error);
    });

    test('Visitor visitTableName', () => {
        class MyVisitor extends SparkSqlParserVisitor<string> {
            defaultResult(): string {
                return '';
            }
            aggregateResult(aggregate: string, nextResult: string): string {
                return aggregate + nextResult;
            }
            visitProgram = (ctx) => {
                return this.visitChildren(ctx);
            };
            visitTableName = (ctx) => {
                return ctx.getText().toLowerCase();
            };
        }
        const visitor = new MyVisitor();
        const result = visitor.visit(parseTree);

        expect(result).toBe(expectTableName);
    });
});
