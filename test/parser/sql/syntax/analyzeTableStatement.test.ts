import { SQL } from 'src/parser/sql';
import { readSQL } from 'test/helper';

const sql = new SQL();

const features = {
    analyzeTable: readSQL(__dirname, 'analyzeTable.sql'),
};

describe('SQL Analyze Table Syntax Tests', () => {
    features.analyzeTable.forEach((itemSql) => {
        it(itemSql, () => {
            expect(sql.validate(itemSql).length).toBe(0);
        });
    });
});
