import { PostgresSQL, PostgreSQLParserVisitor } from '../../../src';

describe('Generic SQL Visitor Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new PostgresSQL();

    const parserTree = parser.parse(sql, (error) => {
        console.log('Parse error:', error);
    });

    test('Visitor visitTableName', () => {
        let result = '';
        class MyVisitor extends PostgreSQLParserVisitor {
            // eslint-disable-next-line camelcase
            visitTable_ref(ctx): void {
                result = ctx.getText().toLowerCase();
                super.visitTable_ref(ctx);
            }
        }
        const visitor: any = new MyVisitor();
        visitor.visit(parserTree);

        expect(result).toBe(expectTableName);
    });
});
