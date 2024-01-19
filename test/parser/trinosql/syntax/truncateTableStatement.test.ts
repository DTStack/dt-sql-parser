import TrinoSQL from 'src/parser/trinosql';
import { readSQL } from 'test/helper';

const features = {
    truncateTable: readSQL(__dirname, 'truncate_table.sql'),
};

describe('TrinoSQL Truncate Table Statements Syntax Tests', () => {
    const parser = new TrinoSQL();
    // truncate table statements
    features.truncateTable.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
