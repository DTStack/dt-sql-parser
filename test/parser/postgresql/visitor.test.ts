import { PostgreSQL } from 'src/parser/postgresql';
import { PostgreSqlParserVisitor } from 'src/lib/postgresql/PostgreSqlParserVisitor';

describe('MySQL Visitor Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const postgresql = new PostgreSQL();

    const parseTree = postgresql.parse(sql, (error) => {
        console.error('Parse error:', error);
    });

    test('Visitor visitTableName', () => {
        class MyVisitor extends PostgreSqlParserVisitor<string> {
            defaultResult(): string {
                return '';
            }
            aggregateResult(aggregate: string, nextResult: string): string {
                return aggregate + nextResult;
            }
            visitProgram = (ctx) => {
                return this.visitChildren(ctx);
            };
            visitTable_ref = (ctx) => {
                return ctx.getText().toLowerCase();
            };
        }
        const visitor = new MyVisitor();
        const result = visitor.visit(parseTree);

        expect(result).toBe(expectTableName);
    });
});
