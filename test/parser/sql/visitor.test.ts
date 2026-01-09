import { Sql } from 'src/parser/sql';
import { SqlParserVisitor } from 'src/lib/sql/SqlParserVisitor';

describe('Sql Visitor Tests', () => {
    const expectTableName = 'user1';
    const sqlText = `select id,name,sex from ${expectTableName};`;
    const sql = new Sql();

    const parseTree = sql.parse(sqlText, (error) => {
        console.error('Parse error:', error);
    });

    test('Visitor visitTableName', () => {
        class MyVisitor extends SqlParserVisitor<string> {
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
