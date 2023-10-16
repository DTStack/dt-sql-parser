import { ParseTreeListener } from 'antlr4ts/tree';
import { SparkSqlParserListener } from '../../../src/lib/spark/SparkSqlParserListener';
import SparkSQL from '../../../src/parser/spark';

describe('Spark SQL Listener Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new SparkSQL();

    const parseTree = parser.parse(sql);

    test('Listener exitRelationPrimary', () => {
        let result = '';
        class MyListener implements SparkSqlParserListener {
            exitRelationPrimary = (ctx): void => {
                result = ctx.text.toLowerCase();
            };
        }
        const listenTableName = new MyListener();

        parser.listen(listenTableName as ParseTreeListener, parseTree);
        expect(result).toBe(expectTableName);
    });
});
