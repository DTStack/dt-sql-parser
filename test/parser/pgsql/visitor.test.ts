import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { PostgreSQLParserVisitor } from "../../../src/lib/pgsql/PostgreSQLParserVisitor";
import PostgresSQL from "../../../src/parser/pgsql";

describe('Generic SQL Visitor Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new PostgresSQL();

    const parserTree = parser.parse(sql, (error) => {
        console.log('Parse error:', error);
    });

    test('Visitor visitTableName', () => {
        let result = '';
        class MyVisitor extends AbstractParseTreeVisitor<any> implements PostgreSQLParserVisitor<any> {
            protected defaultResult() {
                return result;
            }
            
            visitTable_ref(ctx) {
                result = ctx.text.toLowerCase();
            }
        }
        const visitor: any = new MyVisitor();
        visitor.visit(parserTree);

        expect(result).toBe(expectTableName);
    });
});
