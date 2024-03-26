import { TrinoSQL } from 'src/parser/trino';
import { readSQL } from 'test/helper';

const features = {
    truncateTable: readSQL(__dirname, 'truncate_table.sql'),
};

describe('TrinoSQL Truncate Table Statements Syntax Tests', () => {
    const trino = new TrinoSQL();
    // truncate table statements
    features.truncateTable.forEach((sql) => {
        it(sql, () => {
            expect(trino.validate(sql).length).toBe(0);
        });
    });
});
