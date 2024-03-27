import { TrinoSQL } from 'src/parser/trino';
import { TrinoSqlVisitor } from 'src/lib/trino/TrinoSqlVisitor';

describe('trino SQL Visitor Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const trino = new TrinoSQL();

    const parseTree = trino.parse(sql, (error) => {
        console.error('Parse error:', error);
    });

    test('Visitor visitTableName', () => {
        class MyVisitor extends TrinoSqlVisitor<string> {
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
