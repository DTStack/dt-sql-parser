import { MySQL } from 'src/parser/mysql';
import { MySqlParserVisitor } from 'src/lib/mysql/MySqlParserVisitor';

describe('MySQL Visitor Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const mysql = new MySQL();

    const parseTree = mysql.parse(sql, (error) => {
        console.error('Parse error:', error);
    });

    test('Visitor visitTableName', () => {
        class MyVisitor extends MySqlParserVisitor<string> {
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
