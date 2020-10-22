import SQLParser from '../../../src/parser/flinksql';

describe('FlinkSQL Syntax Tests', () => {
    const parser = new SQLParser();

    test('Test simple CreateTable Statement', () => {
        const sql = `
            CREATE TABLE Orders (
                user BIGINT,
                product STRING
            ) WITH ( 
                "connector" = "kafka",
                "scan.startup.mode" = "earliest-offset"
            );
        `;
        const result = parser.validate(sql);

        expect(result.length).toBe(0);
    });
});
