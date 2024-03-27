import { ImpalaSQL } from 'src/parser/impala';
import { ImpalaSqlParserVisitor } from 'src/lib/impala/ImpalaSqlParserVisitor';

describe('impala SQL Visitor Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const impala = new ImpalaSQL();

    const parseTree = impala.parse(sql, (error) => {
        console.error('Parse error:', error);
    });

    test('Visitor visitTableNamePath', () => {
        class MyVisitor extends ImpalaSqlParserVisitor<string> {
            defaultResult(): string {
                return '';
            }
            aggregateResult(aggregate: string, nextResult: string): string {
                return aggregate + nextResult;
            }
            visitProgram = (ctx) => {
                return this.visitChildren(ctx);
            };
            visitTableNamePath = (ctx) => {
                return ctx.getText().toLowerCase();
            };
        }
        const visitor = new MyVisitor();
        const result = visitor.visit(parseTree);

        expect(result).toBe(expectTableName);
    });
});
